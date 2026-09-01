---
type: OpinionatedRecommendation
slug: provenance-freshness-visible
maturity: validated
problem: superfícies de dados podem parecer atuais e confiáveis sem revelar origem, competência ou artifact realmente usado
validated_in: [franklinbaldo/quem-sao-eles]
---

# Provenance e freshness devem ser visíveis

## Posição

Quando uma superfície usa dados versionados, snapshots ou artifacts externos, o Cobogó recomenda que a própria superfície revele, perto da tarefa relevante, a origem, a competência/freshness e o artifact efetivamente consultado. Essas informações não devem existir apenas no README ou no pipeline.

## Racional

Freshness e provenance fazem parte da UX: alteram a interpretação do resultado. O leitor não deveria precisar conhecer a arquitetura do repositório para descobrir de quando são os dados ou de onde vieram.

## Contrato

A superfície deve derivar as informações do artifact real usado no build/runtime sempre que possível. Não deve afirmar “mais recente” sem prova. Links para download ou origem devem apontar para recursos reais e reproduzíveis.

## Critério observável

Um leitor sem contexto consegue identificar na rota relevante a fonte, a competência/data e o arquivo ou artifact usado, e esses valores correspondem ao estado publicado.

## Escape hatch

Conteúdo sem noção material de freshness ou sem artifact versionado não precisa exibir metadata artificial. A recomendação existe para informação cuja interpretação depende do estado temporal/proveniência.

## Evidência

`franklinbaldo/quem-sao-eles`, rota `/pep`: a superfície publica origem CGU/Portal da Transparência, competência e Parquet correspondente; o pipeline agora preserva também o snapshot no Internet Archive com provenance verificável.

## Falsificação

Se a metadata próxima da tarefa aumentar ruído sem ajudar interpretação em classes relevantes de consumer, o contrato deve migrar para progressive disclosure em vez de exposição direta. A informação, porém, continua precisando ser alcançável e ligada ao artifact real.
