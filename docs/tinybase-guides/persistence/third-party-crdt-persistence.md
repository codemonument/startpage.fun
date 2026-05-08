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
        * [An Intro To Persistence](https://tinybase.org/guides/persistence/an-intro-to-persistence/)
        * [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/)
        * [Third-Party CRDT Persistence](https://tinybase.org/guides/persistence/third-party-crdt-persistence/)
        * [Custom Persistence](https://tinybase.org/guides/persistence/custom-persistence/)
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
  * [Persistence](https://tinybase.org/guides/persistence/)
  * [Third-Party CRDT Persistence](https://tinybase.org/guides/persistence/third-party-crdt-persistence/)


# Third-Party CRDT Persistence
Some persister modules let you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to underlying storage types that can provide synchronization, local-first reconciliation, and CRDTs.  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`YjsPersister`](https://tinybase.org/api/persister-yjs/interfaces/persister/yjspersister/)  | Yjs CRDTs, via [yjs](https://github.com/yjs/yjs)  |  
| [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/)  | Automerge CRDTs, via [automerge-repo](https://github.com/automerge/automerge-repo)  |  
The APIs are exactly the same as for other persisters, but there is some additional infrastructure behind the scenes to ensure that the updates are as incremental and atomic as possible, improving the reconciliation capabilities.
For TinyBase v5's first-party CRDT and synchronization techniques, see instead the [Synchronization](https://tinybase.org/guides/synchronization/) guides.
## A [Synchronization](https://tinybase.org/guides/synchronization/) Walkthrough
For fully-fledged synchronization with a third-party framework, you will want to use both auto-load and auto-save between the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and the underlying synchronization framework.
In this case, we have two Yjs documents that are each bound to their respective [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects by a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) with auto-load and auto-save:

```
import {createStore} from 'tinybase';
import {createYjsPersister} from 'tinybase/persisters/persister-yjs';
import {Doc} from 'yjs';

const doc1 = new Doc();
const store1 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
const persister1 = createYjsPersister[](https://tinybase.org/api/persister-yjs/functions/creation/createyjspersister/)(store1, doc1);
await persister1.startAutoLoad[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/startautoload/)();
await persister1.startAutoSave[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/startautosave/)();

const doc2 = new Doc();
const store2 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
const persister2 = createYjsPersister[](https://tinybase.org/api/persister-yjs/functions/creation/createyjspersister/)(store2, doc2);
await persister2.startAutoLoad[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/startautoload/)();
await persister2.startAutoSave[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/startautosave/)();

```

Typically, real-world synchronization for Yjs happens between two systems via a Yjs connection provider with state machine vectors and so on. For the purposes of illustration here, we synthesize that with a simple `syncDocs` function that copies full state between the documents:

```
import {applyUpdate, encodeStateAsUpdate} from 'yjs';

const syncDocs = async () => {
  // ...
  applyUpdate(doc1, encodeStateAsUpdate(doc2));
  applyUpdate(doc2, encodeStateAsUpdate(doc1));
};

```

It is good practice to establish a synchronization baseline between the Stores:

```
await syncDocs();

```

Now imagine that we make a change to one of the Stores, and synchronize again:

```
store1.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
await syncDocs();

```

If all goes well, we should see those changes in the other [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)!

```
console.log(store2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}}}

```

And of course we can make changes propagate back again:

```
store2.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('open', true);
await syncDocs();
console.log(store1.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {open: true}

```

## Conflicts
TinyBase deliberately avoids having an opinion on simultaneous or conflicting updates, deferring that to the underlying CRDT framework. However, most changes are dealt with as atomically as possible - in other words at a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) level - in order to limit data loss by default.
Here we update two adjacent Cells in the same [`Row`](https://tinybase.org/api/store/type-aliases/store/row/):

```
store1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
store2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'legs', 4);
// ...
await syncDocs();
console.log(store1.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'brown', 'legs': 4}}}
console.log(store2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'brown', 'legs': 4}}}

```

If there are two conflicting changes to the same [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/), Yjs typically runs a tie-break based on the client ID of the document, where the higher one wins.

```
// Here we force the clientID so that the reconciliation is deterministic.
doc1.clientID = 1;
doc2.clientID = 2;

store1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'price', 4);
store2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'price', 5);
// ...
await syncDocs();
console.log(store1.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'price'));
// -> 5
console.log(store2.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'price'));
// -> 5

```

However, in production use, you are highly discouraged from setting the clientID yourself, and hence the reconciliation will not be deterministic without manual resolution.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
