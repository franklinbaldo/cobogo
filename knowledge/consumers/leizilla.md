---
type: consumer
title: Leizilla
repository: https://github.com/franklinbaldo/leizilla
adoption_status: candidate
surface: public Brazilian legislation search, law detail, evidence and coverage portal
interaction_profile: public legal-data search, reading, provenance and coverage inspection
runtime: Astro + Svelte frontend over static/released legal datasets
constraints:
  - public claims must not outrun actually published datasets or verified coverage
  - official-source, capture, OCR/parse and release provenance must remain inspectable
  - legal-data uncertainty and missing coverage must be represented explicitly
  - local dinosaur identity belongs to Leizilla and must not be centralized into Cobogó
capabilities_used: []
operational_capabilities:
  - Astro/Svelte human-facing web application
  - GitHub Pages deployment workflow
  - automated discovery and harvest workflows
  - parse and dataset release workflow
  - Wayback Save Page Now preservation workflow
  - Internet Archive integration for captured and released artifacts
unmet_needs:
  - provenance and freshness semantics spanning source capture parse and dataset release
  - coverage/status patterns that distinguish known absence from pipeline incompleteness
  - reusable dataset access paths from public explanation to downloadable/queryable artifacts
  - data-reading patterns for search results law detail evidence and version history
integration_evidence:
  - https://github.com/franklinbaldo/cobogo/issues/323
local_identity: playful Leizilla dinosaur identity applied to a rigorous public legal-data product
last_verified: 2026-08-14
---

# Leizilla

Leizilla is a **candidate** Cobogó consumer with a real human-facing surface and a substantial data/preservation pipeline behind it. It is no longer accurately described as merely technical infrastructure awaiting UI classification.

## Current public-surface evidence

The repository contains an Astro/Svelte application under `web/` with concrete surfaces for:

- searching laws;
- inspecting an individual law;
- reading structured devices/data;
- inspecting evidence and version history;
- viewing coverage;
- representing the explicit unavailable-dataset state.

This is enough to establish a real human task and therefore a Cobogó consumer relationship. It does **not** establish active Cobogó package adoption.

## Project machinery behind the surface

Current repository workflows include web deployment, discovery/harvest, parse/release and Wayback Save Page Now. The project also integrates Internet Archive into its capture/release architecture. These are operational capabilities of Leizilla, not Cobogó capabilities used.

The important project-surface relation is:

```text
official source
  -> discovered candidate
  -> preserved capture
  -> OCR / parsed legal structure
  -> dataset release
  -> public search / law / evidence / coverage surface
  -> reusable artifact
```

Future reviews should test how much of this chain a person can actually understand and traverse from the public portal without requiring repository knowledge.

## Honest-state constraint

The repository README currently states that the public product is still moving toward its first production dataset/release. Therefore this card records implemented workflows and surface code but does not claim that a production dataset is already published or that the deploy currently exposes complete Rondônia coverage.

That distinction is itself a useful pressure case for Cobogó: public legal-data products need to distinguish **implemented pipeline**, **published artifact**, **observed coverage** and **verified freshness** rather than collapsing them into a generic success state.

## Candidate shared evidence

Leizilla may provide independent evidence for provenance, coverage and reusable-dataset patterns already pressured by analytical consumers such as CausaGanha, Ficha and Baliza. Do not promote a Leizilla-specific presentation into shared core merely from this registration; verify the rendered journey and compare independent consumer evidence first.

## Local identity

The dinosaur metaphor and playful voice are product identity. Cobogó may help with hierarchy, semantics, accessibility, data-reading and provenance without turning that identity into a family-wide visual motif.
