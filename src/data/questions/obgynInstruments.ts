export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  image?: string;
}

export const obgynInstrumentsQuestions: Question[] = [
  {
    id: 1,
    question: "Identify this surgical instrument:",
    choices: [
      "Sims Vaginal Retractor",
      "Cusco Vaginal Speculum",
      "Doyen Lateral Speculum",
      "Kristeller Vaginal Speculum"
    ],
    correctAnswer: 0,
    explanation: "A curved retractor used to hold back the vaginal walls during gynecological examinations and procedures. The curved design provides optimal visualization of the cervix and vaginal vault.",
    image: "/lovable-uploads/sims-vaginal-retractor.png"
  },
  {
    id: 2,
    question: "Identify this surgical instrument:",
    choices: [
      "Rochester Carmalt Forceps",
      "Heaney Ballantine Clamps",
      "Kelly Clamp",
      "Kocher Clamp"
    ],
    correctAnswer: 1,
    explanation: "Heavy curved clamps used in gynecological procedures, particularly for clamping uterine vessels and ligaments during hysterectomies. They have strong crushing action and are designed to maintain hemostasis.",
    image: "/lovable-uploads/heaney-ballantine-clamps.jpeg"
  },
  {
    id: 3,
    question: "Identify this surgical instrument:",
    choices: [
      "Kelly Clamp",
      "Rochester Carmalt Forceps",
      "Heaney Ballantine Clamps",
      "Mixter Right Angle"
    ],
    correctAnswer: 1,
    explanation: "Heavy curved forceps with longitudinal serrations used for clamping large vessels and tissue bundles during surgical procedures. Commonly used in gynecological and general surgery for hemostasis.",
    image: "/lovable-uploads/rochester-carmalt-forceps.png"
  },
  {
    id: 4,
    question: "What are these graduated instruments?",
    choices: [
      "Hanks Uterine Dilator",
      "Hegar Uterine Dilators",
      "Van Buren Urethral Sounds",
      "Sims Uterine Sound"
    ],
    correctAnswer: 1,
    explanation: "A set of graduated dilators used to gradually dilate the cervical canal during gynecological procedures. They come in increasing sizes (measured in millimeters) to allow progressive dilation for procedures like D&C or IUD insertion.",
    image: "/lovable-uploads/hegar-uterine-dilators.png"
  },
  {
    id: 5,
    question: "Identify this specialized pelvic retractor:",
    choices: [
      "Balfour Retractor",
      "St. Marks Pelvic Retractor",
      "Bookwalter Retractor",
      "O'Sullivan-O'Connor Retractor"
    ],
    correctAnswer: 1,
    explanation: "A specialized retractor designed for pelvic and rectal surgery. Its unique curved shape allows for optimal exposure of the surgical field during colorectal procedures and pelvic surgeries.",
    image: "/lovable-uploads/st-marks-pelvic-retractor.png"
  },
  {
    id: 6,
    question: "Identify this bivalve speculum:",
    choices: [
      "Sims Vaginal Retractor",
      "Cusco Vaginal Speculum",
      "Kristeller Vaginal Speculum",
      "Doyen Lateral Speculum"
    ],
    correctAnswer: 1,
    explanation: "A self-retaining bivalve speculum used for gynecological examinations. It has a screw mechanism that allows the blades to be opened and locked in position, providing hands-free visualization of the cervix and vagina.",
    image: "/lovable-uploads/cusco-vaginal-speculum.png"
  },
  {
    id: 7,
    question: "Identify this endoscopic instrument:",
    choices: [
      "Cystoscope",
      "Ureteroscope",
      "Hysteroscope",
      "Arthroscope"
    ],
    correctAnswer: 1,
    explanation: "A flexible endoscopic instrument used for examining and treating the ureter and renal pelvis. It allows visualization of the urinary tract and can be used for procedures like stone removal or biopsy through minimally invasive techniques.",
    image: "/lovable-uploads/ureteroscope.png"
  },
  {
    id: 8,
    question: "Identify this lateral retractor:",
    choices: [
      "Sims Vaginal Retractor",
      "Doyen Lateral Speculum",
      "Cusco Vaginal Speculum",
      "Kristeller Vaginal Speculum"
    ],
    correctAnswer: 1,
    explanation: "A lateral vaginal retractor used to retract the lateral vaginal walls during gynecological procedures. Its design provides excellent lateral exposure while maintaining clear visualization of the surgical field.",
    image: "/lovable-uploads/doyen-lateral-speculum.png"
  },
  {
    id: 9,
    question: "Identify these curved urological instruments:",
    choices: [
      "Hegar Uterine Dilators",
      "Van Buren Urethral Sounds",
      "Hanks Uterine Dilator",
      "Sims Uterine Sound"
    ],
    correctAnswer: 1,
    explanation: "Curved metal instruments used for urethral dilation and exploration. They come in graduated sizes and are used to dilate urethral strictures, explore the urethra, or guide other instruments during urological procedures.",
    image: "/lovable-uploads/van-buren-urethral-sound.png"
  },
  {
    id: 10,
    question: "Identify this instrument:",
    choices: [
      "Hegar Uterine Dilators",
      "Hanks Uterine Dilator",
      "Sims Uterine Sound",
      "Van Buren Urethral Sound"
    ],
    correctAnswer: 1,
    explanation: "Double-ended graduated uterine dilator with rounded tips used to progressively dilate the cervical canal for gynecologic procedures.",
    image: "/lovable-uploads/hanks-uterine-dilator.png"
  },
  {
    id: 11,
    question: "Identify this speculum:",
    choices: [
      "Cusco Vaginal Speculum",
      "Kristeller Vaginal Speculum",
      "Doyen Lateral Speculum",
      "Sims Vaginal Retractor"
    ],
    correctAnswer: 1,
    explanation: "Adjustable bivalve vaginal speculum used to retract the vaginal walls and visualize the cervix during examinations and procedures.",
    image: "/lovable-uploads/kristeller-vaginal-speculum.png"
  },
  {
    id: 12,
    question: "Identify these electrosurgical loops:",
    choices: [
      "LEEP Electrodes",
      "LLETZ Tungsten Loop Electrodes",
      "Cautery Loops",
      "Electrosurgical Wires"
    ],
    correctAnswer: 1,
    explanation: "Tungsten wire loop electrodes used with electrosurgical units to perform LEEP/LLETZ excision of the cervical transformation zone.",
    image: "/lovable-uploads/lletz-tungsten-loop-electrodes.png"
  },
  {
    id: 13,
    question: "Identify these scissors:",
    choices: [
      "Metzenbaum Scissors",
      "Jorgenson Scissors",
      "Mayo Scissors",
      "Laney Goiter Scissors"
    ],
    correctAnswer: 1,
    explanation: "Heavily curved, angled scissors used in gynecologic surgery (e.g., hysterectomy) for cutting tissue near the cervix and uterine ligaments.",
    image: "/lovable-uploads/jorgenson-scissors.png"
  },
  {
    id: 14,
    question: "Identify this grasping instrument:",
    choices: [
      "Allis Forceps",
      "Braun Tenaculum",
      "Babcock Forceps",
      "Kocher Clamp"
    ],
    correctAnswer: 1,
    explanation: "Single- or double-tooth tenaculum used to grasp and provide traction on the cervix or uterine tissue during gynecologic procedures.",
    image: "/lovable-uploads/braun-tenaculum.png"
  },
  {
    id: 15,
    question: "Identify this measuring instrument:",
    choices: [
      "Hanks Uterine Dilator",
      "Sims Uterine Sound",
      "Van Buren Urethral Sound",
      "Hegar Uterine Dilators"
    ],
    correctAnswer: 1,
    explanation: "Graduated uterine sound used to assess the depth and direction of the uterine cavity prior to procedures such as dilation or IUD placement.",
    image: "/lovable-uploads/sims-uterine-sound.png"
  }
];