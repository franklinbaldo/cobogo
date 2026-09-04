---
type: SurfaceQualityAssessment
repo: franklinbaldo/causaganha
date: 2026-09-04
commit: 943229226f045821fc44316986a8d2c397e1c74f
deploy: https://github.com/franklinbaldo/causaganha/actions/runs/33905126802
capture: artifact:9949238460
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 4
  ui: 4
  trust: 4
total: 24
band: reference
blockers: []
trend: up
---

# CausaGanha — avaliação de qualidade

## Veredito

**24 de 24 pontos — faixa de referência.** Clareza 4/4, Explicabilidade 4/4, Autonomia 4/4, UX 4/4, UI 4/4 e Confiança 4/4.

A subida de UX 3 para 4 não vem de uma impressão genérica. A avaliação anterior mantinha UX em 3 porque páginas funcionais combinavam a navegação global com uma segunda estrutura que repetia os mesmos destinos. A #1097 removeu essa disputa de hierarquia e foi publicada. A observação posterior revelou uma dívida localizada no rodapé estreito; a #1103 a corrigiu sem alterar a arquitetura ou a identidade local e foi novamente observada depois da publicação.

A nota máxima descreve somente o escopo observado nas rotas e larguras registradas; não afirma perfeição universal.

## Clareza / D1

**4/4.** A navegação principal apresenta de forma inequívoca consultar processo, pesquisar publicações, minhas consultas, explorar cobertura, usar com agente e projeto/dados. A retirada da segunda navegação principal não eliminou nenhum destino; tornou a hierarquia mais clara.

Não há problema material de Clareza demonstrado nas rotas observadas.

## Explicabilidade / D2

**4/4.** `/sobre` continua explicando Arquivo / Estado / Teor, proveniência, limites por fonte e o caminho fonte → arquivo público → índice → interface. A mudança de navegação não alterou a tese nem criou promessas novas.

Não há problema material de Explicabilidade demonstrado.

## Autonomia / D3

**4/4.** ZIPs preservados, Parquets, `catalog.sql`, índice processual e MCP local continuam reutilizáveis fora da interface. `/agentes` mantém a configuração local e os limites do transporte público explicitados.

Não há problema material de Autonomia demonstrado.

## UX

**4/4.** O mecanismo concreto que sustentava 3/4 na avaliação de 2 de setembro foi eliminado pela #1097: `SiteNav` permanece a navegação principal e `PageHeader` voltou a ser apenas contexto da página. A publicação desse commit foi observada em desktop e celular.

Essa nova observação encontrou outro problema real, mas mais localizado: os links do rodapé perdiam separação perceptível em 390×844 porque o CSS de quebra mirava uma lista que não existia. A #1103 restaurou a estrutura sem duplicar navegação nem esconder destinos. O pacote pós-publicação `9949238460` mostra os cinco links como unidades distintas no celular e a composição preservada no desktop.

No escopo das rotas observadas, não ficou outro mecanismo material de orientação que justifique manter UX em 3 apenas por prudência abstrata.

## UI

**4/4.** A identidade verde/dourada, a tipografia editorial, a densidade das páginas de dados e a relação entre home, cabeçalhos contextuais e conteúdo funcional permanecem coerentes. No celular, o rodapé agora quebra em linhas legíveis em vez de comprimir rótulos; no desktop continua centralizado, sem skin compartilhada nem redesign amplo.

## Confiança

**4/4.** Além da proveniência, atualização e correspondência entre afirmações e arquivos já existentes, a #1094 acrescentou uma auditoria reproduzível de acessibilidade. No commit publicado `943229226f045821fc44316986a8d2c397e1c74f`, o workflow `33905126802` abriu diretamente `https://franklinbaldo.github.io/causaganha/` e cinco rotas adicionais em 1280×900 e 390×844. Nas doze combinações, houve zero violações sérias ou críticas do axe, todos os controles visíveis esperados foram alcançados por teclado e não houve falha de foco perceptível.

Isso é prova forte para as rotas observadas, não certificação universal de acessibilidade.

## Impedimentos

Nenhum impedimento objetivo de superfície permanece para o problema escolhido nesta rodada.

## Recomendações Cobogó

- `semantic-accessibility-default` (`stable`) — já funcionou de forma convergente em pelo menos dois projetos reais; no CausaGanha, a auditoria roda também depois da publicação.
- `one-primary-navigation-per-layer` (`opinionated`) — a #1097 fornece uma aplicação real a reconciliar na recomendação correspondente, se o corpus ainda não a registrar.
- `secondary-navigation-readable-on-narrow-viewports` (`validated`) — já funcionou em pelo menos um projeto real; a #1103 preservou os destinos e tornou o rodapé estreito legível.
- `visual-evidence-as-quality-gate` (`stable`) — a decisão foi tomada por observação antes/depois ligada a commit e repetida na página publicada.

## O que o Cobogó aprende com o CausaGanha

Hierarquia de navegação e legibilidade de navegação secundária são problemas diferentes. Resolver a disputa entre duas navegações principais pode expor, na observação seguinte, uma dívida menor no rodapé. A rotina deve aceitar essa sequência sem reabrir um redesign total: corrigir o mecanismo observado, publicar, medir novamente e parar quando não houver outro problema material demonstrado.
