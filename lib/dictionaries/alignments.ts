export const alignments = {
  LG: "Legale Buono",
  NG: "Neutrale Buono",
  CG: "Caotico Buono",
  LN: "Legale Neutrale",
  N: "Neutrale",
  CN: "Caotico Neutrale",
  LE: "Legale Malvagio",
  NE: "Neutrale Malvagio",
  CE: "Caotico Malvagio",
} as const;

export type AlignmentKey = keyof typeof alignments;
