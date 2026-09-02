import test from "node:test";
import assert from "node:assert/strict";

import { validateRoundReportClarity } from "../scripts/validate-round-report-clarity.mjs";

const good = `---
type: RoundReport
---

## O que estava errado ou faltando
Havia uma divergência concreta entre o estado publicado e o que o relatório anterior conseguia provar. A rodada precisava explicar esse problema sem depender de jargão interno.

## O que foi feito
Foi criada uma mudança pequena e verificável que registra o problema, executa a correção prevista e deixa claro qual repositório é responsável pela decisão.

## O que ficou comprovado
Os checks do commit atual passaram e a evidência produzida pelo workflow corresponde ao mesmo estado descrito no relatório, permitindo reconstruir o resultado sem inferência adicional.

## O que ainda falta
Nada impede encerrar esta rodada. Qualquer dívida remanescente está registrada separadamente e não é apresentada como se já estivesse corrigida ou validada.

## Por que a próxima rodada deve ou não voltar
A próxima rodada só deve voltar a este projeto se surgir um fato novo verificável que permita avançar; sem isso, outro projeto elegível deve receber prioridade.
`;

test("accepts a report that answers the five state-transition questions", () => {
  assert.deepEqual(validateRoundReportClarity(good), []);
});

test("rejects a missing state-transition answer", () => {
  const bad = good.replace(/## O que ainda falta[\s\S]*?(?=## Por que)/, "");
  assert.match(validateRoundReportClarity(bad).join("\n"), /O que ainda falta/);
});

test("rejects placeholder-sized answers", () => {
  const bad = good.replace(
    /## O que foi feito[\s\S]*?(?=## O que ficou comprovado)/,
    "## O que foi feito\nFeito.\n\n",
  );
  assert.match(validateRoundReportClarity(bad).join("\n"), /not substantive enough/);
});
