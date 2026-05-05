---
# startpage.fun-lbaz
title: Ship first-run Starter Templates
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:12:13Z
updated_at: 2026-05-04T14:47:28Z
parent: startpage.fun-r7qz
---

Approved vertical slice 2 for startpage.fun v1.

Goal:
- Add a first-run chooser for Empty and Example templates
- Keep the Example template lean with no more than 5 links

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [x] Add Vitest coverage for template shape validation, template-to-library conversion, and first-run selection rules
- [x] Add at least one Playwright happy-path E2E covering Empty and Example selection on separate runs

Notes:
- The Example template should teach the product quickly without feeling noisy or opinionated.

## Summary of Changes

- Added validated Empty and Example starter-template definitions with the Example template capped at 5 Dials
- Added template-to-library conversion that produces the first persisted Local Library and active Space
- Replaced the shell placeholder with a real first-run chooser and ready-state preview of the selected Space
- Persisted the selected starter template into IndexedDB and rehydrated the app from stored library data
- Added Vitest coverage for template shape, template conversion, and first-run selection rules
- Added Playwright happy paths for choosing Empty and Example templates on separate first runs

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
