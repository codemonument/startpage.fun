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
  * [Using Schematizers](https://tinybase.org/guides/schemas/using-schematizers/)


# Using Schematizers
Schematizers provide a convenient way to convert schemas from popular validation libraries into TinyBase's [`TablesSchema`](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) and [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) formats.
Instead of manually writing TinyBase schemas, you can use your existing schemas from libraries like Zod, TypeBox, and Valibot, and convert them at runtime using a schematizer. The full list of supported schema systems and their entry points is as follows:  
| Library  | Creation function  |  
| --- | --- |  
| [Zod](https://github.com/colinhacks/zod)  | [`createZodSchematizer`](https://tinybase.org/api/schematizer-zod/functions/creation/createzodschematizer/)  |  
| [TypeBox](https://github.com/sinclairzx81/typebox)  | [`createTypeBoxSchematizer`](https://tinybase.org/api/schematizer-typebox/functions/creation/createtypeboxschematizer/)  |  
| [Valibot](https://github.com/open-circle/valibot)  | [`createValibotSchematizer`](https://tinybase.org/api/schematizer-valibot/functions/creation/createvalibotschematizer/)  |  
| [ArkType](https://github.com/arktypeio/arktype)  | [`createArkTypeSchematizer`](https://tinybase.org/api/schematizer-arktype/functions/creation/createarktypeschematizer/)  |  
| [Yup](https://github.com/jquense/yup)  | [`createYupSchematizer`](https://tinybase.org/api/schematizer-yup/functions/creation/createyupschematizer/)  |  
| [Effect Schema](https://github.com/Effect-TS/effect)  | [`createEffectSchematizer`](https://tinybase.org/api/schematizer-effect/functions/creation/createeffectschematizer/)  |  
The [`createCustomSchematizer`](https://tinybase.org/api/schematizers/functions/creation/createcustomschematizer/) function also allows you to create your own schematizer that convert from any schema system not supported directly by TinyBase.
The rest of this guide will cover the Zod schematizer, but the concepts are exactly the same for other schema systems. Take a look at the [API](https://tinybase.org/api/) documentation for the other schematizers for exact details.
## Using The Zod [`Schematizer`](https://tinybase.org/api/schematizers/interfaces/schematizer/schematizer/)
The Zod schematizer allows you to convert Zod schemas into TinyBase schemas. You create a schematizer with the [`createZodSchematizer`](https://tinybase.org/api/schematizer-zod/functions/creation/createzodschematizer/) function and then use its [`toTablesSchema`](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/totablesschema/) method and [`toValuesSchema`](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/tovaluesschema/) method to perform the conversion:

```
import {createStore} from 'tinybase';
import {createZodSchematizer} from 'tinybase/schematizers/schematizer-zod';
import {z} from 'zod';

const schematizer = createZodSchematizer[](https://tinybase.org/api/schematizer-zod/functions/creation/createzodschematizer/)();

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)(
  schematizer.toTablesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/totablesschema/)({
    pets: z.object({
      species: z.string(),
      age: z.number(),
      sold: z.boolean().default(false),
    }),
  }),
);

store.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog', age: 3});
console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', age: 3, sold: false}

```

The schematizer performs a best-effort conversion, extracting basic type information (string, number, boolean), defaults, and nullable settings from your Zod schemas.
## Converting [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) [Schemas](https://tinybase.org/guides/schemas/)
You can also convert Zod schemas for individual values:

```
const store2 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setValuesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/)(
  schematizer.toValuesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/tovaluesschema/)({
    theme: z.string().default('light'),
    count: z.number(),
    isOpen: z.boolean(),
  }),
);

store2.setValue[](https://tinybase.org/api/the-essentials/setting-data/setvalue/)('count', 42);
console.log(store2.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {theme: 'light', count: 42}

```

In this example, only `theme` has a default value. The `count` and `isOpen` values don't have defaults, so they won't appear in the store until explicitly set.
## Handling Nullable And Optional Fields
The Zod schematizer understands nullable and optional fields:

```
const store3 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)(
  schematizer.toTablesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/totablesschema/)({
    users: z.object({
      name: z.string(),
      nickname: z.string().nullable(),
      bio: z.string().optional(),
    }),
  }),
);

store3.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('users', 'alice', {name: 'Alice', nickname: null});
console.log(store3.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('users', 'alice'));
// -> {name: 'Alice', nickname: null}

```

In this example, `nickname` can be set to `null` because it's marked as nullable. The `bio` field is optional, so it doesn't need to be provided (and TinyBase will not add a default for it since none was specified in the Zod schema).
## Object And Array Cells
The Zod schematizer also converts array and object (record) fields into TinyBase's `array` and `object` cell types:

```
const store4 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)(
  schematizer.toTablesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/totablesschema/)({
    pets: z.object({
      species: z.string(),
      tags: z.array(z.string()),
      profile: z.record(z.string(), z.string()),
    }),
  }),
);

store4.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {
  species: 'dog',
  tags: ['friendly', 'playful'],
  profile: {color: 'brown'},
});
console.log(store4.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', tags: ['friendly', 'playful'], profile: {color: 'brown'}}

```

You can also specify defaults for object and array cells:

```
const store5 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)(
  schematizer.toTablesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/totablesschema/)({
    pets: z.object({
      species: z.string(),
      tags: z.array(z.string()).default(['unknown']),
    }),
  }),
);

store5.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog'});
console.log(store5.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', tags: ['unknown']}

```

## Unsupported Types
The Zod schematizer only converts basic types (string, number, boolean, array, and object/record) and ignores complex types like dates. These will simply be excluded from the resulting TinyBase schema:

```
const store6 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)(
  schematizer.toTablesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/totablesschema/)({
    pets: z.object({
      species: z.string(),
      birthday: z.date(), // ignored
    }),
  }),
);

store6.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('pets', 'fido', {species: 'dog'});
console.log(store6.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog'}

```

## Reusing The [`Schematizer`](https://tinybase.org/api/schematizers/interfaces/schematizer/schematizer/)
You can create a schematizer once and reuse it for multiple conversions:

```
const schematizer2 = createZodSchematizer[](https://tinybase.org/api/schematizer-zod/functions/creation/createzodschematizer/)();

const tablesSchema = schematizer2.toTablesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/totablesschema/)({
  pets: z.object({
    species: z.string(),
    age: z.number(),
  }),
  stores: z.object({
    name: z.string(),
    city: z.string(),
  }),
});

const valuesSchema = schematizer2.toValuesSchema[](https://tinybase.org/api/schematizer-arktype/interfaces/schematizer/arktypeschematizer/methods/conversion/tovaluesschema/)({
  openStores: z.number().default(0),
  corporateName: z.string().default('Pet Store Inc'),
});

const store7 = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setschema/)(tablesSchema, valuesSchema);

store7.setRow[](https://tinybase.org/api/the-essentials/setting-data/setrow/)('stores', 'downtown', {name: 'Downtown Pets', city: 'Boston'});
console.log(store7.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('stores', 'downtown'));
// -> {name: 'Downtown Pets', city: 'Boston'}

console.log(store7.getValues[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/getvalues/)());
// -> {openStores: 0, corporateName: 'Pet Store Inc'}

```

## Summary
Schematizers provide a bridge between popular schema validation libraries and TinyBase's schema system. They perform best-effort conversions, allowing you to reuse existing schema definitions while benefiting from TinyBase's runtime validation and defaults.
Now that you can define and convert schemas, let's learn how to manipulate data coming into the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), which is covered in the [Using Middleware](https://tinybase.org/guides/using-middleware/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
