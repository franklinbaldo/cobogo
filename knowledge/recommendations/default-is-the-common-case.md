---
type: OpinionatedRecommendation
slug: default-is-the-common-case
maturity: opinionated
problem: interfaces podem otimizar layout e fluxo para exceções, expondo complexidade rara a todo leitor
validated_in: []
---

# O caminho padrão serve o caso comum

## Posição

O Cobogó recomenda que a primeira camada da interface seja otimizada para o caso público mais comum comprovado, deixando exceções e controles avançados acessíveis por progressive disclosure.

## Racional

Expor toda flexibilidade de uma vez aumenta carga cognitiva e faz o usuário comum pagar pela complexidade de casos raros.

## Contrato

Defaults seguros e úteis, opções avançadas alcançáveis, sem esconder estado que altera interpretação. Não presumir “caso comum” sem evidência do produto/tese.

## Critério observável

A tarefa mais frequente/intencional pode ser iniciada sem configurar opções que só importam a exceções.

## Escape hatch

Ferramentas especializadas cujo público usa opções avançadas rotineiramente podem ter alta densidade desde a primeira camada.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se baseline/uso mostrar que o suposto caso avançado é na verdade comum, promover seus controles na hierarquia.
