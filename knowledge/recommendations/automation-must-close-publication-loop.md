---
type: OpinionatedRecommendation
slug: automation-must-close-publication-loop
maturity: validated
problem: pipeline pode atualizar artifact no repositório sem atualizar a superfície que o apresenta, criando divergência silenciosa
validated_in: [franklinbaldo/quem-sao-eles]
---

# Automação de dados deve fechar o loop de publicação

## Posição

Quando uma superfície deriva seu estado de artifacts produzidos automaticamente, a automação deve chegar causalmente até o build/deploy/capture necessário para tornar o novo artifact público, ou declarar explicitamente que publicação é manual.

## Racional

“Pipeline verde” não significa “site atualizado”. Separar geração e publicação sem contrato causal cria freshness falsa.

## Contrato

O caminho deve permitir provar `fonte → artifact → estado versionado → publicação → evidência`. Cada etapa pode usar mecanismo próprio; o requisito é causalidade observável e falha legível.

## Critério observável

Um novo artifact que deve aparecer na superfície provoca ou agenda explicitamente a publicação correspondente, e a evidência pós-deploy aponta para o estado que contém esse artifact.

## Escape hatch

Fluxos deliberadamente editoriais/manuais devem declarar a fronteira e não prometer atualização automática.

## Evidência

`franklinbaldo/quem-sao-eles`: o refresh PEP passou a disparar explicitamente Pages e capture depois que foi observado que pushes via `GITHUB_TOKEN` não criavam novos workflow runs.

## Falsificação

Se acoplamento direto entre geração e deploy for operacionalmente inadequado, usar fila/evento/agendamento causal equivalente; o default é fechar o loop, não impor uma tecnologia.
