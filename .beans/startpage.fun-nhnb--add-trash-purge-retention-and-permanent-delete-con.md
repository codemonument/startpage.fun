---
# startpage.fun-nhnb
title: Add Trash purge, retention, and permanent-delete controls
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:23Z
updated_at: 2026-05-05T15:53:40Z
parent: startpage.fun-r7qz
---

Approved vertical slice 12 for startpage.fun v1.

Goal:
- Implement retention settings, purge, and permanent delete inside Trash

Dependencies:
- Blocked by: Delete to Trash and Restore into the original Space (startpage.fun-75co)

Test expectations:
- [x] Add Vitest coverage for retention eligibility, purge rules, and permanent-delete behavior
- [x] Add at least one Playwright happy-path E2E covering per-item permanent delete and purging the remaining Trash contents with confirmation

Notes:
- This slice should deepen Trash behavior after reversible delete and restore are established.

## Summary of Changes

- Added Trash helpers for permanent delete, bulk purge, and retention-based expiry cleanup
- Added configurable Trash retention hours to settings and applied retention cleanup during shell hydration
- Extended Trash UI with retention controls, per-item permanent delete, and bulk purge confirmation
- Added Vitest coverage for permanent delete, bulk purge, and retention expiry behavior
- Added a Playwright happy path covering per-item permanent delete and purging the remaining Trash contents with confirmation

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
