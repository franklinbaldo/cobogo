---
type: ConsumerCard
repo: franklinbaldo/the-lab
site: https://franklinbaldo.github.io/the-lab/
status: active
last_reviewed: 2026-08-31
gap_score: 1
---

# The Lab

## Identidade local

Publicação de pesquisa do Rosencrantz Substrate Invariance Lab. Preservar Inter/JetBrains Mono, light/dark local, superfícies glass/glow, paleta por persona, linguagem de laboratório e leitura de papers/logs/RFEs como documentos. Cobogó não deve transformar a publicação em dashboard nem importar a identidade de outro consumer.

## D1 — no site

A home pública permite navegar por Articles, Lab, Team e About, ler o latest dispatch e entrar no arquivo de pesquisa. A superfície continua respondendo em 2026-08-31.

Gap `[fato]`: nenhum D1 material demonstrado nesta rodada.

## D2 — por trás

O repo documenta um site Astro para o Rosencrantz Substrate Invariance Lab, alimentado por conteúdo sincronizado de `franklinbaldo/rosencrantz-coin`. `main` já contém em `site/src/layouts/Layout.astro` uma inscrição condicional de provenance no footer: `Source snapshot`, repository@short-sha e data do snapshot upstream.

Gap `[fato]`: **material**. A home publicada observada em 2026-08-31 ainda termina em GitHub · Papers · Lab State e não mostra `Source snapshot`. `franklinbaldo/the-lab#128` confirma que `Deploy Site` está `disabled_manually`, portanto `main` e Pages podem divergir. O gap não pede nova solução de UI; pede materializar e verificar a solução local já implementada.

O workspace não contém atualmente `knowledge/projects/the-lab.md`; `franklinbaldo/workspace#30` foi aberto para restaurar a autoridade factual de tese/estado/capacidades/sinergias. Até isso ocorrer, este card não amplia claims além do que repo + superfície provam diretamente.

## D3 — por conta própria

A superfície oferece GitHub, Papers e Lab State, permitindo leitura do arquivo e inspeção do source público independentemente da maquinaria de sync.

Gap `[fato]`: nenhum dataset/API/release autônomo adicional foi provado pelo repo e ocultado pela superfície nesta rodada.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-08-31`: Pages responde, mas `Deploy Site` está `disabled_manually`; #128 permanece aberta. O estado publicado não pode ser tratado como projeção atual de `main`.
- **Captura visual** — `last_verified: 2026-08-31`: houve evidência browser histórica na campanha anterior, porém não foi localizada nesta rodada uma capacidade canônica/reproduzível de screenshot que possa ser exercitada para o estado atual. Não elevar evidência histórica a captura atual.
- **Smoke/build** — `last_verified: 2026-08-31`: o workflow de deploy contém `npm ci` + `npm run build`, mas está indisponível enquanto desabilitado; configuração não equivale a execução verde atual.
- **Preservação** — `last_verified: 2026-08-31`: nenhum Save Page Now atual foi verificado.

## O que este consumer faz melhor que o Cobogó

A solução local de provenance é pequena e apropriada ao produto: liga a publicação gerada ao snapshot upstream exato sem deslocar papers/artigos do centro da experiência. Continua sendo evidência de um consumer; não satisfaz o gate de promoção compartilhada.

## Padrões do Cobogó em uso

- Reduced-motion como invariante de gramática, implementado localmente sem importar a identidade do Cobogó.
- Provenance progressiva de publicação gerada, ainda sem promoção porque o deploy/captura atuais não fecharam a evidência.
- Configuração, execução, publicação e evidência renderizada permanecem classes distintas.

## Histórico

- 2026-08-31 — card migrado para `ConsumerCard`; Pages responde, mas D2 fica em gap 1 porque `Source snapshot` está em `main` e não na superfície publicada; deploy segue bloqueado por #128; workspace#30 aberto por ausência de ProjectProfile.
- 2026-08-15 — confirmado `Deploy Site` em `disabled_manually`; #128 abriu o blocker de materialização/verificação da provenance.
- 2026-08-14 — #127 mergeou provenance repo/SHA/data do snapshot upstream em `main`.
- 2026-08-11 — reduced-motion corrigido localmente; core adoption medido e recusado por baixa utilidade/alto overlap vazio.
