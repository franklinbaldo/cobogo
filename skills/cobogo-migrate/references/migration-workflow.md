# Cobogó migration workflow

Use this reference for version upgrades and replacement of legacy contracts.

## 1. Inventory the starting contract

Record the exact version/Git ref and locate every affected import, style entrypoint, component, pattern, and local compatibility shim.

Group usage by surface rather than editing the whole repository as one undifferentiated search/replace.

## 2. Read the current contract

Use the current Cobogó repository/release guidance, especially:

- `README.md` for public entrypoints;
- `docs/rfcs/0003-simplify-design-system.md` for architectural direction;
- `docs/operations/deprecation-and-breaking-changes.md` for migration policy;
- `src/styles/core.css` and `src/styles/patterns.css` for current CSS contracts;
- `src/index.ts` for the curated behavioral API.

Consult canonical `knowledge/` when a choice depends on grammar or consumer evidence.

## 3. Classify each old usage

For each legacy abstraction, identify its actual job:

- foundation;
- recurring presentation relation;
- coordinated interaction behavior;
- domain-specific product behavior;
- compatibility-only artifact.

This classification prevents recreating an old wrapper simply because its name existed.

## 4. Choose the current destination

Prefer, in order:

1. semantic HTML;
2. `cobogo/core`;
3. `cobogo/patterns`;
4. composition of current shared pieces;
5. current public behavioral component;
6. consumer-local implementation when the behavior/meaning belongs to the product;
7. upstream Cobogó change when the migration exposes a reusable gap.

## 5. Apply one coherent slice

A coherent slice can be one page, one legacy entrypoint, one component family, or one repeated pattern.

Remove obsolete declarations as their replacements land so the migrated code has one active source of truth.

## 6. Verify behavior and presentation

Run the repository checks and inspect the rendered surface.

Compare:

- user task;
- hierarchy and readability;
- keyboard/focus semantics;
- responsive behavior;
- realistic long/empty/error states when relevant;
- product identity.

Pixel identity with the legacy implementation is not the goal; equivalent or better product behavior under the current Cobogó grammar is.

## 7. Feed migration friction upstream

When migration repeatedly requires a workaround, classify the friction:

- missing documentation;
- missing pattern/primitive;
- unclear replacement path;
- consumer-specific exception;
- obsolete Cobogó abstraction that should be removed more completely.

Turn reusable friction into a Cobogó issue/PR so the next consumer has a shorter path.
