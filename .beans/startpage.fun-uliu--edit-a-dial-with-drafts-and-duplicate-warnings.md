---
# startpage.fun-uliu
title: Edit a Dial with drafts and duplicate warnings
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:13:14Z
updated_at: 2026-05-05T15:03:51Z
parent: startpage.fun-r7qz
---

Approved vertical slice 4 for startpage.fun v1.

Goal:
- Implement full Dial Editor flows for edit, draft restore, discard, and duplicate warnings

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)

Test expectations:
- [x] Add Vitest coverage for duplicate detection, draft-vs-committed state rules, and explicit save/discard behavior
- [x] Add at least one Playwright happy-path E2E covering editing a Dial, recovering a saved draft, and saving the final committed change

Notes:
- This slice should establish the core committed-vs-draft editing model for later dialogs and settings flows.

## Summary of Changes

- Added Dial editor domain helpers for duplicate detection, committed-vs-draft session state, explicit draft restore/discard, and committing edits across Space assignments
- Added IndexedDB-backed Dial draft persistence with restore-on-demand behavior instead of auto-restoring stale edits
- Added inline Dial editing UI with close-to-keep-draft, explicit discard, restore draft, duplicate URL warnings, and save behavior
- Added unit coverage for duplicate detection, draft session rules, discard behavior, and committed edit/move behavior
- Added a Playwright happy path covering editing a Dial, closing with an auto-saved draft, restoring it, and saving the final committed change

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
