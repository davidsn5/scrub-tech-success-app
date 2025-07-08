export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
}

export const principlesPracticeQuestions: Question[] = [
  {
    id: 1,
    question: "Which of the following microorganisms is classified as a prokaryote?",
    choices: ["Fungi", "Algae", "Bacteria", "Protozoa"],
    correctAnswer: 2,
    explanation: "Bacteria are prokaryotes because they lack a membrane-bound nucleus and organelles."
  },
  {
    id: 2,
    question: "The term 'asepsis' refers to:",
    choices: ["The destruction of all microbial life", "The presence of disease-causing organisms", "The absence of disease-causing organisms", "A method of sterilization"],
    correctAnswer: 2,
    explanation: "Asepsis specifically means the absence of disease-causing microorganisms, not all microorganisms."
  },
  {
    id: 3,
    question: "The powerhouse of the cell is the:",
    choices: ["Nucleus", "Ribosome", "Golgi apparatus", "Mitochondrion"],
    correctAnswer: 3,
    explanation: "Mitochondria are called the powerhouse because they produce ATP, the cell's main energy currency."
  },
  {
    id: 4,
    question: "Which structure provides motility to certain bacteria?",
    choices: ["Pili", "Flagella", "Capsule", "Cell wall"],
    correctAnswer: 1,
    explanation: "Flagella are whip-like structures that enable bacterial movement through liquid environments."
  },
  {
    id: 5,
    question: "True or False: Viruses are considered living organisms because they can reproduce independently.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Viruses cannot reproduce independently; they require a host cell to replicate."
  },
  {
    id: 6,
    question: "Which term describes a relationship where one organism benefits and the other is harmed?",
    choices: ["Mutualism", "Commensalism", "Parasitism", "Synergism"],
    correctAnswer: 2,
    explanation: "Parasitism is defined as a relationship where the parasite benefits while the host is harmed."
  },
  {
    id: 7,
    question: "Fill in the blank: _________ is the process by which microorganisms reproduce asexually by splitting into two identical cells.",
    choices: ["Binary fission", "Mitosis", "Meiosis", "Budding"],
    correctAnswer: 0,
    explanation: "Binary fission is the primary method of asexual reproduction in bacteria."
  },
  {
    id: 8,
    question: "Which of the following is NOT a portal of entry for microorganisms?",
    choices: ["Intact skin", "Respiratory tract", "Gastrointestinal tract", "Genitourinary tract"],
    correctAnswer: 0,
    explanation: "Intact skin serves as a barrier to prevent microbial entry, while broken skin can be a portal of entry."
  },
  {
    id: 9,
    question: "The bacterium Clostridium tetani causes disease by producing:",
    choices: ["Endotoxins", "Neurotoxins", "Spores", "Capsules"],
    correctAnswer: 1,
    explanation: "C. tetani produces neurotoxins that cause the muscle spasms characteristic of tetanus."
  },
  {
    id: 10,
    question: "Which microbial form is most resistant to destruction?",
    choices: ["Vegetative bacteria", "Fungi", "Spores", "Viruses"],
    correctAnswer: 2,
    explanation: "Bacterial spores are extremely resistant to heat, chemicals, and radiation."
  },
  {
    id: 11,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 12,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 13,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 14,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 15,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 16,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 17,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 18,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 19,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 20,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 21,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 22,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 23,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 24,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 25,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 26,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 27,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 28,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 29,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 30,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 31,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 32,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 33,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 34,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 35,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 36,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 37,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 38,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 39,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 40,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 41,
    question: "Which of the following protects patient health information privacy and security?",
    choices: ["SDS", "HIPAA", "LSO", "CPU"],
    correctAnswer: 1,
    explanation: "HIPAA (Health Insurance Portability and Accountability Act) protects patient health information privacy and security."
  },
  {
    id: 42,
    question: "The device that generates high-frequency electrical current for electrosurgery is called:",
    choices: ["Active electrode", "ESU", "Dispersive pad", "Ultrasonic device"],
    correctAnswer: 1,
    explanation: "ESU (Electrosurgical Unit) generates high-frequency electrical current used in electrosurgery."
  },
  {
    id: 43,
    question: "In monopolar electrosurgery, the current flows:",
    choices: ["Between the tips of forceps", "From active electrode through patient to dispersive pad", "Without returning to the generator", "Only in a closed metal circuit"],
    correctAnswer: 1,
    explanation: "In monopolar electrosurgery, current flows from the active electrode through the patient's body to the dispersive pad (grounding pad)."
  },
  {
    id: 44,
    question: "What material would most likely act as an insulator?",
    choices: ["Copper", "Aluminum", "Rubber", "Gold"],
    correctAnswer: 2,
    explanation: "Rubber is an insulator that resists the flow of electrical current, unlike metals which are conductors."
  },
  {
    id: 45,
    question: "Which of the following is a digital record shared across healthcare organizations?",
    choices: ["EHR", "EMR", "PHI", "SDS"],
    correctAnswer: 0,
    explanation: "EHR (Electronic Health Record) is designed to be shared across multiple healthcare organizations and providers."
  },
  {
    id: 46,
    question: "What is the role of the laser safety officer (LSO)?",
    choices: ["Perform surgery with lasers", "Ensure safety protocols for laser use are followed", "Repair laser equipment", "Approve new lasers for purchase"],
    correctAnswer: 1,
    explanation: "The Laser Safety Officer (LSO) is responsible for ensuring that all laser safety protocols and procedures are properly followed."
  },
  {
    id: 47,
    question: "The opposition to the flow of electrical current is called:",
    choices: ["Voltage", "Resistance", "Current", "Conduction"],
    correctAnswer: 1,
    explanation: "Resistance is the property that opposes the flow of electrical current through a material."
  },
  {
    id: 48,
    question: "Which document lists the specific supplies and instruments preferred by a surgeon?",
    choices: ["Preference card", "Safety Data Sheet", "HIPAA record", "Laser safety checklist"],
    correctAnswer: 0,
    explanation: "A preference card lists the specific supplies, instruments, and setup preferences for each surgeon and procedure."
  },
  {
    id: 49,
    question: "Ultrasonic technology in surgery uses:",
    choices: ["High-frequency electrical current", "High-frequency sound waves", "Radio waves", "Lasers"],
    correctAnswer: 1,
    explanation: "Ultrasonic surgical devices use high-frequency sound waves to cut and coagulate tissue."
  },
  {
    id: 50,
    question: "Which of the following describes a bipolar electrosurgical instrument?",
    choices: ["Current flows through the patient to a return pad", "Current flows between two tips of the instrument", "Requires a dispersive pad", "Uses ultrasonic energy"],
    correctAnswer: 1,
    explanation: "In bipolar electrosurgery, current flows between the two tips of the instrument, not through the patient to a return pad."
  },
  {
    id: 51,
    question: "What is the primary objective of emergency surgery?",
    choices: ["Reduce hospital costs", "Preserve life and prevent further deterioration", "Minimize staff workload", "Ensure family consent"],
    correctAnswer: 1,
    explanation: "The primary goal of emergency surgery is to preserve life and prevent further deterioration of the patient's condition."
  },
  {
    id: 52,
    question: "Which of the following is an indicator of an emergency situation?",
    choices: ["Normal skin color", "Stable vital signs", "Disorientation or confusion", "Patient is calm and oriented"],
    correctAnswer: 2,
    explanation: "Disorientation or confusion can indicate compromised perfusion and is a sign of an emergency situation."
  },
  {
    id: 53,
    question: "Cardiac dysrhythmia may indicate:",
    choices: ["Proper recovery", "Imminent cardiac arrest", "Normal cardiac activity", "Stable hemodynamics"],
    correctAnswer: 1,
    explanation: "Cardiac dysrhythmias can be warning signs of impending cardiac arrest and require immediate attention."
  },
  {
    id: 54,
    question: "What is the first priority in emergency care?",
    choices: ["Fracture immobilization", "Providing reassurance", "Ensuring airway and breathing", "Applying a sterile dressing"],
    correctAnswer: 2,
    explanation: "Airway and breathing are the first priorities in emergency care following the ABC approach."
  },
  {
    id: 55,
    question: "Which of the following should NOT delay CPR?",
    choices: ["Checking for a pulse for more than 30 seconds", "Gasping or agonal breathing", "Checking the medical record", "Waiting for physician orders"],
    correctAnswer: 1,
    explanation: "Gasping or agonal breathing in an unresponsive patient requires immediate CPR and should not delay treatment."
  },
  {
    id: 56,
    question: "CPR should begin within how many minutes to prevent brain cell damage?",
    choices: ["2–3 minutes", "4–6 minutes", "10–15 minutes", "20 minutes"],
    correctAnswer: 1,
    explanation: "CPR should begin within 4-6 minutes to prevent irreversible brain damage from lack of oxygen."
  },
  {
    id: 57,
    question: "Which guideline emphasizes airway, breathing, circulation, and definitive treatment?",
    choices: ["Chain of Survival", "Advanced Cardiovascular Life Support", "Trauma Protocol", "OSHA Safety Standard"],
    correctAnswer: 0,
    explanation: "The Chain of Survival emphasizes the critical steps: early recognition, early CPR, early defibrillation, and advanced care."
  },
  {
    id: 58,
    question: "What is the recommended depth of chest compressions for adults?",
    choices: ["1 inch (2.5 cm)", "2 inches (5 cm)", "3 inches (7.5 cm)", "As deep as possible"],
    correctAnswer: 1,
    explanation: "Adult chest compressions should be at least 2 inches (5 cm) deep but no more than 2.4 inches (6 cm)."
  },
  {
    id: 59,
    question: "What is the recommended compression rate during CPR?",
    choices: ["60–80 per minute", "80–100 per minute", "100–120 per minute", "120–150 per minute"],
    correctAnswer: 2,
    explanation: "The recommended compression rate is 100-120 compressions per minute for effective CPR."
  },
  {
    id: 60,
    question: "How many compressions to ventilations are recommended in two-person CPR?",
    choices: ["15:1", "15:2", "30:1", "30:2"],
    correctAnswer: 3,
    explanation: "The standard ratio for adult CPR is 30 compressions to 2 ventilations, regardless of one or two-person CPR."
  },
  {
    id: 61,
    question: "Which maneuver is used to open the airway when no spinal injury is suspected?",
    choices: ["Jaw thrust", "Head tilt–chin lift", "Heimlich maneuver", "Bag-valve mask"],
    correctAnswer: 1,
    explanation: "Head tilt-chin lift is the preferred method to open the airway when spinal injury is not suspected."
  },
  {
    id: 62,
    question: "Which airway is contraindicated in basilar skull fractures?",
    choices: ["Oral airway", "Nasopharyngeal airway", "Oropharyngeal airway", "Endotracheal tube"],
    correctAnswer: 1,
    explanation: "Nasopharyngeal airways are contraindicated in basilar skull fractures due to risk of brain penetration."
  },
  {
    id: 63,
    question: "What is a common cause of low survival in out-of-hospital cardiac arrest?",
    choices: ["High quality CPR", "Early defibrillation", "Bystander inaction", "ACLS training"],
    correctAnswer: 2,
    explanation: "Bystander inaction significantly reduces survival rates in out-of-hospital cardiac arrest situations."
  },
  {
    id: 64,
    question: "Which of the following is a warning sign of impending cardiac arrest?",
    choices: ["Stable blood pressure", "Respiratory changes", "Normal skin color", "Alert and oriented"],
    correctAnswer: 1,
    explanation: "Respiratory changes such as difficulty breathing or changes in rate can indicate impending cardiac arrest."
  },
  {
    id: 65,
    question: "What position is optimal for chest compressions?",
    choices: ["Sitting", "Standing", "Supine on firm surface", "Lying on soft mattress"],
    correctAnswer: 2,
    explanation: "The patient should be supine on a firm surface to allow for effective chest compressions."
  },
  {
    id: 66,
    question: "If you cannot ventilate through the mouth, you should attempt:",
    choices: ["No breaths", "Mouth-to-nose ventilation", "Continue compressions only", "Wait for physician"],
    correctAnswer: 1,
    explanation: "If mouth-to-mouth ventilation is not possible, mouth-to-nose ventilation should be attempted."
  },
  {
    id: 67,
    question: "During CPR, what should the rescuer avoid?",
    choices: ["Allowing full chest recoil", "Leaning on the chest between compressions", "Giving two breaths after 30 compressions", "Switching compressors every 2 minutes"],
    correctAnswer: 1,
    explanation: "Leaning on the chest between compressions prevents full chest recoil and reduces cardiac output."
  },
  {
    id: 68,
    question: "Before applying defibrillator pads, what must be done?",
    choices: ["Remove jewelry and clothing", "Wait 10 minutes", "Stop CPR", "Place on lower abdomen"],
    correctAnswer: 0,
    explanation: "Jewelry and clothing should be removed from the chest area before applying defibrillator pads for safety and effectiveness."
  },
  {
    id: 69,
    question: "Which of the following is NOT part of the Chain of Survival?",
    choices: ["Early recognition", "Early CPR", "Early defibrillation", "Immediate surgery"],
    correctAnswer: 3,
    explanation: "The Chain of Survival includes early recognition, early CPR, early defibrillation, and advanced life support - not immediate surgery."
  },
  {
    id: 70,
    question: "When providing ventilations, the HCP should:",
    choices: ["Deliver deep, rapid breaths", "Deliver regular breaths with visible chest rise", "Skip ventilations and only do compressions", "Hold the nose closed after first breath"],
    correctAnswer: 1,
    explanation: "Ventilations should be delivered at a regular rate with visible chest rise to ensure adequate oxygenation."
  },
  {
    id: 71,
    question: "Which guideline update emphasizes high-quality CPR and teamwork?",
    choices: ["2010 AHA Guidelines", "2020 AHA Guidelines", "OSHA CPR Manual", "Red Cross Trauma Guide"],
    correctAnswer: 1,
    explanation: "The 2020 AHA Guidelines emphasize high-quality CPR, teamwork, and coordinated resuscitation efforts."
  },
  {
    id: 72,
    question: "What should you check no longer than 10 seconds before starting CPR?",
    choices: ["Medical history", "Pulse", "Oxygen level", "Skin color"],
    correctAnswer: 1,
    explanation: "Pulse check should take no longer than 10 seconds before starting CPR to avoid delays in treatment."
  },
  {
    id: 73,
    question: "Which of the following are objectives of emergency care?",
    choices: ["Preserve life and restore lifestyle", "Reduce cost and avoid liability", "Document injury and report", "Wait for orders"],
    correctAnswer: 0,
    explanation: "The primary objectives of emergency care are to preserve life and help restore the patient's quality of life."
  },
  {
    id: 74,
    question: "Which is an appropriate priority after airway and breathing are ensured?",
    choices: ["Fracture immobilization", "Monitoring visitor access", "Scheduling surgery", "Contacting family"],
    correctAnswer: 0,
    explanation: "After securing airway and breathing, fracture immobilization becomes a priority to prevent further injury."
  },
  {
    id: 75,
    question: "Which of the following injuries requires immediate attention?",
    choices: ["Open bleeding wound not in chart", "Controlled nosebleed", "Bruise on arm", "Small abrasion"],
    correctAnswer: 0,
    explanation: "An open bleeding wound requires immediate attention to control bleeding and prevent complications."
  },
  {
    id: 76,
    question: "What is the advised rate of compressions per minute?",
    choices: ["50–70", "80–100", "100–120", "150"],
    correctAnswer: 2,
    explanation: "The recommended compression rate is 100-120 compressions per minute for effective CPR."
  },
  {
    id: 77,
    question: "When should chest compressors switch in two-person CPR?",
    choices: ["Every 1 minute", "Every 2 minutes", "After 10 minutes", "After 30 minutes"],
    correctAnswer: 1,
    explanation: "Compressors should switch every 2 minutes to prevent fatigue and maintain effective compressions."
  },
  {
    id: 78,
    question: "Which of the following is true about CPR?",
    choices: ["Ventilations are unnecessary", "Chest compressions only are as effective long-term", "Combining compressions and ventilations is better", "Defibrillation is unnecessary if CPR is started early"],
    correctAnswer: 2,
    explanation: "Combining compressions and ventilations provides the best outcomes for cardiac arrest patients."
  },
  {
    id: 79,
    question: "What is the appropriate response to agonal breathing in an unresponsive patient?",
    choices: ["Delay CPR", "Begin CPR immediately", "Wait for physician", "Provide oxygen only"],
    correctAnswer: 1,
    explanation: "Agonal breathing in an unresponsive patient indicates cardiac arrest and requires immediate CPR."
  },
  {
    id: 80,
    question: "Why is leaning on the chest between compressions bad practice?",
    choices: ["It allows recoil and perfusion", "It increases coronary perfusion", "It prevents chest recoil and perfusion", "It improves CPR quality"],
    correctAnswer: 2,
    explanation: "Leaning on the chest prevents proper chest recoil, which is necessary for venous return and cardiac filling."
  }
];
