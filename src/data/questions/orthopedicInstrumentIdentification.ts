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
      "Gelpi Retractor",
      "Weitlaner Retractor",
      "Hohmann Retractor"
    ],
    correctAnswer: 0,
    explanation: "A rake retractor is a multi-pronged retractor designed for retracting soft tissues and muscle during orthopedic procedures.",
    image: "/lovable-uploads/rake-retractor.png"
  },
  {
    id: 2,
    question: "Identify this self-retaining retractor:",
    choices: [
      "Rake Retractor",
      "Gelpi Retractor",
      "Hohmann Retractor",
      "Cobra Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Gelpi retractor is a self-retaining retractor featuring two curved arms with sharp hooks and a spring-loaded ratcheting mechanism.",
    image: "/lovable-uploads/gelpi-retractor.png"
  },
  {
    id: 3,
    question: "Identify this periosteal elevator:",
    choices: [
      "Freer Elevator",
      "Key Elevator",
      "Cobb Elevator",
      "Joseph Periosteal Elevator"
    ],
    correctAnswer: 2,
    explanation: "The Cobb elevator is a specialized periosteal elevator commonly used in spinal surgery for lifting and separating the periosteum from bone surfaces.",
    image: "/lovable-uploads/cobb-elevator.png"
  },
  {
    id: 4,
    question: "Identify this orthopedic cutting instrument:",
    choices: [
      "Wire Cutter",
      "Bone Cutter",
      "Pin Cutter",
      "Cable Cutter"
    ],
    correctAnswer: 0,
    explanation: "Orthopedic wire cutters are specialized cutting instruments designed for cutting surgical wires, pins, and small orthopedic hardware.",
    image: "/lovable-uploads/wire-cutter.png"
  },
  {
    id: 5,
    question: "Identify this self-retaining retractor:",
    choices: [
      "Gelpi Retractor",
      "Weitlaner Retractor",
      "Rake Retractor",
      "Hohmann Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Weitlaner retractor is a self-retaining retractor featuring multiple sharp prongs on curved arms with a ratcheting mechanism.",
    image: "/lovable-uploads/weitlaner-retractor.png"
  },
  {
    id: 6,
    question: "Identify this bone lever retractor:",
    choices: [
      "Rake Retractor",
      "Gelpi Retractor",
      "Hohmann Retractor",
      "Weitlaner Retractor"
    ],
    correctAnswer: 2,
    explanation: "The Hohmann retractor is a specialized orthopedic retractor featuring a curved blade designed for retracting muscles away from bone surfaces.",
    image: "/lovable-uploads/hohmann-retractor.png"
  },
  {
    id: 7,
    question: "Identify this neurosurgical rongeur:",
    choices: [
      "Ruskin Rongeur",
      "Leksell Rongeur",
      "Pituitary Rongeur",
      "Jansen Rongeur"
    ],
    correctAnswer: 2,
    explanation: "A pituitary rongeur has an elongated shaft and small, delicate cutting jaws designed for removing tissue in confined spaces during neurosurgical procedures.",
    image: "/lovable-uploads/pituitary-rongeur.png"
  },
  {
    id: 8,
    question: "Identify this bone cutting forceps:",
    choices: [
      "Ruskin Rongeur",
      "Leksell Rongeur",
      "Pituitary Rongeur",
      "Jansen Rongeur"
    ],
    correctAnswer: 0,
    explanation: "The Ruskin rongeur is a specialized bone-cutting instrument featuring curved, spring-loaded handles and sharp cutting jaws.",
    image: "/lovable-uploads/ruskin-rongeur.png"
  },
  {
    id: 9,
    question: "Identify this neurosurgical rongeur:",
    choices: [
      "Ruskin Rongeur",
      "Leksell Rongeur",
      "Pituitary Rongeur",
      "Duck Bill Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Leksell rongeur is a precision neurosurgical instrument featuring delicate, curved cutting jaws designed for removing small pieces of bone and tissue.",
    image: "/lovable-uploads/leksell-rongeur.png"
  },
  {
    id: 10,
    question: "Identify this bone cutting forceps:",
    choices: [
      "Ruskin Rongeur",
      "Leksell Rongeur",
      "Jansen Rongeur",
      "Duck Bill Rongeur"
    ],
    correctAnswer: 2,
    explanation: "The Jansen rongeur is a specialized bone-cutting instrument featuring curved cutting jaws and spring-loaded handles for controlled bone removal.",
    image: "/lovable-uploads/jansen-rongeur.png"
  },
  {
    id: 11,
    question: "Identify this specialized rongeur:",
    choices: [
      "Ruskin Rongeur",
      "Leksell Rongeur",
      "Duck Bill Rongeur",
      "Pituitary Rongeur"
    ],
    correctAnswer: 2,
    explanation: "The Duck Bill Rongeur features curved jaws that resemble a duck's bill, designed for cutting and removing bone in confined spaces.",
    image: "/lovable-uploads/duck-bill-rongeur.png"
  },
  {
    id: 12,
    question: "Identify this bone cutting instrument:",
    choices: [
      "Bone Cutter",
      "Wire Cutter",
      "Pin Cutter",
      "Plate Cutter"
    ],
    correctAnswer: 0,
    explanation: "Bone cutters are precision instruments used for cutting bones and bone fragments in orthopedic procedures.",
    image: "/lovable-uploads/bone-cutter.png"
  },
  {
    id: 13,
    question: "Identify this periosteal elevator:",
    choices: [
      "Cobb Elevator",
      "Key Elevator",
      "Freer Elevator",
      "Joseph Periosteal Elevator"
    ],
    correctAnswer: 2,
    explanation: "The Freer elevator is a double-ended periosteal elevator with a straight, sharp edge on one end and a curved edge on the other.",
    image: "/lovable-uploads/freer-elevator.png"
  },
  {
    id: 14,
    question: "Identify this periosteal elevator:",
    choices: [
      "Freer Elevator",
      "Key Elevator",
      "Cobb Elevator",
      "Langenbeck Periosteal Elevator"
    ],
    correctAnswer: 1,
    explanation: "The Key elevator is a robust periosteal elevator featuring a wide, flat blade with a beveled edge for separating periosteum from bone.",
    image: "/lovable-uploads/key-elevator.png"
  },
  {
    id: 15,
    question: "Identify this bone shaping instrument:",
    choices: [
      "Bone Rasp",
      "Putti Rasp",
      "Bone File",
      "Bone Curette"
    ],
    correctAnswer: 1,
    explanation: "The Putti rasp is a double-ended bone rasp featuring coarse, textured surfaces designed for shaping and smoothing bone during orthopedic procedures.",
    image: "/lovable-uploads/putti-rasp.png"
  },
  {
    id: 16,
    question: "Identify this surgical curette:",
    choices: [
      "Bone Rasp",
      "Bone Curette",
      "Putti Rasp",
      "Bone Chisel"
    ],
    correctAnswer: 1,
    explanation: "A bone curette is a spoon-shaped surgical instrument with a sharp, curved cutting edge designed for scraping and removing tissue from bone surfaces.",
    image: "/lovable-uploads/bone-curette.png"
  },
  {
    id: 17,
    question: "Identify this surgical mallet:",
    choices: [
      "Bone Mallet",
      "Surgical Hammer",
      "Bone Impactor",
      "Orthopedic Mallet"
    ],
    correctAnswer: 0,
    explanation: "A bone mallet is a specialized surgical hammer with a heavy metal head designed for delivering controlled impact force during orthopedic procedures.",
    image: "/lovable-uploads/bone-mallet.png"
  },
  {
    id: 18,
    question: "Identify this knife handle:",
    choices: [
      "Beaver Knife Handle",
      "#3 Knife Handle",
      "#4 Knife Handle",
      "Microsurgical Handle"
    ],
    correctAnswer: 0,
    explanation: "The Beaver knife handle is a specialized surgical handle designed to accommodate small, precise surgical blades for delicate cutting procedures.",
    image: "/lovable-uploads/beaver-knife-handle.png"
  },
  {
    id: 19,
    question: "Identify these bone cutting chisels:",
    choices: [
      "Smith Peterson Osteotomes",
      "Lambotte Osteotomes",
      "Stille Bone Chisels",
      "Bone Cutting Chisels"
    ],
    correctAnswer: 1,
    explanation: "Lambotte osteotomes are precision bone-cutting instruments featuring flat, beveled cutting edges in various widths for precise bone cutting and shaping.",
    image: "/lovable-uploads/lambotte-osteotomes.png"
  },
  {
    id: 20,
    question: "Identify this scalpel handle:",
    choices: [
      "#3 Knife Handle",
      "#4 Knife Handle",
      "#7 Knife Handle",
      "Beaver Knife Handle"
    ],
    correctAnswer: 0,
    explanation: "The #3 knife handle is a standard surgical scalpel handle designed to accommodate #10, #11, #12, and #15 surgical blades.",
    image: "/lovable-uploads/knife-handle-3.png"
  },
  {
    id: 21,
    question: "Identify this curved retractor:",
    choices: [
      "Hohmann Retractor",
      "Cobra Retractor",
      "Parker Retractor",
      "Rake Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Cobra retractor is a curved, handheld retractor featuring a smooth, curved blade designed for retracting soft tissues.",
    image: "/lovable-uploads/cobra-retractor.png"
  },
  {
    id: 22,
    question: "Identify this spinal retractor:",
    choices: [
      "Posterior-Inferior Retractor",
      "Love Nerve Root Retractor",
      "Taylor Spinal Retractor",
      "Meyerding Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Posterior-Inferior retractor is a specialized spinal retractor designed for retracting muscles during posterior spinal procedures.",
    image: "/lovable-uploads/posterior-inferior-retractor.png"
  },
  {
    id: 23,
    question: "Identify this bone impactor:",
    choices: [
      "Bone Tamp",
      "Bone Mallet",
      "Bone Impactor",
      "Bone Punch"
    ],
    correctAnswer: 0,
    explanation: "A bone tamp is a specialized orthopedic instrument featuring a textured working end designed for impacting and compacting bone grafts.",
    image: "/lovable-uploads/bone-tamp.png"
  },
  {
    id: 24,
    question: "Identify this bone cutting forceps:",
    choices: [
      "Ruskin Rongeur",
      "Stille Leur Bone Rongeur",
      "Jansen Rongeur",
      "Leksell Rongeur"
    ],
    correctAnswer: 1,
    explanation: "The Stille Leur bone rongeur is a specialized bone-cutting instrument featuring curved, sharp cutting jaws with a spring-loaded mechanism.",
    image: "/lovable-uploads/stille-leur-bone-rongeur.png"
  },
  {
    id: 25,
    question: "Identify this surgical saw blade:",
    choices: [
      "Oscillating Saw Blade",
      "Reciprocating Saw Blade",
      "Sagittal Saw Blade",
      "Bone Saw Blade"
    ],
    correctAnswer: 0,
    explanation: "An oscillating saw blade is a specialized cutting attachment designed for powered oscillating saws used in orthopedic surgery.",
    image: "/lovable-uploads/oscillating-saw-blade.png"
  },
  {
    id: 26,
    question: "Identify this mastoid retractor:",
    choices: [
      "Heiss Mastoid Retractor",
      "Mastoid Retractor",
      "Self-Retaining Retractor",
      "ENT Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Heiss mastoid retractor is a specialized self-retaining retractor designed specifically for mastoid and temporal bone procedures.",
    image: "/lovable-uploads/heiss-mastoid-retractor.png"
  },
  {
    id: 27,
    question: "Identify this bone chisel:",
    choices: [
      "Lambotte Osteotome",
      "Smith Peterson Osteotome",
      "Stille Bone Chisel",
      "Bone Cutting Chisel"
    ],
    correctAnswer: 2,
    explanation: "The Stille bone chisel is a precision instrument with a sharp, beveled cutting edge designed for cutting and shaping bone tissue.",
    image: "/lovable-uploads/stille-bone-chisel.png"
  },
  {
    id: 28,
    question: "Identify this spinal osteotome:",
    choices: [
      "Lambotte Osteotome",
      "Smith Peterson Osteotome",
      "Stille Bone Chisel",
      "Cobb Osteotome"
    ],
    correctAnswer: 1,
    explanation: "The Smith Peterson osteotome is a specialized bone-cutting instrument designed for spinal osteotomies and bone cutting procedures.",
    image: "/lovable-uploads/smith-peterson-osteotome.png"
  },
  {
    id: 29,
    question: "Identify this bone cutting forceps:",
    choices: [
      "Stille Horsley Bone Cutting Forceps",
      "Leksell Rongeur",
      "Ruskin Rongeur",
      "Bone Cutting Pliers"
    ],
    correctAnswer: 0,
    explanation: "The Stille Horsley bone cutting forceps are specialized instruments designed for cutting small bones and bone fragments with precision.",
    image: "/lovable-uploads/stille-horsley-bone-cutting-forceps.png"
  },
  {
    id: 30,
    question: "Identify this orthopedic awl:",
    choices: [
      "Bone Awl",
      "Bone Punch",
      "Bone Probe",
      "Starter Awl"
    ],
    correctAnswer: 0,
    explanation: "A bone awl is a pointed instrument used to create starter holes in bone for screws, pins, or other orthopedic hardware.",
    image: "/lovable-uploads/bone-awl.png"
  },
  {
    id: 31,
    question: "Identify this orthopedic hook:",
    choices: [
      "Bone Hook",
      "Nerve Hook",
      "Tissue Hook",
      "Retraction Hook"
    ],
    correctAnswer: 0,
    explanation: "A bone hook is a curved instrument used for manipulating, lifting, and retracting bone fragments during orthopedic procedures.",
    image: "/lovable-uploads/bone-hook.png"
  },
  {
    id: 32,
    question: "Identify this surgical scissors:",
    choices: [
      "Stevens Tenotomy Scissors",
      "Metzenbaum Scissors",
      "Mayo Scissors",
      "Wire Cutting Scissors"
    ],
    correctAnswer: 0,
    explanation: "Stevens tenotomy scissors are delicate, curved scissors designed for cutting tendons and fine tissues in orthopedic procedures.",
    image: "/lovable-uploads/stevens-tenotomy-scissors.png"
  },
  {
    id: 33,
    question: "Identify this wire cutting instrument:",
    choices: [
      "Wire Cutter",
      "Wire Cutting Scissors",
      "Pin Cutter",
      "Cable Cutter"
    ],
    correctAnswer: 1,
    explanation: "Wire cutting scissors are specialized scissors designed for cutting orthopedic wires and small metallic materials.",
    image: "/lovable-uploads/wire-cutting-scissors.png"
  },
  {
    id: 34,
    question: "Identify this periosteal elevator:",
    choices: [
      "Freer Elevator",
      "Key Elevator",
      "Joseph Periosteal Elevator",
      "Cobb Elevator"
    ],
    correctAnswer: 2,
    explanation: "The Joseph periosteal elevator is a nasal and orthopedic instrument with a curved, sharp blade for elevating periosteum.",
    image: "/lovable-uploads/joseph-periosteal-elevator.png"
  },
  {
    id: 35,
    question: "Identify this periosteal elevator:",
    choices: [
      "Freer Elevator",
      "Key Elevator",
      "Langenbeck Periosteal Elevator",
      "Cobb Elevator"
    ],
    correctAnswer: 2,
    explanation: "The Langenbeck periosteal elevator is a robust instrument with a wide, flat blade designed for elevating periosteum from bone surfaces.",
    image: "/lovable-uploads/langenbeck-periosteal-elevator.png"
  },
  {
    id: 36,
    question: "Identify this elevator:",
    choices: [
      "Freer Elevator",
      "Chandler Elevator",
      "Key Elevator",
      "Cobb Elevator"
    ],
    correctAnswer: 1,
    explanation: "The Chandler elevator is a specialized instrument used for elevating and separating tissues in orthopedic procedures.",
    image: "/lovable-uploads/chandler-elevator.png"
  },
  {
    id: 37,
    question: "Identify this rongeur:",
    choices: [
      "Kerrison Laminectomy Rongeur",
      "Leksell Rongeur",
      "Ruskin Rongeur",
      "Pituitary Rongeur"
    ],
    correctAnswer: 0,
    explanation: "The Kerrison laminectomy rongeur is a specialized instrument designed for removing bone during spinal laminectomy procedures.",
    image: "/lovable-uploads/kerrison-laminectomy-rongeur.png"
  },
  {
    id: 38,
    question: "Identify this cranial rongeur:",
    choices: [
      "Cushing Cranial Rongeur",
      "Leksell Rongeur",
      "Jansen Rongeur",
      "Ruskin Rongeur"
    ],
    correctAnswer: 0,
    explanation: "The Cushing cranial rongeur is a neurosurgical instrument designed for removing small pieces of bone during cranial procedures.",
    image: "/lovable-uploads/cushing-cranial-rongeur.png"
  },
  {
    id: 39,
    question: "Identify this neurosurgical instrument:",
    choices: [
      "Penfield 1",
      "Nerve Hook",
      "Brain Spatula",
      "Dissector"
    ],
    correctAnswer: 0,
    explanation: "The Penfield 1 is a neurosurgical dissector with a ball tip used for gentle brain tissue manipulation and dissection.",
    image: "/lovable-uploads/penfield-1.png"
  },
  {
    id: 40,
    question: "Identify this neurosurgical instrument:",
    choices: [
      "Penfield 1",
      "Penfield 3",
      "Nerve Hook",
      "Brain Spatula"
    ],
    correctAnswer: 1,
    explanation: "The Penfield 3 is a neurosurgical dissector with a spoon-shaped tip used for brain tissue dissection and retraction.",
    image: "/lovable-uploads/penfield-3.png"
  },
  {
    id: 41,
    question: "Identify this neurosurgical hook:",
    choices: [
      "Bone Hook",
      "Nerve Hook",
      "Tissue Hook",
      "Dural Hook"
    ],
    correctAnswer: 1,
    explanation: "A nerve hook is a delicate, curved instrument used for manipulating and retracting nerves and delicate tissues during neurosurgical procedures.",
    image: "/lovable-uploads/nerve-hook.png"
  },
  {
    id: 42,
    question: "Identify this dural separator:",
    choices: [
      "Woodson Dural Separator",
      "Penfield Dissector",
      "Nerve Hook",
      "Brain Spatula"
    ],
    correctAnswer: 0,
    explanation: "The Woodson dural separator is a specialized neurosurgical instrument used for separating and manipulating dural tissue.",
    image: "/lovable-uploads/woodson-dural-separator.png"
  },
  {
    id: 43,
    question: "Identify this cranial perforator:",
    choices: [
      "Cranial Perforator",
      "Bone Drill",
      "Burr Hole Maker",
      "Cranial Drill"
    ],
    correctAnswer: 0,
    explanation: "A cranial perforator is a specialized neurosurgical instrument used to create burr holes in the skull during cranial procedures.",
    image: "/lovable-uploads/cranial-perforator.png"
  },
  {
    id: 44,
    question: "Identify this cranial cutting instrument:",
    choices: [
      "Craniotome",
      "Cranial Perforator",
      "Bone Saw",
      "Oscillating Saw"
    ],
    correctAnswer: 0,
    explanation: "A craniotome is a specialized neurosurgical instrument used for cutting bone during craniotomy procedures.",
    image: "/lovable-uploads/craniotome.png"
  },
  {
    id: 45,
    question: "Identify this tissue separator:",
    choices: [
      "Groove Director",
      "Nerve Hook",
      "Tissue Dissector",
      "Probe"
    ],
    correctAnswer: 0,
    explanation: "A groove director is a blunt-tipped instrument used for separating tissues and guiding other instruments along tissue planes.",
    image: "/lovable-uploads/groove-director.png"
  },
  {
    id: 46,
    question: "Identify this aneurysm clip:",
    choices: [
      "Aneurysm Clip",
      "Hemostatic Clip",
      "Vascular Clip",
      "Micro Clip"
    ],
    correctAnswer: 0,
    explanation: "An aneurysm clip is a specialized neurosurgical device used to occlude aneurysms by clipping the neck of the aneurysm.",
    image: "/lovable-uploads/aneurysm-clip.png"
  },
  {
    id: 47,
    question: "Identify this clip applier:",
    choices: [
      "Aneurysm Clip Applier",
      "Hemostatic Clip Applier",
      "Vascular Clip Applier",
      "Micro Clip Applier"
    ],
    correctAnswer: 0,
    explanation: "An aneurysm clip applier is a specialized instrument used to apply aneurysm clips during neurovascular procedures.",
    image: "/lovable-uploads/aneurysm-clip-applier.png"
  },
  {
    id: 48,
    question: "Identify these scalp clips:",
    choices: [
      "Raney Clips",
      "Hemostatic Clips",
      "Scalp Clips",
      "Micro Clips"
    ],
    correctAnswer: 0,
    explanation: "Raney clips are specialized hemostatic clips used to control bleeding from scalp edges during neurosurgical procedures.",
    image: "/lovable-uploads/raney-clips.png"
  },
  {
    id: 49,
    question: "Identify this clip applying forceps:",
    choices: [
      "Raney Clip Applying Forceps",
      "Hemostatic Forceps",
      "Clip Applier",
      "Micro Forceps"
    ],
    correctAnswer: 0,
    explanation: "Raney clip applying forceps are specialized instruments used to apply Raney clips for scalp hemostasis during neurosurgical procedures.",
    image: "/lovable-uploads/raney-clip-applying-forceps.png"
  },
  {
    id: 50,
    question: "Identify this grasping forceps:",
    choices: [
      "Yasargil Tumor Grasping Forceps",
      "Micro Forceps",
      "Tissue Forceps",
      "Bayonet Forceps"
    ],
    correctAnswer: 0,
    explanation: "Yasargil tumor grasping forceps are specialized neurosurgical instruments used for grasping and manipulating tumor tissue during brain surgery.",
    image: "/lovable-uploads/yasargil-tumor-grasping-forceps.png"
  },
  {
    id: 51,
    question: "Identify these bayonet scissors:",
    choices: [
      "Yasargil Bayonet Scissors",
      "Micro Scissors",
      "Curved Scissors",
      "Neurosurgical Scissors"
    ],
    correctAnswer: 0,
    explanation: "Yasargil bayonet scissors are specialized neurosurgical scissors with an angled design for cutting in deep surgical fields.",
    image: "/lovable-uploads/yasgaril-bayonet-scissors.png"
  },
  {
    id: 52,
    question: "Identify this needle driver:",
    choices: [
      "Crilewood Needle Driver",
      "Mayo-Hegar Needle Driver",
      "Micro Needle Driver",
      "Neurosurgical Needle Driver"
    ],
    correctAnswer: 0,
    explanation: "The Crilewood needle driver is a specialized neurosurgical instrument with fine tips designed for precise suturing in neurosurgical procedures.",
    image: "/lovable-uploads/crilewood-needle-driver.png"
  },
  {
    id: 53,
    question: "Identify this spinal retractor:",
    choices: [
      "Love Nerve Root Retractor",
      "Taylor Spinal Retractor",
      "Meyerding Retractor",
      "Posterior Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Love nerve root retractor is a specialized spinal instrument designed for retracting nerve roots during spinal procedures.",
    image: "/lovable-uploads/love-nerve-root-retractor.png"
  },
  {
    id: 54,
    question: "Identify this spinal retractor:",
    choices: [
      "Love Nerve Root Retractor",
      "Taylor Spinal Retractor",
      "Meyerding Retractor",
      "Inge Lamina Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Taylor spinal retractor is a specialized instrument designed for retracting tissues during spinal surgical procedures.",
    image: "/lovable-uploads/taylor-spinal-retractor.png"
  },
  {
    id: 55,
    question: "Identify this spinal retractor:",
    choices: [
      "Love Nerve Root Retractor",
      "Taylor Spinal Retractor",
      "Meyerding Retractor",
      "Inge Lamina Retractor"
    ],
    correctAnswer: 2,
    explanation: "The Meyerding retractor is a specialized spinal retractor designed for retracting muscles and tissues during spine surgery.",
    image: "/lovable-uploads/meyerding-retractor.png"
  },
  {
    id: 56,
    question: "Identify this lamina retractor:",
    choices: [
      "Love Nerve Root Retractor",
      "Taylor Spinal Retractor",
      "Inge Lamina Retractor",
      "Meyerding Retractor"
    ],
    correctAnswer: 2,
    explanation: "The Inge lamina retractor is a specialized instrument designed for retracting the lamina during spinal procedures.",
    image: "/lovable-uploads/inge-lamina-retractor.png"
  },
  {
    id: 57,
    question: "Identify this retractor:",
    choices: [
      "Charnley Retractor",
      "Hip Retractor",
      "Orthopedic Retractor",
      "Joint Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Charnley retractor is a specialized orthopedic retractor designed for hip surgery and joint procedures.",
    image: "/lovable-uploads/charnley-retractor.png"
  },
  {
    id: 58,
    question: "Identify this retractor:",
    choices: [
      "Balfour Retractor",
      "Abdominal Retractor",
      "Self-Retaining Retractor",
      "Deep Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Balfour retractor is a self-retaining abdominal retractor with adjustable blades for deep surgical exposure.",
    image: "/lovable-uploads/balfour-retractor.png"
  },
  {
    id: 59,
    question: "Identify this retractor system:",
    choices: [
      "Bookwalter Retractor",
      "Table-Mounted Retractor",
      "Modular Retractor System",
      "Universal Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Bookwalter retractor is a table-mounted, modular retractor system designed for deep abdominal and pelvic procedures.",
    image: "/lovable-uploads/bookwalter-retractor.png"
  },
  {
    id: 60,
    question: "Identify this retractor:",
    choices: [
      "O'Sullivan-O'Connor Retractor",
      "Pelvic Retractor",
      "Deep Retractor",
      "Gynecologic Retractor"
    ],
    correctAnswer: 0,
    explanation: "The O'Sullivan-O'Connor retractor is a self-retaining retractor designed for pelvic and gynecologic procedures.",
    image: "/lovable-uploads/osullivan-oconnor-retractor.png"
  },
  {
    id: 61,
    question: "Identify this retractor:",
    choices: [
      "Parker Retractor",
      "Double-Ended Retractor",
      "Hand-Held Retractor",
      "Universal Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Parker retractor is a double-ended, hand-held retractor with different blade configurations on each end.",
    image: "/lovable-uploads/parker-retractor.png"
  },
  {
    id: 62,
    question: "Identify this retractor:",
    choices: [
      "ALM Retractor",
      "Handheld Retractor",
      "Tissue Retractor",
      "Universal Retractor"
    ],
    correctAnswer: 0,
    explanation: "The ALM retractor is a handheld retractor designed for retracting tissues during various surgical procedures.",
    image: "/lovable-uploads/alm-retractor.png"
  },
  {
    id: 63,
    question: "Identify these retractors:",
    choices: [
      "Adson-Beckman Retractors",
      "Cerebellar Retractors",
      "Brain Retractors",
      "Neurosurgical Retractors"
    ],
    correctAnswer: 0,
    explanation: "Adson-Beckman retractors are specialized neurosurgical retractors designed for brain and cerebellar procedures.",
    image: "/lovable-uploads/adson-beckman-retractors.png"
  },
  {
    id: 64,
    question: "Identify this S-shaped retractor:",
    choices: [
      "Hasson S-Shaped Retractor",
      "Curved Retractor",
      "Laparoscopic Retractor",
      "Minimally Invasive Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Hasson S-shaped retractor is a specialized retractor with an S-shaped curve designed for laparoscopic procedures.",
    image: "/lovable-uploads/hasson-s-shaped-retractor.png"
  },
  {
    id: 65,
    question: "Identify this retractor:",
    choices: [
      "Hobbs Retractor",
      "Nasal Retractor",
      "ENT Retractor",
      "Septal Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Hobbs retractor is a specialized retractor designed for nasal and ENT procedures.",
    image: "/lovable-uploads/hobbs-retractor.png"
  },
  {
    id: 66,
    question: "Identify this retractor:",
    choices: [
      "Hurd Dissector Pillar Retractor",
      "Tonsil Retractor",
      "ENT Retractor",
      "Throat Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Hurd dissector pillar retractor is a specialized ENT instrument used for tonsillectomy and throat procedures.",
    image: "/lovable-uploads/hurd-dissector-pillar-retractor.png"
  },
  {
    id: 67,
    question: "Identify this retractor:",
    choices: [
      "Zimmerman-Bennett Retractor",
      "Thyroid Retractor",
      "Neck Retractor",
      "Deep Retractor"
    ],
    correctAnswer: 0,
    explanation: "The Zimmerman-Bennett retractor is a specialized retractor designed for thyroid and neck procedures.",
    image: "/lovable-uploads/zimmerman-bennett-retractor.png"
  },
  {
    id: 68,
    question: "Identify this orthopedic mallet:",
    choices: [
      "Meade Ortho Mallet",
      "Bone Mallet",
      "Surgical Hammer",
      "Orthopedic Hammer"
    ],
    correctAnswer: 0,
    explanation: "The Meade ortho mallet is a specialized orthopedic mallet designed for precise bone work and implant insertion.",
    image: "/lovable-uploads/meade-ortho-mallet.png"
  },
  {
    id: 69,
    question: "Identify this surgical clamp:",
    choices: [
      "Doyen Intestinal Clamp",
      "Bowel Clamp",
      "Intestinal Forceps",
      "Tissue Clamp"
    ],
    correctAnswer: 0,
    explanation: "The Doyen intestinal clamp is a specialized surgical clamp designed for clamping intestinal tissue during abdominal procedures.",
    image: "/lovable-uploads/doyen-intestinal-clamp.png"
  },
  {
    id: 70,
    question: "Identify this clamp:",
    choices: [
      "Kelly Clamp",
      "Hemostatic Clamp",
      "Artery Forceps",
      "Mosquito Clamp"
    ],
    correctAnswer: 0,
    explanation: "The Kelly clamp is a hemostatic forceps with transverse serrations used for clamping blood vessels and tissues.",
    image: "/lovable-uploads/kelly-clamp.png"
  },
  {
    id: 71,
    question: "Identify this bone holding clamp:",
    choices: [
      "Kern Bone Holding Clamps",
      "Bone Forceps",
      "Orthopedic Clamp",
      "Fracture Clamp"
    ],
    correctAnswer: 0,
    explanation: "Kern bone holding clamps are specialized orthopedic instruments used for holding and manipulating bone fragments during surgery.",
    image: "/lovable-uploads/kern-bone-holding-clamps.png"
  },
  {
    id: 72,
    question: "Identify this bone holding clamp:",
    choices: [
      "Lambert-Lehman Bone Holding Clamp",
      "Bone Forceps",
      "Orthopedic Clamp",
      "Reduction Clamp"
    ],
    correctAnswer: 0,
    explanation: "The Lambert-Lehman bone holding clamp is a specialized orthopedic instrument used for holding and reducing bone fragments.",
    image: "/lovable-uploads/lambert-lehman-bone-holding-clamp.png"
  },
  {
    id: 73,
    question: "Identify this bone clamp:",
    choices: [
      "Lewin Bone Clamp",
      "Bone Holding Forceps",
      "Orthopedic Clamp",
      "Bone Reduction Clamp"
    ],
    correctAnswer: 0,
    explanation: "The Lewin bone clamp is a specialized orthopedic instrument used for holding and manipulating bone during surgical procedures.",
    image: "/lovable-uploads/lewin-bone-clamp.png"
  },
  {
    id: 74,
    question: "Identify this orthopedic forceps:",
    choices: [
      "Singley Forceps",
      "Bone Forceps",
      "Orthopedic Forceps",
      "Tissue Forceps"
    ],
    correctAnswer: 0,
    explanation: "Singley forceps are specialized orthopedic instruments used for grasping and manipulating tissues during surgery.",
    image: "/lovable-uploads/singley-forceps.png"
  },
  {
    id: 75,
    question: "Identify this hardware instrument:",
    choices: [
      "Needle-Nose Pliers",
      "Wire Twister",
      "Hardware Pliers",
      "Orthopedic Pliers"
    ],
    correctAnswer: 0,
    explanation: "Needle-nose pliers have long, tapered jaws for grasping, bending, and manipulating wire and small orthopedic hardware.",
    image: "/lovable-uploads/needle-nose-pliers.png"
  },
  {
    id: 76,
    question: "Identify this plate bender:",
    choices: [
      "Plate Bender",
      "Hardware Bender",
      "Orthopedic Bender",
      "Implant Bender"
    ],
    correctAnswer: 0,
    explanation: "A plate bender is a specialized orthopedic instrument used for contouring and bending orthopedic plates to match bone anatomy.",
    image: "/lovable-uploads/plate-bender.png"
  },
  {
    id: 77,
    question: "Identify this rod bender:",
    choices: [
      "Universal Rod Bender",
      "Spinal Rod Bender",
      "Hardware Bender",
      "Orthopedic Bender"
    ],
    correctAnswer: 0,
    explanation: "The universal rod bender is a specialized instrument used for contouring spinal rods and orthopedic hardware.",
    image: "/lovable-uploads/universal-rod-bender.png"
  },
  {
    id: 78,
    question: "Identify this orthopedic screwdriver:",
    choices: [
      "Hex Orthopedic Screwdriver",
      "Bone Screwdriver",
      "Implant Screwdriver",
      "Hardware Screwdriver"
    ],
    correctAnswer: 0,
    explanation: "The hex orthopedic screwdriver is a specialized instrument used for inserting and removing orthopedic screws with hexagonal heads.",
    image: "/lovable-uploads/hex-ortho-screwdriver.png"
  },
  {
    id: 79,
    question: "Identify this measuring instrument:",
    choices: [
      "Screw Depth Gauge",
      "Bone Caliper",
      "Measurement Tool",
      "Orthopedic Ruler"
    ],
    correctAnswer: 0,
    explanation: "A screw depth gauge is a specialized orthopedic instrument used for measuring the depth of screw holes in bone.",
    image: "/lovable-uploads/screw-depth-gauge.png"
  },
  {
    id: 80,
    question: "Identify this drill accessory:",
    choices: [
      "Drill Guide",
      "Drill Sleeve",
      "Bone Guide",
      "Drilling Template"
    ],
    correctAnswer: 0,
    explanation: "A drill guide is a specialized orthopedic instrument used to guide drill bits for precise hole placement in bone.",
    image: "/lovable-uploads/drill-guide.png"
  },
  {
    id: 81,
    question: "Identify this drill chuck:",
    choices: [
      "Jacobs Chuck",
      "Drill Chuck",
      "Bone Chuck",
      "Orthopedic Chuck"
    ],
    correctAnswer: 0,
    explanation: "A Jacobs chuck is a specialized drill chuck used in orthopedic surgery for holding drill bits and other rotary instruments.",
    image: "/lovable-uploads/jacobs-chuck.png"
  },
  {
    id: 82,
    question: "Identify these orthopedic pins:",
    choices: [
      "Intramedullary Pins",
      "Kirschner Wires",
      "Steinmann Pins",
      "Orthopedic Pins"
    ],
    correctAnswer: 0,
    explanation: "Intramedullary pins are specialized orthopedic implants used for internal fixation of long bone fractures.",
    image: "/lovable-uploads/intramedullary-pins.png"
  },
  {
    id: 83,
    question: "Identify this pin cutter:",
    choices: [
      "Cannulated Pin Cutter",
      "Wire Cutter",
      "Pin Cutting Forceps",
      "Orthopedic Cutter"
    ],
    correctAnswer: 0,
    explanation: "A cannulated pin cutter is a specialized instrument designed for cutting cannulated pins and screws in orthopedic procedures.",
    image: "/lovable-uploads/cannulated-pin-cutter.png"
  },
  {
    id: 84,
    question: "Identify this hand fixation device:",
    choices: [
      "Hand Fixation Device",
      "Wrist Fixator",
      "Hand Stabilizer",
      "Orthopedic Fixator"
    ],
    correctAnswer: 0,
    explanation: "A hand fixation device is a specialized orthopedic instrument used for stabilizing and positioning the hand during surgery.",
    image: "/lovable-uploads/hand-fixation-device.png"
  },
  {
    id: 85,
    question: "Identify this measuring instrument:",
    choices: [
      "Zimmer Townley Femur Calipers",
      "Bone Calipers",
      "Femur Measuring Device",
      "Orthopedic Calipers"
    ],
    correctAnswer: 0,
    explanation: "Zimmer Townley femur calipers are specialized measuring instruments used for determining proper femoral component sizing in hip replacement surgery.",
    image: "/lovable-uploads/zimmer-townley-femur-calipers.png"
  }
];