---
type: OpinionatedRecommendation
slug: visual-evidence-as-quality-gate
maturity: stable
problem: build verde não prova que uma mudança de superfície funciona visualmente ou no runtime do navegador
validated_in: [franklinbaldo/quem-sao-eles, franklinbaldo/intuit]
---

# Evidência visual é gate de qualidade de superfície

## Posição

Mudança material de UI/UX deve produzir evidência renderizada vinculada ao commit avaliado. Para fluxos client-side relevantes, a evidência deve distinguir shell renderizado de estado runtime realmente funcional.

## Racional

Compilação não detecta links malformados, conteúdo invisível, regressões de layout ou uma UI que renderiza mas nunca chega ao estado funcional. A captura também torna avaliações e rankings auditáveis. A identidade da revisão observada faz parte desse contrato: arquivos do mesmo pacote não podem apontar silenciosamente para commits diferentes.

## Contrato

O mecanismo pode variar por projeto, mas precisa registrar rota, commit/build, método e arquivo visual produzido. Quando a tarefa depende de hidratação/runtime, o estado capturado deve ser classificado explicitamente. Interfaces responsivas precisam cobrir pelo menos uma largura estreita quando a responsividade for material; “não houve overflow” deve ser observado, não presumido por leitura de CSS.

Em pull requests, a identidade principal deve ser o commit real da branch que está sendo julgada. Um commit temporário criado pela plataforma para testar a combinação com `main` pode ser registrado separadamente para diagnóstico, mas não deve substituir silenciosamente a identidade da revisão.

Para mudança já publicada, a evidência mais forte é repetir a observação na URL pública depois do deploy e registrar explicitamente que a fase observada é a publicada. Uma imagem produzida antes do deploy pode provar a branch ou o build; não deve ser tratada automaticamente como prova do que o leitor recebeu.

O validador de referência `scripts/validate-rendered-evidence.mjs` distingue três estados:

- `pull_request` — prova a revisão real da branch proposta e exige que `revision` seja igual a `head_revision`;
- `main` — prova uma observação ligada à revisão que entrou no ramo principal e preserva o contrato existente de `published_revision` igual a `revision`;
- `published` — prova a página que o leitor recebeu depois da publicação e, além da identidade do commit, exige `public_url` absoluta em HTTP(S) e `observed_at` válido.

A terceira fase existe para impedir uma inferência indevida: estar em `main` não significa automaticamente ter sido entregue pelo mecanismo de publicação.

## Critério observável

Uma avaliação consegue apontar para uma captura reproduzível do commit/deploy relevante e, quando aplicável, provar o estado funcional além do HTML estático. Quando desktop e celular importam, o mesmo método deve permitir comparar os dois sem perder a identidade do commit avaliado. Quando a afirmação é sobre a página publicada, o arquivo produzido deve distinguir essa fase do build local, identificar o mesmo commit efetivamente publicado, registrar a URL pública e dizer quando a observação ocorreu.

## Escape hatch

Mudanças sem efeito visual não exigem screenshot artificial. Interfaces não navegáveis por browser podem usar prova equivalente apropriada ao meio. Uma rota estritamente desktop não precisa fabricar viewport móvel sem tarefa correspondente. Uma verificação pós-publicação também pode ser dispensada quando não existe interface publicada ou quando o que está sendo avaliado é explicitamente apenas o build local.

## Evidência

- `franklinbaldo/quem-sao-eles`, `/pep`: a #24 foi incorporada como `f9d662964abdecfad1b329f3a65856b47cfcc32b`. O workflow espera `search-ready`, executa uma consulta real e produz `1280×900` e `390×844` no mesmo estado. O run de `main` `33737031729`, arquivo `9886155918`, registra o commit real avaliado, origem/competência/snapshot, visibilidade dos controles e ausência de estouro horizontal.
- `franklinbaldo/quem-sao-eles`, #25, incorporada como `4e412c8e4ae5b275dc9525dc97c9ecf066c8d384`: o Pages `33851656399` publicou esse commit e, depois disso, `PEP published capture` `33852287508` abriu diretamente a URL pública em Chromium e produziu o pacote `9928944933`.
- `franklinbaldo/intuit`, `/intuit/`, merge `34a3102a61d3676e34597d20606ffe3a53bdfe3d`: workflow de navegador produz desktop e tela estreita no mesmo arquivo, com rota/commit/larguras registrados; comportamento é protegido separadamente por Playwright. A aplicação posterior da #30 passou a registrar explicitamente `phase=published` depois do deploy, antecipando o estado que agora existe no validador compartilhado.
- `franklinbaldo/leizilla`, #160 e #164: a observação em navegador revelou filtros truncados no celular, a correção preservou desktop e a publicação posterior foi aberta novamente na URL pública. Isso reforçou que comprovar o build e comprovar a página recebida pelo leitor são fatos diferentes.
- `franklinbaldo/astronauta`, #42 e #44: a observação encontrou rolagem horizontal que o CI não detectava; depois, a largura global virou regra automática sem sacrificar a tabela densa local.
- `franklinbaldo/cobogo`, #452: a primeira execução móvel encontrou `/knowledge/` com 1036 px em uma janela de 390 px; depois do merge, o Pages publicou o mesmo commit e seis rotas foram abertas novamente na URL pública em desktop e celular.
- `franklinbaldo/ficha`, #239, incorporada como `05aa359f63718ebf5e0a8bd4920c189c24d73813`: a PR corrigiu uma ambiguidade dentro da própria prova. No commit real da branch `301de4efea1188101b992708ec3fb374f1d20dd2`, o nome do pacote, `visual-evidence/capture-state.json` e `accessibility-evidence.json` passaram a registrar o mesmo commit. Depois do merge, a execução de `main` `33853865990` produziu o pacote `9929398297`, novamente com os dois JSONs identificando `05aa359f...`; CI `33853865906` e publicação `33853865948` também terminaram com sucesso. O aprendizado é que proveniência da captura inclui a identidade inequívoca da revisão observada, não apenas rota e imagem.
- `franklinbaldo/ficha`, #241, incorporada como `73c4696479dcc39dab7c3afe5c9e74b05dc4808d`: depois do Pages `33861297403`, Chromium abriu `https://franklinbaldo.github.io/ficha/` e repetiu a auditoria de acessibilidade contra a página efetivamente publicada. O resultado ficou separado da prova do build e ligado ao mesmo commit entregue.

As aplicações convergem no mesmo contrato sem uniformizar implementação ou identidade local, mantendo maturidade `stable`: em português comum, a regra já funcionou de forma convergente em pelo menos dois projetos reais. Esta atualização não muda a classificação; transforma em código compartilhado uma distinção que as aplicações já provaram útil.

## Falsificação

Se o custo de captura bloquear mudanças pequenas sem aumentar poder de detecção, a granularidade do gate deve ser ajustada; o princípio é evidência proporcional ao risco visual/runtime. Se a observação pós-publicação apenas duplicar sistematicamente o build sem encontrar divergências nem reduzir ambiguidades de deploy, ela deve ser reservada às mudanças em que o estado publicado é material para a conclusão.
