# Cobogó presentation decision tree

Use this reference when the right implementation instrument is unclear.

## 1. Start with the relation

Name what the user needs to perceive or do. Prefer relation language such as `status → consequence → action` over implementation names such as `card` or `modal`.

## 2. Can semantic HTML carry it?

Use native structure and behavior whenever it expresses the relation cleanly:

- headings and sections for hierarchy;
- lists for collections;
- tables for genuinely tabular comparison;
- buttons and links for actions/navigation;
- `details`/`summary` for simple disclosure;
- form controls and labels for input.

Then use Cobogó to shape presentation.

## 3. Does `cobogo/core` already supply the foundation?

Choose `core` for shared semantic foundations such as typography, spacing relationships, focus, color roles, state foundations, and baseline structure.

## 4. Does `cobogo/patterns` express the recurring visual relation?

Choose a pattern when the need is primarily presentation: grouping, hierarchy, metadata, actions, reading rhythm, status, density, provenance, or another recurring relation.

Patterns are preferred to wrapper components when CSS + semantic HTML is enough.

## 5. Can existing pieces compose cleanly?

Compose existing patterns/primitives when the result remains understandable without inventing a new public concept. Prefer a few explicit pieces to a convenience wrapper whose only benefit is reducing lines of markup.

## 6. Does coordinated behavior justify a component?

Use a public behavioral component when it earns its abstraction through interaction or accessibility mechanics, for example:

- coordinated keyboard behavior;
- focus management;
- complex selection;
- reusable state synchronization;
- interaction semantics that are easy to implement inconsistently.

Choose the existing public component that owns that behavior.

## 7. Is the need product-specific?

Keep domain concepts, product workflows, brand expression, editorial structure, and one-off behavior in the consumer. Local code is a valid destination when the abstraction belongs to the product.

## 8. Is there a reusable gap?

Promote a change to Cobogó when a presentation relation can serve similar situations without carrying the originating product's business meaning or identity.

Before adding a new public abstraction, compare it with what already exists and ask:

- Can an existing pattern absorb the variation?
- Can composition express it more clearly?
- Can a property/slot/state extend an existing behavioral component?
- Would the new abstraction reduce future choice, or add another near-duplicate?

The best addition usually makes the system easier to choose from.
