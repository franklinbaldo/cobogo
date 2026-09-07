---
type: VisualSpecimen
id: specimens/cheio-vazio-mobile-003
title: "Comparação do vazio móvel 003"
experiment_id: experiments/cheio-vazio-mobile-003
route: "/laboratorio/mobile-003/"
artifact_path: "src/pages/laboratorio/mobile-003.astro"
status: published
notes:
  - "Compara três pilhas móveis com o mesmo conteúdo e a mesma ordem DOM."
  - "A variante A controla o espaçamento normal; B testa pausa curta; C testa pausa longa."
  - "No preview publicado do SHA 6d485a10bc29d5d571d405ad2e2fb867e0f26040, B preserva continuidade em 320px e 390px; C produz uma ruptura vertical forte demais."
  - "O gate publicado verificou a rota em 1600×1000, 390×844 e 320×800 sem overflow, falhas estruturais ou ações sem nome."
---

# Specimen: Vazio móvel 003

Comparação mobile-first publicada. O resultado separa duas coisas que antes estavam misturadas: vazio curto pode permanecer estrutural em tela estreita quando sucede um grupo semanticamente completo; vazio longo consome rápido demais o orçamento vertical e enfraquece a continuidade.
