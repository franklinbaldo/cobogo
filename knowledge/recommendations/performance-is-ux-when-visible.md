---
type: OpinionatedRecommendation
slug: performance-is-ux-when-visible
maturity: opinionated
problem: latência e carregamento podem ser tratados como detalhe técnico mesmo quando alteram diretamente a compreensão e conclusão da tarefa
validated_in: []
---

# Performance perceptível é UX

## Posição

Quando espera, hidratação ou processamento são perceptíveis no fluxo principal, o Cobogó considera isso parte da UX e recomenda feedback imediato, trabalho proporcional e evitar bloquear conteúdo que poderia ser útil antes.

## Racional

O leitor experimenta tempo, não métricas de build. Latência sem estado parece falha; JavaScript pesado para conteúdo estático degrada acesso sem benefício.

## Contrato

Conteúdo essencial aparece o mais cedo possível; trabalho client-side só existe quando necessário; espera material possui estado legível; não usar skeleton/spinner para mascarar arquitetura evitável.

## Critério observável

Durante o carregamento real, o leitor entende que o sistema está trabalhando e consegue acessar conteúdo não dependente daquele trabalho quando apropriado.

## Escape hatch

Processamento inerentemente pesado pode exigir espera; a recomendação não inventa performance impossível, apenas exige tratamento honesto do tempo.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se feedback de progresso adicionar flicker em operações praticamente instantâneas, aplicar threshold apropriado em vez de sempre mostrar estado transitório.
