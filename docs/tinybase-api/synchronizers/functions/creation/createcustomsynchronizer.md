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
          * [`createCustomSynchronizer`](https://tinybase.org/api/synchronizers/functions/creation/createcustomsynchronizer/)
        * [Type Aliases](https://tinybase.org/api/synchronizers/type-aliases/)
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
  * [Functions](https://tinybase.org/api/synchronizers/functions/)
  * [`createCustomSynchronizer`](https://tinybase.org/api/synchronizers/functions/creation/createcustomsynchronizer/)


# `createCustomSynchronizer`
The `createCustomSynchronizer` function creates a [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) object that can persist one [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to another.

```
createCustomSynchronizer[](https://tinybase.org/api/synchronizers/functions/creation/createcustomsynchronizer/)(
  store: MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/),
  send: Send[](https://tinybase.org/api/synchronizers/type-aliases/synchronization/send/),
  registerReceive: (receive: Receive[](https://tinybase.org/api/synchronizers/type-aliases/synchronization/receive/)) => void,
  destroy: () => void,
  requestTimeoutSeconds: number,
  onSend?: Send[](https://tinybase.org/api/synchronizers/type-aliases/synchronization/send/),
  onReceive?: Receive[](https://tinybase.org/api/synchronizers/type-aliases/synchronization/receive/),
  onIgnoredError?: (error: any) => void,
): Synchronizer[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `store`  | `MergeableStore[](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/)`  | The [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to synchronize.  |  
| `send`  | `Send[](https://tinybase.org/api/synchronizers/type-aliases/synchronization/send/)`  | A [`Send`](https://tinybase.org/api/synchronizers/type-aliases/synchronization/send/) function for sending a message.  |  
| `registerReceive`  | `(receive: Receive[](https://tinybase.org/api/synchronizers/type-aliases/synchronization/receive/)) => void`  | A callback (called once when the [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) is created) that is passed a [`Receive`](https://tinybase.org/api/synchronizers/type-aliases/synchronization/receive/) function that you need to ensure will receive messages addressed or broadcast to this client.  |  
| `destroy`  | `() => void`  | A function called when destroying the [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) which can be used to clean up underlying resources.  |  
| `requestTimeoutSeconds`  | `number`  | An number of seconds before a request sent from this [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) to another peer times out.  |  
| `onSend?`  | `Send[](https://tinybase.org/api/synchronizers/type-aliases/synchronization/send/)`  | An optional handler for the messages that this [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) sends. This is suitable for debugging synchronization issues in a development environment, since v5.1.  |  
| `onReceive?`  | `Receive[](https://tinybase.org/api/synchronizers/type-aliases/synchronization/receive/)`  | An optional handler for the messages that this [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) receives. This is suitable for debugging synchronization issues in a development environment, since v5.1.  |  
| `onIgnoredError?`  | `(error: any) => void`  | An optional handler for the errors that the [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) would otherwise ignore when trying to synchronize data. This is suitable for debugging synchronization issues in a development environment.  |  
| returns  | `Synchronizer[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/)`  | A reference to the new [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) object.  |  
As well as providing a reference to the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) to synchronize, you must provide parameters which identify how to send and receive changes to and from this [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) and its peers. This is entirely dependent upon the medium of communication used.
You must also provide a callback for when the [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) is destroyed (which is a good place to clean up resources and stop communication listeners), and indicate how long the [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) will wait for responses to message requests before timing out.
A final set of optional handlers can be provided to help debug sends, receives, and errors respectively.
## Example
This example creates a function for creating custom [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) objects via a very naive pair of message buses (which are first-in, first-out). Each [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) can write to the other's bus, and they each poll to read from their own. The example then uses these [`Synchronizer`](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/) instances to sync two [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) objects together

```
import {createMergeableStore, getUniqueId} from 'tinybase';
import {createCustomSynchronizer} from 'tinybase/synchronizers';

const bus1 = [];
const bus2 = [];

const createBusSynchronizer = (store, localBus, remoteBus) => {
  let timer;
  const clientId = getUniqueId[](https://tinybase.org/api/common/functions/convenience/getuniqueid/)();
  return createCustomSynchronizer[](https://tinybase.org/api/synchronizers/functions/creation/createcustomsynchronizer/)(
    store,
    (toClientId, requestId, message, body) => {
      // send
      remoteBus.push([clientId, requestId, message, body]);
    },
    (receive) => {
      // registerReceive
      timer = setInterval(() => {
        if (localBus.length > 0) {
          receive(...localBus.shift());
        }
      }, 1);
    },
    () => clearInterval(timer), // destroy
    1,
  );
};

const store1 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();
const store2 = createMergeableStore[](https://tinybase.org/api/mergeable-store/functions/creation/createmergeablestore/)();

const synchronizer1 = createBusSynchronizer(store1, bus1, bus2);
const synchronizer2 = createBusSynchronizer(store2, bus2, bus1);

await synchronizer1.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();
await synchronizer2.startSync[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/synchronization/startsync/)();

store1.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
store2.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {felix: {species: 'cat'}}});

// ...
console.log(store1.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}
console.log(store2.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}, felix: {species: 'cat'}}}

await synchronizer1.destroy[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/lifecycle/destroy/)();
await synchronizer2.destroy[](https://tinybase.org/api/synchronizers/interfaces/synchronizer/synchronizer/methods/lifecycle/destroy/)();

```

## Since
v5.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
