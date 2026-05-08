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
        * [An Intro To Queries](https://tinybase.org/guides/using-queries/an-intro-to-queries/)
        * [TinyQL](https://tinybase.org/guides/using-queries/tinyql/)
        * [Building A UI With Queries](https://tinybase.org/guides/using-queries/building-a-ui-with-queries/)
      * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)
      * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [Using Queries](https://tinybase.org/guides/using-queries/)
  * [Building A UI With Queries](https://tinybase.org/guides/using-queries/building-a-ui-with-queries/)


# Building A UI With Queries
This guide covers how the [`ui-react`](https://tinybase.org/api/ui-react/) module supports the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object.
As with the React-based bindings to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, the [`ui-react`](https://tinybase.org/api/ui-react/) module provides both hooks and components to connect your queries to your interface.
##  [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) Hooks
In previous guides, we've seen how the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) methods follow the same conventions as raw [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) methods, such as how The [`getResultRow`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrow/) method is the equivalent of the [`getRow`](https://tinybase.org/api/the-essentials/getting-data/getrow/) method.
So it should be no surprise that the ui-react hooks follow the same convention, and that the hooks correspond to each of the Query getter methods:
  * The [`useResultTable`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresulttable/) hook is the reactive equivalent of the getResultTable method.
  * The [`useResultRowIds`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultrowids/) hook is the reactive equivalent of the getResultRowIds method.
  * The [`useResultSortedRowIds`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultsortedrowids/) hook is the reactive equivalent of the [`getResultSortedRowIds`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultsortedrowids/) method.
  * The [`useResultRow`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultrow/) hook is the reactive equivalent of the [`getResultRow`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrow/) method.
  * The [`useResultCellIds`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultcellids/) hook is the reactive equivalent of the getResultCellIds method.
  * The [`useResultCell`](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultcell/) hook is the reactive equivalent of the [`getResultCell`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultcell/) method.


Each hook registers a listener so that any relevant changes will cause a re-render. As an example:

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createQueries, createStore} from 'tinybase';
import {useResultRowIds} from 'tinybase/ui-react';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog', color: 'brown'},
  felix: {species: 'cat', color: 'black'},
  cujo: {species: 'dog', color: 'black'},
});
const queries = createQueries[](https://tinybase.org/api/queries/functions/creation/createqueries/)(store).setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)(
  'dogColors',
  'pets',
  ({select, where}) => {
    select('color');
    where('species', 'dog');
  },
);
const App = () => (
  <span>{JSON.stringify(useResultRowIds[](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultrowids/)('dogColors', queries))}</span>
);

const app = document.createElement('div');
const root = createRoot(app);
root.render(<App />);
console.log(app.innerHTML);
// -> '<span>["fido","cujo"]</span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'cujo', 'species', 'wolf');
console.log(app.innerHTML);
// -> '<span>["fido"]</span>'

```

The [`useCreateQueries`](https://tinybase.org/api/ui-react/functions/queries-hooks/usecreatequeries/) hook is used to create a [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object within a React application with convenient memoization:

```
import {useCreateQueries, useCreateStore} from 'tinybase/ui-react';

const App2 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
      fido: {species: 'dog', color: 'brown'},
      felix: {species: 'cat', color: 'black'},
      cujo: {species: 'dog', color: 'black'},
    }),
  );
  const queries = useCreateQueries[](https://tinybase.org/api/ui-react/functions/queries-hooks/usecreatequeries/)(store, (store) =>
    createQueries[](https://tinybase.org/api/queries/functions/creation/createqueries/)(store).setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)(
      'dogColors',
      'pets',
      ({select, where}) => {
        select('color');
        where('species', 'dog');
      },
    ),
  );
  return <span>{JSON.stringify(useResultRowIds[](https://tinybase.org/api/ui-react/functions/queries-hooks/useresultrowids/)('dogColors', queries))}</span>;
};

root.render(<App2 />);
console.log(app.innerHTML);
// -> '<span>["fido","cujo"]</span>'

```

##  [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) Views
Entirely following convention, there are also components for rendering the contents of queries: the [`ResultTableView`](https://tinybase.org/api/ui-react/functions/queries-components/resulttableview/) component, the [`ResultSortedTableView`](https://tinybase.org/api/ui-react/functions/queries-components/resultsortedtableview/) component, the [`ResultRowView`](https://tinybase.org/api/ui-react/functions/queries-components/resultrowview/) component, and the [`ResultCellView`](https://tinybase.org/api/ui-react/functions/queries-components/resultcellview/) component. Again, simple prefix the component names with `Result`.
And of course, each registers a listener so that any changes to that result will cause a re-render.
Just like their [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) equivalents, these components can be given a custom components to render their children:

```
import {ResultCellView, ResultTableView} from 'tinybase/ui-react';

const MyResultRowView = (props) => (
  <span>
    {props.rowId}: <ResultCellView[](https://tinybase.org/api/ui-react/functions/queries-components/resultcellview/) {...props} cellId="color" />
  </span>
);

const App3 = () => (
  <div>
    <ResultTableView[](https://tinybase.org/api/ui-react/functions/queries-components/resulttableview/)
      queryId="dogColors"
      resultRowComponent={MyResultRowView}
      queries={queries}
    />
  </div>
);

store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog', color: 'brown'},
  felix: {species: 'cat', color: 'black'},
  cujo: {species: 'dog', color: 'black'},
});

root.render(<App3 />);
console.log(app.innerHTML);
// -> '<div><span>fido: brown</span><span>cujo: black</span></div>'

```

##  [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) Context
In the same way that other objects can be passed into a [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component context and used throughout the app, a [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object can also be provided to be used by default:

```
import {Provider, ResultRowView, useRemoteRowId} from 'tinybase/ui-react';

const App4 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
      fido: {species: 'dog', color: 'brown'},
      felix: {species: 'cat', color: 'black'},
      cujo: {species: 'dog', color: 'black'},
    }),
  );
  const queries = useCreateQueries[](https://tinybase.org/api/ui-react/functions/queries-hooks/usecreatequeries/)(store, (store) =>
    createQueries[](https://tinybase.org/api/queries/functions/creation/createqueries/)(store).setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)(
      'dogColors',
      'pets',
      ({select, where}) => {
        select('color');
        where('species', 'dog');
      },
    ),
  );

  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) queries={queries}>
      <Pane />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const Pane = () => (
  <span>
    <ResultRowView[](https://tinybase.org/api/ui-react/functions/queries-components/resultrowview/) queryId="dogColors" rowId="cujo" debugIds={true} />/
    {useRemoteRowId[](https://tinybase.org/api/ui-react/functions/relationships-hooks/useremoterowid/)('dogColors', 'cujo')}
  </span>
);

root.render(<App4 />);
console.log(app.innerHTML);
// -> '<span>cujo:{color:{black}}/</span>'

```

The `queriesById` prop can be used in the same way that the `storesById` prop is, to let you reference multiple [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) objects by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).
## Summary
The support for [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) objects in the [`ui-react`](https://tinybase.org/api/ui-react/) module is very similar to that for the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, making it easy to attach queries to your user interface.
We now move on to learning about the Inspector tool that TinyBase provides. Read more about that in the Inspector Data guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
