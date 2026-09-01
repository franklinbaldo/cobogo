---
type: OpinionatedRecommendation
slug: browser-native-before-custom
maturity: opinionated
problem: controles customizados podem recriar comportamento que a plataforma já oferece, degradando acessibilidade e previsibilidade
validated_in: []
---

# Plataforma antes de widget customizado

## Posição

O Cobogó recomenda usar elementos e comportamentos nativos da web antes de implementar controles customizados, recorrendo a customização quando a tarefa realmente exige capacidade que a plataforma não oferece adequadamente.

## Racional

Controles nativos trazem teclado, semântica, foco e expectativas de uso já resolvidos. Reimplementá-los cria dívida de UX e acessibilidade.

## Contrato

Links navegam, buttons agem, form controls usam tipos adequados, disclosure nativo é preferido quando suficiente e ARIA complementa — não substitui — semântica nativa.

## Critério observável

Fluxos básicos funcionam com teclado e comportamento esperado do browser sem camada customizada desnecessária.

## Escape hatch

Widgets de domínio complexos podem exigir interação customizada, assumindo explicitamente o contrato de teclado/semântica correspondente.

## Evidência

A recomendação é coerente com a direção semantic-only já declarada pelo Cobogó; validação por consumer será reconciliada no baseline.

## Falsificação

Quando primitive nativa não atender requisito real de tarefa, usar implementação customizada em vez de forçar inadequadamente a plataforma.
