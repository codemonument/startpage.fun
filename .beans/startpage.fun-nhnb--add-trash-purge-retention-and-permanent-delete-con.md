---
# startpage.fun-nhnb
title: Add Trash purge, retention, and permanent-delete controls
status: todo
type: feature
tags:
    - ready-for-agent
created_at: 2026-05-04T13:17:23Z
updated_at: 2026-05-04T13:17:23Z
parent: startpage.fun-r7qz
blocked_by:
    - startpage.fun-75co
---

Approved vertical slice 12 for startpage.fun v1.

Goal:
- Implement retention settings, purge, and permanent delete inside Trash

Dependencies:
- Blocked by: Delete to Trash and Restore into the original Space (startpage.fun-75co)

Test expectations:
- [ ] Add Vitest coverage for retention eligibility, purge rules, and permanent-delete behavior
- [ ] Add at least one Playwright happy-path E2E covering per-item permanent delete and purging the remaining Trash contents with confirmation

Notes:
- This slice should deepen Trash behavior after reversible delete and restore are established.
