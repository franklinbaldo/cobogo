---
type: VisualSpecimen
id: specimens/cheio-vazio-grid-001
title: "Grid vazado 001 — composição escolhida"
experiment_id: experiments/cheio-vazio-grid-001
route: "/laboratorio/#cheio-vazio-grid-001"
artifact_path: "src/pages/laboratorio.astro"
status: published
notes:
  - "Publicado inicialmente pelo Deploy Pages #469 no merge f19e29cc67adbe7c5392847f4b9b09fd60280df8."
  - "A comparação da PR #599 expõe três variantes com o mesmo conteúdo; B é a candidata, A é funcional mas pouco expressiva e C foi rejeitada por separar excessivamente blocos relacionados."
  - "Os vazios são apenas apresentação progressiva e desaparecem abaixo de md, preservando a ordem semântica do DOM."
  - "A PR #599 foi mergeada como 7adf8bf803e0633ca9df1734bad369ba797ecf8b; o Deploy Pages #474 concluiu build e deploy com sucesso."
  - "O gate verify-published-surface do Deploy Pages #474 abriu e capturou /laboratorio/ em desktop 1600×1000 e mobile 390×844 e terminou sem falhas estruturais, ações sem nome ou overflow móvel."
---

# Specimen: Grid vazado 001

O specimen agora funciona como evidência comparativa, não como exemplo único apresentado depois da escolha. A composição candidata usa o vazio como contrapeso diagonal entre massas; as alternativas permanecem visíveis para tornar a decisão auditável. A superfície publicada da comparação foi verificada em desktop e mobile, sustentando o estado `promising` do experimento sem promovê-lo prematuramente a princípio.
