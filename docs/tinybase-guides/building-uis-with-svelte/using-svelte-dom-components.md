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
  * [Using Svelte DOM Components](https://tinybase.org/guides/building-uis-with-svelte/using-svelte-dom-components/)


# Using Svelte DOM Components
The reactive components in the [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/) module let you declaratively display parts of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in a web browser, where Svelte's DOM runtime is available.
These are specifically designed to render HTML table content in a browser. Here are a few representative examples:
The [`ValuesInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/valuesinhtmltable/) component is the simplest way to render [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) values:
![ValuesInHtmlTable example](https://tinybase.org/shots/valuesinhtmltable-svelte-demo.png)
The [`RelationshipInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/other-components/relationshipinhtmltable/) component renders related local and remote rows side by side:
![RelationshipInHtmlTable example](https://tinybase.org/shots/relationshipinhtmltable-svelte-demo.png)
Styling and class names are intentionally basic, since you are expected to style them with CSS to fit your app's overall visual language.
The easiest way to understand these components is to see them all in action in the [UI Components (Svelte)](https://tinybase.org/demos/ui-components-svelte/) demos. There are table-based components for rendering [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/), sorted [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/), [`Values`](https://tinybase.org/api/store/type-aliases/store/values/), and so on:  
| Component  | Purpose  |   |  
| --- | --- | --- |  
| [`ValuesInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/valuesinhtmltable/)  | Renders [`Values`](https://tinybase.org/api/store/type-aliases/store/values/).  | [demo](https://tinybase.org/demos/ui-components-svelte/valuesinhtmltable-svelte/)  |  
| [`TableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/tableinhtmltable/)  | Renders a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/).  | [demo](https://tinybase.org/demos/ui-components-svelte/tableinhtmltable-svelte/)  |  
| [`SortedTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/sortedtableinhtmltable/)  | Renders a sorted [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), with optional interactivity.  | [demo](https://tinybase.org/demos/ui-components-svelte/sortedtableinhtmltable-svelte/)  |  
| [`SliceInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/other-components/sliceinhtmltable/)  | Renders a [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) from an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/).  | [demo](https://tinybase.org/demos/ui-components-svelte/sliceinhtmltable-svelte/)  |  
| [`RelationshipInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/other-components/relationshipinhtmltable/)  | Renders the local and remote [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) of a relationship.  | [demo](https://tinybase.org/demos/ui-components-svelte/relationshipinhtmltable-svelte/)  |  
| [`ResultTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/queries-components/resulttableinhtmltable/)  | Renders a [`ResultTable`](https://tinybase.org/api/queries/type-aliases/result/resulttable/).  | [demo](https://tinybase.org/demos/ui-components-svelte/resulttableinhtmltable-svelte/)  |  
| [`ResultSortedTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/queries-components/resultsortedtableinhtmltable/)  | Renders a sorted [`ResultTable`](https://tinybase.org/api/queries/type-aliases/result/resulttable/), with optional interactivity.  | [demo](https://tinybase.org/demos/ui-components-svelte/resultsortedtableinhtmltable-svelte/)  |  
There are also editable components for individual Cells and [`Values`](https://tinybase.org/api/store/type-aliases/store/values/):  
| Component  | Purpose  |   |  
| --- | --- | --- |  
| [`EditableCellView`](https://tinybase.org/api/ui-react-dom/functions/store-components/editablecellview/)  | Renders a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and lets you change its type and value.  | [demo](https://tinybase.org/demos/ui-components-svelte/editablecellview-svelte/)  |  
| [`EditableValueView`](https://tinybase.org/api/ui-react-dom/functions/store-components/editablevalueview/)  | Renders a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) and lets you change its type and value.  | [demo](https://tinybase.org/demos/ui-components-svelte/editablevalueview-svelte/)  |  
The [`EditableValueView`](https://tinybase.org/api/ui-react-dom/functions/store-components/editablevalueview/) component shows the inline editing controls used by the editable components:
![EditableValueView example](https://tinybase.org/shots/editablevalueview-svelte-demo.png)
Like ui-svelte itself, the module uses Svelte components rather than React components, so customization is done by passing component constructors, not functions that return JSX.
[`Having`](https://tinybase.org/api/queries/type-aliases/definition/having/) said that, the demos intentionally mirror the React DOM set so it is easy to compare the framework-specific code side by side.
If you also want a development overlay for inspecting and editing Stores, [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/), [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/), and other TinyBase objects, use the [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/) module and the [(Svelte)](https://tinybase.org/demos/ui-components-svelte/inspector-svelte/)demo.
The final guide in this section shows how Provider context keeps TinyBase objects out of your component props. Please proceed to the [Using Context](https://tinybase.org/guides/building-uis-with-svelte/using-context/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
