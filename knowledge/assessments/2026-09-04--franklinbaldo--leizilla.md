---
type: SurfaceQualityAssessment
repo: franklinbaldo/leizilla
date: 2026-09-04
commit: 5adf33c94d9b6237b7764ad682a194b025e2eed2
deploy: https://franklinbaldo.github.io/leizilla/
capture: artifact:9936210089
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

# Leizilla — avaliação após comprovar teclado, foco e semântica

## Veredito

**22 de 24 pontos — faixa de referência.** Clareza 4/4, Explicabilidade 4/4, Autonomia 4/4, UX 3/4, UI 3/4 e Confiança 4/4.

A mudança desta rodada está em Confiança. A avaliação anterior mantinha 3/4 porque ainda não existia prova ampla e reproduzível de navegação por teclado, foco perceptível e semântica acessível. A #165 transformou essa ausência em um teste real, repetiu a prova no commit incorporado a `main` e manteve a correspondência com a publicação pública.

A avaliação aponta para `5adf33c94d9b6237b7764ad682a194b025e2eed2`, commit que realmente entrou em `main` depois da #165. A auditoria em `main` foi executada por `33871750652`; a publicação pelo GitHub Pages ocorreu em `33871750746`. Depois do deploy, o workflow abriu novamente a página pública e produziu `9936210089`, identificado como `leizilla-published-5adf33c94d9b6237b7764ad682a194b025e2eed2`.

## Clareza / D1

**4/4.** A home continua deixando clara a tarefa principal: pesquisar legislação preservada e estruturada. A rodada não alterou rótulos, conteúdo editorial ou prioridade visual.

## Explicabilidade / D2

**4/4.** A interface continua explicando preservação, estruturação, cobertura e origem do acervo. A auditoria acrescentada mede comportamento da interface sem ampliar ou inventar afirmações sobre os dados.

## Autonomia / D3

**4/4.** `versoes.parquet`, metadados, Internet Archive e o caminho DuckDB continuam permitindo reutilização independente do frontend.

## UX

**3/4 — boa.** Os controles observados podem ser percorridos por teclado e mantêm foco perceptível, o que melhora a robustez do fluxo. A nota não sobe porque a avaliação ainda não acompanha profundamente uma jornada completa de busca bem-sucedida, abertura de uma lei e retorno aos resultados.

## UI

**3/4 — boa.** As capturas responsivas existentes continuam verdes e a publicação do commit atual foi observada novamente. A nota permanece 3 porque a profundidade visual ainda está concentrada na home e nos estados já cobertos; não há prova suficiente de qualidade de referência em toda a variedade de páginas.

## Confiança

**4/4 — referência no escopo observado.** O workflow Chromium agora executa axe, inventaria os controles interativos visíveis, percorre-os por `Tab` e verifica foco perceptível nos mesmos quatro estados usados para a observação visual: desktop e celular, tanto no estado normal quanto na indisponibilidade controlada do acervo.

No commit final da branch, `7a7f6027cd589208875f70a769f67b4883397cf6`, `33871565508` terminou verde e produziu `9936141678`. Nos estados normais, 13 de 13 controles visíveis foram alcançados por teclado; nos estados controlados de indisponibilidade, 16 de 16. Todos os quatro casos registraram zero controles ausentes, zero falhas de indicador de foco e zero violações sérias ou críticas detectadas pelo axe.

Depois do merge, `33871750652` repetiu a auditoria a partir do commit real de `main`, `5adf33c94d9b6237b7764ad682a194b025e2eed2`, e terminou verde. O pacote `9936220405` está ligado explicitamente a esse commit. A publicação `33871750746` também terminou verde, abriu novamente a URL pública depois do deploy e produziu `9936210089` com o mesmo commit no nome.

A nota 4 descreve essas rotas e estados observados. Não significa certificação universal de acessibilidade nem autoriza ignorar futuros relatos assistivos reais.

## Recomendações Cobogó relacionadas

- `semantic-accessibility-default` — permanece **stable**, isto é, a regra já funcionou de forma convergente em pelo menos dois projetos reais. O Leizilla passa a ser uma aplicação adicional com identidade própria e contrato observável equivalente para semântica, teclado e foco.
- `visual-evidence-as-quality-gate` — permanece **stable**; as imagens existentes continuaram verdes e a mesma revisão foi observada depois da publicação.
- `recoverable-error-states` — permanece **stable**; o estado controlado de indisponibilidade continuou verdadeiro durante a auditoria.

## Dívida concreta restante

Não foi encontrado defeito concreto novo de acessibilidade nesta rodada. UX 3 e UI 3 continuam elegíveis para trabalho futuro apenas quando houver um problema específico e reproduzível — por exemplo, uma falha na jornada busca → lei → retorno ou uma página cuja composição demonstre uma dívida visual material. Não será criada issue genérica somente para elevar nota.
