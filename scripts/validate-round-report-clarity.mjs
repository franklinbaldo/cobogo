#!/usr/bin/env node

import fs from "node:fs";

const REQUIRED_SECTIONS = [
  "O que estava errado ou faltando",
  "O que foi feito",
  "O que ficou comprovado",
  "O que ainda falta",
  "Por que a próxima rodada deve ou não voltar",
];

function normalizeHeading(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function sections(markdown) {
  const lines = markdown.split(/\r?\n/);
  const found = [];
  let current = null;

  for (const line of lines) {
    const heading = line.match(/^##\s+(.+?)\s*$/);
    if (heading) {
      current = { title: heading[1], body: [] };
      found.push(current);
      continue;
    }
    if (current) current.body.push(line);
  }

  return found;
}

export function validateRoundReportClarity(markdown) {
  const found = sections(markdown);
  const errors = [];

  for (const required of REQUIRED_SECTIONS) {
    const needle = normalizeHeading(required);
    const section = found.find(({ title }) => normalizeHeading(title).startsWith(needle));

    if (!section) {
      errors.push(`missing required section: ${required}`);
      continue;
    }

    const body = section.body.join("\n").replace(/\s+/g, " ").trim();
    if (body.length < 80) {
      errors.push(`section is not substantive enough: ${required}`);
    }
  }

  return errors;
}

function main() {
  const paths = process.argv.slice(2);
  if (!paths.length) {
    console.error("usage: node scripts/validate-round-report-clarity.mjs <round-report.md> [...]");
    process.exit(2);
  }

  let failed = false;
  for (const path of paths) {
    const markdown = fs.readFileSync(path, "utf8");
    const errors = validateRoundReportClarity(markdown);
    if (errors.length) {
      failed = true;
      for (const error of errors) console.error(`${path}: ${error}`);
    }
  }

  if (failed) process.exit(1);
}

if (import.meta.url === `file://${process.argv[1]}`) main();
