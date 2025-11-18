export const races = {
  human: "Umano",
  elf: "Elfo",
  dwarf: "Nano",
  halfling: "Halfling",
  half_orc: "Mezzorco",
  tiefling: "Tiefling",
  dragonborn: "Dragonide",
  gnome: "Gnomo",
} as const;

export type RaceKey = keyof typeof races;
