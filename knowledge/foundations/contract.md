---
type: foundation
status: proposed
title: Semantic foundations contract
related_issues:
  - https://github.com/franklinbaldo/cobogo/issues/263
  - https://github.com/franklinbaldo/cobogo/issues/265
  - https://github.com/franklinbaldo/cobogo/issues/269
---

# Semantic foundations contract

Cobogó foundations define **semantic roles and compositional invariants before concrete values**. Consumers may supply their own values when the role remains legible and accessible.

The contract must support materially different consumers without parallel design systems.

## Color roles

Core roles should be named for function, not aesthetic origin:

- `canvas` — page/document field;
- `surface` — grouped/elevated region when grouping is actually required;
- `surface-muted` — subordinate region or contextual background;
- `text` — primary readable content;
- `text-muted` — secondary information that remains intentionally readable;
- `border` — structural separation when spacing alone is insufficient;
- `focus` — keyboard/input focus affordance;
- `accent` — consumer/theme emphasis that is not a domain state;
- `info`, `success`, `warning`, `danger` — domain/UI state roles with non-color redundancy.

A consumer may bind `accent` to brand values. It must not redefine state semantics merely to preserve a palette.

## Typography roles

Typography follows [Texto é arquitetura](../canon/texto-e-arquitetura.md). Foundations define roles rather than one mandatory font family:

- `body` — sustained reading and ordinary interface text;
- `display` — major heading/editorial emphasis where scale/voice is useful;
- `inscription` — metadata, source, state, identifiers and short orientation text;
- `data` — values/identifiers where alignment or character distinction materially improves comparison.

`data` does not imply monospace everywhere. Use monospace only when it improves the actual comparison/identifier task.

## Spatial roles

Spacing is expressed as relations derived from [Vão](../grammar/vao.md) and [Ritmo](../grammar/ritmo.md):

- `adjacent` — items read as one phrase/group;
- `group` — separation between related subgroups;
- `section` — transition between major content regions;
- `pause` — deliberate larger interval for editorial or cognitive reset.

Consumers may map those roles to different concrete scales by density/context. A dense admin surface, a public analytical table, an editor/preview workspace and an editorial article must not be forced onto one pixel scale.

## Geometry

Geometry communicates role rather than brasilidade by itself.

- interactive targets may use shape to signal affordance;
- grouping containers may use radius when it clarifies grouping;
- sharp geometry is valid where it better expresses structure;
- nested curvature is not forbidden by canon;
- `Curva & Concreto` remains a heuristic/candidate language, not a universal API contract.

## Elevation and materiality

Shadows, texture, translucency and material metaphors are valid only when they explain layering, state, hierarchy or memory.

A global paper/concrete texture is not part of Cobogó identity merely because it is visually Brazilian-modernist-adjacent.

## Motion

Motion roles precede duration/easing values:

- state transition;
- spatial continuity;
- attention/orientation.

Motion must remain optional where the task does not require it and must respect reduced-motion preferences.

## States and accessibility

State must never depend on color alone. Focus, selected, warning, invalid, destructive, disabled, loading and stale/partial states need textual, structural, iconographic or behavioral redundancy appropriate to context.

Accessibility is part of the foundation contract, not a downstream audit phase.

## Consumer override model

Consumers may override:

- concrete colors;
- font families;
- spacing values/density profile;
- radius/elevation values;
- motion timings;
- brand accent and editorial voice.

Consumers must preserve:

- semantic role meaning;
- readable hierarchy;
- focus/state perceivability;
- non-color redundancy for critical state;
- the distinction between brand emphasis and domain/UI state;
- the distinction between local visual identity and shared grammar.

## Validation profiles

The current portfolio pressures this proposal through several independent contexts:

1. **Public analytical/data reading** — CausaGanha, Ficha, Baliza Site, Sites Prefeituras.
2. **Dense review/audit** — Astronauta, Sisprev.
3. **Editorial/publication** — O Vigia, Quem São Eles?, Franklin blog, The Theater, Rationality Club LatAm, Adi blog.
4. **Authoring/preview tools** — Intuit, Formato Legal.
5. **Paginated document/print** — Formato Legal, Sisprev.

A role should not be promoted to stable core merely because one consumer has a token for it. Reuse across distinct contexts is stronger evidence; platform/accessibility invariants can justify promotion independently.
