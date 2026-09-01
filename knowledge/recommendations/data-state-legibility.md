---
type: OpinionatedRecommendation
slug: data-state-legibility
maturity: opinionated
problem: interfaces orientadas a dados frequentemente deixam loading, vazio, erro, stale e sucesso visual ou semanticamente ambíguos
validated_in: []
---

# Estado dos dados deve ser legível

## Posição

Uma superfície orientada a dados deve distinguir estados que mudam o que o leitor pode concluir: carregando, vazio, erro, resultado disponível e, quando material, desatualizado/stale.

## Racional

Ausência de resultado não é o mesmo que falha de rede; shell renderizado não é o mesmo que runtime pronto; dado antigo não é necessariamente dado inválido. Colapsar esses estados produz confiança falsa.

## Contrato

Estados devem ter significado textual/semântico suficiente, não depender só de cor ou spinner, e refletir a realidade do pipeline/runtime. A interface não deve promover um estado intermediário a sucesso.

## Critério observável

Durante o fluxo principal, cada estado material pode ser identificado e interpretado sem inspecionar console ou código.

## Escape hatch

Fluxos puramente estáticos sem transições de dados não precisam fabricar uma máquina de estados.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo. Casos runtime existentes serão classificados no baseline.

## Falsificação

Estados que não alteram decisão nem interpretação podem ser fundidos para reduzir ruído; a taxonomia deve acompanhar semântica real, não checklist.
