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
        * [Interfaces](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/)
        * [Functions](https://tinybase.org/api/synchronizer-ws-server-simple/functions/)
          * [`createWsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/functions/creation/createwsserversimple/)
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
  * [`synchronizer-ws-server-simple`](https://tinybase.org/api/synchronizer-ws-server-simple/)
  * [Functions](https://tinybase.org/api/synchronizer-ws-server-simple/functions/)
  * [`createWsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/functions/creation/createwsserversimple/)


# `createWsServerSimple`
The `createWsServerSimple` function creates a [`WsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/) that facilitates synchronization between clients that are using [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) instances.

```
createWsServerSimple[](https://tinybase.org/api/synchronizer-ws-server-simple/functions/creation/createwsserversimple/)(webSocketServer: WebSocketServer): WsServerSimple[](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `webSocketServer`  | `WebSocketServer`  | A WebSocketServer object from your server environment.  |  
| returns  | `WsServerSimple[](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/)`  | A reference to the new [`WsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/) object.  |  
This should be run in a server environment, and you must pass in a configured WebSocketServer object in order to create it.
The core functionality is equivalent to the [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) interface, but without the complications of listeners, persistence, or statistics. This makes it more suitable to be used as a reference implementation for other server environments.
## Example
This example creates a [`WsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/) that synchronizes two clients on a shared path.

```
import {createMergeableStore} from 'tinybase';
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';
import {createWsServerSimple} from 'tinybase/synchronizers/synchronizer-ws-server-simple';
import {WebSocket, WebSocketServer} from 'ws';

// Server
const server = createWsServerSimple[](https://tinybase.org/api/synchronizer-ws-server-simple/functions/creation/createwsserversimple/)(new WebSocketServer({port: 8053}));

// Client 1
const clientStore1 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
clientStore1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
const synchronizer1 = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  clientStore1,
  new WebSocket('ws://localhost:8053/petShop'),
);
await synchronizer1.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
// ...

// Client 2
const clientStore2 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
clientStore2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'felix', 'species', 'cat');
const synchronizer2 = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  clientStore2,
  new WebSocket('ws://localhost:8053/petShop'),
);
await synchronizer2.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
// ...

console.log(clientStore1.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

console.log(clientStore2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

await synchronizer1.destroy[](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/methods/getter/destroy/)();
await synchronizer2.destroy[](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/methods/getter/destroy/)();
await server.destroy[](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/methods/getter/destroy/)();

```

## Since
v5.4.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
