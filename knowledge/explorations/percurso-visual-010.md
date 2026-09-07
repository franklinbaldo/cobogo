---
type: VisualExploration
id: explorations/percurso-visual-010
title: "Percurso visual 010"
study_id: studies/campos-interligados-na-web
direction_id: directions/burle-marx-percurso-visual
cobogo_baseline_id: baselines/cobogo-laboratorio-catalogo-2026-09-07
practice_baseline_ids:
  - baselines/govuk-layout-reading-flow-2026-09-07
  - baselines/carbon-2x-grid-reading-flow-2026-09-07
  - baselines/uswds-layout-grid-reading-flow-2026-09-07
baseline_question: "O catálogo longo do Laboratório pode ganhar marcos de percurso por medida, respiro ou alinhamento sem sugerir que algumas explorações são mais importantes que outras?"
direction: "Traduzir movimento por sequência espacial no ledger do Laboratório, preservando conteúdo, ordem e equivalência semântica e evitando animação ou ornamento literal."
medium: "Astro + Panda CSS, catálogo responsivo de nove explorações"
constraints:
  - "Usar os mesmos nove itens, na mesma ordem DOM, com o mesmo conteúdo em A0 e traduções."
  - "Não usar cor, badges extras ou mudança de conteúdo para fabricar hierarquia."
  - "Offsets e assimetrias devem desaparecer em telas estreitas quando ameaçarem medida ou leitura."
  - "A0 deve reproduzir a lógica vigente do catálogo: ledger uniforme, mesma grade, mesma escala e mesmo respiro."
procedure:
  - "Materializar A0 como ledger uniforme equivalente ao catálogo atual."
  - "Materializar A como cadência de respiro: a grade e a tipografia não mudam, mas o espaço vertical segue um ciclo curto que cria pausas recorrentes."
  - "Materializar B como percurso por medida: linhas equivalentes alternam pequenos recuos laterais dentro do mesmo container e voltam a uma coluna simples no mobile."
  - "Materializar C como marcos de escala: a cada terceiro item a linha ganha título e respiro maiores, tensionando deliberadamente o risco de prioridade falsa."
  - "Publicar A0+A+B+C juntas com racional; não selecionar vencedora nesta rodada."
qualities_to_seek:
  - "Retomada fácil da varredura numa lista longa."
  - "Sensação de percurso sem depender de animação."
  - "Equivalência funcional perceptível entre todos os itens."
  - "Reflow simples e legível em 320–390px."
tensions_to_watch:
  - "Variação ordinal parecer ranking ou destaque editorial."
  - "Offsets reduzirem demais a medida útil."
  - "Ritmo virar ruído e atrasar a varredura."
  - "A exploração premiar novidade visual sem ganho sobre o ledger uniforme."
skill_path: skills/explorations/percurso-visual-010/SKILL.md
status: exploring
result: null
result_rationale: null
baseline_comparison: null
canonical_status: not_evaluated
canonical_rationale: null
canonical_targets: []
reflection: "Primeira rodada: a direção foi escolhida porque o catálogo do Laboratório oferece uma sequência real de nove itens com cadência deliberadamente uniforme. O estado da prática reforça duas condições: variação deve permanecer dentro de uma estrutura comum e deve colapsar com clareza em telas pequenas. A0 e três traduções foram materializados; julgamento fica para rodada posterior sobre a superfície publicada."
---

# Exploração: Percurso visual 010

A 010 testa movimento sem animação numa superfície que já exige leitura sequencial. A pergunta é propositalmente adversarial: qualquer ganho de percurso só vale se não transformar posição ordinal em prioridade semântica.
