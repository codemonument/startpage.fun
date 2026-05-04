# Issue Tracker: beans

Issues for this repo live as beans in `.beans/`. Use the `beans` CLI for all issue-tracker operations.

## Conventions

- Run `beans prime` before starting work and follow its instructions.
- Use `--json` when a skill needs machine-readable output.
- Create issues as beans with an explicit type: `milestone`, `epic`, `feature`, `bug`, or `task`.
- Use beans status for lifecycle: `draft`, `todo`, `in-progress`, `completed`, `scrapped`.
- Use tags for triage state as documented in `triage-labels.md`.
- Keep implementation notes, summaries, and follow-up details in the bean body.

## Common operations

- **Create an issue**: `beans create --json "Title" -t <type> -d "Description..."`
- **Read an issue**: `beans show --json <id>`
- **List issues**: `beans list --json`
- **Find ready work**: `beans list --json --ready`
- **Update status**: `beans update --json <id> -s <status>`
- **Add tags**: `beans update --json <id> --tag "..."`
- **Remove tags**: `beans update --json <id> --remove-tag "..."`
- **Append notes or summaries**: `beans update --json <id> --body-append "## Notes\n\n..."`
- **Mark complete**: `beans update --json <id> -s completed`
- **Close without action**: `beans update --json <id> -s scrapped`

## When a skill says "publish to the issue tracker"

Create a bean of the appropriate type with `beans create`.

## When a skill says "fetch the relevant ticket"

Run `beans show --json <id>`.

## PRDs

If a skill wants to publish a PRD to the issue tracker, create a bean for it — typically `-t epic` or `-t feature` depending on scope — and place the PRD content in the bean body.
