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
        * [Functions](https://tinybase.org/api/ui-svelte/functions/)
        * [Type Aliases](https://tinybase.org/api/ui-svelte/type-aliases/)
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
  * [`ui-svelte`](https://tinybase.org/api/ui-svelte/)


# `ui-svelte`
The `ui-svelte` module of the TinyBase project provides reactive functions, listener functions, and components to make it easy to create reactive Svelte 5 apps with [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects.
The reactive functions in this module provide access to the data and structures exposed by other modules in the project. They return reactive objects with a `current` property. Those functions register listeners such that components using them re-render when data changes.
The components in this module provide a further abstraction over those reactive functions, and use Svelte snippet props to customize rendering in an idiomatic way.
[Functions](https://tinybase.org/api/ui-svelte/functions/) like the [`getStore`](https://tinybase.org/api/ui-svelte/functions/getter/getstore/) function and [`getMetrics`](https://tinybase.org/api/ui-svelte/functions/getter/getmetrics/) function return TinyBase objects directly from Provider context. [Functions](https://tinybase.org/api/ui-svelte/functions/) like the [`getCell`](https://tinybase.org/api/ui-svelte/functions/getter/getcell/) function, the [`getRow`](https://tinybase.org/api/ui-svelte/functions/getter/getrow/) function, the [`getTable`](https://tinybase.org/api/ui-svelte/functions/getter/gettable/) function, the [`getValue`](https://tinybase.org/api/ui-svelte/functions/getter/getvalue/) function, and the [`hasCell`](https://tinybase.org/api/ui-svelte/functions/getter/hascell/) function return reactive objects whose `current` property reflects underlying TinyBase data.
Function parameters accept either plain values or reactive getter functions (as per the [`MaybeGetter`](https://tinybase.org/api/ui-svelte/type-aliases/identity/maybegetter/) type), so passing `() => tableId` from a `let`-bound Svelte prop makes the function re-execute whenever the prop changes.
## See also
  * [Building UIs With Svelte](https://tinybase.org/guides/building-uis-with-svelte/) guide
  * [Hello World (Svelte)](https://tinybase.org/demos/hello-world/hello-world-svelte/) demo
  * [Countries (Svelte)](https://tinybase.org/demos/countries/countries-svelte/) demo


## Since
v8.1.0
## Functions
  * [Getter functions](https://tinybase.org/api/ui-svelte/functions/getter/)
  * [Listener functions](https://tinybase.org/api/ui-svelte/functions/listener/)
  * [Callback functions](https://tinybase.org/api/ui-svelte/functions/callback/)
  * [Component functions](https://tinybase.org/api/ui-svelte/functions/component/)
  * [Provider functions](https://tinybase.org/api/ui-svelte/functions/provider/)


## Type Aliases
  * [Identity type aliases](https://tinybase.org/api/ui-svelte/type-aliases/identity/)
  * [Props type aliases](https://tinybase.org/api/ui-svelte/type-aliases/props/)

[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
