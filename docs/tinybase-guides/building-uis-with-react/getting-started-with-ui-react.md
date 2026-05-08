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
  * [Getting Started With ui-react](https://tinybase.org/guides/building-uis-with-react/getting-started-with-ui-react/)


# Getting Started With ui-react
To build React-based user interfaces with TinyBase, you will need to install the [`ui-react`](https://tinybase.org/api/ui-react/) module in addition to the main module, and, of course, React itself.
If you want to see the same pattern in a runnable site demo, take a look at the [Hello World (React)](https://tinybase.org/demos/hello-world/hello-world-react/) demo.
For a fuller example using indexes and persistence, see the [Countries (React)](https://tinybase.org/demos/countries/countries-react/) demo.
For example, in an HTML file, you can get started with boilerplate that might look like this:

```
<html>
  <head>
    <title>My First TinyBase App</title>
    <script type="importmap">
      {
        "imports": {
          "tinybase": "https://esm.sh/tinybase@8.2.0",
          "tinybase/ui-react": "https://esm.sh/tinybase@8.2.0/ui-react",
          "react": "https://esm.sh/react@^19.2.5",
          "react/jsx-runtime": "https://esm.sh/react@^19.2.5/jsx-runtime",
          "react-dom/client": "https://esm.sh/react-dom@^19.2.5/client"
        }
      }
    </script>
    <script type="module" src="https://esm.sh/tsx"></script>
    <script type="text/jsx">
      import {createStore} from "tinybase";
      import {CellView} from "tinybase/ui-react";
      import {createRoot} from "react-dom/client";
      import React from "react";

      const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
      store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('t1', 'r1', 'c1', 'Hello World');
      createRoot(document.body).render(
        <CellView store={store} tableId="t1" rowId="r1" cellId="c1" />,
      );
    </script>
  </head>
  <body />
</html>

```

Open this file in your browser and you should see the words '[Hello World](https://tinybase.org/demos/hello-world/)' on the screen, having been written to, and read from, a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), and then rendered by the [`CellView`](https://tinybase.org/api/ui-react/functions/store-components/cellview/) component from the [`ui-react`](https://tinybase.org/api/ui-react/) module.
Note that the standalone `https://esm.sh/tsx` script and `text/jsx` type on the script here are merely to support JSX in the browser and for the purposes of illustrating how to get started quickly. In a production environment you should pre-compile and your JSX and modules to create a bundled browser app. If you're bundling the whole app, you can of course import the [`ui-react`](https://tinybase.org/api/ui-react/) module something like this.
Boilerplate aside, let's move on to understand how to use hooks in the [`ui-react`](https://tinybase.org/api/ui-react/) module, with the [Using React Hooks](https://tinybase.org/guides/building-uis-with-react/using-react-hooks/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
