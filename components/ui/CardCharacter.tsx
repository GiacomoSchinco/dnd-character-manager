// components/AncientCard.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import HpBar from './HpBar';
import Link from 'next/link';
import AncientCardContainer from './AncientCardContainer';

interface AncientCardProps {
  id: number;
  name: string;
  race: string;
  class: string;
  level: number;
  background: string;
  alignment: string;
  image: string;
  hp: number;
  maxhp: number;
  isFlippable?: boolean;
  backContent?: string;
}

const AncientCard: React.FC<AncientCardProps> = ({
  id,
  name,
  race,
  class: characterClass,
  level,
  background,
  alignment,
  hp,
  maxhp,
  isFlippable = false,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  const renderFront = () => (
    <AncientCardContainer className="w-full h-full">
      {/* Contenuto principale */}
      <div className="relative h-full flex flex-col p-4">
        {/* Nome e allineamento */}
        <div className="text-center border-b-2 border-amber-700/30 pb-2">
          <h2 className="text-lg font-bold text-amber-900 font-serif truncate">{name}</h2>
          <p className="text-xs text-amber-700">{alignment}</p>
        </div>
        
        {/* Barra HP */}
        <HpBar current={hp} max={maxhp} />
        
        {/* Immagine personaggio */}
        <div className="flex-1 flex items-center justify-center my-1">
          <div className="relative w-24 h-24 rounded-full border-2 border-amber-700/50 overflow-hidden bg-amber-200/50 shadow-lg">   
            <Image
              src={`/images/classes/token_${characterClass.toLowerCase()}.png`}
              alt={name}
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Info principali */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-amber-200/50 p-1.5 rounded text-center">
            <span className="text-amber-800 font-semibold">Razza</span>
            <p className="text-xs text-amber-900">{race}</p>
          </div>
          <div className="bg-amber-200/50 p-1.5 rounded text-center">
            <span className="text-amber-800 font-semibold">Classe</span>
            <p className="text-xs text-amber-900">{characterClass}</p>
          </div>
          <div className="bg-amber-200/50 p-1.5 rounded text-center">
            <span className="text-amber-800 font-semibold">Livello</span>
            <p className="text-xs text-amber-900">{level}</p>
          </div>
          <div className="bg-amber-200/50 p-1.5 rounded text-center">
            <span className="text-amber-800 font-semibold">Background</span>
            <p className="text-xs text-amber-900 truncate">{background}</p>
          </div>
        </div>
        
        {/* Pulsante Dettagli */}
        <div className="flex justify-center mt-3">
          <Link href={`characters/${id}`}>
            <button className="
              relative
              px-6 py-1.5
              bg-amber-700
              text-amber-100
              text-sm
              font-serif
              tracking-wide
              rounded-sm
              border-2 border-amber-900
              shadow-md
              hover:bg-amber-800
              hover:border-amber-950
              hover:text-amber-50
              hover:shadow-lg
              active:transform active:translate-y-0.5
              transition-all
              duration-200
              before:content-['']
              before:absolute
              before:inset-0
              before:border
              before:border-amber-500/30
              before:rounded-sm
              before:pointer-events-none
              overflow-hidden
            ">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-amber-300 text-xs">⚔️</span>
                Dettagli
                <span className="text-amber-300 text-xs">🛡️</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </AncientCardContainer>
  );

  const renderBack = () => (
    <div className="relative w-full h-full bg-amber-800 rounded-xl overflow-hidden border-8 border-amber-900 shadow-2xl">
      {/* Pattern retro */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0px, #000 2px, transparent 2px, transparent 8px)`,
        }}
      />
      
      {/* Motivo centrale */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/3 h-1/3 border-4 border-amber-600 rounded-full flex items-center justify-center">
          <div className="w-3/4 h-3/4 border-4 border-amber-600 rounded-full flex items-center justify-center">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="w-full h-full text-amber-600/40"
              preserveAspectRatio="xMidYMid meet"
            >
              <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-amber-300 text-xs">⚔️</text>
              <g fill="currentColor">
                <polygon points="50,2 62,18 50,14 38,18" />
                <rect x="47" y="14" width="6" height="56" rx="2" />
                <rect x="36" y="70" width="28" height="6" rx="2" />
                <rect x="43" y="76" width="14" height="8" rx="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Contenuto retro */}
      <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
        <p className="text-amber-200 text-sm mb-4 italic">
          {backContent || "Scheda personaggio D&D"}
        </p>
        <div className="absolute bottom-4 left-4 text-amber-600/50 text-xs">
          #{id}
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className={`relative w-72 h-96 cursor-pointer transition-all duration-700 transform-gpu preserve-3d ${
        isFlipped ? 'rotate-y-180' : ''
      }`}
      onClick={() => isFlippable && setIsFlipped(!isFlipped)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute w-full h-full backface-hidden">
        {renderFront()}
      </div>
      <div className="absolute w-full h-full backface-hidden rotate-y-180">
        {renderBack()}
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default AncientCard;