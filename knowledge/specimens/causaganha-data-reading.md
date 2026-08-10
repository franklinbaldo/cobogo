---
type: specimen
title: CausaGanha — leitura pública de dados judiciais
consumer: CausaGanha
status: proposed
purpose: test Cobogó grammar against a functioning brownfield public site
---

# CausaGanha — leitura pública de dados judiciais

This specimen is not a page mockup. It is a composition contract for reviewing the existing CausaGanha web interface against Cobogó without erasing the product's own design constitution.

## User task

A person should be able to scan judicial coverage/status, compare courts or datasets, understand what is available, and move into detail without unnecessary interaction or decorative hierarchy.

## Product constraints to preserve

From CausaGanha's existing frontend architecture:

- HTML-first output remains the default;
- reading surfaces should not be appified;
- structure should be exposed rather than hidden;
- hydration has a performance cost and must be justified;
- the deployed product remains a static GitHub Pages site unless a separate product decision changes that;
- the current local brand is not replaced merely to demonstrate Cobogó adoption.

## Grammar application

### Vão

Use whitespace to separate different semantic scales: global navigation, page framing, dataset/tribunal grouping, local rows and metadata.

A table row should not receive the same interval as a transition between major sections. More whitespace is not automatically more Cobogó; the void must make structure legible.

### Ritmo

Repeated tribunal/dataset/status structures should maintain predictable reading order and spacing so users can compare rather than re-parse every block.

Variation is allowed where the information relationship changes. Decorative alternation that interrupts comparison is a failure.

### Faixa

Use bands/strips only where a horizontal region has a distinct informational role — e.g. service status, contextual filter scope, provenance/update state, or section transition.

Do not create a band merely as a colored header motif.

### Inscrição

Metadata that helps interpretation — court acronym, competence, period, source, update timestamp, publication status — should behave as inscriptions: compact, stable, adjacent to the thing they qualify, and readable without hover.

### Texto é arquitetura

Headings, labels, numeric emphasis, notes and prose should create structural hierarchy before boxes do. A layout that needs a card around every relationship has underused typography.

## Foundation implications

CausaGanha is useful precisely because it already has two overlapping token histories in `web/src/styles/tokens.css`: a current green/gold/Pico semantic layer and a later Brazilian-modernist paper/concrete layer with legacy aliases.

Foundations work must determine which values are:

- product identity worth keeping locally;
- generic semantic roles that belong in Cobogó core;
- old Cobogó knowledge that should move upstream;
- duplicated or superseded history;
- implementation mappings to Pico rather than design-system identity.

No token should move between repositories solely because its name or hex value matches.

## Accessibility

- information state cannot depend on green/gold/red alone;
- focus remains clearly perceivable;
- table/header relationships stay semantic;
- metadata remains readable at compact sizes;
- responsive collapse must preserve comparison order and labels;
- motion is not required to understand data state.

## Surface-swap test

If the green/gold palette, serif display face and rounded controls were replaced while the information relationships remained unchanged, would the interface still express the Cobogó rules above?

If no, the integration is relying on surface identity instead of grammar.

## Success test

CausaGanha should look like a more coherent CausaGanha, not like Astronauta with different data and not like the Cobogó vitrine embedded in a judicial product.

The relationship to other Franklin products should be detectable in how hierarchy, rhythm, metadata, void and accessibility are handled — not through cloned layouts.
