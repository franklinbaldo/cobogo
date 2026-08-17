---
type: consumer
title: Sites Prefeituras
repository: https://github.com/franklinbaldo/sites_prefeituras
adoption_status: candidate
surface: public audit dashboard and documentation
interaction_profile: large municipal comparison, metrics, ranking, search and filters
runtime: MkDocs + Tabulator.js dashboard intended for GitHub Pages
constraints:
  - 5570-municipality scale
  - accessibility/performance metrics are domain content as well as UI concerns
  - dense tabular comparison must remain scan-friendly
  - deployed artifact is primary evidence; source inspection remains weaker while Pages is blocked
capabilities_used:
  - consumer-side design quality governance
  - persistent control labeling
  - native search and navigation interaction semantics
  - machine-readable temporal freshness
  - keyboard focus visibility
  - explicit data-load versus empty-result state semantics
unmet_needs:
  - allow `main` in the `github-pages` environment deployment branch policy; the only allowed branch is stale `master`
  - inspect the rendered Tabulator ranking before deriving shared comparison relations
last_verified: 2026-08-17
---

# Sites Prefeituras

Sites Prefeituras is a data-reading consumer candidate: a MkDocs + Tabulator dashboard for comparing PageSpeed/audit metrics across Brazilian municipalities.

## Evidence tier

The source and docs build are inspectable, but the deployed dashboard is **not currently live evidence**. The latest verified deployment run (`31670359477`, 2026-08-13) built the MkDocs site successfully, then the `Deploy to GitHub Pages` job failed before any runner step (`runner_id: 0`, `steps: []`). Direct inspection of the `github-pages` environment on 2026-08-17 shows `custom_branch_policies: true` with exactly one allowed deployment branch: stale `master`. The maintained/default branch is `main`. `sites_prefeituras#69` tracks the repository-setting fix.

Until that setting is repaired and the resulting artifact is captured, this consumer remains source/workflow-tier for Cobogó derivation. Source evidence may justify clear local design corrections; it does not satisfy #267's independent rendered-consumer threshold.

## Consumer corrections — 2026-08-12 to 2026-08-13

The Cobogó quality pass produced six merged consumer corrections:

- **#66** — merged as `68aeef4`: removed the full nested HTML document and duplicate Tabulator/script ownership from `docs/index.md`; MkDocs now owns the page shell and shared assets, with the existing fonts preserved through the canonical stylesheet.
- **#67** — merged as `d9aa5ae`: replaced duplicate inline/click/keypress search activation with one native form-submit path and replaced the clickable scroll `<div>` with a real anchor to the panorama section.
- **#68** — merged as `bfa5c71`: added a real search label, visible labels for state and municipality-size filters, and preserved `summary.generated_at` as native `<time datetime>` while keeping the localized visible timestamp.
- **#72** — merged as `e2c6452`: restored explicit `:focus-visible` rings for the search input and filters instead of relying on subtle background/border changes after suppressing the native outline.
- **#75** — merged as `494946e`: narrowed the stats animation selector to numeric elements carrying `data-count`, preventing the freshness timestamp from receiving a `NaN` animation target and being overwritten indefinitely.
- **#76** — merged as `1e765d8`: separated ranking-load failure, legitimate empty filtered results, and summary-load failure into distinct visible states. A failed ranking load no longer renders as a valid empty ranking; a failed summary no longer leaves misleading zero values; either surface may still succeed independently.

These are consumer quality corrections, not a shared component extraction.

## Negative and incomplete evidence

The repository still has a pre-existing Python CI failure (`storage.py` F402) unrelated to the dashboard changes, tracked in #70. The dashboard PRs' dedicated Build Docs job remained green; base debt was not folded into the design changes.

The more important remaining limitation is evidentiary, not source correctness: the `github-pages` environment is configured with one custom branch policy for `master`, while the maintained/default branch is `main`. Therefore the campaign still has not observed the post-correction Tabulator surface in its deployed form. Workflow configuration, a successful build artifact, environment eligibility and a live rendered Pages site remain separate evidence classes.

## Relation to #267

This consumer strongly pressures ranking, filters, freshness, failure/empty distinction and large-table reading, but it **must not yet promote #267**. The Tabulator comparison surface has not been captured as a healthy deployed artifact in this campaign.

Once `main` can deploy again, capture the real dashboard, verify ranking/table semantics and the corrected failure/empty states, then compare its actual user task against CausaGanha rather than promoting relations from source/tag similarity.
