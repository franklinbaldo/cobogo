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
| franklinbaldo/causaganha | 24 | referência | 4 | 4 | 4 | 4 | 4 | 4 | 2026-09-04 | up |
| franklinbaldo/ovigia-redacao | 23 | referência | 4 | 4 | 3 | 4 | 4 | 4 | 2026-09-02 | flat |
| franklinbaldo/quem-sao-eles | 23 | referência | 4 | 4 | 4 | 4 | 3 | 4 | 2026-09-04 | flat |
| franklinbaldo/ficha | 23 | referência | 4 | 4 | 4 | 3 | 4 | 4 | 2026-09-04 | up |
| franklinbaldo/aleph-the-game | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-05 | up |
| franklinbaldo/franklinbaldo.github.io | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-03 | baseline |
| franklinbaldo/sisprev | 22 | referência | 4 | 4 | 4 | 3 | 3 | 4 | 2026-09-03 | up |
| franklinbaldo/leizilla | 22 | referência | 4 | 4 | 4 | 3 | 3 | 4 | 2026-09-04 | up |
| franklinbaldo/intuit | 21 | boa | 4 | 4 | 3 | 3 | 3 | 4 | 2026-09-05 | up |
| franklinbaldo/baliza | 20 | boa | 4 | 4 | 4 | 3 | 2 | 3 | 2026-09-04 | down |

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Projetos `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, qualidade do backend ou importância estratégica. Ele mede somente a qualidade da interface pública sob o modelo Cobogó. A soma nunca substitui a leitura das dimensões.

O próprio Cobogó permanece em **24/24** depois da #454 transformar acessibilidade em contrato verificável. A nota máxima descreve o escopo observado, não uma afirmação de perfeição universal.

O Astronauta permanece em **24/24** depois da #45 transformar a antiga falta de comprovação de Confiança em teste reproduzível no runtime real de `main`.

O CausaGanha permanece em **24/24** depois da #1097 remover a disputa entre duas navegações principais e da #1103 corrigir a legibilidade do rodapé estreito, ambas publicadas e observadas.

A Ficha permanece em **23/24** depois da #241. Confiança é 4 porque axe, teclado e foco também foram comprovados depois da publicação; UX permanece 3 porque a observação ainda não percorre uma jornada completa de consulta, resultado e exploração de vínculos.

O Sisprev permanece em **22/24** depois da #160 aplicar o mesmo princípio de acessibilidade a uma interface administrativa e documental. Confiança é 4; UX e UI permanecem 3 porque os fluxos densos além de home/relatório ainda não tiveram observação equivalente.

O Leizilla permanece em **22/24** depois da #165. Confiança é 4; UX e UI permanecem 3 porque a jornada completa e a variedade de páginas ainda não têm observação equivalente.

O Intuit passa para **21/24** depois da #35. Explicabilidade sobe de 3 para 4 porque a própria home agora permite formar o modelo mental essencial e proporcional ao produto: preview local no navegador, ausência de backend próprio de renderização e compartilhamento do estado por URL ou Gist. A mudança foi protegida por teste, entrou como `98a53004f32ab7f89163fa8abbacd2863dcefdb1`, e Test, observação visual e Pages passaram novamente nesse commit. O pacote posterior à publicação `9966339875` registrou a mesma rota em 1440×900 e 390×844. Autonomia, UX e UI continuam em 3; nenhuma delas sobe apenas porque D2 foi corrigida.

O Baliza permanece em **20/24**. A correção visual está em `main`, mas a publicação continua condicionada ao problema operacional registrado no repositório dono; a execução mais recente repetiu a mesma falha e não criou condição nova para avançar.

O Quem São Eles? permanece em **23/24**; a rota PEP já foi observada diretamente depois da publicação, mas UI continua 3 porque a prova profunda permanece concentrada nessa superfície.

O Aleph sobe de **22 para 23/24** depois da #11. UX passa de 3 para 4 porque a falha generativa e o retry agora são exercitados no navegador: o erro não vira narrativa, a intenção original é preservada e a tentativa seguinte não duplica a ação do jogador. Confiança permanece 3 porque o link público do AI Studio ainda não prova qual commit está implantado. O blog permanece em 23/24.
