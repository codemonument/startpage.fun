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
  * [Using Context](https://tinybase.org/guides/building-uis-with-svelte/using-context/)


# Using Context
The [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module includes a [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component that lets you avoid passing global objects down through your component hierarchy.
Passing the `store` object to every reactive function as the last argument gets repetitive in larger applications. The [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component sets a context that all descendant functions use automatically when no explicit reference is given:

```
<!-- App.svelte -->
<script>
  import {createStore} from 'tinybase';
  import {Provider} from 'tinybase/ui-svelte';
  import Pane from './Pane.svelte';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({
    pets: {fido: {species: 'dog', color: 'brown'}},
  });
</script>

<Provider {store}>
  <Pane />
</Provider>

```

```
<!-- Pane.svelte -->
<script>
  import {getCell} from 'tinybase/ui-svelte';

  // No store argument; resolved automatically from the nearest Provider
  const species = getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'species');
  const color = getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'color');
</script>

<p>{species.current} ({color.current})</p>

```

## Context With Multiple Objects
`Provider` accepts `store`, `storesById`, `metrics`, `metricsById`, and equivalent props for every TinyBase object type. When multiple stores are provided, functions reference them by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/):

```
<script>
  import {getCell} from 'tinybase/ui-svelte';

  const color = getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'color', 'petStore');
</script>

```

Descendant components can register additional objects into the nearest Provider context at runtime using the [`provideStore`](https://tinybase.org/api/ui-svelte/functions/provider/providestore/) function, the [`provideMetrics`](https://tinybase.org/api/ui-svelte/functions/provider/providemetrics/) function, and similar helpers for the other TinyBase object types.
## Nesting Context
[`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) components can also be nested. Their contexts merge in the same spirit as the [`ui-react`](https://tinybase.org/api/ui-react/) module Provider, so outer defaults and named objects remain visible unless a nearer Provider replaces them.
This makes it practical to keep app-wide objects at the top of the tree while injecting route-local or feature-local TinyBase objects deeper in the UI.
## Summary
The [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module is the Svelte 5 counterpart to ui-react. It favors reactive handles, named snippets, and Provider-based context over hooks and component override props.
This concludes the UI-focused guides. Next we move on to schemas and persistence in the [Schemas](https://tinybase.org/guides/schemas/) guides.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
