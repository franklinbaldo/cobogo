---
type: SurfaceQualityAssessment
repo: franklinbaldo/sisprev
date: 2026-09-03
commit: 212d7fd1cde4a4ed5b715d841ac890e987706b7f
deploy: https://github.com/franklinbaldo/sisprev/actions/runs/33808763273
capture: artifact:9914175591
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 3
  trust: 4
total: 22
band: reference
blockers: []
trend: up
---

# Sisprev — avaliação da interface pública após contrato de acessibilidade

## Veredito

**22 de 24 pontos — faixa de referência.** Clareza, explicação do sistema e autonomia permanecem em 4/4. UX e UI continuam em 3/4 porque a observação aprofundada ainda cobre principalmente home e relatório, não todos os fluxos densos do projeto. Confiança sobe de 3 para 4 porque a limitação explícita da avaliação anterior — falta de prova reproduzível de teclado, foco e semântica em navegador real — foi enfrentada e passou também na página já publicada.

A avaliação aponta para `212d7fd1cde4a4ed5b715d841ac890e987706b7f`, o commit que realmente entrou em `main` depois da PR #160. A execução visual de `main` `33808763237` produziu o arquivo `9914070230`, identificado pelo mesmo commit. O Pages `33808763273` publicou esse commit e confirmou no próprio deploy que a página respondia com o SHA esperado. Depois da publicação, a execução independente `33809125749` abriu novamente a URL pública e produziu o arquivo `9914175591`, `sisprev-published-surfaces-212d7fd1cde4a4ed5b715d841ac890e987706b7f`.

## Clareza / D1

**4/4.** A home abre com a informação de que o catálogo está em auditoria e que o conteúdo não é um veredito oficial. Logo abaixo, explica que o site é uma projeção somente para leitura do corpus jurídico-previdenciário. Navegação, relatório e downloads deixam claro o que uma pessoa pode fazer.

## Explicabilidade / D2

**4/4.** A interface e a documentação explicam a relação entre corpus OKF, regras, auditoria, achados e relatório formal. O `ProjectProfile` do workspace reforça a separação entre evidência jurídica, representação do catálogo, homologação técnica e ato institucional; a interface pública não apaga essa fronteira.

## Autonomia / D3

**4/4.** A home oferece o relatório completo em PDF e pacotes públicos de regras, dispositivos e análises/RFCs. A pessoa não depende da interface para levar o material consigo. O relatório paginado também é derivado do mesmo conteúdo e foi desenhado para circulação fora do navegador com identificação de origem.

## UX

**3/4 — boa.** A home tem caminhos claros para regras, propostas, ciclos, achados, dispositivos, relatórios, RFCs, simulador e busca. No celular, esses caminhos continuam legíveis e alcançáveis; não há rolagem horizontal global. O relatório mantém a ação de baixar PDF e sua leitura continua possível em 390×844.

A nota não sobe para 4 porque a observação profunda ainda se concentra na home e no relatório. O Sisprev possui fluxos densos de revisão, comparação, busca e simulação que não receberam a mesma prova de tarefa completa; seria inflar a nota tratar duas rotas fortes como prova de excelência do sistema inteiro.

## UI

**3/4 — boa.** No desktop, a home usa uma linguagem administrativa própria, com aviso de estado, navegação ampla e um bloco de downloads claramente hierarquizado. O relatório preserva sua identidade de documento formal em vez de virar um dashboard genérico. No celular, a #159 já havia corrigido um defeito real de largura global; a #160 manteve essa prova intacta. No arquivo produzido depois da publicação, home e relatório medem exatamente 390 px numa janela de 390 px, sem rolagem horizontal global.

A nota fica em 3 porque robustez e legibilidade estão demonstradas nas rotas avaliadas, mas ainda não existe observação suficiente para chamar todas as interfaces densas do projeto de referência visual. Preservar a aparência local conta positivamente; o Cobogó não exige que o Sisprev se pareça com outro projeto.

## Confiança

**4/4 — referência no escopo observado.** A #160 transformou acessibilidade semântica em um critério executável: Chromium real, axe com regras WCAG A/AA, navegação por `Tab`, detecção de controles inalcançáveis, foco perceptível e nomes acessíveis. O critério foi registrado antes da correção e não foi reduzido depois que encontrou problemas.

A primeira medição válida encontrou seis textos de baixo contraste na home, 326 links com contraste insuficiente no relatório e 729 caixas de checklist sem nome acessível. Depois das correções, restaram três links gerados dentro de enunciados que ainda dependiam apenas da cor; eles foram corrigidos com sublinhado em tela, sem alterar o CSS de impressão/PDF. No commit final da branch `6257b5a374ebfa7289fb109465b3f4cd14aaad06`, o teste terminou sem violações sérias/críticas nem falhas de teclado.

A prova foi repetida depois do merge e novamente depois da publicação. No arquivo `9914175591`, `accessibility-evidence.json` registra `phase: published`, base pública `https://franklinbaldo.github.io/sisprev/`, HTTP 200 nas duas rotas, zero violações do axe, zero controles inalcançáveis e zero falhas de teclado. A home percorreu 40 controles esperados; o relatório, 884. O foco observado tinha indicador perceptível. O arquivo `evidence.json` do mesmo pacote registra largura global de 390 px em ambas as rotas móveis.

Confiança 4 não significa certificação universal de acessibilidade. A nota descreve o escopo realmente exercitado — home e relatório nos estados publicados observados — e continua falsificável por problemas assistivos ou estados não cobertos que apareçam depois.

## Impedimentos objetivos

**Nenhum.** Nenhuma dimensão recebeu 0 e a tarefa pública observada não está quebrada ou enganosa.

## Recomendações Cobogó

- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais.
- `responsive-by-contract` — **stable**, pela convergência já demonstrada em projetos com identidades diferentes.
- `semantic-accessibility-default` — passa a **stable**. Em linguagem comum, a recomendação agora funcionou de forma convergente em pelo menos dois projetos reais: Cobogó e Sisprev. O invariante compartilhado é semântica, teclado, foco e nomes acessíveis verificáveis; a implementação e a aparência continuam locais.

## Issues derivadas

Nenhuma issue nova de qualidade foi aberta apenas para elevar UX ou UI de 3 para 4. Não surgiu outro defeito concreto nessas dimensões. A nova capacidade operacional de observar acessibilidade e responsividade também depois da publicação foi encaminhada ao workspace na issue #36, que possui autoridade sobre o `ProjectProfile`.

## O que o Cobogó deve aprender deste projeto

A segunda aplicação mostra que a recomendação de acessibilidade não depende de uma estrutura editorial específica. No Cobogó, o contrato foi aplicado a um site de design system e conhecimento; no Sisprev, a uma home administrativa e a um relatório jurídico muito longo. A convergência está no comportamento verificável, não em copiar componentes, paleta ou densidade.

A rodada também reforça uma regra metodológica importante: falha automatizada deve ser lida até o mecanismo observável. “Axe vermelho” não era um problema único. Houve contraste, nomes acessíveis e, por fim, links distinguíveis sem depender apenas de cor. Corrigir cada causa sem afrouxar o critério produziu evidência mais forte do que simplesmente perseguir um check verde.

## O que ainda falta

A maior oportunidade futura permanece ampliar a observação para fluxos densos de revisão, comparação, busca e simulação. Isso não justifica voltar imediatamente ao Sisprev: nesta rodada não apareceu um defeito concreto nesses fluxos. A rotina só deve retornar quando uma mudança, regressão ou nova observação puder alterar a conclusão atual.