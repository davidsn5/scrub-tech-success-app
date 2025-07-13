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
    question: "Which laser is preferred for bronchoscopies?",
    choices: ["Nd:YAG", "CO₂", "Argon", "KTP"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "A fetoscopy is used to:",
    choices: ["Repair hernia", "Visualize fetus", "Resect colon", "Remove gallstones"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the purpose of ERCP?",
    choices: ["View uterus", "Repair aneurysm", "Visualize bile ducts", "Resect prostate"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What condition can hysteroscopy treat?",
    choices: ["Liver tumors", "Menorrhagia", "Hydrocephalus", "Herniated disc"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Sigmoidoscopy is performed to view the:",
    choices: ["Bladder", "Rectum and sigmoid colon", "Esophagus", "Uterus"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which endoscopic procedure removes foreign bodies from the tracheobronchial tree?",
    choices: ["Esophagoscopy", "Bronchoscopy", "Gastroscopy", "Cystoscopy"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is VATS?",
    choices: ["Video-assisted thoracoscopic surgery", "Vascular aneurysm treatment", "Video imaging of the stomach", "Vocal cord biopsy"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "What is a ventriculoscopy used to treat?",
    choices: ["Varices", "Hydrocephalus", "Herniated disc", "Sinusitis"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What is chromopertubation used for?",
    choices: ["Determine tubal patency", "Remove fibroids", "Biopsy of the uterus", "Repair hernia"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which endoscope cleaning step checks for holes?",
    choices: ["Preclean", "Leak test", "Sterilization", "Enzymatic wash"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Which sterilization method is suitable for scopes sensitive to heat?",
    choices: ["Steam", "ETO", "Autoclave", "Incineration"],
    correctAnswer: 1
  },

  // Chapter 15: Minimally Invasive Applications
  {
    id: 12,
    question: "MIS stands for:",
    choices: ["Minimally invasive surgery", "Minimally instructed surgery", "Medical invasive surgery", "Multi-instrument surgery"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "The trocar is removed and what remains in place?",
    choices: ["Port", "Cannula", "Fiberoptic light", "Insufflator"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Blunt trocar is also known as:",
    choices: ["Veress needle", "Hasson", "Port", "Balloon dissector"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "Fiberoptic light cords should:",
    choices: ["Be tightly coiled", "Be handled carefully and loosely coiled", "Be sterilized in ETO", "Be soaked in saline"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Insufflation for laparoscopy uses:",
    choices: ["Oxygen", "Nitrogen", "CO₂", "Helium"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "What is an advantage of MIS surgery?",
    choices: ["Increased trauma", "Quick recovery", "More bleeding", "Increased pain"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "What is a disadvantage of MIS surgery?",
    choices: ["Reduced risk of adhesions", "Gas embolism risk", "Improved vision", "Lower training needed"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Maintaining normothermia is important because CO₂:",
    choices: ["Raises body temperature", "Has no effect", "Lowers body temperature", "Dehydrates tissue"],
    correctAnswer: 2
  },
  {
    id: 20,
    question: "Which part of a telescope should you always hold?",
    choices: ["Shaft", "Head", "Lens", "Base"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "White balancing:",
    choices: ["Is optional", "Evens brightness and improves image", "Is harmful to the scope", "Requires a black background"],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Pixels on the camera chip determine:",
    choices: ["Weight", "Clarity", "Length", "Heat"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Which instrument is inserted through a cannula to view the operative field in MIS?",
    choices: ["Fiberoptic telescope", "Rigid needle", "Blunt trocar", "Laparoscope"],
    correctAnswer: 3
  },
  {
    id: 24,
    question: "Why is CO₂ used for insufflation?",
    choices: ["It disinfects the cavity", "It is cool and non-flammable", "It improves oxygenation", "It helps clot blood"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "What is one disadvantage of MIS surgery?",
    choices: ["Excessive trauma", "Quick recovery", "Risk of adhesions", "Reduced pain"],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "Which device prevents fogging on a laparoscope lens?",
    choices: ["Insufflator", "Defogger", "Veress needle", "Biopsy forceps"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Why is white balancing a scope important?",
    choices: ["To sterilize the scope", "To adjust color and improve image quality", "To prevent fogging", "To protect mucous membranes"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "The purpose of an endocoupler is to:",
    choices: ["Inflate the cavity", "Connect the camera to the telescope", "Remove debris", "Filter smoke"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "What is the function of a morcellator?",
    choices: ["Expand tissue", "Reduce large specimens into small pieces", "Remove fluid", "Suture tissue"],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "What is capacitive coupling?",
    choices: ["Direct contact burn", "Heat damage from sterilization", "Stray current burn", "Smoke inhalation"],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "What is the most common robot used in surgery?",
    choices: ["Zeus", "Intuitive Da Vinci", "Telchir", "Telepresence"],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "What is a manipulator?",
    choices: ["The surgeon's controller", "The robotic arm", "The console", "The endoscope"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "What does yaw describe?",
    choices: ["Up and down movement", "Insertion", "Right and left movement", "Open and close"],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "What is telesurgery?",
    choices: ["Teaching surgery remotely", "Surgery performed at a distance", "Biopsy using a robot", "Video recording of a surgery"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What are micromanipulators?",
    choices: ["Robotic fingers", "Endowrist tips", "Devices translating console commands to robotic movement", "High-definition cameras"],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "What does sensitivity in robotics refer to?",
    choices: ["Ability to differentiate objects", "Ability to detect weak signals", "Ability to rotate", "Ability to see in color"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "Which robot component houses the surgeon?",
    choices: ["Patient-side cart", "Console", "Manipulator", "Endowrist"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "Why is carbon dioxide preferred for pneumoperitoneum?",
    choices: ["It cools and is absorbed by the body", "It sterilizes the cavity", "It is highly flammable", "It improves blood oxygenation"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "What procedure removes a kidney laparoscopically?",
    choices: ["Nephrectomy", "Cystectomy", "TURP", "TURB"],
    correctAnswer: 0
  },
  {
    id: 40,
    question: "What is radiofrequency ablation used for?",
    choices: ["Varicose veins", "Uterine fibroids", "Hernias", "Aneurysms"],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "What does MIDCAB stand for?",
    choices: ["Minimally invasive coronary artery bypass", "Minimally invasive colon and bladder", "Manual incision coronary artery bypass", "Mechanical internal cardiac ablation"],
    correctAnswer: 0
  }
];