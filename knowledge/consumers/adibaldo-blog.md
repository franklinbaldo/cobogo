---
type: consumer
title: Adi blog
repository: https://github.com/franklinbaldo/adibaldo.github.io
adoption_status: candidate
surface: personal blog
interaction_profile: simple long-form reading, archive navigation, and printable compilation
runtime: Astro blog on GitHub Pages
constraints:
  - preserve simple personal identity
  - avoid over-systematizing a small publication
capabilities_used: []
unmet_needs:
  - lightweight editorial foundations
  - simple archive/navigation rhythm
last_verified: 2026-08-16
---

# Adi blog

The Adi blog is a candidate consumer because it is a real Astro/GitHub Pages publication, but its simplicity is itself a useful constraint.

Cobogó should be able to serve a small personal blog without requiring a heavy component or configuration surface.

## Verified project surface

The public home exposes two distinct jobs from the same editorial corpus: ordinary post reading and a dedicated **“Abrir livro para imprimir”** route. The `/livro` surface compiles every non-draft post in chronological order into one semantic document with a cover, generated compilation date, table of contents, chapter anchors and browser print/PDF action.

The print projection is not a generic export button. It has explicit A4 page mechanics: screen-only actions disappear, cover and summary break onto their own pages, and each post becomes a chapter beginning on a new page. The screen source and printed projection are produced from the same Astro content collection rather than maintaining a second copy of the prose.

This is independent positive evidence for Cobogó's experimental `Document and print surface` relation in a materially different context from legal-document consumers: a small personal archive can treat pagination as a real reading/circulation mode while preserving a lightweight local identity.

Evidence class in this verification is **source/configuration**. No rendered print/PDF capture was produced in this pass, so the card must not imply pixel-level print verification.
