# Building UIs With TinyBase And SolidJS

This is a local, synthetic guide for this repo. It was generated from the scraped TinyBase React and Svelte UI guides and transfers their useful ideas into SolidJS patterns.

TinyBase's scraped UI guides cover framework packages such as `tinybase/ui-react`, `tinybase/ui-react-dom`, `tinybase/ui-svelte`, and `tinybase/ui-svelte-dom`. The scrape does **not** show a `tinybase/ui-solid` package. In Solid, use TinyBase's core `tinybase` package directly and bridge it to Solid's reactive primitives with `createSignal`, `createEffect`, `onCleanup`, `createContext`, and `<For>`.

## Useful ideas transferred from React and Svelte

| TinyBase UI guide idea | SolidJS equivalent |
| --- | --- |
| React hooks and Svelte reactive functions read TinyBase data and register listeners automatically. | Create Solid signals that initialize from `store.get...()` and update from `store.add...Listener()`. |
| React/Svelte cleanup listeners when components unmount. | Call `store.delListener(listenerId)` in `onCleanup`. |
| Svelte reactive functions accept changing parameters. | Accept Solid accessors for `tableId`, `rowId`, and `cellId`, then register listeners inside `createEffect`. |
| React state hooks and Svelte writable `current` support read/write binding. | Return `[valueAccessor, setter]` pairs where the setter writes to TinyBase. |
| React/Svelte view components compose Store hierarchy into UI. | Write small Solid components such as `CellView`, `RowView`, and `TableView` using `<For>`. |
| React/Svelte Providers avoid prop drilling and can expose multiple stores by id. | Use Solid context, optionally with `store` and `storesById`. |
| DOM table helper packages are intentionally plain and browser-focused. | In Solid, build first-class app components directly; do not try to emulate `ui-react-dom`/`ui-svelte-dom` unless you need a debug table. |

## Basic reactive cell helper

Use a listener-backed signal for the smallest useful bridge between TinyBase and Solid.

```tsx
import {createEffect, createSignal, onCleanup, type Accessor} from 'solid-js';
import type {Store} from 'tinybase';

type MaybeAccessor<T> = T | Accessor<T>;

const read = <T,>(value: MaybeAccessor<T>): T =>
  typeof value == 'function' ? (value as Accessor<T>)() : value;

export const createTinyCell = <T,>(
  store: Store,
  tableId: MaybeAccessor<string>,
  rowId: MaybeAccessor<string>,
  cellId: MaybeAccessor<string>,
) => {
  const [cell, setCell] = createSignal<T | undefined>();

  createEffect(() => {
    const table = read(tableId);
    const row = read(rowId);
    const cellName = read(cellId);

    setCell(() => store.getCell(table, row, cellName) as T | undefined);

    const listenerId = store.addCellListener(
      table,
      row,
      cellName,
      (_store, _tableId, _rowId, _cellId, newCell) => {
        setCell(() => newCell as T | undefined);
      },
    );

    onCleanup(() => store.delListener(listenerId));
  });

  const setTinyCell = (next: T) => {
    store.setCell(read(tableId), read(rowId), read(cellId), next as any);
  };

  return [cell, setTinyCell] as const;
};
```

Example usage:

```tsx
import {createStore} from 'tinybase';

const tinyStore = createStore().setCell('pets', 'fido', 'color', 'brown');

const PetColor = () => {
  const [color, setColor] = createTinyCell<string>(
    tinyStore,
    'pets',
    'fido',
    'color',
  );

  return (
    <label>
      Color
      <input value={color() ?? ''} onInput={(event) => setColor(event.currentTarget.value)} />
      <span>{color()}</span>
    </label>
  );
};
```

This mirrors React's `useCellState` and Svelte's writable `getCell(...).current`: the UI reads a reactive value and writes through a setter that updates the TinyBase Store.

## Dynamic ids: Solid accessors replace Svelte `MaybeGetter`

The Svelte guide's most transferable insight is that parameters can be reactive. In Solid, pass accessors:

```tsx
const PetColor = (props: {rowId: string; store: Store}) => {
  const [color] = createTinyCell<string>(
    props.store,
    'pets',
    () => props.rowId,
    'color',
  );

  return <span>{color()}</span>;
};
```

Because `createTinyCell` registers its listener inside `createEffect`, changing `props.rowId` disposes the old listener and registers a new one.

## Row and table helpers

React and Svelte provide `RowView`, `TableView`, and related components. In Solid, prefer small app-owned components so the markup matches this product.

```tsx
import {For, createEffect, createSignal, onCleanup} from 'solid-js';
import type {Store} from 'tinybase';

export const createTinyRowIds = (store: Store, tableId: MaybeAccessor<string>) => {
  const [rowIds, setRowIds] = createSignal<string[]>([]);

  createEffect(() => {
    const table = read(tableId);
    setRowIds(store.getRowIds(table));

    const listenerId = store.addRowIdsListener(table, () => {
      setRowIds(store.getRowIds(table));
    });

    onCleanup(() => store.delListener(listenerId));
  });

  return rowIds;
};

const CellView = (props: {
  store: Store;
  tableId: string;
  rowId: string;
  cellId: string;
}) => {
  const [cell] = createTinyCell(
    props.store,
    () => props.tableId,
    () => props.rowId,
    () => props.cellId,
  );
  return <>{cell()}</>;
};

const PetsTable = (props: {store: Store}) => {
  const rowIds = createTinyRowIds(props.store, 'pets');

  return (
    <table>
      <thead>
        <tr>
          <th>Pet</th>
          <th>Species</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <For each={rowIds()}>
          {(rowId) => (
            <tr>
              <th>{rowId}</th>
              <td><CellView store={props.store} tableId="pets" rowId={rowId} cellId="species" /></td>
              <td><CellView store={props.store} tableId="pets" rowId={rowId} cellId="color" /></td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
};
```

The React/Svelte guides mention default renderings such as concatenated cell values and `debugIds`. Those are useful for quick inspection, but in Solid app code it is usually clearer to render explicit table columns or explicit debug JSON.

## Context instead of prop drilling

Use Solid context to avoid passing the same Store through every component. This maps to TinyBase's React/Svelte `Provider` pattern.

```tsx
import {createContext, useContext, type JSX} from 'solid-js';
import type {Store} from 'tinybase';

type TinyBaseContextValue = {
  store?: Store;
  storesById?: Record<string, Store>;
};

const TinyBaseContext = createContext<TinyBaseContextValue>({});

export const TinyBaseProvider = (props: TinyBaseContextValue & {children: JSX.Element}) => {
  const parent = useContext(TinyBaseContext);

  const value: TinyBaseContextValue = {
    get store() {
      return props.store ?? parent.store;
    },
    get storesById() {
      return {...(parent.storesById ?? {}), ...(props.storesById ?? {})};
    },
  };

  return (
    <TinyBaseContext.Provider value={value}>
      {props.children}
    </TinyBaseContext.Provider>
  );
};

export const useTinyStore = (id?: string): Store => {
  const context = useContext(TinyBaseContext);
  const store = id == null ? context.store : context.storesById?.[id];

  if (store == null) {
    throw new Error(id == null ? 'Missing TinyBase store' : `Missing TinyBase store: ${id}`);
  }

  return store;
};
```

Usage:

```tsx
const App = () => {
  const store = createStore().setTables({
    pets: {fido: {species: 'dog', color: 'brown'}},
  });

  return (
    <TinyBaseProvider store={store}>
      <PetPane />
    </TinyBaseProvider>
  );
};

const PetPane = () => {
  const store = useTinyStore();
  const [species] = createTinyCell<string>(store, 'pets', 'fido', 'species');
  const [color] = createTinyCell<string>(store, 'pets', 'fido', 'color');

  return <span>{species()} ({color()})</span>;
};
```

For multiple Stores, pass `storesById={{pet: petStore, planet: planetStore}}` and call `useTinyStore('pet')`.

## Side-effect listeners

The Svelte guide distinguishes reactive reads from listener functions. Keep that distinction in Solid:

- Use signal helpers for rendering.
- Use direct TinyBase listeners for logging, analytics, synchronization, validation, or other effects.
- Always unregister listeners with `onCleanup`.
- Do not mutate the Store inside a TinyBase listener unless you intentionally register it as a mutator listener where TinyBase supports that flag.

```tsx
import {onCleanup} from 'solid-js';

const LogPetColorChanges = (props: {store: Store}) => {
  const listenerId = props.store.addCellListener(
    'pets',
    null,
    'color',
    (_store, _tableId, rowId, _cellId, newColor) => {
      console.info(`${rowId} changed color to ${newColor}`);
    },
  );

  onCleanup(() => props.store.delListener(listenerId));

  return null;
};
```

## DOM helper modules: what not to transfer

`ui-react-dom` and `ui-svelte-dom` mostly provide generic HTML table components and editable debug controls. Since there is no equivalent scraped `ui-solid-dom` package, do not depend on those module names in Solid code.

Transfer the concept, not the API:

- render values/tables/sorted tables with Solid `<For>`;
- build editable cells with normal `<input>` or project form components;
- style with the app's design system/Tailwind classes;
- add a small local debug component if needed instead of pulling React/Svelte inspectors into the Solid app.

## Practical recommendation for this repo

Keep a small `tinybase-solid` adapter module near app code rather than sprinkling raw listeners across components. A good starting API is:

```ts
createTinyCell(store, tableId, rowId, cellId)          // [accessor, setter]
createTinyValue(store, valueId)                       // [accessor, setter]
createTinyRow(store, tableId, rowId)                  // accessor
createTinyRowIds(store, tableId)                      // accessor
createTinySortedRowIds(store, tableId, cellId, desc?) // accessor
TinyBaseProvider / useTinyStore                       // context
```

That gives Solid the same ergonomic benefits that TinyBase's React and Svelte packages provide, while keeping the implementation native to Solid's fine-grained reactivity.
