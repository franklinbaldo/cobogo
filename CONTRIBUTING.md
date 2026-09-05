# Contributing to Cobogó

Cobogó is a Brazilian visual grammar and design system. Contributions should make it easier for real products and agents to produce coherent interfaces without turning the repository into a larger catalog of near-duplicate components.

## Local development

```bash
npm ci
npm run dev
```

The public reference site runs with Astro. The reusable package is primarily Svelte components plus framework-neutral CSS contracts.

Before merging a package change, the useful baseline is:

```bash
npm test
npx astro check
npm run build
```

## Where things belong

- `src/styles/core.css` — framework-neutral semantic roles and shared visual foundations.
- `src/styles/patterns.css` — reusable visual relationships and compositions.
- `src/components/` — components that earn their existence through useful behavior or coordinated interaction.
- `src/index.ts` — deliberately curated public component API.
- `knowledge/` — accumulated visual knowledge, canon, grammar, consumer evidence and recommendations.
- `src/pages/` — the public Cobogó product: a live demonstration of the grammar, examples and paths into the system.

## Working principles

**Production comes first.** A consumer may implement a local solution immediately when that is the fastest way to ship. If the solution later proves reusable, promoting it to Cobogó is encouraged, not required before delivery.

Prefer semantic HTML, accessible native behavior, `cobogo/core`, existing patterns and the curated public API before creating another abstraction. This is guidance for keeping Cobogó small; it is not an approval gate.

When a new shared abstraction is useful, make it solve a visual or behavioral relationship rather than encode one consumer's domain model. Domain knowledge stays with the consumer.

Compatibility is managed through versions. Do not preserve a weak abstraction forever solely because it existed before; when a cleaner replacement is worthwhile, document the migration and let consumers upgrade when appropriate.

## Pull requests

Keep a PR coherent and easy to review. Run the checks relevant to what changed. Visual changes should remain keyboard-accessible, understandable without color alone, and respectful of reduced-motion preferences.

There is no requirement to add process, ceremony, a new component, or a new shared rule before a consumer can ship.

## Commit convention

Use short, imperative commit messages. Common branch prefixes are `feat/`, `fix/`, `chore/` and `docs/`.

Issues and pull requests live in [franklinbaldo/cobogo](https://github.com/franklinbaldo/cobogo).
