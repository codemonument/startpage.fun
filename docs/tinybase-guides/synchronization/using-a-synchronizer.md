[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
  1. No results found


  * [Guides](https://tinybase.org/guides/)
  * [Demos](https://tinybase.org/demos/)
  * [API](https://tinybase.org/api/)
  * [GitHub](https://github.com/tinyplex/tinybase)


  * [TinyBase](https://tinybase.org/)
    * [Guides](https://tinybase.org/guides/)
      * [The Basics](https://tinybase.org/guides/the-basics/)
      * [Building UIs With React](https://tinybase.org/guides/building-uis-with-react/)
      * [Building UIs With Svelte](https://tinybase.org/guides/building-uis-with-svelte/)
      * [Schemas](https://tinybase.org/guides/schemas/)
      * [Using Middleware](https://tinybase.org/guides/using-middleware/)
      * [Persistence](https://tinybase.org/guides/persistence/)
      * [Synchronization](https://tinybase.org/guides/synchronization/)
        * [Using A MergeableStore](https://tinybase.org/guides/synchronization/using-a-mergeablestore/)
        * [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/)
      * [Integrations](https://tinybase.org/guides/integrations/)
      * [Using Metrics](https://tinybase.org/guides/using-metrics/)
      * [Using Indexes](https://tinybase.org/guides/using-indexes/)
      * [Using Relationships](https://tinybase.org/guides/using-relationships/)
      * [Using Checkpoints](https://tinybase.org/guides/using-checkpoints/)
      * [Using Queries](https://tinybase.org/guides/using-queries/)
      * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)
      * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [Synchronization](https://tinybase.org/guides/synchronization/)
  * [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/)


# Using A Synchronizer
The synchronizer module framework lets you synchronize [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data between different devices, systems, or subsystems.
It contains the [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) interface, describing objects which can be used to synchronize a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/).
Under the covers, a [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) is actually a very specialized type of [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) that _only_ supports [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects, and which has a [`startSync`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/) method and a [`stopSync`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/stopsync/) method.
## Types Of [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/)
In TinyBase v5.0, there are three types of [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/):
  * The [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) uses WebSockets to communicate between different systems.
  * The [`BroadcastChannelSynchronizer`](https://tinybase.org/api/synchronizer-broadcast-channel/interfaces/synchronizer/broadcastchannelsynchronizer/) uses the browser's BroadcastChannel [API](https://tinybase.org/api/) to communicate between different tabs and workers.
  * The [`LocalSynchronizer`](https://tinybase.org/api/synchronizer-local/interfaces/synchronizer/localsynchronizer/) demonstrates synchronization in memory on a single local system.


Of course it is also possible to create custom [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) objects if you have a transmission medium that allows the synchronization messages to be sent reliably between clients.
## Synchronizing With WebSockets
A common pattern for synchronizing over the web is to use WebSockets. This allows multiple clients to pass lightweight messages to each other, facilitating efficient synchronization.
One thing to understand is that this set up will typically require a server. This can be a relatively 'thin server' - it does not need to store data of its own - but is needed to keep a list of clients that are being synchronized together, and route and broadcast messages between the clients.
TinyBase includes some implementations of WebSocket servers:
  * [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/), created with the [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/) function in the [`synchronizer-ws-server`](https://tinybase.org/api/synchronizer-ws-server/) module. This includes the option to persist data in the server.
  * [`WsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/), created with the [`createWsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/functions/creation/createwsserversimple/) function in the [`synchronizer-ws-server-simple`](https://tinybase.org/api/synchronizer-ws-server-simple/) module. This does not have the complications of listeners, persistence, or statistics, and is suitable to be used as a reference implementation
  * [`WsServerDurableObject`](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/), implemented as Cloudflare Durable Object, created by extending the [`WsServerDurableObject`](https://tinybase.org/api/the-essentials/synchronizing-stores/wsserverdurableobject/) class, and routed with the convenient [`getWsServerDurableObjectFetch`](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/creation/getwsserverdurableobjectfetch/) function.


Here we'll use the regular [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/). You simply need to create it, instantiated with a configured WebSocketServer object from the `ws` package:

```
// On a server machine:
import {createWsServer} from 'tinybase/synchronizers/synchronizer-ws-server';
import {WebSocketServer} from 'ws';

const server = createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)(new WebSocketServer({port: 8048}));

```

This sets up a [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) object, listening on port 8048.
Each client then needs to create a [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) object, instantiated with the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) being synchronized, and a WebSocket configured to connect to the aforementioned server:

```
// On the first client machine:
import {createMergeableStore} from 'tinybase';
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';
import {WebSocket} from 'ws';

const clientStore1 = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
const clientSynchronizer1 = await createWsSynchronizer[](https://tinybase.org/api/the-essentials/synchronizing-stores/createwssynchronizer/)(
  clientStore1,
  new WebSocket('ws://localhost:8048'),
);

```

This [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) can then be started, and data manipulated as normal:

```
await clientSynchronizer1.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
clientStore1.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
// ...

```

Meanwhile, on another client, an empty [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) and another [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) can be created and started, connecting to the same server.

```
// On the second client machine:
const clientStore2 = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
const clientSynchronizer2 = await createWsSynchronizer[](https://tinybase.org/api/the-essentials/synchronizing-stores/createwssynchronizer/)(
  clientStore2,
  new WebSocket('ws://localhost:8048'),
);
await clientSynchronizer2.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();

```

Once the synchronization is started, the server will broker the messages being passed back and forward between the two clients, and the data will be synchronized. The empty second [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) will be populated with the data from the first:

```
// ...
console.log(clientStore2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}}}

```

And of course the synchronization is bi-directional:

```
clientStore2.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'felix', 'species', 'cat');
console.log(clientStore2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

```

```
// ...
console.log(clientStore1.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

```

When done, it's important to destroy a [`WsSynchronizer`](https://tinybase.org/api/synchronizer-ws-client/interfaces/synchronizer/wssynchronizer/) to close and tidy up the client WebSockets:

```
await clientSynchronizer1.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

```
await clientSynchronizer2.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

And, if shut down, the [`WsServer`](https://tinybase.org/api/synchronizer-ws-server/interfaces/server/wsserver/) should also be explicitly destroyed to close its listeners:

```
await server.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

###  [Persisting Data](https://tinybase.org/guides/schemas-and-persistence/persisting-data/) On The Server
New in TinyBase v5.1, the [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/) function lets you specify a way to persist data to the server. This makes it possible for all clients to disconnect from a path, but, when they reconnect, for the data to still be present for them to sync with.
This is done by passing in a second argument to the function that creates a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) instance (for which also need to create or provide a [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)) for a given path:

```
import {createFilePersister} from 'tinybase/persisters/persister-file';

const persistingServer = createWsServer[](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/)(
  new WebSocketServer({port: 8050}),
  (pathId) =>
    createFilePersister[](https://tinybase.org/api/persister-file/functions/creation/createfilepersister/)(
      createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)(),
      pathId.replace(/[^a-zA-Z0-9]/g, '-') + '.json',
    ),
);

await persistingServer.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

This is a very crude example, but demonstrates a server that will create a file, based on any path that clients connect to, and persist data to it. In production, you will certainly want to sanitize the file name! And more likely you will want to explore using a database-oriented [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) instead of simply using raw files.
See the [`createWsServer`](https://tinybase.org/api/synchronizer-ws-server/functions/creation/createwsserver/) function documentation for more details.
Also note that there is a [`synchronizer-ws-server-simple`](https://tinybase.org/api/synchronizer-ws-server-simple/) module that contains a simple server implementation called [`WsServerSimple`](https://tinybase.org/api/synchronizer-ws-server-simple/interfaces/server/wsserversimple/). Without the complications of listeners, persistence, or statistics, this is more suitable to be used as a reference implementation for other server environments.
## Synchronizing Over The Browser BroadcastChannel
There may be situations where you need to synchronize data between different parts of a browser. For example, you might have a transient in-memory [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) driving your UI, but then another instance in a Service Worker that can be persisted to (say) IndexedDB or another medium.
To facilitate keeping these in sync, the [`BroadcastChannelSynchronizer`](https://tinybase.org/api/synchronizer-broadcast-channel/interfaces/synchronizer/broadcastchannelsynchronizer/) lets you synchronize over the browser's BroadcastChannel [API](https://tinybase.org/api/), common to each browser sub-system. You simply need to provide a distinguishing channel name that can be used to identify what the two parts should be using to send and receive messages.
For example, in the UI part of your app:

```
import {createBroadcastChannelSynchronizer} from 'tinybase/synchronizers/synchronizer-broadcast-channel';

const frontStore = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
const frontSynchronizer = createBroadcastChannelSynchronizer[](https://tinybase.org/api/synchronizer-broadcast-channel/functions/creation/createbroadcastchannelsynchronizer/)(
  frontStore,
  'syncChannel',
);
await frontSynchronizer.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();

```

And then in the service worker:

```
const backStore = createMergeableStore[](https://tinybase.org/api/the-essentials/creating-stores/createmergeablestore/)();
const backSynchronizer = createBroadcastChannelSynchronizer[](https://tinybase.org/api/synchronizer-broadcast-channel/functions/creation/createbroadcastchannelsynchronizer/)(
  backStore,
  'syncChannel',
);
await backSynchronizer.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();

```

Since they both share the `syncChannel` channel name, the data of the two is now synchronized:

```
frontStore.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');

```

```
// ...
console.log(backStore.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}}}

```

And so on!
When finished, these synchronizers should also be explicitly destroyed to ensure the channel listeners are cleaned up:

```
await frontSynchronizer.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

```
await backSynchronizer.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

## Wrapping Up
The [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) interface provides an easy way to keep multiple TinyBase MergeableStores in sync. The WebSocket and BroadcastChannel options above allow for numerous interesting and powerful app architectures - and they are not sufficient, consider exploring the [`createCustomSynchronizer`](https://tinybase.org/api/synchronizers/functions/creation/createcustomsynchronizer/) function to develop your own!
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
