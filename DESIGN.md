# Cobogó — design map

Cobogó is a living Brazilian visual grammar and design system. Its job is to make different products recognizably related, visually strong and easier to build without forcing every consumer to rediscover the same design decisions.

This file is a map, not an exhaustive visual specification. The old fixed-site doctrine that lived here — Pico classless as mandatory foundation, a fixed documentation layout, MDX Content Collections, fixed palette rules and a universal ban on classes — is historical and is no longer the authority for current Cobogó.

## Sources of truth

Use these in this order when they disagree:

1. `docs/rfcs/0003-simplify-design-system.md` — the adopted direction for a smaller, opinionated, evolving Cobogó.
2. `knowledge/` — canon, grammar, recommendations and evidence learned from real consumers.
3. `src/styles/core.css` — framework-neutral semantic visual roles.
4. `src/styles/patterns.css` — reusable visual relationships and compositions.
5. `src/index.ts` — the deliberately curated public component API.
6. Current consumer evidence — real interfaces may reveal that Cobogó needs to learn, consolidate or change a recommendation.

The public Astro site is intentionally a blank slate. It is a presentation surface, not normative authority.

## What Cobogó owns

Cobogó owns presentation knowledge: hierarchy, rhythm, typography relationships, state presentation, identity, density, reading patterns, interaction behavior, accessibility and the visual grammar that makes projects feel related.

A consumer owns its domain. Cobogó should not need to understand what a CNPJ, lawsuit, newspaper article, public contract or athlete means in order to present the underlying visual relationship well.

## Brasilidade

Brasilidade is a grammar, not a single skin. It can compose with different product genres — for example a newspaper and an application may both be recognizably Cobogó without having the same layout.

The identity should come from recurring relationships, proportion, typography, geometry, rhythm, material references and deliberate expressive choices rather than from forcing one fixed palette or ornamental component everywhere.

## Patterns before wrappers

Prefer native HTML plus `cobogo/core` and `cobogo/patterns` when they express the relationship clearly. A component is most valuable when it carries real behavior, accessibility mechanics or coordinated interaction.

Do not create a component merely to hide a small amount of markup or to encode one consumer's data model. Conversely, do not remove a useful behavioral component just to reduce a component count.

## Production first

Consumer delivery is never blocked on upstream abstraction work. Build locally when needed. If a local solution proves broadly reusable, it can move into Cobogó later or immediately through a PR.

This feedback loop is how Cobogó learns, but it is an incentive rather than a gate.

## Technology is a recommendation, not an identity

Cobogó may recommend the stack that works best at a given time. Astro is the current host for the minimal public site and Svelte remains the current component implementation. The visual grammar itself is not defined by either framework, and Cobogó does not promise equivalent bindings for every framework.

Recommendations can change as experience changes.

## Compatibility and simplification

Compatibility is useful, not sacred. Consumers can pin a version when they cannot migrate immediately. A new Cobogó version may remove or replace an abstraction when doing so materially improves coherence and reduces duplication.

Prefer a small current surface with understandable migration paths over permanent wrappers around historical decisions.

## Accessibility

Accessibility is part of the visual and interaction contract, not a separate style layer. Shared solutions should preserve semantic HTML, keyboard operation, visible focus, state meaning beyond color, appropriate ARIA semantics and reduced-motion behavior.

The repository's automated tests protect concrete behavioral contracts. They should follow the supported implementation rather than fossilize old internal markup or CSS class names.

## How the system evolves

Look at real consumers. Notice repeated visual or behavioral relationships. Capture the useful knowledge. Consolidate overlapping abstractions. Deprecate what no longer helps. Change recommendations when evidence improves.

The desired direction is simple: Cobogó may accumulate knowledge while its implementation surface becomes smaller.
