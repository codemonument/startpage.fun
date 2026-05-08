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
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [FAQ](https://tinybase.org/guides/faq/)


# FAQ
These are some of the frequently asked questions about TinyBase.
## When Should I Use TinyBase?
TinyBase is well suited for JavaScript applications where you need to manage structured data, such as those that have multiple 'records' to represent many of one type of object that might share fields. For example, in a Todo app, you can imagine using a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) for each todo. TinyBase makes it easy to set, get, respond to, and enumerate over this data and build user interfaces with it.
Generally TinyBase will be appropriate for use in a client-side application such as a browser or rich web site where size and performance are a premium, and you want some of the boilerplate for managing tabular data structures taken care of.
## Why Should I Use TinyBase?
You don't have to! There are many state management solutions for React and JavaScript applications. Many are more mature than TinyBase and have different (sometimes magical) approaches for dealing with reactivity.
TinyBase models how _I_ think about building applications, and I could not find any existing solutions that provided the mix of structure, reactivity, small footprint, and functionality that I imagined. TinyBase was born!
Maybe you share similar thoughts, and TinyBase will click with you. Maybe you don't and it won't. That's OK!
## When Should I Not Use TinyBase?
While it may be appropriate to use TinyBase in a server environment, it does not replace a fully-fledged database system. But there are plenty of options for integrating with databases like SQLite and Postgres.
## Can I Contribute To TinyBase?
Yes! You are very welcome to contribute to this project, though it is a spare-time endeavor so there is no guarantee around speed or certainty of contributions being accepted.
Please follow the formatting mandated by the Prettier and ESLint config and just ensure that test coverage remains at 100%!
## Are There Good Examples Of TinyBase In Use?
Please see the [demos](https://tinybase.org/demos/) for ideas!
## What If I Have Other Questions?
Please open a pull request or issue on GitHub and ask! Or ping the project on [Bluesky](https://bsky.app/profile/tinybase.bsky.social), [X](https://x.com/tinybasejs), or [Discord](https://discord.com/invite/mGz3mevwP8)
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
