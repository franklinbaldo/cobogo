---
type: pattern
status: experimental
title: Data-reading patterns
related_issue: https://github.com/franklinbaldo/cobogo/issues/267
consumer_evidence:
  - ../consumers/causaganha.md
  - ../consumers/astronauta.md
---

# Data-reading patterns

The first shared patterns are derived from CausaGanha and Astronauta, which share data/state/metadata needs while differing strongly in brand, density and interaction.

## Structured table

Use native table semantics. The reusable relation is scan/compare/orient, not a `Table` component. Horizontal overflow belongs to the wrapper; focus within a row must remain visible.

## Inscription

Short metadata such as source, identifier, timestamp or scope is orientation text. It may wrap and compress more than body text, but must remain readable and must not become badge soup.

## Provenance

Source/freshness/evidence forms a recoverable relationship around content. The shared pattern provides hierarchy and separation, while each consumer decides which provenance belongs in the primary reading flow.

## State

State meaning is shared; presentation is not. Text remains the primary carrier of meaning, with shape/border/color as redundant reinforcement. Brand accent is not a status.

## Metric/comparison

A metric pairs a value with a legible label/context. Data typography and tabular numerals are useful where they improve comparison, not as a decorative monospace rule.

## Evidence boundary

CausaGanha validates public, mostly-read-only analytical surfaces. Astronauta validates dense operational review. Because both map these relations without sharing appearance or density, the patterns are stronger than either consumer-specific implementation.

They remain `experimental` until one real downstream surface imports the public pattern layer and accessibility/maintenance consequences are observed.