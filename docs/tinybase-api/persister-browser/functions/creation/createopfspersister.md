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
  * [`createOpfsPersister`](https://tinybase.org/api/persister-browser/functions/creation/createopfspersister/)


# `createOpfsPersister`
The `createOpfsPersister` function creates an [`OpfsPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/) object that can persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a file in an origin private file system (OPFS).

```
createOpfsPersister[](https://tinybase.org/api/persister-browser/functions/creation/createopfspersister/)(
  store: Store[](https://tinybase.org/api/the-essentials/creating-stores/store/) | MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/),
  handle: FileSystemFileHandle,
  onIgnoredError?: (error: any) => void,
): OpfsPersister[](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `Store[](https://tinybase.org/api/the-essentials/creating-stores/store/) | MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) or [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to persist.  |  
| `handle`  | `FileSystemFileHandle`  | The handle of an existing OPFS file to persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to.  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment.  |  
| returns  | `OpfsPersister[](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/)`  | A reference to the new [`OpfsPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/) object.  |  
An [`OpfsPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/) supports both regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects.
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide a `handle` parameter which identifies an existing OPFS file to persist it to.
## Example
This example creates an [`OpfsPersister`](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/) object and persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a local file.

```
import {createStore} from 'tinybase';
import {createOpfsPersister} from 'tinybase/persisters/persister-browser';

const opfs = await navigator.storage.getDirectory();
const handle = await opfs.getFileHandle('tinybase.json', {create: true});

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = createOpfsPersister[](https://tinybase.org/api/persister-browser/functions/creation/createopfspersister/)(store, handle);

await persister.save[](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/methods/save/save/)();
// Store JSON will be saved to the file.

await persister.load[](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/methods/load/load/)();
// Store JSON will be loaded from the file.

await persister.destroy[](https://tinybase.org/api/persister-browser/interfaces/persister/opfspersister/methods/lifecycle/destroy/)();

```

## Since
v6.7.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
