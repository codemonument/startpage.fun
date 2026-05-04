---
# startpage.fun-hqkr
title: Search Dials in the Command Box
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:05Z
updated_at: 2026-05-04T13:17:05Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-kr5p
---

Approved vertical slice 9 for startpage.fun v1.

Goal:
- Implement Dial search across the whole Library with fuzzysort-backed ranking

Dependencies:
- Blocked by: Create and Launch a Dial from the active Space (startpage.fun-kr5p)

Test expectations:
- [ ] Add Vitest coverage for search indexing, ranking rules, result formatting, and Trash exclusion
- [ ] Add at least one Playwright happy-path E2E covering Command Box Dial search across multiple Spaces and launching the selected result

Notes:
- This slice should establish the default Dial-search mode of the unified Command Box.
