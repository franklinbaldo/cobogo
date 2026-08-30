---
type: Concept
status: concept
observed_in: [franklinbaldo/causaganha]
provenance:
  - repo: franklinbaldo/causaganha
    commit: d8c5102e6de42f8391cdedbf3fa83306b41c8142
    route: /sobre
    capture: github-actions:33338217168/artifact:9739713589
---

# Fronteiras de prova por fonte

## Problema que resolve

Produtos multi-fonte tendem a transformar integração técnica em uma promessa epistemológica: se a fonte aparece no sistema, o leitor pode inferir que ela tem cobertura completa ou que metadata, movimento e inteiro teor provam a mesma coisa.

## Solução observada

No CausaGanha, a superfície `/sobre` organiza o sistema por `Arquivo / Estado / Teor` e, para cada fonte, mostra em paralelo **o que sustenta** e **o limite**. DJEN, DataJud, TJRO JURIS e STJ permanecem composáveis sem perder a diferença entre preservação, movimento processual e conteúdo textual.

A solução também liga a explicação aos artefatos públicos: fonte → artefato preservado/estruturado → índice fino por CNJ → superfície de consulta, com receita DuckDB reproduzível.

## Por que funciona

A fronteira negativa fica tão recuperável quanto a capacidade positiva. Isso reduz a chance de o leitor interpretar “pipeline existe” como “cobertura completa” ou um movimento chamado sentença como prova do fundamento da decisão. A composição continua útil sem apagar proveniência.

## O que impediria promoção

Ainda há evidência em apenas um consumer e o deploy público da observação está bloqueado por `franklinbaldo/causaganha#941`, embora a captura pós-merge do mesmo SHA esteja verde. Para promoção é necessária uma segunda implementação convergente em outro consumer, com captura antes/depois, e deploy verificável nas duas origens.

## Observações

- 2026-08-30 — `franklinbaldo/causaganha`, merge `d8c5102e6de42f8391cdedbf3fa83306b41c8142`, `/sobre`, artifact pós-merge `9739713589`.
