---
type: SurfaceQualityAssessment
repo: franklinbaldo/ficha
date: 2026-09-02
commit: ca67d1c15fd60e02e574d6a429a5686b0bded7d4
deploy: https://github.com/franklinbaldo/ficha/actions/runs/33601434385
capture: artifact:9833746642
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 2
  ui: 1
  trust: 3
total: 18
band: good
blockers: []
trend: flat
---

# Ficha — Surface Quality Assessment

## Veredito

**18/24 — boa, com uma dívida visual forte escondida pela soma.** Ficha é exemplar em clareza factual, proveniência e autonomia dos artefatos, mas a captura estreita revela um defeito concreto na tarefa principal: o botão `Buscar` ultrapassa a borda direita em 390×844. O ranking não deve deixar o total apagar o `UI: 1/4`.

## Clareza / D1

**4/4.** A home diz diretamente `Entenda uma empresa e suas conexões públicas`, explica a origem CNPJ/Receita Federal e coloca a busca como ação principal. A relação tarefa → campo → ação é inequívoca no desktop.

Gap: nenhum de conteúdo. A responsividade da ação está tratada em UI/UX.

## Explicabilidade / D2

**4/4.** A própria superfície expõe origem, competência, preservação, verificação e estado. O leitor consegue perceber que o site consulta dados públicos preservados e verificáveis, em vez de uma base opaca do frontend.

Gap: nenhum material observado.

## Autonomia / D3

**4/4.** `Levar a base` e `Abrir manifest.json` tornam o contrato reutilizável fora da interface; o card e o ProjectProfile confirmam snapshots preservados e checksums públicos. O caminho independente é parte visível da home, não documentação escondida.

Gap: nenhum material observado.

## UX

**2/4.** O fluxo é curto e a arquitetura de informação é boa, mas em 390×844 a ação primária perde parte da área visível. Além disso, no estado `remote-data-unavailable`, a superfície mostra uma mensagem técnica longa de transporte; ela informa o problema, mas não oferece recuperação legível para leitor comum.

Gap: o CTA parcialmente cortado reduz a qualidade da tarefa principal. Issue: `franklinbaldo/ficha#227`.

## UI

**1/4.** Desktop preserva hierarquia compacta, bom ritmo entre busca, proveniência e caminhos `Consultar aqui`/`Levar a base`. Em 390×844, porém, o campo + botão não reflowam dentro da largura: `Buscar` aparece cortado na borda direita. Como o defeito atinge o controle primário, a dimensão é fraca apesar do restante da composição ser coerente.

Gap: corrigir containment/reflow do controle de busca sem uniformizar a identidade local.

## Confiança

**3/4.** Proveniência e integridade são muito fortes e o deploy do landing `ca67d1c…` terminou com sucesso. O artifact `9833746642` liga a observação visual ao mesmo conteúdo de superfície — a #226 alterou somente o script de captura — e registra desktop+narrow. A nota não é 4 porque o estado de captura expõe erro técnico cru de rede e a captura pós-merge automática não existe no workflow atual.

Gap: nenhum que justifique segundo PR nesta rodada; a limitação de captura pós-merge permanece registrada no RoundReport.

## Blockers

nenhum blocker de dimensão 0. O overflow estreito é dívida material, mas não torna a página inteira quebrada.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — `stable`; #226 tornou a dívida estreita observável.
- `primary-action-viewport-containment` — `opinionated`; formulada nesta rodada a partir da evidência negativa, ainda sem aplicação bem-sucedida.

## Issues derivadas

- `franklinbaldo/ficha#227` — manter campo e botão `Buscar` integralmente dentro do viewport estreito.

## O que o Cobogó deve aprender deste consumer

Ficha confirma que D1/D2/D3 fortes podem coexistir com dívida séria de UI. O ranking de seis dimensões é útil justamente porque impede `gap_score: 0` de encerrar a crítica de superfície cedo demais.
