[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
  1. No results found


  * [Guides](https://tinybase.org/guides/)
  * [Demos](https://tinybase.org/demos/)
  * [API](https://tinybase.org/api/)
  * [GitHub](https://github.com/tinyplex/tinybase)


  * [TinyBase](https://tinybase.org/)
    * [Guides](https://tinybase.org/guides/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)
      * [The Essentials](https://tinybase.org/api/the-essentials/)
      * [`store`](https://tinybase.org/api/store/)
      * [`mergeable-store`](https://tinybase.org/api/mergeable-store/)
      * [`metrics`](https://tinybase.org/api/metrics/)
      * [`indexes`](https://tinybase.org/api/indexes/)
      * [`relationships`](https://tinybase.org/api/relationships/)
      * [`queries`](https://tinybase.org/api/queries/)
      * [`checkpoints`](https://tinybase.org/api/checkpoints/)
      * [`common`](https://tinybase.org/api/common/)
      * [`persisters`](https://tinybase.org/api/persisters/)
        * [Interfaces](https://tinybase.org/api/persisters/interfaces/)
        * [Enumerations](https://tinybase.org/api/persisters/enumerations/)
        * [Functions](https://tinybase.org/api/persisters/functions/)
        * [Type Aliases](https://tinybase.org/api/persisters/type-aliases/)
      * [`persister-automerge`](https://tinybase.org/api/persister-automerge/)
      * [`persister-browser`](https://tinybase.org/api/persister-browser/)
      * [`persister-cr-sqlite-wasm`](https://tinybase.org/api/persister-cr-sqlite-wasm/)
      * [`persister-durable-object-sql-storage`](https://tinybase.org/api/persister-durable-object-sql-storage/)
      * [`persister-durable-object-storage`](https://tinybase.org/api/persister-durable-object-storage/)
      * [`persister-electric-sql`](https://tinybase.org/api/persister-electric-sql/)
      * [`persister-expo-sqlite`](https://tinybase.org/api/persister-expo-sqlite/)
      * [`persister-file`](https://tinybase.org/api/persister-file/)
      * [`persister-indexed-db`](https://tinybase.org/api/persister-indexed-db/)
      * [`persister-libsql`](https://tinybase.org/api/persister-libsql/)
      * [`persister-partykit-client`](https://tinybase.org/api/persister-partykit-client/)
      * [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/)
      * [`persister-pglite`](https://tinybase.org/api/persister-pglite/)
      * [`persister-postgres`](https://tinybase.org/api/persister-postgres/)
      * [`persister-powersync`](https://tinybase.org/api/persister-powersync/)
      * [`persister-react-native-mmkv`](https://tinybase.org/api/persister-react-native-mmkv/)
      * [`persister-react-native-sqlite`](https://tinybase.org/api/persister-react-native-sqlite/)
      * [`persister-remote`](https://tinybase.org/api/persister-remote/)
      * [`persister-sqlite-bun`](https://tinybase.org/api/persister-sqlite-bun/)
      * [`persister-sqlite-wasm`](https://tinybase.org/api/persister-sqlite-wasm/)
      * [`persister-sqlite3`](https://tinybase.org/api/persister-sqlite3/)
      * [`persister-yjs`](https://tinybase.org/api/persister-yjs/)
      * [`synchronizers`](https://tinybase.org/api/synchronizers/)
      * [`synchronizer-broadcast-channel`](https://tinybase.org/api/synchronizer-broadcast-channel/)
      * [`synchronizer-local`](https://tinybase.org/api/synchronizer-local/)
      * [`synchronizer-ws-client`](https://tinybase.org/api/synchronizer-ws-client/)
      * [`synchronizer-ws-server`](https://tinybase.org/api/synchronizer-ws-server/)
      * [`synchronizer-ws-server-durable-object`](https://tinybase.org/api/synchronizer-ws-server-durable-object/)
      * [`synchronizer-ws-server-simple`](https://tinybase.org/api/synchronizer-ws-server-simple/)
      * [`ui-react`](https://tinybase.org/api/ui-react/)
      * [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/)
      * [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/)
      * [`ui-svelte`](https://tinybase.org/api/ui-svelte/)
      * [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/)
      * [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/)
      * [`middleware`](https://tinybase.org/api/middleware/)
      * [`schematizer-arktype`](https://tinybase.org/api/schematizer-arktype/)
      * [`schematizer-effect`](https://tinybase.org/api/schematizer-effect/)
      * [`schematizer-typebox`](https://tinybase.org/api/schematizer-typebox/)
      * [`schematizer-valibot`](https://tinybase.org/api/schematizer-valibot/)
      * [`schematizer-yup`](https://tinybase.org/api/schematizer-yup/)
      * [`schematizer-zod`](https://tinybase.org/api/schematizer-zod/)
      * [`schematizers`](https://tinybase.org/api/schematizers/)


  * [TinyBase](https://tinybase.org/)
  * [API](https://tinybase.org/api/)
  * [`persisters`](https://tinybase.org/api/persisters/)


# `persisters`
The `persisters` module of the TinyBase project provides a simple framework for saving and loading [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data, to and from different destinations, or underlying storage types.
Many entry points are provided (in separately installed modules), each of which returns different types of [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) that can load and save a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Between them, these allow you to store your TinyBase data locally, remotely, to a Durable Object, to SQLite and PostgreSQL databases, and across synchronization boundaries with CRDT frameworks.  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  | [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)  | [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)  |  
| --- | --- | --- | --- |  
| [`SessionPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/)  | Browser session storage  | Yes  | Yes  |  
| [`LocalPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/localpersister/)  | Browser local storage  | Yes  | Yes  |  
| [`OpfsPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/)  | Browser origin private file system (OPFS)  | Yes  | Yes  |  
| [`FilePersister`](https://tinybase.org/api/persister-file/interfaces/persister/filepersister/)  | Local file (where possible)  | Yes  | Yes  |  
| [`IndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/)  | Browser IndexedDB  | Yes  | No  |  
| [`RemotePersister`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/)  | Remote server  | Yes  | No  |  
| [`ReactNativeMmkvPersister`](https://tinybase.org/api/persister-react-native-mmkv/interfaces/persister/reactnativemmkvpersister/)  | MMKV in React Native, via [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)  | Yes  | Yes  |  
| [`DurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/)  | Cloudflare Durable Object (KV)  | No  | Yes  |  
| [`DurableObjectSqlStoragePersister`](https://tinybase.org/api/persister-durable-object-sql-storage/interfaces/persister/durableobjectsqlstoragepersister/)  | Cloudflare Durable Object (SQLite)  | No  | Yes  |  
| [`Sqlite3Persister`](https://tinybase.org/api/persister-sqlite3/interfaces/persister/sqlite3persister/)  | SQLite in Node, via [sqlite3](https://github.com/TryGhost/node-sqlite3)  | Yes  | Yes*  |  
| [`SqliteBunPersister`](https://tinybase.org/api/persister-sqlite-bun/interfaces/persister/sqlitebunpersister/)  | SQLite in Bun, via [bun:sqlite](https://bun.sh/docs/api/sqlite)  | Yes  | Yes*  |  
| [`SqliteWasmPersister`](https://tinybase.org/api/persister-sqlite-wasm/interfaces/persister/sqlitewasmpersister/)  | SQLite in a browser, via [sqlite-wasm](https://github.com/tomayac/sqlite-wasm)  | Yes  | Yes*  |  
| [`ExpoSqlitePersister`](https://tinybase.org/api/persister-expo-sqlite/interfaces/persister/exposqlitepersister/)  | SQLite in React Native, via [expo-sqlite](https://github.com/expo/expo/tree/main/packages/expo-sqlite)  | Yes  | Yes*  |  
| [`ReactNativeSqlitePersister`](https://tinybase.org/api/persister-react-native-sqlite/interfaces/persister/reactnativesqlitepersister/)  | SQLite in React Native, via [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage)  | Yes  | Yes*  |  
| [`PostgresPersister`](https://tinybase.org/api/persister-postgres/interfaces/persister/postgrespersister/)  | PostgreSQL, via [postgres](https://github.com/porsager/postgres)  | Yes  | Yes*  |  
| [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/)  | PostgreSQL, via [PGlite](https://github.com/electric-sql/pglite)  | Yes  | Yes*  |  
| [`CrSqliteWasmPersister`](https://tinybase.org/api/persister-cr-sqlite-wasm/interfaces/persister/crsqlitewasmpersister/)  | SQLite CRDTs, via [cr-sqlite-wasm](https://github.com/vlcn-io/cr-sqlite)  | Yes  | No  |  
| [`ElectricSqlPersister`](https://tinybase.org/api/persister-electric-sql/interfaces/persister/electricsqlpersister/)  | Electric SQL, via [electric-sql](https://github.com/electric-sql/electric)  | Yes  | No  |  
| [`LibSqlPersister`](https://tinybase.org/api/persister-libsql/interfaces/persister/libsqlpersister/)  | LibSQL for Turso, via [libsql-client](https://github.com/tursodatabase/libsql-client-ts)  | Yes  | No  |  
| [`PowerSyncPersister`](https://tinybase.org/api/persister-powersync/interfaces/persister/powersyncpersister/)  | PowerSync, via [powersync-sdk](https://github.com/powersync-ja/powersync-js)  | Yes  | No  |  
| [`YjsPersister`](https://tinybase.org/api/persister-yjs/interfaces/persister/yjspersister/)  | Yjs CRDTs, via [yjs](https://github.com/yjs/yjs)  | Yes  | No  |  
| [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/)  | Automerge CRDTs, via [automerge-repo](https://github.com/automerge/automerge-repo)  | Yes  | No  |  
| [`PartyKitPersister`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/)  |  [PartyKit](https://www.partykit.io/), via the [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/) module  | Yes  | No  |  
(*) Note that SQLite- and PostgreSQL-based Persisters can currently only persist [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data when used with the JSON-based [`DpcJson`](https://tinybase.org/api/persisters/type-aliases/configuration/dpcjson/) mode, and not when using the [`DpcTabular`](https://tinybase.org/api/persisters/type-aliases/configuration/dpctabular/) mode.
Since persistence requirements can be different for every app, the [`createCustomPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompersister/) function in this module can also be used to easily create a fully customized way to save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data.
Similarly, the [`createCustomSqlitePersister`](https://tinybase.org/api/persisters/functions/creation/createcustomsqlitepersister/) function and [`createCustomPostgreSqlPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompostgresqlpersister/) function can be used to build [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) objects against SQLite and PostgreSQL SDKs (or forks) that are not already included with TinyBase.
## See also
  * [Persistence](https://tinybase.org/guides/persistence/) guides
  * [Countries](https://tinybase.org/demos/countries/) demo
  * [Todo App](https://tinybase.org/demos/todo-app/) demos
  * [Drawing](https://tinybase.org/demos/drawing/) demo


## Since
v1.0.0
## Interfaces
  * [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/)


## Enumerations
  * [`Status`](https://tinybase.org/api/persisters/enumerations/lifecycle/status/) enumeration
  * [`Persists`](https://tinybase.org/api/persisters/enumerations/mergeable/persists/) enumeration


## Functions
  * [`createCustomPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompersister/)
  * [`createCustomPostgreSqlPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompostgresqlpersister/)
  * [`createCustomSqlitePersister`](https://tinybase.org/api/persisters/functions/creation/createcustomsqlitepersister/)


## Type Aliases
  * [`StatusListener`](https://tinybase.org/api/persisters/type-aliases/listener/statuslistener/) type alias
  * [Configuration type aliases](https://tinybase.org/api/persisters/type-aliases/configuration/)
  * [Creation type aliases](https://tinybase.org/api/persisters/type-aliases/creation/)
  * [Mergeable type aliases](https://tinybase.org/api/persisters/type-aliases/mergeable/)
  * [`PersisterStats`](https://tinybase.org/api/persisters/type-aliases/development/persisterstats/) type alias

[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
