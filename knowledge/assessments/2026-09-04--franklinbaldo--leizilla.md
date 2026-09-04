---
type: SurfaceQualityAssessment
repo: franklinbaldo/leizilla
date: 2026-09-04
commit: b5800cf6fbbfceb5dcf9bc895fc70d1d58284e49
deploy: https://franklinbaldo.github.io/leizilla/
capture: artifact:9924664387
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 3
  trust: 3
total: 21
band: good
blockers: []
trend: up
---

# Leizilla — avaliação após preservar os filtros no celular

## Veredito

**21 de 24 pontos — faixa boa.** Clareza 4/4, Explicabilidade 4/4, Autonomia 4/4, UX 3/4, UI 3/4 e Confiança 3/4. A mudança desta rodada é em UI: o problema material que tornava os filtros secundários quase indistinguíveis em 390 px foi corrigido e comprovado depois da publicação.

A avaliação aponta para `b5800cf6fbbfceb5dcf9bc895fc70d1d58284e49`, commit que realmente entrou em `main` depois da PR #164. O GitHub Pages publicou esse mesmo commit na execução `33839739009`. Depois do deploy, o próprio workflow abriu a URL pública com Chromium e produziu o pacote `9924664387`, identificado como `leizilla-published-b5800cf6fbbfceb5dcf9bc895fc70d1d58284e49`.

## Clareza / D1

**4/4.** A home continua apresentando diretamente a tarefa de pesquisar legislação preservada e estruturada. A reorganização espacial não removeu nem rebatizou os filtros.

## Explicabilidade / D2

**4/4.** A interface continua explicando preservação, estruturação e trilha de comprovação. A mudança foi estritamente de layout responsivo e não alterou afirmações sobre dados, vigência ou proveniência.

## Autonomia / D3

**4/4.** `versoes.parquet`, metadados, Internet Archive e o caminho DuckDB continuam disponíveis para reutilização fora do frontend.

## UX

**3/4 — boa.** Em tela estreita, a pessoa deixa de precisar inferir qual select truncado corresponde a ente ou tipo de norma. A busca principal permanece visualmente prioritária. A nota não sobe porque esta avaliação ainda não cobre profundamente uma busca bem-sucedida, abertura de lei e retorno aos resultados.

## UI

**3/4 — boa.** Este era o problema escolhido. Antes, em `390×844`, os dois selects encolhiam até começar igualmente por “Todos…”. Depois da #164, abaixo de 430 px os filtros secundários ficam em coluna.

O pacote produzido depois da publicação registra, em `390×844`, `document_client_width=390` e `document_scroll_width=390`. “Todos os entes”, “Todos os tipos de norma” e “Ano” medem 326 px cada, de x=32 a x=358. A imagem `published-home-390x844.png` confirma que os três textos aparecem inteiros e distinguíveis. Em `1280×900`, os filtros continuam lado a lado, preservando a composição compacta de desktop.

UI não sobe para 4 porque a comprovação desta rodada é forte para a home e os estados já observados, mas não demonstra ainda qualidade de referência em toda a variedade de páginas do Leizilla.

## Confiança

**3/4 — boa.** A execução `33839739023` repetiu a verificação visual de `main`, e a execução de Pages `33839739009` abriu a página realmente publicada depois do deploy, separando prova do build de prova do que o leitor recebeu. Isso fortalece a confiabilidade da avaliação visual.

A nota permanece 3 porque ainda não há prova ampla de acessibilidade por teclado, foco visível e semântica acessível. Esta rodada não inventa um defeito onde só existe ausência de observação mais ampla.

## Recomendações Cobogó relacionadas

- `visual-evidence-as-quality-gate` — permanece **stable**, isto é, a regra já funcionou de forma convergente em pelo menos dois projetos reais. A #164 acrescenta uma aplicação que distingue explicitamente o build da página já publicada e mede o comportamento responsivo no estado público.
- `recoverable-error-states` — permanece **stable**; o estado controlado de indisponibilidade continuou verde depois da mudança de layout.

## Dívida concreta restante

A #162 foi resolvida pela #164. Não há nova dívida concreta aberta nesta avaliação apenas para elevar UX, UI ou Confiança. As dimensões em 3 continuam elegíveis para uma rodada futura quando aparecer um problema observável específico.
