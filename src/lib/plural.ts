/** Portuguese plurals in this corpus are irregular (operação/operações, papel/papéis),
 * so both forms are always supplied explicitly rather than derived. */
export function count(n: number, singular: string, plural: string) {
  return `${n} ${n === 1 ? singular : plural}`;
}
