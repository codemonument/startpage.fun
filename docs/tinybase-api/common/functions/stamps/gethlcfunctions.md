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
          * [Hash functions](https://tinybase.org/api/common/functions/hash/)
          * [Stamps functions](https://tinybase.org/api/common/functions/stamps/)
            * [`getHlcFunctions`](https://tinybase.org/api/common/functions/stamps/gethlcfunctions/)
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
  * [Stamps functions](https://tinybase.org/api/common/functions/stamps/)
  * [`getHlcFunctions`](https://tinybase.org/api/common/functions/stamps/gethlcfunctions/)


# `getHlcFunctions`
The `getHlcFunctions` function returns a set of utility functions for working with the TinyBase Hybrid Logical Clock (HLC).

```
getHlcFunctions[](https://tinybase.org/api/common/functions/stamps/gethlcfunctions/)(
  uniqueId?: string,
  getNow?: GetNow[](https://tinybase.org/api/common/type-aliases/stamps/getnow/),
): [getNextHlc: () => Hlc[](https://tinybase.org/api/common/type-aliases/stamps/hlc/), seenHlc: (remoteHlc: Hlc[](https://tinybase.org/api/common/type-aliases/stamps/hlc/)) => void, encodeHlc: (logicalTime: number, counter: number, clientId?: Id[](https://tinybase.org/api/common/type-aliases/identity/id/)) => Hlc[](https://tinybase.org/api/common/type-aliases/stamps/hlc/), decodeHlc: (hlc: Hlc[](https://tinybase.org/api/common/type-aliases/stamps/hlc/)) => [logicalTime: number, counter: number, clientId: Id[](https://tinybase.org/api/common/type-aliases/identity/id/)], getLastLogicalTime: () => number, getLastCounter: () => number, getClientId: () => Id[](https://tinybase.org/api/common/type-aliases/identity/id/)]
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `uniqueId?`  | `string`  | An optional unique [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) for the client.  |  
| `getNow?`  | `GetNow[](https://tinybase.org/api/common/type-aliases/stamps/getnow/)`  | An optional function that generates millisecond timestamps, defaulting to `Date.now`.  |  
| returns  | `[getNextHlc: () => Hlc[](https://tinybase.org/api/common/type-aliases/stamps/hlc/), seenHlc: (remoteHlc: Hlc[](https://tinybase.org/api/common/type-aliases/stamps/hlc/)) => void, encodeHlc: (logicalTime: number, counter: number, clientId?: Id[](https://tinybase.org/api/common/type-aliases/identity/id/)) => Hlc[](https://tinybase.org/api/common/type-aliases/stamps/hlc/), decodeHlc: (hlc: Hlc[](https://tinybase.org/api/common/type-aliases/stamps/hlc/)) => [logicalTime: number, counter: number, clientId: Id[](https://tinybase.org/api/common/type-aliases/identity/id/)], getLastLogicalTime: () => number, getLastCounter: () => number, getClientId: () => Id[](https://tinybase.org/api/common/type-aliases/identity/id/)]`  | An array of seven stateful functions as described above.  |  
An HLC is a sortable 16 character string that encodes a timestamp, a counter, and the hash of a unique client identifier. You should provide that unique client identifier as the `uniqueId` parameter to the function. Otherwise it will be defaulted and the client suffix of the HLCs the `getNextHlc` function generates will be non-deterministic.
You can also provide a `getNow` function that returns the current time in milliseconds, which is useful for testing purposes where fully deterministic HLCs are required, rather than the current time.
The stateful functions returned by this function are as follows.
  * `getNextHlc`: a function that returns the next HLC for this client based on the time and any other HLC values from other clients that have been seen.
  * `seenHlc`: a function that takes an HLC and updates the internal state of the functions to ensure that the next HLC returned by `getNextHlc` is greater than the given seen HLC.
  * `encodeHlc`: a function that takes a timestamp, a counter (and optionally a different `clientId`) and encodes the them into an HLC string.
  * `decodeHlc`: a function that takes an HLC and returns an array containing the logical time, counter, and client [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) parts.
  * `getLastLogicalTime`: a function that returns the last logical time either generated or seen by this client.
  * `getLastCounter`: a function that returns the last counter either generated or seen by this client.
  * `getClientId`: a function that returns the client [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) for this client; either uniquely generated or derived from the `uniqueId` parameter.


## Example
This example gets the HLC functions (for a given client [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) and a fixed time; both for illustrative purposes), and then uses them:

```
import {getHlcFunctions} from 'tinybase';

const [
  getNextHlc,
  seenHlc,
  encodeHlc,
  decodeHlc,
  getLastLogicalTime,
  getLastCounter,
  getClientId,
] = getHlcFunctions[](https://tinybase.org/api/common/functions/stamps/gethlcfunctions/)('client1', () => 73267200000); // This client is in 1972.

// Generate an HLC based on the fixed time and the client Id.
console.log(getNextHlc());
// -> '03E3B------mmxrx'

// Generate the next HLC. The time has not changed, so the counter does.
console.log(getNextHlc());
// -> '03E3B-----0mmxrx'

// Another client thinks it is 1973.
seenHlc('0WakTk-----jmx_3');
// Generate the next HLC.

// What is the state for the current client?
console.log(getLastLogicalTime());
// -> 104803200000
console.log(getLastCounter());
// -> 0
console.log(getClientId());
// -> 'mmxrx'

// Encode an arbitrary HLC.
console.log(encodeHlc(73267203600, 7, 'client3'));
// -> '03E3BsF---6kmxfM'

// Decode it again.
console.log(decodeHlc('03E3BsF---6kmxfM'));
// -> [73267203600, 7, 'kmxfM']

```

## Since
v6.2.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
