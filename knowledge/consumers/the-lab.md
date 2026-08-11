---
type: consumer
title: The Lab
repository: https://github.com/franklinbaldo/the-lab
adoption_status: candidate
surface: public research-lab publication
interaction_profile: research reading, papers, logs, RFE/state navigation and provenance
runtime: Astro static site on GitHub Pages with content synchronized from another research repo
constraints:
  - preserve research provenance and source-repo relationships
  - papers and logs remain readable as documents rather than generic cards
  - automation/sync metadata should orient rather than dominate content
capabilities_used: []
unmet_needs:
  - research publication and document-reading rhythm
  - provenance/source-repository inscription
  - archive/navigation across papers logs and research state
  - surface-aware focus treatment for its accent-filled interactive regions
last_verified: 2026-08-11
---

# The Lab

The Lab is a candidate Cobogó consumer because it is a live Astro/GitHub Pages research publication fed by an automated multi-repository research workflow.

It extends the editorial cluster with a distinct research-document context: papers, logs and RFEs need stronger provenance and document hierarchy than an ordinary personal blog, without becoming an administrative dashboard.

## Verified inspection — 2026-08-11

Inspected at real source and in a real browser capture, not inferred from the registry.

The site is materially larger than the rest of the editorial cluster: 21 route files, 673 built pages and a 1597-line `global.css` with its own light/dark token system and a per-persona colour palette. Its identity — Inter/JetBrains Mono, glass surfaces, glow, teal/violet/warm accents — is strong, specific and must remain local. It is not a small-adoption target.

## Independent reproduction of `foco tem dois vizinhos`

The Lab independently declares almost exactly Cobogó's semantic role vocabulary: `--bg`, `--bg-card`, `--bg-surface`, `--text`, `--text-muted`, `--border`, `--accent-primary`, `--focus-ring`. Nobody coordinated this. Two consumers converging on the same role set without contact is the strongest available evidence that the role model in [the foundations contract](../foundations/contract.md) describes something real rather than one project's taste.

It also reproduces the defect the role model was missing. The Lab sets `--focus-ring: #2d7d9a` and applies it globally through `*:focus-visible`. Its `.skip-link` — the **first tab stop on all 673 pages** — is filled with `var(--accent-primary)`, which is the same `#2d7d9a`.

Measured in Chromium at 1280×900, tabbing once from page load:

| adjacency | measured |
|---|---|
| ring × the element it surrounds | **1,00:1** |
| ring × page behind it | 4,51:1 |

The ring is exactly the colour of the control it is marking. Only the 2px offset gap, showing page background, keeps it perceptible at all — and that gap is unfilled, so the indicator survives by accident rather than by contract.

This matters because The Lab did not motivate [Foco tem dois vizinhos](../canon/foco-tem-dois-vizinhos.md). The rule was derived from Cobogó's own navy hero, then predicted a failure in a product with a different palette, a different stack, a different author intent and an already-considered accessibility layer — The Lab has a skip link, `prefers-reduced-motion` handling and a deliberate focus ring, so this is not a project that ignored accessibility. It is a project that had no way to express the second tone.

That is independent confirmation rather than a second example of the same authorship.

## Adoption note

The useful first adoption here is **not** importing `cobogo/core` wholesale over 1597 lines of working CSS. It is the narrow one: adopt the two-tone focus relation and mark the accent-filled interactive regions as inverted, keeping every local value. Everything else stays local identity.
