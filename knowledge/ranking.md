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
| franklinbaldo/franklinbaldo.github.io | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-03 | baseline |
| franklinbaldo/quem-sao-eles | 23 | referência | 4 | 4 | 4 | 4 | 3 | 4 | 2026-09-03 | baseline |
| franklinbaldo/ficha | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/aleph-the-game | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/baliza | 21 | boa | 4 | 4 | 4 | 3 | 2 | 4 | 2026-09-02 | flat |
| franklinbaldo/astronauta | 20 | boa | 4 | 4 | 4 | 3 | 2 | 3 | 2026-09-03 | baseline |
| franklinbaldo/intuit | 20 | boa | 4 | 3 | 3 | 3 | 3 | 4 | 2026-09-02 | flat |
| franklinbaldo/leizilla | 19 | boa | 4 | 4 | 4 | 3 | 2 | 2 | 2026-09-03 | baseline |

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Projetos `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, qualidade do backend ou importância estratégica. Ele mede somente a qualidade da interface pública sob o modelo Cobogó. A soma nunca substitui a leitura das dimensões.

O Aleph sobe de **21 para 22/24** depois da #9 corrigir a data narrativa truncada em `390×844` e a validação encontrar também uma rolagem horizontal global causada pelo botão de narração posicionado fora da coluna. A execução de navegador em `main` comprova data inteira e largura do documento igual à janela em desktop/celular, com movimento normal e reduzido. UI sobe de 3 para 4; UX e Confiança permanecem 3 pelos limites já documentados da observação generativa e da publicação externa no AI Studio.

O Astronauta permanece em **20/24** depois da #42 permitir observar o admin real em leitura e escrita, desktop e celular, no commit que entrou em `main`. Em `390×844`, `/types/Note` e `/concepts/edit/note-01` ainda alargam o documento; a #43 registra o critério de correção.

Quem São Eles? permanece em 23/24 depois da #24 completar a prova de `/pep` em desktop e celular no mesmo estado funcional. O blog permanece em 23/24. O Leizilla permanece em 19/24, com as dívidas #161 e #162. A Ficha permanece em 22/24. O Baliza permanece em 21/24 com UI 2/4 enquanto a correção já incorporada a `main` não puder ser verificada na página publicada por causa do impedimento de deploy em #694. O Vigia e CausaGanha estarem na faixa de referência não implica copiar a apresentação deles para outros projetos.
