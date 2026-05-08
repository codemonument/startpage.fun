[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
  1. No results found


  * [Guides](https://tinybase.org/guides/)
  * [Demos](https://tinybase.org/demos/)
  * [API](https://tinybase.org/api/)
  * [GitHub](https://github.com/tinyplex/tinybase)


  * [TinyBase](https://tinybase.org/)
    * [Guides](https://tinybase.org/guides/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)
      * [The Essentials](https://tinybase.org/api/the-essentials/)
      * [`store`](https://tinybase.org/api/store/)
      * [`mergeable-store`](https://tinybase.org/api/mergeable-store/)
      * [`metrics`](https://tinybase.org/api/metrics/)
      * [`indexes`](https://tinybase.org/api/indexes/)
      * [`relationships`](https://tinybase.org/api/relationships/)
      * [`queries`](https://tinybase.org/api/queries/)
      * [`checkpoints`](https://tinybase.org/api/checkpoints/)
      * [`common`](https://tinybase.org/api/common/)
      * [`persisters`](https://tinybase.org/api/persisters/)
      * [`persister-automerge`](https://tinybase.org/api/persister-automerge/)
      * [`persister-browser`](https://tinybase.org/api/persister-browser/)
      * [`persister-cr-sqlite-wasm`](https://tinybase.org/api/persister-cr-sqlite-wasm/)
      * [`persister-durable-object-sql-storage`](https://tinybase.org/api/persister-durable-object-sql-storage/)
      * [`persister-durable-object-storage`](https://tinybase.org/api/persister-durable-object-storage/)
      * [`persister-electric-sql`](https://tinybase.org/api/persister-electric-sql/)
      * [`persister-expo-sqlite`](https://tinybase.org/api/persister-expo-sqlite/)
      * [`persister-file`](https://tinybase.org/api/persister-file/)
      * [`persister-indexed-db`](https://tinybase.org/api/persister-indexed-db/)
      * [`persister-libsql`](https://tinybase.org/api/persister-libsql/)
      * [`persister-partykit-client`](https://tinybase.org/api/persister-partykit-client/)
      * [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/)
      * [`persister-pglite`](https://tinybase.org/api/persister-pglite/)
      * [`persister-postgres`](https://tinybase.org/api/persister-postgres/)
      * [`persister-powersync`](https://tinybase.org/api/persister-powersync/)
      * [`persister-react-native-mmkv`](https://tinybase.org/api/persister-react-native-mmkv/)
      * [`persister-react-native-sqlite`](https://tinybase.org/api/persister-react-native-sqlite/)
      * [`persister-remote`](https://tinybase.org/api/persister-remote/)
      * [`persister-sqlite-bun`](https://tinybase.org/api/persister-sqlite-bun/)
      * [`persister-sqlite-wasm`](https://tinybase.org/api/persister-sqlite-wasm/)
      * [`persister-sqlite3`](https://tinybase.org/api/persister-sqlite3/)
      * [`persister-yjs`](https://tinybase.org/api/persister-yjs/)
      * [`synchronizers`](https://tinybase.org/api/synchronizers/)
      * [`synchronizer-broadcast-channel`](https://tinybase.org/api/synchronizer-broadcast-channel/)
      * [`synchronizer-local`](https://tinybase.org/api/synchronizer-local/)
      * [`synchronizer-ws-client`](https://tinybase.org/api/synchronizer-ws-client/)
      * [`synchronizer-ws-server`](https://tinybase.org/api/synchronizer-ws-server/)
      * [`synchronizer-ws-server-durable-object`](https://tinybase.org/api/synchronizer-ws-server-durable-object/)
      * [`synchronizer-ws-server-simple`](https://tinybase.org/api/synchronizer-ws-server-simple/)
      * [`ui-react`](https://tinybase.org/api/ui-react/)
      * [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/)
      * [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/)
        * [Functions](https://tinybase.org/api/ui-react-inspector/functions/)
          * [`Inspector`](https://tinybase.org/api/ui-react-inspector/functions/development-components/inspector/)
        * [Type Aliases](https://tinybase.org/api/ui-react-inspector/type-aliases/)
      * [`ui-svelte`](https://tinybase.org/api/ui-svelte/)
      * [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/)
      * [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/)
      * [`middleware`](https://tinybase.org/api/middleware/)
      * [`schematizer-arktype`](https://tinybase.org/api/schematizer-arktype/)
      * [`schematizer-effect`](https://tinybase.org/api/schematizer-effect/)
      * [`schematizer-typebox`](https://tinybase.org/api/schematizer-typebox/)
      * [`schematizer-valibot`](https://tinybase.org/api/schematizer-valibot/)
      * [`schematizer-yup`](https://tinybase.org/api/schematizer-yup/)
      * [`schematizer-zod`](https://tinybase.org/api/schematizer-zod/)
      * [`schematizers`](https://tinybase.org/api/schematizers/)


  * [TinyBase](https://tinybase.org/)
  * [API](https://tinybase.org/api/)
  * [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/)
  * [Functions](https://tinybase.org/api/ui-react-inspector/functions/)
  * [`Inspector`](https://tinybase.org/api/ui-react-inspector/functions/development-components/inspector/)


# `Inspector`
Essential
The `Inspector` component renders a tool which allows you to view and edit the content of a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in a debug web environment.

```
Inspector[](https://tinybase.org/api/ui-react-inspector/functions/development-components/inspector/)(props: InspectorProps[](https://tinybase.org/api/ui-react-inspector/type-aliases/props/inspectorprops/)): ComponentReturnType[](https://tinybase.org/api/ui-react/type-aliases/component/componentreturntype/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `props`  | `InspectorProps[](https://tinybase.org/api/ui-react-inspector/type-aliases/props/inspectorprops/)`  | The props for this component.  |  
| returns  | `ComponentReturnType[](https://tinybase.org/api/ui-react/type-aliases/component/componentreturntype/)`  | The rendering of the inspector tool.  |  
See the [<Inspector /> (React)](https://tinybase.org/demos/ui-components-react/inspector-react/) demo for this component in action:
![Inspector example](https://tinybase.org/shots/inspector-react-demo.png)
The component displays a nub in the corner of the screen which you may then click to interact with all the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects in the [`Provider`](https://tinybase.org/api/ui-react/functions/context-components/provider/) component context.
The component's props identify the nub's initial location and panel state, though subsequent user changes to that will be preserved on each reload.
## Example
This example creates a Provider context into which a default [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is provided. The `Inspector` component within it then renders the inspector tool.

```
import React from 'react';
import {createRoot} from 'react-dom/client';
import {createStore} from 'tinybase';
import {Provider} from 'tinybase/ui-react';
import {Inspector} from 'tinybase/ui-react-inspector';

const App = ({store}) => (
  <Provider[](https://tinybase.org/api/ui-react/functions/context-components/provider/) store={store}>
    <Pane />
  </Provider[](https://tinybase.org/api/ui-react/functions/context-components/provider/)>
);
const Pane = () => <Inspector[](https://tinybase.org/api/ui-react-inspector/functions/development-components/inspector/) />;

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});
const app = document.createElement('div');
createRoot(app).render(<App store={store} />);
// ...
console.log(app.querySelector('aside')?.id);
// -> 'tinybaseInspector'

```

## Since
v5.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
