# Testing Conventions

`startpage.fun` uses a thin two-layer testing setup:

- **Vitest** for pure logic and domain behavior under `src/**/*.test.ts`
- **Playwright** for browser end-to-end paths under `e2e/**/*.spec.ts`

## Commands

- `pnpm test:unit` — run Vitest once
- `pnpm test:e2e` — run Playwright against a built preview server
- `pnpm test` — run both layers
- `pnpm typecheck` — run TypeScript checks
- `pnpm lint` — run ESLint

## Unit test rules

- Prefer public behavior over implementation details
- Start with pure logic modules before adding browser-heavy coverage
- Keep mocks to a minimum; the first slices should mostly test real functions
- Put tests next to the module they exercise for easier refactors

## E2E rules

- Use UI-only setup whenever possible
- Cover one happy path per vertical slice before adding edge cases
- Assert durable text and roles rather than styling details
- Keep each spec independent; rely on Playwright browser-context isolation instead of shared seeded state

## Current baseline

- Shell/default-setting normalization is covered by Vitest
- First-run shell load, reload, and offline reopening are covered by Playwright
- Playwright starts from `pnpm build && pnpm preview` so service-worker behavior is exercised in production mode
