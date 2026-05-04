---
# startpage.fun-4pw2
title: Choose testing library baseline for startpage.fun v1
status: completed
type: task
priority: normal
created_at: 2026-05-04T12:56:25Z
updated_at: 2026-05-04T13:03:39Z
parent: startpage.fun-r7qz
---

Decide the initial testing-library baseline for startpage.fun v1, keeping setup simple and minimizing mocks.

- [x] Confirm the immediate test runner baseline
- [x] Decide whether to adopt Testing Library now or defer it
- [x] Decide whether to adopt fake-indexeddb now or defer it
- [x] Record the remaining open testing-stack decisions

## Working Notes

- Immediate test runner baseline: Vitest
- Initial automated test focus: pure logic/domain tests with as little mocking as possible
- Defer @testing-library/* until a real need appears
- Defer fake-indexeddb until real Dexie repository tests justify it
- Preferred higher-level coverage: complete browser E2E tests via Playwright rather than mocked middle-layer tests


- Official browser E2E tool: Playwright
- E2E expectation: each major vertical slice should add at least one happy-path browser E2E test
- E2E setup strategy: drive setup through the UI only
- Visual/screenshot assertions: defer for now

## Summary of Changes

- Locked Vitest as the initial pure-logic test runner
- Deferred Testing Library and fake-indexeddb until a real need appears
- Locked Playwright as the browser E2E tool
- Chose slice-by-slice happy-path E2E coverage, UI-only test setup, and no initial visual assertions
