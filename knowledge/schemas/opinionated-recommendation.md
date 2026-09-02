---
type: knowledge-policy
title: OpinionatedRecommendation schema
status: accepted
---

# OpinionatedRecommendation schema

```yaml
---
type: OpinionatedRecommendation
slug: machine-readable-slug
maturity: opinionated | validated | stable | retired
problem: short factual problem statement
validated_in: []
---
```

Seções obrigatórias:

- `## Posição` — o que o Cobogó recomenda como default.
- `## Racional` — por que essa é a posição atual.
- `## Contrato` — comportamento/semântica esperados; implementação de referência quando existir.
- `## Critério observável` — como saber se funcionou.
- `## Escape hatch` — quando e por que um consumer pode divergir.
- `## Evidência` — consumers/capturas quando houver.
- `## Falsificação` — que evidência faria o Cobogó mudar ou retirar a recomendação.

Uma recomendação pode nascer como `opinionated` sem consumers prévios. Só pode ser `validated` após evidência real em pelo menos um consumer e `stable` após convergência em pelo menos dois.
