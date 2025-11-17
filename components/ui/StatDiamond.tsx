const BG_COLOR = "bg-amber-200"; // Colore unico per tutte le stats

type StatDiamondProps = {
  label: string;
  value: number;
  modifier: number;
};

export default function StatDiamond({ label, value, modifier }: StatDiamondProps) {
  return (
    <div className="flex flex-col items-center gap-3 mx-3 my-2">
      
      {/* Contenitore modificatore e rombo */}
      <div className="relative flex flex-col items-center">
        
        {/* Quadrato modificatore (sopra) */}
        <div className="absolute top-18 w-10 h-6 bg-white border border-gray-400 rounded-md flex items-center justify-center shadow-sm z-10">
          <span className="text-gray-800 font-bold text-lg">
            {modifier >= 0 ? `+${modifier}` : modifier}
          </span>
        </div>

        {/* Rombo stat */}
        <div className="relative w-16 h-16 mt-4">
          <div
            className={`absolute inset-0 ${BG_COLOR}
            border border-gray-400 
            rounded-md 
            rotate-45 
            flex items-center justify-center shadow-sm`}
          >
            <span className="text-gray-800 font-bold text-2xl rotate-[-45deg]">
              {value}
            </span>
          </div>
        </div>
      </div>

      {/* Label */}
      <span className="font-semibold text-sm text-gray-700 tracking-wide mt-2">
        {label}
      </span>
    </div>
  );
}