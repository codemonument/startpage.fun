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


# Persistence
These guides discuss how to load and save data to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) from a persistence layer.
See also the [Countries](https://tinybase.org/demos/countries/) demo, the [Todo App](https://tinybase.org/demos/todo-app/) demos, and the [Drawing](https://tinybase.org/demos/drawing/) demo.
## An Intro To Persistence
The persister module framework lets you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from different locations, or underlying storage types. [Read more](https://tinybase.org/guides/persistence/an-intro-to-persistence/).
## Database Persistence
Since v4.0, there are various options for persisting [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from SQLite databases, via a range of third-party modules. [Read more](https://tinybase.org/guides/persistence/database-persistence/).
## Third-Party CRDT Persistence
Some persister modules let you save and load [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to underlying storage types that can provide synchronization, local-first reconciliation, and CRDTs. [Read more](https://tinybase.org/guides/persistence/third-party-crdt-persistence/).
## Custom Persistence
When you want to load and save [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data in unusual or custom ways, you can used the [`createCustomPersister`](https://tinybase.org/api/persisters/functions/creation/createcustompersister/) function to do so in any way you wish. [Read more](https://tinybase.org/guides/persistence/custom-persistence/).
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
