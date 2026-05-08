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
  * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)


# Inspecting Data
If you are using TinyBase in a web application with React or Svelte, you can use its web-based inspector, the [`Inspector`](https://tinybase.org/api/the-essentials/using-react/inspector/) component, to reason about the data during development.
(NB: Previous to v5.0, this component was called `StoreInspector`.)
## Usage
The component is available in both the [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/) module and the [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/) module. In each case, add the component inside a [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component that is providing the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) context for the app that you want to inspect.
With React, the boilerplate will look something like this:

```
import {createStore} from 'tinybase';
import {Provider, useCreateStore} from 'tinybase/ui-react';
import {Inspector} from 'tinybase/ui-react-inspector';

const App = () => (
  <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) store={useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(createStore)}>
    <Body />
  </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
);

const Body = () => {
  return (
    <>
      <h1>My app</h1>
      {/* ... */}
      <Inspector[](https://tinybase.org/api/the-essentials/using-react/inspector/) />
    </>
  );
};

addEventListener('load', () =>
  ReactDOM.createRoot(document.body).render(<App />),
);

```

With Svelte, the pattern is the same:

```
<script>
  import {createStore} from 'tinybase';
  import {Provider} from 'tinybase/ui-svelte';
  import {Inspector} from 'tinybase/ui-svelte-inspector';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
    fido: {species: 'dog'},
  });
</script>

<Provider {store}>
  <h1>My app</h1>
  <Inspector />
</Provider>

```

## What Is In The Inspector?
The inspector appears at first as a nub in the corner of the screen containing the TinyBase logo. Once clicked, it will open up to show a dark panel. You can reposition this to dock to any side of the window, or expand to the full screen.
The inspector contains the following sections for whatever is available in the [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component context:
  * Default [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/): [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) and a sortable view of each [`Table`](https://tinybase.org/api/store/type-aliases/store/table/)
  * Each named [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/): [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) and a sortable view of each [`Table`](https://tinybase.org/api/store/type-aliases/store/table/)
  * Default [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/): each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in each [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) of each [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/)
  * Each named [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/): each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in each [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) of each [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/)
  * Default [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/): the pair of [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) in each [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/)
  * Each named [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/): the pair of [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) in each [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/)
  * Default [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/): the pair of [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) in each Query
  * Each named [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/): the pair of [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) in each Query


It is hoped that each section is quite self-explanatory. If not, please try it out in the [(React)](https://tinybase.org/demos/ui-components-react/inspector-react/)demo or the [(Svelte)](https://tinybase.org/demos/ui-components-svelte/inspector-svelte/)demo, or indeed in most of the TinyBase demos themselves! The [Movie Database](https://tinybase.org/demos/movie-database/) demo and [Countries](https://tinybase.org/demos/countries/) demo are quite good examples of the inspector in use.
Note that, as of TinyBase v6.6, you can also create, duplicate, and delete tables, rows, values, and cells - all directly within the Inspector.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
