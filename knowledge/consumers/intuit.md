---
type: ConsumerCard
repo: franklinbaldo/intuit
site: https://franklinbaldo.github.io/intuit/
status: active
last_reviewed: 2026-09-04
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

Desde #30, a interface explica antes da ativação que `Allow Scripts` deve ser usado apenas com HTML confiável porque reduz o isolamento do preview. A #31 acrescenta outra fronteira explícita de produto: nem todo conteúdo deve ser transformado em URL só porque a aplicação consegue serializá-lo.

Nenhum problema material novo de Explicabilidade foi identificado nesta rodada; a dimensão permanece 3/4 pela profundidade pública ainda limitada fora do repositório.

## D3 — por conta própria

A pessoa pode transportar um estado reproduzível por URL (`?data=`/`?b64=`), carregar HTML de Gist e executar o source checkout diretamente como aplicação estática. Desde #31, `Copy Link` e `Update URL` compartilham o mesmo orçamento conservador: se o endereço completo ultrapassaria 8.000 caracteres, a interface preserva o editor, não confirma sucesso e sugere Gist como alternativa existente. Conteúdo normal continua gerando URL reproduzível.

Nenhum problema material D1–D3 é contabilizado por `gap_score`; isso não elimina a elegibilidade de UX/UI para crítica futura.

## Capacidades da interface pública

- **GitHub Pages / publicação** — `last_verified: 2026-09-04`. A #31 entrou como `20f96cfbbd41715bb270f6eecaa71e7bb4d91f67`; Pages `33909370435` publicou esse mesmo commit.
- **Verificação funcional** — `last_verified: 2026-09-04`. `Test` `33909370588` passou em `main`, incluindo os casos novo de link normal, cópia excessiva e atualização excessiva.
- **Observação visual versionada** — `last_verified: 2026-09-04`. `Visual capture` `33909370422` passou no commit incorporado.
- **Observação depois da publicação** — `last_verified: 2026-09-04`. O pacote `9950763192`, `intuit-published-20f96cfbbd41715bb270f6eecaa71e7bb4d91f67`, registra a URL pública, 1440×900 e 390×844 e horário `2026-09-04T19:06:56Z`.
- **Preservação / transporte** — URL e Gist continuam sendo as formas públicas de transportar estado; a #31 torna explícita a fronteira entre elas para conteúdo grande.

## O que este projeto faz melhor que o Cobogó

Intuit demonstra uma forma barata de ligar revisão visual ao commit e à página publicada: o mesmo mecanismo observa servidor local durante PR/main e a URL Pages depois do deploy.

A #31 também mostra que “usar URL para estado compartilhável” não deve virar absolutismo. O produto escolheu um orçamento local, recusou o caso acima dele sem apagar conteúdo e apontou uma alternativa já existente. O Cobogó deve preservar esse invariante sem impor universalmente o número 8.000.

## Padrões do Cobogó em uso

- `visual-evidence-as-quality-gate` — aplicado pela observação ligada ao commit e repetida depois da publicação.
- `risk-changing-controls-explain-consequence` — `validated`: já funcionou em pelo menos um projeto real.
- `url-state-when-shareable` — `validated`: a #31 é a primeira aplicação real reconciliada; conteúdo normal permanece reproduzível por URL e conteúdo excessivamente grande é recusado com alternativa.
- `feedback-near-action` — aplicado pela mensagem no alerta da própria ferramenta quando Copy Link/Update URL não podem cumprir o contrato.

## Histórico

- 2026-09-04 — #31 recusou URLs compartilháveis acima do orçamento local, preservou editor/clipboard/endereço nos casos de recusa, acrescentou testes direcionados e foi publicada como `20f96cfb`; pacote posterior `9950763192`.
- 2026-09-04 — #30 tornou explícita a consequência de `Allow Scripts` e incorporou observação da URL publicada.
- 2026-09-02 — #28 adicionou observação estreita; primeira avaliação completa: 20/24.
- 2026-08-31 — #27 fechou foco explícito por teclado + reduced-motion; #26 adicionou observação visual reproduzível.
- 2026-08-16 — #17 fechou preview semântico, runtime `srcdoc`, Base64, tema observável, gate Test e deploy Pages.
