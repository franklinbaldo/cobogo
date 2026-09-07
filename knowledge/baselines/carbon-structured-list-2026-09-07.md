---
type: PracticeBaseline
id: baselines/carbon-structured-list-2026-09-07
title: "Carbon — Structured list"
kind: design_system
source_url: "https://carbondesignsystem.com/components/structured-list/style/"
source_name: "Carbon Design System"
observed_surface: "Structured list: fundo transparente, linhas contínuas e divisores sutis"
observed_at: "2026-09-07"
strengths:
  - "Mantém uma superfície compartilhada e usa border-subtle entre linhas em vez de moldura completa por item."
  - "O fundo é transparente por padrão, permitindo que a lista pertença à camada onde está inserida."
  - "A estrutura favorece comparação e varredura de itens relacionados."
limitations:
  - "Structured list é mais tabular do que a navegação editorial do Cobogó."
  - "Sua baixa expressividade visual não responde sozinha à necessidade de estado ativo forte."
findings:
  - "Continuidade pode ser produzida por camada compartilhada + divisores, sem apagar identidade de cada linha."
  - "O estado ativo do Cobogó precisará permanecer mais explícito que no padrão observado."
evidence:
  - "Documentação primária observada em 2026-09-07."
  - "Carbon especifica background transparente para header/rows e border-bottom subtle como divisor."
status: current
---

# Carbon — Structured list

Referência de estado da prática para coleções que precisam parecer um campo único, não uma sequência de cartões.
