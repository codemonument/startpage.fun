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
  * [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/)


# Importing TinyBase
This guide provides an aside about importing TinyBase into your application.
## The Simplest Imports
The simplest import of TinyBase is:

```
import {createMetrics, createStore} from 'tinybase';

```

This will get you an ESNext, ESM, non-minified import of the main `tinybase` module, (which contains most of the core functionality), and should be enough to get started. You may also want to import specific persister, synchronizer, or UI modules:

```
import {createSessionPersister} from 'tinybase/persisters/persister-browser';
import {createWsSynchronizer} from 'tinybase/synchronizers/synchronizer-ws-client';
import {useCell} from 'tinybase/ui-react';
import {TableInHtmlTable} from 'tinybase/ui-react-dom';

// ... etc

```

All the example code throughout these guides and the [API](https://tinybase.org/api/) documentation are shown with the correct imports so that you can be clear about which functions and types come from which modules.
## Using TinyBase Submodules
The `tinybase` module is the master package of most of the core functionality. It includes the following submodules:
  * The [`store`](https://tinybase.org/api/store/) module
  * The [`metrics`](https://tinybase.org/api/metrics/) module
  * The [`indexes`](https://tinybase.org/api/indexes/) module
  * The [`relationships`](https://tinybase.org/api/relationships/) module
  * The [`queries`](https://tinybase.org/api/queries/) module
  * The [`checkpoints`](https://tinybase.org/api/checkpoints/) module
  * The [`mergeable-store`](https://tinybase.org/api/mergeable-store/) module
  * The [`common`](https://tinybase.org/api/common/) module


Since many of the submodules above share compiled-in dependencies, the master package is smaller to include than including all of the submodules separately.
However, for a very minimal set of submodules, you may save size by including them piecemeal. If you only wanted a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and a [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object, for example, you could import them alone like this:

```
import {createMetrics} from 'tinybase/metrics';
import {createStore} from 'tinybase/store';

// ...

```

With a good minifier in your application bundler, however, you may find that this level of granularity is unnecessary, and that you can just stick with the overall `tinybase` module for most things.
The submodules for various [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) and [`Synchronizer`](https://tinybase.org/api/the-essentials/synchronizing-stores/synchronizer/) types are _not_ included in the main tinybase module, but should be imported separately from inside the `persisters` and `synchronizers` folders. See the [Persistence](https://tinybase.org/guides/persistence/) and [Synchronization](https://tinybase.org/guides/synchronization/) guides, respectively, for more details.
## The `omni` Module
There is also an `omni` module that is an explicit superset of everything in the TinyBase ecosystem. It exports the features and functionality of every `tinybase/*` module, including every persister, every synchronizer, and every UI component. This is useful for applications that want to use multiple facets of the overall TinyBase ecosystem and also benefit from the fact they share a lot of code internally.

```
import {createStore, createSqliteBunPersister} from 'tinybase/omni';

```

However, it should go without saying that you should only use the `omni` module if you have an aggressive tree-shaking bundler that can remove all the persisters, synchronizers, and so on, that you do _not_ use. Experiment with different bundler configurations to see what works best for your usage.
## Targets And Formats
Prior to TinyBase v6.0, the NPM package included a number of different versions of each module, transpiled for different targets and formats. From v6.0 onwards, only ESNext, ESM modules are included in the main package.
However, both non-minified and minified versions are available: the default is non-minified code, but minified versions are available in the top-level `min` folder:

```
import {createStore} from 'tinybase'; // non-minified
// or
import {createStore} from 'tinybase/min'; // minified

```

## Indicating Schema-based Typing
As we will see in more details in the following [TinyBase And TypeScript](https://tinybase.org/guides/the-basics/tinybase-and-typescript/) guide, it is possible to use schema-aware type definitions by appending `with-schemas` to the very end of the path like this:

```
import {createStore} from 'tinybase/with-schemas';

// NB the 'with-schemas'

```

## Putting It All Together
As long as you put the optional parts of the path in the right order, you can access all the valid combinations of minification, sub-module and schema support. The syntax for the import (split onto different lines for clarity) is:

```
tinybase
  [ /min ]
    [ /store | /metrics | /queries | ... ]
      [ /with-schemas ]

```

For example, this is a non-exhaustive list of options that are all valid:  
| Import  | Minified  | Sub-module  | With schemas  |  
| --- | --- | --- | --- |  
| `import {...} from 'tinybase';`  | no  |   | no  |  
| `import {...} from 'tinybase/with-schemas';`  | no  |   | yes  |  
| `import {...} from 'tinybase/min';`  | yes  |   | no  |  
| `import {...} from 'tinybase/store/with-schemas'`  | no  | [`store`](https://tinybase.org/api/store/)  | no  |  
| `import {...} from 'tinybase/min/store/with-schemas'`  | yes  | [`store`](https://tinybase.org/api/store/)  | yes  |  
| ...  |   |   |   |  
If all else fails, take a look into the package folder and see what's what!
## React Native
If you are using [React Native](https://reactnative.dev/) - for example with [Expo](https://expo.dev/) - be aware that the [Metro](https://facebook.github.io/metro/) bundler does not currently support module resolution very well. You may have to add in the exact file path to be explicit about your imports:

```
import {createStore} from 'tinybase/index.js';
import {useCell} from 'tinybase/ui-react/index.js';

```

This situation is evolving however, so you may find these extra file names unnecessary as bundler support improves.
Check out the [Expo TinyBase example](https://github.com/expo/examples/tree/master/with-tinybase) for a simple working template to get started with TinyBase and React Native.
## ESlint Resolver Issues
There is a [known issue](https://github.com/import-js/eslint-plugin-import/issues/1810) with the `no-unresolved` ESlint rule whereby it does not understand the `exports` section of the TinyBase `package.json`. You may wish to disable that rule if you are getting false positives using TinyBase submodules.
## Enough!
OK, we're done with the `import` shenanigans. Let's briefly look at how TinyBase benefits from using TypeScript to improve your developer experience in the TinyBase and TypeScript guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
