// components/CardAddCharacter.tsx
import React from "react";
import AncientCardContainer from "./AncientCardContainer";

interface CardAddCharacterProps {
  onClick?: () => void;
}

export default function CardAddCharacter({ onClick }: CardAddCharacterProps) {
  return (
    <AncientCardContainer
      onClick={onClick}
      isDashed
      variant="add"
      className="w-72 h-96 cursor-pointer transform-gpu hover:scale-105 transition-all duration-300"
    >
      <div className="relative h-full flex flex-col items-center justify-center">
        <span className="text-8xl text-amber-800/70 font-serif select-none mb-4">+</span>
        <span className="text-lg font-serif text-amber-900">Nuovo personaggio</span>
        <span className="text-sm text-amber-700 italic mt-2">Clicca per creare</span>
      </div>
    </AncientCardContainer>
  );
}