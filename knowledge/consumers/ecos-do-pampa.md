---
type: ConsumerCard
repo: franklinbaldo/ecos-do-pampa
site: https://franklinbaldo.github.io/ecos-do-pampa/
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Ecos do Pampa

## Identidade local

Preservar a publicação editorial gaúcha/fronteiriça e o narrador **Aparício Funes** como identidade própria do produto. Nome, voz, geografia, tipografia e vocabulário do modo de leitura não são papéis do design system e não devem ser upstreamados como skin genérica.

## D1 — no site

Na última verificação substantiva do consumer, em 2026-08-16, a superfície publicada oferecia home com destaque do texto mais recente + arquivo cronológico, rotas de artigo, tags, RSS, `/sobre` e um modo de leitura persistente. A PR #31 já havia sincronizado o estado visual desse modo com `aria-pressed`.

Gap `[fato]`: nenhum gap material do leitor foi estabelecido nessa verificação. A ausência de captura controlada não é uma capacidade que o leitor precise perceber; é dívida de evidência da rotina.

Revalidação atual: bloqueada em 2026-08-31 porque o repositório canônico `franklinbaldo/ecos-do-pampa` não pôde ser recuperado pelo conector nem localizado nas buscas de repositório disponíveis. Isso não prova remoção/rename/privacidade e, portanto, não altera sozinho o estado factual da superfície.

## D2 — por trás

O `ProjectProfile` vigente descreve o projeto como publicação editorial de longa leitura narrada por Aparício Funes, com conteúdo Astro estático, Content Collections, Pages, tags/RSS e preferência de leitura persistida client-side. A relação principal é publicação → leitura → recuperação de contexto → continuidade pelo arquivo.

Gap `[fato]`: nenhum gap material estava estabelecido na última verificação. O `/sobre` explicava Aparício como persona artificial e a finalidade editorial. O estado atual do repo não pôde ser revalidado nesta rodada; workspace #24 é a autoridade para resolver repo/status canônicos sem inferência do Cobogó.

## D3 — por conta própria

Na evidência de 2026-08-16, RSS e o repositório público eram os artefatos reutilizáveis explícitos. Não havia dataset/API/release autônoma cuja existência estivesse escondida pela superfície.

Gap `[fato]`: nenhum material conhecido. A rotina não inventa artefatos adicionais enquanto o repositório atual não puder ser recuperado.

## Capacidades de superfície

- GitHub Pages / deploy Astro — `last_verified: 2026-08-16`; runs pós-merge `31943269312` e `31943387862` haviam concluído com sucesso. Revalidação 2026-08-31 bloqueada pela indisponibilidade do repo no conector.
- Build de produção em PR — `last_verified: 2026-08-16`, introduzido pela PR #29.
- Captura visual reproduzível — `last_verified: 2026-08-31`; nenhuma capacidade/captura controlada atual pôde ser exercitada porque a fonte canônica não foi recuperada.
- Preservação — sem capacidade específica registrada além do histórico Git/Pages; não inferida nesta rodada.

## O que este consumer faz melhor que o Cobogó

A evidência histórica sustenta uma relação editorial com identidade regional/persona forte sem transformar essa identidade em abstração compartilhada. Nenhuma nova entrada de `knowledge/` foi promovida nesta rodada porque não houve evidência renderizada nova.

## Padrões do Cobogó em uso

Nenhum uso factual de package/capability Cobogó registrado. O consumer permanece candidato; parentesco editorial não equivale a adoção.

## Histórico

- 2026-08-31 — card migrado para `ConsumerCard`; falta de captura reclassificada como dívida de evidência, não gap D1/D2/D3; revalidação do repo encaminhada ao workspace #24.
- 2026-08-16 — PR #31 mergeada com `aria-pressed` sincronizado ao modo de leitura e Pages pós-merge verde.
- 2026-08-16 — PR #29 adicionou build Astro de produção em PR e Pages pós-merge verde.
