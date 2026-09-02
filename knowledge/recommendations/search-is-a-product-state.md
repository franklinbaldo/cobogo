---
type: OpinionatedRecommendation
slug: search-is-a-product-state
maturity: opinionated
problem: busca pode ser tratada como campo isolado sem explicar escopo, estado, resultados e ausência de correspondência
validated_in: []
---

# Busca é um fluxo, não um input

## Posição

Quando busca é capacidade principal, o Cobogó recomenda tratar consulta, escopo, loading, resultado, zero resultados e erro como estados coerentes do produto, preservando a consulta e o contexto.

## Racional

Um campo de texto não constitui boa UX de busca. O leitor precisa entender o que está pesquisando e interpretar o que voltou — inclusive nada.

## Contrato

Label acessível, escopo compreensível, feedback de execução, zero-result distinto de erro e resultado ligado à consulta atual. Não limpar a consulta após falha/resultado sem motivo.

## Critério observável

Um leitor consegue executar busca, saber quando terminou e distinguir “nenhuma correspondência” de “não foi possível pesquisar”.

## Escape hatch

Filtros instantâneos locais simples podem ter feedback mínimo quando a mudança de resultados é imediata e inequívoca.

## Evidência

Casos existentes serão reconciliados durante o baseline; a recomendação nasce opinionated.

## Falsificação

Se estados explícitos adicionarem ruído em filtragem verdadeiramente instantânea, reduzir feedback preservando distinção semântica necessária.
