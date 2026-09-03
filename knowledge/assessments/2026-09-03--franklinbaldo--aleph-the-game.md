---
type: SurfaceQualityAssessment
repo: franklinbaldo/aleph-the-game
date: 2026-09-03
commit: 1c342d875fc52e71ed91c38c7f7b064a8bbb73b8
deploy: https://github.com/franklinbaldo/aleph-the-game/actions/runs/33754380206
capture: artifact:9892849677
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 4
  trust: 3
total: 22
band: reference
blockers: []
trend: up
---

# Aleph the Game — avaliação de qualidade da interface pública

## Veredito

**22 de 24 pontos — faixa de referência.** A mudança em relação à avaliação anterior está concentrada em UI: ela sobe de 3 para 4 depois que a #9 eliminou o truncamento da data narrativa e a rolagem horizontal global que a validação mais forte tornou visível no celular.

A prova foi refeita depois do merge no commit que realmente entrou em `main`, `1c342d875fc52e71ed91c38c7f7b064a8bbb73b8`. A execução `Visual evidence` `33754380206` terminou com sucesso e produziu o arquivo `9892849677`. O manifesto desse arquivo registra largura do documento igual à largura da janela em 1280×900 e 390×844, tanto com movimento normal quanto com `prefers-reduced-motion: reduce`, e confirma a data `February 15, 1929` nos quatro casos.

O repositório continua sem publicação própria por Pages. O link público informado pelo projeto permanece no AI Studio; portanto, a observação acima comprova o build de `main`, não a identidade exata da versão hospedada externamente.

## Clareza / D1

**4/4.** A pessoa entende que pode acompanhar a narrativa, escolher caminhos ou escrever uma ação livre. A mudança do cabeçalho não removeu essas possibilidades nem criou uma nova interpretação do produto.

## Explicabilidade / D2

**4/4.** O README continua explicando a fronteira entre React/Vite e Gemini e o papel de Framer Motion/Web Speech API, sem prometer execução generativa sem credencial.

## Autonomia / D3

**4/4.** O checkout público continua reutilizável por instalação das dependências, `GEMINI_API_KEY`, desenvolvimento, build e preview. Nada nesta rodada alterou esse contrato.

## UX

**3/4 — boa.** A tarefa principal continua direta, escolhas e ação livre permanecem disponíveis e a redução de movimento conserva conteúdo e ações. A nota não sobe porque a observação automatizada ainda cobre o estado inicial determinístico, não uma sequência generativa completa com espera, falhas de API e retomada.

## UI

**4/4 — referência.** A linguagem escura/terminal continua própria do jogo, a data narrativa `February 15, 1929` agora permanece inteira em `390×844`, controles do cabeçalho continuam visíveis e o documento mede exatamente 390 px na janela de 390 px. O botão de narração de cada trecho também foi trazido para dentro da coluna no celular; em telas maiores ele preserva a posição externa original.

A primeira tentativa desta rodada não recebeu crédito: ao remover apenas a reticência da data, a validação mediu `406px > 390px`. O diagnóstico mostrou que o excesso vinha do botão de narração posicionado 32 px para fora da coluna. A nota 4 só foi atribuída depois de corrigir a causa e repetir a prova em `main`.

## Confiança

**3/4.** CI e verificação em navegador foram refeitos no commit real incorporado, com manifesto ligado a esse commit e medidas explícitas de responsividade. A redução de movimento continua coberta.

A nota permanece 3 porque a entrada pública do AI Studio não expõe uma identidade de publicação ligada ao commit do repositório. Seria incorreto usar a qualidade do build local versionado como prova de que o serviço externo está exatamente nessa versão.

## Impedimentos

Nenhuma dimensão está em 0 e não há impedimento objetivo para concluir esta rodada.

## Recomendações Cobogó

- `responsive-by-contract` passa a **validated**: em português comum, a recomendação de tratar responsividade como parte do contrato já funcionou em pelo menos um projeto real. No Aleph, o teste estreito exige informação necessária inteira, ausência de rolagem horizontal global e preservação dos controles, sem impor a aparência de outro projeto.
- `visual-evidence-as-quality-gate` continua **stable**: já funcionou de forma convergente em pelo menos dois projetos e, nesta rodada, impediu que uma correção aparentemente boa fosse aceita enquanto ainda havia 16 px de overflow.
- `reduced-motion-respected` continua **validated**: movimento reduzido preserva a mesma informação e ação nas imagens verificadas.

## Issues derivadas

- `franklinbaldo/aleph-the-game#8` — resolvida pela #9 e comprovada novamente em `main`.

## O que o Cobogó deve aprender deste Aleph

Responsividade útil é verificável sem padronizar layout. Para uma interface narrativa, o contrato pode ser pequeno e objetivo: estado curto necessário não é truncado, controles permanecem alcançáveis e o documento não cresce além da janela. O projeto local continua livre para decidir densidade, tipografia, atmosfera e posicionamento acima do breakpoint.