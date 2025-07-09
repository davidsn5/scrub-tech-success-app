export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const principlesPracticeQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary responsibility of a surgical technologist during a surgical procedure?",
    choices: [
      "Administering anesthesia",
      "Maintaining sterile technique and anticipating surgeon's needs",
      "Diagnosing patient conditions",
      "Prescribing medications"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is NOT a component of the sterile field?",
    choices: [
      "Draped patient",
      "Instrument table",
      "Anesthesia machine",
      "Mayo stand"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "The term 'asepsis' refers to:",
    choices: [
      "The presence of pathogenic organisms",
      "The absence of pathogenic organisms",
      "Surgical instruments",
      "Patient positioning"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "What is the correct order for surgical hand scrubbing?",
    choices: [
      "Fingers, hands, forearms",
      "Forearms, hands, fingers",
      "Hands, fingers, forearms",
      "Forearms, fingers, hands"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which position is commonly used for abdominal surgery?",
    choices: [
      "Trendelenburg",
      "Supine",
      "Prone",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "The minimum temperature for steam sterilization at 15 psi is:",
    choices: [
      "250°F (121°C)",
      "270°F (132°C)",
      "300°F (149°C)",
      "320°F (160°C)"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "What does the acronym AORN stand for?",
    choices: [
      "Association of Operating Room Nurses",
      "American Organization of Registered Nurses",
      "Association of periOperative Registered Nurses",
      "American Operating Room Network"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which suture material is absorbable?",
    choices: [
      "Silk",
      "Nylon",
      "Vicryl",
      "Prolene"
    ],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "The Trendelenburg position involves:",
    choices: [
      "Head elevated, feet lowered",
      "Head lowered, feet elevated",
      "Patient on side",
      "Patient face down"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "What is the purpose of the pneumatic tourniquet?",
    choices: [
      "To maintain patient temperature",
      "To create a bloodless surgical field",
      "To monitor blood pressure",
      "To assist with breathing"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Which of the following is a non-absorbable suture?",
    choices: [
      "Catgut",
      "Vicryl",
      "Silk",
      "PDS"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "The lithotomy position is primarily used for:",
    choices: [
      "Brain surgery",
      "Gynecological and urological procedures",
      "Spinal surgery",
      "Cardiac surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "What is the standard precaution for all patients?",
    choices: [
      "Isolation precautions",
      "Universal precautions",
      "Contact precautions",
      "Droplet precautions"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "The term 'contamination' in surgery refers to:",
    choices: [
      "Presence of blood",
      "Introduction of pathogenic organisms",
      "Use of instruments",
      "Patient positioning"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Which instrument is used to grasp and hold tissue?",
    choices: [
      "Scalpel",
      "Forceps",
      "Retractor",
      "Suction tip"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "The prone position places the patient:",
    choices: [
      "On their back",
      "On their side",
      "Face down",
      "Sitting upright"
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "What is the purpose of surgical draping?",
    choices: [
      "Patient comfort",
      "Creating and maintaining sterile field",
      "Temperature control",
      "Anesthesia administration"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which of the following is a hemostatic agent?",
    choices: [
      "Saline",
      "Gelfoam",
      "Betadine",
      "Alcohol"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "The jackknife position is also known as:",
    choices: [
      "Kraske position",
      "Fowler's position",
      "Sims position",
      "Rose position"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "What does 'sterile conscience' mean?",
    choices: [
      "Being nervous during surgery",
      "Admitting when sterility is compromised",
      "Feeling guilty about mistakes",
      "Being overly cautious"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "Which type of wound healing occurs when wound edges are approximated?",
    choices: [
      "Primary intention",
      "Secondary intention",
      "Tertiary intention",
      "Delayed healing"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "The lateral position is used for:",
    choices: [
      "Abdominal surgery",
      "Kidney and thoracic surgery",
      "Brain surgery",
      "Gynecological surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "What is the minimum time for surgical hand scrub?",
    choices: [
      "2 minutes",
      "3 minutes",
      "5 minutes",
      "10 minutes"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Which solution is commonly used for skin preparation?",
    choices: [
      "Saline",
      "Povidone-iodine",
      "Hydrogen peroxide",
      "Alcohol only"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "The term 'Mayo stand' refers to:",
    choices: [
      "Patient positioning device",
      "Moveable instrument table",
      "Suction apparatus",
      "Anesthesia equipment"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "What is the purpose of counting sponges and instruments?",
    choices: [
      "Inventory management",
      "Cost control",
      "Patient safety",
      "Quality assurance"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "Which of the following is a retractor?",
    choices: [
      "Kelly clamp",
      "Babcock",
      "Weitlaner",
      "Allis"
    ],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "The reverse Trendelenburg position involves:",
    choices: [
      "Head elevated, feet lowered",
      "Head lowered, feet elevated",
      "Patient on side",
      "Patient face down"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "What is the primary purpose of electrocautery?",
    choices: [
      "Cutting tissue",
      "Hemostasis",
      "Both cutting and hemostasis",
      "Tissue removal"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Which suture size is larger?",
    choices: [
      "2-0",
      "4-0",
      "6-0",
      "8-0"
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "The term 'dehiscence' refers to:",
    choices: [
      "Wound infection",
      "Wound separation",
      "Excessive bleeding",
      "Scar formation"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "What is the correct way to pass a scalpel?",
    choices: [
      "Handle first",
      "Blade first",
      "In a basin",
      "With forceps"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "Which position is used for thyroid surgery?",
    choices: [
      "Supine with neck extension",
      "Prone",
      "Lateral",
      "Trendelenburg"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "The term 'evisceration' means:",
    choices: [
      "Wound infection",
      "Protrusion of organs through wound",
      "Excessive bleeding",
      "Loss of sensation"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is the purpose of surgical masks?",
    choices: [
      "Patient identification",
      "Prevent droplet transmission",
      "Comfort",
      "Communication"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which instrument is used for cutting sutures?",
    choices: [
      "Metzenbaum scissors",
      "Mayo scissors",
      "Suture scissors",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "The Fowler's position involves:",
    choices: [
      "Patient lying flat",
      "Patient sitting upright",
      "Patient on side",
      "Patient face down"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "What is the purpose of surgical gowns?",
    choices: [
      "Patient warmth",
      "Barrier protection",
      "Identification",
      "Comfort"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Which of the following is a curved clamp?",
    choices: [
      "Straight Kelly",
      "Curved Kelly",
      "Kocher",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 40,
    question: "The term 'anastomosis' refers to:",
    choices: [
      "Cutting tissue",
      "Joining two structures",
      "Removing tissue",
      "Closing wounds"
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "What is the standard steam sterilization time at 270°F (132°C)?",
    choices: [
      "3 minutes",
      "4 minutes",
      "15 minutes",
      "30 minutes"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "Which solution should NOT be used on mucous membranes?",
    choices: [
      "Saline",
      "Povidone-iodine",
      "Alcohol",
      "Chlorhexidine"
    ],
    correctAnswer: 2
  },
  {
    id: 43,
    question: "The kidney position is a modification of:",
    choices: [
      "Supine position",
      "Lateral position",
      "Prone position",
      "Trendelenburg position"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "What is the purpose of the surgical time-out?",
    choices: [
      "Rest period",
      "Patient verification",
      "Equipment check",
      "Team introduction"
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "Which type of suture is made from sheep intestine?",
    choices: [
      "Silk",
      "Catgut",
      "Nylon",
      "Polyester"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "The term 'hemostasis' means:",
    choices: [
      "Blood flow",
      "Stopping bleeding",
      "Blood pressure",
      "Blood count"
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "Which position places stress on the brachial plexus?",
    choices: [
      "Supine",
      "Lateral",
      "Prone",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 48,
    question: "What is the purpose of surgical drains?",
    choices: [
      "Medication delivery",
      "Fluid removal",
      "Tissue support",
      "Temperature control"
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "The term 'iatrogenic' means:",
    choices: [
      "Caused by treatment",
      "Inherited condition",
      "Infectious disease",
      "Immune response"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "Which instrument is used to hold the uterus?",
    choices: [
      "Babcock",
      "Tenaculum",
      "Allis",
      "Kocher"
    ],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "What is the correct sequence for donning sterile gloves?",
    choices: [
      "Dominant hand first",
      "Non-dominant hand first",
      "Either hand first",
      "Both hands simultaneously"
    ],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "The beach chair position is used for:",
    choices: [
      "Abdominal surgery",
      "Shoulder surgery",
      "Spinal surgery",
      "Cardiac surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "Which of the following is a tissue forceps?",
    choices: [
      "DeBakey",
      "Russian",
      "Adson",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 54,
    question: "What is the purpose of the Bovie pad?",
    choices: [
      "Patient positioning",
      "Grounding for electrocautery",
      "Temperature monitoring",
      "Pressure relief"
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "The term 'ligation' refers to:",
    choices: [
      "Cutting tissue",
      "Tying off blood vessels",
      "Removing organs",
      "Closing wounds"
    ],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "Which suture technique provides the strongest closure?",
    choices: [
      "Simple interrupted",
      "Running",
      "Mattress",
      "Purse string"
    ],
    correctAnswer: 2
  },
  {
    id: 57,
    question: "What is the minimum number of air changes per hour in an OR?",
    choices: [
      "15",
      "20",
      "25",
      "30"
    ],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "The term 'sepsis' refers to:",
    choices: [
      "Sterile condition",
      "Systemic infection",
      "Local infection",
      "Wound healing"
    ],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "Which position is used for rectal surgery?",
    choices: [
      "Supine",
      "Prone",
      "Jackknife",
      "Lateral"
    ],
    correctAnswer: 2
  },
  {
    id: 60,
    question: "What is the purpose of surgical sponges?",
    choices: [
      "Absorption and hemostasis",
      "Tissue protection",
      "Wound packing",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 61,
    question: "The term 'resection' means:",
    choices: [
      "Repair",
      "Removal",
      "Reconstruction",
      "Replacement"
    ],
    correctAnswer: 1
  },
  {
    id: 62,
    question: "Which instrument is used to grasp the gallbladder?",
    choices: [
      "Babcock",
      "Allis",
      "Hartmann",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 63,
    question: "What is the correct temperature range for the OR?",
    choices: [
      "65-70°F",
      "68-75°F",
      "75-80°F",
      "80-85°F"
    ],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "The term 'biopsy' means:",
    choices: [
      "Tissue removal for examination",
      "Complete organ removal",
      "Tissue repair",
      "Tissue replacement"
    ],
    correctAnswer: 0
  },
  {
    id: 65,
    question: "Which position is used for craniotomy?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 66,
    question: "What is the purpose of irrigation during surgery?",
    choices: [
      "Cooling tissue",
      "Removing debris",
      "Maintaining moisture",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 67,
    question: "The term 'excision' means:",
    choices: [
      "Cutting into",
      "Cutting out",
      "Cutting through",
      "Cutting around"
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "Which suture material has the longest absorption time?",
    choices: [
      "Catgut",
      "Vicryl",
      "PDS",
      "Monocryl"
    ],
    correctAnswer: 2
  },
  {
    id: 69,
    question: "What is the purpose of the surgical scrub sink?",
    choices: [
      "Hand washing",
      "Instrument cleaning",
      "Equipment storage",
      "Waste disposal"
    ],
    correctAnswer: 0
  },
  {
    id: 70,
    question: "The term 'incision' refers to:",
    choices: [
      "Surgical cut",
      "Wound closure",
      "Tissue removal",
      "Scar formation"
    ],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "Which instrument is used to cut bone?",
    choices: [
      "Rongeur",
      "Osteotome",
      "Bone cutter",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 72,
    question: "What is the correct humidity range for the OR?",
    choices: [
      "30-40%",
      "45-55%",
      "60-70%",
      "75-85%"
    ],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "The term 'ablation' means:",
    choices: [
      "Removal or destruction",
      "Repair",
      "Reconstruction",
      "Replacement"
    ],
    correctAnswer: 0
  },
  {
    id: 74,
    question: "Which position requires careful padding of pressure points?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 75,
    question: "What is the purpose of surgical clips?",
    choices: [
      "Tissue approximation",
      "Hemostasis",
      "Marking tissue",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 76,
    question: "The term 'lysis' means:",
    choices: [
      "Formation",
      "Breakdown or destruction",
      "Repair",
      "Growth"
    ],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "Which instrument is used to hold tissue edges apart?",
    choices: [
      "Forceps",
      "Clamp",
      "Retractor",
      "Scissors"
    ],
    correctAnswer: 2
  },
  {
    id: 78,
    question: "What is the minimum pressure for steam sterilization?",
    choices: [
      "10 psi",
      "15 psi",
      "20 psi",
      "25 psi"
    ],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "The term 'anastomosis' is commonly used in:",
    choices: [
      "Orthopedic surgery",
      "Gastrointestinal surgery",
      "Neurosurgery",
      "Plastic surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "Which of the following is a self-retaining retractor?",
    choices: [
      "Army-Navy",
      "Richardson",
      "Weitlaner",
      "Deaver"
    ],
    correctAnswer: 2
  },
  {
    id: 81,
    question: "What is the purpose of the neutral zone?",
    choices: [
      "Equipment storage",
      "Safe passing of sharps",
      "Waste disposal",
      "Communication area"
    ],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "The term 'fenestrated' means:",
    choices: [
      "Curved",
      "Straight",
      "Having an opening",
      "Serrated"
    ],
    correctAnswer: 2
  },
  {
    id: 83,
    question: "Which suture is best for infected wounds?",
    choices: [
      "Absorbable",
      "Non-absorbable",
      "Monofilament",
      "Multifilament"
    ],
    correctAnswer: 2
  },
  {
    id: 84,
    question: "What is the correct order for surgical team entry into OR?",
    choices: [
      "Surgeon, assistant, scrub tech",
      "Scrub tech, surgeon, assistant",
      "Assistant, surgeon, scrub tech",
      "Any order is acceptable"
    ],
    correctAnswer: 1
  },
  {
    id: 85,
    question: "The term 'approximation' in surgery means:",
    choices: [
      "Cutting tissue",
      "Bringing tissue edges together",
      "Removing tissue",
      "Separating tissue"
    ],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "Which instrument is used to grasp lung tissue?",
    choices: [
      "Babcock",
      "Duval",
      "Allis",
      "Kocher"
    ],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "What is the purpose of surgical markers?",
    choices: [
      "Tissue identification",
      "Incision planning",
      "Anatomical marking",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 88,
    question: "The term 'debridement' means:",
    choices: [
      "Wound closure",
      "Removal of dead tissue",
      "Tissue repair",
      "Scar formation"
    ],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "Which position is used for kidney surgery?",
    choices: [
      "Supine",
      "Lateral kidney position",
      "Prone",
      "Trendelenburg"
    ],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "What is the purpose of surgical staples?",
    choices: [
      "Tissue approximation",
      "Hemostasis",
      "Speed of closure",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 91,
    question: "The term 'cauterization' refers to:",
    choices: [
      "Cutting tissue",
      "Burning or searing tissue",
      "Cooling tissue",
      "Stretching tissue"
    ],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "Which instrument is used to cut heavy tissue?",
    choices: [
      "Metzenbaum scissors",
      "Mayo scissors",
      "Iris scissors",
      "Suture scissors"
    ],
    correctAnswer: 1
  },
  {
    id: 93,
    question: "What is the correct way to handle contaminated instruments?",
    choices: [
      "Place in sterile saline",
      "Isolate and contain",
      "Continue using",
      "Rinse with alcohol"
    ],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "The term 'traction' in surgery means:",
    choices: [
      "Cutting",
      "Pulling or stretching",
      "Pushing",
      "Rotating"
    ],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "Which position is used for shoulder arthroscopy?",
    choices: [
      "Supine",
      "Beach chair",
      "Lateral",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 96,
    question: "What is the purpose of bone wax?",
    choices: [
      "Lubrication",
      "Hemostasis in bone",
      "Preservation",
      "Identification"
    ],
    correctAnswer: 1
  },
  {
    id: 97,
    question: "The term 'insufflation' refers to:",
    choices: [
      "Removing gas",
      "Introducing gas",
      "Measuring pressure",
      "Filtering air"
    ],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "Which instrument is used for fine dissection?",
    choices: [
      "Mayo scissors",
      "Metzenbaum scissors",
      "Bandage scissors",
      "Suture scissors"
    ],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "What is the correct method for counting instruments?",
    choices: [
      "Visual count only",
      "Audible count with witness",
      "Written count only",
      "Electronic count"
    ],
    correctAnswer: 1
  },
  {
    id: 100,
    question: "The term 'retraction' means:",
    choices: [
      "Cutting tissue",
      "Holding tissue aside",
      "Removing tissue",
      "Suturing tissue"
    ],
    correctAnswer: 1
  },
  {
    id: 101,
    question: "Which suture technique is used for bowel anastomosis?",
    choices: [
      "Simple interrupted",
      "Running",
      "Lembert",
      "Mattress"
    ],
    correctAnswer: 2
  },
  {
    id: 102,
    question: "What is the purpose of surgical lubricants?",
    choices: [
      "Sterilization",
      "Ease of insertion",
      "Hemostasis",
      "Tissue preservation"
    ],
    correctAnswer: 1
  },
  {
    id: 103,
    question: "The term 'perforation' means:",
    choices: [
      "Abnormal opening",
      "Normal opening",
      "Closure",
      "Repair"
    ],
    correctAnswer: 0
  },
  {
    id: 104,
    question: "Which position requires a kidney rest?",
    choices: [
      "Supine",
      "Lateral kidney",
      "Prone",
      "Trendelenburg"
    ],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "What is the purpose of surgical sealants?",
    choices: [
      "Hemostasis",
      "Air leak prevention",
      "Tissue adhesion",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 106,
    question: "The term 'dilation' means:",
    choices: [
      "Narrowing",
      "Widening or stretching",
      "Closing",
      "Cutting"
    ],
    correctAnswer: 1
  },
  {
    id: 107,
    question: "Which instrument is used to measure depth?",
    choices: [
      "Ruler",
      "Probe",
      "Caliper",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 108,
    question: "What is the correct sequence for surgical site preparation?",
    choices: [
      "Shave, prep, drape",
      "Prep, shave, drape",
      "Drape, prep, shave",
      "Shave, drape, prep"
    ],
    correctAnswer: 0
  },
  {
    id: 109,
    question: "The term 'mobilization' in surgery means:",
    choices: [
      "Making immobile",
      "Freeing from attachments",
      "Strengthening",
      "Positioning"
    ],
    correctAnswer: 1
  },
  {
    id: 110,
    question: "Which position is used for perineal surgery?",
    choices: [
      "Supine",
      "Lithotomy",
      "Prone",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 111,
    question: "What is the purpose of surgical pledgets?",
    choices: [
      "Suture reinforcement",
      "Hemostasis",
      "Tissue protection",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 112,
    question: "The term 'revision' in surgery means:",
    choices: [
      "First surgery",
      "Repeat or corrective surgery",
      "Emergency surgery",
      "Diagnostic surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "Which instrument is used to hold the cervix?",
    choices: [
      "Tenaculum",
      "Babcock",
      "Allis",
      "Kocher"
    ],
    correctAnswer: 0
  },
  {
    id: 114,
    question: "What is the correct way to handle a specimen?",
    choices: [
      "Place in formalin immediately",
      "Keep moist with saline",
      "Follow surgeon's instructions",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 115,
    question: "The term 'exploration' in surgery means:",
    choices: [
      "Diagnostic examination",
      "Therapeutic procedure",
      "Emergency surgery",
      "Cosmetic surgery"
    ],
    correctAnswer: 0
  },
  {
    id: 116,
    question: "Which position places the patient's arms at their sides?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "All of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 117,
    question: "What is the purpose of surgical mesh?",
    choices: [
      "Reinforcement",
      "Hernia repair",
      "Tissue support",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 118,
    question: "The term 'reconstruction' means:",
    choices: [
      "Removal",
      "Rebuilding or repair",
      "Examination",
      "Replacement"
    ],
    correctAnswer: 1
  },
  {
    id: 119,
    question: "Which instrument is used to grasp small vessels?",
    choices: [
      "Mosquito hemostat",
      "Kelly clamp",
      "Kocher clamp",
      "Babcock"
    ],
    correctAnswer: 0
  },
  {
    id: 120,
    question: "What is the correct method for disposing of sharps?",
    choices: [
      "Regular trash",
      "Sharps container",
      "Biohazard bag",
      "Autoclave bag"
    ],
    correctAnswer: 1
  },
  {
    id: 121,
    question: "The term 'transection' means:",
    choices: [
      "Cutting across",
      "Cutting around",
      "Cutting into",
      "Cutting out"
    ],
    correctAnswer: 0
  },
  {
    id: 122,
    question: "Which position is used for spinal surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 123,
    question: "What is the purpose of surgical patties?",
    choices: [
      "Hemostasis",
      "Protection",
      "Absorption",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 124,
    question: "The term 'implantation' refers to:",
    choices: [
      "Removal of device",
      "Placement of device",
      "Repair of device",
      "Testing of device"
    ],
    correctAnswer: 1
  },
  {
    id: 125,
    question: "Which instrument is used to cut sutures close to tissue?",
    choices: [
      "Mayo scissors",
      "Metzenbaum scissors",
      "Suture scissors",
      "Iris scissors"
    ],
    correctAnswer: 2
  },
  {
    id: 126,
    question: "What is the correct way to maintain sterile field?",
    choices: [
      "Keep hands above waist",
      "Face sterile field",
      "Avoid reaching over sterile areas",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 127,
    question: "The term 'extirpation' means:",
    choices: [
      "Complete removal",
      "Partial removal",
      "Repair",
      "Replacement"
    ],
    correctAnswer: 0
  },
  {
    id: 128,
    question: "Which position requires careful attention to circulation?",
    choices: [
      "Lithotomy",
      "Prone",
      "Lateral",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 129,
    question: "What is the purpose of surgical towels?",
    choices: [
      "Drying hands",
      "Creating sterile field",
      "Absorbing fluids",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 130,
    question: "The term 'fenestration' means:",
    choices: [
      "Creating an opening",
      "Closing an opening",
      "Enlarging an opening",
      "Both A and C"
    ],
    correctAnswer: 3
  },
  {
    id: 131,
    question: "Which instrument is used for blunt dissection?",
    choices: [
      "Scissors",
      "Scalpel",
      "Peanut sponge",
      "Needle"
    ],
    correctAnswer: 2
  },
  {
    id: 132,
    question: "What is the correct temperature for instrument storage?",
    choices: [
      "Room temperature",
      "Body temperature",
      "Warm",
      "Cool"
    ],
    correctAnswer: 0
  },
  {
    id: 133,
    question: "The term 'enucleation' means:",
    choices: [
      "Removal in pieces",
      "Removal intact",
      "Partial removal",
      "Repair"
    ],
    correctAnswer: 1
  },
  {
    id: 134,
    question: "Which position is used for breast surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Both A and C"
    ],
    correctAnswer: 3
  },
  {
    id: 135,
    question: "What is the purpose of surgical clips?",
    choices: [
      "Temporary hemostasis",
      "Permanent hemostasis",
      "Tissue marking",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 136,
    question: "The term 'manipulation' in surgery means:",
    choices: [
      "Cutting",
      "Moving or adjusting",
      "Removing",
      "Replacing"
    ],
    correctAnswer: 1
  },
  {
    id: 137,
    question: "Which instrument is used to grasp bowel?",
    choices: [
      "Babcock",
      "Allis",
      "Doyen",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 138,
    question: "What is the correct way to handle electrocautery?",
    choices: [
      "Keep in holster when not in use",
      "Place on patient",
      "Leave activated",
      "Share between team members"
    ],
    correctAnswer: 0
  },
  {
    id: 139,
    question: "The term 'reduction' in surgery means:",
    choices: [
      "Making smaller",
      "Restoring normal position",
      "Removing",
      "Repairing"
    ],
    correctAnswer: 1
  },
  {
    id: 140,
    question: "Which position requires a donut headrest?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "All of the above"
    ],
    correctAnswer: 1
  },
  {
    id: 141,
    question: "What is the purpose of surgical adhesives?",
    choices: [
      "Tissue bonding",
      "Hemostasis",
      "Sealing",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 142,
    question: "The term 'amputation' means:",
    choices: [
      "Repair",
      "Removal of limb or part",
      "Reconstruction",
      "Replacement"
    ],
    correctAnswer: 1
  },
  {
    id: 143,
    question: "Which instrument is used to hold tissue during suturing?",
    choices: [
      "Forceps",
      "Clamp",
      "Retractor",
      "All of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 144,
    question: "What is the correct way to pass instruments?",
    choices: [
      "Firmly and decisively",
      "Gently",
      "Quickly",
      "Slowly"
    ],
    correctAnswer: 0
  },
  {
    id: 145,
    question: "The term 'transplantation' refers to:",
    choices: [
      "Moving within same body",
      "Moving between bodies",
      "Artificial replacement",
      "Both A and B"
    ],
    correctAnswer: 3
  },
  {
    id: 146,
    question: "Which position is used for hip surgery?",
    choices: [
      "Supine",
      "Lateral",
      "Prone",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 147,
    question: "What is the purpose of surgical drains?",
    choices: [
      "Prevent fluid accumulation",
      "Monitor output",
      "Reduce infection risk",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 148,
    question: "The term 'irrigation' means:",
    choices: [
      "Drying",
      "Washing or flushing",
      "Heating",
      "Cooling"
    ],
    correctAnswer: 1
  },
  {
    id: 149,
    question: "Which instrument is used to cut wire sutures?",
    choices: [
      "Wire cutters",
      "Mayo scissors",
      "Suture scissors",
      "Both A and B"
    ],
    correctAnswer: 3
  },
  {
    id: 150,
    question: "What is the correct way to maintain instrument sharpness?",
    choices: [
      "Regular use",
      "Proper handling",
      "Appropriate storage",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 151,
    question: "The term 'fixation' in surgery means:",
    choices: [
      "Making movable",
      "Making immobile",
      "Removing",
      "Replacing"
    ],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "Which position is used for thyroidectomy?",
    choices: [
      "Supine with neck extension",
      "Prone",
      "Lateral",
      "Trendelenburg"
    ],
    correctAnswer: 0
  },
  {
    id: 153,
    question: "What is the purpose of surgical markers?",
    choices: [
      "Incision planning",
      "Anatomical identification",
      "Measurement",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 154,
    question: "The term 'aspiration' means:",
    choices: [
      "Breathing in",
      "Removal by suction",
      "Adding fluid",
      "Both A and B"
    ],
    correctAnswer: 3
  },
  {
    id: 155,
    question: "Which instrument is used to grasp the appendix?",
    choices: [
      "Babcock",
      "Allis",
      "Kocher",
      "All of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 156,
    question: "What is the correct way to handle contamination?",
    choices: [
      "Continue procedure",
      "Stop and re-establish sterility",
      "Cover with sterile drape",
      "Ignore if minor"
    ],
    correctAnswer: 1
  },
  {
    id: 157,
    question: "The term 'dilatation' means:",
    choices: [
      "Narrowing",
      "Widening",
      "Closing",
      "Opening"
    ],
    correctAnswer: 1
  },
  {
    id: 158,
    question: "Which position requires arm boards?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "All of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 159,
    question: "What is the purpose of surgical sponges with radiopaque strips?",
    choices: [
      "Better absorption",
      "X-ray visibility",
      "Strength",
      "Color coding"
    ],
    correctAnswer: 1
  },
  {
    id: 160,
    question: "The term 'curettage' means:",
    choices: [
      "Cutting",
      "Scraping",
      "Suturing",
      "Burning"
    ],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "Which instrument is used for microsurgery?",
    choices: [
      "Standard instruments",
      "Microsurgical instruments",
      "Laparoscopic instruments",
      "Robotic instruments"
    ],
    correctAnswer: 1
  },
  {
    id: 162,
    question: "What is the correct way to handle tissue specimens?",
    choices: [
      "Keep dry",
      "Keep moist",
      "Freeze immediately",
      "Add preservative"
    ],
    correctAnswer: 1
  },
  {
    id: 163,
    question: "The term 'resection' means:",
    choices: [
      "Repair",
      "Removal",
      "Reconstruction",
      "Replacement"
    ],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Which position is used for lumbar spine surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 165,
    question: "What is the purpose of surgical lubricants?",
    choices: [
      "Reduce friction",
      "Prevent tissue damage",
      "Ease insertion",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 166,
    question: "The term 'ligation' means:",
    choices: [
      "Cutting",
      "Tying off",
      "Removing",
      "Repairing"
    ],
    correctAnswer: 1
  },
  {
    id: 167,
    question: "Which instrument is used to hold the stomach?",
    choices: [
      "Babcock",
      "Allis",
      "Duval",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 168,
    question: "What is the correct way to handle broken instruments?",
    choices: [
      "Continue using",
      "Repair immediately",
      "Remove from field",
      "Cover with towel"
    ],
    correctAnswer: 2
  },
  {
    id: 169,
    question: "The term 'excision' means:",
    choices: [
      "Cutting into",
      "Cutting out",
      "Cutting across",
      "Cutting around"
    ],
    correctAnswer: 1
  },
  {
    id: 170,
    question: "Which position is used for carotid endarterectomy?",
    choices: [
      "Supine with head turned",
      "Prone",
      "Lateral",
      "Trendelenburg"
    ],
    correctAnswer: 0
  },
  {
    id: 171,
    question: "What is the purpose of surgical pledgets?",
    choices: [
      "Reinforce sutures",
      "Prevent tearing",
      "Distribute pressure",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 172,
    question: "The term 'incision' refers to:",
    choices: [
      "Surgical cut",
      "Natural opening",
      "Wound closure",
      "Scar tissue"
    ],
    correctAnswer: 0
  },
  {
    id: 173,
    question: "Which instrument is used to cut thick tissue?",
    choices: [
      "Metzenbaum scissors",
      "Mayo scissors",
      "Iris scissors",
      "Suture scissors"
    ],
    correctAnswer: 1
  },
  {
    id: 174,
    question: "What is the correct way to handle electrocautery burns?",
    choices: [
      "Apply ice",
      "Apply heat",
      "Irrigate with saline",
      "Cover with gauze"
    ],
    correctAnswer: 2
  },
  {
    id: 175,
    question: "The term 'anastomosis' means:",
    choices: [
      "Separation",
      "Connection",
      "Removal",
      "Repair"
    ],
    correctAnswer: 1
  },
  {
    id: 176,
    question: "Which position is used for craniotomy in sitting position?",
    choices: [
      "Fowler's",
      "Semi-Fowler's",
      "Sitting",
      "All of the above"
    ],
    correctAnswer: 2
  },
  {
    id: 177,
    question: "What is the purpose of surgical clips?",
    choices: [
      "Temporary closure",
      "Permanent closure",
      "Marking",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 178,
    question: "The term 'mobilization' means:",
    choices: [
      "Making immobile",
      "Freeing from attachments",
      "Strengthening",
      "Positioning"
    ],
    correctAnswer: 1
  },
  {
    id: 179,
    question: "Which instrument is used to grasp delicate tissue?",
    choices: [
      "DeBakey forceps",
      "Russian forceps",
      "Adson forceps",
      "All of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 180,
    question: "What is the correct way to handle laser equipment?",
    choices: [
      "Follow safety protocols",
      "Use protective eyewear",
      "Ensure proper ventilation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 181,
    question: "The term 'perforation' means:",
    choices: [
      "Normal opening",
      "Abnormal opening",
      "Closure",
      "Repair"
    ],
    correctAnswer: 1
  },
  {
    id: 182,
    question: "Which position is used for posterior spinal fusion?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Sitting"
    ],
    correctAnswer: 1
  },
  {
    id: 183,
    question: "What is the purpose of surgical mesh?",
    choices: [
      "Reinforcement",
      "Support",
      "Repair",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 184,
    question: "The term 'reconstruction' means:",
    choices: [
      "Destruction",
      "Rebuilding",
      "Removal",
      "Examination"
    ],
    correctAnswer: 1
  },
  {
    id: 185,
    question: "Which instrument is used to cut bone?",
    choices: [
      "Rongeur",
      "Osteotome",
      "Bone cutter",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 186,
    question: "What is the correct way to handle radioactive materials?",
    choices: [
      "Standard precautions",
      "Radiation safety protocols",
      "No special precautions",
      "Isolation only"
    ],
    correctAnswer: 1
  },
  {
    id: 187,
    question: "The term 'ablation' means:",
    choices: [
      "Addition",
      "Removal or destruction",
      "Repair",
      "Reconstruction"
    ],
    correctAnswer: 1
  },
  {
    id: 188,
    question: "Which position is used for anterior cervical discectomy?",
    choices: [
      "Supine with neck extension",
      "Prone",
      "Lateral",
      "Sitting"
    ],
    correctAnswer: 0
  },
  {
    id: 189,
    question: "What is the purpose of surgical sealants?",
    choices: [
      "Hemostasis",
      "Air leak prevention",
      "Tissue adhesion",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 190,
    question: "The term 'dilation' means:",
    choices: [
      "Narrowing",
      "Widening",
      "Closing",
      "Cutting"
    ],
    correctAnswer: 1
  },
  {
    id: 191,
    question: "Which instrument is used to measure?",
    choices: [
      "Ruler",
      "Caliper",
      "Probe",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 192,
    question: "What is the correct way to handle chemotherapy drugs?",
    choices: [
      "Standard precautions",
      "Chemotherapy safety protocols",
      "No special precautions",
      "Gloves only"
    ],
    correctAnswer: 1
  },
  {
    id: 193,
    question: "The term 'revision' means:",
    choices: [
      "First surgery",
      "Repeat surgery",
      "Emergency surgery",
      "Diagnostic surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 194,
    question: "Which position is used for mastectomy?",
    choices: [
      "Supine",
      "Lateral",
      "Prone",
      "Both A and B"
    ],
    correctAnswer: 3
  },
  {
    id: 195,
    question: "What is the purpose of surgical drains?",
    choices: [
      "Fluid removal",
      "Monitoring",
      "Prevention of complications",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 196,
    question: "The term 'exploration' means:",
    choices: [
      "Therapeutic procedure",
      "Diagnostic examination",
      "Emergency surgery",
      "Cosmetic surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 197,
    question: "Which instrument is used for hemostasis?",
    choices: [
      "Hemostat",
      "Electrocautery",
      "Clips",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 198,
    question: "What is the correct way to handle implants?",
    choices: [
      "Sterile technique",
      "Proper documentation",
      "Careful handling",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 199,
    question: "The term 'transection' means:",
    choices: [
      "Cutting across",
      "Cutting around",
      "Cutting into",
      "Cutting out"
    ],
    correctAnswer: 0
  },
  {
    id: 200,
    question: "Which position is used for thoracotomy?",
    choices: [
      "Supine",
      "Lateral",
      "Prone",
      "Sitting"
    ],
    correctAnswer: 1
  },
  {
    id: 201,
    question: "What is the purpose of surgical patties?",
    choices: [
      "Hemostasis",
      "Protection",
      "Absorption",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 202,
    question: "The term 'implantation' means:",
    choices: [
      "Removal",
      "Placement",
      "Repair",
      "Testing"
    ],
    correctAnswer: 1
  },
  {
    id: 203,
    question: "Which instrument is used to cut sutures?",
    choices: [
      "Suture scissors",
      "Mayo scissors",
      "Metzenbaum scissors",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 204,
    question: "What is the correct way to handle specimens?",
    choices: [
      "Label immediately",
      "Keep moist",
      "Handle gently",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 205,
    question: "The term 'extirpation' means:",
    choices: [
      "Partial removal",
      "Complete removal",
      "Repair",
      "Replacement"
    ],
    correctAnswer: 1
  },
  {
    id: 206,
    question: "Which position requires careful padding?",
    choices: [
      "All positions",
      "Prone only",
      "Lateral only",
      "Supine only"
    ],
    correctAnswer: 0
  },
  {
    id: 207,
    question: "What is the purpose of surgical towels?",
    choices: [
      "Drying",
      "Draping",
      "Absorption",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 208,
    question: "The term 'fenestration' means:",
    choices: [
      "Creating opening",
      "Closing opening",
      "Enlarging opening",
      "Both A and C"
    ],
    correctAnswer: 3
  },
  {
    id: 209,
    question: "Which instrument is used for blunt dissection?",
    choices: [
      "Scissors",
      "Scalpel",
      "Peanut",
      "Needle"
    ],
    correctAnswer: 2
  },
  {
    id: 210,
    question: "What is the correct storage temperature for instruments?",
    choices: [
      "Frozen",
      "Refrigerated",
      "Room temperature",
      "Heated"
    ],
    correctAnswer: 2
  },
  {
    id: 211,
    question: "The term 'enucleation' means:",
    choices: [
      "Removal in pieces",
      "Removal intact",
      "Partial removal",
      "Repair"
    ],
    correctAnswer: 1
  },
  {
    id: 212,
    question: "Which position is used for axillary surgery?",
    choices: [
      "Supine",
      "Lateral",
      "Prone",
      "Both A and B"
    ],
    correctAnswer: 3
  },
  {
    id: 213,
    question: "What is the purpose of surgical clips?",
    choices: [
      "Hemostasis",
      "Marking",
      "Closure",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 214,
    question: "The term 'manipulation' means:",
    choices: [
      "Cutting",
      "Moving",
      "Removing",
      "Replacing"
    ],
    correctAnswer: 1
  },
  {
    id: 215,
    question: "Which instrument is used to grasp bowel?",
    choices: [
      "Babcock",
      "Allis",
      "Doyen",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 216,
    question: "What is the correct way to handle electrocautery?",
    choices: [
      "Keep in holster",
      "Place on patient",
      "Leave activated",
      "Share between users"
    ],
    correctAnswer: 0
  },
  {
    id: 217,
    question: "The term 'reduction' means:",
    choices: [
      "Making smaller",
      "Restoring position",
      "Removing",
      "Repairing"
    ],
    correctAnswer: 1
  },
  {
    id: 218,
    question: "Which position requires head support?",
    choices: [
      "Prone",
      "Lateral",
      "Sitting",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 219,
    question: "What is the purpose of surgical adhesives?",
    choices: [
      "Bonding",
      "Sealing",
      "Hemostasis",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 220,
    question: "The term 'amputation' means:",
    choices: [
      "Repair",
      "Removal of limb",
      "Reconstruction",
      "Replacement"
    ],
    correctAnswer: 1
  },
  {
    id: 221,
    question: "Which instrument is used during suturing?",
    choices: [
      "Needle holder",
      "Forceps",
      "Scissors",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 222,
    question: "What is the correct way to pass instruments?",
    choices: [
      "Firmly",
      "Gently",
      "Quickly",
      "Slowly"
    ],
    correctAnswer: 0
  },
  {
    id: 223,
    question: "The term 'transplantation' means:",
    choices: [
      "Moving within body",
      "Moving between bodies",
      "Artificial replacement",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 224,
    question: "Which position is used for total hip replacement?",
    choices: [
      "Supine",
      "Lateral",
      "Prone",
      "Both A and B"
    ],
    correctAnswer: 3
  },
  {
    id: 225,
    question: "What is the purpose of surgical drains?",
    choices: [
      "Prevent accumulation",
      "Monitor output",
      "Reduce infection",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 226,
    question: "The term 'irrigation' means:",
    choices: [
      "Drying",
      "Washing",
      "Heating",
      "Cooling"
    ],
    correctAnswer: 1
  },
  {
    id: 227,
    question: "Which instrument cuts wire?",
    choices: [
      "Wire cutters",
      "Mayo scissors",
      "Heavy scissors",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 228,
    question: "What maintains instrument sharpness?",
    choices: [
      "Regular use",
      "Proper handling",
      "Appropriate storage",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 229,
    question: "The term 'fixation' means:",
    choices: [
      "Making movable",
      "Making immobile",
      "Removing",
      "Replacing"
    ],
    correctAnswer: 1
  },
  {
    id: 230,
    question: "Which position is used for parathyroidectomy?",
    choices: [
      "Supine with neck extension",
      "Prone",
      "Lateral",
      "Trendelenburg"
    ],
    correctAnswer: 0
  },
  {
    id: 231,
    question: "What is the purpose of surgical markers?",
    choices: [
      "Planning",
      "Identification",
      "Measurement",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 232,
    question: "The term 'aspiration' means:",
    choices: [
      "Breathing in",
      "Suction removal",
      "Adding fluid",
      "Both A and B"
    ],
    correctAnswer: 3
  },
  {
    id: 233,
    question: "Which instrument grasps the appendix?",
    choices: [
      "Babcock",
      "Allis",
      "Kocher",
      "All of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 234,
    question: "How to handle contamination?",
    choices: [
      "Continue procedure",
      "Re-establish sterility",
      "Cover with drape",
      "Ignore if minor"
    ],
    correctAnswer: 1
  },
  {
    id: 235,
    question: "The term 'dilatation' means:",
    choices: [
      "Narrowing",
      "Widening",
      "Closing",
      "Opening"
    ],
    correctAnswer: 1
  },
  {
    id: 236,
    question: "Which position uses arm boards?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "All positions"
    ],
    correctAnswer: 0
  },
  {
    id: 237,
    question: "Purpose of radiopaque sponges?",
    choices: [
      "Better absorption",
      "X-ray visibility",
      "Strength",
      "Color coding"
    ],
    correctAnswer: 1
  },
  {
    id: 238,
    question: "The term 'curettage' means:",
    choices: [
      "Cutting",
      "Scraping",
      "Suturing",
      "Burning"
    ],
    correctAnswer: 1
  },
  {
    id: 239,
    question: "Instruments for microsurgery?",
    choices: [
      "Standard instruments",
      "Microsurgical instruments",
      "Laparoscopic instruments",
      "Robotic instruments"
    ],
    correctAnswer: 1
  },
  {
    id: 240,
    question: "How to handle tissue specimens?",
    choices: [
      "Keep dry",
      "Keep moist",
      "Freeze immediately",
      "Add preservative"
    ],
    correctAnswer: 1
  },
  {
    id: 241,
    question: "What is the most important factor in preventing surgical site infections?",
    choices: [
      "Antibiotic prophylaxis",
      "Proper hand hygiene and sterile technique",
      "Room temperature control",
      "Patient positioning"
    ],
    correctAnswer: 1
  },
  {
    id: 242,
    question: "The 'time-out' procedure must include verification of:",
    choices: [
      "Patient identity only",
      "Surgical site only",
      "Patient identity, procedure, and site",
      "Surgeon preference only"
    ],
    correctAnswer: 2
  },
  {
    id: 243,
    question: "Which of the following is considered a 'never event' in surgery?",
    choices: [
      "Minor bleeding",
      "Wrong-site surgery",
      "Prolonged procedure time",
      "Patient anxiety"
    ],
    correctAnswer: 1
  },
  {
    id: 244,
    question: "The primary purpose of surgical counts is to:",
    choices: [
      "Inventory management",
      "Cost control",
      "Prevent retained foreign objects",
      "Quality assurance documentation"
    ],
    correctAnswer: 2
  },
  {
    id: 245,
    question: "When should the initial count be performed?",
    choices: [
      "Before the procedure begins",
      "After the incision is made",
      "Before closure begins",
      "After the procedure is complete"
    ],
    correctAnswer: 0
  },
  {
    id: 246,
    question: "If a sponge count is incorrect, the first action should be:",
    choices: [
      "Document the discrepancy",
      "Take an X-ray",
      "Notify the surgeon immediately",
      "Continue with closure"
    ],
    correctAnswer: 2
  },
  {
    id: 247,
    question: "The term 'bioburden' refers to:",
    choices: [
      "Weight of biological materials",
      "Number of microorganisms on an item",
      "Cost of biological supplies",
      "Time required for sterilization"
    ],
    correctAnswer: 1
  },
  {
    id: 248,
    question: "Which sterilization method is most commonly used for heat-sensitive items?",
    choices: [
      "Steam sterilization",
      "Dry heat sterilization",
      "Ethylene oxide sterilization",
      "Radiation sterilization"
    ],
    correctAnswer: 2
  },
  {
    id: 249,
    question: "The Spaulding classification system categorizes medical devices based on:",
    choices: [
      "Cost",
      "Size",
      "Risk of infection transmission",
      "Frequency of use"
    ],
    correctAnswer: 2
  },
  {
    id: 250,
    question: "Critical items in the Spaulding classification require:",
    choices: [
      "Cleaning only",
      "Disinfection",
      "Sterilization",
      "No special processing"
    ],
    correctAnswer: 2
  },
  {
    id: 251,
    question: "The minimum recommended air changes per hour in an operating room is:",
    choices: [
      "15",
      "20",
      "25",
      "30"
    ],
    correctAnswer: 1
  },
  {
    id: 252,
    question: "Positive pressure in the OR prevents:",
    choices: [
      "Equipment malfunction",
      "Contaminated air from entering",
      "Noise from outside",
      "Temperature fluctuations"
    ],
    correctAnswer: 1
  },
  {
    id: 253,
    question: "The recommended temperature range for an operating room is:",
    choices: [
      "65-70°F (18-21°C)",
      "68-75°F (20-24°C)",
      "75-80°F (24-27°C)",
      "80-85°F (27-29°C)"
    ],
    correctAnswer: 1
  },
  {
    id: 254,
    question: "The recommended relative humidity range for an operating room is:",
    choices: [
      "30-40%",
      "45-55%",
      "60-70%",
      "75-85%"
    ],
    correctAnswer: 1
  },
  {
    id: 255,
    question: "Traffic control in the OR is important because:",
    choices: [
      "It reduces noise levels",
      "It minimizes air turbulence and contamination",
      "It improves workflow efficiency",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 256,
    question: "The surgical scrub should last a minimum of:",
    choices: [
      "2 minutes",
      "3 minutes",
      "5 minutes",
      "10 minutes"
    ],
    correctAnswer: 2
  },
  {
    id: 257,
    question: "When performing a surgical scrub, you should scrub:",
    choices: [
      "From fingertips to elbows",
      "From elbows to fingertips",
      "Hands only",
      "Arms only"
    ],
    correctAnswer: 0
  },
  {
    id: 258,
    question: "After completing the surgical scrub, hands should be held:",
    choices: [
      "At waist level",
      "Above the waist",
      "Below the waist",
      "Position doesn't matter"
    ],
    correctAnswer: 1
  },
  {
    id: 259,
    question: "The purpose of surgical attire is to:",
    choices: [
      "Provide comfort",
      "Create a barrier against contamination",
      "Identify team members",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 260,
    question: "Surgical masks should be:",
    choices: [
      "Reused throughout the day",
      "Changed between cases",
      "Worn only during procedures",
      "Optional in the OR"
    ],
    correctAnswer: 1
  },
  {
    id: 261,
    question: "The primary purpose of surgical gowns is to:",
    choices: [
      "Provide warmth",
      "Create a sterile barrier",
      "Identify the surgical team",
      "Protect clothing"
    ],
    correctAnswer: 1
  },
  {
    id: 262,
    question: "When donning sterile gloves, you should first:",
    choices: [
      "Put on the dominant hand glove",
      "Put on the non-dominant hand glove",
      "Put on either glove first",
      "Put on both gloves simultaneously"
    ],
    correctAnswer: 1
  },
  {
    id: 263,
    question: "If a sterile glove becomes contaminated during surgery, you should:",
    choices: [
      "Continue with the procedure",
      "Wipe the glove with alcohol",
      "Change the glove immediately",
      "Cover with a sterile towel"
    ],
    correctAnswer: 2
  },
  {
    id: 264,
    question: "The sterile field includes:",
    choices: [
      "The draped patient",
      "The instrument tables",
      "The scrubbed team members",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 265,
    question: "Items below waist level are considered:",
    choices: [
      "Sterile",
      "Clean",
      "Contaminated",
      "Semi-sterile"
    ],
    correctAnswer: 2
  },
  {
    id: 266,
    question: "When opening sterile packages, the first flap should be opened:",
    choices: [
      "Toward you",
      "Away from you",
      "To the right",
      "To the left"
    ],
    correctAnswer: 1
  },
  {
    id: 267,
    question: "The edge of a sterile wrapper is considered:",
    choices: [
      "Sterile",
      "Contaminated",
      "Clean",
      "Semi-sterile"
    ],
    correctAnswer: 1
  },
  {
    id: 268,
    question: "When pouring sterile solutions, you should:",
    choices: [
      "Pour slowly and steadily",
      "Pour from a height of 6 inches",
      "Avoid splashing",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 269,
    question: "Strike-through contamination occurs when:",
    choices: [
      "Moisture penetrates sterile barriers",
      "Air currents disturb sterile fields",
      "Instruments fall to the floor",
      "Team members touch non-sterile items"
    ],
    correctAnswer: 0
  },
  {
    id: 270,
    question: "The most effective method of sterilization for most surgical instruments is:",
    choices: [
      "Dry heat",
      "Steam under pressure",
      "Chemical sterilization",
      "Radiation"
    ],
    correctAnswer: 1
  },
  {
    id: 271,
    question: "Standard steam sterilization parameters are:",
    choices: [
      "250°F (121°C) for 15 minutes at 15 psi",
      "270°F (132°C) for 4 minutes at 15 psi",
      "Both A and B are correct",
      "300°F (149°C) for 2 minutes at 20 psi"
    ],
    correctAnswer: 2
  },
  {
    id: 272,
    question: "Biological indicators are used to:",
    choices: [
      "Monitor sterilizer function",
      "Verify sterility",
      "Test sterilization efficacy",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 273,
    question: "Chemical indicators show:",
    choices: [
      "That sterilization has occurred",
      "That sterilization conditions were met",
      "The presence of microorganisms",
      "The temperature only"
    ],
    correctAnswer: 1
  },
  {
    id: 274,
    question: "Immediate use steam sterilization (flash sterilization) should be used:",
    choices: [
      "Routinely for all instruments",
      "Only in emergency situations",
      "For convenience",
      "To save time"
    ],
    correctAnswer: 1
  },
  {
    id: 275,
    question: "The shelf life of a sterile package depends on:",
    choices: [
      "Storage conditions",
      "Packaging material",
      "Handling",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 276,
    question: "Event-related sterility means:",
    choices: [
      "Items are sterile for a specific time period",
      "Items remain sterile until the package is compromised",
      "Items are sterile only during procedures",
      "Items lose sterility after opening"
    ],
    correctAnswer: 1
  },
  {
    id: 277,
    question: "When transporting sterile items, you should:",
    choices: [
      "Handle packages roughly",
      "Stack packages high",
      "Protect from moisture and damage",
      "Transport in open containers"
    ],
    correctAnswer: 2
  },
  {
    id: 278,
    question: "The supine position places the patient:",
    choices: [
      "Face down",
      "On their back",
      "On their side",
      "Sitting upright"
    ],
    correctAnswer: 1
  },
  {
    id: 279,
    question: "The Trendelenburg position is used to:",
    choices: [
      "Improve venous return",
      "Provide better surgical access",
      "Prevent air embolism",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 280,
    question: "The lithotomy position is commonly used for:",
    choices: [
      "Abdominal surgery",
      "Gynecological and urological procedures",
      "Cardiac surgery",
      "Neurosurgery"
    ],
    correctAnswer: 1
  },
  {
    id: 281,
    question: "When positioning a patient in the prone position, special attention must be paid to:",
    choices: [
      "Respiratory function",
      "Pressure points",
      "Circulation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 282,
    question: "The lateral position requires support for:",
    choices: [
      "The head and neck",
      "The torso",
      "The legs",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 283,
    question: "Pressure ulcers can develop in as little as:",
    choices: [
      "30 minutes",
      "1 hour",
      "2 hours",
      "4 hours"
    ],
    correctAnswer: 2
  },
  {
    id: 284,
    question: "The most common sites for pressure ulcers during surgery are:",
    choices: [
      "Bony prominences",
      "Soft tissue areas",
      "Joint spaces",
      "Muscle bellies"
    ],
    correctAnswer: 0
  },
  {
    id: 285,
    question: "Proper body mechanics for surgical team members includes:",
    choices: [
      "Maintaining good posture",
      "Using proper lifting techniques",
      "Taking breaks to stretch",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 286,
    question: "The purpose of skin preparation is to:",
    choices: [
      "Remove transient microorganisms",
      "Reduce resident microorganisms",
      "Provide antiseptic residual effect",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 287,
    question: "Skin preparation should begin:",
    choices: [
      "At the incision site and work outward",
      "At the periphery and work inward",
      "At any convenient location",
      "At the most contaminated area first"
    ],
    correctAnswer: 0
  },
  {
    id: 288,
    question: "The most commonly used skin antiseptic is:",
    choices: [
      "Alcohol",
      "Povidone-iodine",
      "Chlorhexidine gluconate",
      "Hydrogen peroxide"
    ],
    correctAnswer: 1
  },
  {
    id: 289,
    question: "Hair removal, if necessary, should be done:",
    choices: [
      "The night before surgery",
      "Immediately before surgery",
      "During the procedure",
      "After the procedure"
    ],
    correctAnswer: 1
  },
  {
    id: 290,
    question: "The preferred method of hair removal is:",
    choices: [
      "Shaving with a razor",
      "Clipping with electric clippers",
      "Chemical depilation",
      "Waxing"
    ],
    correctAnswer: 1
  },
  {
    id: 291,
    question: "Surgical draping serves to:",
    choices: [
      "Create a sterile field",
      "Provide patient privacy",
      "Maintain patient temperature",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 292,
    question: "When draping a patient, the drape should:",
    choices: [
      "Be placed from sterile to non-sterile areas",
      "Be placed from non-sterile to sterile areas",
      "Cover the entire patient",
      "Be secured with adhesive"
    ],
    correctAnswer: 0
  },
  {
    id: 293,
    question: "Fenestrated drapes have:",
    choices: [
      "Multiple layers",
      "An opening for the surgical site",
      "Adhesive edges",
      "Waterproof backing"
    ],
    correctAnswer: 1
  },
  {
    id: 294,
    question: "Once a drape is placed, it should:",
    choices: [
      "Be adjusted as needed",
      "Not be moved",
      "Be secured with clamps",
      "Be covered with additional drapes"
    ],
    correctAnswer: 1
  },
  {
    id: 295,
    question: "Towel clips used to secure drapes:",
    choices: [
      "Can be removed and repositioned",
      "Should remain in place once applied",
      "Are not necessary",
      "Should be changed frequently"
    ],
    correctAnswer: 1
  },
  {
    id: 296,
    question: "The purpose of hemostasis is to:",
    choices: [
      "Control bleeding",
      "Prevent infection",
      "Improve visualization",
      "Both A and C"
    ],
    correctAnswer: 3
  },
  {
    id: 297,
    question: "Mechanical methods of hemostasis include:",
    choices: [
      "Pressure",
      "Ligation",
      "Clamping",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 298,
    question: "Electrocautery achieves hemostasis by:",
    choices: [
      "Freezing tissue",
      "Burning tissue",
      "Cutting tissue",
      "Compressing tissue"
    ],
    correctAnswer: 1
  },
  {
    id: 299,
    question: "Topical hemostatic agents work by:",
    choices: [
      "Promoting clot formation",
      "Absorbing blood",
      "Providing pressure",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 300,
    question: "Gelfoam is an example of a:",
    choices: [
      "Mechanical hemostatic agent",
      "Chemical hemostatic agent",
      "Absorbable hemostatic agent",
      "Non-absorbable hemostatic agent"
    ],
    correctAnswer: 2
  },
  {
    id: 301,
    question: "Primary wound healing occurs when:",
    choices: [
      "Wound edges are approximated",
      "There is minimal tissue loss",
      "The wound is clean",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 302,
    question: "Secondary wound healing occurs when:",
    choices: [
      "The wound is left open",
      "There is significant tissue loss",
      "The wound heals by granulation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 303,
    question: "Factors that affect wound healing include:",
    choices: [
      "Age and nutrition",
      "Blood supply and oxygenation",
      "Infection and medications",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 304,
    question: "Dehiscence refers to:",
    choices: [
      "Wound infection",
      "Wound separation",
      "Excessive scarring",
      "Poor healing"
    ],
    correctAnswer: 1
  },
  {
    id: 305,
    question: "Evisceration is:",
    choices: [
      "Wound separation",
      "Protrusion of organs through the wound",
      "Wound infection",
      "Excessive bleeding"
    ],
    correctAnswer: 1
  },
  {
    id: 306,
    question: "Sutures are classified as:",
    choices: [
      "Absorbable or non-absorbable",
      "Natural or synthetic",
      "Monofilament or multifilament",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 307,
    question: "Absorbable sutures are broken down by:",
    choices: [
      "Enzymatic action",
      "Hydrolysis",
      "Both A and B",
      "Neither A nor B"
    ],
    correctAnswer: 2
  },
  {
    id: 308,
    question: "The strongest suture material is:",
    choices: [
      "Silk",
      "Nylon",
      "Steel",
      "Catgut"
    ],
    correctAnswer: 2
  },
  {
    id: 309,
    question: "Suture size is indicated by:",
    choices: [
      "Numbers (1, 2, 3)",
      "Zeros (0, 00, 000)",
      "Both A and B",
      "Letters (A, B, C)"
    ],
    correctAnswer: 2
  },
  {
    id: 310,
    question: "The smaller the suture diameter, the:",
    choices: [
      "Larger the number",
      "More zeros in the designation",
      "Weaker the suture",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 311,
    question: "Surgical needles are classified by:",
    choices: [
      "Point type",
      "Body shape",
      "Eye type",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 312,
    question: "Cutting needles are used for:",
    choices: [
      "Tough tissues",
      "Delicate tissues",
      "Vascular tissues",
      "All tissues"
    ],
    correctAnswer: 0
  },
  {
    id: 313,
    question: "Taper needles are used for:",
    choices: [
      "Tough tissues",
      "Delicate tissues",
      "Skin closure",
      "Fascial closure"
    ],
    correctAnswer: 1
  },
  {
    id: 314,
    question: "Swaged needles are:",
    choices: [
      "Attached to the suture",
      "Separate from the suture",
      "Reusable",
      "Stronger than eyed needles"
    ],
    correctAnswer: 0
  },
  {
    id: 315,
    question: "The most common suturing technique is:",
    choices: [
      "Running suture",
      "Interrupted suture",
      "Mattress suture",
      "Purse-string suture"
    ],
    correctAnswer: 1
  },
  {
    id: 316,
    question: "Surgical staples are used for:",
    choices: [
      "Speed of closure",
      "Consistent tension",
      "Reduced tissue handling",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 317,
    question: "Tissue adhesives are best used for:",
    choices: [
      "Deep wounds",
      "Superficial lacerations",
      "High-tension areas",
      "Infected wounds"
    ],
    correctAnswer: 1
  },
  {
    id: 318,
    question: "Surgical drains are used to:",
    choices: [
      "Remove fluid collections",
      "Prevent dead space",
      "Monitor for bleeding",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 319,
    question: "Passive drains work by:",
    choices: [
      "Gravity",
      "Capillary action",
      "Overflow",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 320,
    question: "Active drains work by:",
    choices: [
      "Gravity",
      "Suction",
      "Capillary action",
      "Pressure"
    ],
    correctAnswer: 1
  },
  {
    id: 321,
    question: "Surgical dressings serve to:",
    choices: [
      "Protect the wound",
      "Absorb drainage",
      "Provide compression",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 322,
    question: "The primary layer of a dressing should be:",
    choices: [
      "Absorbent",
      "Non-adherent",
      "Occlusive",
      "Transparent"
    ],
    correctAnswer: 1
  },
  {
    id: 323,
    question: "Pressure dressings are used to:",
    choices: [
      "Control bleeding",
      "Reduce swelling",
      "Prevent hematoma formation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 324,
    question: "Specimens should be:",
    choices: [
      "Labeled immediately",
      "Kept moist",
      "Handled gently",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 325,
    question: "Frozen section specimens are used for:",
    choices: [
      "Permanent diagnosis",
      "Immediate diagnosis",
      "Research purposes",
      "Teaching purposes"
    ],
    correctAnswer: 1
  },
  {
    id: 326,
    question: "Culture specimens should be:",
    choices: [
      "Kept at room temperature",
      "Refrigerated",
      "Sent immediately to the lab",
      "Fixed in formalin"
    ],
    correctAnswer: 2
  },
  {
    id: 327,
    question: "The chain of custody is important for:",
    choices: [
      "All specimens",
      "Legal specimens only",
      "Expensive specimens",
      "Large specimens"
    ],
    correctAnswer: 1
  },
  {
    id: 328,
    question: "Surgical instruments are classified as:",
    choices: [
      "Cutting, grasping, retracting",
      "Sharp, blunt, curved",
      "Large, medium, small",
      "Expensive, moderate, inexpensive"
    ],
    correctAnswer: 0
  },
  {
    id: 329,
    question: "Scissors are designed for:",
    choices: [
      "Cutting tissue",
      "Cutting sutures",
      "Dissection",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 330,
    question: "Forceps are used to:",
    choices: [
      "Grasp tissue",
      "Hold objects",
      "Provide traction",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 331,
    question: "Hemostats are used to:",
    choices: [
      "Control bleeding",
      "Grasp small vessels",
      "Clamp tissue",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 332,
    question: "Retractors are used to:",
    choices: [
      "Hold tissue aside",
      "Improve visualization",
      "Provide access",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 333,
    question: "Self-retaining retractors:",
    choices: [
      "Require manual holding",
      "Stay in place without assistance",
      "Are used for small incisions only",
      "Are not commonly used"
    ],
    correctAnswer: 1
  },
  {
    id: 334,
    question: "Needle holders are designed to:",
    choices: [
      "Hold suture needles securely",
      "Prevent needle damage",
      "Provide precise control",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 335,
    question: "Proper instrument handling includes:",
    choices: [
      "Gentle manipulation",
      "Appropriate storage",
      "Regular maintenance",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 336,
    question: "Instruments should be inspected for:",
    choices: [
      "Damage",
      "Cleanliness",
      "Function",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 337,
    question: "The neutral zone technique is used for:",
    choices: [
      "Instrument storage",
      "Safe passing of sharps",
      "Waste disposal",
      "Equipment setup"
    ],
    correctAnswer: 1
  },
  {
    id: 338,
    question: "Electrosurgery uses:",
    choices: [
      "High-frequency electrical current",
      "Low-frequency electrical current",
      "Direct current",
      "Battery power"
    ],
    correctAnswer: 0
  },
  {
    id: 339,
    question: "Monopolar electrosurgery requires:",
    choices: [
      "One electrode",
      "Two electrodes",
      "A grounding pad",
      "Both A and C"
    ],
    correctAnswer: 3
  },
  {
    id: 340,
    question: "Bipolar electrosurgery:",
    choices: [
      "Requires a grounding pad",
      "Uses two electrodes",
      "Is safer for pacemaker patients",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 341,
    question: "Laser safety requires:",
    choices: [
      "Eye protection",
      "Fire prevention measures",
      "Proper ventilation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 342,
    question: "Ultrasonic devices work by:",
    choices: [
      "Heat generation",
      "Mechanical vibration",
      "Electrical current",
      "Chemical reaction"
    ],
    correctAnswer: 1
  },
  {
    id: 343,
    question: "Pneumatic tourniquets are used to:",
    choices: [
      "Create a bloodless field",
      "Prevent air embolism",
      "Monitor blood pressure",
      "Assist ventilation"
    ],
    correctAnswer: 0
  },
  {
    id: 344,
    question: "Tourniquet pressure should be:",
    choices: [
      "As high as possible",
      "Based on patient's blood pressure",
      "The same for all patients",
      "Adjusted during surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 345,
    question: "Maximum tourniquet time for an arm is:",
    choices: [
      "30 minutes",
      "60 minutes",
      "90 minutes",
      "120 minutes"
    ],
    correctAnswer: 2
  },
  {
    id: 346,
    question: "Surgical counts should include:",
    choices: [
      "Sponges only",
      "Instruments only",
      "Sharps only",
      "All countable items"
    ],
    correctAnswer: 3
  },
  {
    id: 347,
    question: "Counts should be performed:",
    choices: [
      "Before the procedure",
      "Before closure",
      "At the end of the procedure",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 348,
    question: "If a count is incorrect:",
    choices: [
      "Document and continue",
      "Notify the surgeon",
      "Search for missing items",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 349,
    question: "X-rays may be taken if:",
    choices: [
      "The count is correct",
      "The count is incorrect",
      "The surgeon requests it",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 350,
    question: "Documentation of counts should include:",
    choices: [
      "Initial count",
      "Closing count",
      "Any discrepancies",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 351,
    question: "Fire safety in the OR requires attention to:",
    choices: [
      "Ignition sources",
      "Fuel sources",
      "Oxygen concentration",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 352,
    question: "The fire triangle consists of:",
    choices: [
      "Heat, fuel, oxygen",
      "Spark, gas, air",
      "Flame, smoke, heat",
      "Ignition, combustion, explosion"
    ],
    correctAnswer: 0
  },
  {
    id: 353,
    question: "If a fire occurs in the OR:",
    choices: [
      "Continue the procedure",
      "Stop the procedure and evacuate",
      "Use water to extinguish",
      "Open all doors and windows"
    ],
    correctAnswer: 1
  },
  {
    id: 354,
    question: "Electrical safety in the OR includes:",
    choices: [
      "Proper grounding",
      "Equipment inspection",
      "Avoiding liquid spills",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 355,
    question: "Radiation safety requires:",
    choices: [
      "Time limitation",
      "Distance from source",
      "Shielding",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 356,
    question: "Chemical safety includes:",
    choices: [
      "Proper storage",
      "Appropriate handling",
      "Adequate ventilation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 357,
    question: "Biological safety precautions include:",
    choices: [
      "Standard precautions",
      "Personal protective equipment",
      "Proper disposal methods",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 358,
    question: "Ergonomic principles in the OR help prevent:",
    choices: [
      "Musculoskeletal injuries",
      "Fatigue",
      "Repetitive strain injuries",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 359,
    question: "Quality assurance in surgery includes:",
    choices: [
      "Monitoring outcomes",
      "Identifying problems",
      "Implementing improvements",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 360,
    question: "Risk management focuses on:",
    choices: [
      "Preventing adverse events",
      "Reducing liability",
      "Improving patient safety",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 361,
    question: "Incident reporting should be:",
    choices: [
      "Timely",
      "Accurate",
      "Complete",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 362,
    question: "Root cause analysis is used to:",
    choices: [
      "Assign blame",
      "Identify system failures",
      "Punish individuals",
      "Reduce costs"
    ],
    correctAnswer: 1
  },
  {
    id: 363,
    question: "Continuous quality improvement involves:",
    choices: [
      "Regular assessment",
      "Data collection",
      "Process improvement",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 364,
    question: "Patient safety goals include:",
    choices: [
      "Correct patient identification",
      "Effective communication",
      "Medication safety",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 365,
    question: "The surgical safety checklist includes:",
    choices: [
      "Sign in",
      "Time out",
      "Sign out",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 366,
    question: "Informed consent requires:",
    choices: [
      "Explanation of procedure",
      "Discussion of risks",
      "Alternative options",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 367,
    question: "Patient confidentiality is protected by:",
    choices: [
      "HIPAA",
      "Professional ethics",
      "Institutional policies",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 368,
    question: "Advance directives include:",
    choices: [
      "Living wills",
      "Healthcare proxies",
      "DNR orders",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 369,
    question: "Professional liability can result from:",
    choices: [
      "Negligence",
      "Malpractice",
      "Breach of duty",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 370,
    question: "Scope of practice defines:",
    choices: [
      "What you can do",
      "What you cannot do",
      "Your responsibilities",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 371,
    question: "Continuing education is important for:",
    choices: [
      "Maintaining competency",
      "Learning new techniques",
      "Meeting requirements",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 372,
    question: "Professional organizations provide:",
    choices: [
      "Standards of practice",
      "Educational resources",
      "Certification programs",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 373,
    question: "Certification demonstrates:",
    choices: [
      "Minimum competency",
      "Professional commitment",
      "Knowledge and skills",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 374,
    question: "Teamwork in surgery requires:",
    choices: [
      "Communication",
      "Cooperation",
      "Mutual respect",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 375,
    question: "Effective communication includes:",
    choices: [
      "Clear speaking",
      "Active listening",
      "Appropriate feedback",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 376,
    question: "Conflict resolution involves:",
    choices: [
      "Identifying the problem",
      "Finding solutions",
      "Implementing changes",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 377,
    question: "Leadership qualities include:",
    choices: [
      "Integrity",
      "Accountability",
      "Vision",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 378,
    question: "Stress management techniques include:",
    choices: [
      "Time management",
      "Relaxation methods",
      "Physical exercise",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 379,
    question: "Work-life balance is important for:",
    choices: [
      "Personal health",
      "Job performance",
      "Career longevity",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 380,
    question: "Technology in surgery includes:",
    choices: [
      "Robotic systems",
      "Imaging equipment",
      "Computer navigation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 381,
    question: "Minimally invasive surgery offers:",
    choices: [
      "Smaller incisions",
      "Faster recovery",
      "Less pain",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 382,
    question: "Future trends in surgery may include:",
    choices: [
      "Artificial intelligence",
      "Nanotechnology",
      "Personalized medicine",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 383,
    question: "Evidence-based practice involves:",
    choices: [
      "Research findings",
      "Clinical expertise",
      "Patient preferences",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 384,
    question: "Research in surgery helps:",
    choices: [
      "Improve outcomes",
      "Develop new techniques",
      "Advance knowledge",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 385,
    question: "Global surgery addresses:",
    choices: [
      "Healthcare disparities",
      "Access to care",
      "Resource limitations",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 386,
    question: "Sustainability in healthcare includes:",
    choices: [
      "Environmental responsibility",
      "Cost effectiveness",
      "Resource conservation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 387,
    question: "Patient advocacy involves:",
    choices: [
      "Protecting patient rights",
      "Ensuring quality care",
      "Supporting patient needs",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 388,
    question: "Cultural competency requires:",
    choices: [
      "Understanding differences",
      "Respecting diversity",
      "Adapting care approaches",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 389,
    question: "Healthcare disparities can be addressed through:",
    choices: [
      "Education",
      "Policy changes",
      "Community outreach",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 390,
    question: "The future of surgical technology will likely include:",
    choices: [
      "More automation",
      "Better integration",
      "Enhanced precision",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 391,
    question: "When should surgical counts be performed?",
    choices: [
      "Only at the beginning of surgery",
      "Before incision, before closure, and at skin closure",
      "Only when requested by the surgeon",
      "At the end of surgery only"
    ],
    correctAnswer: 1
  },
  {
    id: 392,
    question: "What is the correct action if a sponge is missing during the count?",
    choices: [
      "Continue with surgery and document the discrepancy",
      "Immediately notify the surgeon and search for the sponge",
      "Take an X-ray after closing",
      "Ignore it if the patient is stable"
    ],
    correctAnswer: 1
  },
  {
    id: 393,
    question: "Which type of sponge is most commonly used for general surgery?",
    choices: [
      "Peanut sponges",
      "Raytec sponges",
      "Tonsil sponges",
      "Kitner sponges"
    ],
    correctAnswer: 1
  },
  {
    id: 394,
    question: "What makes a sponge radiopaque?",
    choices: [
      "Special fabric weave",
      "Barium sulfate strip",
      "Metallic threads",
      "Chemical coating"
    ],
    correctAnswer: 1
  },
  {
    id: 395,
    question: "When is it appropriate to break scrub?",
    choices: [
      "When feeling tired",
      "When contamination occurs",
      "When the case is taking too long",
      "When asked to get supplies"
    ],
    correctAnswer: 1
  },
  {
    id: 396,
    question: "When handing utility drapes to the surgeon, the correct order is:",
    choices: [
      "Superior, inferior, same side, opposite side",
      "Same side, superior, inferior, opposite side", 
      "Same side, superior, inferior",
      "Opposite side, inferior, superior, same side"
    ],
    correctAnswer: 2
  },
  {
    id: 397,
    question: "What should you do if a drape sheet is improperly placed?",
    choices: [
      "Adjust it carefully to avoid contamination",
      "Leave it in place if the area is not exposed",
      "Have the circulator remove it and re-prep and drape the patient",
      "Cover it with another drape"
    ],
    correctAnswer: 2
  },
  {
    id: 398,
    question: "Once a towel clip has been fastened through a drape, it:",
    choices: [
      "Can be removed and repositioned if necessary",
      "Must remain until the end of the procedure to avoid contamination",
      "Should be removed halfway through the case",
      "Should be tightened periodically"
    ],
    correctAnswer: 1
  },
  {
    id: 399,
    question: "If a hair is found on a sterile drape, it should:",
    choices: [
      "Be left alone unless it enters the incision",
      "Be removed with a clamp and the area covered with another drape",
      "Be brushed off with sterile gloves",
      "Be ignored if it is not near the sterile field"
    ],
    correctAnswer: 1
  },
  {
    id: 400,
    question: "When securing drapes, nonperforating towel clips are preferred because:",
    choices: [
      "They are faster to use",
      "They avoid making holes that can compromise sterility",
      "They are more sterile than perforating clips",
      "They are easier to remove"
    ],
    correctAnswer: 1
  },
  {
    id: 401,
    question: "Which of the following is NOT a purpose of dressing a wound?",
    choices: [
      "Immobilize the area",
      "Collect drainage",
      "Prevent scar formation",
      "Protect the wound"
    ],
    correctAnswer: 2
  },
  {
    id: 402,
    question: "The wound healing that occurs when a wound is left open and heals by granulation tissue is called:",
    choices: [
      "Primary intention",
      "Secondary closure",
      "Third intention",
      "Delayed primary"
    ],
    correctAnswer: 1
  },
  {
    id: 403,
    question: "A wound with protrusion of abdominal contents is called:",
    choices: [
      "Dehiscence",
      "Evisceration",
      "Fistula",
      "Sinus tract"
    ],
    correctAnswer: 1
  },
  {
    id: 404,
    question: "Which biologic dressing is manufactured from human fibroblast cells?",
    choices: [
      "Integra",
      "Dermagraft",
      "Xenograft",
      "Porcine"
    ],
    correctAnswer: 1
  },
  {
    id: 405,
    question: "Which type of wound dressing consists of three layers?",
    choices: [
      "One-layer",
      "Two-layer",
      "Three-layer",
      "Pressure-only"
    ],
    correctAnswer: 2
  },
  {
    id: 406,
    question: "The tertiary layer of a three-layer dressing is primarily used to:",
    choices: [
      "Absorb drainage",
      "Secure the dressing",
      "Be in direct contact with the wound",
      "Apply medication"
    ],
    correctAnswer: 1
  },
  {
    id: 407,
    question: "When frequent dressing changes are expected, which securing method resembling a corset is used?",
    choices: [
      "Montgomery straps",
      "Tube gauze",
      "Stockinette",
      "Tape"
    ],
    correctAnswer: 0
  },
  {
    id: 408,
    question: "Which burn degree extends through the epidermis and dermis with a white pearly appearance?",
    choices: [
      "First-degree",
      "Second-degree",
      "Third-degree",
      "Fourth-degree"
    ],
    correctAnswer: 2
  },
  {
    id: 409,
    question: "According to the rule of nines, the anterior trunk of the body represents what percent of body surface area?",
    choices: [
      "4.5%",
      "9%",
      "18%",
      "36%"
    ],
    correctAnswer: 2
  },
  {
    id: 410,
    question: "Which skin prep solution has a residual effect lasting 5–6 hours and is ototoxic?",
    choices: [
      "Povidone-iodine",
      "Chlorhexidine gluconate",
      "Alcohol",
      "DuraPrep"
    ],
    correctAnswer: 1
  },
  {
    id: 411,
    question: "When prepping for surgery, which area is considered contaminated and prepped last?",
    choices: [
      "Abdomen",
      "Face",
      "Umbilicus",
      "Neck"
    ],
    correctAnswer: 2
  },
  {
    id: 412,
    question: "What is the first drape handed to the surgeon when draping with utility drapes?",
    choices: [
      "Superior",
      "Inferior",
      "Same side as surgeon",
      "Opposite side"
    ],
    correctAnswer: 2
  },
  {
    id: 413,
    question: "Which statement is true about towel clips?",
    choices: [
      "They can be removed and reused at any time",
      "Once placed, they stay until the end of the case",
      "They are perforating and must pierce the drape",
      "They are never used on drapes"
    ],
    correctAnswer: 1
  },
  {
    id: 414,
    question: "Which specimen type must be sent immediately to pathology in a dry container?",
    choices: [
      "Permanent",
      "Frozen section",
      "Urine",
      "Cytologic"
    ],
    correctAnswer: 1
  },
  {
    id: 415,
    question: "What is the proper way to handle a bullet specimen?",
    choices: [
      "With forceps",
      "With fingers (gloved hands)",
      "With a towel",
      "On a sponge"
    ],
    correctAnswer: 1
  },
  {
    id: 416,
    question: "What color does a gram-positive organism stain?",
    choices: [
      "Red",
      "Pink",
      "Blue/purple",
      "Green"
    ],
    correctAnswer: 2
  },
  {
    id: 417,
    question: "What is the first step if the count is incorrect during a surgical procedure?",
    choices: [
      "Take an x-ray",
      "Document the count",
      "Notify the surgeon",
      "Close the incision"
    ],
    correctAnswer: 2
  },
  {
    id: 418,
    question: "Which sponge is a small, radiopaque rolled gauze used for blunt dissection?",
    choices: [
      "Raytec",
      "Cottonoid",
      "Peanut",
      "Tonsil"
    ],
    correctAnswer: 2
  },
  {
    id: 419,
    question: "Which sponge is commonly used during T&A surgery?",
    choices: [
      "Raytec",
      "Tonsil",
      "Peanut",
      "Kittner"
    ],
    correctAnswer: 1
  },
  {
    id: 420,
    question: "Which doctrine applies when a foreign object is left inside the patient?",
    choices: [
      "Stare decisis",
      "Res ipsa loquitur",
      "Caveat emptor",
      "Non compos mentis"
    ],
    correctAnswer: 1
  },
  {
    id: 421,
    question: "What is the correct sequence for performing a closing count?",
    choices: [
      "Back table → Mayo stand → Surgical field",
      "Surgical field → Mayo stand → Back table",
      "Mayo stand → Surgical field → Back table",
      "Surgical field → Back table → Mayo stand"
    ],
    correctAnswer: 1
  },
  {
    id: 422,
    question: "When a blade breaks, what should happen?",
    choices: [
      "Discard the broken blade",
      "Count and isolate all parts",
      "Use it for skin only",
      "Hand it off without isolation"
    ],
    correctAnswer: 1
  },
  {
    id: 423,
    question: "When prepping for surgery, which principle applies?",
    choices: [
      "Dirty to clean",
      "Clean to dirty",
      "Distal to proximal",
      "Random"
    ],
    correctAnswer: 1
  },
  {
    id: 424,
    question: "What should be used to pass off a specimen from the sterile field?",
    choices: [
      "Surgical sponge",
      "Basin",
      "Telfa",
      "Sterile towel"
    ],
    correctAnswer: 2
  },
  {
    id: 425,
    question: "Which instrument is used to collect specimens from the lungs or stomach?",
    choices: [
      "Lukens tube",
      "Thoracentesis needle",
      "CSF tap",
      "Smear brush"
    ],
    correctAnswer: 0
  }
];
