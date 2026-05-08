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
        * [Interfaces](https://tinybase.org/api/persister-automerge/interfaces/)
        * [Functions](https://tinybase.org/api/persister-automerge/functions/)
          * [`createAutomergePersister`](https://tinybase.org/api/persister-automerge/functions/creation/createautomergepersister/)
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
  * [`persister-automerge`](https://tinybase.org/api/persister-automerge/)
  * [Functions](https://tinybase.org/api/persister-automerge/functions/)
  * [`createAutomergePersister`](https://tinybase.org/api/persister-automerge/functions/creation/createautomergepersister/)


# `createAutomergePersister`
The `createAutomergePersister` function creates an [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/) object that can persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to an Automerge document.

```
createAutomergePersister[](https://tinybase.org/api/persister-automerge/functions/creation/createautomergepersister/)(
  store: Store[](https://tinybase.org/api/the-essentials/creating-stores/store/),
  docHandle: DocHandle<any>,
  docMapName?: string,
  onIgnoredError?: (error: any) => void,
): AutomergePersister[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `Store[](https://tinybase.org/api/the-essentials/creating-stores/store/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist.  |  
| `docHandle`  | `DocHandle<any>`  | The Automerge document handler to persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with.  |  
| `docMapName?`  | `string`  | The name of the map used inside the Automerge document to sync the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to (which otherwise will default to 'tinybase').  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment, since v4.0.4.  |  
| returns  | `AutomergePersister[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/)`  | A reference to the new [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/) object.  |  
An [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/) only supports regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects, and cannot be used to persist the metadata of a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/).
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide the Automerge document handler to persist it with.
## Examples
This example creates a [`AutomergePersister`](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/) object and persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to an Automerge document.

```
import {Repo} from '@automerge/automerge-repo';
import {createStore} from 'tinybase';
import {createAutomergePersister} from 'tinybase/persisters/persister-automerge';

const docHandler = new Repo({network: []}).create();
const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = createAutomergePersister[](https://tinybase.org/api/persister-automerge/functions/creation/createautomergepersister/)(store, docHandler);

await persister.save[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/methods/save/save/)();
// Store will be saved to the document.

console.log(docHandler.doc());
// -> {tinybase: {t: {pets: {fido: {species: 'dog'}}}, v: {}}}

await persister.destroy[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/methods/lifecycle/destroy/)();

```

This more complex example uses Automerge networking to keep two [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects (each with their own [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) objects and Automerge documents) in sync with each other using a network.

```
import {Repo} from '@automerge/automerge-repo';
import {BroadcastChannelNetworkAdapter} from '@automerge/automerge-repo-network-broadcastchannel';
import {createStore} from 'tinybase';
import {createAutomergePersister} from 'tinybase/persisters/persister-automerge';

// Bind the first Store to a network-enabled automerge-repo
const repo1 = new Repo({
  network: [new BroadcastChannelNetworkAdapter()],
});
const docHandler1 = repo1.create();
const store1 = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)();
const persister1 = createAutomergePersister[](https://tinybase.org/api/persister-automerge/functions/creation/createautomergepersister/)(store1, docHandler1);
await persister1.startAutoLoad[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/methods/load/startautoload/)();
await persister1.startAutoSave[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/methods/save/startautosave/)();

// Bind the second Store to a different network-enabled automerge-repo
const repo2 = new Repo({
  network: [new BroadcastChannelNetworkAdapter()],
});
const docHandler2 = await repo2.find(docHandler1.documentId);
const store2 = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)();
const persister2 = createAutomergePersister[](https://tinybase.org/api/persister-automerge/functions/creation/createautomergepersister/)(store2, docHandler2);
await persister2.startAutoLoad[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/methods/load/startautoload/)();
await persister2.startAutoSave[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/methods/save/startautosave/)();

// A function that waits briefly and then for the documents to synchronize
// with each other, merely for the purposes of sequentiality in this example.
const syncDocsWait = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(0), 100));
  docHandler1.doc();
  docHandler2.doc();
};

// Wait for the documents to synchronize in their initial state.
await syncDocsWait();

// Make a change to each of the two Stores.
store1.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
store2.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({open: true});

// Wait for the documents to synchronize in their new state.
await syncDocsWait();

// Ensure the Stores are in sync.
console.log(store1.getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
// -> [{pets: {fido: {species: 'dog'}}}, {open: true}]
console.log(store2.getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
// -> [{pets: {fido: {species: 'dog'}}}, {open: true}]

await persister1.destroy[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/methods/lifecycle/destroy/)();
await persister2.destroy[](https://tinybase.org/api/persister-automerge/interfaces/persister/automergepersister/methods/lifecycle/destroy/)();

```

## Since
v4.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
