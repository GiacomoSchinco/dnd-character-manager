export const stats = {
  STR: "Forza",
  DEX: "Destrezza",
  CON: "Costituzione",
  INT: "Intelligenza",
  WIS: "Saggezza",
  CHA: "Carisma",
} as const;

export type StatKey = keyof typeof stats;
