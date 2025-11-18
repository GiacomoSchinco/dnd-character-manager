import { stats } from "./dictionaries/stats";
import { classes } from "./dictionaries/classes";
import { races } from "./dictionaries/races";
import { alignments } from "./dictionaries/alignments";
import { skills } from "./dictionaries/skills";


export const dictionaries = {
  stats,
  classes,
  races,
  alignments,
  skills,
};

export function t(dict: keyof typeof dictionaries, key: string): string {
  const dictionary = dictionaries[dict];
  return (dictionary as Record<string, string>)[key] ?? key;
}
