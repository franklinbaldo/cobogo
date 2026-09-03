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

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Projetos `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, qualidade do backend ou importância estratégica. Ele mede somente a qualidade da superfície pública sob o modelo Cobogó. A soma nunca substitui a leitura das dimensões.

A Ficha passa a 22/24 porque a #237 transformou a composição publicada: a página deixa de depender de um cartão genérico, preserva a consulta na primeira tela em desktop e celular e usa a própria tese de fichário público para construir hierarquia. Por isso UI sobe de 3 para 4. UX permanece 3 porque a captura automatizada atual observa o estado de indisponibilidade remota, não uma jornada completa de consulta. Confiança permanece 3 enquanto a issue #228 continuar aberta.

O Baliza permanece em 21/24 com UI 2/4 enquanto a correção já incorporada a `main` não puder ser verificada na superfície publicada por causa do deploy bloqueado em #694. O Aleph permanece em 21/24 com UI 3/4 por causa da data truncada no celular. O Vigia e CausaGanha estarem na faixa de referência não implica copiar a apresentação deles para outros projetos; a própria Ficha agora reforça que uma solução de referência pode ter identidade visual inteiramente local.
