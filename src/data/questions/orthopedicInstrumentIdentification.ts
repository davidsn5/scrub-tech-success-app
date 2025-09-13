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
      "Rake Retractor",
      "Hohmann Retractor",
      "Army-Navy Retractor",
      "Volkmann Retractor"
    ],
    correctAnswer: 0,
    explanation: "A rake retractor is a multi-pronged retractor designed for retracting soft tissues and muscle during orthopedic procedures. It features multiple sharp prongs (typically 3-6) that provide secure tissue grip and excellent exposure of underlying bone structures.",
    image: "/lovable-uploads/rake-retractor.png"
  },
  {
    id: 2,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Weitlaner Retractor",
      "Gelpi Retractor",
      "Self-Retaining Retractor",
      "Finochietto Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Gelpi retractor is a self-retaining retractor featuring two curved arms with sharp hooks and a spring-loaded ratcheting mechanism. This design allows the retractor to maintain constant tension and hold tissues apart without manual assistance.",
    image: "/lovable-uploads/gelpi-retractor.png"
  },
  {
    id: 3,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Key Elevator",
      "Freer Elevator",
      "Cobb Elevator",
      "Langenbeck Periosteal Elevator"
    ],
    correctAnswer: 2,
    explanation: "The Cobb elevator is a specialized periosteal elevator commonly used in spinal surgery and orthopedic procedures. It features a flat, curved blade designed for lifting and separating the periosteum from bone surfaces, particularly along the spine.",
    image: "/lovable-uploads/cobb-elevator.png"
  },
  {
    id: 4,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Wire Cutter",
      "Bone Cutter",
      "Pin Cutter",
      "Cable Cutter"
    ],
    correctAnswer: 0,
    explanation: "Orthopedic wire cutters are specialized cutting instruments designed for cutting surgical wires, pins, and small orthopedic hardware. They feature strong, sharp cutting jaws with leverage handles that provide powerful cutting force for metallic materials.",
    image: "/lovable-uploads/wire-cutter.png"
  },
  {
    id: 5,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Gelpi Retractor",
      "Weitlaner Retractor",
      "Balfour Retractor",
      "Richardson Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Weitlaner retractor is a self-retaining retractor featuring multiple sharp prongs or teeth on curved arms with a ratcheting mechanism. It maintains tension and holds tissues apart without manual assistance, making it ideal for superficial orthopedic procedures.",
    image: "/lovable-uploads/weitlaner-retractor.png"
  },
  {
    id: 6,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Richardson Retractor",
      "Hohmann Retractor",
      "Deaver Retractor",
      "Army-Navy Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Hohmann retractor is a specialized orthopedic retractor featuring a curved or angled blade designed for retracting muscles and soft tissues away from bone surfaces. Available in various angles and blade widths, these retractors provide excellent exposure of bony structures during joint surgeries.",
    image: "/lovable-uploads/hohmann-retractor.png"
  },
  {
    id: 7,
    question: "Identify this neurosurgical instrument:",
    choices: [
      "Jansen Rongeur",
      "Pituitary Rongeur",
      "Leksell Rongeur",
      "Kerrison Rongeur"
    ],
    correctAnswer: 1,
    explanation: "A pituitary rongeur is a specialized rongeur with an elongated shaft and small, delicate cutting jaws designed for removing tissue in confined spaces, particularly during neurosurgical and endoscopic procedures. The long, angled design allows access to deep surgical sites through small openings.",
    image: "/lovable-uploads/pituitary-rongeur.png"
  },
  {
    id: 8,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Jansen Rongeur",
      "Ruskin Rongeur",
      "Duck Bill Rongeur",
      "Leksell Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Ruskin rongeur is a specialized bone-cutting instrument featuring curved, spring-loaded handles and sharp cutting jaws designed for removing bone and cartilage with precision. The curved design allows for excellent access to bone surfaces while the spring-loaded mechanism provides consistent cutting force.",
    image: "/lovable-uploads/ruskin-rongeur.png"
  },
  {
    id: 9,
    question: "Identify this neurosurgical instrument:",
    choices: [
      "Pituitary Rongeur",
      "Leksell Rongeur",
      "Cushing Rongeur",
      "Jansen Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Leksell rongeur is a precision neurosurgical instrument featuring delicate, curved cutting jaws designed for removing small pieces of bone and tissue in neurosurgical procedures. Named after Swedish neurosurgeon Lars Leksell, this rongeur is characterized by its fine, precise cutting action.",
    image: "/lovable-uploads/leksell-rongeur.png"
  },
  {
    id: 10,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Ruskin Rongeur",
      "Jansen Rongeur",
      "Leksell Rongeur",
      "Duck Bill Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Jansen rongeur is a specialized bone-cutting instrument featuring curved cutting jaws and spring-loaded handles designed for controlled bone removal in orthopedic and neurosurgical procedures. The instrument provides excellent leverage and cutting force while maintaining precision control.",
    image: "/lovable-uploads/jansen-rongeur.png"
  },
  {
    id: 11,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Jansen Rongeur",
      "Duck Bill Rongeur",
      "Ruskin Rongeur",
      "Leksell Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Duck Bill Rongeur is a specialized bone-cutting instrument featuring curved jaws that resemble a duck's bill, designed for cutting and removing bone and cartilage in confined spaces. The unique curved design allows for precise bone removal in areas with limited access.",
    image: "/lovable-uploads/duck-bill-rongeur.png"
  },
  {
    id: 12,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Freer Elevator",
      "Key Elevator",
      "Cobb Elevator",
      "Langenbeck Periosteal Elevator"
    ],
    correctAnswer: 0,
    explanation: "The Freer elevator is a double-ended periosteal elevator with a straight, sharp edge on one end and a curved edge on the other. Originally designed for nasal and septal surgery, it's also commonly used in orthopedic procedures for elevating periosteum from bone surfaces.",
    image: "/lovable-uploads/freer-elevator.png"
  },
  {
    id: 13,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Freer Elevator",
      "Key Elevator",
      "Cobb Elevator",
      "Joseph Periosteal Elevator"
    ],
    correctAnswer: 1,
    explanation: "The Key elevator is a robust periosteal elevator featuring a wide, flat blade with a beveled edge designed for separating periosteum from bone surfaces during orthopedic procedures. The broad, angled blade provides excellent leverage for tissue elevation.",
    image: "/lovable-uploads/key-elevator.png"
  },
  {
    id: 14,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Bone Rasp",
      "Putti Rasp",
      "File",
      "Bone Scraper"
    ],
    correctAnswer: 1,
    explanation: "The Putti rasp is a double-ended bone rasp featuring coarse, textured surfaces designed for shaping and smoothing bone during orthopedic procedures. Named after Italian orthopedic surgeon Vittorio Putti, this instrument is essential for bone preparation, particularly in joint replacement surgeries.",
    image: "/lovable-uploads/putti-rasp.png"
  },
  {
    id: 15,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Curette",
      "Bone Curette",
      "Scoop",
      "Bone Scraper"
    ],
    correctAnswer: 1,
    explanation: "A bone curette is a spoon-shaped surgical instrument with a sharp, curved cutting edge designed for scraping and removing tissue, bone fragments, or infected material from bone surfaces. The rounded, scooped end allows for controlled tissue removal while minimizing damage to surrounding healthy tissue.",
    image: "/lovable-uploads/bone-curette.png"
  },
  {
    id: 16,
    question: "Identify this orthopedic surgical instrument:",
    choices: [
      "Surgical Hammer",
      "Bone Mallet",
      "Orthopedic Mallet",
      "Impact Tool"
    ],
    correctAnswer: 1,
    explanation: "A bone mallet is a specialized surgical hammer with a heavy metal head and ergonomic handle designed for delivering controlled impact force during orthopedic procedures. The weighted head provides precise force transmission for driving chisels, osteotomes, and bone punches.",
    image: "/lovable-uploads/bone-mallet.png"
  },
  {
    id: 17,
    question: "Identify this surgical instrument:",
    choices: [
      "#3 Knife Handle",
      "Beaver Knife Handle",
      "#4 Knife Handle",
      "#7 Knife Handle"
    ],
    correctAnswer: 1,
    explanation: "The Beaver knife handle is a specialized surgical handle designed to accommodate small, precise surgical blades for delicate cutting procedures. Features a textured, non-slip grip and secure blade attachment mechanism for optimal control during fine dissection work.",
    image: "/lovable-uploads/beaver-knife-handle.png"
  },
  {
    id: 18,
    question: "Identify this set of orthopedic surgical instruments:",
    choices: [
      "Osteotomes",
      "Lambotte Osteotomes",
      "Bone Chisels",
      "Bone Cutting Tools"
    ],
    correctAnswer: 1,
    explanation: "Lambotte osteotomes are precision bone-cutting instruments featuring flat, beveled cutting edges in various widths. Named after Belgian surgeon Albin Lambotte, these osteotomes are designed for precise bone cutting, shaping, and contouring during orthopedic procedures.",
    image: "/lovable-uploads/lambotte-osteotomes.png"
  },
  {
    id: 19,
    question: "Identify this surgical instrument:",
    choices: [
      "#4 Knife Handle",
      "#3 Knife Handle",
      "#7 Knife Handle",
      "Beaver Knife Handle"
    ],
    correctAnswer: 1,
    explanation: "The #3 knife handle is a standard surgical scalpel handle designed to accommodate #10, #11, #12, and #15 surgical blades. Features a textured, non-slip grip and secure blade attachment mechanism for optimal control during cutting procedures.",
    image: "/lovable-uploads/knife-handle-3.png"
  },
  {
    id: 20,
    question: "Identify this surgical instrument:",
    choices: [
      "Curved Retractor",
      "Cobra Retractor",
      "Snake Retractor",
      "S-Shaped Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Cobra retractor is a curved, handheld retractor featuring a smooth, curved blade designed for retracting soft tissues and providing exposure during surgical procedures. The distinctive curved shape resembles a cobra's profile, hence the name.",
    image: "/lovable-uploads/cobra-retractor.png"
  }
];