---
# startpage.fun-g4w9
title: Add the initial test harness and conventions
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:48Z
updated_at: 2026-05-04T13:45:27Z
parent: startpage.fun-r7qz
---

Approved vertical slice 16 for startpage.fun v1.

Goal:
- Establish the project test scripts, layout, and conventions for Vitest and Playwright

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [x] Prove one pure logic Vitest path runs cleanly
- [x] Prove one browser Playwright E2E path runs cleanly against the app

Notes:
- This slice should define the testing baseline that later slices extend rather than each slice inventing its own setup.

## Summary of Changes

- Added standard `pnpm` scripts for unit tests, E2E tests, combined test runs, linting, typechecking, build, dev, and preview
- Locked the initial file layout to `src/**/*.test.ts` for Vitest and `e2e/**/*.spec.ts` for Playwright
- Added `docs/agents/testing.md` to document public-behavior-first testing conventions and UI-only E2E setup guidance
- Added `.gitignore` entries for generated app and test artifacts

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
