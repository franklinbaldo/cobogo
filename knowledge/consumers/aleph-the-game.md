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

Preservar a experiência narrativa/imersiva borgiana, a atmosfera escura, motion como parte do feedback, controles de jogo e linguagem de text-adventure. Não converter escolhas, objetivos, sanidade/obsessão ou ação livre em semântica de dashboard.

## D1 — no site

O leitor pode acompanhar narrativa, escolher caminhos ou escrever uma ação livre. O repo não publica Pages/release standalone e não afirma que o faça.

Problema material comprovado: nenhum nesta dimensão.

## D2 — por trás

O README explica a fronteira React/Vite ↔ Gemini e o papel de Framer Motion/Web Speech API, sem prometer caminho generativo sem credencial.

Problema material comprovado: nenhum após #5.

## D3 — por conta própria

O checkout público é reutilizável por `npm install`, `GEMINI_API_KEY`, `npm run dev`, `npm run build` e `npm run preview`.

Problema material comprovado: nenhum.

## Capacidades de superfície

- AI Studio / entrada pública — `last_verified: 2026-09-02`; continua sendo o link público, mas não expõe identidade de deploy ligada ao SHA do repositório.
- CI de build — `last_verified: 2026-09-02`; build passou na branch da #7 e novamente no commit de `main` `de80a6023e05751982a0d8dc6949b59145b91ca8`.
- GitHub Pages/deploy próprio — `last_verified: 2026-09-02`; não existe no estado inspecionado.
- Captura visual/replay determinístico — `last_verified: 2026-09-02`; #7 produz quatro imagens em Chromium, desktop/celular × movimento normal/reduzido, mais manifesto ligado ao commit. A execução de `main` é `33702389955`, arquivo `9873996084`.
- Redução de movimento — `last_verified: 2026-09-02`; #7 aplica `useReducedMotion` em escolhas, texto progressivo e notificações; as quatro imagens de `main` preservam narrativa e ações.

## Avaliação atual

**21/24 — boa:** D1 4, D2 4, D3 4, UX 3, UI 3, Confiança 3. A UI não chega a 4 porque a data do cabeçalho é truncada no celular; #8 registra o problema. Confiança fica em 3 porque a captura prova o build de `main`, mas o link público de AI Studio não declara o SHA implantado.

## O que este consumer faz melhor que o Cobogó

O caso de ownership de teclado permanece aprendizagem útil: atalhos globais devem ceder ao controle focado que possui edição local. Agora o Aleph também oferece uma aplicação concreta de redução de movimento em uma experiência onde motion é parte da identidade, sem transformar acessibilidade em remoção de atmosfera.

## Padrões do Cobogó em uso

`visual-evidence-as-quality-gate` continua `stable`. `reduced-motion-respected` passa a `validated`: em linguagem comum, já funcionou em pelo menos um projeto real com evidência de navegador.

## Histórico

- 2026-09-02 — #7 mergeada em `de80a6023e05751982a0d8dc6949b59145b91ca8`; build e captura de `main` verdes; artifact `9873996084`; primeira avaliação completa 21/24; #8 aberta para truncamento da data no celular.
- 2026-09-02 — tentativa inicial da #7 não recebeu runner; a execução posterior mostrou que o problema era transitório. Quando os jobs voltaram, o teste revelou que `index.html` não montava `index.tsx` no build e que a primeira asserção móvel exigia um título deliberadamente escondido por CSS; ambos foram corrigidos antes do merge.
- 2026-09-02 — #6 registrou a ausência de captura determinística e tratamento comprovável de redução de movimento.
- 2026-08-31 — #5 tornou tese e fronteira React/Vite ↔ Gemini perceptíveis no README.
- 2026-08-16 — #2 corrigiu conflito entre atalhos e input, adicionou nomes acessíveis/`aria-pressed` e primeiro CI de build.
