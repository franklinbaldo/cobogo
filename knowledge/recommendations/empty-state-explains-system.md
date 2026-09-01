---
type: OpinionatedRecommendation
slug: empty-state-explains-system
maturity: opinionated
problem: estado vazio frequentemente parece página quebrada ou ausência inexplicável de conteúdo
validated_in: []
---

# Estado vazio deve explicar o sistema

## Posição

Quando vazio é um estado legítimo, a superfície deve dizer o que está vazio, por que isso pode acontecer e qual ação existe, se houver. Não preencher com conteúdo fictício para parecer completo.

## Racional

O vazio é uma oportunidade de ensinar o modelo do produto e distinguir “nenhum resultado” de “não carregou”.

## Contrato

Mensagem concreta, sem ilustração obrigatória, com próximo passo somente quando real. Vazio derivado de filtro deve permitir revisar/limpar filtro quando aplicável.

## Critério observável

Um leitor consegue diferenciar estado vazio legítimo de erro e sabe se há algo que possa fazer.

## Escape hatch

Vazios triviais em elementos auxiliares podem permanecer silenciosos quando seu significado é inequívoco no contexto.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se explicação repetitiva gerar ruído em uso frequente, reduzir copy preservando distinção semântica e ação real.
