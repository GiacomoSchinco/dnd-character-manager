import hitPointsByClass from './hitPointsByClass.json';
import profByClass from './proficienciesByClass.json';
import races from './races.json';

type HitInfo = {
  hit_dice: number;
  average_per_level: number;
};

export function getProficiencyBonus(level: number) {
  if (level <= 4) return 2;
  if (level <= 8) return 3;
  if (level <= 12) return 4;
  if (level <= 16) return 5;
  return 6;
}

export function getClassHitInfo(className: string): HitInfo | null {
  const key = className.toLowerCase();
  // @ts-ignore
  return hitPointsByClass[key] ?? null;
}

// Calculate HP using either average per level (default) or rolling function provided
export function calculateHitPoints(opts: {
  className: string;
  level: number;
  conModifier: number;
  useAverage?: boolean;
  rollFn?: (sides: number) => number;
}) {
  const { className, level, conModifier, useAverage = true, rollFn = (s) => Math.ceil((s / 2)) } = opts;
  const info = getClassHitInfo(className);
  if (!info) throw new Error(`Unknown class ${className}`);
  const { hit_dice, average_per_level } = info as HitInfo;

  // Level 1: full hit die + CON
  let total = hit_dice + conModifier;
  const breakdown: number[] = [total];

  for (let lv = 2; lv <= level; lv++) {
    const hpThis = useAverage ? average_per_level : Math.max(1, rollFn(hit_dice));
    const added = hpThis + conModifier;
    breakdown.push(added);
    total += added;
  }

  return { total, breakdown };
}

export function getClassProficiencies(className: string) {
  const key = className.toLowerCase();
  // @ts-ignore
  return profByClass[key] ?? null;
}

export function getRaceInfo(raceName: string, subrace?: string) {
  // races keys are capitalized (e.g., "Elf")
  const base = (races as any)[raceName];
  if (!base) return null;
  if (subrace && base.subraces && base.subraces[subrace]) {
    // merge shallow
    return { ...base, ...base.subraces[subrace] };
  }
  return base;
}

export function applyRaceAbilityIncreases(baseAbilities: Record<string, number>, raceName: string, subrace?: string) {
  const info = getRaceInfo(raceName, subrace);
  if (!info) return baseAbilities;
  const asi = info.abilityScoreIncrease ?? {};
  const result = { ...baseAbilities };
  for (const k of Object.keys(asi)) {
    const key = k.toUpperCase();
    if (key === 'ALL') {
      for (const ab of Object.keys(result)) result[ab] = (result[ab] ?? 0) + asi[k];
    } else if (key === 'ANY') {
      // ANY: user choice; do nothing automatically
    } else {
      // map common abbreviations
      const abKey = key;
      result[abKey] = (result[abKey] ?? 0) + asi[k];
    }
  }
  return result;
}

export default {
  getProficiencyBonus,
  getClassHitInfo,
  calculateHitPoints,
  getClassProficiencies,
  getRaceInfo,
  applyRaceAbilityIncreases,
};
