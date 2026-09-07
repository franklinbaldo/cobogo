---
type: PracticeBaseline
id: baselines/cobogo-laboratorio-catalogo-2026-09-07
title: "Cobogó atual — catálogo do laboratório"
kind: cobogo_current
source_url: "https://franklinbaldo.github.io/cobogo/laboratorio/"
source_name: "Cobogó"
observed_surface: "Catálogo de explorações em src/pages/laboratorio.astro"
observed_at: "2026-09-07"
strengths:
  - "As explorações formam um ledger previsível com ordem numérica, fronteiras claras e alvos integrais."
  - "Todas as linhas usam a mesma grade e escala, evitando sugerir prioridade que o estado do laboratório não possui."
  - "O reflow mobile mantém a ordem DOM e preserva título, pergunta, estado e ação."
limitations:
  - "Nove linhas com medida, alinhamento e respiro quase idênticos produzem uma cadência visual plana numa página longa."
  - "A sequência depende fortemente do número e da leitura textual; há poucos marcos espaciais para retomar a varredura depois de uma interrupção."
findings:
  - "O A0 é forte em equivalência e previsibilidade, mas oferece pouco movimento além da repetição."
  - "Qualquer tradução deve melhorar orientação sem converter ritmo em hierarquia falsa."
evidence:
  - "src/pages/laboratorio.astro observado no SHA 16ca144adfb570cc58ba94454243112037808b48."
  - "O catálogo usa uma única grade de linha e py responsivo igual para todas as explorações."
status: current
---

# Cobogó atual — catálogo do laboratório

Baseline A0 da exploração 010. O catálogo atual é deliberadamente uniforme; a investigação testa se o percurso pode ganhar marcos espaciais preservando essa equivalência semântica.
