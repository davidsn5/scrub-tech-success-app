
export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
}

export const medicalTerminologyQuestions: Question[] = [
  {
    id: 1,
    question: "What does the term adduction mean?",
    choices: [
      "Away from the midline of the body",
      "Toward the midline of the body",
      "Upper, above",
      "Near the point of attachment to the body"
    ],
    correctAnswer: 1,
    explanation: "Adduction refers to movement that brings a body part toward the center line of the body."
  },
  {
    id: 2,
    question: "The position lying on the back is called:",
    choices: [
      "Prone",
      "Supine",
      "Lateral",
      "Anterior"
    ],
    correctAnswer: 1,
    explanation: "Supine position is lying on the back, face up."
  },
  {
    id: 3,
    question: "Which of the following means pertaining to the skull?",
    choices: [
      "Cephal/o",
      "Crani/o",
      "Encephal/o",
      "Mening/o"
    ],
    correctAnswer: 1,
    explanation: "Crani/o refers to the skull or the bony structure that protects the brain."
  },
  {
    id: 4,
    question: "The excision of a breast lesion with surrounding tissue is called:",
    choices: [
      "Lumpectomy",
      "Radical mastectomy",
      "Wire localization",
      "Modified radical mastectomy"
    ],
    correctAnswer: 0,
    explanation: "A lumpectomy is a surgical procedure to remove a tumor and a small amount of surrounding healthy tissue."
  },
  {
    id: 5,
    question: "Which suffix means vomiting?",
    choices: [
      "-emesis",
      "-megaly",
      "-rhea",
      "-cele"
    ],
    correctAnswer: 0,
    explanation: "The suffix -emesis refers to the act of vomiting or bringing up stomach contents."
  },
  {
    id: 6,
    question: "Which of these refers to joint?",
    choices: [
      "Chondr/o",
      "Oste/o",
      "Arthr/o",
      "Tend/o"
    ],
    correctAnswer: 2,
    explanation: "Arthr/o is a combining form relating to joints where bones meet."
  },
  {
    id: 7,
    question: "The term tend/o refers to:",
    choices: [
      "Cartilage",
      "Tendon",
      "Hand bones",
      "Joint"
    ],
    correctAnswer: 1,
    explanation: "Tend/o refers to tendons, which connect muscles to bones."
  },
  {
    id: 8,
    question: "What does retin/o refer to?",
    choices: [
      "Eyelid",
      "Iris",
      "Tear duct",
      "Retina"
    ],
    correctAnswer: 3,
    explanation: "Retin/o refers to the retina, the light-sensitive tissue at the back of the eye."
  },
  {
    id: 9,
    question: "Which suffix means enlargement?",
    choices: [
      "-oma",
      "-megaly",
      "-pathy",
      "-cele"
    ],
    correctAnswer: 1,
    explanation: "The suffix -megaly indicates abnormal enlargement of an organ or body part."
  },
  {
    id: 10,
    question: "Which of the following means pregnancy outside the uterus?",
    choices: [
      "Placenta previa",
      "Ectopic",
      "Abruptio placentae",
      "Atresia"
    ],
    correctAnswer: 1,
    explanation: "An ectopic pregnancy occurs when a fertilized egg implants outside the uterus, usually in a fallopian tube."
  },
  {
    id: 11,
    question: "What is the meaning of rectocele?",
    choices: [
      "Lack of normal body opening",
      "Bulging of an arterial wall",
      "Protrusion of the rectum into the vagina",
      "Condition caused by oxygen deficiency"
    ],
    correctAnswer: 2,
    explanation: "A rectocele occurs when the wall between the rectum and vagina weakens, causing the rectum to bulge."
  },
  {
    id: 12,
    question: "Which of the following refers to abnormal passage between two structures?",
    choices: [
      "Fistula",
      "Fibroid",
      "Atresia",
      "Aneurysm"
    ],
    correctAnswer: 0,
    explanation: "A fistula is an abnormal connection between two organs or between an organ and the skin."
  },
  {
    id: 13,
    question: "The removal of the fallopian tube is called:",
    choices: [
      "Oophorectomy",
      "Salpingectomy",
      "Hysterectomy",
      "Myomectomy"
    ],
    correctAnswer: 1,
    explanation: "Salpingectomy is the surgical removal of one or both fallopian tubes."
  },
  {
    id: 14,
    question: "What is the bicuspid valve also called?",
    choices: [
      "Aneurysm",
      "Mitral valve",
      "Aortic valve",
      "Tricuspid valve"
    ],
    correctAnswer: 1,
    explanation: "The mitral valve controls blood flow between the left atrium and left ventricle of the heart."
  },
  {
    id: 15,
    question: "Which of these is defined as resting heart rate below 60 bpm?",
    choices: [
      "Bradycardia",
      "Arrhythmia",
      "Tachycardia",
      "Cyanosis"
    ],
    correctAnswer: 0,
    explanation: "Bradycardia is a slower than normal heart rate in adults."
  },
  {
    id: 16,
    question: "The term cyanosis refers to:",
    choices: [
      "Lack of normal opening",
      "Irregular heartbeat",
      "Condition caused by oxygen deficiency",
      "Pain in a limb"
    ],
    correctAnswer: 2,
    explanation: "Cyanosis is a bluish discoloration of the skin due to lack of oxygen in the blood."
  },
  {
    id: 17,
    question: "A clot of blood, air, or fat that moves through the vascular system is called:",
    choices: [
      "Thrombus",
      "Embolism",
      "Ischemia",
      "Claudication"
    ],
    correctAnswer: 1,
    explanation: "An embolism is a blockage of a blood vessel by a clot or other material that has traveled from elsewhere."
  },
  {
    id: 18,
    question: "The term ischemia refers to:",
    choices: [
      "Lack of normal opening",
      "Pain in a limb",
      "Abnormally low blood flow to tissues",
      "Irregular heartbeat"
    ],
    correctAnswer: 2,
    explanation: "Ischemia occurs when blood flow to tissues is restricted, reducing oxygen and nutrient delivery."
  },
  {
    id: 19,
    question: "The congenital defect that includes 4 cardiac abnormalities is called:",
    choices: [
      "Patent ductus arteriosus",
      "Aneurysm",
      "Tetralogy of Fallot",
      "Mitral valve prolapse"
    ],
    correctAnswer: 2,
    explanation: "Tetralogy of Fallot is a complex heart defect involving four abnormalities that occur together."
  },
  {
    id: 20,
    question: "Which of the following means high blood pressure?",
    choices: [
      "Hypotension",
      "Cyanosis",
      "Arrhythmia",
      "Hypertension"
    ],
    correctAnswer: 3,
    explanation: "Hypertension is a condition where blood pressure in the arteries is persistently elevated."
  },
  {
    id: 21,
    question: "The bulging of an arterial wall is called:",
    choices: [
      "Aneurysm",
      "Embolism",
      "Fistula",
      "Atresia"
    ],
    correctAnswer: 0,
    explanation: "An aneurysm is a weakened area in a blood vessel wall that balloons outward."
  },
  {
    id: 22,
    question: "The suffix -otomy means:",
    choices: [
      "Cutting into",
      "Surgical repair",
      "Fixation of",
      "Puncture to remove fluid"
    ],
    correctAnswer: 0,
    explanation: "The suffix -otomy indicates a surgical incision or cutting into an organ or tissue."
  },
  {
    id: 23,
    question: "The suffix -plasty means:",
    choices: [
      "Fixation of",
      "Puncture to remove fluid",
      "Surgical repair",
      "Cutting into"
    ],
    correctAnswer: 2,
    explanation: "The suffix -plasty indicates surgical repair or reconstruction."
  },
  {
    id: 24,
    question: "The suffix -centesis means:",
    choices: [
      "Cutting into",
      "Fixation of",
      "Surgical repair",
      "Puncture to remove fluid"
    ],
    correctAnswer: 3,
    explanation: "The suffix -centesis indicates surgical puncture to remove fluid or gas."
  },
  {
    id: 25,
    question: "The term poly- means:",
    choices: [
      "High",
      "Many",
      "Low",
      "Enlarged"
    ],
    correctAnswer: 1,
    explanation: "The prefix poly- means many, much, or multiple."
  },
  {
    id: 26,
    question: "Presence of air in the pleural cavity causing lung collapse is called:",
    choices: [
      "Pneumoperitoneum",
      "Pneumothorax",
      "Thoracocentesis",
      "Pneumonectomy"
    ],
    correctAnswer: 1,
    explanation: "Pneumothorax occurs when air leaks into the space between the lung and chest wall."
  },
  {
    id: 27,
    question: "Temporary loss of breathing is called:",
    choices: [
      "Apnea",
      "Dyspnea",
      "Cyanosis",
      "Ischemia"
    ],
    correctAnswer: 0,
    explanation: "Apnea is a temporary cessation of breathing, especially during sleep."
  },
  {
    id: 28,
    question: "Surgical puncture and drainage of the pleural cavity is called:",
    choices: [
      "Pneumonectomy",
      "Pneumothorax",
      "Thoracocentesis",
      "Apnea"
    ],
    correctAnswer: 2,
    explanation: "This procedure involves inserting a needle into the chest to remove fluid or air."
  },
  {
    id: 29,
    question: "Surgical removal of the lung or a segment of the lung is called:",
    choices: [
      "Pneumonectomy",
      "Pneumoperitoneum",
      "Apnea",
      "Thoracocentesis"
    ],
    correctAnswer: 0,
    explanation: "Pneumonectomy is the surgical removal of part or all of a lung."
  },
  {
    id: 30,
    question: "What does encephal/o mean?",
    choices: [
      "Pertaining to neurological tissue",
      "Pertaining to the brain",
      "Pertaining to speech",
      "Pertaining to pain"
    ],
    correctAnswer: 1,
    explanation: "Encephal/o is a combining form relating to the brain."
  },
  {
    id: 31,
    question: "What does mening/o mean?",
    choices: [
      "Pertaining to pain",
      "Pertaining to the brain",
      "Pertaining to covering of brain & spinal cord",
      "Pertaining to speech"
    ],
    correctAnswer: 2,
    explanation: "Mening/o refers to the meninges, the protective membranes covering the brain and spinal cord."
  },
  {
    id: 32,
    question: "What does the suffix -algia mean?",
    choices: [
      "Pertaining to pain",
      "Pertaining to speech",
      "Pertaining to neurological tissue",
      "Pertaining to brain"
    ],
    correctAnswer: 0,
    explanation: "The suffix -algia indicates pain in a specified part of the body."
  },
  {
    id: 33,
    question: "What does the suffix -phasia mean?",
    choices: [
      "Pertaining to pain",
      "Pertaining to neurological tissue",
      "Pertaining to speech",
      "Pertaining to brain"
    ],
    correctAnswer: 2,
    explanation: "The suffix -phasia relates to speech or the ability to speak."
  },
  {
    id: 34,
    question: "The combining form gli/o means:",
    choices: [
      "Pertaining to pain",
      "Pertaining to neurological tissue",
      "Pertaining to speech",
      "Pertaining to the skull"
    ],
    correctAnswer: 1,
    explanation: "Gli/o refers to the supportive tissue (glial cells) in the nervous system."
  },
  {
    id: 35,
    question: "The term arthr/o refers to:",
    choices: [
      "Joint",
      "Bone",
      "Cartilage",
      "Tendon"
    ],
    correctAnswer: 0,
    explanation: "Arthr/o is a combining form relating to joints where bones meet."
  },
  {
    id: 36,
    question: "Which of the following means cartilage?",
    choices: [
      "Oste/o",
      "Arthr/o",
      "Chondr/o",
      "Tend/o"
    ],
    correctAnswer: 2,
    explanation: "Chondr/o is a combining form relating to cartilage tissue."
  },
  {
    id: 37,
    question: "What does oste/o mean?",
    choices: [
      "Bone",
      "Cartilage",
      "Joint",
      "Hand bones"
    ],
    correctAnswer: 0,
    explanation: "Oste/o is a combining form relating to bone tissue."
  },
  {
    id: 38,
    question: "What does metacarp/o mean?",
    choices: [
      "Tendon",
      "Hand bones",
      "Joint",
      "Bone"
    ],
    correctAnswer: 1,
    explanation: "Metacarpal bones are the five long bones in the hand between the wrist and fingers."
  },
  {
    id: 39,
    question: "The term dacry/o refers to:",
    choices: [
      "Tear duct",
      "Iris",
      "Eyelid",
      "Cornea"
    ],
    correctAnswer: 0,
    explanation: "Dacry/o relates to tears or the tear ducts of the eye."
  },
  {
    id: 40,
    question: "Which of the following means cornea?",
    choices: [
      "Kerat/o",
      "Irid/o",
      "Blephar/o",
      "Retin/o"
    ],
    correctAnswer: 0,
    explanation: "Kerat/o refers to the cornea, the clear front layer of the eye."
  }
];
