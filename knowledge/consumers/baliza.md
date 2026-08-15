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
  - comparison-specific analytical surfaces still need independently rendered factual peer evidence before #267 can promote a shared comparison relationship
last_verified: 2026-08-15
---

# Baliza

`franklinbaldo/baliza` is the live Baliza consumer. The obsolete `baliza-site` repository was removed from the Cobogó consumer registry and must not influence live evidence.

## Evidence tiers

The deployed `/baliza/` home and `/status` shell render in the current review environment and are valid rendered evidence. Routes such as `/atas`, `/dispensas`, `/comparar` and `/mercado` depend on client-only islands and external data; when that runtime cannot complete, their source remains useful but is explicitly weaker than rendered evidence.

That limitation is no longer universal across Baliza's client-only analytical surfaces: `/publicacoes` now has dedicated reproducible evidence that builds the Project Pages artifact, hydrates the real archive-backed data path, and records the resulting state. A client-only failure remains **incomplete evidence, not an empty interface**, and a rendered shell is not equivalent to a hydrated data surface.

## Consumer corrections — 2026-08-12

Cobogó review now produces consumer fixes, not only observations.

- **Baliza #649** — merged as `9b49336`: removed the SSR-only green `Operacional` claim that could contradict a later live error; added an accessible caption and explicit column scopes to the coverage-by-esfera comparison grid.
- **Baliza #651** — merged as `7f74d26`: removed `listbox`/`aria-haspopup=listbox` semantics from navigation disclosures whose actual content is links, restoring native `<details>/<summary>/<ul>/<a>` semantics.
- **Baliza #652** — merged as `dae4def`: changed `.sr-only` so focusable hidden controls become visible on `:focus-visible`; the real skip link can now be seen when reached by keyboard while non-focusable sr-only labels remain hidden.
- **Baliza #654** — merged as `04ed268`: preserved the exact Internet Archive freshness timestamp with native `<time datetime>` semantics while keeping the existing relative visible wording.
- **Baliza #656** — merged as `8da87d2`: made the city picker use one coherent `aria-activedescendant` focus model; the option itself owns `role=option` and is removed from the tab order instead of nesting a separate focusable button inside an option.
- **Baliza #658** — merged as `787ffad`: converted only MonitorGrid into a small hydrated Svelte island so its two city-scoped CTAs reuse the existing `cityState`; a selected/saved city now remains the context for those questions while cold visitors still SSR with the default city. No parallel localStorage authority or new framework/runtime was introduced.

These fixes preserve Baliza's visual identity and domain logic. Several produce little or zero pixel change; that still counts as design because interaction semantics and accessible communication are part of consumer quality.

## Deployment and validation — 2026-08-13

The former `npm audit` deployment blocker is closed. Baliza #664 migrated the web surface from Astro 6 to Astro 7.2.1, regenerated the dependency graph with npm, kept the production audit gate enabled, recalculated the emitted-script CSP hashes from the real `dist`, and updated the stale theme-toggle test contract without changing the component semantics established by #659.

The final PR head passed the normal web pipeline with runtime audit clean, lint/check, PNCP contracts, 655/655 web tests, static build of 21 pages and the bundle guard. After merge (`5f7bc663`), the `main` GitHub Pages workflow run 796 completed successfully. This restores current deploy/build evidence for Baliza; it does **not** by itself upgrade a client-only analytical route to rendered evidence when archive-backed hydration cannot be observed in the review environment.

## Public repository surface — 2026-08-15

Baliza #668, merged as `57905a6e`, corrected the repository entry surface after its tests and GitHub Pages deployment gates passed. The README now presents **Baliza** as the product rather than only “Baliza CLI”, links directly to the public site, and distinguishes the public portal, collection/preservation pipeline and CLI as three surfaces of the same project.

This is project-surface evidence rather than a new shared capability: a consumer README is part of the public face seen by people arriving through GitHub, but it should orient them toward the actual product and reusable machinery instead of duplicating the deployed site. Keep this as consumer evidence until the same relationship is deliberately evaluated across enough independent projects to justify a stronger Cobogó claim.

## Archive-backed rendered evidence — 2026-08-15

Baliza #671 closed the rendered-evidence gap tracked in #666 for one real analytical route. The new visual-capture workflow builds the same static Project Pages artifact, serves it under `/baliza/`, opens `/publicacoes`, and classifies the result as `hydrated`, `remote-data-unavailable`, `no-data` or `incomplete` instead of treating elapsed time or a rendered shell as proof of data availability.

The final pre-merge capture hydrated the real chain `Internet Archive manifest → remote Parquet → DuckDB-WASM → rendered aggregate` with `Snapshot: 2026-07` and 13 modalidade rows. It produced desktop (1280×900) and narrow (390×844) screenshots plus `capture-state.json`, with no page errors. The same capture surfaced #672: the dataset-schema grid fragmented short SQL types at desktop width. #671 then fixed that presentation without changing schema/domain content and recaptured both viewports.

This is independent supporting evidence for the operational relation already observed in Ficha #218: **rendered ≠ hydrated**. Baliza happened to reach `hydrated` in these runs, while the workflow still preserves explicit negative states; therefore the useful shared learning is the evidence taxonomy, not an assumption that archive hydration always succeeds. Do not promote the consumer-specific Playwright script as a shared Cobogó component merely because two consumers now classify hydration.

## Comparison surface negative evidence — 2026-08-15

Baliza #673/#674 tested `/comparar` specifically because #267 needs a second independently rendered comparison task before promoting the CausaGanha relationship. Brownfield inspection found that the selected municipality's per-capita value comes from PNCP results, but the three apparent “Municípios Semelhantes” were not municipalities at all: they were synthetic `−10%`, `+10%` and `−20%` transformations of that same value.

#674 corrected the project surface without inventing a domain algorithm. The route now says that real peer comparison is not yet available, names the synthetic block **Referências simuladas**, and states visibly that those values do not represent real municipalities or a real population-based peer selection. The visual-capture workflow now exercises `/comparar` as well as `/publicacoes` and records whether it reached `hydrated-with-explicit-simulation`, `remote-data-unavailable` or `incomplete`, plus desktop/narrow screenshots and JSON evidence.

A pre-merge rendered run reached `hydrated-with-explicit-simulation` with all three scenario cards and the disclaimer visible. Its screenshot exposed one remaining overclaim in the page lede (“comparação com municípios do mesmo porte”), which was then corrected before merge. On the final PR head, the remote PNCP request returned no results; the capture correctly classified that run as `remote-data-unavailable` while still rendering the corrected lede and explicit error state. This is useful **negative evidence**, not a failed review: the route now distinguishes real data, simulated reference, and external-load failure instead of collapsing them into one apparent comparison result.

Therefore `/comparar` still does **not** satisfy the second-consumer evidence gate for #267. The missing evidence is now narrower and factual: a rendered Baliza surface must compare genuinely observed peers (or another consumer must provide the same task) before Cobogó can infer a shared comparison relationship. Do not promote the synthetic scenario-card presentation itself.

## Relation to #267

Baliza now has independently rendered archive-backed analytical evidence on `/publicacoes`; source-only is no longer the strongest available evidence for every client-only route. That strengthens the corpus around provenance, freshness, archive-backed data reading and truthful hydration state.

It still does **not** provide a second independently rendered comparison surface equivalent to CausaGanha's 96-row tribunal grid. `/publicacoes` is an aggregate-by-modalidade task, not a comparison task, and `/comparar` now explicitly documents that its peer values are simulations rather than observed municipalities. The comparison relation in #267 therefore remains below its promotion threshold.

The archive freshness `<time>` correction independently resembles CausaGanha's provenance/freshness gap. The restored deployment and hydrated capture show that Baliza can produce both artifact and rendered evidence, but promotion still requires the matching user task and relationship to be observed across consumers rather than inferred from tag similarity.

Do not derive a generic table, status, filter or provenance pattern merely from tag similarity. The user task and rendered evidence must match.
