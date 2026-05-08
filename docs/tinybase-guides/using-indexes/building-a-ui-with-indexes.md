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
        * [An Intro To Indexes](https://tinybase.org/guides/using-indexes/an-intro-to-indexes/)
        * [Building A UI With Indexes](https://tinybase.org/guides/using-indexes/building-a-ui-with-indexes/)
        * [Advanced Index Definition](https://tinybase.org/guides/using-indexes/advanced-index-definition/)
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
  * [Using Indexes](https://tinybase.org/guides/using-indexes/)
  * [Building A UI With Indexes](https://tinybase.org/guides/using-indexes/building-a-ui-with-indexes/)


# Building A UI With Indexes
This guide covers how the [`ui-react`](https://tinybase.org/api/ui-react/) module supports the [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object.
As with the React-based bindings to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, the [`ui-react`](https://tinybase.org/api/ui-react/) module provides both hooks and components to connect your indexes to your interface.
##  [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) Hooks
The [`useSliceIds`](https://tinybase.org/api/ui-react/functions/indexes-hooks/usesliceids/) hook is as simple as it sounds. It gets the current set of [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) in an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/), and registers a listener so that any changes to that result will cause a re-render:

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createIndexes, createStore} from 'tinybase';
import {useSliceIds} from 'tinybase/ui-react';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog'},
  felix: {species: 'cat'},
  cujo: {species: 'dog'},
});
const indexes = createIndexes[](https://tinybase.org/api/indexes/functions/creation/createindexes/)(store);
indexes.setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)(
  'bySpecies', // indexId
  'pets', //      tableId to index
  'species', //   cellId to index on
);
const App = () => (
  <span>{JSON.stringify(useSliceIds[](https://tinybase.org/api/ui-react/functions/indexes-hooks/usesliceids/)('bySpecies', indexes))}</span>
);

const app = document.createElement('div');
const root = createRoot(app);
root.render(<App />);
console.log(app.innerHTML);
// -> '<span>["dog","cat"]</span>'

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'lowly', {species: 'worm'});
console.log(app.innerHTML);
// -> '<span>["dog","cat","worm"]</span>'

```

The [`useCreateIndexes`](https://tinybase.org/api/ui-react/functions/indexes-hooks/usecreateindexes/) hook is used to create an [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object within a React application with convenient memoization:

```
import {useCreateIndexes, useCreateStore} from 'tinybase/ui-react';

const App2 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
      fido: {species: 'dog'},
      felix: {species: 'cat'},
      cujo: {species: 'dog'},
    }),
  );
  const indexes = useCreateIndexes[](https://tinybase.org/api/ui-react/functions/indexes-hooks/usecreateindexes/)(store, (store) =>
    createIndexes[](https://tinybase.org/api/indexes/functions/creation/createindexes/)(store).setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)('bySpecies', 'pets', 'species'),
  );
  return <span>{JSON.stringify(useSliceIds[](https://tinybase.org/api/ui-react/functions/indexes-hooks/usesliceids/)('bySpecies', indexes))}</span>;
};

root.render(<App2 />);
console.log(app.innerHTML);
// -> '<span>["dog","cat"]</span>'

```

##  [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) And [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) Views
The [`IndexView`](https://tinybase.org/api/ui-react/functions/indexes-components/indexview/) component renders the structure of an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/), and registers a listener so that any changes to that result will cause a re-render. The [`SliceView`](https://tinybase.org/api/ui-react/functions/indexes-components/sliceview/) component renders just a single [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) by iterating over each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in that [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/).
As with all ui-react view components, these use their corresponding hooks under the covers, which means that any changes to the [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) or the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects referenced by it will cause a re-render.

```
import {SliceView} from 'tinybase/ui-react';

const App3 = () => (
  <div>
    <SliceView[](https://tinybase.org/api/ui-react/functions/indexes-components/sliceview/)
      indexId="bySpecies"
      sliceId="dog"
      indexes={indexes}
      debugIds={true}
    />
  </div>
);

root.render(<App3 />);
console.log(app.innerHTML);
// -> '<div>dog:{fido:{species:{dog}}cujo:{species:{dog}}}</div>'

```

A SliceView can be given a custom RowView-compatible component to render its children, much like a [`TableView`](https://tinybase.org/api/ui-react/functions/store-components/tableview/) component can. And an IndexView can be in turn given a custom SliceView-compatible component:

```
import {IndexView} from 'tinybase/ui-react';

const MyRowView = (props) => <>{props.rowId};</>;

const MySliceView = (props) => (
  <div>
    {props.sliceId}:<SliceView[](https://tinybase.org/api/ui-react/functions/indexes-components/sliceview/) {...props} rowComponent={MyRowView} />
  </div>
);

const App4 = () => (
  <IndexView[](https://tinybase.org/api/ui-react/functions/indexes-components/indexview/)
    indexId="bySpecies"
    indexes={indexes}
    sliceComponent={MySliceView}
  />
);

root.render(<App4 />);
console.log(app.innerHTML);
// -> '<div>dog:fido;cujo;</div><div>cat:felix;</div><div>worm:lowly;</div>'

```

##  [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) Context
In the same way that a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can be passed into a [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component context and used throughout the app, an [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object can also be provided to be used by default:

```
import {Provider, useSliceRowIds} from 'tinybase/ui-react';

const App5 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
      fido: {species: 'dog'},
      felix: {species: 'cat'},
      cujo: {species: 'dog'},
    }),
  );
  const indexes = useCreateIndexes[](https://tinybase.org/api/ui-react/functions/indexes-hooks/usecreateindexes/)(store, (store) =>
    createIndexes[](https://tinybase.org/api/indexes/functions/creation/createindexes/)(store).setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)('bySpecies', 'pets', 'species'),
  );

  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) indexes={indexes}>
      <Pane />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const Pane = () => (
  <span>
    <SliceView[](https://tinybase.org/api/ui-react/functions/indexes-components/sliceview/) indexId="bySpecies" sliceId="dog" debugIds={true} />/
    {useSliceRowIds[](https://tinybase.org/api/ui-react/functions/indexes-hooks/useslicerowids/)('bySpecies', 'cat')}
  </span>
);

root.render(<App5 />);
console.log(app.innerHTML);
// -> '<span>dog:{fido:{species:{dog}}cujo:{species:{dog}}}/felix</span>'

```

The `indexesById` prop can be used in the same way that the `storesById` prop is, to let you reference multiple [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) objects by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).
## Summary
The support for [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) objects in the [`ui-react`](https://tinybase.org/api/ui-react/) module is very similar to that for the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object and [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object, making it easy to attach [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) and [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) contents to your user interface.
We finish off this section about the [`indexes`](https://tinybase.org/api/indexes/) module with the [Advanced Index Definition](https://tinybase.org/guides/using-indexes/advanced-index-definition/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
