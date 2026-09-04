---
title: Paleta fixa sai da API JavaScript
date: 2026-09-04
type: changed
---

Remove o objeto `tokens.colors` do root export. Cores compartilhadas passam a existir apenas como papéis semânticos em `cobogo/core` (`--cobogo-canvas`, `--cobogo-surface`, `--cobogo-text`, `--cobogo-accent` etc.), que podem ser retematizados pelos consumidores sem transformar uma paleta concreta em identidade obrigatória do Cobogó.
