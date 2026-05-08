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
        * [Interfaces](https://tinybase.org/api/persister-partykit-client/interfaces/)
        * [Functions](https://tinybase.org/api/persister-partykit-client/functions/)
          * [`createPartyKitPersister`](https://tinybase.org/api/persister-partykit-client/functions/creation/createpartykitpersister/)
        * [Type Aliases](https://tinybase.org/api/persister-partykit-client/type-aliases/)
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
  * [`persister-partykit-client`](https://tinybase.org/api/persister-partykit-client/)
  * [Functions](https://tinybase.org/api/persister-partykit-client/functions/)
  * [`createPartyKitPersister`](https://tinybase.org/api/persister-partykit-client/functions/creation/createpartykitpersister/)


# `createPartyKitPersister`
The `createPartyKitPersister` function creates a [`PartyKitPersister`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/) object that can persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to durable PartyKit storage, enabling synchronization of the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) across multiple clients.

```
createPartyKitPersister[](https://tinybase.org/api/persister-partykit-client/functions/creation/createpartykitpersister/)(
  store: Store[](https://tinybase.org/api/the-essentials/creating-stores/store/),
  connection: PartySocket,
  configOrStoreProtocol?: PartyKitPersisterConfig[](https://tinybase.org/api/persister-partykit-client/type-aliases/configuration/partykitpersisterconfig/) | "http" | "https",
  onIgnoredError?: (error: any) => void,
): PartyKitPersister[](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `Store[](https://tinybase.org/api/the-essentials/creating-stores/store/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist.  |  
| `connection`  | `PartySocket`  | The PartySocket to use for participating in the PartyKit room.  |  
| `configOrStoreProtocol?`  | `PartyKitPersisterConfig[](https://tinybase.org/api/persister-partykit-client/type-aliases/configuration/partykitpersisterconfig/) | "http" | "https"`  | The [`PartyKitPersisterConfig`](https://tinybase.org/api/persister-partykit-client/type-aliases/configuration/partykitpersisterconfig/) configuration for the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/), (or a string to specify a HTTP protocol to use, defaulting to 'https').  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment.  |  
| returns  | `PartyKitPersister[](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/)`  | A reference to the new [`PartyKitPersister`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/) object.  |  
A [`PartyKitPersister`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/) only supports regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects, and cannot be used to persist the metadata of a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/).
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide a `connection` parameter which is a PartyKit PartySocket that you have already instantiated with details of the host and room.
All suitably-equipped TinyBase clients connecting to that room will get to share synchronized [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) state.
The server room's [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is considered the source of truth. If it is a newly-created room, then calling the [`save`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/methods/save/save/) method on this [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) will initiate it. If, however, there is already a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) present on the server, the [`save`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/methods/save/save/) method will fail gracefully.
In general, you are strongly recommended to use the auto-save and auto-load functionality to stay in sync incrementally with the server, as per the example below. This pattern will handle newly-created servers and newly-created clients - and the synchronization involved in joining rooms, leaving them, or temporarily going offline.
See the [PartyKit client socket API documentation](https://docs.partykit.io/reference/partysocket-api/) for more details.
## Example
This example creates a [`PartyKitPersister`](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/) object and persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to the browser's IndexedDB storage.

```
import {PartySocket} from 'partysocket';
import {createStore} from 'tinybase';
import {createPartyKitPersister} from 'tinybase/persisters/persister-partykit-client';

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)()
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {fido: {species: 'dog'}})
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {dog: {price: 5}})
  .setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({open: true});
const partySocket = new PartySocket({
  host: '127.0.0.1:1999',
  room: 'my_room',
});
const persister = createPartyKitPersister[](https://tinybase.org/api/persister-partykit-client/functions/creation/createpartykitpersister/)(store, partySocket);
await persister.startAutoLoad[](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/methods/load/startautoload/)();
await persister.startAutoSave[](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/methods/save/startautosave/)();
// Store will now be synchronized with the room.

await persister.destroy[](https://tinybase.org/api/persister-partykit-client/interfaces/persister/partykitpersister/methods/lifecycle/destroy/)();

```

## Since
v4.3.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
