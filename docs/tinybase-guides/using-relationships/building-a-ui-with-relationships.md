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
        * [An Intro To Relationships](https://tinybase.org/guides/using-relationships/an-intro-to-relationships/)
        * [Building A UI With Relationships](https://tinybase.org/guides/using-relationships/building-a-ui-with-relationships/)
        * [Advanced Relationship Definitions](https://tinybase.org/guides/using-relationships/advanced-relationship-definitions/)
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
  * [Using Relationships](https://tinybase.org/guides/using-relationships/)
  * [Building A UI With Relationships](https://tinybase.org/guides/using-relationships/building-a-ui-with-relationships/)


# Building A UI With Relationships
This guide covers how the [`ui-react`](https://tinybase.org/api/ui-react/) module supports the [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object.
As with the React-based bindings to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, the [`ui-react`](https://tinybase.org/api/ui-react/) module provides both hooks and components to connect your relationships to your interface.
##  [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) Hooks
As you may have guessed by now, there are three hooks you'll commonly use here:
  * The [`useRemoteRowId`](https://tinybase.org/api/ui-react/functions/relationships-hooks/useremoterowid/) hook gets the remote [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) for a given local [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in a [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/).
  * The [`useLocalRowIds`](https://tinybase.org/api/ui-react/functions/relationships-hooks/uselocalrowids/) hook gets the local [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) for a given remote [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in a [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/).
  * The [`useLinkedRowIds`](https://tinybase.org/api/ui-react/functions/relationships-hooks/uselinkedrowids/) hook gets the linked [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) for a given [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in a linked list [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/).


Each hook registers a listener so that any relevant changes will cause a re-render. As an example:

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createRelationships, createStore} from 'tinybase';
import {useRemoteRowId} from 'tinybase/ui-react';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)()
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {fido: {species: 'dog'}, cujo: {species: 'dog'}})
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {wolf: {price: 10}, dog: {price: 5}});
const relationships = createRelationships[](https://tinybase.org/api/relationships/functions/creation/createrelationships/)(store).setRelationshipDefinition[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/configuration/setrelationshipdefinition/)(
  'petSpecies',
  'pets',
  'species',
  'species',
);
const App = () => (
  <span>{useRemoteRowId[](https://tinybase.org/api/ui-react/functions/relationships-hooks/useremoterowid/)('petSpecies', 'cujo', relationships)}</span>
);

const app = document.createElement('div');
const root = createRoot(app);
root.render(<App />);
console.log(app.innerHTML);
// -> '<span>dog</span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'cujo', 'species', 'wolf');
console.log(app.innerHTML);
// -> '<span>wolf</span>'

```

The [`useCreateRelationships`](https://tinybase.org/api/ui-react/functions/relationships-hooks/usecreaterelationships/) hook is used to create a [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object within a React application with convenient memoization:

```
import {useCreateRelationships, useCreateStore} from 'tinybase/ui-react';

const App2 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)()
      .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
        fido: {species: 'dog'},
        felix: {species: 'cat'},
        cujo: {species: 'dog'},
      })
      .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {dog: {price: 5}, cat: {price: 4}}),
  );
  const relationships = useCreateRelationships[](https://tinybase.org/api/ui-react/functions/relationships-hooks/usecreaterelationships/)(store, (store) =>
    createRelationships[](https://tinybase.org/api/relationships/functions/creation/createrelationships/)(store).setRelationshipDefinition[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/configuration/setrelationshipdefinition/)(
      'petSpecies',
      'pets',
      'species',
      'species',
    ),
  );
  return <span>{relationships?.getRemoteRowId[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getremoterowid/)('petSpecies', 'fido')}</span>;
};

root.render(<App2 />);
console.log(app.innerHTML);
// -> '<span>dog</span>'

```

##  [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) Views
The three components you'll use for rendering the contents of [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) are the [`RemoteRowView`](https://tinybase.org/api/ui-react/functions/relationships-components/remoterowview/) component, [`LocalRowsView`](https://tinybase.org/api/ui-react/functions/relationships-components/localrowsview/) component, and [`LinkedRowsView`](https://tinybase.org/api/ui-react/functions/relationships-components/linkedrowsview/) component, each of which matches the three types of getters as expected.
Also as expected (hopefully by now!), each registers a listener so that any changes to that result will cause a re-render.
These components can be given a custom RowView-compatible component to render their [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) children:

```
import {CellView, RemoteRowView} from 'tinybase/ui-react';

const MyRowView = (props) => (
  <>
    {props.rowId}: <CellView[](https://tinybase.org/api/ui-react/functions/store-components/cellview/) {...props} cellId="price" />
  </>
);

const App3 = () => (
  <div>
    <RemoteRowView[](https://tinybase.org/api/ui-react/functions/relationships-components/remoterowview/)
      relationshipId="petSpecies"
      localRowId="cujo"
      rowComponent={MyRowView}
      relationships={relationships}
    />
  </div>
);

root.render(<App3 />);
console.log(app.innerHTML);
// -> '<div>wolf: 10</div>'

```

##  [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) Context
In the same way that other objects can be passed into a [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component context and used throughout the app, a [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object can also be provided to be used by default:

```
import {Provider} from 'tinybase/ui-react';

const App4 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)()
      .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {fido: {species: 'dog'}, cujo: {species: 'dog'}})
      .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {wolf: {price: 10}, dog: {price: 5}}),
  );
  const relationships = useCreateRelationships[](https://tinybase.org/api/ui-react/functions/relationships-hooks/usecreaterelationships/)(store, (store) =>
    createRelationships[](https://tinybase.org/api/relationships/functions/creation/createrelationships/)(store).setRelationshipDefinition[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/configuration/setrelationshipdefinition/)(
      'petSpecies',
      'pets',
      'species',
      'species',
    ),
  );

  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) relationships={relationships}>
      <Pane />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const Pane = () => (
  <span>
    <RemoteRowView[](https://tinybase.org/api/ui-react/functions/relationships-components/remoterowview/)
      relationshipId="petSpecies"
      localRowId="cujo"
      debugIds={true}
    />
    /{useRemoteRowId[](https://tinybase.org/api/ui-react/functions/relationships-hooks/useremoterowid/)('petSpecies', 'cujo')}
  </span>
);

root.render(<App4 />);
console.log(app.innerHTML);
// -> '<span>cujo:{dog:{price:{5}}}/dog</span>'

```

The `relationshipsById` prop can be used in the same way that the `storesById` prop is, to let you reference multiple [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) objects by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).
## Summary
The support for [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) objects in the [`ui-react`](https://tinybase.org/api/ui-react/) module is very similar to that for the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, making it easy to attach relationships to your user interface.
We finish off this section about the [`relationships`](https://tinybase.org/api/relationships/) module with the Advanced [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/) Definition guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
