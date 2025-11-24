type CombatStatProps = {
    icon?: React.ReactNode; // opzionale (per la CA)
    label: string;
    value: number | string;
};

export function CombatStat({ icon, label, value }: CombatStatProps) {
    const isLong = label.length > 6;
    return (
        <div
            className="relative flex flex-col items-center w-16 h-16 border-2 border-gray-700 rounded-xl shadow-sm bg-white"
            title={label}
        >
            {icon && (
                <div className="absolute -top-2 flex items-center justify-center w-5 h-5 bg-white border-2 border-gray-700 rounded-full shadow pointer-events-none">
                    {icon}
                </div>
            )}
            {/* Area valore: usa flex-grow per restare centrato verticalmente */}
            <div className="flex-1 flex items-center justify-center w-full">
                <span className="text-3xl font-bold leading-none">
                    {value}
                </span>
            </div>
            {/* Label con altezza fissa per non spostare il valore */}
            <div
                className={`w-full h-5 flex items-center justify-center font-semibold px-1 text-center ${
                    isLong ? "text-[10px] tracking-tight" : "text-sm"
                } whitespace-nowrap overflow-hidden text-ellipsis`}
            >
                {label}
            </div>
        </div>
    );
}