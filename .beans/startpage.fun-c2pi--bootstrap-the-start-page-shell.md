---
# startpage.fun-c2pi
title: Bootstrap the Start Page shell
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:10:25Z
updated_at: 2026-05-04T13:10:25Z
parent: startpage.fun-r7qz
---

Approved vertical slice 1 for startpage.fun v1.

Goal:
- Set up Solid, Tailwind, Vite, PWA shell, app chrome, settings bootstrap, and Dexie wiring

Dependencies:
- None

Test expectations:
- [ ] Add Vitest coverage for startup/default-setting resolution, initial library bootstrap decisions, and basic Valibot config parsing
- [ ] Add at least one Playwright happy-path E2E covering first-run startup, reload, and offline-ready reopening

Notes:
- This slice establishes the minimum runnable foundation without pulling in broader feature logic yet.
