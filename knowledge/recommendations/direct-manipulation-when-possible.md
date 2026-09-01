---
type: OpinionatedRecommendation
slug: direct-manipulation-when-possible
maturity: opinionated
problem: tarefas simples podem ser escondidas atrás de instruções, modais ou fluxos indiretos que aumentam custo cognitivo
validated_in: []
---

# Prefira ação direta a cerimônia de interface

## Posição

Quando uma tarefa pode ser executada com segurança no contexto onde o objeto já está visível, o Cobogó prefere ação direta a fluxos intermediários, páginas explicativas ou modais desnecessários.

## Racional

Cada camada de cerimônia adiciona estado e decisão. Software público deve ser direto sem ser simplista.

## Contrato

A ação fica próxima do objeto/contexto, feedback aparece no mesmo fluxo e confirmação adicional é reservada a consequência destrutiva, irreversível ou realmente ambígua.

## Critério observável

O caminho principal não contém etapa cuja única função seja repetir contexto ou pedir confirmação de ação segura/reversível.

## Escape hatch

Ações de alto impacto, segurança, privacidade ou requisitos legais podem exigir confirmação e contexto adicional.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se ação direta aumentar erro por ambiguidade real, adicionar contexto/guardrail mínimo em vez de preservar pureza do default.
