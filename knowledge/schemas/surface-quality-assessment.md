---
type: knowledge-policy
title: SurfaceQualityAssessment schema
status: accepted
---

# SurfaceQualityAssessment schema

```yaml
---
type: SurfaceQualityAssessment
repo: owner/name
date: 2026-09-01
commit: sha
deploy: url-or-id
capture: url-or-artifact
scores:
  clarity: 0
  explainability: 0
  autonomy: 0
  ux: 0
  ui: 0
  trust: 0
total: 0
band: critical | weak | average | good | reference
blockers: []
trend: down | flat | up
---
```

Seções obrigatórias:

- `## Veredito` — leitura curta da qualidade da superfície.
- `## Clareza / D1` — nota, evidência, gap e recomendação.
- `## Explicabilidade / D2` — nota, evidência, gap e recomendação.
- `## Autonomia / D3` — nota, evidência, gap e recomendação.
- `## UX` — nota, evidência, gap e recomendação.
- `## UI` — nota, evidência, gap e recomendação.
- `## Confiança` — nota, evidência, gap e recomendação.
- `## Blockers` — dimensões 0 e qualquer falha material que impeça/engane a tarefa principal, ou `nenhum`.
- `## Recomendações Cobogó` — defaults aplicáveis, com maturidade.
- `## Issues derivadas` — links ou `nenhuma`.
- `## O que o Cobogó deve aprender deste consumer` — solução local superior ou `nenhum`.

Cada nota precisa apontar evidência observável. A soma das seis notas deve ser igual a `total`.

A faixa base é derivada do total: 0–7 crítica; 8–12 fraca; 13–17 média; 18–21 boa; 22–24 referência. Guardrail: qualquer dimensão `0` limita a faixa final a `critical`; qualquer blocker material precisa aparecer explicitamente e impede classificação silenciosa como saudável. Dimensão não aplicável deve ser explicada; uma extensão futura do schema deve representar N/A sem convertê-la artificialmente em zero.
