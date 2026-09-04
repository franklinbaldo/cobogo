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
| franklinbaldo/quem-sao-eles | 23 | referência | 4 | 4 | 4 | 4 | 3 | 4 | 2026-09-03 | baseline |
| franklinbaldo/franklinbaldo.github.io | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-03 | baseline |
| franklinbaldo/astronauta | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/ficha | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/aleph-the-game | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/sisprev | 22 | referência | 4 | 4 | 4 | 3 | 3 | 4 | 2026-09-03 | up |
| franklinbaldo/baliza | 21 | boa | 4 | 4 | 4 | 3 | 2 | 4 | 2026-09-02 | flat |
| franklinbaldo/intuit | 20 | boa | 4 | 3 | 3 | 3 | 3 | 4 | 2026-09-02 | flat |
| franklinbaldo/leizilla | 20 | boa | 4 | 4 | 4 | 3 | 2 | 3 | 2026-09-03 | up |

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Projetos `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, qualidade do backend ou importância estratégica. Ele mede somente a qualidade da interface pública sob o modelo Cobogó. A soma nunca substitui a leitura das dimensões.

O próprio Cobogó permanece em **24/24** depois da #454 transformar acessibilidade em contrato verificável. A nota máxima descreve o escopo observado, não uma afirmação de perfeição universal.

O Sisprev permanece em **22/24** depois da #160 aplicar o mesmo princípio de acessibilidade a uma interface administrativa e documental. Confiança é 4 porque a prova foi repetida em `main` e novamente contra a URL pública depois da publicação; UX e UI permanecem em 3 porque os fluxos densos além de home/relatório ainda não tiveram observação equivalente.

A Ficha permanece em **22/24** depois da #238. Seu build de `main` agora passa automaticamente por axe, teclado e foco em Chromium, e o mesmo commit foi publicado com verificação funcional verde. Confiança continua em 3 porque a auditoria semântica completa ainda não é repetida contra a URL publicada e a #228 permanece parcialmente aberta: o JSON da captura visual de PR ainda pode registrar o commit temporário de teste em vez do commit real da branch.

O Astronauta sobe para **23/24** depois da #44. A execução de `main` `33828611787`, arquivo `9920852733`, mede a largura real do navegador: `/types/Note` e `/concepts/edit/note-01` têm `documentScrollWidth=390` numa janela de 390 px, com navegação e editor contidos e densidade desktop preservada. UX e UI passam a 4; Confiança permanece em 3 porque teclado, foco e semântica acessível ainda não receberam prova sistemática equivalente.

O Leizilla permanece em 20/24 depois da #163 separar falha de acesso de ausência do acervo. O Aleph permanece em 22/24. Quem São Eles? e o blog permanecem em 23/24. O Baliza permanece em 21/24 enquanto a verificação publicada depende do fato novo registrado na #694.
