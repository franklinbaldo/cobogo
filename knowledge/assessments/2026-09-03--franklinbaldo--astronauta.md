---
type: SurfaceQualityAssessment
repo: franklinbaldo/astronauta
date: 2026-09-03
commit: 55232223e695cb2d27611b750ec94748e99023a1
deploy: local-runtime:main
capture: artifact:9888212021
scores:
  clarity: 4
  explainability: 4
  autonomy: 4
  ux: 3
  ui: 2
  trust: 3
total: 20
band: good
blockers: []
trend: baseline
---

# Astronauta — primeira avaliação completa da interface pública de uso local

## Veredito

**20 de 24 pontos — faixa boa.** Esta é a primeira avaliação completa que serve de referência para comparações futuras. O Astronauta é forte em clareza de tarefa, explicação da arquitetura e autonomia de execução. A maior dívida está na adaptação para tela estreita: em `390×844`, a página inteira fica mais larga que a janela tanto na listagem densa quanto no editor.

A avaliação aponta para `55232223e695cb2d27611b750ec94748e99023a1`, o commit que realmente entrou em `main` depois da PR #42. Como o produto é um admin SSR local servido em loopback, não existe publicação Pages a verificar. A etapa equivalente depois do merge é iniciar o runtime real sobre o commit de `main` e observar a mesma interface novamente.

A execução `Visual evidence` `33742274379` terminou com sucesso nesse commit e produziu o arquivo `9888212021`, chamado `astronauta-rendered-evidence-55232223e695cb2d27611b750ec94748e99023a1`. O `evidence.json` identifica o commit observado, as rotas e os quatro tamanhos/estados: leitura e edição em `1280×900` e `390×844`.

## Clareza / D1

**4/4.** O projeto deixa claro que transforma um diretório OKF em um admin/editor local. Na interface, a pessoa encontra tipos, conceitos, editor, importação, Apply, grafo e diagnósticos; na documentação, `astronauta PATH [--write]` explicita como abrir o produto e quando a escrita está habilitada.

## Explicabilidade / D2

**4/4.** O README explica a fronteira de responsabilidade: o Astronauta possui apresentação e interação, enquanto `okf-parser` possui a semântica e a mutação do filesystem. O browser não consegue conceder a si mesmo autoridade de escrita; o processo precisa nascer com `--write`. Os fluxos preview-first e a identidade de revisão do parser também estão descritos e exercitados pelos workflows funcionais.

## Autonomia / D3

**4/4.** O repositório fornece uma receita reproduzível de execução e o CI prova uma wheel instalada em ambiente consumidor fresco. O job `installed-artifact` executa o runtime sem Bun, sem checkout do source e sem build frontend feito pelo consumidor. A documentação também evita prometer um canal PyPI/GitHub Release que não foi verificado.

## UX

**3/4 — boa.** No desktop, a navegação e os fluxos de leitura e edição têm ordem clara. A listagem permite filtrar conceitos; o editor mostra contexto, corpo e orientação de preview. Os testes funcionais de editor, Apply e importação passaram no commit da PR e novamente em `main`.

A nota não sobe para 4 porque a versão de `390×844` exige rolagem horizontal da página. Na listagem, parte da navegação superior fica fora da janela; no editor, a região principal também ultrapassa o viewport. O fluxo continua possível, mas a pessoa precisa deslocar a página lateralmente para recuperar partes da interface. A issue `astronauta#43` registra a correção.

## UI

**2/4 — adequada com problema material.** Em `1280×900`, o tema escuro, a hierarquia tipográfica, os cartões, a tabela e a densidade administrativa são coerentes. A interface tem personalidade própria e não parece uma cópia de outros projetos do portfólio.

Em `390×844`, porém, há rolagem horizontal global visível nas duas rotas observadas. `/types/Note` ainda contém uma rolagem horizontal interna para a tabela de campos — aceitável para dados realmente largos —, mas o problema material é que o próprio documento também excede a largura da janela. `/concepts/edit/note-01` repete o problema, e a área de edição mantém largura maior que o viewport. Isso sustenta UI 2/4 até a #43 ser corrigida.

## Confiança

**3/4 — boa.** A fronteira de escrita é forte: `--write` pertence ao processo e a interface transporta uma identidade de revisão (`expected_source_digest`) em vez de inventar autoridade. A nova verificação visual também separa, em PR, o commit real da branch do commit sintético usado pelo GitHub para testar a combinação com `main`; em `main`, o arquivo produzido aponta diretamente para `55232223...`.

A nota fica em 3, não 4, porque esta rodada não trouxe prova suficiente de navegação por teclado, foco visível e demais aspectos de acessibilidade em runtime para chamar Confiança de referência. A ausência dessa prova não gera uma issue genérica por si só; apenas impede inflar a nota.

## Recomendações Cobogó relacionadas

- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos. A #42 mostra que a mesma regra é útil numa interface administrativa local e encontrou um defeito responsivo que todos os testes funcionais deixavam passar.
- `rendered-evidence-manifest` — passa a **validated**, isto é, já funcionou em pelo menos um projeto real. O Astronauta usa um formato local equivalente ao schema de referência: `evidence.json` registra commit real, fase do workflow, rotas, viewports e nomes dos arquivos. O formato não precisa ser idêntico ao default Cobogó para satisfazer os invariantes.

## Dívida concreta

- `astronauta#43` — eliminar rolagem horizontal da página em `390×844`, mantendo uma eventual rolagem local apenas onde uma tabela realmente larga precisar dela. Mantém UI em 2/4 e UX em 3/4.

Nenhuma outra issue foi aberta apenas para aumentar a nota. A avaliação atual já distingue o que está comprovadamente bom do que precisa de correção.