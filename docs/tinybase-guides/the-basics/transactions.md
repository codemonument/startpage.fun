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
  * [Transactions](https://tinybase.org/guides/the-basics/transactions/)


# Transactions
This guide shows you how to wrap multiple changes to the data in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
A transaction is a sequence of changes made to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). No listeners will be fired until the full transaction is complete. This is a useful way to debounce listener side-effects and ensure that you are only responding to net changes. [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/) are made silently during the transaction, and listeners relevant to the changes you have made will instead only be called when the whole transaction is complete.
A transaction can also be rolled back and the original state of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) will be restored.
## Creating Transactions
The [`transaction`](https://tinybase.org/api/the-essentials/setting-data/transaction/) method takes a function that makes multiple mutations to the store, buffering all calls to the relevant listeners until it completes.

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const listenerId = store.addRowListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addrowlistener/)('pets', 'fido', () =>
  console.log('Fido changed'),
);

// Multiple changes, not in a transaction
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'sold', false);
// -> 'Fido changed'
// -> 'Fido changed'

// Multiple changes in a transaction
store.transaction[](https://tinybase.org/api/the-essentials/setting-data/transaction/)(() => {
  store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'walnut');
  store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'sold', true);
});
// -> 'Fido changed'

store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId);

```

If multiple changes are made to a piece of [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data throughout the transaction, a relevant listener will only be called with the final value (assuming it is different to the value at the start of the transaction), regardless of the changes that happened in between. For example, if a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) had a value `'a'` and then, within a transaction, it was changed to `'b'` and then `'c'`, any [`CellListener`](https://tinybase.org/api/store/type-aliases/listener/celllistener/) registered for that cell would be called once as if there had been a single change from `'a'` to `'c'`:

```
const listenerId2 = store.addCellListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addcelllistener/)(
  'pets',
  'fido',
  'color',
  (store, tableId, rowId, cellId, newCell) =>
    console.log(`Fido color changed to ${newCell}`),
);

store.transaction[](https://tinybase.org/api/the-essentials/setting-data/transaction/)(() => {
  store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'black');
  store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
});
// -> 'Fido color changed to brown'

store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId2);

```

Note that transactions can be nested. Relevant listeners will be called only when the outermost one completes.
## Rolling Back Transactions
The [`transaction`](https://tinybase.org/api/the-essentials/setting-data/transaction/) method takes a second optional parameter, `doRollback`. This is a callback that you can use to rollback the transaction if it did not complete to your satisfaction.
This example makes multiple changes to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), including some attempts to update a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) with invalid values. The `doRollback` callback fetches information about the changes and invalid attempts, and then judges that the transaction should be rolled back to its original state.

```
store.transaction[](https://tinybase.org/api/the-essentials/setting-data/transaction/)(
  () => {
    store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'black');
    store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'eyes', new Date(0));
    store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'buyer', new Date(1));
  },
  () => {
    const [, , changedCells, invalidCells] = store.getTransactionLog[](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/gettransactionlog/)();
    console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
    // -> {pets: {fido: {species: 'dog', color: 'black', sold: true}}}
    console.log(changedCells);
    // -> {pets: {fido: {color: ['brown', 'black']}}}
    console.log(invalidCells);
    // -> {pets: {fido: {eyes: [new Date(0)], buyer: [new Date(1)]}}}
    return invalidCells['pets'] != null;
  },
);

console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'brown', sold: true}}}

```

## Listening to transactions
You can register listeners to the start and finish of a transaction. There are three points in its lifecycle:  
| Event  | Add a listener with  | When  | Can mutate data  |  
| --- | --- | --- | --- |  
| Start  | [`addStartTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addstarttransactionlistener/)  | Before changes  | Yes  |  
| WillFinish  | [`addWillFinishTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addwillfinishtransactionlistener/)  | After changes and other mutator listeners  | Yes  |  
| DidFinish  | [`addDidFinishTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/adddidfinishtransactionlistener/)  | After non-mutator listeners  | No  |  
For example:

```
store.delTables[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltables/)();

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

```

## Transaction Lifecycle
Since TinyBase now has multiple phases around a transaction, it helps to think of one complete transaction in this order:
  1. The transaction starts.
  2. `startTransaction` listeners fire (as added with the [`addStartTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addstarttransactionlistener/) method).
  3. Your transaction actions run.
  4. For each attempted write in those actions, middleware callbacks run first (as added with the addWillSetRow method, for example).
  5. [`Changes`](https://tinybase.org/api/store/type-aliases/transaction/changes/) are buffered in the transaction log; non-mutating listeners are not called yet.
  6. Mutating listeners fire for net changes and invalid attempts (as added with the [`addRowListener`](https://tinybase.org/api/the-essentials/listening-for-changes/addrowlistener/) method, for example, with the final `mutator` flag set).
  7. Any writes made by mutating listeners also go through middleware, but do not trigger mutating listeners again.
  8. If provided to the [`transaction`](https://tinybase.org/api/the-essentials/setting-data/transaction/) method or the [`startTransaction`](https://tinybase.org/api/store/interfaces/store/store/methods/transaction/starttransaction/) method, `doRollback` runs with the transaction log after all mutating listeners and their writes.
  9. If `doRollback` returns `true`, TinyBase rolls back the transaction changes.
  10. `willFinish` transaction listeners fire (as added with the [`addWillFinishTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addwillfinishtransactionlistener/) method).
  11. Non-mutating listeners fire for the final committed result (if the transaction has not rolled back).
  12. `didFinish` transaction listeners fire (as added with the [`addDidFinishTransactionListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/adddidfinishtransactionlistener/) method).


If transactions are nested, this full lifecycle only happens when the outermost transaction finishes.
## Summary
We've covered all of the essential basics of working with a TinyBase [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), but that's still just the start!
Before we move on, we have a quick aside about how to use various flavors of TinyBase in your app, in the [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
