---
type: ConsumerCard
repo: franklinbaldo/franklinbaldo.github.io
site: https://franklinbaldo.github.io/
status: active
last_reviewed: 2026-09-03
gap_score: 0
---

# Franklin blog

## Identidade local

Blog pessoal e jardim digital: preservar a voz editorial, leitura longa, rotas bilíngues, Fraunces/Inter, arquivo e superfícies autorais como Hrönir, música, livros e audiolivros. Cobogó pode fornecer relações e critérios, mas não deve transformar a publicação numa interface editorial genérica.

## D1 — no site

O leitor pode ler ensaios e caminhos de leitura, navegar arquivo, tags e busca, alternar entre rotas EN/PT, explorar projetos, ranking Hrönir, música, livros, audiolivros e changelog, assinar RSS e acessar o catálogo `/audiobooks/` pela navegação global secundária.

**Problema material atual:** nenhum em D1. A avaliação de 2026-09-03 confirma 4/4.

## D2 — por trás

O repositório prova Astro + MDX, Pagefind, publicação em GitHub Pages e Hrönir como curadoria pairwise persistida e projetada no ranking público. O Colophon/Colofão explica progressivamente parte dessa maquinaria. A camada Audiobook Factory também está incorporada, mas afirmações públicas continuam condicionadas ao estado real de cada obra.

**Problema material atual:** nenhum em D2. A avaliação de 2026-09-03 confirma 4/4.

## D3 — por conta própria

O leitor pode consumir RSS EN/PT, usar arquivo/busca sem contexto adicional, inspecionar o source público e reproduzir o site a partir do checkout documentado. O ranking Hrönir projeta dados versionados no repositório para uma superfície pública de curadoria.

**Problema material atual:** nenhum em D3. A avaliação de 2026-09-03 confirma 4/4.

## Capacidades de superfície

- **Pages/deploy** — `last_verified: 2026-09-03`. O `main` observado está em `aad33f3c78281295376da4e9278d79e87a2e64c7`, depois da #1667.
- **Captura visual** — `last_verified: 2026-09-03`. `Visual evidence` execução `33720285374` concluiu com sucesso no mesmo commit e produziu o arquivo `9880072226`, `visual-evidence-aad33f3c78281295376da4e9278d79e87a2e64c7`. A home e a 404 foram examinadas em desktop e celular.
- **Smoke/CI** — `last_verified: 2026-09-03`. A captura atual prova o build/render do `main`; verificações de PR continuam separadas da publicação.
- **Preservação** — nenhum Save Page Now novo foi verificado nesta rodada.

## O que este projeto faz melhor que o Cobogó

- [`commit-addressed-visual-evidence`](../concepts/commit-addressed-visual-evidence.md) — transforma o conjunto local de screenshots em arquivos de CI ligados ao commit, permitindo comparação reproduzível sem exigir runtime local da rotina.
- A 404 trata recuperação como conteúdo editorial: busca, textos recentes e rotas alternativas mantêm a voz local em vez de copiar um componente genérico de erro.

## Padrões do Cobogó em uso

- Explicação progressiva da maquinaria sem transformar a superfície em README técnico.
- Afirmações públicas precisam permanecer compatíveis com o repositório atual.
- Foco explícito e integrado à identidade local nas superfícies interativas.
- Configuração, execução, publicação e evidência visual permanecem classes separadas.
- `recovery-options-preserve-readable-flow` — validada aqui: opções de recuperação continuam legíveis em tela estreita depois da #1663 e de mudanças posteriores.

## Avaliação de qualidade

Em 2026-09-03: **23/24 — referência**. Clareza 4, Explicabilidade 4, Autonomia 4, UX 4, UI 4, Confiança 3. A única dívida material registrada é `franklinbaldo.github.io#1664`: em PR, o nome do arquivo visual ainda pode identificar o commit sintético de teste de merge em vez do commit real da branch.

## Histórico

- 2026-09-03 — primeira avaliação completa: 23/24; captura `9880072226` no `main` `aad33f3c...`; fluxo móvel da 404 continua legível; `recovery-options-preserve-readable-flow` passa a validada.
- 2026-09-02 — #1663 incorporada em `e76a6253...`: opções de recuperação da 404 passam a fluxo legível no celular; #1664 registra a ambiguidade do nome do arquivo visual em PR.
- 2026-09-01 — rerun do Pages `33535970297` ficou verde no merge #1640; home publicada confirmou `Audiobooks` no Header/More e Footer; #1637/#1645 fechadas e `gap_score: 0`.
- 2026-09-01 — #1640 mergeada em `eebbe97a`: Header/Footer ganham audiolivros e evidência visual passa a ser arquivo de CI.