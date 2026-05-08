[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
  1. No results found


  * [Guides](https://tinybase.org/guides/)
  * [Demos](https://tinybase.org/demos/)
  * [API](https://tinybase.org/api/)
  * [GitHub](https://github.com/tinyplex/tinybase)


  * [TinyBase](https://tinybase.org/)
    * [Guides](https://tinybase.org/guides/)
      * [The Basics](https://tinybase.org/guides/the-basics/)
        * [Getting Started](https://tinybase.org/guides/the-basics/getting-started/)
        * [Creating A Store](https://tinybase.org/guides/the-basics/creating-a-store/)
        * [Writing To Stores](https://tinybase.org/guides/the-basics/writing-to-stores/)
        * [Reading From Stores](https://tinybase.org/guides/the-basics/reading-from-stores/)
        * [Listening To Stores](https://tinybase.org/guides/the-basics/listening-to-stores/)
        * [Transactions](https://tinybase.org/guides/the-basics/transactions/)
        * [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/)
        * [TinyBase And TypeScript](https://tinybase.org/guides/the-basics/tinybase-and-typescript/)
        * [Architectural Options](https://tinybase.org/guides/the-basics/architectural-options/)
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
  * [The Basics](https://tinybase.org/guides/the-basics/)
  * [Reading From Stores](https://tinybase.org/guides/the-basics/reading-from-stores/)


# Reading From Stores
This guide shows you how to read data from a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
While we're here, notice how the the [`createStore`](https://tinybase.org/api/the-essentials/creating-stores/createstore/) function and setter methods return the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) again, so we can easily instantiate it by chaining methods together:

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)()
  .setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3, open: true})
  .setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({
    pets: {fido: {species: 'dog'}},
    species: {dog: {price: 5}},
  });

```

To get the data out again, according to the level of the hierarchy that you want to get data for, you can use the [`getValues`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/) method, the [`getValue`](https://tinybase.org/api/the-essentials/getting-data/getvalue/) method, the [`getTables`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/) method, the [`getTable`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/) method, the [`getRow`](https://tinybase.org/api/the-essentials/getting-data/getrow/) method, or the [`getCell`](https://tinybase.org/api/the-essentials/getting-data/getcell/) method.
By now, this should be starting to look intuitive. (I hope so! If not, let me know!)

```
console.log(store.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {employees: 3, open: true}

console.log(store.getValue[](https://tinybase.org/api/the-essentials/getting-data/getvalue/)('employees'));
// -> 3

console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}}, species: {dog: {price: 5}}}

console.log(store.getTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/)('pets'));
// -> {fido: {species: 'dog'}}

console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog'}

console.log(store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'species'));
// -> 'dog'

```

It is worth noting that the return types of these methods are by value, not by reference. So if you manipulate the returned object, the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is not updated:

```
const fido = store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido');
fido.color = 'brown';
console.log(fido);
// -> {species: 'dog', color: 'brown'}

console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog'}

```

## Handling Non-Existent Data
The [`hasValue`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hasvalue/) method, the [`hasTable`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hastable/) method, the [`hasRow`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hasrow/) method, and the [`hasCell`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hascell/) method can be used to see whether a given object exists, without having to read it:

```
console.log(store.hasValue[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hasvalue/)('website'));
// -> false

console.log(store.hasTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hastable/)('customers'));
// -> false

console.log(store.hasRow[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hasrow/)('pets', 'fido'));
// -> true

```

When you try to access something that doesn't exist, you'll receive an `undefined` value for a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) or [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/), or an empty object:

```
console.log(store.getValue[](https://tinybase.org/api/the-essentials/getting-data/getvalue/)('website'));
// -> undefined

console.log(store.getTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/)('customers'));
// -> {}

console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'felix'));
// -> {}

console.log(store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'color'));
// -> undefined

```

## Enumerating [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/)
A [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) contains [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) and [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) objects, keyed by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/). A [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) contains [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects, keyed by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/). And a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) contains [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) objects, keyed by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).
You can enumerate the [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) keys for each with the [`getValueIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalueids/) method, the [`getTableIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettableids/) method, the [`getRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getrowids/) method, or the [`getCellIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcellids/) method - each of which return arrays:

```
console.log(store.getValueIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalueids/)());
// -> ['employees', 'open']

console.log(store.getTableIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettableids/)());
// -> ['pets', 'species']

console.log(store.getRowIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getrowids/)('pets'));
// -> ['fido']

console.log(store.getCellIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcellids/)('pets', 'fido'));
// -> ['species']

```

There is also the [`getSortedRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getsortedrowids/) method that lets you get the [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) sorted by a specific [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/), and the [`getTableCellIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettablecellids/) method that lets you get all the [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) used across a whole [`Table`](https://tinybase.org/api/store/type-aliases/store/table/).
Again, the return types of these methods are by value, not by reference. So if you manipulate the returned array, the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is not updated:

```
const tableIds = store.getTableIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettableids/)();
tableIds.pop();
console.log(tableIds);
// -> ['pets']

console.log(store.getTableIds[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettableids/)());
// -> ['pets', 'species']

```

Finally, the [`forEachValue`](https://tinybase.org/api/store/interfaces/store/store/methods/iterator/foreachvalue/) method, the [`forEachTable`](https://tinybase.org/api/store/interfaces/store/store/methods/iterator/foreachtable/) method, the [`forEachRow`](https://tinybase.org/api/store/interfaces/store/store/methods/iterator/foreachrow/) method, and the [`forEachCell`](https://tinybase.org/api/store/interfaces/store/store/methods/iterator/foreachcell/) method each provide a convenient way to iterate over these objects and their children in turn:

```
store.forEachTable[](https://tinybase.org/api/store/interfaces/store/store/methods/iterator/foreachtable/)((tableId, forEachRow) => {
  console.log(tableId);
  forEachRow[](https://tinybase.org/api/store/interfaces/store/store/methods/iterator/foreachrow/)((rowId) => console.log(`- ${rowId}`));
});
// -> 'pets'
// -> '- fido'
// -> 'species'
// -> '- dog'

```

## Summary
So far, this should seem relatively straightforward. For more information on all of these methods, you'll find a lot more in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) documentation.
The reactive TinyBase magic starts to happen when we register listeners on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) so we don't have to keep explicitly fetching data.
For that, we proceed to the [Listening To Stores](https://tinybase.org/guides/the-basics/listening-to-stores/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
