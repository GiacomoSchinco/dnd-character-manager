export function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

export function rollDice(sides: number, times: number): number[] {
  return Array.from({ length: times }, () => rollDie(sides));
}
