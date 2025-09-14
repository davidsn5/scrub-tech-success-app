export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const plasticsInstrumentQuestions: Question[] = [
  {
    id: 1,
    question: "Which forceps is specifically designed for microsurgical procedures in plastic surgery?",
    choices: [
      "Adson forceps",
      "Castro-Viejo needle holder", 
      "Brown-Adson forceps",
      "Russian forceps"
    ],
    correctAnswer: 1,
    explanation: "Castro-Viejo needle holders are specifically designed for microsurgery with fine tips and excellent precision control, essential for delicate suturing in plastic surgery procedures."
  },
  {
    id: 2,
    question: "What is the primary advantage of using a skin hook in plastic surgery?",
    choices: [
      "Provides strong retraction force",
      "Can grasp multiple tissue layers",
      "Offers atraumatic tissue retraction",
      "Allows for electrocautery use"
    ],
    correctAnswer: 2,
    explanation: "Skin hooks provide atraumatic retraction by gently lifting skin edges, preserving tissue viability and preventing crush injuries that could compromise healing."
  },
  {
    id: 3,
    question: "Which instrument is essential for harvesting skin grafts of uniform thickness?",
    choices: [
      "Facelift scissors",
      "Dermatome",
      "Liposuction cannula",
      "Tissue expander"
    ],
    correctAnswer: 1,
    explanation: "Dermatomes are specialized instruments that cut thin, uniform layers of skin for grafting procedures, ensuring consistent graft thickness for optimal healing."
  },
  {
    id: 4,
    question: "What type of forceps should be used when handling fat grafts to maintain cell viability?",
    choices: [
      "Toothed forceps",
      "Electrocautery forceps",
      "Smooth atraumatic forceps",
      "Hemostatic forceps"
    ],
    correctAnswer: 2,
    explanation: "Smooth, atraumatic forceps prevent damage to delicate fat cells during transfer procedures, maintaining cell viability for successful fat grafting."
  },
  {
    id: 5,
    question: "Which instrument combines cutting and coagulation functions in plastic surgery?",
    choices: [
      "Metzenbaum scissors",
      "Harmonic scalpel",
      "Facelift scissors",
      "Tenotomy scissors"
    ],
    correctAnswer: 1,
    explanation: "Harmonic scalpels use ultrasonic energy to cut and seal blood vessels simultaneously, reducing bleeding and thermal damage to surrounding tissues."
  },
  {
    id: 6,
    question: "What is the primary function of a mammotome in breast procedures?",
    choices: [
      "Breast implant insertion",
      "Tissue expansion",
      "Vacuum-assisted biopsy",
      "Nipple reconstruction"
    ],
    correctAnswer: 2,
    explanation: "A mammotome uses vacuum suction and a rotating cutting device to obtain multiple tissue samples through a single insertion, minimizing scarring and patient discomfort."
  },
  {
    id: 7,
    question: "Which scissors type is preferred for fine dissection around nerves in plastic surgery?",
    choices: [
      "Mayo scissors",
      "Bandage scissors",
      "Metzenbaum scissors",
      "Operating scissors"
    ],
    correctAnswer: 2,
    explanation: "Metzenbaum scissors have fine tips that allow for precise dissection around delicate structures like nerves and blood vessels without causing damage to surrounding tissues."
  },
  {
    id: 8,
    question: "What is the purpose of tumescent solution in liposuction procedures?",
    choices: [
      "Skin marking",
      "Local anesthesia and vasoconstriction", 
      "Tissue expansion",
      "Wound irrigation"
    ],
    correctAnswer: 1,
    explanation: "Tumescent solution contains lidocaine for anesthesia and epinephrine for vasoconstriction, reducing bleeding and providing pain control during liposuction."
  },
  {
    id: 9,
    question: "Which measuring instrument is crucial for ensuring symmetry in rhinoplasty?",
    choices: [
      "Blood pressure cuff",
      "Pulse oximeter",
      "Nasal measuring ruler or caliper",
      "Tissue thickness gauge"
    ],
    correctAnswer: 2,
    explanation: "Nasal measuring instruments ensure precise symmetry and proportions during nasal reconstruction and cosmetic rhinoplasty procedures."
  }
];