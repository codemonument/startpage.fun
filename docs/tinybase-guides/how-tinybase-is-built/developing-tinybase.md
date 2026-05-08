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
  * [Developing TinyBase](https://tinybase.org/guides/how-tinybase-is-built/developing-tinybase/)


# Developing TinyBase
This guide is for people who would like to checkout the TinyBase code and build it from source. It's a quick overview of the common workflows.
## Checking Out The Code
Check out the TinyBase repository with the following command (assuming you have all the dependent tools installed), and install the developer dependencies:

```
git clone git@github.com:tinyplex/tinybase.git
cd tinybase
npm install

```

You are good to get started! There are a number of gulp-based workflows available if you are working on TinyBase, and the following are some of the important ones:
## Compilation
To compile the Typescript into executable JavaScript you can either choose to do it quickly into one module for the purposes of testing:

```
npm run compileForTest

```

It should take a few seconds at most. Production-ready minified modules take a little longer:

```
npm run compileForProd

```

## Code Quality
Your IDE should be able to do this continuously. But should you wish to check that Typescript validates the entire codebase and that there are no type errors or unused exports, use the following:

```
npm run ts

```

Similarly, this task ensure the code lints and is all formatted correctly with prettier:

```
npm run lint

```

You can also check that there are no spelling mistakes in the code or documentation - which is very important!

```
npm run spell

```

## [Testing](https://tinybase.org/guides/how-tinybase-is-built/testing/)
There are three major sets of tests: unit tests, performance tests, and end-to-end tests of the demos in the TinyBase site. The unit tests, interestingly, include testing all the inline code and examples in the documentation.
Unit tests are the most common to run. If the code is already compiled, you can run these with:

```
npm run testUnit

```

Or, while you are iterating on code, the following will compile _and_ unit test it:

```
npm run compileAndTestUnit

```

Performance tests are very similar:

```
npm run testPerf

```

...or:

```
npm run compileAndTestPerf

```

Every performance test will render an ASCII chart which should be relatively flat. The idea here is that you can check visually that you haven't introduced a high time-complexity algorithm bug.
Finally, end-to-end testing validates that the demos on the website work. This requires you to compile for production, and generate the documentation first:

```
npm run compileForProd
npm run compileDocs
npm run testE2e

```

## [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/)
The end-to-end tests will start up their own web server to test the documentation site, but if you separately want to serve the TinyBase website, you can use:

```
npm run compileDocs
npm run serveDocs

```

This will make the website available on `localhost:8080` (and you probably want to run the `serveDocs` task in a separate window since it's long-running).
The `compileDocs` task involves generating all the [API](https://tinybase.org/api/) documentation which can be a little slow. If you just want to work on the website styling or interactivity you can instead just compile the assets:

```
npm run compileDocsAssetsOnly

```

And if you are working on just the demos or guides, the following generates just those:

```
npm run compileDocsPagesOnly

```

This removes all the [API](https://tinybase.org/api/) documentation though, so don't forget to run a full `compileDocs` task again before finally committing code.
## The Master Check
To make sure everything is in decent shape before committing or publishing to npm, this task is a superset of everything:

```
npm run prePublishPackage

```

That's it, and see you in the pull requests!
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
