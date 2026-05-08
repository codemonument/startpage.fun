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
        * [Functions](https://tinybase.org/api/common/functions/)
          * [Convenience functions](https://tinybase.org/api/common/functions/convenience/)
            * [`defaultSorter`](https://tinybase.org/api/common/functions/convenience/defaultsorter/)
            * [`getUniqueId`](https://tinybase.org/api/common/functions/convenience/getuniqueid/)
          * [Hash functions](https://tinybase.org/api/common/functions/hash/)
          * [Stamps functions](https://tinybase.org/api/common/functions/stamps/)
        * [Type Aliases](https://tinybase.org/api/common/type-aliases/)
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


  * [TinyBase](https://tinybase.org/)
  * [API](https://tinybase.org/api/)
  * [`common`](https://tinybase.org/api/common/)
  * [Functions](https://tinybase.org/api/common/functions/)
  * [Convenience functions](https://tinybase.org/api/common/functions/convenience/)
  * [`defaultSorter`](https://tinybase.org/api/common/functions/convenience/defaultsorter/)


# `defaultSorter`
The `defaultSorter` function is provided as a convenience to sort keys alphanumerically, and can be provided to the `sliceIdSorter` and `rowIdSorter` parameters of the [`setIndexDefinition`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/) method in the [`indexes`](https://tinybase.org/api/indexes/) module, for example.

```
defaultSorter[](https://tinybase.org/api/common/functions/convenience/defaultsorter/)(
  sortKey1: SortKey[](https://tinybase.org/api/common/type-aliases/parameter/sortkey/),
  sortKey2: SortKey[](https://tinybase.org/api/common/type-aliases/parameter/sortkey/),
): number
```
  
|   | Type  | Description  |  
| --- | --- | --- |  
| `sortKey1`  | `SortKey[](https://tinybase.org/api/common/type-aliases/parameter/sortkey/)`  | The first item of the pair to compare.  |  
| `sortKey2`  | `SortKey[](https://tinybase.org/api/common/type-aliases/parameter/sortkey/)`  | The second item of the pair to compare.  |  
| returns  | `number`  | A number indicating how to sort the pair.  |  
## Examples
This example creates an [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object.

```
import {createIndexes, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)();
const indexes = createIndexes[](https://tinybase.org/api/indexes/functions/creation/createindexes/)(store);
console.log(indexes.getIndexIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getindexids/)());
// -> []

```

This example creates a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), creates an [`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/) object, and defines an [`Index`](https://tinybase.org/api/indexes/type-aliases/concept/index/) based on the first letter of the pets' names. The [`Slice`](https://tinybase.org/api/indexes/type-aliases/concept/slice/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) (and [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) within them) are alphabetically sorted using the `defaultSorter` function.

```
import {createIndexes, createStore, defaultSorter} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog'},
  felix: {species: 'cat'},
  cujo: {species: 'dog'},
});

const indexes = createIndexes[](https://tinybase.org/api/indexes/functions/creation/createindexes/)(store);
indexes.setIndexDefinition[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/configuration/setindexdefinition/)(
  'byFirst', //              indexId
  'pets', //                 tableId
  (_, rowId) => rowId[0], // each Row's Slice Id
  (_, rowId) => rowId, //    each Row's sort key
  defaultSorter, //          sort Slice Ids
  defaultSorter, //          sort Row Ids by sort key
);

console.log(indexes.getSliceIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getsliceids/)('byFirst'));
// -> ['c', 'f']
console.log(indexes.getSliceRowIds[](https://tinybase.org/api/indexes/interfaces/indexes/indexes/methods/getter/getslicerowids/)('byFirst', 'f'));
// -> ['felix', 'fido']

```

## Since
v1.0.0
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
