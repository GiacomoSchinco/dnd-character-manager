export type CurrencyKey = "cp" | "sp" | "gp" | "pp";

export const currencyLabels: Record<CurrencyKey, string> = {
  cp: "Rame",
  sp: "Argento",
  gp: "Oro",
  pp: "Platino",
};

export const currencyOrder: CurrencyKey[] = ["cp", "sp", "gp", "pp"]; 
