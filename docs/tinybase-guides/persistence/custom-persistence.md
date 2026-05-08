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
        * [An Intro To Persistence](https://tinybase.org/guides/persistence/an-intro-to-persistence/)
        * [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/)
        * [Third-Party CRDT Persistence](https://tinybase.org/guides/persistence/third-party-crdt-persistence/)
        * [Custom Persistence](https://tinybase.org/guides/persistence/custom-persistence/)
      * [Synchronization](https://tinybase.org/guides/synchronization/)
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
  * [Persistence](https://tinybase.org/guides/persistence/)
  * [Custom Persistence](https://tinybase.org/guides/persistence/custom-persistence/)


# Custom Persistence
When you want to load and save [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data in unusual or custom ways, you can used the [`createCustomPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompersister/) function to do so in any way you wish.
As well as providing a reference to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to persist, you must provide functions that handle how to fetch, write, and listen to, the persistence layer.
##  [Functions](https://tinybase.org/api/store/functions/) To Implement
To build a custom [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/), you should provide four functions:
  * `getPersisted`, an asynchronous function which will fetch content from the persistence layer (or `null` or `undefined` if not present).
  * `setPersisted`, an asynchronous function which will send content to the persistence layer.
  * `addPersisterListener`, a function that will register a `listener` listener on underlying changes to the persistence layer. You can return a listening handle that will be provided again when `delPersisterListener` is called.
  * `delPersisterListener`, a function that will unregister the listener from the underlying changes to the persistence layer. It receives whatever was returned from your `addPersisterListener` implementation. @returns A reference to the new [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) object.


Note that the first two functions are asynchronous and _must_ return promises. The latter two are synchronous and should return `void` (i.e. should not return a value at all).
This [API](https://tinybase.org/api/) changed in v4.0. Any custom persisters created on previous versions should be upgraded. Most notably, the `setPersisted` function parameter is provided with a `getContent` function to get the content from the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) itself, rather than being passed pre-serialized JSON. It also receives information about the changes made during a transaction. The `getPersisted` function must return the content (or nothing) rather than JSON. `startListeningToPersisted` has been renamed `addPersisterListener`, and `stopListeningToPersisted` has been renamed `delPersisterListener`.
This example creates a custom [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) object that persists the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to a local string called `storeJson` and which would automatically load by polling for changes every second:

```
import {createStore} from 'tinybase';
import {createCustomPersister} from 'tinybase/persisters';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
let storeJson;
let interval;

const persister = createCustomPersister[](https://tinybase.org/api/persisters/functions/creation/createcustompersister/)(
  store,
  async () => {
    try {
      return JSON.parse(storeJson);
    } catch {}
  },
  async (getContent) => (storeJson = JSON.stringify(getContent[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcontent/)())),
  (listener) => (interval = setInterval(listener, 1000)),
  () => clearInterval(interval),
);

await persister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
console.log(storeJson);
// -> '[{"pets":{"fido":{"species":"dog"}}},{}]'

storeJson = '[{"pets":{"fido":{"species":"dog","color":"brown"}}},{}]';
await persister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();

console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'brown'}}}

await persister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

Note that the other creation functions (such as the [`createSessionPersister`](https://tinybase.org/api/the-essentials/persisting-stores/createsessionpersister/) function and [`createFilePersister`](https://tinybase.org/api/persister-file/functions/creation/createfilepersister/) function, for example) all use this function under the covers. See those implementations for ideas on how to implement your own [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) types.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
