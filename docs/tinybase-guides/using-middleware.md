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
  * [Using Middleware](https://tinybase.org/guides/using-middleware/)


# Using Middleware
This guide describes how to use the [`middleware`](https://tinybase.org/api/middleware/) module, which lets you register callbacks that can manipulate operations made on data in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
The main entry point to using the [`middleware`](https://tinybase.org/api/middleware/) module is the [`createMiddleware`](https://tinybase.org/api/middleware/functions/creation/createmiddleware/) function, which returns a new [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object. That object in turn has methods that let you register callbacks for when specific operations are made on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
## [The Basics](https://tinybase.org/guides/the-basics/)
Here's a simple example to show a [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object in action. We create a middleware callback that will be called whenever a single [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) is set, and makes sure that strings written to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) are always uppercase:

```
import {createMiddleware, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();

const middleware = createMiddleware[](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)(store);
middleware.addWillSetValueCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetvaluecallback/)((valueId, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
});

store.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('shopName', 'happy pets');
console.log(store.getValue[](https://tinybase.org/api/the-essentials/getting-data/getvalue/)('shopName'));
// -> 'HAPPY PETS'

```

## Available Callbacks
A [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object supports 14 different callbacks that you can register. Each callback is passed relevant parameters for the operation, and can return a value. The meaning of this return value depends on the type of callback:
  * For `willSet*` callbacks (and `willApplyChanges`), the return value is used as the new value to be set in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) (as in the upper-casing example above). If the function returns undefined (or void), the operation is cancelled.
  * For `willDel*` callbacks, the return value is a boolean that indicates whether the delete operation should proceed (true) or be cancelled (false).


The full list of `willSet*` callbacks you can register is as follows:  
| [`Callback`](https://tinybase.org/api/common/type-aliases/callback/callback/)  | Parameters  | Called  | Return  |  
| --- | --- | --- | --- |  
| willSetContent  | content  | When setContent is called.  |  [`Content`](https://tinybase.org/api/store/type-aliases/store/content/) or undefined  |  
| willSetTables  | tables  | When setTables is called.  |  [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) or undefined  |  
| willSetTable  | tableId, table  | When setTable is called.  |  [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) or undefined  |  
| willSetRow  | tableId, rowId, row  | When setRow or setCell is called.  |  [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) or undefined  |  
| willSetCell  | tableId, rowId, cellId, cell  | When setCell is called.  |  [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or undefined  |  
| willSetValues  | values  | When setValues is called.  |  [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) or undefined  |  
| willSetValue  | valueId, value  | When setValue is called.  |  [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) or undefined  |  
| willApplyChanges  | changes  | When applyChanges is called.  |  [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/) or undefined  |  
Finally, the full list of `willDel*` callbacks you can register is as follows:  
| [`Callback`](https://tinybase.org/api/common/type-aliases/callback/callback/)  | Parameters  | Called  | Return  |  
| --- | --- | --- | --- |  
| willDelTables  |   | When delTables is called.  | boolean  |  
| willDelTable  | tableId  | When delTable is called.  | boolean  |  
| willDelRow  | tableId, rowId  | When delRow is called.  | boolean  |  
| willDelCell  | tableId, rowId, cellId  | When delCell is called.  | boolean  |  
| willDelValues  |   | When delValues is called.  | boolean  |  
| willDelValue  | valueId  | When delValue is called.  | boolean  |  
The callbacks are registered with the [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object using fluent methods with the `add*` prefix:

```
middleware
  .addWillSetContentCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetcontentcallback/)((content) => { /* ... */})
  .addWillSetTablesCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsettablescallback/)((tables) => { /* ... */ });
// and so on for each callback type

```

##  [`Callback`](https://tinybase.org/api/common/type-aliases/callback/callback/) Chaining And Cascade
When an operation is made on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), the relevant callback will be called. If multiple callbacks are registered for the same operation, they will be called in the order in which they were registered.
If a `willSet*` callback changes the value to be set, the next subsequent `willSet*` callback will receive the new value (and so on). If a `willSet*` callback cancels the operation, subsequent `willSet*` callbacks will not be called.

```
middleware
  .addWillSetRowCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetrowcallback/)((_tableId, _rowId, row) => ({...row, step1: true}))
  .addWillSetRowCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetrowcallback/)((_tableId, _rowId, row) => ({...row, step2: true}));

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog'});
console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', step1: true, step2: true}

```

Returning `undefined` from a callback cancels the entire operation, and subsequent callbacks will not be called:

```
middleware.addWillSetRowCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetrowcallback/)((tableId, _rowId, row) =>
  tableId === 'readonly' ? undefined : row,
);

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('employees', 'alice', {role: 'admin'});
console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('employees', 'alice'));
// -> {role: 'admin', step1: true, step2: true}

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('readonly', 'r1', {data: 'test'});
console.log(store.getTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/)('readonly'));
// -> {}

```

Similarly, if a `willDel*` callback cancels the delete operation, subsequent `willDel*` callbacks will not be called. In other words, a callback cannot re-enable a delete operation that has been cancelled by a previous callback.
In terms of cascading, a less granular operation on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) (e.g. setting a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), which will call `willSetTable`) will also then call more granular callbacks (e.g. `willSetRow`, `willSetCell`) for each relevant [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) and [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/).
BUT there is one important exception to this rule though! Calling `setCell` will also fire `willSetRow` (receiving existing cells merged with the new cell), in addition to the `willSetCell` calls for each [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/). In other words, The entire resulting [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) is applied as though `setRow` had been called with it.
This is to allow for row- or schema-level validation and transformation to be applied even when only `setCell` calls are being made.
Note that `setCell` does not fire `willSetTable`, `willSetTables`, or `willSetContent` though. The 'upwards' cascade only goes as far as `willSetRow` for `setCell` calls.
## Complex Object Callbacks
Callbacks for [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) operations (`willSetCell`, `willSetValue`) receive primitive values directly. But callbacks for [`Row`](https://tinybase.org/api/store/type-aliases/store/row/), [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/), [`Content`](https://tinybase.org/api/store/type-aliases/store/content/), and [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/) operations receive more complex objects — and the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) passes a deep clone of the original data to the callback, not the original itself.
This means you can safely mutate the received object in place and return it, or you can return a completely new object. Both approaches work:

```
// Approach 1: return a new object
middleware.addWillSetRowCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetrowcallback/)((tableId, rowId, row) => {
  return {...row, validated: true};
});

// Approach 2: mutate in place and return
middleware.addWillSetRowCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetrowcallback/)((tableId, rowId, row) => {
  row.validated = true;
  return row;
});

```

Because the callback receives a clone, the original data passed to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) method is never mutated by the middleware regardless of which approach you use.
When middleware transforms a rich object (i.e. returns something other than what it received), that change is applied as a mutation. This ensures the correct reactive behavior: listeners will see the transformed data, and the change will be tracked as a write in [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) synchronization.
Note that there is a small cost to the cloning and mutation tracking for these more complex types of callbacks, so if you have performance-sensitive code, you might prefer to use the more granular [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) callbacks where possible.
##  [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) And Listeners
Mutator listeners (that is, listeners registered with the `isMutator` flag set to `true`) are allowed to write data back to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) during a transaction. Any writes made by a mutator listener will also pass through the middleware pipeline:

```
middleware.addWillSetCellCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetcellcallback/)((_tableId, _rowId, _cellId, cell) =>
  typeof cell === 'string' ? cell.toUpperCase() : cell,
);

store.addCellListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addcelllistener/)('pets', 'fido', 'name', (store) => {
  store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'slug', 'from_listener');
}, true);

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'name', 'Rex');
console.log(store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'name'));
// -> 'REX'
console.log(store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'slug'));
// -> 'FROM_LISTENER'

```

In the example above, both the original `setCell` call and the listener's `setCell` call pass through the uppercase middleware.
##  [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) And [Schemas](https://tinybase.org/guides/schemas/)
The callbacks are called after the schema has been applied to the data. So, for example, if your schema ignores a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) that is being set because it was the wrong type, the `willSetCell` callback will not be called:

```
store.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    species: {type: 'string'},
  },
}); 

middleware.addWillSetCellCallback[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/methods/configuration/addwillsetcellcallback/)((tableId, rowId, cellId, cell) => {
  console.log('WillSetCellCallback');
  return cell;
});

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
// -> 'WillSetCellCallback'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 123);
// (no output, callback not called)

```

It is very important to note that there is no further schema validation again _after_ the [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) has been applied. Your [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) callbacks are powerful! And they need to be implicitly aware of the schema and ensure that they return values that are compliant with it.
So, for example, if a [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) callback returns a transformed value that is the wrong type, that value will be set in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), which might lead to all sorts of surprises.
That said, the power of [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) is that it can be used to implement your own custom validation, defaulting, and correction logic that is not easily captured in a plain type-based schema. Just be aware of the relationship between [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) and schemas, and use that power wisely!
## When [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) Is Not Called
There are two specific cases where [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) callbacks will not be called:
  * When `doRollback` returns true at the end of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) transaction: the transaction will be rolled back and no callbacks will be called on the changes that are made to the data to return it to its previous state.
  * When the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is being updated from a checkpoint (using the checkpoint module): the changes from the checkpoint will be applied directly to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) without calling any of the callbacks on the changes required to get it to the old 'undo' state or the new 'redo' state.


## Summary
[`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) gives you a powerful way to manipulate data coming into the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), and to cancel operations on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). It is important to understand the chaining and cascade of callbacks, and to be aware of the relationship between [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) and schemas.
Now that you understand how to manipulate data coming into the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), let's learn how to save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data. For that we proceed to the [Persistence](https://tinybase.org/guides/persistence/) guides.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
