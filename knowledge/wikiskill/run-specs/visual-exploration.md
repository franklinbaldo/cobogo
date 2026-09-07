---
type: RunSpec
id: run-specs/visual-exploration
title: Exploração visual
version: "4.0.0"
status: experimental
required_reading_kinds:
  - baseline
  - reference
  - study
  - exploration
  - skill
required_goal_kinds:
  - explore-visual-translation
required_evidence_kinds:
  - cobogo-baseline
  - practice-baseline
  - specimen
  - responsive-review
  - critique
required_check_kinds:
  - okf
  - build
  - accessibility
allowed_entry_states:
  - rough
  - exploring
  - concluded
allowed_result_states:
  - exploring
  - concluded
  - abandoned
completion_notes: "Toda nova exploração começa por baseline de dois prongs: Cobogó atual e práticas observadas em design systems maduros. O baseline Cobogó participa do specimen como A0. Materializar e avaliar são momentos diferentes; resultado precisa comparar as traduções também contra A0. Canonização exige ganho sobre o baseline e trade-off explícito diante do estado da prática."
---

# RunSpec do laboratório visual

## 1. Estabelecer o baseline antes de explorar

Toda nova exploração começa respondendo à pergunta **o que estamos tentando melhorar?** com dois prongs documentados como `PracticeBaseline`.

O primeiro é `cobogo_current`: uma superfície real do Cobogó atual que corresponda ao problema investigado. Registre URL/artefato observado, data, forças, limitações e evidência. Ele deve ser reproduzido no specimen como **A0 — Cobogó atual**. A0 não é uma variante criativa: é o controle que impede uma exploração de declarar vitória apenas por ser diferente.

O segundo prong é o **estado da prática**. Pesquise design systems maduros relevantes para a pergunta específica, não uma lista fixa de marcas. Cada implementação materialmente usada deve virar `PracticeBaseline(kind: design_system)`, com fonte primária, superfície observada, data, forças, limitações, achados e evidência. Sintetize convergências, divergências e trade-offs; não transforme popularidade em autoridade e não copie aparência.

`VisualExploration.cobogo_baseline_id` aponta para A0; `practice_baseline_ids` registra as observações externas usadas; `baseline_question` explicita a melhoria buscada.

Explorações históricas podem ter esses campos vazios. Novas explorações não devem ser materializadas sem eles.

## 2. Referência e tradução

Depois dos baselines, torne a referência visual observável, registre a leitura escolhida e formule a pergunta de tradução. A página pública segue a narrativa: **problema → Cobogó hoje → estado da prática → referência → leitura/pergunta → A0 + traduções → crítica → resultado → decisão canônica**.

Cada variante precisa de justificativa em prosa ligando decisões visuais concretas à leitura da referência e ao problema identificado no baseline. O objetivo não é produzir A/B/C por obrigação; produza quantas traduções forem necessárias para investigar a pergunta.

## 3. Materializar sem fechar

A sessão não tem obrigação de fechar uma exploração. `rough` pode virar `exploring`; uma exploração pode permanecer aberta por várias rodadas ou ser `abandoned`. Quando A0 ou as variantes forem criadas ou substancialmente alteradas nesta rodada, a sessão **não pode** concluir qual venceu: publique o specimen e termine em `exploring`.

## 4. Avaliar contra A0

Uma rodada posterior, partindo de uma superfície que já estava publicada antes de a rodada começar, pode concluir a exploração. Compare cada tradução entre si **e contra A0**. Registre `result` como `selected`, `rejected` ou `inconclusive`, `result_rationale` em prosa e `baseline_comparison` explicando se houve ganho real sobre o Cobogó atual e a que custo.

`selected` só é defensável quando uma tradução responde melhor à pergunta **e** existe argumento observável de que ela melhora A0. Se nenhuma superar A0, `rejected` é um resultado saudável. Se a evidência não discriminar, use `inconclusive` ou continue `exploring`.

## 5. Canonizar é outra decisão

Selecionar significa apenas que uma tradução respondeu melhor à pergunta daquela exploração. A adoção canônica é separada. `canonical_status: adopted` exige `canonical_rationale` em prosa explicando: o ganho sobre o baseline Cobogó; a transferibilidade além do specimen; o trade-off assumido diante do estado da prática; as evidências acumuladas; e onde a decisão entra (`canonical_targets`).

É perfeitamente válido concluir uma exploração sem adoção canônica.
