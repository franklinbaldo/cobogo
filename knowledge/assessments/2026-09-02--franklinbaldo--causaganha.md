---
type: SurfaceQualityAssessment
repo: franklinbaldo/causaganha
date: 2026-09-02
commit: e82f5c00e8093dce1e580d33f4819bf89ac4e9ff
deploy: https://github.com/franklinbaldo/causaganha/actions/runs/33622993677
capture: artifact:9843687466
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 4
  trust: 4
total: 23
band: reference
blockers: []
trend: flat
---

# CausaGanha — Surface Quality Assessment

## Veredito

**23/24 — referência.** CausaGanha combina tarefas públicas claras, explicação forte do modelo Arquivo / Estado / Teor, artefatos realmente reutilizáveis e uma linguagem visual própria. A rodada encontrou e corrigiu uma dívida concreta de discoverability na navegação mobile. UX permanece em 3/4, não porque a correção falhou, mas porque algumas superfícies funcionais ainda carregam uma segunda camada de chrome/navegação interna além da navegação global; isso é coerente e utilizável, porém menos simples que o restante da arquitetura de informação.

## Clareza / D1

**4/4.** A home e a navegação deixam explícitos os jobs principais: consultar processo, pesquisar publicações, explorar cobertura, usar com agente e entender projeto/dados. A composição multi-fonte apresenta Arquivo / Estado / Teor sem transformar uma única fonte na definição do produto.

Gap: nenhum material de D1 demonstrado após #999.

## Explicabilidade / D2

**4/4.** `/sobre` explica a tese, as fronteiras de prova por fonte, o fluxo fonte → artefato → índice → superfície e os limites de cobertura. A interface distingue o que cada fonte sustenta do que não pode ser inferido dela.

Gap: nenhum material demonstrado.

## Autonomia / D3

**4/4.** O leitor pode sair da interface e reutilizar ZIPs no Internet Archive, manifests/Parquets, `catalog.sql`/DuckDB e o índice processual. `/agentes` documenta o MCP read-only local e sua configuração stdio, deixando explícito que endpoint HTTP público ainda não existe. A autonomia é real e não depende de uma claim promocional.

Gap: nenhum material demonstrado.

## UX

**3/4.** Estados, provenance e tarefas são bem nomeados e as páginas públicas oferecem caminhos coerentes entre leitura, busca e exploração. A captura anterior da navegação em `390×844` revelou um gap material: destinos primários ficavam além da borda sob `overflow-x: auto` sem affordance. A #999 fechou esse problema por wrap e a recaptura do landing mostra os seis destinos perceptíveis. O ponto restante reflete a coexistência, em páginas funcionais como `/processo`, da navegação global com chrome interno próprio; não é blocker nem justifica redesenho amplo sem evidência adicional.

Gap fechado nesta rodada: `franklinbaldo/causaganha#998` / PR #999.

## UI

**4/4.** A superfície preserva identidade verde/dourada, mistura editorial e dados sem cair em dashboard genérico e mantém hierarquia legível em desktop e mobile. A correção da #999 preservou desktop e reorganizou a navegação estreita sem introduzir skin compartilhada. As capturas de home, processo, publicações, sobre e consultas mostram tipografia, ritmo, controles e estados adaptando-se ao contexto sem perder parentesco.

Gap: nenhum material demonstrado após a correção.

## Confiança

**4/4.** Fontes, freshness, cobertura, erro/ausência e artefatos públicos são tratados como estados factuais distintos. O contrato Arquivo / Estado / Teor impede inferências indevidas entre fontes. A avaliação está ligada ao landing `e82f5c00...`, ao deploy `33622993677` e ao artifact pós-merge `9843687466` do mesmo SHA.

Gap: nenhum material demonstrado.

## Blockers

nenhum blocker de superfície.

## Recomendações Cobogó

- `primary-navigation-perceptible-on-narrow-viewports` (`validated`) — nasceu da dívida observada e foi validada pela #999 + recaptura do landing.
- `visual-evidence-as-quality-gate` (`stable`) — a dívida e o fechamento foram decididos por capturas desktop/mobile ligadas a SHA.
- `local-identity-preserved` — a solução é local e mantém a gramática visual do CausaGanha.
- `diagnostic-ranking` — 23/24 não apaga UX 3/4 nem obriga a inventar uma nova issue sem gap material.

## Issues derivadas

- `franklinbaldo/causaganha#998` — fechada pela #999: tornar a navegação primária perceptível em viewport estreito.

## O que o Cobogó deve aprender deste consumer

CausaGanha demonstra que provenance pode estruturar produto e não apenas aparecer como rodapé: Arquivo / Estado / Teor organiza tarefas, explicação e limites de inferência. Também mostra que uma navegação tecnicamente acessível por scroll pode falhar como orientação pública; perceptibilidade dos destinos é um contrato separado de alcançabilidade no DOM.
