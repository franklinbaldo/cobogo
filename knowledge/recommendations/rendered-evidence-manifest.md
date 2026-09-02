---
type: OpinionatedRecommendation
slug: rendered-evidence-manifest
maturity: opinionated
problem: evidência visual sem revisão, fase, rota e viewport inequívocos produz causalidade fraca entre pixels e código
validated_in: []
---

# Rendered evidence manifest

## Posição

Quando uma captura é usada para sustentar uma conclusão causal de UI/UX, o Cobogó recomenda que a evidência carregue um manifest machine-readable que identifique **qual revisão foi realmente renderizada, em qual fase, em qual rota e em quais viewports**.

O formato de referência é `schemas/rendered-evidence-manifest.schema.json`, e `scripts/validate-rendered-evidence.mjs` implementa os invariantes adicionais que JSON Schema sozinho não expressa convenientemente.

## Racional

O portfólio já encontrou três classes recorrentes de erro de evidência:

1. tratar merge-ref sintético de PR como se fosse o head real;
2. provar o head antes do merge e inferir que isso equivale ao landing publicado;
3. chamar uma superfície de responsiva sem uma matriz que contenha ao menos uma visão narrow e uma desktop.

Esses erros não dizem se os pixels são bons ou ruins. Eles dizem que não sabemos com precisão **quais pixels pertencem a qual revisão**. Sem essa causalidade, before/after e assessments ficam frágeis.

## Contrato

Campos centrais:

- `version: 1`;
- `revision`: SHA Git completo de 40 caracteres realmente avaliado;
- `phase`: `pull_request` ou `main`;
- `head_revision`: obrigatório em `pull_request` e idêntico a `revision`;
- `published_revision`: obrigatório em `main` e idêntico a `revision`;
- `route`: rota renderizada;
- `responsive`: se aquele conjunto pretende sustentar uma conclusão de responsividade;
- `captures[]`: artifact/arquivo e viewport `{width,height}`.

Se `responsive: true`, o validator exige ao menos um narrow (`width <= 480`) e um desktop (`width >= 1024`). Viewports duplicados, artifact vazio, rota vazia e revisão não vinculada à fase são rejeitados.

## Critério observável

Uma evidência conforme deve passar:

```sh
node scripts/validate-rendered-evidence.mjs manifest.json
```

Para uma mudança visual material fechada, a rotina ainda exige o ciclo completo before → head PR → checks → merge → deploy → after de `main`. Um manifest válido em apenas uma dessas fases **não fecha sozinho** o ciclo.

## O que este contrato não valida

O manifest **não avalia os pixels**. Ele não detecta clipping, hierarquia ruim, contraste, affordance, conteúdo enganoso ou regressão visual. Esses continuam exigindo inspeção/render evidence real. O validator apenas impede que uma conclusão visual seja apoiada em evidência cuja identidade causal esteja ambígua.

Também não exige Playwright, GitHub Actions, formato de screenshot específico nem aparência Cobogó.

## Escape hatch

Um consumer pode usar outro formato ou harness quando ele prova informação equivalente ou superior — revisão real, fase, rota, viewport e identidade do artifact — e a rotina consegue reconciliar head e landing sem inferência. A primitive Cobogó é um default interoperável, não uma obrigação estética ou tecnológica.

## Evidência

- `franklinbaldo/ficha#230`: explicita a diferença entre head da PR e landing publicado e exige recaptura de `main` ligada ao landing SHA.
- `franklinbaldo/quem-sao-eles#23`: exige rota, viewport, SHA real e matriz desktop+narrow no mesmo método funcional.
- `franklinbaldo/leizilla#159`: repete o mesmo contrato para uma superfície ainda sem capacidade visual canônica.
- `franklinbaldo/causaganha#999`: demonstrou na prática um loop de head + landing recapturado pelo mesmo método, mas ainda sem este manifest compartilhado.

## Maturidade

Nasce `opinionated`. O portfólio já fornece informação suficiente para formular o contrato, mas nenhum consumer ainda adotou este manifest de referência. Uma adoção real bem-sucedida o promove a `validated`; duas implementações independentes convergentes podem promovê-lo a `stable`.

## Falsificação

Se o manifest introduzir cerimônia sem reduzir ambiguidades reais de revisão/viewport, ou se consumers demonstrarem um contrato menor que preserve a mesma causalidade, o schema deve ser simplificado. O objetivo é identidade da evidência, não padronização de tooling.
