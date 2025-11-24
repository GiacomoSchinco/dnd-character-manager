import StatDiamond from "@/components/ui/StatDiamond";
import SkillsDisplay from "@/components/ui/SkillsDisplay";
import { skills, SkillKey } from "@/lib/dictionaries/skills";
import HpBar from "@/components/ui/HpBar";
import { party } from "@/lib/party";
import { SavingThrow } from "@/components/ui";
import { CombatStat } from "@/components/ui";
import { IconShield } from "@/components/ui";
import { notFound } from "next/navigation";


export default async function Character({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  /*Simulazione di chiamata*/
  const numericId = Number(id);
  if (Number.isNaN(numericId)) notFound();

  const character = party.find((char) => char.id === numericId);
  if (!character) notFound();
  const characterStats = [
    { label: "STR", value: 16, modifier: 3 },
    { label: "DEX", value: 14, modifier: 2 },
    { label: "CON", value: 12, modifier: 1 },
    { label: "INT", value: 10, modifier: 0 },
    { label: "WIS", value: 13, modifier: 1 },
    { label: "CHA", value: 8, modifier: -1 },
  ] as const;
  // Calcoli base per le combat stat dalla "simulazione di chiamata"
  const getMod = (abbr: "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA") =>
    characterStats.find((s) => s.label === abbr)?.modifier ?? 0;
  const proficiencyBonus = 2 + Math.floor((character.level - 1) / 4);
  const initiative = getMod("DEX");
  const ac = 10 + getMod("DEX"); // base senza armatura
  const speed = 30; // valore di default in piedi
  const inspiration = false; // placeholder finché non modelliamo il dato
  const skillValues: Record<SkillKey, number> = Object.fromEntries(
    Object.keys(skills).map((s) => [s, Math.floor(Math.random() * 6) - 1])
  ) as Record<SkillKey, number>;
  const savingThrowValues: Record<string, number> = {
    STR: 3,
    DEX: 2,
    CON: 1,
    INT: 0,
    WIS: 1,
    CHA: -1,
  };
  return (
    <>
      <div className="max-w-full">
        {/* Immagine  e nome del Personaggio*/}
        <div className="card lg:card-side bg-amber-50 shadow-sm mb-4">
          <figure className="w-48 mx-auto lg:mx-0 overflow-hidden"> {/* centro su mobile */}
            <img
              src={character.image}
              alt="Movie"
              className="object-cover rounded-xl w-full h-full" // proporzioni e angoli arrotondati uniformi
            />
          </figure>
          <div className="card-body">
            {/* Nome e Livello*/}
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
            <div className="divider"/>
            {/* Statistiche di Combattimento */}
            <div className="flex flex-row gap-4">
              <CombatStat label="CA" value={ac} icon={<IconShield />} />
              <CombatStat label="Iniziativa" value={initiative} />
              <CombatStat label="Velocità" value={speed} />
              <CombatStat label="Ispirazione" value={inspiration ? "✓" : "-"} />
              <CombatStat label="Competenza" value={proficiencyBonus} />
            </div>

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
        <div>
          {/*Tiri salvezza */}
          <div className="card card-border bg-amber-50 lg:flex-1 mb-4">
            <div className="card-body">
              <h3 className="card-title text-lg mb-4">Tiri salvezza</h3>
              {Object.entries(savingThrowValues).map(([label, value]) => (
                <SavingThrow key={label} label={label} value={value} />
              ))}
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
      </div>


    </>
  );
}