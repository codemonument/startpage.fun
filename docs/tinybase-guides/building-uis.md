# Building UIs With TinyBase In This SolidJS App

This local docs folder includes TinyBase UI guides for React and Svelte, but this project uses SolidJS. The framework-specific packages from those guides (`tinybase/ui-react`, `tinybase/ui-react-dom`, `tinybase/ui-svelte`, and `tinybase/ui-svelte-dom`) should not be imported into app code.

There is still useful transferable guidance in those guides:

- TinyBase UI bindings are listener-backed reactive reads.
- Component lifecycles must clean up TinyBase listeners.
- Scalar data benefits from read/write bindings.
- Store hierarchies can be rendered declaratively with small view components.
- Context avoids prop drilling for shared Store, Metrics, Indexes, Relationships, Queries, and other TinyBase objects.
- Generic DOM table helpers are mainly useful as debugging/prototyping patterns, not as product UI.

For SolidJS-specific syntax and patterns, use the synthetic adaptation:

- [Building UIs With TinyBase And SolidJS](./building-uis-with-solid.md)

Use the React/Svelte scraped docs only as source/reference material for TinyBase concepts, not as implementation instructions for this repo.
