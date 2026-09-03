---
type: SurfaceQualityAssessment
repo: franklinbaldo/cobogo
date: 2026-09-03
commit: 62c0a6d7de65b9f36e08026577863f835ef3f518
deploy: https://github.com/franklinbaldo/cobogo/actions/runs/33782326908
capture: artifact:9904110705
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 4
  ui: 4
  trust: 3
total: 23
band: reference
blockers: []
trend: baseline
---

# Cobogó — primeira avaliação completa

## Veredito

**23 de 24 pontos — faixa de referência.** Clareza 4/4, Explicabilidade 4/4, Autonomia 4/4, UX 4/4, UI 4/4 e Confiança 3/4.

A avaliação aponta para `62c0a6d7de65b9f36e08026577863f835ef3f518`, commit que realmente entrou em `main` depois da PR #452. O GitHub Pages publicou esse mesmo commit na execução `33782326908`. Depois do deploy, o job `verify-published-surface` abriu novamente a URL pública e produziu o arquivo `9904110705`, `cobogo-published-preview-62c0a6d7de65b9f36e08026577863f835ef3f518`.

O `evidence.json` dessa execução registra `phase: published`, a URL `https://franklinbaldo.github.io/cobogo/`, seis rotas públicas em `1600×1000` e `390×844`, HTTP 200 em todas elas e largura do documento exatamente igual ao viewport em todas as observações. Não há falhas registradas.

## Clareza / D1

**4/4 — referência.** A home e a navegação deixam claro que Cobogó é um sistema de design e conhecimento, e as rotas Grammar, Core, Patterns, Consumers e Knowledge oferecem caminhos distintos para entender regras, fundamentos, aplicações e corpus. A própria projeção pública distingue documentação de produto e conhecimento canônico sem exigir que o visitante conheça a organização interna do repositório.

## Explicabilidade / D2

**4/4 — referência.** A superfície pública explica a tese central de gramática compartilhada sem aparência uniforme, e o repositório mantém README, corpus OKF e documentação operacional suficientes para reconstruir por que uma decisão existe. A separação entre Core, Grammar, Patterns e Consumers torna o raciocínio do sistema navegável em vez de escondê-lo apenas no código.

## Autonomia / D3

**4/4 — referência.** CSS, entry points, componentes, exemplos e corpus são reutilizáveis diretamente. O visitante pode chegar dos princípios à implementação sem depender de uma sessão interna, e a página Knowledge publica comandos reais para consultar o corpus com `okf-parser`.

## UX

**4/4 — referência.** As seis rotas públicas observadas mantêm navegação previsível, leitura contínua e hierarquia consistente em desktop e celular. A correção da #452 preservou o fluxo de `/knowledge/` em tela estreita sem transformar linhas técnicas longas em rolagem da página inteira. O comportamento de movimento reduzido continua coberto pela verificação automatizada.

A nota 4 não significa ausência de qualquer melhoria futura; significa que, nas tarefas públicas avaliadas nesta rodada, não há problema material de arquitetura de informação, navegação, fluxo, feedback ou estado que justifique reduzir a dimensão.

## UI

**4/4 — referência.** A composição preserva identidade própria do Cobogó sem impor essa aparência aos demais projetos. Tipografia, ritmo, faixas, inscrições e vazios trabalham como estrutura, e a responsividade agora é comprovada nas seis rotas em 390 px. O defeito encontrado em `/knowledge/` — 1036 px numa janela de 390 px — foi corrigido pela contenção local do bloco técnico; depois da publicação, todas as seis rotas estreitas medem exatamente 390 px.

## Confiança

**3/4 — boa.** O salto desta rodada é verificabilidade: a observação pós-publicação liga imagens, rota, HTTP, viewport e largura ao commit realmente publicado. Isso reduz a chance de uma avaliação usar pixels de uma branch ou build local como se fossem o site que o leitor recebe.

Confiança permanece 3 porque a rodada não produziu prova ampla de navegação por teclado, foco visível, semântica de leitor de tela e contraste em todos os estados. `prefers-reduced-motion` está coberto, mas nota 4 exige uma comprovação de acessibilidade mais completa, não apenas ausência de regressão visual e boa proveniência do deploy.

## Recomendações Cobogó relacionadas

- `visual-evidence-as-quality-gate` — permanece **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais. O dogfood do próprio Cobogó acrescenta uma prova importante: o mesmo princípio encontrou um defeito responsivo no site de referência e passou a repetir a observação depois da publicação.
- `responsive-by-contract` — permanece **stable**; a correção confirma que conteúdo técnico pode manter sua natureza localmente rolável sem alargar a página inteira.

## Dívida concreta restante

Nenhuma issue nova foi aberta apenas para perseguir 24/24. A diferença de Confiança entre 3 e 4 é falta de comprovação ampla de acessibilidade, não um defeito concreto observado nesta rodada. Se surgir uma falha de teclado, foco, contraste ou semântica, ela deve virar issue com rota e mecanismo verificáveis.