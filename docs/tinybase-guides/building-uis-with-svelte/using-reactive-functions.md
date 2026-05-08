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
  * [Using Reactive Functions](https://tinybase.org/guides/building-uis-with-svelte/using-reactive-functions/)


# Using Reactive Functions
Every reactive function in the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module returns a reactive object with a `current` property that automatically updates any part of your template that reads it when the underlying [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data changes.
Here is the [`getCell`](https://tinybase.org/api/ui-svelte/functions/getter/getcell/) function reading the color of a pet and displaying it in a paragraph:

```
<script>
  import {createStore} from 'tinybase';
  import {getCell} from 'tinybase/ui-svelte';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
  const color = getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'color', store);
</script>

<p>Color: {color.current}</p>
<!-- Renders: <p>Color: brown</p> -->

```

When the color cell is updated elsewhere in the application, the paragraph immediately re-renders to show the new value. You don't need to add any manual subscriptions, nor `$:` labels, nor `onDestroy` cleanup. The reactive object registers and removes TinyBase listeners automatically using Svelte's reactivity lifecycle.
There are reactive functions corresponding to every [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) reading method. For example:  
| TinyBase [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)  | Svelte Reactive Function  |  
| --- | --- |  
|  [`getValues`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/) method  |  [`getValues`](https://tinybase.org/api/ui-svelte/functions/getter/getvalues/) function  |  
|  [`getValueIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalueids/) method  |  [`getValueIds`](https://tinybase.org/api/ui-svelte/functions/getter/getvalueids/) function  |  
|  [`getValue`](https://tinybase.org/api/the-essentials/getting-data/getvalue/) method  |  [`getValue`](https://tinybase.org/api/ui-svelte/functions/getter/getvalue/) function  |  
|  [`getTables`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/) method  |  [`getTables`](https://tinybase.org/api/ui-svelte/functions/getter/gettables/) function  |  
|  [`getTableIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettableids/) method  |  [`getTableIds`](https://tinybase.org/api/ui-svelte/functions/getter/gettableids/) function  |  
|  [`getTable`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/) method  |  [`getTable`](https://tinybase.org/api/ui-svelte/functions/getter/gettable/) function  |  
|  [`getRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getrowids/) method  |  [`getRowIds`](https://tinybase.org/api/ui-svelte/functions/getter/getrowids/) function  |  
|  [`getSortedRowIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getsortedrowids/) method  |  [`getSortedRowIds`](https://tinybase.org/api/ui-svelte/functions/getter/getsortedrowids/) function  |  
|  [`getRow`](https://tinybase.org/api/the-essentials/getting-data/getrow/) method  |  [`getRow`](https://tinybase.org/api/ui-svelte/functions/getter/getrow/) function  |  
|  [`getCellIds`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getcellids/) method  |  [`getCellIds`](https://tinybase.org/api/ui-svelte/functions/getter/getcellids/) function  |  
|  [`getCell`](https://tinybase.org/api/the-essentials/getting-data/getcell/) method  |  [`getCell`](https://tinybase.org/api/ui-svelte/functions/getter/getcell/) function  |  
There are also reactive functions for the derived TinyBase data or objects. Examples include the [`getMetric`](https://tinybase.org/api/ui-svelte/functions/getter/getmetric/) function, [`getSliceRowIds`](https://tinybase.org/api/ui-svelte/functions/getter/getslicerowids/) function, or [`getResultTable`](https://tinybase.org/api/ui-svelte/functions/getter/getresulttable/) function, and so on.
[Functions](https://tinybase.org/api/store/functions/) that access higher-level TinyBase objects, like the [`getStore`](https://tinybase.org/api/ui-svelte/functions/getter/getstore/) function, [`getMetrics`](https://tinybase.org/api/ui-svelte/functions/getter/getmetrics/) function, and [`getQueries`](https://tinybase.org/api/ui-svelte/functions/getter/getqueries/) function, are different: rather than returning a reactive object, they return TinyBase objects directly from a Provider context.
## Listener [Functions](https://tinybase.org/api/store/functions/)
The module also includes listener functions such as onCell, onRowIds, or onStartTransaction. These are the side-effect-oriented counterpart to the reactive functions: use them when you need to run code in response to TinyBase changes, rather than read a `current` value in the template.
Most UI rendering can be built with reactive functions and view components alone. You should only need listener functions when you need behavior such as logging, analytics, imperative synchronization, or other non-render side effects.
## Reactive Parameters With [`MaybeGetter`](https://tinybase.org/api/ui-svelte/type-aliases/identity/maybegetter/)
All function parameters accept either a plain value or a reactive getter function. This is the `[`MaybeGetter`](/api/ui-svelte/type-aliases/identity/maybegetter/)<T>` type: `T | (() => T)`.
Passing a getter function that reads a `$state` variable makes the function reactively track which data it fetches. In this example, `rowId` is a prop and the function re-fetches automatically when it changes:

```
<script>
  import {getCell} from 'tinybase/ui-svelte';

  let {rowId, store} = $props();
  const color = getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', () => rowId, 'color', store);
</script>

<p>{color.current}</p>

```

Without the `() => rowId` wrapper, changing the `rowId` prop would not cause the function to re-read the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) for the new row.
## Writable State With `getCell`
The `getCell` and `getValue` functions expose a writable `current` property for scalar values. Writing to it calls `store.[`setCell`](/api/the-essentials/setting-data/setcell/)()` or `store.[`setValue`](/api/the-essentials/setting-data/setvalue/)()`. This makes Svelte's `bind:value` directive work for two-way binding:

```
<script>
  import {createStore} from 'tinybase';
  import {getCell} from 'tinybase/ui-svelte';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
  const color = getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'color', store);
</script>

<input bind:value={color.current} />
<p>Current color: {color.current}</p>

```

Typing in the `<input>` updates the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), which is immediately reflected in the paragraph without any additional event handling.
## Summary
The reactive functions in the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module make it easy to connect your user interface to TinyBase [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data, while listener functions let you handle side-effects declaratively. Next, let's look at the view components in the [Using Svelte Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-components/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
