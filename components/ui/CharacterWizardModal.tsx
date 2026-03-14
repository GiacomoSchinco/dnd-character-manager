import React, { useState } from "react";
import AncientCardContainer from "./AncientCardContainer";
import { races } from "@/lib/dictionaries/races";
import { classes } from "@/lib/dictionaries/classes";
import { alignments } from "@/lib/dictionaries/alignments";
import { t } from "@/lib/dictionary";

interface Character {
  name: string;
  race: string;
  class: string;
  background: string;
  alignment: string;
}

export default function CharacterWizardModal({ open, onClose, onCreate }: {
  open: boolean;
  onClose: () => void;
  onCreate: (character: Character) => void;
}) {
  const [step, setStep] = useState(0);
  const [character, setCharacter] = useState<Character>({
    name: "",
    race: "",
    class: "",
    background: "",
    alignment: "",
  });

  const steps = [
    { label: "Nome", icon: "📜" },
    { label: "Razza", icon: "🧝" },
    { label: "Classe", icon: "⚔️" },
    { label: "Background", icon: "📖" },
    { label: "Allineamento", icon: "⚖️" },
    { label: "Conferma", icon: "✅" }
  ];

  const stepKeys: (keyof typeof character)[] = ["name", "race", "class", "background", "alignment"];

  function handleNext() {
    if (step < steps.length - 1) setStep(step + 1);
  }

  function handlePrev() {
    if (step > 0) setStep(step - 1);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  }

  function handleCreate() {
    onCreate(character);
    onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal container con dimensioni fisse */}
      <div className="w-full max-w-2xl h-[600px] relative">
        <AncientCardContainer
          className="w-full h-full"
          haveMargin={false}
        >
          {/* Bottone chiusura */}
          <button
            className="absolute top-1 right-1 w-10 h-10 bg-amber-700 rounded-full border-4 border-amber-900 shadow-xl z-20 flex items-center justify-center text-amber-100 hover:bg-amber-800 transition-colors"
            onClick={onClose}
          >
            <span className="text-xl">✕</span>
          </button>

          {/* Contenuto con padding interno */}
          <div className="h-full flex flex-col p-6">

            {/* Titolo con decorazioni */}
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl text-amber-700/50">⚔️</span>
                <h2 className="text-3xl font-serif text-amber-900">Crea Nuovo Eroe</h2>
                <span className="text-3xl text-amber-700/50">🛡️</span>
              </div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto" />
            </div>

            {/* Steps in stile antico */}
            <div className="relative mb-8 mt-2">
              {/* Linea di connessione */}
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-amber-700/30" />

              {/* Step items */}
              <div className="relative flex justify-between">
                {steps.map((s, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`
                      w-10 h-10 rounded-full border-4 flex items-center justify-center text-lg
                      ${i <= step
                        ? 'bg-amber-700 border-amber-900 text-amber-100'
                        : 'bg-parchment-100 border-amber-700/30 text-amber-700/50'
                      }
                      transition-all duration-300 relative z-10
                    `}>
                      {s.icon}
                    </div>
                    <span className={`
                      text-xs font-serif mt-1
                      ${i <= step ? 'text-amber-900' : 'text-amber-700/50'}
                    `}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Area contenuto principale */}
            <div className="flex-1 bg-amber-100/50 rounded-lg border-2 border-amber-700/30 p-6 mb-4 overflow-y-auto">
              {step === 0 && (
                <div className="space-y-4">
                  <label className="block font-serif text-amber-900 text-lg mb-2">
                    Qual è il nome del tuo eroe?
                  </label>
                  <input
                    name="name"
                    className="w-full p-3 bg-parchment-100 border-2 border-amber-700 rounded-lg font-serif text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 transition-colors"
                    placeholder="Es. Aelar Starwind"
                    value={character.name}
                    onChange={handleChange}
                    autoFocus
                  />
                  <p className="text-xs text-amber-700/70 italic mt-2">
                    Il nome che risuonerà nelle sale dei grandi eroi
                  </p>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <label className="block font-serif text-amber-900 text-lg mb-2">
                    Scegli la razza del tuo eroe
                  </label>
                  <select
                    name="race"
                    className="w-full p-3 bg-parchment-100 border-2 border-amber-700 rounded-lg font-serif text-amber-900 focus:outline-none focus:border-amber-900 transition-colors"
                    value={character.race}
                    onChange={handleChange}
                  >
                    <option value="">— Seleziona una razza —</option>
                    {Object.entries(races).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-amber-700/70 italic mt-2">
                    Le antiche stirpi di questo mondo
                  </p>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <label className="block font-serif text-amber-900 text-lg mb-2">
                    Scegli la classe del tuo eroe
                  </label>
                  <select
                    name="class"
                    className="w-full p-3 bg-parchment-100 border-2 border-amber-700 rounded-lg font-serif text-amber-900 focus:outline-none focus:border-amber-900 transition-colors"
                    value={character.class}
                    onChange={handleChange}
                  >
                    <option value="">— Seleziona una classe —</option>
                    {Object.entries(classes).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-amber-700/70 italic mt-2">
                    Il percorso che forgerà il tuo destino
                  </p>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <label className="block font-serif text-amber-900 text-lg mb-2">
                    Qual è il background del tuo eroe?
                  </label>
                  <input
                    name="background"
                    className="w-full p-3 bg-parchment-100 border-2 border-amber-700 rounded-lg font-serif text-amber-900 placeholder-amber-600/50 focus:outline-none focus:border-amber-900 transition-colors"
                    placeholder="Es. Nobile, Artigiano, Eremita..."
                    value={character.background}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-amber-700/70 italic mt-2">
                    Le storie che hanno plasmato il tuo passato
                  </p>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4">
                  <label className="block font-serif text-amber-900 text-lg mb-2">
                    Scegli l&apos;allineamento del tuo eroe
                  </label>
                  <select
                    name="alignment"
                    className="w-full p-3 bg-parchment-100 border-2 border-amber-700 rounded-lg font-serif text-amber-900 focus:outline-none focus:border-amber-900 transition-colors"
                    value={character.alignment}
                    onChange={handleChange}
                  >
                    <option value="">— Seleziona un allineamento —</option>
                    {Object.entries(alignments).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-amber-700/70 italic mt-2">
                    La bussola morale che guiderà le tue azioni
                  </p>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-amber-900 text-xl text-center mb-4">
                    Conferma il tuo eroe
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Nome - con gestione testo lungo */}
                     <div className="col-span-2 bg-amber-200/30 p-3 rounded-lg border border-amber-700/30">
                      <div className="text-xs text-amber-700/70 mb-1">Nome</div>
                      <div className="font-serif text-amber-900 font-bold break-words">
                        {character.name || "—"}
                      </div>
                    </div>
                    {/* Razza */}
                    <div className="bg-amber-200/30 p-3 rounded-lg border border-amber-700/30">
                      <div className="text-xs text-amber-700/70 mb-1">Razza</div>
                      <div className="font-serif text-amber-900 font-bold break-words">
                        {t("races", character.race) || "—"}
                      </div>
                    </div>
                    {/* Classe */}
                    <div className="bg-amber-200/30 p-3 rounded-lg border border-amber-700/30">
                      <div className="text-xs text-amber-700/70 mb-1">Classe</div>
                      <div className="font-serif text-amber-900 font-bold break-words">
                        {t("classes", character.class) || "—"}
                      </div>
                    </div>
                    {/* Allineamento */}
                    <div className="col-span-2 bg-amber-200/30 p-3 rounded-lg border border-amber-700/30">
                      <div className="text-xs text-amber-700/70 mb-1">Allineamento</div>
                      <div className="font-serif text-amber-900 font-bold break-words">
                        {t("alignments", character.alignment) || "—"}
                      </div>
                    </div>
                    {/* Background - può essere lungo, occupa tutta la larghezza */}
                    <div className="col-span-2 bg-amber-200/30 p-3 rounded-lg border border-amber-700/30">
                      <div className="text-xs text-amber-700/70 mb-1">Background</div>
                      <div className="font-serif text-amber-900 break-words">
                        {character.background || "—"}
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-amber-700 italic text-sm">
                    Sei pronto a iniziare la tua avventura?
                  </p>
                </div>
              )}
            </div>

            {/* Pulsanti navigazione */}
            <div className="flex justify-between gap-4">
              <button
                className={`
                  px-6 py-2 font-serif rounded-lg border-2 transition-all duration-300 flex items-center gap-2
                  ${step === 0
                    ? 'opacity-50 cursor-not-allowed border-amber-700/30 text-amber-700/50'
                    : 'bg-amber-700 border-amber-900 text-amber-100 hover:bg-amber-800'
                  }
                `}
                onClick={handlePrev}
                disabled={step === 0}
              >
                <span>←</span> Indietro
              </button>

              {step < steps.length - 1 ? (
                <button
                  className="px-6 py-2 bg-amber-700 border-2 border-amber-900 text-amber-100 font-serif rounded-lg hover:bg-amber-800 transition-all duration-300 flex items-center gap-2"
                  onClick={handleNext}
                  disabled={stepKeys[step] !== undefined && !character[stepKeys[step]]}
                >
                  Avanti <span>→</span>
                </button>
              ) : (
                <button
                  className="px-6 py-2 bg-amber-800 border-2 border-amber-900 text-amber-100 font-serif rounded-lg hover:bg-amber-900 transition-all duration-300 flex items-center gap-2"
                  onClick={handleCreate}
                >
                  <span>⚔️</span> Crea Eroe <span>🛡️</span>
                </button>
              )}
            </div>
          </div>
        </AncientCardContainer>
      </div>
    </div>
  );
}