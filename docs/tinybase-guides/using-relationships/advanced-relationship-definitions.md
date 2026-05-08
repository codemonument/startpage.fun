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
  * [Advanced Relationship Definitions](https://tinybase.org/guides/using-relationships/advanced-relationship-definitions/)


# Advanced Relationship Definitions
This guide describes how the [`relationships`](https://tinybase.org/api/relationships/) module let you create more complex types of relationships based on the data in [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects.
By default, our [`Relationship`](https://tinybase.org/api/relationships/type-aliases/concept/relationship/) definitions have named a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) which contains the string to use as the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) in the remote [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) - like the `species` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the previous guides' examples.
Sometimes you may wish to derive a remote [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) for each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) that is not in a single [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/), and in this case you can replace the fourth parameter with a function which can process the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in any way you wish.
For example, we could link our pets to a remote [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) that is keyed off both color and species:

```
import {createRelationships, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)()
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
    fido: {species: 'dog', color: 'brown'},
    felix: {species: 'cat', color: 'black'},
    cujo: {species: 'dog', color: 'black'},
  })
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species_color', {
    dog_brown: {price: 6},
    dog_black: {price: 5},
    cat_brown: {price: 4},
    cat_black: {price: 2},
  });

const relationships = createRelationships[](https://tinybase.org/api/relationships/functions/creation/createrelationships/)(store);
relationships.setRelationshipDefinition[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/configuration/setrelationshipdefinition/)(
  'petSpeciesColor', // relationshipId
  'pets', //            localTableId to link from
  'species_color', //   remote TableId to link to
  (getCell) => `${getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('species')}_${getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('color')}`, // => remote Row Id
);

console.log(relationships.getRemoteRowId[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getremoterowid/)('petSpeciesColor', 'fido'));
// -> 'dog_brown'
console.log(relationships.getLocalRowIds[](https://tinybase.org/api/relationships/interfaces/relationships/relationships/methods/getter/getlocalrowids/)('petSpeciesColor', 'dog_black'));
// -> ['cujo']

```

And with that, we have covered most of the basics of using the [`relationships`](https://tinybase.org/api/relationships/) module.
Let's move on to keeping track of changes to your data in the [Using Checkpoints](https://tinybase.org/guides/relationships-and-checkpoints/using-checkpoints/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
