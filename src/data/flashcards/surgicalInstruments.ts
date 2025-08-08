export interface InstrumentFlashcardItem {
  name: string;
  image: string;
  category: 'forceps' | 'scissors' | 'clamps' | 'retractors' | 'suction' | 'electrocautery' | 'staplers' | 'bone' | 'scopes' | 'cutting' | 'specialty';
  uses: string[];
  characteristics: string[];
  specialty: string;
  commonSizes?: string[];
  tips: string[];
}

export const surgicalInstrumentFlashcards: InstrumentFlashcardItem[] = [
  {
    name: "Kelly Clamp (Curved)",
    image: "/lovable-uploads/kelly-clamp-curved.png",
    category: "clamps",
    uses: [
      "Clamping blood vessels",
      "Holding thick tissue",
      "Grasping suture material"
    ],
    characteristics: [
      "Curved jaws with horizontal serrations",
      "Heavy construction",
      "Locking ratchet mechanism",
      "Blunt tips"
    ],
    specialty: "General Surgery",
    commonSizes: ["5.5 inches", "6.25 inches"],
    tips: [
      "Use gentle pressure to avoid crushing tissue",
      "Check ratchet mechanism before use",
      "Clean serrations thoroughly after use"
    ]
  },
  {
    name: "Metzenbaum Scissors",
    image: "/lovable-uploads/metzenbaum-scissors.png",
    category: "scissors",
    uses: [
      "Cutting delicate tissue",
      "Dissecting tissue planes",
      "Separating adhesions"
    ],
    characteristics: [
      "Curved blades",
      "Sharp pointed tips",
      "Delicate construction",
      "Lightweight design"
    ],
    specialty: "General Surgery",
    commonSizes: ["5.75 inches", "7 inches", "9 inches"],
    tips: [
      "Never use on suture material or drains",
      "Keep tips closed when passing",
      "Use for tissue only, not non-organic materials"
    ]
  },
  {
    name: "Adson Forceps with Teeth",
    image: "/lovable-uploads/adson-forceps-teeth.png",
    category: "forceps",
    uses: [
      "Grasping skin edges",
      "Holding fascial layers",
      "Manipulating tough tissue"
    ],
    characteristics: [
      "Fine tips with 1x2 teeth",
      "Delicate construction",
      "Excellent grip on tissue",
      "Non-locking mechanism"
    ],
    specialty: "General Surgery",
    commonSizes: ["4.75 inches"],
    tips: [
      "Use gentle pressure to avoid tissue damage",
      "Perfect for skin closure",
      "Clean teeth carefully to prevent dulling"
    ]
  },
  {
    name: "Debakey Forceps",
    image: "/lovable-uploads/debakey-forceps.png",
    category: "forceps",
    uses: [
      "Handling vascular tissue",
      "Grasping delicate structures",
      "Cardiovascular procedures"
    ],
    characteristics: [
      "Atraumatic longitudinal serrations",
      "Long, slender design",
      "Non-crushing grip",
      "Smooth closure"
    ],
    specialty: "Cardiovascular Surgery",
    commonSizes: ["6 inches", "8 inches", "10 inches"],
    tips: [
      "Ideal for fragile tissue",
      "Minimal tissue trauma",
      "Popular in vascular surgery"
    ]
  },
  {
    name: "Bovie Electrocautery Pencil",
    image: "/lovable-uploads/bovie-electrocautery.png",
    category: "electrocautery",
    uses: [
      "Cutting tissue with hemostasis",
      "Coagulating bleeding vessels",
      "Precise tissue dissection"
    ],
    characteristics: [
      "Insulated handle",
      "Removable tips",
      "Foot pedal or button activation",
      "Various tip configurations"
    ],
    specialty: "All Surgical Specialties",
    commonSizes: ["Standard", "Extended tip", "Fine tip"],
    tips: [
      "Keep tip clean for optimal performance",
      "Use lowest effective setting",
      "Avoid contact with metal instruments"
    ]
  },
  {
    name: "Yankauer Suction Tip",
    image: "/lovable-uploads/yankauer-suction.png",
    category: "suction",
    uses: [
      "Suctioning blood and fluids",
      "Clearing surgical field",
      "Removing debris"
    ],
    characteristics: [
      "Curved rigid tip",
      "Large bore opening",
      "Thumb control port",
      "Autoclavable"
    ],
    specialty: "General Surgery",
    tips: [
      "Cover thumb port for maximum suction",
      "Keep tip moving to prevent tissue damage",
      "Clean regularly during procedure"
    ]
  },
  {
    name: "Allis Clamp",
    image: "/lovable-uploads/allis-clamp.png",
    category: "clamps",
    uses: [
      "Grasping tissue edges",
      "Holding bowel segments",
      "Retracting tissue"
    ],
    characteristics: [
      "Curved jaws with teeth",
      "Multiple sharp teeth",
      "Strong grip",
      "Self-retaining"
    ],
    specialty: "General Surgery",
    commonSizes: ["5 inches", "6 inches"],
    tips: [
      "Excellent for thick tissue",
      "Teeth provide secure grip",
      "Check teeth for damage before use"
    ]
  },
  {
    name: "Babcock Clamp",
    image: "/lovable-uploads/babcock-clamp.png",
    category: "clamps",
    uses: [
      "Grasping delicate tissue",
      "Holding bowel without damage",
      "Atraumatic tissue handling"
    ],
    characteristics: [
      "Curved fenestrated tips",
      "No teeth or serrations",
      "Atraumatic design",
      "Wide jaw opening"
    ],
    specialty: "General Surgery",
    commonSizes: ["5.5 inches", "6.25 inches"],
    tips: [
      "Ideal for hollow organs",
      "Minimizes tissue trauma",
      "Good for delicate structures"
    ]
  },
  {
    name: "Richardson Retractor",
    image: "/lovable-uploads/richardson-retractor.png",
    category: "retractors",
    uses: [
      "Retracting wound edges",
      "Exposing surgical field",
      "Holding tissue apart"
    ],
    characteristics: [
      "Double-ended design",
      "Curved blade ends",
      "Different sizes on each end",
      "Smooth edges"
    ],
    specialty: "General Surgery",
    commonSizes: ["Small/Medium", "Medium/Large"],
    tips: [
      "Use appropriate size for wound",
      "Apply steady, even pressure",
      "Avoid excessive force"
    ]
  },
  {
    name: "Army-Navy Retractor",
    image: "/lovable-uploads/army-navy-retractor.png",
    category: "retractors",
    uses: [
      "Retracting superficial tissue",
      "Small wound exposure",
      "Light tissue retraction"
    ],
    characteristics: [
      "Double-ended design",
      "Right angle ends",
      "Lightweight construction",
      "Different blade widths"
    ],
    specialty: "General Surgery",
    tips: [
      "Perfect for shallow wounds",
      "Gentle tissue handling",
      "Easy to position and hold"
    ]
  }
];