# Safe network baseline — preparation runbook

Prepared October 25, 2026. **Not executed.** No traffic capture or Pi/router modification is authorized in this assignment. This runbook deliberately contains no executable AP, DHCP, NAT, firewall, DNS-redirection, capture, or certificate-installation configuration. Exact commands require hardware discovery and a separately approved network plan.

## 0. Read-only discovery and planning gate

Ask Cole for these details before providing executable network configuration:

1. Raspberry Pi model, installed OS and version.
2. Ethernet interface availability and whether a cable/uplink is available.
3. Wireless interface identity, driver, supported bands and AP-mode support; whether it is currently the Pi's management connection.
4. Whether the Pi runs other tasks, services, containers, or network roles that must be preserved.
5. Nighthawk exact model, firmware, current configuration/role and whether it is truly disconnected/unused.
6. Uni firmware version and region if easily visible; no update or reset to obtain it.
7. Basic network arrangement: Xfinity gateway mode, existing APs, available LAN ports, where Pi Ethernet could connect, management/recovery access and intended isolation. Share a sanitized diagram; do not send SSIDs, passwords, public IPs, serials, tokens or private keys.

If Cole has local terminal access to a Linux Pi, these optional commands are read-only inventory aids. Run on the Pi only; do not install packages merely because one command is missing. Keep full output private and report a sanitized summary. Interface listings can contain MAC/IP/SSID identifiers.

```sh
cat /proc/device-tree/model
cat /etc/os-release
uname -r
ip -brief link
ip -brief address
ip route show
iw dev
iw list
systemctl is-active NetworkManager systemd-networkd dhcpcd hostapd dnsmasq
```

In `iw list`, inspect Supported interface modes for `AP`, available 2.4GHz channels, and valid interface combinations. AP support alone does not prove stable simultaneous AP/client operation. Do not assume `eth0`/`wlan0`, a Pi model, OS, network manager, number of radios, or that management can be interrupted. Ask Cole about existing workloads rather than exporting process lists, configuration files, or credentials. Missing tools or non-Linux OS require an adapted discovery plan.

**Gate:** record results and topology, confirm ownership and privacy scope, then request approval for concrete network changes and rollback. Elapsed time is not approval. Stop if management/recovery depends on the interface to be repurposed and no safe recovery exists.

## 1. Proposed topology and alternatives

Preferred only if supported:

```text
Existing Xfinity LAN
        |
        | Ethernet uplink
        v
Raspberry Pi — controlled forwarding / isolated Uni subnet
        |
        | isolated 2.4GHz Wi-Fi AP
        v
Our retail Uni

MacBook Pro — normal Wi-Fi LAN access for private evidence review
```

This avoids a Mac USB-C Ethernet adapter. Isolation must prevent Uni clients reaching household peers or Pi management while preserving approved normal internet access. Do not bridge the Uni into household broadcast traffic by default. Exact segmentation/forwarding depends on the OS and interfaces; it is not configured here.

If unsuitable, evaluate the spare Nighthawk's supported AP/router modes and 2.4GHz isolation. A normal switched LAN port may not expose the Uni's unicast traffic to the Pi. Prove capture visibility before choosing that topology; do not assume monitor mode, port mirroring, client isolation, or a router packet-capture facility. Do not alter the live Xfinity router to make the experiment fit.

## 2. Baseline and rollback before any change

Record existing Pi duties, interface roles, routes, active network manager, and how management is reached. Keep existing network configuration backups private. Record which device settings and connections will change and how to restore each. Preserve the Uni's existing working Wi-Fi profile if its normal UI permits; verify official instructions before changing profiles. Never reset, delete content, or trigger a firmware update as setup.

The approved plan must identify: affected interface/config files; a safe local console or equivalent recovery route; temporary AP removal; restoration of prior services/routes; Uni return to its original network; checks for normal household and Pi services. If these cannot be specified, do not proceed. Do not snapshot or share router credentials through this repository.

## 3. Credentials and isolation

Use a unique temporary AP name and password stored privately, not in command history, screenshots, git, or issue reports. Do not reuse the household Wi-Fi password. Confirm the capture scope excludes unrelated users/devices. Retain the device's ordinary trust configuration; no proxy CA, TLS interception, fake official endpoint, account probing, or certificate installation. Do not disable security to force a connection.

## 4. Verify association and capture vantage

After a future approved setup, verify the AP's **actual band, frequency and channel** are 2.4GHz and confirm the Uni appears in that AP's local association/lease records. Keep the client identity private. A “2G” SSID name is not proof. Record radio settings and link the device privately to a pseudonymous observation ID.

Determine which interface carries traffic between the Uni and uplink. A Pi AP/client-side interface may retain client attribution before NAT; the Ethernet uplink may show the Pi's translated address instead. Compare approved interface counters/lease evidence and a short, narrowly scoped pilot observation while the Uni performs one normal connection action. Timestamp both vantage points if needed. If attribution is uncertain, stop and correct the topology before collecting a baseline. No interface is assumed here.

## 5. One action, one evidence record

1. Check the Pi and Mac clocks against their normal time source. Record ISO 8601 UTC plus local timezone/offset and estimated clock skew. Leave the Uni clock unchanged.
2. Create an [evidence record](evidence-template.md). Record firmware/region, topology, interface, tool versions and capture limitations.
3. After authorization, start a tightly bounded local observation of only our Uni on the proven interface. Capture command/filter/duration will be specified in the approved plan. Record an idle baseline so background activity is not attributed to a menu action.
4. Timestamp one ordinary action: for example, open the device's information refresh menu and perform a normal check, after confirming the current firmware's menu semantics. Avoid purchases, new codes, updates, deletion and repeated reward claims.
5. Record visible device result and end time, stop promptly, and privately check whether the observation covered the intended interval without excessive loss.
6. Repeat only the same benign action when safe, with a quiet interval. Record differences, failures and competing explanations. Do not automate requests to official infrastructure.

No request replay, scanning, traffic injection, trust bypass, or authenticated API access is part of a baseline.

## 6. What passive capture can and cannot show

Depending on vantage and encryption, it may show DNS questions/answers, destination IP/port, traffic direction/volume, connection timing, retries, and some TLS handshake metadata. Cached/encrypted DNS, session reuse, NAT and packet loss can hide or distort these signals. Absence of a query is not proof of no dependency.

Ordinary capture does not decrypt TLS application payloads. Do not promise URL paths, HTTP methods, MQTT topics, protobuf schemas, authentication tokens, server state or exact device trust rules. Some TLS versions encrypt certificates and other handshake messages. A failed connection does not by itself prove pinning. Do not seek protected keys to fill gaps.

## 7. Private storage, checksums and retention

Choose an owner-only local evidence directory **outside all repositories, `public/`, `dist/`, and shared/cloud-synced folders**. Restrict access, use disk encryption where available, and limit retention to what the owner approves. Keep raw originals unchanged and analyze copies. Use pseudonymous filenames such as `TM-RP-002-OBS-0001`; keep the identity map private.

For a future already-created local file, hash it without uploading it:

```sh
# Mac; replace the example with the actual private file path.
shasum -a 256 '/absolute/private/path/TM-RP-002-OBS-0001.pcapng'
# Linux alternative, on the evidence host.
sha256sum '/absolute/private/path/TM-RP-002-OBS-0001.pcapng'
```

These are examples only; no captures exist yet. Record the exact byte size and SHA-256 privately in the evidence record. Hash redacted derivatives separately and identify their parent observation. A hash establishes file identity, not correctness, completeness, or safety to publish. Keep raw paths/filenames private if identifying.

## 8. Redaction and publication

Default raw captures to **Private — sensitive** even when payloads are encrypted. Review DNS names, device identifiers, IP/MAC/SSID, personal timestamps, keys/certificates, tokens, credentials, codes, ticket entitlements, and unrelated traffic. Prefer a minimal hand-written/redacted text finding over a capture attachment. Use consistent pseudonyms and generalized destinations only where doing so preserves the finding's meaning.

Record what was removed and how redaction limits interpretation. Check text, screenshots, metadata, filenames and git diff before sharing. Obtain owner review before publishing any derivative evidence. Do not publish copyrighted firmware, vendor assets, paid payloads, authentication material or raw sensitive traffic. A second reviewer should verify a proposed public artifact when available; if uncertain, retain it privately.

## 9. Restore and verify

Stop observation, remove temporary client access, and apply the approved rollback to the Pi/AP. Restore the Uni's original Wi-Fi connection through its normal UI without resetting it. Confirm normal play/connectivity and the Pi's prior duties; verify household connectivity and no temporary route/DHCP/AP remains. Record cleanup and any failure. Stop and request direction if recovery differs from the plan. Do not improvise router changes or factory resets.

## Completion criteria

P1 is complete only when a repeatable private record proves topology, 2.4GHz association, interface attribution, action timestamps, metadata limits, integrity hashes, redaction classification and successful rollback. A capture file alone is insufficient. This assignment completes preparation only.
