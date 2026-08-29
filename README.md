# TamaMedics

TamaMedics is an independent, community-oriented project for Tamagotchi repair, hardware preservation, reverse engineering, firmware research, emulator-assisted analysis, documentation, and open-source tooling.

This repository contains the source for the TamaMedics documentation and research site—not merely a marketing website—and is intended to grow alongside the project's technical work.

> **Repair it. Document it. Preserve it. Share it.**

## What TamaMedics Is

TamaMedics helps preserve aging virtual-pet hardware and the knowledge needed to understand, repair, and study it. The project brings together practical repair findings, careful technical research, reproducible documentation, and tools that the community can inspect and improve.

## Current Focus

**Research Project #001: Tamagotchi Plus Color — English Firmware Research**

Current research directions include:

- Safe firmware-dumping methodology
- Firmware revision identification
- Emulator validation
- Hardware and flash-memory research
- Translation and patch development
- A copyright-conscious patch/delta distribution strategy

This is active research. No finished English patch is being claimed or distributed.

## Website

The production site is available at [tamamedics.com](https://tamamedics.com). It is generated statically from this repository and hosted on SiteGround.

## Technology

- [Astro](https://astro.build/)
- TypeScript
- MDX
- Static-first output
- CSS
- GitHub
- SiteGround production hosting

## Repository Structure

```text
src/
  components/   Reusable Astro components
  content/      Typed research and documentation entries
  layouts/      Shared page layouts
  pages/        File-based site routes
  styles/       Global styles and design tokens
public/         Static images, icons, and other public assets
dist/           Generated production build output
```

`dist/` is created by the build process and should not be edited manually. Make changes in `src/` or `public/`, then rebuild.

Content collection schemas live in `src/content.config.ts`. Research projects may be published as MDX; empty collections are ready for future lab notes, repair guides, and device records.

## Local Development

Node.js 22.12 or newer is required.

```sh
npm install
npm run dev
```

The development server prints its local URL when it starts.

## Production Build

```sh
npm run build
```

Astro writes the generated static site to `dist/`.

## Project Sections

- **Clinic** — Repair guides, diagnostics, teardowns, and hardware failures
- **Research Lab** — Reverse engineering, firmware analysis, and board research
- **Open Projects** — Active and planned preservation work
- **Device Archive** — Hardware references, revisions, and specifications
- **Patch Library** — Community patches and tooling without copyrighted firmware
- **Lab Notes** — Research updates, experiments, and discoveries
- **Downloads** — Open-source utilities, templates, scripts, and resources
- **Contributing** — Guidance for participating in the project

## Research Standards

Technical claims should be evidence-aware, reproducible where possible, and clear about uncertainty. TamaMedics uses the following confidence terminology:

- **Confirmed** — Supported by direct, repeatable evidence
- **Observed** — Directly seen or measured but not yet fully established
- **Community Reported** — Reported by community members and awaiting independent confirmation
- **Unverified** — Plausible information without adequate supporting evidence

Research notes should preserve sources, methods, relevant hardware context, and the limits of what the evidence shows.

## Firmware & Copyright Policy

TamaMedics does not intend to redistribute copyrighted Bandai firmware images. Full copyrighted vendor firmware must not be committed to this repository or distributed through TamaMedics.

Where appropriate, firmware-related work should use:

- Hashes and checksums
- Patch files and binary deltas
- Scripts and open-source tools
- Research notes and documentation
- Technical metadata

Contributors are responsible for ensuring that their submissions are appropriate to share. No repository-wide software license is currently declared; do not assume that every file or asset is available under the same terms.

## Contributing

Useful contributions include board photographs, IC markings, repair findings, schematics, pin mappings, firmware hashes, emulator findings, translation work, patch testing, tools, and documentation improvements.

Please provide enough context for others to evaluate or reproduce a finding, remove personal information from submitted material, and do not upload copyrighted firmware images.

Visit the [TamaMedics GitHub repository](https://github.com/simplycole/tamamedics.com) to follow development or contribute.

## Status

TamaMedics is actively being built. Its documentation, research, tools, and project coverage will continue to grow as findings are responsibly verified and published.

## Disclaimer

TamaMedics is an independent fan preservation and research project. It is not affiliated with, endorsed by, or sponsored by Bandai. Tamagotchi and related trademarks are the property of their respective owners.
