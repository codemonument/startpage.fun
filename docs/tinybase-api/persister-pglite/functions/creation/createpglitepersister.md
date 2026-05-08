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
        * [Interfaces](https://tinybase.org/api/persister-pglite/interfaces/)
        * [Functions](https://tinybase.org/api/persister-pglite/functions/)
          * [`createPglitePersister`](https://tinybase.org/api/persister-pglite/functions/creation/createpglitepersister/)
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
  * [`persister-pglite`](https://tinybase.org/api/persister-pglite/)
  * [Functions](https://tinybase.org/api/persister-pglite/functions/)
  * [`createPglitePersister`](https://tinybase.org/api/persister-pglite/functions/creation/createpglitepersister/)


# `createPglitePersister`
Essential
The `createPglitePersister` function creates a [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/) object that can persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a local PGlite database.

```
createPglitePersister[](https://tinybase.org/api/persister-pglite/functions/creation/createpglitepersister/)(
  store: Store[](https://tinybase.org/api/the-essentials/creating-stores/store/) | MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/),
  pglite: PGlite,
  configOrStoreTableName?: string | DatabasePersisterConfig[](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/),
  onSqlCommand?: (sql: string, params?: any[]) => void,
  onIgnoredError?: (error: any) => void,
): Promise<PglitePersister[](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/)>
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `Store[](https://tinybase.org/api/the-essentials/creating-stores/store/) | MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) or [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to persist.  |  
| `pglite`  | `PGlite`  | The database connection that was returned from `PGlite.create(...)`.  |  
| `configOrStoreTableName?`  | `string | DatabasePersisterConfig[](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/)`  | A [`DatabasePersisterConfig`](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/) to configure the persistence mode (or a string to set the `storeTableName` property of the JSON serialization).  |  
| `onSqlCommand?`  | `(sql: string, params?: any[]) => void`  | An optional handler called every time the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) executes a SQL command or query. This is suitable for logging persistence behavior in a development environment.  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment.  |  
| returns  | `Promise<PglitePersister[](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/)>`  | A reference to the new [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/) object.  |  
A [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/) supports regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects, and can also be used to persist the metadata of a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) when using the JSON serialization mode, as described below.
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide a `pglite` parameter which identifies the database connection.
A database [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) uses one of two modes: either a JSON serialization of the whole [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) stored in a single row of a table (the default), or a tabular mapping of [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) to database table names and vice-versa).
The third argument is a [`DatabasePersisterConfig`](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/) object that configures which of those modes to use, and settings for each. If the third argument is simply a string, it is used as the `storeTableName` property of the JSON serialization.
See the documentation for the [`DpcJson`](https://tinybase.org/api/persisters/type-aliases/configuration/dpcjson/) and [`DpcTabular`](https://tinybase.org/api/persisters/type-aliases/configuration/dpctabular/) types for more information on how both of those modes can be configured.
Note: When using tabular mode, SQL NULL values are loaded as TinyBase null values, making tables dense (every [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) has every [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/)). See the [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/) guide for details.
This method is asynchronous because it will await the completion of the new connections to the database. You will need to `await` a call to this function or handle the return type natively as a Promise.
## Examples
This example creates a [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/) object and persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a local PGlite database as a JSON serialization into the `my_tinybase` table. It makes a change to the database directly and then reloads it back into the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).

```
import {PGlite} from '@electric-sql/pglite';
import {createStore} from 'tinybase';
import {createPglitePersister} from 'tinybase/persisters/persister-pglite';

const pglite = await PGlite.create();
const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = await createPglitePersister[](https://tinybase.org/api/persister-pglite/functions/creation/createpglitepersister/)(
  store,
  pglite,
  'my_tinybase',
);
await persister.save[](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/methods/save/save/)();
// Store will be saved to the database.

console.log((await pglite.query('SELECT * FROM my_tinybase;')).rows);
// -> [{_id: '_', store: '[{"pets":{"fido":{"species":"dog"}}},{}]'}]

await pglite.query(`UPDATE my_tinybase SET store = $1 WHERE _id = '_';`, [
  '[{"pets":{"felix":{"species":"cat"}}},{}]',
]);

await persister.load[](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/methods/load/load/)();
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {felix: {species: 'cat'}}}

await persister.destroy[](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/methods/lifecycle/destroy/)();
await pglite.close();

```

This example creates a [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/) object and persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a local PGlite database with tabular mapping.

```
import {PGlite} from '@electric-sql/pglite';
import {createStore} from 'tinybase';
import {createPglitePersister} from 'tinybase/persisters/persister-pglite';

const pglite = await PGlite.create();
const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = await createPglitePersister[](https://tinybase.org/api/persister-pglite/functions/creation/createpglitepersister/)(store, pglite, {
  mode: 'tabular',
  tables: {load: {pets: 'pets'}, save: {pets: 'pets'}},
});

await persister.save[](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/methods/save/save/)();
console.log((await pglite.query('SELECT * FROM pets;')).rows);
// -> [{_id: 'fido', species: '"dog"'}]
// Note that Cells and Values are JSON-encoded in PostgreSQL databases.

await pglite.query(
  `INSERT INTO pets (_id, species) VALUES ('felix', '"cat"')`,
);
await persister.load[](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/methods/load/load/)();
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

await persister.destroy[](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/methods/lifecycle/destroy/)();
await pglite.query('DROP TABLE IF EXISTS pets');
await pglite.close();

```

## Since
5.2.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
