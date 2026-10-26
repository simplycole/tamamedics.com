# Future service architecture — decision record 0.1

Prepared October 25, 2026. Status: **proposed, no backend implemented or deployed**. This is not an API specification or a hosting recommendation. Requirements must come from evidence gathered in P1–P3.

## Release blocker

**Can unmodified retail hardware discover, reach, trust, authenticate with, and correctly use an independent service through an approved reversible method?** Unknown. DNS changes alone do not answer certificate validation, pinning, identity or message authorization. Reproducing AWS components does not grant a third party control of official trust roots or credentials. Do not extract secrets or bypass access controls to close this gap.

Record each subquestion separately: endpoint configuration/hardcoding; hostname validation; trust roots; pinning; device identity/provisioning; message authorization; asset integrity; normal-operation recovery; firmware/region coverage. A failure or unresolved constraint blocks public compatibility claims. If stock compatibility is infeasible, publish evidence and limit prototypes to isolated research fixtures.

## Separation of responsibilities

```text
Current TamaMedics.com / SiteGround
  Static Astro research → updates → evidence/confidence → contributor information

Potential future uni.tamamedics.com (no DNS or service configured)
  Compatible transport adapter (requirements unknown)
       → identity / authorization boundary (unresolved)
       → versioned service behavior and minimal persistent state
       → original or authorized assets only
       → operations, backup / restore, deletion and abuse controls
```

Possible roles, not code commitments: discovery compatibility; HTTP/MQTT/other transport adapters if evidenced; authenticated operation handlers; minimal state storage; original content delivery; firmware/region compatibility tracking; redacted operational logs. Do not recreate analytics such as Timestream merely because the original architecture used it. Collect only data needed for proven behavior.

## Hosting decision matrix

Relative cost/complexity are planning judgments, not researched vendor prices. Select and price nothing until protocols, traffic, region, retention and security requirements are known. All candidates remain blocked by stock-device trust.

| Criterion | Local Raspberry Pi proof of concept | Isolated VPS / cloud prototype | AWS-compatible IoT components | Smaller custom service if justified |
| --- | --- | --- | --- | --- |
| Device compatibility | Unknown; local behavior testing only | Unknown; public reachability is insufficient | Unknown; AWS-shaped APIs do not reproduce official identity | Unknown; viable only for evidenced subset |
| Transports | Limited by verified Pi OS/resources; local HTTP/MQTT possible in principle | Long-running listeners possible subject to provider/network policy | Managed IoT messaging/shadows/jobs may resemble documented roles | Implement only proven transports; cannot assume HTTP-only |
| TLS / authentication | Lab identity/fixtures; no official trust solution | Independent certificates/identity; stock trust unresolved | New account/policies/certificates cannot inherit official device trust | Exact trust constraints still apply; design must follow evidence |
| Security isolation | Separate subnet, local access only; protect household/Pi duties | Dedicated project/account/network/secrets; no other production systems | Dedicated account/policies/budgets; permissions and cloud dependencies | Independent boundary; reduce attack surface without omitting needed auth |
| Ongoing cost | Existing hardware, power, storage, local upkeep; no production SLA | Compute, disk, transfer, backup and operations; pricing later | Usage, messaging, storage, logging, transfer and engineering; pricing later | Depends on actual load, transport and hosting; not automatically cheapest |
| Complexity | Hardware/AP/OS constraints; reproducible setup needed | OS hardening, updates, networking and durable state | Managed operations plus IAM, policies, provisioning and cloud setup | Smaller initial scope but full responsibility for protocol correctness |
| Reproducibility | Record exact model/OS/interfaces; local fixtures | Versioned isolated environment and fixture import | Versioned infrastructure and policy templates; account prerequisites | Versioned contracts, fixtures and portable configuration |
| Maintenance | Owner availability, power/network/storage failures | Patching, monitoring, backups, restore drills and incident response | Managed services still require policies, budget controls and application care | Protocol/auth/security updates and persistence remain project duties |
| Legal / terms | Same authorization/copyright constraints; local does not exempt review | Provider policy, applicable terms and data responsibilities need review | Cloud and device/service terms require separate review | Compatibility scope and content rights require separate review |

No selection is made. Do not assume static SiteGround hosting supports persistent connections, MQTT/TLS termination, device identity or durable application state. Keep the existing manual static-site workflow. Do not use CacheLore's DigitalOcean production resources or database; any future hosting needs a separately approved isolated design.

## Decision gates before implementation or hosting

1. P2 records feasible or blocked trust/redirection paths, with safe reproducible evidence.
2. P3 supplies a versioned behavior specification with proposed versus observed fields, errors, retries, state transitions and data minimization.
3. P4 uses fabricated local fixtures and no official credentials. No device-compatibility claim follows from fixture success.
4. P5 proves repeated end-to-end behavior with our own stock hardware and a documented rollback. Record failures and firmware limits.
5. Before P6, separately approve hosting, costs, owner/on-call duties, authentication and abuse controls, secrets rotation, retention/deletion, content rights, backups and tested restoration, governance and discontinuation/export plans. No registration, donation or data-collection mechanism is added now.
