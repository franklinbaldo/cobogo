---
type: OpinionatedRecommendation
slug: feedback-near-action
maturity: opinionated
problem: feedback distante da ação obriga o leitor a descobrir se algo aconteceu e a que ação o estado pertence
validated_in: []
---

# Feedback deve aparecer perto da causa

## Posição

Resultado, progresso e erro de uma ação devem aparecer no contexto em que a ação foi iniciada, salvo quando o efeito é global e realmente exige feedback global.

## Racional

Proximidade reduz ambiguidade causal e movimento de atenção. Toast global não deve ser default para tudo.

## Contrato

Controles refletem pending/disabled quando necessário; mensagem de resultado/erro é associada ao contexto; mudanças globais podem usar região global apropriada sem esconder efeito local.

## Critério observável

Depois de agir, o leitor consegue perceber o resultado sem procurar em outra região da página.

## Escape hatch

Ações que navegam ou alteram estado global podem comunicar resultado no destino/globalmente quando essa é a relação natural.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se feedback local duplicar informação já inequívoca na mudança de estado, reduzir redundância mantendo causalidade perceptível.
