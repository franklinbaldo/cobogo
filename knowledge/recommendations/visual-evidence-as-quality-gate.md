---
type: OpinionatedRecommendation
slug: visual-evidence-as-quality-gate
maturity: stable
problem: build verde não prova que uma mudança de superfície funciona visualmente ou no runtime do navegador
validated_in: [franklinbaldo/quem-sao-eles, franklinbaldo/intuit]
---

# Evidência visual é gate de qualidade de superfície

## Posição

Mudança material de UI/UX deve produzir evidência renderizada vinculada ao SHA avaliado. Para fluxos client-side relevantes, a evidência deve distinguir shell renderizado de estado runtime realmente funcional.

## Racional

Compilação não detecta links malformados, conteúdo invisível, regressões de layout ou uma UI que renderiza mas nunca chega ao estado funcional. A captura também torna avaliações e rankings auditáveis.

## Contrato

O mecanismo pode variar por consumer, mas precisa registrar rota, SHA/build, método e arquivo visual produzido. Quando a tarefa depende de hidratação/runtime, o estado capturado deve ser classificado explicitamente. Superfícies responsivas precisam cobrir pelo menos um viewport estreito quando a responsividade for parte material da avaliação; “não houve overflow” deve ser observado, não presumido por leitura de CSS.

## Critério observável

Uma avaliação consegue apontar para uma captura reproduzível do SHA/deploy relevante e, quando aplicável, provar o estado funcional além do HTML estático. Quando desktop e celular importam, o mesmo método deve permitir comparar os dois sem perder a identidade do commit avaliado.

## Escape hatch

Mudanças sem efeito visual não exigem screenshot artificial. Superfícies não navegáveis por browser podem usar evidência equivalente apropriada ao meio. Uma rota estritamente desktop não precisa fabricar viewport móvel sem tarefa correspondente.

## Evidência

- `franklinbaldo/quem-sao-eles`, `/pep`: a #24 foi incorporada como `f9d662964abdecfad1b329f3a65856b47cfcc32b`. O workflow espera `search-ready`, executa uma consulta real e produz `1280×900` e `390×844` no mesmo estado. O run de `main` `33737031729`, arquivo `9886155918`, registra o commit real avaliado, origem/competência/snapshot, visibilidade dos controles e ausência de estouro horizontal. Isso completa a evidência antiga, que cobria somente desktop, sem mudar a aparência do produto.
- `franklinbaldo/intuit`, `/intuit/`, merge `34a3102a61d3676e34597d20606ffe3a53bdfe3d`: workflow de navegador produz desktop `1440x900` e narrow `390x844` no mesmo arquivo `9832628580`, com rota/SHA/viewports registrados; comportamento é protegido separadamente por Playwright.
- `franklinbaldo/leizilla`, #160, incorporada como `dc761b8936a51ade164bcfaf0dcfc04756b7eea6`: a nova verificação recompila a superfície Astro real, serve `/leizilla/`, produz `1280×900` e `390×844` e registra HTTP status, erros de página e commit no `capture-state.json`. O run de `main` `33726499150` produziu o arquivo `9882181048`. Essa evidência não muda a maturidade — a recomendação já era `stable` —, mas mostra que o contrato continua útil numa terceira identidade local e, mais importante, tornou visíveis dois problemas que build sozinho não revelava: filtros truncados no celular e uma mensagem incorreta no estado de falha remota.

As aplicações convergem no mesmo contrato sem uniformizar implementação ou identidade local, mantendo maturidade `stable`: em português comum, a regra já funcionou de forma convergente em pelo menos dois projetos reais.

## Falsificação

Se o custo de captura bloquear mudanças pequenas sem aumentar poder de detecção, a granularidade do gate deve ser ajustada; o princípio é evidência proporcional ao risco visual/runtime.
