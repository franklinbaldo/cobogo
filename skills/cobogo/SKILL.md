---
name: cobogo
description: Use Cobogó to style or restyle an Astro/static project so it belongs to the shared visual family. Prefer the Cobogó Panda preset and its existing recipes before adding project-local visual primitives.
---

# Cobogó

Cobogó is a shared Panda CSS design system for Franklin Baldo projects.

## Goal

Make the project visibly belong to the same family by using the shared preset for typography, color, spacing, surfaces, states and common UI recipes.

## Start here

1. Inspect the project's framework and current Panda setup.
2. For Astro/SSG, keep the page static unless behavior actually needs client JavaScript.
3. Install/use `cobogo/preset` in `panda.config.ts`.
4. Use generated Panda utilities and Cobogó recipes.
5. Prefer an existing Cobogó token or recipe before creating a project-local visual equivalent.
6. Keep product-specific content, information architecture and behavior in the consumer.

## Current recipes

- `button`
- `card`
- `badge`
- `input`
- `alert`
- `article`
- `table`
- `navLink`

## When a local style is appropriate

A consumer may add local styling when the decision is genuinely specific to that product. If the same visual decision would be useful across projects, improve the Cobogó preset instead.

## Validation

For visual changes, build the static site, inspect desktop and mobile output, and verify that focus, contrast and responsive behavior remain clear.
