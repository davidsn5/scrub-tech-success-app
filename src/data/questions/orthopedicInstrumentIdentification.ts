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
    question: "Identify this neurosurgical instrument:",
    choices: [
      "Aneurysm Clip Applier",
      "Aneurysm Clip",
      "Hemostatic Clip",
      "Vascular Clamp"
    ],
    correctAnswer: 1,
    explanation: "An aneurysm clip is a small, spring-loaded device used in neurosurgery to occlude cerebral aneurysms. The clip is placed across the neck of the aneurysm to prevent blood flow into the aneurysmal sac, thereby preventing rupture. These clips are made of titanium or other biocompatible materials and come in various sizes and configurations to accommodate different aneurysm anatomies.",
    image: "/lovable-uploads/aneurysm-clip.png"
  },
  {
    id: 2,
    question: "Identify this orthopedic measuring instrument:",
    choices: [
      "Bone Calipers",
      "Zimmer Townley Femur Calipers", 
      "Femoral Measuring Device",
      "Hip Calipers"
    ],
    correctAnswer: 1,
    explanation: "Zimmer Townley Femur Calipers are specialized measuring instruments used in orthopedic surgery, particularly during total hip arthroplasty procedures. These calipers are designed to accurately measure femoral dimensions, including the diameter and length of the femoral canal, to ensure proper sizing of femoral components.",
    image: "/lovable-uploads/zimmer-townley-femur-calipers.png"
  },
  {
    id: 3,
    question: "Identify this neurosurgical dissector:",
    choices: [
      "#1 Penfield Dissector",
      "#2 Penfield Dissector",
      "#3 Penfield Dissector",
      "#4 Penfield Dissector"
    ],
    correctAnswer: 2,
    explanation: "The #3 Penfield dissector is a delicate neurosurgical instrument used for blunt dissection and manipulation of neural tissue. It features a slightly curved, blunt tip that allows for gentle separation of tissues without causing trauma. This instrument is commonly used in cranial and spinal procedures for dissecting around nerves, blood vessels, and delicate brain tissue.",
    image: "/lovable-uploads/penfield-3.png"
  },
  {
    id: 4,
    question: "Identify these specialized scissors:",
    choices: [
      "Iris Scissors",
      "Stevens Tenotomy Scissors",
      "Microsurgical Scissors",
      "Vannas Scissors"
    ],
    correctAnswer: 1,
    explanation: "Stevens tenotomy scissors are delicate, sharp-pointed scissors specifically designed for cutting tendons and other fine tissues. They feature straight or curved blades with very sharp points that allow for precise dissection in tight spaces. These scissors are commonly used in ophthalmic surgery, plastic surgery, and other procedures requiring fine, precise cuts.",
    image: "/lovable-uploads/stevens-tenotomy-scissors.png"
  },
  {
    id: 5,
    question: "Identify this bone cutting instrument:",
    choices: [
      "Bone Rongeur",
      "Stille-Horsley Bone Cutting Forceps",
      "Leksell Rongeur",
      "Bone Biting Forceps"
    ],
    correctAnswer: 1,
    explanation: "Stille-Horsley bone cutting forceps are heavy-duty orthopedic instruments designed for cutting and removing bone tissue. These forceps feature strong, sharp jaws with cutting edges that can effectively cut through bone, particularly in spinal and cranial procedures. They are commonly used in neurosurgery for craniotomies and laminectomies.",
    image: "/lovable-uploads/stille-horsley-bone-cutting-forceps.png"
  },
  {
    id: 6,
    question: "Identify this bone elevation instrument:",
    choices: [
      "Freer Elevator",
      "Joseph Periosteal Elevator",
      "Langenbeck Periosteal Elevator",
      "Cobb Elevator"
    ],
    correctAnswer: 1,
    explanation: "The Joseph periosteal elevator is a surgical instrument used to lift and separate the periosteum (the membrane surrounding bone) from the underlying bone surface. It features a flat, curved blade that allows surgeons to carefully dissect and elevate soft tissues without damaging the bone. This instrument is commonly used in orthopedic and oral surgery procedures.",
    image: "/lovable-uploads/joseph-periosteal-elevator.png"
  },
  {
    id: 7,
    question: "Identify this surgical elevator:",
    choices: [
      "Freer Elevator",
      "Chandler Elevator",
      "Cobb Elevator",
      "Key Elevator"
    ],
    correctAnswer: 1,
    explanation: "The Chandler elevator is a specialized surgical instrument used for lifting and retracting tissues, particularly in orthopedic and spinal procedures. It features a curved, blunt-tipped blade that allows for gentle elevation of soft tissues from bone surfaces. The instrument is designed to provide excellent visibility and access to surgical sites.",
    image: "/lovable-uploads/chandler-elevator.png"
  },
  {
    id: 8,
    question: "Identify these neurosurgical forceps:",
    choices: [
      "Aneurysm Clip Applier",
      "Raney Clip Applying Forceps",
      "Hemostatic Forceps",
      "Vascular Forceps"
    ],
    correctAnswer: 1,
    explanation: "Raney clip applying forceps are specialized neurosurgical instruments used to place hemostatic clips on blood vessels during cranial procedures. These forceps are designed to hold and apply small metal clips that provide hemostasis by occluding vessels. The instrument features precise jaws that can manipulate the clips accurately for effective bleeding control.",
    image: "/lovable-uploads/raney-clip-applying-forceps.png"
  },
  {
    id: 9,
    question: "Identify these surgical retractors:",
    choices: [
      "Self-Retaining Retractors",
      "Adson Beckman Retractors",
      "Weitlaner Retractors",
      "Gelpi Retractors"
    ],
    correctAnswer: 1,
    explanation: "Adson Beckman retractors are self-retaining surgical instruments used to hold tissues apart and maintain surgical exposure. These retractors feature multiple sharp or blunt prongs that can be adjusted to provide optimal retraction of various tissue types. They are commonly used in neurosurgery, spine surgery, and other procedures where sustained tissue retraction is needed.",
    image: "/lovable-uploads/adson-beckman-retractors.png"
  },
  {
    id: 10,
    question: "Identify this orthopedic tool:",
    choices: [
      "Phillips Screwdriver",
      "Hex Ortho Screwdriver",
      "Torx Screwdriver",
      "Standard Screwdriver"
    ],
    correctAnswer: 1,
    explanation: "A hex ortho screwdriver is a specialized surgical instrument used for inserting and removing hexagonal-headed screws in orthopedic procedures. The instrument features a hexagonal tip that matches the socket configuration of orthopedic screws used in bone fixation. This tool is essential for securing plates, rods, and other orthopedic hardware to bone.",
    image: "/lovable-uploads/hex-ortho-screwdriver.png"
  },
  {
    id: 11,
    question: "Identify this bone cutting instrument:",
    choices: [
      "Bone Chisel",
      "Stille Bone Chisel",
      "Osteotome",
      "Bone Gouge"
    ],
    correctAnswer: 1,
    explanation: "A Stille bone chisel is a precision orthopedic instrument used for shaping, cutting, and contouring bone tissue. It features a sharp, flat blade with a beveled cutting edge that allows surgeons to make precise cuts and remove bone material with controlled force. The instrument is commonly used in orthopedic and neurosurgical procedures for bone grafting and osteotomies.",
    image: "/lovable-uploads/stille-bone-chisel.png"
  },
  {
    id: 12,
    question: "Identify these hemostatic devices:",
    choices: [
      "Surgical Clips",
      "Raney Clips",
      "Aneurysm Clips",
      "Hemostatic Clips"
    ],
    correctAnswer: 1,
    explanation: "Raney clips are small, spring-loaded hemostatic devices used primarily in neurosurgery to control bleeding from scalp vessels during cranial procedures. These clips are applied to the edges of the scalp incision to compress blood vessels and provide hemostasis throughout the surgical procedure. They help maintain a bloodless surgical field, improving visualization.",
    image: "/lovable-uploads/raney-clips.png"
  },
  {
    id: 13,
    question: "Identify this orthopedic striking instrument:",
    choices: [
      "Bone Mallet",
      "Meade Ortho Mallet",
      "Surgical Hammer",
      "Orthopedic Mallet"
    ],
    correctAnswer: 1,
    explanation: "The Meade orthopedic mallet is a specialized surgical hammer designed for driving chisels, osteotomes, and other cutting instruments during bone procedures. It features a weighted head that provides controlled impact force while minimizing vibration and shock to the surgeon's hand. The mallet is commonly used in orthopedic surgeries for bone cutting and shaping.",
    image: "/lovable-uploads/meade-ortho-mallet.png"
  },
  {
    id: 14,
    question: "Identify this spinal instrument:",
    choices: [
      "Laminectomy Rongeur",
      "Kerrison Laminectomy Rongeur",
      "Bone Rongeur",
      "Spinal Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Kerrison laminectomy rongeur is a specialized neurosurgical instrument designed for removing bone and ligament during spinal procedures, particularly laminectomies. It features angled jaws with sharp cutting edges that can access tight spaces around the spinal column. The instrument allows surgeons to remove small pieces of bone (lamina) and ligamentum flavum with precision.",
    image: "/lovable-uploads/kerrison-laminectomy-rongeur.png"
  },
  {
    id: 15,
    question: "Identify this surgical retractor:",
    choices: [
      "Self-Retaining Retractor",
      "Alm Retractor",
      "Weitlaner Retractor",
      "Gelpi Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Alm retractor is a self-retaining surgical instrument used to hold tissues apart and maintain surgical exposure during various procedures. It features adjustable arms with sharp or blunt prongs that can be positioned to retract different tissue types. The retractor's design allows surgeons to work with both hands free while maintaining optimal visualization.",
    image: "/lovable-uploads/alm-retractor.png"
  },
  {
    id: 16,
    question: "Identify this bone elevation instrument:",
    choices: [
      "Joseph Periosteal Elevator",
      "Key Periosteal Elevator",
      "Freer Elevator",
      "Langenbeck Periosteal Elevator"
    ],
    correctAnswer: 1,
    explanation: "The Key periosteal elevator is a specialized surgical instrument designed to lift and separate the periosteum from bone surfaces. It features a flat, curved blade with a sharp edge that allows surgeons to carefully dissect periosteal tissue while preserving the underlying bone structure. This instrument is commonly used in orthopedic, oral, and reconstructive surgeries.",
    image: "/lovable-uploads/key-periosteal-elevator.png"
  },
  {
    id: 17,
    question: "Identify these surgical pliers:",
    choices: [
      "Surgical Pliers",
      "Needle-Nose Pliers",
      "Wire Cutting Pliers",
      "Hemostatic Pliers"
    ],
    correctAnswer: 1,
    explanation: "Needle-nose pliers are precision surgical instruments featuring long, narrow, pointed jaws that provide excellent grip and manipulation capabilities in confined spaces. They are used for grasping small objects, bending wire, manipulating sutures, and handling delicate hardware during surgical procedures. The pointed design allows access to areas where standard forceps cannot reach.",
    image: "/lovable-uploads/needle-nose-pliers.png"
  },
  {
    id: 18,
    question: "Identify this orthopedic cutting instrument:",
    choices: [
      "Pin Cutter",
      "Large Bone Pin Cutter",
      "Wire Cutter",
      "Rod Cutter"
    ],
    correctAnswer: 1,
    explanation: "The Large Bone Pin Cutter is a heavy-duty orthopedic instrument designed specifically for cutting large diameter pins, wires, and rods used in orthopedic fixation. It features robust cutting jaws with leverage handles that provide the mechanical advantage needed to cut through thick metal hardware. This instrument is essential during procedures involving the removal or adjustment of orthopedic implants.",
    image: "/lovable-uploads/large-bone-pin-cutter.png"
  },
  {
    id: 19,
    question: "Identify this neurosurgical retractor:",
    choices: [
      "Brain Retractor",
      "Cerebellar Retractor",
      "Cortical Retractor",
      "Neural Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Cerebellar retractor is a specialized neurosurgical instrument designed for retracting and protecting the cerebellum during posterior fossa procedures. It features a curved, spatulated blade that conforms to the cerebellar surface, providing gentle retraction without causing tissue trauma. This instrument is essential for accessing the brainstem, fourth ventricle, and cerebellopontine angle.",
    image: "/lovable-uploads/cerebellar-retractor.png"
  },
  {
    id: 20,
    question: "Identify this spinal instrument:",
    choices: [
      "Disc Rongeur",
      "Cushing Intervertebral Disc Rongeur",
      "Kerrison Rongeur",
      "Laminectomy Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Cushing intervertebral disc rongeur is a specialized neurosurgical instrument designed for removing disc material during discectomy procedures. It features angled, cup-shaped jaws that can grasp and remove herniated or degenerated disc tissue with precision. The instrument's design allows surgeons to access the disc space through small incisions while maintaining control over tissue removal.",
    image: "/lovable-uploads/cushing-intervertebral-disc-rongeur.png"
  }
];