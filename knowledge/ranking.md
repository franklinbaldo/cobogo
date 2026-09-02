---
type: knowledge-policy
title: Consumer Surface Ranking
status: accepted
---

# Consumer Surface Ranking

As notas entram aqui somente após `SurfaceQualityAssessment` com evidência. Consumers ainda sem baseline permanecem fora da tabela principal; ausência de nota não é nota baixa.

| Consumer | Total | Faixa | D1 | D2 | D3 | UX | UI | Confiança | Avaliado em | Tendência |
|---|---:|---|---:|---:|---:|---:|---:|---:|---|---|
| franklinbaldo/ovigia-redacao | 23 | referência | 4 | 4 | 3 | 4 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/causaganha | 23 | referência | 4 | 4 | 4 | 3 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/baliza | 21 | boa | 4 | 4 | 4 | 3 | 2 | 4 | 2026-09-02 | flat |
| franklinbaldo/intuit | 20 | boa | 4 | 3 | 3 | 3 | 3 | 4 | 2026-09-02 | flat |
| franklinbaldo/ficha | 18 | boa | 4 | 4 | 4 | 2 | 1 | 3 | 2026-09-02 | flat |

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Consumers `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, maturidade do backend ou importância estratégica. Ele mede somente qualidade da superfície pública sob o modelo Cobogó. A soma nunca substitui leitura dimensional: `franklinbaldo/ficha` permanece com total na faixa boa, mas `UI: 1/4` é dívida explícita enquanto o after pós-merge não for recapturado; `franklinbaldo/baliza` entra em `21/24`, mas `UI: 2/4` permanece dívida material em `/publicacoes`; `franklinbaldo/causaganha` entra em `23/24` depois de fechar a dívida concreta de discoverability da navegação mobile, mas preserva `UX: 3/4` pela coexistência de chrome global e interno em algumas superfícies funcionais. O Vigia e CausaGanha estarem na faixa `referência` não implica copiar a apresentação de nenhum deles para outros consumers.
