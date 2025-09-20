export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const ophthalmologyInstrumentsQuestions: Question[] = [
  {
    id: 1,
    question: "What is the name of this ophthalmology instrument?",
    choices: [
      "Castroviejo Corneal Scissors",
      "Iris Scissors", 
      "Westcott Scissors",
      "Knapp Strabismus Scissors"
    ],
    correctAnswer: 0,
    explanation: "Castroviejo Corneal Scissors are specialized microsurgical scissors designed for delicate corneal procedures with fine, curved blades.",
    image: "/lovable-uploads/castroviejo-corneal-scissors.png"
  },
  {
    id: 2,
    question: "Identify this delicate ophthalmology instrument:",
    choices: [
      "Von Graef Strabismus Hook",
      "Bonn Iris Hook",
      "Castroviejo Hook",
      "Desmarres Hook"
    ],
    correctAnswer: 1,
    explanation: "The Bonn Iris Hook is used to manipulate and retract the iris during cataract surgery and other intraocular procedures.",
    image: "/lovable-uploads/bonn-iris-hook.png"
  },
  {
    id: 3,
    question: "What type of speculum is shown in this image?",
    choices: [
      "Barraquer Eye Speculum",
      "Alfonso Eye Speculum", 
      "Castroviejo Eye Speculum",
      "Desmarres Lid Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Alfonso Eye Speculum is an eyelid retractor that holds the eyelids open during ophthalmic procedures while maintaining patient comfort.",
    image: "/lovable-uploads/alfonso-eye-speculum.png"
  },
  {
    id: 4,
    question: "This wire lid speculum is called:",
    choices: [
      "Alfonso Eye Speculum",
      "Castroviejo Eye Speculum",
      "Barraquer Eye Speculum",
      "Desmarres Lid Retractor"
    ],
    correctAnswer: 2,
    explanation: "The Barraquer Eye Speculum features adjustable arms and smooth edges to prevent trauma to delicate eyelid tissue during eye surgery.",
    image: "/lovable-uploads/barraquer-eye-speculum.png"
  },
  {
    id: 5,
    question: "What is this thin, blunt-tipped instrument used for?",
    choices: [
      "Bowman Lacrimal Probe",
      "Lacrimal Cannula",
      "Iris Hook",
      "Calipers"
    ],
    correctAnswer: 1,
    explanation: "The Lacrimal Cannula is used for irrigation and probing of the lacrimal system, essential for treating blocked tear ducts.",
    image: "/lovable-uploads/lacrimal-cannula.png"
  },
  {
    id: 6,
    question: "These delicate microsurgical forceps are:",
    choices: [
      "Bonn Micro Iris Suture Forceps",
      "Colibri Tissue Forceps",
      "Castroviejo Suturing Forceps",
      "Bechert-McPherson Tying Forceps"
    ],
    correctAnswer: 1,
    explanation: "Colibri Tissue Forceps are designed for handling fragile ophthalmic tissues with fine tips and serrated edges for secure tissue grasping.",
    image: "/lovable-uploads/colibri-tissue-forceps.png"
  },
  {
    id: 7,
    question: "Identify these precision ophthalmic forceps:",
    choices: [
      "Colibri Tissue Forceps",
      "Castroviejo Suturing Forceps",
      "Bechert-McPherson Tying Forceps",
      "Bonn Micro Iris Suture Forceps"
    ],
    correctAnswer: 1,
    explanation: "Castroviejo Suturing Forceps are specifically designed for ophthalmic suturing procedures with fine tips for handling delicate suture materials.",
    image: "/lovable-uploads/castroviejo-suturing-forceps.png"
  },
  {
    id: 8,
    question: "What are these fine-pointed scissors called?",
    choices: [
      "Castroviejo Corneal Scissors",
      "Knapp Strabismus Scissors",
      "Iris Scissors",
      "Westcott Scissors"
    ],
    correctAnswer: 2,
    explanation: "Iris Scissors are small, fine-pointed scissors designed for cutting iris tissue and other delicate intraocular structures.",
    image: "/lovable-uploads/iris-scissors.png"
  },
  {
    id: 9,
    question: "These angled forceps are:",
    choices: [
      "Castroviejo Suturing Forceps",
      "Bechert-McPherson Tying Forceps",
      "Bonn Micro Iris Suture Forceps",
      "Colibri Tissue Forceps"
    ],
    correctAnswer: 1,
    explanation: "Bechert-McPherson Tying Forceps are designed for tying knots and manipulating sutures in microsurgical procedures with angled tips for improved access.",
    image: "/lovable-uploads/bechert-mcpherson-tying-forceps.png"
  },
  {
    id: 10,
    question: "These curved scissors are used for:",
    choices: [
      "Corneal procedures",
      "Strabismus surgery",
      "Iris procedures",
      "Lacrimal surgery"
    ],
    correctAnswer: 1,
    explanation: "Knapp Strabismus Scissors are specifically designed for extraocular muscle surgery, used in strabismus procedures to cut and adjust eye muscles.",
    image: "/lovable-uploads/knapp-strabismus-scissors.png"
  },
  {
    id: 11,
    question: "This adjustable eyelid speculum is:",
    choices: [
      "Alfonso Eye Speculum",
      "Barraquer Eye Speculum",
      "Castroviejo Eye Speculum",
      "Desmarres Lid Retractor"
    ],
    correctAnswer: 2,
    explanation: "The Castroviejo Eye Speculum is designed for microsurgical procedures with smooth, curved blades that gently retract eyelids.",
    image: "/lovable-uploads/castroviejo-eye-speculum.png"
  },
  {
    id: 12,
    question: "This curved spoon instrument is used for:",
    choices: [
      "Lens extraction",
      "Enucleation procedures",
      "Corneal procedures",
      "Lacrimal drainage"
    ],
    correctAnswer: 1,
    explanation: "The Wells Enucleation Spoon is used for enucleation procedures to remove the eyeball, with a curved design for safe orbital dissection.",
    image: "/lovable-uploads/wells-enucleation-spoon.png"
  },
  {
    id: 13,
    question: "These graduated probes are:",
    choices: [
      "Lacrimal Cannula",
      "Bowman Lacrimal Probe",
      "Von Graef Strabismus Hook",
      "Bonn Iris Hook"
    ],
    correctAnswer: 1,
    explanation: "Bowman Lacrimal Probes are used for exploring and dilating the lacrimal passages, essential for diagnosing tear duct obstructions.",
    image: "/lovable-uploads/bowman-lacrimal-probe.png"
  },
  {
    id: 14,
    question: "These specialized iris forceps are:",
    choices: [
      "Castroviejo Suturing Forceps",
      "Bonn Micro Iris Suture Forceps",
      "Colibri Tissue Forceps",
      "Bechert-McPherson Tying Forceps"
    ],
    correctAnswer: 1,
    explanation: "Bonn Micro Iris Suture Forceps are designed for handling and manipulating sutures in iris procedures with fine, smooth tips.",
    image: "/lovable-uploads/bonn-micro-iris-suture-forceps.png"
  },
  {
    id: 15,
    question: "This specialized needle holder is:",
    choices: [
      "Castroviejo Needle Holder",
      "Barraquer Needle Holder",
      "Castroviejo Needle Holder-Delicate",
      "Colibri Tissue Forceps"
    ],
    correctAnswer: 1,
    explanation: "The Barraquer Needle Holder is designed for ophthalmic microsurgery with a locking mechanism and precise grip for secure suture placement.",
    image: "/lovable-uploads/barraquer-needle-holder.png"
  },
  {
    id: 16,
    question: "This ultra-fine needle holder is:",
    choices: [
      "Barraquer Needle Holder",
      "Castroviejo Needle Holder-Delicate",
      "Castroviejo Needle Holder",
      "Castroviejo Suturing Forceps"
    ],
    correctAnswer: 1,
    explanation: "The Castroviejo Needle Holder-Delicate is designed for the most delicate microsurgical procedures with curved jaws and precise control.",
    image: "/lovable-uploads/castroviejo-needle-holder-delicate.png"
  },
  {
    id: 17,
    question: "This precision measuring instrument is:",
    choices: [
      "Iris Scissors",
      "Castroviejo Calipers",
      "Lacrimal Cannula",
      "Wells Enucleation Spoon"
    ],
    correctAnswer: 1,
    explanation: "Castroviejo Calipers are used to measure distances and dimensions during ophthalmic surgery, essential for accurate placement of incisions.",
    image: "/lovable-uploads/castroviejo-calipers.png"
  },
  {
    id: 18,
    question: "This specialized hook instrument is:",
    choices: [
      "Bonn Iris Hook",
      "Von Graef Strabismus Hook",
      "Lacrimal Cannula",
      "Bowman Lacrimal Probe"
    ],
    correctAnswer: 1,
    explanation: "The Von Graef Strabismus Hook is used for manipulating extraocular muscles during strabismus surgery with a delicate curved tip for precise muscle positioning.",
    image: "/lovable-uploads/von-graef-strabismus-hook.png"
  },
  {
    id: 19,
    question: "This eyelid retractor is:",
    choices: [
      "Castroviejo Eye Speculum",
      "Barraquer Eye Speculum",
      "Desmarres Lid Retractor",
      "Alfonso Eye Speculum"
    ],
    correctAnswer: 2,
    explanation: "The Desmarres Lid Retractor is designed to hold and position the eyelid during ophthalmic procedures with a curved blade that conforms to eyelid anatomy.",
    image: "/lovable-uploads/desmarres-lid-retractor.png"
  }
];