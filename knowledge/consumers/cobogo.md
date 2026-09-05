---
type: ConsumerCard
repo: franklinbaldo/cobogo
site: https://franklinbaldo.github.io/cobogo/
status: active
last_reviewed: 2026-09-05
gap_score: 0
---

# Cobogó

## Identidade local

Cobogó é o sistema de design e conhecimento de superfície do portfólio. Preservar a gramática brasileira como relação operacional — vão, ritmo, materialidade, tipografia, evidência e parentesco sem uniformidade — sem transformar o site de referência numa skin obrigatória. O site pode ter identidade própria de referência; tokens e escolhas concretas dele não viram core por dogfood.

## D1 — no site

A superfície pública em `https://franklinbaldo.github.io/cobogo/` oferece home, Grammar, Core, Patterns, Consumers e Knowledge como caminhos complementares para compreender e usar o sistema. O Getting Started ensina o entrypoint deliberado do pacote, `cobogo/core` e `cobogo/patterns`.

**Problema material D1:** nenhum comprovado na avaliação vigente.

## D2 — por trás

README, corpus OKF, documentação operacional e as divisões públicas entre Grammar/Core/Patterns/Consumers explicam a tese de gramática compartilhada sem aparência uniforme e permitem reconstruir por que uma regra existe. A projeção web continua separada do corpus canônico de knowledge.

A diferença específica entre contrato de pacote e exemplos de desenvolvimento foi fechada pela #505: exemplos correntes deixaram de ensinar `cobogo/components/*`, e o entrypoint raiz agora enumera deliberadamente os símbolos que a documentação pública ensina.

**Problema material D2:** nenhum comprovado na avaliação vigente.

## D3 — por conta própria

O repositório publica CSS, entrypoints, componentes, exemplos e corpus reutilizáveis diretamente. A página Knowledge expõe comandos reais para consultar o corpus com `okf-parser`, e o README distingue o core compartilhado da camada legada.

A #505 removeu `./components/*` somente depois da migração dos exemplos e adicionou `tests/public-api-doc-contract.test.ts`, que reprova se uma página pública voltar a ensinar deep import, se o wildcard voltar ao contrato ou se um exemplo importar do root um símbolo que não está exportado.

**Problema material D3:** nenhum rebaixamento; a autonomia pública permanece sustentada e agora há verificação automática contra a divergência que motivou a #482.

## Avaliação de qualidade

- **2026-09-03: 24/24 — faixa de referência.** Clareza 4, Explicabilidade 4, Autonomia 4, UX 4, UI 4 e Confiança 4.
- **2026-09-05:** avaliação mantida. A #505 corrige um contrato de desenvolvimento específico, mas não cria uma dimensão acima de 4 nem fornece fato suficiente para alterar a avaliação completa.

## Capacidades de superfície

- **Pages/site de referência** — `last_verified: 2026-09-05`. A #505 entrou em `main` como `4c8982b8f42bb70268c201171a761d26b05277a4`; publicação posterior foi disparada sobre esse mesmo commit e é reconciliada no RoundReport da rodada.
- **Build/CI** — `last_verified: 2026-09-05`. A #407 entrou em `main` como `0c102acd3e406ce1c933031e798335ccff3cb0fa`, restaurando Vitest como parte normal do CI. Na #505, o job de CI passou por contratos de relatório/core, Vitest, Astro check e build no commit atual da branch antes do merge.
- **Observação em navegador** — `last_verified: 2026-09-05`. A #505 passou pela observação das rotas públicas em desktop e celular, verificação semântica de acessibilidade e movimento reduzido antes do merge; a observação de `main` foi disparada no commit incorporado.
- **Acessibilidade semântica e teclado** — `last_verified: 2026-09-05`. As proteções anteriores permanecem e a observação da #505 ficou verde; a mudança não altera estrutura visual dos componentes.
- **Responsividade** — `last_verified: 2026-09-05`. A observação da #505 continuou verde nas rotas móveis.
- **Movimento reduzido** — `last_verified: 2026-09-05`. A verificação continuou verde na PR #505.
- **Smoke/self-conformance** — `last_verified: 2026-09-05`. A antiga dívida #407 foi resolvida; Vitest voltou ao CI e a própria #505 exercitou o novo teste de correspondência documentação↔API dentro dessa suíte.
- **Preservação** — `last_verified: 2026-09-03`. Nenhum Save Page Now novo foi necessário nesta rodada, que não contém mudança visual material.

## O que este projeto faz melhor que o Cobogó

Por ser o próprio projeto de referência, o dogfood consegue testar uma recomendação contra o lugar em que ela é formulada. A tentativa #498 produziu um aprendizado importante: um verificador verde não substitui ler se a documentação continua ensinando o caminho que se quer remover. A #505 incorporou esse aprendizado no próprio contrato automatizado, evitando repetir a mesma classe de divergência.

## Padrões do Cobogó em uso

- `Parentesco sem uniformidade` — o tema local do site não é core.
- `visual-evidence-as-quality-gate` — **stable**; build verde não substitui observação no navegador ligada ao commit real e, quando a mudança é publicada, à página realmente publicada.
- `responsive-by-contract` — **stable**; conteúdo técnico longo pode rolar dentro da própria região sem alargar o documento inteiro.
- `semantic-accessibility-default` — **validated**; isto é, já funcionou em pelo menos um projeto real. Ainda precisa convergir em um segundo projeto para se tornar `stable`.
- `public-api-is-curated` — **validated**; isto é, já funcionou em pelo menos um projeto real. A #505 migrou os exemplos, enumerou os exports deliberados, removeu `./components/*` e adicionou um verificador para impedir nova divergência. Ainda precisa convergir em um segundo projeto para se tornar `stable`.
- Membership corrente e evidência de promoção são fail-closed: repositório inexistente não sustenta consumer, pattern ou contagem atual.
- Configuração ≠ execução ≠ publicação ≠ observação ≠ adoção — distinção preservada no ProjectProfile e exercitada pelo próprio site.

## Histórico

- 2026-09-05 — #505 incorporada como `4c8982b8f42bb70268c201171a761d26b05277a4`: exemplos correntes migram para imports nomeados de `cobogo`; `src/index.ts` passa a enumerar o contrato ensinado; `./components/*` é removido; teste Vitest impede divergência. `public-api-is-curated` passa a `validated`.
- 2026-09-05 — #407 incorporada como `0c102acd3e406ce1c933031e798335ccff3cb0fa`: Vitest volta a ser executado pelo CI; a dívida antiga deixa de existir.
- 2026-09-04 — #498 removeu experimentalmente `./components/*` depois de checks verdes; a inspeção posterior encontrou exemplos oficiais ainda dependentes desse caminho; #499 restaurou o wildcard em `30f673870fb764c4563e46caa58533942999cf9d`, corrigindo a ordem de implementação da #482.
- 2026-09-03 — #454 mergeada em `9d656e45`: seis rotas passam por contrato de acessibilidade com axe, `Tab` real e foco perceptível; a prova se repete em `main`, Pages publica o mesmo commit e Confiança sobe para 4/4, fechando avaliação em 24/24.
- 2026-09-03 — #452 mergeada em `62c0a6d7`: seis rotas passam a ser observadas em desktop e celular; `/knowledge/` deixa de alargar a página; Pages e observação posterior à publicação verdes; primeira avaliação completa fecha em 23/24.
- 2026-09-01 — #414 mergeada em `0ca302f2`: corpus vivo reconciliado com `ConsumerCard(repo)` e specs normativas para `Concept`, `ConsumerCard` e `RoundReport`; CI, Knowledge, preview e Pages verdes.
- 2026-08-31 — limpeza removeu documentação corrente e patterns sustentados por repositórios confirmados como inexistentes.
- 2026-08-30 — #412 mergeada em `9c3aa709`: README passa a explicitar gramática compartilhada com identidade local; Pages verde.
- 2026-08-18 — Core Web CSS API registrada como estável após adoções externas independentes em CausaGanha e Ficha.
