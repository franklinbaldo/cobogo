---
type: ConsumerCard
repo: franklinbaldo/leizilla
site: https://franklinbaldo.github.io/leizilla/
status: active
last_reviewed: 2026-09-04
gap_score: 0
---

## Identidade local

Preservar nome e metáfora do Leizilla, a voz lúdica do dinossauro e a composição local Astro/Svelte. Cobogó pode informar hierarquia, proveniência, estados honestos e reutilização de arquivos públicos, mas não deve centralizar a identidade visual nem transformar o produto em outra interface do portfólio.

## D1 — no site

O leitor pode pesquisar legislação, abrir uma lei, preservar o contexto da busca, navegar pelos dispositivos, inspecionar cobertura e chegar aos dados da norma. A home apresenta a tarefa diretamente como `Leis públicas não deveriam desaparecer em PDFs.`.

Problema material observado em D1: nenhum.

## D2 — por trás

Conforme o `ProjectProfile`, o Leizilla preserva, estrutura e republica legislação brasileira como dados públicos auditáveis. A interface explica a cadeia de preservação, estruturação por dispositivo e trilha de evidência. A migração estrutural `data_publicacao -> data_ato` e a proveniência de vigência continuam pertencendo ao domínio/pipeline (#129/#156/#157), não a esta rotina.

Problema material observado em D2: nenhum.

## D3 — por conta própria

O projeto publica `versoes.parquet` e `dataset_meta.json` no Internet Archive e expõe um exemplo DuckDB sobre o mesmo arquivo consumido pelo portal. O leitor pode reutilizar o acervo fora do frontend.

Problema material observado em D3: nenhum.

## Capacidades de interface pública

- GitHub Pages/deploy — presente; a #164 foi publicada no commit `b5800cf6fbbfceb5dcf9bc895fc70d1d58284e49` pela execução `33839739009`.
- Verificação visual reproduzível — desktop `1280×900`, celular `390×844` e estado controlado de falha de acesso ao dataset. Em `main`, a execução `33839739023` terminou verde no mesmo commit `b5800cf6...`.
- Observação depois da publicação — após o Pages concluir, o workflow abre `https://franklinbaldo.github.io/leizilla/` com Chromium e registra imagens e medidas da página realmente servida. A execução `33839739009` produziu o pacote `9924664387`, ligado a `b5800cf6...`; em 390 px, documento e janela medem 390 px e os três filtros têm 326 px cada.
- Estado de indisponibilidade verificável — o workflow interrompe o acesso ao Internet Archive de propósito e falha se a interface voltar a concluir que o acervo não foi publicado.
- Preservação — Internet Archive e metadados de publicação continuam expostos como partes reais do produto.

A capacidade de falha controlada foi encaminhada ao workspace na issue `franklinbaldo/workspace#35`. A nova capacidade de observar a página depois da publicação foi encaminhada na `franklinbaldo/workspace#39`; este cartão não edita o `ProjectProfile`.

## O que este projeto faz melhor que o Cobogó

- Expõe o mesmo Parquet como dado do produto e como arquivo reutilizável por terceiros.
- Preserva o contexto busca → documento → dispositivo → volta aos resultados sem exigir um padrão visual compartilhado.
- Mantém cobertura explícita e, após #163, evita transformar indisponibilidade de transporte em afirmação sobre inexistência/publicação.
- Passou a guardar, no próprio deploy, uma observação separada da página publicada, evitando confundir prova do build com prova do que o leitor recebeu.

## Padrões do Cobogó em uso

- `public-artifact-reuse` — Parquet + metadata + DuckDB como reutilização independente do frontend.
- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos; a #164 reforça o contrato ao distinguir build de página publicada.
- `recoverable-error-states` — **stable** depois da #163: já funcionou de forma convergente na Ficha e no Leizilla, com interfaces diferentes e o mesmo contrato de verdade + próximo passo.

## Dívida de qualidade atual

A avaliação atual é **21 de 24 pontos — faixa boa**: Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 3 e Confiança 3.

A dívida `leizilla#162` foi resolvida pela #164. Em `390×844`, “Todos os entes”, “Todos os tipos de norma” e “Ano” aparecem em coluna, inteiros e distinguíveis; o documento publicado mede 390 px numa janela de 390 px. UI sobe de 2 para 3.

UI não sobe para 4 porque a observação desta rodada é forte para a home e seus estados cobertos, mas ainda não demonstra qualidade de referência na variedade completa de páginas. UX permanece em 3 porque a avaliação ainda não cobre profundamente uma busca bem-sucedida, abertura de lei e retorno aos resultados. Confiança permanece em 3 porque ainda não há prova ampla de teclado, foco visível e semântica acessível.

Nenhuma nova issue foi aberta apenas para aumentar pontuação. As dimensões em 3 continuam elegíveis quando surgir problema concreto observável.

## Histórico

- 2026-09-04 — #164 incorporada como `b5800cf6...`; execução visual de `main` `33839739023` e Pages `33839739009` passaram; o pacote pós-publicação `9924664387` confirma filtros inteiros em 390 px e ausência de rolagem horizontal global; UI sobe de 2/4 para 3/4 e total de 20 para 21/24; capacidade encaminhada ao workspace na #39.
- 2026-09-03 — #163 incorporada como `b5afe794...`; Pages `33770975164` e verificação visual de `main` `33770975121` / arquivo `9899626172` passaram; Confiança sobe de 2/4 para 3/4 e total de 19 para 20/24.
- 2026-09-03 — #160 incorporada como `dc761b8936...`; primeira avaliação completa 19/24; abertas #161 e #162.
- 2026-09-01 — revalidação distinguiu falha parcial de parse do sucesso do job ETL/release; `gap_score` permaneceu 0.
- 2026-08-31 — cartão migrado para `ConsumerCard`; D1/D2/D3 reavaliados.
- 2026-08-30 — #155 preservou identidade DITEL apenas para descritores editoriais comprovados.
