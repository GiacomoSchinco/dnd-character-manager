"use client";
import CardCharacters from '@/components/ui/CardCharacter'
import CrudTable from '@/components/ui/CrudTable';
import { party } from '@/lib/party';

export default function Characters() {
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
            <CrudTable
                initialData={party}
                visibleColumns={["name", "class", "level"]}
                labels={{ name: "Nome", class: "Classe", level: "Livello" }}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onRowClick={handleRowClick}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {party.map((c) => (
                    <CardCharacters key={c.id} character={c} />
                ))}
            </div>
        </>
    );
}
