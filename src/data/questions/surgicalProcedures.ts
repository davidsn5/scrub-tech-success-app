export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  // Chapter 14: Diagnostic Procedures
  {
    id: 1,
    question: "The C-arm provides:",
    choices: ["Fluoroscopy", "CT imaging", "MRI imaging", "Ultrasound"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Image intensifier converts:",
    choices: ["X-rays to light", "Light to X-rays", "Sound to image", "Heat to image"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "Lead aprons protect against:",
    choices: ["Heat", "Infection", "Radiation", "Chemicals"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "ALARA principle means:",
    choices: [
      "Always Low And Reasonable Amounts",
      "As Low As Reasonably Achievable",
      "All Limits Are Reasonably Applied",
      "Always Limit All Radiation Activities"
    ],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Radiation exposure is measured in:",
    choices: ["Watts", "Joules", "Rems", "Degrees"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Dosimeter badges measure:",
    choices: ["Temperature", "Radiation exposure", "Time", "Distance"],
    correctAnswer: 1
  },

  // Chapter 15: Minimally Invasive Applications
  {
    id: 7,
    question: "MIS stands for:",
    choices: [
      "Minimally invasive surgery",
      "Minimally instructed surgery",
      "Medical invasive surgery",
      "Multi-instrument surgery"
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "The trocar is removed and what remains in place?",
    choices: ["Port", "Cannula", "Fiberoptic light", "Insufflator"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Blunt trocar is also known as:",
    choices: ["Veress needle", "Hasson", "Port", "Balloon dissector"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Fiberoptic light cords should:",
    choices: [
      "Be tightly coiled",
      "Be handled carefully and loosely coiled",
      "Be sterilized in ETO",
      "Be soaked in saline"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Insufflation for laparoscopy uses:",
    choices: ["Oxygen", "Nitrogen", "CO₂", "Helium"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "What is an advantage of MIS surgery?",
    choices: ["Increased trauma", "Quick recovery", "More bleeding", "Increased pain"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "What is a disadvantage of MIS surgery?",
    choices: [
      "Reduced risk of adhesions",
      "Gas embolism risk",
      "Improved vision",
      "Lower training needed"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Maintaining normothermia is important because CO₂:",
    choices: [
      "Raises body temperature",
      "Has no effect",
      "Lowers body temperature",
      "Dehydrates tissue"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Which part of a telescope should you always hold?",
    choices: ["Shaft", "Head", "Lens", "Base"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "White balancing:",
    choices: [
      "Is optional",
      "Evens brightness and improves image",
      "Is harmful to the scope",
      "Requires a black background"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Pixels on the camera chip determine:",
    choices: ["Weight", "Clarity", "Length", "Heat"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which instrument is inserted through a cannula to view the operative field in MIS?",
    choices: ["Fiberoptic telescope", "Rigid needle", "Blunt trocar", "Laparoscope"],
    correctAnswer: 3
  },
  {
    id: 19,
    question: "Why is CO₂ used for insufflation?",
    choices: [
      "It disinfects the cavity",
      "It is cool and non-flammable",
      "It improves oxygenation",
      "It helps clot blood"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which device prevents fogging on a laparoscope lens?",
    choices: ["Insufflator", "Defogger", "Veress needle", "Biopsy forceps"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "Why is white balancing a scope important?",
    choices: [
      "To sterilize the scope",
      "To adjust color and improve image quality",
      "To prevent fogging",
      "To protect mucous membranes"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "The purpose of an endocoupler is to:",
    choices: ["Inflate the cavity", "Connect the camera to the telescope", "Remove debris", "Filter smoke"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "What is the function of a morcellator?",
    choices: [
      "Expand tissue",
      "Reduce large specimens into small pieces",
      "Remove fluid",
      "Suture tissue"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "Which endoscope cleaning step checks for holes?",
    choices: ["Preclean", "Leak test", "Sterilization", "Enzymatic wash"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "Which sterilization method is suitable for scopes sensitive to heat?",
    choices: ["Steam", "ETO", "Autoclave", "Incineration"],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "What is capacitive coupling?",
    choices: [
      "Direct contact burn",
      "Heat damage from sterilization",
      "Stray current burn",
      "Smoke inhalation"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "Which laser is preferred for bronchoscopies?",
    choices: ["Nd:YAG", "CO₂", "Argon", "KTP"],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "A fetoscopy is used to:",
    choices: ["Repair hernia", "Visualize fetus", "Resect colon", "Remove gallstones"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "What is the purpose of ERCP?",
    choices: ["View uterus", "Repair aneurysm", "Visualize bile ducts", "Resect prostate"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "What condition can hysteroscopy treat?",
    choices: ["Liver tumors", "Menorrhagia", "Hydrocephalus", "Herniated disc"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "Sigmoidoscopy is performed to view the:",
    choices: ["Bladder", "Rectum and sigmoid colon", "Esophagus", "Uterus"],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "Which endoscopic procedure removes foreign bodies from the tracheobronchial tree?",
    choices: ["Esophagoscopy", "Bronchoscopy", "Gastroscopy", "Cystoscopy"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "What is VATS?",
    choices: [
      "Video-assisted thoracoscopic surgery",
      "Vascular aneurysm treatment",
      "Video imaging of the stomach",
      "Vocal cord biopsy"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "What is the most common robot used in surgery?",
    choices: ["Zeus", "Intuitive Da Vinci", "Telchir", "Telepresence"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is a manipulator?",
    choices: [
      "The surgeon's controller",
      "The robotic arm",
      "The console",
      "The endoscope"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "What does yaw describe?",
    choices: [
      "Up and down movement",
      "Insertion",
      "Right and left movement",
      "Open and close"
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "What is telesurgery?",
    choices: [
      "Teaching surgery remotely",
      "Surgery performed at a distance",
      "Biopsy using a robot",
      "Video recording of a surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "What are micromanipulators?",
    choices: [
      "Robotic fingers",
      "Endowrist tips",
      "Devices translating console commands to robotic movement",
      "High-definition cameras"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "What does sensitivity in robotics refer to?",
    choices: [
      "Ability to differentiate objects",
      "Ability to detect weak signals",
      "Ability to rotate",
      "Ability to see in color"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Which robot component houses the surgeon?",
    choices: ["Patient-side cart", "Console", "Manipulator", "Endowrist"],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "Why is carbon dioxide preferred for pneumoperitoneum?",
    choices: [
      "It cools and is absorbed by the body",
      "It sterilizes the cavity",
      "It is highly flammable",
      "It improves blood oxygenation"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "What is chromopertubation used for?",
    choices: [
      "Determine tubal patency",
      "Remove fibroids",
      "Biopsy of the uterus",
      "Repair hernia"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "What procedure removes a kidney laparoscopically?",
    choices: ["Nephrectomy", "Cystectomy", "TURP", "TURB"],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "What is a ventriculoscopy used to treat?",
    choices: ["Varices", "Hydrocephalus", "Herniated disc", "Sinusitis"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "What is radiofrequency ablation used for?",
    choices: ["Varicose veins", "Uterine fibroids", "Hernias", "Aneurysms"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "What does MIDCAB stand for?",
    choices: [
      "Minimally invasive coronary artery bypass",
      "Minimally invasive colon and bladder",
      "Manual incision coronary artery bypass",
      "Mechanical internal cardiac ablation"
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "What is the main concern with laser plume during surgery?",
    choices: [
      "Electrical burns",
      "Cancer-causing fumes",
      "Cells in the smoke",
      "High temperatures"
    ],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "Which type of filter should be used with suction for laser plume?",
    choices: ["HEPA with charcoal", "Water-only filter", "UV filter", "HEPA-only"],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "The ESU smoke is less dangerous than laser smoke because:",
    choices: [
      "It has no odor",
      "It contains fewer cellular particles",
      "It cannot cause respiratory irritation",
      "It is filtered automatically"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "What is the main risk of latex allergy?",
    choices: ["Eye damage", "Skin rash to respiratory arrest", "Cancer", "Hair loss"],
    correctAnswer: 1
  },

  // Additional surgical procedures questions would continue here for other surgical specialties
];
