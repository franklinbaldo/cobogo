---
type: OpinionatedRecommendation
slug: links-are-contracts
maturity: opinionated
problem: links de navegação, download, fonte e provenance podem existir visualmente e ainda apontar para destinos quebrados ou incorretos
validated_in: []
---

# Link público é contrato funcional

## Posição

Links materiais — navegação, download, fonte, artifact e ação externa — fazem parte do comportamento da interface e devem ser validados como tal, especialmente em sites publicados sob base paths.

## Racional

Um link visualmente perfeito que resolve URL errada é regressão funcional de UX. Builds estáticos frequentemente não capturam erro de composição de base path.

## Contrato

Captura/smoke deve exercitar destinos materiais ou ao menos validar URL final. Texto do link deve antecipar destino/ação. Não usar link como botão quando a ação não é navegação.

## Critério observável

Links materiais resolvem para o destino declarado no estado publicado e são semanticamente reconhecíveis como navegação/download apropriado.

## Escape hatch

Links externos instáveis podem ser verificados de forma menos agressiva para evitar flakiness; ainda devem ter provenance/preservação quando material.

## Evidência

Casos históricos do portfólio motivam o default; serão reconciliados formalmente no baseline.

## Falsificação

A estratégia de validação pode mudar para reduzir flakiness, mas integridade de destino continua parte do contrato.
