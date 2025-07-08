
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
  },
  {
    id: 16,
    question: "The scope of practice for an STSR is based on:",
    choices: [
      "Hospital policy only",
      "Surgeon preference",
      "Education, experience, and national credentialing",
      "What others in the OR are doing"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "If you are asked to do something outside your scope of practice, the correct response is:",
    choices: [
      "Perform the task anyway to help the team",
      "Refuse politely and say \"I'm sorry, I can't do that\"",
      "Ask another tech to do it",
      "Only refuse if the surgeon isn't watching"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Before performing a questionable task, you should ask yourself:",
    choices: [
      "\"Is this task convenient?\"",
      "\"Will anyone notice?\"",
      "\"Was this taught in my surgical technology program?\"",
      "\"Does the surgeon prefer this?\""
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "Licensure is:",
    choices: [
      "The least restrictive form of regulation",
      "Optional in all states",
      "The most restrictive form of regulation",
      "Only for surgical technologists"
    ],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "Certification for surgical technologists is administered by:",
    choices: [
      "CAAHEP",
      "ARC/STSA",
      "NBSTSA",
      "OSHA"
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "Which of the following professionals are licensed?",
    choices: [
      "Surgical technologists",
      "Registered nurses",
      "Surgeons only",
      "Both surgical techs and surgeons"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Surgical technologists must pass a certification exam to work in which of the following states?",
    choices: [
      "California and Florida",
      "New Jersey and Texas",
      "Hawaii and Alaska",
      "Oregon and Washington"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Which organization sets the standards for surgical technology education programs?",
    choices: [
      "NBSTSA",
      "CAAHEP",
      "ARC/STSA",
      "OSHA"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "The ARC/STSA is responsible for:",
    choices: [
      "Accrediting programs and conducting site visits",
      "Administering the certification exam",
      "Licensing surgical technologists",
      "Setting legal policy"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "A sworn written statement of facts is called a(n):",
    choices: [
      "Allegation",
      "Affidavit",
      "Bonafide",
      "Guardian"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "An allegation is best defined as:",
    choices: [
      "A proven fact",
      "A sincere statement",
      "A claim made without proof",
      "A court order"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "The term \"bonafide\" means:",
    choices: [
      "Without proof",
      "Sincere and without deception",
      "With intent to deceive",
      "Under oath"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Which of the following is an example of an iatrogenic injury?",
    choices: [
      "A patient falls at home",
      "A burn caused by improper electrode placement",
      "A car accident injury",
      "A genetic disorder"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "The obligation to do or not do something and be responsible for it is called:",
    choices: [
      "Accountability",
      "Malpractice",
      "Liability",
      "Negligence"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Which of the following is an example of malpractice?",
    choices: [
      "Following hospital policy",
      "Providing standard care",
      "Performing surgery on the wrong site",
      "Confirming allergies"
    ],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "Negligence is defined as:",
    choices: [
      "Carelessness without intent to harm",
      "Intentionally harming a patient",
      "Refusing to treat a patient",
      "Abandonment"
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "Which of the following is considered a standard of care?",
    choices: [
      "Ignoring allergies to save time",
      "Prioritizing the surgeon's needs above all",
      "Providing competent medical care and putting patients first",
      "Performing tasks outside your training"
    ],
    correctAnswer: 2
  },
  {
    id: 33,
    question: "During a time-out, which of the following is NOT typically confirmed?",
    choices: [
      "Patient name and procedure",
      "Allergies",
      "Estimated blood loss",
      "Surgeon's preference"
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "Who can initiate a time-out?",
    choices: [
      "Only the surgeon",
      "Only the circulating nurse",
      "Anyone in the room",
      "Only the anesthesia provider"
    ],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "Counts of surgical items must be done:",
    choices: [
      "By the surgeon alone",
      "At the end of the shift only",
      "Before the case, when closing cavities, and at skin closure",
      "Only if an item is missing"
    ],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "Which of the following can cause patient burns in the OR?",
    choices: [
      "Proper grounding pad placement",
      "Testing all electrical equipment",
      "Cooling hot instruments with sterile water",
      "Clamping ESU cords with metal instruments"
    ],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "How many people are recommended to transfer an immobile patient?",
    choices: [
      "One",
      "Two",
      "Four",
      "Six"
    ],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "When administering a drug, the STSR should:",
    choices: [
      "Trust the label without checking",
      "Label the cup/syringe as soon as it is filled and state the medication when passing",
      "Only rely on the circulator to check",
      "Hand the drug without comment"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Loss of a patient's personal property should first be addressed by:",
    choices: [
      "The surgeon",
      "The RN in the holding area",
      "The STSR",
      "The anesthesia provider"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "SSI (surgical site infections) are often caused by:",
    choices: [
      "Poor lighting",
      "Patient allergies",
      "Breaks in sterile technique",
      "Excessive antibiotics"
    ],
    correctAnswer: 2
  }
];
