## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Git, workspaces, and preservation

- Canonical development workspace: `/Users/grim/Development/tamamedics.com`.
- Permanent preservation root: `/Users/grim/Development/tamamedics-preservation/`. Use owner-only directories:
  - `backups/` — verified backups.
  - `evidence/` — investigation and audit records.
  - `qa/` — validation evidence retained across sessions.
  - `archives/` — review packages and Git bundles.
- Temporary locations, including `/tmp`, `/private/tmp`, and `/var/folders`, are for disposable scratch only. Never rely on them as the only location for important files, Git worktrees, uncommitted work, preservation archives, or multi-day development.
- Before editing, inspect the current branch, registered worktrees, staged changes, modified files, and untracked files. Never overwrite or discard unrelated user changes, or use destructive Git recovery commands to clear an unexpected dirty worktree.
- After an authorized, bounded task is completed and validated, commit its approved changes promptly. Stage only the approved files; do not leave finished work uncommitted across multiple days.
- Push completed commits only when explicitly authorized. Never force-push.
- When work cannot be committed, retain a verified checkpoint in permanent storage. Include an exact manifest and independently verified checksums; do not overwrite or delete existing preservation data without explicit authorization.
- For multiple worktrees, maintain an inventory of active checkouts and their branches. Do not manually move or delete active Git worktrees; use Git worktree commands for approved checkout changes.
- Verify source and backup integrity before cleanup that removes a development checkout, and confirm the checkout is no longer in use.
- Production deployments and SiteGround uploads require separate authorization.
