---
name: cobogo-builder
description: >-
  Build pages, components, layouts, states, and visual systems with Cobogó. Use whenever a
  project uses Cobogó and the user asks to create UI, add a page or section, design a new
  interaction, set up Cobogó, or turn a product requirement into an interface. Inspect the
  real project first, identify the user's job and the visual relation, then prefer semantic
  HTML, cobogo/core, cobogo/patterns, composition, and the smallest useful behavioral component.
---

# Build with Cobogó

Cobogó is a Brazilian visual grammar and a reusable design system. Build the **product's own interface** with shared presentation knowledge rather than applying one common skin.

## Start from the real project

Inspect the smallest useful set of project files before writing UI:

- `package.json` and the active lockfile;
- the installed Cobogó version or Git reference;
- framework and page/component structure;
- current imports from `cobogo/core`, `cobogo/patterns`, `cobogo/styles`, or `cobogo`;
- styles and components touching the requested surface;
- local product/design guidance and relevant tests.

Use what the project actually runs. Keep the inspection proportional to the task.

## Name the job before the component

State the primary relation the interface must make perceptible in one sentence.

Examples:

- status → consequence → action;
- event → evidence → context → provenance;
- entity → attributes → relations → actions;
- question → answer → source → next action;
- collection → comparison → selection.

Component names come after this relation is clear.

## Choose the smallest shared instrument

Read [`references/component-decision-tree.md`](references/component-decision-tree.md) whenever the implementation choice is not obvious.

Default progression:

```text
semantic HTML
→ cobogo/core
→ cobogo/patterns
→ composition of existing primitives/patterns
→ public behavioral component
→ local product-specific implementation
→ reusable Cobogó improvement
```

`cobogo/core` supplies semantic foundations. `cobogo/patterns` supplies recurring visual relations. Public components are most valuable when coordinated behavior or accessibility mechanics benefit from an abstraction.

## Preserve product identity

Keep these consumer-owned:

- domain meaning and business rules;
- product voice and editorial choices;
- brand-specific identity;
- information architecture that exists for the product's task;
- local behavior that has no reusable presentation contract.

Use Cobogó for hierarchy, rhythm, typography relations, spacing relations, states, density, action presentation, focus, contrast, and reusable visual structure.

Two products using Cobogó should be recognizably related in quality and grammar while remaining clearly different products.

## Build responsive and accessible states as part of the design

For each meaningful surface, account for the states the product actually needs:

- narrow and wide viewports;
- keyboard focus;
- hover/active when relevant;
- loading, empty, error, warning, success, selected, or disabled when present in the workflow;
- long content and overflow where real data can produce them.

Use semantic elements first. Let focus, contrast, ordering, labels, touch targets, and reduced-motion behavior participate in the composition rather than arrive as a later patch.

## Learn from the consumer

When the work exposes a reusable presentation gap, name it explicitly. A good local solution can become:

- a grammar/canon insight;
- a `pattern`;
- a `core` primitive;
- a behavioral component;
- a documented failure mode.

When the solution is genuinely specific to the product, keep it local and make it excellent there.

## Canonical evidence

For non-trivial design decisions, consult the current Cobogó corpus in `knowledge/` when available. Prefer the repository's `okf-parser` workflow for querying canonical concepts and consumer evidence.

When a task needs a new Brazilian visual/cultural thesis rather than an existing Cobogó relation, use `brazilian-web-design` when available and feed the reusable learning back into Cobogó.

## Finish with a working surface

Produce complete code for the requested change, including imports and nearby wiring needed for it to run. Verify with the project's normal checks and, for visual work, inspect the rendered result at representative narrow and wide sizes.

Explain the important choices briefly: the user job, the Cobogó instruments used, and any reusable gap discovered.
