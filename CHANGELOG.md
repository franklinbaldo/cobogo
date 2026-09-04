# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Clarified `cobogo/core` as the stable framework-agnostic semantic contract and `cobogo/styles` as the legacy/site identity layer.
- Recorded O Vigia as a third independent Core Web adoption and promoted narrow-viewport primary-navigation perceptibility to `stable` with a second independent consumer.
- Added a CI ratchet for public core exports, focus/reduced-motion ownership, and documentation boundary.

## [0.1.0] - 2026-04-29

### Added
- Initial release of the COBOGÓ design system (formerly `brazilian-modernism`).
- Core components: Button, Card, Badge, ProfileCard, DataTable, SearchBar.
- Cobogó pattern components: CobogoCircular, CobogoHexagonal, CobogoLosango, CobogoCruz.
- CSS token reference at `src/styles/tokens.md`.
- Pages: home, manifesto, components catalog, patterns gallery.
- Astro + Svelte 5 stack, deployed to GitHub Pages.
