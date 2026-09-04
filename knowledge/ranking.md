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
| franklinbaldo/quem-sao-eles | 23 | referência | 4 | 4 | 4 | 4 | 3 | 4 | 2026-09-03 | baseline |
| franklinbaldo/franklinbaldo.github.io | 23 | referência | 4 | 4 | 4 | 4 | 4 | 3 | 2026-09-03 | baseline |
| franklinbaldo/ficha | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/aleph-the-game | 22 | referência | 4 | 4 | 4 | 3 | 4 | 3 | 2026-09-03 | up |
| franklinbaldo/sisprev | 22 | referência | 4 | 4 | 4 | 3 | 3 | 4 | 2026-09-03 | up |
| franklinbaldo/baliza | 21 | boa | 4 | 4 | 4 | 3 | 2 | 4 | 2026-09-02 | flat |
| franklinbaldo/leizilla | 21 | boa | 4 | 4 | 4 | 3 | 3 | 3 | 2026-09-04 | up |
| franklinbaldo/intuit | 20 | boa | 4 | 3 | 3 | 3 | 3 | 4 | 2026-09-04 | flat |

## Ordenação

1. total decrescente;
2. confiança decrescente;
3. avaliação mais recente.

Projetos `dormant` não entram no ranking principal, mas preservam sua última avaliação histórica.

O ranking não compara valor social, qualidade do backend ou importância estratégica. Ele mede somente a qualidade da interface pública sob o modelo Cobogó. A soma nunca substitui a leitura das dimensões.

O próprio Cobogó permanece em **24/24** depois da #454 transformar acessibilidade em contrato verificável. A nota máxima descreve o escopo observado, não uma afirmação de perfeição universal.

O Astronauta sobe para **24/24** depois da #45 transformar a antiga falta de comprovação de Confiança em teste reproduzível. A primeira execução da auditoria encontrou problemas reais de contraste, distinção de link e acesso por foco a uma região horizontal rolável; a régua não foi reduzida. A PR entrou em `main` como `2ee08c03e11aa7c9fec104ffe9db1403f4805c89`. A execução de `main` `33843623459`, arquivo `9925739036`, registra axe com zero violações nas duas rotas, 25/25 controles alcançados por teclado em `/types/Note`, 13/13 em `/concepts/edit/note-01` e nenhuma falha de foco. Como o produto é um admin SSR local, executar novamente o runtime real do commit de `main` é a verificação equivalente à publicação. Confiança passa de 3 para 4.

O Sisprev permanece em **22/24** depois da #160 aplicar o mesmo princípio de acessibilidade a uma interface administrativa e documental. Confiança é 4 porque a prova foi repetida em `main` e novamente contra a URL pública depois da publicação; UX e UI permanecem em 3 porque os fluxos densos além de home/relatório ainda não tiveram observação equivalente.

A Ficha permanece em **22/24** depois da #238. Seu build de `main` agora passa automaticamente por axe, teclado e foco em Chromium, e o mesmo commit foi publicado com verificação funcional verde. Confiança continua em 3 porque a auditoria semântica completa ainda não é repetida contra a URL publicada e a #228 permanece parcialmente aberta: o JSON da captura visual de PR ainda pode registrar o commit temporário de teste em vez do commit real da branch.

O Leizilla permanece em **21/24** depois da #164. O merge `b5800cf6fbbfceb5dcf9bc895fc70d1d58284e49` preserva o layout compacto em desktop e empilha os filtros secundários abaixo de 430 px. O Pages `33839739009` publicou o mesmo commit e depois abriu novamente a URL pública com Chromium; o pacote `9924664387` registra documento de 390 px numa janela de 390 px e os três filtros com 326 px cada, inteiros e distinguíveis. UI é 3; UX e Confiança permanecem em 3 porque a mudança não amplia a observação do fluxo completo nem prova teclado, foco e semântica acessível.

O Intuit permanece em **20/24** depois da #30, mas reforça a justificativa de Confiança 4. `Allow Scripts` agora explica, antes da decisão, que o modo deve ser usado apenas com HTML confiável e que reduz o isolamento do preview; Playwright verifica a associação semântica e o sandbox antes/depois. O Pages `33835991124` publicou o merge `495e54b9841ba2e18fcd5f980e995a6072e92963` e depois capturou a URL pública em `1440×900` e `390×844` no arquivo `9923434999`. D2, D3, UX e UI continuam em 3 porque esta mudança específica não produz evidência suficiente para elevá-las a referência.

O Aleph permanece em 22/24. Quem São Eles? e o blog permanecem em 23/24. O Baliza permanece em 21/24 enquanto a verificação publicada depende do fato novo registrado na #694.
