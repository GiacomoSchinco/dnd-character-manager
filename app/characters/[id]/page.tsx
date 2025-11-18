import StatDiamond from "@/components/ui/StatDiamond";
import SkillsDisplay from "@/components/ui/SkillsDisplay";
import { skills, SkillKey } from "@/lib/dictionaries/skills";
import HpBar from "@/components/ui/HpBar";
import { party } from "@/lib/party";

export default async function Character({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  /*Simulazione di chiamata*/
  const character = party.find((char) => char.id === Number(id))!;
  const characterStats = [
    { label: "STR", value: 16, modifier: 3 },
    { label: "DEX", value: 14, modifier: 2 },
    { label: "CON", value: 12, modifier: 1 },
    { label: "INT", value: 10, modifier: 0 },
    { label: "WIS", value: 13, modifier: 1 },
    { label: "CHA", value: 8, modifier: -1 },
  ] as const;
  const skillValues: Record<SkillKey, number> = Object.fromEntries(
    Object.keys(skills).map((s) => [s, Math.floor(Math.random() * 6) - 1])
  ) as Record<SkillKey, number>;


  return (
    <>
      <div className="max-w-full">
        {/* Immagine  e nome del Personaggio*/}
        <div className="card lg:card-side bg-amber-50 shadow-sm mb-4">
          <figure className="w-48 mx-auto lg:mx-0 overflow-hidden"> {/* centro su mobile */}
            <img
              src="https://placehold.co/400x400/orange/white"
              alt="Movie"
              className="object-cover rounded-xl w-full h-full" // proporzioni e angoli arrotondati uniformi
            />
          </figure>
          <div className="card-body">
            {/* Nome */}
            <h2 className="card-title text-primary">
              {character.name} - Livello {character.level}
            </h2>
            {/* Razza + Classe */}
            <p className="text-sm text-accent-content">
              {character.race} • {character.class}
            </p>
            <HpBar current={character.hp} max={character.maxhp} size="large" />
            {/* Background + Allineamento */}
            <p className="text-xs opacity-70">
              <strong>Background:</strong> {character.background}
            </p>
            <p className="text-xs opacity-70">
              <strong>Allineamento:</strong> {character.alignment}
            </p>
          </div>
        </div>
      </div>
      {/* Statistiche e Skill affianco */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* Statistiche - 30% su desktop, full width su mobile */}
        <div className="card card-border bg-amber-50 lg:w-[30%]">
          <div className="card-body">
            <h3 className="card-title text-lg mb-4">Statistiche</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {characterStats.map(({ label, value, modifier }) => (
                <StatDiamond key={label} label={label} value={value} modifier={modifier} />
              ))}
            </div>
          </div>
        </div>

        {/* Skill - 70% su desktop, full width su mobile */}
        <div className="card card-border bg-amber-50 lg:flex-1">
          <div className="card-body">
            <h3 className="card-title text-lg mb-4">Abilità</h3>
            <SkillsDisplay skillValues={skillValues} />
          </div>
        </div>
      </div>


    </>
  );
}