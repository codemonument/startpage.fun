[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
  1. No results found


  * [Guides](https://tinybase.org/guides/)
  * [Demos](https://tinybase.org/demos/)
  * [API](https://tinybase.org/api/)
  * [GitHub](https://github.com/tinyplex/tinybase)


  * [TinyBase](https://tinybase.org/)
    * [Guides](https://tinybase.org/guides/)
      * [The Basics](https://tinybase.org/guides/the-basics/)
      * [Building UIs With React](https://tinybase.org/guides/building-uis-with-react/)
        * [Getting Started With ui-react](https://tinybase.org/guides/building-uis-with-react/getting-started-with-ui-react/)
        * [Using React Hooks](https://tinybase.org/guides/building-uis-with-react/using-react-hooks/)
        * [Using React Components](https://tinybase.org/guides/building-uis-with-react/using-react-components/)
        * [Using React DOM Components](https://tinybase.org/guides/building-uis-with-react/using-react-dom-components/)
        * [Using Context](https://tinybase.org/guides/building-uis-with-react/using-context/)
      * [Building UIs With Svelte](https://tinybase.org/guides/building-uis-with-svelte/)
      * [Schemas](https://tinybase.org/guides/schemas/)
      * [Using Middleware](https://tinybase.org/guides/using-middleware/)
      * [Persistence](https://tinybase.org/guides/persistence/)
      * [Synchronization](https://tinybase.org/guides/synchronization/)
      * [Integrations](https://tinybase.org/guides/integrations/)
      * [Using Metrics](https://tinybase.org/guides/using-metrics/)
      * [Using Indexes](https://tinybase.org/guides/using-indexes/)
      * [Using Relationships](https://tinybase.org/guides/using-relationships/)
      * [Using Checkpoints](https://tinybase.org/guides/using-checkpoints/)
      * [Using Queries](https://tinybase.org/guides/using-queries/)
      * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)
      * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [Building UIs With React](https://tinybase.org/guides/building-uis-with-react/)
  * [Using React Hooks](https://tinybase.org/guides/building-uis-with-react/using-react-hooks/)


# Using React Hooks
There are reactive hooks in the [`ui-react`](https://tinybase.org/api/ui-react/) module for accessing every part of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), as well as more advanced things like the [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) and [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) objects.
By reactive hooks, we mean that the hook not only fetches part of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), but that it also registers a listener that will then cause a component to re-render if the underlying value changes. Therefore, it's easy to describe a user interface in terms of raw data in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), and know that it will stay updated when the data changes.
To start with a simple example, we use the [`useCell`](https://tinybase.org/api/the-essentials/using-react/usecell/) hook in a component called `App` to get the value of a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and render it in a `<span>` element. When the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) is updated, so is the HTML.

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createStore} from 'tinybase';
import {useCell} from 'tinybase/ui-react';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
const App = () => <span>{useCell[](https://tinybase.org/api/the-essentials/using-react/usecell/)('pets', 'fido', 'color', store)}</span>;

const app = document.createElement('div');
const root = createRoot(app);
root.render(<App />);
console.log(app.innerHTML);
// -> '<span>brown</span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'walnut');
console.log(app.innerHTML);
// -> '<span>walnut</span>'

```

There are hooks that correspond to each of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) getter methods:
  * The [`useValues`](https://tinybase.org/api/ui-react/functions/store-hooks/usevalues/) hook is the reactive equivalent of the [`getValues`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/) method.
  * The [`useValueIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usevalueids/) hook is the reactive equivalent of the [`getValueIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalueids/) method.
  * The [`useValue`](https://tinybase.org/api/the-essentials/using-react/usevalue/) hook is the reactive equivalent of the [`getValue`](https://tinybase.org/api/the-essentials/getting-data/getvalue/) method.


And for tabular data:
  * The [`useTables`](https://tinybase.org/api/ui-react/functions/store-hooks/usetables/) hook is the reactive equivalent of the [`getTables`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/) method.
  * The [`useTableIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usetableids/) hook is the reactive equivalent of the [`getTableIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettableids/) method.
  * The [`useTable`](https://tinybase.org/api/ui-react/functions/store-hooks/usetable/) hook is the reactive equivalent of the [`getTable`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/) method.
  * The [`useTableCellIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usetablecellids/) hook is the reactive equivalent of the [`getTableCellIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettablecellids/) method.
  * The [`useRowIds`](https://tinybase.org/api/ui-react/functions/store-hooks/userowids/) hook is the reactive equivalent of the [`getRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getrowids/) method.
  * The [`useSortedRowIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usesortedrowids/) hook is the reactive equivalent of the [`getSortedRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getsortedrowids/) method.
  * The [`useRow`](https://tinybase.org/api/the-essentials/using-react/userow/) hook is the reactive equivalent of the [`getRow`](https://tinybase.org/api/the-essentials/getting-data/getrow/) method.
  * The [`useCellIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usecellids/) hook is the reactive equivalent of the [`getCellIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcellids/) method.
  * The [`useCell`](https://tinybase.org/api/the-essentials/using-react/usecell/) hook is the reactive equivalent of the [`getCell`](https://tinybase.org/api/the-essentials/getting-data/getcell/) method.


They have the same return types. For example, the [`useTable`](https://tinybase.org/api/ui-react/functions/store-hooks/usetable/) hook returns an object:

```
import {useTable} from 'tinybase/ui-react';

const App2 = () => <span>{JSON.stringify(useTable[](https://tinybase.org/api/ui-react/functions/store-hooks/usetable/)('pets', store))}</span>;
root.render(<App2 />);
console.log(app.innerHTML);
// -> '<span>{"fido":{"color":"walnut"}}</span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
console.log(app.innerHTML);
// -> '<span>{"fido":{"color":"walnut","species":"dog"}}</span>'

```

When the component is unmounted, the listener will be automatically removed. This means you can use these hooks without having to worry too much about the lifecycle of how your component interacts with the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
## Using Hooks To Set Data
In an interactive application, you don't just want to read data. You also want to be able to set it in response to user's actions. For this purpose, there is a group of hooks that return callbacks for setting data based on events.
Let's start with a simple example, the [`useSetCellCallback`](https://tinybase.org/api/ui-react/functions/store-hooks/usesetcellcallback/) hook. The [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) to be updated needs to be identified by the [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), [`Row`](https://tinybase.org/api/store/type-aliases/store/row/), and [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) parameters. The fourth parameter to the hook is a parameterized callback (that will be memoized based on the dependencies in the fifth parameter). The responsibility of that function is to return the value that will be used to update the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/).
It's probably easier to understand with an example:

```
import {useSetCellCallback} from 'tinybase/ui-react';

const App3 = () => {
  const handleClick = useSetCellCallback[](https://tinybase.org/api/ui-react/functions/store-hooks/usesetcellcallback/)(
    'pets',
    'fido',
    'sold',
    (event) => event.bubbles,
    [],
    store,
  );
  return (
    <span>
      Sold: {useCell[](https://tinybase.org/api/the-essentials/using-react/usecell/)('pets', 'fido', 'sold', store) ? 'yes' : 'no'}
      <br />
      <button onClick={handleClick}>Sell</button>
    </span>
  );
};
root.render(<App3 />);
console.log(app.innerHTML);
// -> '<span>Sold: no<br><button>Sell</button></span>'

const button = app.querySelector('button');
// User clicks the <button> element:
// -> button MouseEvent('click', {bubbles: true})

console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {color: 'walnut', species: 'dog', sold: true}}}
console.log(app.innerHTML);
// -> '<span>Sold: yes<br><button>Sell</button></span>'

```

In the real-world, a more valid case for using the event parameter might be to handle the content of a text input to write into the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). See the Todo demo for a working example of doing that with the [`useAddRowCallback`](https://tinybase.org/api/ui-react/functions/store-hooks/useaddrowcallback/) hook to add new todos.
## State Hooks: useState-Style Convenience
For common scenarios where you need both read and write access to data, TinyBase provides a family of "state hooks" that follow React's `useState` pattern. These hooks return a tuple containing the current value and a setter function:

```
import {useCellState} from 'tinybase/ui-react';

const ColorSetter = () => {
  const [color, setColor] = useCellState[](https://tinybase.org/api/ui-react/functions/state-hooks/usecellstate/)('pets', 'fido', 'color', store);
  return (
    <div>
      <div>Color: {color}</div>
      <button onClick={() => setColor('black')}>Change Color</button>
    </div>
  );
};

```

These state hooks combine the functionality of getter hooks (like the [`useRow`](https://tinybase.org/api/the-essentials/using-react/userow/) hook) with setter callback hooks (like the [`useSetRowCallback`](https://tinybase.org/api/ui-react/functions/store-hooks/usesetrowcallback/) hook), reducing boilerplate and providing a familiar [API](https://tinybase.org/api/) for React developers.
The following state hooks are available:
  * The [`useTablesState`](https://tinybase.org/api/ui-react/functions/state-hooks/usetablesstate/) hook for reading and writing all [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/)
  * The [`useTableState`](https://tinybase.org/api/ui-react/functions/state-hooks/usetablestate/) hook for reading and writing a single [`Table`](https://tinybase.org/api/store/type-aliases/store/table/)
  * The [`useRowState`](https://tinybase.org/api/ui-react/functions/state-hooks/userowstate/) hook for reading and writing a single [`Row`](https://tinybase.org/api/store/type-aliases/store/row/)
  * The [`useCellState`](https://tinybase.org/api/ui-react/functions/state-hooks/usecellstate/) hook for reading and writing a single [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/)
  * The [`useValuesState`](https://tinybase.org/api/ui-react/functions/state-hooks/usevaluesstate/) hook for reading and writing all [`Values`](https://tinybase.org/api/store/type-aliases/store/values/)
  * The [`useValueState`](https://tinybase.org/api/ui-react/functions/state-hooks/usevaluestate/) hook for reading and writing a single [`Value`](https://tinybase.org/api/store/type-aliases/store/value/)
  * The [`useParamValuesState`](https://tinybase.org/api/ui-react/functions/state-hooks/useparamvaluesstate/) hook for reading and writing all query [`ParamValues`](https://tinybase.org/api/queries/type-aliases/params/paramvalues/)
  * The [`useParamValueState`](https://tinybase.org/api/ui-react/functions/state-hooks/useparamvaluestate/) hook for reading and writing a single query [`ParamValue`](https://tinybase.org/api/queries/type-aliases/params/paramvalue/)


These hooks are particularly useful when building forms, editors, or any UI that requires bidirectional data binding. They handle all the memoization and re-rendering logic for you, just like the standard hooks.
## Other Hook Types
The hooks to read and write [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data (described above) will be the ones you most commonly use. For completeness, there are three other broad groups of hooks. Firstly, there are those that create callbacks to delete data (such as the [`useDelRowCallback`](https://tinybase.org/api/ui-react/functions/store-hooks/usedelrowcallback/) hook), which should be self-explanatory.
Then there are hooks that are used to create objects (including [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects, but also [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/), and [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) objects, and so on). These are essentially convenient aliases for memoization so that object creation can be performed inside a component without fear of creating a new instance per render:

```
import {useCreateStore} from 'tinybase/ui-react';

const App5 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() => {
    console.log('Store created');
    return createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
  });
  return <span>{store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'species')}</span>;
};

root.render(<App5 />);
// -> 'Store created'

root.render(<App5 />);
// No second Store creation

```

There is also a final group of hooks that add listeners (such as the [`useCellListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usecelllistener/) hook). Since the regular hooks (like the [`useCell`](https://tinybase.org/api/the-essentials/using-react/usecell/) hook) already register listeners to track changes, you won't often need to use these unless you need to establish a listener in a component that has some other side-effect, such as mutating data to enforce a schema, for example.
## Summary
The hooks available in the [`ui-react`](https://tinybase.org/api/ui-react/) module make it easy to connect your user interface to TinyBase [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data. It also contains some convenient components that you can use to build your user interface more declaratively. For that, let's proceed to the [Using React Components](https://tinybase.org/guides/building-uis-with-react/using-react-components/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
