---
type: ConsumerCard
repo: franklinbaldo/leizilla
site: https://franklinbaldo.github.io/leizilla/
status: active
last_reviewed: 2026-09-05
gap_score: 0
---

## Identidade local

Preservar nome e metáfora do Leizilla, a voz lúdica do dinossauro e a composição local Astro/Svelte. Cobogó pode informar hierarquia, proveniência, estados honestos e reutilização de arquivos públicos, mas não deve centralizar a identidade visual nem transformar o produto em outra interface do portfólio.

## D1 — no site

O leitor pode pesquisar legislação, abrir uma lei, preservar o contexto da busca, navegar pelos dispositivos, inspecionar cobertura e chegar aos dados da norma. A home apresenta a tarefa diretamente como `Leis públicas não deveriam desaparecer em PDFs.`.

Problema material observado em D1: nenhum.

## D2 — por trás

Conforme o `ProjectProfile`, o Leizilla preserva, estrutura e republica legislação brasileira como dados públicos auditáveis. A interface explica a cadeia de preservação, estruturação por dispositivo e trilha de evidência. A migração estrutural `data_publicacao -> data_ato` e a proveniência de vigência continuam pertencendo ao domínio/pipeline (#129/#156/#157), não a esta rotina. A consequência pública dessa dívida, porém, pertence à interface: quem baixa JSON/CSV não deve interpretar o nome legado `data_publicacao` como prova de publicação no Diário Oficial. Essa correção de apresentação está registrada na #167.

Problema material observado em D2: nenhum novo; a dívida encontrada incide principalmente sobre reutilização e confiança.

## D3 — por conta própria

O projeto publica `versoes.parquet` e `dataset_meta.json` no Internet Archive e expõe um exemplo DuckDB sobre o mesmo arquivo consumido pelo portal. O leitor pode reutilizar o acervo fora do frontend.

Problema concreto novo: os downloads por norma ainda preservam o nome histórico `data_publicacao` sem explicação junto à ação de baixar, embora o contrato factual trate essa data como data do ato e não como prova independente de publicação. A #167 fixa a correção pública sem antecipar a migração estrutural do dataset.

## Capacidades de interface pública

- GitHub Pages/deploy — presente; a #165 foi publicada no commit `5adf33c94d9b6237b7764ad682a194b025e2eed2` pela execução `33871750746`.
- Verificação visual reproduzível — desktop `1280×900`, celular `390×844` e estado controlado de falha de acesso ao dataset. Em `main`, a execução `33871750652` terminou verde no mesmo commit `5adf33c...`.
- Auditoria reproduzível de acessibilidade — o mesmo Chromium executa axe, inventaria controles interativos visíveis, percorre-os por `Tab` e verifica indicador perceptível de foco. No commit final da #165, os estados normais tiveram 13/13 controles alcançados; os estados controlados de indisponibilidade tiveram 16/16; todos registraram zero violações sérias/críticas do axe, zero controles ausentes e zero falhas de foco. A prova foi repetida em `main` pela execução `33871750652`, com o pacote `9936220405` ligado a `5adf33c...`.
- Observação depois da publicação — após o Pages concluir, o workflow abre `https://franklinbaldo.github.io/leizilla/` com Chromium e registra imagens e medidas da página realmente servida. A execução `33871750746` produziu o pacote `9936210089`, ligado a `5adf33c...`.
- Estado de indisponibilidade verificável — o workflow interrompe o acesso ao Internet Archive de propósito e falha se a interface voltar a concluir que o acervo não foi publicado.
- Preservação — Internet Archive e metadados de publicação continuam expostos como partes reais do produto.
- Limite observado em 2026-09-05 — a tentativa `33956952230` de ampliar a observação para a seção Dados de uma norma não conseguiu carregar o Parquet público do Internet Archive. O build e a home responderam normalmente; teclado e acessibilidade continuaram verdes nos estados alcançados. O impedimento ficou registrado com o commit de observação `84cfdc6889...` e o arquivo produzido pelo workflow `9966696868`.

A capacidade de falha controlada foi encaminhada ao workspace na issue `franklinbaldo/workspace#35`. A capacidade de observar a página depois da publicação foi encaminhada na `franklinbaldo/workspace#39`. A auditoria de acessibilidade adicionada pela #165 também deve ser reconciliada pelo workspace; este cartão não edita o `ProjectProfile`.

## O que este projeto faz melhor que o Cobogó

- Expõe o mesmo Parquet como dado do produto e como arquivo reutilizável por terceiros.
- Preserva o contexto busca → documento → dispositivo → volta aos resultados sem exigir um padrão visual compartilhado.
- Mantém cobertura explícita e, após #163, evita transformar indisponibilidade de transporte em afirmação sobre inexistência/publicação.
- Guarda, no próprio deploy, uma observação separada da página publicada, evitando confundir prova do build com prova do que o leitor recebeu.
- Reaproveita a infraestrutura de observação visual para testar teclado, foco e semântica sem criar uma segunda representação artificial da interface.

## Padrões do Cobogó em uso

- `public-artifact-reuse` — Parquet + metadata + DuckDB como reutilização independente do frontend.
- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos; a publicação continua observada separadamente do build.
- `recoverable-error-states` — **stable** depois da #163: já funcionou de forma convergente na Ficha e no Leizilla, com interfaces diferentes e o mesmo contrato de verdade + próximo passo.
- `semantic-accessibility-default` — **stable**: a #165 aplica a mesma regra de semântica, teclado e foco preservando a identidade local do Leizilla.
- `data-state-legibility` — recomendação ainda em `opinionated`, isto é, o Cobogó considera a distinção correta e quer testá-la; a aplicação da #167 não ocorreu nesta rodada porque faltou o print anterior da página de lei.

## Dívida de qualidade atual

A última avaliação completa permanece **22 de 24 pontos — faixa de referência**: Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 3 e Confiança 4.

Não foi criada nova avaliação em 2026-09-05: a rodada encontrou uma dívida real na semântica dos downloads, mas não conseguiu abrir uma norma pela capacidade oficial de observação porque o Parquet externo estava indisponível para o runner. A rotina não altera nota com base apenas no código nem esconde a dívida atrás da soma; a #167 continua elegível assim que houver condição de produzir o registro visual anterior.

UI permanece 3 porque a observação é forte para a home e seus estados cobertos, mas ainda não demonstra qualidade de referência na variedade completa de páginas. UX permanece 3 porque a avaliação ainda não cobre profundamente uma busca bem-sucedida, abertura de lei e retorno aos resultados.

## Histórico

- 2026-09-05 — identificada a consequência pública da dívida #157: downloads por norma ainda expõem `data_publicacao` sem explicar que a data representativa da URN é data do ato e não prova publicação no DOE; aberta #167. A tentativa de registrar a seção Dados pela execução `33956952230` falhou porque o runner não conseguiu carregar o Parquet do Internet Archive; nenhuma alteração de produto foi feita e a avaliação permaneceu 22/24.
- 2026-09-04 — #165 incorporada como `5adf33c...`; auditoria da branch `33871565508` e de `main` `33871750652` passaram com axe, teclado e foco; Pages `33871750746` publicou e observou novamente o mesmo commit; Confiança sobe de 3/4 para 4/4 e total de 21 para 22/24.
- 2026-09-04 — #164 incorporada como `b5800cf6...`; execução visual de `main` `33839739023` e Pages `33839739009` passaram; o pacote pós-publicação `9924664387` confirma filtros inteiros em 390 px e ausência de rolagem horizontal global; UI sobe de 2/4 para 3/4 e total de 20 para 21/24; capacidade encaminhada ao workspace na #39.
- 2026-09-03 — #163 incorporada como `b5afe794...`; Pages `33770975164` e verificação visual de `main` `33770975121` / arquivo `9899626172` passaram; Confiança sobe de 2/4 para 3/4 e total de 19 para 20/24.
- 2026-09-03 — #160 incorporada como `dc761b8936...`; primeira avaliação completa 19/24; abertas #161 e #162.
- 2026-09-01 — revalidação distinguiu falha parcial de parse do sucesso do job ETL/release; `gap_score` permaneceu 0.
- 2026-08-31 — cartão migrado para `ConsumerCard`; D1/D2/D3 reavaliados.
- 2026-08-30 — #155 preservou identidade DITEL apenas para descritores editoriais comprovados.
