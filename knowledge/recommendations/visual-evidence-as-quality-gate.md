---
type: OpinionatedRecommendation
slug: visual-evidence-as-quality-gate
maturity: validated
problem: build verde não prova que uma mudança de superfície funciona visualmente ou no runtime do navegador
validated_in: [franklinbaldo/quem-sao-eles]
---

# Evidência visual é gate de qualidade de superfície

## Posição

Mudança material de UI/UX deve produzir evidência renderizada vinculada ao SHA avaliado. Para fluxos client-side relevantes, a evidência deve distinguir shell renderizado de estado runtime realmente funcional.

## Racional

Compilação não detecta links malformados, conteúdo invisível, regressões de layout ou uma UI que renderiza mas nunca chega ao estado funcional. A captura também torna avaliações e rankings auditáveis.

## Contrato

O mecanismo pode variar por consumer, mas precisa registrar rota, SHA/build, método e artifact visual. Quando a tarefa depende de hidratação/runtime, o estado capturado deve ser classificado explicitamente.

## Critério observável

Uma avaliação consegue apontar para uma captura reproduzível do SHA/deploy relevante e, quando aplicável, provar o estado funcional além do HTML estático.

## Escape hatch

Mudanças sem efeito visual não exigem screenshot artificial. Superfícies não navegáveis por browser podem usar evidência equivalente apropriada ao meio.

## Evidência

`franklinbaldo/quem-sao-eles`, `/pep`: o capture browser registra screenshot/DOM e distingue estados até `search-ready`, incluindo consulta real.

## Falsificação

Se o custo de captura bloquear mudanças pequenas sem aumentar poder de detecção, a granularidade do gate deve ser ajustada; o princípio é evidência proporcional ao risco visual/runtime.
