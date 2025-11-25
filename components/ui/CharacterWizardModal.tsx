import React, { useState } from "react";
import { races } from "@/lib/dictionaries/races";
import { classes } from "@/lib/dictionaries/classes";
import { alignments } from "@/lib/dictionaries/alignments";
import { t } from "@/lib/dictionary";

export default function CharacterWizardModal({ open, onClose, onCreate }: {
  open: boolean;
  onClose: () => void;
  onCreate: (character: any) => void;
}) {
  const [step, setStep] = useState(0);
  const [character, setCharacter] = useState({
    name: "",
    race: "",
    class: "",
    background: "",
    alignment: "",
    // aggiungi altri campi necessari
  });

  const steps = [
    "Nome",
    "Razza",
    "Classe",
    "Background",
    "Allineamento",
    "Conferma"
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-base-100 rounded-xl shadow-lg p-8 w-full max-w-2xl relative">
        <button className="absolute top-2 right-2 btn btn-sm btn-circle" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Crea nuovo personaggio</h2>
        <ul className="steps w-full mb-6">
          {steps.map((label, i) => (
            <li key={label} className={`step${i <= step ? " step-primary" : ""}`}>{label}</li>
          ))}
        </ul>
        <div className="mb-6">
          {step === 0 && (
            <input
              name="name"
              className="input input-bordered w-full"
              placeholder="Nome del personaggio"
              value={character.name}
              onChange={handleChange}
              autoFocus
            />
          )}
          {step === 1 && (
            <select
              name="race"
              className="select select-bordered w-full"
              value={character.race}
              onChange={handleChange}
            >
              <option value="">Seleziona razza</option>
              {Object.entries(races).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          )}
          {step === 2 && (
            <select
              name="class"
              className="select select-bordered w-full"
              value={character.class}
              onChange={handleChange}
            >
              <option value="">Seleziona classe</option>
              {Object.entries(classes).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          )}
          {step === 3 && (
            <input
              name="background"
              className="input input-bordered w-full"
              placeholder="Background"
              value={character.background}
              onChange={handleChange}
            />
          )}
          {step === 4 && (
            <select
              name="alignment"
              className="select select-bordered w-full"
              value={character.alignment}
              onChange={handleChange}
            >
              <option value="">Seleziona allineamento</option>
              {Object.entries(alignments).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          )}
          {step === 5 && (
            <div className="space-y-2">
              <div><strong>Nome:</strong> {character.name}</div>
              <div><strong>Razza:</strong> {t("races", character.race)}</div>
              <div><strong>Classe:</strong> {t("classes", character.class)}</div>
              <div><strong>Background:</strong> {character.background}</div>
              <div><strong>Allineamento:</strong> {t("alignments", character.alignment)}</div>
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <button className="btn" onClick={handlePrev} disabled={step === 0}>Indietro</button>
          {step < steps.length - 1 ? (
            <button
              className="btn btn-primary"
              onClick={handleNext}
              disabled={stepKeys[step] !== undefined && !character[stepKeys[step]]}
            >
              Avanti
            </button>
          ) : (
            <button className="btn btn-success" onClick={handleCreate}>Crea</button>
          )}
        </div>
      </div>
    </div>
  );
}
