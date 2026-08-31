---
type: ConsumerCard
repo: franklinbaldo/letra_bonita
site: https://franklinbaldo.github.io/letra_bonita/
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Letra Bonita

## Identidade local

Preservar o caráter de ferramenta direta de autoria de folhas de caligrafia, sua tipografia, escolhas pedagógicas, geometria A4/Carta e a relação imediata entre controles e folha gerada. A integração Gemini é opcional e user-keyed; não transformar essa superfície pequena em dashboard nem tratar estilo local como adoção de Cobogó.

## D1 — no site

A superfície pública permite inserir texto de prática, escolher exemplos, configurar fonte/tamanho, texto tracejado, linhas-guia, inclinação, altura-X, cor, tamanho/orientação da página, inspecionar a folha resultante e acionar impressão ou abertura do SVG.

Gap `[fato]`: nenhum gap material estabelecido na última evidência do repo, de 2026-08-17. A rota pública continua respondendo em 2026-08-31 e expondo esse fluxo, mas o repo canônico não pôde ser recuperado nesta rodada para revalidar implementação/estado.

## D2 — por trás

Conforme o `ProjectProfile` vigente, é uma aplicação web zero-build que transforma texto + configuração tipográfica/guias/geometria em uma folha SVG pronta para inspeção e impressão. A geração de citações por Gemini é opcional; a chave pertence ao usuário e fica no browser.

Gap `[fato]`: nenhum gap material estabelecido pela última verificação. O site torna perceptível a finalidade e a relação configurar → preview → imprimir/SVG; a fonte canônica atual, porém, não pôde ser recuperada para confirmar detalhes de implementação em 2026-08-31.

## D3 — por conta própria

A própria superfície oferece o artefato vetorial por `Abrir SVG (Melhor Qualidade para Impressão)` e impressão da pré-visualização atual. Na última verificação, o source checkout também era reproduzível; não havia dataset/API/release autônoma adicional registrada.

Gap `[fato]`: nenhum material conhecido. Não foi inferido artefato novo sem acesso ao repo atual.

## Capacidades de superfície

- Pages/deploy — `last_verified: 2026-08-31`: a URL pública responde e serve a ferramenta; o estado interno de Pages/workflow não pôde ser consultado porque `franklinbaldo/letra_bonita` retorna 404 no conector.
- captura visual — `last_verified: 2026-08-17`: faltava browser capture reproduzível de autoria/preview e boundary de print/SVG; dívida de evidência, não gap D1/D2/D3.
- smoke tests — `last_verified: 2026-08-17`: `.github/workflows/static-app.yml` protegia marcadores essenciais e sintaxe JavaScript; era gate estrutural/sintático, não browser smoke.
- preservação — `last_verified: 2026-08-17`: nenhuma capacidade dedicada de Save Page Now registrada.

## O que este consumer faz melhor que o Cobogó

Nenhuma entrada nova nesta rodada. O pressure case de `configure/write → inspect worksheet → print/reuse` já está relacionado aos patterns experimentais de editor/preview e document/print; sem nova captura, a evidência não foi inflada.

## Padrões do Cobogó em uso

Nenhum pattern compartilhado é reivindicado como adoção de código. O consumer permanece evidência/candidato para `Editor and preview workspace` e `Document and print surface`, sem promoção adicional nesta rodada.

## Histórico

- 2026-08-31 — card migrado para `ConsumerCard`; dívida de captura/CI separada de gaps do leitor; site público confirmado respondendo, mas repo canônico não recuperável; workspace #26 aberto.
- 2026-08-17 — Pages e fluxo autoria/preview/impressão verificados; PR #6 introduziu gate estático mínimo.
