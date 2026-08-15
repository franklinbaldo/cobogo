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
capabilities_used:
  - reduced-motion invariant (canon/grammar adoption, implemented locally)
unmet_needs:
  - research publication and document-reading rhythm
  - deployed provenance/source-repository inscription (implemented in main; public deploy still unverified)
  - archive/navigation across papers logs and research state
last_verified: 2026-08-15
---

# The Lab

The Lab is a candidate Cobogó consumer because it is a live Astro/GitHub Pages research publication fed by an automated multi-repository research workflow.

It extends the editorial cluster with a distinct research-document context: papers, logs and RFEs need stronger provenance and document hierarchy than an ordinary personal blog, without becoming an administrative dashboard.

## Verified inspection — 2026-08-11

Inspected at real source and in a real browser capture, not inferred from the registry.

The site is materially larger than the rest of the editorial cluster: 21 route files, 673 built pages and a 1597-line `global.css` with its own light/dark token system and a per-persona colour palette. Its identity — Inter/JetBrains Mono, glass surfaces, glow, teal/violet/warm accents — is strong, specific and must remain local. It is not a small-adoption target.

## Correction — it did not reproduce the focus defect

An earlier inspection recorded The Lab as independently reproducing [Foco tem dois vizinhos](../canon/foco-tem-dois-vizinhos.md). That was wrong and is corrected here rather than quietly edited away.

The claim rested on `getComputedStyle`: ring colour and `.skip-link` fill are both `#2d7d9a`, giving 1,00:1. But with `outline-offset: 2px` the ring's neighbour is the offset gap, and the gap exposes the page. Pixel scan at the focused element's edge: `teal ×6 │ 250,251,249 ×2 │ teal ring ×2 │ page`. The ring sits on light on both sides, ~4,3:1. It was never broken.

What *is* still true, and is the durable part: The Lab independently declares nearly the same semantic role vocabulary as the foundations contract — `--bg`, `--bg-card`, `--bg-surface`, `--text`, `--text-muted`, `--border`, `--accent-primary`, `--focus-ring` — with no contact with Cobogó. That remains real evidence for the role model, and it is independent of the focus question.

## Real gap found instead: no reduced-motion handling

The stylesheet declares 21 animation/transition rules and a 385-line animation section, and had **no** `prefers-reduced-motion` block anywhere in `src`.

Measured in Chromium with the preference set to reduce, on the home route: 1 element still animating and 148 still transitioning. This violates an invariant the [foundations contract](../foundations/contract.md) already states.

Adopted as **canon/grammar adoption** in `franklinbaldo/the-lab`: a local 15-line block, The Lab's own idiom, no Cobogó tokens, no `cobogo/core` import. After: 0 animating, 0 transitioning. No effect for users who have not expressed the preference.

## Core adoption assessed and declined, with numbers

| measure | value |
|---|---|
| local `global.css` | 1598 lines, 20 sections |
| lines `cobogo/core` could remove | ~9 (a 5-line reset, a 4-line focus rule) |
| core selectors matching nothing across 6 real routes | **11 of 24** — all 8 `data-cobogo-*` contracts plus the 3 table selectors |
| local `:root` tokens with a core equivalent | 10 of 32 |
| local tokens with none | 22 — persona palette, status, glow, glass, `--nav-height`, `--card-radius` |
| core lines added | 174 |

The 10 mappable tokens carry different values, so they would survive as overrides: a rename, not a removal. Importing core here would add 174 lines to remove ~9, and 46% of its selectors would match nothing. That is a nominal dependency, so core adoption was declined on measurement rather than on principle.

## Project-surface review — source snapshot provenance — 2026-08-15

The sync pipeline already cloned `franklinbaldo/rosencrantz-coin` and regenerated The Lab's public `content/`, but it did not persist the exact upstream commit that produced a rendered state. The public surface therefore explained the research but could not identify its source snapshot precisely.

Implemented in The Lab PR #127 and merged to `main` at `468b14f1e1c627eafbc4fc91513a28e6e2521aa3`:

- sync now writes deterministic `content/provenance.json` with upstream repository, exact SHA and source commit timestamp;
- the global footer reads the record defensively and links `repository@short-sha` to the exact source commit;
- the current upstream snapshot was seeded so the first successful deploy can expose provenance immediately;
- no new Cobogó tokens/components were introduced and The Lab's local identity remains unchanged.

**Verification boundary:** code and merge in `main` are verified. Public deployment is **not** verified. The GitHub Actions API reports `Deploy Site` (`.github/workflows/deploy.yml`, workflow id `241991745`) as `disabled_manually`; therefore the missing post-merge run is currently explained by workflow state rather than by the YAML `push`/`paths` trigger. The blocker is tracked in The Lab #128. `Sync from rosencrantz-coin` and `Journalist Heartbeat` are also manually disabled, but re-enabling them is intentionally outside this provenance fix.

Do not treat the provenance need as fully closed until `Deploy Site` is re-enabled, a build/deploy succeeds and the rendered `Source snapshot` is checked on the published surface.

This is one-consumer evidence for a project-surface practice — make generated/public artifacts traceable to the exact upstream snapshot — not enough evidence to promote a shared Cobogó pattern or component.

## Adoption note

Re-evaluate core adoption when The Lab grows a surface core actually serves — tabular/data reading, or an inverted region. Neither exists today.
