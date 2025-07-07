
export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number; // index of correct answer (0-based)
  explanation?: string;
}

export const principlesPracticeQuestions: Question[] = [
  {
    id: 1,
    question: "Which of the following microorganisms is classified as a prokaryote?",
    choices: [
      "Fungi",
      "Algae",
      "Bacteria",
      "Protozoa"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "The powerhouse of the cell is the:",
    choices: [
      "Nucleus",
      "Ribosome",
      "Golgi apparatus",
      "Mitochondrion"
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "Which structure provides motility to certain bacteria?",
    choices: [
      "Pili",
      "Flagella",
      "Capsule",
      "Cell wall"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "True or False: Viruses are considered living organisms because they can reproduce independently.",
    choices: [
      "True",
      "False"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Which term describes a relationship where one organism benefits and the other is harmed?",
    choices: [
      "Mutualism",
      "Commensalism",
      "Parasitism",
      "Synergism"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "_________ is the process by which microorganisms reproduce asexually by splitting into two identical cells.",
    choices: [
      "Binary fission",
      "Mitosis",
      "Meiosis",
      "Budding"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Which of the following is NOT a portal of entry for microorganisms?",
    choices: [
      "Intact skin",
      "Respiratory tract",
      "Gastrointestinal tract",
      "Genitourinary tract"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "The bacterium Clostridium tetani causes disease by producing:",
    choices: [
      "Endotoxins",
      "Neurotoxins",
      "Spores",
      "Capsules"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Which microbial form is most resistant to destruction?",
    choices: [
      "Vegetative bacteria",
      "Fungi",
      "Spores",
      "Viruses"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: [
      "Opportunistic infection",
      "Nosocomial infection",
      "Community-acquired infection",
      "Latent infection"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "The semipermeable membrane within cells is called the:",
    choices: [
      "Cell wall",
      "Cytoplasmic membrane",
      "Nuclear envelope",
      "Endoplasmic reticulum"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Clostridium perfringens is known to cause:",
    choices: [
      "Tetanus",
      "Tuberculosis",
      "Gas gangrene",
      "Food poisoning"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: [
      "Artificial active",
      "Natural active",
      "Artificial passive",
      "Natural passive"
    ],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: [
      "Bactericide",
      "Fungicide",
      "Bacteriostatic",
      "Virucide"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: [
      "Prion",
      "Viroid",
      "Virus",
      "Bacteriophage"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: [
      "Mycobacterium tuberculosis",
      "Clostridium difficile",
      "Staphylococcus aureus",
      "Treponema pallidum"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: [
      "Bacillus subtilis",
      "Mycobacterium tuberculosis",
      "Geobacillus stearothermophilus",
      "Staphylococcus aureus"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "_________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: [
      "Bacteria",
      "Protozoa",
      "Fungi",
      "Algae"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: [
      "True",
      "False"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which type of immunity develops after vaccination?",
    choices: [
      "Natural active immunity",
      "Natural passive immunity",
      "Artificial active immunity",
      "Artificial passive immunity"
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "What is the primary function of white blood cells?",
    choices: [
      "Oxygen transport",
      "Blood clotting",
      "Immune defense",
      "Nutrient transport"
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "Which part of the bacterial cell contains genetic material?",
    choices: [
      "Ribosomes",
      "Nucleoid",
      "Cell wall",
      "Flagella"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "What is the most common cause of healthcare-associated infections?",
    choices: [
      "Contaminated equipment",
      "Poor hand hygiene",
      "Inadequate sterilization",
      "Infected healthcare workers"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "Which microorganism is responsible for causing anthrax?",
    choices: [
      "Bacillus anthracis",
      "Clostridium botulinum",
      "Streptococcus pyogenes",
      "Neisseria meningitidis"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "What is the best method to prevent the spread of airborne infections?",
    choices: [
      "Hand washing",
      "Surface disinfection",
      "Negative pressure rooms",
      "Sterile technique"
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "Which of the following is a characteristic of fungi?",
    choices: [
      "Prokaryotic cells",
      "Photosynthetic",
      "Eukaryotic cells",
      "Binary fission reproduction"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "What does the term 'pathogenic' mean?",
    choices: [
      "Disease-causing",
      "Beneficial to health",
      "Non-living",
      "Easily destroyed"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "Which temperature range is considered the 'danger zone' for bacterial growth?",
    choices: [
      "0-32°F (-18-0°C)",
      "40-140°F (4-60°C)",
      "150-200°F (66-93°C)",
      "Above 212°F (100°C)"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "What is the primary mode of transmission for hepatitis B?",
    choices: [
      "Airborne droplets",
      "Contaminated food",
      "Blood and body fluids",
      "Direct skin contact"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Which structure protects bacteria from adverse environmental conditions?",
    choices: [
      "Flagella",
      "Pili",
      "Capsule",
      "Ribosome"
    ],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "What is the most effective way to break the chain of infection?",
    choices: [
      "Isolate all patients",
      "Use antibiotics prophylactically",
      "Practice proper hand hygiene",
      "Wear protective equipment"
    ],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "Which type of precautions should be used for a patient with tuberculosis?",
    choices: [
      "Standard precautions only",
      "Contact precautions",
      "Droplet precautions",
      "Airborne precautions"
    ],
    correctAnswer: 3
  },
  {
    id: 33,
    question: "What is the definition of a healthcare-associated infection (HAI)?",
    choices: [
      "Any infection present at admission",
      "An infection acquired during healthcare delivery",
      "An infection that develops after discharge",
      "A community-acquired infection"
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Which microorganism is most commonly associated with urinary tract infections?",
    choices: [
      "Staphylococcus aureus",
      "Streptococcus pyogenes",
      "Escherichia coli",
      "Pseudomonas aeruginosa"
    ],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "What is the primary purpose of surgical hand antisepsis?",
    choices: [
      "Remove all microorganisms",
      "Reduce transient and resident flora",
      "Sterilize the hands",
      "Prevent skin irritation"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which of the following is NOT a component of the inflammatory response?",
    choices: [
      "Redness",
      "Swelling",
      "Heat",
      "Paralysis"
    ],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "What is the primary reservoir for Clostridium difficile?",
    choices: [
      "Hospital equipment",
      "Healthcare workers' hands",
      "Patient's intestinal tract",
      "Contaminated surfaces"
    ],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "Which method is most effective for destroying prions?",
    choices: [
      "Standard autoclaving",
      "Chemical disinfection",
      "Extended high-temperature sterilization",
      "Ultraviolet radiation"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "What is the minimum contact time for most chemical disinfectants?",
    choices: [
      "30 seconds",
      "1 minute",
      "5 minutes",
      "10 minutes"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Which personal protective equipment (PPE) should be removed first?",
    choices: [
      "Mask",
      "Gloves",
      "Gown",
      "Eye protection"
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "What is the most common mode of transmission for MRSA?",
    choices: [
      "Airborne transmission",
      "Direct contact",
      "Vector-borne",
      "Foodborne"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "Which solution is commonly used for surgical site preparation?",
    choices: [
      "Isopropyl alcohol",
      "Hydrogen peroxide",
      "Chlorhexidine gluconate",
      "Sodium hypochlorite"
    ],
    correctAnswer: 2
  },
  {
    id: 43,
    question: "What is the primary function of complement proteins?",
    choices: [
      "Oxygen transport",
      "Blood clotting",
      "Immune system enhancement",
      "Protein synthesis"
    ],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "Which microorganism is the leading cause of pneumonia in hospitalized patients?",
    choices: [
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Klebsiella pneumoniae",
      "Haemophilus influenzae"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "What is the recommended frequency for changing surgical masks?",
    choices: [
      "Every 2 hours",
      "Between each patient",
      "When visibly soiled or wet",
      "Once per shift"
    ],
    correctAnswer: 2
  },
  {
    id: 46,
    question: "Which type of isolation is required for patients with vancomycin-resistant enterococci (VRE)?",
    choices: [
      "Airborne isolation",
      "Droplet isolation",
      "Contact isolation",
      "Protective isolation"
    ],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "What is the primary mechanism of action for antibiotics?",
    choices: [
      "Stimulate immune response",
      "Inhibit or kill microorganisms",
      "Reduce inflammation",
      "Promote wound healing"
    ],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "Which factor is most important in determining the virulence of a pathogen?",
    choices: [
      "Size of the organism",
      "Ability to cause disease",
      "Rate of reproduction",
      "Environmental resistance"
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "What is the primary source of endogenous infections?",
    choices: [
      "Contaminated equipment",
      "Healthcare workers",
      "Patient's own flora",
      "Contaminated environment"
    ],
    correctAnswer: 2
  },
  {
    id: 50,
    question: "Which microorganism is most resistant to chemical disinfectants?",
    choices: [
      "Vegetative bacteria",
      "Enveloped viruses",
      "Bacterial spores",
      "Fungi"
    ],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "What is the recommended action if a sterile package is dropped on the floor?",
    choices: [
      "Use it if the package is intact",
      "Wipe the package with disinfectant",
      "Consider it contaminated",
      "Inspect for visible damage only"
    ],
    correctAnswer: 2
  },
  {
    id: 52,
    question: "Which body system is the first line of defense against infection?",
    choices: [
      "Immune system",
      "Integumentary system",
      "Respiratory system",
      "Circulatory system"
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "What is the primary concern with biofilm formation on medical devices?",
    choices: [
      "Device malfunction",
      "Increased antibiotic resistance",
      "Allergic reactions",
      "Device corrosion"
    ],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "Which microorganism is commonly associated with catheter-related bloodstream infections?",
    choices: [
      "Escherichia coli",
      "Staphylococcus epidermidis",
      "Streptococcus pneumoniae",
      "Enterococcus faecalis"
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "What is the most effective method for preventing surgical site infections?",
    choices: [
      "Prophylactic antibiotics",
      "Proper surgical technique",
      "Environmental controls",
      "Patient isolation"
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "Which type of immunity provides immediate but temporary protection?",
    choices: [
      "Active immunity",
      "Passive immunity",
      "Innate immunity",
      "Adaptive immunity"
    ],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "What is the primary mode of transmission for Clostridioides difficile?",
    choices: [
      "Airborne droplets",
      "Direct contact",
      "Fecal-oral route",
      "Vector transmission"
    ],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "Which concentration of alcohol is most effective for hand sanitization?",
    choices: [
      "50-60%",
      "60-70%",
      "70-80%",
      "90-100%"
    ],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "What is the primary function of lysozyme in tears and saliva?",
    choices: [
      "Lubrication",
      "Antimicrobial action",
      "pH regulation",
      "Nutrient transport"
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "Which microorganism is the most common cause of food poisoning?",
    choices: [
      "Salmonella species",
      "Escherichia coli",
      "Staphylococcus aureus",
      "Clostridium perfringens"
    ],
    correctAnswer: 0
  },
  {
    id: 61,
    question: "What is the recommended duration for surgical hand scrubbing?",
    choices: [
      "1-2 minutes",
      "2-3 minutes",
      "3-5 minutes",
      "5-10 minutes"
    ],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "Which factor is most critical in the development of healthcare-associated infections?",
    choices: [
      "Patient age",
      "Length of hospitalization",
      "Invasive procedures",
      "Underlying disease"
    ],
    correctAnswer: 2
  },
  {
    id: 63,
    question: "What is the primary reservoir for methicillin-resistant Staphylococcus aureus (MRSA)?",
    choices: [
      "Contaminated surfaces",
      "Medical equipment",
      "Colonized patients",
      "Healthcare workers"
    ],
    correctAnswer: 2
  },
  {
    id: 64,
    question: "Which sterilization method is most appropriate for heat-sensitive items?",
    choices: [
      "Steam sterilization",
      "Dry heat sterilization",
      "Ethylene oxide sterilization",
      "Radiation sterilization"
    ],
    correctAnswer: 2
  },
  {
    id: 65,
    question: "What is the primary purpose of surveillance in infection control?",
    choices: [
      "Patient treatment",
      "Staff education",
      "Data collection and analysis",
      "Policy development"
    ],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "Which microorganism is commonly associated with ventilator-associated pneumonia?",
    choices: [
      "Streptococcus pneumoniae",
      "Pseudomonas aeruginosa",
      "Haemophilus influenzae",
      "Mycoplasma pneumoniae"
    ],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "What is the most common complication of central venous catheter insertion?",
    choices: [
      "Infection",
      "Pneumothorax",
      "Bleeding",
      "Thrombosis"
    ],
    correctAnswer: 0
  },
  {
    id: 68,
    question: "Which antimicrobial agent is most effective against Clostridioides difficile spores?",
    choices: [
      "Alcohol-based hand sanitizer",
      "Chlorhexidine",
      "Soap and water",
      "Quaternary ammonium compounds"
    ],
    correctAnswer: 2
  },
  {
    id: 69,
    question: "What is the primary mechanism of antibiotic resistance?",
    choices: [
      "Decreased drug absorption",
      "Increased drug metabolism",
      "Target site modification",
      "Enhanced drug excretion"
    ],
    correctAnswer: 2
  },
  {
    id: 70,
    question: "Which factor is most important in preventing the transmission of bloodborne pathogens?",
    choices: [
      "Patient screening",
      "Environmental cleaning",
      "Standard precautions",
      "Isolation procedures"
    ],
    correctAnswer: 2
  },
  {
    id: 71,
    question: "What is the primary mode of action for quaternary ammonium compounds?",
    choices: [
      "Protein denaturation",
      "Cell membrane disruption",
      "DNA damage",
      "Enzyme inhibition"
    ],
    correctAnswer: 1
  },
  {
    id: 72,
    question: "Which microorganism is the leading cause of healthcare-associated urinary tract infections?",
    choices: [
      "Escherichia coli",
      "Enterococcus species",
      "Candida albicans",
      "Pseudomonas aeruginosa"
    ],
    correctAnswer: 0
  },
  {
    id: 73,
    question: "What is the recommended approach for managing a patient with multidrug-resistant organisms?",
    choices: [
      "Isolation only",
      "Antibiotic therapy only",
      "Contact precautions and appropriate therapy",
      "Environmental decontamination only"
    ],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "Which body fluid has the highest concentration of hepatitis B virus?",
    choices: [
      "Saliva",
      "Urine",
      "Blood",
      "Cerebrospinal fluid"
    ],
    correctAnswer: 2
  },
  {
    id: 75,
    question: "What is the primary purpose of double-gloving in surgery?",
    choices: [
      "Improved dexterity",
      "Better grip",
      "Additional protection",
      "Cost savings"
    ],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "Which microorganism is most commonly associated with prosthetic joint infections?",
    choices: [
      "Escherichia coli",
      "Staphylococcus epidermidis",
      "Streptococcus pyogenes",
      "Pseudomonas aeruginosa"
    ],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "What is the most effective method for preventing catheter-associated urinary tract infections?",
    choices: [
      "Prophylactic antibiotics",
      "Daily catheter changes",
      "Early catheter removal",
      "Bladder irrigation"
    ],
    correctAnswer: 2
  },
  {
    id: 78,
    question: "Which disinfectant is most effective against nonenveloped viruses?",
    choices: [
      "Alcohol",
      "Quaternary ammonium compounds",
      "Sodium hypochlorite",
      "Phenolic compounds"
    ],
    correctAnswer: 2
  },
  {
    id: 79,
    question: "What is the primary risk factor for developing a surgical site infection?",
    choices: [
      "Patient age",
      "Duration of surgery",
      "Wound classification",
      "Surgeon experience"
    ],
    correctAnswer: 2
  },
  {
    id: 80,
    question: "Which antimicrobial property is most important for surgical hand preparation?",
    choices: [
      "Rapid action",
      "Broad spectrum",
      "Persistent activity",
      "Low toxicity"
    ],
    correctAnswer: 2
  },
  {
    id: 81,
    question: "What is the primary mechanism of transmission for respiratory syncytial virus (RSV)?",
    choices: [
      "Airborne transmission",
      "Large droplet transmission",
      "Direct contact",
      "Vector transmission"
    ],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "Which microorganism is most commonly associated with neonatal meningitis?",
    choices: [
      "Escherichia coli",
      "Streptococcus pneumoniae",
      "Neisseria meningitidis",
      "Haemophilus influenzae"
    ],
    correctAnswer: 0
  },
  {
    id: 83,
    question: "What is the recommended frequency for changing IV tubing?",
    choices: [
      "Every 24 hours",
      "Every 48 hours",
      "Every 72 hours",
      "Every 96 hours"
    ],
    correctAnswer: 2
  },
  {
    id: 84,
    question: "Which factor is most important in the selection of an appropriate disinfectant?",
    choices: [
      "Cost",
      "Availability",
      "Spectrum of activity",
      "Ease of use"
    ],
    correctAnswer: 2
  },
  {
    id: 85,
    question: "What is the primary benefit of using alcohol-based hand rubs over soap and water?",
    choices: [
      "Lower cost",
      "Better availability",
      "Superior antimicrobial efficacy",
      "Reduced skin irritation"
    ],
    correctAnswer: 2
  },
  {
    id: 86,
    question: "Which microorganism is the most common cause of bloodstream infections in immunocompromised patients?",
    choices: [
      "Staphylococcus aureus",
      "Candida species",
      "Escherichia coli",
      "Pseudomonas aeruginosa"
    ],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "What is the primary mode of transmission for hepatitis C virus?",
    choices: [
      "Respiratory droplets",
      "Fecal-oral route",
      "Blood and body fluids",
      "Direct skin contact"
    ],
    correctAnswer: 2
  },
  {
    id: 88,
    question: "Which sterilization indicator is most reliable for verifying sterility?",
    choices: [
      "Chemical indicator",
      "Biological indicator",
      "Physical indicator",
      "Mechanical indicator"
    ],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "What is the primary purpose of antimicrobial prophylaxis in surgery?",
    choices: [
      "Treat existing infections",
      "Prevent surgical site infections",
      "Reduce antibiotic resistance",
      "Improve wound healing"
    ],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "Which microorganism is most commonly associated with device-related infections?",
    choices: [
      "Staphylococcus epidermidis",
      "Escherichia coli",
      "Streptococcus pyogenes",
      "Bacillus subtilis"
    ],
    correctAnswer: 0
  },
  {
    id: 91,
    question: "What is the recommended action when a breach in sterile technique is observed?",
    choices: [
      "Continue the procedure",
      "Document the incident",
      "Correct the breach immediately",
      "Report to administration"
    ],
    correctAnswer: 2
  },
  {
    id: 92,
    question: "Which antimicrobial agent is most effective against tubercle bacilli?",
    choices: [
      "Alcohol",
      "Glutaraldehyde",
      "Hydrogen peroxide",
      "Quaternary ammonium"
    ],
    correctAnswer: 1
  },
  {
    id: 93,
    question: "What is the primary risk associated with reprocessing single-use medical devices?",
    choices: [
      "Equipment malfunction",
      "Infection transmission",
      "Regulatory violations",
      "Increased costs"
    ],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "Which microorganism is most resistant to standard disinfection procedures?",
    choices: [
      "Mycobacterium tuberculosis",
      "Hepatitis B virus",
      "Prions",
      "Candida albicans"
    ],
    correctAnswer: 2
  },
  {
    id: 95,
    question: "What is the primary mechanism of action for hydrogen peroxide as a disinfectant?",
    choices: [
      "Protein coagulation",
      "Oxidation of cellular components",
      "Membrane disruption",
      "Enzyme inhibition"
    ],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "Which factor is most important in determining the effectiveness of a disinfectant?",
    choices: [
      "Temperature",
      "Contact time",
      "Concentration",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 97,
    question: "What is the primary concern with extended-spectrum beta-lactamase (ESBL) producing organisms?",
    choices: [
      "Increased virulence",
      "Antibiotic resistance",
      "Environmental persistence",
      "Rapid transmission"
    ],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "Which microorganism is most commonly associated with burn wound infections?",
    choices: [
      "Staphylococcus aureus",
      "Pseudomonas aeruginosa",
      "Streptococcus pyogenes",
      "Enterococcus faecalis"
    ],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "What is the recommended approach for managing occupational exposure to bloodborne pathogens?",
    choices: [
      "Wait and observe",
      "Immediate evaluation and treatment",
      "Prophylactic antibiotics only",
      "Isolation of the exposed individual"
    ],
    correctAnswer: 1
  },
  {
    id: 100,
    question: "Which antimicrobial agent is most appropriate for high-level disinfection of endoscopes?",
    choices: [
      "Isopropyl alcohol",
      "Glutaraldehyde",
      "Sodium hypochlorite",
      "Quaternary ammonium"
    ],
    correctAnswer: 1
  }
];
