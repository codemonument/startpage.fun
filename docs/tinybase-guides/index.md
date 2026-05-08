[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
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


# Guides
This series of guides helps explain the concepts behind TinyBase and is designed to complement the more comprehensive [API](https://tinybase.org/api/) documentation.
## The Basics
These guides cover the very basics of TinyBase. [Read more](https://tinybase.org/guides/the-basics/).
  * [Getting Started](https://tinybase.org/guides/the-basics/getting-started/)
  * [Creating A Store](https://tinybase.org/guides/the-basics/creating-a-store/)
  * [Writing To Stores](https://tinybase.org/guides/the-basics/writing-to-stores/)
  * [Reading From Stores](https://tinybase.org/guides/the-basics/reading-from-stores/)
  * [Listening To Stores](https://tinybase.org/guides/the-basics/listening-to-stores/)
  * [Transactions](https://tinybase.org/guides/the-basics/transactions/)
  * [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/)
  * [TinyBase And TypeScript](https://tinybase.org/guides/the-basics/tinybase-and-typescript/)
  * [Architectural Options](https://tinybase.org/guides/the-basics/architectural-options/)


## Building UIs With React
These guides cover TinyBase's React-specific UI modules for building reactive user interfaces. [Read more](https://tinybase.org/guides/building-uis-with-react/).
  * [Getting Started With ui-react](https://tinybase.org/guides/building-uis-with-react/getting-started-with-ui-react/)
  * [Using React Hooks](https://tinybase.org/guides/building-uis-with-react/using-react-hooks/)
  * [Using React Components](https://tinybase.org/guides/building-uis-with-react/using-react-components/)
  * [Using React DOM Components](https://tinybase.org/guides/building-uis-with-react/using-react-dom-components/)
  * [Using Context](https://tinybase.org/guides/building-uis-with-react/using-context/)


## Building UIs With Svelte
These guides cover TinyBase's Svelte-specific UI modules for building reactive user interfaces. [Read more](https://tinybase.org/guides/building-uis-with-svelte/).
  * [Getting Started With ui-svelte](https://tinybase.org/guides/building-uis-with-svelte/getting-started-with-ui-svelte/)
  * [Using Reactive Functions](https://tinybase.org/guides/building-uis-with-svelte/using-reactive-functions/)
  * [Using Svelte Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-components/)
  * [Using Svelte DOM Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-dom-components/)
  * [Using Context](https://tinybase.org/guides/building-uis-with-svelte/using-context/)


## Schemas
These guides discuss how to set up a [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) or [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) on a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) so that certain structures of data are assured. [Read more](https://tinybase.org/guides/schemas/).
  * [Using Schemas](https://tinybase.org/guides/schemas/using-schemas/)
  * [Schema-Based Typing](https://tinybase.org/guides/schemas/schema-based-typing/)
  * [Mutating Data With Listeners](https://tinybase.org/guides/schemas/mutating-data-with-listeners/)
  * [Using Schematizers](https://tinybase.org/guides/schemas/using-schematizers/)


## Using Middleware
This guide describes how to use the [`middleware`](https://tinybase.org/api/middleware/) module, which lets you register callbacks that can manipulate operations made on data in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). [Read more](https://tinybase.org/guides/using-middleware/).
## Persistence
These guides discuss how to load and save data to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) from a persistence layer. [Read more](https://tinybase.org/guides/persistence/).
  * [An Intro To Persistence](https://tinybase.org/guides/persistence/an-intro-to-persistence/)
  * [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/)
  * [Third-Party CRDT Persistence](https://tinybase.org/guides/persistence/third-party-crdt-persistence/)
  * [Custom Persistence](https://tinybase.org/guides/persistence/custom-persistence/)


## Synchronization
These guides discuss how to merge and synchronize data in [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) instances using synchronization techniques. [Read more](https://tinybase.org/guides/synchronization/).
  * [Using A MergeableStore](https://tinybase.org/guides/synchronization/using-a-mergeablestore/)
  * [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/)


## Integrations
There are plenty of other projects, products, and platforms that TinyBase can work with and alongside. [Read more](https://tinybase.org/guides/integrations/).
  * [Cloudflare Durable Objects](https://tinybase.org/guides/integrations/cloudflare-durable-objects/)


## Using Metrics
These guides discuss how to define [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) that aggregate values together. [Read more](https://tinybase.org/guides/using-metrics/).
  * [An Intro To Metrics](https://tinybase.org/guides/using-metrics/an-intro-to-metrics/)
  * [Building A UI With Metrics](https://tinybase.org/guides/using-metrics/building-a-ui-with-metrics/)
  * [Advanced Metric Definition](https://tinybase.org/guides/using-metrics/advanced-metric-definition/)


## Using Indexes
These guides discuss how to define [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) that allow fast access to matching [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects. [Read more](https://tinybase.org/guides/using-indexes/).
  * [An Intro To Indexes](https://tinybase.org/guides/using-indexes/an-intro-to-indexes/)
  * [Building A UI With Indexes](https://tinybase.org/guides/using-indexes/building-a-ui-with-indexes/)
  * [Advanced Index Definition](https://tinybase.org/guides/using-indexes/advanced-index-definition/)


## Using Relationships
These guides discuss how to define [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) that connect Rows together between [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) objects. [Read more](https://tinybase.org/guides/using-relationships/).
  * [An Intro To Relationships](https://tinybase.org/guides/using-relationships/an-intro-to-relationships/)
  * [Building A UI With Relationships](https://tinybase.org/guides/using-relationships/building-a-ui-with-relationships/)
  * [Advanced Relationship Definitions](https://tinybase.org/guides/using-relationships/advanced-relationship-definitions/)


## Using Checkpoints
These guides discuss how to use [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) that allow you to build undo and redo functionality. [Read more](https://tinybase.org/guides/using-checkpoints/).
  * [An Intro To Checkpoints](https://tinybase.org/guides/using-checkpoints/an-intro-to-checkpoints/)
  * [Building A UI With Checkpoints](https://tinybase.org/guides/using-checkpoints/building-a-ui-with-checkpoints/)


## Using Queries
These guides discuss how to define queries that let you select specific [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) and [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) combinations from each [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), and benefit from powerful features like grouping and aggregation. [Read more](https://tinybase.org/guides/using-queries/).
  * [An Intro To Queries](https://tinybase.org/guides/using-queries/an-intro-to-queries/)
  * [TinyQL](https://tinybase.org/guides/using-queries/tinyql/)
  * [Building A UI With Queries](https://tinybase.org/guides/using-queries/building-a-ui-with-queries/)


[![Inspector](https://tinybase.org/inspector.webp)](https://tinybase.org/guides/inspecting-data/)
## Inspecting Data
If you are using TinyBase in a web application with React or Svelte, you can use its web-based inspector, the [`Inspector`](https://tinybase.org/api/the-essentials/using-react/inspector/) component, to reason about the data during development. [Read more](https://tinybase.org/guides/inspecting-data/).
## How TinyBase Is Built
These guides discuss how TinyBase is structured and some of the interesting ways in which it is architected, tested, and built. [Read more](https://tinybase.org/guides/how-tinybase-is-built/).
  * [Developing TinyBase](https://tinybase.org/guides/how-tinybase-is-built/developing-tinybase/)
  * [Architecture](https://tinybase.org/guides/how-tinybase-is-built/architecture/)
  * [Testing](https://tinybase.org/guides/how-tinybase-is-built/testing/)
  * [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/)
  * [How The Demos Work](https://tinybase.org/guides/how-tinybase-is-built/how-the-demos-work/)
  * [Credits](https://tinybase.org/guides/how-tinybase-is-built/credits/)


## FAQ
These are some of the frequently asked questions about TinyBase. [Read more](https://tinybase.org/guides/faq/).
## Agents Guide
This file follows the [agents.md](https://agents.md/) specification for AI agent context. If you're a human reading this, it provides a comprehensive overview of the TinyBase project for AI assistants working with the codebase. [Read more](https://tinybase.org/guides/agents-guide/).
## Releases
This is a reverse chronological list of the major TinyBase releases, with highlighted features. [Read more](https://tinybase.org/guides/releases/).
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase ](https://tinybase.org/) © 2022-
