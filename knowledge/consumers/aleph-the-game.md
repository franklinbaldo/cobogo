---
type: ConsumerCard
repo: franklinbaldo/aleph-the-game
site: https://ai.studio/apps/drive/1JXiDQeCTanzoiO1rs5hJVisB5neAytxW
status: active
last_reviewed: 2026-09-05
gap_score: 0
---

# Aleph the Game

## Identidade local

Preservar a experiência narrativa/imersiva borgiana, a atmosfera escura, movimento como parte do feedback, controles de jogo e linguagem de text-adventure. Não converter escolhas, objetivos, sanidade/obsessão ou ação livre em semântica de dashboard.

## D1 — no site

O leitor pode acompanhar narrativa, escolher caminhos ou escrever uma ação livre. O repositório não publica Pages/release standalone e não afirma que o faça.

Problema material comprovado: nenhum nesta dimensão.

## D2 — por trás

O README explica a fronteira React/Vite ↔ Gemini e o papel de Framer Motion/Web Speech API, sem prometer caminho generativo sem credencial.

Problema material comprovado: nenhum após #5.

## D3 — por conta própria

O checkout público é reutilizável por `npm install`, `GEMINI_API_KEY`, `npm run dev`, `npm run build` e `npm run preview`.

Problema material comprovado: nenhum.

## Capacidades da interface pública

- AI Studio / entrada pública — `last_verified: 2026-09-05`; continua sendo o link público, mas não expõe identidade de publicação ligada ao commit do repositório.
- CI de build — `last_verified: 2026-09-05`; passou no `main` `802ffdf7f472491311dddc4effa028d676879584` depois da #11.
- GitHub Pages/deploy próprio — `last_verified: 2026-09-05`; não existe no estado inspecionado.
- Verificação visual/replay determinístico — `last_verified: 2026-09-05`; além dos quatro estados desktop/celular × movimento normal/reduzido, a #11 acrescenta falha de geração + retry em 390×844. A execução posterior ao merge produziu o arquivo `9966270802` no `main` `802ffdf7f472491311dddc4effa028d676879584`.
- Redução de movimento — `last_verified: 2026-09-05`; os estados continuam preservando narrativa e ações.
- Recuperação de geração — `last_verified: 2026-09-05`; falha externa não vira mais narrativa. O aviso fica separado da história, a ação original é preservada e `Retry last action` repete a tentativa sem duplicar a decisão do jogador.

## Avaliação atual

**23/24 — faixa de referência:** D1 4, D2 4, D3 4, UX 4, UI 4, Confiança 3. UX sobe para 4 porque o caminho de falha generativa agora é exercitado de ponta a ponta no navegador: a intenção original aparece uma única vez, o erro é perceptível, a recuperação é explícita e não contamina o domínio narrativo. Confiança permanece 3 porque o build de `main` é verificável, mas o link público do AI Studio não declara qual commit está implantado.

## O que este projeto faz melhor que o Cobogó

O caso de ownership de teclado permanece aprendizagem útil: atalhos globais devem ceder ao controle focado que possui edição local. O Aleph também mostra que uma interface narrativa pode tratar redução de movimento, responsividade e agora recuperação de erro como contratos mensuráveis sem trocar sua atmosfera por uma apresentação padronizada.

## Recomendações do Cobogó em uso

`visual-evidence-as-quality-gate` continua `stable`, isto é, já funcionou de modo convergente em pelo menos dois projetos. `reduced-motion-respected` e `responsive-by-contract` permanecem validadas. `feedback-near-action` passa a ter sua segunda aplicação independente: no Aleph, uma falha de geração fica no contexto da ação e oferece retry sem fabricar história. Como o Intuit e o Aleph preservam identidades muito diferentes, a recomendação pode ser considerada `stable`, isto é, funcionou de forma convergente em pelo menos dois projetos reais distintos.

## Histórico

- 2026-09-05 — #11 incorporada em `802ffdf7f472491311dddc4effa028d676879584`; CI e verificação visual posteriores ao merge verdes; arquivo `9966270802`. O print anterior `9966232370` mostra `ERROR CONNECTING TO THE ALEPH` dentro da história com `Attempt to reconnect`; o posterior mostra `Timeline interrupted` separado da narrativa e `Retry last action`, preservando a ação do jogador uma única vez. UX sobe de 3 para 4; avaliação total passa de 22 para 23.
- 2026-09-03 — #9 incorporada em `1c342d875fc52e71ed91c38c7f7b064a8bbb73b8`; CI e verificação visual de `main` verdes; arquivo `9892849677`; data móvel inteira, ausência de rolagem horizontal global comprovada e avaliação sobe para 22/24.
- 2026-09-03 — a primeira correção da #9 não foi aceita: ao remover apenas a reticência, a verificação mediu 406 px de documento numa janela de 390 px. O diagnóstico localizou o excesso no botão de narração posicionado fora da coluna; ele foi trazido para dentro apenas no celular, preservando a composição desktop.
- 2026-09-02 — #7 incorporada em `de80a6023e05751982a0d8dc6949b59145b91ca8`; build e verificação visual de `main` verdes; arquivo `9873996084`; primeira avaliação completa 21/24; #8 aberta para truncamento da data no celular.
- 2026-09-02 — tentativa inicial da #7 não recebeu runner; a execução posterior mostrou que o problema era transitório. Quando os jobs voltaram, o teste revelou que `index.html` não montava `index.tsx` no build e que a primeira asserção móvel exigia um título deliberadamente escondido por CSS; ambos foram corrigidos antes do merge.
- 2026-09-02 — #6 registrou a ausência de captura determinística e tratamento comprovável de redução de movimento.
- 2026-08-31 — #5 tornou tese e fronteira React/Vite ↔ Gemini perceptíveis no README.
- 2026-08-16 — #2 corrigiu conflito entre atalhos e input, adicionou nomes acessíveis/`aria-pressed` e primeiro CI de build.
