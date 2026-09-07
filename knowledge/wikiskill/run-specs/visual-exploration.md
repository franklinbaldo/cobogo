---
type: RunSpec
id: run-specs/visual-exploration
title: Exploração visual
version: "5.0.0"
status: experimental
required_reading_kinds:
  - baseline
  - reference
  - translation-direction
  - study
  - exploration
  - skill
required_goal_kinds:
  - explore-visual-translation
required_evidence_kinds:
  - translation-direction
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
completion_notes: "Toda nova exploração pertence a uma TranslationDirection explícita derivada de uma referência. A referência pode ter várias direções independentes e não precisa ser exaurida. Para a direção escolhida, estabeleça baseline de dois prongs, materialize A0 + traduções, publique sem decidir na mesma rodada e só conclua depois comparando contra A0. Canonização continua separada."
---

# RunSpec do laboratório visual

## 0. Escolher uma direção, não gastar a referência inteira

Uma referência pode inspirar várias relações diferentes no Cobogó. Antes de abrir uma nova exploração, leia as `TranslationDirection` já registradas para a referência.

Se a referência ainda não tiver direções suficientes, observe-a e registre os poucos pontos de consequência que parecem mais promissores. Normalmente 2–4 é um bom foco, mas não existe obrigação numérica. Não faça uma matriz contra todas as variáveis do design system.

Cada direção deve responder:

- **target**: onde no Cobogó isso pode ter consequência;
- **reading**: que relação da referência estamos enxergando;
- **why_it_might_matter**: por que essa relação parece fértil naquele alvo;
- **scope**: quais superfícies/componentes/classes de decisão podem ser afetados.

Uma direção pode ser rejeitada sem materialização. Rejeitar uma direção não rejeita a referência. Uma referência pode alimentar várias explorações ao longo do tempo.

Para uma nova `VisualExploration`, `direction_id` é obrigatório operacionalmente. A/B/C ou qualquer outro conjunto de variantes pertence somente àquela exploração.

## 1. Estabelecer o baseline da direção antes de explorar

Depois de escolher a direção, responda **o que estamos tentando melhorar nesta direção?** com dois prongs documentados como `PracticeBaseline`.

O primeiro é `cobogo_current`: uma superfície real do Cobogó atual que corresponda ao problema investigado. Registre URL/artefato observado, data, forças, limitações e evidência. Ele deve ser reproduzido no specimen como **A0 — Cobogó atual**. A0 não é uma variante criativa: é o controle que impede uma exploração de declarar vitória apenas por ser diferente.

O segundo prong é o **estado da prática**. Pesquise design systems maduros relevantes para a direção e pergunta específicas, não uma lista fixa de marcas. Cada implementação materialmente usada deve virar `PracticeBaseline(kind: design_system)`, com fonte primária, superfície observada, data, forças, limitações, achados e evidência. Sintetize convergências, divergências e trade-offs; não transforme popularidade em autoridade e não copie aparência.

`VisualExploration.direction_id` aponta para a direção escolhida; `cobogo_baseline_id` aponta para A0; `practice_baseline_ids` registra as observações externas usadas; `baseline_question` explicita a melhoria buscada.

Explorações históricas podem ter esses campos vazios. Novas explorações não devem ser materializadas sem eles.

## 2. Tornar visível a cadeia referência → direção → tradução

A exploração deve mostrar a referência de origem e a direção específica que está sendo investigada.

A narrativa é: **referência → leitura → direção escolhida → problema → Cobogó hoje → estado da prática → A0 + traduções → crítica → resultado → decisão canônica**.

Cada variante precisa de justificativa em prosa ligando decisões visuais concretas à `TranslationDirection`, à referência e ao problema identificado no baseline. O objetivo não é produzir A/B/C por obrigação; produza quantas traduções forem necessárias para investigar a pergunta.

## 3. Materializar sem fechar

A sessão não tem obrigação de fechar uma exploração. `rough` pode virar `exploring`; uma exploração pode permanecer aberta por várias rodadas ou ser `abandoned`.

Quando A0 ou as variantes forem criadas ou substancialmente alteradas nesta rodada, a sessão **não pode** concluir qual venceu: publique o specimen e termine em `exploring`.

## 4. Avaliar contra A0

Uma rodada posterior, partindo de uma superfície que já estava publicada antes de a rodada começar, pode concluir a exploração. Compare cada tradução entre si **e contra A0**.

Registre `result` como `selected`, `rejected` ou `inconclusive`, `result_rationale` em prosa e `baseline_comparison` explicando se houve ganho real sobre o Cobogó atual e a que custo.

`selected` só é defensável quando uma tradução responde melhor à pergunta **e** existe argumento observável de que ela melhora A0. Se nenhuma superar A0, `rejected` é um resultado saudável. Se a evidência não discriminar, use `inconclusive` ou continue `exploring`.

O resultado desta exploração não encerra automaticamente a `TranslationDirection`: a mesma direção pode merecer outra exploração em outro contexto, ou pode ser marcada `explored`/`rejected` com racional explícito quando houver evidência suficiente.

## 5. Canonizar é outra decisão

Selecionar significa apenas que uma tradução respondeu melhor à pergunta daquela exploração. A adoção canônica é separada.

`canonical_status: adopted` exige `canonical_rationale` em prosa explicando: o ganho sobre o baseline Cobogó; a transferibilidade além do specimen; o trade-off assumido diante do estado da prática; as evidências acumuladas; e onde a decisão entra (`canonical_targets`).

É perfeitamente válido concluir uma exploração sem adoção canônica.
