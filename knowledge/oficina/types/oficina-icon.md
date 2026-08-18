# OKF type contract — `oficina-icon`

`oficina-icon` representa **um conceito iconográfico experimental**, não apenas um arquivo de imagem.

A identidade do conceito é o Markdown. SVG, PNG, WebP ou outros formatos são recursos derivados/versionados daquele conceito.

## Invariantes

1. `slug` é estável mesmo se o desenho mudar.
2. `status` descreve a maturidade da hipótese, não a qualidade estética percebida.
3. `cultural_relevance` não substitui `cultural_scope`: reconhecer um objeto no Brasil não autoriza tratá-lo como universal brasileiro.
4. `stereotype_risk` é obrigatório conceitualmente para impedir que “brasilidade” vire exotização automática.
5. `semantic_candidates` são hipóteses a testar; não são equivalentes a `aria-label`, nome acessível ou significado universal.
6. Assets só podem ser referenciados quando existem. Não manter links aspiracionais quebrados no frontmatter.
7. A partir de `drawn`, `svg` e um preview raster devem resolver para arquivos reais.
8. Alteração visual substancial preserva o mesmo conceito quando a referência cultural/semântica permanece; variantes incompatíveis devem ganhar versionamento ou conceito separado.

## Campos mínimos por estado

### `proposed`

- `type`
- `name`
- `slug`
- `status`
- `category`
- `cultural_relevance`
- `cultural_scope`
- `stereotype_risk`
- `research_status`

### `researched`

Tudo de `proposed`, mais:

- `source_links`
- corpo com contexto/referências verificáveis

### `drawn`

Tudo de `researched`, mais:

- `visual_family`
- `license`
- `svg`
- `preview`
- opcionalmente `png_1x`, `png_2x`, `webp` ou variantes adicionais

### `pressure-tested`

Tudo de `drawn`, mais evidência no corpo indicando consumer/specimen, tarefa, estado e resultado observado — inclusive rejeição/confusão.

### `adopted`

Exige evidência downstream real. `adopted` continua **não significando** que o ícone entrou em `cobogo/core` ou no cânone.

### `rejected`

Preservar a razão da rejeição e a evidência que a sustenta. Não apagar o conceito apenas porque falhou; negative evidence evita repetir a hipótese.

## Assets e versões

Convenção sugerida quando começarmos a desenhar:

```text
knowledge/oficina/icons/assets/<slug>/
  icon.svg
  icon@1x.png
  icon@2x.png
  preview.png
```

Se a gramática visual passar a ter variantes formais verdadeiras (`outline`, `filled`, `duotone` etc.), versionar explicitamente em vez de sobrescrever silenciosamente o contrato.

## Acessibilidade

O ícone não carrega sozinho seu significado acessível. Consumers devem usar texto/accessible name conforme a tarefa. Um `oficina-icon` pode ser decorativo, informativo ou interativo dependendo do contexto; o asset não determina isso.
