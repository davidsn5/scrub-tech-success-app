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
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 42,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 43,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 44,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 45,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 46,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 47,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 48,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 49,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 50,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 51,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 52,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 53,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 54,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 55,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 56,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 57,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 58,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 59,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 60,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 61,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 62,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 63,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 64,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 65,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 66,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 67,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 68,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 69,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 70,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 71,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 72,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 73,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 74,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 75,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 76,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 77,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 78,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 79,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 80,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 81,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 82,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 83,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 84,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 85,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 86,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 87,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 88,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 89,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 90,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 91,
    question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
    choices: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
    correctAnswer: 1,
    explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
  },
  {
    id: 92,
    question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
    choices: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
    correctAnswer: 2,
    explanation: "S. aureus is one of the most common causes of surgical site infections."
  },
  {
    id: 93,
    question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
    choices: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
  },
  {
    id: 94,
    question: "Which immunity is passed from mother to fetus through the placenta?",
    choices: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
    correctAnswer: 3,
    explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
  },
  {
    id: 95,
    question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
    choices: ["Bacteria", "Protozoa", "Fungi", "Algae"],
    correctAnswer: 1,
    explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
  },
  {
    id: 96,
    question: "Which term describes an agent that inhibits bacterial growth without killing them?",
    choices: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
    correctAnswer: 2,
    explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
  },
  {
    id: 97,
    question: "The semipermeable membrane within cells is called the:",
    choices: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
    correctAnswer: 1,
    explanation: "The cytoplasmic membrane controls what enters and exits the cell."
  },
  {
    id: 98,
    question: "Clostridium perfringens is known to cause:",
    choices: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
    correctAnswer: 2,
    explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
  },
  {
    id: 99,
    question: "Which of the following is used to test the effectiveness of steam sterilization?",
    choices: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
    correctAnswer: 2,
    explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
  },
  {
    id: 100,
    question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
    choices: ["Prion", "Viroid", "Virus", "Bacteriophage"],
    correctAnswer: 0,
    explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
  },
  {
    id: 101,
    question: "Which of the following protects patient health information privacy and security?",
    choices: ["SDS", "HIPAA", "LSO", "CPU"],
    correctAnswer: 1,
    explanation: "HIPAA (Health Insurance Portability and Accountability Act) protects patient health information privacy and security."
  },
  {
    id: 102,
    question: "The device that generates high-frequency electrical current for electrosurgery is called:",
    choices: ["Active electrode", "ESU", "Dispersive pad", "Ultrasonic device"],
    correctAnswer: 1,
    explanation: "ESU (Electrosurgical Unit) generates high-frequency electrical current used in electrosurgery."
  },
  {
    id: 103,
    question: "In monopolar electrosurgery, the current flows:",
    choices: ["Between the tips of forceps", "From active electrode through patient to dispersive pad", "Without returning to the generator", "Only in a closed metal circuit"],
    correctAnswer: 1,
    explanation: "In monopolar electrosurgery, current flows from the active electrode through the patient's body to the dispersive pad (grounding pad)."
  },
  {
    id: 104,
    question: "What material would most likely act as an insulator?",
    choices: ["Copper", "Aluminum", "Rubber", "Gold"],
    correctAnswer: 2,
    explanation: "Rubber is an insulator that resists the flow of electrical current, unlike metals which are conductors."
  },
  {
    id: 105,
    question: "Which of the following is a digital record shared across healthcare organizations?",
    choices: ["EHR", "EMR", "PHI", "SDS"],
    correctAnswer: 0,
    explanation: "EHR (Electronic Health Record) is designed to be shared across multiple healthcare organizations and providers."
  },
  {
    id: 106,
    question: "What is the role of the laser safety officer (LSO)?",
    choices: ["Perform surgery with lasers", "Ensure safety protocols for laser use are followed", "Repair laser equipment", "Approve new lasers for purchase"],
    correctAnswer: 1,
    explanation: "The Laser Safety Officer (LSO) is responsible for ensuring that all laser safety protocols and procedures are properly followed."
  },
  {
    id: 107,
    question: "The opposition to the flow of electrical current is called:",
    choices: ["Voltage", "Resistance", "Current", "Conduction"],
    correctAnswer: 1,
    explanation: "Resistance is the property that opposes the flow of electrical current through a material."
  },
  {
    id: 108,
    question: "Which document lists the specific supplies and instruments preferred by a surgeon?",
    choices: ["Preference card", "Safety Data Sheet", "HIPAA record", "Laser safety checklist"],
    correctAnswer: 0,
    explanation: "A preference card lists the specific supplies, instruments, and setup preferences for each surgeon and procedure."
  },
  {
    id: 109,
    question: "Ultrasonic technology in surgery uses:",
    choices: ["High-frequency electrical current", "High-frequency sound waves", "Radio waves", "Lasers"],
    correctAnswer: 1,
    explanation: "Ultrasonic surgical devices use high-frequency sound waves to cut and coagulate tissue."
  },
  {
    id: 110,
    question: "Which of the following describes a bipolar electrosurgical instrument?",
    choices: ["Current flows through the patient to a return pad", "Current flows between two tips of the instrument", "Requires a dispersive pad", "Uses ultrasonic energy"],
    correctAnswer: 1,
    explanation: "In bipolar electrosurgery, current flows between the two tips of the instrument, not through the patient to a return pad."
  }
];
