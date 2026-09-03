---
type: OpinionatedRecommendation
slug: rendered-evidence-manifest
maturity: validated
problem: evidência visual sem revisão, fase, rota e viewport inequívocos produz causalidade fraca entre pixels e código
validated_in: [franklinbaldo/astronauta]
---

# Rendered evidence manifest

## Posição

Quando uma imagem do navegador sustenta uma conclusão de UI/UX, o Cobogó recomenda que o conjunto traga um manifesto legível por máquina identificando **qual commit foi realmente renderizado, em qual fase, em qual rota e em quais viewports**.

O formato de referência é `schemas/rendered-evidence-manifest.schema.json`, e `scripts/validate-rendered-evidence.mjs` implementa os invariantes adicionais que JSON Schema sozinho não expressa convenientemente.

## Racional

O portfólio já encontrou três classes recorrentes de erro:

1. tratar o commit sintético criado pelo GitHub para testar uma PR como se fosse o commit real da branch;
2. provar a branch antes do merge e inferir que isso equivale ao commit que realmente entrou em `main`;
3. chamar uma interface de responsiva sem uma matriz que contenha ao menos uma visão estreita e uma desktop.

Esses erros não dizem se os pixels são bons ou ruins. Eles dizem que não sabemos com precisão **quais pixels pertencem a qual revisão do código**. Sem essa ligação, comparações antes/depois e avaliações ficam frágeis.

## Contrato

Campos centrais do formato de referência:

- `version: 1`;
- `revision`: SHA Git completo de 40 caracteres realmente avaliado;
- `phase`: `pull_request` ou `main`;
- `head_revision`: obrigatório em `pull_request` e idêntico a `revision`;
- `published_revision`: obrigatório em `main` e idêntico a `revision`;
- `route`: rota renderizada;
- `responsive`: se aquele conjunto pretende sustentar uma conclusão de responsividade;
- `captures[]`: arquivo produzido e viewport `{width,height}`.

Se `responsive: true`, o validator exige ao menos uma visão estreita (`width <= 480`) e uma desktop (`width >= 1024`). Viewports duplicados, arquivo vazio, rota vazia e revisão não vinculada à fase são rejeitados.

## Critério observável

Uma evidência que usa o schema de referência deve passar:

```sh
node scripts/validate-rendered-evidence.mjs manifest.json
```

Uma implementação local equivalente também é válida se provar a mesma informação sem ambiguidade. Para mudança visual material, um manifesto correto não substitui o ciclo de observar antes, testar a PR, fazer merge e observar novamente o commit de `main`.

## O que este contrato não valida

O manifesto **não avalia os pixels**. Ele não detecta corte de conteúdo, hierarquia ruim, contraste, affordance, texto enganoso ou regressão visual. Isso continua exigindo inspeção da página renderizada. O validator apenas impede que uma conclusão visual seja apoiada em arquivos cuja origem esteja ambígua.

Também não exige Playwright, GitHub Actions, formato específico de screenshot nem aparência Cobogó.

## Escape hatch

Um projeto pode usar outro formato ou ferramenta quando prova informação equivalente ou superior — commit real, fase, rota, viewport e identidade do arquivo produzido — e a rotina consegue reconciliar PR e `main` sem inferência. A implementação Cobogó é um default interoperável, não uma obrigação tecnológica.

## Evidência

- `franklinbaldo/astronauta#42`: primeira aplicação real bem-sucedida. A PR gerou `evidence.json` com `evaluated_sha=f4463fb0...`, `merge_ref_sha=a055727c...`, evento de PR, rotas, modos e quatro combinações de viewport. Depois do merge, a execução `33742274379` sobre `main` produziu o arquivo `9888212021`, com `evaluated_sha=55232223e695cb2d27611b750ec94748e99023a1` e `merge_ref_sha=null`. Isso permitiu ligar sem ambiguidade as imagens ao commit realmente incorporado e, ao examiná-las, abrir a dívida responsiva #43.
- `franklinbaldo/ficha#230`: pressão anterior que explicitou a diferença entre branch da PR e commit incorporado e exigiu nova captura em `main`.
- `franklinbaldo/quem-sao-eles#23`: pressão anterior por rota, viewport, SHA real e matriz desktop+tela estreita no mesmo método funcional.
- `franklinbaldo/leizilla#159`: pressão equivalente para uma interface que ainda não tinha capacidade visual canônica naquele momento.
- `franklinbaldo/causaganha#999`: demonstrou na prática o ciclo de PR + `main`, ainda sem este manifesto compartilhado.

## Maturidade

`validated`: em português comum, a recomendação **já funcionou em pelo menos um projeto real**. O Astronauta adotou um formato local equivalente, não o schema literal, e isso é uma validação melhor do princípio: os invariantes sobreviveram sem impor a ferramenta do Cobogó.

Ela ainda não é `stable`. Para isso, precisa funcionar de forma convergente em pelo menos um segundo projeto independente preservando sua implementação e identidade locais.

## Falsificação

Se o manifesto introduzir cerimônia sem reduzir ambiguidades reais de revisão/viewport, ou se projetos demonstrarem um contrato menor que preserve a mesma ligação entre pixels e código, o schema deve ser simplificado. O objetivo é identidade da evidência, não padronização de tooling.
