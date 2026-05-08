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
  * [`createCustomPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompersister/)


# `createCustomPersister`
The `createCustomPersister` function creates a [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) object that you can configure to persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in any way you wish.

```
createCustomPersister[](https://tinybase.org/api/persisters/functions/creation/createcustompersister/)<ListenerHandle, Persist>(
  store: PersistedStore[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedstore/)<Persist>,
  getPersisted: () => Promise<undefined | PersistedContent[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedcontent/)<Persist>>,
  setPersisted: (getContent: () => PersistedContent[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedcontent/)<Persist>, changes?: PersistedChanges[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedchanges/)<Persist, false>) => Promise<void>,
  addPersisterListener: (listener: PersisterListener[](https://tinybase.org/api/persisters/type-aliases/creation/persisterlistener/)<Persist>) => ListenerHandle | Promise<ListenerHandle>,
  delPersisterListener: (listenerHandle: ListenerHandle) => void | Promise<void>,
  onIgnoredError?: (error: any) => void,
  persist?: Persist,
): Persister[](https://tinybase.org/api/persisters/interfaces/persister/persister/)<Persist>
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `PersistedStore[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedstore/)<Persist>`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist.  |  
| `getPersisted`  | `() => Promise<undefined | PersistedContent[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedcontent/)<Persist>>`  | An asynchronous function which will fetch content from the persistence layer (or `undefined` if not present).  |  
| `setPersisted`  | `(getContent: () => PersistedContent[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedcontent/)<Persist>, changes?: PersistedChanges[](https://tinybase.org/api/persisters/type-aliases/mergeable/persistedchanges/)<Persist, false>) => Promise<void>`  | An asynchronous function which will send content to the persistence layer. Since v4.0, it receives functions for getting the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) content and information about the changes made during a transaction. Since v5.0, the changes are received directly by reference, rather than an accessor.  |  
| `addPersisterListener`  | `(listener: PersisterListener[](https://tinybase.org/api/persisters/type-aliases/creation/persisterlistener/)<Persist>) => ListenerHandle | Promise<ListenerHandle>`  | A function that will register a `listener` listener on underlying changes to the persistence layer. You can return a listening handle that will be provided again when `delPersisterListener` is called. This function can be asynchronous.  |  
| `delPersisterListener`  | `(listenerHandle: ListenerHandle) => void | Promise<void>`  | A function that will unregister the listener from the underlying changes to the persistence layer. It receives whatever was returned from your `addPersisterListener` implementation. This function can be asynchronous.  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment, since v4.0.4.  |  
| `persist?`  | `Persist`  | Since v5.0, an optional integer from the [`Persists`](https://tinybase.org/api/persisters/enumerations/mergeable/persists/) enum to indicate which types of [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) are supported by this [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/): `1` indicates only a regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is supported, `2` indicates only a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) is supported, and `3` indicates that both [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) are supported.  |  
| returns  | `Persister[](https://tinybase.org/api/persisters/interfaces/persister/persister/)<Persist>`  | A reference to the new [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) object.  |  
This is only used when developing custom Persisters, and most TinyBase users will not need to be particularly aware of it.
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide functions that handle how to fetch, write, and listen to, the persistence layer.
The other creation functions (such as the [`createSessionPersister`](https://tinybase.org/api/persister-browser/functions/creation/createsessionpersister/) function and [`createFilePersister`](https://tinybase.org/api/persister-file/functions/creation/createfilepersister/) function, for example) all use this function under the covers. See those implementations for ideas on how to implement your own [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) types.
This [API](https://tinybase.org/api/) changed in v4.0. Any custom persisters created on previous versions should be upgraded. Most notably, the `setPersisted` function parameter is provided with a `getContent` function to get the content from the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) itself, rather than being passed pre-serialized JSON. It also receives information about the changes made during a transaction. The `getPersisted` function must return the content (or nothing) rather than JSON. `startListeningToPersisted` has been renamed `addPersisterListener`, and `stopListeningToPersisted` has been renamed `delPersisterListener`.
## Examples
This example creates a custom [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) object and persists a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a local string called `persistedJson` and which would automatically load by polling for changes every second. It implicitly supports only a regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).

```
import {createStore} from 'tinybase';
import {createCustomPersister} from 'tinybase/persisters';

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
let persistedJson;

const persister = createCustomPersister[](https://tinybase.org/api/persisters/functions/creation/createcustompersister/)(
  store,
  async () => {
    // getPersisted
    return JSON.parse(persistedJson);
  },
  async (getContent) => {
    // setPersisted
    persistedJson = JSON.stringify(getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
  },
  (listener) => setInterval(listener, 1000),
  (interval) => clearInterval(interval),
);

await persister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
console.log(persistedJson);
// -> '[{"pets":{"fido":{"species":"dog"}}},{}]'

persistedJson = '[{"pets":{"fido":{"species":"dog","color":"brown"}}},{}]';
await persister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();

console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'brown'}}}

await persister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

This example demonstrates a [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) creation function which returns a [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/). This can persists a store to a local string called `persistedJson` and which would automatically load by polling for changes every second. It emits warnings to the console and explicitly supports either a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) or a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/).

```
import {createMergeableStore, createStore} from 'tinybase';
import {Persists, createCustomPersister} from 'tinybase/persisters';

let persistedJson;
const createJsonPersister = (storeOrMergeableStore) =>
  createCustomPersister[](https://tinybase.org/api/persisters/functions/creation/createcustompersister/)(
    storeOrMergeableStore,
    async () => {
      // getPersisted
      return JSON.parse(persistedJson);
    },
    async (getContent) => {
      // setPersisted
      persistedJson = JSON.stringify(getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
    },
    (listener) => setInterval(listener, 1000),
    (interval) => clearInterval(interval),
    console.warn,
    Persists.StoreOrMergeableStore,
  );

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)();
store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const storePersister = createJsonPersister(store);
await storePersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
console.log(persistedJson);
// -> '[{"pets":{"fido":{"species":"dog"}}},{}]'
await storePersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

const mergeableStore = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)('mergeableStore1');
mergeableStore.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const mergeableStorePersister = createJsonPersister(mergeableStore);
await mergeableStorePersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
console.log(JSON.parse(persistedJson));
// ->
[
  [
    {
      pets: [
        {
          fido: [
            {species: ['dog', 'Nn1JUF-----Zjl0M', 4176151067]},
            '',
            2722999044,
          ],
        },
        '',
        3367164653,
      ],
    },
    '',
    30627183,
  ],
  [{}, '', 0],
];
await mergeableStorePersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

## Since
v1.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
