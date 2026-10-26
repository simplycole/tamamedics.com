# Protocol and trust matrix — version 0.1

Prepared October 25, 2026. **TamaMedics capture count: none.** This is a claim register, not a decoded API. Source IDs resolve to the [source ledger](preservation-inventory.md#source-ledger).

| Layer / claim | Provenance | Confidence and limits | Next evidence / competing explanation |
| --- | --- | --- | --- |
| Wi-Fi connects the device to cloud services | S01 official case study | Officially documented; own association not observed | Record actual AP band/channel and connection; an AP name does not prove band |
| Only 2.4GHz networks supported | S05 historical community report | Community Reported here; S03/S13 re-review pending | Confirm official setup requirements and own association before AP planning |
| `apiuni-tmgc.tyb.jp` was observed | S05, 2023 | Historical Community Reported; no current validation | Passive DNS from own normal action; caching or firmware changes may hide/replace it. Do not probe the host |
| TLS 1.2 was observed | S05, 2023 | Historical Community Reported; not a current universal constraint | Observe negotiated version where technically visible; absence of visible handshake may mean resumption or wrong vantage |
| IoT Core provides authentication and messaging | S01 official architecture | Officially documented; exact client credentials and sessions unknown | Passive handshake metadata may narrow possibilities; do not infer private identity material |
| Shadow update flags / Jobs firmware delivery | S01 official architecture | Officially documented; no captured operations/topics | Investigate normal metadata safely; no OTA install, message injection, or job submission |
| MQTT / HTTP / CoAP / protobuf / CBOR used for a specific menu | S02 lists related libraries | Unverified mapping; attribution only | Corroborate per operation. Port number, library name, or packet size alone is insufficient |
| Stock firmware can use an independent service | No evidence | Unverified; release blocking | Establish discovery, routing, trust validation, authorization, and normal operation with separately approved reversible methods |
| ESP32-S3, encrypted flash, disabled debug interfaces | S06 community discussion | Community Reported; may depend on hardware revision | Public material and non-invasive identification first; no fuse reads/writes, desoldering, glitching, or extraction in this phase |

## Endpoint inventory record format

There are **no current TamaMedics-observed endpoints**. The historical hostname above is a research lead, not an allowlist or service target. Do not link to it as a public control.

For a future observation record: observation ID; UTC and local time; firmware/region; user action; interface; DNS name and answer if visible; destination and port; transport; visible SNI/ALPN/TLS version if any; capture interval; raw private evidence hash; redacted derivative hash; confidence; repeated runs; attribution limits. Device-specific names/paths belong in private evidence, not public issues.

## How to avoid false inferences

- No DNS query can mean cached resolution, not absence of remote dependency.
- No visible traffic can mean a local cache, background scheduling, a wrong capture interface, packet loss, or unavailable observation coverage.
- An IP can serve multiple services; a destination is not proof of an API's semantics.
- A successful request may depend on server-side state not visible to passive capture.
- Metadata can suggest a transport; encrypted payloads conceal methods, fields, topics, application errors, and often identity details.
- TLS handshake visibility depends on version/session/vantage. Do not promise certificates, SNI, or ALPN will always be visible. TLS 1.3 encrypts much of the handshake after ServerHello.
- Control of DNS does not establish TLS trust. A successful handshake does not establish application authorization. A local prototype test does not establish stock-device compatibility.

## Future behavior specification rules

Start P3 only with adequate observations. Use explicit versions and provenance per operation. Document inputs, outputs, state transitions, errors, retries, idempotency, timing, and region/firmware coverage. Mark fabricated fixtures and proposed fields as **Proposed**, separate from **Observed**. Never reconstruct or publish secrets. No endpoint paths, message schemas, signing rules, or authenticated API examples are invented in this phase.
