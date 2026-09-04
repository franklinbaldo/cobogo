---
type: SurfaceQualityAssessment
repo: franklinbaldo/astronauta
date: 2026-09-04
commit: 2ee08c03e11aa7c9fec104ffe9db1403f4805c89
deploy: local-runtime:main
capture: artifact:9925739036
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

# Astronauta — avaliação após prova semântica de teclado e foco

## Veredito

**24 de 24 pontos — faixa de referência.** Clareza 4/4, Explicabilidade 4/4, Autonomia 4/4, UX 4/4, UI 4/4 e Confiança 4/4.

A nota máxima descreve as rotas e estados realmente observados; não significa certificação universal de acessibilidade nem garante todo estado futuro do admin. A diferença desta avaliação para a anterior é concreta: Confiança deixa de depender apenas de proveniência, fronteira de escrita e prova responsiva e passa a ter uma verificação reproduzível de semântica, teclado e foco no runtime SSR real.

A avaliação aponta para `2ee08c03e11aa7c9fec104ffe9db1403f4805c89`, o commit que realmente entrou em `main` depois da PR #45. Como o Astronauta é um admin SSR local servido em loopback e não possui Pages, a verificação equivalente à publicação é reiniciar o runtime real a partir do commit de `main` e repetir o teste. A execução `33843623459` fez isso e terminou verde.

## Clareza / D1

**4/4.** A pessoa entende que o Astronauta transforma um bundle OKF em um admin/editor local e distingue claramente leitura, edição e operações preview-first. Esta rodada não encontrou problema novo de compreensão do que a interface permite fazer.

## Explicabilidade / D2

**4/4.** Continua explícita a separação entre apresentação/interação do Astronauta e autoridade semântica e de escrita do `okf-parser`. O processo precisa nascer com `--write`; o navegador não concede a si mesmo essa autoridade. A nova verificação de acessibilidade não altera essa arquitetura.

## Autonomia / D3

**4/4.** O repositório continua oferecendo execução reproduzível com bundles OKF e prova do runtime instalado. A fixture determinística usada na auditoria reforça essa reprodutibilidade sem substituir os arquivos públicos reais do produto.

## UX

**4/4 — referência no escopo observado.** A navegação, a listagem densa e o editor continuam contidos em 390 px conforme a prova visual anterior. A nova auditoria acrescenta um fato importante: em `/types/Note`, a ordem de teclado alcança todos os 25 controles visíveis e habilitados; em `/concepts/edit/note-01`, alcança todos os 13. Nenhum controle esperado ficou de fora.

## UI

**4/4 — referência no escopo observado.** O tema escuro, a densidade e a composição administrativa foram preservados. A primeira execução da nova auditoria encontrou contraste insuficiente em textos auxiliares e no botão principal, um link de rodapé distinguível apenas por cor e uma região horizontal rolável sem caminho de foco. A correção reforçou contraste local, deixou o link sublinhado e tornou a região rolável focável e identificada, sem transformar a interface em outro produto nem eliminar a tabela densa.

O workflow `Visual evidence` permaneceu verde no commit final da PR e novamente em `main`, o que reduz o risco de a correção semântica ter criado regressão de composição ou responsividade.

## Confiança

**4/4 — referência no escopo observado.** O novo workflow `Semantic accessibility` executa Chrome real controlado por Playwright contra o mesmo runtime SSR usado pelo produto. Ele roda axe-core, percorre com `Tab` cada controle visível e habilitado e registra se o foco continua perceptível. Os arquivos JSON são preservados mesmo quando a auditoria reprova.

A primeira execução, no commit `956156a5313dab64b6da1d44f2981e9c3440e983`, reprovou e encontrou problemas reais; o critério não foi afrouxado. Depois das correções, o commit atual da branch antes do merge, `bc8b17e274cb2766a9204c799423540ba5a370fb`, ficou verde junto de CI, workflows funcionais, prova visual e GitGuardian.

A PR #45 foi incorporada como `2ee08c03e11aa7c9fec104ffe9db1403f4805c89`. A execução de `main` `33843623459` produziu o arquivo `9925739036`, `astronauta-accessibility-2ee08c03e11aa7c9fec104ffe9db1403f4805c89`. Nesse arquivo:

- `/types/Note`: HTTP 200, axe com 0 violações, 25/25 controles alcançados por teclado, 0 controles ausentes e 0 falhas de foco;
- `/concepts/edit/note-01`: HTTP 200, axe com 0 violações, 13/13 controles alcançados por teclado, 0 controles ausentes e 0 falhas de foco.

A proveniência do mesmo pacote registra `evaluated_sha=2ee08c03e11aa7c9fec104ffe9db1403f4805c89`, `event=push` e nenhuma referência temporária de merge, portanto o resultado corresponde ao commit real de `main`.

## Recomendações Cobogó relacionadas

- `semantic-accessibility-default` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais. O Astronauta passa a ser uma terceira aplicação independente: a convergência está em semântica, teclado, foco e nomes acessíveis, não em copiar aparência ou componentes.
- `visual-evidence-as-quality-gate` — **stable**; permaneceu verde durante a correção e protegeu a identidade visual e a responsividade já alcançadas.
- `rendered-evidence-manifest` — **validated**; a prova segue vinculando resultado ao commit efetivamente executado.

## Dívida concreta

Nenhuma dívida material nova foi comprovada nas dimensões atuais e nas rotas observadas. Isso não encerra a possibilidade de problemas assistivos fora do que axe, teclado automatizado e as rotas escolhidas conseguem detectar. Um relato assistivo real, uma nova rota crítica ou uma regressão são fatos novos suficientes para reabrir a avaliação.