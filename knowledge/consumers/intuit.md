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

Desde #35, a própria entrada pública resume o modelo mental essencial: o preview acontece localmente no navegador, o Intuit não possui backend próprio de renderização e o estado pode ser compartilhado por URL ou Gist. Essa explicação fica abaixo da finalidade da ferramenta e antes do editor, sem criar painel ou desviar a hierarquia principal. Explicabilidade passa a 4/4 no escopo proporcional deste produto; Base64 e detalhes de `srcdoc` continuam sendo documentação técnica, não informação necessária para compreender a ferramenta de fora.

## D3 — por conta própria

A pessoa pode transportar um estado reproduzível por URL (`?data=`/`?b64=`), carregar HTML de Gist e executar o source checkout diretamente como aplicação estática. Desde #31, `Copy Link` e `Update URL` compartilham um orçamento conservador e apontam Gist como alternativa para conteúdo grande.

Desde #33, Gist deixa de ser um caminho opaco quando falha: resposta HTTP sem sucesso, Gist sem `.html`, falha no arquivo bruto e falha de requisição são distinguidas; sucesso continua preenchendo editor e preview. Testes Playwright exercitam esses estados sem depender da API real.

Nenhum problema material D1–D3 é contabilizado por `gap_score`; isso não elimina a elegibilidade de UX/UI para crítica futura. Autonomia continua 3/4 porque a #35 torna o modelo existente compreensível, mas não amplia a família de saídas públicas a ponto de justificar referência.

## Capacidades da interface pública

- **GitHub Pages / publicação** — `last_verified: 2026-09-05`. A #35 entrou como `98a53004f32ab7f89163fa8abbacd2863dcefdb1`; Pages `33955841991` publicou esse mesmo commit.
- **Verificação funcional** — `last_verified: 2026-09-05`. `Test` `33955841985` passou em `main`, incluindo o teste novo da explicação pública e a suíte existente.
- **Observação visual versionada** — `last_verified: 2026-09-05`. `Visual capture` `33955841993` passou no commit incorporado.
- **Observação depois da publicação** — `last_verified: 2026-09-05`. O pacote `9966339875`, `intuit-published-98a53004f32ab7f89163fa8abbacd2863dcefdb1`, registra a página publicada em 1440×900 e 390×844 depois do deploy.
- **Preservação / transporte** — URL, Base64 e Gist continuam sendo formas públicas de transportar estado; a #31 fixa a fronteira de tamanho da URL, a #33 torna o caminho Gist recuperável quando a origem falha e a #35 explica esse modelo na própria entrada pública.

## O que este projeto faz melhor que o Cobogó

Intuit demonstra uma forma barata de ligar revisão visual ao commit e à página publicada: o mesmo mecanismo observa servidor local durante PR/main e a URL Pages depois do deploy.

A #31 mostra que “usar URL para estado compartilhável” não deve virar absolutismo. A #33 acrescenta outro aprendizado: feedback de erro útil preserva diferenças que mudam a recuperação — ausência de HTML, erro HTTP e falha de rede não são a mesma coisa — sem despejar detalhe técnico que não ajuda a pessoa. A #35 mostra que um produto deliberadamente pequeno pode explicar sua arquitetura essencial em uma frase, sem transformar a home em documentação.

## Padrões do Cobogó em uso

- `visual-evidence-as-quality-gate` — aplicado pela observação ligada ao commit e repetida depois da publicação.
- `risk-changing-controls-explain-consequence` — `validated`: já funcionou em pelo menos um projeto real.
- `url-state-when-shareable` — `validated`: já funcionou em pelo menos um projeto real; a #31 é a primeira aplicação reconciliada.
- `feedback-near-action` — `validated`: já há uma aplicação real bem-sucedida reconciliada; a #33 mantém o feedback no fluxo do Gist, distingue estados observáveis e oferece a próxima decisão quando possível.
- `reader-first-project-explanation` — passa a `validated`: em português comum, a recomendação de explicar na própria superfície o modelo mental essencial agora funcionou em um projeto real. A #35 mostra a versão compacta apropriada a um produto de propósito único.

## Histórico

- 2026-09-05 — #35 explicou na home o preview local, a ausência de backend próprio de renderização e o compartilhamento por URL/Gist; foi publicada como `98a53004f32ab7f89163fa8abbacd2863dcefdb1`; pacote posterior `9966339875`; Explicabilidade passou a 4/4.
- 2026-09-05 — #33 distinguiu os estados de falha de `?gist=`, adicionou cobertura offline de sucesso/erro e foi publicada como `988296675b1384a7c86a7ec4887e0835c2310bb2`; pacote posterior `9965193464`.
- 2026-09-04 — #31 recusou URLs compartilháveis acima do orçamento local, preservou editor/clipboard/endereço nos casos de recusa, acrescentou testes direcionados e foi publicada como `20f96cfb`; pacote posterior `9950763192`.
- 2026-09-04 — #30 tornou explícita a consequência de `Allow Scripts` e incorporou observação da URL publicada.
- 2026-09-02 — #28 adicionou observação estreita; primeira avaliação completa: 20/24.
- 2026-08-31 — #27 fechou foco explícito por teclado + reduced-motion; #26 adicionou observação visual reproduzível.
- 2026-08-16 — #17 fechou preview semântico, runtime `srcdoc`, Base64, tema observável, gate Test e deploy Pages.
