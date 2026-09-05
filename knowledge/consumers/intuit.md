---
type: ConsumerCard
repo: franklinbaldo/intuit
site: https://franklinbaldo.github.io/intuit/
status: active
last_reviewed: 2026-09-05
gap_score: 0
---

# Intuit

## Identidade local

Preservar o chrome Apple-inspired, gradientes azul/roxo, light/dark theme, interação direta e compacta do workspace e a linguagem própria de ferramenta de visual testing. Cobogó não deve transformar Intuit em dashboard nem substituir sua estética local.

## D1 — no site

A pessoa pode editar/colar HTML, renderizar no preview, copiar link, atualizar a URL, limpar o editor, alternar scripts no sandbox e alternar tema. O preview é uma região nomeada e o iframe tem título acessível. Erros dinâmicos são uma região de alerta e `Editor actions` / `Preview settings` são grupos semânticos nomeados. Desde #27, os controles principais também exibem foco explícito para teclado e as transições relevantes respeitam `prefers-reduced-motion`.

Nenhum problema material de Clareza está demonstrado na tarefa principal.

## D2 — por trás

Conforme o `ProjectProfile`, Intuit é um renderer HTML/visual-testing client-side cujo valor é a relação imediata fonte/edit → preview renderizado, não virar IDE genérica. O default continua `sandbox=""`; scripts são opt-in; o preview usa `srcdoc`, sem depender de acesso parent-side ao documento de origem opaca. O estado pode vir de `?data=`, `?b64=` ou Gist.

Desde #30, a interface explica antes da ativação que `Allow Scripts` deve ser usado apenas com HTML confiável porque reduz o isolamento do preview. A #31 acrescentou outra fronteira explícita de produto: nem todo conteúdo deve ser transformado em URL só porque a aplicação consegue serializá-lo. A #33 torna o caminho Gist igualmente explícito nos estados de falha, sem transformar mensagem operacional em documentação longa.

A dimensão permanece 3/4 porque a explicação pública de funcionamento ainda é mais rasa que a documentação do repositório.

## D3 — por conta própria

A pessoa pode transportar um estado reproduzível por URL (`?data=`/`?b64=`), carregar HTML de Gist e executar o source checkout diretamente como aplicação estática. Desde #31, `Copy Link` e `Update URL` compartilham um orçamento conservador e apontam Gist como alternativa para conteúdo grande.

Desde #33, Gist deixa de ser um caminho opaco quando falha: resposta HTTP sem sucesso, Gist sem `.html`, falha no arquivo bruto e falha de requisição são distinguidas; sucesso continua preenchendo editor e preview. Testes Playwright exercitam esses estados sem depender da API real.

Nenhum problema material D1–D3 é contabilizado por `gap_score`; isso não elimina a elegibilidade de UX/UI para crítica futura. Autonomia continua 3/4 porque esta rodada fortaleceu um caminho existente, não ampliou a família de saídas públicas a ponto de justificar referência.

## Capacidades da interface pública

- **GitHub Pages / publicação** — `last_verified: 2026-09-05`. A #33 entrou como `988296675b1384a7c86a7ec4887e0835c2310bb2`; Pages `33952214058` publicou esse mesmo commit.
- **Verificação funcional** — `last_verified: 2026-09-05`. `Test` `33952214057` passou em `main`, incluindo os cinco cenários novos de Gist e a suíte existente.
- **Observação visual versionada** — `last_verified: 2026-09-05`. `Visual capture` `33952214063` passou no commit incorporado.
- **Observação depois da publicação** — `last_verified: 2026-09-05`. O pacote `9965193464`, `intuit-published-988296675b1384a7c86a7ec4887e0835c2310bb2`, registra a página publicada após o deploy.
- **Preservação / transporte** — URL, Base64 e Gist continuam sendo formas públicas de transportar estado; a #31 fixa a fronteira de tamanho da URL e a #33 torna o caminho Gist recuperável quando a origem falha.

## O que este projeto faz melhor que o Cobogó

Intuit demonstra uma forma barata de ligar revisão visual ao commit e à página publicada: o mesmo mecanismo observa servidor local durante PR/main e a URL Pages depois do deploy.

A #31 mostra que “usar URL para estado compartilhável” não deve virar absolutismo. A #33 acrescenta outro aprendizado: feedback de erro útil preserva diferenças que mudam a recuperação — ausência de HTML, erro HTTP e falha de rede não são a mesma coisa — sem despejar detalhe técnico que não ajuda a pessoa.

## Padrões do Cobogó em uso

- `visual-evidence-as-quality-gate` — aplicado pela observação ligada ao commit e repetida depois da publicação.
- `risk-changing-controls-explain-consequence` — `validated`: já funcionou em pelo menos um projeto real.
- `url-state-when-shareable` — `validated`: já funcionou em pelo menos um projeto real; a #31 é a primeira aplicação reconciliada.
- `feedback-near-action` — passa a `validated`: em português comum, agora há uma aplicação real bem-sucedida reconciliada. A #33 mantém o feedback no fluxo do Gist, distingue estados observáveis e oferece a próxima decisão quando possível.

## Histórico

- 2026-09-05 — #33 distinguiu os estados de falha de `?gist=`, adicionou cobertura offline de sucesso/erro e foi publicada como `988296675b1384a7c86a7ec4887e0835c2310bb2`; pacote posterior `9965193464`.
- 2026-09-04 — #31 recusou URLs compartilháveis acima do orçamento local, preservou editor/clipboard/endereço nos casos de recusa, acrescentou testes direcionados e foi publicada como `20f96cfb`; pacote posterior `9950763192`.
- 2026-09-04 — #30 tornou explícita a consequência de `Allow Scripts` e incorporou observação da URL publicada.
- 2026-09-02 — #28 adicionou observação estreita; primeira avaliação completa: 20/24.
- 2026-08-31 — #27 fechou foco explícito por teclado + reduced-motion; #26 adicionou observação visual reproduzível.
- 2026-08-16 — #17 fechou preview semântico, runtime `srcdoc`, Base64, tema observável, gate Test e deploy Pages.
