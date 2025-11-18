export const classes = {
  barbarian: "Barbaro",
  bard: "Bardo",
  cleric: "Chierico",
  druid: "Druido",
  fighter: "Guerriero",
  monk: "Monaco",
  paladin: "Paladino",
  ranger: "Ranger",
  rogue: "Ladro",
  sorcerer: "Stregone",
  warlock: "Warlock",
  wizard: "Mago",
} as const;

export type ClassKey = keyof typeof classes;