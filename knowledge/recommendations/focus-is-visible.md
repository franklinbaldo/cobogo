---
type: OpinionatedRecommendation
slug: focus-is-visible
maturity: opinionated
problem: estilos de marca podem remover outline/foco e tornar navegação por teclado invisível
validated_in: []
---

# Foco nunca desaparece

## Posição

Todo elemento interativo alcançável por teclado deve possuir indicador de foco perceptível no contexto visual onde aparece. O Cobogó não aceita `outline: none` sem substituição funcional.

## Racional

Foco é estado de interação, não decoração. Sua ausência quebra orientação e acessibilidade.

## Contrato

Usar `:focus-visible` quando apropriado, contraste suficiente e geometria que não seja cortada por overflow. O indicador pode refletir identidade local.

## Critério observável

Percorrendo o fluxo principal apenas por teclado, sempre é possível identificar qual elemento receberá a próxima ação.

## Escape hatch

Nenhum para elementos realmente focáveis; a forma visual do foco é adaptável.

## Evidência

Nenhuma ainda reconciliada sob o novo modelo.

## Falsificação

Se um estilo de foco compartilhado falhar em determinado fundo/componente, adaptar token/estilo local preservando perceptibilidade.
