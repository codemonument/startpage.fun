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
      * [`persister-postgres`](https://tinybase.org/api/persister-postgres/)
      * [`persister-powersync`](https://tinybase.org/api/persister-powersync/)
      * [`persister-react-native-mmkv`](https://tinybase.org/api/persister-react-native-mmkv/)
      * [`persister-react-native-sqlite`](https://tinybase.org/api/persister-react-native-sqlite/)
      * [`persister-remote`](https://tinybase.org/api/persister-remote/)
        * [Interfaces](https://tinybase.org/api/persister-remote/interfaces/)
        * [Functions](https://tinybase.org/api/persister-remote/functions/)
          * [`createRemotePersister`](https://tinybase.org/api/persister-remote/functions/creation/createremotepersister/)
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
  * [`persister-remote`](https://tinybase.org/api/persister-remote/)
  * [Functions](https://tinybase.org/api/persister-remote/functions/)
  * [`createRemotePersister`](https://tinybase.org/api/persister-remote/functions/creation/createremotepersister/)


# `createRemotePersister`
The `createRemotePersister` function creates a [`RemotePersister`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/) object that can persist the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a remote server.

```
createRemotePersister[](https://tinybase.org/api/persister-remote/functions/creation/createremotepersister/)(
  store: Store[](https://tinybase.org/api/the-essentials/creating-stores/store/),
  loadUrl: string,
  saveUrl: string,
  autoLoadIntervalSeconds?: number,
  onIgnoredError?: (error: any) => void,
): RemotePersister[](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `Store[](https://tinybase.org/api/the-essentials/creating-stores/store/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist.  |  
| `loadUrl`  | `string`  | The endpoint that supports a `GET` method to load JSON.  |  
| `saveUrl`  | `string`  | The endpoint that supports a `POST` method to save JSON.  |  
| `autoLoadIntervalSeconds?`  | `number`  | How often to poll the `loadUrl` when automatically loading changes from the server, defaulting to 5.  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) would otherwise ignore when trying to save or load data. This is suitable for debugging persistence issues in a development environment, since v4.0.4.  |  
| returns  | `RemotePersister[](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/)`  | A reference to the new [`RemotePersister`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/) object.  |  
A [`RemotePersister`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/) only supports regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects, and cannot be used to persist the metadata of a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/).
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide `loadUrl` and `saveUrl` parameters. These identify the endpoints of the server that support the `GET` method (to fetch the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) JSON to load) and the `POST` method (to send the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) JSON to save) respectively.
For when you choose to enable automatic loading for the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) (with the [`startAutoLoad`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/methods/load/startautoload/) method), it will poll the loadUrl for changes, using the `ETag` HTTP header to identify if things have changed. The `autoLoadIntervalSeconds` method is used to indicate how often to do this.
If you are implementing the server portion of this functionality yourself, remember to ensure that the `ETag` header changes every time the server's [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) content does - otherwise changes will not be detected by the client.
## Example
This example creates a [`RemotePersister`](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/) object and persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a remote server.

```
import {createStore} from 'tinybase';
import {createRemotePersister} from 'tinybase/persisters/persister-remote';

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const persister = createRemotePersister[](https://tinybase.org/api/persister-remote/functions/creation/createremotepersister/)(
  store,
  'https://example.com/load',
  'https://example.com/save',
  5,
);

await persister.save[](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/methods/save/save/)();
// Store JSON will be sent to server in a POST request.

await persister.load[](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/methods/load/load/)();
// Store JSON will be fetched from server with a GET request.

await persister.destroy[](https://tinybase.org/api/persister-remote/interfaces/persister/remotepersister/methods/lifecycle/destroy/)();

```

## Since
v1.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
