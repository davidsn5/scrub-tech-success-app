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
  },
  {
    id: 16,
    question: "Identify this weighted speculum:",
    choices: [
      "Cusco Vaginal Speculum",
      "Auvard Weighted Speculum",
      "Kristeller Vaginal Speculum",
      "Breisky-Navratil Vaginal Speculum"
    ],
    correctAnswer: 1,
    explanation: "A self-retaining vaginal speculum with a heavy weight that uses gravity to maintain retraction of the posterior vaginal wall. The weight provides hands-free visualization during gynecological procedures and examinations.",
    image: "/lovable-uploads/auvard-weighted-speculum.png"
  },
  {
    id: 17,
    question: "Identify these curved forceps:",
    choices: [
      "Heaney Ballantine Clamps",
      "Somer Uterine Elevating Forceps",
      "Rochester Carmalt Forceps",
      "Kelly Clamps"
    ],
    correctAnswer: 1,
    explanation: "Curved forceps designed to grasp and elevate the uterus during gynecological procedures. They provide controlled manipulation and positioning of the uterus for optimal surgical exposure and access.",
    image: "/lovable-uploads/somer-uterine-elevating-forceps.png"
  },
  {
    id: 18,
    question: "Identify this rectal speculum:",
    choices: [
      "Cusco Vaginal Speculum",
      "Pratt Rectal Speculum",
      "Kristeller Vaginal Speculum",
      "Doyen Lateral Speculum"
    ],
    correctAnswer: 1,
    explanation: "A bivalve speculum specifically designed for rectal and anal examinations. It features smooth, tapered blades that gently dilate the anal canal for visualization of the rectum and lower anal canal.",
    image: "/lovable-uploads/pratt-rectal-speculum.png"
  },
  {
    id: 19,
    question: "Identify this adjustable speculum:",
    choices: [
      "Cusco Vaginal Speculum",
      "Breisky-Navratil Vaginal Speculum",
      "Auvard Weighted Speculum",
      "Kristeller Vaginal Speculum"
    ],
    correctAnswer: 1,
    explanation: "An adjustable vaginal speculum with a locking mechanism that allows for precise control of blade separation. It provides excellent visualization and can be locked in position for extended procedures requiring sustained retraction.",
    image: "/lovable-uploads/breisky-navratil-vaginal-speculum.png"
  },
  {
    id: 20,
    question: "Identify these delicate grasping forceps:",
    choices: [
      "Braun Tenaculum",
      "Hulka Tenaculum Forceps",
      "Allis Forceps",
      "Babcock Forceps"
    ],
    correctAnswer: 1,
    explanation: "Delicate tenaculum forceps with fine, curved tips designed for grasping and manipulating delicate gynecological tissues. They provide precise control and minimal tissue trauma during laparoscopic and open gynecological procedures.",
    image: "/lovable-uploads/hulka-tenaculum-forceps.png"
  },
  {
    id: 21,
    question: "Identify these multi-tooth grasping forceps:",
    choices: [
      "Braun Tenaculum",
      "Jacobs Vulsellum Forceps",
      "Allis Forceps",
      "Kocher Clamp"
    ],
    correctAnswer: 1,
    explanation: "Heavy-duty forceps with multiple sharp teeth designed to securely grasp and hold the cervix or uterine tissue. The multiple teeth provide excellent grip and traction during gynecological procedures, particularly useful for cervical manipulation during hysterectomies.",
    image: "/lovable-uploads/jacobs-vulsellum-forceps.png"
  },
  {
    id: 22,
    question: "Identify this specialized needle driver:",
    choices: [
      "Mayo-Hegar Needle Driver",
      "Heaney Needle Driver",
      "Crile-Wood Needle Driver",
      "Olsen-Hegar Needle Driver"
    ],
    correctAnswer: 1,
    explanation: "A long needle driver with curved jaws specifically designed for gynecological surgery. Features gold-plated finger rings for enhanced grip and is commonly used in deep pelvic procedures where precise suturing is required, such as during hysterectomies.",
    image: "/lovable-uploads/heaney-needle-driver.png"
  },
  {
    id: 23,
    question: "Identify these long curved forceps:",
    choices: [
      "Rochester Carmalt Forceps",
      "Bozeman Uterine Dressing Forceps",
      "Heaney Ballantine Clamps",
      "Kelly Clamps"
    ],
    correctAnswer: 1,
    explanation: "Long, curved forceps designed for placing and removing packing or dressings in the uterine cavity and deep vaginal fornices. The extended length and curved design allow access to difficult-to-reach areas during gynecological procedures.",
    image: "/lovable-uploads/bozeman-uterine-dressing-forceps.png"
  },
  {
    id: 24,
    question: "Identify this endocervical sampling instrument:",
    choices: [
      "Endocervical Curette",
      "Kevorkian-Younge Endocervical Curette",
      "Novak Curette",
      "Randall Stone Curette"
    ],
    correctAnswer: 1,
    explanation: "A specialized curette with a long, thin shaft and small cupped tip designed specifically for sampling endocervical tissue. Features a comfortable handle and is commonly used for obtaining tissue samples from the endocervical canal for pathological examination.",
    image: "/lovable-uploads/kevorkian-younge-endocervical-curette.png"
  }
];