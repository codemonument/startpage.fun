---
# startpage.fun-312w
title: Create, rename, delete, and default a Space
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:14:27Z
updated_at: 2026-05-04T15:09:05Z
parent: startpage.fun-r7qz
---

Approved vertical slice 6 for startpage.fun v1.

Goal:
- Implement the full Space lifecycle except advanced overflow behavior

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [x] Add Vitest coverage for unique-name enforcement, delete safeguards, and default-space fallback logic
- [x] Add at least one Playwright happy-path E2E covering Space creation, rename, default selection, and reopening to the expected Space

Notes:
- This slice should establish the core persistent Space model before advanced layout and overflow behaviors build on top of it.

## Summary of Changes

- Added Space domain helpers for creation, rename, active selection, default-space startup resolution, and guarded deletion with Dial moves
- Added a Space tab bar plus inline Space management controls for create, rename, set-default, and delete flows
- Persisted default-space startup behavior through settings while keeping in-session active-space switching responsive
- Added unit coverage for unique-name rules, delete safeguards, Dial move-on-delete, and default-space fallback behavior
- Added a Playwright happy path covering Space creation, rename, default selection, switching away, and reopening to the expected Space

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
