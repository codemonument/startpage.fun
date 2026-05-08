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
  * [Getting Started With ui-svelte](https://tinybase.org/guides/building-uis-with-svelte/getting-started-with-ui-svelte/)


# Getting Started With ui-svelte
To build Svelte-based user interfaces with TinyBase, you will need to install the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module in addition to the main module, and, of course, Svelte itself.
If you want to see the same pattern in a runnable site demo, take a look at the [Hello World (Svelte)](https://tinybase.org/demos/hello-world/hello-world-svelte/) demo.
For a fuller example using indexes and persistence, see the [Countries (Svelte)](https://tinybase.org/demos/countries/countries-svelte/) demo.
In a Svelte component, you can get started with code like this:

```
<script>
  import {createStore} from 'tinybase';
  import {CellView} from 'tinybase/ui-svelte';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
  store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('t1', 'r1', 'c1', 'Hello World');
</script>

<CellView tableId="t1" rowId="r1" cellId="c1" {store} />

```

When this component renders, you will see the words '[Hello World](https://tinybase.org/demos/hello-world/)' on the screen, having been written to, and read from, a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), and then rendered by the [`CellView`](https://tinybase.org/api/ui-react/functions/store-components/cellview/) component from the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module.
The [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module is designed around Svelte 5's reactive runtime and component model. Instead of React-style hooks, it exposes reactive functions, listener functions, and view components that integrate directly with Svelte.
Let's move on to understand how the reactive functions work in the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module, with the [Using Reactive Functions](https://tinybase.org/guides/building-uis-with-svelte/using-reactive-functions/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
