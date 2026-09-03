---
type: SurfaceQualityAssessment
repo: franklinbaldo/leizilla
date: 2026-09-03
commit: b5afe794073fc5645c3fb4edacc8146bf75976df
deploy: https://franklinbaldo.github.io/leizilla/
capture: artifact:9899626172
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 2
  trust: 3
total: 20
band: good
blockers: []
trend: up
---

# Leizilla — avaliação após corrigir o estado de indisponibilidade

## Veredito

**20 de 24 pontos — faixa boa.** Clareza 4/4, Explicabilidade 4/4, Autonomia 4/4, UX 3/4, UI 2/4 e Confiança 3/4. A mudança desta rodada é exclusivamente em Confiança: a interface deixou de transformar uma falha de acesso ao dataset em uma afirmação falsa de que o acervo ainda não tinha sido publicado.

A avaliação aponta para `b5afe794073fc5645c3fb4edacc8146bf75976df`, commit que realmente entrou em `main` depois da PR #163. O GitHub Pages publicou esse mesmo commit na execução `33770975164`. Depois do merge, a execução visual `33770975121` também terminou com sucesso e produziu o arquivo `9899626172`, identificado como `leizilla-web-visual-b5afe794073fc5645c3fb4edacc8146bf75976df`. A prova contém desktop `1280×900`, celular `390×844` e versões controladas em que o acesso ao Internet Archive é interrompido de propósito.

## Clareza / D1

**4/4.** A home continua apresentando a tarefa diretamente: pesquisar legislação preservada e estruturada. A correção do estado de erro não remove busca, cobertura nem caminhos para dados.

## Explicabilidade / D2

**4/4.** A interface continua explicando preservação, estruturação e trilha de evidência sem confundir estado de pipeline com promessa jurídica. No erro, a nova redação melhora esse princípio: descreve que o arquivo não pôde ser acessado naquele momento sem inventar a causa.

## Autonomia / D3

**4/4.** O acervo continua disponível como `versoes.parquet`, com metadados e item no Internet Archive. A própria mensagem de indisponibilidade agora oferece esses caminhos reais como alternativas, em vez de encerrar o fluxo.

## UX

**3/4 — boa.** O erro recuperável passou a orientar a pessoa: tentar o arquivo público diretamente, consultar Cobertura ou verificar o roadmap. Falha e consulta concluída com zero registros são estados diferentes. A nota permanece 3 porque a avaliação ainda não cobre profundamente uma busca bem-sucedida, abertura de lei e retorno aos resultados.

## UI

**2/4 — adequada com problema material.** O problema separado da #162 continua visível: em `390×844`, os filtros de ente e tipo permanecem estreitos a ponto de perder parte do texto que os diferencia. A #163 não tentou resolver isso e não há base para subir a nota.

## Confiança

**3/4 — boa.** Este era o problema escolhido. Antes, uma falha de rede podia resultar em “Rondônia v0 ainda não foi publicado”, embora o dataset existisse. Agora a mensagem principal diz `Não foi possível acessar o acervo agora` e explica que a falha não permite concluir ausência ou falta de publicação.

A verificação automatizada cria deliberadamente uma falha ao acessar o Internet Archive e reprova se reaparecer linguagem que diga `ainda não foi publicado` ou `ainda não está no ar`. No commit da PR `7cab1cb9b5c7be087be850c40f9010b38575cb48`, a execução `33770546164` passou e produziu o arquivo `9899463951`. Depois do merge, a mesma prova passou em `main` no commit `b5afe794...`, execução `33770975121`, arquivo `9899626172`.

Confiança não sobe para 4 porque ainda não há prova ampla de acessibilidade por teclado/foco visível e porque nota de referência exige mais do que eliminar este defeito factual específico.

## Recomendações Cobogó relacionadas

- `recoverable-error-states` — passa a **stable**, isto é, agora funcionou de forma convergente em pelo menos dois projetos reais, Ficha e Leizilla, preservando soluções locais diferentes. A regra comum é simples: uma falha pública deve dizer apenas o que o sistema sabe e oferecer um próximo passo verdadeiro.
- `visual-evidence-as-quality-gate` — permanece **stable**; a captura controlada transformou a mensagem de erro em uma condição verificável, não apenas uma revisão de texto.

## Dívida concreta restante

- `leizilla#162` — preservar informação suficiente nos filtros em `390×844`; mantém UI em 2/4.

A #161 foi resolvida pela #163. Nenhuma nova issue foi aberta apenas para aumentar a pontuação.