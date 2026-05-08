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
        * [Type Aliases](https://tinybase.org/api/persister-partykit-client/type-aliases/)
          * [`PartyKitPersisterConfig`](https://tinybase.org/api/persister-partykit-client/type-aliases/configuration/partykitpersisterconfig/)
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
  * [Type Aliases](https://tinybase.org/api/persister-partykit-client/type-aliases/)
  * [`PartyKitPersisterConfig`](https://tinybase.org/api/persister-partykit-client/type-aliases/configuration/partykitpersisterconfig/)


# `PartyKitPersisterConfig`
The `PartyKitPersisterConfig` type describes the configuration of a PartyKit [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) on the client side.

```
{
  storeProtocol?: "http" | "https";
  storePath?: string;
  messagePrefix?: string;
}
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `storeProtocol?`  | `"http" | "https"`  | The HTTP protocol to use (in addition to the websocket channel). This defaults to 'https' but you may wish to use 'http' for local PartyKit development.  |  
| `storePath?`  | `string`  | The path used to set and get the whole [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) over HTTP(S) on the server. This must match the storePath property of the [`TinyBasePartyKitServerConfig`](https://tinybase.org/api/persister-partykit-server/type-aliases/configuration/tinybasepartykitserverconfig/) object used on the server. Both default to '/store'.  |  
| `messagePrefix?`  | `string`  | The prefix at the beginning of the web socket messages sent between the client and the server when synchronizing the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Use this to make sure they do not collide with any other message syntax that your room is using. This must match the messagePrefix property of the [`TinyBasePartyKitServerConfig`](https://tinybase.org/api/persister-partykit-server/type-aliases/configuration/tinybasepartykitserverconfig/) object used on the server. Both default to an empty string.  |  
The defaults (if used on both the server and client) will work fine, but if you are building more complex PartyKit apps and you need to configure path names, for example, then this is the thing to use.
## Example
When applied to a PartyKit [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/), this `PartyKitPersisterConfig` will load and save a JSON serialization from and to an end point in your room called `/my_tinybase`, and use HTTP (rather than the default HTTPS) as the protocol.
Note that this would require you to also add the matching storePath setting to the [`TinyBasePartyKitServerConfig`](https://tinybase.org/api/persister-partykit-server/type-aliases/configuration/tinybasepartykitserverconfig/) on the server side.

```
export const partyKitPersisterConfig = {
  storeProtocol: 'http',
  storePath: '/my_tinybase',
};

```

## Since
v4.3.9
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
