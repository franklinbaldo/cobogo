---
type: PracticeBaseline
id: baselines/cobogo-relation-collection-2026-09-07
title: "Cobogó atual — coleção de relações"
kind: cobogo_current
source_url: "https://github.com/franklinbaldo/cobogo/blob/main/src/components/RelationCollection.astro"
source_name: "Cobogó"
observed_surface: "RelationCollection.astro: navegação com quatro relações em cards independentes"
observed_at: "2026-09-07"
strengths:
  - "Cada relação é uma unidade clicável inequívoca e funciona bem em reflow responsivo."
  - "O estado atual é legível sem depender apenas de cor por aria-current e inversão de superfície."
  - "A grade mantém ordem DOM simples e previsível."
limitations:
  - "Gap entre caixas e borda completa em cada item reforçam quatro objetos autônomos mais do que uma única coleção relacionada."
  - "A repetição da moldura compete com o conteúdo e faz a coleção parecer mais card-based do que relacional."
findings:
  - "A0 é um controle forte de modularidade e navegação, mas oferece espaço real para testar continuidade sem perder individualidade."
  - "A melhoria buscada não é remover estrutura: é trocar isolamento por contato ou divisores compartilhados."
evidence:
  - "src/components/RelationCollection.astro"
  - "A lista usa gap 3 e cada link tem border 1px completo, background próprio e min-height 9rem."
status: current
---

# Cobogó atual — coleção de relações

Baseline A0 da exploração 009. A coleção atual resolve modularidade e foco, mas a repetição de caixas separadas é exatamente a tensão escolhida para a direção de campos contínuos.
