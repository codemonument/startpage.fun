---
# startpage.fun-hqkr
title: Search Dials in the Command Box
status: completed
type: feature
priority: normal
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:05Z
updated_at: 2026-05-05T15:57:13Z
parent: startpage.fun-r7qz
---

Approved vertical slice 9 for startpage.fun v1.

Goal:
- Implement Dial search across the whole Library with fuzzysort-backed ranking

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)

Test expectations:
- [x] Add Vitest coverage for search indexing, ranking rules, result formatting, and Trash exclusion
- [x] Add at least one Playwright happy-path E2E covering Command Box Dial search across multiple Spaces and launching the selected result

Notes:
- This slice should establish the default Dial-search mode of the unified Command Box.

## Summary of Changes

- Added fuzzysort-backed Dial search indexing and ranking across the whole active Library while excluding Trash
- Added a simple Command Box overlay for Dial search with result formatting that shows title, Space, and hostname
- Wired Command Box results to launch the selected Dial and close the overlay
- Added Vitest coverage for indexing, ranking priorities, result formatting, and Trash exclusion
- Added a Playwright happy path covering cross-Space Dial search and launching the selected result

## Verification

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
