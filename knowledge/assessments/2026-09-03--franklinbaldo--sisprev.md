---
type: SurfaceQualityAssessment
repo: franklinbaldo/sisprev
date: 2026-09-03
commit: d976c352d9eaa30cb3e168cafcc36bf7b60b0ae9
deploy: https://github.com/franklinbaldo/sisprev/actions/runs/33758666672
capture: artifact:9894544179
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 3
  trust: 3
total: 21
band: good
blockers: []
trend: baseline
---

# Sisprev — primeira avaliação completa da interface pública

## Veredito

**21 de 24 pontos — faixa boa.** Esta é a primeira avaliação completa que serve de referência para comparações futuras. Clareza, explicação do sistema e autonomia estão muito fortes. A principal limitação atual não é um defeito visual reproduzível depois da #159: é a falta de prova suficiente sobre teclado, foco e outros aspectos de acessibilidade para chamar Confiança de referência, além de uma interface deliberadamente densa que ainda não demonstrou qualidade excepcional em todos os fluxos além da home e do relatório.

A avaliação aponta para `d976c352d9eaa30cb3e168cafcc36bf7b60b0ae9`, o commit que realmente entrou em `main` depois da PR #159. A execução visual de `main` produziu o arquivo `9894544179`, chamado `sisprev-rendered-surfaces-d976c352d9eaa30cb3e168cafcc36bf7b60b0ae9`. O `evidence.json` identifica esse commit, a fase `main`, as rotas `/sisprev/` e `/sisprev/relatorio/`, os tamanhos 1280×900 e 390×844, os status HTTP e a largura observada do documento.

## Clareza / D1

**4/4.** A home abre com a informação de que o catálogo está em auditoria e que o conteúdo não é um veredito oficial. Logo abaixo, explica que o site é uma projeção somente para leitura do corpus jurídico-previdenciário. Navegação, relatório e downloads deixam claro o que uma pessoa pode fazer.

## Explicabilidade / D2

**4/4.** A superfície e a documentação explicam a relação entre corpus OKF, regras, auditoria, achados e relatório formal. O `ProjectProfile` do workspace reforça a separação entre evidência jurídica, representação do catálogo, homologação técnica e ato institucional; a interface pública não apaga essa fronteira.

## Autonomia / D3

**4/4.** A home oferece o relatório completo em PDF e pacotes públicos de regras, dispositivos e análises/RFCs. A pessoa não depende da interface para levar o material consigo. O relatório paginado também é derivado do mesmo conteúdo e foi desenhado para circulação fora do navegador com identificação de origem.

## UX

**3/4 — boa.** A home tem caminhos claros para regras, propostas, ciclos, achados, dispositivos, relatórios, RFCs, simulador e busca. No celular, esses caminhos continuam legíveis e alcançáveis; não há rolagem horizontal global. O relatório mantém a ação de baixar PDF e sua leitura continua possível em 390×844.

A nota não sobe para 4 porque esta rodada observa profundamente apenas a home e o relatório. O Sisprev possui fluxos densos de revisão, comparação, busca e simulação que não receberam a mesma prova de navegador nesta avaliação; seria inflar a nota tratar a boa experiência das duas rotas como prova de excelência do sistema inteiro.

## UI

**3/4 — boa.** No desktop, a home usa uma linguagem administrativa própria, com aviso de estado, navegação ampla e um bloco de downloads claramente hierarquizado. O relatório preserva sua identidade de documento formal em vez de virar um dashboard genérico. No celular, a #159 corrigiu um defeito real: o relatório chegou a medir 703 px e depois 611 px numa janela de 390 px antes de tabelas, links e texto técnico serem contidos. A prova final em `main` mede exatamente 390 px nas duas rotas móveis, sem rolagem horizontal global.

A nota fica em 3 porque o objetivo alcançado foi robustez e legibilidade, não uma demonstração suficiente de qualidade visual de referência em todas as superfícies densas do produto. A preservação da aparência local conta positivamente; o Cobogó não exige que o Sisprev se pareça com outro projeto.

## Confiança

**3/4 — boa.** O caráter de auditoria e não oficial está visível, o relatório expõe origem derivada do commit e a publicação separa prova de navegador, build e deploy. O novo `evidence.json` também distingue o commit real da branch do commit sintético que o GitHub usa para testar uma PR; depois do merge, a prova aponta diretamente para `d976c352...`.

A nota não sobe para 4 porque esta rodada não trouxe verificação suficiente de navegação por teclado, foco visível e outros comportamentos de acessibilidade em runtime. Há sinais positivos — inclusive `skip-link` presente no DOM —, mas sinal não substitui prova funcional.

## Recomendações Cobogó relacionadas

- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos. No Sisprev, a prova em navegador encontrou um defeito que build e relatório verde não mostravam e permaneceu como gate depois da correção.
- `responsive-by-contract` — passa a **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos com identidades diferentes. No Sisprev, o contrato preservou uma home administrativa e um relatório formal, sem impor o layout do Aleph; em ambos, a janela de 390 px termina com documento de 390 px e ações/conteúdo essenciais presentes.

## O que ainda falta

Não há dívida visual nova que justifique issue genérica nesta rodada. A maior oportunidade para uma avaliação futura é ampliar a prova de navegador para fluxos densos além de home/relatório e, se houver trabalho concreto, verificar teclado e foco. Isso só deve virar issue quando existir um problema observável ou uma mudança que precise desse critério, não apenas para buscar 24/24.