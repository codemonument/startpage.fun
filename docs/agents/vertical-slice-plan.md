# Vertical Slice Plan

Current proposed implementation order for `startpage.fun` v1.

## Testing defaults for all slices

- Use **Vitest** for pure logic/domain tests only
- Use **Playwright** for at least one happy-path browser E2E per major slice
- Prefer as little mocking as possible
- Drive E2E setup through real UI flows only
- Do not add visual/screenshot assertions in the initial test setup
- Defer `@testing-library/*` and `fake-indexeddb` until a real need appears

## Slice 1 — Bootstrap the Start Page shell

- Goal: set up Solid, Tailwind, Vite, PWA shell, app chrome, settings bootstrap, and Dexie wiring
- Depends on: none
- Vitest focus: startup/default-setting resolution, initial library bootstrap decisions, basic config parsing with Valibot
- Playwright happy path: load the app, complete first-run startup, reload, and confirm the Start Page still opens correctly offline-ready

## Slice 2 — Ship first-run Starter Templates

- Goal: first-run chooser for Empty and Example templates
- Depends on: 1
- Vitest focus: template shape validation, template-to-library conversion, first-run selection rules
- Playwright happy path: choose Empty and Example on separate runs and confirm the created Local Library matches the selected template

## Slice 3 — Create and Launch a Dial from the active Space

- Goal: create a Dial manually and launch it with the default launch behavior
- Depends on: 1
- Vitest focus: URL normalization, default title derivation, Dial creation rules, launch-preference decision logic
- Playwright happy path: create a Dial from the active Space and launch it successfully

## Slice 4 — Edit a Dial with drafts and duplicate warnings

- Goal: full Dial Editor flows for edit, draft restore, discard, and duplicate warnings
- Depends on: 3
- Vitest focus: duplicate detection, draft-vs-committed state rules, explicit save/discard behavior
- Playwright happy path: edit a Dial, recover a saved draft, and save the final committed change

## Slice 5 — Resolve favicon, fallback, and Custom Icon assets

- Goal: favicon-first icons, fallback generation, custom icon ingest, and icon persistence
- Depends on: 3
- Vitest focus: icon source selection rules, fallback eligibility, retry eligibility, custom-icon metadata rules
- Playwright happy path: create or edit a Dial, end up with a visible icon, and verify a custom icon survives switching away and back

## Slice 6 — Create, rename, delete, and default a Space

- Goal: full Space lifecycle except advanced overflow behavior
- Depends on: 1
- Vitest focus: unique-name enforcement, delete safeguards, default-space fallback logic
- Playwright happy path: create a Space, rename it, set it as default, and verify the app reopens to the expected Space

## Slice 7 — Reorder Dials and enforce Add Tile behavior

- Goal: manual Dial ordering plus Add Tile visibility rules
- Depends on: 3
- Vitest focus: persisted Dial ordering, Add Tile visibility rules, insertion-at-end behavior
- Playwright happy path: reorder Dials in a Space and verify the new order persists after reload

## Slice 8 — Render the Space bar with overflow modes and full Space actions

- Goal: Space switching, overflow handling, overflow menu behavior, and Space actions from the bar
- Depends on: 6
- Vitest focus: overflow-mode decision rules, row-cap behavior, visible-vs-overflow partition logic
- Playwright happy path: create enough Spaces to overflow, switch between them, and perform a Space action from overflowed UI

## Slice 9 — Search Dials in the Command Box

- Goal: Dial search across the whole Library with fuzzysort-backed ranking
- Depends on: 3
- Vitest focus: search indexing, ranking rules, result formatting, Trash exclusion
- Playwright happy path: open the Command Box, search across multiple Spaces, and launch the selected Dial result

## Slice 10 — Run Command Mode actions and direct settings changes

- Goal: command execution, disabled-with-reason behavior, and direct settings actions
- Depends on: 9
- Vitest focus: command availability rules, disabled reason generation, success/failure close behavior
- Playwright happy path: open Command Mode, run a successful command, and verify the expected UI/state result

## Slice 11 — Delete to Trash and Restore into the original Space

- Goal: reversible delete, Trash access, restore, and per-Space undo
- Depends on: 3, 6
- Vitest focus: delete-to-trash transforms, restore targeting, undo-window rules, original-position restoration rules
- Playwright happy path: delete a Dial, open Trash, restore it, and confirm it returns to the original Space correctly

## Slice 12 — Add Trash purge, retention, and permanent-delete controls

- Goal: retention settings, purge, and permanent delete inside Trash
- Depends on: 11
- Vitest focus: retention eligibility, purge rules, permanent-delete behavior
- Playwright happy path: delete content to Trash, permanently delete one item, then purge the remainder with confirmation

## Slice 13 — Add keyboard focus, movement, and menu access

- Goal: keyboard-first navigation and reordering across Spaces, Dials, menus, and Trash
- Depends on: 7, 8, 9
- Vitest focus: focus-transition rules, keyboard move decision logic, command/menu shortcut routing guards
- Playwright happy path: navigate by keyboard, move a focused item, and open the relevant menu/command flow without using the pointer

## Slice 14 — Support touch interactions for Dials and Spaces

- Goal: reliable touch tap, long-press, and drag behavior on the PWA surface
- Depends on: 7, 8, 11
- Type: HITL
- Vitest focus: keep minimal; only pure gesture-state thresholds if they become isolated logic worth testing
- Playwright happy path: emulate touch-capable flows for tap, long-press, and drag where practical, then validate manually on real devices as needed

## Slice 15 — Store and render the global background image through OPFS

- Goal: ingest, store, process, and render the global background image
- Depends on: 1
- Vitest focus: background metadata rules, variant-selection logic, removal/reset behavior
- Playwright happy path: add a background image through the UI, reload, and confirm it still renders with the expected persisted behavior

## Slice 16 — Add the initial test harness and conventions

- Goal: establish the project test scripts, layout, and conventions for Vitest and Playwright
- Depends on: 1
- Vitest focus: prove one pure logic test path works cleanly
- Playwright happy path: prove one browser E2E path runs cleanly against the app

## Notes

- This plan is still a proposal, not yet published as individual implementation beans
- When converting slices into beans, keep them vertical and independently valuable
- If a slice starts needing large amounts of mocking, reconsider the slice boundary before adding more test tooling
