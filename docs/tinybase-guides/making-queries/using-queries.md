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
  * [An Intro To Queries](https://tinybase.org/guides/using-queries/an-intro-to-queries/)


# An Intro To Queries
This guide describes how the [`queries`](https://tinybase.org/api/queries/) module gives you the ability to create queries against [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) - such as selecting specific [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) and [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) combinations from each [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), or performing powerful features like grouping and aggregation.
The main entry point to using the [`queries`](https://tinybase.org/api/queries/) module is the [`createQueries`](https://tinybase.org/api/queries/functions/creation/createqueries/) function, which returns a new [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object. That object in turn has methods that let you create new query definitions, access their results directly, and register listeners for when those results change.
The [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) module provides a generalized query concept for [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data. If you just want to create and track metrics, indexes, or relationships between rows, you may prefer to use the dedicated [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/), [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), and [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) objects, which have simpler APIs.
## [The Basics](https://tinybase.org/guides/the-basics/)
Here's a simple example to show a [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object in action. The `pets` [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) has three [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects, each with two Cells. We create a query definition called `dogColors` which selects just one of those, and filters the Rows based on the value in the other:

```
import {createQueries, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog', color: 'brown'},
  felix: {species: 'cat', color: 'black'},
  cujo: {species: 'dog', color: 'black'},
});

const queries = createQueries[](https://tinybase.org/api/queries/functions/creation/createqueries/)(store);
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('dogColors', 'pets', ({select, where}) => {
  select('color');
  where('species', 'dog');
});

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('dogColors'));
// -> {fido: {color: 'brown'}, cujo: {color: 'black'}}

```

The key to understanding how the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) [API](https://tinybase.org/api/) works is in the `setQueryDefinition` line above. You provide a function which will be called with a selection of 'keyword' functions that you can use to define the query. These include `select`, `join`, `where`, `group`, and `having` and are described in the [TinyQL](https://tinybase.org/guides/using-queries/tinyql/) guide.
Note that, for getting data out, the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object has methods analogous to those in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, prefixed with the word 'Result':
  * The [`getResultTable`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`getTable`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/) method.
  * The [`getResultRowIds`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrowids/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`getRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getrowids/) method.
  * The [`getResultSortedRowIds`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultsortedrowids/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`getSortedRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getsortedrowids/) method.
  * The [`getResultRow`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrow/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`getRow`](https://tinybase.org/api/the-essentials/getting-data/getrow/) method.
  * The [`getResultCellIds`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultcellids/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`getCellIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcellids/) method.
  * The [`getResultCell`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultcell/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`getCell`](https://tinybase.org/api/the-essentials/getting-data/getcell/) method.


The same conventions apply for registering listeners with the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object, as described in the following section.
##  [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) Reactivity
As with [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/), [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), and [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/), [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) objects take care of tracking changes that will affect the query results. The familiar paradigm is used to let you add a listener to the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object. The listener fires when there's a change to any of the resulting data:

```
const listenerId = queries.addResultTableListener[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresulttablelistener/)('dogColors', () => {
  console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('dogColors'));
});
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'cujo', 'species', 'wolf');
// -> {fido: {color: 'brown'}}

```

Hopefully the pattern of the method naming is now familiar:
  * The [`addResultTableListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresulttablelistener/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`addTableListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addtablelistener/) method.
  * The [`addResultRowIdsListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresultrowidslistener/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`addRowIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addrowidslistener/) method.
  * The [`addResultSortedRowIdsListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresultsortedrowidslistener/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`addSortedRowIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addsortedrowidslistener/) method.
  * The [`addResultRowListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresultrowlistener/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`addRowListener`](https://tinybase.org/api/the-essentials/listening-for-changes/addrowlistener/) method.
  * The [`addResultCellIdsListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresultcellidslistener/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`addCellIdsListener`](https://tinybase.org/api/store/interfaces/store/store/methods/listener/addcellidslistener/) method.
  * The [`addResultCellListener`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresultcelllistener/) method is the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) equivalent of the [`addCellListener`](https://tinybase.org/api/the-essentials/listening-for-changes/addcelllistener/) method.


You can set multiple query definitions on each [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object. However, a given [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can only have one [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object associated with it. If you call this function twice on the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), your second call will return a reference to the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object created by the first.
Let's find out how to create different types of queries in the [TinyQL](https://tinybase.org/guides/using-queries/tinyql/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
