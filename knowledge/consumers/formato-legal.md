---
type: ConsumerCard
repo: franklinbaldo/formatolegal
site: https://franklinbaldo.github.io/formatolegal/
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Formato Legal

## Identidade local

Preservar a ferramenta jurídica local, a legibilidade do documento, os presets visuais divergentes, a orientação A4, a voz do produto e as decisões próprias de PDF/print. Temas classic/ABNT/brutalist/playful, margens, tipografia e engine de PDF não são contratos do Cobogó e não devem ser uniformizados.

## D1 — no site

Na última verificação substantiva, em 2026-08-16, a aplicação oferecia autoria de texto jurídico com editor e preview simultâneos em telas largas e tabs semânticas editor/preview em telas estreitas, além de tema, print e exportação local.

Gap `[fato]`: nenhum gap material do leitor estava estabelecido nessa verificação. Os antigos `unmet_needs` de theme contract e estados de form/export descreviam pressão de design-system, não ausência comprovada de uma tarefa que a pessoa precisasse perceber na superfície.

Revalidação atual: bloqueada em 2026-08-31 porque o repositório canônico `franklinbaldo/formatolegal` não pôde ser recuperado pelo conector nem localizado na busca entre repositórios acessíveis. Isso não prova remoção, rename, transferência ou mudança de visibilidade.

## D2 — por trás

O `ProjectProfile` vigente descreve a relação fonte editada → consequência renderizada → inspeção/exportação, com processamento local, Astro client-side e o mesmo documento semântico alimentando preview, print e PDF. Print espera o render assíncrono mais recente antes de abrir a superfície de impressão; o caminho local de PDF usa PyMuPDF Story sobre o mesmo HTML/estilos.

Gap `[fato]`: nenhum material estava estabelecido na última verificação. O propósito e a fronteira local/remota estavam documentados no repo e no profile; o estado atual não pôde ser revalidado nesta rodada. `workspace#25` é a autoridade para resolver repo/status canônicos sem inferência do Cobogó.

## D3 — por conta própria

Na evidência de 2026-08-16, o source checkout permitia executar a aplicação localmente e o produto gerava print/PDF local a partir do documento renderizado. Não havia dataset, API pública ou release autônoma adicional cuja existência estivesse escondida pela superfície.

Gap `[fato]`: nenhum material conhecido. A rotina não inventa artefatos ou distribuição adicional enquanto o repositório atual não puder ser recuperado.

## Capacidades de superfície

- GitHub Pages / aplicação Astro client-side — `last_verified: 2026-08-16`; revalidação 2026-08-31 bloqueada pela indisponibilidade do repo canônico no conector.
- Preview responsivo editor/documento — `last_verified: 2026-08-16`; split-pane largo e tabs semânticas em telas estreitas.
- Print A4 + exportação/PDF local — `last_verified: 2026-08-16`; print aguardava render atual e PDF reutilizava o mesmo documento semântico.
- Captura visual reproduzível — `last_verified: 2026-08-31`; nenhuma captura atual pôde ser exercitada porque a fonte canônica não foi recuperada.
- Preservação — nenhum mecanismo adicional foi inferido nesta rodada além do histórico Git/Pages registrado anteriormente.

## O que este consumer faz melhor que o Cobogó

A evidência histórica sustenta duas relações já conhecidas pelo corpus: editor/preview sem obrigar split-pane e documento/print como projeções do mesmo conteúdo semântico. Nenhuma nova entrada de `knowledge/` foi criada nesta rodada porque não houve nova evidência renderizada ou revalidação do repo.

## Padrões do Cobogó em uso

Nenhuma adoção factual de package/capability Cobogó registrada. O consumer continua candidato e participa como evidência dos conceitos experimentais de editor/preview e document/print; isso não equivale a uso de código compartilhado.

## Histórico

- 2026-08-31 — card migrado para `ConsumerCard`; antigos `unmet_needs` reclassificados como pressão de design-system, não gaps D1/D2/D3; revalidação do repo encaminhada ao workspace #25.
- 2026-08-16 — revisão confirmou editor/preview responsivo, print sincronizado ao último render e PDF local sobre o mesmo documento semântico.
