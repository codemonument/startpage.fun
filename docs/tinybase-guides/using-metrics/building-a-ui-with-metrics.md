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
  * [Building A UI With Metrics](https://tinybase.org/guides/using-metrics/building-a-ui-with-metrics/)


# Building A UI With Metrics
This guide covers how the [`ui-react`](https://tinybase.org/api/ui-react/) module supports the [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object.
As with the React-based bindings to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, the [`ui-react`](https://tinybase.org/api/ui-react/) module provides both hooks and components to connect your metrics to your interface.
##  [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) Hooks
The [`useMetric`](https://tinybase.org/api/ui-react/functions/metrics-hooks/usemetric/) hook is very simple. It gets the current value of a [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/), and registers a listener so that any changes to that result will cause a re-render:

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createMetrics, createStore} from 'tinybase';
import {useMetric} from 'tinybase/ui-react';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {
  dog: {price: 5},
  cat: {price: 4},
  worm: {price: 1},
});
const metrics = createMetrics[](https://tinybase.org/api/metrics/functions/creation/createmetrics/)(store);
metrics.setMetricDefinition[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/)('highestPrice', 'species', 'max', 'price');
const App = () => <span>{useMetric[](https://tinybase.org/api/ui-react/functions/metrics-hooks/usemetric/)('highestPrice', metrics)}</span>;

const app = document.createElement('div');
const root = createRoot(app);
root.render(<App />);
console.log(app.innerHTML);
// -> '<span>5</span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('species', 'horse', 'price', 20);
console.log(app.innerHTML);
// -> '<span>20</span>'

```

The [`useCreateMetrics`](https://tinybase.org/api/ui-react/functions/metrics-hooks/usecreatemetrics/) hook is used to create a [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object within a React application with convenient memoization:

```
import {useCreateMetrics, useCreateStore} from 'tinybase/ui-react';

const App2 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {
      dog: {price: 5},
      cat: {price: 4},
      worm: {price: 1},
    }),
  );
  const metrics = useCreateMetrics[](https://tinybase.org/api/ui-react/functions/metrics-hooks/usecreatemetrics/)(store, (store) =>
    createMetrics[](https://tinybase.org/api/metrics/functions/creation/createmetrics/)(store).setMetricDefinition[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/)(
      'highestPrice',
      'species',
      'max',
      'price',
    ),
  );
  return <span>{metrics?.getMetric[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/getter/getmetric/)('highestPrice')}</span>;
};

root.render(<App2 />);
console.log(app.innerHTML);
// -> '<span>5</span>'

```

##  [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) View
The [`MetricView`](https://tinybase.org/api/ui-react/functions/metrics-components/metricview/) component renders the current value of a [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/), and registers a listener so that any changes to that result will cause a re-render.

```
import {MetricView} from 'tinybase/ui-react';

const App3 = () => (
  <div>
    <MetricView[](https://tinybase.org/api/ui-react/functions/metrics-components/metricview/) metricId="highestPrice" metrics={metrics} />
  </div>
);

root.render(<App3 />);
console.log(app.innerHTML);
// -> '<div>20</div>'

```

##  [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) Context
In the same way that a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can be passed into a [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component context and used throughout the app, a [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object can also be provided to be used by default:

```
import {Provider} from 'tinybase/ui-react';

const App4 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {
      dog: {price: 5},
      cat: {price: 4},
      worm: {price: 1},
    }),
  );
  const metrics = useCreateMetrics[](https://tinybase.org/api/ui-react/functions/metrics-hooks/usecreatemetrics/)(store, (store) =>
    createMetrics[](https://tinybase.org/api/metrics/functions/creation/createmetrics/)(store).setMetricDefinition[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/configuration/setmetricdefinition/)(
      'highestPrice',
      'species',
      'max',
      'price',
    ),
  );

  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) metrics={metrics}>
      <Pane />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const Pane = () => (
  <span>
    <MetricView[](https://tinybase.org/api/ui-react/functions/metrics-components/metricview/) metricId="highestPrice" />,{useMetric[](https://tinybase.org/api/ui-react/functions/metrics-hooks/usemetric/)('highestPrice')}
  </span>
);

root.render(<App4 />);
console.log(app.innerHTML);
// -> '<span>5,5</span>'

```

The `metricsById` prop can be used in the same way that the `storesById` prop is, to let you reference multiple [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) objects by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).
## Summary
The support for [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) objects in the [`ui-react`](https://tinybase.org/api/ui-react/) module is very similar to that for the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object, making it easy to attach [`Metric`](https://tinybase.org/api/metrics/type-aliases/metric/metric/) results to your user interface.
We finish off this section about the [`metrics`](https://tinybase.org/api/metrics/) module with the [Advanced Metric Definition](https://tinybase.org/guides/using-metrics/advanced-metric-definition/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
