"use client";
import { useState } from "react";
import CardCharacters from '@/components/ui/CardCharacter'
import { party } from '@/lib/party';
import CardAddCharacter from '@/components/ui/CardAddCharacter';
import CharacterWizardModal from '@/components/ui/CharacterWizardModal';
import AncientCard from '@/components/ui/AncientCard';
import AncientCardContainer from "@/components/ui/AncientCardContainer";

export default function Characters() {
    const [wizardOpen, setWizardOpen] = useState(false);
    //const [newCharacter, setNewCharacter] = useState<any>(null);
    return (
        <><AncientCardContainer>Ciaofabagergergergeqrgerqgerqgergqerg Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis esse minima, maiores culpa eum nostrum eveniet quidem molestiae at omnis sunt, porro tempora aut in voluptate accusantium quo commodi.</AncientCardContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {party.map((character) => (
            <AncientCard key={character.id}  isFlippable={true} {...character} />
          ))}
          <CardAddCharacter onClick={() => setWizardOpen(true)} />
        </div>
            <CharacterWizardModal
                open={wizardOpen}
                onClose={() => setWizardOpen(false)}
                onCreate={(character) => {
                    //setNewCharacter(character);
                    // Qui puoi aggiungere il nuovo personaggio al party o fare una chiamata API
                    console.log("Nuovo personaggio creato:", character);
                }}
            />
        </>
    );
}
