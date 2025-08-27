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
    correctAnswer: 2,
    explanation: "Asepsis refers to the absence of pathogenic (disease-causing) microorganisms. This is different from sterilization (complete destruction of all microorganisms including spores) and disinfection (reduction of bioburden). Asepsis is the foundation of surgical practice to prevent infection."
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
    correctAnswer: 1,
    explanation: "Bactericidal means 'bacteria-killing' - it refers to agents or processes that destroy bacteria. Bacteriostatic means 'bacteria-stopping' (inhibits growth but doesn't kill), fungicide kills fungi, and virucide kills viruses. The suffix '-cidal' always means 'killing'."
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
    correctAnswer: 1,
    explanation: "The sterile field is an area that is kept completely free of all microorganisms to prevent contamination during surgical procedures. It must be established and maintained using strict sterile technique to ensure patient safety and prevent surgical site infections."
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
    correctAnswer: 0,
    explanation: "Contamination occurs when pathogenic microorganisms are present where they should not be, especially on sterile items. This breaks the sterile field and can lead to surgical site infections. Decontamination is the process of removing contamination."
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
    correctAnswer: 1,
    explanation: "Spores are highly resistant dormant forms of bacteria that can survive extreme conditions including heat, cold, radiation, and chemical disinfectants. They require sterilization (not just disinfection) to be destroyed. This is why sterilization processes must be validated against spore-forming bacteria."
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
    correctAnswer: 0,
    explanation: "Indigenous (or normal) microflora are beneficial microorganisms that naturally live in or on the body and help protect against harmful pathogens. Transient microflora are temporary microorganisms that can be removed with hand hygiene. Understanding this difference is crucial for proper antiseptic procedures."
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
  },
  {
    id: 41,
    question: "Which of the following is the correct way to transport a patient through hallways to the OR?",
    choices: [
      "Head first",
      "Feet first",
      "On their side",
      "Prone position"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "How many people are required to move an immobile patient?",
    choices: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 3
  },
  {
    id: 43,
    question: "Before moving a patient, what should always be done with the stretcher?",
    choices: [
      "Remove all sheets",
      "Lock the wheels",
      "Lower the side rails",
      "Place safety strap"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "Who determines when it is time to move the patient to the OR bed?",
    choices: [
      "Circulator",
      "Scrub tech",
      "Anesthesia",
      "Surgeon"
    ],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "Where should the safety strap be placed on the OR table?",
    choices: [
      "Over the chest",
      "2 inches above the knee",
      "At the ankles",
      "Around the waist"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "What is the maximum recommended angle for placing arms on arm boards?",
    choices: [
      "45°",
      "60°",
      "90°",
      "120°"
    ],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "Why should the patient's feet not extend beyond the OR bed?",
    choices: [
      "Prevent blood clots",
      "Avoid nerve damage",
      "Avoid foot drop",
      "Allow easier access"
    ],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "Which of the following is used to keep the patient warm and protect privacy?",
    choices: [
      "SCD",
      "Warm irrigation fluids",
      "Blanket",
      "Safety strap"
    ],
    correctAnswer: 2
  },
  {
    id: 49,
    question: "Which method of heat loss occurs by air currents in the OR?",
    choices: [
      "Conduction",
      "Convection",
      "Radiation",
      "Evaporation"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "What is a symptom of hypothermia?",
    choices: [
      "Tachycardia",
      "Decreased oxygen demand",
      "Bradycardia",
      "Hypotension"
    ],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "Why is hypothermia sometimes induced during cardiac surgery?",
    choices: [
      "To reduce clotting",
      "To increase heart rate",
      "To protect organs",
      "To prevent hypoxia"
    ],
    correctAnswer: 2
  },
  {
    id: 52,
    question: "Sequential compression devices help prevent:",
    choices: [
      "Bradycardia",
      "Hypothermia",
      "Venous stasis",
      "Respiratory alkalosis"
    ],
    correctAnswer: 2
  },
  {
    id: 53,
    question: "Which vital sign measures the exchange of oxygen and carbon dioxide?",
    choices: [
      "Temperature",
      "Respiration",
      "Pulse",
      "Blood pressure"
    ],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "What is the normal oral temperature in Fahrenheit?",
    choices: [
      "97.6°F",
      "98.6°F",
      "99.6°F",
      "100°F"
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "An adult normal pulse range is:",
    choices: [
      "80–120 bpm",
      "60–100 bpm",
      "40–60 bpm",
      "100–120 bpm"
    ],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "What is the top number of a blood pressure reading called?",
    choices: [
      "Diastolic",
      "Systolic",
      "Mean",
      "Pulse pressure"
    ],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "What artery is commonly used for invasive BP monitoring?",
    choices: [
      "Femoral",
      "Radial",
      "Dorsalis pedis",
      "Carotid"
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "Which catheter has a bent tip and is used for enlarged prostate?",
    choices: [
      "Foley",
      "Robinson",
      "Coude",
      "Straight"
    ],
    correctAnswer: 2
  },
  {
    id: 61,
    question: "What position is most commonly used for abdominal surgery?",
    choices: [
      "Lithotomy",
      "Prone",
      "Supine",
      "Trendelenburg"
    ],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "The Trendelenburg position is used for:",
    choices: [
      "Shock treatment",
      "Kidney surgery",
      "Neurosurgery",
      "Laparoscopy"
    ],
    correctAnswer: 0
  },
  {
    id: 63,
    question: "Reverse Trendelenburg helps displace:",
    choices: [
      "Pelvic organs",
      "Abdominal organs",
      "Cardiac output",
      "Lower extremities"
    ],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "Which position is a modification of prone for rectal surgery?",
    choices: [
      "Sims",
      "Jackknife",
      "Knee-chest",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "Which position is used for endoscopy?",
    choices: [
      "Lithotomy",
      "Sims",
      "Jackknife",
      "Prone"
    ],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "What position requires axillary rolls to ease respirations?",
    choices: [
      "Supine",
      "Lithotomy",
      "Lateral",
      "Fowler's"
    ],
    correctAnswer: 2
  },
  {
    id: 68,
    question: "What is the normal platelet count?",
    choices: [
      "5,000–10,000",
      "4.2–5.4",
      "150–400",
      "14–18"
    ],
    correctAnswer: 2
  },
  {
    id: 69,
    question: "An ABG pH level of 7.30 suggests:",
    choices: [
      "Normal",
      "Acidosis",
      "Alkalosis",
      "Hyperventilation"
    ],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "Normal PO₂ in ABG is:",
    choices: [
      "22–28",
      "80–100",
      "35–45",
      "7.35–7.45"
    ],
    correctAnswer: 1
  },
  {
    id: 71,
    question: "What is the normal prothrombin time (PT)?",
    choices: [
      "5–7 seconds",
      "8–10 seconds",
      "11–13.5 seconds",
      "14–18 seconds"
    ],
    correctAnswer: 2
  },
  {
    id: 72,
    question: "The purpose of a cell saver is to:",
    choices: [
      "Remove bacteria",
      "Wash and return patient's own blood",
      "Store donor blood",
      "Provide oxygenation"
    ],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "The OR ventilation system prevents contamination by:",
    choices: [
      "Negative pressure",
      "High humidity",
      "Positive pressure",
      "High temperature"
    ],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "HEPA filters remove particles as small as:",
    choices: [
      "0.5–5 mm",
      "1–2 mm",
      "5–10 mm",
      "10–20 mm"
    ],
    correctAnswer: 0
  },
  {
    id: 75,
    question: "The OR table is positioned:",
    choices: [
      "Near the wall",
      "Under the OR lights",
      "Next to doors",
      "At surgeon's preference"
    ],
    correctAnswer: 1
  },
  {
    id: 76,
    question: "What is the correct inflation limit for a lower limb tourniquet?",
    choices: [
      "30 min",
      "60 min",
      "90 min",
      "120 min"
    ],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "How much higher than systolic BP is the upper extremity tourniquet pressure?",
    choices: [
      "30 mmHg",
      "50 mmHg",
      "70 mmHg",
      "100 mmHg"
    ],
    correctAnswer: 2
  },
  {
    id: 78,
    question: "What is the function of the Yankauer suction tip?",
    choices: [
      "Endoscopic suction",
      "Tonsillar/oropharyngeal suction",
      "Deep abdominal suction",
      "Smoke evacuation"
    ],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "What color is the oxygen outlet in the OR?",
    choices: [
      "Black",
      "Blue",
      "Yellow",
      "Green"
    ],
    correctAnswer: 3
  },
  {
    id: 80,
    question: "Which light source is cool to protect tissue?",
    choices: [
      "Paraxial",
      "Coaxial",
      "LED",
      "Incandescent"
    ],
    correctAnswer: 2
  },
  {
    id: 81,
    question: "Which microscope lens is closest to the object?",
    choices: [
      "Ocular",
      "Objective",
      "Zoom",
      "Beam splitter"
    ],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "The C-arm is primarily used for:",
    choices: [
      "Warming",
      "Fluoroscopy",
      "Ventilation",
      "Lighting"
    ],
    correctAnswer: 1
  },
  {
    id: 83,
    question: "Which OR furniture holds sterile supplies during the case?",
    choices: [
      "Ring stand",
      "Mayo stand",
      "Kick bucket",
      "Back table"
    ],
    correctAnswer: 3
  },
  {
    id: 84,
    question: "Which is used for lead shielding from x-rays?",
    choices: [
      "Curtains",
      "Lead apron",
      "Plastic cover",
      "Smoke evacuator"
    ],
    correctAnswer: 1
  },
  {
    id: 85,
    question: "What is the main risk of improper ESU use?",
    choices: [
      "Hypothermia",
      "Electrical burns",
      "Hypoxia",
      "Radiation exposure"
    ],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "The smoke evacuator should be held how close to the site?",
    choices: [
      "1 inch",
      "2 inches",
      "4 inches",
      "6 inches"
    ],
    correctAnswer: 1
  },
  {
    id: 88,
    question: "Sterilization refers to:",
    choices: [
      "Destroying most microorganisms",
      "Destroying all microorganisms including spores",
      "Cleaning mechanically only",
      "Using antiseptics on skin"
    ],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "Asepsis means:",
    choices: [
      "Free of bacteria but not viruses",
      "Absence of disease-causing microorganisms",
      "Chemically disinfected",
      "Using sterile gloves only"
    ],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "Surgically clean means:",
    choices: [
      "Mechanically cleaned and sterile",
      "Mechanically and chemically disinfected but not sterile",
      "Free of all spores",
      "Only washed with water"
    ],
    correctAnswer: 1
  },
  {
    id: 91,
    question: "Strike-through contamination occurs when:",
    choices: [
      "A sterile field is covered completely",
      "Fluid soaks through drapes",
      "A sterilized package is opened",
      "The sterilizer fails"
    ],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "Aeration is a process used to:",
    choices: [
      "Dry instruments",
      "Remove ethylene oxide gas",
      "Improve HEPA filter efficiency",
      "Remove dust from air"
    ],
    correctAnswer: 1
  },
  {
    id: 93,
    question: "Anaerobes are microorganisms that:",
    choices: [
      "Require oxygen to survive",
      "Cannot live without oxygen",
      "Survive without oxygen",
      "Only live on surfaces"
    ],
    correctAnswer: 2
  },
  {
    id: 94,
    question: "Binary fission refers to:",
    choices: [
      "Sexual reproduction of fungi",
      "Asexual reproduction of bacteria",
      "Viral replication",
      "Spore formation"
    ],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "Bactericidal agents:",
    choices: [
      "Prevent bacteria from growing",
      "Kill bacteria",
      "Kill viruses",
      "Kill fungi"
    ],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "Bacteriostatic agents:",
    choices: [
      "Kill bacteria",
      "Kill fungi",
      "Prevent bacterial growth",
      "Kill spores"
    ],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "Bioburden is defined as:",
    choices: [
      "The weight of a package",
      "Number of microorganisms on an item before sterilization",
      "Number of spores in the air",
      "Indicator of humidity"
    ],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "The biological indicator for steam sterilizers is:",
    choices: [
      "Bacillus subtilis",
      "Geobacillus stearothermophilus",
      "MRSA",
      "C. difficile"
    ],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "The biological indicator for ETO sterilizers is:",
    choices: [
      "G. stearothermophilus",
      "B. atrophaeus",
      "C. perfringens",
      "S. aureus"
    ],
    correctAnswer: 1
  },
  {
    id: 100,
    question: "An SSI is:",
    choices: [
      "Secondary site infection",
      "Sterile surgical instrument",
      "Surgical site infection",
      "Spore sterilization indicator"
    ],
    correctAnswer: 2
  },
  {
    id: 101,
    question: "High-level disinfection destroys:",
    choices: [
      "Some bacteria and viruses",
      "All microorganisms if contact time is sufficient",
      "Only vegetative bacteria",
      "Only fungi"
    ],
    correctAnswer: 1
  },
  {
    id: 102,
    question: "Intermediate-level disinfection destroys:",
    choices: [
      "Bacterial endospores",
      "Inactive vegetative bacteria, fungi, most viruses",
      "All microorganisms",
      "Only viruses"
    ],
    correctAnswer: 1
  },
  {
    id: 103,
    question: "Low-level disinfection destroys:",
    choices: [
      "All microorganisms",
      "Only spores",
      "Most bacteria, some viruses, some fungi",
      "Only fungi"
    ],
    correctAnswer: 2
  },
  {
    id: 104,
    question: "Flash sterilization is typically done:",
    choices: [
      "In a washer-sterilizer",
      "For immediate use instruments",
      "For long-term storage",
      "Using dry heat"
    ],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "Fungicide kills:",
    choices: [
      "Viruses",
      "Bacteria",
      "Spores",
      "Fungi"
    ],
    correctAnswer: 3
  },
  {
    id: 106,
    question: "Naturally acquired active immunity occurs:",
    choices: [
      "When vaccinated",
      "When exposed to disease and develop immunity",
      "Through mother to fetus",
      "By injection of gamma globulin"
    ],
    correctAnswer: 1
  },
  {
    id: 107,
    question: "Artificially acquired active immunity occurs:",
    choices: [
      "Through mother to fetus",
      "By exposure to disease",
      "By vaccination",
      "By injection of antibodies"
    ],
    correctAnswer: 2
  },
  {
    id: 108,
    question: "Naturally acquired passive immunity occurs:",
    choices: [
      "Through vaccination",
      "Through gamma globulin injection",
      "Through maternal antibodies",
      "By exposure to disease"
    ],
    correctAnswer: 2
  },
  {
    id: 109,
    question: "Artificially acquired passive immunity occurs:",
    choices: [
      "By exposure to disease",
      "Through maternal antibodies",
      "By vaccination",
      "By injection of antibodies"
    ],
    correctAnswer: 3
  },
  {
    id: 110,
    question: "A nosocomial infection is:",
    choices: [
      "Community-acquired",
      "Hospital-acquired",
      "Viral",
      "Bacterial only"
    ],
    correctAnswer: 1
  },
  {
    id: 111,
    question: "Pasteurization destroys microorganisms in:",
    choices: [
      "Milk or wine",
      "Air",
      "Skin",
      "Operating room"
    ],
    correctAnswer: 0
  },
  {
    id: 112,
    question: "Parasites that depend on living tissue are called:",
    choices: [
      "Facultative",
      "Obligatory",
      "Aerobic",
      "Anaerobic"
    ],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "Virucide is a chemical that:",
    choices: [
      "Kills bacteria",
      "Kills fungi",
      "Kills viruses",
      "Kills spores"
    ],
    correctAnswer: 2
  },
  {
    id: 114,
    question: "MRSA is resistant to most antibiotics except:",
    choices: [
      "Amoxicillin",
      "Vancomycin",
      "Penicillin",
      "Cephalosporin"
    ],
    correctAnswer: 1
  },
  {
    id: 115,
    question: "Prion diseases include:",
    choices: [
      "MRSA",
      "Creutzfeldt–Jakob",
      "TB",
      "SSI"
    ],
    correctAnswer: 1
  },
  {
    id: 116,
    question: "Which sterilization method is used for oils and petroleum products?",
    choices: [
      "Steam under pressure",
      "ETO",
      "Dry heat",
      "Plasma"
    ],
    correctAnswer: 2
  },
  {
    id: 117,
    question: "Wooden-handled instruments should be:",
    choices: [
      "Packaged with metals",
      "Never sterilized",
      "Packaged separately",
      "Used only once"
    ],
    correctAnswer: 2
  },
  {
    id: 118,
    question: "The preferred method for rubber goods is:",
    choices: [
      "ETO",
      "Dry heat",
      "Steam",
      "Radiation"
    ],
    correctAnswer: 2
  },
  {
    id: 119,
    question: "A critical item must be:",
    choices: [
      "Rinsed only",
      "Sterile",
      "High-level disinfected",
      "Wiped with alcohol"
    ],
    correctAnswer: 1
  },
  {
    id: 120,
    question: "An example of a critical item is:",
    choices: [
      "Blood pressure cuff",
      "Endoscope",
      "Surgical instrument",
      "Stethoscope"
    ],
    correctAnswer: 2
  },
  {
    id: 121,
    question: "A semicritical item comes in contact with:",
    choices: [
      "Only skin",
      "Sterile body tissue",
      "Mucous membranes",
      "Room air"
    ],
    correctAnswer: 2
  },
  {
    id: 122,
    question: "An example of a noncritical item is:",
    choices: [
      "Bronchoscope",
      "Needle",
      "Blood pressure cuff",
      "Endoscope"
    ],
    correctAnswer: 2
  },
  {
    id: 123,
    question: "Which is considered a high-level disinfectant?",
    choices: [
      "Alcohol",
      "Formaldehyde",
      "Chlorine",
      "Iodophor"
    ],
    correctAnswer: 1
  },
  {
    id: 124,
    question: "What is the shelf life of glutaraldehyde (Cidex)?",
    choices: [
      "3–5 days",
      "7–10 days",
      "14–30 days",
      "60 days"
    ],
    correctAnswer: 2
  },
  {
    id: 125,
    question: "Formaldehyde is sporicidal when soaked for:",
    choices: [
      "5 minutes",
      "10 minutes",
      "12 minutes",
      "20 minutes"
    ],
    correctAnswer: 1
  },
  {
    id: 126,
    question: "Which disinfectant is irritating to mucous membranes and eyes?",
    choices: [
      "Chlorine",
      "Alcohol",
      "Formaldehyde",
      "Hydrogen peroxide"
    ],
    correctAnswer: 2
  },
  {
    id: 127,
    question: "Which disinfectant is also called household bleach?",
    choices: [
      "Alcohol",
      "Formaldehyde",
      "Sodium hypochlorite",
      "Iodophor"
    ],
    correctAnswer: 2
  },
  {
    id: 128,
    question: "A washer-sterilizer combines:",
    choices: [
      "Steam only",
      "Manual and mechanical decontamination",
      "Dry heat",
      "Alcohol"
    ],
    correctAnswer: 1
  },
  {
    id: 129,
    question: "An ultrasonic cleaner works by:",
    choices: [
      "Radiation",
      "Cavitation",
      "Steam",
      "Dry heat"
    ],
    correctAnswer: 1
  },
  {
    id: 130,
    question: "Which test checks for air removal in a prevacuum sterilizer?",
    choices: [
      "Biological indicator",
      "Bowie–Dick test",
      "Chemical indicator tape",
      "Visual inspection"
    ],
    correctAnswer: 1
  },
  {
    id: 131,
    question: "What color does chemical indicator tape turn when exposed to steam?",
    choices: [
      "Blue",
      "Green",
      "Tan with dark stripes",
      "Red"
    ],
    correctAnswer: 2
  },
  {
    id: 132,
    question: "Instruments with lumens must be flushed with:",
    choices: [
      "Alcohol",
      "Hydrogen peroxide then rinsed",
      "Detergent",
      "Air"
    ],
    correctAnswer: 1
  },
  {
    id: 133,
    question: "The biological indicator must be incubated for:",
    choices: [
      "12 hours",
      "24 hours",
      "48 hours",
      "72 hours"
    ],
    correctAnswer: 2
  },
  {
    id: 134,
    question: "ETO sterilization is preferred for:",
    choices: [
      "Heat-sensitive items",
      "Wood",
      "Glassware",
      "Linens"
    ],
    correctAnswer: 0
  },
  {
    id: 135,
    question: "The gas used in ETO sterilization is mixed with:",
    choices: [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    correctAnswer: 2
  },
  {
    id: 136,
    question: "The sterilant used in plasma sterilization is:",
    choices: [
      "Gamma rays",
      "Hydrogen peroxide",
      "ETO",
      "Steam"
    ],
    correctAnswer: 1
  },
  {
    id: 137,
    question: "Radiation sterilization uses:",
    choices: [
      "UV light",
      "Gamma and beta rays",
      "Microwave",
      "Dry heat"
    ],
    correctAnswer: 1
  },
  {
    id: 138,
    question: "Steam sterilization is effective because:",
    choices: [
      "Dry heat",
      "Cavitation",
      "Moist heat under pressure",
      "UV light"
    ],
    correctAnswer: 2
  },
  {
    id: 139,
    question: "No living thing can withstand steam at 270°F for:",
    choices: [
      "10 minutes",
      "15 minutes",
      "20 minutes",
      "30 minutes"
    ],
    correctAnswer: 1
  },
  {
    id: 140,
    question: "The recommended maximum size for a linen pack is:",
    choices: [
      "10 × 10 × 15",
      "12 × 12 × 20",
      "15 × 15 × 20",
      "20 × 20 × 20"
    ],
    correctAnswer: 1
  },
  {
    id: 141,
    question: "A Julian date indicates:",
    choices: [
      "Expiration date",
      "Date of sterilization",
      "Load number",
      "Room number"
    ],
    correctAnswer: 1
  },
  {
    id: 142,
    question: "Which microorganism is used as the biological indicator in dry heat?",
    choices: [
      "G. stearothermophilus",
      "B. atrophaeus",
      "MRSA",
      "E. coli"
    ],
    correctAnswer: 1
  },
  {
    id: 143,
    question: "The incubation period for a biological indicator is:",
    choices: [
      "12 hours",
      "24 hours",
      "48 hours",
      "72 hours"
    ],
    correctAnswer: 2
  },
  {
    id: 144,
    question: "The recommended thread count for woven fabrics is:",
    choices: [
      "100",
      "120",
      "140",
      "160"
    ],
    correctAnswer: 2
  },
  {
    id: 145,
    question: "Sterilization refers to:",
    choices: [
      "Destroying most microorganisms",
      "Destroying all microorganisms including spores",
      "Cleaning mechanically only",
      "Using antiseptics on skin"
    ],
    correctAnswer: 1
  },
  {
    id: 146,
    question: "Asepsis means:",
    choices: [
      "Free of bacteria but not viruses",
      "Absence of disease-causing microorganisms",
      "Chemically disinfected",
      "Using sterile gloves only"
    ],
    correctAnswer: 1
  },
  {
    id: 147,
    question: "Surgically clean means:",
    choices: [
      "Mechanically cleaned and sterile",
      "Mechanically and chemically disinfected but not sterile",
      "Free of all spores",
      "Only washed with water"
    ],
    correctAnswer: 1
  },
  {
    id: 148,
    question: "Strike-through contamination occurs when:",
    choices: [
      "A sterile field is covered completely",
      "Fluid soaks through drapes",
      "A sterilized package is opened",
      "The sterilizer fails"
    ],
    correctAnswer: 1
  },
  {
    id: 149,
    question: "Aeration is a process used to:",
    choices: [
      "Dry instruments",
      "Remove ethylene oxide gas",
      "Improve HEPA filter efficiency",
      "Remove dust from air"
    ],
    correctAnswer: 1
  },
  {
    id: 150,
    question: "Anaerobes are microorganisms that:",
    choices: [
      "Require oxygen to survive",
      "Cannot live without oxygen",
      "Survive without oxygen",
      "Only live on surfaces"
    ],
    correctAnswer: 2
  },
  {
    id: 151,
    question: "Binary fission refers to:",
    choices: [
      "Sexual reproduction of fungi",
      "Asexual reproduction of bacteria",
      "Viral replication",
      "Spore formation"
    ],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "Bactericidal agents:",
    choices: [
      "Prevent bacteria from growing",
      "Kill bacteria",
      "Kill viruses",
      "Kill fungi"  
    ],
    correctAnswer: 1
  },
  {
    id: 153,
    question: "Bacteriostatic agents:",
    choices: [
      "Kill bacteria",
      "Kill fungi",
      "Prevent bacterial growth",
      "Kill spores"
    ],
    correctAnswer: 2
  },
  {
    id: 154,
    question: "Bioburden is defined as:",
    choices: [
      "The weight of a package",
      "Number of microorganisms on an item before sterilization",
      "Number of spores in the air",
      "Indicator of humidity"
    ],
    correctAnswer: 1
  },
  {
    id: 155,
    question: "Which of the following is a chemical substance used in x-rays to make target structures stand out?",
    choices: [
      "Renografin",
      "Barium sulfate",
      "Penicillin",
      "Lidocaine"
    ],
    correctAnswer: 0
  },
  {
    id: 156,
    question: "Contrast media can be introduced into the body by all of the following routes EXCEPT:",
    choices: [
      "Intravenously",
      "Intra-arterially",
      "Intrathecally",
      "Oral ingestion"
    ],
    correctAnswer: 3
  },
  {
    id: 157,
    question: "What is the primary purpose of wearing a lead apron during fluoroscopy?",
    choices: [
      "To enhance image clarity",
      "To protect against radiation exposure",
      "To reduce heat damage",
      "To maintain sterility"
    ],
    correctAnswer: 1
  },
  {
    id: 158,
    question: "What is the minimum recommended lead apron thickness for protection?",
    choices: [
      "0.2 mm",
      "0.3 mm",
      "0.5 mm",
      "1.0 mm"
    ],
    correctAnswer: 2
  },
  {
    id: 159,
    question: "Which diagnostic tool is a mobile image intensifier used to take pictures during surgery?",
    choices: [
      "MRI",
      "C-arm",
      "CT scan",
      "PET scan"
    ],
    correctAnswer: 1
  },
  {
    id: 160,
    question: "Which diagnostic imaging technique does NOT use radiation?",
    choices: [
      "MRI",
      "CT scan",
      "X-ray",
      "PET scan"
    ],
    correctAnswer: 0
  },
  {
    id: 161,
    question: "What type of x-ray is used to diagnose breast tumors?",
    choices: [
      "Myelography",
      "Mammography",
      "Arthrography",
      "Ventriculography"
    ],
    correctAnswer: 1
  },
  {
    id: 162,
    question: "What is the purpose of myelography?",
    choices: [
      "To image the ventricles of the brain",
      "To evaluate blood vessels",
      "To image the spine using contrast media",
      "To examine the joints"
    ],
    correctAnswer: 2
  },
  {
    id: 163,
    question: "Which of the following is used to detect coronary artery obstruction?",
    choices: [
      "Electrocardiogram (ECG)",
      "Angiography",
      "Cardiac catheterization",
      "Plethysmography"
    ],
    correctAnswer: 2
  },
  {
    id: 164,
    question: "Which x-ray involves drinking barium to visualize the esophagus, stomach, and small intestines?",
    choices: [
      "Upper GI series",
      "Lower GI series",
      "IVP",
      "KUB"
    ],
    correctAnswer: 0
  },
  {
    id: 165,
    question: "What does IVP stand for?",
    choices: [
      "Intravenous perfusion",
      "Intravenous pyelogram",
      "Internal vascular picture",
      "Interventional pulmonary"
    ],
    correctAnswer: 1
  },
  {
    id: 166,
    question: "What imaging uses a radioactive \"tracer\" to assess how organs function?",
    choices: [
      "MRI",
      "PET scan",
      "Ultrasound",
      "CT scan"
    ],
    correctAnswer: 1
  },
  {
    id: 167,
    question: "Which imaging uses high-frequency sound waves and does NOT work on lungs?",
    choices: [
      "CT scan",
      "PET scan",
      "Ultrasound",
      "MRI"
    ],
    correctAnswer: 2
  },
  {
    id: 168,
    question: "What is the purpose of a radionuclide scan?",
    choices: [
      "To assess bones using sound waves",
      "To evaluate heart and organ function with radioactive chemicals",
      "To measure lung capacity",
      "To identify muscle disorders"
    ],
    correctAnswer: 1
  },
  {
    id: 169,
    question: "A biopsy in which a portion of tissue is removed and sent for immediate frozen diagnosis is called:",
    choices: [
      "Permanent biopsy",
      "Aspiration biopsy",
      "Frozen biopsy",
      "Brush biopsy"
    ],
    correctAnswer: 2
  },
  {
    id: 170,
    question: "Gram-positive bacteria retain which dye color?",
    choices: [
      "Red",
      "Pink",
      "Blue/violet",
      "Green"
    ],
    correctAnswer: 2
  },
  {
    id: 171,
    question: "What is the purpose of a spinal tap?",
    choices: [
      "To remove fluid from the pleural cavity",
      "To remove cerebrospinal fluid for diagnosis",
      "To evaluate the bladder",
      "To visualize blood vessels"
    ],
    correctAnswer: 1
  },
  {
    id: 172,
    question: "Which test measures the electrical activity of the brain?",
    choices: [
      "EMG",
      "EEG",
      "ECG",
      "Doppler"
    ],
    correctAnswer: 1
  },
  {
    id: 173,
    question: "Which consent is signed upon hospital admission for day-to-day treatment?",
    choices: [
      "Informed consent",
      "General consent",
      "Emergency consent",
      "Advanced directive"
    ],
    correctAnswer: 1
  },
  {
    id: 174,
    question: "What information is NOT typically included in informed consent?",
    choices: [
      "Risks involved",
      "Benefits",
      "Surgeon's name",
      "Patient's insurance policy"
    ],
    correctAnswer: 3
  },
  {
    id: 175,
    question: "Which of the following patients cannot sign their own informed consent?",
    choices: [
      "Mentally competent adult",
      "Minor child",
      "Unconscious adult",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 176,
    question: "Who is responsible for obtaining informed consent?",
    choices: [
      "Circulating nurse",
      "Surgeon",
      "Patient's family",
      "Hospital administrator"
    ],
    correctAnswer: 1
  },
  {
    id: 177,
    question: "When must informed consent be signed?",
    choices: [
      "After preoperative medication is given",
      "After surgery",
      "Before any preoperative medication",
      "During surgery"
    ],
    correctAnswer: 2
  },
  {
    id: 178,
    question: "If a patient refuses surgery, what must happen?",
    choices: [
      "They must leave the hospital immediately",
      "The surgeon and nurse must document the refusal and have the patient sign",
      "Surgery must proceed anyway",
      "A family member must sign instead"
    ],
    correctAnswer: 1
  },
  {
    id: 179,
    question: "What is an advanced directive?",
    choices: [
      "A legal document outlining medical care if the patient becomes incapacitated",
      "A consent form for minor procedures",
      "A verbal order for surgery",
      "A general admission form"
    ],
    correctAnswer: 0
  },
  {
    id: 180,
    question: "A living will typically specifies:",
    choices: [
      "Who can make decisions for the patient",
      "Which hospital the patient prefers",
      "Medical interventions the patient does NOT want",
      "Payment options for care"
    ],
    correctAnswer: 2
  },
  {
    id: 181,
    question: "What does DNR mean?",
    choices: [
      "Do Not Revise",
      "Do Not Record",
      "Do Not Resuscitate",
      "Do Not Refuse"
    ],
    correctAnswer: 2
  },
  {
    id: 182,
    question: "What is a power of attorney?",
    choices: [
      "A physician's right to override consent",
      "A document giving someone else authority to make medical decisions",
      "A type of biopsy",
      "A type of imaging study"
    ],
    correctAnswer: 1
  },
  {
    id: 183,
    question: "Which of the following is an example of an incident that should be reported?",
    choices: [
      "Patient signing informed consent",
      "Loss of an instrument during surgery",
      "Completion of an MRI",
      "Removal of a biopsy specimen"
    ],
    correctAnswer: 1
  },
  {
    id: 184,
    question: "Who verifies the patient's mental state and voluntary signature during consent?",
    choices: [
      "The surgeon",
      "A witness (nurse or facility employee)",
      "Hospital CEO",
      "Another patient"
    ],
    correctAnswer: 1
  },
  {
    id: 701,
    question: "What is the charge of an electron?",
    choices: [
      "Positive",
      "Neutral", 
      "Negative",
      "No charge"
    ],
    correctAnswer: 2
  },
  {
    id: 702,
    question: "What is the center of an atom called?",
    choices: [
      "Electron",
      "Neutron",
      "Proton",
      "Nucleus"
    ],
    correctAnswer: 3
  },
  {
    id: 703,
    question: "What is the term for an electron that is free to move to another atom?",
    choices: [
      "Bound electron",
      "Free electron",
      "Neutron",
      "Proton"
    ],
    correctAnswer: 1
  },
  {
    id: 704,
    question: "Which of the following measures the rate at which work is done?",
    choices: [
      "Speed",
      "Power",
      "Frequency",
      "Mass"
    ],
    correctAnswer: 1
  },
  {
    id: 705,
    question: "What is the unit of frequency?",
    choices: [
      "Watts",
      "Amps",
      "Hertz",
      "Volts"
    ],
    correctAnswer: 2
  },
  {
    id: 706,
    question: "The movement of electricity is called:",
    choices: [
      "Voltage",
      "Resistance",
      "Current",
      "Charge"
    ],
    correctAnswer: 2
  },
  {
    id: 707,
    question: "The pressure that pushes electricity is known as:",
    choices: [
      "Current",
      "Power",
      "Voltage",
      "Energy"
    ],
    correctAnswer: 2
  },
  {
    id: 708,
    question: "Which of Newton's laws is also called the law of inertia?",
    choices: [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    correctAnswer: 0
  },
  {
    id: 709,
    question: "According to Newton's third law, for every action there is:",
    choices: [
      "A reaction with half the strength",
      "An equal and opposite reaction",
      "No reaction",
      "A delayed reaction"
    ],
    correctAnswer: 1
  },
  {
    id: 710,
    question: "What type of current flows in only one direction?",
    choices: [
      "Alternating current",
      "Direct current",
      "Mixed current",
      "Circular current"
    ],
    correctAnswer: 1
  },
  {
    id: 711,
    question: "What is the typical hospital voltage?",
    choices: [
      "90V",
      "100V",
      "110V or 120V",
      "220V"
    ],
    correctAnswer: 2
  },
  {
    id: 712,
    question: "In bipolar electrocautery, the current passes between:",
    choices: [
      "Patient and ground pad",
      "Tips of forceps",
      "Active and neutral electrodes",
      "Generator and monitor"
    ],
    correctAnswer: 1
  },
  {
    id: 713,
    question: "The grounding pad is also called the:",
    choices: [
      "Active electrode",
      "Return electrode",
      "Generator",
      "Laser beam"
    ],
    correctAnswer: 1
  },
  {
    id: 714,
    question: "Which current is used to cut tissue?",
    choices: [
      "Coagulating",
      "Blended",
      "Cutting",
      "Direct"
    ],
    correctAnswer: 2
  },
  {
    id: 715,
    question: "What device uses ultrasonic motion to cut and coagulate tissue?",
    choices: [
      "Ligasure",
      "Harmonic scalpel",
      "Cryosurgery",
      "Laser"
    ],
    correctAnswer: 1
  },
  {
    id: 716,
    question: "What is the acronym LASER short for?",
    choices: [
      "Light Amplification by Stimulated Emission of Radiation",
      "Light And Sound Emission Radiation",
      "Laser Application for Surgical Energy Radiation",
      "None of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 717,
    question: "What type of laser emits a blue-green beam?",
    choices: [
      "CO₂",
      "Argon",
      "YAG",
      "Krypton"
    ],
    correctAnswer: 1
  },
  {
    id: 718,
    question: "Which laser is commonly used in Lasik surgery?",
    choices: [
      "YAG",
      "Excimer",
      "Argon",
      "CO₂"
    ],
    correctAnswer: 1
  },
  {
    id: 719,
    question: "Which laser emits a red-yellow beam?",
    choices: [
      "Argon",
      "Krypton",
      "YAG",
      "Excimer"
    ],
    correctAnswer: 1
  },
  {
    id: 720,
    question: "What is the purpose of moistened towels around a laser site?",
    choices: [
      "To cool the laser",
      "To insulate the patient",
      "To prevent beam reflection",
      "To increase conductivity"
    ],
    correctAnswer: 2
  },
  {
    id: 721,
    question: "What does RAM stand for in computers?",
    choices: [
      "Random access memory",
      "Read all memory",
      "Read after memory",
      "Random assigned memory"
    ],
    correctAnswer: 0
  },
  {
    id: 722,
    question: "What is the main storage unit of a computer called?",
    choices: [
      "RAM",
      "ROM",
      "Hard drive",
      "Modem"
    ],
    correctAnswer: 2
  },
  {
    id: 723,
    question: "What is the acronym ROM short for?",
    choices: [
      "Read once memory",
      "Read only memory",
      "Random only memory",
      "Read on monitor"
    ],
    correctAnswer: 1
  },
  {
    id: 724,
    question: "What computer component allows movement of the cursor?",
    choices: [
      "Keyboard",
      "Mouse",
      "Monitor",
      "Hard drive"
    ],
    correctAnswer: 1
  },
  {
    id: 725,
    question: "Which of the following is an example of a hazard in the OR?",
    choices: [
      "Physical injury",
      "Chemical exposure",
      "Biological contamination",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 726,
    question: "What type of OR light feature helps reduce eye fatigue?",
    choices: [
      "Bright white light",
      "Flickering light",
      "Nonglaring light",
      "Colored light"
    ],
    correctAnswer: 2
  },
  {
    id: 727,
    question: "Ergonomics in the OR involves:",
    choices: [
      "Proper body mechanics",
      "Electrical safety",
      "Computer programming",
      "Air circulation"
    ],
    correctAnswer: 0
  },
  {
    id: 728,
    question: "What is the recommended maximum weight of an instrument?",
    choices: [
      "10 lbs",
      "15 lbs",
      "25 lbs",
      "50 lbs"
    ],
    correctAnswer: 2
  },
  {
    id: 729,
    question: "What is the minimum distance from a fluoroscopy beam one should stand?",
    choices: [
      "2 feet",
      "4 feet",
      "6 feet",
      "8 feet"
    ],
    correctAnswer: 2
  },
  {
    id: 730,
    question: "What material is worn to protect against x-rays?",
    choices: [
      "Steel apron",
      "Lead apron",
      "Aluminum collar",
      "Plastic gown"
    ],
    correctAnswer: 1
  },
  {
    id: 731,
    question: "Which humidity range helps prevent static electricity sparks in the OR?",
    choices: [
      "10–30%",
      "20–60%",
      "40–80%",
      "50–90%"
    ],
    correctAnswer: 1
  },
  {
    id: 732,
    question: "Which of the following is NOT recommended for laser safety?",
    choices: [
      "Fire-resistant gown",
      "Eye protection",
      "Wearing metal jewelry",
      "Nonflammable drapes"
    ],
    correctAnswer: 2
  },
  {
    id: 733,
    question: "What is the recommended way to pass sharps safely?",
    choices: [
      "By hand",
      "Through a neutral zone",
      "On a tray",
      "With tongs"
    ],
    correctAnswer: 1
  },
  {
    id: 734,
    question: "When stuck with a needle, the first step is to:",
    choices: [
      "Wash the injury",
      "Report to supervisor",
      "Remove glove and assess injury",
      "Leave the room"
    ],
    correctAnswer: 0
  },
  {
    id: 735,
    question: "What is laser plume?",
    choices: [
      "A light beam",
      "A smoke byproduct",
      "A cooling device",
      "A laser type"
    ],
    correctAnswer: 1
  },
  {
    id: 736,
    question: "What medium is used in a YAG laser?",
    choices: [
      "Argon",
      "CO₂",
      "Holmium:Yttrium-Aluminum-Garnet",
      "Krypton"
    ],
    correctAnswer: 2
  },
  {
    id: 737,
    question: "Which laser is contraindicated for cancer tissue?",
    choices: [
      "CO₂",
      "YAG",
      "Argon",
      "Excimer"
    ],
    correctAnswer: 2
  },
  {
    id: 738,
    question: "Which medium does a krypton laser use?",
    choices: [
      "Argon gas",
      "Carbon dioxide",
      "Electrical current",
      "Mixture of gases"
    ],
    correctAnswer: 2
  },
  {
    id: 739,
    question: "Which device uses ultrasonic wave energy to seal and cut?",
    choices: [
      "Ligasure",
      "Cryosurgery",
      "Harmonic scalpel",
      "Morcellator"
    ],
    correctAnswer: 2
  },
  {
    id: 740,
    question: "What is the purpose of an active electrode?",
    choices: [
      "Directs current to target tissue",
      "Returns current to generator",
      "Produces electricity",
      "Insulates tissue"
    ],
    correctAnswer: 0
  },
  {
    id: 741,
    question: "What is a morcellator used for?",
    choices: [
      "Freezing tissue",
      "Sealing vessels",
      "Cutting and fragmenting tissue",
      "Coagulating tissue"
    ],
    correctAnswer: 2
  },
  {
    id: 742,
    question: "What is the correct definition of frequency?",
    choices: [
      "Rate of work done",
      "Cycles per unit time",
      "Force over area",
      "Energy per second"
    ],
    correctAnswer: 1
  },
  {
    id: 743,
    question: "Which computer term refers to programs?",
    choices: [
      "Hardware",
      "Software",
      "Memory",
      "RAM"
    ],
    correctAnswer: 1
  },
  {
    id: 744,
    question: "What is the unit of power?",
    choices: [
      "Watt",
      "Hertz",
      "Volt",
      "Amp"
    ],
    correctAnswer: 0
  },
  {
    id: 745,
    question: "Which of Newton's laws states that acceleration is proportional to force?",
    choices: [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    correctAnswer: 1
  },
  {
    id: 746,
    question: "Which type of current alternates direction?",
    choices: [
      "Direct",
      "Alternating",
      "Mixed",
      "Neutral"
    ],
    correctAnswer: 1
  },
  {
    id: 747,
    question: "What does the generator in electrosurgery do?",
    choices: [
      "Insulates the patient",
      "Produces high-frequency current",
      "Absorbs electricity",
      "Reflects the beam"
    ],
    correctAnswer: 1
  },
  // Moved from surgical procedures - foundational concepts
  {
    id: 500,
    question: "Which wrap material allows steam penetration?",
    choices: ["Plastic", "Aluminum foil", "Muslin", "Rubber"],
    correctAnswer: 2
  },
  {
    id: 501,
    question: "Double wrapping provides:",
    choices: ["Better steam penetration", "Extended shelf life", "Faster sterilization", "Lower cost"],
    correctAnswer: 1
  },
  {
    id: 502,
    question: "Which of the following compromises sterility?",
    choices: ["Moisture", "Tears in packaging", "Dropping on floor", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 503,
    question: "The purpose of instrument lubrication is to:",
    choices: ["Prevent corrosion", "Maintain function", "Extend life", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 504,
    question: "Instruments should be inspected for:",
    choices: ["Cleanliness", "Function", "Damage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 505,
    question: "Which instrument finish is most resistant to corrosion?",
    choices: ["Bright finish", "Satin finish", "Ebony finish", "Passivated finish"],
    correctAnswer: 3
  },
  {
    id: 506,
    question: "Stainless steel instruments are made primarily of:",
    choices: ["Iron and carbon", "Iron and chromium", "Aluminum and steel", "Titanium and steel"],
    correctAnswer: 1
  },
  {
    id: 507,
    question: "The minimum chromium content in surgical stainless steel is:",
    choices: ["8%", "12%", "16%", "20%"],
    correctAnswer: 1
  },
  {
    id: 508,
    question: "Titanium instruments are preferred for:",
    choices: ["General surgery", "Microsurgery", "Orthopedic surgery", "All surgeries"],
    correctAnswer: 1
  },
  {
    id: 509,
    question: "Which suture material is absorbable?",
    choices: ["Silk", "Nylon", "Vicryl", "Prolene"],
    correctAnswer: 2
  },
  {
    id: 510,
    question: "Catgut sutures are made from:",
    choices: ["Cat intestines", "Sheep intestines", "Synthetic materials", "Plant fibers"],
    correctAnswer: 1
  },
  {
    id: 511,
    question: "The strongest suture material is:",
    choices: ["Silk", "Steel", "Nylon", "Prolene"],
    correctAnswer: 1
  },
  {
    id: 512,
    question: "Monofilament sutures have:",
    choices: ["Multiple strands", "Single strand", "Braided construction", "Twisted fibers"],
    correctAnswer: 1
  },
  {
    id: 513,
    question: "Which suture causes the least tissue reaction?",
    choices: ["Silk", "Catgut", "Prolene", "Cotton"],
    correctAnswer: 2
  },
  {
    id: 514,
    question: "The USP suture size 2-0 is:",
    choices: ["Larger than 0", "Smaller than 0", "Same as 0", "Twice the size of 0"],
    correctAnswer: 1
  },
  {
    id: 515,
    question: "Which needle point is used for delicate tissues?",
    choices: ["Cutting", "Reverse cutting", "Taper", "Blunt"],
    correctAnswer: 2
  },
  {
    id: 516,
    question: "Cutting needles are used for:",
    choices: ["Soft tissues", "Tough tissues", "Vessels", "Nerves"],
    correctAnswer: 1
  },
  {
    id: 517,
    question: "The swaged needle is:",
    choices: ["Reusable", "Attached to suture", "Separate from suture", "Disposable only"],
    correctAnswer: 1
  },
  {
    id: 518,
    question: "Hemostats are used to:",
    choices: ["Cut tissue", "Grasp tissue", "Control bleeding", "Suture tissue"],
    correctAnswer: 2
  },
  {
    id: 519,
    question: "Kelly forceps have:",
    choices: ["Straight jaws", "Curved jaws", "Serrated jaws", "Smooth jaws"],
    correctAnswer: 1
  },
  {
    id: 520,
    question: "Mosquito forceps are:",
    choices: ["Large hemostats", "Small hemostats", "Tissue forceps", "Needle holders"],
    correctAnswer: 1
  },
  {
    id: 521,
    question: "Allis forceps are used to:",
    choices: ["Control bleeding", "Grasp delicate tissue", "Grasp tough tissue", "Hold needles"],
    correctAnswer: 2
  },
  {
    id: 522,
    question: "Babcock forceps are designed for:",
    choices: ["Tough tissue", "Delicate tissue", "Bone", "Metal"],
    correctAnswer: 1
  },
  {
    id: 523,
    question: "Russian forceps have:",
    choices: ["Smooth tips", "Serrated tips", "Teeth", "Hooks"],
    correctAnswer: 2
  }
];
