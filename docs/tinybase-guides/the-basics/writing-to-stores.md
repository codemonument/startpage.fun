[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
  1. No results found


  * [Guides](https://tinybase.org/guides/)
  * [Demos](https://tinybase.org/demos/)
  * [API](https://tinybase.org/api/)
  * [GitHub](https://github.com/tinyplex/tinybase)


  * [TinyBase](https://tinybase.org/)
    * [Guides](https://tinybase.org/guides/)
      * [The Basics](https://tinybase.org/guides/the-basics/)
        * [Getting Started](https://tinybase.org/guides/the-basics/getting-started/)
        * [Creating A Store](https://tinybase.org/guides/the-basics/creating-a-store/)
        * [Writing To Stores](https://tinybase.org/guides/the-basics/writing-to-stores/)
        * [Reading From Stores](https://tinybase.org/guides/the-basics/reading-from-stores/)
        * [Listening To Stores](https://tinybase.org/guides/the-basics/listening-to-stores/)
        * [Transactions](https://tinybase.org/guides/the-basics/transactions/)
        * [Importing TinyBase](https://tinybase.org/guides/the-basics/importing-tinybase/)
        * [TinyBase And TypeScript](https://tinybase.org/guides/the-basics/tinybase-and-typescript/)
        * [Architectural Options](https://tinybase.org/guides/the-basics/architectural-options/)
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
  * [The Basics](https://tinybase.org/guides/the-basics/)
  * [Writing To Stores](https://tinybase.org/guides/the-basics/writing-to-stores/)


# Writing To Stores
This guide shows you how to write data to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
A [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) has two types of data in it: keyed values ('[`Values`](https://tinybase.org/api/store/type-aliases/store/values/)'), and tabular data ('[`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/)').
[`Values`](https://tinybase.org/api/store/type-aliases/store/values/) are just [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/)/[`Value`](https://tinybase.org/api/store/type-aliases/store/value/) pairs. [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) on the other hand, have a simple hierarchical structure:
  * The [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)'s [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) object contains a number of [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) objects.
  * Each [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) contains a number of [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects.
  * Each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) contains a number of [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) objects.


Once you have created a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), you can write data to it with one of its setter methods, according to the level of the hierarchy that you want to set.
For example, you can set the data for the keyed value structure of [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with the [`setValues`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/) method:

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3, open: true});

```

Similarly, you can set the data for the tabular structure of [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with the [`setTables`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/) method:

```
store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});

```

Hopefully self-evidently, this sets the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to have two [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) (`employees` and `open`, which are `3` and `true` respectively). It also has one [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) object (called `pets`), containing one [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) object (called `fido`), containing one [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) object (called `species` and with the string value `dog`):

```
console.log(store.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {employees: 3, open: true}

console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}}}

```

You can also alter [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data at different granularities with the [`setValue`](https://tinybase.org/api/the-essentials/setting-data/setvalue/) method, the [`setTable`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/) method, the [`setRow`](https://tinybase.org/api/the-essentials/setting-data/setrow/) method, and the [`setCell`](https://tinybase.org/api/the-essentials/setting-data/setcell/) method:

```
store.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('employees', 4);
console.log(store.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {employees: 4, open: true}

store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {dog: {price: 5}});
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}}, species: {dog: {price: 5}}}

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('species', 'cat', {price: 4});
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}}, species: {dog: {price: 5}, cat: {price: 4}}}

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'color', 'brown');
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'brown'}}, species: {dog: {price: 5}, cat: {price: 4}}}

```

The data in a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) or a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) can be a string, a number, a boolean, or `null`. You can also store richer data as plain JavaScript objects or arrays, which TinyBase encodes internally as JSON strings.
It's worth mentioning here that there are two extra methods to manipulate [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects. The [`addRow`](https://tinybase.org/api/the-essentials/setting-data/addrow/) method is like the [`setRow`](https://tinybase.org/api/the-essentials/setting-data/setrow/) method but automatically assigns it a new unique [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/). And the [`setPartialRow`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setpartialrow/) method lets you update multiple [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) values in a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) without affecting the others. (setPartialValues does the same for [`Values`](https://tinybase.org/api/store/type-aliases/store/values/).)
## Deleting Data
There are dedicated deletion methods (again, for each level of granularity), such as the [`delValue`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delvalue/) method, the [`delTable`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltable/) method, the [`delRow`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delrow/) method, and the [`delCell`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delcell/) method. For example:

```
store.delValue[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delvalue/)('employees');
console.log(store.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {open: true}

store.delTable[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltable/)('species');
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'brown'}}}

```

Deletions are also implied when you set an object that omits something that existed before:

```
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', color: 'brown'}}}

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog'});
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog'}}}
// The `color` Cell has been deleted.

```

[`Table`](https://tinybase.org/api/store/type-aliases/store/table/) and [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) objects cannot be empty - if they are, they are removed - which leads to a cascading effect when you remove the final child of a parent object:

```
store.delCell[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delcell/)('pets', 'fido', 'species');
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {}
// The `fido` Row and `pets` Table have been recursively deleted.

```

## Summary
That's a quick overview on how to write data to a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). But of course you want to get it out again too!
In the examples above, we've used the [`getValues`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/) method and the [`getTables`](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/) method to get a view into the data in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Unsurprisingly, you can also use more granular methods to get data out - for which we proceed to the [Reading From Stores](https://tinybase.org/guides/the-basics/reading-from-stores/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
