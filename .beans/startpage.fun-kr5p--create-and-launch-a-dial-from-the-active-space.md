---
# startpage.fun-kr5p
title: Create and Launch a Dial from the active Space
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:12:41Z
updated_at: 2026-05-04T15:01:10Z
parent: startpage.fun-r7qz
---

Approved vertical slice 3 for startpage.fun v1.

Goal:
- Create a Dial manually from the active Space
- Launch it with the default launch behavior

Dependencies:
- Blocked by: Bootstrap the Start Page shell (startpage.fun-c2pi)

Test expectations:
- [x] Add Vitest coverage for URL normalization, default title derivation, Dial creation rules, and launch-preference decision logic
- [x] Add at least one Playwright happy-path E2E covering Dial creation from the active Space and successful launch

Notes:
- This slice should establish the first end-to-end Dial flow without pulling in broader editing or organizational features yet.

## Summary of Changes

- Added Dial domain helpers for URL normalization, default hostname titles, creation, insertion into the active Space, and launch-target resolution
- Added inline manual Dial creation UI to the active Space with required URL, optional title, and persisted updates to the Local Library
- Rendered saved Dials as launchable links that honor the default current-tab launch behavior
- Added a static launch target page for reliable browser-path verification in Playwright
- Added Vitest coverage for Dial creation and launch rules
- Added a Playwright happy path covering Dial creation and successful launch from the active Space

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
