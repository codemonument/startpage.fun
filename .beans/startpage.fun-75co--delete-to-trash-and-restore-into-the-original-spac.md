---
# startpage.fun-75co
title: Delete to Trash and Restore into the original Space
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:17Z
updated_at: 2026-05-05T15:46:51Z
parent: startpage.fun-r7qz
---

Approved vertical slice 11 for startpage.fun v1.

Goal:
- Implement reversible delete, Trash access, restore, and per-Space undo

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)
- Blocked by: Create, rename, delete, and default a Space (startpage.fun-312w)

Test expectations:
- [x] Add Vitest coverage for delete-to-trash transforms, restore targeting, undo-window rules, and original-position restoration rules
- [x] Add at least one Playwright happy-path E2E covering delete, Trash access, restore, and returning the Dial to the original Space correctly

Notes:
- This slice should establish the reversible deletion model that later Trash management and keyboard/touch flows depend on.

## Summary of Changes

- Added Trash domain helpers for delete-to-trash transforms, restore-by-original-space identity, original-position restoration, and 60-minute per-Space undo
- Extended the Local Library schema with Trash metadata including original Space identity, original dial index, and deletion time
- Added Trash UI access from the global controls, per-Dial delete actions, Trash listing with original Space and deletion time, and restore actions
- Added an active-Space undo action for the most recently deleted Dial within the undo window
- Added Vitest coverage for delete, restore, undo-window, and Trash summary behavior
- Added a Playwright happy path covering delete, Trash access, restore, and return to the original Space

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
