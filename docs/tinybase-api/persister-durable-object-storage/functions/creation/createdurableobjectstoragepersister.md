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
        * [Interfaces](https://tinybase.org/api/persister-durable-object-storage/interfaces/)
        * [Functions](https://tinybase.org/api/persister-durable-object-storage/functions/)
          * [`createDurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/functions/creation/createdurableobjectstoragepersister/)
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
  * [`persister-durable-object-storage`](https://tinybase.org/api/persister-durable-object-storage/)
  * [Functions](https://tinybase.org/api/persister-durable-object-storage/functions/)
  * [`createDurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/functions/creation/createdurableobjectstoragepersister/)


# `createDurableObjectStoragePersister`
The `createDurableObjectStoragePersister` function creates a [`DurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/) object that can persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to and from Cloudflare Durable Object storage.

```
createDurableObjectStoragePersister[](https://tinybase.org/api/persister-durable-object-storage/functions/creation/createdurableobjectstoragepersister/)(
  store: MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/),
  storage: DurableObjectStorage,
  storagePrefix?: string,
  onIgnoredError?: (error: any) => void,
): DurableObjectStoragePersister[](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)`  | The [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to persist.  |  
| `storage`  | `DurableObjectStorage`  | The Durable Object storage to persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to.  |  
| `storagePrefix?`  | `string`  | An optional prefix to use on the keys in storage, which is useful if you want to ensure the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) will not affect unrelated Durable Object storage. Defaults to an empty string.  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment.  |  
| returns  | `DurableObjectStoragePersister[](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/)`  | A reference to the new [`DurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/) object.  |  
You will mostly use this within the [`createPersister`](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/methods/creation/createpersister/) method of a [`WsServerDurableObject`](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/).
A [`DurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/) only supports [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects, and cannot be used to persist a regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
Durable Objects have limitations on the data that can be stored in each key of their key-value structure. The [`DurableObjectStoragePersister`](https://tinybase.org/api/persister-durable-object-storage/interfaces/persister/durableobjectstoragepersister/) uses one key per TinyBase [`Value`](https://tinybase.org/api/store/type-aliases/store/value/), one key per [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/), one key per [`Row`](https://tinybase.org/api/store/type-aliases/store/row/), and one key per [`Table`](https://tinybase.org/api/store/type-aliases/store/table/). Mostly this is CRDT metadata, but the main caution is to ensure that each individual TinyBase [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) data does not exceed the (128 KiB) limit.
As well as providing a reference to the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to persist, you must provide a `storage` parameter which identifies the Durable Object storage to persist it to.
## Example
This example creates a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) object against a newly-created [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) (within the [`createPersister`](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/methods/creation/createpersister/) method of a [`WsServerDurableObject`](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/) instance) and then gets the storage reference back out again.

```
import {createMergeableStore} from 'tinybase';
import {createDurableObjectStoragePersister} from 'tinybase/persisters/persister-durable-object-storage';
import {WsServerDurableObject} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';

export class MyDurableObject extends WsServerDurableObject[](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/) {
  createPersister[](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/methods/creation/createpersister/)() {
    const store = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
    const persister = createDurableObjectStoragePersister[](https://tinybase.org/api/persister-durable-object-storage/functions/creation/createdurableobjectstoragepersister/)(
      store,
      this.ctx.storage,
    );
    return persister;
  }
}

```

## Since
v5.4.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
