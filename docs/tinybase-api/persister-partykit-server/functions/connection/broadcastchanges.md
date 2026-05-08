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
        * [Classes](https://tinybase.org/api/persister-partykit-server/classes/)
        * [Functions](https://tinybase.org/api/persister-partykit-server/functions/)
          * [Connection functions](https://tinybase.org/api/persister-partykit-server/functions/connection/)
            * [`broadcastChanges`](https://tinybase.org/api/persister-partykit-server/functions/connection/broadcastchanges/)
          * [Storage functions](https://tinybase.org/api/persister-partykit-server/functions/storage/)
        * [Type Aliases](https://tinybase.org/api/persister-partykit-server/type-aliases/)
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
  * [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/)
  * [Functions](https://tinybase.org/api/persister-partykit-server/functions/)
  * [Connection functions](https://tinybase.org/api/persister-partykit-server/functions/connection/)
  * [`broadcastChanges`](https://tinybase.org/api/persister-partykit-server/functions/connection/broadcastchanges/)


# `broadcastChanges`
The `broadcastChanges` function allows you to broadcast [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) changes to all the client connections of a [`TinyBasePartyKitServer`](https://tinybase.org/api/persister-partykit-server/classes/server/tinybasepartykitserver/).

```
broadcastChanges[](https://tinybase.org/api/persister-partykit-server/functions/connection/broadcastchanges/)(
  server: TinyBasePartyKitServer,
  changes: Changes[](https://tinybase.org/api/store/type-aliases/transaction/changes/),
  without?: string[],
): Promise<void>
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `server`  | `TinyBasePartyKitServer`  | A reference to the [`TinyBasePartyKitServer`](https://tinybase.org/api/persister-partykit-server/classes/server/tinybasepartykitserver/) object.  |  
| `changes`  | `Changes[](https://tinybase.org/api/store/type-aliases/transaction/changes/)`  | The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) changes to broadcast to the server's clients.  |  
| `without?`  | `string[]`  | An optional array of client connection [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) to exclude from the broadcast.  |  
| returns  | `Promise<void>`  |   |  
This is intended for specialist applications that require the ability to update clients of a [`TinyBasePartyKitServer`](https://tinybase.org/api/persister-partykit-server/classes/server/tinybasepartykitserver/) in their own custom ways.
The function is asynchronous, so you should use the `await` keyword or handle its completion as a promise.
## Since
v4.5.1
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
