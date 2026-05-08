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
  * [Building A UI With Checkpoints](https://tinybase.org/guides/using-checkpoints/building-a-ui-with-checkpoints/)


# Building A UI With Checkpoints
This guide covers how the [`ui-react`](https://tinybase.org/api/ui-react/) module supports the [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) object. After all, if you have undo functionality in your app, you probably want an undo button!
As with all the other React-based bindings we've discussed, the [`ui-react`](https://tinybase.org/api/ui-react/) module provides both hooks and components to connect your checkpoints to your interface.
##  [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) Hooks
Firstly, the [`useCheckpointIds`](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/usecheckpointids/) hook is the reactive version of the [`getCheckpointIds`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/getter/getcheckpointids/) method and returns the three-part [`CheckpointIds`](https://tinybase.org/api/checkpoints/type-aliases/identity/checkpointids/) array.

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createCheckpoints, createStore} from 'tinybase';
import {useCheckpointIds} from 'tinybase/ui-react';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {fido: {species: 'dog'}});
const checkpoints = createCheckpoints[](https://tinybase.org/api/checkpoints/functions/creation/createcheckpoints/)(store);
const App = () => <span>{JSON.stringify(useCheckpointIds[](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/usecheckpointids/)(checkpoints))}</span>;

const app = document.createElement('div');
const root = createRoot(app);
root.render(<App />);
console.log(app.innerHTML);
// -> '<span>[[],"0",[]]</span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'sold', true);
console.log(app.innerHTML);
// -> '<span>[["0"],null,[]]</span>'

checkpoints.addCheckpoint[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/setter/addcheckpoint/)('sale');
console.log(app.innerHTML);
// -> '<span>[["0"],"1",[]]</span>'

```

This is not yet extremely useful for constructing an undo and redo UI! The [`useCheckpoint`](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/usecheckpoint/) hook returns the label of a checkpoint so that the user knows what they are undoing, for example:

```
import {useCheckpoint} from 'tinybase/ui-react';

const App2 = () => <span>{useCheckpoint[](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/usecheckpoint/)('2', checkpoints)}</span>;

root.render(<App2 />);
console.log(app.innerHTML);
// -> '<span></span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
checkpoints.addCheckpoint[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/setter/addcheckpoint/)('color');
console.log(app.innerHTML);
// -> '<span>color</span>'

```

Further, hooks like the [`useGoBackwardCallback`](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/usegobackwardcallback/) hook and the [`useGoForwardCallback`](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/usegoforwardcallback/) hook are self-explanatory, providing a callback that can move the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) backwards or forwards through the checkpoints stack in response to a user event.
## [`UndoOrRedoInformation`](https://tinybase.org/api/ui-react/type-aliases/checkpoints/undoorredoinformation/)
Perhaps more useful than each of those hooks individually, the [`useUndoInformation`](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/useundoinformation/) hook and [`useRedoInformation`](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/useredoinformation/) hook provide a collection of information (in an array of the [`UndoOrRedoInformation`](https://tinybase.org/api/ui-react/type-aliases/checkpoints/undoorredoinformation/) type) - including information about whether the action is possible, the event handler, and the label - that is fully sufficient to be able to construct an undo/redo UI:

```
import {useUndoInformation} from 'tinybase/ui-react';

store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {nemo: {species: 'fish'}}});
checkpoints.clear[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/lifecycle/clear/)();
const App3 = () => {
  const [canUndo, handleUndo, id, label] = useUndoInformation[](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/useundoinformation/)(checkpoints);
  return canUndo ? (
    <span onClick={handleUndo}>Undo {label}</span>
  ) : (
    <span>Nothing to undo</span>
  );
};

root.render(<App3 />);
console.log(app.innerHTML);
// -> '<span>Nothing to undo</span>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'nemo', 'color', 'orange');
checkpoints.addCheckpoint[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/setter/addcheckpoint/)('color');
console.log(app.innerHTML);
// -> '<span>Undo color</span>'

```

##  [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) Views
The [`BackwardCheckpointsView`](https://tinybase.org/api/ui-react/functions/checkpoints-components/backwardcheckpointsview/) component, [`CurrentCheckpointView`](https://tinybase.org/api/ui-react/functions/checkpoints-components/currentcheckpointview/) component, and [`ForwardCheckpointsView`](https://tinybase.org/api/ui-react/functions/checkpoints-components/forwardcheckpointsview/) component are the main three components for the [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) object, and list the checkpoints behind or ahead of the current state, so that a list of possible undo and redo actions is visible:

```
import {
  BackwardCheckpointsView,
  CurrentCheckpointView,
  ForwardCheckpointsView,
} from 'tinybase/ui-react';

const App4 = () => (
  <div>
    <BackwardCheckpointsView[](https://tinybase.org/api/ui-react/functions/checkpoints-components/backwardcheckpointsview/) checkpoints={checkpoints} debugIds={true} />/
    <CurrentCheckpointView[](https://tinybase.org/api/ui-react/functions/checkpoints-components/currentcheckpointview/) checkpoints={checkpoints} debugIds={true} />/
    <ForwardCheckpointsView[](https://tinybase.org/api/ui-react/functions/checkpoints-components/forwardcheckpointsview/) checkpoints={checkpoints} debugIds={true} />
  </div>
);

root.render(<App4 />);
console.log(app.innerHTML);
// -> '<div>0:{}/1:{color}/</div>'

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'nemo', 'stripes', true);
checkpoints.addCheckpoint[](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/methods/setter/addcheckpoint/)('stripes');
console.log(app.innerHTML);
// -> '<div>0:{}1:{color}/2:{stripes}/</div>'

```

Each of these components takes a `checkpointComponent` prop which allows you to customize how each checkpoint is rendered. Undoubtedly you will want something nicer than the default debug example above!
##  [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) Context
In the same way that a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can be passed into a [`Provider`](https://tinybase.org/api/the-essentials/using-react/provider/) component context and used throughout the app, a [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) object can also be provided to be used by default:

```
import {
  Provider,
  useCreateCheckpoints,
  useCreateStore,
} from 'tinybase/ui-react';

const App5 = () => {
  const store = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {pets: {nemo: {species: 'fish'}}}),
  );
  const checkpoints = useCreateCheckpoints[](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/usecreatecheckpoints/)(store, createCheckpoints);

  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/) checkpoints={checkpoints}>
      <Pane />
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

const Pane = () => <span>{JSON.stringify(useCheckpointIds[](https://tinybase.org/api/ui-react/functions/checkpoints-hooks/usecheckpointids/)())}</span>;

root.render(<App5 />);
console.log(app.innerHTML);
// -> '<span>[[],"0",[]]</span>'

```

The `checkpointsById` prop can be used in the same way that the `storesById` prop is, to let you reference multiple [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) objects by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).
## Summary
The support for [`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/) objects in the [`ui-react`](https://tinybase.org/api/ui-react/) module is very similar to that for all the other types of top level object, making it easy to attach checkpoints and undo/redo functionality to your user interface.
Let's move on to the ways in which we can create more advanced queries in the [Using Queries](https://tinybase.org/guides/using-queries/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
