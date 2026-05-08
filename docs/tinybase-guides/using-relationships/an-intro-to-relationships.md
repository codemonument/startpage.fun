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
        * [An Intro To Relationships](https://tinybase.org/guides/using-relationships/an-intro-to-relationships/)
        * [Building A UI With Relationships](https://tinybase.org/guides/using-relationships/building-a-ui-with-relationships/)
        * [Advanced Relationship Definitions](https://tinybase.org/guides/using-relationships/advanced-relationship-definitions/)
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
  * [Using Relationships](https://tinybase.org/guides/using-relationships/)
  * [An Intro To Relationships](https://tinybase.org/guides/using-relationships/an-intro-to-relationships/)


# An Intro To Relationships
This guide describes how the [`relationships`](https://tinybase.org/api/relationships/) module gives you the ability to create and track relationships between [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects based on the data in a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
The main entry point to using the [`relationships`](https://tinybase.org/api/relationships/) module is the [`createRelationships`](https://tinybase.org/api/relationships/functions/creation/createrelationships/) function, which returns a new [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object. That object in turn has methods that let you create new [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/) definitions, access them directly, and register listeners for when they change.
## [The Basics](https://tinybase.org/guides/the-basics/)
Here's a simple example to show a [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object in action. The `pets` [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) has three [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects, each with a string `species` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/), which act as a key into the [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) of the `species` [`Table`](https://tinybase.org/api/store/type-aliases/store/table/). We create a [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/) definition called `petSpecies` which connects the two:

```
import {createRelationships, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)()
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
    fido: {species: 'dog'},
    felix: {species: 'cat'},
    cujo: {species: 'dog'},
  })
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {
    dog: {price: 5},
    cat: {price: 4},
  });

const relationships = createRelationships[](https://tinybase.org/api/relationships/functions/creation/createrelationships/)(store);
relationships.setRelationshipDefinition[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/configuration/setrelationshipdefinition/)(
  'petSpecies', // relationshipId
  'pets', //       localTableId to link from
  'species', //    remoteTableId to link to
  'species', //    cellId containing remote key
);

console.log(relationships.getRemoteRowId[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getremoterowid/)('petSpecies', 'fido'));
// -> 'dog'
console.log(relationships.getLocalRowIds[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getlocalrowids/)('petSpecies', 'dog'));
// -> ['fido', 'cujo']

```

The [`getRemoteRowId`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getremoterowid/) method allows you to traverse in the many-to-one direction: in other words for every [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in the local [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) you can find out the one remote [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) referenced. The [`getLocalRowIds`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getlocalrowids/) method is the reverse: for a remote [`Row`](https://tinybase.org/api/store/type-aliases/store/row/), it will return an array of the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) in the local [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) that reference it.
There is a special case when the local [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) is the same as the remote [`Table`](https://tinybase.org/api/store/type-aliases/store/table/). This creates a 'linked list' of [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/). Specify from which you would like to start the list, and the [`getLinkedRowIds`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getlinkedrowids/) method will return the list:

```
store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog', next: 'felix'},
  felix: {species: 'cat', next: 'cujo'},
  cujo: {species: 'dog'},
});

relationships.setRelationshipDefinition[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/configuration/setrelationshipdefinition/)('petSequence', 'pets', 'pets', 'next');

console.log(relationships.getLinkedRowIds[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getlinkedrowids/)('petSequence', 'fido'));
// -> ['fido', 'felix', 'cujo']
console.log(relationships.getLinkedRowIds[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getlinkedrowids/)('petSequence', 'felix'));
// -> ['felix', 'cujo']

```

##  [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/) Reactivity
As with [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) and [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/), [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) objects take care of tracking changes that will affect the [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/). The familiar paradigm is used to let you add a listener to the [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object. The listener fires when there's a change to a [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/):

```
const listenerId = relationships.addRemoteRowIdListener[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/listener/addremoterowidlistener/)(
  'petSpecies',
  'cujo',
  () => {
    console.log(relationships.getRemoteRowId[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getremoterowid/)('petSpecies', 'cujo'));
  },
);
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'cujo', 'species', 'wolf');
// -> 'wolf'

```

As expected, reactivity will also work for local and linked [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) relationships (with the [`addLocalRowIdsListener`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/listener/addlocalrowidslistener/) method and [`addLinkedRowIdsListener`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/listener/addlinkedrowidslistener/) method respectively).
You can set multiple [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/) definitions on each [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object. However, a given [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can only have one [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object associated with it. If you call this function twice on the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), your second call will return a reference to the [`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/) object created by the first.
Let's find out how to include relationships in a user interface in the [Building A UI With Relationships](https://tinybase.org/guides/using-relationships/building-a-ui-with-relationships/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
