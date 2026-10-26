# TM-RP-002 evidence record template

Blank template; no device observation represented. Keep filled private records outside git. Publish only an owner-reviewed redacted derivative. Use ISO 8601 timestamps and a pseudonymous device label.

## Identity and context

- Observation ID: `TM-RP-002-OBS-____`
- Record/specification version:
- Researcher / reviewer (public alias only):
- Date/time start/end (UTC):
- Local date/time, IANA timezone and UTC offset:
- Clock source, estimated skew, synchronization limits:
- Firmware version / region / relevant hardware revision (if known without opening):
- Device pseudonym (no serial, MAC, account ID):
- Source of claim: official documentation / TamaMedics observation / community report / hypothesis:
- Source URL, title, author, publication and access dates (for document research):
- Uni action performed, expected visible behavior, initial state:
- Ownership and authorization scope:

## Network and collection method

- Sanitized topology; privately recorded configuration reference:
- AP band/frequency/channel and evidence of 2.4GHz association:
- Capture interface and proof that it carries this device's traffic:
- Vantage relative to NAT; attribution limitations:
- Tool/OS versions; exact approved collection procedure and filter (private if identifying):
- Baseline interval, action timestamp, end timestamp:
- Protocol/port observed (or unknown; distinguish inference):
- DNS/destination evidence, if observable (private original / sanitized derivative):
- TLS handshake metadata if observable; version, SNI/ALPN/cert visibility and limits:
- Packet loss, omitted intervals, capture length and file size:

## Integrity and result

- Private original filename/reference, bytes and SHA-256:
- Working-copy reference and SHA-256:
- Public derivative reference and SHA-256, if approved:
- Raw observation (what was actually seen, including device result):
- Interpretation (separate from the observation):
- Expected versus actual result:
- Confidence: Confirmed / Observed / Community Reported / Unverified / Researching / Planned:
- Scope of confidence: source text / metadata / one firmware unit / repeated device behavior:
- Competing explanations and evidence that could distinguish them:
- Reproduction steps, initial conditions, count and outcomes:
- Known firmware/region coverage, negative results and failure modes:
- Next safe test; approval required, if any:

## Privacy, review and recovery

- Privacy classification: **Private — sensitive** / Internal sanitized / Public reviewed:
- Sensitive fields present (categories only; do not copy secrets):
- Redaction method and removed information:
- Effect of redaction on reproducibility:
- Retention owner, location and review/deletion date:
- Reviewer, review date, publication approval and approved destination:
- Pi/AP/network rollback performed and verified:
- Uni normal play/connectivity restored:
- Existing Pi duties and household network verified:
- Unexpected impact, stop condition or follow-up:

Never attach raw captures, firmware, private keys/certificates, tokens, codes, credentials, personal identifiers or paid content to a public issue. File hashes alone do not prove an observation or authorize distribution.
