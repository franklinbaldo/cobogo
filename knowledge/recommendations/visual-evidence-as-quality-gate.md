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

O mecanismo pode variar por projeto, mas precisa registrar rota, SHA/build, método e arquivo visual produzido. Quando a tarefa depende de hidratação/runtime, o estado capturado deve ser classificado explicitamente. Interfaces responsivas precisam cobrir pelo menos um viewport estreito quando a responsividade for parte material da avaliação; “não houve overflow” deve ser observado, não presumido por leitura de CSS.

Para mudança já publicada, a evidência mais forte é repetir a observação na URL pública depois do deploy e registrar explicitamente que a fase observada é a publicada. Uma imagem produzida antes do deploy pode provar a branch ou o build; não deve ser tratada automaticamente como prova do que o leitor recebeu.

## Critério observável

Uma avaliação consegue apontar para uma captura reproduzível do SHA/deploy relevante e, quando aplicável, provar o estado funcional além do HTML estático. Quando desktop e celular importam, o mesmo método deve permitir comparar os dois sem perder a identidade do commit avaliado. Quando a afirmação é sobre a página publicada, o arquivo de evidência deve permitir distinguir essa fase do build local.

## Escape hatch

Mudanças sem efeito visual não exigem screenshot artificial. Interfaces não navegáveis por browser podem usar evidência equivalente apropriada ao meio. Uma rota estritamente desktop não precisa fabricar viewport móvel sem tarefa correspondente. Uma verificação pós-publicação também pode ser dispensada quando não existe superfície publicada ou quando o que está sendo avaliado é explicitamente apenas o build local.

## Evidência

- `franklinbaldo/quem-sao-eles`, `/pep`: a #24 foi incorporada como `f9d662964abdecfad1b329f3a65856b47cfcc32b`. O workflow espera `search-ready`, executa uma consulta real e produz `1280×900` e `390×844` no mesmo estado. O run de `main` `33737031729`, arquivo `9886155918`, registra o commit real avaliado, origem/competência/snapshot, visibilidade dos controles e ausência de estouro horizontal. Isso completa a evidência antiga, que cobria somente desktop, sem mudar a aparência do produto.
- `franklinbaldo/intuit`, `/intuit/`, merge `34a3102a61d3676e34597d20606ffe3a53bdfe3d`: workflow de navegador produz desktop `1440x900` e narrow `390x844` no mesmo arquivo `9832628580`, com rota/SHA/viewports registrados; comportamento é protegido separadamente por Playwright.
- `franklinbaldo/leizilla`, #160, incorporada como `dc761b8936a51ade164bcfaf0dcfc04756b7eea6`: a nova verificação recompila a superfície Astro real, serve `/leizilla/`, produz `1280×900` e `390×844` e registra HTTP status, erros de página e commit no `capture-state.json`. O run de `main` `33726499150` produziu o arquivo `9882181048`. Essa evidência não muda a maturidade — a recomendação já era `stable` —, mas mostra que o contrato continua útil numa terceira identidade local e tornou visíveis filtros truncados no celular e uma mensagem incorreta no estado de falha remota.
- `franklinbaldo/leizilla`, #164, incorporada como `b5800cf6fbbfceb5dcf9bc895fc70d1d58284e49`: a correção empilhou os filtros secundários abaixo de 430 px sem alterar a composição de desktop. A execução visual de `main` `33839739023` terminou verde. O Pages `33839739009` publicou o mesmo commit e, depois do deploy, abriu novamente `https://franklinbaldo.github.io/leizilla/` com Chromium. O pacote `9924664387` registra fase publicada, HTTP 200, documento de 390 px numa janela de 390 px e “Todos os entes”, “Todos os tipos de norma” e “Ano” com 326 px cada. A aplicação reforça o refinamento já aprendido no Cobogó: comprovar o build e comprovar a página que o leitor recebeu são fatos diferentes.
- `franklinbaldo/astronauta`, #42, incorporada como `55232223e695cb2d27611b750ec94748e99023a1`: a execução `33742274379`, arquivo `9888212021`, inicia o admin SSR real sobre fixture determinística e produz leitura `/types/Note` e edição `/concepts/edit/note-01` em `1280×900` e `390×844`. Todos os testes funcionais continuaram verdes, mas as imagens estreitas mostraram rolagem horizontal da página e navegação cortada. A #43 nasceu desse achado. É uma demonstração forte do princípio: a verificação visual não duplicou o CI; encontrou um problema que o CI não podia enxergar.
- `franklinbaldo/astronauta`, #44, incorporada como `99661b562bedd953a6797fe7b8b7fcd25b8a5dd6`: a correção preservou a navegação horizontal e a densidade em desktop, mas reorganizou o cabeçalho estreito para caber sem rolagem lateral global. O workflow passou a medir no navegador `documentClientWidth`, `documentScrollWidth` e os limites de elementos críticos. A execução de `main` `33828611787`, arquivo `9920852733`, comprovou `390 == 390` nas duas rotas estreitas e manteve a tabela larga com rolagem apenas dentro do próprio cartão. O aprendizado é que uma captura que descobre um defeito recorrente pode evoluir para um verificador explícito do invariável, sem transformar toda qualidade visual em teste numérico.
- `franklinbaldo/cobogo`, #452, incorporada como `62c0a6d7de65b9f36e08026577863f835ef3f518`: a primeira execução móvel encontrou `/knowledge/` com 1036 px em uma janela de 390 px, embora o build estivesse verde. A correção mínima conteve o bloco técnico localmente. Depois do merge, o Pages run `33782326908` publicou o mesmo commit e o job `verify-published-surface` abriu novamente seis rotas na URL pública, em desktop e celular. O arquivo `9904110705` registra `phase: published`, HTTP 200 e largura do documento igual ao viewport em todas as doze observações. O dogfood acrescenta um refinamento ao contrato: branch/build e página publicada são fatos diferentes e devem ser identificáveis na evidência.

As aplicações convergem no mesmo contrato sem uniformizar implementação ou identidade local, mantendo maturidade `stable`: em português comum, a regra já funcionou de forma convergente em pelo menos dois projetos reais.

## Falsificação

Se o custo de captura bloquear mudanças pequenas sem aumentar poder de detecção, a granularidade do gate deve ser ajustada; o princípio é evidência proporcional ao risco visual/runtime. Se a observação pós-publicação apenas duplicar sistematicamente o build sem encontrar divergências nem reduzir ambiguidades de deploy, ela deve ser reservada às mudanças em que o estado publicado é material para a conclusão.
