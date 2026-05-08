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
      * [`ui-react`](https://tinybase.org/api/ui-react/)
      * [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/)
      * [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/)
      * [`ui-svelte`](https://tinybase.org/api/ui-svelte/)
      * [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/)
      * [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/)
      * [`middleware`](https://tinybase.org/api/middleware/)
        * [Interfaces](https://tinybase.org/api/middleware/interfaces/)
        * [Functions](https://tinybase.org/api/middleware/functions/)
          * [`createMiddleware`](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)
        * [Type Aliases](https://tinybase.org/api/middleware/type-aliases/)
      * [`schematizer-arktype`](https://tinybase.org/api/schematizer-arktype/)
      * [`schematizer-effect`](https://tinybase.org/api/schematizer-effect/)
      * [`schematizer-typebox`](https://tinybase.org/api/schematizer-typebox/)
      * [`schematizer-valibot`](https://tinybase.org/api/schematizer-valibot/)
      * [`schematizer-yup`](https://tinybase.org/api/schematizer-yup/)
      * [`schematizer-zod`](https://tinybase.org/api/schematizer-zod/)
      * [`schematizers`](https://tinybase.org/api/schematizers/)


  * [TinyBase](https://tinybase.org/)
  * [API](https://tinybase.org/api/)
  * [`middleware`](https://tinybase.org/api/middleware/)
  * [Functions](https://tinybase.org/api/middleware/functions/)
  * [`createMiddleware`](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)


# `createMiddleware`
The `createMiddleware` function creates a [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object, and is the main entry point into the [`middleware`](https://tinybase.org/api/middleware/) module.

```
createMiddleware[](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)(store: Store[](https://tinybase.org/api/the-essentials/creating-stores/store/)): Middleware[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `Store[](https://tinybase.org/api/the-essentials/creating-stores/store/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) for which to register the [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/).  |  
| returns  | `Middleware[](https://tinybase.org/api/middleware/interfaces/middleware/middleware/)`  | A reference to the new [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object.  |  
A given [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can only have one [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object associated with it. If you call this function twice on the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), your second call will return a reference to the [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object created by the first.
## Examples
This example creates a [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object.

```
import {createMiddleware, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)();
const middleware = createMiddleware[](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)(store);
console.log(middleware.getStore[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/getter/getstore/)() == store);
// -> true
middleware.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

This example creates a [`Middleware`](https://tinybase.org/api/middleware/interfaces/middleware/middleware/) object, and calls the method a second time for the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to return the same object.

```
import {createMiddleware, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/store/functions/creation/createstore/)();
const middleware = createMiddleware[](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)(store);
console.log(middleware === createMiddleware[](https://tinybase.org/api/middleware/functions/creation/createmiddleware/)(store));
// -> true
middleware.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

## Since
v8.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
