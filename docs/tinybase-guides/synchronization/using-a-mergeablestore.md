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
        * [Using A MergeableStore](https://tinybase.org/guides/synchronization/using-a-mergeablestore/)
        * [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/)
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
  * [Synchronization](https://tinybase.org/guides/synchronization/)
  * [Using A MergeableStore](https://tinybase.org/guides/synchronization/using-a-mergeablestore/)


# Using A MergeableStore
The basic building block of TinyBase's synchronization system is the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) interface.
## The Anatomy Of A [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)
The [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) interface is a sub-type of the regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) - and it shares its underlying implementation.
This means that if you want to add synchronization to your app, all of your existing calls to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) methods will be unchanged - you just need to use the [`createMergeableStore`](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/) function to instantiate it, instead of the classic [`createStore`](https://tinybase.org/api/the-essentials/creating-stores/createstore/) function.

```
import {createMergeableStore} from 'tinybase';

const store1 = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)('store1');
store1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');

console.log(store1.getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
// -> [{pets: {fido: {species: 'dog'}}}, {}]

```

The difference, though, is that a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) records additional metadata as the data is changed so that potential conflicts between it and another instance can be reconciled. This metadata is intended to be opaque, but you can see it if you call the [`getMergeableContent`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/methods/getter/getmergeablecontent/) method:

```
console.log(store1.getMergeableContent[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/methods/getter/getmergeablecontent/)());
// ->
[
  [
    {
      pets: [
        {
          fido: [
            {species: ['dog', 'Nn1JUF-----FnHIC', 290599168]},
            '',
            2682656941,
          ],
        },
        '',
        2102515304,
      ],
    },
    '',
    3506229770,
  ],
  [{}, '', 0],
];

```

Without going into the detail of this, the main point to understand is that each update gets a timestamp, based on a hybrid logical clock (HLC), and a hash. As a result, TinyBase is able to understand which parts of the data have changed, and which changes are the most recent. The resulting 'last write wins' (LWW) approach allows the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to act as a Conflict-Free Replicated Data Type (CRDT).
(Notice we provided an explicit `uniqueId` when we initialized the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/): this is not normally required, but here it just ensures the hashes in the example are deterministic).
We can of course, create a second [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) with different data:

```
const store2 = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
store2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'felix', 'species', 'cat');

```

And now merge them together with the convenient [`merge`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/methods/setter/merge/) method:

```
store1.merge[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/methods/setter/merge/)(store2);

console.log(store1.getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
// -> [{pets: {felix: {species: 'cat'}, fido: {species: 'dog'}}}, {}]

console.log(store2.getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
// -> [{pets: {felix: {species: 'cat'}, fido: {species: 'dog'}}}, {}]

```

Magic!
This all said, it's very unlikely you will need to use the numerous extra methods available on a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) (compared to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)) since most of them exist to support synchronization behind the scenes.
In general, you'll just use a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) in the same was as you would have used a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), and instead rely on the more approachable [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) [API](https://tinybase.org/api/) for synchronization. We'll discuss this next in the [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/) guide.
# Persisting A [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)
Once important thing that you need to be aware of is that a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) cannot currently be persisted by every type of [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) available to a regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). This is partly because some are already designed to work with alternative third-party CRDT systems (like the [`YjsPersister`](https://tinybase.org/api/persister-yjs/interfaces/persister/yjspersister/) and [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/)), and partly because this extra metadata cannot be easily stored in a plain SQLite database.
The following [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) types _can_ be used to persist a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/):  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`SessionPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/)  | Browser session storage  |  
| [`LocalPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/localpersister/)  | Browser local storage  |  
| [`OpfsPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/)  | Browser origin private file system (OPFS)  |  
| [`FilePersister`](https://tinybase.org/api/persister-file/interfaces/persister/filepersister/)  | Local file (where possible)  |  
| [`ReactNativeMmkvPersister`](https://tinybase.org/api/persister-react-native-mmkv/interfaces/persister/reactnativemmkvpersister/)  | MMKV in React Native, via [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)  |  
The following database-oriented [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) types can be used to persist a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/), but _only_ in the 'JSON-serialization' mode:  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`Sqlite3Persister`](https://tinybase.org/api/persister-sqlite3/interfaces/persister/sqlite3persister/)  | SQLite in Node, via [sqlite3](https://github.com/TryGhost/node-sqlite3)  |  
| [`SqliteBunPersister`](https://tinybase.org/api/persister-sqlite-bun/interfaces/persister/sqlitebunpersister/)  | SQLite in Bun, via [bun:sqlite](https://bun.sh/docs/api/sqlite)  |  
| [`SqliteWasmPersister`](https://tinybase.org/api/persister-sqlite-wasm/interfaces/persister/sqlitewasmpersister/)  | SQLite in a browser, via [sqlite-wasm](https://github.com/tomayac/sqlite-wasm)  |  
| [`ExpoSqlitePersister`](https://tinybase.org/api/persister-expo-sqlite/interfaces/persister/exposqlitepersister/)  | SQLite in React Native, via [expo-sqlite](https://github.com/expo/expo/tree/main/packages/expo-sqlite)  |  
| [`ReactNativeSqlitePersister`](https://tinybase.org/api/persister-react-native-sqlite/interfaces/persister/reactnativesqlitepersister/)  | SQLite in React Native, via [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage)  |  
| [`PostgresPersister`](https://tinybase.org/api/persister-postgres/interfaces/persister/postgrespersister/)  | PostgreSQL, via [postgres](https://github.com/porsager/postgres)  |  
| [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/)  | PostgreSQL, via [PGlite](https://github.com/electric-sql/pglite)  |  
The following database-oriented [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) types _cannot_ currently be used to persist a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/):  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`IndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/)  | Browser IndexedDB  |  
| [`RemotePersister`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/)  | Remote server  |  
| [`CrSqliteWasmPersister`](https://tinybase.org/api/persister-cr-sqlite-wasm/interfaces/persister/crsqlitewasmpersister/)  | SQLite CRDTs, via [cr-sqlite-wasm](https://github.com/vlcn-io/cr-sqlite)  |  
| [`ElectricSqlPersister`](https://tinybase.org/api/persister-electric-sql/interfaces/persister/electricsqlpersister/)  | Electric SQL, via [electric-sql](https://github.com/electric-sql/electric)  |  
| [`LibSqlPersister`](https://tinybase.org/api/persister-libsql/interfaces/persister/libsqlpersister/)  | LibSQL for Turso, via [libsql-client](https://github.com/tursodatabase/libsql-client-ts)  |  
| [`PowerSyncPersister`](https://tinybase.org/api/persister-powersync/interfaces/persister/powersyncpersister/)  | PowerSync, via [powersync-sdk](https://github.com/powersync-ja/powersync-js)  |  
| [`YjsPersister`](https://tinybase.org/api/persister-yjs/interfaces/persister/yjspersister/)  | Yjs CRDTs, via [yjs](https://github.com/yjs/yjs)  |  
| [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/)  | Automerge CRDTs, via [automerge-repo](https://github.com/automerge/automerge-repo)  |  
| [`PartyKitPersister`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/)  |  [PartyKit](https://www.partykit.io/), via the [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/) module  |  
Next, let's see how to synchronize [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects together with the [`synchronizers`](https://tinybase.org/api/synchronizers/) module. Please continue on to the [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
