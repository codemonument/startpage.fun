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
  * [TinyBase And TypeScript](https://tinybase.org/guides/the-basics/tinybase-and-typescript/)


# TinyBase And TypeScript
This guide summarizes the two different levels of TypeScript coverage you can use with TinyBase.
## 1. Basic Type Support
Out of the box, TinyBase has complete type coverage for all of its modules. So for example, setting and getting tabular and key-value data will obey the system's constraints. A [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or a [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) can be a number, string, boolean, `null`, or a plain JavaScript object or array, for example:

```
import {createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();

store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3}); //                  OK
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: true}); //               OK
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: ['Alice', 'Bob']}); //   OK since v8.0
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: () => 3}); //            TypeScript error

```

This basic typing of the [API](https://tinybase.org/api/) is comprehensively described throughout in the [API](https://tinybase.org/api/) documentation.
## 2. Schema-based Typing
The next step up is when you provide a schema for your TinyBase data. This more tightly constrains the types of [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/), and [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) that your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) can contain.
Since v3.1, TinyBase can provide typing that adapts according to the schema when you import the `with-schemas` version of the library. For example:

```
import {createStore} from 'tinybase/with-schemas';

// NB the 'with-schemas'

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setValuesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/)({
  employees: {type: 'number'},
  open: {type: 'boolean', default: false},
});

store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3}); //                      OK
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: true}); //                   TypeScript error
store.setValues[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvalues/)({employees: 3, website: 'pets.com'}); // TypeScript error

```

(The separate import is provided because the schema-based autocomplete and errors can be fairly verbose and confusing when you only need the basic type support.)
Read more about this technique in the [Schema-Based Typing](https://tinybase.org/guides/schemas/schema-based-typing/) guide.
## Summary
TinyBase provides different levels of typed support for your data, depending on how prescriptive you want it to be and your personal preferences.
Next we will run through some of the many ways you can build your app around TinyBase in the [Architectural Options](https://tinybase.org/guides/the-basics/architectural-options/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
