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
| franklinbaldo/astronauta | 24 | referência | 4 | 4 | 4 | 4 | 4 | 4 | 2026-09-04 | up |
| franklinbaldo/ovigia-redacao | 23 | referência | 4 | 4 | 3 | 4 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/causaganha | 23 | referência | 4 | 4 | 4 | 3 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/quem-sao-eles | 23 | referência | 4 | 4 | 4 | 4 | 3 | 4 | 2026-09-04 | flat |
| franklinbaldo/ficha | 23 | referência | 4 | 4 | 4 | 3 | 4 | 4 | 2026-09-04 | up |
| franklinbaldo/franklinbaldo.github.io | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-03 | baseline |
| franklinbaldo/aleph-the-game | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/sisprev | 22 | referência | 4 | 4 | 4 | 3 | 3 | 4 | 2026-09-03 | up |
| franklinbaldo/leizilla | 21 | boa | 4 | 4 | 4 | 3 | 3 | 3 | 2026-09-04 | up |
| franklinbaldo/intuit | 20 | boa | 4 | 3 | 3 | 3 | 3 | 4 | 2026-09-04 | flat |
| franklinbaldo/baliza | 20 | boa | 4 | 4 | 4 | 3 | 2 | 3 | 2026-09-04 | down |

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Projetos `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, qualidade do backend ou importância estratégica. Ele mede somente a qualidade da interface pública sob o modelo Cobogó. A soma nunca substitui a leitura das dimensões.

O próprio Cobogó permanece em **24/24** depois da #454 transformar acessibilidade em contrato verificável. A nota máxima descreve o escopo observado, não uma afirmação de perfeição universal.

O Astronauta permanece em **24/24** depois da #45 transformar a antiga falta de comprovação de Confiança em teste reproduzível no runtime real de `main`.

A Ficha sobe para **23/24** depois da #241. O commit `73c4696479dcc39dab7c3afe5c9e74b05dc4808d` foi publicado pela execução `33861297403`; depois do deploy, Chromium abriu a URL pública e o artifact `9932248070` registrou zero violações sérias ou críticas do axe, sete de sete controles visíveis alcançados por teclado, nenhum controle ausente e zero passos sem indicador perceptível de foco. Confiança sobe para 4. UX permanece 3 porque a observação ainda não percorre uma jornada completa de consulta, resultado e exploração de vínculos.

O Sisprev permanece em **22/24** depois da #160 aplicar o mesmo princípio de acessibilidade a uma interface administrativa e documental. Confiança é 4 porque a prova foi repetida em `main` e novamente contra a URL pública depois da publicação; UX e UI permanecem em 3 porque os fluxos densos além de home/relatório ainda não tiveram observação equivalente.

O Leizilla permanece em **21/24** depois da #164. UI é 3; UX e Confiança permanecem em 3 porque a mudança não amplia a observação do fluxo completo nem prova teclado, foco e semântica acessível.

O Intuit permanece em **20/24**, com Confiança 4 e D2, D3, UX e UI em 3.

O Baliza permanece em **20/24**. A correção visual está em `main`, mas a publicação continua condicionada ao problema operacional registrado no repositório dono; sem fato novo, não houve repetição estéril.

O Quem São Eles? permanece em **23/24**; a rota PEP já foi observada diretamente depois da publicação, mas UI continua 3 porque a prova profunda permanece concentrada nessa superfície.

O Aleph permanece em 22/24. O blog permanece em 23/24.
