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
        * [An Intro To Indexes](https://tinybase.org/guides/using-indexes/an-intro-to-indexes/)
        * [Building A UI With Indexes](https://tinybase.org/guides/using-indexes/building-a-ui-with-indexes/)
        * [Advanced Index Definition](https://tinybase.org/guides/using-indexes/advanced-index-definition/)
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
  * [Using Indexes](https://tinybase.org/guides/using-indexes/)
  * [An Intro To Indexes](https://tinybase.org/guides/using-indexes/an-intro-to-indexes/)


# An Intro To Indexes
This guide describes how the [`indexes`](https://tinybase.org/api/indexes/) module gives you the ability to create and track indexes based on the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects, and which allow you to look up and display filtered data quickly.
The main entry point to using the [`indexes`](https://tinybase.org/api/indexes/) module is the [`createIndexes`](https://tinybase.org/api/indexes/functions/creation/createindexes/) function, which returns a new [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object. That object in turn has methods that let you create new [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) definitions, access the content of those [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) directly, and register listeners for when they change.
## [The Basics](https://tinybase.org/guides/the-basics/)
An [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) comprises a map of [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) objects, keyed by [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/). The [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) in a [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) represent [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects from a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) that all have a derived string value in common, as described by the [`setIndexDefinition`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/) method. Those values are used as the key for each [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) in the overall [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) object.
This might be simpler to understand with an example: if a [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) contains pets, each with a species, then an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) could be configured to contain the [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) of each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/), grouped into a [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) for each distinct species. In other words, this [`Table`](https://tinybase.org/api/store/type-aliases/store/table/):

```
{ // Store
  pets: {
    fido: {species: 'dog'},
    felix: {species: 'cat'},
    cujo: {species: 'dog'},
  },
}

```

would conceptually become this [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/):

```
{ // Indexes
  bySpecies: {
    dog: ['fido', 'cujo'],
    cat: ['felix'],
  },
}

```

This is for illustrative purposes: note that this resulting [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) structure is never an object literal like this: you would instead use the [`getSliceIds`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getsliceids/) method and the [`getSliceRowIds`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/) method to iterate through the it.
Here's a simple example to show such an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) in action. The `pets` [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) has three [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects, each with a string `species` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/). We create an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) definition called `bySpecies` which groups them:

```
import {createIndexes, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog'},
  felix: {species: 'cat'},
  cujo: {species: 'dog'},
});

const indexes = createIndexes[](https://tinybase.org/api/indexes/functions/creation/createindexes/)(store);
indexes.setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)(
  'bySpecies', // indexId
  'pets', //      tableId to index
  'species', //    cellId to index on
);

console.log(indexes.getSliceIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getsliceids/)('bySpecies'));
// -> ['dog', 'cat']
console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('bySpecies', 'dog'));
// -> ['fido', 'cujo']

```

##  [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) Reactivity
As with the [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object, magic happens when the underlying data changes. The [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object efficiently takes care of tracking changes that will affect the [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) or the [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) arrays within it. A similar paradigm to that used on the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is used to let you add a listener to the [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object. The listener fires when there's a change to the [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) or a [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/)'s content:

```
indexes.addSliceIdsListener[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/listener/addsliceidslistener/)('bySpecies', () => {
  console.log(indexes.getSliceIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getsliceids/)('bySpecies'));
});
store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'lowly', {species: 'worm'});
// -> ['dog', 'cat', 'worm']

indexes.addSliceRowIdsListener[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/listener/addslicerowidslistener/)('bySpecies', 'worm', () => {
  console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('bySpecies', 'worm'));
});
store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'smaug', {species: 'worm'});
// -> ['lowly', 'smaug']

```

You can set multiple [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) definitions on each [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object. However, a given [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can only have one [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object associated with it. So, as with the [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/) object, if you call this function twice on the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), your second call will return a reference to the [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object created by the first.
Let's next find out how to include [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) in a user interface in the [Building A UI With Indexes](https://tinybase.org/guides/using-indexes/building-a-ui-with-indexes/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
