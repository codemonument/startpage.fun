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
  * [Listening To Stores](https://tinybase.org/guides/the-basics/listening-to-stores/)


# Listening To Stores
This guide shows you how to listen to changes in the data in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
By now, you'll have noticed that there are always consistent methods for each level of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) hierarchy, and the way you register listeners is no exception:
  * Listen to [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) with the [`addValuesListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addvalueslistener/) method.
  * Listen to [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) with the [`addValueIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addvalueidslistener/) method.
  * Listen to a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) with the [`addValueListener`](https://tinybase.org/api/the-essentials/listening-for-changes/addvaluelistener/) method.


And for tabular data:
  * Listen to [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) with the [`addTablesListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtableslistener/) method.
  * Listen to [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) with the [`addTableIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtableidslistener/) method.
  * Listen to a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) with the [`addTableListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtablelistener/) method.
  * Listen to Cells [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) across a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) with the [`addTableCellIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtablecellidslistener/) method.
  * Listen to [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) with the [`addRowIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addrowidslistener/) method.
  * Listen to sorted [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) with the [`addSortedRowIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addsortedrowidslistener/) method.
  * Listen to a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) with the [`addRowListener`](https://tinybase.org/api/the-essentials/listening-for-changes/addrowlistener/) method.
  * Listen to [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) with the [`addCellIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addcellidslistener/) method.
  * Listen to a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) with the [`addCellListener`](https://tinybase.org/api/the-essentials/listening-for-changes/addcelllistener/) method.


You can also listen to attempts to write invalid data to a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) with the [`addInvalidValueListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addinvalidvaluelistener/) method, and to a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) with the [`addInvalidCellListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addinvalidcelllistener/) method.
Let's start with the simplest type of listener, addTablesListener, which listens to changes to any tabular data in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Firstly, let's set up some simple data:

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({
  pets: {fido: {species: 'dog'}},
  species: {dog: {price: 5}},
});

```

We can then use the [`addTablesListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtableslistener/) method to register a function on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) that will be called whenever the data in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) changes:

```
const listenerId = store.addTablesListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtableslistener/)(() =>
  console.log('Tables changed!'),
);

```

Let's test it out by updating a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/):

```
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('species', 'dog', 'price', 6);
// -> 'Tables changed!'

```

The listener will be called, regardless of which type of setter method was used to make the change. But a change needs to have been made! If a setter method was used to no effect, the listener is not called:

```
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
// Since the data didn't actually change, the listener was not called.

```

It is important to note that by default, you can't mutate the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with code inside a listener, and attempting to do so will fail silently. We cover how to mutate the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) from with in a listener (in order to adhere to a [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/), for example) in the [Mutating Data With Listeners](https://tinybase.org/guides/schemas/mutating-data-with-listeners/) guide.
## Cleaning Up Listeners
You will have noticed that the [`addTablesListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtableslistener/) method didn't return a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object (so you can't chain other methods after it), but an [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) representing the registration of that listener.
You can use that [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) to remove the listener at a later stage with the [`delListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/) method:

```
store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId);
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('species', 'dog', 'price', 7);
// Listener has been unregistered and so is not called.

```

It's good habit to remove the listeners you are no longer using. Note that listener [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) are commonly re-used, so you have removed a listener with a given [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/), don't try to use that [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) again.
## Listener Parameters
In the example above, we registered a listener that didn't take any parameters. However, all [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) listeners are called with at least a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), and often a convenient `getCellChange` function that lets you inspect changes that might have happened:

```
const listenerId2 = store.addTablesListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtableslistener/)((store, getCellChange) =>
  console.log(getCellChange('species', 'dog', 'price')),
);

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('species', 'dog', 'price', 8);
// -> [true, 7, 8]

store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId2);

```

See the [`addTablesListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtableslistener/) method documentation for more information on these parameters.
When you listen to changes down inside a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) (with more granular listeners), you will also be passed [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) parameters reflecting what changed.
For example, here we register a listener on the `fido` [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in the `pets` [`Table`](https://tinybase.org/api/store/type-aliases/store/table/):

```
const listenerId3 = store.addRowListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addrowlistener/)(
  'pets',
  'fido',
  (store, tableId, rowId) =>
    console.log(`${rowId} row in ${tableId} table changed`),
);

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
// -> 'fido row in pets table changed'

store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId3);

```

When you register a [`CellListener`](https://tinybase.org/api/store/type-aliases/listener/celllistener/) listener with the [`addCellListener`](https://tinybase.org/api/the-essentials/listening-for-changes/addcelllistener/) method, that also receives parameters containing the old and new [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) values.
## Wildcard Listeners
The fact that the listeners are passed parameters for what changed becomes very useful when you register wildcard listeners. These listen to changes at a particular part of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) hierarchy but not necessarily to a specific object.
So for example, you can listen to changes to any [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in a given [`Table`](https://tinybase.org/api/store/type-aliases/store/table/). To wildcard what you want to listen to, simply use `null` in place of an [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) argument when you add a listener:

```
const listenerId4 = store.addRowListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addrowlistener/)(null, null, (store, tableId, rowId) =>
  console.log(`${rowId} row in ${tableId} table changed`),
);

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'walnut');
// -> 'fido row in pets table changed'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('species', 'dog', 'price', '9');
// -> 'dog row in species table changed'

store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId4);

```

You can intermingle wildcards and actual [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) values for any of the parameters. So, for example, you could listen to the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) values with a given [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) in any [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in a given [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), and so on.
Note that you can't use the wildcard technique with the [`addSortedRowIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addsortedrowidslistener/) method. You must explicitly specify just one [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), for performance reasons.
## Summary
We've now seen how to create a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), set data in it, read it back out, and set up listeners to detect whenever it changes. Finally we'll cover how to wrap multiple changes together, in the [Transactions](https://tinybase.org/guides/the-basics/transactions/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
