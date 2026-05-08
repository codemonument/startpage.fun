[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
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


# API
## The Essentials
  * [Creating stores](https://tinybase.org/api/the-essentials/creating-stores/)
  * [Getting data](https://tinybase.org/api/the-essentials/getting-data/)
  * [Setting data](https://tinybase.org/api/the-essentials/setting-data/)
  * [Listening for changes](https://tinybase.org/api/the-essentials/listening-for-changes/)
  * [Persisting stores](https://tinybase.org/api/the-essentials/persisting-stores/)
  * [Synchronizing stores](https://tinybase.org/api/the-essentials/synchronizing-stores/)
  * [Using React](https://tinybase.org/api/the-essentials/using-react/)
  * [`Inspector`](https://tinybase.org/api/the-essentials/using-svelte/inspector/)


## `store`
The [`store`](https://tinybase.org/api/store/) module is the core of the TinyBase project and contains the types, interfaces, and functions to work with [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/store/).
  * [`Store`](https://tinybase.org/api/store/interfaces/store/store/)
  * [`createStore`](https://tinybase.org/api/store/functions/creation/createstore/)
  * [Type Aliases](https://tinybase.org/api/store/type-aliases/)


## `mergeable-store`
The [`mergeable-store`](https://tinybase.org/api/mergeable-store/) module contains the types, interfaces, and functions to work with [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects, which provide merge and synchronization functionality. [Read more](https://tinybase.org/api/mergeable-store/).
  * [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)
  * [`createMergeableStore`](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)
  * [Type Aliases](https://tinybase.org/api/mergeable-store/type-aliases/)


## `metrics`
The [`metrics`](https://tinybase.org/api/metrics/) module of the TinyBase project provides the ability to create and track metrics and aggregates of the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/metrics/).
  * [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/)
  * [`createMetrics`](https://tinybase.org/api/metrics/functions/creation/createmetrics/)
  * [Type Aliases](https://tinybase.org/api/metrics/type-aliases/)


## `indexes`
The [`indexes`](https://tinybase.org/api/indexes/) module of the TinyBase project provides the ability to create and track indexes of the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/indexes/).
  * [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/)
  * [`createIndexes`](https://tinybase.org/api/indexes/functions/creation/createindexes/)
  * [Type Aliases](https://tinybase.org/api/indexes/type-aliases/)


## `relationships`
The [`relationships`](https://tinybase.org/api/relationships/) module of the TinyBase project provides the ability to create and track relationships between the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/relationships/).
  * [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/)
  * [`createRelationships`](https://tinybase.org/api/relationships/functions/creation/createrelationships/)
  * [Type Aliases](https://tinybase.org/api/relationships/type-aliases/)


## `queries`
The [`queries`](https://tinybase.org/api/queries/) module of the TinyBase project provides the ability to create and track queries of the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/queries/).
  * [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/)
  * [`createQueries`](https://tinybase.org/api/queries/functions/creation/createqueries/)
  * [Type Aliases](https://tinybase.org/api/queries/type-aliases/)


## `checkpoints`
The [`checkpoints`](https://tinybase.org/api/checkpoints/) module of the TinyBase project provides the ability to create and track checkpoints made to the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/checkpoints/).
  * [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/)
  * [`createCheckpoints`](https://tinybase.org/api/checkpoints/functions/creation/createcheckpoints/)
  * [Type Aliases](https://tinybase.org/api/checkpoints/type-aliases/)


## `common`
The [`common`](https://tinybase.org/api/common/) module of the TinyBase project provides a small collection of common types used across other modules. [Read more](https://tinybase.org/api/common/).
  * [Functions](https://tinybase.org/api/common/functions/)
  * [Type Aliases](https://tinybase.org/api/common/type-aliases/)


## `persisters`
The [`persisters`](https://tinybase.org/api/persisters/) module of the TinyBase project provides a simple framework for saving and loading [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data, to and from different destinations, or underlying storage types. [Read more](https://tinybase.org/api/persisters/).
  * [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/)
  * [Enumerations](https://tinybase.org/api/persisters/enumerations/)
  * [Functions](https://tinybase.org/api/persisters/functions/)
  * [Type Aliases](https://tinybase.org/api/persisters/type-aliases/)


## `persister-automerge`
The [`persister-automerge`](https://tinybase.org/api/persister-automerge/) module of the TinyBase project provides a way to save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from an Automerge document. [Read more](https://tinybase.org/api/persister-automerge/).
  * [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/)
  * [`createAutomergePersister`](https://tinybase.org/api/persister-automerge/functions/creation/createautomergepersister/)


## `persister-browser`
The [`persister-browser`](https://tinybase.org/api/persister-browser/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from browser storage, including the origin private file system (OPFS). [Read more](https://tinybase.org/api/persister-browser/).
  * [Interfaces](https://tinybase.org/api/persister-browser/interfaces/)
  * [Functions](https://tinybase.org/api/persister-browser/functions/)


## `persister-cr-sqlite-wasm`
The [`persister-cr-sqlite-wasm`](https://tinybase.org/api/persister-cr-sqlite-wasm/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a local CR-SQLite database (in an appropriate environment). [Read more](https://tinybase.org/api/persister-cr-sqlite-wasm/).
  * [`CrSqliteWasmPersister`](https://tinybase.org/api/persister-cr-sqlite-wasm/interfaces/persister/crsqlitewasmpersister/)
  * [`createCrSqliteWasmPersister`](https://tinybase.org/api/persister-cr-sqlite-wasm/functions/creation/createcrsqlitewasmpersister/)


## `persister-durable-object-sql-storage`
The [`persister-durable-object-sql-storage`](https://tinybase.org/api/persister-durable-object-sql-storage/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from Cloudflare Durable Object SQLite storage (in an appropriate environment). [Read more](https://tinybase.org/api/persister-durable-object-sql-storage/).
  * [`DurableObjectSqlStoragePersister`](https://tinybase.org/api/persister-durable-object-sql-storage/interfaces/persister/durableobjectsqlstoragepersister/)
  * [`createDurableObjectSqlStoragePersister`](https://tinybase.org/api/persister-durable-object-sql-storage/functions/creation/createdurableobjectsqlstoragepersister/)
  * [Type Aliases](https://tinybase.org/api/persister-durable-object-sql-storage/type-aliases/)


## `persister-durable-object-storage`
The [`persister-durable-object-storage`](https://tinybase.org/api/persister-durable-object-storage/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from Cloudflare Durable Object storage (in an appropriate environment). [Read more](https://tinybase.org/api/persister-durable-object-storage/).
  * [`DurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/)
  * [`createDurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/functions/creation/createdurableobjectstoragepersister/)


## `persister-electric-sql`
The [`persister-electric-sql`](https://tinybase.org/api/persister-electric-sql/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a local ElectricSQL database (in an appropriate environment). [Read more](https://tinybase.org/api/persister-electric-sql/).
  * [`ElectricSqlPersister`](https://tinybase.org/api/persister-electric-sql/interfaces/persister/electricsqlpersister/)
  * [`createElectricSqlPersister`](https://tinybase.org/api/persister-electric-sql/functions/creation/createelectricsqlpersister/)


## `persister-expo-sqlite`
The [`persister-expo-sqlite`](https://tinybase.org/api/persister-expo-sqlite/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a Expo-SQLite database (in an appropriate React Native environment). [Read more](https://tinybase.org/api/persister-expo-sqlite/).
  * [`ExpoSqlitePersister`](https://tinybase.org/api/persister-expo-sqlite/interfaces/persister/exposqlitepersister/)
  * [`createExpoSqlitePersister`](https://tinybase.org/api/persister-expo-sqlite/functions/creation/createexposqlitepersister/)


## `persister-file`
The [`persister-file`](https://tinybase.org/api/persister-file/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a local file system (in an appropriate environment). [Read more](https://tinybase.org/api/persister-file/).
  * [`FilePersister`](https://tinybase.org/api/persister-file/interfaces/persister/filepersister/)
  * [`createFilePersister`](https://tinybase.org/api/persister-file/functions/creation/createfilepersister/)


## `persister-indexed-db`
The [`persister-indexed-db`](https://tinybase.org/api/persister-indexed-db/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from browser IndexedDB storage. [Read more](https://tinybase.org/api/persister-indexed-db/).
  * [`IndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/)
  * [`createIndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/functions/creation/createindexeddbpersister/)


## `persister-libsql`
The [`persister-libsql`](https://tinybase.org/api/persister-libsql/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a local LibSQL database (in an appropriate environment). [Read more](https://tinybase.org/api/persister-libsql/).
  * [`LibSqlPersister`](https://tinybase.org/api/persister-libsql/interfaces/persister/libsqlpersister/)
  * [`createLibSqlPersister`](https://tinybase.org/api/persister-libsql/functions/creation/createlibsqlpersister/)


## `persister-partykit-client`
The [`persister-partykit-client`](https://tinybase.org/api/persister-partykit-client/) module of the TinyBase project contains the client portion of the PartyKit integration. [Read more](https://tinybase.org/api/persister-partykit-client/).
  * [`PartyKitPersister`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/)
  * [`createPartyKitPersister`](https://tinybase.org/api/persister-partykit-client/functions/creation/createpartykitpersister/)
  * [`PartyKitPersisterConfig`](https://tinybase.org/api/persister-partykit-client/type-aliases/configuration/partykitpersisterconfig/)


## `persister-partykit-server`
The [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/) module of the TinyBase project contains the server portion of the PartyKit integration. [Read more](https://tinybase.org/api/persister-partykit-server/).
  * [`TinyBasePartyKitServer`](https://tinybase.org/api/persister-partykit-server/classes/server/tinybasepartykitserver/)
  * [Functions](https://tinybase.org/api/persister-partykit-server/functions/)
  * [`TinyBasePartyKitServerConfig`](https://tinybase.org/api/persister-partykit-server/type-aliases/configuration/tinybasepartykitserverconfig/)


## `persister-pglite`
The [`persister-pglite`](https://tinybase.org/api/persister-pglite/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a PGlite database (in an appropriate environment). [Read more](https://tinybase.org/api/persister-pglite/).
  * [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/)
  * [`createPglitePersister`](https://tinybase.org/api/persister-pglite/functions/creation/createpglitepersister/)


## `persister-postgres`
The [`persister-postgres`](https://tinybase.org/api/persister-postgres/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a PostgreSQL database (in an appropriate environment). [Read more](https://tinybase.org/api/persister-postgres/).
  * [`PostgresPersister`](https://tinybase.org/api/persister-postgres/interfaces/persister/postgrespersister/)
  * [`createPostgresPersister`](https://tinybase.org/api/persister-postgres/functions/creation/createpostgrespersister/)


## `persister-powersync`
The [`persister-powersync`](https://tinybase.org/api/persister-powersync/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a local SQLite database that is automatically synced using the PowerSync service. [Read more](https://tinybase.org/api/persister-powersync/).
  * [`PowerSyncPersister`](https://tinybase.org/api/persister-powersync/interfaces/persister/powersyncpersister/)
  * [`createPowerSyncPersister`](https://tinybase.org/api/persister-powersync/functions/creation/createpowersyncpersister/)


## `persister-react-native-mmkv`
The [`persister-react-native-mmkv`](https://tinybase.org/api/persister-react-native-mmkv/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a MMKV storage using the [`react-native-mmkv`](https://github.com/mrousavy/react-native-mmkv) module (in an appropriate React Native environment). [Read more](https://tinybase.org/api/persister-react-native-mmkv/).
  * [`ReactNativeMmkvPersister`](https://tinybase.org/api/persister-react-native-mmkv/interfaces/persister/reactnativemmkvpersister/)
  * [`createReactNativeMmkvPersister`](https://tinybase.org/api/persister-react-native-mmkv/functions/creation/createreactnativemmkvpersister/)


## `persister-react-native-sqlite`
The [`persister-react-native-sqlite`](https://tinybase.org/api/persister-react-native-sqlite/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a SQLite database using the [`react-native-sqlite-storage`](https://github.com/andpor/react-native-sqlite-storage) module (in an appropriate React Native environment). [Read more](https://tinybase.org/api/persister-react-native-sqlite/).
  * [`ReactNativeSqlitePersister`](https://tinybase.org/api/persister-react-native-sqlite/interfaces/persister/reactnativesqlitepersister/)
  * [`createReactNativeSqlitePersister`](https://tinybase.org/api/persister-react-native-sqlite/functions/creation/createreactnativesqlitepersister/)


## `persister-remote`
The [`persister-remote`](https://tinybase.org/api/persister-remote/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a remote server. [Read more](https://tinybase.org/api/persister-remote/).
  * [`RemotePersister`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/)
  * [`createRemotePersister`](https://tinybase.org/api/persister-remote/functions/creation/createremotepersister/)


## `persister-sqlite-bun`
The [`persister-sqlite-bun`](https://tinybase.org/api/persister-sqlite-bun/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a local Bun SQLite database (in an appropriate environment). [Read more](https://tinybase.org/api/persister-sqlite-bun/).
  * [`SqliteBunPersister`](https://tinybase.org/api/persister-sqlite-bun/interfaces/persister/sqlitebunpersister/)
  * [`createSqliteBunPersister`](https://tinybase.org/api/persister-sqlite-bun/functions/creation/createsqlitebunpersister/)


## `persister-sqlite-wasm`
The [`persister-sqlite-wasm`](https://tinybase.org/api/persister-sqlite-wasm/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a local SQLite database (in an appropriate environment). [Read more](https://tinybase.org/api/persister-sqlite-wasm/).
  * [`SqliteWasmPersister`](https://tinybase.org/api/persister-sqlite-wasm/interfaces/persister/sqlitewasmpersister/)
  * [`createSqliteWasmPersister`](https://tinybase.org/api/persister-sqlite-wasm/functions/creation/createsqlitewasmpersister/)


## `persister-sqlite3`
The [`persister-sqlite3`](https://tinybase.org/api/persister-sqlite3/) module of the TinyBase project lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a local SQLite database (in an appropriate environment). [Read more](https://tinybase.org/api/persister-sqlite3/).
  * [`Sqlite3Persister`](https://tinybase.org/api/persister-sqlite3/interfaces/persister/sqlite3persister/)
  * [`createSqlite3Persister`](https://tinybase.org/api/persister-sqlite3/functions/creation/createsqlite3persister/)


## `persister-yjs`
The [`persister-yjs`](https://tinybase.org/api/persister-yjs/) module of the TinyBase project provides a way to save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from a Yjs document. [Read more](https://tinybase.org/api/persister-yjs/).
  * [`YjsPersister`](https://tinybase.org/api/persister-yjs/interfaces/persister/yjspersister/)
  * [`createYjsPersister`](https://tinybase.org/api/persister-yjs/functions/creation/createyjspersister/)


## `synchronizers`
The [`synchronizers`](https://tinybase.org/api/synchronizers/) module of the TinyBase project lets you synchronize [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data to and from other [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) instances. [Read more](https://tinybase.org/api/synchronizers/).
  * [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/)
  * [`Message`](https://tinybase.org/api/synchronizers/enumerations/synchronization/message/)
  * [`createCustomSynchronizer`](https://tinybase.org/api/synchronizers/functions/creation/createcustomsynchronizer/)
  * [Type Aliases](https://tinybase.org/api/synchronizers/type-aliases/)


## `synchronizer-broadcast-channel`
The [`synchronizer-broadcast-channel`](https://tinybase.org/api/synchronizer-broadcast-channel/) module of the TinyBase project lets you synchronize [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data to and from other [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) instances via a browser's BroadcastChannel API. [Read more](https://tinybase.org/api/synchronizer-broadcast-channel/).
  * [`BroadcastChannelSynchronizer`](https://tinybase.org/api/synchronizer-broadcast-channel/interfaces/synchronizer/broadcastchannelsynchronizer/)
  * [`createBroadcastChannelSynchronizer`](https://tinybase.org/api/synchronizer-broadcast-channel/functions/creation/createbroadcastchannelsynchronizer/)


## `synchronizer-local`
The [`synchronizer-local`](https://tinybase.org/api/synchronizer-local/) module of the TinyBase project lets you synchronize [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data to and from other [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) instances on the same local machine. [Read more](https://tinybase.org/api/synchronizer-local/).
  * [`LocalSynchronizer`](https://tinybase.org/api/synchronizer-local/interfaces/synchronizer/localsynchronizer/)
  * [`createLocalSynchronizer`](https://tinybase.org/api/synchronizer-local/functions/creation/createlocalsynchronizer/)


## `synchronizer-ws-client`
The synchronizer-ws module of the TinyBase project lets you synchronize [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data to and from other [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) instances via WebSockets facilitated by a server. [Read more](https://tinybase.org/api/synchronizer-ws-client/).
  * [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/)
  * [`createWsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)
  * [`WebSocketTypes`](https://tinybase.org/api/synchronizer-ws-client/type-aliases/creation/websockettypes/)


## `synchronizer-ws-server`
The [`synchronizer-ws-server`](https://tinybase.org/api/synchronizer-ws-server/) module of the TinyBase project lets you create a server that facilitates synchronization between clients. [Read more](https://tinybase.org/api/synchronizer-ws-server/).
  * [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/)
  * [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)
  * [Type Aliases](https://tinybase.org/api/synchronizer-ws-server/type-aliases/)


## `synchronizer-ws-server-durable-object`
The [`synchronizer-ws-server-durable-object`](https://tinybase.org/api/synchronizer-ws-server-durable-object/) module of the TinyBase project lets you create a server that facilitates synchronization between clients, running as a Cloudflare Durable Object. [Read more](https://tinybase.org/api/synchronizer-ws-server-durable-object/).
  * [`WsServerDurableObject`](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/)
  * [`getWsServerDurableObjectFetch`](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/creation/getwsserverdurableobjectfetch/)


## `synchronizer-ws-server-simple`
The [`synchronizer-ws-server-simple`](https://tinybase.org/api/synchronizer-ws-server-simple/) module of the TinyBase project lets you create a server that facilitates synchronization between clients, without the complications of listeners, persistence, or statistics. [Read more](https://tinybase.org/api/synchronizer-ws-server-simple/).
  * [`WsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/)
  * [`createWsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/functions/creation/createwsserversimple/)


## `ui-react`
The [`ui-react`](https://tinybase.org/api/ui-react/) module of the TinyBase project provides both hooks and components to make it easy to create reactive apps with [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/ui-react/).
  * [Functions](https://tinybase.org/api/ui-react/functions/)
  * [Type Aliases](https://tinybase.org/api/ui-react/type-aliases/)


## `ui-react-dom`
The [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/) module of the TinyBase project provides components to make it easy to create web-based reactive apps with [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/ui-react-dom/).
  * [Functions](https://tinybase.org/api/ui-react-dom/functions/)
  * [Type Aliases](https://tinybase.org/api/ui-react-dom/type-aliases/)


## `ui-react-inspector`
The [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/) module of the TinyBase project provides a component to help debug the state of your TinyBase stores and other objects. [Read more](https://tinybase.org/api/ui-react-inspector/).
  * [`Inspector`](https://tinybase.org/api/ui-react-inspector/functions/development-components/inspector/)
  * [`InspectorProps`](https://tinybase.org/api/ui-react-inspector/type-aliases/props/inspectorprops/)


## `ui-svelte`
The [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module of the TinyBase project provides reactive functions, listener functions, and components to make it easy to create reactive Svelte 5 apps with [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/ui-svelte/).
  * [Functions](https://tinybase.org/api/ui-svelte/functions/)
  * [Type Aliases](https://tinybase.org/api/ui-svelte/type-aliases/)


## `ui-svelte-dom`
The [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/) module of the TinyBase project provides components to make it easy to create web-based reactive apps with [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/ui-svelte-dom/).
  * [Functions](https://tinybase.org/api/ui-svelte-dom/functions/)
  * [Type Aliases](https://tinybase.org/api/ui-svelte-dom/type-aliases/)


## `ui-svelte-inspector`
The [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/) module of the TinyBase project provides a component to help debug the state of your TinyBase stores and other objects. [Read more](https://tinybase.org/api/ui-svelte-inspector/).
  * [`Inspector`](https://tinybase.org/api/ui-svelte-inspector/functions/development-components/inspector/)
  * [`InspectorProps`](https://tinybase.org/api/ui-svelte-inspector/type-aliases/props/inspectorprops/)


## `middleware`
The [`middleware`](https://tinybase.org/api/middleware/) module of the TinyBase project provides the ability to intercept and validate incoming writes to [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects. [Read more](https://tinybase.org/api/middleware/).
  * [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/)
  * [`createMiddleware`](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)
  * [Type Aliases](https://tinybase.org/api/middleware/type-aliases/)


## `schematizer-arktype`
The [`schematizer-arktype`](https://tinybase.org/api/schematizer-arktype/) module provides conversion utilities for ArkType schemas. [Read more](https://tinybase.org/api/schematizer-arktype/).
  * [`ArkTypeSchematizer`](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/)
  * [`createArkTypeSchematizer`](https://tinybase.org/api/schematizer-arktype/functions/creation/createarktypeschematizer/)


## `schematizer-effect`
The [`schematizer-effect`](https://tinybase.org/api/schematizer-effect/) module provides conversion utilities for Effect Schema schemas. [Read more](https://tinybase.org/api/schematizer-effect/).
  * [`EffectSchematizer`](https://tinybase.org/api/schematizer-effect/interfaces/schematizer/effectschematizer/)
  * [`createEffectSchematizer`](https://tinybase.org/api/schematizer-effect/functions/creation/createeffectschematizer/)


## `schematizer-typebox`
The [`schematizer-typebox`](https://tinybase.org/api/schematizer-typebox/) module provides conversion utilities for TypeBox schemas. [Read more](https://tinybase.org/api/schematizer-typebox/).
  * [`TypeBoxSchematizer`](https://tinybase.org/api/schematizer-typebox/interfaces/schematizer/typeboxschematizer/)
  * [`createTypeBoxSchematizer`](https://tinybase.org/api/schematizer-typebox/functions/creation/createtypeboxschematizer/)


## `schematizer-valibot`
The [`schematizer-valibot`](https://tinybase.org/api/schematizer-valibot/) module provides conversion utilities for Valibot schemas. [Read more](https://tinybase.org/api/schematizer-valibot/).
  * [`ValibotSchematizer`](https://tinybase.org/api/schematizer-valibot/interfaces/schematizer/valibotschematizer/)
  * [`createValibotSchematizer`](https://tinybase.org/api/schematizer-valibot/functions/creation/createvalibotschematizer/)


## `schematizer-yup`
The [`schematizer-yup`](https://tinybase.org/api/schematizer-yup/) module provides conversion utilities for Yup schemas. [Read more](https://tinybase.org/api/schematizer-yup/).
  * [`YupSchematizer`](https://tinybase.org/api/schematizer-yup/interfaces/schematizer/yupschematizer/)
  * [`createYupSchematizer`](https://tinybase.org/api/schematizer-yup/functions/creation/createyupschematizer/)


## `schematizer-zod`
The [`schematizer-zod`](https://tinybase.org/api/schematizer-zod/) module provides conversion utilities for Zod schemas. [Read more](https://tinybase.org/api/schematizer-zod/).
  * [`ZodSchematizer`](https://tinybase.org/api/schematizer-zod/interfaces/schematizer/zodschematizer/)
  * [`createZodSchematizer`](https://tinybase.org/api/schematizer-zod/functions/creation/createzodschematizer/)


## `schematizers`
The [`schematizers`](https://tinybase.org/api/schematizers/) module provides utilities for converting schemas from popular validation libraries into TinyBase's schema format. [Read more](https://tinybase.org/api/schematizers/).
  * [`Schematizer`](https://tinybase.org/api/schematizers/interfaces/schematizer/schematizer/)
  * [`createCustomSchematizer`](https://tinybase.org/api/schematizers/functions/creation/createcustomschematizer/)

[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase ](https://tinybase.org/) © 2022-
