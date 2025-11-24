import { useQuery } from "@tanstack/react-query";

export interface Open5eWeapon {
  name: string;
  category?: string;
  cost?: string;
  damage_dice?: string;
  damage_type?: string;
  weight?: string;
  properties?: string[];
  desc?: string;
  slug?: string;
  document__slug?: string;
  document__title?: string;
}

export interface WeaponsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Open5eWeapon[];
}

async function fetchWeapons(): Promise<WeaponsResponse> {
  const res = await fetch("/api/weapons");
  if (!res.ok) throw new Error("Errore caricamento armi");
  return res.json();
}

export function useWeapons() {
  return useQuery({
    queryKey: ["open5e", "weapons"],
    queryFn: fetchWeapons,
    staleTime: 1000 * 60 * 5,
  });
}
