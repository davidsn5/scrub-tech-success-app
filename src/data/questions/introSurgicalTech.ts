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
    id: 56,
    question: "Bradycardia refers to a heart rate of:",
    choices: [
      "Less than 60 bpm",
      "More than 100 bpm",
      "60–80 bpm",
      "120–140 bpm"
    ],
    correctAnswer: 0
  },
  {
    id: 57,
    question: "Which respiration pattern involves cessation of breathing?",
    choices: [
      "Tachypnea",
      "Apnea",
      "Bradypnea",
      "Cheyne-Stokes"
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
    id: 67,
    question: "What is the universal blood donor type?",
    choices: [
      "O positive",
      "O negative",
      "AB positive",
      "AB negative"
    ],
    correctAnswer: 1
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
    id: 87,
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
  }
];
