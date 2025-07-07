
export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number; // index of correct answer (0-based)
  explanation?: string;
}

export const introSurgicalTechQuestions: Question[] = [
  {
    id: 1,
    question: "What is the best definition of asepsis?",
    choices: [
      "Complete destruction of all microorganisms including spores",
      "Use of chemical agents on skin",
      "Absence of pathogenic microorganisms or disease",
      "Reduction of bioburden to a safe level"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which term refers to killing bacteria?",
    choices: [
      "Bacteriostatic",
      "Bactericidal",
      "Fungicide",
      "Virucide"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the purpose of the sterile field?",
    choices: [
      "A semi-clean area to prepare instruments",
      "An area kept free of all microorganisms",
      "An area cleaned with intermediate-level disinfectant",
      "A place where non-critical items are stored"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "The presence of pathogenic microorganisms on a sterile item is called:",
    choices: [
      "Contamination",
      "Decontamination",
      "Sterilization",
      "Package integrity"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "A resistant form of bacteria that can survive harsh conditions is known as a:",
    choices: [
      "Pathogen",
      "Spore",
      "Fomite",
      "Vector"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "What is the term for microorganisms normally residing in or on the body?",
    choices: [
      "Indigenous microflora",
      "Transient microflora",
      "Pathogens",
      "Bioburden"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "The term strike-through contamination refers to:",
    choices: [
      "Microbes transferred by a living carrier",
      "Contamination from a dirty instrument",
      "Fluid passing through a sterile barrier by wicking",
      "Introduction of indigenous microflora into a wound"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which term describes an object that harbors microorganisms and can transfer them?",
    choices: [
      "Fomite",
      "Vector",
      "Pathogen",
      "Sepsis"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Which process destroys all microorganisms, including spores?",
    choices: [
      "Disinfection",
      "Sterilization",
      "Antisepsis",
      "Decontamination"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What is the classification for items that contact mucous membranes or non-intact skin?",
    choices: [
      "Critical",
      "Non-critical",
      "Semi-critical",
      "Sterile"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which of the following destroys microorganisms on living tissue?",
    choices: [
      "Sterilant",
      "Antiseptic",
      "Disinfectant",
      "Sporicide"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "What is the best definition of event-related sterility?",
    choices: [
      "Package is sterile as long as it is unopened and intact",
      "Package is sterile for 30 days after sterilization",
      "Package is sterile until bioburden exceeds safe levels",
      "Package is sterile only while within the sterile field"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Which level of disinfection kills most microbes, including M. tuberculosis, but not spores?",
    choices: [
      "High-level",
      "Intermediate-level",
      "Low-level",
      "Sterilization"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "What is the purpose of terminal sterilization?",
    choices: [
      "Clean the surgical field after a case",
      "Prepare unwrapped items for immediate use",
      "Render unwrapped items safe for handling before packaging",
      "Decontaminate living tissue before surgery"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Microorganisms picked up from the environment and easily removed with washing are called:",
    choices: [
      "Resident flora",
      "Pathogens",
      "Transient microflora",
      "Indigenous microflora"
    ],
    correctAnswer: 2
  }
];
