---
type: RunSpec
id: run-specs/visual-exploration
title: Exploração visual
version: "3.0.0"
status: experimental
required_reading_kinds:
  - reference
  - study
  - exploration
  - skill
required_goal_kinds:
  - explore-visual-translation
required_evidence_kinds:
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
completion_notes: "Materializar e avaliar são momentos diferentes. Uma rodada que cria ou altera substancialmente variantes termina em exploring; seleção/rejeição exige uma rodada posterior, observando a superfície já publicada. Resultado da exploração e adoção canônica são decisões distintas."
---

# RunSpec do laboratório visual

A sessão não tem obrigação de fechar uma exploração. `rough` pode virar `exploring`; uma exploração pode permanecer aberta por várias rodadas ou ser `abandoned`. Quando as variantes forem criadas ou substancialmente alteradas nesta rodada, a sessão **não pode** concluir qual venceu: publique o specimen e termine em `exploring`.

Uma rodada posterior, partindo de uma superfície que já estava publicada antes de a rodada começar, pode concluir a exploração. Nesse momento registre `result` como `selected`, `rejected` ou `inconclusive` e escreva `result_rationale` em prosa. Selecionar significa apenas que uma tradução respondeu melhor à pergunta daquela exploração; não significa que ela entrou no Cobogó.

A adoção canônica é uma decisão separada. `canonical_status: adopted` exige `canonical_rationale` em prosa explicando por que o aprendizado ou a variante é transferível para o sistema, quais evidências sustentam a adoção e onde ela entra (`canonical_targets`). É perfeitamente válido concluir uma exploração sem adoção canônica.

A página pública deve tornar a investigação auditável por leitura: referência primeiro, leitura/pergunta de tradução, variantes e a justificativa em prosa de como cada uma traduz a referência, crítica acumulada, resultado se houver e, separadamente, decisão canônica se houver.
