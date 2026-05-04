# Triage Labels

This repo uses beans tags to represent the five canonical triage roles.

| Label in mattpocock/skills | Tag in our tracker | Meaning                                  |
| -------------------------- | ------------------ | ---------------------------------------- |
| `needs-triage`             | `needs-triage`     | Maintainer needs to evaluate this issue  |
| `needs-info`               | `needs-info`       | Waiting on reporter for more information |
| `ready-for-agent`          | `ready-for-agent`  | Fully specified, ready for an AFK agent  |
| `ready-for-human`          | `ready-for-human`  | Requires human implementation            |
| `wontfix`                  | `wontfix`          | Will not be actioned                     |

## Special rule for won't fix

When a skill decides something is `wontfix`:

- set bean status to `scrapped`
- add the `wontfix` tag

## Lifecycle vs triage

Use beans **status** for lifecycle:

- `draft`
- `todo`
- `in-progress`
- `completed`
- `scrapped`

Use beans **tags** for triage meaning.
