---
title: MetricCard vira composição do pattern metric
date: 2026-09-04
type: changed
---

Remove o componente `MetricCard.svelte`. Métricas passam a ser compostas com HTML semântico usando `data-cobogo-pattern="metric"`; a recipe de transparência também usa o pattern público de grid para organizar as métricas responsivamente.
