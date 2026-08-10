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
last_verified: 2026-08-10
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
