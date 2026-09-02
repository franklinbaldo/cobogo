---
type: OpinionatedRecommendation
slug: public-surface-does-not-leak-internals
maturity: opinionated
problem: transparência pode ser confundida com expor nomes de jobs, stack traces, paths e arquitetura interna irrelevantes ao leitor
validated_in: []
---

# Transparência não é vazamento de implementação

## Posição

A superfície deve explicar método, estado e provenance necessários à confiança sem despejar detalhes internos que não ajudam a tarefa e podem confundir ou aumentar risco.

## Racional

D2 pede explicabilidade, não stack trace. Boa transparência traduz mecanismo relevante para o modelo mental do leitor.

## Contrato

Erros públicos não exibem segredos/stack; copy não exige conhecer nomes internos; detalhes técnicos úteis ficam em documentação/disclosure apropriado.

## Critério observável

O leitor entende como interpretar o produto sem precisar aprender arquitetura interna, e informação operacional sensível/irrelevante não aparece por acidente.

## Escape hatch

Ferramentas para público técnico podem expor detalhes de implementação quando eles são o próprio objeto da tarefa.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se abstrair detalhe técnico remover informação necessária à auditabilidade, restaurar o detalhe no nível apropriado de disclosure.
