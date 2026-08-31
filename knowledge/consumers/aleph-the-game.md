---
type: ConsumerCard
repo: franklinbaldo/aleph-the-game
site: https://ai.studio/apps/drive/1JXiDQeCTanzoiO1rs5hJVisB5neAytxW
status: active
last_reviewed: 2026-08-31
gap_score: 0
---

# Aleph the Game

## Identidade local

Preservar a experiência narrativa/imersiva borgiana, a atmosfera escura, motion como parte do feedback, controles de jogo e linguagem de text-adventure. Não converter escolhas, objetivos, sanidade/obsessão ou ação livre em semântica de dashboard. O mapa de teclas, narrativa, imagens, áudio e composição permanecem consumer-local.

## D1 — no site

O leitor pode abrir a aplicação pelo link de AI Studio publicado no README. A implementação oferece escolhas narrativas, ação livre por texto, objetivos, áudio/voz, imagens/soundtrack gerados, idioma e atalhos numéricos fora do campo de edição.

Gap: nenhum material comprovado na dimensão do leitor. O repo não publica Pages nem uma release standalone e não afirma que o faça. A ausência de captura determinística continua sendo uma dívida de verificação da superfície, não uma capacidade fictícia do produto.

## D2 — por trás

Conforme o `ProjectProfile`, é uma experiência narrativa/imersiva assistida por IA: React 19 + Vite mantêm a interface e o estado/interação imediata; Gemini gera novo material narrativo e mídia relacionada ao estado do jogo; Framer Motion sustenta motion; Web Speech API é usada quando voz está disponível no browser.

A PR `franklinbaldo/aleph-the-game#5` substituiu o boilerplate genérico de AI Studio no README por essa explicação factual, incluindo a fronteira de que o caminho generativo exige chave Gemini e que o repo não publica release standalone/offline.

Gap: nenhum material após #5.

## D3 — por conta própria

O artefato reutilizável publicado é o próprio source checkout. O README fornece a sequência reproduzível `npm install` → `GEMINI_API_KEY` em `.env.local` → `npm run dev`, além de `npm run build` e `npm run preview` para validar a build de produção.

Gap: nenhum material. Não há release/binário publicado e a superfície não afirma que exista.

## Capacidades de superfície

- AI Studio link / entrada pública — `last_verified: 2026-08-31`; link versionado no README; não substitui evidência determinística local.
- CI de build — `last_verified: 2026-08-31`; Node 22 + install + `npm run build`; PR #5 verde no head `e9154e21e0b3d0c725abbab23a394091b96180a8` e `main` verde no merge `546249e6a9259056ab208d460d88174509a702b4`.
- GitHub Pages/deploy próprio — `last_verified: 2026-08-31`; não há capacidade publicada no repo inspecionado.
- Captura visual/replay determinístico — `last_verified: 2026-08-31`; ausente. O `ProjectProfile` mantém isso como próximo marco de verificabilidade.
- Preservação — `last_verified: 2026-08-31`; nenhuma capacidade específica observada.

## O que este consumer faz melhor que o Cobogó

O caso de ownership de teclado permanece aprendizagem útil: atalhos globais/ambientais devem ceder ao controle focado que possui edição local. A evidência ainda é de um consumer e não satisfaz o gate de promoção.

## Padrões do Cobogó em uso

Nenhum componente/pattern compartilhado promovido. A correção de ownership de teclado da #2 é solução local e pressure test, não adoção do design system.

## Histórico

- 2026-08-31 — PR #5 fecha o gap D2 do README: tese, interação e fronteira React/Vite ↔ Gemini tornam-se perceptíveis sem alterar o jogo; CI verde no head e no merge.
- 2026-08-31 — card migrado para `ConsumerCard`; `gap_score: 0`; captura determinística permanece dívida operacional, não gap editorial.
- 2026-08-16 — PR #2 fecha conflito entre input livre e atalhos globais, adiciona nomes acessíveis/`aria-pressed` e primeiro CI de build.
