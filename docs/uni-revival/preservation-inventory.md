# Preservation inventory

Source review: October 25, 2026; project baseline: October 26. All hardware and protocol entries are unobserved by TamaMedics. The public [hub source](../../src/content/research/tamagotchi-uni-revival.mdx) and [feature matrix](../../src/components/UniPreservationMatrix.astro) present the same priorities to readers.

## Feature priorities

Official behavior below means published description, not local verification. “Suspected” dependencies are hypotheses. No per-feature HTTP/MQTT/CoAP assignment has been established.

| Capability | Official evidence | Remote dependency / missing evidence | Safe observation plan | Priority |
| --- | --- | --- | --- | --- |
| Network setup / discovery | AWS describes Wi-Fi cloud connection; FAQ setup detail unavailable | Discovery unknown; need band, DNS, destinations, cache and retry observations | Normal connection only after approved topology; prove 2.4GHz association | Critical |
| Information / news | AWS describes announcements | Cloud documented; need triggers, caching, intervals, error states | One manual information refresh after checking actual menu | High |
| Items / gifts | AWS describes content flags and distribution | Remote delivery documented; eligibility and duplicates unknown | Normal refresh; avoid redemption and repeat gift claims | High |
| Tamaverse | AWS describes connected interaction | Cloud documented; local state and regional split unknown | Ordinary visit without changing identity/region | High |
| Arena | Official September event announcement | Remote global results suspected; scoring/reward contract unknown | Only during a normally available event; no replay or fabricated submissions | High |
| Portal / DL areas | Ticket Shop download and area-selection instructions | Download documented; ongoing authorization/cache unknown | Inventory and view an already installed area | High |
| Content re-download | Shop documents initial download only | Recovery, retention and entitlement limits unknown | Defer deletion, area replacement, and re-download until documented and separately approved | Critical |
| Firmware / OTA | AWS describes Jobs distribution | Manifest, signing, rollback and transport unspecified | Record visible version; availability check only if known not to trigger installation | High |
| Time / configuration | Official event dates and windows | Server configuration suspected; clock/timezone role unknown | Timestamp natural transitions; do not alter the device clock | Medium |
| Identity / authorization | AWS describes authentication and per-device state | Provisioning, trust roots, pinning and per-operation checks unknown | Passive metadata only; no extraction or account probing | Critical |

## Firmware ledger — examples, not a latest-version claim

| Version | Source and date | Confidence / limits |
| --- | --- | --- |
| 1.0.2 | 2023 GBAtemp historical thread | Community Reported; historical context only |
| 2.8.0 | [Bandai update listing](https://tamagotchi-official.com/us/series/uni/news/?c=update), March 10, 2026 | Official indexed listing reviewed October 25; not a completeness or current-version claim |
| Our retail unit | Owner readout required | Unknown; record only version and region, without serial/account identifiers |

Do not update the device merely to match a version in this ledger. Future entries need official release-note URL, publication/review date, region, stated compatibility changes, and whether local hardware evidence exists. Do not store firmware binaries.

## Source ledger

| ID | Source / owner | Review result on October 25, 2026 | Scope |
| --- | --- | --- | --- |
| S01 | [AWS / Bandai / Phoenisys case study](https://aws.amazon.com/blogs/iot/efficiently-managing-millions-of-tamagotchi-devices-with-aws-iot/), Shota Iizuka, August 29, 2023 | Article retrieved; architecture and distribution sections reviewed | Official design account; not a current protocol specification |
| S02 | [Bandai OSS notices](https://tamagotchi-official.com/legalinfo/toy/uni/) | Component list retrieved | Attribution evidence, not feature-to-protocol mapping |
| S03 | [Bandai FAQ](https://tamagotchi-official.com/us/series/uni/faq/) | Direct retrieval redirected to maintenance | Setup/detail re-review pending |
| S04 | [Official Ticket Shop](https://ticketshop.tamagotchi-official.com/) | Public download and Portal instructions retrieved | No account/purchase/code use; re-download semantics unresolved |
| S05 | [2023 GBAtemp thread](https://gbatemp.net/threads/tamagotchi-uni-research-hacking.636515/), Zhongtiao1 and contributors | Historical opening observations reviewed | Community reports; endpoint not tested |
| S06 | [2026 GBAtemp thread](https://gbatemp.net/threads/tamagotchi-uni-the-research-reborn-or-well-updated.684334/), N4A_System_01ki and contributors | September 2026 discussion reviewed | Community hardware/security claims; no local reproduction |
| S07 | [mensfeld/hotspotchi](https://github.com/mensfeld/hotspotchi), Maciej Mensfeld and contributors | Public repository description reviewed | Pi hotspot / Tama Search experiment, not replacement server |
| S08 | [Bandai Uni Pink](https://tamagotchi-official.com/us/series/uni/item/01_1/) | Indexed official support-period text reviewed | July 13, 2026 security-support date; no shutdown date inferred |
| S09 | [UK PSTI statement](https://tamagotchi-official.com/manual/toy/uni/Uni_PSTI_statement_of_compliance.pdf), issued April 24, 2024 | Indexed official text reviewed; PDF rendering unavailable | Minimum support period for covered UK products only |
| S10 | [LOGGER release](https://tamagotchi-official.com/us/news/01_1625/) | Article retrieved; September 14, 2026 availability | Official content and Wi-Fi requirement; no download performed |
| S11 | [PANDA release](https://tamagotchi-official.com/us/news/01_1676/) | Indexed official article reviewed; direct retrieval returned maintenance | October 1, 2026 availability; no live availability test |
| S12 | [BUNNY JUMP 2026](https://tamagotchi-official.com/us/series/uni/news/01_1636/) | Indexed official article reviewed; direct retrieval returned maintenance | Event, calculation and reward windows; no local participation |
| S13 | [Bandai manuals](https://tamagotchi-official.com/manual/toy/uni/) | Direct retrieval returned maintenance | Hardware setup reference pending |

Support end and service shutdown are different claims. September/October announcements demonstrate continued published content; they do not establish every device operation still works. Website maintenance is not proof of device-service retirement.

## Gaps before P0 acceptance

Re-review unavailable official instructions, expand release history, record our firmware/region, inventory installed content without deleting it, and add dated findings rather than treating an example ledger as exhaustive. Only public factual metadata and original research may be redistributed; do not mirror proprietary assets or paid DLC.
