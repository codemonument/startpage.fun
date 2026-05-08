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
        * [Interfaces](https://tinybase.org/api/persister-browser/interfaces/)
        * [Functions](https://tinybase.org/api/persister-browser/functions/)
          * [`createLocalPersister`](https://tinybase.org/api/persister-browser/functions/creation/createlocalpersister/)
          * [`createOpfsPersister`](https://tinybase.org/api/persister-browser/functions/creation/createopfspersister/)
          * [`createSessionPersister`](https://tinybase.org/api/persister-browser/functions/creation/createsessionpersister/)
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
  * [`persister-browser`](https://tinybase.org/api/persister-browser/)
  * [Functions](https://tinybase.org/api/persister-browser/functions/)
  * [`createSessionPersister`](https://tinybase.org/api/persister-browser/functions/creation/createsessionpersister/)


# `createSessionPersister`
Essential
The `createSessionPersister` function creates a [`SessionPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/) object that can persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to the browser's session storage.

```
createSessionPersister[](https://tinybase.org/api/persister-browser/functions/creation/createsessionpersister/)(
  store: Store[](https://tinybase.org/api/the-essentials/creating-stores/store/) | MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/),
  storageName: string,
  onIgnoredError?: (error: any) => void,
): SessionPersister[](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `Store[](https://tinybase.org/api/the-essentials/creating-stores/store/) | MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) or [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to persist.  |  
| `storageName`  | `string`  | The unique key to identify the storage location.  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/persisters/interfaces/persister/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment, since v4.0.4.  |  
| returns  | `SessionPersister[](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/)`  | A reference to the new [`SessionPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/) object.  |  
A [`SessionPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/) supports both regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects.
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide a `storageName` parameter which is unique to your application. This is the key that the browser uses to identify the storage location.
## Example
This example creates a [`SessionPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/) object and persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to the browser's session storage.

```
import {createStore} from 'tinybase';
import {createSessionPersister} from 'tinybase/persisters/persister-browser';

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = createSessionPersister[](https://tinybase.org/api/persister-browser/functions/creation/createsessionpersister/)(store, 'pets');

await persister.save[](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/methods/save/save/)();
console.log(sessionStorage.getItem('pets'));
// -> '[{"pets":{"fido":{"species":"dog"}}},{}]'

await persister.destroy[](https://tinybase.org/api/persister-browser/interfaces/persister/sessionpersister/methods/lifecycle/destroy/)();
sessionStorage.clear[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/lifecycle/clear/)();

```

## Since
v1.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
