---
type: OpinionatedRecommendation
slug: progressive-disclosure
maturity: opinionated
problem: explicar toda a maquinaria de um projeto de uma vez compete com a tarefa principal; escondê-la por completo torna o projeto opaco
validated_in: []
---

# Explicação deve ser progressiva

## Posição

O Cobogó recomenda organizar complexidade em camadas: ação e significado imediato primeiro; detalhes de método, provenance e reutilização disponíveis conforme o leitor aprofunda.

## Racional

O leitor de fora precisa de contexto, mas não de um README despejado na home. Progressive disclosure concilia transparência com foco.

## Contrato

A primeira camada responde ao propósito e ação. Camadas seguintes oferecem metodologia, estado dos dados, artifacts, provenance e detalhes técnicos em contexto, sem esconder informação essencial para interpretar o resultado atual.

## Critério observável

A tarefa principal permanece evidente e informações secundárias importantes são alcançáveis sem conhecimento prévio ou caça ao repositório.

## Escape hatch

Informação necessária para evitar interpretação errada — por exemplo freshness crítica — não pode ser escondida atrás de disclosure excessivo.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se uma camada escondida for repetidamente necessária para executar ou interpretar a tarefa principal, ela deve subir de nível na hierarquia.
