---
type: OpinionatedRecommendation
slug: metadata-is-progressive
maturity: opinionated
problem: provenance, freshness, formato e detalhes técnicos podem ou ser escondidos demais ou dominar a interface e competir com a tarefa
validated_in: []
---

# Metadata tem hierarquia própria

## Posição

Metadata necessária para interpretar o estado atual fica visível; metadata útil para auditoria/reuso fica a um passo contextual; detalhe técnico profundo fica em disclosure/documentação. Não esconder o essencial nem despejar tudo.

## Racional

Confiança e foco não são opostos quando informação é hierarquizada pelo momento de decisão.

## Contrato

Competência/fonte material pode aparecer inline; checksum/schema detalhado pode viver em provenance/download; implementação interna fica mais profunda.

## Critério observável

O leitor vê imediatamente o que muda a interpretação e consegue aprofundar a auditoria sem sair à caça do repositório.

## Escape hatch

Superfícies técnicas podem elevar metadata detalhada quando ela é parte da tarefa principal.

## Evidência

Nenhuma ainda reconciliada formalmente; casos de provenance do portfólio motivam o default.

## Falsificação

Se informação escondida for necessária repetidamente para interpretar resultado, subir um nível; se inline gerar ruído sem decisão, descer um nível.
