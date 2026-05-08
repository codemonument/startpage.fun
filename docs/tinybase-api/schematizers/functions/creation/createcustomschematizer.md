[![TinyBase logo](https://tinybase.org/favicon.svg)TinyBase](https://tinybase.org/)
  1. No results found


  * [Guides](https://tinybase.org/guides/)
  * [Demos](https://tinybase.org/demos/)
  * [API](https://tinybase.org/api/)
  * [GitHub](https://github.com/tinyplex/tinybase)


  * [TinyBase](https://tinybase.org/)
    * [Guides](https://tinybase.org/guides/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)
      * [The Essentials](https://tinybase.org/api/the-essentials/)
      * [`store`](https://tinybase.org/api/store/)
      * [`mergeable-store`](https://tinybase.org/api/mergeable-store/)
      * [`metrics`](https://tinybase.org/api/metrics/)
      * [`indexes`](https://tinybase.org/api/indexes/)
      * [`relationships`](https://tinybase.org/api/relationships/)
      * [`queries`](https://tinybase.org/api/queries/)
      * [`checkpoints`](https://tinybase.org/api/checkpoints/)
      * [`common`](https://tinybase.org/api/common/)
      * [`persisters`](https://tinybase.org/api/persisters/)
      * [`persister-automerge`](https://tinybase.org/api/persister-automerge/)
      * [`persister-browser`](https://tinybase.org/api/persister-browser/)
      * [`persister-cr-sqlite-wasm`](https://tinybase.org/api/persister-cr-sqlite-wasm/)
      * [`persister-durable-object-sql-storage`](https://tinybase.org/api/persister-durable-object-sql-storage/)
      * [`persister-durable-object-storage`](https://tinybase.org/api/persister-durable-object-storage/)
      * [`persister-electric-sql`](https://tinybase.org/api/persister-electric-sql/)
      * [`persister-expo-sqlite`](https://tinybase.org/api/persister-expo-sqlite/)
      * [`persister-file`](https://tinybase.org/api/persister-file/)
      * [`persister-indexed-db`](https://tinybase.org/api/persister-indexed-db/)
      * [`persister-libsql`](https://tinybase.org/api/persister-libsql/)
      * [`persister-partykit-client`](https://tinybase.org/api/persister-partykit-client/)
      * [`persister-partykit-server`](https://tinybase.org/api/persister-partykit-server/)
      * [`persister-pglite`](https://tinybase.org/api/persister-pglite/)
      * [`persister-postgres`](https://tinybase.org/api/persister-postgres/)
      * [`persister-powersync`](https://tinybase.org/api/persister-powersync/)
      * [`persister-react-native-mmkv`](https://tinybase.org/api/persister-react-native-mmkv/)
      * [`persister-react-native-sqlite`](https://tinybase.org/api/persister-react-native-sqlite/)
      * [`persister-remote`](https://tinybase.org/api/persister-remote/)
      * [`persister-sqlite-bun`](https://tinybase.org/api/persister-sqlite-bun/)
      * [`persister-sqlite-wasm`](https://tinybase.org/api/persister-sqlite-wasm/)
      * [`persister-sqlite3`](https://tinybase.org/api/persister-sqlite3/)
      * [`persister-yjs`](https://tinybase.org/api/persister-yjs/)
      * [`synchronizers`](https://tinybase.org/api/synchronizers/)
      * [`synchronizer-broadcast-channel`](https://tinybase.org/api/synchronizer-broadcast-channel/)
      * [`synchronizer-local`](https://tinybase.org/api/synchronizer-local/)
      * [`synchronizer-ws-client`](https://tinybase.org/api/synchronizer-ws-client/)
      * [`synchronizer-ws-server`](https://tinybase.org/api/synchronizer-ws-server/)
      * [`synchronizer-ws-server-durable-object`](https://tinybase.org/api/synchronizer-ws-server-durable-object/)
      * [`synchronizer-ws-server-simple`](https://tinybase.org/api/synchronizer-ws-server-simple/)
      * [`ui-react`](https://tinybase.org/api/ui-react/)
      * [`ui-react-dom`](https://tinybase.org/api/ui-react-dom/)
      * [`ui-react-inspector`](https://tinybase.org/api/ui-react-inspector/)
      * [`ui-svelte`](https://tinybase.org/api/ui-svelte/)
      * [`ui-svelte-dom`](https://tinybase.org/api/ui-svelte-dom/)
      * [`ui-svelte-inspector`](https://tinybase.org/api/ui-svelte-inspector/)
      * [`middleware`](https://tinybase.org/api/middleware/)
      * [`schematizer-arktype`](https://tinybase.org/api/schematizer-arktype/)
      * [`schematizer-effect`](https://tinybase.org/api/schematizer-effect/)
      * [`schematizer-typebox`](https://tinybase.org/api/schematizer-typebox/)
      * [`schematizer-valibot`](https://tinybase.org/api/schematizer-valibot/)
      * [`schematizer-yup`](https://tinybase.org/api/schematizer-yup/)
      * [`schematizer-zod`](https://tinybase.org/api/schematizer-zod/)
      * [`schematizers`](https://tinybase.org/api/schematizers/)
        * [Interfaces](https://tinybase.org/api/schematizers/interfaces/)
        * [Functions](https://tinybase.org/api/schematizers/functions/)
          * [`createCustomSchematizer`](https://tinybase.org/api/schematizers/functions/creation/createcustomschematizer/)


  * [TinyBase](https://tinybase.org/)
  * [API](https://tinybase.org/api/)
  * [`schematizers`](https://tinybase.org/api/schematizers/)
  * [Functions](https://tinybase.org/api/schematizers/functions/)
  * [`createCustomSchematizer`](https://tinybase.org/api/schematizers/functions/creation/createcustomschematizer/)


# `createCustomSchematizer`
The `createCustomSchematizer` function creates a custom [`Schematizer`](https://tinybase.org/api/schematizers/interfaces/schematizer/schematizer/) that can convert schemas from any validation library into TinyBase schemas.

```
createCustomSchematizer[](https://tinybase.org/api/schematizers/functions/creation/createcustomschematizer/)(
  unwrapSchema: (schema: any, defaultValue?: any, allowNull?: boolean) => [any, any, boolean],
  getProperties: (schema: any) => any,
): Schematizer[](https://tinybase.org/api/schematizers/interfaces/schematizer/schematizer/)
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `unwrapSchema`  | `(schema: any, defaultValue?: any, allowNull?: boolean) => [any, any, boolean]`  | A function that unwraps a schema to extract the base type, default value, and nullable flag. It should recursively unwrap optional/nullable wrappers and return a tuple of [schema, defaultValue, allowNull].  |  
| `getProperties`  | `(schema: any) => any`  | A function that extracts the properties/entries/shape from an object schema. Returns undefined if the schema is not an object.  |  
| returns  | `Schematizer[](https://tinybase.org/api/schematizers/interfaces/schematizer/schematizer/)`  | A new [`Schematizer`](https://tinybase.org/api/schematizers/interfaces/schematizer/schematizer/) instance.  |  
This function allows you to build schematizers for validation libraries not natively supported by TinyBase. You provide two functions: one to unwrap optional/nullable/default wrappers from your library's schemas, and one to extract object properties.
## Example
This example creates a custom schematizer for a hypothetical validation library.

```
import {createCustomSchematizer} from 'tinybase/schematizers';

// Hypothetical library has schemas like:
// {type: 'string'}, {type: 'optional', inner: ...}, etc.

const unwrapSchema = (schema, defaultValue, allowNull) => {
  if (schema.type === 'optional') {
    return unwrapSchema(schema.inner, defaultValue, allowNull);
  }
  if (schema.type === 'nullable') {
    return unwrapSchema(schema.inner, defaultValue, true);
  }
  return [schema, defaultValue ?? schema.default, allowNull ?? false];
};

const getProperties = (schema) => schema.fields;

const schematizer = createCustomSchematizer[](https://tinybase.org/api/schematizers/functions/creation/createcustomschematizer/)(unwrapSchema, getProperties);

const tablesSchema = schematizer.toTablesSchema[](https://tinybase.org/api/schematizers/interfaces/schematizer/schematizer/methods/conversion/totablesschema/)({
  pets: {type: 'object', fields: {name: {type: 'string'}}},
});
console.log(tablesSchema);
// -> {pets: {name: {type: 'string'}}}

```

## Since
v7.1.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
