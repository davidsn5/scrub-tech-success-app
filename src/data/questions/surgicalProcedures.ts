export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the first step in preparing a patient for surgery?",
    choices: ["Administer anesthesia", "Obtain informed consent", "Sterilize surgical instruments", "Position the patient"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which instrument is used to cut tissue?",
    choices: ["Scalpel", "Forceps", "Retractor", "Clamp"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "What is the purpose of a surgical sponge?",
    choices: ["To absorb blood", "To retract tissue", "To cut tissue", "To clamp vessels"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which suture material is absorbable?",
    choices: ["Silk", "Nylon", "Catgut", "Polypropylene"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the normal range for body temperature?",
    choices: ["35-36°C", "36-37°C", "37-38°C", "38-39°C"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which position is used for abdominal surgery?",
    choices: ["Supine", "Prone", "Lithotomy", "Trendelenburg"],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "What is the function of a retractor?",
    choices: ["To hold tissue back", "To cut tissue", "To clamp vessels", "To suture wounds"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Which of the following is a sterile field?",
    choices: ["Surgical drapes", "Operating room floor", "Surgeon's gloves", "Patient's skin before prep"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What is the main purpose of surgical asepsis?",
    choices: ["Prevent infection", "Reduce pain", "Speed healing", "Control bleeding"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which type of anesthesia involves loss of consciousness?",
    choices: ["Local", "Regional", "General", "Topical"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which bone is also known as the malar bone?",
    choices: ["Maxilla", "Zygomatic", "Mandible", "Frontal"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "The Le Fort I fracture is also called a:",
    choices: ["Mustache fracture", "Blowout fracture", "Craniofacial fracture", "Pyramid maxillary fracture"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Arch bars are primarily used to realign the:",
    choices: ["Zygomatic bone", "Mandible and maxilla", "Orbital floor", "Nasal septum"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "The orbital floor fracture is also known as:",
    choices: ["Le Fort I", "Le Fort III", "Blowout fracture", "Mustache fracture"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "The surgeon protects the cornea during orbital floor surgery with:",
    choices: ["Plastic sheeting", "Corneal eye protectors", "Cotton pledgets", "Silicone shields"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "In a Le Fort II fracture, the neurosurgeon must be present because of possible damage to the:",
    choices: ["Orbital floor", "Nasal bone", "Brain tissue and CSF leakage", "Maxilla"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "The malocclusion that results from misalignment of the jaws can be corrected with:",
    choices: ["MMA", "MMF", "Arch bars", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 18,
    question: "Temporomandibular joint (TMJ) surgery is indicated for all of the following except:",
    choices: ["Muscle tension", "Malocclusion", "Trauma", "Sleep apnea"],
    correctAnswer: 3
  },
  {
    id: 19,
    question: "The snail-shaped structure of the inner ear that contains the organ of Corti is the:",
    choices: ["Vestibule", "Cochlea", "Semicircular canal", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "The ossicles include all of the following except:",
    choices: ["Malleus", "Incus", "Cochlea", "Stapes"],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "The external ear terminates at the:",
    choices: ["Tympanic membrane", "Eustachian tube", "Auricle", "Middle ear"],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "The nasal cavity is connected to the ear by the:",
    choices: ["Cochlea", "Vestibule", "Eustachian tube", "Tympanic membrane"],
    correctAnswer: 2
  },
  {
    id: 23,
    question: "Choanal atresia repair may involve the use of a:",
    choices: ["Microdebrider", "Stensen's duct probe", "Tuning fork", "Arch bar"],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "The paranasal sinuses located behind the lower forehead are the:",
    choices: ["Maxillary", "Ethmoid", "Frontal", "Sphenoid"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "The surgical opening into the maxillary sinus to treat chronic sinusitis is called an:",
    choices: ["Antrostomy", "Polypectomy", "Mastoidectomy", "Tympanoplasty"],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "During a parotidectomy, care must be taken to preserve the:",
    choices: ["Seventh cranial nerve", "Fifth cranial nerve", "Eighth cranial nerve", "Tenth cranial nerve"],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "The largest of the salivary glands is the:",
    choices: ["Sublingual", "Submandibular", "Parotid", "Adenoid"],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "The larynx has all of the following functions except:",
    choices: ["Passageway for respiration", "Prevents aspiration", "Houses the pituitary gland", "Source of vocalization"],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "Which cartilage is also called the Adam's apple?",
    choices: ["Cricoid", "Arytenoid", "Thyroid", "Epiglottis"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Laryngectomy is performed to treat:",
    choices: ["Sinusitis", "TMJ disorder", "Laryngeal cancer", "Sleep apnea"],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "A permanent opening in the neck after a total laryngectomy is called a:",
    choices: ["Tracheostomy", "Fistula", "Stoma", "Anastomosis"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "The purpose of wet gauze during laser laryngeal surgery is to:",
    choices: ["Clean the field", "Prevent a fire", "Keep the tissues moist", "Absorb bleeding"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "The trachea is composed of:",
    choices: ["Solid bone rings", "Incomplete c-shaped cartilage rings", "Muscle only", "Connective tissue only"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "A tracheostomy is indicated for all of the following except:",
    choices: ["Chronic lung disease", "Sleep apnea", "Vocal cord paralysis", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "The cranial nerve that supplies motor innervation to the pharynx and larynx is the:",
    choices: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 3
  }
];
