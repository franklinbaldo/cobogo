---
type: consumer
title: Quem São Eles?
repository: https://github.com/franklinbaldo/quem-sao-eles
adoption_status: candidate
surface: public editorial profile catalog
interaction_profile: profile reading, chronology, source archive and political memory
runtime: Astro static site on GitHub Pages
constraints:
  - preserve sober journalistic identity
  - sources must remain visible and archived
  - profiles and news need long-form reading rhythm
capabilities_used: []
unmet_needs:
  - editorial provenance pattern
  - profile and chronology composition
  - source/archive inscription semantics
last_verified: 2026-08-11
---

# Quem São Eles?

Quem São Eles? is a high-confidence Cobogó consumer candidate because it is an Astro-based public editorial catalog with explicit journalistic identity, archived sources and agent-maintained political profiles.

Its strongest synergy is with O Vigia around provenance, source hierarchy, profiles, chronology and editorial reading. Cobogó should not erase its intentionally sober local identity.

## Verified inspection — 2026-08-11 — not yet an adoption target

Cloned, built and captured. The build succeeds, but the rendered page is **empty of product content**: both columns read *Nenhuma atualização recente* / *Nenhum político cadastrado*, because the catalogue is produced by a parquet/DuckDB-WASM data pipeline that a fresh checkout does not populate.

The page also still carries Astro starter-template boilerplate — a *"© 2026 Your name here"* footer and *Follow Astro on Mastodon/Twitter* links. Those template links are currently the only focusable elements on the page.

This is recorded as **negative evidence for adoption sequencing**, not as criticism of the product. On paper this repository was the ideal first external adoption: three routes, a 155-line stylesheet, a genuinely distinct newspaper identity (Georgia, near-white field, black rules, uppercase masthead, 2fr/1fr grid) and no focus treatment at all. Every registry-level signal said *start here*.

It fails one criterion that only real inspection could reveal: there is no rendered product surface to capture a meaningful before/after against. Adopting a shared contract here would decorate template boilerplate and prove nothing.

The general lesson is worth keeping: **a consumer's adoption readiness depends on whether its real surface renders from a checkout, not on how small its stylesheet is.** Data-pipeline-fed surfaces need a fixture or a populated build before they can serve as adoption evidence. Re-evaluate once the catalogue renders.

