# Cobogó knowledge

Este diretório é o corpus canônico de conhecimento reutilizável do Cobogó.

O bundle é lido diretamente por `okf-parser`. Não existe wrapper Cobogó, banco paralelo ou identidade alternativa.

## Regra de autoria

Pesquisa não vira cânone por proximidade. A cadeia mínima é:

```text
source → observed phenomenon → derived rule → software consequence → specimen/consumer
```

Toda referência deve registrar contexto, limite de uso e risco de estereótipo. Links Markdown entre conceitos são intencionais: fazem parte do grafo OKF e devem apontar para conceitos reais do bundle.

## Oficina experimental

`knowledge/oficina/` é uma camada experimental dentro do mesmo bundle OKF. Seus conceitos podem preceder adoção consumer, mas não são automaticamente cânone, pattern ou capability de core. A promoção depende de evidência posterior; rejeições e pressure tests negativos permanecem conhecimento útil.

## Consultas básicas

A partir de um checkout de `franklinbaldo/okf-parser`:

```bash
uv run okf-parser check /path/to/cobogo/knowledge
uv run okf-parser inventory /path/to/cobogo/knowledge
uv run okf-parser graph /path/to/cobogo/knowledge
uv run okf-parser duckdb /path/to/cobogo/knowledge cobogo-knowledge.duckdb
```

Agentes devem preferir essas superfícies e o MCP do `okf-parser` diretamente. Astronauta é uma interface humana/projeção opcional sobre o mesmo bundle.

## Tipos iniciais em uso

- `visual-reference`
- `canon-rule`
- `consumer`
- `counterexample`
- `oficina-icon` — conceito iconográfico experimental; contrato documentado em [`oficina/icons/`](oficina/icons/index.md)

Tipos adicionais só devem ser introduzidos quando conceitos concretos exigirem distinção operacional.
