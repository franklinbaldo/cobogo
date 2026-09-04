---
type: ConsumerCard
repo: franklinbaldo/ficha
site: https://franklinbaldo.github.io/ficha/
status: active
last_reviewed: 2026-09-04
gap_score: 0
---

# Ficha

## Identidade local

Ficha é um fichário público, histórico e reutilizável de dados de CNPJ da Receita Federal. Preserve o nome FICHA, a metáfora de fichário/arquivo datado, o cabeçalho escuro, a linguagem de competência/proveniência e a composição editorial própria. A adoção do Cobogó é em camadas (`core` compartilhado → mapeamento semântico local → CSS de produto), não uma pele visual comum.

## D1 — no site

O leitor pode consultar empresas e vínculos públicos diretamente no navegador. A home mantém a consulta como ação principal. Problema material observado: nenhum.

## D2 — por trás

O projeto preserva snapshots mensais verificáveis dos dados públicos de CNPJ da Receita Federal e expõe origem, competência, preservação, verificação e estado. Problema material observado: nenhum.

## D3 — por conta própria

O leitor pode abrir `manifest.json` e reutilizar fora do site os arquivos indicados pelo contrato público. Problema material observado: nenhum.

## Capacidades da interface pública

- GitHub Pages — verificado em 2026-09-04; a #241 entrou em `main` como `73c4696479dcc39dab7c3afe5c9e74b05dc4808d` e a publicação `33861297403` terminou com sucesso nesse commit.
- Observação visual — permanece ligada ao commit real observado, com desktop e tela estreita e identificação consistente entre os arquivos produzidos.
- Acessibilidade semântica no build — axe, teclado e foco continuam verificados em Chromium real.
- Acessibilidade semântica na página publicada — nova capacidade comprovada pela #241. Depois do deploy, Chromium abriu `https://franklinbaldo.github.io/ficha/`; o artifact `9932248070` registrou zero violações sérias/críticas do axe, 7 de 7 controles visíveis alcançados por teclado, nenhum controle ausente e zero passos sem indicador perceptível de foco, no commit `73c4696479dcc39dab7c3afe5c9e74b05dc4808d`.
- Preservação — snapshots e datasets continuam usando Internet Archive e manifest público como contrato verificável.

## O que este projeto faz melhor que o Cobogó

- Expõe proveniência, competência e integridade como parte do próprio ato de consultar dados.
- Mantém dois caminhos legítimos — interface e arquivo público reutilizável — sob o mesmo contrato factual.
- No estado de indisponibilidade, usa o próprio contrato público (`manifest.json`) como alternativa verdadeira.
- Deriva a identidade visual da própria tese de produto sem transformar a fundação Cobogó em aparência uniforme.

## Padrões do Cobogó em uso

- Core web foundation pinado desde 2026-08-18 (#222).
- `visual-evidence-as-quality-gate` — **stable**, isto é, já funcionou de forma convergente em pelo menos dois projetos reais; a Ficha diferencia prova de build de prova depois da publicação.
- `semantic-accessibility-default` — **stable**. A Ficha agora executa axe, teclado e foco tanto no build quanto diretamente contra a URL pública depois do deploy.
- `primary-action-viewport-containment` — **validated**, isto é, já funcionou em pelo menos um projeto real.
- `recoverable-error-states` — **validated**.
- `content-hierarchy-before-decoration` — **validated**.

## Dívida de qualidade atual

A avaliação é **23 de 24 pontos — referência**: Clareza 4, Explicabilidade 4, Autonomia 4, UX 3, UI 4 e Confiança 4.

A #240 está encerrada: a #241 fez o mesmo contrato de axe, teclado e foco rodar contra a página publicada e a execução de `main` comprovou o resultado. A dívida restante é UX 3: a observação automatizada ainda não percorre uma jornada completa de consulta, resultado e exploração de vínculos. Isso não vira automaticamente uma issue; é preciso um problema concreto antes de intervir.

## Histórico

- 2026-09-04 — #241 incorporada como `73c4696479dcc39dab7c3afe5c9e74b05dc4808d`; a publicação `33861297403` passou e o artifact público `9932248070` comprovou axe 0 sério/crítico, 7/7 controles por teclado e foco perceptível na URL publicada. #240 encerrada. Confiança sobe para 4 e a avaliação para 23/24.
- 2026-09-04 — #239 incorporada como `05aa359f637...`; os arquivos da mesma observação passaram a concordar sobre o commit real observado. #228 encerrada.
- 2026-09-03 — #238 incorporada; auditoria de build passou com axe, teclado e foco.
- 2026-09-03 — #237 incorporada; UI subiu para 4/4.
- 2026-09-02 — #234 incorporada; UX subiu para 3/4.
- 2026-09-02 — #232 incorporada; UI subiu de 1/4 para 3/4.
