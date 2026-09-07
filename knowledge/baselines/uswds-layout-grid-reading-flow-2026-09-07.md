---
type: PracticeBaseline
id: baselines/uswds-layout-grid-reading-flow-2026-09-07
title: "USWDS — Layout grid"
kind: design_system
source_url: "https://designsystem.digital.gov/utilities/layout-grid/"
source_name: "U.S. Web Design System"
observed_surface: "Layout grid, containers e colunas responsivas"
observed_at: "2026-09-07"
strengths:
  - "Separa o container central da grade interna e permite larguras máximas diferentes quando o conteúdo pede."
  - "Oferece 12 colunas e comportamento responsivo sem amarrar cada superfície a uma composição única."
  - "Mantém margens responsivas explícitas entre telas estreitas e desktop."
limitations:
  - "A utility documenta infraestrutura de layout, não critérios editoriais para criar marcos de leitura."
  - "Flexibilidade de colunas não é evidência de que alternância visual seja desejável."
findings:
  - "Uma exploração pode variar largura dentro de um container canônico sem perder alinhamento global."
  - "No mobile, offsets e assimetrias devem colapsar para uma sequência simples antes de comprometer leitura."
evidence:
  - "Documentação primária do Layout grid observada em 2026-09-07."
  - "O grid-container usa largura máxima e padding responsivo; colunas podem ocupar frações diferentes da grade."
status: current
---

# USWDS — Layout grid

Referência para separar a estrutura global do percurso local. A 010 mantém o mesmo container e usa apenas variações internas que possam desaparecer de forma limpa em telas estreitas.
