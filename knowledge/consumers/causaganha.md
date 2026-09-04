---
type: ConsumerCard
repo: franklinbaldo/causaganha
site: https://franklinbaldo.github.io/causaganha/
status: active
last_reviewed: 2026-09-04
gap_score: 0
---

# CausaGanha

## Identidade local

Preservar a identidade verde/dourada, a entrega Astro static-first, a tipografia e densidade próprias e a separação entre páginas explicativas e funcionais. Cobogó fornece uma barra de qualidade sem transformar o produto em aparência compartilhada.

## D1 — no site

O leitor encontra os destinos principais de forma inequívoca. A #1097 manteve os seis destinos na navegação principal e retirou a segunda navegação que repetia parte deles nas páginas funcionais.

Nenhum problema material de Clareza está demonstrado nas rotas observadas.

## D2 — por trás

`/sobre` continua explicando Arquivo / Estado / Teor, proveniência, atualização, limites por fonte e o caminho fonte → arquivo público → índice → interface.

Nenhum problema material de Explicabilidade está demonstrado.

## D3 — por conta própria

A interface e o repositório continuam oferecendo arquivos públicos e caminhos reproduzíveis de consulta fora do site, além do MCP local documentado em `/agentes`.

Nenhum problema material de Autonomia está demonstrado.

## Capacidades de superfície

- **GitHub Pages / publicação** — `last_verified: 2026-09-04`. A #1103 entrou como `943229226f045821fc44316986a8d2c397e1c74f`; `Deploy Web` `33905126802` construiu, publicou e voltou a abrir a página entregue ao leitor.
- **Observação visual determinística** — `last_verified: 2026-09-04`. O workflow compara múltiplas rotas em 1280×900 e 390×844. A branch da #1103 produziu `9949033960`; a página publicada produziu `9949238460`.
- **Acessibilidade reproduzível** — `last_verified: 2026-09-04`. A #1094 adicionou axe, navegação real por `Tab` e verificação de foco perceptível em seis rotas e duas larguras. No commit publicado `943229226f...`, as doze combinações ficaram sem violações sérias ou críticas, controles ausentes ou falhas de foco.
- **Observação depois da publicação** — `last_verified: 2026-09-04`. `published.json` de `9949238460` identifica `943229226f...` como revisão publicada e registra URL, horário, rotas e larguras.

## O que este projeto faz melhor que o Cobogó

- A adoção do core continua pinada por bytes sem apagar a identidade local.
- `/sobre` torna explícito o que cada fonte sustenta e o que não sustenta.
- A mesma rotina de navegador combina comparação visual, acessibilidade e verificação direta da página publicada, mantendo cada prova ligada ao commit observado.

## Padrões do Cobogó em uso

- `visual-evidence-as-quality-gate` — comparação antes/depois e nova observação depois da publicação ligadas a commit.
- `semantic-accessibility-default` — axe, teclado e foco fazem parte da observação da interface real e da página pública.
- `primary-navigation-perceptible-on-narrow-viewports` — validada pela #999.
- `secondary-navigation-readable-on-narrow-viewports` — validada pela #1103; o rodapé preserva os mesmos cinco destinos e passa a quebrar em grupos legíveis no celular.
- Parentesco sem uniformidade — fundações compartilhadas sem substituição da identidade verde/dourada.

## Histórico

- 2026-09-04 — avaliação sobe para 24/24 depois de #1097 eliminar a segunda navegação principal e #1103 restaurar separação legível dos links do rodapé em 390×844; o commit final `943229226f...` foi publicado e observado novamente nas seis rotas em desktop e celular.
- 2026-09-04 — #1094 torna acessibilidade parte da prova renderizada e da página publicada; o workspace já acompanha essa capacidade pela issue #43.
- 2026-09-02 — primeira avaliação completa 23/24; #999 fecha a descoberta da navegação móvel e valida `primary-navigation-perceptible-on-narrow-viewports`.
- 2026-09-01 — `/agentes` fecha a autonomia pública documentada e `gap_score` volta a 0.
- 2026-08-30 — `/sobre` passa a explicar Arquivo / Estado / Teor e limites por fonte.
