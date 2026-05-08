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
          * [`createCustomPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompersister/)
          * [`createCustomPostgreSqlPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompostgresqlpersister/)
          * [`createCustomSqlitePersister`](https://tinybase.org/api/persisters/functions/creation/createcustomsqlitepersister/)
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
  * [Functions](https://tinybase.org/api/persisters/functions/)
  * [`createCustomSqlitePersister`](https://tinybase.org/api/persisters/functions/creation/createcustomsqlitepersister/)


# `createCustomSqlitePersister`
The `createCustomSqlitePersister` function creates a [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) object that you can configure to persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a SQLite database.

```
createCustomSqlitePersister[](https://tinybase.org/api/persisters/functions/creation/createcustomsqlitepersister/)<ListenerHandle, Persist>(
  store: PersistedStore[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedstore/)<Persist>,
  configOrStoreTableName: undefined | string | DatabasePersisterConfig[](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/),
  executeCommand: DatabaseExecuteCommand[](https://tinybase.org/api/persisters/type-aliases/creation/databaseexecutecommand/),
  addChangeListener: (listener: DatabaseChangeListener[](https://tinybase.org/api/persisters/type-aliases/creation/databasechangelistener/)) => ListenerHandle,
  delChangeListener: (listenerHandle: ListenerHandle) => void,
  onSqlCommand: undefined | (sql: string, params?: any[]) => void,
  onIgnoredError: undefined | (error: any) => void,
  destroy: () => void,
  persist: Persist,
  thing: any,
  getThing?: string,
): Persister[](https://tinybase.org/api/persisters/interfaces/persister/persister/)<Persist>
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `PersistedStore[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedstore/)<Persist>`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist.  |  
| `configOrStoreTableName`  | `undefined | string | DatabasePersisterConfig[](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/)`  | A [`DatabasePersisterConfig`](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/) object, or a string that will be used as the name of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)'s table in the database.  |  
| `executeCommand`  | `DatabaseExecuteCommand[](https://tinybase.org/api/persisters/type-aliases/creation/databaseexecutecommand/)`  | A function that will execute a command against the database.  |  
| `addChangeListener`  | `(listener: DatabaseChangeListener[](https://tinybase.org/api/persisters/type-aliases/creation/databasechangelistener/)) => ListenerHandle`  | A function that will register a listener for changes to the database.  |  
| `delChangeListener`  | `(listenerHandle: ListenerHandle) => void`  | A function that will unregister the listener for changes to the database.  |  
| `onSqlCommand`  | `undefined | (sql: string, params?: any[]) => void`  | A function that will be called for each SQL command executed against the database.  |  
| `onIgnoredError`  | `undefined | (error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment.  |  
| `destroy`  | `() => void`  | A function that will be called to perform any extra clean up on the [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/).  |  
| `persist`  | `Persist`  | An integer from the [`Persists`](https://tinybase.org/api/persisters/enumerations/mergeable/persists/) enum to indicate which types of [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) are supported by this [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/): `1` indicates only a regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is supported, `2` indicates only a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) is supported, and `3` indicates that both [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) are supported.  |  
| `thing`  | `any`  | A reference to the database or connection that can be returned with a method, by default called `getDb`.  |  
| `getThing?`  | `string`  | An optional string that will be used to get the reference to the database or connection from the [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/), defaulting to `getDb`.  |  
| returns  | `Persister[](https://tinybase.org/api/persisters/interfaces/persister/persister/)<Persist>`  | A reference to the new SQLite-oriented [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) object.  |  
This is only used when developing custom database-oriented Persisters, and most TinyBase users will not need to be particularly aware of it.
All of the TinyBase SQLite-oriented [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) functions use this function under the covers, and so you may wish to look at those implementations for ideas on how to build your own [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) type, and as functional examples. Examine the implementation of the [`createSqlite3Persister`](https://tinybase.org/api/persister-sqlite3/functions/creation/createsqlite3persister/) function as a good starting point, for example.
## Since
v5.2.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
