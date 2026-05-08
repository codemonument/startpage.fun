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
        * [An Intro To Metrics](https://tinybase.org/guides/using-metrics/an-intro-to-metrics/)
        * [Building A UI With Metrics](https://tinybase.org/guides/using-metrics/building-a-ui-with-metrics/)
        * [Advanced Metric Definition](https://tinybase.org/guides/using-metrics/advanced-metric-definition/)
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
  * [Using Metrics](https://tinybase.org/guides/using-metrics/)
  * [An Intro To Metrics](https://tinybase.org/guides/using-metrics/an-intro-to-metrics/)


# An Intro To Metrics
This guide describes how the [`metrics`](https://tinybase.org/api/metrics/) module gives you the ability to create and track metrics based on the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects.
The main entry point to using the [`metrics`](https://tinybase.org/api/metrics/) module is the [`createMetrics`](https://tinybase.org/api/metrics/functions/creation/createmetrics/) function, which returns a new [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object. That object in turn has methods that let you create new [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) definitions, access the values of those metrics directly, and register listeners for when they change.
## [The Basics](https://tinybase.org/guides/the-basics/)
Here's a simple example to show a [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object in action. The `species` [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) has three [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects, each with a numeric `price` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/). We create a [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) definition called `highestPrice` which is the maximum value of that [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) across the whole [`Table`](https://tinybase.org/api/store/type-aliases/store/table/):

```
import {createMetrics, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {
  dog: {price: 5},
  cat: {price: 4},
  worm: {price: 1},
});

const metrics = createMetrics[](https://tinybase.org/api/metrics/functions/creation/createmetrics/)(store);
metrics.setMetricDefinition[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/)(
  'highestPrice', // metricId
  'species', //      tableId to aggregate
  'max', //          aggregation
  'price', //        cellId to aggregate
);

console.log(metrics.getMetric[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/getter/getmetric/)('highestPrice'));
// -> 5

```

The out-of-the-box aggregations you can use in the third parameter are `sum`, `avg`, `min`, and `max`, each of which should be self-explanatory.
##  [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) Reactivity
Things get interesting when the underlying data changes. The [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object takes care of tracking changes that will affect the [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/). A similar paradigm to that used on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is used to let you add a listener to the [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object. The listener fires when there's a new highest price:

```
const listenerId = metrics.addMetricListener[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/listener/addmetriclistener/)('highestPrice', () => {
  console.log(metrics.getMetric[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/getter/getmetric/)('highestPrice'));
});
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('species', 'horse', 'price', 20);
// -> 20

```

You can set multiple [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) definitions on each [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object. However, a given [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can only have one [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object associated with it. If you call this function twice on the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), your second call will return a reference to the [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object created by the first.
Let's find out how to include metrics in a user interface in the [Building A UI With Metrics](https://tinybase.org/guides/using-metrics/building-a-ui-with-metrics/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
