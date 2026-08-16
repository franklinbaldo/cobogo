---
type: consumer
title: Aleph the Game
repository: https://github.com/franklinbaldo/aleph-the-game
adoption_status: candidate
surface: interactive AI-assisted game
interaction_profile: immersive interaction, narrative state, motion and game controls
runtime: React 19 + Vite client application
constraints:
  - preserve game-specific identity and atmosphere
  - motion is part of interaction but must remain purposeful and accessible
  - game state and controls must not inherit dashboard semantics by default
capabilities_used: []
operational_capabilities:
  - Vite production build
  - GitHub Actions build gate on pull requests and main
unmet_needs:
  - interactive state and motion grammar
  - immersive/narrative surface composition
  - broader control/focus semantics outside administrative UI
last_verified: 2026-08-16
---

# Aleph the Game

Aleph the Game is a candidate consumer because it is a real React/Vite application with a game/narrative interaction model, broadening Cobogó beyond reading, administration and analytical interfaces.

It is useful as a pressure test for motion, interaction state and expressive identity. Cobogó should provide semantic foundations that remain useful without turning a game into a web dashboard or publication.

## 2026-08-16 control/focus pressure test

A source review found a concrete collision between two valid game interactions: `App.tsx` exposes global numeric shortcuts for narrative choices while `ActionInput` keeps a free-form text field focused. Before the correction, typing a digit into the action field could bubble to the global shortcut and activate a choice unintentionally.

[`aleph-the-game#1`](https://github.com/franklinbaldo/aleph-the-game/issues/1) recorded the evidence and acceptance boundary. [`aleph-the-game#2`](https://github.com/franklinbaldo/aleph-the-game/pull/2) fixed the collision locally by making the owned editing control stop keyboard-event propagation, while leaving choice shortcuts available elsewhere. The same change gave the icon-only voice/submit controls explicit accessible names and exposed the listening state with `aria-pressed` rather than relying only on color/motion.

The repo had no versioned CI before this pass. #2 added the smallest existing-capability gate — Node 22, dependency install, `npm run build` — and the PR build completed successfully before merge. This is operational evidence, not Cobogó adoption.

### Reusable learning

The useful relation is narrower than a generic “game controls” component: **ambient/global shortcuts must yield to the focused control that owns text entry or another local editing interaction**. The presentation, keyboard map, narrative semantics and atmosphere remain consumer-local.

This is one-consumer evidence. Keep it as a pressure-test result until another materially different interactive surface demonstrates the same shortcut-ownership conflict or a stronger shared relation. Do not promote a Cobogó component or capability from this case alone.
