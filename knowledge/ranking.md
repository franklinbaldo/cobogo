---
type: knowledge-policy
title: Consumer Surface Ranking
status: accepted
---

# Consumer Surface Ranking

As notas entram aqui somente após `SurfaceQualityAssessment` com evidência. Projetos ainda sem primeira avaliação completa permanecem fora da tabela principal; ausência de nota não é nota baixa.

| Consumer | Total | Faixa | D1 | D2 | D3 | UX | UI | Confiança | Avaliado em | Tendência |
|---|---:|---|---:|---:|---:|---:|---:|---:|---|---|
| franklinbaldo/ovigia-redacao | 23 | referência | 4 | 4 | 3 | 4 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/causaganha | 23 | referência | 4 | 4 | 4 | 3 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/ficha | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/baliza | 21 | boa | 4 | 4 | 4 | 3 | 2 | 4 | 2026-09-02 | flat |
| franklinbaldo/aleph-the-game | 21 | boa | 4 | 4 | 4 | 3 | 3 | 3 | 2026-09-02 | up |
| franklinbaldo/intuit | 20 | boa | 4 | 3 | 3 | 3 | 3 | 4 | 2026-09-02 | flat |
| franklinbaldo/leizilla | 19 | boa | 4 | 4 | 4 | 3 | 2 | 2 | 2026-09-03 | baseline |

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Projetos `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, qualidade do backend ou importância estratégica. Ele mede somente a qualidade da superfície pública sob o modelo Cobogó. A soma nunca substitui a leitura das dimensões.

O Leizilla entra pela primeira vez com 19/24. Clareza, explicabilidade e autonomia são referências; a dívida visual está nos filtros de `390×844`, que perdem o texto necessário para distinguir ente e tipo de norma. Confiança fica em 2/4 porque, quando o Parquet falha ao carregar, a superfície afirma que Rondônia v0 ainda não foi publicado, embora o arquivo público exista. As issues #162 e #161 registram respectivamente essas duas diferenças concretas.

A Ficha permanece em 22/24 depois da #237. O Baliza permanece em 21/24 com UI 2/4 enquanto a correção já incorporada a `main` não puder ser verificada na superfície publicada por causa do deploy bloqueado em #694. O Aleph permanece em 21/24 com UI 3/4 por causa da data truncada no celular. O Vigia e CausaGanha estarem na faixa de referência não implica copiar a apresentação deles para outros projetos.
