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
  * [Releases](https://tinybase.org/guides/releases/)


# Releases
This is a reverse chronological list of the major TinyBase releases, with highlighted features.
* * *
# v8.2
## Svelte DOM Components And Inspector
This release completes TinyBase's Svelte support with two new additions: the [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/) module and the [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/) module.
The [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/) module provides browser-ready Svelte components for rendering and editing TinyBase data as HTML tables. They mirror the React DOM components, but use Svelte component composition and props throughout:
![SortedTableInHtmlTable \(Svelte\)](https://tinybase.org/shots/sortedtableinhtmltable-svelte-demo.png)

```
<script>
  import {createStore} from 'tinybase';
  import {TableInHtmlTable} from 'tinybase/ui-svelte-dom';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
    fido: {species: 'dog', color: 'brown'},
    felix: {species: 'cat', color: 'black'},
  });
</script>

<TableInHtmlTable tableId="pets" {store} editable />

```

Alongside the table components, the new [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/) module brings the TinyBase development inspector to Svelte apps too, making it easy to inspect and edit Stores, [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/), and [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) during development:
![Inspector \(Svelte\)](https://tinybase.org/shots/inspector-svelte-demo.png)

```
<script>
  import {createStore} from 'tinybase';
  import {Provider} from 'tinybase/ui-svelte';
  import {Inspector} from 'tinybase/ui-svelte-inspector';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
    fido: {species: 'dog'},
  });
</script>

<Provider {store}>
  <Inspector />
</Provider>

```

Read more in the [Using Svelte DOM Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-dom-components/) guide and the [Inspecting Data](https://tinybase.org/guides/inspecting-data/) guide.
## New [Demos](https://tinybase.org/demos/)
This release also adds a complete set of Svelte UI component demos, plus an Inspector demo, so you can see the new modules working across Stores, [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/), [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/), and editable views.
![EditableValueView \(Svelte\)](https://tinybase.org/shots/editablevalueview-svelte-full-demo.png)
These demos intentionally mirror the React set where possible, making it easier to compare implementation patterns across frameworks.
There are no intended breaking changes in this release. If you spot any issues with the new Svelte DOM components or the Svelte inspector, please let us know!
* * *
# v8.1
## Svelte Support
This highly-anticipated release introduces the new [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module, bringing native Svelte 5 runes-based reactive bindings to TinyBase. The module provides reactive functions and view components for building reactive UIs without any additional state management.
Reactive functions return a reactive object backed by Svelte's reactivity. Any component that reads `current` from it will automatically re-render when the underlying TinyBase data changes:

```
<script>
  import {createStore} from 'tinybase';
  import {getCell} from 'tinybase/ui-svelte';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
  const color = getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'color', store);
</script>

<p>Color: {color.current}</p>

```

The [`getCell`](https://tinybase.org/api/ui-svelte/functions/getter/getcell/) function and the [`getValue`](https://tinybase.org/api/ui-svelte/functions/getter/getvalue/) function provide a writable `current` property that pairs naturally with Svelte's `bind:` directive for two-way data binding:

```
<script>
  import {getCell} from 'tinybase/ui-svelte';

  const color = getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'color', store);
</script>

<input bind:value={color.current} />

```

All reactive functions accept reactive getter functions as parameters — the [`MaybeGetter`](https://tinybase.org/api/ui-svelte/type-aliases/identity/maybegetter/) type (`T | (() => T)`) — so passing `() => rowId` from a `$state` variable causes the function to reactively track which row it reads, without unmounting and remounting.
The module further includes a provider component and context helpers for sharing TinyBase objects across a component tree, and many built-in view components for assembling UIs directly from [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data.
Read more in the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module documentation and the [Building UIs With Svelte](https://tinybase.org/guides/building-uis-with-svelte/) guide.
## New [Demos](https://tinybase.org/demos/)
To showcase the new Svelte support, we have created two new Svelte-specific demos: a [Hello World (Svelte)](https://tinybase.org/demos/hello-world/hello-world-svelte/) demo and a [Countries (Svelte)](https://tinybase.org/demos/countries/countries-svelte/) demo. Check them out to see the new module in action.
The `create-tinybase` CLI tool also now includes an option to create a Svelte demo project, so you can easily get started with Svelte and TinyBase in exactly the same way you can with React:

```
> npm create tinybase@latest

📦 Creating your project...

```

## Breaking [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/)
If you tried the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module in earlier beta releases, there are some intentional breaking changes made to ensure the [API](https://tinybase.org/api/) is more idiomatic for Svelte. What was `useX` is now a reactive `getX` or `hasX` function, so for example `useCell` has become the [`getCell`](https://tinybase.org/api/ui-svelte/functions/getter/getcell/) function and `useHasCell` has become the [`hasCell`](https://tinybase.org/api/ui-svelte/functions/getter/hascell/) function. Context lookups also use `getX`, as with the [`getMetrics`](https://tinybase.org/api/ui-svelte/functions/getter/getmetrics/) function, but those return TinyBase objects directly from Provider context rather than reactive `current`-based wrappers. [Listener functions](https://tinybase.org/api/ui-svelte/functions/listener/) now use `onX`; so for example `useCellListener` has become the [`onCell`](https://tinybase.org/api/ui-svelte/functions/listener/oncell/) function. The old `useBindableCell` and `useBindableValue` beta names have also gone away because the [`getCell`](https://tinybase.org/api/ui-svelte/functions/getter/getcell/) function and [`getValue`](https://tinybase.org/api/ui-svelte/functions/getter/getvalue/) function expose the writable scalar accessors directly.
This release also contains a minor breaking change since v8.0. The `tinybase/omni` module no longer includes the [`ui-react`](https://tinybase.org/api/ui-react/) module, [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/) module, or [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/) module. Since the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module exports many of the same names, including both in a single flat namespace would cause silent name collisions.
If you were importing React UI helpers from `tinybase/omni`, update your imports:

```
// Before
import {createStore, useCell, Provider} from 'tinybase/omni';

// After
import {createStore} from 'tinybase/omni';
import {useCell, Provider} from 'tinybase/ui-react';

```

(Sorry about that!)
## We need your help
We hope you enjoy exploring this early new Svelte support. But we really need feedback on how it works and whether or not you find it easy and idiomatic to work with! Please let us know in the issues, discussions, or on social media. Thanks and good luck!
* * *
# v8.0
## Object And Array Types
This release extends the range of types that a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) can hold. Previously, TinyBase supported `string`, `number`, `boolean`, and (since v7.0) `null`. Now you can also store plain JavaScript **objects** and **arrays** directly in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {
  species: 'dog',
  traits: {friendly: true, energetic: true},
  vaccinations: ['rabies', 'distemper', 'parvovirus'],
});

console.log(store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'traits'));
// -> {friendly: true, energetic: true}

console.log(store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'vaccinations'));
// -> ['rabies', 'distemper', 'parvovirus']

```

Internally, objects and arrays are stored as JSON-encoded strings with a special prefix character, so they round-trip transparently through persistence layers. But in and out of your application code, the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) [API](https://tinybase.org/api/) always expects or returns them as native JavaScript values.
[Schemas](https://tinybase.org/guides/schemas/) also gain `object` and `array` as valid types:

```
store.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    species: {type: 'string'},
    traits: {type: 'object', default: {}},
    vaccinations: {type: 'array', default: []},
  },
});

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog'});
console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', traits: {}, vaccinations: []}

store.delSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delschema/)();

```

Note that TinyBase does not deeply validate the contents of objects or arrays when a schema is applied - it simply checks that the value is of the right top-level type. For deeper validation, consider combining with a [Middleware](https://tinybase.org/guides/the-basics/using-middleware/) callback. On which note...
## Introducing [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/)
This release introduces a powerful new system for intercepting and transforming data as it flows into your TinyBase [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) callbacks can be registered to fire before data is written to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), allowing you to modify, validate, or even reject changes before they take effect.

```
import {createMiddleware} from 'tinybase';

const middleware = createMiddleware[](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)(store);
middleware.addWillSetCellCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetcellcallback/)((tableId, rowId, cellId, cell) => {
  if (tableId === 'pets' && cellId === 'age' && cell < 0) {
    // Reject negative ages by returning undefined
    return undefined;
  }
  // Otherwise, allow the change to proceed unmodified
  return cell;
});

```

Read more in our new comprehensive [Using Middleware](https://tinybase.org/guides/using-middleware/) guide, which includes examples of using [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) for data validation, transformation, and more.
[`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) complements listeners but is distinct in that it runs before changes are applied to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), whereas listeners run after. [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) can modify the data that listeners see, and can prevent changes from being applied at all by returning `undefined`. In conjunction with schemas, [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) provides a powerful way to enforce data integrity and implement complex data transformations - and it should work in synchronization environments too.
Many, many thanks to [Brandon Mason](https://github.com/bitmage) for designing and implementing this concept. Despite the major version number, we trust there are no breaking changes in this release. But please let us know if you find any!
* * *
# v7.3
## Introducing State Hooks
This release introduces a new family of convenience hooks that follow React's `useState` pattern, making it even easier to read and write TinyBase data in your React components.
Each state hook returns a tuple containing both the current value and a setter function, eliminating the need to use separate getter and setter hooks.
[State hooks](https://tinybase.org/api/ui-react/functions/state-hooks/) combine the functionality of getter hooks (like the [`useRow`](https://tinybase.org/api/the-essentials/using-react/userow/) hook) and setter callback hooks (like the [`useSetRowCallback`](https://tinybase.org/api/ui-react/functions/store-hooks/usesetrowcallback/) hook) into a single, convenient [API](https://tinybase.org/api/) that feels just like React's `useState`:

```
import {useCellState} from 'tinybase/ui-react';

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {
  species: 'dog',
  color: 'brown',
});

const PetEditor = () => {
  const [color, setColor] = useCellState[](https://tinybase.org/api/ui-react/functions/state-hooks/usecellstate/)('pets', 'fido', 'color', store);

  return (
    <div>
      <div>Color: {color}</div>
      <button onClick={() => setColor('black')}>Change Color</button>
    </div>
  );
};

```

## Available State Hooks
This release includes eight new state hooks covering the most common data access patterns:
  * The [`useTablesState`](https://tinybase.org/api/ui-react/functions/state-hooks/usetablesstate/) hook for reading and writing all [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/)
  * The [`useTableState`](https://tinybase.org/api/ui-react/functions/state-hooks/usetablestate/) hook for reading and writing a single [`Table`](https://tinybase.org/api/store/type-aliases/store/table/)
  * The [`useRowState`](https://tinybase.org/api/ui-react/functions/state-hooks/userowstate/) hook for reading and writing a single [`Row`](https://tinybase.org/api/store/type-aliases/store/row/)
  * The [`useCellState`](https://tinybase.org/api/ui-react/functions/state-hooks/usecellstate/) hook for reading and writing a single [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/)
  * The [`useValuesState`](https://tinybase.org/api/ui-react/functions/state-hooks/usevaluesstate/) hook for reading and writing all [`Values`](https://tinybase.org/api/store/type-aliases/store/values/)
  * The [`useValueState`](https://tinybase.org/api/ui-react/functions/state-hooks/usevaluestate/) hook for reading and writing a single [`Value`](https://tinybase.org/api/store/type-aliases/store/value/)
  * The [`useParamValuesState`](https://tinybase.org/api/ui-react/functions/state-hooks/useparamvaluesstate/) hook for reading and writing all query [`ParamValues`](https://tinybase.org/api/queries/type-aliases/params/paramvalues/)
  * The [`useParamValueState`](https://tinybase.org/api/ui-react/functions/state-hooks/useparamvaluestate/) hook for reading and writing a single query [`ParamValue`](https://tinybase.org/api/queries/type-aliases/params/paramvalue/)


These hopefully mean less boilerplate, are particularly useful when building forms, editors, or any interactive UI that needs bidirectional data binding.
## Demo Updates
We've updated a few of the demos to showcase these new state hooks:
  * The [Countries](https://tinybase.org/demos/countries/) demo now uses the [`useCellState`](https://tinybase.org/api/ui-react/functions/state-hooks/usecellstate/) hook for the star/unstar toggle functionality.
  * The [Todo App](https://tinybase.org/demos/todo-app/) demo uses the [`useCellState`](https://tinybase.org/api/ui-react/functions/state-hooks/usecellstate/) hook to simplify todo completion toggling, and the [`useValueState`](https://tinybase.org/api/ui-react/functions/state-hooks/usevaluestate/) hook for managing the selected type filter.
  * The [Car Analysis](https://tinybase.org/demos/car-analysis/) demo uses the [`useParamValueState`](https://tinybase.org/api/ui-react/functions/state-hooks/useparamvaluestate/) hook to manage query parameters for dimensions, measures, and aggregates. Much more elegant!


Check out these demos to see the state hooks in action.
* * *
# v7.2
## Introducing Parameterized [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/)!
This release introduces parameterized queries to [TinyQL](https://tinybase.org/guides/using-queries/tinyql/) - finally!
These allow you to define queries using named 'params' that you can then easily update to change the query's results - without redefining the whole query each time.
Let's take a look with a simple example:

```
import {createQueries} from 'tinybase';

store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {age: 2, species: 'dog'},
  felix: {age: 1, species: 'cat'},
  cujo: {age: 3, species: 'dog'},
});

const queries = createQueries[](https://tinybase.org/api/queries/functions/creation/createqueries/)(store).setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)(
  'petsBySpecies',
  'pets',
  ({select, where, param}) => {
    select('age');
    where('species', param('species'));
  },
  {species: 'dog'}, // Initial param value
);

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('petsBySpecies'));
// -> {fido: {age: 2}, cujo: {age: 3}}

// Update the 'species' param to 'cat' to change the results:
queries.setParamValue[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setparamvalue/)('petsBySpecies', 'species', 'cat');
console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('petsBySpecies'));
// -> {felix: {age: 1}}

```

You can of course have multiple params in a query definition, and use them in any part of the query definition that you would like. Listeners also work as expected - if you are listening to a query's results, and you change a param that affects those results, your listener will be called accordingly.
This is TinyBase so you should not be too surprised... but params themselves are reactive! You can get and listen to their values with the [`getParamValue`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/getter/getparamvalue/) method and [`addParamValueListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addparamvaluelistener/) method, for example.
For React users, we also shipped a bunch of new hooks that cover params in exactly the way you would expect, including the [`useSetParamValueCallback`](https://tinybase.org/api/ui-react/functions/queries-hooks/usesetparamvaluecallback/) hook and the [`useSetParamValuesCallback`](https://tinybase.org/api/ui-react/functions/queries-hooks/usesetparamvaluescallback/) hook, which let you easily update param values from, say, an event handler in your application.
We know this has been a long-awaited feature, so we hope you enjoy it! See the [TinyQL](https://tinybase.org/guides/using-queries/tinyql/) guide for more details, and please let us know how it goes!
## [Demos](https://tinybase.org/demos/)
We have updated the [Movie Database](https://tinybase.org/demos/movie-database/) demo to use parameterized queries, and as a result is more efficient and easier to (we think) understand. See the `yearGenreMovies`, `directedMovies`, and `appearedMovies` queries to see params in action.
We have also updated the [Car Analysis](https://tinybase.org/demos/car-analysis/) demo to use just one single parameterized query for the whole app!
## Full [API](https://tinybase.org/api/) additions
This release includes the following new [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) interface methods:
  * [`getParamValues`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/getter/getparamvalues/) method
  * [`getParamValue`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/getter/getparamvalue/) method
  * [`setParamValues`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setparamvalues/) method
  * [`setParamValue`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setparamvalue/) method
  * [`addParamValuesListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addparamvalueslistener/) method
  * [`addParamValueListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addparamvaluelistener/) method


It also includes the following new React hooks:
  * [`useParamValues`](https://tinybase.org/api/ui-react/functions/queries-hooks/useparamvalues/) hook
  * [`useParamValue`](https://tinybase.org/api/ui-react/functions/queries-hooks/useparamvalue/) hook
  * [`useSetParamValuesCallback`](https://tinybase.org/api/ui-react/functions/queries-hooks/usesetparamvaluescallback/) hook
  * [`useSetParamValueCallback`](https://tinybase.org/api/ui-react/functions/queries-hooks/usesetparamvaluecallback/) hook
  * [`useParamValuesListener`](https://tinybase.org/api/ui-react/functions/queries-hooks/useparamvalueslistener/) hook
  * [`useParamValueListener`](https://tinybase.org/api/ui-react/functions/queries-hooks/useparamvaluelistener/) hook


Check out the [API](https://tinybase.org/api/) docs for each. They should seem very familiar.
Please check out this new release and let us know what you think!
* * *
# v7.1
This release introduces **Schematizers** , a new system for converting schemas from popular validation libraries into TinyBase's schema format.
## Schematizers
Schematizers provide a bridge between external schema validation libraries (like Zod, TypeBox, and Valibot) and TinyBase's [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) and [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) formats. Instead of manually writing TinyBase schemas, you can now convert existing schemas at runtime:

```
import {createZodSchematizer} from 'tinybase/schematizers/schematizer-zod';
import {z} from 'zod';

const schematizer = createZodSchematizer[](https://tinybase.org/api/schematizer-zod/functions/creation/createzodschematizer/)();

const zodSchema = {
  pets: z.object({
    species: z.string(),
    age: z.number(),
    sold: z.boolean().default(false),
  }),
};

const schematizedStore = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)(
  schematizer.toTablesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/totablesschema/)(zodSchema),
);

schematizedStore.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog', age: 3});
console.log(schematizedStore.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', age: 3, sold: false}

```

Schematizers perform best-effort conversions, extracting basic type information (string, number, boolean), defaults, and nullable settings from your schemas.
This release includes support for:
  * **Zod** via the [`createZodSchematizer`](https://tinybase.org/api/schematizer-zod/functions/creation/createzodschematizer/) function
  * **TypeBox** via the [`createTypeBoxSchematizer`](https://tinybase.org/api/schematizer-typebox/functions/creation/createtypeboxschematizer/) function
  * **Valibot** via the [`createValibotSchematizer`](https://tinybase.org/api/schematizer-valibot/functions/creation/createvalibotschematizer/) function
  * **ArkType** via the [`createArkTypeSchematizer`](https://tinybase.org/api/schematizer-arktype/functions/creation/createarktypeschematizer/) function
  * **Yup** via the [`createYupSchematizer`](https://tinybase.org/api/schematizer-yup/functions/creation/createyupschematizer/) function
  * **Effect Schema** via the [`createEffectSchematizer`](https://tinybase.org/api/schematizer-effect/functions/creation/createeffectschematizer/) function


For more information, see the [Using Schematizers](https://tinybase.org/guides/schemas/using-schematizers/) guide.
* * *
# v7.0
This important (and slightly breaking!) release adds support for `null` as a valid [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) type, alongside `string`, `number`, and `boolean`.
## Null Type Support
You can now set Cells and [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) to `null`:

```
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', null);

console.log(store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'color'));
// -> null

console.log(store.hasCell[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hascell/)('pets', 'fido', 'color'));
// -> true

```

To allow `null` values in your schema, use the new `allowNull` property:

```
store.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    species: {type: 'string'},
    color: {type: 'string', allowNull: true},
  },
});

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', null);
// Valid because allowNull is true

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', null);
// Invalid - species does not allow null

store.delSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delschema/)();

```

## Important Distinction: `null` vs `undefined`
It's crucial to understand the difference between `null` and `undefined` in TinyBase:
  * `null` is an explicit value. A [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) set to `null` exists in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
  * `undefined` means the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) does not exist in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).


This means that the [`hasCell`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hascell/) method will return `true` for a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) with a `null` value:

```
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', null);
console.log(store.hasCell[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hascell/)('pets', 'fido', 'color'));
// -> true

store.delCell[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delcell/)('pets', 'fido', 'color');
console.log(store.hasCell[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hascell/)('pets', 'fido', 'color'));
// -> false

store.delTables[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltables/)();

```

## Breaking Change: [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/)
**Important:** This release includes a breaking change for applications using database persisters (the [`Sqlite3Persister`](https://tinybase.org/api/persister-sqlite3/interfaces/persister/sqlite3persister/), [`PostgresPersister`](https://tinybase.org/api/persister-postgres/interfaces/persister/postgrespersister/), or [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/) interfaces, for example).
SQL `NULL` values are now loaded as TinyBase `null` values. Previously, SQL `NULL` would result in Cells being absent from the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Now, SQL `NULL` maps directly to TinyBase `null`, which means:
  * [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) loaded from SQL databases will be **dense** rather than **sparse**
  * Every [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) will have every [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) present in the table schema
  * Cells that were SQL `NULL` will have the value `null`


Example of the roundtrip transformation via a SQLite database:

```
import sqlite3InitModule from '@sqlite.org/sqlite-wasm';
import {createSqliteWasmPersister} from 'tinybase/persisters/persister-sqlite-wasm';

const sqlite3 = await sqlite3InitModule();
let db = new sqlite3.oo1.DB(':memory:', 'c');

store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog'},
  felix: {species: 'cat', color: 'black'},
});

const tabularPersister = createSqliteWasmPersister[](https://tinybase.org/api/the-essentials/persisting-stores/createsqlitewasmpersister/)(store, sqlite3, db, {
  mode: 'tabular',
  tables: {save: {pets: 'pets'}, load: {pets: 'pets'}},
});

await tabularPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// After saving the the SQL database:
// SQL table: fido (species: 'dog', color: NULL)
//           felix (species: 'cat', color: 'black')

await tabularPersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
// After loading again, the Store now has a dense table with an explicit null:

console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', color: null}

```

This is the correct semantic mapping since SQL databases have fixed schemas where every row must account for every column. See the [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/) guide for more details.
## Migration Guide
If you are using database persisters, you should:
  1. **Review your data access patterns** : If you were checking `hasCell(...) === false` to detect missing data, you now need to check `getCell(...) === null` for null values.
  2. **Update your schemas** : Add `allowNull: true` to [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) definitions that should permit null values:


```
store.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    species: {type: 'string'},
    color: {type: 'string', allowNull: true},
    age: {type: 'number', allowNull: true},
  },
});

```

  1. **Consider memory implications** : Dense tables consume more memory than sparse tables. If you have large tables with many optional Cells, this could be significant.


* * *
# v6.7
This release includes support for the Origin Private File System (OPFS) in a browser. The [`createOpfsPersister`](https://tinybase.org/api/persister-browser/functions/creation/createopfspersister/) function is the main entry point, and is available in the existing [`persister-browser`](https://tinybase.org/api/persister-browser/) module:

```
import {createOpfsPersister} from 'tinybase/persisters/persister-browser';

const opfs = await navigator.storage.getDirectory();
const handle = await opfs.getFileHandle('tinybase.json', {create: true});

store.delTables[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltables/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const opfsPersister = createOpfsPersister[](https://tinybase.org/api/persister-browser/functions/creation/createopfspersister/)(store, handle);

await opfsPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// Store JSON will be saved to the OPFS file.

await opfsPersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
// Store JSON will be loaded from the OPFS file.

await opfsPersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

That's it! If you've used other TinyBase persisters, this [API](https://tinybase.org/api/) should be easy and familiar to use.
One caveat: observability in OPFS is not yet standardized in browsers. This means that the auto-load functionality of the persister may not work as expected, although a best effort is made using the experimental FileSystemObserverAPI, so please let us know how that works!
* * *
# v6.6
This release improves the Inspector tool, making it easier to debug, inspect, and mutate your TinyBase stores.
![Inspector](https://tinybase.org/shots/inspector-react-demo.png)
As well as a modernized UI, new in this release is the ability to create, duplicate, or delete tables, rows, values and cells directly within the Inspector. Press the 'pencil' icon to start editing items, and then hover over the new icons to see how to manipulate the data.
See the [Inspecting Data](https://tinybase.org/guides/inspecting-data/) guide for more information about how to use the Inspector in your application during development.
# v6.5
This release includes the new [`persister-react-native-mmkv`](https://tinybase.org/api/persister-react-native-mmkv/) module, which allows you to persist data in a React Native MMKV store via the [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv) library.
Usage should be as simple as this:

```
import {createMMKV} from 'react-native-mmkv';
import {createReactNativeMmkvPersister} from 'tinybase/persisters/persister-react-native-mmkv';

const storage = createMMKV();
store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = createReactNativeMmkvPersister[](https://tinybase.org/api/persister-react-native-mmkv/functions/creation/createreactnativemmkvpersister/)(store, storage);

await persister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// Store will be saved to the MMKV store.

```

A huge shout out to [Jérémy Barbet](https://github.com/JeremyBarbet) for this new persister!
* * *
# v6.4
This release includes the new [`persister-react-native-sqlite`](https://tinybase.org/api/persister-react-native-sqlite/) module, which allows you to persist data in a React Native SQLite database via the [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage) library.
Usage should be as simple as this:

```
import {enablePromise, openDatabase} from 'react-native-sqlite-storage';
import {createStore} from 'tinybase';
import {createReactNativeSqlitePersister} from 'tinybase/persisters/persister-react-native-sqlite';

enablePromise(true);
const db = await openDatabase({name: 'my.db', location: 'default'});
const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = createReactNativeSqlitePersister[](https://tinybase.org/api/persister-react-native-sqlite/functions/creation/createreactnativesqlitepersister/)(store, db);

await persister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// Store will be saved to the database.

```

Please let us know how you get on with this new [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/), and if you have any feedback or suggestions.
* * *
# v6.3
This release includes the new [`persister-durable-object-sql-storage`](https://tinybase.org/api/persister-durable-object-sql-storage/) module, which allows you to persist data in a Cloudflare Durable Object's SQLite-based storage in conjunction with websocket-based synchronization (using the [`WsServerDurableObject`](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/) class).
Huge thanks to [Corey Jepperson](https://github.com/acoreyj) for implementing the entirety of this functionality!

```
import {createMergeableStore} from 'tinybase';
import {createDurableObjectSqlStoragePersister} from 'tinybase/persisters/persister-durable-object-sql-storage';
import {WsServerDurableObject} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';

const config = {
  mode: 'fragmented',
  storagePrefix: 'my_app_',
};

export class MyDurableObject extends WsServerDurableObject[](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/) {
  createPersister[](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/methods/creation/createpersister/)() {
    const store = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
    const persister = createDurableObjectSqlStoragePersister[](https://tinybase.org/api/the-essentials/persisting-stores/createdurableobjectsqlstoragepersister/)(
      store,
      this.ctx.storage.sql,
      config,
    );
    return persister;
  }
}

```

Prior to this release, the only way to persist data in a Durable Object was to use the [`persister-durable-object-storage`](https://tinybase.org/api/persister-durable-object-storage/) module, which uses CloudFlare's key-value storage backend behind the scenes.
However, Cloudflare's SQLite storage backend for Durable Objects offers significantly better pricing compared to the key-value storage backend. The SQLite storage backend is Cloudflare's recommended storage option for new Durable Object namespaces.
Note that, before using this persister, you must configure your Durable Object class to use SQLite storage by adding a migration to your `wrangler.toml` or `wrangler.json` configuration file. Use `new_sqlite_classes` in your migration configuration to enable SQLite storage for your Durable Object class. See the module documentation for more information.
This release also addresses a local-storage persistence issue, #[257](https://github.com/tinyplex/tinybase/issues/257).
* * *
# v6.2
This release contains various packaging improvements and exposes some internal HLC functions that are useful for people building their own persisters or synchronizers.
## New `omni` module
There is a new `omni` module that is an explicit superset of everything in the TinyBase ecosystem. It exports the features and functionality of every `tinybase/*` module, including every persister, every synchronizer, and every UI component. This is useful for applications that want to use multiple facets of the overall TinyBase ecosystem and also benefit from the fact they share a lot of code internally.

```
import {createStore, createSqliteBunPersister} from 'tinybase/omni';

```

However, it should go without saying that you should only use the `omni` module if you have an aggressive tree-shaking bundler that can remove all the persisters, synchronizers, and so on, that you do _not_ use. Experiment with different bundler configurations to see what works best for your usage.
## with-schema exports
This release changes the `package.json` exports slightly so that imports of both `/with-schema` and non-schema'd versions of the modules resolve to the same JavaScript file. This reduces bundle size for apps that use both schema and non-schema imports.
## HLC & hash functions
The [`common`](https://tinybase.org/api/common/) module (and hence tinybase module) now export the [`getHlcFunctions`](https://tinybase.org/api/common/functions/stamps/gethlcfunctions/) function. This returns set of seven functions that can be used to create and manipulate HLC (Hybrid Logical Clock) timestamps.

```
import {getHlcFunctions} from 'tinybase';
const [getNextHlc, seenHlc, encodeHlc] = getHlcFunctions[](https://tinybase.org/api/common/functions/stamps/gethlcfunctions/)();

```

There are also several functions to help hash tabular and key-value data in a way that is compatible with the internal [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) implementation. These include the [`getHash`](https://tinybase.org/api/common/functions/hash/gethash/) function and the [`getCellHash`](https://tinybase.org/api/common/functions/hash/getcellhash/) function, for example.
These are for pretty advanced use-cases! But you can use these in your own systems to ensure the timestamps and hashes are compatible with the ones generated in TinyBase [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects.
## Moved types
The rarely-used [`GetNow`](https://tinybase.org/api/common/type-aliases/stamps/getnow/) and [`Hash`](https://tinybase.org/api/common/type-aliases/stamps/hash/) types have been moved from the [`mergeable-store`](https://tinybase.org/api/mergeable-store/) module into the [`common`](https://tinybase.org/api/common/) module.
* * *
# v6.1
## In Summary
  * [A new Persister for Bun](https://tinybase.org/guides/releases/#bun-sqlite)'s embedded SQLite database.
  * [Subset persistence](https://tinybase.org/guides/releases/#subset-persistence) to load subsets of tables into a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
  * [Destructured object arguments](https://tinybase.org/guides/releases/#destructured-object-arguments-for-sorted-row-ids) for sorted [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) methods and hooks.
  * [A new startAutoPersisting method](https://tinybase.org/guides/releases/#new-startautopersisting-method).


And more!
## Bun SQLite
This release includes a new [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) for the [embedded SQLite database](https://bun.sh/docs/api/sqlite) available in the Bun runtime.
You use it by passing a reference to a Bun Database object into the [`createSqliteBunPersister`](https://tinybase.org/api/persister-sqlite-bun/functions/creation/createsqlitebunpersister/) function:

```
import {Database} from 'bun:sqlite';
import {createStore} from 'tinybase';
import {createSqliteBunPersister} from 'tinybase/persisters/persister-sqlite-bun';

const db = new Database(':memory:');
const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = createSqliteBunPersister[](https://tinybase.org/api/persister-sqlite-bun/functions/creation/createsqlitebunpersister/)(store, db, 'my_tinybase');

await persister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// Store will be saved to the database.

console.log(db.query('SELECT * FROM my_tinybase;').all());
// -> [{_id: '_', store: '[{"pets":{"fido":{"species":"dog"}}},{}]'}]

db.query(
  'UPDATE my_tinybase SET store = ' +
    `'[{"pets":{"felix":{"species":"cat"}}},{}]' WHERE _id = '_';`,
).run();
await persister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {felix: {species: 'cat'}}}

await persister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

There's more information the documentation for the new [`persister-sqlite-bun`](https://tinybase.org/api/persister-sqlite-bun/) module.
## Subset persistence
Persisters that load and save data to an underlying database can now be configured to only load a _subset_ of the rows in a table into a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
This is useful for reducing the amount of data that is loaded into memory, or for working with a subset of data that is relevant to the current user, for example.
Do this by specifying a `condition` in the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) configuration. This is a single string argument which is used as a SQL `WHERE` clause when reading and observing data in the table.
For example, the following code will only load rows from the `pets` database table where the `sold` column is set to `0`:

```
const subsetPersister = createSqliteWasmPersister[](https://tinybase.org/api/the-essentials/persisting-stores/createsqlitewasmpersister/)(store, sqlite3, db, {
  mode: 'tabular',
  tables: {
    load: {pets: {tableId: 'pets', condition: '$tableName.sold = 0'}},
    save: {pets: {tableName: 'pets', condition: '$tableName.sold = 0'}},
  },
});

```

See the '[Loading subsets of database tables](https://tinybase.org/guides/persistence/database-persistence/#loading-subsets-of-database-tables)' section of the [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/) guide for more details. And a huge thank you to Jakub Riedl ([@jakubriedl](https://github.com/jakubriedl)) for landing this functionality!
## Destructured object arguments for sorted [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/)
The [`getSortedRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getsortedrowids/) method on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) interface has a number of optional parameters and it can be tiresome to fill in the defaults if you only want to change the last one, for example. So this release introduces an override such that you can pass an object with the parameters as properties.
So instead of:

```
store.getSortedRowIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getsortedrowids/)('pets', undefined, undefined, undefined, 10);

```

You can now do:

```
store.getSortedRowIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getsortedrowids/)({tableId: 'pets', limit: 10});

```

This pattern is also made available to the [`addSortedRowIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addsortedrowidslistener/) method, the [`useSortedRowIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usesortedrowids/) hook, and the [`useSortedRowIdsListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usesortedrowidslistener/) hook.
## New [`startAutoPersisting`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/startautopersisting/) method
The new [`startAutoPersisting`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/startautopersisting/) method and [`stopAutoPersisting`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/stopautopersisting/) method on the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) interface act as convenience methods for starting (and stopping) both the automatic loading and saving of data.
## New createMergeableStore getNow parameter
The [`createMergeableStore`](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/) function now takes an optional `getNow` argument that lets you override the clock used to generate HLC timestamps.
## Asynchronous [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) & [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) methods
Please note that some methods in the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) and [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) APIs are now asynchronous. Although most implementations of these methods are synchronous, some (particularly for Postgres-based databases) are no longer so and you are recommended to await them all.
The [`stopAutoLoad`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/stopautoload/) method, the [`stopAutoSave`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/stopautosave/) method, and the [`destroy`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/) method in the base [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) interface have been marked asynchronous and return Promises. The [`stopSync`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/stopsync/) method in the [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) interface and the [`destroy`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/) method in the [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) server interfaces should also be considered asynchronous.
* * *
# v6.0
This major release is about updating dependencies and infrastructure rather than adding new features.
The most notable changes for users are:
  * The package distribution only includes modern ESM packages (both minified and non-minified).
  * React 19 is now compatible as an optional peer dependency.
  * The tools module and TinyBase CLI have been removed.


If you have been using CJS or UMD packages, you will need to update your bundling strategy for TinyBase (in the same way that you will have had to have done for React 19, for example) but this change should be compatible with most packaging tools. If you had been using the library directly a browser, you should consider the [esm.sh](https://esm.sh/) CDN, as we have for our demos.
As a result of these changes, there have been some additional knock-on effects to the project and developer infrastructure as a whole. For example:
  * The test suite has been updated to use `react-testing-library` instead of `react-test-renderer`.
  * The React `jsx-runtime` is used for JSX transformations.
  * [Demos](https://tinybase.org/demos/) (and CodePen examples) have been updated to use an `importmap` mapping the modules to the [esm.sh](https://esm.sh/) CDN.
  * ESLint has finally been upgraded to v9.


Note that TinyBase v6.0 adds no new functionality, so you can afford to stay on v5.4.x for a while if these changes are somehow incompatible for you. However, all future functionality changes and bug fixes _will_ take effect as v6.x releases (and probably won't be back-ported to v5.4.x), so you should endeavor to upgrade as soon as you can.
Please let us know how these changes find you, and please file an issue on GitHub if you need help adapting to any of them.
* * *
# v5.4
## Durable Objects synchronization
This release contains a new WebSocket synchronization server that runs on Cloudflare as a Durable Object.
It's in the new [`synchronizer-ws-server-durable-object`](https://tinybase.org/api/synchronizer-ws-server-durable-object/) module, and you use it by extending the [`WsServerDurableObject`](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/) class. Use the [`getWsServerDurableObjectFetch`](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/creation/getwsserverdurableobjectfetch/) function for conveniently binding your Cloudflare Worker to your Durable Object:

```
import {
  WsServerDurableObject,
  getWsServerDurableObjectFetch,
} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';

export class MyDurableObject extends WsServerDurableObject[](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/) {}

export default {fetch: getWsServerDurableObjectFetch[](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/creation/getwsserverdurableobjectfetch/)('MyDurableObjects')};

```

For the above code to work, you'll need to have a Wrangler configuration that connects the `MyDurableObject` class to the `MyDurableObjects` namespace. In other words, you'll have something like this in your `wrangler.toml` file:

```
[[durable_objects.bindings]]
name = "MyDurableObjects"
class_name = "MyDurableObject"

```

With this you can now easily connect and synchronize clients that are using the [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) synchronizer.
## Durable Objects [Persistence](https://tinybase.org/guides/persistence/)
But wait! There's more. Durable Objects also provide a storage mechanism, and sometimes you want TinyBase data to also be stored on the server (in case all the current clients disconnect and a new one joins, for example). So this release of TinyBase also includes a dedicated persister, the [`DurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/), that also synchronizes the data to the Durable Object storage layer.
You create it with the [`createDurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/functions/creation/createdurableobjectstoragepersister/) function, and hook it into the Durable Object by returning it from the [`createPersister`](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/methods/creation/createpersister/) method of your [`WsServerDurableObject`](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/):

```
export class MyDurableObject extends WsServerDurableObject[](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/) {
  createPersister[](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/methods/creation/createpersister/)() {
    return createDurableObjectStoragePersister[](https://tinybase.org/api/persister-durable-object-storage/functions/creation/createdurableobjectstoragepersister/)(
      createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)(),
      this.ctx.storage,
    );
  }
}

```

You can get started quickly with this architecture using the Durable Objects option in the [`create-tinybase` tool](https://github.com/tinyplex/create-tinybase).
## Server Reference Implementation
Unrelated to Durable Objects, this release also includes the new [`synchronizer-ws-server-simple`](https://tinybase.org/api/synchronizer-ws-server-simple/) module that contains a simple server implementation called [`WsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/). Without the complications of listeners, persistence, or statistics, this is more suitable to be used as a reference implementation for other server environments.
## Architectural Guide
To go with this release, we have added new documentation on ways in which you can use TinyBase in an app architecture. Check it out in the new [Architectural Options](https://tinybase.org/guides/the-basics/architectural-options/) guide.
We've also started a new section of documentation for describing integrations, of which the [Cloudflare Durable Objects](https://tinybase.org/guides/integrations/cloudflare-durable-objects/) guide, of course, is the first new entry!
* * *
# v5.3
This release is focussed on a few [API](https://tinybase.org/api/) improvements and quality-of-life changes. These include:
## React SSR support
Thanks to contributor [Muhammad Muhajir](https://github.com/muhajirdev) for ensuring that TinyBase runs in server-side rendering environments!
## In the [`persisters`](https://tinybase.org/api/persisters/) module...
All [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) objects now expose information about whether they are loading or saving. To access this [`Status`](https://tinybase.org/api/persisters/enumerations/lifecycle/status/), use:
  * The [`getStatus`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/getstatus/) method, which will return 0 when it is idle, 1 when it is loading, and 2 when it is saving.
  * The [`addStatusListener`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/listener/addstatuslistener/) method, which lets you add a [`StatusListener`](https://tinybase.org/api/persisters/type-aliases/listener/statuslistener/) function and which is called whenever the status changes.


These make it possible to track background load and save activities, so that, for example, you can show a status-bar spinner of asynchronous persistence activity.
## In the [`synchronizers`](https://tinybase.org/api/synchronizers/) module...
Synchronizers are a sub-class of [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/), so all [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) objects now also have:
  * The [`getStatus`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/getstatus/) method, which will return 0 when it is idle, 1 when it is 'loading' (ie inbound syncing), and 2 when it is 'saving' (ie outbound syncing).
  * The [`addStatusListener`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/listener/addstatuslistener/) method, which lets you add a [`StatusListener`](https://tinybase.org/api/persisters/type-aliases/listener/statuslistener/) function and which is called whenever the status changes.


## In the [`ui-react`](https://tinybase.org/api/ui-react/) module...
There are corresponding hooks so that you can build these status changes into a React UI easily:
  * The [`usePersisterStatus`](https://tinybase.org/api/ui-react/functions/persister-hooks/usepersisterstatus/) hook, which will return the status for an explicitly provided, or context-derived [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/).
  * The [`usePersisterStatusListener`](https://tinybase.org/api/ui-react/functions/persister-hooks/usepersisterstatuslistener/) hook, which lets you add your own [`StatusListener`](https://tinybase.org/api/persisters/type-aliases/listener/statuslistener/) function to a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/).
  * The [`usePersister`](https://tinybase.org/api/ui-react/functions/persister-hooks/usepersister/) hook, which lets you get direct access to a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) from within your UI.


And correspondingly for Synchronizers:
  * The [`useSynchronizerStatus`](https://tinybase.org/api/ui-react/functions/synchronizer-hooks/usesynchronizerstatus/) hook, which will return the status for an explicitly provided, or context-derived [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/).
  * The [`useSynchronizerStatusListener`](https://tinybase.org/api/ui-react/functions/synchronizer-hooks/usesynchronizerstatuslistener/) hook, which lets you add your own [`StatusListener`](https://tinybase.org/api/persisters/type-aliases/listener/statuslistener/) function to a [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/).
  * The [`useSynchronizer`](https://tinybase.org/api/ui-react/functions/synchronizer-hooks/usesynchronizer/) hook, which lets you get direct access to a [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) from within your UI.


In addition, this module also now includes hooks for injecting objects into the Provider context scope imperatively, much like the existing [`useProvideStore`](https://tinybase.org/api/ui-react/functions/store-hooks/useprovidestore/) hook:
  * The [`useProvideMetrics`](https://tinybase.org/api/ui-react/functions/metrics-hooks/useprovidemetrics/) hook, which lets you imperatively register [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) objects.
  * The [`useProvideIndexes`](https://tinybase.org/api/ui-react/functions/indexes-hooks/useprovideindexes/) hook, which lets you register [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) objects.
  * The [`useProvideRelationships`](https://tinybase.org/api/ui-react/functions/relationships-hooks/useproviderelationships/) hook, which lets you register [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) objects.
  * The [`useProvideQueries`](https://tinybase.org/api/ui-react/functions/queries-hooks/useprovidequeries/) hook, which lets you register [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) objects.
  * The [`useProvideCheckpoints`](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/useprovidecheckpoints/) hook, which lets you register [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) objects.
  * The [`useProvidePersister`](https://tinybase.org/api/ui-react/functions/persister-hooks/useprovidepersister/) hook, which lets you register [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) objects.
  * The [`useProvideSynchronizer`](https://tinybase.org/api/ui-react/functions/synchronizer-hooks/useprovidesynchronizer/) hook, which lets you register [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) objects.


All of these new methods have extensive documentation, each with examples to show how to use them.
Please provide feedback on this new release on GitHub!
* * *
# v5.2
This release introduces new Persisters for... PostgreSQL! TinyBase now has two new [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) modules:
  * The [`persister-postgres`](https://tinybase.org/api/persister-postgres/) module provides the [`PostgresPersister`](https://tinybase.org/api/persister-postgres/interfaces/persister/postgrespersister/), which uses the excellent [`postgres`](https://github.com/porsager/postgres) module to bind to regular PostgreSQL databases, generally on a server.
  * The [`persister-pglite`](https://tinybase.org/api/persister-pglite/) module provides the [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/), which uses the new and exciting [`pglite`](https://github.com/electric-sql/pglite) module for running PostgreSQL... in a browser!


Conceptually, things behave in the same way as they do for the various SQLite persisters. Simply use the [`createPostgresPersister`](https://tinybase.org/api/persister-postgres/functions/creation/createpostgrespersister/) function (or the similar [`createPglitePersister`](https://tinybase.org/api/the-essentials/persisting-stores/createpglitepersister/) function) to persist your TinyBase data:

```
import postgres from 'postgres';
import {createPostgresPersister} from 'tinybase/persisters/persister-postgres';

// Create a TinyBase Store.
store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});

// Create a postgres connection and Persister.
const sql = postgres('postgres://localhost:5432/tinybase');
const pgPersister = await createPostgresPersister[](https://tinybase.org/api/persister-postgres/functions/creation/createpostgrespersister/)(store, sql, 'my_tinybase');

// Save Store to the database.
await pgPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();

console.log(await sql`SELECT * FROM my_tinybase;`);
// -> [{_id: '_', store: '[{"pets":{"fido":{"species":"dog"}}},{}]'}]

```

And, as per usual, you can update the database and have TinyBase automatically reflect those changes:

```
// If separately the database gets updated...
const json = '[{"pets":{"felix":{"species":"cat"}}},{}]';
await sql`UPDATE my_tinybase SET store = ${json} WHERE _id = '_';`;

// ... then changes are loaded back. Reactive auto-load is also supported!
await pgPersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {felix: {species: 'cat'}}}

// As always, don't forget to tidy up.
await pgPersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();
await sql.end();

```

Note that these two [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) objects support both the `json` and `tabular` modes for saving TinyBase data into the database. See the [`DatabasePersisterConfig`](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/) type for more details. (Note however that, like the SQLite Persisters, only the `json` mode is supported for [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) instances, due to their additional CRDT metadata.)
This release also exposes the new [`createCustomSqlitePersister`](https://tinybase.org/api/persisters/functions/creation/createcustomsqlitepersister/) function and [`createCustomPostgreSqlPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompostgresqlpersister/) function at the top level of the persister module. These can be used to build [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) objects against SQLite and PostgreSQL SDKs (or forks) that are not already included with TinyBase.
## Minor breaking change
It's very unlikely to affect most apps, but also be aware that the [`persisters`](https://tinybase.org/api/persisters/) module and [`synchronizers`](https://tinybase.org/api/synchronizers/) module are no longer bundled in the 'master' tinybase module. If you are using them (most likely because you have built a custom [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) or [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/)), you will need to update your imports accordingly to the standalone `tinybase/persisters` and `tinybase/synchronizers` versions of them. Apologies.
* * *
# v5.1
This release lets you persist data on a server using the [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/) function. This makes it possible for all clients to disconnect from a path, but, when they reconnect, for the data to still be present for them to sync with.
This is done by passing in a second argument to the [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/) function that creates a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) instance (for which also need to create or provide a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)) for a given path:

```
import {createMergeableStore} from 'tinybase';
import {createFilePersister} from 'tinybase/persisters/persister-file';
import {createWsServer} from 'tinybase/synchronizers/synchronizer-ws-server';
import {WebSocketServer} from 'ws';

const persistingServer = createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)(
  new WebSocketServer({port: 8051}),
  (pathId) =>
    createFilePersister[](https://tinybase.org/api/persister-file/functions/creation/createfilepersister/)(
      createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)(),
      pathId.replace(/[^a-zA-Z0-9]/g, '-') + '.json',
    ),
);

await persistingServer.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

This is a very crude (and not production-safe!) example, but demonstrates a server that will create a file, based on any path that clients connect to, and persist data to it. See the [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/) function documentation for more details.
This implementation is still experimental so please kick the tires!
There is one small breaking change in this release: the functions for creating [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) objects can now take optional onSend and onReceive callbacks that will fire whenever messages pass through the [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/). See, for example, the [`createWsSynchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/createwssynchronizer/) function. These are suitable for debugging synchronization issues in a development environment.
* * *
# v5.0
We're excited to announce this major release for TinyBase! It includes important data synchronization functionality and a range of other improvements.
# In Summary
  * [The new MergeableStore type](https://tinybase.org/guides/releases/#the-new-mergeableStore-type) wraps your data as a Conflict-Free Replicated Data Type (CRDT).
  * [The new Synchronizer framework](https://tinybase.org/guides/releases/#the-new-synchronizer-framework) keeps multiple instances of data in sync across different media.
  * An [improved module folder structure](https://tinybase.org/guides/releases/#improved-module-folder-structure) removes common packaging and bundling issues.
  * The TinyBase Inspector is now in its own standalone [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/) module.
  * TinyBase now supports only Expo SQLite v14 ([SDK 51](https://expo.dev/changelog/2024/05-07-sdk-51)) and above.


There are also some small [breaking changes](https://tinybase.org/guides/releases/#breaking-changes-in-v50) that may affect you (but which should easy to fix if they do).
Let's look at the major functionality in more detail!
## The New [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) Type
A key part of TinyBase v5.0 is the new [`mergeable-store`](https://tinybase.org/api/mergeable-store/) module, which contains a subtype of [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) - called [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) - that can be merged with another with deterministic results. The implementation uses an encoded hybrid logical clock (HLC) to timestamp the changes made so that they can be cleanly merged.
The [`getMergeableContent`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/methods/getter/getmergeablecontent/) method on a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) is used to get the state of a store that can be merged into another. The [`applyMergeableChanges`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/methods/setter/applymergeablechanges/) method will let you apply that to (another) store. The [`merge`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/methods/setter/merge/) method is a convenience function to bidirectionally merge two stores together:

```
const localStore1 = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
const localStore2 = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();

localStore1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
localStore2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'felix', 'species', 'cat');

localStore1.merge[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/methods/setter/merge/)(localStore2);

console.log(localStore1.getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
// -> [{pets: {felix: {species: 'cat'}, fido: {species: 'dog'}}}, {}]

console.log(localStore2.getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
// -> [{pets: {felix: {species: 'cat'}, fido: {species: 'dog'}}}, {}]

```

Please read the new [Using A MergeableStore](https://tinybase.org/guides/synchronization/using-a-mergeablestore/) guide for more details of how to use this important new [API](https://tinybase.org/api/).
A [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) can be persisted locally, just like a regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) into file, local and session storage, and simple SQLite environments such as Expo and SQLite3. These allow you to save the state of a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) locally before it has had the chance to be synchronized online, for example.
Which leads us onto the next important feature in v5.0, allowing you to synchronize stores between systems...
## The New [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) Framework
The v5.0 release also introduces the new concept of synchronization. [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) objects implement a negotiation protocol that allows multiple [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects to be merged together. This can be across a network, using WebSockets, for example:

```
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';
import {WebSocket} from 'ws';

// On a server machine:
const server = createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)(new WebSocketServer({port: 8043}));

// On the first client machine:
const store1 = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
const synchronizer1 = await createWsSynchronizer[](https://tinybase.org/api/the-essentials/synchronizing-stores/createwssynchronizer/)(
  store1,
  new WebSocket('ws://localhost:8043'),
);
await synchronizer1.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
store1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'legs', 4);

// On the second client machine:
const store2 = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
const synchronizer2 = await createWsSynchronizer[](https://tinybase.org/api/the-essentials/synchronizing-stores/createwssynchronizer/)(
  store2,
  new WebSocket('ws://localhost:8043'),
);
await synchronizer2.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
store2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'felix', 'price', 5);
// ...

console.log(store1.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {felix: {price: 5}, fido: {legs: 4}}}
console.log(store2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {felix: {price: 5}, fido: {legs: 4}}}

await synchronizer1.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();
await synchronizer2.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();
await server.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

This release includes three types of [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/):
  * The [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) uses WebSockets to communicate between different systems as shown above.
  * The [`BroadcastChannelSynchronizer`](https://tinybase.org/api/synchronizer-broadcast-channel/interfaces/synchronizer/broadcastchannelsynchronizer/) uses the browser's BroadcastChannel [API](https://tinybase.org/api/) to communicate between different tabs and workers.
  * The [`LocalSynchronizer`](https://tinybase.org/api/synchronizer-local/interfaces/synchronizer/localsynchronizer/) demonstrates synchronization in memory on a single local system.


Notice that the [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) assumes that there exists a server that can forward requests to other [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) systems. This can be created using the [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/) function that takes a WebSocketServer as also shown above.
Please read the new [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/) guide for more details of how to synchronize your data.
## Improved Module Folder Structure
We have previously found issues with legacy bundlers and other tools that didn't fully support the new `exports` field in the module's package.
To mitigate that, the TinyBase distribution now has a top-level folder structure that fully echoes the import paths, including signifiers for JavaScript versions, schema support, minification and so on.
Please read the comprehensive [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/) guide for more details of how to construct the correct import paths in v5.0.
## Breaking [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/) in v5.0
### Module File Structure
If you previously had `/lib/` in your import paths, you should remove it. You also do not have to explicitly specify whether you need the `cjs` version of TinyBase - if you are using a `require` rather than an `import`, you will get it automatically.
The non-minified version of the code is now default and you need to be explicit when you _want_ minified code. Previously you would add `/debug` to the import path to get non-minified code, but now you add `/min` to the import path to get _minified_ code.
### Expo SQLite [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)
Previously the [`persister-expo-sqlite`](https://tinybase.org/api/persister-expo-sqlite/) module supported expo-sqlite v13 and the persister-expo-sqlite-next module supported their modern 'next' package. In v5.0, the [`persister-expo-sqlite`](https://tinybase.org/api/persister-expo-sqlite/) module only supports v14 and later, and the persister-expo-sqlite-next module has been removed.
### The TinyBase Inspector
Previously, the React-based inspector (then known as `StoreInspector`) resided in the debug version of the [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/) module. It now lives in its own [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/) module (so that it can be used against non-debug code) and has been renamed to Inspector.
Please update your imports and rename the component when used, accordingly. See the [API](https://tinybase.org/api/) documentation for details, or the [(React)](https://tinybase.org/demos/ui-components-react/inspector-react/)demo, for example.
###  [API](https://tinybase.org/api/) [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/)
The following changes have been made to the existing TinyBase [API](https://tinybase.org/api/) for consistency. These are less common parts of the [API](https://tinybase.org/api/) but should straightforward to correct if you are using them.
In the type definitions:
  * The GetTransactionChanges and GetTransactionLog types have been removed.
  * The TransactionChanges type has been renamed as the [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/) type.
  * The [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/) type now uses `undefined` instead of `null` to indicate a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) that has been deleted or that was not present.
  * The [`TransactionLog`](https://tinybase.org/api/store/type-aliases/transaction/transactionlog/) type is now an array instead of a JavaScript object.


In the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) interface:
  * There is a new [`getTransactionChanges`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/gettransactionchanges/) method and a new getTransactionLog method.
  * The setTransactionChanges method is renamed as the [`applyChanges`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/applychanges/) method.
  * A [`DoRollback`](https://tinybase.org/api/store/type-aliases/callback/dorollback/) function no longer gets passed arguments. You can use the [`getTransactionChanges`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/gettransactionchanges/) method and [`getTransactionLog`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/gettransactionlog/) method directly instead.
  * Similarly, a [`TransactionListener`](https://tinybase.org/api/store/type-aliases/listener/transactionlistener/) function no longer gets passed arguments.


In the [`persisters`](https://tinybase.org/api/persisters/) module:
  * The [`createCustomPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompersister/) function now takes a final optional boolean (`supportsMergeableStore`) to indicate that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) can support [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) as well as [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects.
  * A [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)'s [`load`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/) method and [`startAutoLoad`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/startautoload/) method now take a [`Content`](https://tinybase.org/api/store/type-aliases/store/content/) object as one parameter, rather than [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) and [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) as two.
  * If you create a custom [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/), the setPersisted method now receives changes made to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) directly by reference, rather than via a callback. Similarly, the [`PersisterListener`](https://tinybase.org/api/persisters/type-aliases/creation/persisterlistener/) you register in your addPersisterListener implementation now takes [`Content`](https://tinybase.org/api/store/type-aliases/store/content/) and [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/) objects directly rather than via a callback.
  * The broadcastTransactionChanges method in the [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/) module has been renamed to the broadcastChanges method.


* * *
# v4.8
This release includes the new [`persister-powersync`](https://tinybase.org/api/persister-powersync/) module, which provides a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) for [PowerSync's SQLite](https://www.powersync.com/) database.
Much like the other SQLite persisters, use it by passing in a PowerSync instance to the [`createPowerSyncPersister`](https://tinybase.org/api/persister-powersync/functions/creation/createpowersyncpersister/) function; something like:

```
const powerSync = usePowerSync();

const persister = createPowerSyncPersister[](https://tinybase.org/api/persister-powersync/functions/creation/createpowersyncpersister/)(store, powerSync, {
  mode: 'tabular',
  tables: {
    load: {items: {tableId: 'items', rowIdColumnName: 'value'}},
    save: {items: {tableName: 'items', rowIdColumnName: 'value'}},
  },
});

```

A huge thank you to [Benedikt Mueller](https://bndkt.com/) ([@bndkt](https://github.com/bndkt)) for building out this functionality! And please provide feedback on how this new [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) works for you.
* * *
# v4.7
This release includes the new [`persister-libsql`](https://tinybase.org/api/persister-libsql/) module, which provides a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) for [Turso's LibSQL](https://turso.tech/libsql) database.
Use the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) by passing in a reference to the LibSQL client to the createLibSQLPersister function; something like:

```
const client = createClient({url: 'file:my.db'});

const persister = createLibSqlPersister[](https://tinybase.org/api/persister-libsql/functions/creation/createlibsqlpersister/)(store, client, {
  mode: 'tabular',
  tables: {
    load: {items: {tableId: 'items', rowIdColumnName: 'value'}},
    save: {items: {tableName: 'items', rowIdColumnName: 'value'}},
  },
});

```

This is the first version of this functionality, so please provide feedback on how it works for you!
* * *
# v4.6
This release includes the new [`persister-electric-sql`](https://tinybase.org/api/persister-electric-sql/) module, which provides a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) for [ElectricSQL](https://electric-sql.com/) client databases.
Use the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) by passing in a reference to the Electric client to the [`createElectricSqlPersister`](https://tinybase.org/api/persister-electric-sql/functions/creation/createelectricsqlpersister/) function; something like:

```
const electric = await electrify(connection, schema, config);

const persister = createElectricSqlPersister[](https://tinybase.org/api/persister-electric-sql/functions/creation/createelectricsqlpersister/)(store, electric, {
  mode: 'tabular',
  tables: {
    load: {items: {tableId: 'items', rowIdColumnName: 'value'}},
    save: {items: {tableName: 'items', rowIdColumnName: 'value'}},
  },
});

```

This release is accompanied by a [template project](https://github.com/tinyplex/tinybase-ts-react-electricsql) to get started quickly with this integration. Enjoy!
* * *
# v4.5
This release includes the new persister-expo-sqlite-next module, which provides a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) for the modern version of Expo's [SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite) library, designated 'next' as of November 2023. This [API](https://tinybase.org/api/) should be used if you are installing the `expo-sqlite/next` module.
Note that TinyBase support for the legacy version of Expo-SQLite (`expo-sqlite`) is still available in the [`persister-expo-sqlite`](https://tinybase.org/api/persister-expo-sqlite/) module.
NB as of TinyBase v5.0, this is now the default and legacy support has been removed.
Thank you to Expo for providing this functionality!
* * *
# v4.4
This relatively straightforward release adds a selection of new listeners to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, and their respective hooks. These are for listening to changes in the 'existence' of entities rather than to their value. For example, the [`addHasTableListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addhastablelistener/) method will let you listen for the presence (or not) of a specific table.
The full set of new existence-listening methods and hooks to work with this is as follows:  
| Existence of:  | Add Listener  | Hook  | Add Listener Hook  |  
| --- | --- | --- | --- |  
| [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/)  | [`addHasTablesListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addhastableslistener/)  | [`useHasTables`](https://tinybase.org/api/ui-react/functions/store-hooks/usehastables/)  | [`useHasTablesListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usehastableslistener/)  |  
| A [`Table`](https://tinybase.org/api/store/type-aliases/store/table/)  | [`addHasTableListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addhastablelistener/)  | [`useHasTable`](https://tinybase.org/api/ui-react/functions/store-hooks/usehastable/)  | [`useHasTableListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usehastablelistener/)  |  
| A [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/)  | [`addHasTableCellListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addhastablecelllistener/)  | [`useHasTableCell`](https://tinybase.org/api/ui-react/functions/store-hooks/usehastablecell/)  | [`useHasTableCellListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usehastablecelllistener/)  |  
| A [`Row`](https://tinybase.org/api/store/type-aliases/store/row/)  | [`addHasRowListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addhasrowlistener/)  | [`useHasRow`](https://tinybase.org/api/ui-react/functions/store-hooks/usehasrow/)  | [`useHasRowListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usehasrowlistener/)  |  
| A [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/)  | [`addHasCellListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addhascelllistener/)  | [`useHasCell`](https://tinybase.org/api/ui-react/functions/store-hooks/usehascell/)  | [`useHasCellListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usehascelllistener/)  |  
| [`Values`](https://tinybase.org/api/store/type-aliases/store/values/)  | [`addHasValuesListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addhasvalueslistener/)  | [`useHasValues`](https://tinybase.org/api/ui-react/functions/store-hooks/usehasvalues/)  | [`useHasValuesListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usehasvalueslistener/)  |  
| A [`Value`](https://tinybase.org/api/store/type-aliases/store/value/)  | [`addHasValueListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addhasvaluelistener/)  | [`useHasValue`](https://tinybase.org/api/ui-react/functions/store-hooks/usehasvalue/)  | [`useHasValueListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usehasvaluelistener/)  |  
These methods may become particularly important in future versions of TinyBase that support `null` as valid Cells and [`Values`](https://tinybase.org/api/store/type-aliases/store/values/).
* * *
# v4.3
We're excited to announce TinyBase 4.3, which provides an integration with [PartyKit](https://www.partykit.io/), a cloud-based collaboration provider.
This allows you to enjoy the benefits of both a "local-first" architecture and a "sharing-first" platform. You can have structured data on the client with fast, reactive user experiences, but also benefit from cloud-based persistence and room-based collaboration.
![PartyKit](https://tinybase.org/partykit.gif)
This release includes two new modules:
  * The [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/) module provides a server class for coordinating clients and persisting [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to the PartyKit cloud.
  * The [`persister-partykit-client`](https://tinybase.org/api/persister-partykit-client/) module provides the [API](https://tinybase.org/api/) to create connections to the server and a binding to your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).


A TinyBase server implementation on PartyKit can be as simple as this:

```
import {TinyBasePartyKitServer} from 'tinybase/persisters/persister-partykit-server';

export default class extends TinyBasePartyKitServer {}

```

On the client, use the familiar [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) [API](https://tinybase.org/api/), passing in a reference to a PartyKit socket object that's been configured to connect to your server deployment and named room:

```
import {createPartyKitPersister} from 'tinybase/persisters/persister-partykit-client';

const persister = createPartyKitPersister[](https://tinybase.org/api/persister-partykit-client/functions/creation/createpartykitpersister/)(
  store,
  new PartySocket({
    host: 'project-name.my-account.partykit.dev',
    room: 'my-partykit-room',
  }),
);
await persister.startAutoSave[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/startautosave/)();
await persister.startAutoLoad[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/startautoload/)();

```

The [`load`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/) method and (gracefully failing) [`save`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/) method on this [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) use HTTPS to get or set full copies of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to the cloud. However, the auto-save and auto-load modes use a websocket to transmit subsequent incremental changes in either direction, making for performant sharing of state between clients.
See and try out this new collaboration functionality in the [Todo App v6 (collaboration)](https://tinybase.org/demos/todo-app/todo-app-v6-collaboration/) demo. This also emphasizes the few changes that need to be made to an existing app to make it instantly collaborative.
Also try out the [tinybase-ts-react-partykit](https://github.com/tinyplex/tinybase-ts-react-partykit) template that gets you up and running with a PartyKit-enabled TinyBase app extremely quickly.
PartyKit supports retries for clients that go offline, and so the disconnected user experience is solid, out of the box. Learn more about configuring this behavior [here](https://docs.partykit.io/reference/partysocket-api/#options).
Note, however, that this release is not yet a full CRDT implementation: there is no clock synchronization and it is more 'every write wins' than 'last write wins'. However, since the transmitted updates are at single cell (or value) granularity, conflicts are minimized. More resilient replication is planned as this integration matures.
* * *
# v4.2
This release adds support for persisting TinyBase to a browser's IndexedDB storage. You'll need to import the new [`persister-indexed-db`](https://tinybase.org/api/persister-indexed-db/) module, and call the [`createIndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/functions/creation/createindexeddbpersister/) function to create the IndexedDB [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/).
The [API](https://tinybase.org/api/) is the same as for all the other [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) APIs:

```
import {createIndexedDbPersister} from 'tinybase/persisters/persister-indexed-db';

store
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {fido: {species: 'dog'}})
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {dog: {price: 5}})
  .setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({open: true});
const indexedDbPersister = createIndexedDbPersister[](https://tinybase.org/api/persister-indexed-db/functions/creation/createindexeddbpersister/)(store, 'petStore');

await indexedDbPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// IndexedDB ->
//   database petStore:
//     objectStore t:
//       object 0:
//         k: "pets"
//         v: {fido: {species: dog}}
//       object 1:
//         k: "species"
//         v: {dog: {price: 5}}
//     objectStore v:
//       object 0:
//         k: "open"
//         v: true

await indexedDbPersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

Note that it is not possible to reactively detect changes to a browser's IndexedDB storage. A polling technique is used to load underlying changes if you choose to 'autoLoad' your data into TinyBase.
This release also upgrades Prettier to v3.0 which has a peer-dependency impact on the tools module. Please report any issues!
* * *
# v4.1
This release introduces the new [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/) module. This provides pre-built components for tabular display of your data in a web application.
![A TinyBase DOM Component](https://tinybase.org/shots/sortedtableinhtmltable-react-demo.png)
## New DOM Components
The following is the list of all the components released in v4.1:  
| Component  | Purpose  |   |  
| --- | --- | --- |  
| [`ValuesInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/valuesinhtmltable/)  | Renders [`Values`](https://tinybase.org/api/store/type-aliases/store/values/).  | [demo](https://tinybase.org/demos/ui-components-react/valuesinhtmltable-react)  |  
| [`TableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/tableinhtmltable/)  | Renders a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/).  | [demo](https://tinybase.org/demos/ui-components-react/tableinhtmltable-react)  |  
| [`SortedTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/sortedtableinhtmltable/)  | Renders a sorted [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), with optional interactivity.  | [demo](https://tinybase.org/demos/ui-components-react/sortedtableinhtmltable-react)  |  
| [`SliceInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/other-components/sliceinhtmltable/)  | Renders a [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) from an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/).  | [demo](https://tinybase.org/demos/ui-components-react/sliceinhtmltable-react)  |  
| [`RelationshipInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/other-components/relationshipinhtmltable/)  | Renders the local and remote [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) of a relationship  | [demo](https://tinybase.org/demos/ui-components-react/relationshipinhtmltable-react)  |  
| [`ResultTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/queries-components/resulttableinhtmltable/)  | Renders a [`ResultTable`](https://tinybase.org/api/queries/type-aliases/result/resulttable/).  | [demo](https://tinybase.org/demos/ui-components-react/resulttableinhtmltable-react)  |  
| [`ResultSortedTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/queries-components/resultsortedtableinhtmltable/)  | Renders a sorted [`ResultTable`](https://tinybase.org/api/queries/type-aliases/result/resulttable/), with optional interactivity.  | [demo](https://tinybase.org/demos/ui-components-react/resultsortedtableinhtmltable-react)  |  
| [`EditableCellView`](https://tinybase.org/api/ui-react-dom/functions/store-components/editablecellview/)  | Renders a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and lets you change its type and value.  | [demo](https://tinybase.org/demos/ui-components-react/editablecellview-react)  |  
| [`EditableValueView`](https://tinybase.org/api/ui-react-dom/functions/store-components/editablevalueview/)  | Renders a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) and lets you change its type and value.  | [demo](https://tinybase.org/demos/ui-components-react/editablevalueview-react)  |  
These pre-built components are showcased in the [UI Components (React)](https://tinybase.org/demos/ui-components-react/) demos. Using them should be very familiar if you have used the more abstract [`ui-react`](https://tinybase.org/api/ui-react/) module:

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {SortedTableInHtmlTable} from 'tinybase/ui-react-dom';

const App = ({store}) => (
  <SortedTableInHtmlTable[](https://tinybase.org/api/ui-react-dom/functions/store-components/sortedtableinhtmltable/) tableId="pets" cellId="species" store={store} />
);

store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({
  pets: {
    fido: {species: 'dog'},
    felix: {species: 'cat'},
  },
});
const app = document.createElement('div');
const root = createRoot(app);
root.render(<App store={store} />);

console.log(app.innerHTML);
// ->
`
<table>
 <thead>
   <tr><th>Id</th><th class="sorted ascending">↑ species</th></tr>
 </thead>
 <tbody>
   <tr><th title="felix">felix</th><td>cat</td></tr>
   <tr><th title="fido">fido</th><td>dog</td></tr>
 </tbody>
</table>
`;

root.unmount();

```

The [`EditableCellView`](https://tinybase.org/api/ui-react-dom/functions/store-components/editablecellview/) component and [`EditableValueView`](https://tinybase.org/api/ui-react-dom/functions/store-components/editablevalueview/) component are interactive input controls for updating [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) content respectively. You can generally use them across your table views by adding the `editable` prop to your table component.
## The new Inspector
![Inspector](https://tinybase.org/shots/inspector-react-demo.png)
The new [`Inspector`](https://tinybase.org/api/the-essentials/using-react/inspector/) component allows you to view, understand, and edit the content of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in a debug web environment. Try it out in most of the demos on the site, including the [Movie Database](https://tinybase.org/demos/movie-database/) demo, pictured. This requires a debug build of the new [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/) module, which is now also included in the UMD distribution.
Also in this release, the [`getResultTableCellIds`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttablecellids/) method and [`addResultTableCellIdsListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresulttablecellidslistener/) method have been added to the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object. The equivalent [`useResultTableCellIds`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresulttablecellids/) hook and [`useResultTableCellIdsListener`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresulttablecellidslistener/) hook have also been added to [`ui-react`](https://tinybase.org/api/ui-react/) module. A number of other minor React hooks have been added to support the components above.
[Demos](https://tinybase.org/demos/) have been updated to demonstrate the [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/) module and the [`Inspector`](https://tinybase.org/api/the-essentials/using-react/inspector/) component where appropriate.
(NB: Previous to v5.0, this component was called `StoreInspector`.)
* * *
# v4.0
This major release provides [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) modules that connect TinyBase to SQLite databases (in both browser and server contexts), and CRDT frameworks that can provide synchronization and local-first reconciliation:  
| Module  | Function  | Storage  |  
| --- | --- | --- |  
| [`persister-sqlite3`](https://tinybase.org/api/persister-sqlite3/)  | [`createSqlite3Persister`](https://tinybase.org/api/persister-sqlite3/functions/creation/createsqlite3persister/)  | SQLite in Node, via [sqlite3](https://github.com/TryGhost/node-sqlite3)  |  
| [`persister-sqlite-wasm`](https://tinybase.org/api/persister-sqlite-wasm/)  | [`createSqliteWasmPersister`](https://tinybase.org/api/the-essentials/persisting-stores/createsqlitewasmpersister/)  | SQLite in a browser, via [sqlite-wasm](https://github.com/tomayac/sqlite-wasm)  |  
| [`persister-cr-sqlite-wasm`](https://tinybase.org/api/persister-cr-sqlite-wasm/)  | [`createCrSqliteWasmPersister`](https://tinybase.org/api/persister-cr-sqlite-wasm/functions/creation/createcrsqlitewasmpersister/)  | SQLite CRDTs, via [cr-sqlite-wasm](https://github.com/vlcn-io/cr-sqlite)  |  
| [`persister-yjs`](https://tinybase.org/api/persister-yjs/)  | [`createYjsPersister`](https://tinybase.org/api/persister-yjs/functions/creation/createyjspersister/)  | Yjs CRDTs, via [yjs](https://github.com/yjs/yjs)  |  
| [`persister-automerge`](https://tinybase.org/api/persister-automerge/)  | [`createSqliteWasmPersister`](https://tinybase.org/api/the-essentials/persisting-stores/createsqlitewasmpersister/)  | Automerge CRDTs, via [automerge-repo](https://github.com/automerge/automerge-repo)  |  
See the [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/) guide for details on how to work with SQLite databases, and the [Synchronizing Data](https://tinybase.org/guides/schemas-and-persistence/synchronizing-data/) guide for more complex synchronization with the CRDT frameworks.
## SQLite databases
You can persist [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to a database with either a JSON serialization or tabular mapping. (See the [`DatabasePersisterConfig`](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/) documentation for more details).
For example, this creates a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) object and saves and loads the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to and from a local SQLite database. It uses an explicit tabular one-to-one mapping for the 'pets' table:

```
store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});

db = new sqlite3.oo1.DB(':memory:', 'c');
const sqlitePersister = createSqliteWasmPersister[](https://tinybase.org/api/the-essentials/persisting-stores/createsqlitewasmpersister/)(store, sqlite3, db, {
  mode: 'tabular',
  tables: {load: {pets: 'pets'}, save: {pets: 'pets'}},
});

await sqlitePersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
console.log(db.exec('SELECT * FROM pets;', {rowMode: 'object'}));
// -> [{_id: 'fido', species: 'dog'}]

db.exec(`INSERT INTO pets (_id, species) VALUES ('felix', 'cat')`);
await sqlitePersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

await sqlitePersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

## CRDT Frameworks
CRDTs allow complex reconciliation and synchronization between clients. Yjs and Automerge are two popular examples. The [API](https://tinybase.org/api/) should be familiar! The following will persist a TinyBase [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a Yjs document:

```
import {createYjsPersister} from 'tinybase/persisters/persister-yjs';
import {Doc} from 'yjs';

store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});

const doc = new Doc();
const yJsPersister = createYjsPersister[](https://tinybase.org/api/persister-yjs/functions/creation/createyjspersister/)(store, doc);

await yJsPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// Store will be saved to the document.
console.log(doc.toJSON());
// -> {tinybase: {t: {pets: {fido: {species: 'dog'}}}, v: {}}}
await yJsPersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

The following is the equivalent for an Automerge document that will sync over the broadcast channel:

```
import {Repo} from '@automerge/automerge-repo';
import {BroadcastChannelNetworkAdapter} from '@automerge/automerge-repo-network-broadcastchannel';
import {createAutomergePersister} from 'tinybase/persisters/persister-automerge';

const docHandler = new Repo({
  network: [new BroadcastChannelNetworkAdapter()],
}).create();
const automergePersister = createAutomergePersister[](https://tinybase.org/api/persister-automerge/functions/creation/createautomergepersister/)(store, docHandler);

await automergePersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// Store will be saved to the document.
console.log(docHandler.doc());
// -> {tinybase: {t: {pets: {fido: {species: 'dog'}}}, v: {}}}
await automergePersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

store.delTables[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltables/)();

```

## New methods
There are three new methods on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object. The [`getContent`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/) method lets you get the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)'s [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) and [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) in one call. The corresponding [`setContent`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setcontent/) method lets you set them simultaneously.
The new setTransactionChanges method lets you replay TransactionChanges (received at the end of a transaction via listeners) into a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), allowing you to take changes from one [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and apply them to another.
Persisters now provide a [`schedule`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/schedule/) method that lets you queue up asynchronous tasks, such as when persisting data that requires complex sequences of actions.
## Breaking changes
The way that data is provided to the [`DoRollback`](https://tinybase.org/api/store/type-aliases/callback/dorollback/) and [`TransactionListener`](https://tinybase.org/api/store/type-aliases/listener/transactionlistener/) callbacks at the end of a transaction has changed. Although previously they directly received content about changed [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) content, they now receive functions that they can choose to call to receive that same data. This has a performance improvement, and your callback or listener can choose between concise TransactionChanges or more verbose [`TransactionLog`](https://tinybase.org/api/store/type-aliases/transaction/transactionlog/) structures for that data.
If you have build a custom persister, you will need to update your implementation. Most notably, the `setPersisted` function parameter is provided with a `getContent` function to get the content from the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) itself, rather than being passed pre-serialized JSON. It also receives information about the changes made during a transaction. The `getPersisted` function must return the content (or nothing) rather than JSON. `startListeningToPersisted` has been renamed `addPersisterListener`, and `stopListeningToPersisted` has been renamed `delPersisterListener`.
* * *
# v3.3
This release allows you to track the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) used across a whole [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), regardless of which [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) they are in.
In a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) (particularly in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) without a [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/)), different Rows can use different Cells. Consider this [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), where each pet has a different set of [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/):

```
store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog'},
  felix: {species: 'cat', friendly: true},
  cujo: {legs: 4},
});

```

Prior to v3.3, you could only get the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) used in each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) at a time (with the [`getCellIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcellids/) method). But you can now use the [`getTableCellIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettablecellids/) method to get the union of all the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) used across the [`Table`](https://tinybase.org/api/store/type-aliases/store/table/):

```
console.log(store.getCellIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcellids/)('pets', 'fido')); // previously available
// -> ['species']

console.log(store.getTableCellIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettablecellids/)('pets')); //    new in v3.3
// -> ['species', 'friendly', 'legs']

```

You can register a listener to track the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) used across a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) with the new [`addTableCellIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtablecellidslistener/) method. Use cases for this might include knowing which headers to render when displaying a sparse [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) in a user interface, or synchronizing data with relational or column-oriented database system.
There is also a corresponding [`useTableCellIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usetablecellids/) hook in the optional [`ui-react`](https://tinybase.org/api/ui-react/) module for accessing these [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) reactively, and a [`useTableCellIdsListener`](https://tinybase.org/api/ui-react/functions/store-hooks/usetablecellidslistener/) hook for more advanced purposes.
Note that the bookkeeping behind these new accessors and listeners is efficient and should not be slowed by the number of Rows in the [`Table`](https://tinybase.org/api/store/type-aliases/store/table/).
This release also passes a getIdChanges function to every [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/)-related listener that, when called, returns information about the [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) changes, both additions and removals, during a transaction. See the [`TableIdsListener`](https://tinybase.org/api/store/type-aliases/listener/tableidslistener/) type, for example.

```
let listenerId = store.addRowIdsListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addrowidslistener/)(
  'pets',
  (store, tableId, getIdChanges) => {
    console.log(getIdChanges());
  },
);

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'lowly', {species: 'worm'});
// -> {lowly: 1}

store.delRow[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delrow/)('pets', 'felix');
// -> {felix: -1}

store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId).delTables[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltables/)();

```

* * *
# v3.2
This release lets you add a listener to the start of a transaction, and detect that a set of changes are about to be made to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
To use this, call the [`addStartTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addstarttransactionlistener/) method on your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). The listener you add can itself mutate the data in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
From this release onwards, listeners added with the existing [`addWillFinishTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addwillfinishtransactionlistener/) method are also able to mutate data. [Transactions](https://tinybase.org/guides/the-basics/transactions/) added with the existing [`addDidFinishTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/adddidfinishtransactionlistener/) method _cannot_ mutate data.

```
const startListenerId = store.addStartTransactionListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addstarttransactionlistener/)(() => {
  console.log('Start transaction');
  console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
  // Can mutate data
});

const willFinishListenerId = store.addWillFinishTransactionListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addwillfinishtransactionlistener/)(() => {
  console.log('Will finish transaction');
  console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
  // Can mutate data
});

const didFinishListenerId = store.addDidFinishTransactionListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/adddidfinishtransactionlistener/)(() => {
  console.log('Did finish transaction');
  console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
  // Cannot mutate data
});

store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {fido: {species: 'dog'}});
// -> 'Start transaction'
// -> {}
// -> 'Will finish transaction'
// -> {pets: {fido: {species: 'dog'}}}
// -> 'Did finish transaction'
// -> {pets: {fido: {species: 'dog'}}}

store
  .delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(startListenerId)
  .delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(willFinishListenerId)
  .delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(didFinishListenerId);

store.delTables[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltables/)();

```

This release also fixes a bug where using the explicit [`startTransaction`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/starttransaction/) method _inside_ another listener could create infinite recursion.
* * *
# v3.1
This new release adds a powerful schema-based type system to TinyBase.
If you define the shape and structure of your data with a [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) or [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/), you can benefit from an enhanced developer experience when operating on it. For example:

```
// Import the 'with-schemas' definition:
import {createStore} from 'tinybase/with-schemas';

// Set a schema for a new Store:
const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setValuesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/)({
  employees: {type: 'number'},
  open: {type: 'boolean', default: false},
});

// Benefit from inline TypeScript errors.
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3}); //                      OK
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: true}); //                   TypeScript error
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3, website: 'pets.com'}); // TypeScript error

```

The schema-based typing is used comprehensively throughout every module - from the core [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) interface all the way through to the [`ui-react`](https://tinybase.org/api/ui-react/) module. See the new [Schema-Based Typing](https://tinybase.org/guides/schemas/schema-based-typing/) guide for instructions on how to use it.
This now means that there are _three_ progressive ways to use TypeScript with TinyBase:
  * Basic Type Support (since v1.0)
  * Schema-based Typing (since v3.1)
  * ORM-like type definitions (since v2.2)


These are each described in the new [TinyBase And TypeScript](https://tinybase.org/guides/the-basics/tinybase-and-typescript/) guide.
Also in v3.1, the ORM-like type definition generation in the tools module has been extended to emit [`ui-react`](https://tinybase.org/api/ui-react/) module definitions.
Finally, v3.1.1 adds a `reuseRowIds` parameter to the [`addRow`](https://tinybase.org/api/the-essentials/setting-data/addrow/) method and the [`useAddRowCallback`](https://tinybase.org/api/ui-react/functions/store-hooks/useaddrowcallback/) hook. It defaults to `true`, for backwards compatibility, but if set to `false`, new [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) will not be reused unless the whole [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) is deleted.
* * *
# v3.0
This major new release adds key/value store functionality to TinyBase. Alongside existing tabular data, it allows you to get, set, and listen to, individual [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) items, each with a unique [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).

```
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3, open: true});
console.log(store.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {employees: 3, open: true}

listenerId = store.addValueListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addvaluelistener/)(
  null,
  (store, valueId, newValue, oldValue) => {
    console.log(`Value '${valueId}' changed from ${oldValue} to ${newValue}`);
  },
);

store.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('employees', 4);
// -> "Value 'employees' changed from 3 to 4"

store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId).delValues[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delvalues/)();

```

[Guides](https://tinybase.org/guides/) and documentation have been fully updated, and certain demos - such as the [Todo App v2 (indexes)](https://tinybase.org/demos/todo-app/todo-app-v2-indexes/) demo, and the [Countries](https://tinybase.org/demos/countries/) demo - have been updated to use this new functionality.
If you use the optional [`ui-react`](https://tinybase.org/api/ui-react/) module with TinyBase, v3.0 now uses and expects React v18.
In terms of core [API](https://tinybase.org/api/) changes in v3.0, there are some minor breaking changes (see below), but the majority of the alterations are additions.
The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object gains the following:
  * The [`setValues`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/) method, [`setPartialValues`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setpartialvalues/) method, and [`setValue`](https://tinybase.org/api/the-essentials/setting-data/setvalue/) method, to set keyed value data into the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
  * The [`getValues`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/) method, [`getValueIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalueids/) method, and [`getValue`](https://tinybase.org/api/the-essentials/getting-data/getvalue/) method, to get keyed value data out of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
  * The [`delValues`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delvalues/) method and [`delValue`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delvalue/) method for removing keyed value data.
  * The [`addValuesListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addvalueslistener/) method, [`addValueIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addvalueidslistener/) method, addValueListener method, and [`addInvalidValueListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addinvalidvaluelistener/) method, for listening to changes to keyed value data.
  * The [`hasValues`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hasvalues/) method, [`hasValue`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hasvalue/) method, and [`forEachValue`](https://tinybase.org/api/store/interfaces/store/store/methods/iterator/foreachvalue/) method, for existence and enumeration purposes.
  * The [`getTablesJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettablesjson/) method, [`getValuesJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvaluesjson/) method, [`setTablesJson`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesjson/) method, and [`setValuesJson`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesjson/) method, for reading and writing tabular and keyed value data to and from a JSON string. Also see below.
  * The [`getTablesSchemaJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettablesschemajson/) method, [`getValuesSchemaJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvaluesschemajson/) method, setTablesSchema method, [`setValuesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/) method, [`delTablesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltablesschema/) method, and delValuesSchema method, for reading and writing tabular and keyed value schemas for the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Also see below.


The following types have been added to the [`store`](https://tinybase.org/api/store/) module:
  * [`Values`](https://tinybase.org/api/store/type-aliases/store/values/), [`Value`](https://tinybase.org/api/store/type-aliases/store/value/), and [`ValueOrUndefined`](https://tinybase.org/api/store/type-aliases/store/valueorundefined/), representing keyed value data in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
  * [`ValueListener`](https://tinybase.org/api/store/type-aliases/listener/valuelistener/) and [`InvalidValueListener`](https://tinybase.org/api/store/type-aliases/listener/invalidvaluelistener/), to describe functions used to listen to (valid or invalid) changes to a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/).
  * [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) and [`ValueSchema`](https://tinybase.org/api/store/type-aliases/schema/valueschema/), to describe the keyed [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) that can be set in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and their types.
  * [`ValueCallback`](https://tinybase.org/api/store/type-aliases/callback/valuecallback/), [`MapValue`](https://tinybase.org/api/store/type-aliases/callback/mapvalue/), [`ChangedValues`](https://tinybase.org/api/store/type-aliases/transaction/changedvalues/), and [`InvalidValues`](https://tinybase.org/api/store/type-aliases/transaction/invalidvalues/), which also correspond to their '[`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/)' equivalents.


Additionally:
  * The persisters' [`load`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/) method and [`startAutoLoad`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/startautoload/) method take an optional `initialValues` parameter for setting [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) when a persisted [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is bootstrapped.
  * The [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) module will undo and redo changes to keyed values in the same way they do for tabular data.
  * The tools module provides a getStoreValuesSchema method for inferring value-based schemas. The getStoreApi method and getPrettyStoreApi method now also provides an ORM-like code-generated [API](https://tinybase.org/api/) for schematized key values.


All attempts have been made to provide backwards compatibility and/or easy upgrade paths.
In previous versions, [`getJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getjson/) method would get a JSON serialization of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)'s tabular data. That functionality is now provided by the [`getTablesJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettablesjson/) method, and the [`getJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getjson/) method instead now returns a two-part array containing the tabular data and the keyed value data.
Similarly, the [`getSchemaJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getschemajson/) method used to return the tabular schema, now provided by the [`getTablesSchemaJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettablesschemajson/) method. The [`getSchemaJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getschemajson/) method instead now returns a two-part array of tabular schema and the keyed value schema.
The [`setJson`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setjson/) method used to take a serialization of just the tabular data object. That's now provided by the [`setTablesJson`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesjson/) method, and the [`setJson`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setjson/) method instead expects a two-part array containing the tabular data and the keyed value data (as emitted by the [`getJson`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getjson/) method). However, for backwards compatibility, if the [`setJson`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setjson/) method is passed an object, it _will_ set the tabular data, as it did prior to v3.0.
Along similar lines, the [`setSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setschema/) method's previous behavior is now provided by the [`setTablesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/) method. The [`setSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setschema/) method now takes two arguments, the second of which is optional, also aiding backward compatibility. The [`delSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delschema/) method removes both types of schema.
* * *
# v2.2
Note: The tools module has been removed in TinyBase v6.0.
This release includes a new tools module. These tools are not intended for production use, but are instead to be used as part of your engineering workflow to perform tasks like generating APIs from schemas, or schemas from data. For example:

```
import {createTools} from 'tinybase/tools';

store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog'},
  felix: {species: 'cat'},
  cujo: {species: 'dog'},
});

const tools = createTools(store);
const [dTs, ts] = tools.getStoreApi('shop');

```

This will generate two files:

```
// -- shop.d.ts --
/* Represents the 'pets' Table. */
export type PetsTable = {[rowId: Id]: PetsRow};
/* Represents a Row when getting the content of the 'pets' Table. */
export type PetsRow = {species: string};
//...

// -- shop.ts --
export const createShop: typeof createShopDecl = () => {
  //...
};

```

This release includes a new `tinybase` CLI tool which allows you to generate Typescript definition and implementation files direct from a schema file:

```
npx tinybase getStoreApi schema.json shop api

    Definition: [...]/api/shop.d.ts
Implementation: [...]/api/shop.ts

```

Finally, the tools module also provides ways to track the overall size and structure of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) for use while debugging.
* * *
# v2.1
This release allows you to create indexes where a single [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) can exist in multiple slices. You can utilize this to build simple keyword searches, for example.
Simply provide a custom getSliceIdOrIds function in the [`setIndexDefinition`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/) method that returns an array of [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/), rather than a single [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/):

```
import {createIndexes} from 'tinybase';

store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog'},
  felix: {species: 'cat'},
  rex: {species: 'dog'},
});

const indexes = createIndexes[](https://tinybase.org/api/indexes/functions/creation/createindexes/)(store);
indexes.setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)('containsLetter', 'pets', (_, rowId) =>
  rowId.split(''),
);

console.log(indexes.getSliceIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getsliceids/)('containsLetter'));
// -> ['f', 'i', 'd', 'o', 'e', 'l', 'x', 'r']
console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('containsLetter', 'i'));
// -> ['fido', 'felix']
console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('containsLetter', 'x'));
// -> ['felix', 'rex']

```

This functionality is showcased in the [Word Frequencies](https://tinybase.org/demos/word-frequencies/) demo if you would like to see it in action.
* * *
# v2.0
**Announcing the next major version of TinyBase 2.0!** This is an exciting release that evolves TinyBase towards becoming a reactive, relational data store, complete with querying, sorting, and pagination. Here are a few of the highlights...
## Query Engine
The [flagship feature](https://tinybase.org/guides/making-queries/using-queries/) of this release is the new [`queries`](https://tinybase.org/api/queries/) module. This allows you to build expressive queries against your data with a SQL-adjacent [API](https://tinybase.org/api/) that we've cheekily called [TinyQL](https://tinybase.org/guides/making-queries/tinyql/). The query engine lets you select, join, filter, group, sort and paginate data. And of course, it's all reactive!
The best way to see the power of this new engine is with the two new demos we've included this release:
![Car Analysis demo screenshot](https://tinybase.org/shots/car-analysis-demo.png)
The [Car Analysis](https://tinybase.org/demos/car-analysis/) demo showcases the analytical query capabilities of TinyBase v2.0, grouping and sorting dimensional data for lightweight analytical usage, graphing, and tabular display. _[Try this demo here](https://tinybase.org/demos/car-analysis/)._
![Movie Database demo screenshot](https://tinybase.org/shots/movie-database-demo.png)
The [Movie Database](https://tinybase.org/demos/movie-database/) demo showcases the relational query capabilities of TinyBase v2.0, joining together information about movies, directors, and actors from across multiple source tables. _[Try this demo here](https://tinybase.org/demos/movie-database/)._
## Sorting and Pagination
To complement the query engine, you can now sort and paginate [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/). This makes it very easy to build grid-like user interfaces (also shown in the demos above). To achieve this, the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) now includes the [`getSortedRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getsortedrowids/) method (and the [`addSortedRowIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addsortedrowidslistener/) method for reactivity), and the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object includes the equivalent [`getResultSortedRowIds`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultsortedrowids/) method and [`addResultSortedRowIdsListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresultsortedrowidslistener/) method.
These are also exposed in the optional [`ui-react`](https://tinybase.org/api/ui-react/) module via the [`useSortedRowIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usesortedrowids/) hook, the [`useResultSortedRowIds`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultsortedrowids/) hook, the [`SortedTableView`](https://tinybase.org/api/ui-react/functions/store-components/sortedtableview/) component and the [`ResultSortedTableView`](https://tinybase.org/api/ui-react/functions/queries-components/resultsortedtableview/) component, and so on.
##  [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) in the [`ui-react`](https://tinybase.org/api/ui-react/) module
The v2.0 query functionality is fully supported by the [`ui-react`](https://tinybase.org/api/ui-react/) module (to match support for [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/), [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), and [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/) objects). The [`useCreateQueries`](https://tinybase.org/api/ui-react/functions/queries-hooks/usecreatequeries/) hook memoizes the creation of app- or component-wide Query objects; and the [`useResultTable`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresulttable/) hook, [`useResultRow`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultrow/) hook, [`useResultCell`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultcell/) hook (and so on) let you bind you component to the results of a query.
This is, of course, supplemented with higher-level components: the [`ResultTableView`](https://tinybase.org/api/ui-react/functions/queries-components/resulttableview/) component, the [`ResultRowView`](https://tinybase.org/api/ui-react/functions/queries-components/resultrowview/) component, the [`ResultCellView`](https://tinybase.org/api/ui-react/functions/queries-components/resultcellview/) component, and so on. See the [Building A UI With Queries](https://tinybase.org/guides/using-queries/building-a-ui-with-queries/) guide for more details.
## It's a big release!
Thank you for all your support as we brought this important new release to life, and we hope you enjoy using it as much as we did building it. Please provide feedback via [GitHub](https://github.com/tinyplex/tinybase), [Bluesky](https://bsky.app/profile/tinybase.bsky.social), and [X](https://x.com/tinybasejs)!
* * *
# v1.3
Adds support for explicit transaction start and finish methods, as well as listeners for transactions finishing.
The [`startTransaction`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/starttransaction/) method and [`finishTransaction`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/finishtransaction/) method allow you to explicitly enclose a transaction that will make multiple mutations to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), buffering all calls to the relevant listeners until it completes when you call the [`finishTransaction`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/finishtransaction/) method.
Unlike the [`transaction`](https://tinybase.org/api/the-essentials/setting-data/transaction/) method, this approach is useful when you have a more 'open-ended' transaction, such as one containing mutations triggered from other events that are asynchronous or not occurring inline to your code. You must remember to also call the [`finishTransaction`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/finishtransaction/) method explicitly when the transaction is started with the [`startTransaction`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/starttransaction/) method, of course.

```
store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
store.addRowListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addrowlistener/)('pets', 'fido', () => console.log('Fido changed'));

store.startTransaction[](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/starttransaction/)();
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'sold', true);
store.finishTransaction[](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/finishtransaction/)();
// -> 'Fido changed'

```

In addition, see the [`addWillFinishTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addwillfinishtransactionlistener/) method and the [`addDidFinishTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/adddidfinishtransactionlistener/) method for details around listening to transactions completing.
Together, this release allows stores to couple their transaction life-cycles together, which we need for the query engine.
Note: this [API](https://tinybase.org/api/) was updated to be more comprehensive in v4.0.
* * *
# v1.2
This adds a way to revert transactions if they have not met certain conditions.
When using the [`transaction`](https://tinybase.org/api/the-essentials/setting-data/transaction/) method, you can provide an optional `doRollback` callback which should return true if you want to revert the whole transaction at its conclusion.
The callback is provided with two objects, `changedCells` and `invalidCells`, which list all the net changes and invalid attempts at changes that were made during the transaction. You will most likely use the contents of those objects to decide whether the transaction should be rolled back.
Note: this [API](https://tinybase.org/api/) was updated to be more comprehensive in v4.0.
* * *
# v1.1
This release allows you to listen to invalid data being added to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), allowing you to gracefully handle errors, rather than them failing silently.
There is a new listener type [`InvalidCellListener`](https://tinybase.org/api/store/type-aliases/listener/invalidcelllistener/) and a [`addInvalidCellListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addinvalidcelllistener/) method in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) interface.
These allow you to keep track of failed attempts to update the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with invalid [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) data. These listeners can also be mutators, allowing you to address any failed writes programmatically.
For more information, please see the [`addInvalidCellListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addinvalidcelllistener/) method documentation. In particular, this explains how this listener behaves for a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with a [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/).
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
