type CombatStatProps = {
    icon?: React.ReactNode; // opzionale (per la CA)
    label: string;
    value: number | string;
};
export function CombatStat({ icon, label, value }: CombatStatProps) {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-16 h-16 border-2 border-gray-700 rounded-xl shadow-sm relative bg-white">
                {/* Icona opzionale (solo per CA) */}
                {icon && (
                    <div className="absolute -top-2 flex items-center justify-center w-5 h-5 bg-white border-2 border-gray-700 rounded-full shadow">
                        {icon}
                    </div>
                )}
                <div className="text-3xl font-bold mt-1">
                    {value}
                </div>
                <div className="text-sm font-semibold">
                    {label}
                </div>
            </div>

        </>
    );
}
