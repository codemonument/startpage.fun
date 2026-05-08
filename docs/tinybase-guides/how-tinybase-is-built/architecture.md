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
      * [Using Indexes](https://tinybase.org/guides/using-indexes/)
      * [Using Relationships](https://tinybase.org/guides/using-relationships/)
      * [Using Checkpoints](https://tinybase.org/guides/using-checkpoints/)
      * [Using Queries](https://tinybase.org/guides/using-queries/)
      * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)
      * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
        * [Developing TinyBase](https://tinybase.org/guides/how-tinybase-is-built/developing-tinybase/)
        * [Architecture](https://tinybase.org/guides/how-tinybase-is-built/architecture/)
        * [Testing](https://tinybase.org/guides/how-tinybase-is-built/testing/)
        * [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/)
        * [How The Demos Work](https://tinybase.org/guides/how-tinybase-is-built/how-the-demos-work/)
        * [Credits](https://tinybase.org/guides/how-tinybase-is-built/credits/)
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
  * [Architecture](https://tinybase.org/guides/how-tinybase-is-built/architecture/)


# Architecture
The architecture of TinyBase is pretty straightforward. This guide runs through the main file structure and principles.
The top level directory contains lots of configuration files: for the package as a whole (`package.json`), for Vitest (`vitest.config.js`), for Prettier (`.prettierrc`) and for ESLint (`eslint.config.js`). TypeScript configuration is _not_ in the top-level directory, but is co-located with the `src` and `test` files independently.
`gulpfile.mjs` is an important file, since it describes all the build steps for the project, many of which are described in the [Developing TinyBase](https://tinybase.org/guides/how-tinybase-is-built/developing-tinybase/) guide.
## src
The main source code is in the top-level `src` directory, where there is a pair of files for each major module: the `.d.ts` files in the `@types` folder containing the Typescript definitions (and the source of truth for the documentation), and the `.ts` file containing the main logic.
Most modules have a similar pattern: a single creation function (such as the [`createStore`](https://tinybase.org/api/the-essentials/creating-stores/createstore/) function in the case of the [`store`](https://tinybase.org/api/store/) module), and a major interface that the returned object conforms to (such as the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) interface).
As well as those, there are a set of common functions and utilities in the `common` subdirectory, implementations used by the [`persisters`](https://tinybase.org/api/persisters/) module in the `persisters` subdirectory, and hooks and components for the [`ui-react`](https://tinybase.org/api/ui-react/) module in the `ui-react` subdirectory.
There is a top-level `tinybase.d.ts` and `tinybase.ts` pair to wrap everything together into a single convenient package: these contain just imports.
## test
There are Vitest unit tests for all modules in the `unit` subdirectory. The `perf` subdirectory contains the performance tests. The `e2e` subdirectory contains Puppeteer tests for checking all the demos on the website work.
There is more about TinyBase's testing in the following [Testing](https://tinybase.org/guides/how-tinybase-is-built/testing/) guide.
## site
This is the folder containing content and assets required for the TinyBase website. `demos` and `guides` subdirectories are self-explanatory and contain markdown files for site pages.
The `ui` folder contains some React components that are server-side rendered at build time to populate the `docs` directory which is used as a straightforward GitHub pages deployment.
[API](https://tinybase.org/api/) documentation comes from the `.d.ts` files by way of the TinyDocs library (which is essentially a custom wrapper around TypeDoc). Other static assets like CSS and JS are built into the final site from other folders in this directory.
## dist
Not checked in, but distributed via NPM, is a `dist` directory, which contains the `.d.ts` type definitions, the compiled `.js` files, and their compressed `.js.gz` equivalents. The `exports` field of the `package.json` wire everything together into the right place when people use the library.
These build configurations are all defined in the `compileForProd` task in `gulpfile.mjs`, and instructions for importing them are in the [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
