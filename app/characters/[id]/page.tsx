import StatDiamond from "@/components/ui/StatDiamond";
import HpBar from "@/components/ui/HpBar";
export default async function Character({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <div className="max-w-full">
        {/* Immagine  e nome del Personaggio*/}
        <div className="card card-side bg-base-100 shadow-sm mb-4">
          <figure className="w-48 flex-shrink-0"> {/* larghezza fissa, non si espande */}
            <img
              src="https://placehold.co/400x400/orange/white"
              alt="Movie"
              className="object-cover h-full w-full" // mantiene proporzioni
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Personaggio # {id}</h2>
            <HpBar current={30} max={50} size="large" />
          </div>
        </div>
      </div>
      {/* Statistiche */}
      <div className="card card-border bg-base-100">
        <div className="card-body">
          <div className="flex flex-wrap justify-center gap-6">
            <StatDiamond label="STR" value={16} modifier={3} />
            <StatDiamond label="DEX" value={14} modifier={2} />
            <StatDiamond label="CON" value={13} modifier={1} />
            <StatDiamond label="INT" value={12} modifier={-1} />
            <StatDiamond label="WIS" value={10} modifier={0} />
            <StatDiamond label="CHA" value={18} modifier={4} />
          </div>
        </div>
      </div>

    </>
  );
}