[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
  1. No results found


  * [Guides](https://tinybase.org/guides/)
  * [Demos](https://tinybase.org/demos/)
  * [API](https://tinybase.org/api/)
  * [GitHub](https://github.com/tinyplex/tinybase)


  * [TinyBase](https://tinybase.org/)
    * [Guides](https://tinybase.org/guides/)
      * [The Basics](https://tinybase.org/guides/the-basics/)
        * [Getting Started](https://tinybase.org/guides/the-basics/getting-started/)
        * [Creating A Store](https://tinybase.org/guides/the-basics/creating-a-store/)
        * [Writing To Stores](https://tinybase.org/guides/the-basics/writing-to-stores/)
        * [Reading From Stores](https://tinybase.org/guides/the-basics/reading-from-stores/)
        * [Listening To Stores](https://tinybase.org/guides/the-basics/listening-to-stores/)
        * [Transactions](https://tinybase.org/guides/the-basics/transactions/)
        * [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/)
        * [TinyBase And TypeScript](https://tinybase.org/guides/the-basics/tinybase-and-typescript/)
        * [Architectural Options](https://tinybase.org/guides/the-basics/architectural-options/)
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
      * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)
      * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [The Basics](https://tinybase.org/guides/the-basics/)
  * [Getting Started](https://tinybase.org/guides/the-basics/getting-started/)


# Getting Started
This guide gets you up and running quickly with TinyBase.
It is not intended to be a detailed introduction to installing JavaScript build- and run-time environments! It assumes that you have (or know how to have) a browser or Node-based development environment.
Note that TinyBase requires a reasonably modern environment, as it makes extensive use of contemporary JavaScript features. A regularly-updated browser and Node 16 (or above) are recommended. If you find you need older compatibility, there are additional transpilations in the `es6` folder of the distribution.
Let's go!
## TinyBase from a template
The easiest way to get started with TinyBase from scratch is to use a tool called `create-tinybase` to build simple demo apps on your local machine. Simply run the following command to get started:

```
npm create tinybase@latest

```

This tool provides the following templates to get started with:
  * Todos: a simple todo list app with support for adding, editing, and deleting tasks.
  * Chat: a real-time chat app with support for multiple rooms and message history.
  * [Drawing](https://tinybase.org/demos/drawing/): a collaborative drawing app with support for multiple users and real-time updates.
  * Tic-tac-toe: a turn-based tic-tac-toe game with computed game state and win detection.


You can also configure these templates with different options, such as using TypeScript or JavaScript, adding persistence with SQLite or PGlite, and enabling synchronization with a remote server or Durable Objects.
Check out the [create-tinybase documentation](https://github.com/tinyplex/create-tinybase) for more details.
## TinyBase in a browser
Another simple way to get started with TinyBase is to include it from a CDN in a web page. Create a file called `index.html`, for example:

```
<html>
  <head>
    <title>My First TinyBase App</title>
    <script type="importmap">
      {"imports": {"tinybase": "https://esm.sh/tinybase@8.2.0"}}
    </script>
    <script type="module">
      import {createStore} from 'tinybase';

      addEventListener('load', () => {
        const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
        store.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('v1', 'Hello');
        store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('t1', 'r1', 'c1', 'World');

        document.body.innerHTML =
          store.getValue[](https://tinybase.org/api/the-essentials/getting-data/getvalue/)('v1') + ' ' + store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('t1', 'r1', 'c1');
      });
    </script>
  </head>
  <body />
</html>

```

Open this file in your browser and you should see the words '[Hello World](https://tinybase.org/demos/hello-world/)' on the screen, each having been written to, and read from, a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
Note that the TinyBase module is pulled in from esm.sh, and the `importmap` allows you to use a regular import statement in the main script section.
## TinyBase in a Node application
TinyBase is packaged on NPM, so you can easily install it as a dependency for your application.

```
mkdir MyFirstTinyBaseApp
cd MyFirstTinyBaseApp
npm init -y
npm install tinybase

```

Create a file in this directory called `index.mjs`:

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
store.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('v1', 'Hello');
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('t1', 'r1', 'c1', 'World');
console.log(store.getValue[](https://tinybase.org/api/the-essentials/getting-data/getvalue/)('v1') + ' ' + store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('t1', 'r1', 'c1'));

```

Run this module script with:

```
node index.mjs

```

Again, you will see the words '[Hello World](https://tinybase.org/demos/hello-world/)' on the screen, having each been written to, and read from, a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
If that all worked, you are set up and ready to learn more about TinyBase! From here on, we will mostly show Node-based code snippets, but most should be easily translatable to run in a browser too.
Before we move on, you should be aware that the overall package includes a number of different versions of TinyBase, transpiled for different targets and formats. You may want to take a look at the [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/) guide if the code above isn't working in your environment - React Native in particular.
Let's move onto the [Creating A Store](https://tinybase.org/guides/the-basics/creating-a-store/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
