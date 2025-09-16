export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const cardiothoracicInstrumentQuestions: Question[] = [
  {
    id: 1,
    question: "Identify this cardiothoracic instrument:",
    choices: [
      "Debakey Bahnson Aortic Aneurysm Clamp",
      "Satinsky Vena Cava Clamp",
      "Fogarty Clamps",
      "Dale Femoral-Popliteal Clamp"
    ],
    correctAnswer: 0,
    explanation: "A specialized vascular clamp designed for aortic aneurysm repairs. Features long, curved jaws with fine serrations that provide secure hemostasis while minimizing vessel trauma during cardiovascular procedures.",
    image: "/lovable-uploads/debakey-bahnson-aortic-aneurysm-clamp.png"
  },
  {
    id: 2,
    question: "Identify this angled vascular clamp:",
    choices: [
      "Debakey Peripheral Clamp",
      "Debakey Peripheral Clamp - Angled",
      "Debakey Coarctation Clamp",
      "Debakeys Multipurpose Clamp"
    ],
    correctAnswer: 1,
    explanation: "An angled vascular clamp specifically designed for peripheral vessel occlusion. The angled configuration allows for better access and visualization in tight surgical spaces during vascular procedures.",
    image: "/lovable-uploads/debakey-peripheral-clamp-angled.png"
  },
  {
    id: 3,
    question: "Identify this periosteal instrument:",
    choices: [
      "Freer Elevator",
      "Key Periosteal Elevator",
      "Alexander Farabeuf Periosteotome Elevator",
      "Langenbeck Periosteal Elevator"
    ],
    correctAnswer: 2,
    explanation: "A double-ended instrument used for elevating periosteum from bone surfaces. One end features a sharp blade for incising periosteum, while the other end has a blunt elevator for separating tissue planes in thoracic procedures.",
    image: "/lovable-uploads/alexander-farabeuf-periosteotome-elevator.png"
  },
  {
    id: 4,
    question: "Identify this powered cutting instrument:",
    choices: [
      "Oscillating Saw",
      "Sternum Saw",
      "Reciprocating Saw",
      "Bone Saw"
    ],
    correctAnswer: 1,
    explanation: "A specialized oscillating saw designed for median sternotomy procedures. Features a narrow blade that cuts through the sternum with precision while minimizing damage to underlying structures during cardiac surgery access.",
    image: "/lovable-uploads/sternum-saw.png"
  },
  {
    id: 5,
    question: "Identify these thoracic cutting instruments:",
    choices: [
      "Wire Cutting Scissors",
      "Bethune Rib Shears",
      "Stevens Tenotomy Scissors",
      "Mayo Scissors"
    ],
    correctAnswer: 1,
    explanation: "Heavy-duty shears specifically designed for cutting ribs and cartilage during thoracic procedures. Features strong, sharp blades with excellent leverage for cutting through tough osseous structures.",
    image: "/lovable-uploads/bethune-rib-shears.png"
  },
  {
    id: 6,
    question: "Identify this thoracic retraction instrument:",
    choices: [
      "Cooley Sternal Retractors",
      "Sternal Retractor",
      "Davidson Scapula Retractor",
      "Allison Lung Retractor"
    ],
    correctAnswer: 1,
    explanation: "A specialized retractor used to maintain sternotomy exposure during cardiac surgery. Features adjustable arms that provide optimal surgical field visualization while maintaining hemostasis and protecting surrounding tissues.",
    image: "/lovable-uploads/sternal-retractor.png"
  },
  {
    id: 7,
    question: "Identify this thoracic retraction instrument:",
    choices: [
      "Sternal Retractor",
      "Davidson Scapula Retractor",
      "Allison Lung Retractor",
      "Cooley Sternal Retractors"
    ],
    correctAnswer: 1,
    explanation: "A specialized S-shaped retractor designed for retracting the scapula during thoracic procedures. Features a flat, broad blade that provides excellent exposure of the posterior chest wall and lung fields.",
    image: "/lovable-uploads/davidson-scapula-retractor.png"
  },
  {
    id: 8,
    question: "Identify this multi-pronged retractor:",
    choices: [
      "Rake Retractor",
      "Allison Lung Retractor",
      "Weitlaner Retractor",
      "Gelpi Retractor"
    ],
    correctAnswer: 1,
    explanation: "A specialized lung retractor with multiple curved prongs designed to gently retract lung tissue during thoracic procedures. Provides excellent visualization while minimizing trauma to delicate pulmonary structures.",
    image: "/lovable-uploads/allison-lung-retractor.png"
  },
  {
    id: 9,
    question: "Identify this rib closure instrument:",
    choices: [
      "Bailey Rib Approximator",
      "Rib Spreader",
      "Bone Clamp",
      "Wire Twister"
    ],
    correctAnswer: 0,
    explanation: "A specialized instrument used for approximating ribs during chest closure after thoracotomy. Features an adjustable mechanism that allows precise control of rib positioning and alignment for optimal healing.",
    image: "/lovable-uploads/bailey-rib-approximator.png"
  },
  {
    id: 10,
    question: "Identify this small vascular clamp:",
    choices: [
      "Halstead Mosquito Clamp",
      "Debakey Bulldog Clamp",
      "Kelly Clamp",
      "Crile Clamp"
    ],
    correctAnswer: 1,
    explanation: "A small, atraumatic vascular clamp designed for temporary occlusion of small vessels and grafts. Features curved jaws with fine teeth that provide secure hemostasis without crushing delicate vascular structures.",
    image: "/lovable-uploads/debakey-bulldog-clamp.png"
  },
  {
    id: 11,
    question: "Identify this rib preparation instrument:",
    choices: [
      "Bone Rasp",
      "Putti Rasp",
      "Doyen Rib Raspatory",
      "Bone Curette"
    ],
    correctAnswer: 2,
    explanation: "A specialized instrument used for scraping and smoothing rib surfaces during thoracic procedures. The curved working end allows for precise preparation of rib beds and removal of periosteum when needed.",
    image: "/lovable-uploads/doyen-rib-raspatory.png"
  },
  {
    id: 12,
    question: "Identify these sternal retraction instruments:",
    choices: [
      "Sternal Retractor",
      "Cooley Sternal Retractors",
      "Davidson Scapula Retractor",
      "Allison Lung Retractor"
    ],
    correctAnswer: 1,
    explanation: "Specialized sternal retractors designed for cardiac surgery access. Features self-retaining mechanisms with adjustable arms that provide optimal exposure of the mediastinum while maintaining sternotomy positioning throughout the procedure.",
    image: "/lovable-uploads/cooley-sternal-retractors.png"
  },
  {
    id: 13,
    question: "Identify this tunneling instrument:",
    choices: [
      "Tunnel Dissector",
      "Bullet (Cone) Tip Tunneler",
      "Blunt Dissector",
      "Probe"
    ],
    correctAnswer: 1,
    explanation: "A specialized instrument with a tapered, bullet-shaped tip designed for creating tunnels through tissue planes. Commonly used in cardiovascular procedures for graft passage and vessel isolation with minimal tissue trauma.",
    image: "/lovable-uploads/bullet-cone-tip-tunneler.png"
  },
  {
    id: 14,
    question: "Identify this suction instrument:",
    choices: [
      "Yankauer Suction",
      "Poole Suction",
      "Cooley Sump Suction Tube",
      "Frazier Suction"
    ],
    correctAnswer: 2,
    explanation: "A specialized suction device with multiple openings designed for continuous drainage during cardiac procedures. Features a sump design that prevents tissue occlusion and maintains effective suction in the surgical field.",
    image: "/lovable-uploads/cooley-sump-suction-tube.png"
  },
  {
    id: 15,
    question: "Identify these toothed forceps:",
    choices: [
      "Adson Tissue Forceps",
      "Gerald Forceps with Teeth",
      "DeBakey Forceps",
      "Russian Forceps"
    ],
    correctAnswer: 1,
    explanation: "Precision forceps featuring fine teeth for secure tissue grasping during delicate cardiovascular procedures. The teeth provide excellent grip on tissue while minimizing crush injury to delicate vascular structures.",
    image: "/lovable-uploads/gerald-forceps-with-teeth.png"
  },
  {
    id: 16,
    question: "Identify this vascular retraction instrument:",
    choices: [
      "Nerve Hook",
      "Cushing Vein Retractor",
      "Green Retractor",
      "Senn Retractor"
    ],
    correctAnswer: 1,
    explanation: "A specialized retractor designed for gentle retraction of veins and delicate vascular structures. Features a smooth, curved blade that provides excellent exposure while minimizing trauma to fragile vessel walls.",
    image: "/lovable-uploads/cushing-vein-retractor.png"
  },
  {
    id: 17,
    question: "Identify these specialized vascular scissors:",
    choices: [
      "Metzenbaum Scissors",
      "Potts Smith Vascular Scissors",
      "Mayo Scissors",
      "Iris Scissors"
    ],
    correctAnswer: 1,
    explanation: "Precision vascular scissors with fine, angled tips designed for delicate vessel anastomoses and vascular repairs. Features sharp, smooth cutting edges that provide clean incisions in blood vessels without crushing tissue.",
    image: "/lovable-uploads/potts-smith-vascular-scissors.png"
  },
  {
    id: 18,
    question: "Identify this thyroid retraction instrument:",
    choices: [
      "Green Thyroid Retractor",
      "Lahey Thyroid Retractor",
      "Senn Retractor",
      "Army Navy Retractor"
    ],
    correctAnswer: 0,
    explanation: "A specialized retractor designed for thyroid and neck surgery procedures. Features a unique shape that provides excellent exposure of the thyroid gland and surrounding structures while protecting the recurrent laryngeal nerve.",
    image: "/lovable-uploads/green-thyroid-retractor.png"
  },
  {
    id: 19,
    question: "Identify this rib preparation instrument:",
    choices: [
      "Doyen Rib Raspatory",
      "Matson Rib Stripper",
      "Bone Rasp",
      "Periosteal Elevator"
    ],
    correctAnswer: 1,
    explanation: "A specialized instrument used for stripping periosteum from ribs during thoracic procedures. Features a curved working end with measurement markings that allows for precise periosteal elevation and rib preparation.",
    image: "/lovable-uploads/matson-rib-stripper.png"
  },
  {
    id: 20,
    question: "Identify these vascular dilation instruments:",
    choices: [
      "Hegar Dilators",
      "Garrett Vascular Dilator",
      "Urethral Sounds",
      "Bougies"
    ],
    correctAnswer: 1,
    explanation: "A set of graduated dilators used for progressive dilation of blood vessels and vessel grafts. Features multiple sizes with smooth, tapered tips that allow for gentle, controlled expansion of vascular structures.",
    image: "/lovable-uploads/garrett-vascular-dilator.png"
  },
  {
    id: 21,
    question: "Identify these angled vascular scissors:",
    choices: [
      "Potts Smith Vascular Scissors",
      "Dietrich Vascular Scissors",
      "Metzenbaum Scissors",
      "Stevens Tenotomy Scissors"
    ],
    correctAnswer: 1,
    explanation: "Specialized vascular scissors with angled blades designed for precise cutting in confined spaces during cardiovascular procedures. Features sharp, fine tips that provide excellent control for delicate vascular work.",
    image: "/lovable-uploads/dietrich-vascular-scissors.png"
  },
  {
    id: 22,
    question: "Identify this chest tube insertion instrument:",
    choices: [
      "Trocar",
      "Chest Tube Passer",
      "Obturator",
      "Stylet"
    ],
    correctAnswer: 1,
    explanation: "A specialized instrument used for guiding and inserting chest tubes through the intercostal space. Features a curved tip that helps navigate around ribs and ensures proper placement of drainage tubes in the pleural cavity.",
    image: "/lovable-uploads/chest-tube-passer.png"
  },
  {
    id: 23,
    question: "Identify this tube clamping instrument:",
    choices: [
      "Kelly Clamp",
      "Tube Occluding Clamp",
      "Pean Clamp",
      "Rochester Clamp"
    ],
    correctAnswer: 1,
    explanation: "A specialized clamp designed to temporarily occlude tubes, drains, or catheters during surgical procedures. Features smooth jaws that provide secure closure without damaging the tube material.",
    image: "/lovable-uploads/tube-occluding-clamp.png"
  },
  {
    id: 24,
    question: "Identify these tissue grasping forceps:",
    choices: [
      "Allis Tissue Forceps",
      "Collin-Duval Tissue Grasping Forceps",
      "Babcock Tissue Forceps",
      "Kocher Forceps"
    ],
    correctAnswer: 1,
    explanation: "Heavy-duty tissue grasping forceps with strong, serrated jaws designed for secure handling of thick tissues and organs. Features a locking mechanism that maintains grip during tissue manipulation and resection.",
    image: "/lovable-uploads/collin-duval-tissue-grasping-forceps.png"
  },
  {
    id: 25,
    question: "Identify this specialized vascular clamp:",
    choices: [
      "Debakey Peripheral Clamp",
      "Debakey Coarctation Clamp",
      "Satinsky Vena Cava Clamp",
      "Fogarty Clamps"
    ],
    correctAnswer: 1,
    explanation: "A specialized vascular clamp designed for aortic coarctation repair and other major vessel procedures. Features angled jaws with atraumatic tips that provide secure occlusion while minimizing vessel wall damage.",
    image: "/lovable-uploads/debakey-coarctation-clamp.png"
  },
  {
    id: 26,
    question: "Identify this multipurpose vascular clamp:",
    choices: [
      "Debakey Peripheral Clamp",
      "Debakeys Multipurpose Clamp",
      "Satinsky Vena Cava Clamp",
      "Dale Femoral-Popliteal Clamp"
    ],
    correctAnswer: 1,
    explanation: "A versatile vascular clamp suitable for various cardiovascular procedures. Features smooth, curved jaws that can be used for partial or complete vessel occlusion, providing excellent control during vascular anastomoses.",
    image: "/lovable-uploads/debakeys-multipurpose-clamp.png"
  },
  {
    id: 27,
    question: "Identify this specialized cardiac retractor:",
    choices: [
      "Cooley Atrial Valve Retractor",
      "Mitral Valve Retractor",
      "Cardiac Retractor",
      "Heart Retractor"
    ],
    correctAnswer: 0,
    explanation: "A specialized retractor designed for cardiac valve procedures, providing excellent exposure of the atrial cavity and valve structures. Features multiple curved blades that allow for optimal visualization during valve repair or replacement.",
    image: "/lovable-uploads/cooley-atrial-valve-retractor.png"
  },
  {
    id: 28,
    question: "Identify this precision needle holder:",
    choices: [
      "Mayo-Hegar Needle Holder",
      "Castroviejo Needle Holder",
      "Ryder Needle Holder",
      "Webster Needle Holder"
    ],
    correctAnswer: 1,
    explanation: "A delicate needle holder designed for microsurgical procedures and fine suturing. Features locking mechanisms and precise tips that provide excellent control for handling small needles during cardiovascular and ophthalmic procedures.",
    image: "/lovable-uploads/castroviejo-needle-holder.png"
  },
  {
    id: 29,
    question: "Identify this sternal closure instrument:",
    choices: [
      "Wire Twister",
      "Nayo-Haberisser Sternal Wire Twister",
      "Bone Pliers",
      "Wire Cutter"
    ],
    correctAnswer: 1,
    explanation: "A specialized instrument for twisting and securing sternal wires during chest closure after cardiac surgery. Features ergonomic handles and precision tips that allow for proper wire tension and secure sternal approximation.",
    image: "/lovable-uploads/nayo-haberisser-sternal-wire-twister.png"
  },
  {
    id: 30,
    question: "Identify this peripheral vascular clamp:",
    choices: [
      "Debakey Peripheral Clamp",
      "Dale Femoral-Popliteal Clamp",
      "Fogarty Clamps",
      "Satinsky Vena Cava Clamp"
    ],
    correctAnswer: 1,
    explanation: "A specialized vascular clamp designed for femoral and popliteal artery procedures. Features angled jaws and atraumatic tips that provide secure vessel occlusion while minimizing damage to arterial walls during bypass procedures.",
    image: "/lovable-uploads/dale-femoral-popliteal-clamp.png"
  },
  {
    id: 31,
    question: "Identify this venous occlusion clamp:",
    choices: [
      "Debakey Coarctation Clamp",
      "Satinsky Vena Cava Clamp",
      "Dale Femoral-Popliteal Clamp",
      "Fogarty Clamps"
    ],
    correctAnswer: 1,
    explanation: "A specialized clamp designed for partial occlusion of the vena cava and other large venous structures. Features a unique angled design that allows for side-biting occlusion without complete vessel interruption.",
    image: "/lovable-uploads/satinsky-vena-cava-clamp.png"
  },
  {
    id: 32,
    question: "Identify these specialized vascular clamps:",
    choices: [
      "Fogarty Clamps",
      "Debakey Bulldog Clamps",
      "Mosquito Clamps",
      "Kelly Clamps"
    ],
    correctAnswer: 0,
    explanation: "Specialized vascular clamps with inserts designed for atraumatic occlusion of blood vessels. Features soft, removable inserts that protect vessel walls from crushing injury during vascular procedures.",
    image: "/lovable-uploads/fogarty-clamps.png"
  },
  {
    id: 33,
    question: "Identify this pulmonary clamp:",
    choices: [
      "Bronchus Clamp",
      "Sarot Bronchus Clamp",
      "Lung Clamp",
      "Pulmonary Clamp"
    ],
    correctAnswer: 1,
    explanation: "A specialized clamp designed for occluding bronchi and pulmonary vessels during thoracic procedures. Features angled jaws with serrated surfaces that provide secure grip on bronchial structures during lung resections.",
    image: "/lovable-uploads/sarot-bronchus-clamp.png"
  },
  {
    id: 34,
    question: "Identify this peripheral vascular clamp:",
    choices: [
      "Debakey Peripheral Clamp",
      "Dale Femoral-Popliteal Clamp",
      "Debakey Coarctation Clamp",
      "Satinsky Vena Cava Clamp"
    ],
    correctAnswer: 0,
    explanation: "A vascular clamp specifically designed for peripheral vessel procedures. Features curved, atraumatic jaws that provide gentle yet secure occlusion of arteries and veins in extremity vascular surgery.",
    image: "/lovable-uploads/debakey-peripheral-clamp.png"
  },
  {
    id: 35,
    question: "Identify these delicate micro scissors:",
    choices: [
      "Iris Scissors",
      "Scanlan Micro Scissors",
      "Westcott Scissors",
      "Vannas Scissors"
    ],
    correctAnswer: 1,
    explanation: "Ultra-precise microsurgical scissors designed for delicate cardiovascular procedures. Features curved, fine blades with spring-loaded handles that provide exceptional control for cutting small vessels, sutures, and delicate tissues.",
    image: "/lovable-uploads/scanlan-micro-scissors.png"
  }
];