---
name: cobogo-refactor
description: >-
  Review, simplify, or convert an existing interface to current Cobogó patterns. Use when a
  user asks to clean up UI, improve visual quality, reduce component/CSS complexity, convert
  local or third-party styling to Cobogó, review whether a surface uses Cobogó well, or make a
  page more accessible, responsive, coherent, or maintainable. Inspect the rendered/product
  context and current code, then improve the smallest useful surface while preserving product
  identity.
---

# Refactor with Cobogó

Refactoring with Cobogó means making the real product clearer, simpler, more accessible, more expressive, and easier to maintain. It does not mean making every consumer look the same.

## Inspect before rewriting

Read the files that define the target surface and establish:

- what the user is trying to accomplish;
- the current Cobogó version/reference and imports;
- framework and rendering path;
- local CSS/components involved;
- existing shared patterns/primitives that overlap the implementation;
- representative narrow/wide behavior and important states.

When the target is deployed and the task is visual, compare with the rendered surface as well as source code.

## Review the surface across the full lens

Read [`references/review-lens.md`](references/review-lens.md) for the detailed review model.

The short form is:

1. **Job and hierarchy** — can a person immediately understand what matters and what to do?
2. **Accessibility** — do semantics, labels, focus, contrast, keyboard behavior, touch targets, and motion work as part of the design?
3. **Responsiveness and density** — does the surface remain legible and usable across representative widths and realistic content?
4. **Cobogó contract** — is the project using current `core`, `patterns`, and behavioral components where they fit?
5. **Structure** — can boxes, wrappers, nesting, duplicated declarations, or convenience abstractions be removed?
6. **Identity** — does the consumer still feel like itself rather than a generic design-system demo?
7. **Reuse and maintenance** — is there local presentation knowledge that belongs in Cobogó, or shared Cobogó surface that can replace local duplication?

## Prefer simplification that users can feel

Good refactors commonly:

- remove a container because spacing/alignment can carry the relation;
- replace custom CSS with an existing semantic role or pattern;
- replace a product-local visual primitive with a Cobogó primitive while preserving local content/identity;
- consolidate repeated variants into composition or one existing abstraction;
- restore heading, list, table, form, or action semantics;
- improve hierarchy, measure, rhythm, whitespace, density, and action emphasis;
- reduce fragile responsive overrides;
- delete an unnecessary wrapper/component rather than rename it.

A smaller diff is useful when it fixes the real problem. A broader rewrite is useful when the local structure itself is the problem and the new structure is clearly simpler.

## Separate shared presentation from product meaning

Keep domain rules, product-specific workflows, brand, copy, and information meaning in the consumer. Move reusable presentation knowledge toward Cobogó when it can serve comparable relations elsewhere.

A successful refactor can therefore end in three places:

- consumer-only improvement;
- consumer adoption of an existing Cobogó capability;
- coordinated consumer + Cobogó change when a reusable gap becomes visible.

## Use the current design-system direction

Prefer semantic HTML + `cobogo/core` + `cobogo/patterns` for visual relations. Use public components when coordinated interaction or accessibility mechanics make the abstraction valuable.

Treat `cobogo/styles` as compatibility surface for existing consumers, with migration toward current primitives/patterns when the refactor benefits from it.

For a non-obvious choice between instruments, use the builder skill's decision-tree logic when that skill is available; otherwise follow the same progression directly: semantic HTML → core → patterns → composition → behavioral component → product-local code → reusable Cobogó improvement.

## Output according to intent

For a review request, report the concrete findings in priority order and tie each finding to the visible/user consequence.

For a refactor request, implement the change and summarize what became simpler or better.

For review + refactor, identify the important gaps first, then implement them rather than stopping at critique.

Finish with the repository's relevant checks and visual verification at representative sizes when the change affects rendering.
