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
  * [Using React Components](https://tinybase.org/guides/building-uis-with-react/using-react-components/)


# Using React Components
The reactive components in the [`ui-react`](https://tinybase.org/api/ui-react/) module let you declaratively display parts of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
These are all essentially convenience wrappers around the hooks we described in the [Using React Hooks](https://tinybase.org/guides/building-uis-with-react/using-react-hooks/) guide, but make it easy to build hierarchical component trees from the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data. For example, the [`ValuesView`](https://tinybase.org/api/ui-react/functions/store-components/valuesview/) component wraps around the [`useValueIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usevalueids/) hook to render child [`ValueView`](https://tinybase.org/api/ui-react/functions/store-components/valueview/) components. Similarly, the [`TablesView`](https://tinybase.org/api/ui-react/functions/store-components/tablesview/) component wraps around the [`useTableIds`](https://tinybase.org/api/ui-react/functions/store-hooks/usetableids/) hook to render child [`TableView`](https://tinybase.org/api/ui-react/functions/store-components/tableview/) components, which in turn can render child [`RowView`](https://tinybase.org/api/ui-react/functions/store-components/rowview/) components and [`CellView`](https://tinybase.org/api/ui-react/functions/store-components/cellview/) components.
In this simple example, the [`CellView`](https://tinybase.org/api/ui-react/functions/store-components/cellview/) component is used to render the color [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in a `<span>`:

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createStore} from 'tinybase';
import {CellView} from 'tinybase/ui-react';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
const App = () => (
  <span>
    <CellView[](https://tinybase.org/api/ui-react/functions/store-components/cellview/) tableId="pets" rowId="fido" cellId="color" store={store} />
  </span>
);

const app = document.createElement('div');
const root = createRoot(app);
root.render(<App />);
console.log(app.innerHTML);
// -> '<span>brown</span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'walnut');
console.log(app.innerHTML);
// -> '<span>walnut</span>'

```

These components have very plain default renderings, and don't even generate HTML or use ReactDOM. This means that the [`ui-react`](https://tinybase.org/api/ui-react/) module works just as well with React Native or other React-based rendering systems.
It does mean though, that if you use the default [`RowView`](https://tinybase.org/api/ui-react/functions/store-components/rowview/) component, you will simply render a concatenation of the values of its Cells:

```
import {RowView} from 'tinybase/ui-react';

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'weight', 42);
const App2 = () => (
  <span>
    <RowView[](https://tinybase.org/api/ui-react/functions/store-components/rowview/) tableId="pets" rowId="fido" store={store} />
  </span>
);

root.render(<App2 />);
console.log(app.innerHTML);
// -> '<span>walnut42</span>'

```

This is not a particularly nice rendering! Even for the purposes of debugging data, you may want to separate the values, and this can be cheaply done with the `separator` prop:

```
const App3 = () => (
  <span>
    <RowView[](https://tinybase.org/api/ui-react/functions/store-components/rowview/) tableId="pets" rowId="fido" store={store} separator="," />
  </span>
);

root.render(<App3 />);
console.log(app.innerHTML);
// -> '<span>walnut,42</span>'

```

Going further, the `debugIds` prop helps you see the structure of the objects with their [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/).

```
const App4 = () => (
  <span>
    <RowView[](https://tinybase.org/api/ui-react/functions/store-components/rowview/) tableId="pets" rowId="fido" store={store} debugIds={true} />
  </span>
);

root.render(<App4 />);
console.log(app.innerHTML);
// -> '<span>fido:{color:{walnut}weight:{42}}</span>'

```

These are slightly more readable, but are still not really appropriate to actually build a user interface! For that we need to understand how to customize components.
## Customizing Components
More likely than JSON-like strings, you will want to customize or compose the rendering of parts of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) for your UI. The way this works is that each of the react-ui module components has a prop that takes an alternative rendering for its children.
For example, the [`TableView`](https://tinybase.org/api/ui-react/functions/store-components/tableview/) component takes a `rowComponent` prop that lets you indicate how each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) should be rendered, and the [`RowView`](https://tinybase.org/api/ui-react/functions/store-components/rowview/) component takes a `cellComponent` prop that lets you indicate how each [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) should be rendered. The component passed in to such props itself needs to be capable of taking the same props that the default component would have.
To render the contents of a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) into an HTML table, therefore, you might set the components up like this:

```
import {TableView} from 'tinybase/ui-react';

const MyTableView = (props) => (
  <table>
    <tbody>
      <TableView[](https://tinybase.org/api/ui-react/functions/store-components/tableview/) {...props} rowComponent={MyRowView} />
    </tbody>
  </table>
);

const MyRowView = (props) => (
  <tr>
    <th>{props.rowId}</th>
    <RowView[](https://tinybase.org/api/ui-react/functions/store-components/rowview/) {...props} cellComponent={MyCellView} />
  </tr>
);

const MyCellView = (props) => (
  <td>
    <CellView[](https://tinybase.org/api/ui-react/functions/store-components/cellview/) {...props} />
  </td>
);

const App5 = () => <MyTableView store={store} tableId="pets" />;
root.render(<App5 />);
console.log(app.innerHTML);
// -> '<table><tbody><tr><th>fido</th><td>walnut</td><td>42</td></tr></tbody></table>'

```

That is now starting to resemble a useful UI for tabular data! A final touch here is that each view can also let you create custom props for each of its children. For example the `getRowComponentProps` prop of the [`TableView`](https://tinybase.org/api/ui-react/functions/store-components/tableview/) component should be a function that returns additional props that will be passed to each child. See the [API](https://tinybase.org/api/) documentation for more examples.
## Summary
The components available in the [`ui-react`](https://tinybase.org/api/ui-react/) module make it easy to enumerate over objects to build your user interface with customized, composed components. This will work wherever the React module does, including React Native.
When you are building an app in a web browser, however, where the ReactDOM module is available, TinyBase includes pre-made HTML components. We will look at these in the next [Using React DOM Components](https://tinybase.org/guides/building-uis-with-react/using-react-dom-components/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
