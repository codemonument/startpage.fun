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
      * [Inspecting Data](https://tinybase.org/guides/inspecting-data/)
      * [How TinyBase Is Built](https://tinybase.org/guides/how-tinybase-is-built/)
      * [FAQ](https://tinybase.org/guides/faq/)
      * [Agents Guide](https://tinybase.org/guides/agents-guide/)
      * [Releases](https://tinybase.org/guides/releases/)
    * [Demos](https://tinybase.org/demos/)
    * [API](https://tinybase.org/api/)


  * [TinyBase](https://tinybase.org/)
  * [Guides](https://tinybase.org/guides/)
  * [Agents Guide](https://tinybase.org/guides/agents-guide/)


# Agents Guide
This file follows the [agents.md](https://agents.md/) specification for AI agent context. If you're a human reading this, it provides a comprehensive overview of the TinyBase project for AI assistants working with the codebase.
## Overview
**TinyBase** is a reactive data store and sync engine for local-first applications. It is a TypeScript library that provides a reactive, in-memory data store with a powerful synchronization engine. It's designed for building local-first applications that work offline and sync across devices. The library is exceptionally small (5.3kB-11.7kB), has zero runtime dependencies, and maintains 100% test coverage.
  * **Website** : <https://tinybase.org>
  * **Repository** : <https://github.com/tinyplex/tinybase>
  * **[Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/)** : <https://tinybase.org/api/>
  * **License** : MIT
  * **Author** : James Pearce (@jamesgpearce)


## Core Concepts
### Data [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/)
TinyBase provides two types of data structures:
  * **[`Tables`](https://tinybase.org/api/store/type-aliases/store/tables/)**: Tabular data organized as[`Table`](https://tinybase.org/api/store/type-aliases/store/table/) → [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) → [`Cell`](https://tinybase.org/api/store/type-aliases/store/cell/) (similar to relational databases)
  * **[`Values`](https://tinybase.org/api/store/type-aliases/store/values/)**: Simple key-value pairs for application state


Both can coexist in the same [`Store`](https://tinybase.org/api/the-essentials/creating-stores/store/) and support optional schemas with type enforcement.
### Reactivity
The library implements a fine-grained reactive system where you can listen to changes at any level:
  * Entire store changes
  * [`Table`](https://tinybase.org/api/store/type-aliases/store/table/)/value additions or removals
  * [`Row`](https://tinybase.org/api/store/type-aliases/store/row/) changes within a table
  * Individual cell or value changes


Listeners fire automatically when data changes, enabling efficient UI updates that only re-render affected components.
### [Synchronization](https://tinybase.org/guides/synchronization/)
TinyBase includes native CRDT (Conflict-free Replicated Data Type) support via the [`MergeableStore`](https://tinybase.org/api/mergeable-store/interfaces/mergeable/mergeablestore/), allowing deterministic synchronization across multiple clients and servers using Hybrid Logical Clocks for causality tracking.
## Key Features
### Data Management
  * **[Schemas](https://tinybase.org/guides/schemas/)** : Optional TypeScript-inferred schemas for type safety
  * **[`Indexes`](https://tinybase.org/api/indexes/interfaces/indexes/indexes/)**: Fast lookups by cell values with slice-based grouping
  * **[`Queries`](https://tinybase.org/api/queries/interfaces/queries/queries/)**: SQL-like query engine (select, join, filter, group) without actual SQL
  * **[`Relationships`](https://tinybase.org/api/relationships/interfaces/relationships/relationships/)**: Define foreign-key relationships between tables
  * **[`Metrics`](https://tinybase.org/api/metrics/interfaces/metrics/metrics/)**: Built-in aggregations (sum, avg, min, max)
  * **[`Checkpoints`](https://tinybase.org/api/checkpoints/interfaces/checkpoints/checkpoints/)**: Undo/redo functionality with branching support


### [Persistence](https://tinybase.org/guides/persistence/)
Multiple storage backends supported via Persisters:
  * **Browser** : LocalStorage, SessionStorage, IndexedDB, OPFS
  * **Databases** : SQLite (Bun, WASM, sqlite3), PostgreSQL, PGlite, Turso (libSQL)
  * **Third-party** : ElectricSQL, PowerSync, CR-SQLite
  * **Cloud** : PartyKit, [Cloudflare Durable Objects](https://tinybase.org/guides/integrations/cloudflare-durable-objects/)
  * **Files** : Node.js file system
  * **CRDT** : Yjs, Automerge integration
  * **React Native** : MMKV, SQLite


### [Synchronization](https://tinybase.org/guides/synchronization/)
Synchronizers enable real-time data sync:
  * WebSocket (client and server)
  * BroadcastChannel (same-origin tabs)
  * Local (in-memory for testing)
  * Custom transports (extensible)


### UI Integration
Optional UI modules provide:
  * **React Hooks & Components**: `ui-react` with hooks like `useCell`, `useRow`, `useTable`, `useTables`, `useValue`, and component/context support
  * **React DOM Components** : `ui-react-dom` with interactive tables
  * **React Inspector** : `ui-react-inspector` for debugging and editing data
  * **Svelte Reactivity & Components**: `ui-svelte` with reactive functions, components, and context support
  * **Svelte DOM Components** : `ui-svelte-dom` with interactive tables
  * **Svelte Inspector** : `ui-svelte-inspector` for debugging and editing data


## [Architecture](https://tinybase.org/guides/how-tinybase-is-built/architecture/)
### Modular Design
TinyBase uses a modular architecture where each feature is an independent module that can be imported separately:

```
tinybase              # Core store module
tinybase/indexes      # Indexing
tinybase/queries      # Query engine
tinybase/relationships # Relationships
tinybase/metrics      # Aggregations
tinybase/checkpoints  # Undo/redo
tinybase/mergeable-store # CRDT support
tinybase/persisters/persister-* # Storage backends
tinybase/synchronizers/synchronizer-* # Sync transports
tinybase/ui-react     # React hooks
tinybase/ui-react-dom # React DOM components
tinybase/ui-react-inspector # DevTools
tinybase/ui-svelte    # Svelte reactivity & components
tinybase/ui-svelte-dom # Svelte DOM components
tinybase/ui-svelte-inspector # DevTools

```

### Type System
Strong TypeScript support with:
  * Generic types that infer from schemas
  * Conditional types for schema-aware APIs
  * Mapped types for compile-time validation
  * Type-safe hooks and components


### Build System
  * **Gulp** : Build orchestration
  * **TypeScript** : Source language with strict mode
  * **Rollup** : Bundling (implied)
  * **ESM** : Primary module format
  * **Tree-shaking** : Aggressive optimization for minimal bundles


## Development
### Prerequisites
  * Node.js >= 23.10.0
  * npm >= 10.9.2


### Setup

```
git clone https://github.com/tinyplex/tinybase.git
cd tinybase
npm install

```

### Common Commands

```
npm run compileAndTestUnit  # Compile and run unit tests
npm run testUnitFast        # Quick test iteration
npm run lint                # Run ESLint
npm run spell               # Spell check
npm run preCommit           # Full pre-commit check
npm run compileDocs         # Generate API documentation
npm run serveDocs           # Preview documentation locally

```

### [Testing](https://tinybase.org/guides/how-tinybase-is-built/testing/)
  * **Framework** : Vitest
  * **Coverage** : 100% required (enforced)
  * **Types** : Unit, performance, end-to-end, production
  * **Environment** : happy-dom (unit), puppeteer (e2e)


### Code Style
  * **ESLint** : Enforced with strict rules
  * **Prettier** : Automatic formatting
  * **Max line length** : 80 characters
  * **Quotes** : Single quotes (template literals allowed)
  * **Semicolons** : Required
  * **Object spacing** : No spaces in braces `{key: value}`


## Project Structure

```
tinybase/
├── src/                    # Source code
│   ├── @types/            # TypeScript declarations
│   ├── store/             # Core store implementation
│   ├── indexes/           # Indexing module
│   ├── queries/           # Query engine
│   ├── relationships/     # Relationships module
│   ├── metrics/           # Metrics module
│   ├── checkpoints/       # Checkpoints module
│   ├── mergeable-store/   # CRDT implementation
│   ├── persisters/        # Storage backends
│   ├── synchronizers/     # Sync transports
│   ├── ui-react/          # React hooks
│   ├── ui-react-dom/      # React DOM components
│   ├── ui-react-inspector/ # DevTools
│   ├── ui-svelte/         # Svelte reactivity & components
│   ├── ui-svelte-dom/     # Svelte DOM components
│   ├── ui-svelte-inspector/ # DevTools
│   └── common/            # Shared utilities
├── test/                  # Tests
│   ├── unit/             # Unit tests
│   ├── perf/             # Performance tests
│   ├── e2e/              # End-to-end tests
│   └── prod/             # Production build tests
├── docs/                  # Generated documentation
├── dist/                  # Build output
├── site/                  # Documentation site source
├── gulpfile.mjs          # Build configuration
├── vitest.config.ts      # Test configuration
├── eslint.config.js      # Linting rules
└── tsconfig.json         # TypeScript config

```

## Contributing
Contributions are welcome! This is a spare-time project, so response times may vary.
**Requirements** :
  1. Follow the Prettier and ESLint configurations
  2. Maintain 100% test coverage
  3. Update documentation for [API](https://tinybase.org/api/) changes
  4. Add examples for new features


**Process** :
  1. Fork the repository
  2. Create a feature branch
  3. Make your changes with tests
  4. Run `npm run preCommit` to verify
  5. Submit a pull request


See [CONTRIBUTING.md](https://tinybase.org/guides/agents-guide/CONTRIBUTING.md) for details.
## Community
  * **Discord** : <https://discord.com/invite/mGz3mevwP8>
  * **Discussions** : <https://github.com/tinyplex/tinybase/discussions>
  * **Issues** : <https://github.com/tinyplex/tinybase/issues>
  * **Bluesky** : <https://bsky.app/profile/tinybase.bsky.social>
  * **Twitter/X** : <https://x.com/tinybasejs>


## Use Cases
TinyBase is ideal for:
  * **Local-first applications** : Apps that work offline and sync later
  * **Real-time collaboration** : Multi-user applications with CRDT sync
  * **Reactive UIs** : Applications requiring fine-grained reactivity
  * **Mobile apps** : React Native apps with local storage
  * **Edge computing** : Cloudflare Workers, Durable Objects
  * **Progressive Web Apps** : Offline-capable web applications
  * **Games** : Real-time state management with undo/redo
  * **Data dashboards** : Reactive data visualization


## Performance
  * Tiny bundle sizes (5.3kB - 11.7kB depending on features)
  * Zero runtime dependencies
  * Efficient change detection and listener notification
  * Memory pooling for ID generation
  * Tree-shakeable modular design
  * Optimized for bundle size and runtime performance


## Related Projects
  * **Synclets** : Generic synchronization library (<https://synclets.org>)
  * **TinyWidgets** : Widget toolkit built on TinyBase (<https://tinywidgets.org>)
  * **TinyTick** : Reactive ticker tape component (<https://tinytick.org>)


## License
MIT License - see [LICENSE](https://tinybase.org/guides/agents-guide/LICENSE) file for details.
* * *
**Note for AI Agents** : TinyBase uses unique patterns including utility function wrappers (e.g., `arrayForEach`, `mapGet`, `objHas`) instead of native methods for consistency and tree-shaking. Always use factory functions (`createStore`, `createIndexes`, etc.) with builder pattern chaining. Maintain 100% test coverage and follow the strict 80-character line length. See `.github/copilot-instructions.md` for detailed coding patterns.
##  [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/) System
TinyBase has a sophisticated documentation system that generates the website from source code and markdown files.
###  [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/) Structure
  1. **Type Definitions (`src/@types/*/`)**: TypeScript `.d.ts` files contain the [API](https://tinybase.org/api/) type definitions. **Never add comments directly to`.d.ts` files**.
  2. **[Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/) Files (`src/@types/*/docs.js`)**: Companion `docs.js` files sit alongside `.d.ts` files. Use `///` convention to document types and functions. These are stitched together at build time to generate documentation.
  3. **Guide Files (`site/guides/*/*.md`)**: Markdown files in the `site/guides/` directory, organized by topic (basics, schemas, persistence, etc.). These are source files for guides on the website.
  4. **Generated Files** : `/releases.md` and `/readme.md` in the root are **GENERATED** from `/site/guides/18_releases.md` and `/site/home/index.md`. **Never edit the generated files directly**.
  5. **Guide Redirects** : To preserve old guide URLs, leave a markdown stub at the old path whose summary is just `-> /new-url`. The site generator hides these from navigation and renders them as meta-refresh redirect pages.


###  [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/) [Testing](https://tinybase.org/guides/how-tinybase-is-built/testing/)
TinyBase has automated tests that validate all inline code examples in documentation:

```
npx vitest run ./test/unit/documentation.test.ts --retry=0

```

**How it works** :
  * Extracts code blocks from markdown files and `docs.js` files
  * For **guide`.md` files**: concatenates all code blocks from the file together and runs them as a single test — examples in the same file share scope
  * For **`docs.js`files** : each `@example` block is extracted independently (via regex) and run as its own isolated test — examples do NOT share scope


**Critical constraints for guide`.md` files**:
  * Don't redeclare variables across examples in the same file
  * First example can declare `const store = [`createStore`](/api/the-essentials/creating-stores/createstore/)()`, subsequent examples reuse it
  * Include necessary imports in examples that use them
  * Avoid async operations in examples unless necessary
  * Keep examples simple and focused


**Critical constraints for`docs.js` files**:
  * Each `@example` block runs in complete isolation
  * You CAN (and should) reuse simple variable names like `store`, `middleware` across `@example` blocks — no suffixing needed
  * Each `@example` must include its own imports and setup
  * Keep examples self-contained
  * Try to make the tests about simple data that relates to a real life pet store (eg 'pets', 'species', 'employees' etc)


**Common pitfalls** :
  * ❌ Declaring `const store` multiple times in the same **guide** file
  * ❌ Using undefined functions (forgot import statement)
  * ❌ Adding unnecessary suffixes (`store2`, `store3`) in `docs.js` examples
  * ✅ First guide example: `const store = [`createStore`](/api/the-essentials/creating-stores/createstore/)()`
  * ✅ Later guide examples: `store.setCell(...)` (reuses existing store)
  * ✅ Each `docs.js` `@example`: `const store = [`createStore`](/api/the-essentials/creating-stores/createstore/)()` (independent)


### Adding New [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/)
  1. **[API](https://tinybase.org/api/) [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/)**: Edit `docs.js` file next to the type definition
  2. **Guide[`Content`](https://tinybase.org/api/store/type-aliases/store/content/)** : Edit markdown files in `/site/guides/`
  3. **Release Notes** : Edit `/site/guides/18_releases.md` (not `/releases.md`)
  4. **Always run documentation tests** after changes to verify examples work


## Creating New Schematizers
Schematizers convert external schema validation libraries (like Zod) to TinyBase schemas. Follow this pattern:
### Module Structure

```
src/@types/schematizers/schematizer-{library}/
  index.d.ts           # Type definitions
  docs.js              # Documentation
  with-schemas/
    index.d.ts         # Re-exports for schema-aware variants
src/schematizers/schematizer-{library}/
  index.ts             # Implementation

```

### Factory Pattern

```
export const createZodSchematizer: typeof createZodSchematizerDecl = () => {
  const toTablesSchema = (schemas: {[tableId: string]: any}): TablesSchema[](https://tinybase.org/api/store/type-aliases/schema/tablesschema/) => {
    // Best-effort conversion logic
  };

  const toValuesSchema = (schemas: {[valueId: string]: any}): ValuesSchema[](https://tinybase.org/api/store/type-aliases/schema/valuesschema/) => {
    // Best-effort conversion logic
  };

  return objFreeze({
    toTablesSchema,
    toValuesSchema,
  });
};

```

### Conversion Strategy
  * Extract basic types only: `string`, `number`, `boolean`
  * Handle defaults via schema introspection
  * Support nullable and optional modifiers
  * **Ignore** complex types (arrays, objects, etc.) - they won't appear in output
  * Use recursive unwrapping for wrapper types (e.g., `ZodOptional`, `ZodNullable`, `ZodDefault`)


### Implementation Idioms
  * Use `objForEach` for iteration, not `for...in` loops
  * Use `ifNotUndefined` for conditional logic
  * Use `objIsEmpty` to filter out empty table schemas
  * Extract string constants to module-level (e.g., `TYPE`, `DEFAULT`, `ALLOW_NULL`)
  * Freeze the returned schematizer object with `objFreeze`


### Example Conversion Logic

```
const unwrap = (
  schema: any,
  defaultValue?: any,
  allowNull?: boolean,
): [any, any, boolean] => {
  const typeName = schema._def?.typeName;
  return typeName === ZOD_OPTIONAL
    ? unwrap(schema._def.innerType, defaultValue, allowNull)
    : typeName === ZOD_NULLABLE
      ? unwrap(schema._def.innerType, defaultValue, true)
      : typeName === ZOD_DEFAULT
        ? unwrap(schema._def.innerType, schema._def.defaultValue(), allowNull)
        : [schema, defaultValue, allowNull ?? false];
};

```

### Build Configuration
  * Add module to `ALL_MODULES` array in `gulpfile.mjs`
  * Add peer dependency to `package.json` (marked as optional)
  * Add as dev dependency for testing


### [Testing](https://tinybase.org/guides/how-tinybase-is-built/testing/)
  * Create comprehensive test suite in `test/unit/schematizers/schematizer-{library}.test.ts`
  * Test basic type conversion, defaults, nullable, optional
  * Test unsupported types are filtered out
  * Test integration with actual TinyBase stores
  * Inline schemas directly in test calls (no intermediate variables unless needed multiple times)


###  [Documentation](https://tinybase.org/guides/how-tinybase-is-built/documentation/) [Testing](https://tinybase.org/guides/how-tinybase-is-built/testing/)
Add library import to `test/unit/documentation.test.ts`:

```
import * as z from 'zod';
import * as TinyBaseSchematizersZod from 'tinybase/schematizers/schematizer-zod';

(globalThis as any).modules = {
  ...
  'tinybase/schematizers/schematizer-zod': TinyBaseSchematizersZod,
  zod: z,
};

```

## Guide Writing Best Practices
### Examples Run Sequentially
All code examples in a guide file are concatenated and executed as a test:
  * Use unique variable names (`store`, `store2`, `store3`) to avoid redeclaration
  * First example includes all imports, later examples reuse them
  * Clean up between examples if needed (`store.[`delTables`](/api/store/interfaces/store/store/methods/deleter/deltables/)()`)


### Inline Simple [`Values`](https://tinybase.org/api/store/type-aliases/store/values/)
  * Prefer inline schemas/data in method calls over intermediate variables
  * Only extract to variables when used multiple times
  * Keeps examples concise and focused


### Guide Chains
  * Each guide's summary should link to the next guide in sequence
  * Pattern: "For that we proceed to the [Next Topic] guide."
  * Creates a natural learning path


## Release Notes Updates
When adding a new feature:
  1. **Update`/site/guides/18_releases.md`** (NOT `/releases.md`):
     * Add new version section at the top
     * Include working code example that will be tested
     * Link to relevant guide if applicable
     * Use past releases as template for structure
  2. **Update`/site/home/index.md`** :
     * Update the "NEW!" link to point to new version: `<a href='/guides/releases/#v7-1'>`
     * Update the tagline: `<span id="one-with">"The one with Schematizers!"</span>`
  3. **Generated files update automatically** during build process


## Demo Development Workflow
[Demos](https://tinybase.org/demos/) are located in `/site/demos/` as markdown files containing embedded code blocks that are assembled into working applications.
### Demo Structure
  * **Demo files** : `/site/demos/*.md` or `/site/demos/*/`
  * **E2E tests** : `/test/e2e/demos/*.test.ts`
  * Code blocks in markdown are extracted and combined into complete applications
  * All code fragments in a demo share scope (variables declared in one block are available in subsequent blocks)


### Iteration Workflow
When modifying demos:

```
# One-time setup (only if TinyBase source code has changed)
npm run compileForProd

# Fast iteration loop
npm run compileDocsPagesOnly  # Rebuild just the demo pages
npm run testE2e               # Run E2E tests to verify demos

```

**Key points** :
  * `compileForProd` builds the TinyBase libraries themselves
  * `compileDocsPagesOnly` is much faster - only rebuilds demo pages from markdown
  * You only need `compileForProd` once, unless you've changed TinyBase source
  * E2E tests use Playwright to verify demos work in a real browser
  * Individual E2E tests can be run for faster verification during iteration


## Maintaining This Guide
At the end of each major project or task, add any new **general** learnings to this file. This ensures future agents benefit from discoveries about the codebase, build system, testing patterns, or documentation conventions. Only add broadly applicable insights — not project-specific implementation details.
[GitHub](https://github.com/tinyplex/tinybase)[Bluesky](https://bsky.app/profile/tinybase.bsky.social)[X / Twitter](https://x.com/tinybasejs)[Discord](https://discord.com/invite/mGz3mevwP8)[TinyBase v8.2.0](https://tinybase.org/) © 2022-
