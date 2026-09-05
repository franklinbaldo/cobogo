# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Reframed Cobogó as a living Brazilian visual grammar and reusable design-knowledge system, with RFC 0003 and `knowledge/` guiding current evolution.
- Clarified `cobogo/core` as the framework-agnostic semantic foundation and `cobogo/patterns` as the preferred home for reusable visual relationships that do not require component behavior.
- Adopted a production-first consumer workflow: local delivery is never blocked on upstream abstraction work; reusable learning may be promoted later.
- Consolidated overlapping abstractions: `Disclosure` absorbs the former `Accordion` case; grid, metric and identity relationships moved from dedicated wrappers to CSS patterns.
- Simplified the public getting-started path around Astro, the curated root API, `cobogo/core` and `cobogo/patterns`.
- Removed the JavaScript color-palette export so consumer identity is no longer presented as a universal package-level palette.
- Replaced the `DataTable` renderer with semantic consumer-owned table markup plus the `data-table` pattern, removing domain-string interpretation from the design system.
- Reset the public Astro site to a minimal blank slate while preserving the package, visual grammar and canonical knowledge corpus.
- Restored Vitest as a normal CI check and reconciled historical tests with current semantic/ARIA/data-attribute contracts.

### Removed
- Removed obsolete site routes, documentation scaffolding, blog/layout infrastructure and CSS that only served the old Vitrine.
- Removed the legacy Playwright Vitrine suite, snapshots and Gherkin specs tied to routes that no longer exist.
- Removed historical operational archives (`.jules/` and `_brasil/`) whose current role is superseded by `knowledge/` and Git history.
- Removed obsolete Brad Frost/Vitrine/session-log delivery doctrine and the conflicting `VIBE.md` visual-authority document.

## [0.1.0] - 2026-04-29

### Added
- Initial release of the COBOGÓ design system (formerly `brazilian-modernism`).
- Core components: Button, Card, Badge, ProfileCard, DataTable, SearchBar.
- Cobogó pattern components: CobogoCircular, CobogoHexagonal, CobogoLosango, CobogoCruz.
- CSS token reference at `src/styles/tokens.md`.
- Pages: home, manifesto, components catalog, patterns gallery.
- Astro + Svelte 5 stack, deployed to GitHub Pages.
