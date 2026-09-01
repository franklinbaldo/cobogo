---
type: OpinionatedRecommendation
slug: visual-regression-is-not-only-pixels
maturity: opinionated
problem: comparação de screenshot pode detectar pixels diferentes sem dizer se tarefa, conteúdo e estados continuam corretos
validated_in: []
---

# Evidência visual deve testar significado, não só pixels

## Posição

Captura é necessária para mudança visual material, mas o Cobogó recomenda combinar imagem com assertions/estado semântico relevante quando a superfície possui conteúdo dinâmico ou interação.

## Racional

Pixel diff pode falhar por fontes/antialiasing e pode passar numa UI visualmente parecida mas funcionalmente errada. Evidência precisa responder ao critério da mudança.

## Contrato

Screenshot + rota/SHA + assertions de conteúdo/estado apropriadas. Para runtime, classificar estado funcional quando material.

## Critério observável

A evidência pós-mudança demonstra o aspecto visual e a condição funcional que o critério pretendia alterar/preservar.

## Escape hatch

Mudança puramente estética pode depender majoritariamente da captura; ainda assim build/semântica básica permanecem gates separados.

## Evidência

`franklinbaldo/quem-sao-eles` já combina screenshot/DOM com classificação runtime e consulta real em `/pep`.

## Falsificação

Assertions excessivamente acopladas a markup podem ser reduzidas em favor de contratos observáveis mais estáveis.
