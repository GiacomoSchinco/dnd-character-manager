"use client";

/**
 * CrudTable — componente tabellare generico (Next.js + TanStack v8 + daisyUI)
 *
 * Come funziona (in breve):
 * - Genera automaticamente le colonne dalle chiavi del primo elemento di `initialData`.
 * - Nasconde la colonna identificativa (`idKey`, default "id").
 * - Azioni: la colonna "Azioni" compare solo se fornisci almeno una callback tra `onEdit` e `onDelete`;
 *   i bottoni chiamano le callback con `(id, row)` e fermano la propagazione del click sulla riga.
 * - Click riga: se passi `onRowClick`, la riga è cliccabile e richiama `(id, row)`.
 * - Colonne: alias (`labels`) e selezione/ordine (`visibleColumns`). Se `visibleColumns` è presente, ha precedenza su `hiddenColumns`.
 * - Stato: nessun modal o form interni (azione demandata al consumer). I dati interni si sincronizzano quando `initialData` cambia.
 *
 * Props principali:
 * - initialData: T[]                        | Dati da mostrare.
 * - idKey?: keyof T (default: "id")         | Chiave primaria usata per passare l'id nelle callback.
 * - visibleColumns?: (keyof T)[]            | Se presente, mostra SOLO queste colonne (nell'ordine dato).
 * - hiddenColumns?: (keyof T)[]             | Colonne da nascondere (oltre a idKey).
 * - readOnlyColumns?: (keyof T)[]           | Marcatura informativa (non ci sono editor interni).
 * - labels?: Record<keyof T, string>        | Mappa chiave -> intestazione visibile.
 * - onEdit?: (id: any, row: T) => void      | Callback per click su "Modifica" (se definita, compare il bottone).
 * - onDelete?: (id: any, row: T) => void    | Callback per click su "Elimina" (se definita, compare il bottone).
 * - onRowClick?: (id: any, row: T) => void  | Callback al click sulla riga (attiva hover e cursore puntatore).
 *
 * Esempi d'uso:
 *
 * // Solo visualizzazione (nessuna azione)
 * <CrudTable initialData={data} visibleColumns={["name","class","level"]} />
 *
 * // Con azioni esterne: stampa in console gli ID
 * <CrudTable
 *   initialData={data}
 *   visibleColumns={["name","class","level"]}
 *   labels={{ name: "Nome", class: "Classe", level: "Livello" }}
 *   onEdit={(id, row) => console.log("Edit", id, row)}
 *   onDelete={(id) => console.log("Delete", id)}
 * />
 *
 * // Click sulla riga
 * <CrudTable initialData={data} onRowClick={(id, row) => console.log("Row", id, row)} />
 *
 * // Chiave primaria personalizzata (es. "uuid")
 * <CrudTable initialData={data} idKey="uuid" onEdit={...} />
 */

import React, { useEffect, useMemo, useState } from "react";
import {
    getCoreRowModel,
    useReactTable,
    ColumnDef,
    flexRender,
} from "@tanstack/react-table";
import { on } from "events";

type AnyRecord = Record<string, any>;

export type DataTableProps<T extends AnyRecord> = {
    initialData: T[];
    idKey?: keyof T & string; // chiave primaria (default: "id")
    hiddenColumns?: Array<keyof T & string>;
    readOnlyColumns?: Array<keyof T & string>;
    labels?: Partial<Record<keyof T & string, string>>;
    visibleColumns?: Array<keyof T & string>; // se presente, usa solo queste colonne (in questo ordine)
    onEdit?: (id: any, row: T) => void; // callback esterna per modifica
    onDelete?: (id: any, row: T) => void; // callback esterna per eliminazione
    onRowClick?: (id: any, row: T) => void; // click sulla riga
    pagination?: boolean; // se true, attiva la paginazione client-side
};

function toLabel(key: string) {
    return key
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/_/g, " ")
        .replace(/^\w/, (c) => c.toUpperCase());
}

export default function DataTable<T extends AnyRecord>(
    {
        initialData,
        idKey = "id" as keyof T & string,
        hiddenColumns = [],
        readOnlyColumns = [],
        labels = {},
        visibleColumns,
        onEdit,
        onDelete,
        onRowClick,
        pagination = false,
    }: DataTableProps<T>
) {
    const [data, setData] = useState<T[]>(initialData);
    useEffect(() => {
        setData(initialData);
    }, [initialData]);
    const first = data[0] ?? initialData[0] ?? ({} as T);
    const keys = useMemo(() => Object.keys(first) as Array<keyof T & string>, [first]);

    // PAGINAZIONE CLIENT (solo se pagination === true)
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const totalRows = data.length;
    const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));
    const paginatedData = useMemo(() => {
        if (!pagination) return data;
        const start = (page - 1) * rowsPerPage;
        return data.slice(start, start + rowsPerPage);
    }, [data, page, rowsPerPage, pagination]);
    useEffect(() => {
        if (pagination && page > totalPages) setPage(totalPages);
    }, [totalPages, page, pagination]);
    const visibleKeys = useMemo(() => {
        const idStr = idKey as string;
        if (visibleColumns && visibleColumns.length) {
            const asStrings = visibleColumns as string[];
            return asStrings.filter((k) => k !== idStr && keys.includes(k as any));
        }
        return keys.filter((k) => k !== idStr && !(hiddenColumns as string[]).includes(k));
    }, [keys, idKey, hiddenColumns, visibleColumns]);
    const editableKeys = useMemo(
        () => visibleKeys.filter((k) => k !== (idKey as string) && !(readOnlyColumns as string[]).includes(k)),
        [visibleKeys, idKey, readOnlyColumns]
    );

    const columns = useMemo<ColumnDef<T, any>[]>(
        () => {
            const baseCols: ColumnDef<T, any>[] = visibleKeys.map((key) => ({
                accessorKey: key,
                header: labels[key] ?? toLabel(key),
                cell: (info: any) => {
                    const v = info.getValue() as any;
                    return typeof v === "boolean" ? (v ? "✓" : "✗") : String(v ?? "");
                },
            }));

            if (onEdit || onDelete) {
                baseCols.push({
                    id: "actions",
                    header: "Azioni",
                    cell: ({ row }) => (
                        <div className="flex gap-2">
                            {onEdit && (
                                <button
                                    className="btn btn-xs btn-outline"
                                    onClick={(e) => { e.stopPropagation(); onEdit((row.original as any)[idKey], row.original); }}
                                >
                                    Modifica
                                </button>
                            )}
                            {onDelete && idKey && (
                                <button
                                    className="btn btn-xs btn-error text-white"
                                    onClick={(e) => { e.stopPropagation(); onDelete((row.original as any)[idKey], row.original); }}
                                >
                                    Elimina
                                </button>
                            )}
                        </div>
                    ),
                });
            }

            return baseCols;
        },
        [visibleKeys, labels, idKey, onEdit, onDelete]
    );

    const table = useReactTable<T>({
        data: paginatedData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="p-6">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="text-center py-6">
                                    Nessun record.
                                </td>
                            </tr>
                        ) : (
                            table.getRowModel().rows.map((row) => (
                                <tr
                                    key={row.id}
                                    onClick={() => onRowClick && onRowClick((row.original as any)[idKey], row.original)}
                                    className={onRowClick ? "hover:bg-base-200 cursor-pointer" : undefined}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            {pagination && (
                <div className="flex flex-col items-center mt-6">
                    <div className="flex gap-4 items-center justify-center">
                        <button
                            className="btn btn-sm"
                            disabled={page === 1}
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                        >
                            &lt; Prev
                        </button>
                        <span className="mx-2">
                            Pagina {page} di {totalPages}
                        </span>
                        <button
                            className="btn btn-sm"
                            disabled={page === totalPages}
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        >
                            Next &gt;
                        </button>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                        <label htmlFor="rowsPerPage" className="text-sm">Righe:</label>
                        <select
                            id="rowsPerPage"
                            className="select select-sm"
                            value={rowsPerPage}
                            onChange={e => { setRowsPerPage(Number(e.target.value)); setPage(1); }}
                        >
                            {[5, 10, 20, 50].map(n => (
                                <option key={n} value={n}>{n}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}

