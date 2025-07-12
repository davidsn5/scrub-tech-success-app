export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the most common position for laparoscopic cholecystectomy?",
    choices: ["Supine", "Reverse Trendelenburg", "Trendelenburg", "Left lateral"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which trocar is typically placed first during laparoscopic surgery?",
    choices: ["5mm trocar", "12mm trocar", "Umbilical trocar", "Epigastric trocar"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is the standard insufflation pressure for laparoscopic procedures?",
    choices: ["10-12 mmHg", "12-15 mmHg", "15-18 mmHg", "18-20 mmHg"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which instrument is used to grasp and manipulate the gallbladder during laparoscopic cholecystectomy?",
    choices: ["Babcock forceps", "Allis clamp", "Grasping forceps", "Kocher clamp"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the critical view of safety in laparoscopic cholecystectomy?",
    choices: ["Clear view of hepatocystic triangle", "Identification of two arteries", "Visualization of common bile duct", "Clear view of liver bed"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Which suture is commonly used for port site closure?",
    choices: ["2-0 Vicryl", "0 PDS", "3-0 Monocryl", "2-0 Prolene"],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "What is the most common complication of laparoscopic surgery?",
    choices: ["Bleeding", "Infection", "Gas embolism", "Trocar injury"],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "Which gas is most commonly used for insufflation?",
    choices: ["Nitrogen", "Argon", "Carbon dioxide", "Oxygen"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What is the proper angle for trocar insertion?",
    choices: ["45 degrees", "60 degrees", "90 degrees", "30 degrees"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which structure must be identified before clipping the cystic artery?",
    choices: ["Common hepatic artery", "Right hepatic artery", "Hepatocystic triangle", "Common bile duct"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "What is the standard incision for open appendectomy?",
    choices: ["McBurney's incision", "Pfannenstiel incision", "Midline incision", "Kocher incision"],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Which layer is incised first in McBurney's incision?",
    choices: ["Skin", "Subcutaneous tissue", "External oblique", "Internal oblique"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "What is the most important landmark for appendectomy?",
    choices: ["Cecum", "Ileocecal valve", "Taeniae coli", "Terminal ileum"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Which suture technique is used for appendiceal stump closure?",
    choices: ["Simple interrupted", "Purse string", "Running", "Mattress"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "What is the most common position for appendectomy?",
    choices: ["Supine", "Left lateral", "Trendelenburg", "Reverse Trendelenburg"],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "Which instrument is used to crush the appendiceal base?",
    choices: ["Kelly clamp", "Kocher clamp", "Babcock forceps", "Allis clamp"],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "What type of suture is used for the appendiceal artery?",
    choices: ["Absorbable", "Non-absorbable", "Either", "Clips only"],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Which approach is preferred for complicated appendicitis?",
    choices: ["Open", "Laparoscopic", "Either", "Depends on surgeon preference"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "What is the most common complication of appendectomy?",
    choices: ["Bleeding", "Infection", "Bowel obstruction", "Hernia"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which antibiotic is commonly used for appendicitis prophylaxis?",
    choices: ["Cefazolin", "Cefoxitin", "Gentamicin", "Vancomycin"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "What is the most common type of hernia repair?",
    choices: ["Bassini", "Shouldice", "Lichtenstein", "McVay"],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "Which mesh is most commonly used for inguinal hernia repair?",
    choices: ["Polypropylene", "Polyester", "PTFE", "Composite"],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "What is the most important anatomical landmark in inguinal hernia repair?",
    choices: ["Inguinal ligament", "Cooper's ligament", "Conjoint tendon", "Lateral femoral cutaneous nerve"],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "Which nerve should be avoided during inguinal hernia repair?",
    choices: ["Femoral nerve", "Obturator nerve", "Lateral femoral cutaneous nerve", "Genitofemoral nerve"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "What is the triangle of pain in laparoscopic hernia repair?",
    choices: ["Area containing lateral femoral cutaneous nerve", "Area containing femoral vessels", "Area containing obturator nerve", "Area containing genitofemoral nerve"],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "Which laparoscopic technique is preferred for bilateral inguinal hernias?",
    choices: ["TEP", "TAPP", "Either", "Open repair"],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "What size mesh is typically used for inguinal hernia repair?",
    choices: ["6x4 inches", "8x6 inches", "10x8 inches", "12x10 inches"],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "Which suture is used for mesh fixation in laparoscopic hernia repair?",
    choices: ["Absorbable tacks", "Non-absorbable tacks", "Sutures", "Fibrin glue"],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "What is the most common complication of mesh hernia repair?",
    choices: ["Infection", "Chronic pain", "Recurrence", "Seroma"],
    correctAnswer: 3
  },
  {
    id: 30,
    question: "Which approach is preferred for recurrent inguinal hernia?",
    choices: ["Same approach as primary", "Different approach", "Always open", "Always laparoscopic"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "What is the most common indication for thyroidectomy?",
    choices: ["Hyperthyroidism", "Goiter", "Cancer", "Nodules"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "Which nerve is most at risk during thyroidectomy?",
    choices: ["Vagus nerve", "Phrenic nerve", "Recurrent laryngeal nerve", "Hypoglossal nerve"],
    correctAnswer: 2
  },
  {
    id: 33,
    question: "What is the most serious complication of thyroidectomy?",
    choices: ["Bleeding", "Hypocalcemia", "Voice changes", "Infection"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Which position is used for thyroidectomy?",
    choices: ["Supine with neck extension", "Prone", "Lateral", "Sitting"],
    correctAnswer: 0
  },
  {
    id: 35,
    question: "What is the Berry ligament?",
    choices: ["Lateral thyroid ligament", "Posterior thyroid ligament", "Superior thyroid ligament", "Inferior thyroid ligament"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which artery supplies the superior pole of the thyroid?",
    choices: ["Superior thyroid artery", "Inferior thyroid artery", "Thyroidea ima", "Common carotid artery"],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "What is the most common type of thyroid cancer?",
    choices: ["Follicular", "Papillary", "Medullary", "Anaplastic"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "Which imaging study is most useful for thyroid surgery planning?",
    choices: ["CT scan", "MRI", "Ultrasound", "Nuclear medicine scan"],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "What is the minimum margin for thyroid cancer resection?",
    choices: ["1 mm", "2 mm", "5 mm", "1 cm"],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "Which suture is used for thyroid capsule closure?",
    choices: ["2-0 Vicryl", "3-0 Vicryl", "4-0 Vicryl", "2-0 Silk"],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "What is the most common breast surgery procedure?",
    choices: ["Lumpectomy", "Mastectomy", "Biopsy", "Reduction"],
    correctAnswer: 2
  },
  {
    id: 42,
    question: "Which incision is preferred for breast biopsy?",
    choices: ["Radial", "Circumareolar", "Curvilinear", "Transverse"],
    correctAnswer: 2
  },
  {
    id: 43,
    question: "What is the most important margin in breast cancer surgery?",
    choices: ["1 mm", "2 mm", "5 mm", "1 cm"],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "Which technique is used for sentinel lymph node biopsy?",
    choices: ["Blue dye only", "Radiotracer only", "Both blue dye and radiotracer", "Neither"],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "What is the most common complication of mastectomy?",
    choices: ["Bleeding", "Infection", "Seroma", "Lymphedema"],
    correctAnswer: 2
  },
  {
    id: 46,
    question: "Which position is used for breast surgery?",
    choices: ["Supine", "Prone", "Lateral", "Semi-sitting"],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "What is the most common type of breast reconstruction?",
    choices: ["Implant", "Autologous tissue", "Combination", "None"],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "Which drain is commonly used after mastectomy?",
    choices: ["Penrose", "Jackson-Pratt", "Blake", "Chest tube"],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "What is the most important factor in breast cancer prognosis?",
    choices: ["Tumor size", "Lymph node status", "Grade", "Hormone receptor status"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Which imaging study is most sensitive for breast cancer detection?",
    choices: ["Mammography", "Ultrasound", "MRI", "CT scan"],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "What is the most common indication for colon resection?",
    choices: ["Cancer", "Diverticulitis", "IBD", "Obstruction"],
    correctAnswer: 0
  },
  {
    id: 52,
    question: "Which anastomotic technique is preferred for colon surgery?",
    choices: ["Hand-sewn", "Stapled", "Either", "Depends on location"],
    correctAnswer: 2
  },
  {
    id: 53,
    question: "What is the most serious complication of colon surgery?",
    choices: ["Bleeding", "Infection", "Anastomotic leak", "Obstruction"],
    correctAnswer: 2
  },
  {
    id: 54,
    question: "Which position is used for sigmoid colectomy?",
    choices: ["Supine", "Lithotomy", "Left lateral", "Prone"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "What is the minimum margin for colon cancer resection?",
    choices: ["2 cm", "5 cm", "10 cm", "15 cm"],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "Which vessel is the primary blood supply to the sigmoid colon?",
    choices: ["Superior mesenteric artery", "Inferior mesenteric artery", "Internal iliac artery", "Middle colic artery"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "What is the most common type of colostomy?",
    choices: ["End colostomy", "Loop colostomy", "Double-barrel colostomy", "Mucous fistula"],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "Which approach is preferred for rectal cancer surgery?",
    choices: ["Open", "Laparoscopic", "Robotic", "All are acceptable"],
    correctAnswer: 3
  },
  {
    id: 59,
    question: "What is the most important plane in rectal cancer surgery?",
    choices: ["Mesorectal plane", "Presacral plane", "Denonvilliers fascia", "Waldeyer fascia"],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "Which imaging study is most useful for rectal cancer staging?",
    choices: ["CT scan", "MRI", "PET scan", "Ultrasound"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "What is the most common gastric surgery procedure?",
    choices: ["Gastrectomy", "Gastrojejunostomy", "Pyloroplasty", "Fundoplication"],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "Which approach is preferred for gastric cancer surgery?",
    choices: ["Open", "Laparoscopic", "Robotic", "Depends on stage"],
    correctAnswer: 3
  },
  {
    id: 63,
    question: "What is the most common reconstruction after gastrectomy?",
    choices: ["Billroth I", "Billroth II", "Roux-en-Y", "Jejunal interposition"],
    correctAnswer: 2
  },
  {
    id: 64,
    question: "Which lymph node station is most important in gastric cancer?",
    choices: ["Perigastric", "Celiac", "Hepatic", "Splenic"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "What is the most serious complication of gastrectomy?",
    choices: ["Bleeding", "Anastomotic leak", "Dumping syndrome", "Nutritional deficiency"],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "Which position is used for gastric surgery?",
    choices: ["Supine", "Reverse Trendelenburg", "Left lateral", "Prone"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "What is the most common indication for splenectomy?",
    choices: ["Trauma", "Hematologic disorders", "Malignancy", "Cysts"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "Which approach is preferred for elective splenectomy?",
    choices: ["Open", "Laparoscopic", "Hand-assisted", "Robotic"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "What is the most important consideration after splenectomy?",
    choices: ["Bleeding", "Infection", "Thrombosis", "Pain"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "Which vaccines are required before elective splenectomy?",
    choices: ["Pneumococcal only", "Meningococcal only", "Haemophilus only", "All three"],
    correctAnswer: 3
  },
  {
    id: 71,
    question: "What is the most common pancreatic surgery?",
    choices: ["Pancreaticoduodenectomy", "Distal pancreatectomy", "Pancreaticojejunostomy", "Enucleation"],
    correctAnswer: 0
  },
  {
    id: 72,
    question: "Which reconstruction is performed after pancreaticoduodenectomy?",
    choices: ["Pancreaticojejunostomy only", "Hepaticojejunostomy only", "Gastrojejunostomy only", "All three"],
    correctAnswer: 3
  },
  {
    id: 73,
    question: "What is the most serious complication of pancreaticoduodenectomy?",
    choices: ["Bleeding", "Pancreatic fistula", "Delayed gastric emptying", "Infection"],
    correctAnswer: 1
  },
  {
    id: 74,
    question: "Which imaging study is most useful for pancreatic surgery planning?",
    choices: ["CT scan", "MRI", "ERCP", "All are important"],
    correctAnswer: 3
  },
  {
    id: 75,
    question: "What is the most common indication for liver resection?",
    choices: ["Hepatocellular carcinoma", "Metastases", "Benign tumors", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 76,
    question: "Which technique is used to control bleeding during liver resection?",
    choices: ["Pringle maneuver", "Vascular clamps", "Argon beam coagulator", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 77,
    question: "What is the most important factor in liver resection?",
    choices: ["Tumor size", "Liver function", "Patient age", "Surgical approach"],
    correctAnswer: 1
  },
  {
    id: 78,
    question: "Which imaging study is most useful for liver surgery planning?",
    choices: ["CT scan", "MRI", "Ultrasound", "All are important"],
    correctAnswer: 3
  },
  {
    id: 79,
    question: "What is the most common complication of liver resection?",
    choices: ["Bleeding", "Bile leak", "Liver failure", "Infection"],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "Which approach is preferred for liver resection?",
    choices: ["Open", "Laparoscopic", "Robotic", "Depends on location"],
    correctAnswer: 3
  },
  {
    id: 81,
    question: "What is the most common cardiac surgery procedure?",
    choices: ["CABG", "Valve replacement", "ASD repair", "Pacemaker insertion"],
    correctAnswer: 0
  },
  {
    id: 82,
    question: "Which approach is used for CABG?",
    choices: ["Median sternotomy", "Left thoracotomy", "Right thoracotomy", "Minimally invasive"],
    correctAnswer: 0
  },
  {
    id: 83,
    question: "What is the most commonly used conduit for CABG?",
    choices: ["Saphenous vein", "Internal mammary artery", "Radial artery", "Gastroepiploic artery"],
    correctAnswer: 1
  },
  {
    id: 84,
    question: "Which valve is most commonly replaced?",
    choices: ["Aortic", "Mitral", "Tricuspid", "Pulmonary"],
    correctAnswer: 0
  },
  {
    id: 85,
    question: "What is the most serious complication of cardiac surgery?",
    choices: ["Bleeding", "Stroke", "Infection", "Arrhythmia"],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "Which position is used for cardiac surgery?",
    choices: ["Supine", "Prone", "Lateral", "Semi-sitting"],
    correctAnswer: 0
  },
  {
    id: 87,
    question: "What is the most common thoracic surgery procedure?",
    choices: ["Lobectomy", "Wedge resection", "Pneumonectomy", "Thoracotomy"],
    correctAnswer: 1
  },
  {
    id: 88,
    question: "Which approach is preferred for lung cancer surgery?",
    choices: ["Open thoracotomy", "VATS", "Robotic", "Depends on stage"],
    correctAnswer: 3
  },
  {
    id: 89,
    question: "What is the most serious complication of lung surgery?",
    choices: ["Bleeding", "Air leak", "Pneumonia", "Respiratory failure"],
    correctAnswer: 3
  },
  {
    id: 90,
    question: "Which position is used for thoracic surgery?",
    choices: ["Supine", "Prone", "Lateral", "Semi-sitting"],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "What is the most common vascular surgery procedure?",
    choices: ["Carotid endarterectomy", "Aortic aneurysm repair", "Peripheral bypass", "AV fistula creation"],
    correctAnswer: 3
  },
  {
    id: 92,
    question: "Which approach is preferred for AAA repair?",
    choices: ["Open", "Endovascular", "Hybrid", "Depends on anatomy"],
    correctAnswer: 3
  },
  {
    id: 93,
    question: "What is the most serious complication of aortic surgery?",
    choices: ["Bleeding", "Spinal cord ischemia", "Renal failure", "MI"],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "Which graft material is preferred for vascular surgery?",
    choices: ["Dacron", "PTFE", "Saphenous vein", "Depends on location"],
    correctAnswer: 3
  },
  {
    id: 95,
    question: "What is the most common neurosurgical procedure?",
    choices: ["Craniotomy", "Laminectomy", "Burr holes", "Shunt placement"],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "Which position is used for posterior spine surgery?",
    choices: ["Supine", "Prone", "Lateral", "Sitting"],
    correctAnswer: 1
  },
  {
    id: 97,
    question: "What is the most serious complication of spine surgery?",
    choices: ["Bleeding", "Infection", "Nerve injury", "CSF leak"],
    correctAnswer: 2
  },
  {
    id: 98,
    question: "Which imaging is used for spine surgery navigation?",
    choices: ["Fluoroscopy", "CT", "MRI", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 99,
    question: "What is the most common orthopedic surgery?",
    choices: ["Hip replacement", "Knee replacement", "Arthroscopy", "Fracture repair"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "Which approach is used for total hip replacement?",
    choices: ["Anterior", "Posterior", "Lateral", "All are used"],
    correctAnswer: 3
  },
  {
    id: 101,
    question: "What is the most common complication of joint replacement?",
    choices: ["Infection", "Dislocation", "Loosening", "Wear"],
    correctAnswer: 0
  },
  {
    id: 102,
    question: "Which cement is used for joint replacement?",
    choices: ["PMMA", "Calcium phosphate", "Hydroxyapatite", "None"],
    correctAnswer: 0
  },
  {
    id: 103,
    question: "What is the most common urological procedure?",
    choices: ["Cystoscopy", "TURP", "Nephrectomy", "Prostatectomy"],
    correctAnswer: 0
  },
  {
    id: 104,
    question: "Which approach is preferred for radical prostatectomy?",
    choices: ["Open", "Laparoscopic", "Robotic", "All are acceptable"],
    correctAnswer: 2
  },
  {
    id: 105,
    question: "What is the most serious complication of prostatectomy?",
    choices: ["Bleeding", "Incontinence", "Impotence", "Stricture"],
    correctAnswer: 1
  },
  {
    id: 106,
    question: "Which position is used for urological procedures?",
    choices: ["Supine", "Lithotomy", "Prone", "Lateral"],
    correctAnswer: 1
  },
  {
    id: 107,
    question: "What is the most common gynecological surgery?",
    choices: ["Hysterectomy", "Oophorectomy", "Myomectomy", "D&C"],
    correctAnswer: 3
  },
  {
    id: 108,
    question: "Which approach is preferred for hysterectomy?",
    choices: ["Abdominal", "Vaginal", "Laparoscopic", "Depends on indication"],
    correctAnswer: 3
  },
  {
    id: 109,
    question: "What is the most serious complication of hysterectomy?",
    choices: ["Bleeding", "Infection", "Ureteral injury", "Bowel injury"],
    correctAnswer: 2
  },
  {
    id: 110,
    question: "Which position is used for gynecological surgery?",
    choices: ["Supine", "Lithotomy", "Trendelenburg", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 111,
    question: "What is the most common plastic surgery procedure?",
    choices: ["Breast augmentation", "Rhinoplasty", "Liposuction", "Facelift"],
    correctAnswer: 2
  },
  {
    id: 112,
    question: "Which flap is most commonly used for reconstruction?",
    choices: ["Random flap", "Axial flap", "Free flap", "Muscle flap"],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "What is the most important factor in flap survival?",
    choices: ["Size", "Blood supply", "Location", "Thickness"],
    correctAnswer: 1
  },
  {
    id: 114,
    question: "Which suture is preferred for plastic surgery?",
    choices: ["Absorbable", "Non-absorbable", "Monofilament", "Depends on location"],
    correctAnswer: 3
  },
  {
    id: 115,
    question: "What is the most common pediatric surgery?",
    choices: ["Appendectomy", "Hernia repair", "Circumcision", "Tonsillectomy"],
    correctAnswer: 2
  },
  {
    id: 116,
    question: "Which anesthesia is preferred for pediatric surgery?",
    choices: ["General", "Regional", "Local", "Depends on procedure"],
    correctAnswer: 3
  },
  {
    id: 117,
    question: "What is the most important consideration in pediatric surgery?",
    choices: ["Size", "Age", "Development", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 118,
    question: "Which position is safest for pediatric patients?",
    choices: ["Supine", "Prone", "Lateral", "Depends on procedure"],
    correctAnswer: 3
  },
  {
    id: 119,
    question: "What is the most common emergency surgery?",
    choices: ["Appendectomy", "Cholecystectomy", "Hernia repair", "Trauma surgery"],
    correctAnswer: 3
  },
  {
    id: 120,
    question: "Which principle is most important in trauma surgery?",
    choices: ["Speed", "Accuracy", "Damage control", "All are important"],
    correctAnswer: 3
  },
  {
    id: 121,
    question: "What is the most common cause of surgical site infection?",
    choices: ["Staphylococcus aureus", "E. coli", "Enterococcus", "Pseudomonas"],
    correctAnswer: 0
  },
  {
    id: 122,
    question: "Which factor most reduces surgical site infection?",
    choices: ["Antibiotics", "Sterile technique", "Skin preparation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 123,
    question: "What is the most effective skin preparation?",
    choices: ["Iodine", "Chlorhexidine", "Alcohol", "Combination"],
    correctAnswer: 3
  },
  {
    id: 124,
    question: "Which antibiotic is most commonly used for prophylaxis?",
    choices: ["Cefazolin", "Cefoxitin", "Vancomycin", "Depends on procedure"],
    correctAnswer: 3
  },
  {
    id: 125,
    question: "What is the optimal timing for antibiotic prophylaxis?",
    choices: ["1 hour before incision", "30 minutes before incision", "At induction", "After incision"],
    correctAnswer: 1
  },
  {
    id: 126,
    question: "Which dressing is best for surgical wounds?",
    choices: ["Dry gauze", "Occlusive", "Semi-occlusive", "Depends on wound"],
    correctAnswer: 3
  },
  {
    id: 127,
    question: "What is the most important factor in wound healing?",
    choices: ["Age", "Nutrition", "Blood supply", "All are important"],
    correctAnswer: 3
  },
  {
    id: 128,
    question: "Which suture causes least tissue reaction?",
    choices: ["Silk", "Nylon", "Prolene", "PDS"],
    correctAnswer: 2
  },
  {
    id: 129,
    question: "What is the most common cause of wound dehiscence?",
    choices: ["Infection", "Poor technique", "Patient factors", "All contribute"],
    correctAnswer: 3
  },
  {
    id: 130,
    question: "Which closure technique is strongest?",
    choices: ["Simple interrupted", "Running", "Mattress", "Subcuticular"],
    correctAnswer: 2
  },
  {
    id: 131,
    question: "What is the most important principle of electrosurgery?",
    choices: ["Power setting", "Electrode type", "Patient grounding", "All are important"],
    correctAnswer: 3
  },
  {
    id: 132,
    question: "Which mode is used for cutting?",
    choices: ["Pure cut", "Blend", "Coagulation", "Depends on tissue"],
    correctAnswer: 0
  },
  {
    id: 133,
    question: "What is the most serious complication of electrosurgery?",
    choices: ["Burns", "Fire", "Interference", "All are serious"],
    correctAnswer: 3
  },
  {
    id: 134,
    question: "Which safety measure is most important with electrosurgery?",
    choices: ["Proper grounding", "Dry field", "Appropriate settings", "All are important"],
    correctAnswer: 3
  },
  {
    id: 135,
    question: "What is the most common laser used in surgery?",
    choices: ["CO2", "Nd:YAG", "Argon", "Diode"],
    correctAnswer: 0
  },
  {
    id: 136,
    question: "Which safety measure is most important with lasers?",
    choices: ["Eye protection", "Fire prevention", "Proper settings", "All are important"],
    correctAnswer: 3
  },
  {
    id: 137,
    question: "What is the most important factor in instrument sterilization?",
    choices: ["Temperature", "Time", "Pressure", "All are important"],
    correctAnswer: 3
  },
  {
    id: 138,
    question: "Which sterilization method is most common?",
    choices: ["Steam", "ETO", "Plasma", "Radiation"],
    correctAnswer: 0
  },
  {
    id: 139,
    question: "What is the most important factor in surgical positioning?",
    choices: ["Comfort", "Access", "Safety", "All are important"],
    correctAnswer: 3
  },
  {
    id: 140,
    question: "Which complication is most common from positioning?",
    choices: ["Nerve injury", "Pressure sores", "Compartment syndrome", "All can occur"],
    correctAnswer: 3
  },
  {
    id: 141,
    question: "What is the most important aspect of surgical draping?",
    choices: ["Sterility", "Access", "Comfort", "All are important"],
    correctAnswer: 0
  },
  {
    id: 142,
    question: "Which drape material is most common?",
    choices: ["Cloth", "Paper", "Plastic", "Combination"],
    correctAnswer: 1
  },
  {
    id: 143,
    question: "What is the most important principle of aseptic technique?",
    choices: ["Sterile field", "Hand hygiene", "Gowning and gloving", "All are important"],
    correctAnswer: 3
  },
  {
    id: 144,
    question: "Which breach of sterility is most serious?",
    choices: ["Contaminated instrument", "Torn glove", "Contaminated gown", "All are serious"],
    correctAnswer: 3
  },
  {
    id: 145,
    question: "What is the most important factor in surgical team communication?",
    choices: ["Clarity", "Timeliness", "Completeness", "All are important"],
    correctAnswer: 3
  },
  {
    id: 146,
    question: "Which communication tool is most effective?",
    choices: ["SBAR", "Checklists", "Time-outs", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 147,
    question: "What is the most important aspect of surgical safety?",
    choices: ["Checklists", "Communication", "Training", "All are important"],
    correctAnswer: 3
  },
  {
    id: 148,
    question: "Which safety measure is most effective?",
    choices: ["Time-out", "Marking", "Counting", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 149,
    question: "What is the most common cause of wrong-site surgery?",
    choices: ["Communication failure", "Documentation error", "Process failure", "All contribute"],
    correctAnswer: 3
  },
  {
    id: 150,
    question: "Which prevention strategy is most effective?",
    choices: ["Marking", "Time-out", "Verification", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 151,
    question: "What is the most important factor in surgical quality?",
    choices: ["Technique", "Outcomes", "Safety", "All are important"],
    correctAnswer: 3
  },
  {
    id: 152,
    question: "Which quality measure is most important?",
    choices: ["Mortality", "Morbidity", "Patient satisfaction", "All are important"],
    correctAnswer: 3
  },
  {
    id: 153,
    question: "What is the most effective quality improvement method?",
    choices: ["Data collection", "Process improvement", "Education", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 154,
    question: "Which factor most affects surgical outcomes?",
    choices: ["Surgeon skill", "Team performance", "System factors", "All affect outcomes"],
    correctAnswer: 3
  },
  {
    id: 155,
    question: "What is the most important aspect of surgical education?",
    choices: ["Knowledge", "Skills", "Attitudes", "All are important"],
    correctAnswer: 3
  },
  {
    id: 156,
    question: "Which teaching method is most effective?",
    choices: ["Didactic", "Simulation", "Clinical", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 157,
    question: "What is the most important factor in surgical innovation?",
    choices: ["Technology", "Evidence", "Safety", "All are important"],
    correctAnswer: 3
  },
  {
    id: 158,
    question: "Which innovation has most improved surgery?",
    choices: ["Minimally invasive techniques", "Robotics", "Imaging", "All have improved surgery"],
    correctAnswer: 3
  },
  {
    id: 159,
    question: "What is the most important consideration in surgical ethics?",
    choices: ["Autonomy", "Beneficence", "Justice", "All are important"],
    correctAnswer: 3
  },
  {
    id: 160,
    question: "Which ethical principle is most fundamental?",
    choices: ["Do no harm", "Respect persons", "Justice", "All are fundamental"],
    correctAnswer: 3
  },
  {
    id: 161,
    question: "What is the most common minimally invasive approach?",
    choices: ["Laparoscopy", "Thoracoscopy", "Arthroscopy", "All are common"],
    correctAnswer: 0
  },
  {
    id: 162,
    question: "Which benefit is most significant with minimally invasive surgery?",
    choices: ["Less pain", "Faster recovery", "Better cosmesis", "All are significant"],
    correctAnswer: 3
  },
  {
    id: 163,
    question: "What is the most important limitation of minimally invasive surgery?",
    choices: ["Learning curve", "Equipment cost", "Limited applications", "All are limitations"],
    correctAnswer: 3
  },
  {
    id: 164,
    question: "Which skill is most important for minimally invasive surgery?",
    choices: ["Hand-eye coordination", "Spatial awareness", "Technical skill", "All are important"],
    correctAnswer: 3
  },
  {
    id: 165,
    question: "What is the most significant advantage of robotic surgery?",
    choices: ["Precision", "Dexterity", "Visualization", "All are advantages"],
    correctAnswer: 3
  },
  {
    id: 166,
    question: "Which limitation is most significant with robotic surgery?",
    choices: ["Cost", "Learning curve", "Limited applications", "All are limitations"],
    correctAnswer: 3
  },
  {
    id: 167,
    question: "What is the most important factor in surgical outcomes research?",
    choices: ["Study design", "Data quality", "Statistical analysis", "All are important"],
    correctAnswer: 3
  },
  {
    id: 168,
    question: "Which outcome measure is most important?",
    choices: ["Mortality", "Morbidity", "Quality of life", "All are important"],
    correctAnswer: 3
  },
  {
    id: 169,
    question: "What is the most effective way to improve surgical care?",
    choices: ["Evidence-based practice", "Quality improvement", "Education", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 170,
    question: "Which factor most influences surgical decision-making?",
    choices: ["Evidence", "Experience", "Patient preference", "All influence decisions"],
    correctAnswer: 3
  },
  {
    id: 171,
    question: "What is the most important aspect of perioperative care?",
    choices: ["Preoperative preparation", "Intraoperative management", "Postoperative care", "All are important"],
    correctAnswer: 3
  },
  {
    id: 172,
    question: "Which perioperative factor most affects outcomes?",
    choices: ["Patient selection", "Surgical technique", "Postoperative care", "All affect outcomes"],
    correctAnswer: 3
  },
  {
    id: 173,
    question: "What is the most effective perioperative protocol?",
    choices: ["Enhanced recovery", "Fast-track", "Multimodal", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 174,
    question: "Which intervention most reduces complications?",
    choices: ["Prophylaxis", "Monitoring", "Early intervention", "All reduce complications"],
    correctAnswer: 3
  },
  {
    id: 175,
    question: "What is the most important factor in surgical team performance?",
    choices: ["Communication", "Coordination", "Competence", "All are important"],
    correctAnswer: 3
  },
  {
    id: 176,
    question: "Which team factor most affects outcomes?",
    choices: ["Experience", "Training", "Teamwork", "All affect outcomes"],
    correctAnswer: 3
  },
  {
    id: 177,
    question: "What is the most effective team intervention?",
    choices: ["Training", "Simulation", "Debriefing", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 178,
    question: "Which leadership style is most effective in surgery?",
    choices: ["Authoritarian", "Democratic", "Situational", "Depends on situation"],
    correctAnswer: 3
  },
  {
    id: 179,
    question: "What is the most important aspect of surgical systems?",
    choices: ["Efficiency", "Safety", "Quality", "All are important"],
    correctAnswer: 3
  },
  {
    id: 180,
    question: "Which system factor most affects care?",
    choices: ["Resources", "Processes", "Culture", "All affect care"],
    correctAnswer: 3
  },
  {
    id: 181,
    question: "What is the most effective system improvement?",
    choices: ["Standardization", "Automation", "Integration", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 182,
    question: "Which technology most improves surgical systems?",
    choices: ["Electronic records", "Decision support", "Communication systems", "All improve systems"],
    correctAnswer: 3
  },
  {
    id: 183,
    question: "What is the most important consideration in surgical economics?",
    choices: ["Cost", "Value", "Outcomes", "All are important"],
    correctAnswer: 3
  },
  {
    id: 184,
    question: "Which economic factor most affects surgery?",
    choices: ["Reimbursement", "Competition", "Regulation", "All affect surgery"],
    correctAnswer: 3
  },
  {
    id: 185,
    question: "What is the most effective cost reduction strategy?",
    choices: ["Efficiency", "Prevention", "Value-based care", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 186,
    question: "Which value measure is most important?",
    choices: ["Quality", "Cost", "Outcomes", "All are important"],
    correctAnswer: 3
  },
  {
    id: 187,
    question: "What is the most important aspect of surgical policy?",
    choices: ["Access", "Quality", "Safety", "All are important"],
    correctAnswer: 3
  },
  {
    id: 188,
    question: "Which policy intervention is most effective?",
    choices: ["Regulation", "Incentives", "Standards", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 189,
    question: "What is the most important global surgical issue?",
    choices: ["Access", "Quality", "Safety", "All are important"],
    correctAnswer: 3
  },
  {
    id: 190,
    question: "Which intervention most improves global surgery?",
    choices: ["Training", "Infrastructure", "Technology", "All are needed"],
    correctAnswer: 3
  },
  {
    id: 191,
    question: "What is the most important future direction in surgery?",
    choices: ["Technology", "Personalization", "Prevention", "All are important"],
    correctAnswer: 3
  },
  {
    id: 192,
    question: "Which technology will most impact surgery?",
    choices: ["Artificial intelligence", "Nanotechnology", "Gene therapy", "All will impact surgery"],
    correctAnswer: 3
  },
  {
    id: 193,
    question: "What is the most important challenge facing surgery?",
    choices: ["Aging population", "Healthcare costs", "Technology adoption", "All are challenges"],
    correctAnswer: 3
  },
  {
    id: 194,
    question: "Which solution is most promising?",
    choices: ["Innovation", "Collaboration", "Integration", "All are promising"],
    correctAnswer: 3
  },
  {
    id: 195,
    question: "What is the most important principle of surgical practice?",
    choices: ["Excellence", "Safety", "Compassion", "All are important"],
    correctAnswer: 3
  },
  {
    id: 196,
    question: "Which value is most fundamental to surgery?",
    choices: ["Healing", "Service", "Integrity", "All are fundamental"],
    correctAnswer: 3
  },
  {
    id: 197,
    question: "What is the most important goal of surgical care?",
    choices: ["Cure", "Care", "Comfort", "All are important"],
    correctAnswer: 3
  },
  {
    id: 198,
    question: "Which outcome is most meaningful?",
    choices: ["Survival", "Function", "Quality of life", "All are meaningful"],
    correctAnswer: 3
  },
  {
    id: 199,
    question: "What is the most important measure of surgical success?",
    choices: ["Technical success", "Clinical success", "Patient satisfaction", "All measure success"],
    correctAnswer: 3
  },
  {
    id: 200,
    question: "Which factor most defines surgical excellence?",
    choices: ["Skill", "Outcomes", "Character", "All define excellence"],
    correctAnswer: 3
  },
  {
    id: 201,
    question: "What is the most common indication for emergency laparotomy?",
    choices: ["Bowel obstruction", "Perforation", "Bleeding", "All are common"],
    correctAnswer: 3
  },
  {
    id: 202,
    question: "Which diagnostic tool is most useful in acute abdomen?",
    choices: ["Physical exam", "CT scan", "Laboratory tests", "All are useful"],
    correctAnswer: 3
  },
  {
    id: 203,
    question: "What is the most important principle in damage control surgery?",
    choices: ["Speed", "Hemostasis", "Contamination control", "All are important"],
    correctAnswer: 3
  },
  {
    id: 204,
    question: "Which resuscitation strategy is preferred in trauma?",
    choices: ["Crystalloid", "Colloid", "Blood products", "Balanced approach"],
    correctAnswer: 3
  },
  {
    id: 205,
    question: "What is the most common cause of postoperative ileus?",
    choices: ["Anesthesia", "Opioids", "Manipulation", "All contribute"],
    correctAnswer: 3
  },
  {
    id: 206,
    question: "Which intervention most reduces ileus?",
    choices: ["Early feeding", "Mobilization", "Prokinetics", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 207,
    question: "What is the most effective DVT prophylaxis?",
    choices: ["Mechanical", "Pharmacologic", "Combined", "Depends on risk"],
    correctAnswer: 3
  },
  {
    id: 208,
    question: "Which factor most increases VTE risk?",
    choices: ["Surgery type", "Patient factors", "Duration", "All increase risk"],
    correctAnswer: 3
  },
  {
    id: 209,
    question: "What is the most common postoperative pulmonary complication?",
    choices: ["Pneumonia", "Atelectasis", "PE", "Respiratory failure"],
    correctAnswer: 1
  },
  {
    id: 210,
    question: "Which intervention most reduces pulmonary complications?",
    choices: ["Incentive spirometry", "Early mobilization", "Pain control", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 211,
    question: "What is the most important factor in surgical site preparation?",
    choices: ["Antiseptic choice", "Application technique", "Contact time", "All are important"],
    correctAnswer: 3
  },
  {
    id: 212,
    question: "Which antiseptic is most effective?",
    choices: ["Iodine", "Chlorhexidine", "Alcohol", "Combination products"],
    correctAnswer: 3
  },
  {
    id: 213,
    question: "What is the most effective hair removal method?",
    choices: ["Shaving", "Clipping", "Depilatory", "No removal"],
    correctAnswer: 1
  },
  {
    id: 214,
    question: "Which timing is optimal for hair removal?",
    choices: ["Night before", "Morning of surgery", "Just before surgery", "Depends on method"],
    correctAnswer: 2
  },
  {
    id: 215,
    question: "What is the most important aspect of surgical hand hygiene?",
    choices: ["Duration", "Technique", "Agent", "All are important"],
    correctAnswer: 3
  },
  {
    id: 216,
    question: "Which hand hygiene method is preferred?",
    choices: ["Traditional scrub", "Waterless scrub", "Either", "Depends on preference"],
    correctAnswer: 2
  },
  {
    id: 217,
    question: "What is the most critical aspect of gowning and gloving?",
    choices: ["Sterile technique", "Proper fit", "Material quality", "All are critical"],
    correctAnswer: 3
  },
  {
    id: 218,
    question: "Which gloving technique is safest?",
    choices: ["Open", "Closed", "Assisted", "Depends on situation"],
    correctAnswer: 1
  },
  {
    id: 219,
    question: "What is the most important principle of instrument handling?",
    choices: ["Sterility", "Safety", "Efficiency", "All are important"],
    correctAnswer: 3
  },
  {
    id: 220,
    question: "Which instrument passing technique is safest?",
    choices: ["Hand-to-hand", "Neutral zone", "Verbal announcement", "All are safe"],
    correctAnswer: 1
  },
  {
    id: 221,
    question: "What is the most important aspect of specimen handling?",
    choices: ["Identification", "Preservation", "Transport", "All are important"],
    correctAnswer: 3
  },
  {
    id: 222,
    question: "Which specimen container is most appropriate?",
    choices: ["Formalin", "Saline", "Dry", "Depends on specimen"],
    correctAnswer: 3
  },
  {
    id: 223,
    question: "What is the most critical aspect of frozen section?",
    choices: ["Speed", "Accuracy", "Communication", "All are critical"],
    correctAnswer: 3
  },
  {
    id: 224,
    question: "Which factor most affects frozen section quality?",
    choices: ["Specimen handling", "Processing technique", "Interpretation", "All affect quality"],
    correctAnswer: 3
  },
  {
    id: 225,
    question: "What is the most important consideration in surgical pathology?",
    choices: ["Diagnosis", "Staging", "Margins", "All are important"],
    correctAnswer: 3
  },
  {
    id: 226,
    question: "Which pathology report element is most critical?",
    choices: ["Diagnosis", "Grade", "Stage", "All are critical"],
    correctAnswer: 3
  },
  {
    id: 227,
    question: "What is the most important aspect of surgical imaging?",
    choices: ["Quality", "Timing", "Interpretation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 228,
    question: "Which imaging modality is most versatile?",
    choices: ["X-ray", "CT", "MRI", "Ultrasound"],
    correctAnswer: 1
  },
  {
    id: 229,
    question: "What is the most important consideration in intraoperative imaging?",
    choices: ["Quality", "Speed", "Safety", "All are important"],
    correctAnswer: 3
  },
  {
    id: 230,
    question: "Which intraoperative imaging is most common?",
    choices: ["Fluoroscopy", "Ultrasound", "CT", "MRI"],
    correctAnswer: 0
  },
  {
    id: 231,
    question: "What is the most important aspect of surgical navigation?",
    choices: ["Accuracy", "Reliability", "Ease of use", "All are important"],
    correctAnswer: 3
  },
  {
    id: 232,
    question: "Which navigation system is most accurate?",
    choices: ["Optical", "Electromagnetic", "Mechanical", "All are accurate"],
    correctAnswer: 3
  },
  {
    id: 233,
    question: "What is the most important limitation of surgical navigation?",
    choices: ["Cost", "Complexity", "Accuracy", "All are limitations"],
    correctAnswer: 3
  },
  {
    id: 234,
    question: "Which specialty benefits most from navigation?",
    choices: ["Neurosurgery", "Orthopedics", "ENT", "All benefit"],
    correctAnswer: 3
  },
  {
    id: 235,
    question: "What is the most important aspect of surgical robotics?",
    choices: ["Precision", "Dexterity", "Visualization", "All are important"],
    correctAnswer: 3
  },
  {
    id: 236,
    question: "Which robotic system is most widely used?",
    choices: ["da Vinci", "Zeus", "AESOP", "Others"],
    correctAnswer: 0
  },
  {
    id: 237,
    question: "What is the most significant limitation of surgical robotics?",
    choices: ["Cost", "Learning curve", "Limited applications", "All are limitations"],
    correctAnswer: 3
  },
  {
    id: 238,
    question: "Which specialty has adopted robotics most widely?",
    choices: ["Urology", "Gynecology", "General surgery", "All have adopted"],
    correctAnswer: 0
  },
  {
    id: 239,
    question: "What is the most important future development in surgery?",
    choices: ["AI", "Nanotechnology", "Regenerative medicine", "All are important"],
    correctAnswer: 3
  },
  {
    id: 240,
    question: "Which AI application is most promising in surgery?",
    choices: ["Diagnosis", "Planning", "Guidance", "All are promising"],
    correctAnswer: 3
  },
  {
    id: 241,
    question: "What is the most important ethical consideration in surgical AI?",
    choices: ["Safety", "Accountability", "Privacy", "All are important"],
    correctAnswer: 3
  },
  {
    id: 242,
    question: "Which barrier is most significant for AI adoption?",
    choices: ["Technical", "Regulatory", "Cultural", "All are significant"],
    correctAnswer: 3
  },
  {
    id: 243,
    question: "What is the most important aspect of surgical simulation?",
    choices: ["Realism", "Feedback", "Assessment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 244,
    question: "Which simulation modality is most effective?",
    choices: ["Virtual reality", "Physical models", "Cadaveric", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 245,
    question: "What is the most important benefit of surgical simulation?",
    choices: ["Skill development", "Safety", "Standardization", "All are benefits"],
    correctAnswer: 3
  },
  {
    id: 246,
    question: "Which assessment method is most reliable in simulation?",
    choices: ["Objective metrics", "Expert evaluation", "Self-assessment", "All are reliable"],
    correctAnswer: 3
  },
  {
    id: 247,
    question: "What is the most important aspect of surgical training?",
    choices: ["Knowledge", "Skills", "Judgment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 248,
    question: "Which training method is most effective?",
    choices: ["Apprenticeship", "Simulation", "Didactic", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 249,
    question: "What is the most important competency for surgeons?",
    choices: ["Technical skill", "Clinical judgment", "Communication", "All are important"],
    correctAnswer: 3
  },
  {
    id: 250,
    question: "Which assessment method is most comprehensive?",
    choices: ["Written exams", "Practical exams", "Portfolio", "All are comprehensive"],
    correctAnswer: 3
  },
  {
    id: 251,
    question: "What is the most important aspect of surgical research?",
    choices: ["Methodology", "Ethics", "Translation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 252,
    question: "Which research design is most appropriate for surgical studies?",
    choices: ["RCT", "Cohort", "Case-control", "Depends on question"],
    correctAnswer: 3
  },
  {
    id: 253,
    question: "What is the most important challenge in surgical research?",
    choices: ["Methodology", "Ethics", "Funding", "All are challenges"],
    correctAnswer: 3
  },
  {
    id: 254,
    question: "Which outcome measure is most important in surgical research?",
    choices: ["Mortality", "Morbidity", "Quality of life", "All are important"],
    correctAnswer: 3
  },
  {
    id: 255,
    question: "What is the most important aspect of evidence-based surgery?",
    choices: ["Best evidence", "Clinical expertise", "Patient values", "All are important"],
    correctAnswer: 3
  },
  {
    id: 256,
    question: "Which evidence source is most reliable?",
    choices: ["Systematic reviews", "RCTs", "Cohort studies", "Depends on question"],
    correctAnswer: 3
  },
  {
    id: 257,
    question: "What is the most important barrier to evidence implementation?",
    choices: ["Quality", "Applicability", "Acceptance", "All are barriers"],
    correctAnswer: 3
  },
  {
    id: 258,
    question: "Which strategy is most effective for evidence implementation?",
    choices: ["Guidelines", "Education", "Incentives", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 259,
    question: "What is the most important aspect of surgical quality improvement?",
    choices: ["Measurement", "Analysis", "Intervention", "All are important"],
    correctAnswer: 3
  },
  {
    id: 260,
    question: "Which quality improvement method is most effective?",
    choices: ["PDSA", "Lean", "Six Sigma", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 261,
    question: "What is the most important quality indicator?",
    choices: ["Process", "Outcome", "Structure", "All are important"],
    correctAnswer: 3
  },
  {
    id: 262,
    question: "Which improvement strategy is most sustainable?",
    choices: ["Top-down", "Bottom-up", "Collaborative", "All can be sustainable"],
    correctAnswer: 3
  },
  {
    id: 263,
    question: "What is the most important aspect of surgical safety culture?",
    choices: ["Leadership", "Communication", "Learning", "All are important"],
    correctAnswer: 3
  },
  {
    id: 264,
    question: "Which safety intervention is most effective?",
    choices: ["Checklists", "Training", "Systems", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 265,
    question: "What is the most important safety outcome?",
    choices: ["Mortality", "Morbidity", "Near misses", "All are important"],
    correctAnswer: 3
  },
  {
    id: 266,
    question: "Which safety measure is most predictive?",
    choices: ["Leading indicators", "Lagging indicators", "Both", "Neither"],
    correctAnswer: 2
  },
  {
    id: 267,
    question: "What is the most important aspect of surgical leadership?",
    choices: ["Vision", "Communication", "Execution", "All are important"],
    correctAnswer: 3
  },
  {
    id: 268,
    question: "Which leadership style is most effective?",
    choices: ["Transformational", "Transactional", "Situational", "Depends on context"],
    correctAnswer: 3
  },
  {
    id: 269,
    question: "What is the most important leadership competency?",
    choices: ["Technical skill", "Emotional intelligence", "Strategic thinking", "All are important"],
    correctAnswer: 3
  },
  {
    id: 270,
    question: "Which leadership development method is most effective?",
    choices: ["Formal training", "Mentoring", "Experience", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 271,
    question: "What is the most important aspect of surgical teamwork?",
    choices: ["Communication", "Coordination", "Cooperation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 272,
    question: "Which team intervention is most effective?",
    choices: ["Training", "Simulation", "Debriefing", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 273,
    question: "What is the most important team outcome?",
    choices: ["Performance", "Safety", "Satisfaction", "All are important"],
    correctAnswer: 3
  },
  {
    id: 274,
    question: "Which team factor is most predictive of success?",
    choices: ["Composition", "Process", "Context", "All are predictive"],
    correctAnswer: 3
  },
  {
    id: 275,
    question: "What is the most important aspect of surgical communication?",
    choices: ["Clarity", "Timeliness", "Completeness", "All are important"],
    correctAnswer: 3
  },
  {
    id: 276,
    question: "Which communication tool is most effective?",
    choices: ["SBAR", "Checklists", "Briefings", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 277,
    question: "What is the most common communication failure?",
    choices: ["Incomplete", "Inaccurate", "Untimely", "All are common"],
    correctAnswer: 3
  },
  {
    id: 278,
    question: "Which communication intervention is most effective?",
    choices: ["Training", "Tools", "Culture change", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 279,
    question: "What is the most important aspect of surgical decision-making?",
    choices: ["Evidence", "Experience", "Judgment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 280,
    question: "Which decision-making model is most appropriate?",
    choices: ["Rational", "Intuitive", "Shared", "Depends on situation"],
    correctAnswer: 3
  },
  {
    id: 281,
    question: "What is the most common decision-making error?",
    choices: ["Cognitive bias", "Information overload", "Time pressure", "All are common"],
    correctAnswer: 3
  },
  {
    id: 282,
    question: "Which decision support tool is most helpful?",
    choices: ["Guidelines", "Algorithms", "AI", "All are helpful"],
    correctAnswer: 3
  },
  {
    id: 283,
    question: "What is the most important aspect of surgical professionalism?",
    choices: ["Competence", "Integrity", "Service", "All are important"],
    correctAnswer: 3
  },
  {
    id: 284,
    question: "Which professional behavior is most important?",
    choices: ["Honesty", "Respect", "Responsibility", "All are important"],
    correctAnswer: 3
  },
  {
    id: 285,
    question: "What is the most common professionalism issue?",
    choices: ["Communication", "Behavior", "Competence", "All are issues"],
    correctAnswer: 3
  },
  {
    id: 286,
    question: "Which professionalism intervention is most effective?",
    choices: ["Education", "Mentoring", "Assessment", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 287,
    question: "What is the most important aspect of surgical wellness?",
    choices: ["Physical health", "Mental health", "Work-life balance", "All are important"],
    correctAnswer: 3
  },
  {
    id: 288,
    question: "Which wellness intervention is most effective?",
    choices: ["Individual", "Organizational", "Systemic", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 289,
    question: "What is the most common wellness issue?",
    choices: ["Burnout", "Depression", "Substance abuse", "All are issues"],
    correctAnswer: 0
  },
  {
    id: 290,
    question: "Which wellness resource is most helpful?",
    choices: ["Counseling", "Peer support", "Programs", "All are helpful"],
    correctAnswer: 3
  },
  {
    id: 291,
    question: "What is the most important aspect of surgical diversity?",
    choices: ["Representation", "Inclusion", "Equity", "All are important"],
    correctAnswer: 3
  },
  {
    id: 292,
    question: "Which diversity initiative is most effective?",
    choices: ["Recruitment", "Mentoring", "Culture change", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 293,
    question: "What is the most significant diversity challenge?",
    choices: ["Pipeline", "Bias", "Culture", "All are challenges"],
    correctAnswer: 3
  },
  {
    id: 294,
    question: "Which diversity outcome is most important?",
    choices: ["Numbers", "Experience", "Performance", "All are important"],
    correctAnswer: 3
  },
  {
    id: 295,
    question: "What is the most important aspect of surgical innovation?",
    choices: ["Creativity", "Evidence", "Implementation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 296,
    question: "Which innovation type is most impactful?",
    choices: ["Technological", "Process", "Organizational", "All are impactful"],
    correctAnswer: 3
  },
  {
    id: 297,
    question: "What is the most significant innovation barrier?",
    choices: ["Technical", "Financial", "Cultural", "All are barriers"],
    correctAnswer: 3
  },
  {
    id: 298,
    question: "Which innovation strategy is most successful?",
    choices: ["Top-down", "Bottom-up", "Collaborative", "All can be successful"],
    correctAnswer: 3
  },
  {
    id: 299,
    question: "What is the most important aspect of surgical sustainability?",
    choices: ["Environmental", "Economic", "Social", "All are important"],
    correctAnswer: 3
  },
  {
    id: 300,
    question: "Which sustainability initiative is most effective?",
    choices: ["Waste reduction", "Energy efficiency", "Green practices", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 301,
    question: "What is the most significant sustainability challenge?",
    choices: ["Cost", "Complexity", "Culture", "All are challenges"],
    correctAnswer: 3
  },
  {
    id: 302,
    question: "Which sustainability outcome is most important?",
    choices: ["Environmental impact", "Cost savings", "Quality", "All are important"],
    correctAnswer: 3
  },
  {
    id: 303,
    question: "What is the most important aspect of surgical globalization?",
    choices: ["Access", "Quality", "Equity", "All are important"],
    correctAnswer: 3
  },
  {
    id: 304,
    question: "Which global surgery initiative is most effective?",
    choices: ["Training", "Infrastructure", "Technology", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 305,
    question: "What is the most significant global surgery challenge?",
    choices: ["Resources", "Capacity", "Sustainability", "All are challenges"],
    correctAnswer: 3
  },
  {
    id: 306,
    question: "Which global surgery outcome is most important?",
    choices: ["Access", "Quality", "Equity", "All are important"],
    correctAnswer: 3
  },
  {
    id: 307,
    question: "What is the most important aspect of surgical advocacy?",
    choices: ["Awareness", "Policy", "Action", "All are important"],
    correctAnswer: 3
  },
  {
    id: 308,
    question: "Which advocacy strategy is most effective?",
    choices: ["Individual", "Collective", "Institutional", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 309,
    question: "What is the most important advocacy issue?",
    choices: ["Access", "Quality", "Safety", "All are important"],
    correctAnswer: 3
  },
  {
    id: 310,
    question: "Which advocacy outcome is most meaningful?",
    choices: ["Policy change", "Resource allocation", "Public awareness", "All are meaningful"],
    correctAnswer: 3
  },
  {
    id: 311,
    question: "What is the most important aspect of surgical mentorship?",
    choices: ["Knowledge transfer", "Skill development", "Career guidance", "All are important"],
    correctAnswer: 3
  },
  {
    id: 312,
    question: "Which mentorship model is most effective?",
    choices: ["One-on-one", "Group", "Peer", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 313,
    question: "What is the most important mentorship outcome?",
    choices: ["Learning", "Development", "Success", "All are important"],
    correctAnswer: 3
  },
  {
    id: 314,
    question: "Which mentorship quality is most important?",
    choices: ["Expertise", "Commitment", "Compatibility", "All are important"],
    correctAnswer: 3
  },
  {
    id: 315,
    question: "What is the most important aspect of surgical scholarship?",
    choices: ["Research", "Education", "Service", "All are important"],
    correctAnswer: 3
  },
  {
    id: 316,
    question: "Which scholarship activity is most valuable?",
    choices: ["Discovery", "Integration", "Application", "All are valuable"],
    correctAnswer: 3
  },
  {
    id: 317,
    question: "What is the most important scholarship outcome?",
    choices: ["Knowledge", "Impact", "Recognition", "All are important"],
    correctAnswer: 3
  },
  {
    id: 318,
    question: "Which scholarship skill is most important?",
    choices: ["Critical thinking", "Communication", "Collaboration", "All are important"],
    correctAnswer: 3
  },
  {
    id: 319,
    question: "What is the most important aspect of surgical service?",
    choices: ["Patient care", "Community service", "Professional service", "All are important"],
    correctAnswer: 3
  },
  {
    id: 320,
    question: "Which service activity is most meaningful?",
    choices: ["Clinical care", "Education", "Research", "All are meaningful"],
    correctAnswer: 3
  },
  {
    id: 321,
    question: "What is the most important service outcome?",
    choices: ["Impact", "Recognition", "Satisfaction", "All are important"],
    correctAnswer: 3
  },
  {
    id: 322,
    question: "Which service motivation is most important?",
    choices: ["Duty", "Passion", "Purpose", "All are important"],
    correctAnswer: 3
  },
  {
    id: 323,
    question: "What is the most important aspect of surgical legacy?",
    choices: ["Clinical impact", "Educational impact", "Research impact", "All are important"],
    correctAnswer: 3
  },
  {
    id: 324,
    question: "Which legacy contribution is most lasting?",
    choices: ["Patients helped", "Students taught", "Knowledge created", "All are lasting"],
    correctAnswer: 3
  },
  {
    id: 325,
    question: "What is the most important legacy measure?",
    choices: ["Quantity", "Quality", "Impact", "All are important"],
    correctAnswer: 3
  },
  {
    id: 326,
    question: "Which legacy value is most important?",
    choices: ["Excellence", "Innovation", "Service", "All are important"],
    correctAnswer: 3
  },
  {
    id: 327,
    question: "What is the most important aspect of surgical transformation?",
    choices: ["Technology", "Process", "Culture", "All are important"],
    correctAnswer: 3
  },
  {
    id: 328,
    question: "Which transformation driver is most powerful?",
    choices: ["Innovation", "Competition", "Regulation", "All are powerful"],
    correctAnswer: 3
  },
  {
    id: 329,
    question: "What is the most significant transformation challenge?",
    choices: ["Technical", "Financial", "Cultural", "All are challenges"],
    correctAnswer: 3
  },
  {
    id: 330,
    question: "Which transformation outcome is most important?",
    choices: ["Efficiency", "Quality", "Safety", "All are important"],
    correctAnswer: 3
  },
  {
    id: 331,
    question: "What is the most important aspect of surgical vision?",
    choices: ["Clarity", "Inspiration", "Achievability", "All are important"],
    correctAnswer: 3
  },
  {
    id: 332,
    question: "Which vision element is most critical?",
    choices: ["Purpose", "Values", "Goals", "All are critical"],
    correctAnswer: 3
  },
  {
    id: 333,
    question: "What is the most important vision outcome?",
    choices: ["Direction", "Motivation", "Alignment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 334,
    question: "Which vision quality is most important?",
    choices: ["Compelling", "Realistic", "Shared", "All are important"],
    correctAnswer: 3
  },
  {
    id: 335,
    question: "What is the most important aspect of surgical mission?",
    choices: ["Purpose", "Values", "Commitment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 336,
    question: "Which mission element is most fundamental?",
    choices: ["Healing", "Service", "Excellence", "All are fundamental"],
    correctAnswer: 3
  },
  {
    id: 337,
    question: "What is the most important mission outcome?",
    choices: ["Impact", "Fulfillment", "Recognition", "All are important"],
    correctAnswer: 3
  },
  {
    id: 338,
    question: "Which mission quality is most important?",
    choices: ["Clarity", "Relevance", "Inspiration", "All are important"],
    correctAnswer: 3
  },
  {
    id: 339,
    question: "What is the most important aspect of surgical values?",
    choices: ["Integrity", "Excellence", "Compassion", "All are important"],
    correctAnswer: 3
  },
  {
    id: 340,
    question: "Which value is most fundamental to surgery?",
    choices: ["First do no harm", "Patient welfare", "Professional integrity", "All are fundamental"],
    correctAnswer: 3
  },
  {
    id: 341,
    question: "What is the most important value outcome?",
    choices: ["Behavior", "Culture", "Performance", "All are important"],
    correctAnswer: 3
  },
  {
    id: 342,
    question: "Which value quality is most important?",
    choices: ["Authenticity", "Consistency", "Universality", "All are important"],
    correctAnswer: 3
  },
  {
    id: 343,
    question: "What is the most important aspect of surgical culture?",
    choices: ["Safety", "Excellence", "Learning", "All are important"],
    correctAnswer: 3
  },
  {
    id: 344,
    question: "Which culture element is most influential?",
    choices: ["Leadership", "Values", "Practices", "All are influential"],
    correctAnswer: 3
  },
  {
    id: 345,
    question: "What is the most important culture outcome?",
    choices: ["Performance", "Satisfaction", "Retention", "All are important"],
    correctAnswer: 3
  },
  {
    id: 346,
    question: "Which culture change strategy is most effective?",
    choices: ["Top-down", "Bottom-up", "Collaborative", "All can be effective"],
    correctAnswer: 3
  },
  {
    id: 347,
    question: "What is the most important aspect of surgical excellence?",
    choices: ["Technical skill", "Clinical outcomes", "Patient experience", "All are important"],
    correctAnswer: 3
  },
  {
    id: 348,
    question: "Which excellence dimension is most critical?",
    choices: ["Quality", "Safety", "Service", "All are critical"],
    correctAnswer: 3
  },
  {
    id: 349,
    question: "What is the most important excellence outcome?",
    choices: ["Recognition", "Reputation", "Results", "All are important"],
    correctAnswer: 3
  },
  {
    id: 350,
    question: "Which excellence strategy is most sustainable?",
    choices: ["Continuous improvement", "Innovation", "Standardization", "All are sustainable"],
    correctAnswer: 3
  },
  {
    id: 351,
    question: "What is the most important aspect of surgical mastery?",
    choices: ["Knowledge", "Skill", "Judgment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 352,
    question: "Which mastery component is most critical?",
    choices: ["Technical expertise", "Clinical acumen", "Professional behavior", "All are critical"],
    correctAnswer: 3
  },
  {
    id: 353,
    question: "What is the most important mastery outcome?",
    choices: ["Competence", "Confidence", "Credibility", "All are important"],
    correctAnswer: 3
  },
  {
    id: 354,
    question: "Which mastery path is most effective?",
    choices: ["Deliberate practice", "Reflective learning", "Continuous improvement", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 355,
    question: "What is the most important aspect of surgical artistry?",
    choices: ["Creativity", "Precision", "Elegance", "All are important"],
    correctAnswer: 3
  },
  {
    id: 356,
    question: "Which artistry element is most distinctive?",
    choices: ["Innovation", "Technique", "Style", "All are distinctive"],
    correctAnswer: 3
  },
  {
    id: 357,
    question: "What is the most important artistry outcome?",
    choices: ["Beauty", "Function", "Satisfaction", "All are important"],
    correctAnswer: 3
  },
  {
    id: 358,
    question: "Which artistry quality is most valued?",
    choices: ["Originality", "Skill", "Vision", "All are valued"],
    correctAnswer: 3
  },
  {
    id: 359,
    question: "What is the most important aspect of surgical science?",
    choices: ["Evidence", "Method", "Discovery", "All are important"],
    correctAnswer: 3
  },
  {
    id: 360,
    question: "Which science component is most fundamental?",
    choices: ["Research", "Analysis", "Application", "All are fundamental"],
    correctAnswer: 3
  },
  {
    id: 361,
    question: "What is the most important science outcome?",
    choices: ["Knowledge", "Understanding", "Progress", "All are important"],
    correctAnswer: 3
  },
  {
    id: 362,
    question: "Which science approach is most rigorous?",
    choices: ["Experimental", "Observational", "Theoretical", "All can be rigorous"],
    correctAnswer: 3
  },
  {
    id: 363,
    question: "What is the most important aspect of surgical craft?",
    choices: ["Skill", "Experience", "Wisdom", "All are important"],
    correctAnswer: 3
  },
  {
    id: 364,
    question: "Which craft element is most essential?",
    choices: ["Technique", "Judgment", "Intuition", "All are essential"],
    correctAnswer: 3
  },
  {
    id: 365,
    question: "What is the most important craft outcome?",
    choices: ["Mastery", "Artistry", "Legacy", "All are important"],
    correctAnswer: 3
  },
  {
    id: 366,
    question: "Which craft development is most valuable?",
    choices: ["Practice", "Mentorship", "Reflection", "All are valuable"],
    correctAnswer: 3
  },
  {
    id: 367,
    question: "What is the most important aspect of surgical calling?",
    choices: ["Purpose", "Passion", "Commitment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 368,
    question: "Which calling element is most motivating?",
    choices: ["Service", "Healing", "Excellence", "All are motivating"],
    correctAnswer: 3
  },
  {
    id: 369,
    question: "What is the most important calling outcome?",
    choices: ["Fulfillment", "Impact", "Meaning", "All are important"],
    correctAnswer: 3
  },
  {
    id: 370,
    question: "Which calling quality is most sustaining?",
    choices: ["Authenticity", "Depth", "Clarity", "All are sustaining"],
    correctAnswer: 3
  },
  {
    id: 371,
    question: "What is the most important aspect of surgical privilege?",
    choices: ["Trust", "Responsibility", "Opportunity", "All are important"],
    correctAnswer: 3
  },
  {
    id: 372,
    question: "Which privilege element is most sacred?",
    choices: ["Patient trust", "Professional responsibility", "Societal contract", "All are sacred"],
    correctAnswer: 3
  },
  {
    id: 373,
    question: "What is the most important privilege outcome?",
    choices: ["Healing", "Service", "Excellence", "All are important"],
    correctAnswer: 3
  },
  {
    id: 374,
    question: "Which privilege quality is most essential?",
    choices: ["Humility", "Gratitude", "Stewardship", "All are essential"],
    correctAnswer: 3
  },
  {
    id: 375,
    question: "What is the most important aspect of surgical responsibility?",
    choices: ["Competence", "Integrity", "Accountability", "All are important"],
    correctAnswer: 3
  },
  {
    id: 376,
    question: "Which responsibility is most fundamental?",
    choices: ["Patient welfare", "Professional standards", "Societal trust", "All are fundamental"],
    correctAnswer: 3
  },
  {
    id: 377,
    question: "What is the most important responsibility outcome?",
    choices: ["Trust", "Respect", "Credibility", "All are important"],
    correctAnswer: 3
  },
  {
    id: 378,
    question: "Which responsibility quality is most critical?",
    choices: ["Reliability", "Consistency", "Transparency", "All are critical"],
    correctAnswer: 3
  },
  {
    id: 379,
    question: "What is the most important aspect of surgical honor?",
    choices: ["Integrity", "Excellence", "Service", "All are important"],
    correctAnswer: 3
  },
  {
    id: 380,
    question: "Which honor element is most distinguished?",
    choices: ["Character", "Achievement", "Contribution", "All are distinguished"],
    correctAnswer: 3
  },
  {
    id: 381,
    question: "What is the most important honor outcome?",
    choices: ["Recognition", "Respect", "Legacy", "All are important"],
    correctAnswer: 3
  },
  {
    id: 382,
    question: "Which honor quality is most enduring?",
    choices: ["Authenticity", "Consistency", "Impact", "All are enduring"],
    correctAnswer: 3
  },
  {
    id: 383,
    question: "What is the most important aspect of surgical dedication?",
    choices: ["Commitment", "Sacrifice", "Perseverance", "All are important"],
    correctAnswer: 3
  },
  {
    id: 384,
    question: "Which dedication element is most admirable?",
    choices: ["Selflessness", "Excellence", "Service", "All are admirable"],
    correctAnswer: 3
  },
  {
    id: 385,
    question: "What is the most important dedication outcome?",
    choices: ["Achievement", "Impact", "Fulfillment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 386,
    question: "Which dedication quality is most inspiring?",
    choices: ["Passion", "Persistence", "Purpose", "All are inspiring"],
    correctAnswer: 3
  },
  {
    id: 387,
    question: "What is the most important aspect of surgical compassion?",
    choices: ["Empathy", "Kindness", "Understanding", "All are important"],
    correctAnswer: 3
  },
  {
    id: 388,
    question: "Which compassion element is most healing?",
    choices: ["Presence", "Listening", "Caring", "All are healing"],
    correctAnswer: 3
  },
  {
    id: 389,
    question: "What is the most important compassion outcome?",
    choices: ["Comfort", "Hope", "Healing", "All are important"],
    correctAnswer: 3
  },
  {
    id: 390,
    question: "Which compassion quality is most meaningful?",
    choices: ["Authenticity", "Consistency", "Depth", "All are meaningful"],
    correctAnswer: 3
  },
  {
    id: 391,
    question: "What is the most important aspect of surgical wisdom?",
    choices: ["Knowledge", "Experience", "Judgment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 392,
    question: "Which wisdom element is most valuable?",
    choices: ["Insight", "Perspective", "Understanding", "All are valuable"],
    correctAnswer: 3
  },
  {
    id: 393,
    question: "What is the most important wisdom outcome?",
    choices: ["Better decisions", "Better outcomes", "Better care", "All are important"],
    correctAnswer: 3
  },
  {
    id: 394,
    question: "Which wisdom quality is most precious?",
    choices: ["Depth", "Breadth", "Clarity", "All are precious"],
    correctAnswer: 3
  },
  {
    id: 395,
    question: "What is the most important aspect of surgical humility?",
    choices: ["Self-awareness", "Openness", "Respect", "All are important"],
    correctAnswer: 3
  },
  {
    id: 396,
    question: "Which humility element is most essential?",
    choices: ["Recognition of limits", "Willingness to learn", "Respect for others", "All are essential"],
    correctAnswer: 3
  },
  {
    id: 397,
    question: "What is the most important humility outcome?",
    choices: ["Better learning", "Better relationships", "Better care", "All are important"],
    correctAnswer: 3
  },
  {
    id: 398,
    question: "Which humility quality is most admirable?",
    choices: ["Authenticity", "Consistency", "Grace", "All are admirable"],
    correctAnswer: 3
  },
  {
    id: 399,
    question: "What is the most important aspect of surgical courage?",
    choices: ["Bravery", "Determination", "Conviction", "All are important"],
    correctAnswer: 3
  },
  {
    id: 400,
    question: "Which courage element is most necessary?",
    choices: ["Physical courage", "Moral courage", "Intellectual courage", "All are necessary"],
    correctAnswer: 3
  },
  {
    id: 401,
    question: "What is the most important courage outcome?",
    choices: ["Right action", "Better outcomes", "Progress", "All are important"],
    correctAnswer: 3
  },
  {
    id: 402,
    question: "Which courage quality is most inspiring?",
    choices: ["Boldness", "Persistence", "Principle", "All are inspiring"],
    correctAnswer: 3
  },
  {
    id: 403,
    question: "What is the most important aspect of surgical hope?",
    choices: ["Optimism", "Faith", "Perseverance", "All are important"],
    correctAnswer: 3
  },
  {
    id: 404,
    question: "Which hope element is most powerful?",
    choices: ["Belief", "Vision", "Determination", "All are powerful"],
    correctAnswer: 3
  },
  {
    id: 405,
    question: "What is the most important hope outcome?",
    choices: ["Healing", "Recovery", "Transformation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 406,
    question: "Which hope quality is most sustaining?",
    choices: ["Resilience", "Faith", "Vision", "All are sustaining"],
    correctAnswer: 3
  },
  {
    id: 407,
    question: "What is the most important aspect of surgical healing?",
    choices: ["Physical", "Emotional", "Spiritual", "All are important"],
    correctAnswer: 3
  },
  {
    id: 408,
    question: "Which healing element is most fundamental?",
    choices: ["Restoration", "Recovery", "Renewal", "All are fundamental"],
    correctAnswer: 3
  },
  {
    id: 409,
    question: "What is the most important healing outcome?",
    choices: ["Wholeness", "Function", "Quality of life", "All are important"],
    correctAnswer: 3
  },
  {
    id: 410,
    question: "Which healing quality is most miraculous?",
    choices: ["Completeness", "Speed", "Transformation", "All are miraculous"],
    correctAnswer: 3
  },
  {
    id: 411,
    question: "What is the most important aspect of surgical service?",
    choices: ["Dedication", "Excellence", "Compassion", "All are important"],
    correctAnswer: 3
  },
  {
    id: 412,
    question: "Which service element is most noble?",
    choices: ["Selflessness", "Sacrifice", "Love", "All are noble"],
    correctAnswer: 3
  },
  {
    id: 413,
    question: "What is the most important service outcome?",
    choices: ["Healing", "Hope", "Transformation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 414,
    question: "Which service quality is most beautiful?",
    choices: ["Generosity", "Grace", "Love", "All are beautiful"],
    correctAnswer: 3
  },
  {
    id: 415,
    question: "What is the most important aspect of surgical love?",
    choices: ["Caring", "Compassion", "Commitment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 416,
    question: "Which love element is most powerful?",
    choices: ["Unconditional acceptance", "Selfless service", "Healing presence", "All are powerful"],
    correctAnswer: 3
  },
  {
    id: 417,
    question: "What is the most important love outcome?",
    choices: ["Healing", "Hope", "Wholeness", "All are important"],
    correctAnswer: 3
  },
  {
    id: 418,
    question: "Which love quality is most transformative?",
    choices: ["Depth", "Purity", "Universality", "All are transformative"],
    correctAnswer: 3
  },
  {
    id: 419,
    question: "What is the most important aspect of surgical grace?",
    choices: ["Elegance", "Kindness", "Blessing", "All are important"],
    correctAnswer: 3
  },
  {
    id: 420,
    question: "Which grace element is most beautiful?",
    choices: ["Gentleness", "Mercy", "Love", "All are beautiful"],
    correctAnswer: 3
  },
  {
    id: 421,
    question: "What is the most important grace outcome?",
    choices: ["Peace", "Healing", "Transformation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 422,
    question: "Which grace quality is most divine?",
    choices: ["Unconditional", "Unmerited", "Unlimited", "All are divine"],
    correctAnswer: 3
  },
  {
    id: 423,
    question: "What is the most important aspect of surgical mystery?",
    choices: ["Wonder", "Awe", "Reverence", "All are important"],
    correctAnswer: 3
  },
  {
    id: 424,
    question: "Which mystery element is most profound?",
    choices: ["Life", "Healing", "Consciousness", "All are profound"],
    correctAnswer: 3
  },
  {
    id: 425,
    question: "What is the most important mystery outcome?",
    choices: ["Humility", "Wonder", "Gratitude", "All are important"],
    correctAnswer: 3
  },
  {
    id: 426,
    question: "Which mystery quality is most sacred?",
    choices: ["Ineffable", "Infinite", "Eternal", "All are sacred"],
    correctAnswer: 3
  },
  {
    id: 427,
    question: "What is the most important aspect of surgical miracle?",
    choices: ["Healing", "Hope", "Transformation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 428,
    question: "Which miracle element is most amazing?",
    choices: ["Unexpected", "Impossible", "Inexplicable", "All are amazing"],
    correctAnswer: 3
  },
  {
    id: 429,
    question: "What is the most important miracle outcome?",
    choices: ["Life", "Health", "Wholeness", "All are important"],
    correctAnswer: 3
  },
  {
    id: 430,
    question: "Which miracle quality is most wonderful?",
    choices: ["Spontaneous", "Complete", "Lasting", "All are wonderful"],
    correctAnswer: 3
  },
  {
    id: 431,
    question: "What is the most important aspect of surgical blessing?",
    choices: ["Gift", "Grace", "Gratitude", "All are important"],
    correctAnswer: 3
  },
  {
    id: 432,
    question: "Which blessing element is most precious?",
    choices: ["Life", "Health", "Love", "All are precious"],
    correctAnswer: 3
  },
  {
    id: 433,
    question: "What is the most important blessing outcome?",
    choices: ["Joy", "Peace", "Fulfillment", "All are important"],
    correctAnswer: 3
  },
  {
    id: 434,
    question: "Which blessing quality is most abundant?",
    choices: ["Generous", "Overflowing", "Endless", "All are abundant"],
    correctAnswer: 3
  },
  {
    id: 435,
    question: "What is the most important aspect of surgical gratitude?",
    choices: ["Appreciation", "Humility", "Joy", "All are important"],
    correctAnswer: 3
  },
  {
    id: 436,
    question: "Which gratitude element is most meaningful?",
    choices: ["Recognition", "Acknowledgment", "Celebration", "All are meaningful"],
    correctAnswer: 3
  },
  {
    id: 437,
    question: "What is the most important gratitude outcome?",
    choices: ["Happiness", "Peace", "Connection", "All are important"],
    correctAnswer: 3
  },
  {
    id: 438,
    question: "Which gratitude quality is most transformative?",
    choices: ["Deep", "Genuine", "Constant", "All are transformative"],
    correctAnswer: 3
  },
  {
    id: 439,
    question: "What is the most important aspect of surgical joy?",
    choices: ["Happiness", "Fulfillment", "Celebration", "All are important"],
    correctAnswer: 3
  },
  {
    id: 440,
    question: "Which joy element is most uplifting?",
    choices: ["Laughter", "Smile", "Celebration", "All are uplifting"],
    correctAnswer: 3
  },
  {
    id: 441,
    question: "What is the most important joy outcome?",
    choices: ["Healing", "Hope", "Life", "All are important"],
    correctAnswer: 3
  },
  {
    id: 442,
    question: "Which joy quality is most contagious?",
    choices: ["Authentic", "Spontaneous", "Shared", "All are contagious"],
    correctAnswer: 3
  },
  {
    id: 443,
    question: "What is the most important aspect of surgical peace?",
    choices: ["Calm", "Serenity", "Harmony", "All are important"],
    correctAnswer: 3
  },
  {
    id: 444,
    question: "Which peace element is most healing?",
    choices: ["Stillness", "Quiet", "Rest", "All are healing"],
    correctAnswer: 3
  },
  {
    id: 445,
    question: "What is the most important peace outcome?",
    choices: ["Comfort", "Healing", "Wholeness", "All are important"],
    correctAnswer: 3
  },
  {
    id: 446,
    question: "Which peace quality is most profound?",
    choices: ["Deep", "Lasting", "Universal", "All are profound"],
    correctAnswer: 3
  },
  {
    id: 447,
    question: "What is the ultimate essence of surgical practice?",
    choices: ["Healing", "Service", "Love", "All are the essence"],
    correctAnswer: 3
  },
  {
    id: 448,
    question: "What is the most common site for hip fractures in elderly patients?",
    choices: ["Femoral head", "Femoral neck", "Greater trochanter", "Lesser trochanter"],
    correctAnswer: 1
  },
  {
    id: 449,
    question: "Which imaging study is most commonly used to diagnose rotator cuff tears?",
    choices: ["X-ray", "CT scan", "MRI", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 450,
    question: "What is the primary goal of arthroscopic surgery?",
    choices: ["Open visualization", "Minimal invasive treatment", "Bone grafting", "Joint replacement"],
    correctAnswer: 1
  },
  {
    id: 451,
    question: "Which bone is most commonly fractured in the wrist?",
    choices: ["Radius", "Ulna", "Scaphoid", "Lunate"],
    correctAnswer: 2
  },
  {
    id: 452,
    question: "What is the most common type of spinal fusion performed?",
    choices: ["Anterior", "Posterior", "Lateral", "Circumferential"],
    correctAnswer: 1
  },
  {
    id: 453,
    question: "Which ligament is most commonly torn in knee injuries?",
    choices: ["PCL", "ACL", "MCL", "LCL"],
    correctAnswer: 1
  },
  {
    id: 454,
    question: "What is the primary indication for total knee replacement?",
    choices: ["Fracture", "Osteoarthritis", "Infection", "Tumor"],
    correctAnswer: 1
  },
  {
    id: 455,
    question: "Which approach is most commonly used for total hip replacement?",
    choices: ["Anterior", "Posterior", "Lateral", "Medial"],
    correctAnswer: 1
  },
  {
    id: 456,
    question: "What is compartment syndrome?",
    choices: ["Bone infection", "Increased pressure in muscle compartment", "Joint dislocation", "Nerve compression"],
    correctAnswer: 1
  },
  {
    id: 457,
    question: "Which bone is most commonly affected by osteosarcoma?",
    choices: ["Humerus", "Femur", "Tibia", "Radius"],
    correctAnswer: 1
  },
  {
    id: 458,
    question: "What is the most common complication of hip fracture surgery?",
    choices: ["Infection", "Pulmonary embolism", "Avascular necrosis", "Nonunion"],
    correctAnswer: 1
  },
  {
    id: 459,
    question: "Which instrument is used to remove loose bodies during arthroscopy?",
    choices: ["Shaver", "Grasper", "Probe", "Burr"],
    correctAnswer: 1
  },
  {
    id: 460,
    question: "What is the primary function of the meniscus in the knee?",
    choices: ["Stability", "Shock absorption", "Blood supply", "Nerve conduction"],
    correctAnswer: 1
  },
  {
    id: 461,
    question: "Which type of fracture is most common in children?",
    choices: ["Compound", "Greenstick", "Comminuted", "Spiral"],
    correctAnswer: 1
  },
  {
    id: 462,
    question: "What is the most common indication for shoulder arthroscopy?",
    choices: ["Fracture", "Rotator cuff tear", "Dislocation", "Arthritis"],
    correctAnswer: 1
  },
  {
    id: 463,
    question: "Which nerve is most commonly injured during carpal tunnel release?",
    choices: ["Ulnar", "Radial", "Median", "Digital"],
    correctAnswer: 2
  },
  {
    id: 464,
    question: "What is the most common type of spinal deformity?",
    choices: ["Kyphosis", "Scoliosis", "Lordosis", "Spondylolisthesis"],
    correctAnswer: 1
  },
  {
    id: 465,
    question: "Which bone graft site is most commonly used for spinal fusion?",
    choices: ["Ribs", "Iliac crest", "Fibula", "Radius"],
    correctAnswer: 1
  },
  {
    id: 466,
    question: "What is the primary indication for ankle arthroscopy?",
    choices: ["Fracture", "Impingement", "Arthritis", "Tendon rupture"],
    correctAnswer: 1
  },
  {
    id: 467,
    question: "Which imaging study best shows soft tissue injuries?",
    choices: ["X-ray", "CT scan", "MRI", "Bone scan"],
    correctAnswer: 2
  },
  {
    id: 468,
    question: "What is the most common complication of ACL reconstruction?",
    choices: ["Infection", "Stiffness", "Re-rupture", "Nerve injury"],
    correctAnswer: 1
  },
  {
    id: 469,
    question: "Which position is typically used for shoulder arthroscopy?",
    choices: ["Supine", "Prone", "Beach chair", "Lateral decubitus"],
    correctAnswer: 2
  },
  {
    id: 470,
    question: "What is the most common cause of spinal stenosis?",
    choices: ["Trauma", "Degenerative changes", "Infection", "Tumor"],
    correctAnswer: 1
  },
  {
    id: 471,
    question: "Which tendon is most commonly ruptured in the ankle?",
    choices: ["Achilles", "Peroneal", "Tibialis", "Flexor"],
    correctAnswer: 0
  },
  {
    id: 472,
    question: "What is the primary goal of fracture reduction?",
    choices: ["Pain relief", "Anatomic alignment", "Early mobilization", "Prevent infection"],
    correctAnswer: 1
  },
  {
    id: 473,
    question: "Which joint is most commonly affected by rheumatoid arthritis?",
    choices: ["Hip", "Knee", "Hand/wrist", "Shoulder"],
    correctAnswer: 2
  },
  {
    id: 474,
    question: "What is the most common indication for wrist arthroscopy?",
    choices: ["Fracture", "TFCC tear", "Arthritis", "Tendon rupture"],
    correctAnswer: 1
  },
  {
    id: 475,
    question: "Which bone is most commonly fractured in the foot?",
    choices: ["Calcaneus", "Talus", "Fifth metatarsal", "Navicular"],
    correctAnswer: 2
  },
  {
    id: 476,
    question: "What is the primary indication for elbow arthroscopy?",
    choices: ["Fracture", "Loose bodies", "Arthritis", "Nerve compression"],
    correctAnswer: 1
  },
  {
    id: 477,
    question: "Which muscle is most commonly torn in hamstring injuries?",
    choices: ["Biceps femoris", "Semitendinosus", "Semimembranosus", "All equally"],
    correctAnswer: 0
  },
  {
    id: 478,
    question: "What is the most common type of bone tumor?",
    choices: ["Osteosarcoma", "Chondrosarcoma", "Metastatic", "Ewing's sarcoma"],
    correctAnswer: 2
  },
  {
    id: 479,
    question: "Which nerve is most commonly compressed in tarsal tunnel syndrome?",
    choices: ["Peroneal", "Tibial", "Sural", "Saphenous"],
    correctAnswer: 1
  },
  {
    id: 480,
    question: "What is the most common indication for cervical spine fusion?",
    choices: ["Fracture", "Degenerative disc disease", "Infection", "Tumor"],
    correctAnswer: 1
  },
  {
    id: 481,
    question: "Which approach is most commonly used for lumbar discectomy?",
    choices: ["Anterior", "Posterior", "Lateral", "Posterolateral"],
    correctAnswer: 3
  },
  {
    id: 482,
    question: "What is the most common complication of spinal fusion?",
    choices: ["Infection", "Pseudarthrosis", "Nerve injury", "Hardware failure"],
    correctAnswer: 1
  },
  {
    id: 483,
    question: "Which bone is most commonly fractured in osteoporotic patients?",
    choices: ["Hip", "Wrist", "Vertebrae", "Ribs"],
    correctAnswer: 2
  },
  {
    id: 484,
    question: "What is the primary indication for rotator cuff repair?",
    choices: ["Pain", "Full-thickness tear", "Partial tear", "Impingement"],
    correctAnswer: 1
  },
  {
    id: 485,
    question: "Which imaging study is best for diagnosing stress fractures?",
    choices: ["X-ray", "CT scan", "MRI", "Bone scan"],
    correctAnswer: 3
  },
  {
    id: 486,
    question: "What is the most common cause of shoulder impingement?",
    choices: ["Trauma", "Repetitive overhead activity", "Arthritis", "Infection"],
    correctAnswer: 1
  },
  {
    id: 487,
    question: "Which ligament stabilizes the ankle laterally?",
    choices: ["Deltoid", "ATFL", "Syndesmosis", "Spring"],
    correctAnswer: 1
  },
  {
    id: 488,
    question: "What is the most common indication for hand surgery?",
    choices: ["Fracture", "Carpal tunnel syndrome", "Tendon rupture", "Arthritis"],
    correctAnswer: 1
  },
  {
    id: 489,
    question: "Which bone is most commonly affected by avascular necrosis?",
    choices: ["Humerus", "Femoral head", "Scaphoid", "Talus"],
    correctAnswer: 1
  },
  {
    id: 490,
    question: "What is the primary goal of joint replacement surgery?",
    choices: ["Pain relief", "Improved function", "Both A and B", "Cosmetic improvement"],
    correctAnswer: 2
  },
  {
    id: 491,
    question: "Which muscle is most commonly affected by tennis elbow?",
    choices: ["Biceps", "Triceps", "Extensor carpi radialis brevis", "Flexor carpi radialis"],
    correctAnswer: 2
  },
  {
    id: 492,
    question: "What is the most common complication of ankle fracture surgery?",
    choices: ["Infection", "Malunion", "Arthritis", "Nerve injury"],
    correctAnswer: 2
  },
  {
    id: 493,
    question: "Which joint is most commonly dislocated?",
    choices: ["Hip", "Knee", "Shoulder", "Elbow"],
    correctAnswer: 2
  },
  {
    id: 494,
    question: "What is the primary indication for bunion surgery?",
    choices: ["Cosmetic", "Pain and dysfunction", "Prevention", "Shoe fitting"],
    correctAnswer: 1
  },
  {
    id: 495,
    question: "Which nerve is most commonly injured in hip fractures?",
    choices: ["Femoral", "Sciatic", "Obturator", "Lateral femoral cutaneous"],
    correctAnswer: 1
  },
  {
    id: 496,
    question: "What is the most common type of meniscal tear?",
    choices: ["Radial", "Horizontal", "Longitudinal", "Complex"],
    correctAnswer: 2
  },
  {
    id: 497,
    question: "Which bone is most commonly fractured in the pelvis?",
    choices: ["Ilium", "Ischium", "Pubis", "Sacrum"],
    correctAnswer: 2
  },
  {
    id: 498,
    question: "What is the most common indication for breast reconstruction?",
    choices: ["Cosmetic enhancement", "Post-mastectomy", "Trauma", "Congenital defect"],
    correctAnswer: 1
  },
  {
    id: 499,
    question: "Which flap is most commonly used for breast reconstruction?",
    choices: ["TRAM", "Latissimus dorsi", "DIEP", "Implant"],
    correctAnswer: 0
  },
  {
    id: 500,
    question: "What is the most common complication of abdominoplasty?",
    choices: ["Infection", "Seroma", "Hematoma", "Wound dehiscence"],
    correctAnswer: 1
  },
  {
    id: 501,
    question: "Which technique is preferred for cleft lip repair?",
    choices: ["Millard rotation-advancement", "Tennison triangular flap", "Rose-Thompson", "Straight line closure"],
    correctAnswer: 0
  },
  {
    id: 502,
    question: "What is the ideal age for cleft palate repair?",
    choices: ["6 months", "12 months", "18 months", "24 months"],
    correctAnswer: 2
  },
  {
    id: 503,
    question: "Which graft is most commonly used for rhinoplasty?",
    choices: ["Rib cartilage", "Septal cartilage", "Ear cartilage", "Synthetic material"],
    correctAnswer: 1
  },
  {
    id: 504,
    question: "What is the most common indication for scar revision?",
    choices: ["Cosmetic", "Functional impairment", "Both", "Infection"],
    correctAnswer: 2
  },
  {
    id: 505,
    question: "Which suture technique minimizes scarring?",
    choices: ["Simple interrupted", "Running", "Subcuticular", "Mattress"],
    correctAnswer: 2
  },
  {
    id: 506,
    question: "What is the most important factor in wound healing?",
    choices: ["Suture material", "Blood supply", "Age", "Infection control"],
    correctAnswer: 1
  },
  {
    id: 507,
    question: "Which laser is most commonly used for skin resurfacing?",
    choices: ["CO2", "Nd:YAG", "Argon", "Ruby"],
    correctAnswer: 0
  },
  {
    id: 508,
    question: "What is the most common complication of liposuction?",
    choices: ["Infection", "Contour irregularity", "Fat embolism", "Nerve injury"],
    correctAnswer: 1
  },
  {
    id: 509,
    question: "Which incision is preferred for facelift surgery?",
    choices: ["Coronal", "Pre-auricular", "Post-auricular", "Submental"],
    correctAnswer: 1
  },
  {
    id: 510,
    question: "What is the most common indication for blepharoplasty?",
    choices: ["Ptosis", "Excess skin", "Tear trough", "Ectropion"],
    correctAnswer: 1
  },
  {
    id: 511,
    question: "Which technique is used for microsurgical anastomosis?",
    choices: ["Simple interrupted", "Running", "End-to-end", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 512,
    question: "What is the most important consideration in flap surgery?",
    choices: ["Size", "Blood supply", "Location", "Thickness"],
    correctAnswer: 1
  },
  {
    id: 513,
    question: "Which nerve is most commonly repaired in hand surgery?",
    choices: ["Median", "Ulnar", "Radial", "Digital"],
    correctAnswer: 3
  },
  {
    id: 514,
    question: "What is the most common indication for tissue expansion?",
    choices: ["Breast reconstruction", "Scalp reconstruction", "Both", "Limb reconstruction"],
    correctAnswer: 2
  },
  {
    id: 515,
    question: "Which material is preferred for soft tissue augmentation?",
    choices: ["Silicone", "Hyaluronic acid", "Collagen", "Fat"],
    correctAnswer: 3
  },
  {
    id: 516,
    question: "What is the most common complication of breast augmentation?",
    choices: ["Infection", "Capsular contracture", "Rupture", "Malposition"],
    correctAnswer: 1
  },
  {
    id: 517,
    question: "Which flap is most reliable for lower extremity reconstruction?",
    choices: ["Gastrocnemius", "Soleus", "Free flap", "Rotation flap"],
    correctAnswer: 2
  },
  {
    id: 518,
    question: "What is the most important factor in burn management?",
    choices: ["Pain control", "Fluid resuscitation", "Infection prevention", "Scar prevention"],
    correctAnswer: 1
  },
  {
    id: 519,
    question: "Which dressing is preferred for partial-thickness burns?",
    choices: ["Dry gauze", "Silver sulfadiazine", "Hydrocolloid", "Biological dressing"],
    correctAnswer: 1
  },
  {
    id: 520,
    question: "What percentage of body surface area burned requires hospitalization?",
    choices: ["5%", "10%", "15%", "20%"],
    correctAnswer: 1
  },
  {
    id: 521,
    question: "Which graft is most commonly used for full-thickness skin defects?",
    choices: ["Split-thickness", "Full-thickness", "Composite", "Mesh"],
    correctAnswer: 0
  },
  {
    id: 522,
    question: "What is the most common donor site for skin grafts?",
    choices: ["Thigh", "Buttock", "Scalp", "Abdomen"],
    correctAnswer: 0
  },
  {
    id: 523,
    question: "Which technique provides the best functional outcome for finger replantation?",
    choices: ["Bone fixation first", "Vessel repair first", "Nerve repair first", "Tendon repair first"],
    correctAnswer: 1
  },
  {
    id: 524,
    question: "What is the most common indication for otoplasty?",
    choices: ["Microtia", "Prominent ears", "Cauliflower ear", "Earlobe repair"],
    correctAnswer: 1
  },
  {
    id: 525,
    question: "Which suture is preferred for microsurgery?",
    choices: ["Silk", "Nylon", "Prolene", "PDS"],
    correctAnswer: 1
  },
  {
    id: 526,
    question: "What is the most important principle in scar management?",
    choices: ["Early intervention", "Tension reduction", "Moisture maintenance", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 527,
    question: "Which imaging study is most useful for flap planning?",
    choices: ["CT scan", "MRI", "Angiography", "Doppler ultrasound"],
    correctAnswer: 2
  },
  {
    id: 528,
    question: "What is the most common complication of Z-plasty?",
    choices: ["Infection", "Necrosis", "Contracture", "Asymmetry"],
    correctAnswer: 3
  },
  {
    id: 529,
    question: "Which factor most affects graft survival?",
    choices: ["Size", "Thickness", "Vascularity of bed", "Age of patient"],
    correctAnswer: 2
  },
  {
    id: 530,
    question: "What is the preferred treatment for keloid scars?",
    choices: ["Excision alone", "Steroid injection", "Radiation", "Combination therapy"],
    correctAnswer: 3
  },
  {
    id: 531,
    question: "Which nerve provides sensation to the thumb?",
    choices: ["Median", "Ulnar", "Radial", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 532,
    question: "What is the most common indication for hand reconstruction?",
    choices: ["Trauma", "Congenital defects", "Arthritis", "Tumors"],
    correctAnswer: 0
  },
  {
    id: 533,
    question: "Which technique is preferred for lip reconstruction?",
    choices: ["Local flaps", "Free flaps", "Prosthetics", "Primary closure"],
    correctAnswer: 0
  },
  {
    id: 534,
    question: "What is the most important consideration in facial reconstruction?",
    choices: ["Function", "Aesthetics", "Both equally", "Cost"],
    correctAnswer: 2
  },
  {
    id: 535,
    question: "Which material is preferred for cranial reconstruction?",
    choices: ["Titanium mesh", "Bone graft", "PEEK", "All are acceptable"],
    correctAnswer: 3
  },
  {
    id: 536,
    question: "What is the most common complication of pressure sore surgery?",
    choices: ["Infection", "Recurrence", "Flap necrosis", "Hematoma"],
    correctAnswer: 1
  },
  {
    id: 537,
    question: "Which flap is most commonly used for breast reconstruction after mastectomy?",
    choices: ["TRAM", "DIEP", "Latissimus dorsi", "All are common"],
    correctAnswer: 3
  },
  {
    id: 538,
    question: "What is the ideal timing for scar revision?",
    choices: ["Immediately", "6 weeks", "6-12 months", "2 years"],
    correctAnswer: 2
  },
  {
    id: 539,
    question: "Which factor most influences wound healing in the elderly?",
    choices: ["Age", "Nutrition", "Blood supply", "Medications"],
    correctAnswer: 2
  },
  {
    id: 540,
    question: "What is the most common indication for tissue expansion in children?",
    choices: ["Burn reconstruction", "Congenital defects", "Tumor excision", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 541,
    question: "Which technique provides the best outcome for syndactyly repair?",
    choices: ["Simple division", "Z-plasty", "Skin grafts", "All techniques combined"],
    correctAnswer: 3
  },
  {
    id: 542,
    question: "What is the most important factor in preventing contractures?",
    choices: ["Early surgery", "Physical therapy", "Splinting", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 543,
    question: "Which nerve is most commonly injured in brachial plexus injuries?",
    choices: ["C5-C6", "C7", "C8-T1", "All roots equally"],
    correctAnswer: 0
  },
  {
    id: 544,
    question: "What is the preferred treatment for fingertip amputations?",
    choices: ["Revision amputation", "Composite graft", "Local flaps", "Healing by secondary intention"],
    correctAnswer: 2
  },
  {
    id: 545,
    question: "Which factor is most important in free flap survival?",
    choices: ["Flap size", "Recipient vessels", "Surgical technique", "All equally important"],
    correctAnswer: 3
  },
  {
    id: 546,
    question: "What is the most common donor site for free tissue transfer to the head and neck?",
    choices: ["Radial forearm", "Fibula", "Latissimus dorsi", "Rectus abdominis"],
    correctAnswer: 0
  },
  {
    id: 547,
    question: "Which imaging modality is most useful for perforator flap planning?",
    choices: ["CT angiography", "MR angiography", "Doppler ultrasound", "All are useful"],
    correctAnswer: 0
  },
  {
    id: 548,
    question: "What is the most common indication for circumcision?",
    choices: ["Phimosis", "Religious reasons", "Hygiene", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 549,
    question: "Which approach is most commonly used for radical prostatectomy?",
    choices: ["Open retropubic", "Laparoscopic", "Robotic", "Perineal"],
    correctAnswer: 2
  },
  {
    id: 550,
    question: "What is the most common complication of TURP?",
    choices: ["Bleeding", "Incontinence", "Retrograde ejaculation", "Stricture"],
    correctAnswer: 2
  },
  {
    id: 551,
    question: "Which stone composition is most common in kidney stones?",
    choices: ["Calcium oxalate", "Uric acid", "Struvite", "Cystine"],
    correctAnswer: 0
  },
  {
    id: 552,
    question: "What is the preferred treatment for small renal cell carcinoma?",
    choices: ["Radical nephrectomy", "Partial nephrectomy", "Ablation", "Observation"],
    correctAnswer: 1
  },
  {
    id: 553,
    question: "Which approach is most commonly used for pyeloplasty?",
    choices: ["Open", "Laparoscopic", "Robotic", "All equally common"],
    correctAnswer: 2
  },
  {
    id: 554,
    question: "What is the most common cause of acute urinary retention in men?",
    choices: ["BPH", "Prostate cancer", "Stricture", "Neurogenic bladder"],
    correctAnswer: 0
  },
  {
    id: 555,
    question: "Which procedure is most commonly performed for stress incontinence in women?",
    choices: ["Burch colposuspension", "Sling procedure", "Artificial sphincter", "Injectable bulking agents"],
    correctAnswer: 1
  },
  {
    id: 556,
    question: "What is the most common indication for nephrectomy?",
    choices: ["Renal cell carcinoma", "Non-functioning kidney", "Trauma", "Stones"],
    correctAnswer: 0
  },
  {
    id: 557,
    question: "Which imaging study is most useful for staging bladder cancer?",
    choices: ["CT scan", "MRI", "Ultrasound", "IVP"],
    correctAnswer: 0
  },
  {
    id: 558,
    question: "What is the most common complication of radical cystectomy?",
    choices: ["Infection", "Bowel complications", "Urinary leak", "Bleeding"],
    correctAnswer: 1
  },
  {
    id: 559,
    question: "Which procedure is preferred for ureteropelvic junction obstruction?",
    choices: ["Pyeloplasty", "Endopyelotomy", "Nephrectomy", "Stenting"],
    correctAnswer: 0
  },
  {
    id: 560,
    question: "What is the most common cause of hematuria in children?",
    choices: ["UTI", "Glomerulonephritis", "Trauma", "Hypercalciuria"],
    correctAnswer: 1
  },
  {
    id: 561,
    question: "Which nerve controls bladder emptying?",
    choices: ["Sympathetic", "Parasympathetic", "Somatic", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 562,
    question: "What is the most common indication for ureteroscopy?",
    choices: ["Stone removal", "Tumor biopsy", "Stricture treatment", "Stent placement"],
    correctAnswer: 0
  },
  {
    id: 563,
    question: "Which approach is preferred for adrenalectomy?",
    choices: ["Open", "Laparoscopic", "Robotic", "Retroperitoneoscopic"],
    correctAnswer: 1
  },
  {
    id: 564,
    question: "What is the most common complication of extracorporeal shock wave lithotripsy?",
    choices: ["Steinstrasse", "Hematoma", "Infection", "Perforation"],
    correctAnswer: 0
  },
  {
    id: 565,
    question: "Which tumor marker is most specific for testicular cancer?",
    choices: ["AFP", "beta-HCG", "LDH", "None are specific"],
    correctAnswer: 3
  },
  {
    id: 566,
    question: "What is the most common indication for orchiopexy?",
    choices: ["Cryptorchidism", "Torsion", "Trauma", "Infection"],
    correctAnswer: 0
  },
  {
    id: 567,
    question: "Which procedure is most commonly performed for varicocele?",
    choices: ["Inguinal approach", "Retroperitoneal approach", "Laparoscopic", "Percutaneous embolization"],
    correctAnswer: 2
  },
  {
    id: 568,
    question: "What is the most common cause of erectile dysfunction?",
    choices: ["Psychological", "Vascular", "Neurogenic", "Hormonal"],
    correctAnswer: 1
  },
  {
    id: 569,
    question: "Which approach is preferred for vesicoureteral reflux repair?",
    choices: ["Open reimplantation", "Laparoscopic", "Robotic", "Endoscopic injection"],
    correctAnswer: 3
  },
  {
    id: 570,
    question: "What is the most common complication of penile prosthesis implantation?",
    choices: ["Infection", "Mechanical failure", "Erosion", "Pain"],
    correctAnswer: 0
  },
  {
    id: 571,
    question: "Which imaging study is most useful for evaluating kidney function?",
    choices: ["CT scan", "MRI", "Nuclear medicine scan", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 572,
    question: "What is the most common indication for percutaneous nephrolithotomy?",
    choices: ["Large stones", "Multiple stones", "Staghorn calculi", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 573,
    question: "Which procedure is most effective for recurrent UTIs in women?",
    choices: ["Prophylactic antibiotics", "Behavioral modification", "Surgical intervention", "All approaches combined"],
    correctAnswer: 3
  },
  {
    id: 574,
    question: "What is the most common cause of chronic kidney disease?",
    choices: ["Diabetes", "Hypertension", "Glomerulonephritis", "Polycystic kidney disease"],
    correctAnswer: 0
  },
  {
    id: 575,
    question: "Which approach is preferred for living donor nephrectomy?",
    choices: ["Open", "Laparoscopic", "Robotic", "Hand-assisted laparoscopic"],
    correctAnswer: 1
  },
  {
    id: 576,
    question: "What is the most important factor in kidney transplant success?",
    choices: ["HLA matching", "ABO compatibility", "Age matching", "All equally important"],
    correctAnswer: 3
  },
  {
    id: 577,
    question: "Which complication is most common after kidney transplantation?",
    choices: ["Rejection", "Infection", "Cardiovascular disease", "Malignancy"],
    correctAnswer: 1
  },
  {
    id: 578,
    question: "What is the most common indication for artificial urinary sphincter?",
    choices: ["Post-prostatectomy incontinence", "Neurogenic bladder", "Congenital sphincter deficiency", "Trauma"],
    correctAnswer: 0
  },
  {
    id: 579,
    question: "Which procedure is most effective for overactive bladder?",
    choices: ["Medications", "Botulinum toxin injection", "Sacral neuromodulation", "All can be effective"],
    correctAnswer: 3
  },
  {
    id: 580,
    question: "What is the most common cause of acute kidney injury?",
    choices: ["Prerenal", "Intrinsic renal", "Postrenal", "All equally common"],
    correctAnswer: 0
  },
  {
    id: 581,
    question: "Which imaging study is best for detecting renal masses?",
    choices: ["CT scan", "MRI", "Ultrasound", "All are equally effective"],
    correctAnswer: 0
  },
  {
    id: 582,
    question: "What is the most common complication of urinary diversion?",
    choices: ["Infection", "Metabolic acidosis", "Stomal complications", "All are common"],
    correctAnswer: 3
  },
  {
    id: 583,
    question: "Which approach is preferred for retroperitoneal lymph node dissection?",
    choices: ["Open", "Laparoscopic", "Robotic", "All are acceptable"],
    correctAnswer: 1
  },
  {
    id: 584,
    question: "What is the most important prognostic factor in prostate cancer?",
    choices: ["PSA level", "Gleason score", "Clinical stage", "All are important"],
    correctAnswer: 3
  },
  {
    id: 585,
    question: "Which treatment is most effective for Peyronie's disease?",
    choices: ["Medical therapy", "Surgery", "Combination therapy", "Depends on severity"],
    correctAnswer: 3
  },
  {
    id: 586,
    question: "What is the most common indication for urethroplasty?",
    choices: ["Urethral stricture", "Hypospadias", "Trauma", "Cancer"],
    correctAnswer: 0
  },
  {
    id: 587,
    question: "Which approach is preferred for simple nephrectomy?",
    choices: ["Open", "Laparoscopic", "Hand-assisted", "All are acceptable"],
    correctAnswer: 1
  },
  {
    id: 588,
    question: "What is the most common cause of male infertility?",
    choices: ["Varicocele", "Obstruction", "Hormonal", "Idiopathic"],
    correctAnswer: 3
  },
  {
    id: 589,
    question: "Which procedure is most effective for priapism?",
    choices: ["Aspiration", "Shunting", "Medical therapy", "Depends on type"],
    correctAnswer: 3
  },
  {
    id: 590,
    question: "What is the most common complication of urethral catheterization?",
    choices: ["Infection", "Trauma", "Blockage", "All are common"],
    correctAnswer: 0
  },
  {
    id: 591,
    question: "Which imaging study is most useful for trauma evaluation?",
    choices: ["CT scan", "IVP", "Ultrasound", "MRI"],
    correctAnswer: 0
  },
  {
    id: 592,
    question: "What is the most common indication for suprapubic catheter?",
    choices: ["Urethral trauma", "Long-term drainage", "Patient comfort", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 593,
    question: "Which approach is preferred for pelvic organ prolapse repair?",
    choices: ["Vaginal", "Abdominal", "Laparoscopic", "Depends on prolapse type"],
    correctAnswer: 3
  },
  {
    id: 594,
    question: "What is the most important factor in wound healing after urological surgery?",
    choices: ["Age", "Nutrition", "Blood supply", "All are important"],
    correctAnswer: 3
  },
  {
    id: 595,
    question: "Which complication is most serious after major urological surgery?",
    choices: ["Bleeding", "Infection", "Organ injury", "All are serious"],
    correctAnswer: 3
  },
  {
    id: 596,
    question: "What is the most common indication for urinary diversion?",
    choices: ["Bladder cancer", "Neurogenic bladder", "Trauma", "Congenital anomalies"],
    correctAnswer: 0
  },
  {
    id: 597,
    question: "Which factor most influences surgical outcome in urology?",
    choices: ["Surgeon experience", "Patient selection", "Technical factors", "All are important"],
    correctAnswer: 3
  },
  {
    id: 598,
    question: "What is the most common indication for tonsillectomy?",
    choices: ["Recurrent tonsillitis", "Sleep apnea", "Peritonsillar abscess", "Malignancy"],
    correctAnswer: 0
  },
  {
    id: 599,
    question: "Which approach is most commonly used for thyroidectomy?",
    choices: ["Transcervical", "Endoscopic", "Robotic", "Open cervical"],
    correctAnswer: 3
  },
  {
    id: 600,
    question: "What is the most common complication of thyroidectomy?",
    choices: ["Bleeding", "Recurrent laryngeal nerve injury", "Hypocalcemia", "Infection"],
    correctAnswer: 2
  },
  {
    id: 601,
    question: "Which procedure is most effective for chronic sinusitis?",
    choices: ["Medical therapy", "Balloon sinuplasty", "Endoscopic sinus surgery", "All can be effective"],
    correctAnswer: 3
  },
  {
    id: 602,
    question: "What is the most common cause of hearing loss in children?",
    choices: ["Congenital", "Otitis media", "Trauma", "Genetic"],
    correctAnswer: 1
  },
  {
    id: 603,
    question: "Which imaging study is most useful for temporal bone evaluation?",
    choices: ["CT scan", "MRI", "X-ray", "Ultrasound"],
    correctAnswer: 0
  },
  {
    id: 604,
    question: "What is the most common indication for cochlear implantation?",
    choices: ["Conductive hearing loss", "Sensorineural hearing loss", "Mixed hearing loss", "Tinnitus"],
    correctAnswer: 1
  },
  {
    id: 605,
    question: "Which approach is preferred for parotidectomy?",
    choices: ["Pre-auricular", "Post-auricular", "Cervical", "Endoscopic"],
    correctAnswer: 0
  },
  {
    id: 606,
    question: "What is the most important structure to preserve during parotidectomy?",
    choices: ["Facial nerve", "Accessory nerve", "Hypoglossal nerve", "Vagus nerve"],
    correctAnswer: 0
  },
  {
    id: 607,
    question: "Which procedure is most effective for obstructive sleep apnea?",
    choices: ["UPPP", "CPAP", "Surgery", "Depends on severity"],
    correctAnswer: 3
  },
  {
    id: 608,
    question: "What is the most common cause of epistaxis?",
    choices: ["Trauma", "Hypertension", "Dry air", "Local irritation"],
    correctAnswer: 3
  },
  {
    id: 609,
    question: "Which area of the nose is most common for nosebleeds?",
    choices: ["Kiesselbach's plexus", "Superior turbinate", "Middle meatus", "Sphenoethmoid recess"],
    correctAnswer: 0
  },
  {
    id: 610,
    question: "What is the most common benign laryngeal tumor?",
    choices: ["Vocal cord polyp", "Vocal cord nodule", "Papilloma", "Granuloma"],
    correctAnswer: 1
  },
  {
    id: 611,
    question: "Which approach is preferred for vocal cord surgery?",
    choices: ["Direct laryngoscopy", "Indirect laryngoscopy", "Endoscopic", "Open cervical"],
    correctAnswer: 0
  },
  {
    id: 612,
    question: "What is the most common indication for tracheostomy?",
    choices: ["Upper airway obstruction", "Prolonged ventilation", "Secretion management", "All are common"],
    correctAnswer: 3
  },
  {
    id: 613,
    question: "Which level is preferred for tracheostomy?",
    choices: ["2nd tracheal ring", "3rd tracheal ring", "4th tracheal ring", "Between 2nd and 3rd rings"],
    correctAnswer: 3
  },
  {
    id: 614,
    question: "What is the most common complication of mastoidectomy?",
    choices: ["Hearing loss", "Facial nerve injury", "Infection", "Dizziness"],
    correctAnswer: 1
  },
  {
    id: 615,
    question: "Which approach is used for acoustic neuroma removal?",
    choices: ["Translabyrinthine", "Retrosigmoid", "Middle fossa", "All are used"],
    correctAnswer: 3
  },
  {
    id: 616,
    question: "What is the most common indication for septoplasty?",
    choices: ["Cosmetic", "Nasal obstruction", "Chronic sinusitis", "Epistaxis"],
    correctAnswer: 1
  },
  {
    id: 617,
    question: "Which procedure is most effective for Meniere's disease?",
    choices: ["Medical therapy", "Vestibular nerve section", "Labyrinthectomy", "Depends on hearing"],
    correctAnswer: 3
  },
  {
    id: 618,
    question: "What is the most common cause of facial nerve paralysis?",
    choices: ["Bell's palsy", "Trauma", "Tumor", "Infection"],
    correctAnswer: 0
  },
  {
    id: 619,
    question: "Which imaging study is best for salivary gland evaluation?",
    choices: ["CT scan", "MRI", "Ultrasound", "Sialography"],
    correctAnswer: 1
  },
  {
    id: 620,
    question: "What is the most common salivary gland tumor?",
    choices: ["Pleomorphic adenoma", "Warthin tumor", "Mucoepidermoid carcinoma", "Adenoid cystic carcinoma"],
    correctAnswer: 0
  },
  {
    id: 621,
    question: "Which approach is preferred for submandibular gland removal?",
    choices: ["Transcervical", "Intraoral", "Combined", "Endoscopic"],
    correctAnswer: 0
  },
  {
    id: 622,
    question: "What is the most important consideration in neck dissection?",
    choices: ["Oncologic clearance", "Functional preservation", "Both equally", "Cosmetic outcome"],
    correctAnswer: 2
  },
  {
    id: 623,
    question: "Which type of neck dissection removes the most structures?",
    choices: ["Radical", "Modified radical", "Selective", "Extended radical"],
    correctAnswer: 3
  },
  {
    id: 624,
    question: "What is the most common indication for laryngectomy?",
    choices: ["Laryngeal cancer", "Trauma", "Infection", "Stenosis"],
    correctAnswer: 0
  },
  {
    id: 625,
    question: "Which reconstruction is preferred after total laryngectomy?",
    choices: ["Primary closure", "Flap reconstruction", "TEP", "All are options"],
    correctAnswer: 3
  },
  {
    id: 626,
    question: "What is the most common complication of sinus surgery?",
    choices: ["Bleeding", "Infection", "Scarring", "CSF leak"],
    correctAnswer: 2
  },
  {
    id: 627,
    question: "Which approach is preferred for pituitary surgery?",
    choices: ["Transcranial", "Transsphenoidal", "Endoscopic", "Combined"],
    correctAnswer: 1
  },
  {
    id: 628,
    question: "What is the most common indication for rhinoplasty?",
    choices: ["Cosmetic", "Functional", "Trauma", "All are common"],
    correctAnswer: 3
  },
  {
    id: 629,
    question: "Which imaging study is most useful for skull base surgery planning?",
    choices: ["CT scan", "MRI", "Angiography", "All are important"],
    correctAnswer: 3
  },
  {
    id: 630,
    question: "What is the most important factor in head and neck reconstruction?",
    choices: ["Function", "Aesthetics", "Both equally", "Donor site morbidity"],
    correctAnswer: 2
  },
  {
    id: 631,
    question: "Which flap is most commonly used for oral cavity reconstruction?",
    choices: ["Radial forearm", "Fibula", "Latissimus dorsi", "Rectus abdominis"],
    correctAnswer: 0
  },
  {
    id: 632,
    question: "What is the most common complication of free flap reconstruction?",
    choices: ["Flap failure", "Donor site morbidity", "Infection", "Fistula"],
    correctAnswer: 0
  },
  {
    id: 633,
    question: "Which approach is preferred for thyroid cancer surgery?",
    choices: ["Hemithyroidectomy", "Total thyroidectomy", "Depends on tumor", "Subtotal thyroidectomy"],
    correctAnswer: 2
  },
  {
    id: 634,
    question: "What is the most important prognostic factor in head and neck cancer?",
    choices: ["TNM stage", "Histology", "Location", "All are important"],
    correctAnswer: 3
  },
  {
    id: 635,
    question: "Which treatment modality is most effective for early laryngeal cancer?",
    choices: ["Surgery", "Radiation", "Both equally effective", "Chemotherapy"],
    correctAnswer: 2
  },
  {
    id: 636,
    question: "What is the most common cause of postoperative bleeding after tonsillectomy?",
    choices: ["Inadequate hemostasis", "Infection", "Trauma", "Medication"],
    correctAnswer: 0
  },
  {
    id: 637,
    question: "Which technique is preferred for adenoidectomy?",
    choices: ["Curettage", "Electrocautery", "Coblation", "All are acceptable"],
    correctAnswer: 3
  },
  {
    id: 638,
    question: "What is the most common indication for myringotomy?",
    choices: ["Acute otitis media", "Chronic otitis media", "Hearing loss", "All are indications"],
    correctAnswer: 3
  },
  {
    id: 639,
    question: "Which type of tympanoplasty is most commonly performed?",
    choices: ["Type I", "Type II", "Type III", "Type IV"],
    correctAnswer: 0
  },
  {
    id: 640,
    question: "What is the most important factor in ossiculoplasty success?",
    choices: ["Prosthesis type", "Surgical technique", "Patient selection", "All are important"],
    correctAnswer: 3
  },
  {
    id: 641,
    question: "Which approach is preferred for CSF leak repair?",
    choices: ["Endoscopic", "Open craniotomy", "Combined", "Depends on location"],
    correctAnswer: 3
  },
  {
    id: 642,
    question: "What is the most common complication of endoscopic sinus surgery?",
    choices: ["Bleeding", "Infection", "Synechiae", "Anosmia"],
    correctAnswer: 2
  },
  {
    id: 643,
    question: "Which imaging modality is best for evaluating chronic otitis media?",
    choices: ["CT scan", "MRI", "X-ray", "Ultrasound"],
    correctAnswer: 0
  },
  {
    id: 644,
    question: "What is the most common cause of conductive hearing loss?",
    choices: ["Cerumen impaction", "Otitis media", "Otosclerosis", "All are common"],
    correctAnswer: 3
  },
  {
    id: 645,
    question: "Which procedure is most effective for otosclerosis?",
    choices: ["Stapedotomy", "Stapedectomy", "Both equally effective", "Hearing aid"],
    correctAnswer: 2
  },
  {
    id: 646,
    question: "What is the most important consideration in pediatric ENT surgery?",
    choices: ["Size differences", "Healing capacity", "Long-term effects", "All are important"],
    correctAnswer: 3
  },
  {
    id: 647,
    question: "Which factor most influences outcome in head and neck surgery?",
    choices: ["Surgeon experience", "Patient factors", "Tumor factors", "All are important"],
    correctAnswer: 3
  },
  {
    id: 648,
    question: "What is the most common indication for appendectomy?",
    choices: ["Acute appendicitis", "Chronic appendicitis", "Appendiceal tumor", "Prophylactic"],
    correctAnswer: 0
  },
  {
    id: 649,
    question: "Which approach is preferred for appendectomy?",
    choices: ["Open", "Laparoscopic", "Both equally effective", "Depends on complexity"],
    correctAnswer: 3
  },
  {
    id: 650,
    question: "What is the most common complication of cholecystectomy?",
    choices: ["Bleeding", "Bile duct injury", "Infection", "Port site hernia"],
    correctAnswer: 1
  },
  {
    id: 651,
    question: "Which imaging study is most useful for diagnosing cholecystitis?",
    choices: ["Ultrasound", "CT scan", "HIDA scan", "All are useful"],
    correctAnswer: 3
  },
  {
    id: 652,
    question: "What is the most common indication for splenectomy?",
    choices: ["Trauma", "Hematologic disorders", "Malignancy", "All are common"],
    correctAnswer: 1
  },
  {
    id: 653,
    question: "Which approach is preferred for elective splenectomy?",
    choices: ["Open", "Laparoscopic", "Hand-assisted", "Robotic"],
    correctAnswer: 1
  },
  {
    id: 654,
    question: "What is the most important consideration after splenectomy?",
    choices: ["Bleeding", "Infection risk", "Thrombosis", "All are important"],
    correctAnswer: 3
  },
  {
    id: 655,
    question: "Which hernia is most common in adults?",
    choices: ["Inguinal", "Umbilical", "Incisional", "Hiatal"],
    correctAnswer: 0
  },
  {
    id: 656,
    question: "What is the preferred repair for inguinal hernia?",
    choices: ["Tissue repair", "Mesh repair", "Laparoscopic", "Depends on patient"],
    correctAnswer: 3
  },
  {
    id: 657,
    question: "Which approach is preferred for incisional hernia repair?",
    choices: ["Open", "Laparoscopic", "Robotic", "Depends on size"],
    correctAnswer: 3
  },
  {
    id: 658,
    question: "What is the most common complication of hernia repair?",
    choices: ["Recurrence", "Infection", "Chronic pain", "Seroma"],
    correctAnswer: 0
  },
  {
    id: 659,
    question: "Which procedure is most effective for GERD?",
    choices: ["Medical therapy", "Nissen fundoplication", "LINX", "All can be effective"],
    correctAnswer: 3
  },
  {
    id: 660,
    question: "What is the most common indication for esophagectomy?",
    choices: ["Esophageal cancer", "Barrett's esophagus", "Achalasia", "Perforation"],
    correctAnswer: 0
  },
  {
    id: 661,
    question: "Which approach is preferred for esophagectomy?",
    choices: ["Transhiatal", "Transthoracic", "Minimally invasive", "Depends on tumor location"],
    correctAnswer: 3
  },
  {
    id: 662,
    question: "What is the most common complication of esophagectomy?",
    choices: ["Anastomotic leak", "Pneumonia", "Bleeding", "All are serious"],
    correctAnswer: 3
  },
  {
    id: 663,
    question: "Which procedure is most effective for morbid obesity?",
    choices: ["Gastric bypass", "Sleeve gastrectomy", "Adjustable band", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 664,
    question: "What is the most common complication of bariatric surgery?",
    choices: ["Leak", "Bleeding", "Nutritional deficiency", "All are possible"],
    correctAnswer: 3
  },
  {
    id: 665,
    question: "Which approach is preferred for colorectal surgery?",
    choices: ["Open", "Laparoscopic", "Robotic", "Depends on indication"],
    correctAnswer: 3
  },
  {
    id: 666,
    question: "What is the most important factor in colorectal cancer surgery?",
    choices: ["Oncologic clearance", "Functional preservation", "Both equally", "Cosmetic outcome"],
    correctAnswer: 2
  },
  {
    id: 667,
    question: "Which imaging study is most useful for liver surgery planning?",
    choices: ["CT scan", "MRI", "Ultrasound", "All are important"],
    correctAnswer: 3
  },
  {
    id: 668,
    question: "What is the most common indication for liver resection?",
    choices: ["Hepatocellular carcinoma", "Metastases", "Benign tumors", "All are indications"],
    correctAnswer: 1
  },
  {
    id: 669,
    question: "Which factor is most important in liver surgery?",
    choices: ["Anatomic resection", "Negative margins", "Liver function", "All are important"],
    correctAnswer: 3
  },
  {
    id: 670,
    question: "What is the most common complication of pancreaticoduodenectomy?",
    choices: ["Pancreatic fistula", "Bleeding", "Infection", "Delayed gastric emptying"],
    correctAnswer: 0
  },
  {
    id: 671,
    question: "Which approach is preferred for pancreatic surgery?",
    choices: ["Open", "Laparoscopic", "Robotic", "Depends on indication"],
    correctAnswer: 3
  },
  {
    id: 672,
    question: "What is the most important factor in thyroid surgery?",
    choices: ["Oncologic clearance", "Voice preservation", "Calcium levels", "All are important"],
    correctAnswer: 3
  },
  {
    id: 673,
    question: "Which imaging study is most useful for adrenal surgery?",
    choices: ["CT scan", "MRI", "Nuclear medicine", "All are useful"],
    correctAnswer: 3
  },
  {
    id: 674,
    question: "What is the most common indication for adrenalectomy?",
    choices: ["Adenoma", "Pheochromocytoma", "Carcinoma", "All are indications"],
    correctAnswer: 0
  },
  {
    id: 675,
    question: "Which approach is preferred for adrenalectomy?",
    choices: ["Open", "Laparoscopic", "Retroperitoneoscopic", "Depends on size"],
    correctAnswer: 3
  },
  {
    id: 676,
    question: "What is the most common complication of bowel surgery?",
    choices: ["Anastomotic leak", "Bleeding", "Infection", "Ileus"],
    correctAnswer: 0
  },
  {
    id: 677,
    question: "Which factor is most important in wound healing?",
    choices: ["Age", "Nutrition", "Blood supply", "All are important"],
    correctAnswer: 3
  },
  {
    id: 678,
    question: "What is the most common cause of postoperative fever?",
    choices: ["Infection", "Atelectasis", "DVT", "Drug reaction"],
    correctAnswer: 1
  },
  {
    id: 679,
    question: "Which complication is most serious after major surgery?",
    choices: ["Bleeding", "Infection", "Organ failure", "All are serious"],
    correctAnswer: 3
  },
  {
    id: 680,
    question: "What is the most important factor in surgical site infection prevention?",
    choices: ["Antibiotic prophylaxis", "Sterile technique", "Patient factors", "All are important"],
    correctAnswer: 3
  },
  {
    id: 681,
    question: "Which approach minimizes surgical trauma?",
    choices: ["Minimally invasive surgery", "Robotic surgery", "Single incision", "All minimize trauma"],
    correctAnswer: 3
  },
  {
    id: 682,
    question: "What is the most common indication for emergency surgery?",
    choices: ["Trauma", "Acute abdomen", "Bleeding", "All are common"],
    correctAnswer: 3
  },
  {
    id: 683,
    question: "Which factor most influences surgical outcome?",
    choices: ["Surgeon experience", "Patient selection", "Hospital factors", "All are important"],
    correctAnswer: 3
  },
  {
    id: 684,
    question: "What is the most important consideration in elderly surgical patients?",
    choices: ["Cardiac risk", "Pulmonary risk", "Cognitive function", "All are important"],
    correctAnswer: 3
  },
  {
    id: 685,
    question: "Which approach reduces postoperative complications?",
    choices: ["Enhanced recovery protocols", "Minimally invasive surgery", "Multimodal analgesia", "All reduce complications"],
    correctAnswer: 3
  },
  {
    id: 686,
    question: "What is the most common cause of readmission after surgery?",
    choices: ["Infection", "Bleeding", "Organ dysfunction", "All are causes"],
    correctAnswer: 3
  },
  {
    id: 687,
    question: "Which imaging study is most cost-effective for diagnosis?",
    choices: ["X-ray", "Ultrasound", "CT scan", "Depends on indication"],
    correctAnswer: 3
  },
  {
    id: 688,
    question: "What is the most important factor in patient safety?",
    choices: ["Communication", "Protocols", "Training", "All are important"],
    correctAnswer: 3
  },
  {
    id: 689,
    question: "Which approach improves quality of care?",
    choices: ["Standardization", "Continuous improvement", "Team-based care", "All improve quality"],
    correctAnswer: 3
  },
  {
    id: 690,
    question: "What is the most effective way to reduce medical errors?",
    choices: ["Checklists", "Communication", "Training", "All are effective"],
    correctAnswer: 3
  },
  {
    id: 691,
    question: "Which factor most affects patient satisfaction?",
    choices: ["Outcome", "Communication", "Pain control", "All affect satisfaction"],
    correctAnswer: 3
  },
  {
    id: 692,
    question: "What is the most important aspect of informed consent?",
    choices: ["Risks", "Benefits", "Alternatives", "All are important"],
    correctAnswer: 3
  },
  {
    id: 693,
    question: "Which approach reduces healthcare costs?",
    choices: ["Prevention", "Early intervention", "Efficient care", "All reduce costs"],
    correctAnswer: 3
  },
  {
    id: 694,
    question: "What is the most important factor in surgical training?",
    choices: ["Volume", "Mentorship", "Simulation", "All are important"],
    correctAnswer: 3
  },
  {
    id: 695,
    question: "Which technology most improves surgical outcomes?",
    choices: ["Robotics", "Navigation", "Imaging", "All can improve outcomes"],
    correctAnswer: 3
  },
  {
    id: 696,
    question: "What is the most important consideration in surgical innovation?",
    choices: ["Safety", "Efficacy", "Cost", "All are important"],
    correctAnswer: 3
  },
  {
    id: 697,
    question: "Which approach best serves patient needs?",
    choices: ["Patient-centered care", "Evidence-based care", "Individualized care", "All serve patient needs"],
    correctAnswer: 3
  },
  {
    id: 698,
    question: "What is the most important goal of surgery?",
    choices: ["Cure disease", "Improve function", "Relieve symptoms", "All are important goals"],
    correctAnswer: 3
  },
  {
    id: 699,
    question: "Which factor most determines surgical success?",
    choices: ["Technical skill", "Clinical judgment", "Team coordination", "All determine success"],
    correctAnswer: 3
  },
  {
    id: 700,
    question: "What is the most important principle of surgical practice?",
    choices: ["First do no harm", "Patient safety", "Quality care", "All are fundamental principles"],
    correctAnswer: 3
  },
  {
    id: 701,
    question: "Which approach best ensures quality outcomes?",
    choices: ["Best practices", "Continuous monitoring", "Quality improvement", "All ensure quality"],
    correctAnswer: 3
  },
  {
    id: 702,
    question: "What is the most important aspect of surgical care?",
    choices: ["Technical excellence", "Compassionate care", "Safe practice", "All are essential"],
    correctAnswer: 3
  },
  {
    id: 703,
    question: "Which factor most influences patient outcomes?",
    choices: ["Surgical technique", "Perioperative care", "Patient factors", "All influence outcomes"],
    correctAnswer: 3
  },
  {
    id: 704,
    question: "What is the ultimate goal of surgical practice?",
    choices: ["Perfect technique", "Optimal outcomes", "Patient satisfaction", "All contribute to excellence"],
    correctAnswer: 3
  },
  {
    id: 705,
    question: "Which principle guides surgical decision-making?",
    choices: ["Evidence-based medicine", "Clinical experience", "Patient preference", "All guide decisions"],
    correctAnswer: 3
  },
  {
    id: 706,
    question: "What defines surgical excellence?",
    choices: ["Technical skill", "Clinical outcomes", "Patient care", "All define excellence"],
    correctAnswer: 3
  }
];
