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
        * [Getting Started With ui-react](https://tinybase.org/guides/building-uis-with-react/getting-started-with-ui-react/)
        * [Using React Hooks](https://tinybase.org/guides/building-uis-with-react/using-react-hooks/)
        * [Using React Components](https://tinybase.org/guides/building-uis-with-react/using-react-components/)
        * [Using React DOM Components](https://tinybase.org/guides/building-uis-with-react/using-react-dom-components/)
        * [Using Context](https://tinybase.org/guides/building-uis-with-react/using-context/)
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
  * [Building UIs With React](https://tinybase.org/guides/building-uis-with-react/)
  * [Using Context](https://tinybase.org/guides/building-uis-with-react/using-context/)


# Using Context
The [`ui-react`](https://tinybase.org/api/ui-react/) module includes a context provider that lets you avoid passing global objects down through your component hierarchy.
One thing you may have noticed (especially with the hooks) is how we've had to reference the global [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object within components (or potentially drill it through the hierarchy with props). It's very likely that your whole app (or parts of it) will use the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) throughout, though.
To help with this, the [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component lets you specify a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) that all the hooks and components will bind to automatically. Simply provide the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in the `store` prop, and it will be used by default. Notice how the `store` variable is not referenced in the child `Pane` component here, for example:

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createStore} from 'tinybase';
import {CellView, Provider, useCell, useCreateStore} from 'tinybase/ui-react';

const App = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog', color: 'brown'}}}),
  );

  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) store={store}>
      <Pane />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const Pane = () => (
  <span>
    <CellView[](https://tinybase.org/api/ui-react/functions/store-components/cellview/) tableId="pets" rowId="fido" cellId="species" />,
    {useCell[](https://tinybase.org/api/the-essentials/using-react/usecell/)('pets', 'fido', 'color')}
  </span>
);

const app = document.createElement('div');
const root = createRoot(app);
root.render(<App />);
console.log(app.innerHTML);
// -> '<span>dog,brown</span>'

```

Obviously this requires your components to be used in a context where you know the right sort of [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) will be available.
## Context With Multiple Stores
In cases where you want to have multiple [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects available to an application, the [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component takes a `storesById` prop that is an object keyed by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/). Your hooks and components use the [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) to indicate which they want to use:

```
const App2 = () => {
  const petStore = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}}),
  );
  const planetStore = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({planets: {mars: {moons: 2}}}),
  );

  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) storesById={{pet: petStore, planet: planetStore}}>
      <Pane2 />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const Pane2 = () => (
  <span>
    <CellView[](https://tinybase.org/api/ui-react/functions/store-components/cellview/) tableId="pets" rowId="fido" cellId="species" store="pet" />,
    {useCell[](https://tinybase.org/api/the-essentials/using-react/usecell/)('planets', 'mars', 'moons', 'planet')}
  </span>
);

root.render(<App2 />);
console.log(app.innerHTML);
// -> '<span>dog,2</span>'

```

## Nesting Context
[`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) components can be nested and the contexts are merged. This last example is a little verbose, but shows how two [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects each keyed with a different [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) are both visible, despite having been set in two different [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) components:

```
const App3 = () => {
  const petStore = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}}),
  );

  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) storesById={{pet: petStore}}>
      <OuterPane />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const OuterPane = () => {
  const planetStore = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({planets: {mars: {moons: 2}}}),
  );
  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) store={planetStore}>
      <InnerPane />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const InnerPane = () => (
  <span>
    <CellView[](https://tinybase.org/api/ui-react/functions/store-components/cellview/) tableId="pets" rowId="fido" cellId="species" store="pet" />,
    {useCell[](https://tinybase.org/api/the-essentials/using-react/usecell/)('planets', 'mars', 'moons')}
  </span>
);

root.render(<App3 />);
console.log(app.innerHTML);
// -> '<span>dog,2</span>'

```

## Summary
We have covered the main parts of the [`ui-react`](https://tinybase.org/api/ui-react/) module, including its hooks and components, and the way it supports context to make [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects available.
For the Svelte equivalents, proceed to the [Building UIs With Svelte](https://tinybase.org/guides/building-uis-with-svelte/) guides.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
