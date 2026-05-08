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
        * [Using A MergeableStore](https://tinybase.org/guides/synchronization/using-a-mergeablestore/)
        * [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/)
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
  * [Synchronization](https://tinybase.org/guides/synchronization/)


# Synchronization
These guides discuss how to merge and synchronize data in [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) instances using synchronization techniques.
The basic building block of TinyBase's synchronization system is the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) interface. This is a sub-type of the regular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) - so all your existing calls to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) methods will be unchanged - but it records additional metadata as the data is changed so that potential conflicts can be reconciled. See the [Using A MergeableStore](https://tinybase.org/guides/synchronization/using-a-mergeablestore/) guide for more details.
On top of this, the synchronizer module framework uses this metadata to let you synchronize [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data between different devices, systems, or subsystems. Synchronization can take place over WebSockets, the browser's BroadcastChannel [API](https://tinybase.org/api/), or other custom media. See the [Using A Synchronizer](https://tinybase.org/guides/synchronization/using-a-synchronizer/) guide for more details.
It's possible - and in fact recommended! - to use both persistence and synchronization at the same time. You will often want to persist changes to your TinyBase data between browser reloads even when offline, for example, and then synchronize to other devices or a server once the device comes back online.
See also the [Todo App v6 (collaboration)](https://tinybase.org/demos/todo-app/todo-app-v6-collaboration/) demo for a simple example of adding synchronization between clients to an app.
## Using A MergeableStore
The basic building block of TinyBase's synchronization system is the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) interface. [Read more](https://tinybase.org/guides/synchronization/using-a-mergeablestore/).
## Using A Synchronizer
The synchronizer module framework lets you synchronize [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/) data between different devices, systems, or subsystems. [Read more](https://tinybase.org/guides/synchronization/using-a-synchronizer/).
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
