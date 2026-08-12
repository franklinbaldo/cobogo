---
type: consumer
title: Baliza
repository: https://github.com/franklinbaldo/baliza
adoption_status: active
surface: live public-contract data-reading product
interaction_profile: city-first discovery, status, search, dashboards, comparison, archive-backed analytical views
runtime: Astro with Svelte islands; deployed under /baliza/; some analytical routes are client-only and query archive.org in-browser
constraints:
  - deployed artifact is primary visual evidence
  - client-only archive-backed routes may be source-tier only when external runtime cannot load in the review environment
  - preserve public-contract domain semantics and provenance
capabilities_used:
  - consumer-side design quality governance
  - semantic comparison-table accessibility
unmet_needs:
  - skip link must become visible on keyboard focus
  - machine-readable freshness/provenance should be reviewed where live timestamps are exposed
  - client-only analytical surfaces still need rendered review when runtime access permits
last_verified: 2026-08-12
---

# Baliza

`franklinbaldo/baliza` is the live Baliza consumer. It is distinct from the historical `baliza-site` repository.

## Evidence tiers

The deployed `/baliza/` home and `/status` shell render in the current review environment and are valid rendered evidence. Routes such as `/atas`, `/dispensas`, `/comparar` and `/mercado` depend on client-only islands and archive.org-backed data; when that runtime cannot complete, their source remains useful but is explicitly weaker than rendered evidence.

A client-only failure is therefore **incomplete evidence, not an empty interface**.

## Current design findings

The `/status` SSR shell hard-coded a green `Operacional` badge before live metadata loaded. That could contradict the live error state below it, so Baliza #649 removes the premature health claim and lets live data own the state.

The coverage-by-esfera view is a true comparison grid. Baliza #649 adds an accessible caption and explicit column scopes without changing coverage rules or presentation.

The shared layout contains a real skip link, but `.sr-only` has no focused-state escape hatch, so the link remains visually hidden when reached by keyboard. Baliza #650 tracks that consumer-side defect.

## Relation to #267

Baliza is promising data-reading evidence, but the live routes available in this environment do not yet provide a second independently rendered comparison surface equivalent to CausaGanha's 96-row tribunal grid. `CoverageReport` is client-derived and may not render under the current external-data constraint; source alone does not cross the promotion threshold.

Do not derive a generic table, status or filter pattern merely from tag similarity. The user task and rendered evidence must match.
