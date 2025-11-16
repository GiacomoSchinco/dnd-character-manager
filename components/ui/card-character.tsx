import Link from "next/link";

type Character = {
    id:number;
    image: string;
    name: string;
    level: number;
    race: string;
    class: string;
    hp: number;
    maxhp:number;
    background: string;
    alignment: string;
};

type Props = {
    character: Character;
};

export default function CardCharacter({ character }: Props) {
    return (
        <div  className="card w-64 bg-amber-50  flex-1 shadow-xl border border-primary/30 hover:shadow-2xl transition-all duration-300">
            
            {/* Immagine */}
            <figure className="relative">
                <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary/70 text-primary-content px-3 py-1 text-sm rounded-tr-xl">
                    Livello {character.level}
                </div>
            </figure>

            <div className="card-body">
                {/* Nome */}
                <h2 className="card-title text-primary">
                    {character.name}
                </h2>

                {/* Razza + Classe */}
                <p className="text-sm text-accent-content">
                    {character.race} • {character.class}
                </p>

                <div className="divider my-2"></div>

                {/* HP */}
                <div className="flex items-center gap-2">
                    <span className="font-bold">HP:</span>
                    <progress
                        className="progress progress-error w-full"
                        value={character.hp}
                        max={character.maxhp}
                    />
                    <span className="text-sm">{character.hp}</span>
                </div>

                <div className="divider my-2"></div>

                {/* Background + Allineamento */}
                <p className="text-xs opacity-70">
                    <strong>Background:</strong> {character.background}
                </p>
                <p className="text-xs opacity-70">
                    <strong>Allineamento:</strong> {character.alignment}
                </p>

                {/* Bottone */}
                <div className="card-actions justify-end mt-4">
                    <Link href={`characters/${character.id}`}><button className="btn btn-primary btn-sm">
                        Dettagli
                    </button></Link>
                </div>
            </div>
        </div>
    );
}
