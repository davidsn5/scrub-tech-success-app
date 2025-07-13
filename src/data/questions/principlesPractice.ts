export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const principlesPracticeQuestions: Question[] = [
  // Chapter 5: Technological Science Concepts
  {
    id: 1,
    question: "What is the charge of an electron?",
    choices: ["Positive", "Neutral", "Negative", "No charge"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "What is the center of an atom called?",
    choices: ["Electron", "Neutron", "Proton", "Nucleus"],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "What is the term for an electron that is free to move to another atom?",
    choices: ["Bound electron", "Free electron", "Neutron", "Proton"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which of the following measures the rate at which work is done?",
    choices: ["Speed", "Power", "Frequency", "Mass"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is the unit of frequency?",
    choices: ["Watts", "Amps", "Hertz", "Volts"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "The movement of electricity is called:",
    choices: ["Voltage", "Resistance", "Current", "Charge"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "The pressure that pushes electricity is known as:",
    choices: ["Current", "Power", "Voltage", "Energy"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which of Newton's laws is also called the law of inertia?",
    choices: ["First", "Second", "Third", "Fourth"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "According to Newton's third law, for every action there is:",
    choices: ["A reaction with half the strength", "An equal and opposite reaction", "No reaction", "A delayed reaction"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What type of current flows in only one direction?",
    choices: ["Alternating current", "Direct current", "Mixed current", "Circular current"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "What is the typical hospital voltage?",
    choices: ["90V", "100V", "110V or 120V", "220V"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "What does RAM stand for in computers?",
    choices: ["Random access memory", "Read all memory", "Read after memory", "Random assigned memory"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "What is the main storage unit of a computer called?",
    choices: ["RAM", "ROM", "Hard drive", "Modem"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "What is the acronym ROM short for?",
    choices: ["Read once memory", "Read only memory", "Random only memory", "Read on monitor"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "What computer component allows movement of the cursor?",
    choices: ["Keyboard", "Mouse", "Monitor", "Hard drive"],
    correctAnswer: 1
  },

  // Chapter 6: Principles of Microbiology
  {
    id: 16,
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
    id: 17,
    question: "Which term refers to killing bacteria?",
    choices: ["Bacteriostatic", "Bactericidal", "Fungicide", "Virucide"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "A resistant form of bacteria that can survive harsh conditions is known as a:",
    choices: ["Pathogen", "Spore", "Fomite", "Vector"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "What is the term for microorganisms normally residing in or on the body?",
    choices: ["Indigenous microflora", "Transient microflora", "Pathogens", "Bioburden"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Which term describes an object that harbors microorganisms and can transfer them?",
    choices: ["Fomite", "Vector", "Pathogen", "Sepsis"],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "Microorganisms picked up from the environment and easily removed with washing are called:",
    choices: ["Resident flora", "Pathogens", "Transient microflora", "Indigenous microflora"],
    correctAnswer: 2
  },

  // Chapter 7: Surgical Asepsis and Sterility
  {
    id: 22,
    question: "What is the primary purpose of surgical asepsis?",
    choices: ["To reduce costs", "To prevent infection", "To speed up surgery", "To improve visibility"],
    correctAnswer: 1
  },
  {
    id: 23,
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
    id: 24,
    question: "The presence of pathogenic microorganisms on a sterile item is called:",
    choices: ["Contamination", "Decontamination", "Sterilization", "Package integrity"],
    correctAnswer: 0
  },
  {
    id: 25,
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
    id: 26,
    question: "Which process destroys all microorganisms, including spores?",
    choices: ["Disinfection", "Sterilization", "Antisepsis", "Decontamination"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "What is the classification for items that contact mucous membranes or non-intact skin?",
    choices: ["Critical", "Non-critical", "Semi-critical", "Sterile"],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "Which of the following destroys microorganisms on living tissue?",
    choices: ["Sterilant", "Antiseptic", "Disinfectant", "Sporicide"],
    correctAnswer: 1
  },
  {
    id: 29,
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
    id: 30,
    question: "Which level of disinfection kills most microbes, including M. tuberculosis, but not spores?",
    choices: ["High-level", "Intermediate-level", "Low-level", "Sterilization"],
    correctAnswer: 1
  },
  {
    id: 31,
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
    id: 32,
    question: "Which of the following is NOT a principle of sterile technique?",
    choices: ["Sterile items touch only sterile items", "Sterile persons touch only sterile items", "Non-sterile persons touch only non-sterile items", "All items can be touched by anyone"],
    correctAnswer: 3
  },
  {
    id: 33,
    question: "The sterile field is considered contaminated if:",
    choices: ["It becomes wet", "It falls below table level", "It is touched by non-sterile items", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 34,
    question: "What is the minimum temperature for steam sterilization?",
    choices: ["250°F", "270°F", "285°F", "300°F"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "How long should hands be scrubbed for the initial scrub?",
    choices: ["2-3 minutes", "3-5 minutes", "5-10 minutes", "10-15 minutes"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "The surgical conscience refers to:",
    choices: ["Legal responsibility", "Moral and ethical responsibility", "Financial responsibility", "Administrative responsibility"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "Which of the following is the most reliable method of sterilization?",
    choices: ["Chemical sterilization", "Gas sterilization", "Steam sterilization", "Radiation sterilization"],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "The area around a sterile field that is considered non-sterile is:",
    choices: ["1 inch", "2 inches", "3 inches", "4 inches"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "What does the term 'strike through' mean?",
    choices: ["Tearing of sterile drapes", "Moisture penetrating sterile barriers", "Dropping sterile items", "Breaking sterile technique"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "The most common cause of surgical site infections is:",
    choices: ["Airborne bacteria", "Contact transmission", "Endogenous flora", "Contaminated instruments"],
    correctAnswer: 2
  },

  // Chapter 8: Emergency Situations and All-Hazards Preparation
  {
    id: 41,
    question: "Which of the following is an example of a hazard in the OR?",
    choices: ["Physical injury", "Chemical exposure", "Biological contamination", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 42,
    question: "Which class fire extinguisher is for lasers and electrical fires?",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2
  },
  {
    id: 43,
    question: "What gas is used in Class B fire extinguishers?",
    choices: ["Halon", "Water", "CO₂", "Oxygen"],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "What is the correct order for PASS when using a fire extinguisher?",
    choices: ["Pull, Aim, Squeeze, Sweep", "Push, Aim, Spray, Sweep", "Pull, Align, Spray, Sweep", "Push, Align, Squeeze, Sweep"],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "RACE for fire response stands for:",
    choices: ["Run, Avoid, Call, Escape", "Rescue, Alert, Contain, Evacuate", "Rescue, Alert, Call, Evacuate", "Run, Alert, Contain, Exit"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "The Richter scale is used to measure:",
    choices: ["Hurricanes", "Earthquakes", "Floods", "Tornadoes"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "Heat stroke occurs due to:",
    choices: ["Too much water", "Body's failure to regulate temperature", "Viral infection", "Low humidity"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "Which biological agent is considered a bioterrorism risk?",
    choices: ["Lead", "Anthrax", "Asbestos", "Mercury"],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "Dirty bombs cause:",
    choices: ["Only radiation", "Only burns", "Radiation and physical injury", "Only chemical injury"],
    correctAnswer: 2
  },
  {
    id: 50,
    question: "Which is NOT a correct hot, warm, cold zone description?",
    choices: ["Hot — where the disaster occurred", "Warm — evaluation area", "Cold — safest zone", "Hot — safe zone"],
    correctAnswer: 3
  },
  {
    id: 51,
    question: "Triage black tag means:",
    choices: ["Minor injury", "Beyond healing", "Needs immediate help", "Walking wounded"],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "What is the surgical technologist's role in triage?",
    choices: ["Direct command center", "CPR and transport", "Triage doctor", "None"],
    correctAnswer: 0
  },

  // Chapter 9: Surgical Pharmacology and Anesthesia
  {
    id: 53,
    question: "What is PMMA used for?",
    choices: ["Sterilizing instruments", "Bone cement", "Sutures", "Cleaning floors"],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "PMMA can cause:",
    choices: ["Respiratory arrest", "Hypotension", "Seizures", "Tachycardia"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "Which chemical is used to preserve specimens?",
    choices: ["Glutaraldehyde", "Formaldehyde", "ETO", "PMMA"],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "Latex is made from:",
    choices: ["Petroleum", "Rubber (trees)", "Synthetic plastic", "Cotton"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "Who was the first surgeon to use latex gloves?",
    choices: ["Halstead", "Lister", "Pasteur", "Koch"],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "What is a symptom of latex allergy?",
    choices: ["Rash", "Hypertension", "Fever only", "Hearing loss"],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "When should a latex-allergic patient ideally be scheduled?",
    choices: ["First case of the day", "Last case of the day", "After lunch", "At night"],
    correctAnswer: 0
  },

  // Chapter 10: Instrumentation, Equipment, and Supplies
  {
    id: 60,
    question: "In bipolar electrocautery, the current passes between:",
    choices: ["Patient and ground pad", "Tips of forceps", "Active and neutral electrodes", "Generator and monitor"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "The grounding pad is also called the:",
    choices: ["Active electrode", "Return electrode", "Generator", "Laser beam"],
    correctAnswer: 1
  },
  {
    id: 62,
    question: "Which current is used to cut tissue?",
    choices: ["Coagulating", "Blended", "Cutting", "Direct"],
    correctAnswer: 2
  },
  {
    id: 63,
    question: "What device uses ultrasonic motion to cut and coagulate tissue?",
    choices: ["Ligasure", "Harmonic scalpel", "Cryosurgery", "Laser"],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "What is the acronym LASER short for?",
    choices: ["Light Amplification by Stimulated Emission of Radiation", "Light And Sound Emission Radiation", "Laser Application for Surgical Energy Radiation", "None of the above"],
    correctAnswer: 0
  },
  {
    id: 65,
    question: "What type of laser emits a blue-green beam?",
    choices: ["CO₂", "Argon", "YAG", "Krypton"],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "Which laser is commonly used in Lasik surgery?",
    choices: ["YAG", "Excimer", "Argon", "CO₂"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "Which laser emits a red-yellow beam?",
    choices: ["Argon", "Krypton", "YAG", "Excimer"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "What is the purpose of moistened towels around a laser site?",
    choices: ["To cool the laser", "To insulate the patient", "To prevent beam reflection", "To increase conductivity"],
    correctAnswer: 2
  },
  {
    id: 69,
    question: "What type of OR light feature helps reduce eye fatigue?",
    choices: ["Bright white light", "Flickering light", "Nonglaring light", "Colored light"],
    correctAnswer: 2
  },
  {
    id: 70,
    question: "Ergonomics in the OR involves:",
    choices: ["Proper body mechanics", "Electrical safety", "Computer programming", "Air circulation"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "What is the recommended maximum weight of an instrument?",
    choices: ["10 lbs", "15 lbs", "25 lbs", "50 lbs"],
    correctAnswer: 2
  },
  {
    id: 72,
    question: "What is the minimum distance from a fluoroscopy beam one should stand?",
    choices: ["2 feet", "4 feet", "6 feet", "8 feet"],
    correctAnswer: 2
  },
  {
    id: 73,
    question: "What material is worn to protect against x-rays?",
    choices: ["Steel apron", "Lead apron", "Aluminum collar", "Plastic gown"],
    correctAnswer: 1
  },
  {
    id: 74,
    question: "Which humidity range helps prevent static electricity sparks in the OR?",
    choices: ["10–30%", "20–60%", "40–80%", "50–90%"],
    correctAnswer: 2
  },
  {
    id: 75,
    question: "Which of the following is NOT recommended for laser safety?",
    choices: ["Fire-resistant gown", "Eye protection", "Wearing metal jewelry", "Nonflammable drapes"],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "What is the recommended way to pass sharps safely?",
    choices: ["By hand", "Through a neutral zone", "On a tray", "With tongs"],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "When stuck with a needle, the first step is to:",
    choices: ["Wash the injury", "Report to supervisor", "Remove glove and assess injury", "Leave the room"],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "What is laser plume?",
    choices: ["A light beam", "A smoke byproduct", "A cooling device", "A laser type"],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "What medium is used in a YAG laser?",
    choices: ["Argon", "CO₂", "Holmium:Yttrium-Aluminum-Garnet", "Krypton"],
    correctAnswer: 2
  },
  {
    id: 80,
    question: "Which laser is contraindicated for cancer tissue?",
    choices: ["CO₂", "YAG", "Argon", "Excimer"],
    correctAnswer: 1
  },

  // Chapter 11: Hemostasis, Wound Healing, and Wound Closure
  {
    id: 81,
    question: "SSI (surgical site infections) are often caused by:",
    choices: ["Poor lighting", "Patient allergies", "Breaks in sterile technique", "Excessive antibiotics"],
    correctAnswer: 2
  },
  {
    id: 82,
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
    id: 83,
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
    id: 84,
    question: "Surgically clean means:",
    choices: [
      "Mechanically cleaned and sterile",
      "Mechanically and chemically disinfected but not sterile",
      "Free of all spores",
      "Only washed with water"
    ],
    correctAnswer: 1
  }
];