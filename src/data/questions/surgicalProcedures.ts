export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the first step in preparing a patient for surgery?",
    options: ["Administer anesthesia", "Obtain informed consent", "Sterilize surgical instruments", "Position the patient"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which instrument is used to cut tissue?",
    options: ["Scalpel", "Forceps", "Retractor", "Clamp"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "What is the purpose of a surgical sponge?",
    options: ["To absorb blood", "To retract tissue", "To cut tissue", "To clamp vessels"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which suture material is absorbable?",
    options: ["Silk", "Nylon", "Catgut", "Polypropylene"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the normal range for body temperature?",
    options: ["35-36°C", "36-37°C", "37-38°C", "38-39°C"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which position is used for abdominal surgery?",
    options: ["Supine", "Prone", "Lithotomy", "Trendelenburg"],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "What is the function of a retractor?",
    options: ["To hold tissue back", "To cut tissue", "To clamp vessels", "To suture wounds"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Which of the following is a sterile field?",
    options: ["Surgical drapes", "Operating room floor", "Surgeon's gloves", "Patient's skin before prep"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What is the main purpose of surgical asepsis?",
    options: ["Prevent infection", "Reduce pain", "Speed healing", "Control bleeding"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Which type of anesthesia involves loss of consciousness?",
    options: ["Local", "Regional", "General", "Topical"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which bone is also known as the malar bone?",
    options: ["Maxilla", "Zygomatic", "Mandible", "Frontal"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "The Le Fort I fracture is also called a:",
    options: ["Mustache fracture", "Blowout fracture", "Craniofacial fracture", "Pyramid maxillary fracture"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Arch bars are primarily used to realign the:",
    options: ["Zygomatic bone", "Mandible and maxilla", "Orbital floor", "Nasal septum"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "The orbital floor fracture is also known as:",
    options: ["Le Fort I", "Le Fort III", "Blowout fracture", "Mustache fracture"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "The surgeon protects the cornea during orbital floor surgery with:",
    options: ["Plastic sheeting", "Corneal eye protectors", "Cotton pledgets", "Silicone shields"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "In a Le Fort II fracture, the neurosurgeon must be present because of possible damage to the:",
    options: ["Orbital floor", "Nasal bone", "Brain tissue and CSF leakage", "Maxilla"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "The malocclusion that results from misalignment of the jaws can be corrected with:",
    options: ["MMA", "MMF", "Arch bars", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 18,
    question: "Temporomandibular joint (TMJ) surgery is indicated for all of the following except:",
    options: ["Muscle tension", "Malocclusion", "Trauma", "Sleep apnea"],
    correctAnswer: 3
  },
  {
    id: 19,
    question: "The snail-shaped structure of the inner ear that contains the organ of Corti is the:",
    options: ["Vestibule", "Cochlea", "Semicircular canal", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "The ossicles include all of the following except:",
    options: ["Malleus", "Incus", "Cochlea", "Stapes"],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "The external ear terminates at the:",
    options: ["Tympanic membrane", "Eustachian tube", "Auricle", "Middle ear"],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "The nasal cavity is connected to the ear by the:",
    options: ["Cochlea", "Vestibule", "Eustachian tube", "Tympanic membrane"],
    correctAnswer: 2
  },
  {
    id: 23,
    question: "Choanal atresia repair may involve the use of a:",
    options: ["Microdebrider", "Stensen's duct probe", "Tuning fork", "Arch bar"],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "The paranasal sinuses located behind the lower forehead are the:",
    options: ["Maxillary", "Ethmoid", "Frontal", "Sphenoid"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "The surgical opening into the maxillary sinus to treat chronic sinusitis is called an:",
    options: ["Antrostomy", "Polypectomy", "Mastoidectomy", "Tympanoplasty"],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "During a parotidectomy, care must be taken to preserve the:",
    options: ["Seventh cranial nerve", "Fifth cranial nerve", "Eighth cranial nerve", "Tenth cranial nerve"],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "The largest of the salivary glands is the:",
    options: ["Sublingual", "Submandibular", "Parotid", "Adenoid"],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "The larynx has all of the following functions except:",
    options: ["Passageway for respiration", "Prevents aspiration", "Houses the pituitary gland", "Source of vocalization"],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "Which cartilage is also called the Adam's apple?",
    options: ["Cricoid", "Arytenoid", "Thyroid", "Epiglottis"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Laryngectomy is performed to treat:",
    options: ["Sinusitis", "TMJ disorder", "Laryngeal cancer", "Sleep apnea"],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "A permanent opening in the neck after a total laryngectomy is called a:",
    options: ["Tracheostomy", "Fistula", "Stoma", "Anastomosis"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "The purpose of wet gauze during laser laryngeal surgery is to:",
    options: ["Clean the field", "Prevent a fire", "Keep the tissues moist", "Absorb bleeding"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "The trachea is composed of:",
    options: ["Solid bone rings", "Incomplete c-shaped cartilage rings", "Muscle only", "Connective tissue only"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "A tracheostomy is indicated for all of the following except:",
    options: ["Chronic lung disease", "Sleep apnea", "Vocal cord paralysis", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "The cranial nerve that supplies motor innervation to the pharynx and larynx is the:",
    options: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 3
  },
  {
    id: 36,
    question: "The vestibulocochlear nerve connects the inner ear to the:",
    options: ["Lungs", "Nose", "Brain", "Larynx"],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "Otitis media is an inflammation of the:",
    options: ["Inner ear", "Middle ear", "Outer ear", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "Tympanoplasty is performed to repair the:",
    options: ["Cochlea", "Semicircular canals", "Tympanic membrane", "Eustachian tube"],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "Cholesteatoma is treated with a:",
    options: ["Mastoidectomy", "Tympanoplasty", "Stapedectomy", "Antrostomy"],
    correctAnswer: 0
  },
  {
    id: 40,
    question: "The abnormal bone growth of the stapes is called:",
    options: ["Meniere's disease", "Otosclerosis", "Bell's palsy", "Cholesteatoma"],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "Stapedectomy prosthetic materials include all except:",
    options: ["Stainless steel", "Platinum", "Teflon", "Bone cement"],
    correctAnswer: 3
  },
  {
    id: 42,
    question: "Meniere's disease primarily affects the:",
    options: ["Middle ear", "Inner ear", "Eustachian tube", "Nasal cavity"],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "Bell's palsy affects which cranial nerve?",
    options: ["Fifth", "Sixth", "Seventh", "Eighth"],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "Facial nerve decompression surgery is done to treat all of the following except:",
    options: ["Trauma", "Bell's palsy", "TMJ disorder", "Tumors"],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "A cochlear implant receiver is placed in the:",
    options: ["Cochlea", "Tympanic membrane", "Mastoid process", "Semicircular canals"],
    correctAnswer: 2
  },
  {
    id: 46,
    question: "Submucous resection is performed to correct problems of the:",
    options: ["Vocal cords", "Nasal septum", "Maxilla", "Larynx"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "The moustache dressing is used after surgery on the:",
    options: ["Trachea", "Nose", "Larynx", "Ear"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "Which instrument is used to retract the uvula during tonsillectomy?",
    options: ["Freer elevator", "Robinson catheter", "Coblator", "Adenotome"],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "Which nerve is responsible for movements of the facial muscles?",
    options: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Myringotomy tubes are also called all of the following except:",
    options: ["PETs", "Tympanostomy tubes", "Ventilation tubes", "Arch bars"],
    correctAnswer: 3
  },
  {
    id: 51,
    question: "Mastoiditis is an inflammation of the:",
    options: ["Temporal bone", "Eustachian tube", "Parotid gland", "Semicircular canal"],
    correctAnswer: 0
  },
  {
    id: 52,
    question: "Otosclerosis prevents the stapes from:",
    options: ["Growing", "Vibrating", "Fusing", "Moving inward"],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "The labyrinth is made up of all of the following except:",
    options: ["Vestibule", "Cochlea", "Eustachian tube", "Semicircular canals"],
    correctAnswer: 2
  },
  {
    id: 54,
    question: "The Caldwell-Luc incision is made in the:",
    options: ["Maxilla", "Canine fossa", "Orbital floor", "Inferior turbinate"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "Thyroxine and triiodothyronine are produced by the:",
    options: ["Parathyroid", "Pituitary", "Thyroid", "Adrenal"],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "TSH is produced by the:",
    options: ["Thyroid", "Pituitary", "Parathyroid", "Adrenal"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "The middle portion of the thyroid gland that connects the two lobes is called the:",
    options: ["Isthmus", "Node", "Fossa", "Pedicle"],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "Thyroid scan radiotracers include:",
    options: ["Technetium", "Iodine", "Both A and B", "Potassium"],
    correctAnswer: 2
  },
  {
    id: 59,
    question: "A goiter refers to an enlarged:",
    options: ["Larynx", "Thyroid gland", "Parathyroid gland", "Pituitary gland"],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "Cold nodules appear on the scan as:",
    options: ["Darker", "Lighter", "Hot", "Equal density"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "The definitive diagnostic test for thyroid cancer is:",
    options: ["CT scan", "Fine-needle aspiration", "MRI", "Thyroid scan"],
    correctAnswer: 1
  },
  {
    id: 62,
    question: "The most common cause of hyperthyroidism is:",
    options: ["Graves disease", "Goiter", "Cold nodule", "Thyroid cancer"],
    correctAnswer: 0
  },
  {
    id: 63,
    question: "The external ear is lined with glands that secrete:",
    options: ["Saliva", "Cerumen", "Mucus", "Sebum"],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "The external opening of the nose is called the:",
    options: ["Nares", "Septum", "Alar cartilage", "Turbinate"],
    correctAnswer: 0
  },
  {
    id: 65,
    question: "The surgical scraping of the frontal sinus to drain pus is called:",
    options: ["Trephination", "Polypectomy", "Antrostomy", "Caldwell-Luc"],
    correctAnswer: 0
  },
  {
    id: 66,
    question: "Rhinorrhea refers to:",
    options: ["Nosebleed", "Discharge from the nose", "Nasal obstruction", "Deviated septum"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "The ninth cranial nerve is responsible for:",
    options: ["Hearing", "Balance", "Facial expression", "Not discussed"],
    correctAnswer: 3
  },
  {
    id: 68,
    question: "The epiglottis functions to:",
    options: ["Aid phonation", "Protect the airway during swallowing", "Support the trachea", "Open the vocal cords"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "A rigid laryngoscope is used for:",
    options: ["Tracheostomy", "Direct visualization of the larynx", "TMJ surgery", "Sinus surgery"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "What is the name of the opening created by a tracheostomy?",
    options: ["Fistula", "Stoma", "Nares", "Trephine"],
    correctAnswer: 1
  },
  {
    id: 71,
    question: "Mastoidectomy is sometimes performed to treat:",
    options: ["Cholesteatoma", "Otosclerosis", "Meniere's disease", "Tinnitus"],
    correctAnswer: 0
  },
  {
    id: 72,
    question: "Otosclerosis results in which type of hearing loss?",
    options: ["Conductive", "Sensorineural", "Mixed", "Central"],
    correctAnswer: 0
  },
  {
    id: 73,
    question: "What is the primary purpose of a tonsillectomy and adenoidectomy?",
    options: ["Remove fluid from the middle ear", "Remove enlarged infected lymphoid tissue", "Correct nasal fractures", "Drain sinus cavities"],
    correctAnswer: 1
  },
  {
    id: 74,
    question: "Which type of tonsils are also known as adenoids?",
    options: ["Palatine tonsils", "Pharyngeal tonsils", "Lingual tonsils", "Cervical tonsils"],
    correctAnswer: 1
  },
  {
    id: 75,
    question: "Which instrument is used to grasp the tonsils during a tonsillectomy?",
    options: ["Allis clamp", "Adson forceps", "Bayonet forceps", "Yankauer suction"],
    correctAnswer: 0
  },
  {
    id: 76,
    question: "What does the COBLATOR instrument use to remove tissue?",
    options: ["Laser energy", "Ultrasonic waves", "Radiofrequency energy with saline", "Cryotherapy"],
    correctAnswer: 2
  },
  {
    id: 77,
    question: "Which patient position is appropriate after a tonsillectomy and adenoidectomy?",
    options: ["Trendelenburg", "Prone", "Supine with neck extended", "Lateral with head elevated"],
    correctAnswer: 3
  },
  {
    id: 78,
    question: "Which cranial nerve controls facial muscles?",
    options: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "Which of the following is an abnormal fluid accumulation in the middle ear?",
    options: ["Mastoiditis", "Effusion", "Cholesteatoma", "Tinnitus"],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "What are the small hollow tubes placed in the tympanic membrane during a myringotomy called?",
    options: ["Adenoids", "Grafts", "Tympanostomy tubes", "Splints"],
    correctAnswer: 2
  },
  {
    id: 81,
    question: "What is the primary purpose of a mastoidectomy?",
    options: ["Treat otosclerosis", "Remove infected mastoid bone", "Place ear tubes", "Repair tympanic membrane"],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "Otosclerosis affects which ossicle?",
    options: ["Malleus", "Incus", "Stapes", "Cochlea"],
    correctAnswer: 2
  },
  {
    id: 83,
    question: "Which disease is associated with dizziness and tinnitus?",
    options: ["Bell's palsy", "Meniere's disease", "Cholesteatoma", "Otitis media"],
    correctAnswer: 1
  },
  {
    id: 84,
    question: "Which procedure is performed for congenital or acquired deafness?",
    options: ["Stapedectomy", "Cochlear implant", "Tympanoplasty", "Mastoidectomy"],
    correctAnswer: 1
  },
  {
    id: 85,
    question: "What is the proper treatment for Bell's palsy?",
    options: ["Cochlear implant", "Facial nerve decompression", "Tympanoplasty", "Labyrinthectomy"],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "Which nerve is associated with trigeminal neuralgia?",
    options: ["Vagus", "Facial", "Trigeminal", "Vestibulocochlear"],
    correctAnswer: 2
  },
  {
    id: 87,
    question: "What is a submucous resection (SMR) performed for?",
    options: ["Repair tympanic membrane", "Correct deviated nasal septum", "Remove nasal polyps", "Treat sinus infection"],
    correctAnswer: 1
  },
  {
    id: 88,
    question: "What is the purpose of a moustache dressing?",
    options: ["Close nasal septum", "Stabilize fractured nose", "Collect drainage under the nose", "Improve nasal airflow"],
    correctAnswer: 2
  },
  {
    id: 89,
    question: "What is the primary treatment for epistaxis?",
    options: ["Cauterization", "Direct pressure", "Artery ligation", "Packing"],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "What is the most common scope angle used in FESS?",
    options: ["0°", "30°", "70°", "90°"],
    correctAnswer: 0
  },
  {
    id: 91,
    question: "What is a Caldwell–Luc procedure performed for?",
    options: ["Repair thyroid", "Drain maxillary sinus", "Remove nasal polyps", "Close tracheostomy"],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "Which hormone does the thyroid gland produce?",
    options: ["TSH", "T4 and T3", "PTH", "ACTH"],
    correctAnswer: 2
  },
  {
    id: 93,
    question: "What is a hot thyroid nodule?",
    options: ["Hypofunctional", "Malignant", "Overactive and dark on scan", "Nonfunctional"],
    correctAnswer: 2
  },
  {
    id: 94,
    question: "Which disease is the most common cause of hyperthyroidism?",
    options: ["Hashimoto's", "Graves'", "Goiter", "Hypocalcemia"],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "Which disease is an autoimmune cause of hypothyroidism?",
    options: ["Hashimoto's", "Graves'", "Goiter", "Hypocalcemia"],
    correctAnswer: 0
  },
  {
    id: 96,
    question: "What does the parathyroid hormone regulate?",
    options: ["Sodium", "Potassium", "Calcium", "Iodine"],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "What is the biggest concern in parathyroid surgery?",
    options: ["Hyperthyroidism", "Hypocalcemia", "Hypothyroidism", "Hyperkalemia"],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "Which nerve must be preserved during thyroid surgery?",
    options: ["Facial", "Trigeminal", "Recurrent laryngeal", "Vestibulocochlear"],
    correctAnswer: 2
  },
  {
    id: 99,
    question: "Damage to both recurrent laryngeal nerves can cause:",
    options: ["Hoarseness", "Difficulty swallowing", "Paralysis of tongue", "Inability to speak and breathe"],
    correctAnswer: 3
  },
  {
    id: 100,
    question: "What incision is used for a thyroidectomy?",
    options: ["Midline", "Trifurcate", "Collar", "Lateral"],
    correctAnswer: 2
  },
  {
    id: 101,
    question: "What is a thyroglossal duct cyst?",
    options: ["Acquired neck mass", "Congenital cyst in anterior neck", "Thyroid carcinoma", "Parathyroid adenoma"],
    correctAnswer: 1
  },
  {
    id: 102,
    question: "What is a glossectomy?",
    options: ["Remove part of tongue", "Remove larynx", "Remove thyroid", "Repair vocal cords"],
    correctAnswer: 0
  },
  {
    id: 103,
    question: "What is the outermost layer of skin?",
    options: ["Dermis", "Subcutaneous", "Fascia", "Epidermis"],
    correctAnswer: 3
  },
  {
    id: 104,
    question: "What layer contains connective tissue, nerves, and glands?",
    options: ["Epidermis", "Dermis", "Fascia", "Subcutaneous"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "What is a hypertrophic scar?",
    options: ["Flat scar", "Raised but less than keloid", "Malignant scar", "Normal healing tissue"],
    correctAnswer: 1
  },
  {
    id: 106,
    question: "Which burn damages only the epidermis?",
    options: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 0
  },
  {
    id: 107,
    question: "Which burn damages all skin layers and underlying tissue?",
    options: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 2
  },
  {
    id: 108,
    question: "What is the purpose of a three-layer dressing?",
    options: ["Apply pressure", "Provide airtight seal", "Wick away secretions", "Protect and absorb drainage"],
    correctAnswer: 3
  },
  {
    id: 109,
    question: "What is a split-thickness skin graft?",
    options: ["Includes epidermis and full dermis", "Includes only epidermis", "Includes epidermis and partial dermis", "Includes epidermis and fascia"],
    correctAnswer: 2
  },
  {
    id: 110,
    question: "Which graft is taken from another person?",
    options: ["Autograft", "Allograft", "Xenograft", "Pedicle flap"],
    correctAnswer: 1
  },
  {
    id: 111,
    question: "Which instrument is used to harvest skin grafts?",
    options: ["Coblator", "Allis", "Dermabrader", "Dermatome"],
    correctAnswer: 3
  },
  {
    id: 112,
    question: "Which is the most serious type of skin cancer?",
    options: ["Squamous cell", "Melanoma", "Basal cell", "Keloid"],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "Which pressure ulcer stage involves full tissue breakdown to muscle or bone?",
    options: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    correctAnswer: 3
  },
  {
    id: 114,
    question: "Which body site is most prone to pressure ulcers?",
    options: ["Sacrum", "Abdomen", "Shoulder", "Neck"],
    correctAnswer: 0
  },
  {
    id: 115,
    question: "What is a TRAM flap used for?",
    options: ["Treat breast cancer", "Reconstruct breast after mastectomy", "Repair abdominal hernia", "Reduce breast size"],
    correctAnswer: 1
  },
  {
    id: 116,
    question: "What artery supplies a TRAM flap?",
    options: ["Internal mammary", "Superior epigastric", "External iliac", "Subclavian"],
    correctAnswer: 1
  },
  {
    id: 117,
    question: "What is the most common incision for breast augmentation?",
    options: ["Transumbilical", "Periareolar", "Inframammary", "Transaxillary"],
    correctAnswer: 2
  },
  {
    id: 118,
    question: "Which breast implant placement is below pectoralis major?",
    options: ["Subglandular", "Subpectoral", "Subfascial", "Subcutaneous"],
    correctAnswer: 1
  },
  {
    id: 119,
    question: "What is the purpose of capsulotomy?",
    options: ["Remove implant", "Reduce scar tissue around implant", "Increase breast size", "Place drain"],
    correctAnswer: 1
  },
  {
    id: 120,
    question: "What is the rule of nines used for?",
    options: ["Calculate blood loss", "Estimate burn area", "Determine graft size", "Measure ulcer depth"],
    correctAnswer: 1
  },
  {
    id: 121,
    question: "What is the Lund-Browder chart more accurate for?",
    options: ["Adults", "Elderly", "Children", "Infants"],
    correctAnswer: 2
  },
  {
    id: 122,
    question: "What is used to secure a split-thickness graft?",
    options: ["Sutures", "Dermabrader", "Stent dressing", "Compression wrap"],
    correctAnswer: 2
  },
  {
    id: 123,
    question: "What does negative pressure wound therapy do?",
    options: ["Delivers oxygen", "Removes bacteria and pulls wound edges", "Promotes edema", "Prevents scarring"],
    correctAnswer: 1
  },
  {
    id: 124,
    question: "Which dressing is used for clean closed wounds?",
    options: ["Wet-to-dry", "Wet-to-wet", "One-layer", "Stent"],
    correctAnswer: 2
  },
  {
    id: 125,
    question: "Which type of dressing absorbs large amounts of drainage?",
    options: ["One-layer", "Pressure dressing", "Wet-to-wet", "Occlusive"],
    correctAnswer: 1
  },
  {
    id: 126,
    question: "Which type of graft is stretched using a mesh device?",
    options: ["FTSG", "STSG", "Allograft", "Xenograft"],
    correctAnswer: 1
  },
  {
    id: 127,
    question: "What is a pedicle flap?",
    options: ["Free flap", "Graft from another species", "Attached flap maintaining blood supply", "Skin substitute"],
    correctAnswer: 2
  },
  {
    id: 128,
    question: "Which of the following is true about basal cell carcinoma?",
    options: ["Most aggressive skin cancer", "Least risky and slow growing", "Spreads to organs", "Found in squamous layer"],
    correctAnswer: 1
  },
  {
    id: 129,
    question: "What is Mohs surgery?",
    options: ["Removal of tumor and lymph nodes", "Thin layers of skin examined microscopically", "Skin grafting procedure", "Removal of entire skin lesion in one piece"],
    correctAnswer: 1
  },
  {
    id: 130,
    question: "What is the proper way to handle breast implants?",
    options: ["Keep dry and powdered", "Use oil on gloves", "Place on lint-free surface", "Store in alcohol"],
    correctAnswer: 2
  },
  {
    id: 131,
    question: "What is a fourth-degree burn?",
    options: ["Only epidermis damaged", "Involves dermis", "White, dry, no sensation", "Extends to muscle and bone"],
    correctAnswer: 3
  },
  {
    id: 132,
    question: "Which of the following is used to recreate the areola?",
    options: ["Skin graft", "Tattooing", "TRAM flap", "Pedicle flap"],
    correctAnswer: 1
  },
  {
    id: 133,
    question: "Which muscle is used in a TRAM flap?",
    options: ["External oblique", "Internal oblique", "Rectus abdominis", "Pectoralis major"],
    correctAnswer: 2
  },
  {
    id: 134,
    question: "What is the recommended skin prep solution for a graft donor site?",
    options: ["Betadine", "Alcohol", "Colorless solution", "Chlorhexidine"],
    correctAnswer: 2
  },
  {
    id: 135,
    question: "What does a mesh graft allow?",
    options: ["More durable graft", "Larger area coverage", "Faster healing", "Less scarring"],
    correctAnswer: 1
  },
  {
    id: 136,
    question: "What is the most effective barrier against infection?",
    options: ["Dermis", "Fascia", "Epidermis", "Subcutaneous layer"],
    correctAnswer: 2
  },
  {
    id: 137,
    question: "What is Langer's lines?",
    options: ["Muscle fibers", "Scar lines", "Natural skin lines used for incisions", "Blood vessels"],
    correctAnswer: 2
  },
  {
    id: 138,
    question: "What is the deepest skin layer listed below?",
    options: ["Skin", "Muscle", "Subcutaneous fat", "Fascia"],
    correctAnswer: 2
  },
  {
    id: 139,
    question: "What is cicatrix?",
    options: ["Scar tissue", "Dead tissue", "Healthy skin", "Tumor"],
    correctAnswer: 0
  },
  {
    id: 140,
    question: "What hormone controls the amount of calcium in the blood?",
    options: ["Thyroid hormone", "Insulin", "Parathyroid hormone", "Calcitonin"],
    correctAnswer: 2
  },
  {
    id: 141,
    question: "Which condition is caused by lower than normal calcium levels in the blood?",
    options: ["Hypercalcemia", "Hypocalcemia", "Hyperthyroidism", "Hashimoto's disease"],
    correctAnswer: 1
  },
  {
    id: 142,
    question: "Which of the following is a complication that can cause respiratory problems after thyroid surgery?",
    options: ["Tetany", "Thyroid storm", "Laryngeal spasms", "Hypocalcemia"],
    correctAnswer: 2
  },
  {
    id: 143,
    question: "Hashimoto's disease is associated with:",
    options: ["Hyperthyroidism", "Hypothyroidism", "Hypercalcemia", "Diabetes"],
    correctAnswer: 1
  },
  {
    id: 144,
    question: "During thyroid surgery, what nerve must be preserved to prevent hoarseness or breathing difficulty?",
    options: ["Vagus nerve", "Hypoglossal nerve", "Recurrent laryngeal nerve", "Phrenic nerve"],
    correctAnswer: 2
  },
  {
    id: 145,
    question: "A thyroid storm is best described as:",
    options: ["Acute hypothyroid crisis", "Acute hyperthyroid crisis", "Hypercalcemic crisis", "Severe hypothermia"],
    correctAnswer: 1
  },
  {
    id: 146,
    question: "What is the correct position for a thyroidectomy?",
    options: ["Prone", "Lateral", "Supine with neck hyperextended", "Fowler's"],
    correctAnswer: 2
  },
  {
    id: 147,
    question: "What type of incision is used for a thyroidectomy?",
    options: ["Median", "Transverse/collar", "Vertical", "Oblique"],
    correctAnswer: 1
  },
  {
    id: 148,
    question: "Damage to the recurrent laryngeal nerve on both sides can result in:",
    options: ["Hoarseness", "Complete loss of smell", "Difficulty speaking and breathing", "Blindness"],
    correctAnswer: 2
  },
  {
    id: 149,
    question: "The classical radical neck dissection involves removal of which of the following?",
    options: ["Thyroid gland", "Parathyroid gland", "Sternocleidomastoid muscle", "Cricoid cartilage"],
    correctAnswer: 2
  },
  {
    id: 150,
    question: "What is the most superficial layer of the skin?",
    options: ["Dermis", "Epidermis", "Fascia", "Subcutaneous fat"],
    correctAnswer: 1
  },
  {
    id: 151,
    question: "Langer's lines are important because:",
    options: ["They mark nerve pathways", "Incisions made along them heal better cosmetically", "They identify arteries", "They prevent infection"],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "A hypertrophic scar is best described as:",
    options: ["Normal scar tissue", "A raised, reddish, nodular scar", "A slightly raised but less pronounced scar", "A sunken scar"],
    correctAnswer: 2
  },
  {
    id: 153,
    question: "The \"rule of nines\" is used to:",
    options: ["Calculate electrolyte replacement", "Estimate burn surface area in adults", "Measure BMI", "Diagnose thyroid storm"],
    correctAnswer: 1
  },
  {
    id: 154,
    question: "A third-degree burn is described as:",
    options: ["Superficial redness only", "Blistered and moist", "Full thickness, dry, white or charred", "Partial thickness, moist"],
    correctAnswer: 2
  },
  {
    id: 155,
    question: "Which dressing type applies even pressure and prevents edema?",
    options: ["Wet-to-dry", "Pressure", "One-layer", "Occlusive"],
    correctAnswer: 1
  },
  {
    id: 156,
    question: "What is the purpose of a stent dressing?",
    options: ["Immobilize the wound", "Eliminate dead space", "Hold a skin graft in place", "Protect against burns"],
    correctAnswer: 2
  },
  {
    id: 157,
    question: "A split-thickness skin graft includes:",
    options: ["Epidermis only", "Epidermis and full dermis", "Epidermis and part of dermis", "Dermis only"],
    correctAnswer: 2
  },
  {
    id: 158,
    question: "Which type of graft is from a donor of a different species?",
    options: ["Autograft", "Allograft", "Heterograft", "Pedicle flap"],
    correctAnswer: 2
  },
  {
    id: 159,
    question: "What instrument is used to cut thin slices of skin for grafting?",
    options: ["Ferris-Smith", "Dermatome", "Tenotomy scissors", "Skin hook"],
    correctAnswer: 1
  },
  {
    id: 160,
    question: "A TRAM flap uses which muscle?",
    options: ["Sternocleidomastoid", "Rectus abdominis", "Platysma", "Brachialis"],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "The blood supply for a TRAM flap comes from the:",
    options: ["Superior epigastric artery and vein", "Femoral artery", "Radial artery", "Inferior vena cava"],
    correctAnswer: 0
  },
  {
    id: 162,
    question: "Which is NOT a placement option for breast implants?",
    options: ["Subglandular", "Subfascial", "Submuscular", "Subperiosteal"],
    correctAnswer: 3
  },
  {
    id: 163,
    question: "Which incision is used for augmentation mammoplasty?",
    options: ["Transumbilical", "Transoral", "Posterior", "Midline"],
    correctAnswer: 0
  },
  {
    id: 164,
    question: "What does a capsulotomy treat?",
    options: ["Tumor", "Scar tissue around breast implant", "Infected gland", "Carcinoma"],
    correctAnswer: 1
  },
  {
    id: 165,
    question: "What is the purpose of a mentoplasty?",
    options: ["Reshape ears", "Reshape chin", "Reshape nose", "Reshape eyelids"],
    correctAnswer: 1
  },
  {
    id: 166,
    question: "A rhytidectomy is another term for:",
    options: ["Facelift", "Nose job", "Brow lift", "Liposuction"],
    correctAnswer: 0
  },
  {
    id: 167,
    question: "Dermatochalasis refers to:",
    options: ["Sagging of the eyelids", "Thickening of the skin", "Drooping of the mouth", "Overactive sebaceous glands"],
    correctAnswer: 0
  },
  {
    id: 168,
    question: "Which laser is most commonly used for skin resurfacing?",
    options: ["Argon", "CO₂", "Nd:YAG", "Excimer"],
    correctAnswer: 1
  },
  {
    id: 169,
    question: "Liposuction removes fat through:",
    options: ["Curettage", "High-pressure vacuum", "Laser ablation", "Radiofrequency ablation"],
    correctAnswer: 1
  },
  {
    id: 170,
    question: "Which gland secretes mucous to aid ejaculation?",
    options: ["Prostate", "Cowper's", "Seminal vesicle", "Adrenal"],
    correctAnswer: 1
  },
  {
    id: 171,
    question: "The glomerulus is located in:",
    options: ["Medulla of kidney", "Cortex of kidney", "Bladder", "Ureter"],
    correctAnswer: 1
  },
  {
    id: 172,
    question: "The functional unit of the kidney is the:",
    options: ["Glomerulus", "Loop of Henle", "Nephron", "Bowman's capsule"],
    correctAnswer: 2
  },
  {
    id: 173,
    question: "The trigone of the bladder includes:",
    options: ["Two ureter openings and one urethral opening", "Only ureter openings", "Only urethral opening", "None of the above"],
    correctAnswer: 0
  },
  {
    id: 174,
    question: "Which hormone is secreted by the adrenal medulla?",
    options: ["Aldosterone", "Cortisol", "Epinephrine", "ACTH"],
    correctAnswer: 2
  },
  {
    id: 175,
    question: "Which hormone stimulates the adrenal cortex?",
    options: ["ACTH", "TSH", "FSH", "LH"],
    correctAnswer: 0
  },
  {
    id: 176,
    question: "Where is the prostate gland located?",
    options: ["Surrounds ureters", "At the base of the bladder neck around urethra", "In the scrotum", "On the penis shaft"],
    correctAnswer: 1
  },
  {
    id: 177,
    question: "BPH is best described as:",
    options: ["Malignant tumor", "Noncancerous overgrowth of prostate", "Cyst in the prostate", "Blockage in the ureters"],
    correctAnswer: 1
  },
  {
    id: 178,
    question: "What is the purpose of irrigation fluids during GU procedures?",
    options: ["Cool tissues", "Prevent infection", "Distend bladder and prevent hypothermia", "Anesthetize the bladder"],
    correctAnswer: 2
  },
  {
    id: 179,
    question: "What is a common solution for TURP procedures?",
    options: ["Saline", "Glycine", "Dextrose", "Ringer's lactate"],
    correctAnswer: 1
  },
  {
    id: 180,
    question: "Which catheter is designed to bypass an obstruction?",
    options: ["Foley", "Red Robinson", "Stent", "Coude"],
    correctAnswer: 2
  },
  {
    id: 181,
    question: "Which catheter is used to measure urine output with a drainage bag?",
    options: ["Foley", "Plain", "Red Robinson", "Cone tip"],
    correctAnswer: 0
  },
  {
    id: 182,
    question: "Which of the following is a ureteral catheter tip?",
    options: ["Whistle", "Robinson", "Foley", "Straight"],
    correctAnswer: 0
  },
  {
    id: 183,
    question: "Indwelling urethral stents include:",
    options: ["Robinson and Coude", "Double J and double pigtail", "Foley and Garceau", "Olive and cone"],
    correctAnswer: 1
  },
  {
    id: 184,
    question: "What is the correct amount of water to fill a 5-cc Foley balloon?",
    options: ["2–3 cc", "5 cc", "8–10 cc", "15 cc"],
    correctAnswer: 1
  },
  {
    id: 185,
    question: "The recurrent laryngeal nerve is a branch of which cranial nerve?",
    options: ["VII", "X", "IX", "XI"],
    correctAnswer: 1
  },
  {
    id: 186,
    question: "What muscle is incised during a thyroidectomy?",
    options: ["Platysma", "Masseter", "Digastric", "Buccinator"],
    correctAnswer: 0
  },
  {
    id: 187,
    question: "What dressing provides an airtight seal and prevents drying?",
    options: ["Wet-to-dry", "Nonocclusive", "Occlusive", "Semiclusive"],
    correctAnswer: 2
  },
  {
    id: 188,
    question: "What is the purpose of moist peanuts in thyroid surgery?",
    options: ["Grasp thyroid", "Retract muscles", "Blunt dissection", "Suture trachea"],
    correctAnswer: 2
  },
  {
    id: 189,
    question: "What is the proper position for neck dissection?",
    options: ["Supine", "Lateral", "Prone", "Sitting"],
    correctAnswer: 0
  },
  {
    id: 190,
    question: "What incision is used for a neck dissection?",
    options: ["Collar", "Trifurcate", "Midline", "Oblique"],
    correctAnswer: 1
  },
  {
    id: 191,
    question: "What instrument is specifically used in blepharoplasty?",
    options: ["Frazier suction", "Iris scissors", "Adson forceps", "Blepharoplasty calipers"],
    correctAnswer: 3
  },
  {
    id: 192,
    question: "Which type of burn damages muscles and nerves?",
    options: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 3
  },
  {
    id: 193,
    question: "What is the purpose of a Doppler in breast reconstruction?",
    options: ["Measure implant volume", "Preserve artery", "Position flap", "Identify nerve"],
    correctAnswer: 1
  },
  {
    id: 194,
    question: "What laser is used for tattoo removal?",
    options: ["Argon", "CO₂", "Q-switched", "Excimer"],
    correctAnswer: 2
  },
  {
    id: 195,
    question: "What procedure is also called a nose job?",
    options: ["Rhinoplasty", "Rhytidectomy", "Mentoplasty", "Otoplasty"],
    correctAnswer: 0
  },
  {
    id: 196,
    question: "The scrotum contains:",
    options: ["Prostate and urethra", "Testes, epididymis, and spermatic cord", "Vas deferens and glans penis", "Bladder and prostate"],
    correctAnswer: 1
  },
  {
    id: 197,
    question: "Which tissue fills with blood during erection?",
    options: ["Corpus luteum", "Corpus callosum", "Corpus spongiosum and cavernosum", "Corpus albicans"],
    correctAnswer: 2
  },
  {
    id: 198,
    question: "Which part of the nephron reabsorbs sodium and water?",
    options: ["Bowman's capsule", "Loop of Henle", "Glomerulus", "Renal pelvis"],
    correctAnswer: 1
  },
  {
    id: 199,
    question: "Which scan is an x-ray with contrast of the entire urological system?",
    options: ["KUB", "IVU", "MRI", "CT scan"],
    correctAnswer: 1
  },
  {
    id: 200,
    question: "What is the name of the erectile tissue surrounding the urethra?",
    options: ["Corpus spongiosum", "Corpus cavernosum", "Glans penis", "Urethral meatus"],
    correctAnswer: 0
  },
  {
    id: 201,
    question: "Which bone is also known as the malar bone?",
    options: ["Maxilla", "Zygomatic", "Mandible", "Frontal"],
    correctAnswer: 1
  },
  {
    id: 202,
    question: "The Le Fort I fracture is also called a:",
    options: ["Mustache fracture", "Blowout fracture", "Craniofacial fracture", "Pyramid maxillary fracture"],
    correctAnswer: 0
  },
  {
    id: 203,
    question: "Arch bars are primarily used to realign the:",
    options: ["Zygomatic bone", "Mandible and maxilla", "Orbital floor", "Nasal septum"],
    correctAnswer: 1
  },
  {
    id: 204,
    question: "The orbital floor fracture is also known as:",
    options: ["Le Fort I", "Le Fort III", "Blowout fracture", "Mustache fracture"],
    correctAnswer: 2
  },
  {
    id: 205,
    question: "The surgeon protects the cornea during orbital floor surgery with:",
    options: ["Plastic sheeting", "Corneal eye protectors", "Cotton pledgets", "Silicone shields"],
    correctAnswer: 1
  },
  {
    id: 206,
    question: "In a Le Fort II fracture, the neurosurgeon must be present because of possible damage to the:",
    options: ["Orbital floor", "Nasal bone", "Brain tissue and CSF leakage", "Maxilla"],
    correctAnswer: 2
  },
  {
    id: 207,
    question: "The malocclusion that results from misalignment of the jaws can be corrected with:",
    options: ["MMA", "MMF", "Arch bars", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 208,
    question: "Temporomandibular joint (TMJ) surgery is indicated for all of the following except:",
    options: ["Muscle tension", "Malocclusion", "Trauma", "Sleep apnea"],
    correctAnswer: 3
  },
  {
    id: 209,
    question: "The snail-shaped structure of the inner ear that contains the organ of Corti is the:",
    options: ["Vestibule", "Cochlea", "Semicircular canal", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 210,
    question: "The ossicles include all of the following except:",
    options: ["Malleus", "Incus", "Cochlea", "Stapes"],
    correctAnswer: 2
  },
  {
    id: 211,
    question: "The external ear terminates at the:",
    options: ["Tympanic membrane", "Eustachian tube", "Auricle", "Middle ear"],
    correctAnswer: 0
  },
  {
    id: 212,
    question: "The nasal cavity is connected to the ear by the:",
    options: ["Cochlea", "Vestibule", "Eustachian tube", "Tympanic membrane"],
    correctAnswer: 2
  },
  {
    id: 213,
    question: "Choanal atresia repair may involve the use of a:",
    options: ["Microdebrider", "Stensen's duct probe", "Tuning fork", "Arch bar"],
    correctAnswer: 0
  },
  {
    id: 214,
    question: "The paranasal sinuses located behind the lower forehead are the:",
    options: ["Maxillary", "Ethmoid", "Frontal", "Sphenoid"],
    correctAnswer: 2
  },
  {
    id: 215,
    question: "The surgical opening into the maxillary sinus to treat chronic sinusitis is called an:",
    options: ["Antrostomy", "Polypectomy", "Mastoidectomy", "Tympanoplasty"],
    correctAnswer: 0
  },
  {
    id: 216,
    question: "During a parotidectomy, care must be taken to preserve the:",
    options: ["Seventh cranial nerve", "Fifth cranial nerve", "Eighth cranial nerve", "Tenth cranial nerve"],
    correctAnswer: 0
  },
  {
    id: 217,
    question: "The largest of the salivary glands is the:",
    options: ["Sublingual", "Submandibular", "Parotid", "Adenoid"],
    correctAnswer: 2
  },
  {
    id: 218,
    question: "The larynx has all of the following functions except:",
    options: ["Passageway for respiration", "Prevents aspiration", "Houses the pituitary gland", "Source of vocalization"],
    correctAnswer: 2
  },
  {
    id: 219,
    question: "Which cartilage is also called the Adam's apple?",
    options: ["Cricoid", "Arytenoid", "Thyroid", "Epiglottis"],
    correctAnswer: 2
  },
  {
    id: 220,
    question: "Laryngectomy is performed to treat:",
    options: ["Sinusitis", "TMJ disorder", "Laryngeal cancer", "Sleep apnea"],
    correctAnswer: 2
  },
  {
    id: 221,
    question: "A permanent opening in the neck after a total laryngectomy is called a:",
    options: ["Tracheostomy", "Fistula", "Stoma", "Anastomosis"],
    correctAnswer: 2
  },
  {
    id: 222,
    question: "The purpose of wet gauze during laser laryngeal surgery is to:",
    options: ["Clean the field", "Prevent a fire", "Keep the tissues moist", "Absorb bleeding"],
    correctAnswer: 1
  },
  {
    id: 223,
    question: "The trachea is composed of:",
    options: ["Solid bone rings", "Incomplete c-shaped cartilage rings", "Muscle only", "Connective tissue only"],
    correctAnswer: 1
  },
  {
    id: 224,
    question: "A tracheostomy is indicated for all of the following except:",
    options: ["Chronic lung disease", "Sleep apnea", "Vocal cord paralysis", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 225,
    question: "The cranial nerve that supplies motor innervation to the pharynx and larynx is the:",
    options: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 3
  }
];
