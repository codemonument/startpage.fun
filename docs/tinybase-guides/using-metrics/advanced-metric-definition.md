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
  * [Advanced Metric Definition](https://tinybase.org/guides/using-metrics/advanced-metric-definition/)


# Advanced Metric Definition
This guide describes how the [`metrics`](https://tinybase.org/api/metrics/) module let you create more complex types of metrics based on the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects.
## Advanced Aggregations
The four standard aggregation types you can use when defining a [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) are `sum`, `avg`, `min`, and `max`, but often you will want to create more interesting aggregations of the data in your [`Table`](https://tinybase.org/api/store/type-aliases/store/table/).
Instead of a string as the third parameter of the [`setMetricDefinition`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/) method, you can provide an [`Aggregate`](https://tinybase.org/api/queries/type-aliases/aggregators/aggregate/) parameter. This is simply a function that takes an array of numbers and returns the aggregation. So for example, you could create a [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) which is the hypotenuse of the numeric `distance` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) values in every [`Row`](https://tinybase.org/api/store/type-aliases/store/row/):

```
import {createMetrics, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('dimensions', {
  x: {distance: 1},
  y: {distance: 2},
  z: {distance: 2},
});

const metrics = createMetrics[](https://tinybase.org/api/metrics/functions/creation/createmetrics/)(store);
metrics.setMetricDefinition[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/)(
  'hypotenuse', //                            metricId
  'dimensions', //                            tableId to aggregate
  (distances) => Math.hypot(...distances), // custom aggregation
  'distance', //                              cellId to aggregate
);

console.log(metrics.getMetric[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/getter/getmetric/)('hypotenuse'));
// -> 3

```

Such a [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) will have a performance complexity linear with the size of the [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), any time any value changes. But some aggregations have shortcuts: if a contributing value is updated, you can sometimes calculate the new value for the metric without scanning every value again. For example, if your aggregation is a sum, and an additional [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) is added, its value can simply be added to the previous total.
There are three types of shortcuts you can add if the aggregation can benefit from them, and they can be provided as the final three parameters of the [`setMetricDefinition`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/) method. These describe how to change the overall [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) when a number is added, removed, or replaced.
Our hypotenuse example can benefit. If a new value is added to the list of numbers to be aggregated, square the current result, add the square of the new number, and square root the total. This is then constant cost, regardless of the number of [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects being aggregated:

```
const sqr = (num) => num * num;
const sqrt = Math.sqrt;
metrics.setMetricDefinition[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/)(
  'fasterHypotenuse', //                      metricId
  'dimensions', //                            tableId to aggregate
  (distances) => Math.hypot(...distances), // custom aggregation
  'distance', //                              cellId to aggregate
  (metric, add) => sqr(sqr(metric) + sqr(add)), //                 add
  (metric, rem) => sqr(sqr(metric) - sqr(rem)), //                 remove
  (metric, add, rem) => sqr(sqr(metric) + sqr(add) - sqr(rem)), // replace
);

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('dimensions', 'x', 'distance', 3);
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('dimensions', 'z', 'distance', 6);
console.log(metrics.getMetric[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/getter/getmetric/)('hypotenuse'));
// -> 7

```

## Getting Custom [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) From Rows
By default, our [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) definitions have named a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) which contains a numeric value - like the `distance` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the example above. Sometimes you may wish to derive a number for each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) that is not in a single [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/), and in this case you can replace the fourth parameter with a function which can process the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in any way you wish.
In this example, we average the density of a set of cuboids, which means that each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/)'s contributory number needs to be the mass divided by the volume:

```
store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('cuboids', {
  0: {mass: 10, volume: 5},
  1: {mass: 12, volume: 3},
  2: {mass: 24, volume: 4},
});

metrics.setMetricDefinition[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/)(
  'averageDensity', //                                 metricId
  'cuboids', //                                        tableId to aggregate
  'avg', //                                            aggregation
  (getCell) => getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('mass') / getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('volume'), // => number to aggregate
);

console.log(metrics.getMetric[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/getter/getmetric/)('averageDensity'));
// -> 4

```

Of course it is possible to combine both advanced aggregations and getting custom values from each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/):

```
metrics.setMetricDefinition[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/)(
  'countOfDenseCuboids',
  'cuboids',
  (densities) => densities.filter((density) => density > 5).length,
  (getCell) => getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('mass') / getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('volume'),
);

console.log(metrics.getMetric[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/getter/getmetric/)('countOfDenseCuboids'));
// -> 1

```

And with that, we have covered most of the basics of using the [`metrics`](https://tinybase.org/api/metrics/) module. Let's move on to a very similar module for indexing data, as covered in the [Using Indexes](https://tinybase.org/guides/metrics-and-indexes/using-indexes/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
