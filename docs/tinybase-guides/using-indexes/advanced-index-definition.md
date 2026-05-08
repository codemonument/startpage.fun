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
  * [Advanced Index Definition](https://tinybase.org/guides/using-indexes/advanced-index-definition/)


# Advanced Index Definition
This guide describes how the [`indexes`](https://tinybase.org/api/indexes/) module let you create more complex types of indexes based on the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects.
## Custom Sorting
As well as indicating what the [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) in the [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) should be, based on a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) value in each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/), you can also indicate how the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) will be sorted inside each [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/). For example, here the members of each species are sorted by weight, by specifying that CellId in the fourth parameter:

```
import {createIndexes, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog', weight: 42},
  felix: {species: 'cat', weight: 13},
  cujo: {species: 'dog', weight: 37},
});

const indexes = createIndexes[](https://tinybase.org/api/indexes/functions/creation/createindexes/)(store);
indexes.setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)(
  'bySpecies', // indexId
  'pets', //      tableId to index
  'species', //   cellId to index
  'weight', //    cellId to sort by
);

console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('bySpecies', 'dog'));
// -> ['cujo', 'fido']

```

With a further fifth and sixth parameter, you can also indicate how the [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) (and the Rows within them) should be sorted. These two parameters take a 'sorter' function (much like JavaScript's own array `sort` method) which compares pairs of values. For example, to order the species Slices alphabetically, and the animals in each species in _reverse_ weight order:

```
indexes.setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)(
  'bySpecies', // indexId
  'pets', //      tableId to index
  'species', //   cellId to index
  'weight', //    cellId to sort by
  (id1, id2) => (id1 < id2 ? -1 : 1), // Slices in alphabetical order
  (id1, id2) => (id1 > id2 ? -1 : 1), // Rows in reverse numerical order
);

console.log(indexes.getSliceIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getsliceids/)('bySpecies'));
// -> ['cat', 'dog']
console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('bySpecies', 'dog'));
// -> ['fido', 'cujo']

```

Note that you can use the [`defaultSorter`](https://tinybase.org/api/common/functions/convenience/defaultsorter/) function from the [`common`](https://tinybase.org/api/common/) module (which is literally equivalent to `(id1, id2) => (id1 < id2 ? -1 : 1)`) if all you want to do is sort something alphanumerically.
Sorting is used in the [Countries](https://tinybase.org/demos/countries/) demo to sort both the [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) (the first letters of the alphabet) and the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) (the country names) within them.
## Getting Custom [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) From Rows
By default, our [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) definitions have named a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) which contains the string to use as the [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) - like the `species` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the example above. Sometimes you may wish to derive a [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) for each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) that is not in a single [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/), and in this case you can replace the third parameter with a function which can process the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in any way you wish.
For example, we could group our pets into 'heavy' and 'light' Slices, based on the range that the `weight` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) lies in.:

```
indexes.setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)(
  'byWeightRange', //                                           indexId
  'pets', //                                                    tableId to index
  (getCell) => (getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('weight') > 40 ? 'heavy' : 'light'), // => sliceId
);

console.log(indexes.getSliceIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getsliceids/)('byWeightRange'));
// -> ['heavy', 'light']
console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('byWeightRange', 'light'));
// -> ['felix', 'cujo']

```

You can also provide a function for the key to sort entries by. This sorts animal [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/), heaviest first, in each [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/):

```
indexes.setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)(
  'byWeightRange', //                                           indexId
  'pets', //                                                    tableId to index
  (getCell) => (getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('weight') > 40 ? 'heavy' : 'light'), // => sliceId
  (getCell) => -getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('weight'), //                           => sort key
);

console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('byWeightRange', 'light'));
// -> ['cujo', 'felix']

```

And with that, we have covered most of the basics of using the [`indexes`](https://tinybase.org/api/indexes/) module. Let's move on to a very similar module for creating relationships between data in the [Using Relationships](https://tinybase.org/guides/using-relationships/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
