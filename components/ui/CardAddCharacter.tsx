import React from "react";

export default function CardAddCharacter({ onClick }: { onClick?: () => void }) {
  return (
     <div className="card w-full max-w-xs shadow-xl border border-primary/30 hover:shadow-2xl transition-all duration-300" onClick={onClick}>

      <div className="flex flex-col items-center justify-center h-full w-full">
        <span className="text-6xl text-primary font-bold select-none">+</span>
        <span className="mt-2 text-sm text-base-content opacity-70">Nuovo personaggio</span>
      </div>
    </div>
  );
}
