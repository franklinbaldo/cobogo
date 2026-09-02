---
type: OpinionatedRecommendation
slug: destructive-actions-are-explicit
maturity: opinionated
problem: ações destrutivas podem parecer ações comuns ou depender de confirmação genérica que não explica consequência
validated_in: []
---

# Ação destrutiva deve declarar consequência

## Posição

Ações irreversíveis ou de alto impacto devem ser semanticamente distintas, nomear a consequência e usar confirmação proporcional ao risco. Cor vermelha sozinha não constitui proteção.

## Racional

Prevenção de erro é UX. Confirmações genéricas habituam clique automático e não ajudam decisão.

## Contrato

Verbo específico, contexto do objeto afetado, confirmação apenas quando necessária e alternativa reversível/undo preferida quando tecnicamente adequada.

## Critério observável

Antes de executar uma ação destrutiva, o leitor consegue identificar o que será afetado e a natureza da consequência.

## Escape hatch

Ações facilmente reversíveis podem preferir execução direta + undo em vez de modal de confirmação.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se confirmação aumentar erro por fadiga sem reduzir risco, migrar para undo/guardrail contextual mantendo consequência explícita.
