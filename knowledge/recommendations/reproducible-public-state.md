---
type: OpinionatedRecommendation
slug: reproducible-public-state
maturity: validated
problem: uma captura ou página pode afirmar um estado sem fornecer caminho para reconciliá-lo com commit, deploy e artifact
validated_in: [franklinbaldo/quem-sao-eles]
---

# Estado público material deve ser reconciliável

## Posição

Quando a interpretação de uma superfície depende de versão de dados ou deploy, o Cobogó recomenda que a cadeia de evidência permita reconciliar rota, captura, deploy/commit e artifact relevante.

## Racional

Sem endereçamento de estado, screenshots viram evidência órfã e freshness não é auditável.

## Contrato

Capturas e assessments registram SHA/deploy; artifacts versionados têm identidade determinística ou provenance; o site não precisa expor SHA ao leitor comum, mas a evidência de qualidade precisa conseguir reconstruir o estado.

## Critério observável

Partindo de um assessment/capture, um mantenedor consegue identificar qual estado versionado produziu a superfície e qual artifact material foi usado.

## Escape hatch

Conteúdo estático sem dependência material de versão pode usar evidência mais simples.

## Evidência

`franklinbaldo/quem-sao-eles`: capture e Pages são associados ao head de `main`, e o Parquet PEP é identificado por competência com checksum/provenance no arquivo preservado.

## Falsificação

Se um consumer não puder expor identidade de artifact por razões legítimas, registrar mecanismo equivalente de reconciliação sem vazar informação sensível.
