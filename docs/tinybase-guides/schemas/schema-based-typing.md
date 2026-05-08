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
  * [Schema-Based Typing](https://tinybase.org/guides/schemas/schema-based-typing/)


# Schema-Based Typing
You can use type definitions that infer [API](https://tinybase.org/api/) types from the schemas you apply, providing a powerful way to improve your developer experience when you know the shape of the data being stored.
The schema-based definitions can be accessed by adding the `with-schemas` suffix to your imports. For example:

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

In this example, the store is known to have the [`ValuesSchema`](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) provided, and all relevant methods will have type constraints accordingly, even for listeners:

```
store.addValueListener[](https://tinybase.org/api/the-essentials/listening-for-changes/addvaluelistener/)(null, (store, valueId, newValue, oldValue) => {
  valueId == 'employees'; // OK
  valueId == 'open'; //      OK
  valueId == 'website'; //   TypeScript error

  if (valueId == 'employees') {
    newValue as number; //   OK
    oldValue as number; //   OK
    newValue as boolean; //  TypeScript error
    oldValue as boolean; //  TypeScript error
  }
  if (valueId == 'open') {
    newValue as boolean; //  OK
    oldValue as boolean; //  OK
  }
});

```

## Getting the Typed [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)
Only the [`setSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setschema/) method, [`setTablesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/) method, and [`setValuesSchema`](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/) method return a typed [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) object. So, to benefit from the typing, ensure you assign your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) variable to what those methods return, rather than just the [`createStore`](https://tinybase.org/api/the-essentials/creating-stores/createstore/) function.
For example, the following will work at runtime, but you will _not_ benefit from the developer experience of typing on the `store` variable as we did in the example above.

```
import {createStore} from 'tinybase/with-schemas';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)(); // This is not a schema-typed Store

store.setValuesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/)({
  employees: {type: 'number'},
  open: {type: 'boolean', default: false},
}); // Instead you should use the return type from this method

```

One further thing to be aware of is that for the typing to work effectively, the schema must be passed in directly, or, if it is a variable, as a constant:

```
const valuesSchema = {
  employees: {type: 'number'},
  open: {type: 'boolean', default: false},
} as const; // NB the `as const` modifier
store.setValuesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/)(valuesSchema);

```

It's worth noting that typing will adapt according to schemas being added, removed, or changed:

```
const tablesSchema = {
  pets: {species: {type: 'string'}},
} as const;

const valuesSchema = {
  employees: {type: 'number'},
  open: {type: 'boolean', default: false},
} as const;

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
const storeWithBothSchemas = store.setSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setschema/)(tablesSchema, valuesSchema);
const storeWithJustValuesSchema = storeWithBothSchemas.delTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltablesschema/)();
const storeWithValuesAndNewTablesSchema = storeWithBothSchemas.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    species: {type: 'string'},
    sold: {type: 'boolean', default: false},
  },
});

```

## Typing The ui-react Module
Schema-based typing for the [`ui-react`](https://tinybase.org/api/ui-react/) module is handled a little differently, due to the fact that all of the hooks and components are top level functions in the module. It would be frustrating to apply a schema to type each and every one in turn.
Instead, you can use the `WithSchemas` type (which takes the `typeof` the schemas), and the following pattern after your import. This applies the schema types to the whole module en masse, and then you can select the hooks and components you want to use:

```
import React from 'react';
import * as UiReact from 'tinybase/ui-react/with-schemas';
import {createStore} from 'tinybase/with-schemas';

const tablesSchema = {pets: {species: {type: 'string'}}} as const;
const valuesSchema = {employees: {type: 'number'}} as const;

// Cast the whole module to be schema-based with WithSchemas:
const UiReactWithSchemas = UiReact as UiReact.WithSchemas<
  [typeof tablesSchema, typeof valuesSchema]
>;
// Deconstruct to access the hooks and components you need:
const {TableView, useTable, ValueView} = UiReactWithSchemas;

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setschema/)(tablesSchema, valuesSchema);
const App = () => (
  <div>
    <TableView[](https://tinybase.org/api/ui-react/functions/store-components/tableview/) store={store} tableId="species" /> {/*   OK               */}
    <TableView[](https://tinybase.org/api/ui-react/functions/store-components/tableview/) store={store} tableId="customers" /> {/* TypeScript error */}
    {/* ... */}
  </div>
);

```

Note that in React Native, the resolution of modules and types isn't yet quite compatible with Node and TypeScript. You may need to try something like the following to explicitly load code and types from different folders:

```
// code
import React from 'react';
import * as UiReact from 'tinybase/ui-react';
// types
import type {WithSchemas} from 'tinybase/ui-react/with-schemas';
import type {
  TablesSchema[](https://tinybase.org/api/store/type-aliases/schema/tablesschema/),
  ValuesSchema[](https://tinybase.org/api/store/type-aliases/schema/valuesschema/),
  createStore,
} from 'tinybase/with-schemas';

const tablesSchema = {pets: {species: {type: 'string'}}} as const;
const valuesSchema = {employees: {type: 'number'}} as const;

const UiReactWithSchemas = UiReact as unknown as WithSchemas<
  [typeof tablesSchema, typeof valuesSchema]
>;

//...

```

## Using the `omni` module
You may also need to use the `unknown as` cast when using the `omni` module, since it exports both the [`ui-react`](https://tinybase.org/api/ui-react/) module and [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/) module, and you will need to distinguish them:

```
import * as Omni from 'tinybase/omni';
import type {
  UiReactDomWithSchemas,
  UiReactWithSchemas,
} from 'tinybase/omni/with-schemas';

const tablesSchema = {pets: {species: {type: 'string'}}} as const;
const valuesSchema = {employees: {type: 'number'}} as const;
type Schemas = [typeof tablesSchema, typeof valuesSchema];

const {useCell, useValue} = Omni as unknown as UiReactWithSchemas<Schemas>;
const {EditableCellView} = Omni as unknown as UiReactDomWithSchemas<Schemas>;

//...

```

## Multiple Stores
In the case that you have multiple [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) objects with different schemas, you will need to use `WithSchemas` several times, and deconstruct each, something like this:

```
const UiReactWithPetShopSchemas = UiReact as UiReact.WithSchemas<
  [typeof petShopTablesSchema, typeof petShopValuesSchema]
>;
const {
  TableView: PetShopTableView,
  useTable: usePetShopTable,
  ValueView: usePetShopValueView,
} = UiReactWithPetShopSchemas;

const UiReactWithSettingsSchemas = UiReact as UiReact.WithSchemas<
  [typeof settingsTablesSchema, typeof settingsValuesSchema]
>;
const {
  TableView: SettingsTableView,
  useTable: useSettingsTable,
  ValueView: useSettingsValueView,
} = UiReactWithSettingsSchemas;

const petShopStore = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setschema/)(
  petShopTablesSchema,
  petShopValuesSchema,
);
const settingsStore = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setschema/)(
  settingsTablesSchema,
  settingsValuesSchema,
);
const App = () => (
  <div>
    <PetShopTableView store={petShopStore} tableId="species" />
    <SettingsTableView store={settingsStore} tableId="viewSettings" />
    {/* ... */}
  </div>
);

```

## Defining Schema-Based Stores in React Components
One final pattern to be aware of is that you can use the `WithSchemas` type to create a schema-based [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in a non-rendering React component. This allows you to create a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with a schema, define its persistence behavior, publish it into the context, and even expose domain-specific hooks - all in a single self-contained file.
There are good examples of this in the [TinyHub](https://tinyhub.org/) project (see the store components [this folder](https://github.com/tinyplex/tinyhub/tree/main/client/src/stores)).
If you want to use this pattern your app's top-level will look something like this:

```
export const App = () => {
  return (
    <Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
      <MyStore /> {/* This is a schema-based Store component */}
      <ActualApp /> {/* This is the actual rendered app */}
    </Provider[](https://tinybase.org/api/the-essentials/using-react/provider/)>
  );
};

```

The `MyStore` component renders `null` so it doesn't appear visually, but it is responsible for creating the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and making it available to the rest of the app via the Provider context that wraps them both.
The `MyStore.tsx` file might look something like this. (In this simplified case, we are just typing key values in our [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) but of course this would work for a tabular [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) too.)

```
// A unique Id for this Store.
const STORE_ID = 'myStore';

// The schema for this Store.
const VALUES_SCHEMA = {
  myStringValue: {type: 'string', default: 'foo'},
  myNumericValue: {type: 'number', default: 42},
} as const;
type Schemas = [NoTablesSchema[](https://tinybase.org/api/store/type-aliases/schema/notablesschema/), typeof VALUES_SCHEMA];

// Destructure the ui-react module with the schema applied.
const {useCreateStore, useProvideStore, useCreatePersister, useValue} =
  UiReact as UiReact.WithSchemas<Schemas>;

export const MyStore = () => {
  // Create the Store and set its schema
  const myStore = useCreateStore[](https://tinybase.org/api/the-essentials/using-react/usecreatestore/)(() =>
    createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setValuesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/setvaluesschema/)(VALUES_SCHEMA),
  );

  // Create a local storage persister for the Store and start it
  useCreatePersister[](https://tinybase.org/api/ui-react/functions/persister-hooks/usecreatepersister/)(
    settingsStore,
    (settingsStore) => createLocalPersister[](https://tinybase.org/api/the-essentials/persisting-stores/createlocalpersister/)(settingsStore, STORE_ID),
    [],
    (persister) => persister.startAutoPersisting[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/lifecycle/startautopersisting/)(),
  );

  // Provide the Store for the rest of the app.
  useProvideStore[](https://tinybase.org/api/ui-react/functions/store-hooks/useprovidestore/)(STORE_ID, settingsStore);

  // Don't render anything.
  return null;
};

```

In that same file, you can also define domain-specific hooks that use an expose the schema. For example, this hook will be typed to return a string if passed 'myStringValue', and a number if passed 'myNumericValue'.

```
type ValueIds = keyof typeof VALUES_SCHEMA;
export const useSettingsValue = <ValueId extends ValueIds>(valueId: ValueId) =>
  useValue<ValueId>(valueId, STORE_ID);

```

This means that the rest of the app can use [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) from the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with correct types, _and_ the implementation details of the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) are encapsulated in the single file. For more complex applications, it really helps to keep everything about the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) in one place.
## Summary
Schema-based typing provides a powerful developer-time experience for checking your code and autocompletion in your IDE. Remember to use the `with-schema` suffix on the import path and use the patterns described above.
We move on to discussing more complex programmatic enforcement of your data, and for that we turn to the [Mutating Data With Listeners](https://tinybase.org/guides/schemas/mutating-data-with-listeners/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
