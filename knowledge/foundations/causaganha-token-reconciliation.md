---
type: foundation-reconciliation
status: proposed
title: CausaGanha token-family reconciliation
consumer: ../consumers/causaganha.md
related_issue: https://github.com/franklinbaldo/cobogo/issues/263
---

# CausaGanha token-family reconciliation

This is a brownfield authority classification, not a migration plan and not a value-preservation promise.

The current CausaGanha `web/src/styles/tokens.css` contains several overlapping histories. Each family is classified by what authority it should have in the reconstructed system.

## 1. Semantic Pico overrides

Examples include primary/secondary/background/card/form/focus variables mapped to CausaGanha values.

**Classification:** adapter mapping + local theme values.

Pico variables are downstream implementation vocabulary. Their existence proves useful semantic needs, but Pico names are not Cobogó source-of-truth names.

## 2. Green/gold product layer

CausaGanha uses green as primary/success-adjacent brand emphasis and gold as accent/warning-adjacent color.

**Classification:** primarily CausaGanha-local theme.

Cobogó should provide separate `accent` and state roles so CausaGanha can preserve green/gold identity without collapsing brand emphasis into `success`/`warning` semantics.

## 3. Generic semantic aliases

Examples: content/background/surface/border/primary/secondary/info/success/warning/error.

**Classification:** strong evidence for Cobogó semantic roles, but names/values require reconciliation.

These roles recur across multiple candidate consumers and should inform the shared foundations contract.

## 4. Paper/concrete neutrals

The later token family contains paper and concrete scales explicitly presented as Brazilian Modernism.

**Classification:** default-theme candidate or historical/local styling; not Cobogó semantic identity.

Neutral values may be reusable, but the semantic contract should say `canvas`, `surface`, `text`, etc. A culturally suggestive palette name must not become the reason a role exists.

## 5. Saturated modernist colors

Blue/red/ochre/green/purple modernist families appear as visual palette families.

**Classification:** historical/default-theme candidate, not semantic core.

Individual values may later serve a theme, visualization palette or state role if accessibility/function evidence supports them. The palette as a whole is not canon.

## 6. Typography families

Inter, DM Serif Display, JetBrains Mono, Archivo and Piazzolla coexist across current/history layers.

**Classification:** roles are shared; font families are local/default-theme candidates.

Cobogó should stabilize `body`, `display`, `inscription`, `data` roles before selecting any default family. CausaGanha may retain its local typography while adopting the role contract.

## 7. Typography scales

Multiple size naming systems coexist (`xs...4xl`, `micro...h1`).

**Classification:** duplicated implementation history.

Do not upstream both scales. First map actual surface needs to typographic roles and density/reading contexts; only then decide whether Cobogó needs a default scale.

## 8. Spacing scales

CausaGanha contains overlapping semantic-ish and numeric spacing families.

**Classification:** duplicated implementation history with useful evidence.

The shared contract should stabilize relational roles (`adjacent`, `group`, `section`, `pause`) before a numeric scale. Numeric values can remain local while migration is incremental.

## 9. Radii

Small/box/button/field/full/selector radii exist, with pill-like controls in some roles.

**Classification:** mixed local implementation and candidate interaction semantics.

Cobogó should not preserve exact radii or `Curva & Concreto` as law. It should determine which shapes communicate interaction/grouping and leave values themeable.

## 10. Shadows

Small/medium/large shadows and card shadow mappings exist.

**Classification:** implementation defaults requiring functional justification.

Only retain shared elevation roles when they signal real layering/state. Decorative elevation should remain local or be removed.

## 11. Motion timings

Base and slow transitions exist.

**Classification:** implementation values, not semantic foundation yet.

First define motion purpose (state/spatial continuity/attention), then map timings. Reduced-motion remains mandatory behavior.

## 12. Dark-theme values

The dark theme overrides both Pico and local semantic values.

**Classification:** valid consumer/theme requirement and evidence for mode-aware semantic roles.

Cobogó should support role remapping across light/dark contexts without requiring one inversion algorithm or one palette.

## 13. Legacy aliases

Older `papel`, `fg`, `s`, `t`-style aliases remain for existing views.

**Classification:** compatibility debt.

Do not upstream legacy names. Keep only while active CausaGanha surfaces depend on them; migration should make that debt observable and removable.

## Result

The useful extraction is **not** a palette. It is a semantic role model plus evidence that a real consumer needs brand override, adapter mapping, density-specific spacing/type, dark mode and temporary compatibility aliases.

This reconciliation supports an additive first migration: map CausaGanha roles to Cobogó roles without changing appearance, then replace duplication one surface at a time.
