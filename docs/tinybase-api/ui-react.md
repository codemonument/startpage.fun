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
        * [Functions](https://tinybase.org/api/ui-react/functions/)
        * [Type Aliases](https://tinybase.org/api/ui-react/type-aliases/)
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
  * [`ui-react`](https://tinybase.org/api/ui-react/)


# `ui-react`
The `ui-react` module of the TinyBase project provides both hooks and components to make it easy to create reactive apps with [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects.
The hooks in this module provide access to the data and structures exposed by other modules in the project. As well as immediate access, they all register listeners such that components using those hooks are selectively re-rendered when data changes.
The components in this module provide a further abstraction over those hooks to ease the composition of user interfaces that use TinyBase.
## See also
  * [Building UIs](https://tinybase.org/guides/building-uis/) guides
  * [Building UIs](https://tinybase.org/guides/building-uis/) With [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) guide
  * [Building UIs](https://tinybase.org/guides/building-uis/) With [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) guide
  * [Building UIs](https://tinybase.org/guides/building-uis/) With [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) guide
  * [Building UIs](https://tinybase.org/guides/building-uis/) With [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) guide
  * [Building UIs](https://tinybase.org/guides/building-uis/) With [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) guide
  * [Hello World (React)](https://tinybase.org/demos/hello-world/hello-world-react/) demo
  * [Countries (React)](https://tinybase.org/demos/countries/countries-react/) demo
  * [Todo App](https://tinybase.org/demos/todo-app/) demos
  * [Drawing](https://tinybase.org/demos/drawing/) demo


## Since
v1.0.0
## Functions
  * [Store components](https://tinybase.org/api/ui-react/functions/store-components/)
  * [Queries components](https://tinybase.org/api/ui-react/functions/queries-components/)
  * [Checkpoints hooks](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/)
  * [Indexes hooks](https://tinybase.org/api/ui-react/functions/indexes-hooks/)
  * [Metrics hooks](https://tinybase.org/api/ui-react/functions/metrics-hooks/)
  * [Persister hooks](https://tinybase.org/api/ui-react/functions/persister-hooks/)
  * [Queries hooks](https://tinybase.org/api/ui-react/functions/queries-hooks/)
  * [Relationships hooks](https://tinybase.org/api/ui-react/functions/relationships-hooks/)
  * [State hooks](https://tinybase.org/api/ui-react/functions/state-hooks/)
  * [Store hooks](https://tinybase.org/api/ui-react/functions/store-hooks/)
  * [Synchronizer hooks](https://tinybase.org/api/ui-react/functions/synchronizer-hooks/)
  * [Checkpoints components](https://tinybase.org/api/ui-react/functions/checkpoints-components/)
  * [`Provider`](https://tinybase.org/api/ui-react/functions/context-components/provider/) function
  * [Indexes components](https://tinybase.org/api/ui-react/functions/indexes-components/)
  * [`MetricView`](https://tinybase.org/api/ui-react/functions/metrics-components/metricview/) function
  * [Relationships components](https://tinybase.org/api/ui-react/functions/relationships-components/)


## Type Aliases
  * [`UndoOrRedoInformation`](https://tinybase.org/api/ui-react/type-aliases/checkpoints/undoorredoinformation/) type alias
  * [`ComponentReturnType`](https://tinybase.org/api/ui-react/type-aliases/component/componentreturntype/) type alias
  * [Identity type aliases](https://tinybase.org/api/ui-react/type-aliases/identity/)
  * [Props type aliases](https://tinybase.org/api/ui-react/type-aliases/props/)

[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
