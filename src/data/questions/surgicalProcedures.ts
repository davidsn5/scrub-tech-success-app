export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the first step in the surgical hand scrub?",
    choices: ["Wet hands and arms", "Apply soap", "Rinse hands", "Dry hands"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which of the following is a sterile field?",
    choices: ["Surgical gown", "Operating room floor", "Surgical gloves", "Surgical mask"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is the purpose of a surgical time-out?",
    choices: ["Verify patient identity", "Check equipment", "Prepare the surgical site", "Administer anesthesia"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which instrument is used to grasp tissue?",
    choices: ["Scalpel", "Forceps", "Retractor", "Needle holder"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What type of suture is absorbable?",
    choices: ["Silk", "Nylon", "Vicryl", "Polypropylene"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Which layer is the outermost layer of the skin?",
    choices: ["Dermis", "Epidermis", "Subcutaneous", "Fascia"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is the function of the surgical sponge count?",
    choices: ["Prevent infection", "Prevent retained sponges", "Assist in wound closure", "Maintain sterile field"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which of the following is a type of surgical incision?",
    choices: ["Midline", "Transverse", "Oblique", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "What is the primary purpose of a drain?",
    choices: ["Prevent infection", "Remove fluid", "Deliver medication", "Maintain sterile field"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which of the following is a common complication of surgery?",
    choices: ["Infection", "Bleeding", "Thrombosis", "All of the above"],
    correctAnswer: 3
  },
  // ... (questions 11 through 325 would be here, omitted for brevity)
  {
    id: 326,
    question: "Which bone is also known as the malar bone?",
    choices: ["Maxilla", "Zygomatic", "Mandible", "Frontal"],
    correctAnswer: 1
  },
  {
    id: 327,
    question: "The Le Fort I fracture is also called a:",
    choices: ["Mustache fracture", "Blowout fracture", "Craniofacial fracture", "Pyramid maxillary fracture"],
    correctAnswer: 0
  },
  {
    id: 328,
    question: "Arch bars are primarily used to realign the:",
    choices: ["Zygomatic bone", "Mandible and maxilla", "Orbital floor", "Nasal septum"],
    correctAnswer: 1
  },
  {
    id: 329,
    question: "The orbital floor fracture is also known as:",
    choices: ["Le Fort I", "Le Fort III", "Blowout fracture", "Mustache fracture"],
    correctAnswer: 2
  },
  {
    id: 330,
    question: "The surgeon protects the cornea during orbital floor surgery with:",
    choices: ["Plastic sheeting", "Corneal eye protectors", "Cotton pledgets", "Silicone shields"],
    correctAnswer: 1
  },
  {
    id: 331,
    question: "In a Le Fort II fracture, the neurosurgeon must be present because of possible damage to the:",
    choices: ["Orbital floor", "Nasal bone", "Brain tissue and CSF leakage", "Maxilla"],
    correctAnswer: 2
  },
  {
    id: 332,
    question: "The malocclusion that results from misalignment of the jaws can be corrected with:",
    choices: ["MMA", "MMF", "Arch bars", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 333,
    question: "Temporomandibular joint (TMJ) surgery is indicated for all of the following except:",
    choices: ["Muscle tension", "Malocclusion", "Trauma", "Sleep apnea"],
    correctAnswer: 3
  },
  {
    id: 334,
    question: "The snail-shaped structure of the inner ear that contains the organ of Corti is the:",
    choices: ["Vestibule", "Cochlea", "Semicircular canal", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 335,
    question: "The ossicles include all of the following except:",
    choices: ["Malleus", "Incus", "Cochlea", "Stapes"],
    correctAnswer: 2
  },
  {
    id: 336,
    question: "The external ear terminates at the:",
    choices: ["Tympanic membrane", "Eustachian tube", "Auricle", "Middle ear"],
    correctAnswer: 0
  },
  {
    id: 337,
    question: "The nasal cavity is connected to the ear by the:",
    choices: ["Cochlea", "Vestibule", "Eustachian tube", "Tympanic membrane"],
    correctAnswer: 2
  },
  {
    id: 338,
    question: "Choanal atresia repair may involve the use of a:",
    choices: ["Microdebrider", "Stensen's duct probe", "Tuning fork", "Arch bar"],
    correctAnswer: 0
  },
  {
    id: 339,
    question: "The paranasal sinuses located behind the lower forehead are the:",
    choices: ["Maxillary", "Ethmoid", "Frontal", "Sphenoid"],
    correctAnswer: 2
  },
  {
    id: 340,
    question: "The surgical opening into the maxillary sinus to treat chronic sinusitis is called an:",
    choices: ["Antrostomy", "Polypectomy", "Mastoidectomy", "Tympanoplasty"],
    correctAnswer: 0
  },
  {
    id: 341,
    question: "During a parotidectomy, care must be taken to preserve the:",
    choices: ["Seventh cranial nerve", "Fifth cranial nerve", "Eighth cranial nerve", "Tenth cranial nerve"],
    correctAnswer: 0
  },
  {
    id: 342,
    question: "The largest of the salivary glands is the:",
    choices: ["Sublingual", "Submandibular", "Parotid", "Adenoid"],
    correctAnswer: 2
  },
  {
    id: 343,
    question: "The larynx has all of the following functions except:",
    choices: ["Passageway for respiration", "Prevents aspiration", "Houses the pituitary gland", "Source of vocalization"],
    correctAnswer: 2
  },
  {
    id: 344,
    question: "Which cartilage is also called the Adam's apple?",
    choices: ["Cricoid", "Arytenoid", "Thyroid", "Epiglottis"],
    correctAnswer: 2
  },
  {
    id: 345,
    question: "Laryngectomy is performed to treat:",
    choices: ["Sinusitis", "TMJ disorder", "Laryngeal cancer", "Sleep apnea"],
    correctAnswer: 2
  },
  {
    id: 346,
    question: "A permanent opening in the neck after a total laryngectomy is called a:",
    choices: ["Tracheostomy", "Fistula", "Stoma", "Anastomosis"],
    correctAnswer: 1
  },
  {
    id: 347,
    question: "The purpose of wet gauze during laser laryngeal surgery is to:",
    choices: ["Clean the field", "Prevent a fire", "Keep the tissues moist", "Absorb bleeding"],
    correctAnswer: 1
  },
  {
    id: 348,
    question: "The trachea is composed of:",
    choices: ["Solid bone rings", "Incomplete c-shaped cartilage rings", "Muscle only", "Connective tissue only"],
    correctAnswer: 1
  },
  {
    id: 349,
    question: "A tracheostomy is indicated for all of the following except:",
    choices: ["Chronic lung disease", "Sleep apnea", "Vocal cord paralysis", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 350,
    question: "The cranial nerve that supplies motor innervation to the pharynx and larynx is the:",
    choices: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 3
  },
  {
    id: 351,
    question: "The vestibulocochlear nerve connects the inner ear to the:",
    choices: ["Lungs", "Nose", "Brain", "Larynx"],
    correctAnswer: 2
  },
  {
    id: 352,
    question: "Otitis media is an inflammation of the:",
    choices: ["Inner ear", "Middle ear", "Outer ear", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 353,
    question: "Tympanoplasty is performed to repair the:",
    choices: ["Cochlea", "Semicircular canals", "Tympanic membrane", "Eustachian tube"],
    correctAnswer: 2
  },
  {
    id: 354,
    question: "Cholesteatoma is treated with a:",
    choices: ["Mastoidectomy", "Tympanoplasty", "Stapedectomy", "Antrostomy"],
    correctAnswer: 0
  },
  {
    id: 355,
    question: "The abnormal bone growth of the stapes is called:",
    choices: ["Meniere's disease", "Otosclerosis", "Bell's palsy", "Cholesteatoma"],
    correctAnswer: 1
  },
  {
    id: 356,
    question: "Stapedectomy prosthetic materials include all except:",
    choices: ["Stainless steel", "Platinum", "Teflon", "Bone cement"],
    correctAnswer: 3
  },
  {
    id: 357,
    question: "Meniere's disease primarily affects the:",
    choices: ["Middle ear", "Inner ear", "Eustachian tube", "Nasal cavity"],
    correctAnswer: 1
  },
  {
    id: 358,
    question: "Bell's palsy affects which cranial nerve?",
    choices: ["Fifth", "Sixth", "Seventh", "Eighth"],
    correctAnswer: 2
  },
  {
    id: 359,
    question: "Facial nerve decompression surgery is done to treat all of the following except:",
    choices: ["Trauma", "Bell's palsy", "TMJ disorder", "Tumors"],
    correctAnswer: 2
  },
  {
    id: 360,
    question: "A cochlear implant receiver is placed in the:",
    choices: ["Cochlea", "Tympanic membrane", "Mastoid process", "Semicircular canals"],
    correctAnswer: 2
  },
  {
    id: 361,
    question: "Submucous resection is performed to correct problems of the:",
    choices: ["Vocal cords", "Nasal septum", "Maxilla", "Larynx"],
    correctAnswer: 1
  },
  {
    id: 362,
    question: "The moustache dressing is used after surgery on the:",
    choices: ["Trachea", "Nose", "Larynx", "Ear"],
    correctAnswer: 1
  },
  {
    id: 363,
    question: "Which instrument is used to retract the uvula during tonsillectomy?",
    choices: ["Freer elevator", "Robinson catheter", "Coblator", "Adenotome"],
    correctAnswer: 1
  },
  {
    id: 364,
    question: "Which nerve is responsible for movements of the facial muscles?",
    choices: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 1
  },
  {
    id: 365,
    question: "Myringotomy tubes are also called all of the following except:",
    choices: ["PETs", "Tympanostomy tubes", "Ventilation tubes", "Arch bars"],
    correctAnswer: 3
  },
  {
    id: 366,
    question: "Mastoiditis is an inflammation of the:",
    choices: ["Temporal bone", "Eustachian tube", "Parotid gland", "Semicircular canal"],
    correctAnswer: 0
  },
  {
    id: 367,
    question: "Otosclerosis prevents the stapes from:",
    choices: ["Growing", "Vibrating", "Fusing", "Moving inward"],
    correctAnswer: 1
  },
  {
    id: 368,
    question: "The labyrinth is made up of all of the following except:",
    choices: ["Vestibule", "Cochlea", "Eustachian tube", "Semicircular canals"],
    correctAnswer: 2
  },
  {
    id: 369,
    question: "The Caldwell-Luc incision is made in the:",
    choices: ["Maxilla", "Canine fossa", "Orbital floor", "Inferior turbinate"],
    correctAnswer: 1
  },
  {
    id: 370,
    question: "Thyroxine and triiodothyronine are produced by the:",
    choices: ["Parathyroid", "Pituitary", "Thyroid", "Adrenal"],
    correctAnswer: 2
  },
  {
    id: 371,
    question: "TSH is produced by the:",
    choices: ["Thyroid", "Pituitary", "Parathyroid", "Adrenal"],
    correctAnswer: 1
  },
  {
    id: 372,
    question: "The middle portion of the thyroid gland that connects the two lobes is called the:",
    choices: ["Isthmus", "Node", "Fossa", "Pedicle"],
    correctAnswer: 0
  },
  {
    id: 373,
    question: "Thyroid scan radiotracers include:",
    choices: ["Technetium", "Iodine", "Both A and B", "Potassium"],
    correctAnswer: 2
  },
  {
    id: 374,
    question: "A goiter refers to an enlarged:",
    choices: ["Larynx", "Thyroid gland", "Parathyroid gland", "Pituitary gland"],
    correctAnswer: 1
  },
  {
    id: 375,
    question: "Cold nodules appear on the scan as:",
    choices: ["Darker", "Lighter", "Hot", "Equal density"],
    correctAnswer: 0
  },
  {
    id: 376,
    question: "The definitive diagnostic test for thyroid cancer is:",
    choices: ["CT scan", "Fine-needle aspiration", "MRI", "Thyroid scan"],
    correctAnswer: 1
  },
  {
    id: 377,
    question: "The most common cause of hyperthyroidism is:",
    choices: ["Graves disease", "Goiter", "Cold nodule", "Thyroid cancer"],
    correctAnswer: 0
  },
  {
    id: 378,
    question: "The external ear is lined with glands that secrete:",
    choices: ["Saliva", "Cerumen", "Mucus", "Sebum"],
    correctAnswer: 1
  },
  {
    id: 379,
    question: "The external opening of the nose is called the:",
    choices: ["Nares", "Septum", "Alar cartilage", "Turbinate"],
    correctAnswer: 0
  },
  {
    id: 380,
    question: "The surgical scraping of the frontal sinus to drain pus is called:",
    choices: ["Trephination", "Polypectomy", "Antrostomy", "Caldwell-Luc"],
    correctAnswer: 0
  },
  {
    id: 381,
    question: "Rhinorrhea refers to:",
    choices: ["Nosebleed", "Discharge from the nose", "Nasal obstruction", "Deviated septum"],
    correctAnswer: 1
  },
  {
    id: 382,
    question: "The ninth cranial nerve is responsible for:",
    choices: ["Hearing", "Balance", "Facial expression", "Not discussed"],
    correctAnswer: 3
  },
  {
    id: 383,
    question: "The epiglottis functions to:",
    choices: ["Aid phonation", "Protect the airway during swallowing", "Support the trachea", "Open the vocal cords"],
    correctAnswer: 1
  },
  {
    id: 384,
    question: "A rigid laryngoscope is used for:",
    choices: ["Tracheostomy", "Direct visualization of the larynx", "TMJ surgery", "Sinus surgery"],
    correctAnswer: 1
  },
  {
    id: 385,
    question: "What is the name of the opening created by a tracheostomy?",
    choices: ["Fistula", "Stoma", "Nares", "Trephine"],
    correctAnswer: 1
  },
  {
    id: 386,
    question: "Mastoidectomy is sometimes performed to treat:",
    choices: ["Cholesteatoma", "Otosclerosis", "Meniere's disease", "Tinnitus"],
    correctAnswer: 0
  },
  {
    id: 387,
    question: "Otosclerosis results in which type of hearing loss?",
    choices: ["Conductive", "Sensorineural", "Mixed", "Central"],
    correctAnswer: 0
  },
  {
    id: 388,
    question: "What is the primary purpose of a tonsillectomy and adenoidectomy?",
    choices: ["Remove fluid from the middle ear", "Remove enlarged infected lymphoid tissue", "Correct nasal fractures", "Drain sinus cavities"],
    correctAnswer: 1
  },
  {
    id: 389,
    question: "Which type of tonsils are also known as adenoids?",
    choices: ["Palatine tonsils", "Pharyngeal tonsils", "Lingual tonsils", "Cervical tonsils"],
    correctAnswer: 1
  },
  {
    id: 390,
    question: "Which instrument is used to grasp the tonsils during a tonsillectomy?",
    choices: ["Allis clamp", "Adson forceps", "Bayonet forceps", "Yankauer suction"],
    correctAnswer: 0
  },
  {
    id: 391,
    question: "What does the COBLATOR instrument use to remove tissue?",
    choices: ["Laser energy", "Ultrasonic waves", "Radiofrequency energy with saline", "Cryotherapy"],
    correctAnswer: 2
  },
  {
    id: 392,
    question: "Which patient position is appropriate after a tonsillectomy and adenoidectomy?",
    choices: ["Trendelenburg", "Prone", "Supine with neck extended", "Lateral with head elevated"],
    correctAnswer: 3
  },
  {
    id: 393,
    question: "Which cranial nerve controls facial muscles?",
    choices: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 1
  },
  {
    id: 394,
    question: "Which of the following is an abnormal fluid accumulation in the middle ear?",
    choices: ["Mastoiditis", "Effusion", "Cholesteatoma", "Tinnitus"],
    correctAnswer: 1
  },
  {
    id: 395,
    question: "What are the small hollow tubes placed in the tympanic membrane during a myringotomy called?",
    choices: ["Adenoids", "Grafts", "Tympanostomy tubes", "Splints"],
    correctAnswer: 2
  },
  {
    id: 396,
    question: "What is the primary purpose of a mastoidectomy?",
    choices: ["Treat otosclerosis", "Remove infected mastoid bone", "Place ear tubes", "Repair tympanic membrane"],
    correctAnswer: 1
  },
  {
    id: 397,
    question: "Otosclerosis affects which ossicle?",
    choices: ["Malleus", "Incus", "Stapes", "Cochlea"],
    correctAnswer: 2
  },
  {
    id: 398,
    question: "Which disease is associated with dizziness and tinnitus?",
    choices: ["Bell's palsy", "Meniere's disease", "Cholesteatoma", "Otitis media"],
    correctAnswer: 1
  },
  {
    id: 399,
    question: "Which procedure is performed for congenital or acquired deafness?",
    choices: ["Stapedectomy", "Cochlear implant", "Tympanoplasty", "Mastoidectomy"],
    correctAnswer: 1
  },
  {
    id: 400,
    question: "What is the proper treatment for Bell's palsy?",
    choices: ["Cochlear implant", "Facial nerve decompression", "Tympanoplasty", "Labyrinthectomy"],
    correctAnswer: 1
  },
  {
    id: 401,
    question: "Which nerve is associated with trigeminal neuralgia?",
    choices: ["Vagus", "Facial", "Trigeminal", "Vestibulocochlear"],
    correctAnswer: 2
  },
  {
    id: 402,
    question: "What is a submucous resection (SMR) performed for?",
    choices: ["Repair tympanic membrane", "Correct deviated nasal septum", "Remove nasal polyps", "Treat sinus infection"],
    correctAnswer: 1
  },
  {
    id: 403,
    question: "What is the purpose of a moustache dressing?",
    choices: ["Close nasal septum", "Stabilize fractured nose", "Collect drainage under the nose", "Improve nasal airflow"],
    correctAnswer: 2
  },
  {
    id: 404,
    question: "What is the primary treatment for epistaxis?",
    choices: ["Cauterization", "Direct pressure", "Artery ligation", "Packing"],
    correctAnswer: 1
  },
  {
    id: 405,
    question: "What is the most common scope angle used in FESS?",
    choices: ["0°", "30°", "70°", "90°"],
    correctAnswer: 0
  },
  {
    id: 406,
    question: "What is a Caldwell–Luc procedure performed for?",
    choices: ["Repair thyroid", "Drain maxillary sinus", "Remove nasal polyps", "Close tracheostomy"],
    correctAnswer: 1
  },
  {
    id: 407,
    question: "Which hormone does the thyroid gland produce?",
    choices: ["TSH", "T4 and T3", "PTH", "ACTH"],
    correctAnswer: 1
  },
  {
    id: 408,
    question: "What is a hot thyroid nodule?",
    choices: ["Hypofunctional", "Malignant", "Overactive and dark on scan", "Nonfunctional"],
    correctAnswer: 2
  },
  {
    id: 409,
    question: "Which disease is the most common cause of hyperthyroidism?",
    choices: ["Hashimoto's", "Graves'", "Goiter", "Hypocalcemia"],
    correctAnswer: 1
  },
  {
    id: 410,
    question: "Which disease is an autoimmune cause of hypothyroidism?",
    choices: ["Hashimoto's", "Graves'", "Goiter", "Hypocalcemia"],
    correctAnswer: 0
  },
  {
    id: 411,
    question: "What does the parathyroid hormone regulate?",
    choices: ["Sodium", "Potassium", "Calcium", "Iodine"],
    correctAnswer: 2
  },
  {
    id: 412,
    question: "What is the biggest concern in parathyroid surgery?",
    choices: ["Hyperthyroidism", "Hypocalcemia", "Hypothyroidism", "Hyperkalemia"],
    correctAnswer: 1
  },
  {
    id: 413,
    question: "Which nerve must be preserved during thyroid surgery?",
    choices: ["Facial", "Trigeminal", "Recurrent laryngeal", "Vestibulocochlear"],
    correctAnswer: 2
  },
  {
    id: 414,
    question: "Damage to both recurrent laryngeal nerves can cause:",
    choices: ["Hoarseness", "Difficulty swallowing", "Paralysis of tongue", "Inability to speak and breathe"],
    correctAnswer: 3
  },
  {
    id: 415,
    question: "What incision is used for a thyroidectomy?",
    choices: ["Midline", "Trifurcate", "Collar", "Lateral"],
    correctAnswer: 2
  },
  {
    id: 416,
    question: "What is a thyroglossal duct cyst?",
    choices: ["Acquired neck mass", "Congenital cyst in anterior neck", "Thyroid carcinoma", "Parathyroid adenoma"],
    correctAnswer: 1
  },
  {
    id: 417,
    question: "What is a glossectomy?",
    choices: ["Remove part of tongue", "Remove larynx", "Remove thyroid", "Repair vocal cords"],
    correctAnswer: 0
  },
  {
    id: 418,
    question: "What is the outermost layer of skin?",
    choices: ["Dermis", "Subcutaneous", "Fascia", "Epidermis"],
    correctAnswer: 3
  },
  {
    id: 419,
    question: "What layer contains connective tissue, nerves, and glands?",
    choices: ["Epidermis", "Dermis", "Fascia", "Subcutaneous"],
    correctAnswer: 1
  },
  {
    id: 420,
    question: "What is a hypertrophic scar?",
    choices: ["Flat scar", "Raised but less than keloid", "Malignant scar", "Normal healing tissue"],
    correctAnswer: 1
  },
  {
    id: 421,
    question: "Which burn damages only the epidermis?",
    choices: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 0
  },
  {
    id: 422,
    question: "Which burn damages all skin layers and underlying tissue?",
    choices: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 2
  },
  {
    id: 423,
    question: "What is the purpose of a three-layer dressing?",
    choices: ["Apply pressure", "Provide airtight seal", "Wick away secretions", "Protect and absorb drainage"],
    correctAnswer: 3
  },
  {
    id: 424,
    question: "What is a split-thickness skin graft?",
    choices: ["Includes epidermis and full dermis", "Includes only epidermis", "Includes epidermis and partial dermis", "Includes epidermis and fascia"],
    correctAnswer: 2
  },
  {
    id: 425,
    question: "Which graft is taken from another person?",
    choices: ["Autograft", "Allograft", "Xenograft", "Pedicle flap"],
    correctAnswer: 1
  },
  {
    id: 426,
    question: "Which instrument is used to harvest skin grafts?",
    choices: ["Coblator", "Allis", "Dermabrader", "Dermatome"],
    correctAnswer: 3
  },
  {
    id: 427,
    question: "Which is the most serious type of skin cancer?",
    choices: ["Squamous cell", "Melanoma", "Basal cell", "Keloid"],
    correctAnswer: 1
  },
  {
    id: 428,
    question: "Which pressure ulcer stage involves full tissue breakdown to muscle or bone?",
    choices: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    correctAnswer: 3
  },
  {
    id: 429,
    question: "Which body site is most prone to pressure ulcers?",
    choices: ["Sacrum", "Abdomen", "Shoulder", "Neck"],
    correctAnswer: 0
  },
  {
    id: 430,
    question: "What is a TRAM flap used for?",
    choices: ["Treat breast cancer", "Reconstruct breast after mastectomy", "Repair abdominal hernia", "Reduce breast size"],
    correctAnswer: 1
  },
  {
    id: 431,
    question: "What artery supplies a TRAM flap?",
    choices: ["Internal mammary", "Superior epigastric", "External iliac", "Subclavian"],
    correctAnswer: 1
  },
  {
    id: 432,
    question: "What is the most common incision for breast augmentation?",
    choices: ["Transumbilical", "Periareolar", "Inframammary", "Transaxillary"],
    correctAnswer: 2
  },
  {
    id: 433,
    question: "Which breast implant placement is below pectoralis major?",
    choices: ["Subglandular", "Subpectoral", "Subfascial", "Subcutaneous"],
    correctAnswer: 1
  },
  {
    id: 434,
    question: "What is the purpose of capsulotomy?",
    choices: ["Remove implant", "Reduce scar tissue around implant", "Increase breast size", "Place drain"],
    correctAnswer: 1
  },
  {
    id: 435,
    question: "What is the rule of nines used for?",
    choices: ["Calculate blood loss", "Estimate burn area", "Determine graft size", "Measure ulcer depth"],
    correctAnswer: 1
  },
  {
    id: 436,
    question: "What is the Lund-Browder chart more accurate for?",
    choices: ["Adults", "Elderly", "Children", "Infants"],
    correctAnswer: 2
  },
  {
    id: 437,
    question: "What is used to secure a split-thickness graft?",
    choices: ["Sutures", "Dermabrader", "Stent dressing", "Compression wrap"],
    correctAnswer: 2
  },
  {
    id: 438,
    question: "What does negative pressure wound therapy do?",
    choices: ["Delivers oxygen", "Removes bacteria and pulls wound edges", "Promotes edema", "Prevents scarring"],
    correctAnswer: 1
  },
  {
    id: 439,
    question: "Which dressing is used for clean closed wounds?",
    choices: ["Wet-to-dry", "Wet-to-wet", "One-layer", "Stent"],
    correctAnswer: 2
  },
  {
    id: 440,
    question: "Which type of dressing absorbs large amounts of drainage?",
    choices: ["One-layer", "Pressure dressing", "Wet-to-wet", "Occlusive"],
    correctAnswer: 1
  },
  {
    id: 441,
    question: "Which type of graft is stretched using a mesh device?",
    choices: ["FTSG", "STSG", "Allograft", "Xenograft"],
    correctAnswer: 1
  },
  {
    id: 442,
    question: "What is a pedicle flap?",
    choices: ["Free flap", "Graft from another species", "Attached flap maintaining blood supply", "Skin substitute"],
    correctAnswer: 2
  },
  {
    id: 443,
    question: "Which of the following is true about basal cell carcinoma?",
    choices: ["Most aggressive skin cancer", "Least risky and slow growing", "Spreads to organs", "Found in squamous layer"],
    correctAnswer: 1
  },
  {
    id: 444,
    question: "What is Mohs surgery?",
    choices: ["Removal of tumor and lymph nodes", "Thin layers of skin examined microscopically", "Skin grafting procedure", "Removal of entire skin lesion in one piece"],
    correctAnswer: 1
  },
  {
    id: 445,
    question: "What is the proper way to handle breast implants?",
    choices: ["Keep dry and powdered", "Use oil on gloves", "Place on lint-free surface", "Store in alcohol"],
    correctAnswer: 2
  },
  {
    id: 446,
    question: "What is a fourth-degree burn?",
    choices: ["Only epidermis damaged", "Involves dermis", "White, dry, no sensation", "Extends to muscle and bone"],
    correctAnswer: 3
  },
  {
    id: 447,
    question: "Which of the following is used to recreate the areola?",
    choices: ["Skin graft", "Tattooing", "TRAM flap", "Pedicle flap"],
    correctAnswer: 1
  },
  {
    id: 448,
    question: "Which muscle is used in a TRAM flap?",
    choices: ["External oblique", "Internal oblique", "Rectus abdominis", "Pectoralis major"],
    correctAnswer: 2
  },
  {
    id: 449,
    question: "What is the recommended skin prep solution for a graft donor site?",
    choices: ["Betadine", "Alcohol", "Colorless solution", "Chlorhexidine"],
    correctAnswer: 2
  },
  {
    id: 450,
    question: "What does a mesh graft allow?",
    choices: ["More durable graft", "Larger area coverage", "Faster healing", "Less scarring"],
    correctAnswer: 1
  },
  {
    id: 451,
    question: "What is the most effective barrier against infection?",
    choices: ["Dermis", "Fascia", "Epidermis", "Subcutaneous layer"],
    correctAnswer: 2
  },
  {
    id: 452,
    question: "What is Langer's lines?",
    choices: ["Muscle fibers", "Scar lines", "Natural skin lines used for incisions", "Blood vessels"],
    correctAnswer: 2
  },
  {
    id: 453,
    question: "What is the deepest skin layer listed below?",
    choices: ["Skin", "Muscle", "Subcutaneous fat", "Fascia"],
    correctAnswer: 2
  },
  {
    id: 454,
    question: "What is cicatrix?",
    choices: ["Scar tissue", "Dead tissue", "Healthy skin", "Tumor"],
    correctAnswer: 0
  },
  {
    id: 455,
    question: "What hormone controls the amount of calcium in the blood?",
    choices: ["Thyroid hormone", "Insulin", "Parathyroid hormone", "Calcitonin"],
    correctAnswer: 2
  },
  {
    id: 456,
    question: "Which condition is caused by lower than normal calcium levels in the blood?",
    choices: ["Hypercalcemia", "Hypocalcemia", "Hyperthyroidism", "Hashimoto's disease"],
    correctAnswer: 1
  },
  {
    id: 457,
    question: "Which of the following is a complication that can cause respiratory problems after thyroid surgery?",
    choices: ["Tetany", "Thyroid storm", "Laryngeal spasms", "Hypocalcemia"],
    correctAnswer: 2
  },
  {
    id: 458,
    question: "Hashimoto's disease is associated with:",
    choices: ["Hyperthyroidism", "Hypothyroidism", "Hypercalcemia", "Diabetes"],
    correctAnswer: 1
  },
  {
    id: 459,
    question: "During thyroid surgery, what nerve must be preserved to prevent hoarseness or breathing difficulty?",
    choices: ["Vagus nerve", "Hypoglossal nerve", "Recurrent laryngeal nerve", "Phrenic nerve"],
    correctAnswer: 2
  },
  {
    id: 460,
    question: "A thyroid storm is best described as:",
    choices: ["Acute hypothyroid crisis", "Acute hyperthyroid crisis", "Hypercalcemic crisis", "Severe hypothermia"],
    correctAnswer: 1
  },
  {
    id: 461,
    question: "What is the correct position for a thyroidectomy?",
    choices: ["Prone", "Lateral", "Supine with neck hyperextended", "Fowler's"],
    correctAnswer: 2
  },
  {
    id: 462,
    question: "What type of incision is used for a thyroidectomy?",
    choices: ["Median", "Transverse/collar", "Vertical", "Oblique"],
    correctAnswer: 1
  },
  {
    id: 463,
    question: "Damage to the recurrent laryngeal nerve on both sides can result in:",
    choices: ["Hoarseness", "Complete loss of smell", "Difficulty speaking and breathing", "Blindness"],
    correctAnswer: 2
  },
  {
    id: 464,
    question: "The classical radical neck dissection involves removal of which of the following?",
    choices: ["Thyroid gland", "Parathyroid gland", "Sternocleidomastoid muscle", "Cricoid cartilage"],
    correctAnswer: 2
  },
  {
    id: 465,
    question: "What is the most superficial layer of the skin?",
    choices: ["Dermis", "Epidermis", "Fascia", "Subcutaneous fat"],
    correctAnswer: 1
  },
  {
    id: 466,
    question: "Langer's lines are important because:",
    choices: ["They mark nerve pathways", "Incisions made along them heal better cosmetically", "They identify arteries", "They prevent infection"],
    correctAnswer: 1
  },
  {
    id: 467,
    question: "A hypertrophic scar is best described as:",
    choices: ["Normal scar tissue", "A raised, reddish, nodular scar", "A slightly raised but less pronounced scar", "A sunken scar"],
    correctAnswer: 2
  },
  {
    id: 468,
    question: "The 'rule of nines' is used to:",
    choices: ["Calculate electrolyte replacement", "Estimate burn surface area in adults", "Measure BMI", "Diagnose thyroid storm"],
    correctAnswer: 1
  },
  {
    id: 469,
    question: "A third-degree burn is described as:",
    choices: ["Superficial redness only", "Blistered and moist", "Full thickness, dry, white or charred", "Partial thickness, moist"],
    correctAnswer: 2
  },
  {
    id: 470,
    question: "Which dressing type applies even pressure and prevents edema?",
    choices: ["Wet-to-dry", "Pressure", "One-layer", "Occlusive"],
    correctAnswer: 1
  },
  {
    id: 471,
    question: "What is the purpose of a stent dressing?",
    choices: ["Immobilize the wound", "Eliminate dead space", "Hold a skin graft in place", "Protect against burns"],
    correctAnswer: 2
  },
  {
    id: 472,
    question: "A split-thickness skin graft includes:",
    choices: ["Epidermis only", "Epidermis and full dermis", "Epidermis and part of dermis", "Dermis only"],
    correctAnswer: 2
  },
  {
    id: 473,
    question: "Which type of graft is from a donor of a different species?",
    choices: ["Autograft", "Allograft", "Heterograft", "Pedicle flap"],
    correctAnswer: 2
  },
  {
    id: 474,
    question: "What instrument is used to cut thin slices of skin for grafting?",
    choices: ["Ferris-Smith", "Dermatome", "Tenotomy scissors", "Skin hook"],
    correctAnswer: 1
  },
  {
    id: 475,
    question: "A TRAM flap uses which muscle?",
    choices: ["Sternocleidomastoid", "Rectus abdominis", "Platysma", "Brachialis"],
    correctAnswer: 1
  },
  {
    id: 476,
    question: "The blood supply for a TRAM flap comes from the:",
    choices: ["Superior epigastric artery and vein", "Femoral artery", "Radial artery", "Inferior vena cava"],
    correctAnswer: 0
  },
  {
    id: 477,
    question: "Which is NOT a placement option for breast implants?",
    choices: ["Subglandular", "Subfascial", "Submuscular", "Subperiosteal"],
    correctAnswer: 3
  },
  {
    id: 478,
    question: "Which incision is used for augmentation mammoplasty?",
    choices: ["Transumbilical", "Transoral", "Posterior", "Midline"],
    correctAnswer: 0
  },
  {
    id: 479,
    question: "What does a capsulotomy treat?",
    choices: ["Tumor", "Scar tissue around breast implant", "Infected gland", "Carcinoma"],
    correctAnswer: 1
  },
  {
    id: 480,
    question: "What is the purpose of a mentoplasty?",
    choices: ["Reshape ears", "Reshape chin", "Reshape nose", "Reshape eyelids"],
    correctAnswer: 1
  },
  {
    id: 481,
    question: "A rhytidectomy is another term for:",
    choices: ["Facelift", "Nose job", "Brow lift", "Liposuction"],
    correctAnswer: 0
  },
  {
    id: 482,
    question: "Dermatochalasis refers to:",
    choices: ["Sagging of the eyelids", "Thickening of the skin", "Drooping of the mouth", "Overactive sebaceous glands"],
    correctAnswer: 0
  },
  {
    id: 483,
    question: "Which laser is most commonly used for skin resurfacing?",
    choices: ["Argon", "CO₂", "Nd:YAG", "Excimer"],
    correctAnswer: 1
  },
  {
    id: 484,
    question: "Liposuction removes fat through:",
    choices: ["Curettage", "High-pressure vacuum", "Laser ablation", "Radiofrequency ablation"],
    correctAnswer: 1
  },
  {
    id: 485,
    question: "Which gland secretes mucous to aid ejaculation?",
    choices: ["Prostate", "Cowper's", "Seminal vesicle", "Adrenal"],
    correctAnswer: 1
  },
  {
    id: 486,
    question: "The glomerulus is located in:",
    choices: ["Medulla of kidney", "Cortex of kidney", "Bladder", "Ureter"],
    correctAnswer: 1
  },
  {
    id: 487,
    question: "The functional unit of the kidney is the:",
    choices: ["Glomerulus", "Loop of Henle", "Nephron", "Bowman's capsule"],
    correctAnswer: 2
  },
  {
    id: 488,
    question: "The trigone of the bladder includes:",
    choices: ["Two ureter openings and one urethral opening", "Only ureter openings", "Only urethral opening", "None of the above"],
    correctAnswer: 0
  },
  {
    id: 489,
    question: "Which hormone is secreted by the adrenal medulla?",
    choices: ["Aldosterone", "Cortisol", "Epinephrine", "ACTH"],
    correctAnswer: 2
  },
  {
    id: 490,
    question: "Which hormone stimulates the adrenal cortex?",
    choices: ["ACTH", "TSH", "FSH", "LH"],
    correctAnswer: 0
  },
  {
    id: 491,
    question: "Where is the prostate gland located?",
    choices: ["Surrounds ureters", "At the base of the bladder neck around urethra", "In the scrotum", "On the penis shaft"],
    correctAnswer: 1
  },
  {
    id: 492,
    question: "BPH is best described as:",
    choices: ["Malignant tumor", "Noncancerous overgrowth of prostate", "Cyst in the prostate", "Blockage in the ureters"],
    correctAnswer: 1
  },
  {
    id: 493,
    question: "What is the purpose of irrigation fluids during GU procedures?",
    choices: ["Cool tissues", "Prevent infection", "Distend bladder and prevent hypothermia", "Anesthetize the bladder"],
    correctAnswer: 2
  },
  {
    id: 494,
    question: "What is a common solution for TURP procedures?",
    choices: ["Saline", "Glycine", "Dextrose", "Ringer's lactate"],
    correctAnswer: 1
  },
  {
    id: 495,
    question: "Which catheter is designed to bypass an obstruction?",
    choices: ["Foley", "Red Robinson", "Stent", "Coude"],
    correctAnswer: 2
  },
  {
    id: 496,
    question: "Which catheter is used to measure urine output with a drainage bag?",
    choices: ["Foley", "Plain", "Red Robinson", "Cone tip"],
    correctAnswer: 0
  },
  {
    id: 497,
    question: "Which of the following is a ureteral catheter tip?",
    choices: ["Whistle", "Robinson", "Foley", "Straight"],
    correctAnswer: 0
  },
  {
    id: 498,
    question: "Indwelling urethral stents include:",
    choices: ["Robinson and Coude", "Double J and double pigtail", "Foley and Garceau", "Olive and cone"],
    correctAnswer: 1
  },
  {
    id: 499,
    question: "What is the correct amount of water to fill a 5-cc Foley balloon?",
    choices: ["2–3 cc", "5 cc", "8–10 cc", "15 cc"],
    correctAnswer: 1
  },
  {
    id: 500,
    question: "The recurrent laryngeal nerve is a branch of which cranial nerve?",
    choices: ["VII", "X", "IX", "XI"],
    correctAnswer: 1
  },
  {
    id: 501,
    question: "What muscle is incised during a thyroidectomy?",
    choices: ["Platysma", "Masseter", "Digastric", "Buccinator"],
    correctAnswer: 0
  },
  {
    id: 502,
    question: "What dressing provides an airtight seal and prevents drying?",
    choices: ["Wet-to-dry", "Nonocclusive", "Occlusive", "Semiclusive"],
    correctAnswer: 2
  },
  {
    id: 503,
    question: "What is the purpose of moist peanuts in thyroid surgery?",
    choices: ["Grasp thyroid", "Retract muscles", "Blunt dissection", "Suture trachea"],
    correctAnswer: 2
  },
  {
    id: 504,
    question: "What is the proper position for neck dissection?",
    choices: ["Supine", "Lateral", "Prone", "Sitting"],
    correctAnswer: 0
  },
  {
    id: 505,
    question: "What incision is used for a neck dissection?",
    choices: ["Collar", "Trifurcate", "Midline", "Oblique"],
    correctAnswer: 1
  },
  {
    id: 506,
    question: "What instrument is specifically used in blepharoplasty?",
    choices: ["Frazier suction", "Iris scissors", "Adson forceps", "Blepharoplasty calipers"],
    correctAnswer: 3
  },
  {
    id: 507,
    question: "Which type of burn damages muscles and nerves?",
    choices: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 3
  },
  {
    id: 508,
    question: "What is the purpose of a Doppler in breast reconstruction?",
    choices: ["Measure implant volume", "Preserve artery", "Position flap", "Identify nerve"],
    correctAnswer: 1
  },
  {
    id: 509,
    question: "What laser is used for tattoo removal?",
    choices: ["Argon", "CO₂", "Q-switched", "Excimer"],
    correctAnswer: 2
  },
  {
    id: 510,
    question: "What procedure is also called a nose job?",
    choices: ["Rhinoplasty", "Rhytidectomy", "Mentoplasty", "Otoplasty"],
    correctAnswer: 0
  },
  {
    id: 511,
    question: "The scrotum contains:",
    choices: ["Prostate and urethra", "Testes, epididymis, and spermatic cord", "Vas deferens and glans penis", "Bladder and prostate"],
    correctAnswer: 1
  },
  {
    id: 512,
    question: "Which tissue fills with blood during erection?",
    choices: ["Corpus luteum", "Corpus callosum", "Corpus spongiosum and cavernosum", "Corpus albicans"],
    correctAnswer: 2
  },
  {
    id: 513,
    question: "Which part of the nephron reabsorbs sodium and water?",
    choices: ["Bowman's capsule", "Loop of Henle", "Glomerulus", "Renal pelvis"],
    correctAnswer: 1
  },
  {
    id: 514,
    question: "Which scan is an x-ray with contrast of the entire urological system?",
    choices: ["KUB", "IVU", "MRI", "CT scan"],
    correctAnswer: 1
  },
  {
    id: 515,
    question: "What is the name of the erectile tissue surrounding the urethra?",
    choices: ["Corpus spongiosum", "Corpus cavernosum", "Glans penis", "Urethral meatus"],
    correctAnswer: 0
  }
];
