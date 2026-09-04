---
type: OpinionatedRecommendation
slug: rendered-evidence-manifest
maturity: stable
problem: evidência visual sem revisão, fase, rota e viewport inequívocos produz causalidade fraca entre pixels e código
validated_in: [franklinbaldo/astronauta, franklinbaldo/intuit]
---

# Rendered evidence manifest

## Posição

Quando uma imagem do navegador sustenta uma conclusão de UI/UX, o Cobogó recomenda que o conjunto traga um manifesto legível por máquina identificando **qual commit foi realmente renderizado, em qual fase, em qual rota e em quais viewports**.

O formato de referência é `schemas/rendered-evidence-manifest.schema.json`, e `scripts/validate-rendered-evidence.mjs` implementa os invariantes adicionais que JSON Schema sozinho não expressa convenientemente.

## Racional

O portfólio já encontrou quatro classes recorrentes de erro:

1. tratar o commit temporário criado pelo GitHub para testar uma PR como se fosse o commit real da branch;
2. provar a branch antes do merge e inferir que isso equivale ao commit que realmente entrou em `main`;
3. tratar uma observação de `main` como prova automática de que o mecanismo de publicação entregou aquela revisão;
4. chamar uma interface de responsiva sem uma matriz que contenha ao menos uma visão estreita e uma desktop.

Esses erros não dizem se os pixels são bons ou ruins. Eles dizem que não sabemos com precisão **quais pixels pertencem a qual revisão e a qual estado de entrega**. Sem essa ligação, comparações antes/depois e avaliações ficam frágeis.

## Contrato

Campos centrais do formato de referência:

- `version: 1`;
- `revision`: SHA Git completo de 40 caracteres realmente avaliado;
- `phase`: `pull_request`, `main` ou `published`;
- `head_revision`: obrigatório em `pull_request` e idêntico a `revision`;
- `published_revision`: obrigatório em `main` e `published`, idêntico a `revision`;
- `public_url`: obrigatório em `published`, absoluto e em HTTP(S);
- `observed_at`: obrigatório em `published`, com data e hora válidas;
- `route`: rota renderizada;
- `responsive`: se aquele conjunto pretende sustentar uma conclusão de responsividade;
- `captures[]`: arquivo produzido e viewport `{width,height}`.

As três fases respondem a perguntas diferentes. `pull_request` identifica a revisão proposta. `main` identifica a revisão incorporada ao ramo principal. `published` afirma algo mais forte: aquela revisão foi observada no endereço público depois da publicação. O último estado exige endereço e horário justamente para não transformar a existência de um commit em prova de entrega.

Se `responsive: true`, o validador exige ao menos uma visão estreita (`width <= 480`) e uma desktop (`width >= 1024`). Viewports duplicados, arquivo vazio, rota vazia e revisão não vinculada à fase são rejeitados.

## Critério observável

Uma evidência que usa o schema de referência deve passar:

```sh
node scripts/validate-rendered-evidence.mjs manifest.json
```

Uma implementação local equivalente também é válida se provar a mesma informação sem ambiguidade. Para mudança visual material, um manifesto correto não substitui o ciclo de observar antes, testar a PR, fazer merge e observar novamente o estado que a conclusão pretende descrever.

## O que este contrato não valida

O manifesto **não avalia os pixels**. Ele não detecta corte de conteúdo, hierarquia ruim, contraste, affordance, texto enganoso ou regressão visual. Isso continua exigindo inspeção da página renderizada. O validador apenas impede que uma conclusão visual seja apoiada em arquivos cuja origem esteja ambígua.

Também não exige Playwright, GitHub Actions, formato específico de screenshot nem aparência Cobogó.

## Escape hatch

Um projeto pode usar outro formato ou ferramenta quando prova informação equivalente ou superior — commit real, fase, rota, viewport e identidade do arquivo produzido — e a rotina consegue reconciliar a revisão proposta, `main` e, quando material, a página publicada sem inferência. A implementação Cobogó é um default interoperável, não uma obrigação tecnológica.

Projetos sem endereço público não precisam fabricar `phase: published`. Neles, `main` ou uma fase local equivalente é suficiente quando descreve honestamente o estado observado.

## Evidência

- `franklinbaldo/astronauta#42`: primeira aplicação real bem-sucedida. A PR gerou `evidence.json` com `evaluated_sha=f4463fb0...`, `merge_ref_sha=a055727c...`, evento de PR, rotas, modos e quatro combinações de viewport. Depois do merge, a execução `33742274379` sobre `main` produziu o arquivo `9888212021`, com `evaluated_sha=55232223e695cb2d27611b750ec94748e99023a1` e `merge_ref_sha=null`. Isso permitiu ligar sem ambiguidade as imagens ao commit realmente incorporado e, ao examiná-las, abrir a dívida responsiva #43.
- `franklinbaldo/intuit#30`: segunda aplicação independente e convergente. Depois do Pages `33835991124`, o pacote `9923434999` registrou `phase=published`, o commit `495e54b9841ba2e18fcd5f980e995a6072e92963`, a rota pública, larguras `1440×900` e `390×844` e horário `2026-09-04T04:21:05Z`. O Intuit chegou ao mesmo princípio com implementação local própria, sem copiar o formato literal do Astronauta.
- `franklinbaldo/ficha#239`: reforçou a necessidade de identidade coerente dentro do mesmo pacote quando `capture-state.json` e `accessibility-evidence.json` passaram a registrar o mesmo commit real observado.
- `franklinbaldo/quem-sao-eles#25`, `franklinbaldo/leizilla#164` e `franklinbaldo/ficha#241`: reforçaram a diferença entre observar o build ou `main` e abrir novamente a URL depois da publicação.

## Maturidade

`stable`: em português comum, a recomendação **já funcionou de forma convergente em pelo menos dois projetos reais**, Astronauta e Intuit, preservando implementações e identidades locais distintas.

A mudança de `validated` para `stable` não depende de os dois projetos usarem o mesmo JSON. O que convergiu foram os invariantes: revisão real, fase explícita, rota, viewports e identidade dos arquivos; no Intuit, a aplicação ainda acrescentou a fase publicada com endereço e horário.

## Falsificação

Se o manifesto introduzir cerimônia sem reduzir ambiguidades reais de revisão/viewport/entrega, ou se projetos demonstrarem um contrato menor que preserve a mesma ligação entre pixels e código, o schema deve ser simplificado. O objetivo é identidade da evidência, não padronização de tooling.
