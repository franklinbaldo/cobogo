---
type: RunSpec
id: run-specs/visual-exploration
title: Exploração visual
version: "6.0.0"
status: experimental
parent_spec: run-specs/experience
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

# RunSpec do laboratório visual no Wisk

Esta especialização herda o contrato canônico de Experience do Wisk e acrescenta os requisitos de domínio já vigentes no laboratório do Cobogó.

## Escolher uma direção, não gastar a referência inteira

Uma referência pode inspirar várias relações diferentes no Cobogó. Antes de abrir nova exploração, leia as `TranslationDirection` já registradas. Se ainda faltarem direções úteis, registre apenas os pontos de consequência visual mais promissores; não faça uma matriz contra todas as variáveis do design system.

Cada direção explicita `target`, `reading`, `why_it_might_matter` e `scope`. Uma direção pode ser rejeitada sem materialização, e rejeitá-la não rejeita a referência.

## Estabelecer o baseline da direção

Toda nova exploração compara dois prongs: a superfície equivalente do Cobogó atual, materializada como A0, e o estado da prática observado em sistemas maduros relevantes para aquela classe de problema. O baseline registra forças, limitações e evidência; não é ranking de marcas.

## Tornar a cadeia visível

A narrativa pública mantém referência → leitura → direção → problema → Cobogó hoje → estado da prática → A0 + traduções → crítica → resultado → decisão canônica. Cada variante explica em prosa como traduz a direção escolhida.

## Materializar sem fechar

Quando A0 ou variantes são criados ou substancialmente alterados na rodada, publique e mantenha `exploring`. Autoria e julgamento não pertencem à mesma rodada.

## Avaliar contra A0

Uma rodada posterior pode concluir usando uma superfície já publicada. `selected` exige ganho defensável sobre A0; `rejected` é saudável quando nenhuma tradução supera o controle; `inconclusive` é apropriado quando a evidência não discrimina.

## Canonizar é outra decisão

Uma exploração selecionada não vira Cobogó automaticamente. Adoção canônica exige evidência de transferibilidade, trade-offs e targets explícitos no sistema.
