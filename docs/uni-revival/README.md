# TM-RP-002 — Tamagotchi Uni Revival

Research baseline: October 26, 2026 (America/New_York). Public-source review and initial documentation: October 25; integration validation: October 26. This documentation is launch preparation; publication requires Cole's review and manual deployment. No hardware observation, capture, firmware analysis, authenticated API access, or service implementation is claimed.

## Scope and architecture

- TamaMedics.com: existing static Astro/MDX research hub at `/research/uni-revival/`, project updates, compatibility status, and contributor guidance.
- `uni.tamamedics.com`: proposed future hostname only. No DNS, hosting, certificates, credentials, accounts, databases, or public service are configured by this assignment.
- Original-hardware compatibility is the goal where technically and legally feasible. Server behavior and stock firmware trust are separate problems. Neither is established.
- Deployment remains `npm run build` → upload the contents of `dist/` manually to SiteGround, including hidden `.htaccess`. This phase does not change production infrastructure or hosting rules.

## Engineering references

| Document | Purpose |
| --- | --- |
| [Preservation inventory](preservation-inventory.md) | Feature priorities, public sources, versions, and source-access limits |
| [Protocol matrix](protocol-matrix.md) | Claims, provenance, unknowns, and falsifiable next observations |
| [Capture runbook](network-capture-runbook.md) | Read-only discovery first; approval gate before AP/network setup |
| [Evidence template](evidence-template.md) | Separate observations, interpretations, privacy, hashes, and reproduction |
| [Future architecture](future-server-architecture.md) | Hosting comparison and release-blocking device trust questions |
| [Validation and handoff](validation-handoff.md) | Build, deployment review, and outstanding prerequisites |

Follow the repository's [research methodology](../research-methodology.md). Every technical claim needs a source, date, scope, confidence, and evidence gap. Source review is not device verification. A failed hypothesis is useful evidence when the method is reproducible.

## Stage gates

| Phase | Deliverable | Acceptance / stop condition |
| --- | --- | --- |
| P0 — Inventory | Sources, versions, feature dependencies | Each claim has dated provenance/confidence; inaccessible sources and unknown versions recorded. Still in progress. |
| P1 — Baseline | Our own Uni on an approved isolated 2.4GHz topology | Confirm Pi capabilities, existing duties, interface attribution, rollback, clock accuracy, private evidence storage, one-action records, hashes, and repeatability. No capture yet. |
| P2 — Protocol / trust | Dated endpoint inventory and safe feasibility tests | Separate passive observations from inferences; record unknown trust/auth rules and failures. Stop tests requiring credential extraction or access-control bypass. |
| P3 — Specification | Versioned observable contracts | Trace operations, fields, transitions, and errors to evidence; mark proposed contracts; second researcher can reproduce. |
| P4 — Local prototype | Isolated components with fabricated fixtures | Evidence justifies scope; tests demonstrate proposed behavior. No public exposure or stock-device compatibility claim. Separate implementation assignment. |
| P5 — Stock compatibility | Approved reversible end-to-end experiment | Repeated operation succeeds on recorded firmware; normal operation restored; failure modes and limits published. Stop if recovery/safety is uncertain. |
| P6 — Public service | Isolated operated service | Proven feasibility plus approved hosting, authentication, abuse controls, data minimization, governance, backups/restore drill, ownership, costs, maintenance, and terms decisions. |

**Device trust and endpoint redirection block release.** A compatible JSON response, MQTT broker, controlled DNS resolver, or accepted TLS handshake alone does not satisfy P5.

## Workspace and evidence boundaries

Implementation work is confined to `/Users/grim/Development/tamamedics-uni-revival`, branch `feature/uni-revival`, starting from `4ac2bc447bb9453c62e8ae076f2f0190e73c73f7`. The original `/Users/grim/Development/tamamedics.com` worktree is excluded from this assignment. Do not commit, push, open a PR, or deploy without separate approval.

Keep raw evidence outside every repository and cloud-synced public folder. Do not commit captures, authentication material, codes, firmware, paid content, or real device identifiers. Publish reviewed redacted text and original fixtures only. Do not copy existing production credentials or reuse CacheLore infrastructure.

Do not reset the Uni, change firmware/fuses, install trust material, extract protected credentials, perform destructive bootloader operations, scan Bandai infrastructure, bypass access controls, or change household routing. The first hardware milestone is ordinary behavior observation only, after prerequisites and network approval.
