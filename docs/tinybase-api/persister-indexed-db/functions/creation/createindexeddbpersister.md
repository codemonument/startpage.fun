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
        * [Interfaces](https://tinybase.org/api/persister-indexed-db/interfaces/)
        * [Functions](https://tinybase.org/api/persister-indexed-db/functions/)
          * [`createIndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/functions/creation/createindexeddbpersister/)
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
  * [`persister-indexed-db`](https://tinybase.org/api/persister-indexed-db/)
  * [Functions](https://tinybase.org/api/persister-indexed-db/functions/)
  * [`createIndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/functions/creation/createindexeddbpersister/)


# `createIndexedDbPersister`
The `createIndexedDbPersister` function creates an [`IndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/) object that can persist a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to the browser's IndexedDB storage.

```
createIndexedDbPersister[](https://tinybase.org/api/persister-indexed-db/functions/creation/createindexeddbpersister/)(
  store: Store[](https://tinybase.org/api/the-essentials/creating-stores/store/),
  dbName: string,
  autoLoadIntervalSeconds?: number,
  onIgnoredError?: (error: any) => void,
): IndexedDbPersister[](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `Store[](https://tinybase.org/api/the-essentials/creating-stores/store/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist.  |  
| `dbName`  | `string`  | The unique key to identify the IndexedDB to use.  |  
| `autoLoadIntervalSeconds?`  | `number`  | How often to poll the database when in 'autoLoad' mode, defaulting to 1.  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment.  |  
| returns  | `IndexedDbPersister[](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/)`  | A reference to the new [`IndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/) object.  |  
An [`IndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/) only supports regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects, and cannot be used to persist the metadata of a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/).
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide a `dbName` parameter which is unique to your application. This is the key used to identify which IndexedDB to use.
Within that database, this [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) will create two object stores: one called 't', and one called 'v'. These will contain the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)'s tabular and key-value data respectively, using 'k' and 'v' to store the key and value of each entry, as shown in the example.
Note that it is not possible to reactively detect changes to a browser's IndexedDB. If you do choose to enable automatic loading for the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) (with the [`startAutoLoad`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/methods/load/startautoload/) method), it needs to poll the database for changes. The `autoLoadIntervalSeconds` method is used to indicate how often to do this.
## Example
This example creates a [`IndexedDbPersister`](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/) object and persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to the browser's IndexedDB storage.

```
import {createStore} from 'tinybase';
import {createIndexedDbPersister} from 'tinybase/persisters/persister-indexed-db';

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)()
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {fido: {species: 'dog'}})
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {dog: {price: 5}})
  .setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({open: true});
const persister = createIndexedDbPersister[](https://tinybase.org/api/persister-indexed-db/functions/creation/createindexeddbpersister/)(store, 'petStore');

await persister.save[](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/methods/save/save/)();
// IndexedDB ->
//   database petStore:
//     objectStore t:
//       object 0:
//         k: "pets"
//         v: {fido: {species: dog}}
//       object 1:
//         k: "species"
//         v: {dog: {price: 5}}
//     objectStore v:
//       object 0:
//         k: "open"
//         v: true

await persister.destroy[](https://tinybase.org/api/persister-indexed-db/interfaces/persister/indexeddbpersister/methods/lifecycle/destroy/)();

```

## Since
v4.2.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
