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
  * [How The Demos Work](https://tinybase.org/guides/how-tinybase-is-built/how-the-demos-work/)


# How The Demos Work
The demos on the TinyBase site deserve a little explanation.
For example, take a look at the [Todo App v1 (the basics)](https://tinybase.org/demos/todo-app/todo-app-v1-the-basics/) demo. It contains a guide that explains each part of the demo step-by-step, whether HTML, JavaScript, or LESS. And then at the top of the page, the demo actually runs.
Rather than trying to keep prose and running demo in sync, something interesting here is that the code _in_ the guide is exactly what is compiled together at build time to create the running demo.
Basically all of the code from the guide is concatenated together into a single file: the HTML snippets at the start, then the JavaScript snippets inline, and then the LESS (processed into CSS) inline as styles. THe resulting 'single-file' HTML is then minified and attached to an iframe (via the `srcdoc` attribute) so that it is nicely sandboxed.
When a demo is an enhancement to an existing one (such as the [Todo App v2 (indexes)](https://tinybase.org/demos/todo-app/todo-app-v2-indexes/) demo), the guide will contain diffs. These are also actively applied to the previous code. It's a little tricky to make sure the diffs always apply cleanly when you update preceding demo guides, but it reduces repetition.
Finally, some client-side JavaScript makes it possible to launch the demos into StackBlitz via their POST [API](https://tinybase.org/api/).
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
