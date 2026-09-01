---
type: OpinionatedRecommendation
slug: artifact-autonomy
maturity: opinionated
problem: projetos publicam artifacts reutilizáveis mas a superfície frequentemente não permite descobri-los, baixá-los ou entender como reutilizá-los
validated_in: []
---

# Artifacts públicos devem permitir autonomia

## Posição

Quando um consumer produz datasets, arquivos, APIs, releases ou outros artifacts públicos reutilizáveis, a superfície deve tornar pelo menos o artifact canônico descobrível e explicar o suficiente para que uma pessoa possa levá-lo consigo sem depender da UI proprietária do projeto.

## Racional

Em software de interesse público, a interface é uma forma de acesso, não a única forma legítima de uso. Um artifact real aumenta auditabilidade, reprodutibilidade e vida útil do trabalho.

## Contrato

A superfície aponta para o artifact real, formato e provenance/freshness relevantes. Exemplos de reutilização só são apresentados quando sustentados pelo repo; não se inventa API, schema ou comportamento.

## Critério observável

Um leitor consegue identificar e obter o artifact publicado e entende o mínimo necessário sobre origem/formato/competência para reutilizá-lo corretamente.

## Escape hatch

Consumers cujo produto não produz artifact reutilizável não precisam criar download artificial. Dados cuja redistribuição seja inadequada também ficam fora do default.

## Evidência

Nenhuma ainda registrada sob este novo contrato de maturidade. Casos existentes serão classificados no baseline.

## Falsificação

Se o artifact bruto for tecnicamente público mas inseguro ou enganoso sem contexto essencial, o Cobogó deve exigir esse contexto ou não recomendar exposição direta.
