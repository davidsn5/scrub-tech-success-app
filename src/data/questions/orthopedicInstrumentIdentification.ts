export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const orthopedicInstrumentIdentificationQuestions: Question[] = [
  {
    id: 1,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Freer Elevator",
      "Key Periosteal Elevator",
      "Cobb Elevator",
      "Langenbeck Periosteal Elevator"
    ],
    correctAnswer: 1,
    explanation: "The Key periosteal elevator is a robust, wide-bladed elevator used to lift periosteum off bone surfaces, providing excellent leverage in orthopedic exposure.",
    image: "/lovable-uploads/key-periosteal-elevator.png"
  },
  {
    id: 2,
    question: "Identify this orthopedic instrument used for hardware and wire handling:",
    choices: [
      "Needle-Nose Pliers",
      "Wire Twister",
      "Plate Bender",
      "Hex Orthopedic Screwdriver"
    ],
    correctAnswer: 0,
    explanation: "Needle-nose pliers have long, tapered jaws for grasping, bending, and manipulating wire and small orthopedic hardware with precision in confined spaces.",
    image: "/lovable-uploads/needle-nose-pliers.png"
  },
  {
    id: 3,
    question: "Identify this orthopedic cutting instrument:",
    choices: [
      "Wire Cutter",
      "Large Bone Pin Cutter",
      "Bolt Cutter",
      "Cable Cutter"
    ],
    correctAnswer: 1,
    explanation: "A large bone pin cutter is a heavy-duty instrument designed to cut Steinmann pins, K-wires, and orthopedic rods, delivering powerful leverage at the jaws.",
    image: "/lovable-uploads/large-bone-pin-cutter.png"
  },
  {
    id: 4,
    question: "Identify this neurosurgical retractor:",
    choices: [
      "Cerebellar Retractor",
      "Gelpi Retractor",
      "Weitlaner Retractor",
      "Adson-Beckman Retractor"
    ],
    correctAnswer: 0,
    explanation: "The cerebellar retractor is a self-retaining retractor with delicate, curved blades used in neurosurgical procedures to gently hold tissue apart.",
    image: "/lovable-uploads/cerebellar-retractor.png"
  },
  {
    id: 5,
    question: "Identify this neurosurgical rongeur:",
    choices: [
      "Leksell Rongeur",
      "Cushing Intervertebral Disc Rongeur",
      "Kerrison Laminectomy Rongeur",
      "Pituitary Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Cushing intervertebral disc rongeur has long, slender shafts with cupped jaws designed to remove disc material and soft tissue in spinal procedures.",
    image: "/lovable-uploads/cushing-intervertebral-disc-rongeur.png"
  }
];