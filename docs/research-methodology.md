# TamaMedics Research Methodology

Keep research records reproducible, cautious, and useful. Distinguish direct observations from inferences, record enough context for another researcher to repeat the work, and preserve uncertainty when the evidence does not support a broader claim.

## Evidence labels

- **Confirmed:** reproduced or directly verified by TamaMedics research.
- **Observed:** seen in hardware, software, emulator behavior, or source material, but not yet fully generalized.
- **Community Reported:** reported by a community source but not independently reproduced by TamaMedics.
- **Unverified:** plausible information without sufficient evidence.
- **Researching:** under active investigation.
- **Planned:** intended future work.

## Research records

Record the device model, visible board revision, method, tools, relevant settings, raw observations, and known limitations. Keep observation and interpretation separate. For hardware photos, use even lighting, capture both board sides when safe, make IC markings readable, and remove personal or identifying information.

For firmware research, report cryptographic hashes, exact file size, dump method, read count, and whether independent dumps matched. Never commit or upload copyrighted firmware. Preserve an untouched original privately; work only on copies; distribute patches, deltas, scripts, checksums, and documentation.

Do not attach programming hardware until package, pinout, voltage, and electrical behavior have been verified. Emulator success does not guarantee hardware safety.

## Observation, inference, and reproduction

Write raw observations before conclusions. An emulator behavior, datasheet statement, board measurement, and community report are different forms of evidence; name the source and do not let one stand in for another. A useful reproduction record includes the exact procedure, settings, tools and versions, expected result, actual result, number of repetitions, and failure conditions.

Record citations close to the claim they support. Preserve the source title, author or organization when known, URL, access date for changeable web sources, and relevant page or section. For community material, record who reported it and whether TamaMedics reproduced it.

## Hardware safety and preservation

Prefer nondestructive inspection and read-only acquisition. Clearly label any test that removes components, cuts traces, erases memory, changes fuses, or otherwise risks irreversible damage. Photograph the untouched board first and record board revision markings so findings are not generalized across unknown revisions.

Before powered measurements, document the reference ground, expected voltage range, current limit, and test-point identity. Stop when the package, pinout, voltage, or electrical behavior is uncertain. Safety warnings and unsuccessful experiments are part of the research record, not details to omit.
