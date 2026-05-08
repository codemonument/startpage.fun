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
        * [Interfaces](https://tinybase.org/api/synchronizer-ws-server/interfaces/)
        * [Functions](https://tinybase.org/api/synchronizer-ws-server/functions/)
          * [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)
        * [Type Aliases](https://tinybase.org/api/synchronizer-ws-server/type-aliases/)
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
  * [`synchronizer-ws-server`](https://tinybase.org/api/synchronizer-ws-server/)
  * [Functions](https://tinybase.org/api/synchronizer-ws-server/functions/)
  * [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)


# `createWsServer`
The `createWsServer` function creates a [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) that facilitates synchronization between clients that are using [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) instances.

```
createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)<PathPersister>(
  webSocketServer: WebSocketServer,
  createPersisterForPath?: (pathId: string) => undefined | PathPersister | [PathPersister, (store: MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)) => void] | Promise<PathPersister> | Promise<[PathPersister, (store: MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)) => void]>,
  onIgnoredError?: (error: any) => void,
): WsServer[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `webSocketServer`  | `WebSocketServer`  | A WebSocketServer object from your server environment.  |  
| `createPersisterForPath?`  | `(pathId: string) => undefined | PathPersister | [PathPersister, (store: MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)) => void] | Promise<PathPersister> | Promise<[PathPersister, (store: MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)) => void]>`  | An optional function that will create a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) to synchronize with the clients on a given path (or a two-item array of [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) and callback that lets you handle data after persistence has started).  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the server would otherwise ignore when trying to sync data. This is suitable for debugging issues in a development environment.  |  
| returns  | `WsServer[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/)`  | A reference to the new [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) object.  |  
This should be run in a server environment, and you must pass in a configured WebSocketServer object in order to create it.
If you want your server to persist data itself, you can use the optional second parameter of this function, which allows you to create a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) for a new path - whenever a new path is accessed by a client. This [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) will only exist when there are active clients on that particular path. The creation callback can be asynchronous.
You are responsible for creating a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to pass to this [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/), but starting and stopping its automatic saving and loading is taken care of by the [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/). As a result, the server [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) will be kept in sync with the clients on that path, and in turn with whatever persistence layer you have configured. See the example below.
It is not safe to add or manipulate data in the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) during the `createPersisterForPath` function, since changes will probably be overwritten when the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) starts. If you wish to modify data - or upgrade a schema, for example - you can have that function instead return an array containing the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) _and_ a callback that takes the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/). That callback will get called after the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) has started, and is an appropriate place to manipulate data in a way that will be transmitted to clients. Again, see the example below.
## Examples
This example creates a [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) that synchronizes two clients on a shared path.

```
import {createMergeableStore} from 'tinybase';
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';
import {createWsServer} from 'tinybase/synchronizers/synchronizer-ws-server';
import {WebSocket, WebSocketServer} from 'ws';

// Server
const server = createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)(new WebSocketServer({port: 8047}));

// Client 1
const clientStore1 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
clientStore1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
const synchronizer1 = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  clientStore1,
  new WebSocket('ws://localhost:8047/petShop'),
);
await synchronizer1.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
// ...

// Client 2
const clientStore2 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
clientStore2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'felix', 'species', 'cat');
const synchronizer2 = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  clientStore2,
  new WebSocket('ws://localhost:8047/petShop'),
);
await synchronizer2.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
// ...

console.log(clientStore1.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

console.log(clientStore2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

await synchronizer1.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();
await synchronizer2.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();
await server.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();

```

This longer example creates a [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) that persists a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to file that is synchronized with two clients on a shared path. Later, when a third client connects, it picks up the data the previous two were using.

```
import {rmSync} from 'fs';
import {createMergeableStore} from 'tinybase';
import {createFilePersister} from 'tinybase/persisters/persister-file';
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';
import {createWsServer} from 'tinybase/synchronizers/synchronizer-ws-server';
import {WebSocket, WebSocketServer} from 'ws';

// Server
const server = createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)(
  new WebSocketServer({port: 8047}),
  (pathId) =>
    createFilePersister[](https://tinybase.org/api/persister-file/functions/creation/createfilepersister/)(
      createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)(),
      './tmp/' + pathId.replace(/[^a-zA-Z0-9]/g, '-') + '.json',
    ),
);

// Client 1
const clientStore1 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
clientStore1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
const synchronizer1 = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  clientStore1,
  new WebSocket('ws://localhost:8047/petShop'),
);
await synchronizer1.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
// ...

// Client 2
const clientStore2 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
clientStore2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'felix', 'species', 'cat');
const synchronizer2 = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  clientStore2,
  new WebSocket('ws://localhost:8047/petShop'),
);
await synchronizer2.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
// ...

console.log(clientStore1.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

console.log(clientStore2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

await synchronizer1.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();
await synchronizer2.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();

// ...
// Client 3 connects later
const clientStore3 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
const synchronizer3 = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  clientStore3,
  new WebSocket('ws://localhost:8047/petShop'),
);
await synchronizer3.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
// ...

console.log(clientStore3.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

await synchronizer3.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();
await server.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();

// Remove file for the purposes of this demo.
rmSync('./tmp/petShop.json');

```

This example creates a [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) that persists a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to file that is synchronized with two clients on a shared path, but also which updates its data once synchronization has started.

```
import {rmSync} from 'fs';
import {createMergeableStore} from 'tinybase';
import {createFilePersister} from 'tinybase/persisters/persister-file';
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';
import {createWsServer} from 'tinybase/synchronizers/synchronizer-ws-server';
import {WebSocket, WebSocketServer} from 'ws';

// Server
const server = createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)(
  new WebSocketServer({port: 8047}),
  (pathId) => [
    createFilePersister[](https://tinybase.org/api/persister-file/functions/creation/createfilepersister/)(
      createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)(),
      './tmp/' + pathId.replace(/[^a-zA-Z0-9]/g, '-') + '.json',
    ),
    (store) => store.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('pathId', pathId),
  ],
);

const clientStore = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
clientStore.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
const synchronizer = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  clientStore,
  new WebSocket('ws://localhost:8047/petShop'),
);
await synchronizer.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
// ...

console.log(clientStore.getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)());
// -> [{pets: {fido: {species: 'dog'}}}, {"pathId": "petShop"}]

await synchronizer.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();
await server.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();

// Remove file for the purposes of this demo.
rmSync('./tmp/petShop.json');

```

This example creates a [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) with a custom listener that displays information about the address of the client that connects to it.

```
import {createMergeableStore} from 'tinybase';
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';
import {createWsServer} from 'tinybase/synchronizers/synchronizer-ws-server';
import {WebSocket, WebSocketServer} from 'ws';

// On the server:
const webSocketServer = new WebSocketServer({port: 8047});
webSocketServer.on('connection', (_, request) => {
  if (request.headers.connection == 'Upgrade') {
    console.log('Local client connected');
  }
});
const server = createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)(webSocketServer);

// On a client:
const synchronizer = await createWsSynchronizer[](https://tinybase.org/api/synchronizer-ws-client/functions/creation/createwssynchronizer/)(
  createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)(),
  new WebSocket('ws://localhost:8047'),
);
// -> 'Local client connected'

await synchronizer.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();
await server.destroy[](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/methods/getter/destroy/)();

```

## Since
v5.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
