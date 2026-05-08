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
        * [Using Schemas](https://tinybase.org/guides/schemas/using-schemas/)
        * [Schema-Based Typing](https://tinybase.org/guides/schemas/schema-based-typing/)
        * [Mutating Data With Listeners](https://tinybase.org/guides/schemas/mutating-data-with-listeners/)
        * [Using Schematizers](https://tinybase.org/guides/schemas/using-schematizers/)
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
  * [Schemas](https://tinybase.org/guides/schemas/)
  * [Mutating Data With Listeners](https://tinybase.org/guides/schemas/mutating-data-with-listeners/)


# Mutating Data With Listeners
Although listeners are normally prevented from updating data, there are times when you may want to - such as when you are programmatically checking your data as it gets updated.
## Configuring Listeners
By default, listeners cannot update data. For instance, you might imagine that this code will replace 'walnut' with 'brown' when the `color` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) is updated. But in fact the correction will fail silently:

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog', color: 'black'});

const colorListenerId = store.addCellListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addcelllistener/)(
  'pets',
  null,
  'color',
  (store, tableId, rowId, cellId, newCell) => {
    if (newCell == 'walnut') {
      store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)(tableId, rowId, cellId, 'brown');
    }
  },
);

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'walnut');
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'walnut'}}}

store.delListener[](https://tinybase.org/api/store/interfaces/store/store/methods/listener/dellistener/)(colorListenerId);

```

## Mutator Listeners
To indicate that a listener is a 'mutator' (meaning that you are willing to allow it to change data), simply set the `mutator` flag to true on the method that adds the listener to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
In this example, the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) value must be one of the known species, or else it is set to 'unknown':

```
const SPECIES = ['unknown', 'dog', 'cat', 'worm'];
store.addCellListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addcelllistener/)(
  'pets',
  null,
  'species',
  (store, tableId, rowId, cellId, newCell) => {
    if (!SPECIES.includes(newCell)) {
      store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)(tableId, rowId, cellId, SPECIES[0]);
    }
  },
  true, // This listener is permitted to mutate the Store.
);

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'worm');
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'worm', color: 'walnut'}}}

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'wolf');
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'unknown', color: 'walnut'}}}

```

Note that all the listeners that are marked as mutators will run _before_ all of those that are not. This means you can be sure that when your read-only listeners fire, the data within the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) has already been been fully manipulated to your liking.
## Summary
We have now effectively implemented a programmatic schema, one which is capable of ensuring values are valid, and defaulting them to something else if not.
This same technique can also constrain numeric [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) values to valid ranges, for example - and even potentially have [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) values which are constrained by other [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) values (though note that this needs to be done carefully to avoid expensive or impossible constraint solutions).
One common circumstance for creating a [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) for a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) is when you are loading data from a source and you want to ensure the data is sculpted as your application require.
But how do you convert schemas from other validation libraries? For that we proceed to the [Using Schematizers](https://tinybase.org/guides/schemas/using-schematizers/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
