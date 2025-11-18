export const skills = {
  acrobatics: {
    label: "Acrobazia",
    stat: "DEX",
    description: "Capacità di mantenere l'equilibrio, volteggiare e evitar cadute."
  },
  animal_handling: {
    label: "Addestrare Animali",
    stat: "WIS",
    description: "Interagire con animali, calmarli o controllarli."
  },
  arcana: {
    label: "Arcano",
    stat: "INT",
    description: "Conoscenza delle magie, rituali e fenomeni soprannaturali."
  },
  athletics: {
    label: "Atletica",
    stat: "STR",
    description: "Attività fisiche come arrampicarsi, nuotare e trattenere qualcuno."
  },
  deception: {
    label: "Inganno",
    stat: "CHA",
    description: "Mentire, travestirsi e ingannare verbalmente."
  },
  history: {
    label: "Storia",
    stat: "INT",
    description: "Conoscenza degli eventi storici, antiche civiltà e tradizioni."
  },
  insight: {
    label: "Intuizione",
    stat: "WIS",
    description: "Comprendere le intenzioni altrui e riconoscere menzogne."
  },
  intimidation: {
    label: "Intimidazione",
    stat: "CHA",
    description: "Forzare qualcuno tramite minacce, tono o presenza."
  },
  investigation: {
    label: "Investigazione",
    stat: "INT",
    description: "Analizzare tracce, risolvere puzzle o dedurre informazioni."
  },
  medicine: {
    label: "Medicina",
    stat: "WIS",
    description: "Stabilizzare un moribondo, diagnosticare una malattia."
  },
  nature: {
    label: "Natura",
    stat: "INT",
    description: "Conoscenza di animali, piante, clima e geografia naturale."
  },
  perception: {
    label: "Percezione",
    stat: "WIS",
    description: "Notare dettagli, sentire un rumore o percepire un pericolo."
  },
  performance: {
    label: "Intrattenere",
    stat: "CHA",
    description: "Recitare, cantare, suonare o qualsiasi tipo di arte performativa."
  },
  persuasion: {
    label: "Persuasione",
    stat: "CHA",
    description: "Convincere qualcuno tramite charme, logica o gentilezza."
  },
  religion: {
    label: "Religione",
    stat: "INT",
    description: "Conoscenza di divinità, culti, dottrine e miti sacri."
  },
  sleight_of_hand: {
    label: "Rapidità di Mano",
    stat: "DEX",
    description: "Furtarelli, trucchi manuali o manipolazioni rapide."
  },
  stealth: {
    label: "Furtività",
    stat: "DEX",
    description: "Muoversi silenziosamente e passare inosservati."
  },
  survival: {
    label: "Sopravvivenza",
    stat: "WIS",
    description: "Seguire tracce, cacciare, orientarsi in natura."
  },
} as const;

export type SkillKey = keyof typeof skills;
