---
type: consumer
title: Franklin blog
repository: https://github.com/franklinbaldo/franklinbaldo.github.io
adoption_status: candidate
surface: personal blog and digital garden
interaction_profile: long-form reading, archive navigation and personal publishing
runtime: Astro 7 + MDX + Pico CSS on GitHub Pages
constraints:
  - preserve strong personal editorial identity
  - content and reading remain primary
  - bilingual routes and media optimization remain product concerns
capabilities_used: []
operational_capabilities:
  - GitHub Pages deploy from main, with manual and scheduled rebuild paths
  - repository CI covering hygiene, formatting, lint, unit tests, links, translations, Astro type checks, build and Lighthouse
  - public archive, projects index, reading paths, Hrönir ranking, music/books, changelog and RSS exposed from the same Astro publication
unmet_needs:
  - editorial typography and rhythm roles
  - archive/navigation composition
  - expressive local theming over shared foundations
last_verified: 2026-08-18
---

# Franklin blog

The Franklin blog is a strong Cobogó consumer candidate because it is a live personal publishing surface with an explicit typographic and editorial identity.

It should pressure-test whether Cobogó editorial foundations can support sustained reading and archives without flattening a personal site into O Vigia or another publication.

## Verified project-surface follow-up — 2026-08-18

A repository-entry gap tracked in Franklin blog #1543 has been closed by PR #1561 (`2d7e8e8fa09cb476f1384ea4f6290dda247ae8c6`). The README now exposes the live site and the public product surface — archive, reading paths, projects, Hrönir ranking, music, books, changelog and RSS — instead of presenting the repository mainly as stack/commands/layout.

The same change reconciles the public repository description with the runtime actually shipped in `package.json`: Astro 7 (`astro ^7.0.3`) and Node `>=24.0.0`, replacing stale Astro 6 / Node 22 claims. This is PROJECT-SURFACE evidence that explaining a product and accurately describing the machinery behind it are separate factual obligations.

The PR head passed the repository's full `Check` workflow: hygiene, changelog/version checks, dependency check, Prettier, lint, unit tests, Hrönir doctor, link/translation checks, Astro type check, production build and Lighthouse. The repository's merge-policy prose is currently inconsistent with GitHub settings: `CLAUDE.md` requires merge commits while GitHub disables merge/rebase and permits only squash. Franklin blog #1562 tracks that governance drift. The attempted merge-commit path returned HTTP 405; #1561 therefore used the only repository-enabled merge method. This is operational evidence, not a Cobogó design capability.

No new shared pattern is inferred from this README correction. The relevant reusable relation remains the existing editorial/project-surface principle: a public project entry point should expose the real publication and its recoverable products without becoming a technical README dump.

## Verified project-surface follow-up — 2026-08-15

The public music catalogue is a materially interactive surface inside the broader editorial site: it exposes playlists, Favorites, Recently played and the full song catalogue, while local JavaScript turns Favorite/Recent cover images into keyboard-operable playback controls.

A concrete accessibility gap was already tracked in Franklin blog #1541: those runtime `role="button"` / `tabindex="0"` images had hover/play behaviour but no explicit `:focus-visible` treatment, even though the main song-cover links already had designed focus feedback.

Implemented and merged in Franklin blog PR #1547 at `c8090a1cf4a555c8757ca2da5372cc40b394a87b`:

- Favorite and Recently played thumbnails now receive a 2px `var(--pico-primary)` outline with 2px offset on `:focus-visible`;
- the fix uses `outline`, so it does not change box geometry or introduce layout shift;
- playback, Enter/Space behaviour, hover and the local paper/music identity remain unchanged;
- the same rule applies to `/music/` and `/pt/musicas/` through the shared global stylesheet.

**Evidence classes kept separate:** the PR head passed repository hygiene, Prettier, lint, unit tests, Hrönir doctor, links/translations, Astro type check, full build and Lighthouse. The merge triggered `Deploy to GitHub Pages` run 899; build, Pages artifact upload and deploy all completed successfully. The public `/music/` route is reachable. No browser screenshot with a seeded Favorites/Recently-played localStorage state was produced in this pass, so the keyboard-focus pixels are supported by source + CI + deploy evidence, not claimed as independently captured visual evidence.

This is evidence for the existing Cobogó invariant that focus must be explicit and visually integrated with the consumer. It is **not** evidence for a shared music component, a new core dependency or editorial visual convergence; the implementation remains local to the blog.
