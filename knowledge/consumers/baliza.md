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
  - truthful live-state presentation
  - native navigation disclosure semantics
  - visible keyboard skip navigation
  - machine-readable temporal provenance
  - consistent aria-activedescendant combobox focus model
  - active-city interaction continuity
unmet_needs:
  - client-only analytical surfaces still need rendered review when runtime access permits
last_verified: 2026-08-12
---

# Baliza

`franklinbaldo/baliza` is the live Baliza consumer. The obsolete `baliza-site` repository was removed from the Cobogó consumer registry and must not influence live evidence.

## Evidence tiers

The deployed `/baliza/` home and `/status` shell render in the current review environment and are valid rendered evidence. Routes such as `/atas`, `/dispensas`, `/comparar` and `/mercado` depend on client-only islands and archive.org-backed data; when that runtime cannot complete, their source remains useful but is explicitly weaker than rendered evidence.

A client-only failure is therefore **incomplete evidence, not an empty interface**.

## Consumer corrections — 2026-08-12

Cobogó review now produces consumer fixes, not only observations.

- **Baliza #649** — merged as `9b49336`: removed the SSR-only green `Operacional` claim that could contradict a later live error; added an accessible caption and explicit column scopes to the coverage-by-esfera comparison grid.
- **Baliza #651** — merged as `7f74d26`: removed `listbox`/`aria-haspopup=listbox` semantics from navigation disclosures whose actual content is links, restoring native `<details>/<summary>/<ul>/<a>` semantics.
- **Baliza #652** — merged as `dae4def`: changed `.sr-only` so focusable hidden controls become visible on `:focus-visible`; the real skip link can now be seen when reached by keyboard while non-focusable sr-only labels remain hidden.
- **Baliza #654** — merged as `04ed268`: preserved the exact Internet Archive freshness timestamp with native `<time datetime>` semantics while keeping the existing relative visible wording.
- **Baliza #656** — merged as `8da87d2`: made the city picker use one coherent `aria-activedescendant` focus model; the option itself owns `role=option` and is removed from the tab order instead of nesting a separate focusable button inside an option.
- **Baliza #658** — merged as `787ffad`: converted only MonitorGrid into a small hydrated Svelte island so its two city-scoped CTAs reuse the existing `cityState`; a selected/saved city now remains the context for those questions while cold visitors still SSR with the default city. No parallel localStorage authority or new framework/runtime was introduced.

These fixes preserve Baliza's visual identity and domain logic. Several produce little or zero pixel change; that still counts as design because interaction semantics and accessible communication are part of consumer quality.

## Validation caveat

The Baliza Pages job still stops at a pre-existing `npm audit` gate tracked in #644 before downstream web lint/test/build steps execute. For the small semantic PRs above, the separate test workflow passed and merge rationale was documented under Cobogó's gate-blocked evidence rule. The audit debt remains separate from design PRs.

## Relation to #267

Baliza is promising data-reading evidence, but the live routes available in this environment still do not provide a second independently rendered comparison surface equivalent to CausaGanha's 96-row tribunal grid. `CoverageReport` is client-derived and may not render under the current external-data constraint; source alone does not cross the promotion threshold.

The archive freshness `<time>` correction independently resembles CausaGanha's provenance/freshness gap, but here its current evidentiary tier is still source-backed rather than fully rendered. Do not promote that relation solely from code similarity.

Do not derive a generic table, status, filter or provenance pattern merely from tag similarity. The user task and rendered evidence must match.
