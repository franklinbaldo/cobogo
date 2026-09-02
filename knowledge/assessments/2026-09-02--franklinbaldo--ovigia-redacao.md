---
type: SurfaceQualityAssessment
repo: franklinbaldo/ovigia-redacao
date: 2026-09-02
commit: 8ff2a2b24573820d53cb2da3a0c9dbab75a2130f
deploy: https://github.com/ovigialocal/ovigialocal.github.io/actions/runs/33592038690
capture: artifact:9832060693
scores:
  clarity: 4
  explainability: 4
  autonomy: 3
  ux: 4
  ui: 4
  trust: 4
total: 23
band: reference
blockers: []
trend: flat
---

# O Vigia — Surface Quality Assessment

## Veredito

**23/24 — referência.** O Vigia combina identidade editorial própria, hierarquia forte, navegação responsiva, explicação metodológica e proveniência visível sem transformar confiança em chrome. O ponto em 3/4 é autonomia: RSS, arquivo, licença e estado público reutilizável são bons, mas o produto é primariamente publicação jornalística e não oferece um contrato de dados/API mais amplo — corretamente, porque o repositório não prova que isso seja necessário.

## Clareza / D1

**4/4.** A home abre com `Notícias da cidade, com a fonte à vista`, busca visível e uma manchete inequívoca; depois organiza destaques, agenda, serviço e editorias. Em `390×844`, a mesma ordem permanece reconhecível e os links continuam acionáveis sem overflow aparente.

Gap: nenhum material. Recomendação: preservar a prioridade da leitura; não converter a capa em dashboard de cards homogêneos.

## Explicabilidade / D2

**4/4.** A superfície não se limita a slogan. `Como apuramos` explica o critério de publicação, o papel das fontes, a diferença entre fato, derivação, inferência e incerteza, a política de correções e a proximidade da proveniência com a leitura. O leitor entende o porquê do projeto e o mecanismo editorial relevante sem depender de documentação privada.

Gap: nenhum material. Recomendação: manter a explicação em camada própria e deixar a home jornalística.

## Autonomia / D3

**3/4.** RSS, arquivo, editorias, licença CC BY 4.0 e estado canônico público permitem acompanhar e reutilizar conteúdo sem depender do pipeline privado. A metodologia declara que HTML, feed, sitemap e índices são projeções do mesmo bundle público.

Gap: nenhum acionável. Não há evidência para exigir API/dataset adicional; inventar um canal novo só para buscar 4/4 degradaria a simplicidade do produto.

## UX

**4/4.** Navegação principal, busca, retorno à capa, arquivo, metodologia e links de fonte/correção formam caminhos claros. A matéria mantém leitura longa à esquerda e confiança/ação contextual à direita no desktop, refluindo sem perder a hierarquia no mobile. A home longa continua escaneável porque editorias e separadores tipográficos criam ritmo em vez de repetição monótona.

Gap: nenhum material demonstrado na captura atual.

## UI

**4/4.** A composição é editorial de verdade, não um tema aplicado: tipografia grande trabalha como arquitetura, linhas e espaço organizam sem excesso de massa, vermelho é gesto localizado e a capa varia módulo conforme importância. Desktop e mobile preservam identidade sem clone de outro consumer. A captura multi-rota do novo renderer Astro mostra consistência entre home, artigo e metodologia.

Gap: nenhum material. Esta superfície é referência local de `texto é arquitetura`, `vão antes de massa` e `módulo sem monotonia` sem exigir promoção automática da apresentação específica para outros produtos.

## Confiança

**4/4.** Fonte primária aparece junto à matéria, existe bloco `Como conferir esta matéria`, detalhes de proveniência, correções e metodologia. O estado avaliado está ligado ao artifact `9832060693` do SHA `8ff2a2b…`; o commit seguinte `bd70608e…` só adiciona o evento de confirmação da mesma publicação, e o deploy `33592038690` desse landing concluiu `success`.

Gap: nenhum material. A distinção entre conteúdo público e pipeline privado é clara.

## Blockers

nenhum.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — evidência positiva: captura real desktop/mobile em várias rotas do renderer Astro.
- `source-proximity` / proveniência próxima da leitura — evidência positiva forte no artigo; não confundir apresentação editorial específica com pattern universal.
- `local-identity-preserved` — evidência positiva forte: a superfície mantém identidade jornalística sem parecer Intuit, Ficha ou um demo Cobogó.
- `diagnostic-ranking` — este baseline mostra que a régua pode registrar `reference` sem fabricar dívida para justificar intervenção.

## Issues derivadas

nenhuma. A avaliação não encontrou dívida material que justifique issue de qualidade nesta rodada.

## O que o Cobogó deve aprender deste consumer

Confiança não precisa virar um painel permanente. O Vigia mostra uma solução forte para superfícies editoriais: leitura primeiro, fonte e correção perto do ponto de decisão, metodologia mais profunda a um clique e tipografia/ritmo carregando estrutura. Essa relação é reutilizável como conceito; o layout jornalístico específico permanece local.
