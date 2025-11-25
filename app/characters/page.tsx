"use client";
import React, { useState } from "react";
import CardCharacters from '@/components/ui/CardCharacter'
import DataTable from '@/components/ui/DataTable';
import { party } from '@/lib/party';
import { useWeapons } from "@/lib/hooks/useWeapons";
import { Loading } from '@/components/ui';
import CardAddCharacter from '@/components/ui/CardAddCharacter';
import CharacterWizardModal from '@/components/ui/CharacterWizardModal';

export default function Characters() {
    const { data, isLoading, isError, error } = useWeapons();
    const [wizardOpen, setWizardOpen] = useState(false);
    const [newCharacter, setNewCharacter] = useState<any>(null);

    if (isLoading) return <Loading />;
    if (isError) return <div className="p-6 text-error">Errore: {(error as Error).message}</div>;

    // Mappa i dati per la tabella
    const rows = data?.results.map((w, i) => ({
        id: i + 1,
        name: w.name,
        category: typeof w.category === "string" ? w.category : "-",
        cost: typeof w.cost === "string" ? w.cost : "-",
        damage: w.damage_dice
            ? `${w.damage_dice} ${typeof w.damage_type === "string" ? w.damage_type : ((w.damage_type as any)?.name || "-")}`.trim()
            : "-",
        weight: typeof w.weight === "string" ? w.weight : "-",
        properties: Array.isArray(w.properties)
            ? w.properties.map(p => typeof p === "string" ? p : ((p as any)?.property?.name || "-")).join(", ")
            : "-",
    })) ?? [];

    const handleEdit = (id: any, row: any) => {
        console.log("[CrudTable] Edit ID:", id, row);
    };
    const handleDelete = (id: any, row: any) => {
        console.log("[CrudTable] Delete ID:", id, row);
    };
    const handleRowClick = (id: any) => {
        console.log("[CrudTable] Row Click ID:", id, party[id]);
    }

    return (
        <>
            <DataTable
                initialData={rows}
                visibleColumns={["name", "category", "cost", "damage", "weight", "properties"]}
                labels={{
                    name: "Nome",
                    category: "Categoria",
                    cost: "Costo",
                    damage: "Danno",
                    weight: "Peso",
                    properties: "Proprietà",
                }}
                pagination={true}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onRowClick={(id, row) => console.log("Row arma:", id, row)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {party.map((c) => (
                    <CardCharacters key={c.id} character={c} />
                ))}
                <CardAddCharacter onClick={() => setWizardOpen(true)} />
            </div>
            <CharacterWizardModal
                open={wizardOpen}
                onClose={() => setWizardOpen(false)}
                onCreate={(character) => {
                    setNewCharacter(character);
                    // Qui puoi aggiungere il nuovo personaggio al party o fare una chiamata API
                    console.log("Nuovo personaggio creato:", character);
                }}
            />
        </>
    );
}
