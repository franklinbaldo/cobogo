---
type: OpinionatedRecommendation
slug: recommendations-have-owners
maturity: opinionated
problem: recomendações podem acumular sem ninguém ser responsável por implementação, validação ou retirement
validated_in: []
---

# Recomendação precisa de trajetória, não só arquivo

## Posição

Cada recomendação Cobogó deve ter estado de maturidade e próxima pergunta explícita: implementar referência, validar em consumer, estabilizar, revisar ou retirar.

## Racional

Corpus normativo sem ciclo de vida vira coleção de opiniões mortas.

## Contrato

Maturidade `opinionated | validated | stable | retired`; rotina prioriza algumas recomendações por rodada/baseline; evidência atualiza estado e histórico.

## Critério observável

É possível listar recomendações ainda não validadas e saber quais são candidatas a aplicação, sem depender de memória da sessão.

## Escape hatch

Recomendações meta podem permanecer opinionated por mais tempo quando validação é sistêmica, mas ainda precisam de condição de falsificação.

## Evidência

O schema e a rotina da RFC 0002 introduzem o lifecycle.

## Falsificação

Se maturidade não ajudar priorização, adicionar campos de próxima ação/última revisão em vez de criar estados adicionais arbitrários.
