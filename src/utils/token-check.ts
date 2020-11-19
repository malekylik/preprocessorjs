const LF = 10;
const CR = 13;

export function isEndOfLine(code: number): boolean {
  return code === LF || code === CR;
}
