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
  * [Using Schemas](https://tinybase.org/guides/schemas/using-schemas/)


# Using Schemas
[Schemas](https://tinybase.org/guides/schemas/) are a simple declarative way to say what data you would like to store.
A [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) simply describes specific [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) types and default. A [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) describes specific [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) types and defaults in specific [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/).
Each is a JavaScript object, and to apply them, you use the [`setValuesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/) method and [`setTablesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/) method respectively.
## Adding A [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/)
Typically you will want to set a [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) prior to loading and setting data in your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/):

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setValuesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/)({
  employees: {type: 'number'},
  open: {type: 'boolean', default: false},
});
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3, website: 'pets.com'});
console.log(store.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {employees: 3, open: false}

```

In the above example, we indicated that the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) contains an `employees` [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) (which needs to be a number) and an `open` [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) (which needs to be a boolean).
As you can see, when a [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) object is used that doesn't quite match those constraints, the data is corrected. The `website` [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) is ignored, and the missing `open` [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) gets defaulted to `false`.
TinyBase supports four primitive types in schemas: `string`, `number`, `boolean`, and `null`. It also supports `object` and `array` types for richer structured data, which are stored internally as JSON-encoded strings. You can also allow `null` values for a specific [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) by adding the `allowNull` property:

```
const store2 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setValuesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/)({
  nickname: {type: 'string', allowNull: true, default: null},
  verified: {type: 'boolean'},
});
store2.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({nickname: null, verified: true});
console.log(store2.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {nickname: null, verified: true}

store2.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('nickname', 'Buddy');
console.log(store2.getValue[](https://tinybase.org/api/the-essentials/getting-data/getvalue/)('nickname'));
// -> 'Buddy'

```

When `allowNull` is `true`, the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) can be set to either its defined type or `null`. Without `allowNull`, attempting to set a `null` value will be rejected by the schema.
## Adding A [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/)
Tabular schemas are similar. Set a [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) prior to loading data into your [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/):

```
store.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    species: {type: 'string'},
    sold: {type: 'boolean', default: false},
  },
});
store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog', color: 'brown', sold: 'maybe'});
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', sold: false}}}

```

In the above example, we indicated that the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) contains a single `pets` [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) of which has a `species` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) (which needs to be a string) and a `sold` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) (which needs to be a boolean).
Again, when a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) is added that doesn't quite match those constraints, the data is corrected. The `color` [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) is ignored, and the `sold` string is corrected to the default `false` value.
In general, if a default value is provided (and its type is correct), you can be certain that that [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) will always be present in a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/). If the default value is _not_ provided (or its type is incorrect), the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) may be missing from the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/). But when it is present you can be guaranteed it is of the correct type.
## Altering A Schema
You can also set or change the [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) or [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) after data has been added to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Note that this may result in a change to data in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), as defaults are applied or as invalid [`Value`](https://tinybase.org/api/store/type-aliases/store/value/), [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), [`Row`](https://tinybase.org/api/store/type-aliases/store/row/), or [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) objects are removed. These changes will fire any listeners to that data, as expected.
In this example, the [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) gains a new required field that is added to the current [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) to make it compliant:

```
store.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    species: {type: 'string'},
    legs: {type: 'number', default: 4},
    sold: {type: 'boolean', default: false},
  },
});
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', sold: false, legs: 4}}}

```

The [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) does not attempt to cast data. If a field needs to be of a particular type, it really needs to be of that type:

```
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'legs', '3');
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', sold: false, legs: 4}}}

store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'legs', 3);
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {fido: {species: 'dog', sold: false, legs: 3}}}

```

## Be Aware Of Potential Data Loss
In order to guarantee that a schema is met, [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) or [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) data may be removed. In the case of a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) being removed, this might result in the removal of a whole [`Row`](https://tinybase.org/api/store/type-aliases/store/row/).
In this case, for example, the [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) changes quite dramatically and none of the Cells of the existing data match it, so the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) is deleted:

```
store.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    color: {type: 'string'},
    weight: {type: 'number'},
  },
});
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {}

```

When no longer needed, you can also completely removes existing schemas with the [`delValuesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/delvaluesschema/) method or the [`delTablesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltablesschema/) method.
## Summary
Adding a schema gives you a simple declarative way to describe your data structure.
You can also benefit from a better developer experience based on these schemas, and for that we turn to the [Schema-Based Typing](https://tinybase.org/guides/schemas/schema-based-typing/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
