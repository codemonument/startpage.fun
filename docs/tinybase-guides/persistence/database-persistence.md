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
        * [An Intro To Persistence](https://tinybase.org/guides/persistence/an-intro-to-persistence/)
        * [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/)
        * [Third-Party CRDT Persistence](https://tinybase.org/guides/persistence/third-party-crdt-persistence/)
        * [Custom Persistence](https://tinybase.org/guides/persistence/custom-persistence/)
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
  * [Persistence](https://tinybase.org/guides/persistence/)
  * [Database Persistence](https://tinybase.org/guides/persistence/database-persistence/)


# Database Persistence
Since v4.0, there are various options for persisting [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data to and from SQLite databases, via a range of third-party modules.
There are currently nine SQLite-based persistence options, and two for PostgreSQL:  
| [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)  | Storage  |  
| --- | --- |  
| [`Sqlite3Persister`](https://tinybase.org/api/persister-sqlite3/interfaces/persister/sqlite3persister/)  | SQLite in Node, via [sqlite3](https://github.com/TryGhost/node-sqlite3)  |  
| [`SqliteBunPersister`](https://tinybase.org/api/persister-sqlite-bun/interfaces/persister/sqlitebunpersister/)  | SQLite in Bun, via [bun:sqlite](https://bun.sh/docs/api/sqlite)  |  
| [`SqliteWasmPersister`](https://tinybase.org/api/persister-sqlite-wasm/interfaces/persister/sqlitewasmpersister/)  | SQLite in a browser, via [sqlite-wasm](https://github.com/tomayac/sqlite-wasm)  |  
| [`ExpoSqlitePersister`](https://tinybase.org/api/persister-expo-sqlite/interfaces/persister/exposqlitepersister/)  | SQLite in React Native, via [expo-sqlite](https://github.com/expo/expo/tree/main/packages/expo-sqlite)  |  
| [`ReactNativeSqlitePersister`](https://tinybase.org/api/persister-react-native-sqlite/interfaces/persister/reactnativesqlitepersister/)  | SQLite in React Native, via [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage)  |  
| [`CrSqliteWasmPersister`](https://tinybase.org/api/persister-cr-sqlite-wasm/interfaces/persister/crsqlitewasmpersister/)  | SQLite CRDTs, via [cr-sqlite-wasm](https://github.com/vlcn-io/cr-sqlite)  |  
| [`ElectricSqlPersister`](https://tinybase.org/api/persister-electric-sql/interfaces/persister/electricsqlpersister/)  | Electric SQL, via [electric](https://github.com/electric-sql/electric)  |  
| [`LibSqlPersister`](https://tinybase.org/api/persister-libsql/interfaces/persister/libsqlpersister/)  | LibSQL for Turso, via [libsql-client](https://github.com/tursodatabase/libsql-client-ts)  |  
| [`PowerSyncPersister`](https://tinybase.org/api/persister-powersync/interfaces/persister/powersyncpersister/)  | PowerSync, via [powersync-sdk](https://github.com/powersync-ja/powersync-js)  |  
| [`PostgresPersister`](https://tinybase.org/api/persister-postgres/interfaces/persister/postgrespersister/)  | PostgreSQL, via [postgres](https://github.com/porsager/postgres)  |  
| [`PglitePersister`](https://tinybase.org/api/persister-pglite/interfaces/persister/pglitepersister/)  | PostgreSQL, via [PGlite](https://github.com/electric-sql/pglite)  |  
Each creation function takes a database reference, and a [`DatabasePersisterConfig`](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/) object to describe its configuration. There are two modes for persisting a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with a database:
  * A JSON serialization of the whole [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), which is stored in a single row of a table (normally called `tinybase`) within the database. This is configured by providing a [`DpcJson`](https://tinybase.org/api/persisters/type-aliases/configuration/dpcjson/) object.
  * A tabular mapping of [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) to database table names (and vice-versa). [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) are stored in a separate special table (normally called `tinybase_values`). This is configured by providing a [`DpcTabular`](https://tinybase.org/api/persisters/type-aliases/configuration/dpctabular/) object.


Note that changes made to the database (outside of a [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/)) are picked up immediately if they are made via the same connection or library that it is using. If the database is being changed by another client, the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) needs to poll for changes. Hence both configuration types also contain an `autoLoadIntervalSeconds` property which indicates how often it should do that. This defaults to 1 second.
## Using JSON Serialization
To get started, we'll use JSON serialization to save a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to SQLite in the browser, via the [sqlite-wasm](https://github.com/tomayac/sqlite-wasm) module.
Firstly, use the module to initiate a database. Here it will be created in memory, but typically you would use the origin private file system (OPFS) as a storage back-end.

```
import sqlite3InitModule from '@sqlite.org/sqlite-wasm';
import {createStore} from 'tinybase';
import {createSqliteWasmPersister} from 'tinybase/persisters/persister-sqlite-wasm';

const sqlite3 = await sqlite3InitModule();
let db = new sqlite3.oo1.DB(':memory:', 'c');

```

Next create a simple [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) with a small amount of data:

```
const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({pets: {fido: {species: 'dog'}}});

```

The [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) itself is created with the createSqliteWasmPersister method. This requires a reference to the the `sqlite3` module itself and the database. We're not providing any configuration so it will use JSON serialization into the default table (namely one called `tinybase`).

```
const jsonPersister = createSqliteWasmPersister[](https://tinybase.org/api/the-essentials/persisting-stores/createsqlitewasmpersister/)(store, sqlite3, db);

```

Now we can use the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) to save data to the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/). Of course you can also use the [`startAutoSave`](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/startautosave/) method to make it automatic.

```
await jsonPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();

```

And we can check the database to ensure the data has been stored:

```
console.log(db.exec('SELECT * FROM tinybase;', {rowMode: 'object'}));
// -> [{_id: '_', store: '[{"pets":{"fido":{"species":"dog"}}},{}]'}]

```

If the data in the database is changed...

```
db.exec(
  'UPDATE tinybase SET store = ' +
    `'[{"pets":{"felix":{"species":"cat"}}},{}]' WHERE _id = '_';`,
);

```

...it can be picked up by loading it explicitly or with auto-loading:

```
await jsonPersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
console.log(store.getTables[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettables/)());
// -> {pets: {felix: {species: 'cat'}}}

await jsonPersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

Please see the [`DpcJson`](https://tinybase.org/api/persisters/type-aliases/configuration/dpcjson/) documentation for more detail on configuring this type of persistence.
## Using Tabular Mapping
More flexibly, you can map distinct [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) to database tables and back again. This is likely a more suitable approach if you are binding TinyBase to existing data.
To use this technique, you must provide a [`DatabasePersisterConfig`](https://tinybase.org/api/persisters/type-aliases/configuration/databasepersisterconfig/) object when you create the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/), and specify how you would like [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) (and [`Values`](https://tinybase.org/api/store/type-aliases/store/values/)) to correspond to tables in the database.
It is important to note that both the tabular mapping in ('save') and out ('load') of an underlying database are disabled by default. This is to ensure that if you pass in an existing populated database you don't run the immediate risk of corrupting or losing all your data.
This configuration therefore takes a `tables` property object (with child `load` and `save` property objects) and a `values` property object. One of these at least is required for the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) to do anything!
Let's demonstrate. We start by creating a new database and resetting the data in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) to put into it:

```
db = new sqlite3.oo1.DB(':memory:', 'c');
store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({
  pets: {felix: {species: 'cat'}, fido: {species: 'dog'}},
  species: {dog: {price: 5}, cat: {price: 4}},
});

```

The persister itself has a more complex configuration as described above:

```
const tabularPersister = createSqliteWasmPersister[](https://tinybase.org/api/the-essentials/persisting-stores/createsqlitewasmpersister/)(store, sqlite3, db, {
  mode: 'tabular',
  tables: {
    save: {pets: 'pets', species: 'animal_species'},
    load: {pets: 'pets', animal_species: 'species'},
  },
});

```

Notice how there is a symmetric mapping of [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) to database table and vice-versa. It is deliberate that this must be spelled out like this, so that your intent to connect to (or especially mutate) existing data is very explicit.
Again, we can save the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)...

```
await tabularPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();

```

...and see the resulting data in the SQLite database:

```
console.log(db.exec('SELECT * FROM pets;', {rowMode: 'object'}));
// -> [{_id: 'felix', species: 'cat'}, {_id: 'fido', species: 'dog'}]
console.log(db.exec('SELECT * FROM animal_species;', {rowMode: 'object'}));
// -> [{_id: 'dog', price: 5}, {_id: 'cat', price: 4}]

```

And, as expected, making a change to the database and re-loading brings the changes back into the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/):

```
db.exec(`INSERT INTO pets (_id, species) VALUES ('cujo', 'wolf')`);
await tabularPersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
console.log(store.getTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/)('pets'));
// -> {felix: {species: 'cat'}, fido: {species: 'dog'}, cujo: {species: 'wolf'}}

await tabularPersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

[`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) are saved into a separate table, normally called `tinybase_values`. See the [`DpcTabularValues`](https://tinybase.org/api/persisters/type-aliases/configuration/dpctabularvalues/) documentation for examples of how to use that.
## Working With An Existing Database
In theory, it's possible to bind TinyBase to a SQLite database that already exists. You will obviously want to list the tables of interest in the `load` section of the configuration.
Do be aware that TinyBase is an in-memory data structure, and so you will not want to do this if your database tables are particularly large and complex.
Also be very careful when setting the `save` configuration, since it will mean that TinyBase writes its version of the data back to the database (optionally removing empty columns). If there is data that does not survive the round trip (because of schema constraints or data typing), it will be lost.
The [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) maps a column in the database table to provide and store the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) [`Table`](https://tinybase.org/api/store/type-aliases/store/table/)'s [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/). By default, this is a database column called `_id`, but you can set it to be something else, per table. It is required that this column is a primary or unique key in the database so that the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) knows how to update existing records.
So for example, imagine your existing database table looks like this, with the first column of each table being a primary key:

```
> SELECT * FROM the_pets_table;
+--------+---------+-------+
| pet_id | species | color |
+--------+---------+-------+
| fido   | dog     | brown |
| felix  | cat     | black |
+--------+---------+-------+

> SELECT * FROM the_species_table;
+------------+-------+
| species_id | price |
+------------+-------+
| dog        | 5     |
| cat        | 4     |
+------------+-------+

```

For this, you may consider the following configuration for your [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/):

```
const databasePersisterConfig: DatabasePersisterConfig = {
  mode: 'tabular',
  tables: {
    load: {
      the_pets_table: {tableId: 'pets', rowIdColumnName: 'pet_id'},
      the_species_table: {tableId: 'species', rowIdColumnName: 'species_id'},
    },
    save: {
      pets: {tableName: 'the_pets_table', rowIdColumnName: 'pet_id'},
      species: {tableName: 'the_species_table', rowIdColumnName: 'species_id'},
    },
  },
};

```

This will load into a [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) (and save back again) with [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) that look like this:

```
{
  "pets": {
    "fido": {"species": "dog", "color": "brown"},
    "felix": {"species": "cat", "color": "black"}
  },
  "species": {
    "dog": {"price": 5},
    "cat": {"price": 4}
  }
}

```

## Loading subsets of database tables
If you are using the tabular mapping, you can specify that only a subset of the data in the database table should be loaded into TinyBase. This is useful for reducing the amount of data that is loaded into memory, or for working with a subset of data that is relevant to the current user.
Do this by specifying a `condition` in the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) configuration. This is a single string argument which is used as a SQL `WHERE` clause when reading and observing data in the table. The string must include the placeholder `$tableName` which will be replaced with the name of the table being loaded or saved.
For example, imagine we have a database table of pets with a flag that indicates if they have been sold or not. Only Felix has:

```
db = new sqlite3.oo1.DB(':memory:', 'c');
db.exec(`CREATE TABLE pets (_id PRIMARY KEY, species, sold);`);
db.exec(
  `INSERT INTO pets (_id, species, sold) VALUES ` +
    `('fido', 'dog', 0),` +
    `('felix', 'cat', 1),` +
    `('cujo', 'wolf', 0);`,
);
console.log(db.exec('SELECT * FROM pets;', {rowMode: 'object'}));
// -> [{_id: 'fido', species: 'dog', sold: 0}, {_id: 'felix', species: 'cat', sold: 1}, {_id: 'cujo', species: 'wolf', sold: 0}]

```

We can configure the [`Persister`](https://tinybase.org/api/the-essentials/persisting-stores/persister/) to only load and save pets that have not been sold:

```
const subsetPersister = createSqliteWasmPersister[](https://tinybase.org/api/the-essentials/persisting-stores/createsqlitewasmpersister/)(store, sqlite3, db, {
  mode: 'tabular',
  tables: {
    load: {pets: {tableId: 'pets', condition: '$tableName.sold = 0'}},
    save: {pets: {tableName: 'pets', condition: '$tableName.sold = 0'}},
  },
});

```

Then when we load the following data into the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/), notice that only Fido and Cujo are present:

```
await subsetPersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
console.log(store.getTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/)('pets'));
// -> {fido: {species: 'dog', sold: 0}, cujo: {species: 'wolf', sold: 0}}

```

And when we change the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and save it back to the database, only Fido and Cujo are touched:

```
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'species', 'corgi');
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'cujo', 'species', 'husky');
await subsetPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();

```

Don't worry, Felix is still in the database!

```
console.log(db.exec('SELECT * FROM pets;', {rowMode: 'object'}));
// -> [{_id: 'fido', species: 'corgi', sold: 0}, {_id: 'felix', species: 'cat', sold: 1}, {_id: 'cujo', species: 'husky', sold: 0}]

```

An important note, of course, is that if you update the data in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) such that the resulting data does not match the subset condition, saving it back to the database will succeed, and it will stay in the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/):

```
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('pets', 'fido', 'sold', 1);
await subsetPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();

console.log(store.getTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/)('pets'));
// -> {fido: {species: 'corgi', sold: 1}, cujo: {species: 'husky', sold: 0}}

console.log(db.exec('SELECT * FROM pets;', {rowMode: 'object'}));
// -> [{_id: 'fido', species: 'corgi', sold: 1}, {_id: 'felix', species: 'cat', sold: 1}, {_id: 'cujo', species: 'husky', sold: 0}]

```

But it _will_ be lost from the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) on the next load, even though it is still in the database:

```
await subsetPersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
console.log(store.getTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/)('pets'));
// -> {cujo: {species: 'husky', sold: 0}}

```

Finally it's worth confirming that when this subset configuration is used, the underlying database table will not be cleared or removed if the [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) is emptied (since there may be other data in the table that is not relevant to this [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)). In this example, we remove `cujo`, but `fido` and `felix` (not in the subset) are still in the database:

```
store.delTable[](https://tinybase.org/api/store/interfaces/store/store/methods/deleter/deltable/)('pets');
await subsetPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();

console.log(store.getTable[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/gettable/)('pets'));
// -> {}

console.log(db.exec('SELECT * FROM pets;', {rowMode: 'object'}));
// -> [{_id: 'fido', species: 'corgi', sold: 1}, {_id: 'felix', species: 'cat', sold: 1}]

await subsetPersister.destroy[](https://tinybase.org/api/metrics/interfaces/metrics/metrics/methods/lifecycle/destroy/)();

```

## Null [`Values`](https://tinybase.org/api/store/type-aliases/store/values/) and Dense [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/)
When working with database persisters, it's important to understand how SQL `NULL` values map to TinyBase values. This has significant implications for the structure of your [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/).
### SQL NULL is TinyBase null
In TinyBase v7.0, `null` became a valid [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) and [`Value`](https://tinybase.org/api/store/type-aliases/store/value/) type alongside `string`, `number`, and `boolean`. From v8.0, `object` and `array` types are also allowed; these are stored as JSON-encoded strings in SQL columns. When a database persister loads data from a SQL table, any SQL `NULL` values are loaded as TinyBase `null` values, and JSON-encoded columns are decoded back to objects or arrays.
This is the natural and correct behavior: SQL `NULL` represents an explicit null value, which maps directly to TinyBase's `null` type.
### Sparse vs Dense [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/)
TinyBase tables can be either **sparse** or **dense** :
  * A **sparse table** has rows where some Cells may be missing entirely. The [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) object simply doesn't have that [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) as a property.
  * A **dense table** has rows where every [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) is present, though some may have `null` values.


Here's an example showing the difference:

```
// Sparse table - some Cells are missing
store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog'},
  felix: {species: 'cat', color: 'black'},
});

console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog'}
// Note: no 'color' property

console.log(store.hasCell[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hascell/)('pets', 'fido', 'color'));
// -> false

// Dense table - all Cells present, some are null
store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog', color: null},
  felix: {species: 'cat', color: 'black'},
});

console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', color: null}
// Note: 'color' property exists with null value

console.log(store.hasCell[](https://tinybase.org/api/store/interfaces/store/store/methods/getter/hascell/)('pets', 'fido', 'color'));
// -> true

```

### Why Database [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) Become Dense
SQL databases have a fixed schema: every table has a defined set of columns, and every row must account for all columns. When a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) has no value, SQL represents this as `NULL`.
When a database persister loads data from SQL into TinyBase:
  * Every SQL column becomes a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) in the TinyBase table
  * Every SQL `NULL` becomes a TinyBase `null` value
  * The resulting TinyBase table is **dense** - every [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) has every [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/)


This means that if you save a sparse TinyBase table to a database and load it back, it will become dense. For example, the roundtrip transformation via a SQLite database looks something like:

```
store.setTables[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settables/)({
  pets: {
    fido: {species: 'dog'},
    felix: {species: 'cat', color: 'black'},
  },
});

await tabularPersister.save[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/save/save/)();
// After saving the the SQL database:
// SQL table: fido (species: 'dog', color: NULL)
//           felix (species: 'cat', color: 'black')

await tabularPersister.load[](https://tinybase.org/api/persisters/interfaces/persister/persister/methods/load/load/)();
// After loading again, the Store now has a dense table with an explicit null:
console.log(store.getRow[](https://tinybase.org/api/the-essentials/getting-data/getrow/)('pets', 'fido'));
// -> {species: 'dog', color: null}

```

### Important Implications
  1. **Round-trip behavior** : A sparse table that goes through a save/load cycle with a database persister will become dense. This is a breaking change from TinyBase v6.x and earlier.
  2. **The`hasCell` method**: After loading from a database, `hasCell` will return `true` for all Cells in the table schema, even those that were originally missing. Use `getCell(tableId, rowId, cellId) === null` to check if a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) has a null value.
  3. **[Schemas](https://tinybase.org/guides/schemas/)** : When using database persisters, you may want to use the `allowNull` schema property to explicitly allow `null` values:

```
store.setTablesSchema[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settablesschema/)({
  pets: {
    species: {type: 'string'},
    color: {type: 'string', allowNull: true},
  },
});

```

  4. **Memory usage** : Dense tables consume more memory than sparse tables. If you have large tables with many optional Cells, this could be significant.


## Summary
With care, you can load and save [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data from and to a SQLite database in a variety of ways and via different modules. This is new in v4.0, so feedback on the functionality is welcomed!
Next we move on to look at how to fully synchronize TinyBase Stores using more complex CRDT frameworks, such as Yjs and Automerge, in the [Third-Party CRDT Persistence](https://tinybase.org/guides/persistence/third-party-crdt-persistence/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
