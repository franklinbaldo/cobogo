---
type: OpinionatedRecommendation
slug: semantic-headings-and-landmarks
maturity: opinionated
problem: hierarquia visual pode não corresponder à estrutura semântica, prejudicando navegação assistiva e entendimento do documento
validated_in: []
---

# Estrutura visual e semântica devem concordar

## Posição

Headings e landmarks devem representar a arquitetura real da página. Tamanho visual não substitui heading e `<div>` genérico não substitui região semântica quando há elemento nativo apropriado.

## Racional

Estrutura semântica beneficia leitores assistivos, teclado, agentes e manutenção, além de disciplinar arquitetura de informação.

## Contrato

Um `main` principal, headings em ordem estrutural coerente, `nav/header/footer/aside` quando semanticamente apropriados e sem heading usado apenas por aparência.

## Critério observável

O outline/landmarks do documento permite compreender as grandes regiões e seções sem depender exclusivamente do CSS.

## Escape hatch

Estruturas complexas podem exigir níveis não lineares conforme HTML real; a regra é coerência semântica, não numerologia rígida de headings.

## Evidência

A recomendação é coerente com a direção semantic-only do Cobogó; validação por consumer será reconciliada no baseline.

## Falsificação

Se um pattern compartilhado produzir estrutura semântica artificial, simplificar markup em favor do documento real.
