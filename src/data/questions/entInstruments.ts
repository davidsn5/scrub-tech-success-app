export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const entInstrumentsQuestions: Question[] = [
  {
    id: 1,
    question: "Identify this ENT instrument:",
    choices: [
      "Hartmann Ear Speculum",
      "Jansen Mastoid Retractor",
      "Aufricht Nasal Retractor",
      "Cottle Nasal Speculum"
    ],
    correctAnswer: 1,
    explanation: "The Jansen mastoid retractor is used to hold open tissue during mastoid surgery, providing clear visualization of the surgical field.",
    image: "/lovable-uploads/jansen-mastoid-retractor.png"
  },
  {
    id: 2,
    question: "Identify this ENT instrument:",
    choices: [
      "Colver Tonsil Grasping Forceps",
      "Jennings Mouth Gag",
      "Hartmann Alligator Forceps",
      "Takahashi Nasal Forceps"
    ],
    correctAnswer: 1,
    explanation: "The Jennings mouth gag is used to keep the mouth open during oral and throat procedures, particularly tonsillectomies.",
    image: "/lovable-uploads/jennings-mouth-gag.png"
  },
  {
    id: 3,
    question: "Identify this ENT instrument:",
    choices: [
      "House Sickle Knife",
      "Fisher Tonsil Knife Dissector",
      "Ballenger Swivel Knife",
      "Cottle Nasal Knife"
    ],
    correctAnswer: 1,
    explanation: "The Fisher tonsil knife dissector is used for dissecting and removing tonsillar tissue during tonsillectomy procedures.",
    image: "/lovable-uploads/fisher-tonsil-knife-dissector.png"
  },
  {
    id: 4,
    question: "Identify this ENT instrument:",
    choices: [
      "Buck Ear Curette",
      "Hartmann Ear-Cupped Forceps",
      "Belucci Alligator Scissors",
      "Hartmann Alligator Forceps"
    ],
    correctAnswer: 1,
    explanation: "Hartmann ear-cupped forceps are used for grasping and removing tissue, wax, or foreign objects from the ear canal.",
    image: "/lovable-uploads/hartmann-ear-cupped-forceps.png"
  },
  {
    id: 5,
    question: "Identify this ENT instrument:",
    choices: [
      "Cottle Nasal Speculum",
      "Aufricht Nasal Retractor",
      "Hartmann Ear Speculum",
      "Jansen Mastoid Retractor"
    ],
    correctAnswer: 1,
    explanation: "The Aufricht nasal retractor is used to retract nasal tissues during rhinoplasty and other nasal surgeries.",
    image: "/lovable-uploads/aufricht-nasal-retractor.png"
  },
  {
    id: 6,
    question: "Identify this ENT instrument:",
    choices: [
      "Becker Septum Scissors",
      "Rubin Septal Marselizer",
      "Ballenger Swivel Knife",
      "Knight Nasal Scissors"
    ],
    correctAnswer: 1,
    explanation: "The Rubin septal marselizer is used to fracture and morselate septal cartilage during septoplasty procedures.",
    image: "/lovable-uploads/rubin-septal-marselizer.png"
  },
  {
    id: 7,
    question: "Identify this ENT instrument:",
    choices: [
      "Fisher Tonsil Knife Dissector",
      "House Sickle Knife",
      "Cottle Nasal Knife",
      "Ballenger Swivel Knife"
    ],
    correctAnswer: 1,
    explanation: "The House sickle knife is used for making precise incisions in ear surgery, particularly during stapedectomy procedures.",
    image: "/lovable-uploads/house-sickle-knife.png"
  },
  {
    id: 8,
    question: "Identify this ENT instrument:",
    choices: [
      "Knight Nasal Scissors",
      "Belucci Alligator Scissors",
      "Becker Septum Scissors",
      "Stevens Tenotomy Scissors"
    ],
    correctAnswer: 1,
    explanation: "Belucci alligator scissors are used for cutting and dissecting tissue in ENT procedures, particularly in nasal and sinus surgeries.",
    image: "/lovable-uploads/belucci-alligator-scissors.png"
  },
  {
    id: 9,
    question: "Identify this ENT instrument:",
    choices: [
      "Freer Elevator",
      "Love Adson Periosteal Elevator",
      "Key Periosteal Elevator",
      "Chandler Elevator"
    ],
    correctAnswer: 1,
    explanation: "The Love Adson periosteal elevator is used to elevate and separate periosteum from bone during ENT surgical procedures.",
    image: "/lovable-uploads/love-adson-periosteal-elevator.png"
  },
  {
    id: 10,
    question: "Identify this ENT instrument:",
    choices: [
      "Yankauer Suction Tip",
      "Baron Suction Tip",
      "Frazier Suction Tip",
      "Poole Suction Tip"
    ],
    correctAnswer: 1,
    explanation: "The Baron suction tip is used for suctioning blood and debris during ENT procedures, providing clear visualization of the surgical field.",
    image: "/lovable-uploads/baron-suction-tip.png"
  },
  {
    id: 11,
    question: "Identify this ENT instrument:",
    choices: [
      "Cottle Nasal Knife",
      "Ballenger Swivel Knife",
      "House Sickle Knife",
      "Fisher Tonsil Knife Dissector"
    ],
    correctAnswer: 1,
    explanation: "The Ballenger swivel knife is used for making precise incisions and dissecting tissue during septoplasty and rhinoplasty procedures.",
    image: "/lovable-uploads/ballenger-swivel-knife.png"
  },
  {
    id: 12,
    question: "Identify this ENT instrument:",
    choices: [
      "Hurd Dissector Pillar Retractor",
      "Davis Meyer Tongue Dissector",
      "Freer Double Skin Hooks",
      "Joseph Single Hooks"
    ],
    correctAnswer: 1,
    explanation: "The Davis Meyer tongue dissector is used to retract and dissect tongue tissue during oral and throat surgical procedures.",
    image: "/lovable-uploads/davis-meyer-tongue-dissector.png"
  },
  {
    id: 13,
    question: "Identify this ENT instrument:",
    choices: [
      "Ureteroscope",
      "Resectoscope Sheath and Obturator",
      "Cystoscope",
      "Laryngoscope"
    ],
    correctAnswer: 1,
    explanation: "The resectoscope sheath and obturator are used in endoscopic procedures for visualization and tissue removal in the urogenital tract.",
    image: "/lovable-uploads/resectoscope-sheath-obturator.png"
  },
  {
    id: 14,
    question: "Identify this ENT instrument:",
    choices: [
      "Aufricht Nasal Retractor",
      "Cottle Nasal Speculum",
      "Hartmann Ear Speculum",
      "Kristeller Vaginal Speculum"
    ],
    correctAnswer: 1,
    explanation: "The Cottle nasal speculum is used to open and retract the nasal passages during rhinoplasty and septoplasty procedures.",
    image: "/lovable-uploads/cottle-nasal-speculum.png"
  },
  {
    id: 15,
    question: "Identify this ENT instrument:",
    choices: [
      "Hartmann Alligator Forceps",
      "Takahashi Nasal Forceps",
      "Colver Tonsil Grasping Forceps",
      "Hartmann Ear-Cupped Forceps"
    ],
    correctAnswer: 1,
    explanation: "Takahashi nasal forceps are used for grasping and manipulating tissue during nasal and sinus surgical procedures.",
    image: "/lovable-uploads/takahashi-nasal-forceps.png"
  },
  {
    id: 16,
    question: "Identify this ENT instrument:",
    choices: [
      "Knight Nasal Scissors",
      "Becker Septum Scissors",
      "Belucci Alligator Scissors",
      "Jorgenson Scissors"
    ],
    correctAnswer: 1,
    explanation: "Becker septum scissors are used for cutting septal cartilage and tissue during septoplasty procedures.",
    image: "/lovable-uploads/becker-septum-scissors.png"
  },
  {
    id: 17,
    question: "Identify this ENT instrument:",
    choices: [
      "Takahashi Nasal Forceps",
      "Hartmann Alligator Forceps",
      "Belucci Alligator Scissors",
      "Buck Ear Curette"
    ],
    correctAnswer: 1,
    explanation: "Hartmann alligator forceps are used for grasping and removing small tissue fragments and foreign objects during ENT procedures.",
    image: "/lovable-uploads/hartmann-alligator-forceps.png"
  },
  {
    id: 18,
    question: "Identify this ENT instrument:",
    choices: [
      "Resectoscope Sheath and Obturator",
      "Iglesias Working Element",
      "Ureteroscope",
      "Cystoscope"
    ],
    correctAnswer: 1,
    explanation: "The Iglesias working element is part of a resectoscope system used for cutting and coagulating tissue during endoscopic procedures.",
    image: "/lovable-uploads/iglesias-working-element.png"
  },
  {
    id: 19,
    question: "Identify this ENT instrument:",
    choices: [
      "Hartmann Ear-Cupped Forceps",
      "Buck Ear Curette",
      "Hartmann Alligator Forceps",
      "Takahashi Nasal Forceps"
    ],
    correctAnswer: 1,
    explanation: "Buck ear curettes are used for removing wax, debris, and small tissue from the ear canal during otological procedures.",
    image: "/lovable-uploads/buck-ear-curette.png"
  },
  {
    id: 20,
    question: "Identify this ENT instrument:",
    choices: [
      "Cottle Nasal Speculum",
      "Hartmann Ear Speculum",
      "Aufricht Nasal Retractor",
      "Kristeller Vaginal Speculum"
    ],
    correctAnswer: 1,
    explanation: "The Hartmann ear speculum is used to open and visualize the ear canal during otological examinations and procedures.",
    image: "/lovable-uploads/hartmann-ear-speculum.png"
  },
  {
    id: 21,
    question: "Identify this ENT instrument:",
    choices: [
      "Takahashi Nasal Forceps",
      "Bruening Nasal Snare",
      "Hartmann Alligator Forceps",
      "Colver Tonsil Grasping Forceps"
    ],
    correctAnswer: 1,
    explanation: "The Bruening nasal snare is used for removing polyps and other growths from the nasal cavity during ENT procedures.",
    image: "/lovable-uploads/bruening-nasal-snare.png"
  },
  {
    id: 22,
    question: "Identify this ENT instrument:",
    choices: [
      "Takahashi Nasal Forceps",
      "Colver Tonsil Grasping Forceps",
      "Hartmann Alligator Forceps",
      "Hartmann Ear-Cupped Forceps"
    ],
    correctAnswer: 1,
    explanation: "Colver tonsil grasping forceps are used to grasp and manipulate tonsillar tissue during tonsillectomy procedures.",
    image: "/lovable-uploads/colver-tonsil-grasping-forceps.png"
  },
  {
    id: 23,
    question: "Identify this ENT instrument:",
    choices: [
      "Ballenger Swivel Knife",
      "Cottle Nasal Knife",
      "House Sickle Knife",
      "Fisher Tonsil Knife Dissector"
    ],
    correctAnswer: 1,
    explanation: "The Cottle nasal knife is used for making precise incisions in nasal cartilage and soft tissue during rhinoplasty procedures.",
    image: "/lovable-uploads/cottle-nasal-knife.png"
  },
  {
    id: 24,
    question: "Identify this ENT instrument:",
    choices: [
      "House Sickle Knife",
      "House Myringotomy Knife",
      "Cottle Nasal Knife",
      "Fisher Tonsil Knife Dissector"
    ],
    correctAnswer: 1,
    explanation: "The House myringotomy knife is used to make small incisions in the tympanic membrane during ear procedures.",
    image: "/lovable-uploads/house-myringotomy-knife.png"
  },
  {
    id: 25,
    question: "Identify this ENT instrument:",
    choices: [
      "Freer Elevator",
      "Aufricht Nasal Rasp",
      "Love Adson Periosteal Elevator",
      "Putti Rasp"
    ],
    correctAnswer: 1,
    explanation: "The Aufricht nasal rasp is used to smooth and shape nasal bone during rhinoplasty procedures.",
    image: "/lovable-uploads/aufricht-nasal-rasp.png"
  },
  {
    id: 26,
    question: "Identify this ENT instrument:",
    choices: [
      "Cystoscope",
      "Laryngeal Mirror",
      "Ureteroscope",
      "Resectoscope"
    ],
    correctAnswer: 1,
    explanation: "Laryngeal mirrors are used for indirect visualization of the larynx and vocal cords during examination.",
    image: "/lovable-uploads/laryngeal-mirror.png"
  },
  {
    id: 27,
    question: "Identify this ENT instrument:",
    choices: [
      "Becker Septum Scissors",
      "Knight Nasal Scissors",
      "Belucci Alligator Scissors",
      "Stevens Tenotomy Scissors"
    ],
    correctAnswer: 1,
    explanation: "Knight nasal scissors are used for cutting nasal tissue and cartilage during rhinoplasty and septoplasty procedures.",
    image: "/lovable-uploads/knight-nasal-scissors.png"
  },
  {
    id: 28,
    question: "Identify this ENT instrument:",
    choices: [
      "Buck Ear Curette",
      "Barnhill Adenoid Curette",
      "Kevorkian Younge Endocervical Curette",
      "Bone Curette"
    ],
    correctAnswer: 1,
    explanation: "The Barnhill adenoid curette is used for removing adenoid tissue during adenoidectomy procedures.",
    image: "/lovable-uploads/barnhill-adenoid-curette.png"
  },
  {
    id: 29,
    question: "Identify this ENT instrument:",
    choices: [
      "Hartmann Alligator Forceps",
      "Cushing Bayonet Dressing Forceps",
      "Takahashi Nasal Forceps",
      "Colver Tonsil Grasping Forceps"
    ],
    correctAnswer: 1,
    explanation: "Cushing bayonet dressing forceps are used for grasping and manipulating tissue during neurosurgical and ENT procedures.",
    image: "/lovable-uploads/cushing-bayonet-dressing-forceps.png"
  },
  {
    id: 30,
    question: "Identify this ENT instrument:",
    choices: [
      "Cushing Bayonet Dressing Forceps",
      "Cushing Bayonet Bipolar Forceps",
      "Hartmann Alligator Forceps",
      "Takahashi Nasal Forceps"
    ],
    correctAnswer: 1,
    explanation: "Cushing bayonet bipolar forceps are used for precise hemostasis and tissue coagulation during microsurgical procedures.",
    image: "/lovable-uploads/cushing-bayonet-bipolar-forceps.png"
  }
];