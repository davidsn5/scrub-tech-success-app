
export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the most common type of hernia in males?",
    choices: ["Femoral", "Umbilical", "Inguinal", "Incisional"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which surgical approach is used for a laparoscopic cholecystectomy?",
    choices: ["Open", "Minimally invasive", "Robotic only", "Endoscopic"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the primary indication for an appendectomy?",
    choices: ["Appendicitis", "Hernia", "Gallstones", "Ulcer"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which position is commonly used for thyroid surgery?",
    choices: ["Prone", "Lateral", "Supine with neck extension", "Trendelenburg"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What type of anesthesia is typically used for cataract surgery?",
    choices: ["General", "Spinal", "Local", "Regional"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Which instrument is used to grasp the gallbladder during laparoscopic surgery?",
    choices: ["Babcock", "Allis", "Grasper", "Kocher"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "What is the most common complication of laparoscopic surgery?",
    choices: ["Bleeding", "Infection", "Gas embolism", "Organ injury"],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "Which suture technique is used for bowel anastomosis?",
    choices: ["Running", "Interrupted", "Both running and interrupted", "Purse-string"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What is the standard insufflation gas used in laparoscopy?",
    choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which incision is commonly used for open cholecystectomy?",
    choices: ["Midline", "Pfannenstiel", "Kocher", "McBurney"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "What is the primary purpose of the Veress needle?",
    choices: ["Suturing", "Cutting", "Creating pneumoperitoneum", "Grasping"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Which procedure involves removal of the uterus?",
    choices: ["Oophorectomy", "Hysterectomy", "Myomectomy", "Salpingectomy"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "What is the most common indication for cesarean section?",
    choices: ["Fetal distress", "Previous cesarean", "Breech presentation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "Which retractor is commonly used in abdominal surgery?",
    choices: ["Weitlaner", "Balfour", "Gelpi", "Beckman"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "What is the purpose of the pneumatic tourniquet in orthopedic surgery?",
    choices: ["Pain relief", "Hemostasis", "Positioning", "Traction"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Which approach is used for total hip replacement?",
    choices: ["Anterior only", "Posterior only", "Lateral only", "Multiple approaches available"],
    correctAnswer: 3
  },
  {
    id: 17,
    question: "What is the most common type of kidney stone?",
    choices: ["Uric acid", "Calcium oxalate", "Struvite", "Cystine"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which procedure is used to treat benign prostatic hyperplasia?",
    choices: ["TURP", "Nephrectomy", "Cystectomy", "Ureteroscopy"],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "What is the standard treatment for acute appendicitis?",
    choices: ["Antibiotics only", "Appendectomy", "Observation", "Drainage"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Which imaging is most commonly used during C-arm procedures?",
    choices: ["MRI", "CT", "Fluoroscopy", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "What is the primary indication for coronary artery bypass surgery?",
    choices: ["Heart failure", "Arrhythmia", "Coronary artery disease", "Valve disease"],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "Which valve is most commonly replaced in cardiac surgery?",
    choices: ["Mitral", "Aortic", "Tricuspid", "Pulmonary"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "What is the purpose of cardiopulmonary bypass?",
    choices: ["Pain control", "Maintain circulation during cardiac surgery", "Prevent infection", "Provide anesthesia"],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "Which incision is used for median sternotomy?",
    choices: ["Horizontal", "Vertical through sternum", "Lateral", "Oblique"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "What is the most common complication of cardiac surgery?",
    choices: ["Bleeding", "Infection", "Arrhythmia", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 26,
    question: "Which procedure involves removal of part of the skull?",
    choices: ["Craniotomy", "Craniectomy", "Cranioplasty", "Burr hole"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "What position is used for posterior spinal fusion?",
    choices: ["Supine", "Prone", "Lateral", "Sitting"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Which approach is used for anterior cervical discectomy?",
    choices: ["Posterior", "Anterior", "Lateral", "Superior"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "What is the purpose of spinal fusion?",
    choices: ["Decompress nerves", "Stabilize spine", "Remove tumor", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 30,
    question: "Which instrument is used to remove disc material?",
    choices: ["Rongeur", "Curette", "Pituitary forceps", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 31,
    question: "What is the most common plastic surgery procedure?",
    choices: ["Rhinoplasty", "Breast augmentation", "Liposuction", "Facelift"],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "Which technique is used for skin grafting?",
    choices: ["Split-thickness", "Full-thickness", "Composite", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 33,
    question: "What is the purpose of tissue expansion?",
    choices: ["Create extra skin", "Reduce scarring", "Improve healing", "Prevent infection"],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "Which suture is commonly used for facial closure?",
    choices: ["Vicryl", "Prolene", "Silk", "Nylon"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is the most common indication for breast reconstruction?",
    choices: ["Cosmetic enhancement", "Post-mastectomy", "Trauma", "Congenital defect"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which procedure is used to treat varicose veins?",
    choices: ["Sclerotherapy", "Vein stripping", "Endovenous ablation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "What is the most common type of vascular graft?",
    choices: ["Synthetic", "Autologous", "Xenograft", "Allograft"],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "Which imaging is used during vascular procedures?",
    choices: ["Fluoroscopy", "Angiography", "Duplex ultrasound", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 39,
    question: "What is the purpose of an arteriovenous fistula?",
    choices: ["Bypass blockage", "Dialysis access", "Improve circulation", "Reduce pressure"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Which procedure treats carotid artery stenosis?",
    choices: ["Endarterectomy", "Angioplasty", "Stenting", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 41,
    question: "What is the most common pediatric surgical procedure?",
    choices: ["Appendectomy", "Hernia repair", "Circumcision", "Tonsillectomy"],
    correctAnswer: 2
  },
  {
    id: 42,
    question: "Which congenital condition requires immediate surgical intervention?",
    choices: ["Cleft lip", "Gastroschisis", "Hypospadias", "Undescended testicle"],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "What is the most common cause of bowel obstruction in children?",
    choices: ["Intussusception", "Volvulus", "Adhesions", "Hernia"],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "Which procedure corrects pyloric stenosis?",
    choices: ["Pyloroplasty", "Pyloromyotomy", "Gastrostomy", "Fundoplication"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "What is the treatment for undescended testicle?",
    choices: ["Orchiopexy", "Orchiectomy", "Orchidopexy", "Observation"],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "Which ENT procedure removes the tonsils?",
    choices: ["Adenoidectomy", "Tonsillectomy", "Myringotomy", "Septoplasty"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "What is the most common indication for myringotomy?",
    choices: ["Hearing loss", "Chronic otitis media", "Tinnitus", "Vertigo"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "Which procedure corrects a deviated septum?",
    choices: ["Rhinoplasty", "Septoplasty", "Turbinectomy", "Polypectomy"],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "What is the purpose of a tracheostomy?",
    choices: ["Improve breathing", "Facilitate ventilation", "Bypass upper airway obstruction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 50,
    question: "Which instrument is used for nasal surgery?",
    choices: ["Speculum", "Forceps", "Scissors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 51,
    question: "What is the most common eye surgery?",
    choices: ["Cataract extraction", "Retinal detachment repair", "Glaucoma surgery", "Corneal transplant"],
    correctAnswer: 0
  },
  {
    id: 52,
    question: "Which procedure treats retinal detachment?",
    choices: ["Vitrectomy", "Scleral buckle", "Pneumatic retinopexy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 53,
    question: "What is the purpose of phacoemulsification?",
    choices: ["Remove cataract", "Treat glaucoma", "Repair retina", "Correct vision"],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "Which anesthesia is commonly used for eye surgery?",
    choices: ["General", "Local", "Regional", "Topical"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "What is the most common complication of cataract surgery?",
    choices: ["Infection", "Bleeding", "Posterior capsule rupture", "Retinal detachment"],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "Which procedure treats morbid obesity?",
    choices: ["Gastric bypass", "Sleeve gastrectomy", "Gastric banding", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 57,
    question: "What is the most common bariatric procedure?",
    choices: ["Gastric bypass", "Sleeve gastrectomy", "Duodenal switch", "Gastric banding"],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "Which approach is preferred for bariatric surgery?",
    choices: ["Open", "Laparoscopic", "Robotic", "Endoscopic"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "What is the purpose of a gastric band?",
    choices: ["Restrict food intake", "Malabsorption", "Hormone regulation", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "Which complication is specific to gastric bypass?",
    choices: ["Dumping syndrome", "Band slippage", "Reflux", "Nausea"],
    correctAnswer: 0
  },
  {
    id: 61,
    question: "What is the most common emergency surgery?",
    choices: ["Appendectomy", "Cholecystectomy", "Hernia repair", "Bowel resection"],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "Which condition requires immediate surgical intervention?",
    choices: ["Perforated bowel", "Ruptured aneurysm", "Ectopic pregnancy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 63,
    question: "What is the treatment for a ruptured spleen?",
    choices: ["Observation", "Splenectomy", "Repair", "Depends on severity"],
    correctAnswer: 3
  },
  {
    id: 64,
    question: "Which procedure treats acute cholangitis?",
    choices: ["ERCP", "Cholecystectomy", "Choledochotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 65,
    question: "What is the most common cause of small bowel obstruction?",
    choices: ["Adhesions", "Hernia", "Tumor", "Intussusception"],
    correctAnswer: 0
  },
  {
    id: 66,
    question: "Which minimally invasive technique uses small incisions?",
    choices: ["Laparoscopy", "Endoscopy", "Arthroscopy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 67,
    question: "What is the advantage of robotic surgery?",
    choices: ["Enhanced precision", "3D visualization", "Tremor elimination", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 68,
    question: "Which system is commonly used for robotic surgery?",
    choices: ["da Vinci", "Zeus", "AESOP", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 69,
    question: "What is the purpose of single-port laparoscopy?",
    choices: ["Reduce scarring", "Faster recovery", "Less pain", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 70,
    question: "Which energy device is used in laparoscopy?",
    choices: ["Electrocautery", "Ultrasonic", "Bipolar", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 71,
    question: "What is the most common transplanted organ?",
    choices: ["Heart", "Liver", "Kidney", "Lung"],
    correctAnswer: 2
  },
  {
    id: 72,
    question: "Which immunosuppressive drug is commonly used post-transplant?",
    choices: ["Cyclosporine", "Tacrolimus", "Mycophenolate", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 73,
    question: "What is the purpose of cross-matching in transplantation?",
    choices: ["Tissue compatibility", "Blood type matching", "Prevent rejection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 74,
    question: "Which procedure is performed for end-stage liver disease?",
    choices: ["Liver resection", "Liver transplant", "TIPS procedure", "Depends on condition"],
    correctAnswer: 1
  },
  {
    id: 75,
    question: "What is the most common complication of organ transplantation?",
    choices: ["Infection", "Rejection", "Bleeding", "Organ failure"],
    correctAnswer: 1
  },
  {
    id: 76,
    question: "Which cancer has the highest surgical cure rate?",
    choices: ["Breast", "Colon", "Skin", "Prostate"],
    correctAnswer: 2
  },
  {
    id: 77,
    question: "What is the purpose of sentinel lymph node biopsy?",
    choices: ["Staging", "Treatment", "Diagnosis", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "Which procedure removes part of the colon?",
    choices: ["Colectomy", "Colostomy", "Colonoscopy", "Colotomy"],
    correctAnswer: 0
  },
  {
    id: 79,
    question: "What is the most common type of breast cancer surgery?",
    choices: ["Mastectomy", "Lumpectomy", "Reconstruction", "Biopsy"],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "Which approach is used for lung cancer surgery?",
    choices: ["Thoracotomy", "VATS", "Sternotomy", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 81,
    question: "What is the gold standard for gallbladder removal?",
    choices: ["Open cholecystectomy", "Laparoscopic cholecystectomy", "ERCP", "Lithotripsy"],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "Which complication can occur during laparoscopic cholecystectomy?",
    choices: ["Bile duct injury", "Bleeding", "Infection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 83,
    question: "What is Calot's triangle?",
    choices: ["Anatomical landmark", "Surgical approach", "Instrument", "Suture technique"],
    correctAnswer: 0
  },
  {
    id: 84,
    question: "Which structure must be identified during cholecystectomy?",
    choices: ["Cystic artery", "Cystic duct", "Common bile duct", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 85,
    question: "What is the critical view of safety?",
    choices: ["Surgical technique", "Patient positioning", "Instrument check", "Anatomical confirmation"],
    correctAnswer: 3
  },
  {
    id: 86,
    question: "Which hernia occurs in the groin area?",
    choices: ["Inguinal", "Femoral", "Both A and B", "Umbilical"],
    correctAnswer: 2
  },
  {
    id: 87,
    question: "What is the difference between direct and indirect inguinal hernia?",
    choices: ["Location", "Size", "Cause", "Treatment"],
    correctAnswer: 0
  },
  {
    id: 88,
    question: "Which mesh is commonly used for hernia repair?",
    choices: ["Polypropylene", "Polyester", "PTFE", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 89,
    question: "What is the Lichtenstein repair?",
    choices: ["Hernia repair technique", "Gallbladder procedure", "Appendix removal", "Bowel surgery"],
    correctAnswer: 0
  },
  {
    id: 90,
    question: "Which approach is used for laparoscopic hernia repair?",
    choices: ["TEP", "TAPP", "Both A and B", "Open"],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "What is the most common postoperative complication of appendectomy?",
    choices: ["Bleeding", "Infection", "Bowel obstruction", "Hernia"],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "Which incision is used for open appendectomy?",
    choices: ["McBurney", "Pfannenstiel", "Midline", "Kocher"],
    correctAnswer: 0
  },
  {
    id: 93,
    question: "What is McBurney's point?",
    choices: ["Surgical landmark", "Instrument", "Suture", "Position"],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "Which approach is preferred for uncomplicated appendicitis?",
    choices: ["Open", "Laparoscopic", "Both equal", "Depends on surgeon"],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "What is the appendiceal stump closure technique?",
    choices: ["Ligation", "Stapling", "Suturing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 96,
    question: "Which thyroid procedure removes the entire gland?",
    choices: ["Lobectomy", "Total thyroidectomy", "Subtotal thyroidectomy", "Isthmusectomy"],
    correctAnswer: 1
  },
  {
    id: 97,
    question: "What is the most serious complication of thyroid surgery?",
    choices: ["Bleeding", "Recurrent laryngeal nerve injury", "Infection", "Hypothyroidism"],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "Which structure must be preserved during thyroidectomy?",
    choices: ["Parathyroid glands", "Recurrent laryngeal nerve", "Both A and B", "Carotid artery"],
    correctAnswer: 2
  },
  {
    id: 99,
    question: "What is the purpose of intraoperative nerve monitoring?",
    choices: ["Prevent nerve injury", "Improve visualization", "Reduce bleeding", "Speed surgery"],
    correctAnswer: 0
  },
  {
    id: 100,
    question: "Which position is used for thyroid surgery?",
    choices: ["Supine with neck extension", "Prone", "Lateral", "Sitting"],
    correctAnswer: 0
  },
  {
    id: 101,
    question: "What is the most common breast surgery?",
    choices: ["Mastectomy", "Lumpectomy", "Biopsy", "Reconstruction"],
    correctAnswer: 2
  },
  {
    id: 102,
    question: "Which technique is used for breast biopsy?",
    choices: ["Core needle", "Vacuum-assisted", "Surgical", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 103,
    question: "What is breast-conserving surgery?",
    choices: ["Lumpectomy", "Mastectomy", "Reconstruction", "Biopsy"],
    correctAnswer: 0
  },
  {
    id: 104,
    question: "Which procedure removes the entire breast?",
    choices: ["Lumpectomy", "Mastectomy", "Quadrantectomy", "Biopsy"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "What is immediate breast reconstruction?",
    choices: ["Same surgery as mastectomy", "Within 24 hours", "Within one week", "Within one month"],
    correctAnswer: 0
  },
  {
    id: 106,
    question: "Which prostate procedure uses heat to destroy tissue?",
    choices: ["TURP", "TUMT", "TUNA", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 107,
    question: "What is the gold standard for BPH treatment?",
    choices: ["TURP", "Open prostatectomy", "Laser therapy", "Medication"],
    correctAnswer: 0
  },
  {
    id: 108,
    question: "Which approach is used for radical prostatectomy?",
    choices: ["Retropubic", "Perineal", "Laparoscopic", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 109,
    question: "What is the most common complication of TURP?",
    choices: ["Bleeding", "Infection", "Incontinence", "Retrograde ejaculation"],
    correctAnswer: 3
  },
  {
    id: 110,
    question: "Which irrigation fluid is used during TURP?",
    choices: ["Normal saline", "Glycine", "Mannitol", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 111,
    question: "What is nephrectomy?",
    choices: ["Kidney removal", "Kidney repair", "Kidney biopsy", "Kidney transplant"],
    correctAnswer: 0
  },
  {
    id: 112,
    question: "Which approach is preferred for donor nephrectomy?",
    choices: ["Open", "Laparoscopic", "Hand-assisted", "Robotic"],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "What is pyeloplasty?",
    choices: ["Kidney removal", "Ureteropelvic junction repair", "Stone removal", "Cyst drainage"],
    correctAnswer: 1
  },
  {
    id: 114,
    question: "Which procedure treats kidney stones?",
    choices: ["Lithotripsy", "Ureteroscopy", "Nephrolithotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 115,
    question: "What is ESWL?",
    choices: ["Surgical procedure", "Non-invasive stone treatment", "Imaging technique", "Medication"],
    correctAnswer: 1
  },
  {
    id: 116,
    question: "Which gynecologic procedure removes fibroids?",
    choices: ["Hysterectomy", "Myomectomy", "Oophorectomy", "D&C"],
    correctAnswer: 1
  },
  {
    id: 117,
    question: "What is the most common indication for hysterectomy?",
    choices: ["Cancer", "Fibroids", "Prolapse", "Bleeding"],
    correctAnswer: 1
  },
  {
    id: 118,
    question: "Which approach preserves the cervix?",
    choices: ["Total hysterectomy", "Subtotal hysterectomy", "Radical hysterectomy", "Vaginal hysterectomy"],
    correctAnswer: 1
  },
  {
    id: 119,
    question: "What is oophorectomy?",
    choices: ["Ovary removal", "Tube removal", "Uterus removal", "Cervix removal"],
    correctAnswer: 0
  },
  {
    id: 120,
    question: "Which procedure treats endometriosis?",
    choices: ["Laparoscopy", "Hysterectomy", "Hormone therapy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 121,
    question: "What is the most common cesarean section incision?",
    choices: ["Classical", "Low transverse", "Low vertical", "T-shaped"],
    correctAnswer: 1
  },
  {
    id: 122,
    question: "Which layer is incised first during cesarean section?",
    choices: ["Skin", "Fascia", "Muscle", "Peritoneum"],
    correctAnswer: 0
  },
  {
    id: 123,
    question: "What is the purpose of bladder flap creation?",
    choices: ["Prevent injury", "Improve exposure", "Reduce bleeding", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 124,
    question: "Which suture is used for uterine closure?",
    choices: ["Vicryl", "Chromic", "PDS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 125,
    question: "What is the most common indication for cesarean section?",
    choices: ["Previous cesarean", "Fetal distress", "Failure to progress", "All equally common"],
    correctAnswer: 0
  },
  {
    id: 126,
    question: "Which orthopedic procedure replaces the hip joint?",
    choices: ["Arthroscopy", "Arthroplasty", "Arthrodesis", "Osteotomy"],
    correctAnswer: 1
  },
  {
    id: 127,
    question: "What is the most common indication for hip replacement?",
    choices: ["Fracture", "Arthritis", "Infection", "Tumor"],
    correctAnswer: 1
  },
  {
    id: 128,
    question: "Which approach is commonly used for total hip replacement?",
    choices: ["Anterior", "Posterior", "Lateral", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 129,
    question: "What material is commonly used for hip implants?",
    choices: ["Titanium", "Ceramic", "Polyethylene", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 130,
    question: "Which complication is specific to hip replacement?",
    choices: ["Dislocation", "Infection", "Loosening", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 131,
    question: "What is arthroscopy?",
    choices: ["Joint replacement", "Joint fusion", "Minimally invasive joint surgery", "Joint injection"],
    correctAnswer: 2
  },
  {
    id: 132,
    question: "Which joint is most commonly arthroscoped?",
    choices: ["Hip", "Knee", "Shoulder", "Ankle"],
    correctAnswer: 1
  },
  {
    id: 133,
    question: "What is the purpose of arthroscopic debridement?",
    choices: ["Remove damaged tissue", "Repair ligaments", "Replace cartilage", "Fuse joint"],
    correctAnswer: 0
  },
  {
    id: 134,
    question: "Which fluid is used for arthroscopic irrigation?",
    choices: ["Normal saline", "Lactated Ringer's", "Both A and B", "Sterile water"],
    correctAnswer: 2
  },
  {
    id: 135,
    question: "What is the most common arthroscopic procedure?",
    choices: ["Meniscectomy", "ACL repair", "Rotator cuff repair", "Cartilage repair"],
    correctAnswer: 0
  },
  {
    id: 136,
    question: "Which spinal procedure removes disc material?",
    choices: ["Laminectomy", "Discectomy", "Fusion", "Foraminotomy"],
    correctAnswer: 1
  },
  {
    id: 137,
    question: "What is the purpose of spinal fusion?",
    choices: ["Decompress nerves", "Stabilize spine", "Remove tumor", "Correct deformity"],
    correctAnswer: 1
  },
  {
    id: 138,
    question: "Which approach is used for lumbar discectomy?",
    choices: ["Anterior", "Posterior", "Lateral", "All of the above"],
    correctAnswer: 1
  },
  {
    id: 139,
    question: "What is laminectomy?",
    choices: ["Disc removal", "Bone removal", "Nerve repair", "Fusion"],
    correctAnswer: 1
  },
  {
    id: 140,
    question: "Which imaging is used during spine surgery?",
    choices: ["Fluoroscopy", "CT", "MRI", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 141,
    question: "What is craniotomy?",
    choices: ["Skull opening", "Brain biopsy", "Tumor removal", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 142,
    question: "Which position is used for posterior fossa surgery?",
    choices: ["Supine", "Prone", "Sitting", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 143,
    question: "What is the purpose of awake craniotomy?",
    choices: ["Reduce anesthesia risk", "Monitor brain function", "Improve visualization", "Speed surgery"],
    correctAnswer: 1
  },
  {
    id: 144,
    question: "Which monitoring is used during brain surgery?",
    choices: ["EEG", "Evoked potentials", "ICP monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 145,
    question: "What is stereotactic surgery?",
    choices: ["Image-guided surgery", "Minimally invasive technique", "Precise targeting", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 146,
    question: "Which cardiac procedure opens blocked arteries?",
    choices: ["CABG", "Valve replacement", "Angioplasty", "Pacemaker insertion"],
    correctAnswer: 2
  },
  {
    id: 147,
    question: "What is the most common cardiac surgery?",
    choices: ["CABG", "Valve replacement", "Angioplasty", "Pacemaker insertion"],
    correctAnswer: 0
  },
  {
    id: 148,
    question: "Which incision is used for cardiac surgery?",
    choices: ["Median sternotomy", "Thoracotomy", "Mini-thoracotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 149,
    question: "What is the purpose of cardiopulmonary bypass?",
    choices: ["Oxygenate blood", "Maintain circulation", "Stop heart", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 150,
    question: "Which valve is most commonly diseased?",
    choices: ["Aortic", "Mitral", "Tricuspid", "Pulmonary"],
    correctAnswer: 0
  },
  {
    id: 151,
    question: "What is CABG?",
    choices: ["Coronary artery bypass graft", "Cardiac ablation", "Valve repair", "Angioplasty"],
    correctAnswer: 0
  },
  {
    id: 152,
    question: "Which graft is preferred for CABG?",
    choices: ["Saphenous vein", "Internal mammary artery", "Radial artery", "All are used"],
    correctAnswer: 1
  },
  {
    id: 153,
    question: "What is off-pump CABG?",
    choices: ["Without cardiopulmonary bypass", "Minimally invasive", "Robotic surgery", "Emergency procedure"],
    correctAnswer: 0
  },
  {
    id: 154,
    question: "Which complication can occur after cardiac surgery?",
    choices: ["Atrial fibrillation", "Bleeding", "Stroke", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 155,
    question: "What is the most common thoracic surgery?",
    choices: ["Lobectomy", "Pneumonectomy", "Wedge resection", "Thoracotomy"],
    correctAnswer: 0
  },
  {
    id: 156,
    question: "Which approach is preferred for lung surgery?",
    choices: ["Open thoracotomy", "VATS", "Sternotomy", "Depends on case"],
    correctAnswer: 1
  },
  {
    id: 157,
    question: "What is VATS?",
    choices: ["Video-assisted thoracic surgery", "Valve replacement", "Vascular surgery", "Ventilator support"],
    correctAnswer: 0
  },
  {
    id: 158,
    question: "Which lung lobe is most commonly removed?",
    choices: ["Right upper", "Right lower", "Left upper", "Left lower"],
    correctAnswer: 0
  },
  {
    id: 159,
    question: "What is pneumonectomy?",
    choices: ["Lung biopsy", "Lobe removal", "Entire lung removal", "Chest tube insertion"],
    correctAnswer: 2
  },
  {
    id: 160,
    question: "Which procedure treats pneumothorax?",
    choices: ["Chest tube", "Thoracotomy", "VATS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 161,
    question: "What is pleurodesis?",
    choices: ["Lung removal", "Pleural space obliteration", "Chest tube insertion", "Lung biopsy"],
    correctAnswer: 1
  },
  {
    id: 162,
    question: "Which position is used for thoracic surgery?",
    choices: ["Supine", "Prone", "Lateral", "Sitting"],
    correctAnswer: 2
  },
  {
    id: 163,
    question: "What is the most common postoperative complication of lung surgery?",
    choices: ["Pneumonia", "Air leak", "Bleeding", "Infection"],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Which drainage system is used after thoracic surgery?",
    choices: ["Chest tube", "Jackson-Pratt", "Penrose", "Foley catheter"],
    correctAnswer: 0
  },
  {
    id: 165,
    question: "What is the most common vascular surgery?",
    choices: ["Carotid endarterectomy", "Aortic aneurysm repair", "Peripheral bypass", "AV fistula creation"],
    correctAnswer: 0
  },
  {
    id: 166,
    question: "Which imaging is used for vascular surgery?",
    choices: ["Angiography", "Duplex ultrasound", "CT angiography", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 167,
    question: "What is an aneurysm?",
    choices: ["Blocked artery", "Dilated artery", "Torn artery", "Narrowed artery"],
    correctAnswer: 1
  },
  {
    id: 168,
    question: "Which artery is most commonly affected by aneurysm?",
    choices: ["Carotid", "Aorta", "Femoral", "Renal"],
    correctAnswer: 1
  },
  {
    id: 169,
    question: "What is EVAR?",
    choices: ["Endovascular aneurysm repair", "Emergency vascular repair", "External vascular repair", "Elective vascular repair"],
    correctAnswer: 0
  },
  {
    id: 170,
    question: "Which graft material is commonly used?",
    choices: ["Dacron", "PTFE", "Saphenous vein", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 171,
    question: "What is carotid endarterectomy?",
    choices: ["Plaque removal", "Artery bypass", "Stent placement", "Balloon angioplasty"],
    correctAnswer: 0
  },
  {
    id: 172,
    question: "Which monitoring is used during carotid surgery?",
    choices: ["EEG", "Cerebral oximetry", "Stump pressure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 173,
    question: "What is claudication?",
    choices: ["Chest pain", "Leg pain with walking", "Shortness of breath", "Dizziness"],
    correctAnswer: 1
  },
  {
    id: 174,
    question: "Which procedure creates dialysis access?",
    choices: ["AV fistula", "AV graft", "Central catheter", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 175,
    question: "What is the most common plastic surgery procedure?",
    choices: ["Breast augmentation", "Liposuction", "Rhinoplasty", "Facelift"],
    correctAnswer: 0
  },
  {
    id: 176,
    question: "Which technique is used for breast augmentation?",
    choices: ["Submuscular", "Subglandular", "Dual plane", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 177,
    question: "What is rhinoplasty?",
    choices: ["Nose surgery", "Ear surgery", "Eye surgery", "Lip surgery"],
    correctAnswer: 0
  },
  {
    id: 178,
    question: "Which approach is used for rhinoplasty?",
    choices: ["Open", "Closed", "Both A and B", "Endoscopic"],
    correctAnswer: 2
  },
  {
    id: 179,
    question: "What is liposuction?",
    choices: ["Fat removal", "Skin tightening", "Muscle repair", "Scar revision"],
    correctAnswer: 0
  },
  {
    id: 180,
    question: "Which technique is used for facelift?",
    choices: ["SMAS", "Deep plane", "Mini facelift", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 181,
    question: "What is abdominoplasty?",
    choices: ["Tummy tuck", "Liposuction", "Hernia repair", "Bowel surgery"],
    correctAnswer: 0
  },
  {
    id: 182,
    question: "Which graft is used for breast reconstruction?",
    choices: ["TRAM flap", "Latissimus flap", "DIEP flap", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 183,
    question: "What is blepharoplasty?",
    choices: ["Eyelid surgery", "Eyebrow lift", "Nose surgery", "Ear surgery"],
    correctAnswer: 0
  },
  {
    id: 184,
    question: "Which suture is preferred for facial closure?",
    choices: ["Nylon", "Prolene", "Silk", "Vicryl"],
    correctAnswer: 0
  },
  {
    id: 185,
    question: "What is the most common hand surgery?",
    choices: ["Carpal tunnel release", "Trigger finger release", "Dupuytren's contracture", "Fracture repair"],
    correctAnswer: 0
  },
  {
    id: 186,
    question: "Which nerve is compressed in carpal tunnel syndrome?",
    choices: ["Ulnar", "Radial", "Median", "Digital"],
    correctAnswer: 2
  },
  {
    id: 187,
    question: "What is trigger finger?",
    choices: ["Nerve compression", "Tendon entrapment", "Joint arthritis", "Fracture"],
    correctAnswer: 1
  },
  {
    id: 188,
    question: "Which approach is used for carpal tunnel release?",
    choices: ["Open", "Endoscopic", "Both A and B", "Arthroscopic"],
    correctAnswer: 2
  },
  {
    id: 189,
    question: "What is Dupuytren's contracture?",
    choices: ["Nerve disease", "Tendon disease", "Fascia disease", "Joint disease"],
    correctAnswer: 2
  },
  {
    id: 190,
    question: "Which anesthesia is commonly used for hand surgery?",
    choices: ["General", "Regional", "Local", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 191,
    question: "What is the purpose of a tourniquet in hand surgery?",
    choices: ["Hemostasis", "Positioning", "Anesthesia", "Traction"],
    correctAnswer: 0
  },
  {
    id: 192,
    question: "Which suture is used for tendon repair?",
    choices: ["Prolene", "Ethibond", "Vicryl", "All of the above"],
    correctAnswer: 1
  },
  {
    id: 193,
    question: "What is the most common hand fracture?",
    choices: ["Scaphoid", "Metacarpal", "Phalanx", "Radius"],
    correctAnswer: 1
  },
  {
    id: 194,
    question: "Which procedure treats mallet finger?",
    choices: ["Tendon repair", "Joint fusion", "Splinting", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 195,
    question: "What is the most common foot surgery?",
    choices: ["Bunion repair", "Hammer toe correction", "Plantar fascia release", "Achilles repair"],
    correctAnswer: 0
  },
  {
    id: 196,
    question: "Which procedure corrects hallux valgus?",
    choices: ["Bunionectomy", "Osteotomy", "Arthrodesis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 197,
    question: "What is hammer toe?",
    choices: ["Toe deformity", "Nail problem", "Skin condition", "Bone tumor"],
    correctAnswer: 0
  },
  {
    id: 198,
    question: "Which approach is used for Achilles repair?",
    choices: ["Open", "Percutaneous", "Both A and B", "Arthroscopic"],
    correctAnswer: 2
  },
  {
    id: 199,
    question: "What is plantar fasciitis?",
    choices: ["Heel pain condition", "Toe deformity", "Ankle arthritis", "Nerve compression"],
    correctAnswer: 0
  },
  {
    id: 200,
    question: "Which procedure treats Morton's neuroma?",
    choices: ["Nerve excision", "Nerve decompression", "Steroid injection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 201,
    question: "What is the most common ankle surgery?",
    choices: ["Arthroscopy", "Fusion", "Replacement", "Ligament repair"],
    correctAnswer: 0
  },
  {
    id: 202,
    question: "Which ligament is most commonly injured in ankle sprains?",
    choices: ["Deltoid", "Anterior talofibular", "Posterior talofibular", "Calcaneofibular"],
    correctAnswer: 1
  },
  {
    id: 203,
    question: "What is ankle arthrodesis?",
    choices: ["Joint replacement", "Joint fusion", "Ligament repair", "Bone graft"],
    correctAnswer: 1
  },
  {
    id: 204,
    question: "Which position is used for foot surgery?",
    choices: ["Supine", "Prone", "Lateral", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 205,
    question: "What is the most common pediatric orthopedic condition?",
    choices: ["Scoliosis", "Club foot", "Hip dysplasia", "Fractures"],
    correctAnswer: 3
  },
  {
    id: 206,
    question: "Which procedure treats developmental hip dysplasia?",
    choices: ["Osteotomy", "Arthrodesis", "Replacement", "Reduction"],
    correctAnswer: 0
  },
  {
    id: 207,
    question: "What is club foot?",
    choices: ["Foot deformity", "Ankle problem", "Leg length discrepancy", "Knee condition"],
    correctAnswer: 0
  },
  {
    id: 208,
    question: "Which procedure corrects scoliosis?",
    choices: ["Spinal fusion", "Bracing", "Physical therapy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 209,
    question: "What is the most common pediatric fracture?",
    choices: ["Forearm", "Clavicle", "Ankle", "Wrist"],
    correctAnswer: 1
  },
  {
    id: 210,
    question: "Which growth plate injury is most serious?",
    choices: ["Salter-Harris I", "Salter-Harris II", "Salter-Harris III", "Salter-Harris V"],
    correctAnswer: 3
  },
  {
    id: 211,
    question: "What is osteogenesis imperfecta?",
    choices: ["Brittle bone disease", "Growth disorder", "Joint disease", "Muscle disease"],
    correctAnswer: 0
  },
  {
    id: 212,
    question: "Which procedure treats Legg-Calve-Perthes disease?",
    choices: ["Hip replacement", "Osteotomy", "Observation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 213,
    question: "What is slipped capital femoral epiphysis?",
    choices: ["Hip condition", "Knee problem", "Ankle injury", "Spine deformity"],
    correctAnswer: 0
  },
  {
    id: 214,
    question: "Which anesthesia is preferred for pediatric surgery?",
    choices: ["General", "Regional", "Local", "Depends on procedure"],
    correctAnswer: 3
  },
  {
    id: 215,
    question: "What is the most common sports injury?",
    choices: ["ACL tear", "Meniscus tear", "Ankle sprain", "Shoulder dislocation"],
    correctAnswer: 2
  },
  {
    id: 216,
    question: "Which procedure reconstructs the ACL?",
    choices: ["Autograft", "Allograft", "Synthetic graft", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 217,
    question: "What is the most common graft for ACL reconstruction?",
    choices: ["Patellar tendon", "Hamstring", "Quadriceps", "Achilles"],
    correctAnswer: 0
  },
  {
    id: 218,
    question: "Which shoulder injury is most common in athletes?",
    choices: ["Rotator cuff tear", "Labral tear", "Dislocation", "Impingement"],
    correctAnswer: 3
  },
  {
    id: 219,
    question: "What is a SLAP tear?",
    choices: ["Shoulder labral injury", "Knee ligament tear", "Ankle sprain", "Elbow injury"],
    correctAnswer: 0
  },
  {
    id: 220,
    question: "Which procedure treats rotator cuff tears?",
    choices: ["Open repair", "Arthroscopic repair", "Both A and B", "Physical therapy only"],
    correctAnswer: 2
  },
  {
    id: 221,
    question: "What is tennis elbow?",
    choices: ["Lateral epicondylitis", "Medial epicondylitis", "Nerve compression", "Joint arthritis"],
    correctAnswer: 0
  },
  {
    id: 222,
    question: "Which procedure treats chronic tennis elbow?",
    choices: ["Debridement", "Tendon repair", "Nerve release", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 223,
    question: "What is the most common knee injury?",
    choices: ["ACL tear", "Meniscus tear", "MCL sprain", "Patellar dislocation"],
    correctAnswer: 1
  },
  {
    id: 224,
    question: "Which arthroscopic procedure is most common?",
    choices: ["Meniscectomy", "ACL reconstruction", "Rotator cuff repair", "Labral repair"],
    correctAnswer: 0
  },
  {
    id: 225,
    question: "What is the most common trauma surgery?",
    choices: ["Appendectomy", "Splenectomy", "Bowel repair", "Fracture fixation"],
    correctAnswer: 3
  },
  {
    id: 226,
    question: "Which organ is most commonly injured in blunt abdominal trauma?",
    choices: ["Liver", "Spleen", "Kidney", "Bowel"],
    correctAnswer: 1
  },
  {
    id: 227,
    question: "What is damage control surgery?",
    choices: ["Definitive repair", "Temporary stabilization", "Diagnostic procedure", "Preventive surgery"],
    correctAnswer: 1
  },
  {
    id: 228,
    question: "Which procedure treats tension pneumothorax?",
    choices: ["Chest tube", "Needle decompression", "Thoracotomy", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 229,
    question: "What is the most common cause of traumatic death?",
    choices: ["Head injury", "Hemorrhage", "Airway obstruction", "Cardiac arrest"],
    correctAnswer: 1
  },
  {
    id: 230,
    question: "Which fracture requires immediate surgery?",
    choices: ["Open fracture", "Displaced fracture", "Comminuted fracture", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 231,
    question: "What is compartment syndrome?",
    choices: ["Nerve compression", "Vascular compromise", "Increased pressure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 232,
    question: "Which procedure treats compartment syndrome?",
    choices: ["Fasciotomy", "Amputation", "Observation", "Medication"],
    correctAnswer: 0
  },
  {
    id: 233,
    question: "What is the golden hour in trauma?",
    choices: ["First hour after injury", "Time to surgery", "Anesthesia time", "Recovery time"],
    correctAnswer: 0
  },
  {
    id: 234,
    question: "Which imaging is most important in trauma?",
    choices: ["X-ray", "CT scan", "MRI", "Ultrasound"],
    correctAnswer: 1
  },
  {
    id: 235,
    question: "What is FAST exam?",
    choices: ["Focused assessment with sonography for trauma", "Fast CT scan", "Rapid blood test", "Quick physical exam"],
    correctAnswer: 0
  },
  {
    id: 236,
    question: "Which procedure treats pericardial tamponade?",
    choices: ["Pericardiocentesis", "Thoracotomy", "Sternotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 237,
    question: "What is flail chest?",
    choices: ["Rib fractures", "Lung collapse", "Heart injury", "Chest wall instability"],
    correctAnswer: 3
  },
  {
    id: 238,
    question: "Which procedure treats massive hemothorax?",
    choices: ["Chest tube", "Thoracotomy", "Blood transfusion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 239,
    question: "What is the most common burn surgery?",
    choices: ["Debridement", "Skin grafting", "Escharotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 240,
    question: "Which type of burn requires surgery?",
    choices: ["First degree", "Second degree", "Third degree", "All degrees"],
    correctAnswer: 2
  },
  {
    id: 241,
    question: "What is escharotomy?",
    choices: ["Burn removal", "Scar revision", "Pressure release", "Skin grafting"],
    correctAnswer: 2
  },
  {
    id: 242,
    question: "Which graft is used for burns?",
    choices: ["Split-thickness", "Full-thickness", "Composite", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 243,
    question: "What is the rule of nines?",
    choices: ["Burn assessment", "Fluid calculation", "Pain scale", "Healing time"],
    correctAnswer: 0
  },
  {
    id: 244,
    question: "Which complication is most serious in burns?",
    choices: ["Infection", "Scarring", "Contracture", "Inhalation injury"],
    correctAnswer: 3
  },
  {
    id: 245,
    question: "What is the most important factor in burn survival?",
    choices: ["Age", "Burn size", "Burn depth", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 246,
    question: "Which dressing is used for burns?",
    choices: ["Silver sulfadiazine", "Mafenide", "Bacitracin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 247,
    question: "What is the most common reconstructive surgery?",
    choices: ["Scar revision", "Contracture release", "Tissue expansion", "Flap surgery"],
    correctAnswer: 0
  },
  {
    id: 248,
    question: "Which technique provides the best burn coverage?",
    choices: ["Autograft", "Allograft", "Xenograft", "Synthetic"],
    correctAnswer: 0
  },
  {
    id: 249,
    question: "What is the appendicular skeleton composed of?",
    choices: ["Skull and ribcage", "Vertebrae and sacrum", "Limbs", "Sternum"],
    correctAnswer: 2
  },
  {
    id: 250,
    question: "What type of bones make up the skull?",
    choices: ["Long bones", "Flat bones", "Short bones", "Irregular bones"],
    correctAnswer: 1
  },
  {
    id: 251,
    question: "Which of the following are irregular bones?",
    choices: ["Femur", "Vertebrae", "Radius", "Sternum"],
    correctAnswer: 1
  },
  {
    id: 252,
    question: "Which ribs are considered true ribs?",
    choices: ["8–10", "11–12", "1–7", "9–12"],
    correctAnswer: 2
  },
  {
    id: 253,
    question: "The manubrium is a part of which bone?",
    choices: ["Pelvis", "Sternum", "Scapula", "Skull"],
    correctAnswer: 1
  },
  {
    id: 254,
    question: "What is the shaft of a long bone called?",
    choices: ["Epiphysis", "Diaphysis", "Medulla", "Periosteum"],
    correctAnswer: 1
  },
  {
    id: 255,
    question: "Which type of bone is the patella?",
    choices: ["Short", "Flat", "Irregular", "Long"],
    correctAnswer: 0
  },
  {
    id: 256,
    question: "What is the primary function of red bone marrow?",
    choices: ["Fat storage", "Hormone production", "Blood cell production", "Bone resorption"],
    correctAnswer: 2
  },
  {
    id: 257,
    question: "A tumor of the plasma cells of bone marrow is called:",
    choices: ["Osteosarcoma", "Myeloma", "Chondroma", "Osteoma"],
    correctAnswer: 1
  },
  {
    id: 258,
    question: "The outer layer of hard connective tissue of bone is called:",
    choices: ["Cancellous bone", "Bone marrow", "Cortical bone", "Periosteum"],
    correctAnswer: 2
  },
  {
    id: 259,
    question: "The four stages of bone healing begin with:",
    choices: ["Callus formation", "Calcification", "Hematoma formation", "Remodeling"],
    correctAnswer: 2
  },
  {
    id: 260,
    question: "What type of tissue covers joint surfaces to allow smooth movement?",
    choices: ["Periosteum", "Ligament", "Cartilage", "Tendon"],
    correctAnswer: 2
  },
  {
    id: 261,
    question: "Which of the following is a benign cartilage tumor?",
    choices: ["Osteosarcoma", "Chondroma", "Myeloma", "Osteoma"],
    correctAnswer: 1
  },
  {
    id: 262,
    question: "Which type of muscle is voluntary?",
    choices: ["Smooth", "Striated", "Cardiac", "Involuntary"],
    correctAnswer: 1
  },
  {
    id: 263,
    question: "What do ligaments attach?",
    choices: ["Muscle to bone", "Bone to bone", "Cartilage to bone", "Muscle to cartilage"],
    correctAnswer: 1
  },
  {
    id: 264,
    question: "What is the function of tendons?",
    choices: ["Connect bone to bone", "Connect muscle to bone", "Cushion joints", "Secrete synovial fluid"],
    correctAnswer: 1
  },
  {
    id: 265,
    question: "A joint that allows no movement is called:",
    choices: ["Amphiarthrotic", "Diarthrotic", "Synarthrotic", "Synovial"],
    correctAnswer: 2
  },
  {
    id: 266,
    question: "Which joint type allows the widest range of motion?",
    choices: ["Hinge", "Ball and socket", "Pivot", "Gliding"],
    correctAnswer: 1
  },
  {
    id: 267,
    question: "What is an example of a condyloid joint?",
    choices: ["Shoulder", "Elbow", "Temporomandibular joint", "Hip"],
    correctAnswer: 2
  },
  {
    id: 268,
    question: "A hinge joint is best exemplified by the:",
    choices: ["Hip", "Shoulder", "Elbow", "Wrist"],
    correctAnswer: 2
  },
  {
    id: 269,
    question: "Turning the sole of the foot inward is called:",
    choices: ["Eversion", "Inversion", "Plantar flexion", "Dorsiflexion"],
    correctAnswer: 1
  },
  {
    id: 270,
    question: "Moving a limb away from the midline of the body is called:",
    choices: ["Adduction", "Abduction", "Flexion", "Extension"],
    correctAnswer: 1
  },
  {
    id: 271,
    question: "An autoimmune disease that causes joint inflammation and stiffness is:",
    choices: ["Osteoarthritis", "Rheumatoid arthritis", "Osteomyelitis", "Chondroma"],
    correctAnswer: 1
  },
  {
    id: 272,
    question: "Which diagnostic test records electrical activity of muscle?",
    choices: ["MRI", "Arthrogram", "CT scan", "Electromyography"],
    correctAnswer: 3
  },
  {
    id: 273,
    question: "What type of fracture does not puncture the skin?",
    choices: ["Open", "Simple", "Compound", "Comminuted"],
    correctAnswer: 1
  },
  {
    id: 274,
    question: "A fracture where the bone bends on one side and breaks on the other is:",
    choices: ["Oblique", "Greenstick", "Transverse", "Impacted"],
    correctAnswer: 1
  },
  {
    id: 275,
    question: "A fracture where the bone breaks into several pieces is called:",
    choices: ["Displaced", "Comminuted", "Oblique", "Transverse"],
    correctAnswer: 1
  },
  {
    id: 276,
    question: "A Colles' fracture involves which bone?",
    choices: ["Tibia", "Femur", "Radius", "Fibula"],
    correctAnswer: 2
  },
  {
    id: 277,
    question: "Which type of fracture is caused by disease that weakens the bone?",
    choices: ["Pathologic", "Greenstick", "Impacted", "Oblique"],
    correctAnswer: 0
  },
  {
    id: 278,
    question: "A partial dislocation is known as:",
    choices: ["Dislocation", "Subluxation", "Impaction", "Avulsion"],
    correctAnswer: 1
  },
  {
    id: 279,
    question: "Which table is used for spine surgery?",
    choices: ["Fracture table", "Andrews table", "Jackson table", "Alvarado table"],
    correctAnswer: 2
  },
  {
    id: 280,
    question: "Traction applied directly to bone using pins is called:",
    choices: ["Manual traction", "Skeletal traction", "Skin traction", "Elastic traction"],
    correctAnswer: 1
  },
  {
    id: 281,
    question: "Which material is commonly used for casting?",
    choices: ["Bone cement", "Fiberglass", "Silicone", "Nylon"],
    correctAnswer: 1
  },
  {
    id: 282,
    question: "Which of the following is a complication of bone healing?",
    choices: ["Delayed union", "Callus formation", "Calcification", "Remodeling"],
    correctAnswer: 0
  },
  {
    id: 283,
    question: "A disease of decreased bone density leading to brittle bones is:",
    choices: ["Osteomalacia", "Osteogenesis imperfecta", "Osteoporosis", "Osteoarthritis"],
    correctAnswer: 2
  },
  {
    id: 284,
    question: "Bone cement is also known as:",
    choices: ["PMMA", "PVC", "Fiberglass", "Epoxy"],
    correctAnswer: 0
  },
  {
    id: 285,
    question: "Which type of bone graft is taken from the patient?",
    choices: ["Allograft", "Xenograft", "Autograft", "Synthetic"],
    correctAnswer: 2
  },
  {
    id: 286,
    question: "What suture material is commonly used for tendon-to-bone?",
    choices: ["Silk", "Polyester (Ethibond)", "Vicryl", "Chromic"],
    correctAnswer: 1
  },
  {
    id: 287,
    question: "Which hemostatic agent is made of absorbable gelatin?",
    choices: ["Bone wax", "Gelfoam", "Thrombin", "PMMA"],
    correctAnswer: 1
  },
  {
    id: 288,
    question: "Which position may interfere with chest expansion if improperly performed?",
    choices: ["Lateral", "Supine", "Prone", "Lithotomy"],
    correctAnswer: 2
  },
  {
    id: 289,
    question: "A genetic disorder causing brittle bones is:",
    choices: ["Osteomyelitis", "Osteomalacia", "Osteogenesis imperfecta", "Osteoarthritis"],
    correctAnswer: 2
  },
  {
    id: 290,
    question: "Which of the following is a metabolic disease causing soft bones?",
    choices: ["Osteoporosis", "Osteomalacia", "Osteonecrosis", "Osteoarthritis"],
    correctAnswer: 1
  },
  {
    id: 291,
    question: "A compartment syndrome results in:",
    choices: ["Bone infection", "Increased pressure in fascial compartments", "Loss of calcium", "Bone necrosis"],
    correctAnswer: 1
  },
  {
    id: 292,
    question: "What table provides skeletal traction for fractures?",
    choices: ["Fracture table", "Jackson table", "Andrews table", "Alvarado table"],
    correctAnswer: 0
  },
  {
    id: 293,
    question: "Which antibiotic is commonly used for irrigation?",
    choices: ["Erythromycin", "Bacitracin", "Amoxicillin", "Ciprofloxacin"],
    correctAnswer: 1
  },
  {
    id: 294,
    question: "Which laser is used in arthroscopies?",
    choices: ["Nd:YAG", "CO₂", "Excimer", "Argon"],
    correctAnswer: 0
  },
  {
    id: 295,
    question: "What is the purpose of bone grafts?",
    choices: ["To increase bone length", "To promote healing of fractures", "To lubricate joints", "To remove diseased bone"],
    correctAnswer: 1
  },
  {
    id: 296,
    question: "What is the preferred first step to repair a fracture?",
    choices: ["Open reduction", "Closed reduction", "Casting", "Bone grafting"],
    correctAnswer: 1
  }
];
