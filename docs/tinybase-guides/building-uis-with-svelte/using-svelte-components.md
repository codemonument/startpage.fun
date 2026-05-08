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
  * [Using Svelte Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-components/)


# Using Svelte Components
The view components in the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module let you declaratively display parts of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
These components wrap the reactive functions we described in the previous guide and render TinyBase data directly into a Svelte component tree. For common rendering tasks, they make it easy to compose UIs from [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data:

```
<script>
  import {createStore} from 'tinybase';
  import {CellView, RowView, TablesView} from 'tinybase/ui-svelte';

  const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({
    pets: {
      fido: {species: 'dog', color: 'brown'},
      felix: {species: 'cat', color: 'black'},
    },
  });
</script>

<!-- Renders the value of a single cell -->
<CellView tableId="pets" rowId="fido" cellId="species" {store} />

<!-- Renders all cells in a row concatenated -->
<RowView tableId="pets" rowId="fido" {store} />

<!-- Renders the entire tables structure -->
<TablesView {store} />

```

Like the [`ui-react`](https://tinybase.org/api/ui-react/) module components, these have intentionally plain default renderings. For example, RowView concatenates the rendered Cells in a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/), while TablesView concatenates the rendered [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). The `separator` and `debugIds` props are often useful while prototyping:

```
<RowView tableId="pets" rowId="fido" {store}>
  {#snippet separator()}
    <span>/</span>
  {/snippet}
</RowView>

<RowView tableId="pets" rowId="fido" {store} debugIds={true} />

```

## Customizing View Components
Instead of props like `cellComponent` or `rowComponent`, ui-svelte uses named snippet props whose names match the level being customized: `cell`, `row`, `table`, `value`, `slice`, or `checkpoint`.
This RowView example overrides how each [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) is rendered with a `cell` snippet:

```
<script>
  import {CellView, RowView} from 'tinybase/ui-svelte';

  let {store} = $props();
</script>

<RowView tableId="pets" rowId="fido" {store}>
  {#snippet cell(cellId)}
    <span class="cell">
      {cellId}: <CellView tableId="pets" rowId="fido" {cellId} {store} />
    </span>
  {/snippet}
</RowView>

```

Since the snippet receives only the varying [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) for that level, it stays concise and idiomatic. If you need more context, close over the surrounding props, as shown above with `tableId`, `rowId`, and `store`.
The full set of view components covers every level of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) hierarchy and the higher-level TinyBase objects. For the full [API](https://tinybase.org/api/) reference, see the [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module documentation.
## Summary
The [`ui-svelte`](https://tinybase.org/api/ui-svelte/) module favors named snippets over React-style component override props, but it serves the same purpose: helping you render TinyBase data declaratively. If you want browser-oriented table components next, proceed to the [Using Svelte DOM Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-dom-components/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
