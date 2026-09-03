---
type: ConsumerCard
repo: franklinbaldo/aleph-the-game
site: https://ai.studio/apps/drive/1JXiDQeCTanzoiO1rs5hJVisB5neAytxW
status: active
last_reviewed: 2026-09-02
gap_score: 0
---

# Aleph the Game

## Identidade local

Preservar a experiência narrativa/imersiva borgiana, a atmosfera escura, motion como parte do feedback, controles de jogo e linguagem de text-adventure. Não converter escolhas, objetivos, sanidade/obsessão ou ação livre em semântica de dashboard. O mapa de teclas, narrativa, imagens, áudio e composição permanecem consumer-local.

## D1 — no site

O leitor pode abrir a aplicação pelo link de AI Studio publicado no README. A implementação oferece escolhas narrativas, ação livre por texto, objetivos, áudio/voz, imagens/soundtrack gerados, idioma e atalhos numéricos fora do campo de edição.

Problema material comprovado: nenhum nesta dimensão. O repo não publica Pages nem uma release standalone e não afirma que o faça. A ausência de captura determinística continua sendo dívida de verificação da interface, não uma capacidade fictícia do produto.

## D2 — por trás

Conforme o `ProjectProfile`, é uma experiência narrativa/imersiva assistida por IA: React 19 + Vite mantêm a interface e o estado/interação imediata; Gemini gera novo material narrativo e mídia relacionada ao estado do jogo; Framer Motion sustenta motion; Web Speech API é usada quando voz está disponível no browser.

A PR `franklinbaldo/aleph-the-game#5` substituiu o boilerplate genérico de AI Studio no README por essa explicação factual, incluindo a fronteira de que o caminho generativo exige chave Gemini e que o repo não publica release standalone/offline.

Problema material comprovado: nenhum após #5.

## D3 — por conta própria

O arquivo público reutilizável é o próprio source checkout. O README fornece a sequência reproduzível `npm install` → `GEMINI_API_KEY` em `.env.local` → `npm run dev`, além de `npm run build` e `npm run preview` para validar a build de produção.

Problema material comprovado: nenhum. Não há release/binário publicado e a interface não afirma que exista.

## Capacidades de superfície

- AI Studio link / entrada pública — `last_verified: 2026-09-02`; link segue versionado no README; não substitui evidência determinística ligada ao commit.
- CI de build — `last_verified: 2026-09-02`; capacidade versionada continua presente. Na tentativa da PR #7, o GitHub Actions criou o job mas não executou nenhuma etapa, então essa execução não testou o código.
- GitHub Pages/deploy próprio — `last_verified: 2026-09-02`; não há capacidade publicada no repo inspecionado.
- Captura visual/replay determinístico — `last_verified: 2026-09-02`; PR `franklinbaldo/aleph-the-game#7` propõe Playwright sem segredo, quatro condições de viewport/movimento e manifesto ligado ao commit. Ainda não conta como capacidade comprovada porque o job `capture` terminou com zero etapas executadas e sem runner.
- Redução de movimento — `last_verified: 2026-09-02`; a #7 propõe tratamento explícito em `ChoiceButton`, `TypingText` e `ToastNotification`, preservando conteúdo e ação. Ainda não foi comprovado em navegador porque os checks não chegaram ao código.
- Preservação — `last_verified: 2026-09-02`; nenhuma capacidade específica observada.

## O que este consumer faz melhor que o Cobogó

O caso de ownership de teclado permanece aprendizagem útil: atalhos globais/ambientais devem ceder ao controle focado que possui edição local. A evidência de um consumer já basta para manter a recomendação como opinião/experimento quando o racional for generalizável; evidência independente adicional é requisito de maturidade `stable`, não permissão para o Cobogó formular a regra.

## Padrões do Cobogó em uso

Nenhum componente/pattern compartilhado promovido. A correção de ownership de teclado da #2 é solução local e pressure test, não adoção do design system. As recomendações `reduced-motion-respected` e `visual-evidence-as-quality-gate` são aplicáveis à dívida registrada na #6. A #7 é uma tentativa concreta de aplicação, mas não muda o estado de nenhuma recomendação enquanto build/captura não forem realmente executados e comprovados.

## Histórico

- 2026-09-02 — PR #7 propõe captura real sem Gemini e redução de movimento preservando informação/ação. GitGuardian passou, mas os jobs `build` e `capture` terminaram com zero etapas e nenhum runner; a rotina não interpreta isso como falha nem como sucesso do código. Retomar somente quando uma execução realmente chegar às etapas do workflow.
- 2026-09-02 — primeira avaliação pela governança opinionada identifica que `gap_score: 0` não torna a interface auditada: UI/UX/confiança permanecem sem evidência visual reprodutível; #6 registra fixture/captura/reduced-motion e o card remove linguagem do antigo gate conservador.
- 2026-08-31 — PR #5 fecha o problema D2 do README: tese, interação e fronteira React/Vite ↔ Gemini tornam-se perceptíveis sem alterar o jogo; CI verde no commit da branch e no merge.
- 2026-08-31 — card migrado para `ConsumerCard`; `gap_score: 0`; captura determinística permanece dívida operacional, não problema editorial.
- 2026-08-16 — PR #2 fecha conflito entre input livre e atalhos globais, adiciona nomes acessíveis/`aria-pressed` e primeiro CI de build.
