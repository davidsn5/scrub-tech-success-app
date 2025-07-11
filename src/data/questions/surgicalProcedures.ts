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
  },
  {
    id: 36,
    question: "Which procedure is performed to repair carcinoma of the vulva?",
    choices: ["LEEP", "Vulvectomy", "Episiotomy", "Uterine ablation"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "Radical vulvectomy involves removal of which additional structures if nodes are positive?",
    choices: ["Vagina, urethra, anus", "Uterus, fallopian tubes, ovaries", "Cervix, vagina, bladder", "Bladder, rectum, perineum"],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "Vaginectomy and vaginoplasty are indicated for which condition?",
    choices: ["Pelvic inflammatory disease", "Vaginal cancer", "Endometriosis", "Stress incontinence"],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "An amnion graft comes from what source?",
    choices: ["Placenta", "Umbilical cord", "Fetal membrane", "Maternal uterine lining"],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "Cystocele is defined as a herniation of which structure into the vaginal wall?",
    choices: ["Rectum", "Bladder", "Uterus", "Small intestine"],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "Marshall-Marchetti-Krantz procedure is done to correct:",
    choices: ["Rectocele", "Urinary incontinence", "Vaginal atresia", "Vesicovaginal fistula"],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "An enterocele involves herniation of which organ?",
    choices: ["Rectum", "Bladder", "Small intestine", "Uterus"],
    correctAnswer: 2
  },
  {
    id: 43,
    question: "A vesicovaginal fistula is a connection between:",
    choices: ["Rectum and vagina", "Ureter and vagina", "Bladder and vagina", "Urethra and vagina"],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "Which procedure extends the perineal area during delivery?",
    choices: ["Uterine ablation", "Episiotomy", "Vaginal hysterectomy", "Cesarean section"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "Endometrial ablation destroys what to treat abnormal bleeding?",
    choices: ["Myometrium", "Endometrium", "Cervix", "Uterine artery"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "LAVH refers to:",
    choices: ["Laparoscopic-assisted vaginal hysterectomy", "Laparoscopic anterior vaginal hernia", "Laparoscopic vaginal atresia", "Laparoscopic vulvectomy"],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "TAH BSO involves removal of all except:",
    choices: ["Uterus", "Fallopian tubes", "Ovaries", "Rectum"],
    correctAnswer: 3
  },
  {
    id: 48,
    question: "The term \"en bloc\" means:",
    choices: ["Piece-by-piece removal", "Single-unit removal", "Microsurgical excision", "Partial resection"],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "What does \"seeding\" refer to during cancer surgery?",
    choices: ["Hemorrhage", "Accidental cancer cell spread", "Retained surgical sponge", "Inadvertent nerve injury"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Which procedure removes all reproductive organs, bladder, rectum, and perineum?",
    choices: ["TAH BSO", "Radical hysterectomy", "Pelvic exenteration", "Vaginal hysterectomy"],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "Oophorectomy removes:",
    choices: ["Uterus", "Ovary", "Fallopian tube", "Cervix"],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "Dermoid cyst is also called:",
    choices: ["Fibroid", "Teratoma", "Leiomyoma", "Hematoma"],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "Salpingo-oophorectomy removes:",
    choices: ["Uterus and cervix", "Ovary and uterus", "Fallopian tube and ovary", "Bladder and urethra"],
    correctAnswer: 2
  },
  {
    id: 54,
    question: "Cervical cerclage prevents:",
    choices: ["Placental abruption", "Preterm labor", "Preeclampsia", "Endometrial cancer"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "Shirodkar/McDonald are types of:",
    choices: ["Hysterectomies", "Cerclage", "Episiotomies", "Abortions"],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "A complete abortion means:",
    choices: ["Pregnancy continues", "Uterus is completely emptied", "Uterus is perforated", "Fetus is viable"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "What is meconium?",
    choices: ["Amniotic sac", "First fetal bowel movement", "Vernix", "Placenta"],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "The term \"gravida\" refers to:",
    choices: ["Number of births", "Number of pregnancies", "First pregnancy", "Uterine contractions"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "Oxytocin/Pitocin is used to:",
    choices: ["Prevent bleeding only", "Induce labor and contract uterus", "Treat hypertension", "Reverse anesthesia"],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "What is the most common reason for C-section?",
    choices: ["Placenta previa", "Cephalopelvic disproportion", "Breech", "Cord prolapse"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "Which drape is used in OB/GYN procedures?",
    choices: ["Fenestrated abdominal", "Eye sheet", "Laparotomy sheet", "Neurosurgical sheet"],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "Cornea is the:",
    choices: ["White part of the eye", "Transparent window of the eye", "Retina layer", "Iris muscle"],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "Miotic drugs do what?",
    choices: ["Dilate pupil", "Constrict pupil", "Relax muscles", "Numb cornea"],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "Which of the following is a mydriatic?",
    choices: ["Pilocarpine", "Miochol", "Neo-Synephrine", "Miostat"],
    correctAnswer: 2
  },
  {
    id: 65,
    question: "What is removed in enucleation?",
    choices: ["Cornea", "Lens", "Globe with muscles and optic nerve", "Retina only"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "Dacryocystorhinostomy treats:",
    choices: ["Cataract", "Blocked nasolacrimal duct", "Retinal detachment", "Corneal ulcer"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "Strabismus means:",
    choices: ["Eyes focused properly", "Drooping eyelid", "Misaligned eyes", "Blindness"],
    correctAnswer: 2
  },
  {
    id: 68,
    question: "Which surgery reshapes the cornea with a laser?",
    choices: ["Keratoplasty", "LASIK", "Blepharoplasty", "Vitrectomy"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "Which laser passes through clear tissue without heating?",
    choices: ["CO₂", "Argon/Nd:YAG", "Excimer", "Helium"],
    correctAnswer: 2
  },
  {
    id: 70,
    question: "Le Fort I fracture is also called:",
    choices: ["Blowout fracture", "Mustache fracture", "Orbital fracture", "Zygomatic fracture"],
    correctAnswer: 1
  },
  {
    id: 71,
    question: "Arch bars are used for:",
    choices: ["Orbital floor repair", "Maxillomandibular fixation", "Zygomatic plating", "Mandibular resection"],
    correctAnswer: 1
  },
  {
    id: 72,
    question: "Orbital floor fracture is repaired with all except:",
    choices: ["Silastic sheet", "Nylon", "Metal implants", "T-tube"],
    correctAnswer: 3
  },
  {
    id: 73,
    question: "TMJ surgery is done to improve:",
    choices: ["Swallowing", "Hearing", "Joint mobility", "Vision"],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "The cochlea contains:",
    choices: ["Eustachian tube", "Ossicles", "Organ of Corti", "Cerumen"],
    correctAnswer: 2
  },
  {
    id: 75,
    question: "The auricle is part of the:",
    choices: ["Middle ear", "Inner ear", "External ear", "Eustachian tube"],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "What does cerumen refer to?",
    choices: ["Eardrum", "Earwax", "Hearing aid", "Semicircular canal"],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "Which sinus is above the ethmoid sinus?",
    choices: ["Frontal", "Maxillary", "Sphenoid", "Antrum"],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "Choanal atresia repair requires what scope?",
    choices: ["10-degree", "30-degree", "90-degree", "None"],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "Parotidectomy requires caution to avoid injury to:",
    choices: ["Trigeminal nerve", "Optic nerve", "Facial nerve", "Vestibulocochlear nerve"],
    correctAnswer: 2
  },
  {
    id: 80,
    question: "Wharton's duct belongs to which gland?",
    choices: ["Parotid", "Submandibular", "Sublingual", "Lacrimal"],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "What is the Adam's apple?",
    choices: ["Cricoid", "Epiglottis", "Thyroid cartilage", "Arytenoid"],
    correctAnswer: 2
  },
  {
    id: 82,
    question: "What is laryngitis?",
    choices: ["Malignant tumor", "Inflammation of vocal cords", "Swelling of epiglottis", "Blockage of airway"],
    correctAnswer: 1
  },
  {
    id: 83,
    question: "A stoma is created during:",
    choices: ["Laser laryngeal surgery", "Total laryngectomy", "Bronchoscopy", "Tracheoscopy"],
    correctAnswer: 1
  },
  {
    id: 84,
    question: "Which laser is NOT used on the larynx?",
    choices: ["CO₂", "Helium", "Argon", "Nitrogen"],
    correctAnswer: 3
  },
  {
    id: 85,
    question: "What are tracheal rings made of?",
    choices: ["Fibrous cartilage", "Hyaline cartilage", "Elastic cartilage", "Bone"],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "Tracheostomy is performed through an incision below the:",
    choices: ["Thyroid cartilage", "Cricoid cartilage", "Arytenoid cartilage", "Epiglottis"],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "Rigid bronchoscopy is performed with the patient in what position?",
    choices: ["Sitting", "Prone", "Supine", "Lateral"],
    correctAnswer: 2
  },
  {
    id: 88,
    question: "What is the primary purpose of a tonsillectomy and adenoidectomy?",
    choices: ["Remove fluid from the middle ear", "Remove enlarged infected lymphoid tissue", "Correct nasal fractures", "Drain sinus cavities"],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "Which type of tonsils are also known as adenoids?",
    choices: ["Palatine tonsils", "Pharyngeal tonsils", "Lingual tonsils", "Cervical tonsils"],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "Which instrument is used to grasp the tonsils during a tonsillectomy?",
    choices: ["Allis clamp", "Adson forceps", "Bayonet forceps", "Yankauer suction"],
    correctAnswer: 0
  },
  {
    id: 91,
    question: "What does the COBLATOR instrument use to remove tissue?",
    choices: ["Laser energy", "Ultrasonic waves", "Radiofrequency energy with saline", "Cryotherapy"],
    correctAnswer: 2
  },
  {
    id: 92,
    question: "Which patient position is appropriate after a tonsillectomy and adenoidectomy?",
    choices: ["Trendelenburg", "Prone", "Supine with neck extended", "Lateral with head elevated"],
    correctAnswer: 3
  },
  {
    id: 93,
    question: "Which cranial nerve controls facial muscles?",
    choices: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "Which of the following is an abnormal fluid accumulation in the middle ear?",
    choices: ["Mastoiditis", "Effusion", "Cholesteatoma", "Tinnitus"],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "What are the small hollow tubes placed in the tympanic membrane during a myringotomy called?",
    choices: ["Adenoids", "Grafts", "Tympanostomy tubes", "Splints"],
    correctAnswer: 2
  },
  {
    id: 96,
    question: "What is the primary purpose of a mastoidectomy?",
    choices: ["Treat otosclerosis", "Remove infected mastoid bone", "Place ear tubes", "Repair tympanic membrane"],
    correctAnswer: 1
  },
  {
    id: 97,
    question: "Otosclerosis affects which ossicle?",
    choices: ["Malleus", "Incus", "Stapes", "Cochlea"],
    correctAnswer: 2
  },
  {
    id: 98,
    question: "Which disease is associated with dizziness and tinnitus?",
    choices: ["Bell's palsy", "Meniere's disease", "Cholesteatoma", "Otitis media"],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "Which procedure is performed for congenital or acquired deafness?",
    choices: ["Stapedectomy", "Cochlear implant", "Tympanoplasty", "Mastoidectomy"],
    correctAnswer: 1
  },
  {
    id: 100,
    question: "What is the proper treatment for Bell's palsy?",
    choices: ["Cochlear implant", "Facial nerve decompression", "Tympanoplasty", "Labyrinthectomy"],
    correctAnswer: 1
  },
  {
    id: 101,
    question: "Which nerve is associated with trigeminal neuralgia?",
    choices: ["Vagus", "Facial", "Trigeminal", "Vestibulocochlear"],
    correctAnswer: 2
  },
  {
    id: 102,
    question: "What is a submucous resection (SMR) performed for?",
    choices: ["Repair tympanic membrane", "Correct deviated nasal septum", "Remove nasal polyps", "Treat sinus infection"],
    correctAnswer: 1
  },
  {
    id: 103,
    question: "What is the purpose of a moustache dressing?",
    choices: ["Close nasal septum", "Stabilize fractured nose", "Collect drainage under the nose", "Improve nasal airflow"],
    correctAnswer: 2
  },
  {
    id: 104,
    question: "What is the primary treatment for epistaxis?",
    choices: ["Cauterization", "Direct pressure", "Artery ligation", "Packing"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "What is the most common scope angle used in FESS?",
    choices: ["0°", "30°", "70°", "90°"],
    correctAnswer: 1
  },
  {
    id: 106,
    question: "What is a Caldwell–Luc procedure performed for?",
    choices: ["Repair thyroid", "Drain maxillary sinus", "Remove nasal polyps", "Close tracheostomy"],
    correctAnswer: 1
  },
  {
    id: 107,
    question: "Which hormone does the thyroid gland produce?",
    choices: ["TSH", "T4 and T3", "PTH", "ACTH"],
    correctAnswer: 1
  },
  {
    id: 108,
    question: "What is a hot thyroid nodule?",
    choices: ["Hypofunctional", "Malignant", "Overactive and dark on scan", "Nonfunctional"],
    correctAnswer: 2
  },
  {
    id: 109,
    question: "Which disease is the most common cause of hyperthyroidism?",
    choices: ["Hashimoto's", "Graves'", "Goiter", "Hypocalcemia"],
    correctAnswer: 1
  },
  {
    id: 110,
    question: "Which disease is an autoimmune cause of hypothyroidism?",
    choices: ["Hashimoto's", "Graves'", "Goiter", "Hypocalcemia"],
    correctAnswer: 0
  },
  {
    id: 111,
    question: "Which bone is also known as the malar bone?",
    choices: ["Maxilla", "Zygomatic", "Mandible", "Frontal"],
    correctAnswer: 1
  },
  {
    id: 112,
    question: "The Le Fort I fracture is also called a:",
    choices: ["Mustache fracture", "Blowout fracture", "Craniofacial fracture", "Pyramid maxillary fracture"],
    correctAnswer: 0
  },
  {
    id: 113,
    question: "Arch bars are primarily used to realign the:",
    choices: ["Zygomatic bone", "Mandible and maxilla", "Orbital floor", "Nasal septum"],
    correctAnswer: 1
  },
  {
    id: 114,
    question: "The orbital floor fracture is also known as:",
    choices: ["Le Fort I", "Le Fort III", "Blowout fracture", "Mustache fracture"],
    correctAnswer: 2
  },
  {
    id: 115,
    question: "The surgeon protects the cornea during orbital floor surgery with:",
    choices: ["Plastic sheeting", "Corneal eye protectors", "Cotton pledgets", "Silicone shields"],
    correctAnswer: 1
  },
  {
    id: 116,
    question: "In a Le Fort II fracture, the neurosurgeon must be present because of possible damage to the:",
    choices: ["Orbital floor", "Nasal bone", "Brain tissue and CSF leakage", "Maxilla"],
    correctAnswer: 2
  },
  {
    id: 117,
    question: "The malocclusion that results from misalignment of the jaws can be corrected with:",
    choices: ["MMA", "MMF", "Arch bars", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 118,
    question: "Temporomandibular joint (TMJ) surgery is indicated for all of the following except:",
    choices: ["Muscle tension", "Malocclusion", "Trauma", "Sleep apnea"],
    correctAnswer: 3
  },
  {
    id: 119,
    question: "The snail-shaped structure of the inner ear that contains the organ of Corti is the:",
    choices: ["Vestibule", "Cochlea", "Semicircular canal", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 120,
    question: "The ossicles include all of the following except:",
    choices: ["Malleus", "Incus", "Cochlea", "Stapes"],
    correctAnswer: 2
  },
  {
    id: 121,
    question: "What hormone controls the amount of calcium in the blood?",
    choices: ["Thyroid hormone", "Insulin", "Parathyroid hormone", "Calcitonin"],
    correctAnswer: 2
  },
  {
    id: 122,
    question: "Which condition is caused by lower than normal calcium levels in the blood?",
    choices: ["Hypercalcemia", "Hypocalcemia", "Hyperthyroidism", "Hashimoto's disease"],
    correctAnswer: 1
  },
  {
    id: 123,
    question: "Which of the following is a complication that can cause respiratory problems after thyroid surgery?",
    choices: ["Tetany", "Thyroid storm", "Laryngeal spasms", "Hypocalcemia"],
    correctAnswer: 2
  },
  {
    id: 124,
    question: "Hashimoto's disease is associated with:",
    choices: ["Hyperthyroidism", "Hypothyroidism", "Hypercalcemia", "Diabetes"],
    correctAnswer: 1
  },
  {
    id: 125,
    question: "During thyroid surgery, what nerve must be preserved to prevent hoarseness or breathing difficulty?",
    choices: ["Vagus nerve", "Hypoglossal nerve", "Recurrent laryngeal nerve", "Phrenic nerve"],
    correctAnswer: 2
  },
  {
    id: 126,
    question: "What is the primary purpose of the balloon in a Foley catheter?",
    choices: ["To prevent urine leakage", "To secure the catheter in the bladder", "To drain the bladder faster", "To irrigate the bladder"],
    correctAnswer: 1
  },
  {
    id: 127,
    question: "Which catheter is specifically designed with three ports for irrigation?",
    choices: ["Two-way Foley", "Three-way Foley", "Pezzer", "Malecot"],
    correctAnswer: 1
  },
  {
    id: 128,
    question: "Which of the following catheters is typically placed suprapubically?",
    choices: ["Foley", "Pezzer", "Malecot", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 129,
    question: "The Pezzer catheter stays in place by:",
    choices: ["Inflatable balloon", "Suction tip", "Mushroom tip", "Irrigation port"],
    correctAnswer: 2
  },
  {
    id: 130,
    question: "What is the Foley Goalie designed to prevent?",
    choices: ["Infection at the catheter site", "The catheter from being pulled out", "Balloon rupture", "Urinary retention"],
    correctAnswer: 1
  },
  {
    id: 131,
    question: "Nephrostomy tubes are placed to:",
    choices: ["Drain urine from the bladder", "Remove kidney stones", "Drain urine from the kidney", "Monitor urine output"],
    correctAnswer: 2
  },
  {
    id: 132,
    question: "Interventional radiology procedures often involve:",
    choices: ["Open surgery", "Catheters and contrast media", "Only diagnostic imaging", "Removal of tumors"],
    correctAnswer: 1
  },
  {
    id: 133,
    question: "Cystoscopy is indicated in all of the following EXCEPT:",
    choices: ["Hematuria", "Urinary retention", "Fractured pelvis", "UTI"],
    correctAnswer: 2
  },
  {
    id: 134,
    question: "Which table allows x-rays and fluoroscopy during urologic procedures?",
    choices: ["Lithotomy table", "Operating room table", "Cysto table", "Trendelenburg table"],
    correctAnswer: 2
  },
  {
    id: 135,
    question: "The most commonly used stirrups in cysto procedures are:",
    choices: ["Candy cane", "Allen and yellowfin", "Lithotomy and knee crutch", "Boot-type"],
    correctAnswer: 1
  },
  {
    id: 136,
    question: "The disinfectant known as Cidex is:",
    choices: ["Ethanol", "Glutaraldehyde", "Betadine", "Chlorhexidine"],
    correctAnswer: 1
  },
  {
    id: 137,
    question: "What is the shelf life of activated Cidex?",
    choices: ["7 days", "10 days", "14 days", "30 days"],
    correctAnswer: 2
  },
  {
    id: 138,
    question: "Laser ablation of condylomata is preferred over ESU because:",
    choices: ["Lasers are faster", "Lasers distribute heat more evenly", "Lasers do not cause smoke", "Lasers are less expensive"],
    correctAnswer: 1
  },
  {
    id: 139,
    question: "Which laser is known as the GREEN LIGHT laser?",
    choices: ["Nd:YAG", "KTP", "CO₂", "Argon"],
    correctAnswer: 1
  },
  {
    id: 140,
    question: "Circumcision is most commonly performed in males to treat:",
    choices: ["Erectile dysfunction", "Phimosis", "Peyronie's disease", "Penile carcinoma"],
    correctAnswer: 1
  },
  {
    id: 141,
    question: "Which of the following is NOT a cause of organic impotence?",
    choices: ["Diabetes", "Priapism", "Neurological problems", "Urinary incontinence"],
    correctAnswer: 3
  },
  {
    id: 142,
    question: "Vasectomy involves:",
    choices: ["Removal of the testicles", "Tying or cauterizing the vas deferens", "Cutting the epididymis", "Implanting a contraceptive device"],
    correctAnswer: 1
  },
  {
    id: 143,
    question: "A vasovasostomy is performed to:",
    choices: ["Treat hydrocele", "Reverse a vasectomy", "Perform a biopsy", "Excise varicocele"],
    correctAnswer: 1
  },
  {
    id: 144,
    question: "Which procedure removes fluid from a hydrocele?",
    choices: ["Varicocelectomy", "Spermatocelectomy", "Hydrocelectomy", "Epididymectomy"],
    correctAnswer: 2
  },
  {
    id: 145,
    question: "Varicocelectomy is performed to:",
    choices: ["Remove cysts", "Prevent rise in scrotal temperature", "Treat epididymitis", "Reverse a vasectomy"],
    correctAnswer: 1
  },
  {
    id: 146,
    question: "Which prostatectomy approach is through the urethra?",
    choices: ["Suprapubic", "Retropubic", "TURP", "Perineal"],
    correctAnswer: 2
  },
  {
    id: 147,
    question: "PSA stands for:",
    choices: ["Prostate-specific antigen", "Prostate-specific antibody", "Prostate-specific analysis", "Prostatic serum assay"],
    correctAnswer: 0
  },
  {
    id: 148,
    question: "What score is used to grade prostate cancer?",
    choices: ["APGAR", "Glasgow", "Gleason", "Bishop"],
    correctAnswer: 2
  },
  {
    id: 149,
    question: "In a TURP procedure, which instrument is used to evacuate prostatic chips?",
    choices: ["Resectoscope", "Ellik evacuator", "Cystoscope", "Foley catheter"],
    correctAnswer: 1
  },
  {
    id: 150,
    question: "What type of catheter is used at the end of a TURP?",
    choices: ["Two-way Foley", "Suprapubic Malecot", "Triple-lumen Foley", "Pezzer"],
    correctAnswer: 2
  },
  {
    id: 151,
    question: "Laser safety precautions include:",
    choices: ["Posting warning signs", "Wearing proper eyewear", "Suctioning plume", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 152,
    question: "Which approach in prostatectomy spares erectile function by preserving neurovascular bundles?",
    choices: ["Simple perineal", "Radical retropubic with pelvic lymphadenectomy", "Laparoscopic radical", "TURP"],
    correctAnswer: 1
  },
  {
    id: 153,
    question: "The robotic prostatectomy system consists of:",
    choices: ["Surgeon console, robotic arms, 3D imaging", "Robotic arms only", "Console and camera", "Robotic arms and lasers"],
    correctAnswer: 0
  },
  {
    id: 154,
    question: "Transrectal seed implantation is done for:",
    choices: ["BPH", "Localized prostate cancer", "Penile carcinoma", "Hydrocele"],
    correctAnswer: 1
  },
  {
    id: 155,
    question: "Which surgeon type is NOT typically involved in seed implantation?",
    choices: ["Radiation oncologist", "GU surgeon", "Neurosurgeon", "Medical physicist"],
    correctAnswer: 2
  },
  {
    id: 156,
    question: "The litholapaxy procedure is performed to:",
    choices: ["Remove bladder tumors", "Excise the prostate", "Crush and irrigate bladder stones", "Treat stress incontinence"],
    correctAnswer: 2
  },
  {
    id: 157,
    question: "Which position helps visualize abdominal organs in bladder surgery?",
    choices: ["Supine", "Lithotomy", "Trendelenburg", "Prone"],
    correctAnswer: 2
  },
  {
    id: 158,
    question: "A suprapubic cystostomy involves placing a catheter:",
    choices: ["Through the urethra", "Through a low abdominal incision", "Through the rectum", "Through the perineum"],
    correctAnswer: 1
  },
  {
    id: 159,
    question: "For bladder tumor resection, the preferred irrigating solution is:",
    choices: ["Sterile water", "Saline", "Dextrose", "Lactated Ringer's"],
    correctAnswer: 1
  },
  {
    id: 160,
    question: "The YAG laser is used to:",
    choices: ["Excise lymph nodes", "Destroy bladder tumors", "Implant seeds", "Tie vas deferens"],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "The Pereyra needle is used in:",
    choices: ["Stress incontinence repair", "Bladder tumor resection", "TURP", "Hydrocelectomy"],
    correctAnswer: 0
  },
  {
    id: 162,
    question: "A TVT sling is made of:",
    choices: ["Catgut suture", "Polypropylene mesh", "Silk suture", "Nylon mesh"],
    correctAnswer: 1
  },
  {
    id: 163,
    question: "The mesh in a TVT sling is positioned:",
    choices: ["Inside the bladder", "Under the urethra", "In the epididymis", "Along the vas deferens"],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Radical cystectomy involves removing:",
    choices: ["Bladder only", "Bladder and pelvic lymph nodes", "Bladder and urethra", "Bladder and kidneys"],
    correctAnswer: 1
  },
  {
    id: 165,
    question: "A vesicovaginal fistula connects the bladder to:",
    choices: ["Rectum", "Intestines", "Vagina", "Urethra"],
    correctAnswer: 2
  },
  {
    id: 166,
    question: "A vesicointestinal fistula connects the bladder to:",
    choices: ["Urethra", "Intestines", "Vagina", "Kidneys"],
    correctAnswer: 1
  },
  {
    id: 167,
    question: "Which of the following lasers is NOT commonly used in urology?",
    choices: ["CO₂", "Nd:YAG", "KTP", "Ruby"],
    correctAnswer: 3
  },
  {
    id: 168,
    question: "The resectoscope is used for:",
    choices: ["Removing stones", "Resecting bladder or prostate tissue", "Dilating urethra", "Suctioning clots"],
    correctAnswer: 1
  },
  {
    id: 169,
    question: "What is the main advantage of robotic prostatectomy?",
    choices: ["Less expensive", "No need for anesthesia", "Greater precision and 3D imaging", "Does not require a surgeon"],
    correctAnswer: 2
  },
  {
    id: 170,
    question: "What is the purpose of a smoke evacuator during laser procedures?",
    choices: ["Cool the tissue", "Prevent inhalation of carcinogenic plume", "Increase laser power", "Sterilize the field"],
    correctAnswer: 1
  },
  {
    id: 171,
    question: "What is the main purpose of the balloon on a Foley catheter?",
    choices: ["Drain urine", "Provide irrigation", "Hold the catheter in place", "Prevent infection"],
    correctAnswer: 2
  },
  {
    id: 172,
    question: "Which suprapubic catheter does not rely on a balloon to stay in place?",
    choices: ["Foley", "Pezzer", "Three-way Foley", "Foley Goalie"],
    correctAnswer: 1
  },
  {
    id: 173,
    question: "Nephrostomy tubes drain urine directly from the:",
    choices: ["Ureter", "Bladder", "Kidney", "Urethra"],
    correctAnswer: 2
  },
  {
    id: 174,
    question: "Interventional radiology procedures are often performed to:",
    choices: ["Remove stones surgically", "Introduce contrast media and stents", "Irrigate the bladder", "Perform prostatectomy"],
    correctAnswer: 1
  },
  {
    id: 175,
    question: "A cystoscopy may be indicated for all except:",
    choices: ["Urinary retention", "Hematuria", "UTI", "Nephrostomy"],
    correctAnswer: 3
  },
  {
    id: 176,
    question: "The most common stirrups used in cystoscopy are:",
    choices: ["Lithotomy and supine", "Allen and Yellofin", "Trendelenburg and Fowler", "Mayo and kidney rest"],
    correctAnswer: 1
  },
  {
    id: 177,
    question: "What disinfectant is preferred for high-level cleaning of cystoscopy equipment?",
    choices: ["Betadine", "Chlorhexidine", "Glutaraldehyde", "Alcohol"],
    correctAnswer: 2
  },
  {
    id: 178,
    question: "Which laser is commonly used for ablation of condylomata?",
    choices: ["YAG", "Argon", "Nd:YAG", "CO₂"],
    correctAnswer: 3
  },
  {
    id: 179,
    question: "Phimosis is a condition where:",
    choices: ["The urethra is blocked", "The foreskin is difficult to retract", "The prostate is enlarged", "The scrotum is infected"],
    correctAnswer: 1
  },
  {
    id: 180,
    question: "The primary goal of a urethral meatotomy is to:",
    choices: ["Repair a fistula", "Remove the foreskin", "Enlarge the urethral meatus", "Perform biopsy"],
    correctAnswer: 2
  },
  {
    id: 181,
    question: "The purpose of Van Buren sounds is to:",
    choices: ["Dilate the urethra", "Excise bladder tumors", "Biopsy prostate", "Crush stones"],
    correctAnswer: 0
  },
  {
    id: 182,
    question: "A urethroplasty is indicated for all of the following except:",
    choices: ["Strictures", "Trauma", "Infection", "Circumcision"],
    correctAnswer: 3
  },
  {
    id: 183,
    question: "What condition can lead to placement of a penile implant?",
    choices: ["Phimosis", "Diabetes", "Priapism", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 184,
    question: "During a vasectomy, which structure is tied and cauterized?",
    choices: ["Epididymis", "Vas deferens", "Prostate", "Ureter"],
    correctAnswer: 1
  },
  {
    id: 185,
    question: "A hydrocelectomy is performed to remove:",
    choices: ["Excess fluid from the scrotum", "The testicle", "The prostate", "A penile implant"],
    correctAnswer: 0
  },
  {
    id: 186,
    question: "A varicocelectomy is performed primarily to:",
    choices: ["Improve fertility", "Excise tumors", "Treat infections", "Drain urine"],
    correctAnswer: 0
  },
  {
    id: 187,
    question: "The PSA test screens for:",
    choices: ["Kidney failure", "Testicular cancer", "Prostate cancer", "UTI"],
    correctAnswer: 2
  },
  {
    id: 188,
    question: "A needle biopsy of the prostate often uses a:",
    choices: ["Tru-Cut needle", "Yankauer suction", "Foley catheter", "Punch biopsy"],
    correctAnswer: 0
  },
  {
    id: 189,
    question: "Which of the following is a minimally invasive treatment for prostate cancer?",
    choices: ["TURP", "Radical prostatectomy", "Transrectal seed implantation", "Nephroureterectomy"],
    correctAnswer: 2
  },
  {
    id: 190,
    question: "The Ellik evacuator is used to:",
    choices: ["Remove stones", "Irrigate the bladder", "Evacuate chips and clots", "Inflate the Foley balloon"],
    correctAnswer: 2
  },
  {
    id: 191,
    question: "Which of the following describes a radical prostatectomy?",
    choices: ["Removal of prostate only", "Removal of prostate, seminal vesicles, and lymph nodes", "Removal of bladder and prostate", "Biopsy of the prostate"],
    correctAnswer: 1
  },
  {
    id: 192,
    question: "Which urinary diversion reroutes the ureters into an ileum loop?",
    choices: ["Ureterocystostomy", "Cutaneous ureterostomy", "Ileal conduit", "Ureteroureterostomy"],
    correctAnswer: 2
  },
  {
    id: 193,
    question: "What is the preferred way to send stones to pathology?",
    choices: ["In saline", "In sterile water", "In a dry container", "In formalin"],
    correctAnswer: 2
  },
  {
    id: 194,
    question: "Nephrostomy is indicated to:",
    choices: ["Reroute urine through the intestine", "Open the urethra", "Drain urine directly from the kidney", "Crush stones"],
    correctAnswer: 2
  },
  {
    id: 195,
    question: "The purpose of ESWL is to:",
    choices: ["Remove stones percutaneously", "Crush stones with sound waves", "Evacuate clots", "Dilate the urethra"],
    correctAnswer: 1
  },
  {
    id: 196,
    question: "Pyelotomy refers to:",
    choices: ["Removal of kidney", "Incision into renal pelvis", "Removal of stones from ureter", "Diversion of urine"],
    correctAnswer: 1
  },
  {
    id: 197,
    question: "Hydroureteronephrosis is treated by:",
    choices: ["TURP", "Nephroureterectomy", "Urethral meatotomy", "Vasectomy"],
    correctAnswer: 1
  },
  {
    id: 198,
    question: "The most common diagnosis requiring kidney transplant is:",
    choices: ["Diabetes", "Polycystic kidneys", "Renal trauma", "Prostate cancer"],
    correctAnswer: 0
  },
  {
    id: 199,
    question: "Which kidney is usually harvested for transplant?",
    choices: ["Left", "Right", "Either", "Neither"],
    correctAnswer: 0
  },
  {
    id: 200,
    question: "What position is the recipient placed in for kidney transplant?",
    choices: ["Right lateral", "Left lateral decubitus", "Supine", "Prone"],
    correctAnswer: 2
  },
  {
    id: 201,
    question: "The adrenal glands secrete all of the following except:",
    choices: ["Epinephrine", "Cortisol", "Testosterone", "Insulin"],
    correctAnswer: 3
  },
  {
    id: 202,
    question: "A congenital malignant tumor of the kidney in children is called:",
    choices: ["Wilm's tumor", "Varicocele", "Hydrocele", "Phimosis"],
    correctAnswer: 0
  },
  {
    id: 203,
    question: "The thoracic cavity contains all of the following except:",
    choices: ["Heart", "Lungs", "Kidneys", "Great vessels"],
    correctAnswer: 2
  },
  {
    id: 204,
    question: "How many ribs are considered \"true\" ribs?",
    choices: ["7", "5", "12", "10"],
    correctAnswer: 0
  },
  {
    id: 205,
    question: "The diaphragm separates:",
    choices: ["Left and right lungs", "Peritoneal and thoracic cavities", "Heart and lungs", "Upper and lower abdomen"],
    correctAnswer: 1
  },
  {
    id: 206,
    question: "What is the purpose of a double-lumen endotracheal tube?",
    choices: ["Evacuate air", "Provide suction", "Ventilate one lung while collapsing the other", "Visualize the trachea"],
    correctAnswer: 2
  },
  {
    id: 207,
    question: "A bronchoscope is inserted through the:",
    choices: ["Neck", "Chest wall", "Nose or mouth", "Tracheostomy"],
    correctAnswer: 2
  },
  {
    id: 208,
    question: "Myasthenia gravis is most commonly associated with:",
    choices: ["Lung cancer", "Thymoma", "Diabetes", "Wilm's tumor"],
    correctAnswer: 1
  },
  {
    id: 209,
    question: "Which instrument is used to retract the lung?",
    choices: ["Duval clamp", "Allison retractor", "Tuffier rib retractor", "Sarot clamp"],
    correctAnswer: 1
  },
  {
    id: 210,
    question: "What is the purpose of a chest tube and water seal system?",
    choices: ["Provide oxygen", "Establish negative pressure", "Ventilate both lungs", "Collapse the lung"],
    correctAnswer: 1
  },
  {
    id: 211,
    question: "Which thoracic procedure removes the entire lung?",
    choices: ["Pneumonectomy", "Lobectomy", "Segmental resection", "Wedge resection"],
    correctAnswer: 0
  },
  {
    id: 212,
    question: "What congenital chest deformity is also called \"funnel chest\"?",
    choices: ["Pectus carinatum", "Pectus excavatum", "Bleb", "Thoracotomy"],
    correctAnswer: 1
  },
  {
    id: 213,
    question: "Hemoptysis refers to:",
    choices: ["Difficulty breathing", "Coughing up blood", "Collapsed lung", "Fluid in the lung"],
    correctAnswer: 1
  },
  {
    id: 214,
    question: "What nerve must be preserved during a pneumonectomy?",
    choices: ["Median", "Recurrent laryngeal", "Phrenic", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 215,
    question: "A wedge resection removes:",
    choices: ["Entire lung", "One lobe", "Small portion of one lobe", "Segment of one lung"],
    correctAnswer: 2
  },
  {
    id: 216,
    question: "What is the main purpose of mediastinoscopy?",
    choices: ["Biopsy of lymph nodes", "Collapse a lung", "Dilate bronchi", "Insert chest tube"],
    correctAnswer: 0
  },
  {
    id: 217,
    question: "Which thoracic procedure is minimally invasive and video-assisted?",
    choices: ["VATS", "Thoracotomy", "Bronchoscopy", "Rib resection"],
    correctAnswer: 0
  },
  {
    id: 218,
    question: "What is the primary purpose of a thoracentesis?",
    choices: ["Remove air from pleural space", "Remove fluid from pleural space", "Insert chest tube", "Biopsy lung tissue"],
    correctAnswer: 1
  },
  {
    id: 219,
    question: "Which condition requires immediate chest tube placement?",
    choices: ["Pneumonia", "Tension pneumothorax", "Lung cancer", "Pleural effusion"],
    correctAnswer: 1
  },
  {
    id: 220,
    question: "What is the correct chest tube insertion site?",
    choices: ["Second intercostal space", "Fourth to sixth intercostal space", "Eighth intercostal space", "Above the clavicle"],
    correctAnswer: 1
  },
  {
    id: 221,
    question: "Which thoracic approach provides the best exposure for lung resection?",
    choices: ["Anterolateral", "Posterolateral", "Median sternotomy", "Supraclavicular"],
    correctAnswer: 1
  },
  {
    id: 222,
    question: "What is the most common indication for lung transplant?",
    choices: ["Lung cancer", "COPD", "Pneumonia", "Tuberculosis"],
    correctAnswer: 1
  },
  {
    id: 223,
    question: "Which procedure is performed to treat empyema?",
    choices: ["Decortication", "Pneumonectomy", "Wedge resection", "Bronchoscopy"],
    correctAnswer: 0
  },
  {
    id: 224,
    question: "What is the purpose of pleurodesis?",
    choices: ["Remove lung", "Prevent recurrent pneumothorax", "Treat lung cancer", "Insert chest tube"],
    correctAnswer: 1
  },
  {
    id: 225,
    question: "Which imaging study is most commonly used to evaluate the chest?",
    choices: ["MRI", "CT scan", "Chest X-ray", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 226,
    question: "What is the most common type of surgical wound closure?",
    choices: ["Primary intention", "Secondary intention", "Tertiary intention", "Delayed primary closure"],
    correctAnswer: 0
  },
  {
    id: 227,
    question: "Which of the following is NOT a characteristic of malignant tumors?",
    choices: ["Rapid growth", "Well-defined borders", "Metastasis", "Invasion of surrounding tissue"],
    correctAnswer: 1
  },
  {
    id: 228,
    question: "The term 'anastomosis' refers to:",
    choices: ["Cutting tissue", "Joining two structures", "Removing tissue", "Examining tissue"],
    correctAnswer: 1
  },
  {
    id: 229,
    question: "Which position is used for kidney surgery?",
    choices: ["Supine", "Prone", "Lateral", "Lithotomy"],
    correctAnswer: 2
  },
  {
    id: 230,
    question: "What is the primary function of the spleen?",
    choices: ["Produce bile", "Filter blood", "Store glucose", "Produce insulin"],
    correctAnswer: 1
  },
  {
    id: 231,
    question: "Which artery supplies blood to the heart muscle?",
    choices: ["Carotid", "Coronary", "Pulmonary", "Aortic"],
    correctAnswer: 1
  },
  {
    id: 232,
    question: "The appendix is attached to which part of the intestine?",
    choices: ["Ileum", "Cecum", "Colon", "Rectum"],
    correctAnswer: 1
  },
  {
    id: 233,
    question: "What is the medical term for gallbladder removal?",
    choices: ["Cholecystectomy", "Choledochostomy", "Cholangiopancreatography", "Cholelithotomy"],
    correctAnswer: 0
  },
  {
    id: 234,
    question: "Which hormone regulates blood sugar levels?",
    choices: ["Cortisol", "Insulin", "Thyroxine", "Adrenaline"],
    correctAnswer: 1
  },
  {
    id: 235,
    question: "The femoral artery is located in the:",
    choices: ["Arm", "Leg", "Neck", "Chest"],
    correctAnswer: 1
  },
  {
    id: 236,
    question: "What is the normal body temperature in Fahrenheit?",
    choices: ["96.8°F", "98.6°F", "100.4°F", "102.2°F"],
    correctAnswer: 1
  },
  {
    id: 237,
    question: "Which of the following is a water-soluble vitamin?",
    choices: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"],
    correctAnswer: 2
  },
  {
    id: 238,
    question: "The brachial pulse is palpated in the:",
    choices: ["Wrist", "Neck", "Arm", "Ankle"],
    correctAnswer: 2
  },
  {
    id: 239,
    question: "What is the term for difficulty swallowing?",
    choices: ["Dysphagia", "Dyspnea", "Dysuria", "Dysphasia"],
    correctAnswer: 0
  },
  {
    id: 240,
    question: "Which imaging study uses magnetic fields?",
    choices: ["X-ray", "CT scan", "MRI", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 241,
    question: "The tricuspid valve is located between the:",
    choices: ["Right atrium and right ventricle", "Left atrium and left ventricle", "Right ventricle and pulmonary artery", "Left ventricle and aorta"],
    correctAnswer: 0
  },
  {
    id: 242,
    question: "What is the medical term for kidney stones?",
    choices: ["Nephrolithiasis", "Nephritis", "Nephrosis", "Nephroma"],
    correctAnswer: 0
  },
  {
    id: 243,
    question: "Which blood type is considered the universal donor?",
    choices: ["Type A", "Type B", "Type AB", "Type O"],
    correctAnswer: 3
  },
  {
    id: 244,
    question: "The epiglottis prevents food from entering the:",
    choices: ["Esophagus", "Stomach", "Trachea", "Bronchi"],
    correctAnswer: 2
  },
  {
    id: 245,
    question: "What is the term for surgical removal of the uterus?",
    choices: ["Oophorectomy", "Hysterectomy", "Salpingectomy", "Mastectomy"],
    correctAnswer: 1
  },
  {
    id: 246,
    question: "Which nerve controls the diaphragm?",
    choices: ["Vagus", "Phrenic", "Median", "Radial"],
    correctAnswer: 1
  },
  {
    id: 247,
    question: "The Glasgow Coma Scale measures:",
    choices: ["Blood pressure", "Heart rate", "Level of consciousness", "Respiratory rate"],
    correctAnswer: 2
  },
  {
    id: 248,
    question: "What is the medical term for nosebleed?",
    choices: ["Epistaxis", "Rhinitis", "Sinusitis", "Pharyngitis"],
    correctAnswer: 0
  },
  {
    id: 249,
    question: "Which organ produces bile?",
    choices: ["Pancreas", "Gallbladder", "Liver", "Stomach"],
    correctAnswer: 2
  },
  {
    id: 250,
    question: "The patella is commonly known as the:",
    choices: ["Ankle bone", "Knee cap", "Shin bone", "Thigh bone"],
    correctAnswer: 1
  },
  {
    id: 251,
    question: "What is the medical term for difficulty breathing?",
    choices: ["Dysphagia", "Dyspnea", "Dysuria", "Dysphasia"],
    correctAnswer: 1
  },
  {
    id: 252,
    question: "Which electrolyte is most important for muscle function?",
    choices: ["Sodium", "Potassium", "Chloride", "Magnesium"],
    correctAnswer: 1
  },
  {
    id: 253,
    question: "The carotid pulse is palpated in the:",
    choices: ["Wrist", "Neck", "Arm", "Ankle"],
    correctAnswer: 1
  },
  {
    id: 254,
    question: "What is the term for surgical opening of the abdomen?",
    choices: ["Laparotomy", "Thoracotomy", "Craniotomy", "Arthrotomy"],
    correctAnswer: 0
  },
  {
    id: 255,
    question: "Which hormone is produced by the adrenal glands?",
    choices: ["Insulin", "Cortisol", "Thyroxine", "Growth hormone"],
    correctAnswer: 1
  },
  {
    id: 256,
    question: "The deltoid muscle is located in the:",
    choices: ["Leg", "Arm", "Back", "Chest"],
    correctAnswer: 1
  },
  {
    id: 257,
    question: "What is the medical term for surgical removal of the appendix?",
    choices: ["Appendicostomy", "Appendectomy", "Appendicectomy", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 258,
    question: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
    choices: ["Pulmonary artery", "Pulmonary vein", "Vena cava", "Aorta"],
    correctAnswer: 1
  },
  {
    id: 259,
    question: "The term 'bradycardia' refers to:",
    choices: ["Fast heart rate", "Slow heart rate", "Irregular heart rate", "Normal heart rate"],
    correctAnswer: 1
  },
  {
    id: 260,
    question: "Which part of the brain controls balance?",
    choices: ["Cerebrum", "Cerebellum", "Brainstem", "Medulla"],
    correctAnswer: 1
  },
  {
    id: 261,
    question: "What is the medical term for gallstones?",
    choices: ["Cholelithiasis", "Cholecystitis", "Choledocholithiasis", "Cholangitis"],
    correctAnswer: 0
  },
  {
    id: 262,
    question: "The mitral valve is located between the:",
    choices: ["Right atrium and right ventricle", "Left atrium and left ventricle", "Right ventricle and pulmonary artery", "Left ventricle and aorta"],
    correctAnswer: 1
  },
  {
    id: 263,
    question: "Which imaging study uses sound waves?",
    choices: ["X-ray", "CT scan", "MRI", "Ultrasound"],
    correctAnswer: 3
  },
  {
    id: 264,
    question: "What is the term for surgical removal of a breast?",
    choices: ["Mammoplasty", "Mastectomy", "Mammography", "Mastopexy"],
    correctAnswer: 1
  },
  {
    id: 265,
    question: "The pancreas produces which digestive enzyme?",
    choices: ["Pepsin", "Amylase", "Lipase", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 266,
    question: "Which blood type is considered the universal recipient?",
    choices: ["Type A", "Type B", "Type AB", "Type O"],
    correctAnswer: 2
  },
  {
    id: 267,
    question: "The term 'tachycardia' refers to:",
    choices: ["Fast heart rate", "Slow heart rate", "Irregular heart rate", "Normal heart rate"],
    correctAnswer: 0
  },
  {
    id: 268,
    question: "Which organ filters waste from the blood?",
    choices: ["Liver", "Lungs", "Kidneys", "Spleen"],
    correctAnswer: 2
  },
  {
    id: 269,
    question: "What is the medical term for surgical removal of the thyroid?",
    choices: ["Thyrotomy", "Thyroidectomy", "Thyroidoscopy", "Thyropexy"],
    correctAnswer: 1
  },
  {
    id: 270,
    question: "The radial pulse is palpated in the:",
    choices: ["Wrist", "Neck", "Arm", "Ankle"],
    correctAnswer: 0
  },
  {
    id: 271,
    question: "Which part of the digestive system absorbs most nutrients?",
    choices: ["Stomach", "Small intestine", "Large intestine", "Colon"],
    correctAnswer: 1
  },
  {
    id: 272,
    question: "What is the term for inflammation of the gallbladder?",
    choices: ["Cholelithiasis", "Cholecystitis", "Choledocholithiasis", "Cholangitis"],
    correctAnswer: 1
  },
  {
    id: 273,
    question: "The aortic valve prevents backflow from the:",
    choices: ["Right ventricle", "Left ventricle", "Aorta to left ventricle", "Pulmonary artery"],
    correctAnswer: 2
  },
  {
    id: 274,
    question: "Which hormone regulates calcium levels?",
    choices: ["Insulin", "Cortisol", "Parathyroid hormone", "Thyroxine"],
    correctAnswer: 2
  },
  {
    id: 275,
    question: "What is the medical term for surgical opening of the chest?",
    choices: ["Laparotomy", "Thoracotomy", "Craniotomy", "Arthrotomy"],
    correctAnswer: 1
  },
  {
    id: 276,
    question: "The quadriceps muscle is located in the:",
    choices: ["Arm", "Thigh", "Calf", "Back"],
    correctAnswer: 1
  },
  {
    id: 277,
    question: "What is the medical term for surgical removal of the spleen?",
    choices: ["Splenectomy", "Splenorrhaphy", "Splenotomy", "Splenoplasty"],
    correctAnswer: 0
  },
  {
    id: 278,
    question: "Which artery supplies blood to the brain?",
    choices: ["Coronary", "Carotid", "Femoral", "Brachial"],
    correctAnswer: 1
  },
  {
    id: 279,
    question: "The term 'anuria' refers to:",
    choices: ["Excessive urination", "Painful urination", "Blood in urine", "Absence of urination"],
    correctAnswer: 3
  },
  {
    id: 280,
    question: "Which part of the ear is responsible for hearing?",
    choices: ["Outer ear", "Middle ear", "Inner ear", "Eustachian tube"],
    correctAnswer: 2
  },
  {
    id: 281,
    question: "What is the medical term for inflammation of the liver?",
    choices: ["Hepatitis", "Hepatoma", "Hepatectomy", "Hepatoscopy"],
    correctAnswer: 0
  },
  {
    id: 282,
    question: "The biceps muscle is located in the:",
    choices: ["Leg", "Arm", "Back", "Chest"],
    correctAnswer: 1
  },
  {
    id: 283,
    question: "Which imaging study uses ionizing radiation?",
    choices: ["Ultrasound", "MRI", "X-ray", "Both A and B"],
    correctAnswer: 2
  },
  {
    id: 284,
    question: "What is the term for surgical removal of part of the lung?",
    choices: ["Pneumonectomy", "Lobectomy", "Thoracotomy", "Pleurodesis"],
    correctAnswer: 1
  },
  {
    id: 285,
    question: "The gastrocnemius muscle is located in the:",
    choices: ["Arm", "Thigh", "Calf", "Back"],
    correctAnswer: 2
  },
  {
    id: 286,
    question: "Which blood cell type fights infection?",
    choices: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
    correctAnswer: 1
  },
  {
    id: 287,
    question: "What is the medical term for difficulty urinating?",
    choices: ["Dysuria", "Polyuria", "Oliguria", "Anuria"],
    correctAnswer: 0
  },
  {
    id: 288,
    question: "The temporal pulse is located in the:",
    choices: ["Wrist", "Temple", "Neck", "Ankle"],
    correctAnswer: 1
  },
  {
    id: 289,
    question: "Which organ stores bile?",
    choices: ["Liver", "Pancreas", "Gallbladder", "Duodenum"],
    correctAnswer: 2
  },
  {
    id: 290,
    question: "What is the term for surgical repair of a hernia?",
    choices: ["Hernioplasty", "Herniorrhaphy", "Herniotomy", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 291,
    question: "The pectoralis major muscle is located in the:",
    choices: ["Arm", "Leg", "Chest", "Back"],
    correctAnswer: 2
  },
  {
    id: 292,
    question: "Which hormone is produced by the pancreas?",
    choices: ["Cortisol", "Thyroxine", "Insulin", "Adrenaline"],
    correctAnswer: 2
  },
  {
    id: 293,
    question: "What is the medical term for surgical opening of the skull?",
    choices: ["Craniotomy", "Craniectomy", "Cranioplasty", "Craniosynostosis"],
    correctAnswer: 0
  },
  {
    id: 294,
    question: "The dorsalis pedis pulse is located in the:",
    choices: ["Wrist", "Neck", "Foot", "Ankle"],
    correctAnswer: 2
  },
  {
    id: 295,
    question: "Which part of the nervous system controls involuntary functions?",
    choices: ["Central nervous system", "Peripheral nervous system", "Autonomic nervous system", "Somatic nervous system"],
    correctAnswer: 2
  },
  {
    id: 296,
    question: "What is the term for inflammation of the pancreas?",
    choices: ["Pancreatitis", "Pancreatoma", "Pancreatectomy", "Pancreatoscopy"],
    correctAnswer: 0
  },
  {
    id: 297,
    question: "The latissimus dorsi muscle is located in the:",
    choices: ["Arm", "Leg", "Chest", "Back"],
    correctAnswer: 3
  },
  {
    id: 298,
    question: "Which blood component is responsible for clotting?",
    choices: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    correctAnswer: 2
  },
  {
    id: 299,
    question: "What is the medical term for excessive urination?",
    choices: ["Dysuria", "Polyuria", "Oliguria", "Anuria"],
    correctAnswer: 1
  },
  {
    id: 300,
    question: "The popliteal pulse is located behind the:",
    choices: ["Wrist", "Elbow", "Knee", "Ankle"],
    correctAnswer: 2
  },
  {
    id: 301,
    question: "Which organ produces red blood cells?",
    choices: ["Liver", "Spleen", "Bone marrow", "Kidneys"],
    correctAnswer: 2
  },
  {
    id: 302,
    question: "What is the term for surgical removal of the colon?",
    choices: ["Colectomy", "Colostomy", "Colonoscopy", "Coloplasty"],
    correctAnswer: 0
  },
  {
    id: 303,
    question: "The trapezius muscle is located in the:",
    choices: ["Arm", "Leg", "Chest", "Neck and shoulders"],
    correctAnswer: 3
  },
  {
    id: 304,
    question: "Which vitamin is essential for blood clotting?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: 3
  },
  {
    id: 305,
    question: "What is the medical term for inflammation of the kidney?",
    choices: ["Nephritis", "Nephrosis", "Nephroma", "Nephrostomy"],
    correctAnswer: 0
  },
  {
    id: 306,
    question: "The posterior tibial pulse is located in the:",
    choices: ["Wrist", "Neck", "Ankle", "Foot"],
    correctAnswer: 2
  },
  {
    id: 307,
    question: "Which part of the eye focuses light?",
    choices: ["Cornea", "Lens", "Retina", "Iris"],
    correctAnswer: 1
  },
  {
    id: 308,
    question: "What is the term for surgical creation of an opening in the colon?",
    choices: ["Colectomy", "Colostomy", "Colonoscopy", "Coloplasty"],
    correctAnswer: 1
  },
  {
    id: 309,
    question: "The gluteus maximus muscle is located in the:",
    choices: ["Arm", "Thigh", "Buttocks", "Back"],
    correctAnswer: 2
  },
  {
    id: 310,
    question: "Which hormone regulates metabolism?",
    choices: ["Insulin", "Cortisol", "Thyroxine", "Growth hormone"],
    correctAnswer: 2
  },
  {
    id: 311,
    question: "What is the medical term for painful urination?",
    choices: ["Dysuria", "Polyuria", "Oliguria", "Hematuria"],
    correctAnswer: 0
  },
  {
    id: 312,
    question: "The apical pulse is located at the:",
    choices: ["Wrist", "Neck", "Apex of the heart", "Temple"],
    correctAnswer: 2
  },
  {
    id: 313,
    question: "Which organ detoxifies the blood?",
    choices: ["Kidneys", "Liver", "Lungs", "Spleen"],
    correctAnswer: 1
  },
  {
    id: 314,
    question: "What is the term for surgical removal of the stomach?",
    choices: ["Gastrostomy", "Gastrectomy", "Gastroscopy", "Gastroplasty"],
    correctAnswer: 1
  },
  {
    id: 315,
    question: "The soleus muscle is located in the:",
    choices: ["Arm", "Thigh", "Calf", "Back"],
    correctAnswer: 2
  },
  {
    id: 316,
    question: "Which electrolyte is most abundant in extracellular fluid?",
    choices: ["Potassium", "Sodium", "Chloride", "Magnesium"],
    correctAnswer: 1
  },
  {
    id: 317,
    question: "What is the medical term for blood in urine?",
    choices: ["Dysuria", "Polyuria", "Oliguria", "Hematuria"],
    correctAnswer: 3
  },
  {
    id: 318,
    question: "The femoral pulse is located in the:",
    choices: ["Wrist", "Groin", "Ankle", "Neck"],
    correctAnswer: 1
  },
  {
    id: 319,
    question: "Which part of the digestive system produces hydrochloric acid?",
    choices: ["Liver", "Pancreas", "Stomach", "Small intestine"],
    correctAnswer: 2
  },
  {
    id: 320,
    question: "What is the term for surgical repair of the nose?",
    choices: ["Rhinoplasty", "Rhinotomy", "Rhinoscopy", "Rhinorrhaphy"],
    correctAnswer: 0
  },
  {
    id: 321,
    question: "The sartorius muscle is located in the:",
    choices: ["Arm", "Thigh", "Calf", "Back"],
    correctAnswer: 1
  },
  {
    id: 322,
    question: "Which vitamin is synthesized by the skin?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: 2
  },
  {
    id: 323,
    question: "What is the medical term for decreased urination?",
    choices: ["Dysuria", "Polyuria", "Oliguria", "Anuria"],
    correctAnswer: 2
  },
  {
    id: 324,
    question: "The ulnar pulse is located in the:",
    choices: ["Wrist", "Elbow", "Ankle", "Neck"],
    correctAnswer: 0
  },
  {
    id: 325,
    question: "Which organ produces insulin?",
    choices: ["Liver", "Pancreas", "Adrenal glands", "Thyroid"],
    correctAnswer: 1
  },
  {
    id: 326,
    question: "What is the term for surgical opening of the windpipe?",
    choices: ["Tracheotomy", "Tracheostomy", "Laryngotomy", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 327,
    question: "The hamstring muscles are located in the:",
    choices: ["Arm", "Front of thigh", "Back of thigh", "Calf"],
    correctAnswer: 2
  },
  {
    id: 328,
    question: "Which mineral is essential for bone formation?",
    choices: ["Iron", "Calcium", "Potassium", "Sodium"],
    correctAnswer: 1
  },
  {
    id: 329,
    question: "What is the medical term for surgical removal of tonsils?",
    choices: ["Tonsillotomy", "Tonsillectomy", "Tonsilloplasty", "Tonsilloscopy"],
    correctAnswer: 1
  },
  {
    id: 330,
    question: "The tibialis anterior muscle is located in the:",
    choices: ["Arm", "Thigh", "Front of leg", "Back of leg"],
    correctAnswer: 2
  },
  {
    id: 331,
    question: "Which blood vessel returns blood to the heart from the body?",
    choices: ["Aorta", "Pulmonary artery", "Vena cava", "Pulmonary vein"],
    correctAnswer: 2
  },
  {
    id: 332,
    question: "What is the term for inflammation of the bladder?",
    choices: ["Cystitis", "Cystoma", "Cystectomy", "Cystoscopy"],
    correctAnswer: 0
  },
  {
    id: 333,
    question: "The peroneus muscle is located in the:",
    choices: ["Arm", "Thigh", "Side of leg", "Back"],
    correctAnswer: 2
  },
  {
    id: 334,
    question: "Which hormone is produced by the thyroid gland?",
    choices: ["Insulin", "Cortisol", "Thyroxine", "Growth hormone"],
    correctAnswer: 2
  },
  {
    id: 335,
    question: "What is the medical term for surgical removal of the larynx?",
    choices: ["Laryngotomy", "Laryngectomy", "Laryngoplasty", "Laryngoscopy"],
    correctAnswer: 1
  },
  {
    id: 336,
    question: "The rhomboid muscle is located in the:",
    choices: ["Arm", "Leg", "Chest", "Back"],
    correctAnswer: 3
  },
  {
    id: 337,
    question: "Which part of the brain controls vital functions?",
    choices: ["Cerebrum", "Cerebellum", "Brainstem", "Frontal lobe"],
    correctAnswer: 2
  },
  {
    id: 338,
    question: "What is the term for surgical repair of the eardrum?",
    choices: ["Tympanoplasty", "Tympanoscopy", "Tympanotomy", "Tympanectomy"],
    correctAnswer: 0
  },
  {
    id: 339,
    question: "The serratus anterior muscle is located in the:",
    choices: ["Arm", "Leg", "Side of chest", "Back"],
    correctAnswer: 2
  },
  {
    id: 340,
    question: "Which electrolyte is most abundant in intracellular fluid?",
    choices: ["Sodium", "Potassium", "Chloride", "Calcium"],
    correctAnswer: 1
  },
  {
    id: 341,
    question: "What is the medical term for inflammation of the stomach?",
    choices: ["Gastritis", "Gastroma", "Gastrectomy", "Gastroscopy"],
    correctAnswer: 0
  },
  {
    id: 342,
    question: "The levator scapulae muscle is located in the:",
    choices: ["Arm", "Leg", "Neck", "Back"],
    correctAnswer: 2
  },
  {
    id: 343,
    question: "Which organ stores vitamin B12?",
    choices: ["Liver", "Kidney", "Spleen", "Pancreas"],
    correctAnswer: 0
  },
  {
    id: 344,
    question: "What is the term for surgical creation of an opening in the stomach?",
    choices: ["Gastrostomy", "Gastrectomy", "Gastroscopy", "Gastroplasty"],
    correctAnswer: 0
  },
  {
    id: 345,
    question: "The infraspinatus muscle is located in the:",
    choices: ["Arm", "Leg", "Shoulder", "Back"],
    correctAnswer: 2
  },
  {
    id: 346,
    question: "Which hormone controls water balance?",
    choices: ["Insulin", "ADH", "Cortisol", "Thyroxine"],
    correctAnswer: 1
  },
  {
    id: 347,
    question: "What is the medical term for surgical removal of the kidney?",
    choices: ["Nephrotomy", "Nephrectomy", "Nephroscopy", "Nephroplasty"],
    correctAnswer: 1
  },
  {
    id: 348,
    question: "The supraspinatus muscle is located in the:",
    choices: ["Arm", "Leg", "Shoulder", "Back"],
    correctAnswer: 2
  },
  {
    id: 349,
    question: "Which part of the eye detects light?",
    choices: ["Cornea", "Lens", "Retina", "Iris"],
    correctAnswer: 2
  },
  {
    id: 350,
    question: "What is the term for inflammation of the small intestine?",
    choices: ["Enteritis", "Enteroma", "Enterectomy", "Enteroscopy"],
    correctAnswer: 0
  },
  {
    id: 351,
    question: "The teres major muscle is located in the:",
    choices: ["Arm", "Leg", "Shoulder", "Back"],
    correctAnswer: 2
  },
  {
    id: 352,
    question: "Which vitamin is necessary for calcium absorption?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: 2
  },
  {
    id: 353,
    question: "What is the medical term for surgical repair of a blood vessel?",
    choices: ["Angioplasty", "Angiectomy", "Angioscopy", "Angiotomy"],
    correctAnswer: 0
  },
  {
    id: 354,
    question: "The subscapularis muscle is located in the:",
    choices: ["Arm", "Leg", "Shoulder", "Back"],
    correctAnswer: 2
  },
  {
    id: 355,
    question: "Which organ produces erythropoietin?",
    choices: ["Liver", "Kidneys", "Spleen", "Bone marrow"],
    correctAnswer: 1
  },
  {
    id: 356,
    question: "What is the term for surgical removal of the ovary?",
    choices: ["Oophorotomy", "Oophorectomy", "Oophoroplasty", "Oophoroscopy"],
    correctAnswer: 1
  },
  {
    id: 357,
    question: "The coracobrachialis muscle is located in the:",
    choices: ["Upper arm", "Forearm", "Shoulder", "Back"],
    correctAnswer: 0
  },
  {
    id: 358,
    question: "Which hormone regulates potassium levels?",
    choices: ["Insulin", "Cortisol", "Aldosterone", "Thyroxine"],
    correctAnswer: 2
  },
  {
    id: 359,
    question: "What is the medical term for inflammation of the colon?",
    choices: ["Colitis", "Coloma", "Colectomy", "Colonoscopy"],
    correctAnswer: 0
  },
  {
    id: 360,
    question: "The brachialis muscle is located in the:",
    choices: ["Upper arm", "Forearm", "Shoulder", "Back"],
    correctAnswer: 0
  },
  {
    id: 361,
    question: "Which part of the kidney filters blood?",
    choices: ["Glomerulus", "Tubules", "Pelvis", "Cortex"],
    correctAnswer: 0
  },
  {
    id: 362,
    question: "What is the term for surgical creation of an opening in the small intestine?",
    choices: ["Enterostomy", "Enterectomy", "Enteroscopy", "Enteroplasty"],
    correctAnswer: 0
  },
  {
    id: 363,
    question: "The brachioradialis muscle is located in the:",
    choices: ["Upper arm", "Forearm", "Shoulder", "Back"],
    correctAnswer: 1
  },
  {
    id: 364,
    question: "Which enzyme breaks down proteins?",
    choices: ["Amylase", "Lipase", "Pepsin", "Lactase"],
    correctAnswer: 2
  },
  {
    id: 365,
    question: "What is the medical term for surgical removal of the fallopian tube?",
    choices: ["Salpingotomy", "Salpingectomy", "Salpingoplasty", "Salpingoscopy"],
    correctAnswer: 1
  },
  {
    id: 366,
    question: "The extensor carpi radialis muscle is located in the:",
    choices: ["Upper arm", "Forearm", "Wrist", "Hand"],
    correctAnswer: 1
  },
  {
    id: 367,
    question: "Which hormone is produced by the pituitary gland?",
    choices: ["Insulin", "Cortisol", "Growth hormone", "Thyroxine"],
    correctAnswer: 2
  },
  {
    id: 368,
    question: "What is the term for inflammation of the rectum?",
    choices: ["Proctitis", "Proctoma", "Proctectomy", "Proctoscopy"],
    correctAnswer: 0
  },
  {
    id: 369,
    question: "The flexor carpi ulnaris muscle is located in the:",
    choices: ["Upper arm", "Forearm", "Wrist", "Hand"],
    correctAnswer: 1
  },
  {
    id: 370,
    question: "Which part of the ear maintains balance?",
    choices: ["Outer ear", "Middle ear", "Cochlea", "Semicircular canals"],
    correctAnswer: 3
  },
  {
    id: 371,
    question: "What is the medical term for surgical repair of the bladder?",
    choices: ["Cystoplasty", "Cystectomy", "Cystoscopy", "Cystotomy"],
    correctAnswer: 0
  },
  {
    id: 372,
    question: "The palmaris longus muscle is located in the:",
    choices: ["Upper arm", "Forearm", "Wrist", "Hand"],
    correctAnswer: 1
  },
  {
    id: 373,
    question: "Which vitamin is produced by bacteria in the colon?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: 3
  },
  {
    id: 374,
    question: "What is the term for surgical removal of the prostate?",
    choices: ["Prostatotomy", "Prostatectomy", "Prostatoplasty", "Prostatoscopy"],
    correctAnswer: 1
  },
  {
    id: 375,
    question: "The pronator teres muscle is located in the:",
    choices: ["Upper arm", "Forearm", "Wrist", "Hand"],
    correctAnswer: 1
  },
  {
    id: 376,
    question: "Which mineral is essential for oxygen transport?",
    choices: ["Calcium", "Iron", "Potassium", "Sodium"],
    correctAnswer: 1
  },
  {
    id: 377,
    question: "What is the medical term for inflammation of the appendix?",
    choices: ["Appendicitis", "Appendoma", "Appendectomy", "Appendoscopy"],
    correctAnswer: 0
  },
  {
    id: 378,
    question: "The supinator muscle is located in the:",
    choices: ["Upper arm", "Forearm", "Wrist", "Hand"],
    correctAnswer: 1
  },
  {
    id: 379,
    question: "Which hormone stimulates milk production?",
    choices: ["Estrogen", "Progesterone", "Prolactin", "Oxytocin"],
    correctAnswer: 2
  },
  {
    id: 380,
    question: "What is the term for surgical creation of an opening in the windpipe?",
    choices: ["Tracheotomy", "Tracheostomy", "Laryngotomy", "Bronchostomy"],
    correctAnswer: 1
  },
  {
    id: 381,
    question: "The abductor pollicis longus muscle controls:",
    choices: ["Thumb movement", "Index finger", "Wrist flexion", "Elbow extension"],
    correctAnswer: 0
  },
  {
    id: 382,
    question: "Which part of the pancreas produces hormones?",
    choices: ["Acinar cells", "Islets of Langerhans", "Pancreatic duct", "Head of pancreas"],
    correctAnswer: 1
  },
  {
    id: 383,
    question: "What is the medical term for surgical removal of hemorrhoids?",
    choices: ["Hemorrhoidotomy", "Hemorrhoidectomy", "Hemorrhoidoplasty", "Hemorrhoidoscopy"],
    correctAnswer: 1
  },
  {
    id: 384,
    question: "The extensor pollicis brevis muscle controls:",
    choices: ["Thumb extension", "Thumb flexion", "Wrist extension", "Finger extension"],
    correctAnswer: 0
  },
  {
    id: 385,
    question: "Which enzyme breaks down fats?",
    choices: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
    correctAnswer: 1
  },
  {
    id: 386,
    question: "What is the term for inflammation of the esophagus?",
    choices: ["Esophagitis", "Esophagoma", "Esophagectomy", "Esophagoscopy"],
    correctAnswer: 0
  },
  {
    id: 387,
    question: "The flexor pollicis longus muscle controls:",
    choices: ["Thumb flexion", "Thumb extension", "Wrist flexion", "Finger flexion"],
    correctAnswer: 0
  },
  {
    id: 388,
    question: "Which hormone is released during stress?",
    choices: ["Insulin", "Cortisol", "Thyroxine", "Growth hormone"],
    correctAnswer: 1
  },
  {
    id: 389,
    question: "What is the medical term for surgical repair of the diaphragm?",
    choices: ["Diaphragmoplasty", "Diaphragmectomy", "Diaphragmoscopy", "Diaphragmotomy"],
    correctAnswer: 0
  },
  {
    id: 390,
    question: "The adductor pollicis muscle controls:",
    choices: ["Thumb adduction", "Thumb abduction", "Thumb flexion", "Thumb extension"],
    correctAnswer: 0
  },
  {
    id: 391,
    question: "Which part of the eye controls the amount of light entering?",
    choices: ["Cornea", "Lens", "Iris", "Retina"],
    correctAnswer: 2
  },
  {
    id: 392,
    question: "What is the term for surgical removal of the adrenal gland?",
    choices: ["Adrenalotomy", "Adrenalectomy", "Adrenaloplasty", "Adrenaloscopy"],
    correctAnswer: 1
  },
  {
    id: 393,
    question: "The opponens pollicis muscle controls:",
    choices: ["Thumb opposition", "Thumb flexion", "Thumb extension", "Thumb abduction"],
    correctAnswer: 0
  },
  {
    id: 394,
    question: "Which vitamin is necessary for proper blood clotting?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: 3
  },
  {
    id: 395,
    question: "What is the medical term for inflammation of the duodenum?",
    choices: ["Duodenitis", "Duodenoma", "Duodenectomy", "Duodenoscopy"],
    correctAnswer: 0
  },
  {
    id: 396,
    question: "The flexor digitorum superficialis muscle controls:",
    choices: ["Finger flexion", "Finger extension", "Wrist flexion", "Thumb movement"],
    correctAnswer: 0
  },
  {
    id: 397,
    question: "Which hormone regulates sleep cycles?",
    choices: ["Cortisol", "Melatonin", "Growth hormone", "Insulin"],
    correctAnswer: 1
  },
  {
    id: 398,
    question: "What is the term for surgical repair of the spine?",
    choices: ["Spinal fusion", "Laminectomy", "Discectomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 399,
    question: "The extensor digitorum muscle controls:",
    choices: ["Finger extension", "Finger flexion", "Wrist extension", "Thumb movement"],
    correctAnswer: 0
  },
  {
    id: 400,
    question: "Which part of the brain controls memory?",
    choices: ["Cerebellum", "Hippocampus", "Medulla", "Pons"],
    correctAnswer: 1
  },
  {
    id: 401,
    question: "What is the medical term for surgical removal of the pancreas?",
    choices: ["Pancreatotomy", "Pancreatectomy", "Pancreatoplasty", "Pancreatoscopy"],
    correctAnswer: 1
  },
  {
    id: 402,
    question: "The lumbrical muscles are located in the:",
    choices: ["Hand", "Foot", "Back", "Leg"],
    correctAnswer: 0
  },
  {
    id: 403,
    question: "Which enzyme breaks down carbohydrates?",
    choices: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
    correctAnswer: 0
  },
  {
    id: 404,
    question: "What is the term for inflammation of the jejunum?",
    choices: ["Jejunitis", "Jejunoma", "Jejunectomy", "Jejunoscopy"],
    correctAnswer: 0
  },
  {
    id: 405,
    question: "The interossei muscles are located in the:",
    choices: ["Hand", "Foot", "Forearm", "Leg"],
    correctAnswer: 0
  },
  {
    id: 406,
    question: "Which hormone is produced by the placenta?",
    choices: ["Estrogen", "Progesterone", "hCG", "All of the above"],
    correctAnswer: 3
  }
];

console.log(`Total Surgical Procedures questions: ${surgicalProceduresQuestions.length}`);
