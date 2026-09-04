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
| franklinbaldo/franklinbaldo.github.io | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-03 | baseline |
| franklinbaldo/ficha | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-04 | flat |
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

O Sisprev permanece em **22/24** depois da #160 aplicar o mesmo princípio de acessibilidade a uma interface administrativa e documental. Confiança é 4 porque a prova foi repetida em `main` e novamente contra a URL pública depois da publicação; UX e UI permanecem em 3 porque os fluxos densos além de home/relatório ainda não tiveram observação equivalente.

A Ficha permanece em **22/24** depois da #239. A mudança não alterou a interface nem justifica subir a soma, mas fechou uma diferença concreta de proveniência da prova visual: no commit da PR `301de4efea1188101b992708ec3fb374f1d20dd2`, o nome do pacote, `capture-state.json` e `accessibility-evidence.json` passaram a registrar o mesmo commit real da branch. Depois da incorporação como `05aa359f63718ebf5e0a8bd4920c189c24d73813`, CI `33853865906`, observação `33853865990` e publicação `33853865948` terminaram com sucesso; o pacote `9929398297` registra o mesmo commit de `main` nos dois JSONs. A #228 foi encerrada. Confiança continua 3 porque axe, teclado e foco ainda não são repetidos contra a URL pública depois do deploy; a #240 registra essa dívida separada.

O Leizilla permanece em **21/24** depois da #164. O merge `b5800cf6fbbfceb5dcf9bc895fc70d1d58284e49` preserva o layout compacto em desktop e empilha os filtros secundários abaixo de 430 px. UI é 3; UX e Confiança permanecem em 3 porque a mudança não amplia a observação do fluxo completo nem prova teclado, foco e semântica acessível.

O Intuit permanece em **20/24** depois da #30, com Confiança 4 e D2, D3, UX e UI em 3.

O Baliza permanece em **20/24**. A #693 está em `main`, mas o GitHub Pages continua sem publicar esse estado por causa da falha operacional registrada na #694; por isso não houve nova intervenção nesta rodada.

O Quem São Eles? permanece em **23/24** depois da #25. O Pages publicou `4e412c8e4ae5b275dc9525dc97c9ecf066c8d384` e uma execução posterior abriu diretamente a URL pública em Chromium; UI continua 3 porque a prova profunda permanece concentrada na rota PEP.

O Aleph permanece em 22/24. O blog permanece em 23/24.
