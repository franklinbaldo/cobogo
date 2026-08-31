---
type: ConsumerCard
repo: franklinbaldo/undogmatic
site: https://github.com/franklinbaldo/undogmatic
status: active
last_reviewed: 2026-08-31
gap_score: 1
---

# Undogmatic

## Identidade local

Preservar o caráter de POC crítica de pesquisa jurídica, a revisão humana obrigatória e a separação entre medida canônica e diagnóstico experimental. Não transformar a ferramenta em dashboard de autoridade, não apresentar mecanismo vetorial como verdade do produto e nunca expor credenciais/model-provider secrets em superfície ou evidência.

## D1 — no site

[fato] Não há deploy público verificado da UI humana. O repositório contém um app Gradio local em `apps/shame_heatmap/` que aceita texto, idioma, pesos α/δ e percentis de clipping e renderiza heatmap token-level.

Gap `[fato]`: nenhum gap D1 público verificável, porque não existe rota publicada confirmada. A ausência de deploy não é, por si, um gap de leitor-de-fora; é estado de distribuição/capacidade.

## D2 — por trás

[fato] O README raiz define a direção atual como LLM-first e declara `undogmatic.llm_scorer` como fonte de verdade do ShameScore, que retorna `shame_score`, `confidence` e `rationale`. O app Gradio, porém, usa `xlm-roberta-base`, bancos `embarrassing_style`/`professional_style`/`anti_values`/`values`, pesos α/δ e similaridade vetorial. O README do app informa que os bancos versionados são placeholders.

Gap `[fato]`: **material**. A própria UI ainda se apresenta como “ShameFeeling — Token Heatmap” e diz que a cor codifica similaridade à “shame direction”, sem informar na superfície que este é um diagnóstico vetorial experimental e não o ShameScore canônico LLM-first. A divergência está rastreada em `franklinbaldo/undogmatic#20`.

## D3 — por conta própria

[fato] O repositório publica código, datasets semente/controle, geração A/B, relatórios Markdown/CSV e comandos reproduzíveis para executar o experimento LLM-first. O README também liga documentação de visualização de direções como material complementar.

Gap `[fato]`: nenhum material adicional observado. O leitor consegue reproduzir o caminho canônico a partir do source checkout; não foi inferida API, release empacotada ou dataset público externo inexistente.

## Capacidades de superfície

- deploy público — `last_verified: 2026-08-31`: nenhum deploy público da UI Gradio foi localizado; o produto observado permanece local.
- CI — `last_verified: 2026-08-31`: CI está versionado, mas o `main` executável observado permanece em `f252a93e5ee4f64cfa1a53fc49f4e9ddb0864467`; nenhum gate novo de UI foi provado nesta rodada.
- captura visual — `last_verified: 2026-08-31`: nenhuma capacidade reproduzível de browser screenshot/capture da UI local foi localizada.
- smoke da UI — `last_verified: 2026-08-31`: não localizado como gate canônico dedicado; `undogmatic#20` já condiciona continuidade da UI a smoke/build/import apropriado.
- preservação — `last_verified: 2026-08-31`: nenhuma capacidade dedicada de Save Page Now aplicável à UI local foi localizada.

## O que este consumer faz melhor que o Cobogó

A separação necessária entre `medida canônica -> diagnóstico experimental -> explicação/confiança` continua sendo evidência conceitual útil para superfícies de pesquisa. Não foi promovida nesta rodada: há um único consumer e não existe captura before/after que satisfaça o gate de pattern.

## Padrões do Cobogó em uso

Nenhuma adoção de código/pattern compartilhado é reivindicada. O consumer permanece evidência de pressão para proveniência semântica e estados honestos de experimento.

## Histórico

- 2026-08-31 — card migrado para `ConsumerCard`; D2 classificado como gap material entre ShameScore LLM-first e heatmap vetorial local; intervenção bloqueada por ausência de captura reproduzível da UI.
- 2026-08-17 — `undogmatic#20` abriu a reconciliação do boundary entre scorer canônico e heatmap experimental.
- 2026-08-16 — primeira revisão Cobogó identificou a UI Gradio real e a divergência semântica; evidência source-only.
