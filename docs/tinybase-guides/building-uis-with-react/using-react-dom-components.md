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
        * [Getting Started With ui-react](https://tinybase.org/guides/building-uis-with-react/getting-started-with-ui-react/)
        * [Using React Hooks](https://tinybase.org/guides/building-uis-with-react/using-react-hooks/)
        * [Using React Components](https://tinybase.org/guides/building-uis-with-react/using-react-components/)
        * [Using React DOM Components](https://tinybase.org/guides/building-uis-with-react/using-react-dom-components/)
        * [Using Context](https://tinybase.org/guides/building-uis-with-react/using-context/)
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
      * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)
      * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [Building UIs With React](https://tinybase.org/guides/building-uis-with-react/)
  * [Using React DOM Components](https://tinybase.org/guides/building-uis-with-react/using-react-dom-components/)


# Using React DOM Components
The reactive components in the [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/) module let you declaratively display parts of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in a web browser, where the ReactDOM module is available.
These are specifically designed to render HTML content in a browser. Here are a few representative examples:
The [`ValuesInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/valuesinhtmltable/) component is the simplest way to render [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) values:
![ValuesInHtmlTable example](https://tinybase.org/shots/valuesinhtmltable-react-demo.png)
The [`RelationshipInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/other-components/relationshipinhtmltable/) component renders related local and remote rows side by side:
![RelationshipInHtmlTable example](https://tinybase.org/shots/relationshipinhtmltable-react-demo.png)
Styling and class names are intentionally basic, since you are expected to style them with CSS to fit your app's overall visual language.
The easiest way to understand these components is to see them all in action in the [UI Components (React)](https://tinybase.org/demos/ui-components-react/) demos. There are table-based components for rendering [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/), sorted [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/), [`Values`](https://tinybase.org/api/store/type-aliases/store/values/), and so on:  
| Component  | Purpose  |   |  
| --- | --- | --- |  
| [`ValuesInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/valuesinhtmltable/)  | Renders [`Values`](https://tinybase.org/api/store/type-aliases/store/values/).  | [demo](https://tinybase.org/demos/ui-components-react/valuesinhtmltable-react/)  |  
| [`TableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/tableinhtmltable/)  | Renders a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/).  | [demo](https://tinybase.org/demos/ui-components-react/tableinhtmltable-react/)  |  
| [`SortedTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/store-components/sortedtableinhtmltable/)  | Renders a sorted [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), with optional interactivity.  | [demo](https://tinybase.org/demos/ui-components-react/sortedtableinhtmltable-react/)  |  
| [`SliceInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/other-components/sliceinhtmltable/)  | Renders a [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) from an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/).  | [demo](https://tinybase.org/demos/ui-components-react/sliceinhtmltable-react/)  |  
| [`RelationshipInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/other-components/relationshipinhtmltable/)  | Renders the local and remote [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) of a relationship  | [demo](https://tinybase.org/demos/ui-components-react/relationshipinhtmltable-react/)  |  
| [`ResultTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/queries-components/resulttableinhtmltable/)  | Renders a [`ResultTable`](https://tinybase.org/api/queries/type-aliases/result/resulttable/).  | [demo](https://tinybase.org/demos/ui-components-react/resulttableinhtmltable-react/)  |  
| [`ResultSortedTableInHtmlTable`](https://tinybase.org/api/ui-react-dom/functions/queries-components/resultsortedtableinhtmltable/)  | Renders a sorted [`ResultTable`](https://tinybase.org/api/queries/type-aliases/result/resulttable/), with optional interactivity.  | [demo](https://tinybase.org/demos/ui-components-react/resultsortedtableinhtmltable-react/)  |  
There are also editable components for individual Cells and [`Values`](https://tinybase.org/api/store/type-aliases/store/values/):  
| Component  | Purpose  |   |  
| --- | --- | --- |  
| [EditableCellView](https://tinybase.org/api/ui-react-dom/functions/store-components/editablecellview/)  | Renders a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and lets you change its type and value.  | [demo](https://tinybase.org/demos/ui-components-react/editablecellview-react/)  |  
| [EditableValueView](https://tinybase.org/api/ui-react-dom/functions/store-components/editablevalueview/)  | Renders a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) and lets you change its type and value.  | [demo](https://tinybase.org/demos/ui-components-react/editablevalueview-react/)  |  
The [`EditableValueView`](https://tinybase.org/api/ui-react-dom/functions/store-components/editablevalueview/) component shows the inline editing controls used by the editable components:
![EditableValueView example](https://tinybase.org/shots/editablevalueview-react-demo.png)
If you also want a development overlay for inspecting and editing Stores, [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/), [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/), and other TinyBase objects, use the [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/) module and the [(React)](https://tinybase.org/demos/ui-components-react/inspector-react/)demo.
We finish off this section with a best practice to avoid passing the global [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) down into components. Please proceed to the [Using Context](https://tinybase.org/guides/building-uis-with-react/using-context/) guide!
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
