---
# startpage.fun-c2pi
title: Bootstrap the Start Page shell
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:10:25Z
updated_at: 2026-05-04T13:44:13Z
parent: startpage.fun-r7qz
---

Approved vertical slice 1 for startpage.fun v1.

Goal:
- Set up Solid, Tailwind, Vite, PWA shell, app chrome, settings bootstrap, and Dexie wiring

Dependencies:
- None

Test expectations:
- [x] Add Vitest coverage for startup/default-setting resolution, initial library bootstrap decisions, and basic Valibot config parsing
- [x] Add at least one Playwright happy-path E2E covering first-run startup, reload, and offline-ready reopening

Notes:
- This slice establishes the minimum runnable foundation without pulling in broader feature logic yet.

## Summary of Changes

- Bootstrapped a Solid + Vite + Tailwind app shell with PWA manifest, service-worker registration, and offline-ready status UI
- Added Dexie-backed startup repository wiring for persisted settings and shell metadata
- Added Valibot-backed settings normalization and shell bootstrap decision helpers
- Added Vitest coverage for settings normalization and startup-stage resolution
- Added a Playwright happy-path covering first load, reload, and offline reopening

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
