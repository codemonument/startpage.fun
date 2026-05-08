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
        * [Functions](https://tinybase.org/api/common/functions/)
          * [Convenience functions](https://tinybase.org/api/common/functions/convenience/)
            * [`defaultSorter`](https://tinybase.org/api/common/functions/convenience/defaultsorter/)
            * [`getUniqueId`](https://tinybase.org/api/common/functions/convenience/getuniqueid/)
          * [Hash functions](https://tinybase.org/api/common/functions/hash/)
          * [Stamps functions](https://tinybase.org/api/common/functions/stamps/)
        * [Type Aliases](https://tinybase.org/api/common/type-aliases/)
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
      * [`schematizer-arktype`](https://tinybase.org/api/schematizer-arktype/)
      * [`schematizer-effect`](https://tinybase.org/api/schematizer-effect/)
      * [`schematizer-typebox`](https://tinybase.org/api/schematizer-typebox/)
      * [`schematizer-valibot`](https://tinybase.org/api/schematizer-valibot/)
      * [`schematizer-yup`](https://tinybase.org/api/schematizer-yup/)
      * [`schematizer-zod`](https://tinybase.org/api/schematizer-zod/)
      * [`schematizers`](https://tinybase.org/api/schematizers/)


  * [TinyBase](https://tinybase.org/)
  * [API](https://tinybase.org/api/)
  * [`common`](https://tinybase.org/api/common/)
  * [Functions](https://tinybase.org/api/common/functions/)
  * [Convenience functions](https://tinybase.org/api/common/functions/convenience/)
  * [`getUniqueId`](https://tinybase.org/api/common/functions/convenience/getuniqueid/)


# `getUniqueId`
The `getUniqueId` function returns a unique string of a given length.

```
getUniqueId[](https://tinybase.org/api/common/functions/convenience/getuniqueid/)(length?: number): Id[](https://tinybase.org/api/common/type-aliases/identity/id/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `length?`  | `number`  | The desired length of the unique [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/), defaulting to 16.  |  
| returns  | `Id[](https://tinybase.org/api/common/type-aliases/identity/id/)`  | A unique [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) of the required length.  |  
This is used internally by TinyBase for the synchronizer protocol and for unique [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) identifiers. But it is useful enough for it to be publicly exposed for purposes such as identifying shared collaboration rooms, or creating other [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) that need to be unique.
The string may contain numbers, lower or upper case letters, or the '-' or '_' characters. This makes them URL-safe, and means they can be identified with a regex like `/[-_0-9A-Za-z]+/`.
This function prefers to use the `crypto` module to generate random numbers, but where that is not available (such as in React Native), a `Math.random` implementation is used. Whilst that may not be cryptographically sound, it should suffice for most TinyBase-related purposes.
## Example
This example creates two 8 character long [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) and compares them.

```
import {getUniqueId} from 'tinybase';

const id1 = getUniqueId[](https://tinybase.org/api/common/functions/convenience/getuniqueid/)(8);
const id2 = getUniqueId[](https://tinybase.org/api/common/functions/convenience/getuniqueid/)(8);

console.log(id1.length);
// -> 8
console.log(id2.length);
// -> 8
console.log(id1 == id2);
// -> false

```

## Since
v5.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
