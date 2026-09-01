---
type: OpinionatedRecommendation
slug: consumer-surface-contract
maturity: opinionated
problem: consumers podem adotar componentes Cobogó sem adotar uma definição coerente de boa experiência pública
validated_in: []
---

# O contrato Cobogó é de superfície, não de componentes

## Posição

Adotar Cobogó significa perseguir seus contratos de qualidade de superfície; importar CSS ou componente não é suficiente. Inversamente, um consumer pode satisfazer o contrato com solução local sem usar um componente Cobogó.

## Racional

Isso impede Goodhart: otimizar “adoção do design system” em vez de experiência real. Componentes são meios para acelerar bons defaults.

## Contrato

Assessments medem resultado observável. ConsumerCard registra recomendações/patterns em uso, mas score não deriva da contagem de imports.

## Critério observável

Uma solução local que atende ao mesmo critério recebe a mesma avaliação; um componente Cobogó mal aplicado não recebe crédito automático.

## Escape hatch

Nenhum: esta é uma regra de interpretação do próprio sistema de avaliação.

## Evidência

Será testada durante o baseline inicial em consumers com graus diferentes de adoção técnica do Cobogó.

## Falsificação

Se algum contrato só puder ser garantido por implementação compartilhada específica, isso deve ser declarado naquela recomendação, não presumido globalmente.
