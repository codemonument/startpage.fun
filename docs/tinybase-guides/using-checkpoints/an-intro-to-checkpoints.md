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
        * [An Intro To Checkpoints](https://tinybase.org/guides/using-checkpoints/an-intro-to-checkpoints/)
        * [Building A UI With Checkpoints](https://tinybase.org/guides/using-checkpoints/building-a-ui-with-checkpoints/)
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
  * [Using Checkpoints](https://tinybase.org/guides/using-checkpoints/)
  * [An Intro To Checkpoints](https://tinybase.org/guides/using-checkpoints/an-intro-to-checkpoints/)


# An Intro To Checkpoints
This guide describes how the [`checkpoints`](https://tinybase.org/api/checkpoints/) module gives you the ability to create and track changes to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)'s data for the purposes of undo and redo functionality.
The main entry point to using the [`checkpoints`](https://tinybase.org/api/checkpoints/) module is the [`createCheckpoints`](https://tinybase.org/api/checkpoints/functions/creation/createcheckpoints/) function, which returns a new [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) object. That object in turn has methods that let you set checkpoints, move between them (altering the underlying [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) accordingly), and register listeners for when they change.
[`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) let you undo and redo both keyed value and tabular data changes.
## [The Basics](https://tinybase.org/guides/the-basics/)
Here's a simple example to show a [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) object in action. The `fido` [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) starts off with the `sold` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) set to `false`. We set a checkpoint when this field changes, and which then allows us to return later to that initial state.

```
import {createCheckpoints, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {sold: false}}});

const checkpoints = createCheckpoints[](https://tinybase.org/api/checkpoints/functions/creation/createcheckpoints/)(store);
console.log(checkpoints.getCheckpointIds[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/getter/getcheckpointids/)());
// -> [[], '0', []]

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'sold', true);
checkpoints.addCheckpoint[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/setter/addcheckpoint/)('sale');
console.log(checkpoints.getCheckpointIds[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/getter/getcheckpointids/)());
// -> [['0'], '1', []]

checkpoints.goBackward[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/movement/gobackward/)();
console.log(store.getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('pets', 'fido', 'sold'));
// -> false
console.log(checkpoints.getCheckpointIds[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/getter/getcheckpointids/)());
// -> [[], '0', ['1']]

```

The [`getCheckpointIds`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/getter/getcheckpointids/) method deserves a quick explanation. It returns a [`CheckpointIds`](https://tinybase.org/api/checkpoints/type-aliases/identity/checkpointids/) array which has three parts:
  * The 'backward' checkpoint [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) that can be rolled backward to (in other words, the checkpoints in the undo stack for this [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)). They are in chronological order with the oldest checkpoint at the start of the array.
  * The current checkpoint [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)'s state, or `undefined` if the current state has not been checkpointed.
  * The 'forward' checkpoint [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) that can be rolled forward to (in other words, the checkpoints in the redo stack for this [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)). They are in chronological order with the newest checkpoint at the end of the array.


The [`goBackward`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/movement/gobackward/) method is only one of the ways to move around the checkpoint stack. The [`goForward`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/movement/goforward/) method lets you redo changes, and the [`goTo`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/movement/goto/) method lets you skip multiple checkpoints to undo or redo many changes at once.
## Checkpoint Reactivity
As with [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/), [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), and [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) objects, you can add a listener to the [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) object for whenever the checkpoint stack changes:

```
const listenerId = checkpoints.addCheckpointIdsListener[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/listener/addcheckpointidslistener/)(() => {
  console.log(checkpoints.getCheckpointIds[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/getter/getcheckpointids/)());
});
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'dog');
// -> [['0'], undefined, []]
checkpoints.addCheckpoint[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/setter/addcheckpoint/)();
// -> [['0'], '2', []]

checkpoints.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(listenerId);

```

Also note that when a new change is layered onto the original state, the previous redo of checkpoint '1' is now not available.
A given [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can only have one [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) object associated with it. If you call this function twice on the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), your second call will return a reference to the [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) object created by the first.
Finally, let's find out how to include checkpoints in a user interface in the [Building A UI With Checkpoints](https://tinybase.org/guides/using-checkpoints/building-a-ui-with-checkpoints/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
