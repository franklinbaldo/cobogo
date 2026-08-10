---
type: consumer
title: CausaGanha
status: active-reference
context: public data-reading interface over Brazilian judicial datasets
repository: https://github.com/franklinbaldo/causaganha
surface: web-public
---

# CausaGanha

CausaGanha is a primary brownfield consumer for Cobogó because it already has a functioning public web surface, its own design constitution, real data-reading workflows, and a substantial local token/style layer.

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

CausaGanha should use shared Cobogó grammar where it improves information relationships, especially [Vão](../grammar/vao.md), [Ritmo](../grammar/ritmo.md), [Faixa](../grammar/faixa.md), [Inscrição](../grammar/inscricao.md), [Texto é arquitetura](../canon/texto-e-arquitetura.md), and [Parentesco sem uniformidade](../canon/parentesco-sem-uniformidade.md).

It should not inherit a universal Cobogó skin. Its judicial-data purpose, green/gold identity, static delivery model, existing typographic choices and dense public-data surfaces remain legitimate local context.

## Review question

A successful integration should make it easier to read and compare judicial data while leaving CausaGanha recognizably itself.

If adoption mainly changes colors, fonts, border radii or decorative motifs, it has failed the Cobogó model.
