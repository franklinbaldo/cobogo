---
type: PracticeBaseline
id: baselines/cobogo-identity-pair-2026-09-07
title: "Cobogó atual — dupla de identidades"
kind: cobogo_current
source_name: "Cobogó"
observed_surface: "src/pages/index.astro — seção Mesma estrutura"
observed_at: "2026-09-07"
strengths:
  - "As duas identidades são imediatamente distinguíveis por tipografia, cor de fundo, símbolo e linguagem."
  - "A grade 1+1 preserva equivalência entre os dois exemplos no desktop e relineariza em uma coluna no mobile."
  - "Cada exemplo é um article semanticamente autônomo e mantém ordem interna simples."
limitations:
  - "Cada article recebe borda completa, mesmo quando a diferença interna já é forte."
  - "A segunda identidade depende também de um preenchimento azul de grande área, fazendo cor carregar parte importante da separação."
  - "Borda + fundo + mudança tipográfica variam simultaneamente, dificultando saber quanto da distinção vem de textura funcional."
findings:
  - "A0 é deliberadamente forte: qualquer tradução precisa manter duas identidades inequívocas sem perder equivalência."
  - "A tensão útil é retirar moldura ou preenchimento, não retirar personalidade."
evidence:
  - "Código vigente observado em src/pages/index.astro no main 16ca144adfb570cc58ba94454243112037808b48."
  - "A seção usa dois articles com border 1px; o segundo também usa background info e tipografia serif/italic."
status: current
---

# Cobogó atual — dupla de identidades

Baseline A0 da exploração 010. A superfície real já resolve diferenciação muito bem, mas usa vários sinais ao mesmo tempo. A rodada testa se densidade, ritmo e tipografia conseguem carregar mais dessa distinção sem transformar a seção em duas caixas decorativas.
