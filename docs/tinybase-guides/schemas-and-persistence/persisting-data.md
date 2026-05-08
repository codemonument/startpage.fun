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
  * [An Intro To Persistence](https://tinybase.org/guides/persistence/an-intro-to-persistence/)


# An Intro To Persistence
The persister module framework lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from different locations, or underlying storage types.
Remember that TinyBase Stores are in-memory data structures, so you will generally want to use a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) to store that data longer-term. For example, they are useful for preserving [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data between browser sessions or reloads, saving or loading browser state to or from a server, saving [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to disk in a environment with filesystem access, or, in v4.0 and above, to SQLite, PostgreSQL, or CRDT frameworks like [Yjs](https://yjs.dev/) and [Automerge](https://automerge.org/).
## Types of Persisters
Many entry points are provided (in separately installed modules), each of which returns different types of [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) that can load and save a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Between them, these allow you to store your TinyBase data locally, remotely, to databases, and across synchronization boundaries with CRDT frameworks.
### Basic Persisters
These are reasonably simple Persisters that generally load and save a JSON-serialized version of your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). They are good for smaller data sets and where you need to have something saved in a basic browser or server environment.  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`SessionPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/)  | Browser session storage  |  
| [`LocalPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/localpersister/)  | Browser local storage  |  
| [`OpfsPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/)  | Browser origin private file system (OPFS)  |  
| [`FilePersister`](https://tinybase.org/api/persister-file/interfaces/persister/filepersister/)  | Local file  |  
| [`IndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/)  | Browser IndexedDB  |  
| [`RemotePersister`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/)  | Remote server  |  
| [`ReactNativeMmkvPersister`](https://tinybase.org/api/persister-react-native-mmkv/interfaces/persister/reactnativemmkvpersister/)  | MMKV in React Native, via [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)  |  
### Database Persisters
These are Persisters that can load and save either a JSON-serialized, or tabular version of your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) into a database. They are good for larger data sets, often on a server - but can also work in a browser environment when a SQLite instance is available.  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`Sqlite3Persister`](https://tinybase.org/api/persister-sqlite3/interfaces/persister/sqlite3persister/)  | SQLite in Node, via [sqlite3](https://github.com/TryGhost/node-sqlite3)  |  
| [`SqliteBunPersister`](https://tinybase.org/api/persister-sqlite-bun/interfaces/persister/sqlitebunpersister/)  | SQLite in Bun, via [bun:sqlite](https://bun.sh/docs/api/sqlite)  |  
| [`SqliteWasmPersister`](https://tinybase.org/api/persister-sqlite-wasm/interfaces/persister/sqlitewasmpersister/)  | SQLite in a browser, via [sqlite-wasm](https://github.com/tomayac/sqlite-wasm)  |  
| [`ExpoSqlitePersister`](https://tinybase.org/api/persister-expo-sqlite/interfaces/persister/exposqlitepersister/)  | SQLite in React Native, via [expo-sqlite](https://github.com/expo/expo/tree/main/packages/expo-sqlite)  |  
| [`ReactNativeSqlitePersister`](https://tinybase.org/api/persister-react-native-sqlite/interfaces/persister/reactnativesqlitepersister/)  | SQLite in React Native, via [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage)  |  
| [`CrSqliteWasmPersister`](https://tinybase.org/api/persister-cr-sqlite-wasm/interfaces/persister/crsqlitewasmpersister/)  | SQLite CRDTs, via [cr-sqlite-wasm](https://github.com/vlcn-io/cr-sqlite)  |  
| [`ElectricSqlPersister`](https://tinybase.org/api/persister-electric-sql/interfaces/persister/electricsqlpersister/)  | Electric SQL, via [electric](https://github.com/electric-sql/electric)  |  
| [`LibSqlPersister`](https://tinybase.org/api/persister-libsql/interfaces/persister/libsqlpersister/)  | LibSQL for Turso, via [libsql-client](https://github.com/tursodatabase/libsql-client-ts)  |  
| [`PowerSyncPersister`](https://tinybase.org/api/persister-powersync/interfaces/persister/powersyncpersister/)  | PowerSync, via [powersync-sdk](https://github.com/powersync-ja/powersync-js)  |  
| [`PostgresPersister`](https://tinybase.org/api/persister-postgres/interfaces/persister/postgrespersister/)  | PostgreSQL, via [postgres](https://github.com/porsager/postgres)  |  
| [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/)  | PostgreSQL, via [PGlite](https://github.com/electric-sql/pglite)  |  
See the [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/) guide for details on how to work with databases.
### Durable Object Persisters
These Persisters are designed to work with Durable Objects, which are a specialized type of server-side storage provided by CloudFlare. In conjunction with a [`WsServerDurableObject`](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/), they allow you to synchronize clients and then also persist data in a Durable Object, either in its key-value, or SQlite storage form.  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`DurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/)  | Cloudflare Durable Object key-value storage  |  
| [`DurableObjectSqlStoragePersister`](https://tinybase.org/api/persister-durable-object-sql-storage/interfaces/persister/durableobjectsqlstoragepersister/)  | Cloudflare Durable Object SQLite storage  |  
### Third-Party CRDT & Socket Persisters
These Persisters can bind your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) into third-party CRDT frameworks, or synchronize over sockets to PartyKit.  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`YjsPersister`](https://tinybase.org/api/persister-yjs/interfaces/persister/yjspersister/)  | Yjs CRDTs, via [yjs](https://github.com/yjs/yjs)  |  
| [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/)  | Automerge CRDTs, via [automerge-repo](https://github.com/automerge/automerge-repo)  |  
| [`PartyKitPersister`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/)  |  [PartyKit](https://www.partykit.io/), via the [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/) module  |  
See the [Third-Party CRDT Persistence](https://tinybase.org/guides/persistence/third-party-crdt-persistence/) guide for more complex synchronization with the CRDT frameworks.
There is also a way to develop custom Persisters of your own, which we describe in the [Custom Persistence](https://tinybase.org/guides/persistence/custom-persistence/) guide.
##  [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) Operations
A [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) lets you explicitly save or load data, with the [`save`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/) method and the [`load`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/) method respectively. These methods are both asynchronous (since the underlying data storage may also be) and return promises. As a result you should use the `await` keyword to call them in a way that guarantees subsequent execution order.
In this example, a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) saves data to, and loads it from, the browser's session storage:

```
import {createStore} from 'tinybase';
import {createSessionPersister} from 'tinybase/persisters/persister-browser';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)()
  .setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3})
  .setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = createSessionPersister[](https://tinybase.org/api/the-essentials/persisting-stores/createsessionpersister/)(store, 'petStore');

await persister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
console.log(sessionStorage.getItem('petStore'));
// -> '[{"pets":{"fido":{"species":"dog"}}},{"employees":3}]'

sessionStorage.setItem(
  'petStore',
  '[{"pets":{"toto":{"species":"dog"}}},{"employees":4}]',
);
await persister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {toto: {species: 'dog'}}}
console.log(store.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {employees: 4}

sessionStorage.clear[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/lifecycle/clear/)();

```

## Automatic Loading and Saving
When you don't want to deal with explicit persistence operations, a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) object also provides automatic saving and loading. Automatic saving listens for changes to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and persists the data immediately. Automatic loading listens (or polls) for changes to the persisted data and reflects those changes in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
You can start automatic saving or loading with the [`startAutoSave`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/startautosave/) method and [`startAutoLoad`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/startautoload/) method. The [`startAutoPersisting`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/startautopersisting/) method is a convenience wrapper to do both in one command. These methods are asynchronous since they will do an immediate save and load before starting to listen for subsequent changes. You can stop the behavior with the [`stopAutoSave`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/stopautosave/) method, [`stopAutoLoad`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/stopautoload/) method, the [`stopAutoPersisting`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/stopautopersisting/) method, and/or the [`destroy`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/) method.
In this example, both automatic loading and saving are configured:

```
await persister.startAutoPersisting[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/startautopersisting/)([{pets: {fido: {species: 'dog'}}}, {}]);

store.delValues[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delvalues/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {felix: {species: 'cat'}}});
// ...
console.log(sessionStorage.getItem('petStore'));
// -> '[{"pets":{"felix":{"species":"cat"}}},{}]'

sessionStorage.setItem('petStore', '[{"pets":{"toto":{"species":"dog"}}},{}]');
// -> StorageEvent('storage', {storageArea: sessionStorage, key: 'petStore'})
// ...
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {toto: {species: "dog"}}}

await persister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();
sessionStorage.clear[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/lifecycle/clear/)();

```

Note that the [`startAutoLoad`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/startautoload/) method also takes a default set of [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) so that the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can be instantiated with good data if the persistence layer is empty (such as when this is the first time the app has been executed).
## A Caveat
You may often want to have both automatic saving and loading of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) so that changes are constantly synchronized (allowing basic state preservation between browser tabs, for example). The framework has some basic provisions to prevent race conditions - for example it will not attempt to save data if it is currently loading it and vice-versa - and will sequentially [`schedule`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/schedule/) methods that could cause race conditions.
That said, be aware that you should always comprehensively test your persistence strategy to understand the opportunity for data loss (in the case of trying to save data to a server under poor network conditions, for example).
To help debug such issues, since v4.0.4, the create methods for all [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) objects take an optional `onIgnoredError` argument. This is a handler for the errors that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) would otherwise ignore when trying to save or load data (such as when handling corrupted stored data). It's recommended you use this for debugging persistence issues, but only in a development environment. Database-based [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) objects also take an optional `onSqlCommand` argument for logging commands and queries made to the underlying database.
## Summary
Use the [`persisters`](https://tinybase.org/api/persisters/) module to load and save data from and to a variety of common persistence layers. When these don't suffice, you can also develop custom Persisters of your own.
Next we move on to look at how to fully synchronize TinyBase Stores with databases, particularly SQLite, in the [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
