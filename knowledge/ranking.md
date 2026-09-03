---
type: knowledge-policy
title: Consumer Surface Ranking
status: accepted
---

# Consumer Surface Ranking

As notas entram aqui somente após `SurfaceQualityAssessment` com evidência. Projetos ainda sem primeira avaliação completa permanecem fora da tabela principal; ausência de nota não é nota baixa.

| Consumer | Total | Faixa | D1 | D2 | D3 | UX | UI | Confiança | Avaliado em | Tendência |
|---|---:|---|---:|---:|---:|---:|---:|---:|---|---|
| franklinbaldo/cobogo | 24 | referência | 4 | 4 | 4 | 4 | 4 | 4 | 2026-09-03 | up |
| franklinbaldo/ovigia-redacao | 23 | referência | 4 | 4 | 3 | 4 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/causaganha | 23 | referência | 4 | 4 | 4 | 3 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/franklinbaldo.github.io | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-03 | baseline |
| franklinbaldo/quem-sao-eles | 23 | referência | 4 | 4 | 4 | 4 | 3 | 4 | 2026-09-03 | baseline |
| franklinbaldo/ficha | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/aleph-the-game | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/baliza | 21 | boa | 4 | 4 | 4 | 3 | 2 | 4 | 2026-09-02 | flat |
| franklinbaldo/sisprev | 21 | boa | 4 | 4 | 4 | 3 | 3 | 3 | 2026-09-03 | baseline |
| franklinbaldo/astronauta | 20 | boa | 4 | 4 | 4 | 3 | 2 | 3 | 2026-09-03 | baseline |
| franklinbaldo/intuit | 20 | boa | 4 | 3 | 3 | 3 | 3 | 4 | 2026-09-02 | flat |
| franklinbaldo/leizilla | 20 | boa | 4 | 4 | 4 | 3 | 2 | 3 | 2026-09-03 | up |

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Projetos `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, qualidade do backend ou importância estratégica. Ele mede somente a qualidade da interface pública sob o modelo Cobogó. A soma nunca substitui a leitura das dimensões.

O próprio Cobogó passa a **24/24** depois da #454 transformar acessibilidade em contrato verificável. As seis rotas públicas foram exercitadas com navegador real, axe, navegação por `Tab` e foco perceptível; a mesma verificação passou na branch e novamente no commit `9d656e45...` que entrou em `main`. O Pages `33799935642` publicou esse mesmo commit e a observação posterior à publicação também passou. A nota máxima descreve o escopo observado, não uma afirmação de perfeição universal.

O Leizilla permanece em 20/24 depois da #163 separar falha de acesso de ausência do acervo. O Sisprev permanece em 21/24 depois da #159 eliminar rolagem horizontal global no relatório móvel. O Aleph permanece em 22/24. O Astronauta permanece em 20/24 com a #43 aberta para largura global no celular. Quem São Eles? e o blog permanecem em 23/24. A Ficha permanece em 22/24. O Baliza permanece em 21/24 enquanto a verificação publicada depende do fato novo registrado na #694.
