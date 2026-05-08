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
        * [Interfaces](https://tinybase.org/api/synchronizers/interfaces/)
        * [Enumerations](https://tinybase.org/api/synchronizers/enumerations/)
        * [Functions](https://tinybase.org/api/synchronizers/functions/)
        * [Type Aliases](https://tinybase.org/api/synchronizers/type-aliases/)
          * [Synchronization type aliases](https://tinybase.org/api/synchronizers/type-aliases/synchronization/)
            * [`Receive`](https://tinybase.org/api/synchronizers/type-aliases/synchronization/receive/)
            * [`Send`](https://tinybase.org/api/synchronizers/type-aliases/synchronization/send/)
          * [Development type aliases](https://tinybase.org/api/synchronizers/type-aliases/development/)
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
  * [`synchronizers`](https://tinybase.org/api/synchronizers/)
  * [Type Aliases](https://tinybase.org/api/synchronizers/type-aliases/)
  * [Synchronization type aliases](https://tinybase.org/api/synchronizers/type-aliases/synchronization/)
  * [`Receive`](https://tinybase.org/api/synchronizers/type-aliases/synchronization/receive/)


# `Receive`
The `Receive` type describes a function that knows how to handle the arrival of a message as part of the synchronization protocol.

```
(
  fromClientId: Id[](https://tinybase.org/api/common/type-aliases/identity/id/),
  requestId: IdOrNull[](https://tinybase.org/api/common/type-aliases/identity/idornull/),
  message: Message[](https://tinybase.org/api/synchronizers/enumerations/synchronization/message/),
  body: any,
): void
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `fromClientId`  | `Id[](https://tinybase.org/api/common/type-aliases/identity/id/)`  | The [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) of the other client (in other words, the other system) that sent the message.  |  
| `requestId`  | `IdOrNull[](https://tinybase.org/api/common/type-aliases/identity/idornull/)`  | The optional [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) of the message, which should be returned in the response (if requested) to constitute a matched request/response transaction.  |  
| `message`  | `Message[](https://tinybase.org/api/synchronizers/enumerations/synchronization/message/)`  | A number that indicates the type of the message, according to the [`Message`](https://tinybase.org/api/synchronizers/enumerations/synchronization/message/) enum.  |  
| `body`  | `any`  | A message-specific payload.  |  
| returns  | `void`  | This has no return value.  |  
When a message arrives (most likely from another system), the function will be called with parameters that indicate where the message came from, and its meaning and content.
## Since
v5.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
