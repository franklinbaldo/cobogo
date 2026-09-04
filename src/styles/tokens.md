# Cobogó legacy/site identity tokens

Referência dos tokens concretos mantidos em [`global.css`](./global.css) para a camada histórica do site e compatibilidade de `cobogo/styles`.

> **Fronteira importante:** estes nomes (`--papel-*`, `--concreto-*`, `--azul`, `--vermelho`, `--bg`, `--fg` etc.) **não são a API semântica compartilhada do Cobogó entre consumers**. Para código framework-agnostic novo, importe `cobogo/core` e use/mapeie os papéis `--cobogo-*` documentados em [`knowledge/foundations/core-web-api.md`](../../knowledge/foundations/core-web-api.md). Um consumer pode adotar alguns dos tokens abaixo como identidade local, mas isso não os promove ao core.

> `cobogo/styles` continua disponível por compatibilidade e pelo próprio site do Cobogó. Dentro dessa camada, os tokens das seções abaixo são os nomes preferidos em relação aos aliases legacy do fim do documento.

## Paleta — Papel & Concreto

| Token | Hex | Uso |
| --- | --- | --- |
| `--papel-00` | `#FBF8F1` | Fundo principal elevado / Base |
| `--papel-10` | `#F5F1E8` | Fundo principal |
| `--papel-20` | `#EDE7D8` | Fundo rebaixado |
| `--papel-30` | `#DCD4BE` | Bordas e divisores suaves |
| `--concreto-40` | `#B8B0A0` | Elementos de UI inativos/desabilitados |
| `--concreto-60` | `#6B6455` | Texto secundário (muted) |
| `--concreto-80` | `#2E2A24` | Texto principal |
| `--concreto-90` | `#1A1814` | Títulos e elementos de alto contraste |

## Paleta — Primárias saturadas

| Token | Hex |
| --- | --- |
| `--azul` | `#1B2B4B` |
| `--azul-bright` | `#2D4A7B` |
| `--azul-soft` | `#E6ECF5` |
| `--vermelho` | `#C8472E` |
| `--vermelho-deep` | `#9C3422` |
| `--vermelho-soft` | `#F9E7E1` |
| `--ocre` | `#D9A441` |
| `--ocre-deep` | `#A87A1F` |
| `--ocre-soft` | `#F7EED6` |
| `--verde` | `#2E6B4A` |
| `--verde-soft` | `#DDEBE1` |

## Tokens semânticos da camada `cobogo/styles`

| Token | Aponta para | Uso |
| --- | --- | --- |
| `--bg` | `var(--papel-10)` | Fundo principal |
| `--bg-raised` | `var(--papel-00)` | Fundo elevado (cards, modais) |
| `--bg-sunken` | `var(--papel-20)` | Fundo rebaixado (áreas secundárias) |
| `--fg` | `var(--concreto-80)` | Texto padrão |
| `--fg-muted` | `var(--concreto-60)` | Texto secundário |
| `--fg-heading` | `var(--concreto-90)` | Títulos |
| `--border` | `var(--papel-30)` | Bordas padrão |
| `--border-strong` | `var(--concreto-80)` | Bordas de alto contraste |
| `--accent` | `var(--azul)` | Cor de destaque/interativa |

Esses papéis locais podem ser mapeados para o core, por exemplo `--cobogo-canvas: var(--bg)` e `--cobogo-text: var(--fg)`, sem obrigar outro consumer a adotar a mesma paleta ou os mesmos nomes locais.

## Tipografia

Famílias utilizadas na camada histórica/site: Archivo, Fraunces, Piazzolla, JetBrains Mono.

| Token | Família |
| --- | --- |
| `--font-display` | `"Archivo", "Archivo Black", sans-serif` |
| `--font-display-alt` | `"Fraunces", Georgia, serif` |
| `--font-sans` | `"Archivo", sans-serif` |
| `--font-serif` | `"Piazzolla", Georgia, serif` |

## Escala tipográfica

| Token | Tamanho/Valor | Uso sugerido |
| --- | --- | --- |
| `--t-micro` | `11px` | Texto muito pequeno, labels |
| `--t-small` | `13px` | Metadados, legendas |
| `--t-body` | `16px` | Texto corrido padrão |
| `--t-lede` | `19px` | Linha de apoio, introdução |
| `--t-h4` | `22px` | Título de nível 4 |
| `--t-h3` | `30px` | Título de nível 3 |
| `--t-h2` | `44px` | Título de nível 2 |
| `--t-h1` | `68px` | Título de nível 1 |
| `--t-display` | `112px` | Títulos enormes, destaque |
| `--lh-tight` | `0.95` | Line-height para títulos |
| `--lh-body` | `1.55` | Line-height para texto corrido |

## Radius / Shadow / Motion

| Token | Valor |
| --- | --- |
| `--r-1` | `2px` |
| `--r-soft` | `8px` |
| `--r-pill` | `9999px` |
| `--shadow-1` | `2px 2px 0 var(--concreto-90)` |
| `--shadow-2` | `4px 4px 0 var(--concreto-90)` |
| `--dur-2` | `220ms` |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` |

## Aliases legacy dentro da camada de compatibilidade

> Mantidos para retrocompatibilidade. Em `cobogo/styles`, prefira os tokens concretos/semânticos das seções acima; em integração compartilhada entre consumers, prefira `cobogo/core` e `--cobogo-*`.

- `--color-primary`
- `--color-accent`
- `--color-azul`
- `--color-verde`
- `--color-ouro`
- `--color-vermelho`
- `--color-surface`
- `--color-bg`
- `--color-border`
- `--color-text`
- `--color-text-dim`
- `--color-heading`
- `--radius-sm`
- `--radius-pill`
- `--shadow-sm`
- `--shadow-pool-sm`
- `--duration-bossa`
- `--ease-curva`
- `--font-main`
- `--font-body`
- `--font-display-legacy`
