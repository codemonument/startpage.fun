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
      * [Using Checkpoints](https://tinybase.org/guides/using-checkpoints/)
      * [Using Queries](https://tinybase.org/guides/using-queries/)
        * [An Intro To Queries](https://tinybase.org/guides/using-queries/an-intro-to-queries/)
        * [TinyQL](https://tinybase.org/guides/using-queries/tinyql/)
        * [Building A UI With Queries](https://tinybase.org/guides/using-queries/building-a-ui-with-queries/)
      * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)
      * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [Using Queries](https://tinybase.org/guides/using-queries/)
  * [TinyQL](https://tinybase.org/guides/using-queries/tinyql/)


# TinyQL
This guide describes how to build a query against [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) data, using the [API](https://tinybase.org/api/) provided by the [`setQueryDefinition`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/) method in the [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) object.
This guide is called 'TinyQL', rather flippantly. [`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/) to TinyBase are not made with a standard parsable language in the same way you would use SQL to access a traditional relational database. Rather, the [API](https://tinybase.org/api/) is typed and programmatic, making it a performant, unambiguous, and composable way to transform data.

```
import {createQueries, createStore} from 'tinybase';

const store = createStore[](https://tinybase.org/api/the-essentials/creating-stores/createstore/)().setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog', color: 'brown'},
  felix: {species: 'cat', color: 'black'},
  cujo: {species: 'dog', color: 'black'},
});

const queries = createQueries[](https://tinybase.org/api/queries/functions/creation/createqueries/)(store);
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', (keywords) => {
  // TinyQL goes here
});

```

One downside might seem that you can't directly use your experience of SQL syntax to work with TinyBase queries - but, as you'll see, many of the similar concepts will be very familiar.
You define a query with the [`setQueryDefinition`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/) method. It takes an [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/), you'd like to assign to the query, and the `root` [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) from which the data will be queried. The root table is like the first table that is named in a traditional SQL query, except that only 'left' joins can be made from it. (This means that the result of a query can never have more Rows than that underlying [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) did.)
The third parameter, `build`, is where the magic happens: you provide a function to define the query. that will be called with with an object that contains the six named 'keyword' functions for the query:
  * `select`: a function that lets you specify a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or calculated value for including into the query's result.
  * `join` describes a function that lets you specify a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or calculated value to join the main query [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) to others, by [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).
  * `where` describes a function that lets you specify conditions to filter results, based on the underlying Cells of the main or joined [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/).
  * `group` describes a function that lets you specify that the values of a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in multiple result Rows should be aggregated together.
  * `having` describes a function that lets you specify conditions to filter results, based on the grouped Cells resulting from a [`Group`](https://tinybase.org/api/queries/type-aliases/definition/group/) clause.
  * `param` describes a function that lets you access parameterized values that can be dynamically changed without redefining the query.


All six can be destructured from the callback's single parameter:

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)(
  'query',
  'pets',
  ({select, join, where, group, having, param}) => {
    select(/* ... */);
    select(/* ... */);
    join(/* ... */);
    where(/* ... */);
    group(/* ... */);
    having(/* ... */);
    // and so on...
  },
);

```

Any of these keyword functions can be called multiple times (even imperatively, such as in a loop). The only requirement for a valid query is that at least one `select` function call is made.
Here's a quick summary of each of the six keyword functions. Some of them are overloaded and have different effects based on the number of arguments, but they are all fully typed with TypeScript and well documented with examples.
## [`Select`](https://tinybase.org/api/queries/type-aliases/definition/select/)
The [`Select`](https://tinybase.org/api/queries/type-aliases/definition/select/) type describes the `select` function that lets you specify a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or calculated value for including into the query's result. You can chain the `as` function to change the name of the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/).
Calling this function with one [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) parameter will indicate that the query should select the value of that specified [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) from the query's main [`Table`](https://tinybase.org/api/store/type-aliases/store/table/):

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select}) => select('color'));

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('query'));
// -> {fido: {color: 'brown'}, felix: {color: 'black'}, cujo: {color: 'black'}}

```

Calling this function with one _callback_ parameter will indicate that the query should select a calculated value, based on one or more [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) values:

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select}) =>
  select((getCell) => getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('color')?.toUpperCase()).as('COLOR'),
);

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('query'));
// -> {fido: {COLOR: 'BROWN'}, felix: {COLOR: 'BLACK'}, cujo: {COLOR: 'BLACK'}}

```

If you are joining multiple [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/) in the query, use an additional first parameter to indicate which the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) should come from:

```
store
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
    fido: {species: 'dog', ownerId: '1'},
    felix: {species: 'cat', ownerId: '2'},
    cujo: {species: 'dog', ownerId: '3'},
  })
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('owners', {
    1: {name: 'Alice'},
    2: {name: 'Bob'},
    3: {name: 'Carol'},
  });

queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select, join}) => {
  select('species');
  select('owners', 'name');
  join('owners', 'ownerId');
});

queries.forEachResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/iterator/foreachresultrow/)('query', (rowId) => {
  console.log({[rowId]: queries.getResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrow/)('query', rowId)});
});
// -> {fido: {species: 'dog', name: 'Alice'}}
// -> {felix: {species: 'cat', name: 'Bob'}}
// -> {cujo: {species: 'dog', name: 'Carol'}}

```

## [`Join`](https://tinybase.org/api/queries/type-aliases/definition/join/)
We just saw the `join` keyword in action. The [`Join`](https://tinybase.org/api/queries/type-aliases/definition/join/) type describes a function that lets you specify a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) or calculated value to join the main query [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) to other [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/), by their [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/).
Calling this function with two [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) parameters will indicate that the join to a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) in an adjacent [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) is made by finding its [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) in a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) of the query's main [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), as in the example above.
You can join zero, one, or many [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/). You can even join the same underlying [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) multiple times, (though in that case you will need to use the 'as' function to distinguish them from each other):

```
store
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
    fido: {species: 'dog', buyerId: '1', sellerId: '2'},
    felix: {species: 'cat', buyerId: '2'},
    cujo: {species: 'dog', buyerId: '3', sellerId: '1'},
  })
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('humans', {
    1: {name: 'Alice'},
    2: {name: 'Bob'},
    3: {name: 'Carol'},
  });

queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select, join}) => {
  select('buyers', 'name').as('buyer');
  select('sellers', 'name').as('seller');
  join('humans', 'buyerId').as('buyers');
  join('humans', 'sellerId').as('sellers');
});

queries.forEachResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/iterator/foreachresultrow/)('query', (rowId) => {
  console.log({[rowId]: queries.getResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrow/)('query', rowId)});
});
// -> {fido: {buyer: 'Alice', seller: 'Bob'}}
// -> {felix: {buyer: 'Bob'}}
// -> {cujo: {buyer: 'Carol', seller: 'Alice'}}

```

Because a [`Join`](https://tinybase.org/api/queries/type-aliases/definition/join/) clause is used to identify which unique [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Id`](https://tinybase.org/api/common/type-aliases/identity/id/) of the joined [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) will be joined to each [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) of the main [`Table`](https://tinybase.org/api/store/type-aliases/store/table/), queries follow the 'left join' semantics you may be familiar with from SQL.
By default, each join is made from the main query [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) to the joined table, but it is also possible to connect via an intermediate join [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) to a more distant join [`Table`](https://tinybase.org/api/store/type-aliases/store/table/).
The [`Join`](https://tinybase.org/api/queries/type-aliases/definition/join/) type documentation provides many more examples of joining in queries.
## [`Where`](https://tinybase.org/api/queries/type-aliases/definition/where/)
The [`Where`](https://tinybase.org/api/queries/type-aliases/definition/where/) type describes the `where` function that lets you specify conditions to filter results, based on the underlying Cells of the main or joined [`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/).
Calling this function with two parameters is used to include only those Rows for which a specified [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the query's main [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) has a specified value:

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select, where}) => {
  select('species');
  where('species', 'dog');
});

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('query'));
// -> {fido: {species: 'dog'}, cujo: {species: 'dog'}}

```

A [`Where`](https://tinybase.org/api/queries/type-aliases/definition/where/) condition has to be true for a [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) to be included in the results. Each [`Where`](https://tinybase.org/api/queries/type-aliases/definition/where/) class is additive, as though combined with a logical 'and'.
If you wish to create an 'or' expression, or just create a more complex criterion, use the single parameter that allows arbitrary programmatic conditions:

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select, where}) => {
  select('species');
  where((getCell) => getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('species')?.[0] == 'c');
});

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('query'));
// -> {felix: {species: 'cat'}}

```

## [`Group`](https://tinybase.org/api/queries/type-aliases/definition/group/)
The [`Group`](https://tinybase.org/api/queries/type-aliases/definition/group/) type describes the `group` function that lets you specify that the values of a [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in multiple result Rows should be aggregated together. This is applied after any joins or where-based filtering.
If you provide a [`Group`](https://tinybase.org/api/queries/type-aliases/definition/group/) for every [`Select`](https://tinybase.org/api/queries/type-aliases/definition/select/), the result will be a single [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) with every [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) having been aggregated. If you provide a [`Group`](https://tinybase.org/api/queries/type-aliases/definition/group/) for only one, or some, of the [`Select`](https://tinybase.org/api/queries/type-aliases/definition/select/) clauses, the _others_ will be automatically used as dimensional values (analogous to the 'group by`semantics in SQL), within which the aggregations of [`Group`](/api/queries/type-aliases/definition/group/) Cells will be performed.
You can join the same underlying [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) multiple times, but in that case you will need to use the 'as' function to distinguish them from each other.

```
store.setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
  fido: {species: 'dog', price: 5},
  felix: {species: 'cat', price: 4},
  cujo: {species: 'dog', price: 4},
  tom: {species: 'cat', price: 3},
  carnaby: {species: 'parrot', price: 3},
  polly: {species: 'parrot', price: 3},
});

queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select, group}) => {
  select('species');
  select('price');
  group('price', 'count').as('count');
  group('price', 'avg').as('avgPrice');
});

queries.forEachResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/iterator/foreachresultrow/)('query', (rowId) => {
  console.log({[rowId]: queries.getResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrow/)('query', rowId)});
});
// -> {0: {species: 'dog', count: 2, avgPrice: 4.5}}
// -> {1: {species: 'cat', count: 2, avgPrice: 3.5}}
// -> {2: {species: 'parrot', count: 2, avgPrice: 3}}

```

You can also provide your own aggregate function, with optional 'shortcut' functions if you can avoid calculating the new value for the result without scanning every value again (much like you can with calculated [`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/)). See the [`Group`](https://tinybase.org/api/queries/type-aliases/definition/group/) documentation for more details and examples.
## [`Having`](https://tinybase.org/api/queries/type-aliases/definition/having/)
The [`Having`](https://tinybase.org/api/queries/type-aliases/definition/having/) type describes the `having` function that lets you specify conditions to filter results, based on the grouped Cells resulting from a [`Group`](https://tinybase.org/api/queries/type-aliases/definition/group/) clause.
Like the `where` function, call this with two parameters is used to include only those Rows for which a specified [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) in the query's main [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) has a specified value.
_Unlike_ the `where` function, this filtering is applied _after_ the grouping has been performed, much like you would use `HAVING` instead of `WHERE` in a classic SQL environment.

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select, group, having}) => {
  select('pets', 'species');
  select('pets', 'price');
  group('price', 'min').as('minPrice');
  group('price', 'max').as('maxPrice');
  having('minPrice', 3);
});

queries.forEachResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/iterator/foreachresultrow/)('query', (rowId) => {
  console.log({[rowId]: queries.getResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrow/)('query', rowId)});
});
// -> {0: {species: 'cat', minPrice: 3, maxPrice: 4}}
// -> {1: {species: 'parrot', minPrice: 3, maxPrice: 3}}

```

(Note that you shouldn't make any assumptions about the [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) on a result [`Table`](https://tinybase.org/api/store/type-aliases/store/table/) that has been grouped.)
Again, multiple `having` functions will behave as though combined with a logical 'and'. If you wish to create an 'or' expression, or just create a more complex criterion, use the single parameter version that allows arbitrary programmatic conditions

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)('query', 'pets', ({select, group, having}) => {
  select('pets', 'species');
  select('pets', 'price');
  group('price', 'min').as('minPrice');
  group('price', 'max').as('maxPrice');
  having((getCell) => getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('minPrice') == getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('maxPrice'));
});

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('query'));
// -> {0: {species: 'parrot', minPrice: 3, maxPrice: 3}}

```

## [`Param`](https://tinybase.org/api/queries/type-aliases/definition/param/)
The [`Param`](https://tinybase.org/api/queries/type-aliases/definition/param/) type describes the `param` function that lets you use parameterized values in your queries. Params make queries more flexible and reusable by allowing you to change filtering, selection, or grouping criteria without redefining the entire query.
The initial param values are passed as the fourth argument to setQueryDefinition and can be accessed anywhere you want within the query definition using the `param` function:

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)(
  'query',
  'pets',
  ({select, where, param}) => {
    select('species');
    where('species', param('type'));
    // OR in callbacks, for example:
    // where((getCell) => getCell('species') === param('type'));
  },
  {type: 'dog'}, // Initial param values
);

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('query'));
// -> {fido: {species: 'dog'}, cujo: {species: 'dog'}}

```

You can update param values using setParamValue or [`setParamValues`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setparamvalues/) methods, which will automatically re-evaluate the query:

```
queries.setParamValue[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setparamvalue/)('query', 'type', 'cat');

console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('query'));
// -> {felix: {species: 'cat'}, tom: {species: 'cat'}}

```

Params work with all query keywords and can be used in complex expressions:

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)(
  'query',
  'pets',
  ({select, where, group, having, param}) => {
    select('species');
    select('price');
    where(
      (getCell) =>
        (getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('price') as number) >= (param('minPrice') as number)
    );
    group('price', 'avg').as('avgPrice');
    having(
      (getCell) =>
        (getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('avgPrice') as number) > (param('avgThreshold') as number));
  },
  {minPrice: 3, avgThreshold: 3},
);

```

[`Param`](https://tinybase.org/api/queries/type-aliases/definition/param/) values can be strings, numbers, booleans, or null, though notice, above, that you may have to cast them in TypeScript if you are comparing them in expressions. When a query definition includes params, any listeners on the query results will be notified when param values changes affect the result data, just as they would for underlying data changes.
## Putting It All Together
To finish off, let's look at a more complex complex TinyQL query that includes all the keywords in use together, and shows how something similar might have been expressed in SQL.
First let's build an interesting dataset:

```
store
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('pets', {
    fido: {speciesId: '1', colorId: '1', ownerId: '1'},
    rex: {speciesId: '1', colorId: '2', ownerId: '6'},
    cujo: {speciesId: '1', colorId: '3', ownerId: '3'},
    felix: {speciesId: '2', colorId: '2', ownerId: '2'},
    tom: {speciesId: '2', colorId: '1', ownerId: '5'},
    lowly: {speciesId: '3', colorId: '1', ownerId: '4'},
    smaug: {speciesId: '3', colorId: '4', ownerId: '1'},
  })
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('species', {
    1: {name: 'dog', price: 5},
    2: {name: 'cat', price: 4},
    3: {name: 'worm', price: 1},
  })
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('color', {
    1: {name: 'brown', premium: 1.0},
    2: {name: 'black', premium: 1.5},
    3: {name: 'white', premium: 2},
    4: {name: 'silver', premium: 4},
  })
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('owner', {
    1: {name: 'Alice', regionId: '1'},
    2: {name: 'Bob', regionId: '1'},
    3: {name: 'Carol', regionId: '2'},
    4: {name: 'Dennis', regionId: '2'},
    5: {name: 'Errol', regionId: '3'},
    6: {name: 'Fiona', regionId: '4'},
  })
  .setTable[](https://tinybase.org/api/store/interfaces/store/store/methods/setter/settable/)('region', {
    1: {name: 'California', country: 'US'},
    2: {name: 'New York', country: 'US'},
    3: {name: 'Washington', country: 'US'},
    4: {name: 'British Columbia', country: 'CA'},
  });

```

And then an interesting query against it:

```
queries.setQueryDefinition[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/configuration/setquerydefinition/)(
  'query',
  'pets',
  ({select, join, where, group, having}) => {
    // SELECT...
    select('state', 'name').as('stateName');
    select(
      (getTableCell) =>
        getTableCell('species', 'price') * getTableCell('color', 'premium'),
    ).as('fullPrice');

    // FROM...
    ['species', 'color', 'owner'].forEach((table) => join(table, `${table}Id`));
    join('region', 'owner', 'regionId').as('state');

    // WHERE...
    where('state', 'country', 'US');

    // GROUP
    group('fullPrice', 'avg').as('avgFullPrice');

    // HAVING
    having((getCell) => getCell[](https://tinybase.org/api/the-essentials/getting-data/getcell/)('avgFullPrice') >= 5);
  },
);

```

(Notice how the joins to the `species`, `color`, and `owner` tables are performed programmatically here - just to prove a point! - because there's a useful convention on the [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) [`Ids`](https://tinybase.org/api/common/type-aliases/identity/ids/) used. Also see the [Movie Database](https://tinybase.org/demos/movie-database/) demo for an example of modular query composition.)
This query is roughly expressed in English as "The average price of pets per state (based on their color and species) sold to owners who live in the US, for states where that average price is 5 or more, and listing the top three states in descending order"
But for the "top three states in descending order" part, you've probably noticed by now that there is no TinyQL equivalent to SQL's `ORDER BY` or `LIMIT`. Instead you perform sorting and optional pagination when you actually extract the data, using the [`getResultSortedRowIds`](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultsortedrowids/) method:

```
queries
  .getResultSortedRowIds[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultsortedrowids/)('query', 'avgFullPrice', true, 0, 3)
  .forEach((rowId) => console.log(queries.getResultRow[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresultrow/)('query', rowId)));
// -> {"stateName": "New York", "avgFullPrice": 5.5}
// -> {"stateName": "California", "avgFullPrice": 5}

```

The results should check out: the owners who are in the US are Alice, Bob, Carol, Dennis, Errol. In California, the pets are Fido (a brown dog, costing 5), Felix (a black cat, costing 6) and Smaug (a silver worm, costing 4), averaging 5 for that state. In New York, the pets are Cujo (a white dog, costing 10) and Lowly (a brown worm, costing 1), averaging 5.5 for that state. In Washington, the only pet is Tom (a brown cat, costing 4), so that whole state fails the minimum average price.
The equivalent SQL for what we've just done here would be something like:

```
SELECT
  state.name AS stateName,
  AVG(species.price * color.premium) AS avgFullPrice,
FROM
  pets
  LEFT JOIN species
    ON species._rowId = pets.speciesId
  LEFT JOIN color
    ON color._rowId = pets.colorId
  LEFT JOIN owner
    ON owner._rowId = pets.ownerId
    LEFT JOIN region AS state
      ON region._rowId = owner.regionId
WHERE
  state.country = 'US'
GROUP BY
  stateName
HAVING
  avgFullPrice >= 5;
ORDER BY
  avgFullPrice DESC
LIMIT
  3

```

Hopefully that makes sense!
Wait... did we mention it's also reactive? It's probably worth showcasing something that SQL struggles to do :)

```
queries.addResultSortedRowIdsListener[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/listener/addresultsortedrowidslistener/)(
  'query',
  'avgFullPrice',
  true,
  0,
  3,
  (_queries, _queryId, _cellId, _descending, _offset, _limit, rowIds) =>
    console.log(queries.getResultTable[](https://tinybase.org/api/queries/interfaces/queries/queries/methods/result/getresulttable/)('query')),
);

// Bob is actually in British Columbia!
store.setCell[](https://tinybase.org/api/the-essentials/setting-data/setcell/)('owner', 2, 'regionId', '4');

// -> {1: {"stateName": "New York", "avgFullPrice": 5.5}}

```

Now that Bob is in Canada, removing Felix (cost 6) from California lowers its average to 4.5 - too low for our results, and we only see New York! Magic.
## Summary
Next, let's find out how to include queries in a user interface in the [Building A UI With Queries](https://tinybase.org/guides/using-queries/building-a-ui-with-queries/) guide.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
