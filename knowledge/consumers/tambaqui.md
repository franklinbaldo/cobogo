---
type: ConsumerCard
repo: franklinbaldo/tambaqui
site: https://franklinbaldo.github.io/tambaqui/
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Tambaqui

## Identidade local

Calculadora pública enxuta para atualização monetária sob a EC 113/2021. Preservar a relação direta entre datas, valor, cálculo e resultado, a referência jurídica/TJSP e a apresentação utilitária local. Não transformar a calculadora em dashboard nem substituir sua linguagem por uma skin do Cobogó.

## D1 — no site

Na última evidência renderizada verificável, de 2026-08-17, a pessoa podia escolher datas e valor, calcular com os fatores versionados e receber erro textual quando o fator solicitado não existia. A superfície também expunha a cobertura temporal disponível.

**Gap [fato]:** nenhum gap D1 material pode ser afirmado nesta rodada. O repositório canônico apontado pelo corpus atualmente retorna 404 e não aparece entre os repositórios acessíveis, portanto o estado de `main` e a superfície publicada não puderam ser reconciliados de novo sem inventar a causa desse drift.

## D2 — por trás

A última evidência canônica registrava `gerar_tabelas.py` extraindo a tabela EC 113/2021 do PDF do TJSP para JSON/CSV versionados e a aplicação consumindo o JSON, com falha explícita para fator ausente. O refresh automático era uma questão operacional separada: workflow configurado não equivalia a atualização fresca comprovada.

**Gap [fato]:** nenhum gap D2 de superfície demonstrado. A decisão sobre refresh permanece operacional e, nesta rodada, nem repo atual nem `ProjectProfile` correspondente estavam disponíveis para revalidação. `franklinbaldo/workspace#28` é a autoridade para reconciliar o projeto canônico.

## D3 — por conta própria

Na última evidência verificável, a superfície tornava recuperáveis tanto o PDF de autoridade do TJSP quanto o JSON exato usado pela calculadora, permitindo inspeção e reutilização independente do artefato publicado.

**Gap [fato]:** nenhum gap D3 material demonstrado nesta rodada; a disponibilidade atual desses artefatos não foi reatestada porque a fonte canônica do projeto precisa ser reconciliada primeiro.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-08-17`. Histórico então comprovava Pages configurado e superfície pública; não revalidado em 2026-08-31 porque o repo canônico agora retorna 404.
- **Captura visual** — `last_verified: 2026-08-17`. PR #9 / run `32044104176` produziu `tambaqui-browser-proof`; o mesmo browser/static workflow passou em `main` no run `32044147192`, commit `fbe0c07db8cee6967967796a6e4a5531890985f1`.
- **Smoke tests** — `last_verified: 2026-08-17`. A prova Chromium carregava o JSON real, exercitava cálculo válido em `2023-10` e erro anunciado para `2024-01`.
- **Preservação** — `last_verified: 2026-08-17`. Nenhum Save Page Now registrado.
- **Freshness operacional** — `last_verified: 2026-08-17`. O workflow histórico `daily_script_run.yml` estava `disabled_inactivity`; dataset presente, workflow configurado e atualização fresca são evidências distintas.

## O que este consumer faz melhor que o Cobogó

A evidência de 2026-08-17 demonstra uma separação particularmente limpa entre autoridade upstream, artefato versionado, cobertura temporal e erro de dado ausente. Esse aprendizado já alimenta a relação de proveniência/freshness do corpus; esta rodada não adicionou evidência nova suficiente para outro conceito.

## Padrões do Cobogó em uso

- Proveniência/freshness como relação recuperável, sem transformar existência do artefato em afirmação de updater saudável.
- Falha de dado externo distinta de resultado legítimo.
- Parentesco sem uniformidade: nenhuma adoção de código Cobogó é inferida da revisão.

## Histórico

- 2026-08-31 — card migrado para `ConsumerCard`; repo canônico e `ProjectProfile` não puderam ser revalidados; `workspace#28` aberto para reconciliar autoridade, sem inventar rename/remoção.
- 2026-08-17 — browser proof real em Chromium preservou cálculo válido, erro de fator ausente, fonte e cobertura temporal.
- 2026-08-17 — superfície passou a expor PDF TJSP, JSON exato e intervalo derivado do dataset.
- 2026-08-17 — calculadora deixou placeholder `1.1` e voltou a consumir os fatores versionados com erro explícito.
