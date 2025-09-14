export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const plasticsInstrumentQuestions: Question[] = [
  {
    id: 1,
    question: "What is this circular instrument with serrated edges used for in plastic surgery?",
    choices: [
      "Freeman Areolar Cutter",
      "Dermal Punch",
      "Circular Retractor",
      "Tissue Expander"
    ],
    correctAnswer: 0,
    explanation: "The Freeman Areolar Cutter is a specialized instrument used to create precise circular incisions around the areola during breast reconstruction and reduction procedures.",
    image: "/lovable-uploads/freeman-areolar-cutter.png"
  },
  {
    id: 2,
    question: "What type of scissors are these curved instruments designed for?",
    choices: [
      "Metzenbaum Scissors",
      "Joseph Scissors",
      "Iris Scissors",
      "Mayo Scissors"
    ],
    correctAnswer: 1,
    explanation: "Joseph Scissors are curved scissors specifically designed for plastic and reconstructive surgery procedures, particularly useful in facial and nasal procedures.",
    image: "/lovable-uploads/joseph-scissors.png"
  },
  {
    id: 3,
    question: "What are these thin, probe-like instruments with black handles used for?",
    choices: [
      "Electrocautery Tips",
      "Nerve Stimulators", 
      "Liposuction Cannula",
      "Injection Needles"
    ],
    correctAnswer: 2,
    explanation: "Liposuction cannulas are hollow tubes used to suction out fat during liposuction procedures. They come in various sizes for different areas of the body.",
    image: "/lovable-uploads/liposuction-cannula.png"
  },
  {
    id: 4,
    question: "What is this hook-shaped instrument called?",
    choices: [
      "Nerve Hook",
      "Joseph Single Hooks",
      "Skin Hook",
      "Vessel Loop"
    ],
    correctAnswer: 1,
    explanation: "Joseph Single Hooks are delicate retraction instruments used in plastic surgery for gently lifting and retracting tissues, particularly in nasal and facial procedures.",
    image: "/lovable-uploads/joseph-single-hooks.png"
  },
  {
    id: 5,
    question: "What are these forceps with multiple holes designed for?",
    choices: [
      "Adson Forceps",
      "Russian Forceps",
      "Bishop Harmon Forceps",
      "DeBakey Forceps"
    ],
    correctAnswer: 2,
    explanation: "Bishop Harmon Forceps are specialized tissue forceps with fenestrations (holes) that provide a secure grip while minimizing tissue trauma.",
    image: "/lovable-uploads/bishop-harmon-forceps.png"
  },
  {
    id: 6,
    question: "What is this yellow-handled retractor specifically designed for?",
    choices: [
      "Abdominal Retractor",
      "Tebbetts Breast Retractor",
      "Chest Wall Retractor", 
      "Rib Spreader"
    ],
    correctAnswer: 1,
    explanation: "The Tebbetts Breast Retractor is a specialized retractor designed for breast augmentation and reconstruction procedures, providing optimal exposure while protecting surrounding tissues.",
    image: "/lovable-uploads/tebbetts-breast-retractor.png"
  },
  {
    id: 7,
    question: "What is this mechanical device used for in skin grafting procedures?",
    choices: [
      "Skin Stapler",
      "Dermamesher Graft Expander",
      "Tissue Crimper",
      "Skin Perforator"
    ],
    correctAnswer: 1,
    explanation: "The Dermamesher Graft Expander creates multiple perforations in skin grafts to increase their surface area coverage, allowing the graft to expand and cover larger areas.",
    image: "/lovable-uploads/dermamesher-graft-expander.png"
  },
  {
    id: 8,
    question: "What is this double-ended hook instrument called?",
    choices: [
      "Double Skin Hook",
      "Freer Double Skin Hooks",
      "Bilateral Retractor",
      "Twin Hook Elevator"
    ],
    correctAnswer: 1,
    explanation: "Freer Double Skin Hooks are specialized retraction instruments with hooks on both ends, used for gentle tissue retraction and positioning of delicate skin and soft tissues.",
    image: "/lovable-uploads/freer-double-skin-hooks.png"
  },
  {
    id: 9,
    question: "Which instrument is specifically designed for creating circular incisions in breast procedures?",
    choices: [
      "Joseph Scissors",
      "Freeman Areolar Cutter", 
      "Bishop Harmon Forceps",
      "Tebbetts Breast Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Freeman Areolar Cutter is specifically designed to create precise circular incisions around the areola during breast reconstruction and reduction procedures."
  }
];