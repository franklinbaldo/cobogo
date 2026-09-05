# Cobogó refactor review lens

Use this when a refactor needs more than a quick local fix.

## 1. Product job and hierarchy

Ask what the person needs to understand, compare, decide, or do.

Look for:

- unclear primary action;
- competing headings or equal visual weight everywhere;
- metadata louder than content;
- important consequences hidden below decoration;
- information ordered by implementation rather than user task.

Prefer a hierarchy that makes the product relation obvious before adding ornament.

## 2. Accessibility as composition

Check:

- semantic element choice;
- heading order;
- form labels and described states;
- keyboard reachability and focus visibility;
- interaction target size;
- contrast in normal and interactive states;
- reduced-motion behavior where motion exists;
- table/list semantics where structure is genuinely tabular/list-like.

Accessibility improvements should strengthen the visual structure as well as mechanics.

## 3. Responsiveness and real content

Check representative narrow and wide widths with realistic content length.

Look for:

- fixed dimensions that create overflow;
- action rows that collapse badly;
- metadata that becomes unreadable when wrapped;
- grids that preserve too many columns;
- headings with poor measure;
- tables that need a deliberate small-screen strategy;
- hidden content that should instead be reprioritized.

## 4. Cobogó usage

Identify whether the surface can use:

- `cobogo/core` for shared foundations;
- `cobogo/patterns` for recurring presentation relations;
- composition of existing patterns/primitives;
- a public component for coordinated behavior.

Treat historical `cobogo/styles` usage as a migration opportunity when current contracts make the surface simpler.

## 5. Structural simplicity

Look for accidental complexity:

- wrappers that exist only for styling;
- nested boxes with equivalent roles;
- duplicated utility classes/declarations;
- one-off component wrappers that only rename another primitive;
- component variants that could be composition or state;
- duplicated local implementation of a shared relation.

Prefer fewer public concepts and clearer markup.

## 6. Product identity

Preserve what belongs to the consumer:

- voice and editorial tone;
- brand-specific expression;
- product-specific information architecture;
- domain terminology and meaning;
- intentional density shaped by the actual workflow.

A refactor should improve Cobogó parentage without making the surface generic.

## 7. Reuse direction

For every local solution worth keeping, classify it:

- **local** — product-specific and healthy;
- **adopt** — an existing Cobogó capability can replace it;
- **promote** — reusable presentation knowledge should move into Cobogó;
- **consolidate** — multiple shared abstractions can become one simpler contract;
- **remove** — the abstraction adds no useful structure or behavior.

Prioritize changes with visible user value and meaningful simplification.
