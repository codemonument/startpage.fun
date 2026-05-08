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
        * [Getting Started With ui-svelte](https://tinybase.org/guides/building-uis-with-svelte/getting-started-with-ui-svelte/)
        * [Using Reactive Functions](https://tinybase.org/guides/building-uis-with-svelte/using-reactive-functions/)
        * [Using Svelte Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-components/)
        * [Using Svelte DOM Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-dom-components/)
        * [Using Context](https://tinybase.org/guides/building-uis-with-svelte/using-context/)
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
  * [Building UIs With Svelte](https://tinybase.org/guides/building-uis-with-svelte/)


# Building UIs With Svelte
These guides cover TinyBase's Svelte-specific UI modules for building reactive user interfaces.
They start with the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module's reactive functions and view components, move on to the browser-focused [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/) module, and finish with Provider context patterns.
See also the [Hello World (Svelte)](https://tinybase.org/demos/hello-world/hello-world-svelte/), [Countries (Svelte)](https://tinybase.org/demos/countries/countries-svelte/), and [UI Components (Svelte)](https://tinybase.org/demos/ui-components-svelte/) demos.
## Getting Started With ui-svelte
To build Svelte-based user interfaces with TinyBase, you will need to install the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module in addition to the main module, and, of course, Svelte itself. [Read more](https://tinybase.org/guides/building-uis-with-svelte/getting-started-with-ui-svelte/).
## Using Reactive Functions
Every reactive function in the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module returns a reactive object with a `current` property that automatically updates any part of your template that reads it when the underlying [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data changes. [Read more](https://tinybase.org/guides/building-uis-with-svelte/using-reactive-functions/).
## Using Svelte Components
The view components in the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module let you declaratively display parts of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). [Read more](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-components/).
## Using Svelte DOM Components
The reactive components in the [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/) module let you declaratively display parts of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in a web browser, where Svelte's DOM runtime is available. [Read more](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-dom-components/).
## Using Context
The [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module includes a [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component that lets you avoid passing global objects down through your component hierarchy. [Read more](https://tinybase.org/guides/building-uis-with-svelte/using-context/).
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
