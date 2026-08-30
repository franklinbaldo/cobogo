---
type: Concept
status: concept
observed_in: [ovigialocal/ovigialocal.github.io]
provenance:
  - repo: ovigialocal/ovigialocal.github.io
    commit: d2d72648f75d0c7c22b8ef3f132e7693ba2247ce
    route: /?preview=populated (localhost-only validation state)
    capture: github-actions:33328448256/artifact:9736929020/home-populated-preview-desktop.png
---

# Hierarquia editorial de capa sem fixture pública

## Problema

Um site editorial precisa provar como sua capa se comportará quando houver volume real de matérias, mas um produto ainda sem publicação não deve inventar notícias públicas apenas para validar composição. Uma grade homogênea de cards também apaga a diferença jornalística entre manchete, secundárias e notas.

## Solução observada

O Vigia mantém `publishedArticles` vazio na superfície pública e ativa, apenas em `localhost`, um conjunto explicitamente demonstrativo por `?preview=populated`. Esse estado usa o **mesmo renderer** da capa real. A primeira matéria recebe peso de manchete; duas recebem peso secundário; as seguintes viram briefs. Editoria, bairro, data, fonte e caminho de proveniência continuam recuperáveis, mas visualmente subordinados aos títulos.

O harness de captura registra tanto `/` quanto o preview em desktop e mobile. Assim, o estado futuro é verificável sem criar uma segunda maquete e sem permitir que a fixture apareça no GitHub Pages.

## Por que funciona

- preserva a verdade da superfície pública: edição vazia continua vazia;
- testa a composição real, não uma página paralela descartável;
- torna hierarquia uma relação editorial explícita, não apenas diferença cosmética de card;
- permite revisão antes/depois em CI e recaptura pós-merge;
- mantém a identidade local de jornal de Porto Velho.

## O que impediria promoção

Há evidência em apenas um consumer. Não promover como pattern compartilhado até outro consumer com tarefa genuinamente editorial demonstrar o mesmo problema e convergir numa solução equivalente, com capturas antes/depois próprias. Um dashboard, catálogo ou data product com cards de prioridade não conta automaticamente como segunda observação.

## Observações

- 2026-08-30 — O Vigia: PR #7 / merge `d2d72648`; captura pós-merge run `33328448256`, artifact `9736929020`.
