# COBOGÓ — Agent & Development Guide

Cobogó is a **Brazilian visual grammar + reusable design knowledge system**. It is not a component catalog, a universal skin or a framework mandate.

## Start here

When sources disagree, use this order:

1. `docs/rfcs/0003-simplify-design-system.md` — current architectural direction;
2. `knowledge/` — living grammar, recommendations and evidence;
3. `DESIGN.md` — short map of the current system;
4. `src/styles/core.css` and `src/styles/patterns.css` — current shared CSS contracts;
5. `src/index.ts` — deliberately curated component API;
6. real consumer evidence — useful evidence may require Cobogó to change.

The public Astro site is intentionally a **minimal blank slate**. It is a presentation/test surface, not design authority or a template for consumers.

## Working rule: production first

Cobogó must make products easier to ship, never become an approval gate.

When working in a consumer:

- use an existing Cobogó solution when it is already the easiest fit;
- if something new is needed to ship, implement it locally without waiting for upstream work;
- if the result proves reusable, promote the learning to Cobogó now or later;
- keep domain meaning and product workflow in the consumer;
- prefer consolidating repeated presentation knowledge over accumulating near-duplicate wrappers.

Upstream promotion is encouraged, never required for production. See `docs/consumer-workflow.md` when that flow is relevant.

## What belongs in Cobogó

Cobogó owns reusable presentation knowledge: hierarchy, rhythm, typographic relationships, visual state treatment, density, reading patterns, interaction presentation, accessibility and recurring visual relations.

Consumers own domain semantics. Cobogó should not infer what a CNPJ, lawsuit, public contract, athlete, status label or newspaper fact means.

Prefer native HTML plus `cobogo/core` and `cobogo/patterns` when they express the relation clearly. A public component should earn its existence through real behavior, accessibility mechanics or coordinated interaction — not merely by hiding a few lines of markup.

## Current implementation

- `cobogo/core` — framework-agnostic semantic foundations;
- `cobogo/patterns` — reusable visual relationships;
- package root — curated Svelte behavioral components;
- `cobogo/styles` — legacy compatibility layer for existing consumers, not the canonical identity for new work;
- Astro — current recommended web host based on present experience;
- Svelte — current implementation for behavioral package components.

Recommendations can change when experience changes. Cobogó does not owe equivalent bindings to every framework.

## Project skills

Project-local skills live under `.claude/skills/`:

- `cobogo-design-review`;
- `brazilian-web-design`;
- `cobogo-consumer-synergy`.

They are **optional accelerators**, not prerequisites. Use one when it materially helps the task; do not stop safe, straightforward work just to run a skill first.

If installed copies need refreshing, use the documented `npx skills add ...` workflow rather than hand-editing generated copies.

## Specialized routines stay specialized

Do not load every operational routine into every task.

- For consumer/upstream decisions: `docs/consumer-workflow.md`.
- For portfolio surface review/ranking: `docs/operations/opinionated-surface-routine.md`.
- For architecture history and decisions: `docs/rfcs/`.
- For reusable evidence and current recommendations: `knowledge/`.

A normal component, pattern, documentation or consumer task does not need to perform a portfolio round first.

## Visual work

Start from the product job and the relation that needs to become clear. Use Brazilian grammar as structure, not as a checklist of colors, motifs or famous references.

Concept images, screenshots and comparison passes are useful when they improve a material visual decision, but they are tools — not mandatory ceremony. Preserve what the real product does better and persist reusable learning only when there is something worth reusing.

## Verification

Use the checks that are relevant to the change. The normal repository baseline is:

```bash
npm test
npx astro check
npm run build
```

PR workflows also exercise the real blank-slate home, accessibility and reduced motion. Do not recreate removed Vitrine routes, fixtures or historical tests merely to satisfy obsolete expectations.

## Compatibility

Compatibility is useful, not sacred. Consumers unable to migrate immediately may pin an older Cobogó version. The current version may remove or replace weak abstractions when that makes the system smaller, clearer and easier to use.
