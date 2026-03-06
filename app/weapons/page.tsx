'use client';

import { DataTable, Loading } from "@/components/ui";
import { useWeapons } from "@/lib/hooks/useWeapons";

export default function WeaponsPage() {
  const { data, isLoading, isError, error } = useWeapons();
  
  if (isLoading) return <Loading />;
  if (isError) return <div className="p-6 text-error">Errore: {(error as Error).message}</div>;
  
  // Mappa i dati per la tabella
  const rows = data?.results.map((w, i) => ({
    id: i + 1,
    name: w.name,
    tipo: w.is_simple ? "Semplice" : "Marziale",
    danno: w.damage_dice && w.damage_type
      ? `${w.damage_dice} ${w.damage_type.name}`
      : w.damage_dice || "-",
    gittata: w.range && w.range > 0
      ? `${w.range}/${w.long_range} ft`
      : "Mischia",
    proprietà: w.properties && w.properties.length > 0
      ? w.properties.map(p => {
          const propName = p.property.name;
          return p.detail ? `${propName} (${p.detail})` : propName;
        }).join(", ")
      : "-",
  })) ?? [];

  const handleEdit = (id: number, row: unknown) => {
    console.log("[WeaponsPage] Edit ID:", id, row);
  };
  
  const handleDelete = (id: number, row: unknown) => {
    console.log("[WeaponsPage] Delete ID:", id, row);
  };
  
  const handleRowClick = (id: number, row: unknown) => {
    console.log("[WeaponsPage] Row Click ID:", id, row);
  };

  return (
    <DataTable
      initialData={rows}
      visibleColumns={["name", "tipo", "danno", "gittata", "proprietà"]}
      labels={{
        name: "Nome",
        tipo: "Tipo",
        danno: "Danno",
        gittata: "Gittata",
        proprietà: "Proprietà",
      }}
      pagination={true}
      onDelete={handleDelete}
      onEdit={handleEdit}
      onRowClick={handleRowClick}
    />
  );
}