---
type: consumer
title: CausaGanha
repository: https://github.com/franklinbaldo/causaganha
adoption_status: evaluating
surface: public data-reading web
interaction_profile: judicial data reading, comparison, provenance and status
runtime: Astro static SSG on GitHub Pages with selective Svelte islands and Pico baseline
constraints:
  - HTML first, CSS second, JavaScript last
  - preserve static GitHub Pages deployment
  - avoid appifying reading tasks
  - expose structure instead of hiding it behind interaction
  - speed is part of aesthetics
capabilities_used: []
unmet_needs:
  - reconciled semantic foundations
  - framework-agnostic core web primitives
  - data-reading patterns for tables metadata provenance and status
  - consumer theming and override contract
  - incremental brownfield migration guidance
integration_evidence:
  - https://github.com/franklinbaldo/causaganha/issues/861
local_identity: green/gold product identity, judicial-data purpose, existing typography and information architecture
last_verified: 2026-08-11
---

# CausaGanha

CausaGanha is the primary brownfield consumer for the current Cobogó reconstruction because it already has a functioning public web surface, its own design constitution, real data-reading workflows, and a substantial local token/style layer.

Its current `adoption_status` is **evaluating**, not active: Cobogó is using CausaGanha to derive and test reusable capabilities, but the reconstructed Cobogó package surface has not yet been adopted by the production site.

Its frontend deliberately follows several product constraints that Cobogó must preserve rather than overwrite:

- HTML first, CSS second, JavaScript last;
- speed is part of aesthetics;
- reading tasks should not be appified without need;
- structure should be exposed through headings, tables and inline information instead of hidden behind interaction;
- deployment is static on GitHub Pages, with islands only where client reactivity is justified.

These are product constraints, not Cobogó rules. Cobogó should provide grammar that strengthens them without turning CausaGanha into Astronauta or another consumer.

## Existing local design knowledge

CausaGanha already carries a large visual foundation in `web/src/styles/tokens.css`, including:

- semantic Pico overrides;
- green/gold brand colors;
- spacing, typography, radii, shadows and state colors;
- dark-mode values;
- a second, explicitly labelled "Brazilian Modernism Design System" token family with paper/concrete neutrals and modernist colors;
- legacy aliases retained for existing views.

That overlap is valuable brownfield evidence. It should be reconciled, not mechanically replaced by Cobogó tokens.

## Cobogó relationship

CausaGanha exercises [Vão](../grammar/vao.md), [Ritmo](../grammar/ritmo.md), [Faixa](../grammar/faixa.md), [Inscrição](../grammar/inscricao.md), [Texto é arquitetura](../canon/texto-e-arquitetura.md), and [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md).

Its concrete composition test is [CausaGanha — data reading](../specimens/causaganha-data-reading.md). The token overlap is tracked by the CausaGanha foundations reconciliation decision in this stack.

Its current reusable unmet needs drive the Cobogó backlog:

- [Foundations #263](https://github.com/franklinbaldo/cobogo/issues/263)
- [Consumer contract #265](https://github.com/franklinbaldo/cobogo/issues/265)
- [Framework-agnostic core web #266](https://github.com/franklinbaldo/cobogo/issues/266)
- [Data-reading patterns #267](https://github.com/franklinbaldo/cobogo/issues/267)
- [Consumer registry #268](https://github.com/franklinbaldo/cobogo/issues/268)

## Integration evidence

The first `cobogo-consumer-synergy` pass opened [CausaGanha #861](https://github.com/franklinbaldo/causaganha/issues/861) to select one real data-reading surface for incremental adoption once the shared foundations/core are ready. This is evidence of active evaluation, not evidence that Cobogó code is already consumed.

It should not inherit a universal Cobogó skin. Its judicial-data purpose, green/gold identity, static delivery model, existing typographic choices and dense public-data surfaces remain legitimate local context.

## Review question

A successful integration should make it easier to read and compare judicial data while leaving CausaGanha recognizably itself.

If adoption mainly changes colors, fonts, border radii or decorative motifs, it has failed the Cobogó model.

## Measured adoption state — 2026-08-11

`web/src/styles/cobogo-mapping.css` exists and is imported from `index.css`. It describes itself as "an adoption bridge, not a copy of Cobogó core" and binds shared role names to CausaGanha's own values. That framing is right, and the file is real. What it actually reaches is narrower than it looks:

| measure | value |
|---|---|
| `--cobogo-*` roles declared | 30 |
| `var(--cobogo-*)` used outside the mapping file | **0** |
| `data-cobogo-*` attributes in markup | **0** |
| roles load-bearing via local aliases | **4** — surface, text, text-muted, border |
| inert declarations | **26** |

The four live roles reach the product only by indirection: the mapping re-points `--color-surface`, `--color-content`, `--color-content-tertiary` and `--color-border` through Cobogó roles, and those aliases are used 23 times between them. `--color-bg` is re-pointed but used zero times.

So this is a **partial, largely nominal bridge**, not core adoption. It is not marked as core adoption in `capabilities_used`, and should not be. Recorded as evidence for issues #266 and #270, and deliberately **not corrected yet** — which contracts ought to bite should be decided from the real surfaces, not from a wish to raise the number.

## Real surfaces — captured 2026-08-11

The site does not build from a checkout: it requires `site-status.json` from `uv run python scripts/render_queries.py`, and the build aborts on the missing contract. Evidence was taken from the **deployed artifact** instead, per the evidence order in the design-review reference.

`/stats` is server-rendered and captured faithfully. Inventory of the data-reading vocabulary actually in use:

- **metrics/comparison** — headline figures (`67,2%`, `65/96`, `64/96`) with label plus a secondary qualifier, and Top-5 most/least reliable ordered lists;
- **provenance/freshness** — a real inscription carrying source and both timestamps: *"Fonte DJEN: Atrasado — última tentativa … · último sucesso …"*. Genuinely good, and better than most consumers do;
- **status** — coverage percentages tinted green/red;
- **table** — 1 table, 96 `tbody` rows, 7 `th`;
- **dates** — `<time>` count is **0** across all four routes.

Concrete gaps against contracts Cobogó already has:

- `th` elements carry **no `scope`**, and the table has **no `caption`**, on a 96-row table. The repo's own accessibility rules require both.
- Dates and timestamps are rendered as text with no `<time datetime>`, so freshness is human-readable but not machine-readable.
- Status appears to be carried by colour tint; whether non-colour redundancy exists needs a closer state-level pass.

`/explorador` is a client-side DuckDB-WASM query surface and could not be fully exercised here — its worker loads from a CDN the browser cannot reach in this environment. Its filter controls hydrated (2 inputs) but query results did not run. Treat its inventory as incomplete rather than empty.

