---
type: SurfaceQualityAssessment
repo: franklinbaldo/baliza
date: 2026-09-02
commit: 5d1c9cfdeaa46a50b1b7d3031f5f2cf59ef0ff9b
deploy: https://github.com/franklinbaldo/baliza/actions/runs/33615483408
capture: artifact:9250189303
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 2
  trust: 4
total: 21
band: good
blockers: []
trend: flat
---

# Baliza — Surface Quality Assessment

## Veredito

**21/24 — boa.** Baliza é especialmente forte em clareza de tarefa, explicação do mecanismo, autonomia sobre artefatos públicos e confiança factual. A dívida material está na apresentação responsiva de dados em `/publicacoes`: a captura estreita torna tabela e esquema tecnicamente disponíveis, mas visualmente comprimidos. Isso reduz UI a 2/4 e UX a 3/4 sem apagar o restante da qualidade.

## Clareza / D1

**4/4.** A superfície organiza o domínio por cidade e deixa explícitos os caminhos de monitoramento, Publicações, PCA, Atas, Contratos, comparação, arquivo, status e exploração. Em `/publicacoes`, o título, o papel no atlas e as métricas deixam claro o que o leitor está vendo e onde aquele recurso entra na cadeia.

Gap: nenhum material de D1 demonstrado.

## Explicabilidade / D2

**4/4.** O produto explica a cadeia PNCP e o princípio archive-first na própria superfície. `/publicacoes` descreve endpoint, fan-out, partições e posição antes de contratos/atas; o arquivo e os manifests tornam visível que análise é construída sobre material preservado, não sobre uma caixa-preta efêmera.

Gap: nenhum material de D2 demonstrado.

## Autonomia / D3

**4/4.** Snapshots públicos, catálogo do Internet Archive, manifesto de Parquet com URL/hash, explorador SQL no navegador e URLs estáveis para Python/R/JS formam um contrato de reutilização real. O leitor pode sair da UI e trabalhar diretamente com os artefatos sem chave de API ou acesso ao pipeline privado.

Gap: nenhum material de D3 demonstrado.

## UX

**3/4.** Estados importantes são honestos: hidratação, indisponibilidade remota, incomplete e referência simulada não são misturados. A comparação explica quando peers reais não estão disponíveis, e a navegação mantém caminhos de arquivo/exploração próximos. A perda de um ponto vem de `/publicacoes` no viewport estreito: tabela e esquema exigem esforço de leitura maior do que o necessário porque a composição comprime informação horizontal.

Gap: issue `franklinbaldo/baliza#692`.

## UI

**2/4.** Desktop preserva hierarquia limpa, baixa massa visual e tipografia coerente com o produto analítico. Porém a evidência `publicacoes-hydrated-390x844.png` mostra `Contratações por modalidade` comprimindo/cortando valores à direita e `Esquema do dataset` perdendo separação perceptível entre nome, tipo e descrição. No desktop, nomes longos também encostam na coluna de tipo. A informação existe, mas a composição ainda tem gap material de responsividade.

Gap: issue `franklinbaldo/baliza#692`; critério é reflow/scroll deliberado e separação legível no mesmo harness visual.

## Confiança

**4/4.** Fonte PNCP e Internet Archive aparecem na superfície; snapshots e partições são identificados; a UI distingue dado observado, simulação e falha remota; o harness de captura persiste estado factual junto aos screenshots. O `main` avaliado está em `5d1c9cf...`; a mudança desde o SHA de superfície verificado em 2026-09-01 é de CI (`build-orgaos-publicos.yml`), e o deploy `33615483408` concluiu com sucesso.

Gap: nenhum material demonstrado.

## Blockers

nenhum blocker de superfície. A dívida de UI é acionável e está em `#692`.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` (`stable`) — foi a captura renderizada, e não leitura isolada do CSS, que tornou a dívida de UI inequívoca.
- `local-identity-preserved` — a correção deve manter a composição analítica do Baliza e pode ser totalmente local.
- `diagnostic-ranking` — o total na faixa boa não deve esconder UI 2/4; a leitura dimensional manda na priorização.

## Issues derivadas

- `franklinbaldo/baliza#692` — tornar tabela e esquema de `/publicacoes` legíveis no viewport estreito, com critério visual verificável.

## O que o Cobogó deve aprender deste consumer

Baliza trata estados de dados como parte da linguagem da interface: renderizado, hidratado, indisponível e simulado são fatos diferentes. Essa taxonomia é mais valiosa do que um loading/error genérico para produtos analíticos e deve continuar sendo observada como conceito transversal, sem copiar o layout específico do Baliza.