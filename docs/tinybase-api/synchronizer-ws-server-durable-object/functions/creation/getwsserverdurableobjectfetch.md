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
        * [Classes](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/)
        * [Functions](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/)
          * [`getWsServerDurableObjectFetch`](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/creation/getwsserverdurableobjectfetch/)
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
  * [`synchronizer-ws-server-durable-object`](https://tinybase.org/api/synchronizer-ws-server-durable-object/)
  * [Functions](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/)
  * [`getWsServerDurableObjectFetch`](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/creation/getwsserverdurableobjectfetch/)


# `getWsServerDurableObjectFetch`
The `getWsServerDurableObjectFetch` function returns a convenient handler for a Cloudflare worker to route requests to the fetch handler of a [`WsServerDurableObject`](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/) for the given namespace.

```
getWsServerDurableObjectFetch[](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/creation/getwsserverdurableobjectfetch/)<Namespace>(namespace: Namespace): (request: Request, env: {[namespace in Namespace]: DurableObjectNamespace<WsServerDurableObject>}) => Response
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `namespace`  | `Namespace`  | A string for the namespace of the Durable Objects that you want this worker to route requests to.  |  
| returns  | `(request: Request, env: {[namespace in Namespace]: DurableObjectNamespace<WsServerDurableObject>}) => Response`  | A fetch handler that routes WebSocket upgrade requests to a Durable Object.  |  
The implementation of the function that this returns requires the request to be a WebSocket 'Upgrade' request, and for the client to have provided a `sec-websocket-key` header that the server can use as a unique key for the client.
It then takes the path of the HTTP request and routes the upgrade request to a Durable Object (in the given namespace) for that path. From then on, the Durable Object handles all the WebSocket communication.
Note that you'll need to have a Wrangler configuration that connects your Durable Object class to the namespace. In other words, you'll have something like this in your `wrangler.toml` file.

```
[[durable_objects.bindings]]
name = "MyDurableObjects"
class_name = "MyDurableObject"

```

Note that it is not required to use this handler to route TinyBase client requests in your Cloudflare app. If you have your own custom routing logic, path scheme, or authentication, for example, you can easily implement that in the worker's fetch method yourself. See the [Durable Objects documentation](https://developers.cloudflare.com/durable-objects/best-practices/create-durable-object-stubs-and-send-requests/#invoking-the-fetch-handler) for examples.
You can also pass a newly created request to the Durable Object's `fetch` method. For example, you can overwrite the 'path' that the Durable Object thinks it is serving, perhaps to inject a unique authenticated user [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) that wasn't actually provided by the client WebSocket.
## Example
This example sets up default routing of the WebSocket upgrade request to a Durable Object in the `MyDurableObjects` namespace. This would require the `wrangler.toml` configuration shown above.

```
import {
  WsServerDurableObject,
  getWsServerDurableObjectFetch,
} from 'tinybase/synchronizers/synchronizer-ws-server-durable-object';

export class MyDurableObject extends WsServerDurableObject[](https://tinybase.org/api/synchronizer-ws-server-durable-object/classes/creation/wsserverdurableobject/) {}

export default {fetch: getWsServerDurableObjectFetch[](https://tinybase.org/api/synchronizer-ws-server-durable-object/functions/creation/getwsserverdurableobjectfetch/)('MyDurableObjects')};

```

## Since
v5.4.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
