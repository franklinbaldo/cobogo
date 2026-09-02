---
type: OpinionatedRecommendation
slug: patterns-own-validation
maturity: opinionated
problem: pattern compartilhado pode oferecer markup/estilo sem oferecer forma de verificar seu próprio contrato de acessibilidade e comportamento
validated_in: []
---

# Pattern compartilhado carrega seu gate

## Posição

Quando Cobogó implementa uma recomendação como pattern/primitive reutilizável, o próprio Cobogó deve testar os invariantes que controla. Consumers testam integração e identidade local, não reprovam do zero o contrato básico do pattern.

## Racional

Infraestrutura compartilhada só reduz custo se qualidade básica também for compartilhada.

## Contrato

Tests/examples cobrem semântica, estados e comportamento controlados pelo pattern; consumer continua responsável por conteúdo, contexto, contraste resultante de tokens locais e fluxo integrado.

## Critério observável

Uma regressão no contrato intrínseco do pattern falha no Cobogó antes de precisar ser descoberta em cada consumer.

## Escape hatch

Princípios sem implementação compartilhada não possuem gate central de código; permanecem verificáveis por assessment.

## Evidência

Princípio normativo para a fase de implementação pós-RFC.

## Falsificação

Se um teste central depender demais de contexto de consumer, mover essa assertion para integration guidance em vez de simular todos os produtos no Cobogó.
