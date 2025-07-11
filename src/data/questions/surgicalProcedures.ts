export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the most common type of hernia in adults?",
    choices: ["Umbilical", "Inguinal", "Ventral", "Hiatal"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which instrument is used to grasp the gallbladder during laparoscopic cholecystectomy?",
    choices: ["Babcock", "Allis", "Kocher", "Tenaculum"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "The appendix is attached to which part of the colon?",
    choices: ["Ascending colon", "Transverse colon", "Cecum", "Sigmoid colon"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What is the most common position for appendectomy?",
    choices: ["Supine", "Trendelenburg", "Reverse Trendelenburg", "Left lateral"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which artery supplies blood to the appendix?",
    choices: ["Appendicular artery", "Ileocolic artery", "Right colic artery", "Superior mesenteric artery"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "The triangle of Calot contains which important structure?",
    choices: ["Common bile duct", "Hepatic artery", "Cystic artery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 7,
    question: "What is the most common complication of laparoscopic cholecystectomy?",
    choices: ["Bleeding", "Infection", "Bile duct injury", "Pneumonia"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which incision is commonly used for open cholecystectomy?",
    choices: ["Midline", "Kocher", "McBurney", "Pfannenstiel"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "The cystic artery is typically a branch of which vessel?",
    choices: ["Hepatic artery", "Gastroduodenal artery", "Right hepatic artery", "Left hepatic artery"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "What is the normal intra-abdominal pressure for laparoscopy?",
    choices: ["8-10 mmHg", "12-15 mmHg", "18-20 mmHg", "25-30 mmHg"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "Which gas is most commonly used for pneumoperitoneum?",
    choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "The McBurney point is located:",
    choices: ["1/3 the distance from ASIS to umbilicus", "2/3 the distance from ASIS to umbilicus", "1/3 the distance from umbilicus to ASIS", "At the umbilicus"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "Which layer of the bowel wall contains the blood vessels?",
    choices: ["Mucosa", "Submucosa", "Muscularis", "Serosa"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "What is the most common type of bowel anastomosis?",
    choices: ["End-to-end", "End-to-side", "Side-to-side", "Side-to-end"],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Which suture technique is preferred for bowel anastomosis?",
    choices: ["Running", "Interrupted", "Purse-string", "Mattress"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "The ileocecal valve is located between:",
    choices: ["Ileum and cecum", "Jejunum and ileum", "Cecum and ascending colon", "Sigmoid and rectum"],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "What is the most common indication for colostomy?",
    choices: ["Trauma", "Cancer", "Inflammatory bowel disease", "Diverticulitis"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which part of the colon is most commonly affected by diverticulitis in Western countries?",
    choices: ["Cecum", "Ascending colon", "Transverse colon", "Sigmoid colon"],
    correctAnswer: 3
  },
  {
    id: 19,
    question: "The hepatocystic triangle is bounded by:",
    choices: ["Liver, cystic artery, common hepatic duct", "Liver, cystic duct, common hepatic duct", "Gallbladder, cystic artery, liver", "Cystic duct, hepatic artery, liver"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "What is the most common cause of small bowel obstruction in adults?",
    choices: ["Adhesions", "Hernias", "Tumors", "Intussusception"],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "Which imaging study is most useful for diagnosing appendicitis?",
    choices: ["X-ray", "Ultrasound", "CT scan", "MRI"],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "The Whipple procedure involves resection of:",
    choices: ["Pancreatic head", "Pancreatic tail", "Entire pancreas", "Pancreatic body"],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "Which structure is NOT removed in a Whipple procedure?",
    choices: ["Pancreatic head", "Duodenum", "Gallbladder", "Spleen"],
    correctAnswer: 3
  },
  {
    id: 24,
    question: "The most common complication after Whipple procedure is:",
    choices: ["Bleeding", "Pancreatic leak", "Infection", "Delayed gastric emptying"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "Which artery supplies the pancreatic head?",
    choices: ["Splenic artery", "Gastroduodenal artery", "Superior mesenteric artery", "Celiac artery"],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "The ampulla of Vater is located in the:",
    choices: ["Pancreatic head", "Duodenum", "Common bile duct", "Pancreatic duct"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Which position is used for rectal surgery?",
    choices: ["Supine", "Prone", "Lithotomy", "Lateral"],
    correctAnswer: 2
  },
  {
    id: 28,
    question: "The dentate line in the anal canal marks the junction between:",
    choices: ["Internal and external sphincters", "Rectum and anal canal", "Squamous and columnar epithelium", "Voluntary and involuntary muscle"],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "Which nerve controls the external anal sphincter?",
    choices: ["Pudendal nerve", "Pelvic splanchnic nerves", "Hypogastric nerve", "Vagus nerve"],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "The most common type of anal fistula is:",
    choices: ["Intersphincteric", "Transsphincteric", "Suprasphincteric", "Extrasphincteric"],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "Which procedure is performed for pilonidal disease?",
    choices: ["Excision and primary closure", "Excision and secondary healing", "Marsupialization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 32,
    question: "The most common location for pilonidal cysts is:",
    choices: ["Sacrococcygeal area", "Axilla", "Umbilicus", "Groin"],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "Which incision is used for inguinal hernia repair?",
    choices: ["Oblique over inguinal canal", "Transverse", "Vertical", "Curved"],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "The inguinal canal contains which structure in males?",
    choices: ["Spermatic cord", "Round ligament", "Ovarian vessels", "Fallopian tube"],
    correctAnswer: 0
  },
  {
    id: 35,
    question: "Which type of inguinal hernia is more common in adults?",
    choices: ["Direct", "Indirect", "Femoral", "Pantaloon"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "The conjoint tendon is formed by:",
    choices: ["Internal oblique and transversus abdominis", "External oblique and internal oblique", "Transversus abdominis and transversalis fascia", "All three muscle layers"],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "Which nerve is at risk during inguinal hernia repair?",
    choices: ["Lateral femoral cutaneous nerve", "Femoral nerve", "Obturator nerve", "Sciatic nerve"],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "The 'triangle of pain' during laparoscopic hernia repair contains:",
    choices: ["Lateral femoral cutaneous nerve", "Femoral nerve", "Obturator nerve", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "Which mesh is commonly used for inguinal hernia repair?",
    choices: ["Polypropylene", "Polyester", "PTFE", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 40,
    question: "The Lichtenstein repair uses which approach?",
    choices: ["Anterior tension-free", "Posterior", "Laparoscopic", "Preperitoneal"],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "Which laparoscopic technique is used for inguinal hernia repair?",
    choices: ["TEP", "TAPP", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 42,
    question: "The most common complication of mesh hernia repair is:",
    choices: ["Infection", "Chronic pain", "Recurrence", "Seroma"],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "Which structure forms the medial border of the inguinal triangle?",
    choices: ["Inguinal ligament", "Inferior epigastric vessels", "Rectus abdominis", "Conjoint tendon"],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "The deep inguinal ring is an opening in:",
    choices: ["External oblique aponeurosis", "Internal oblique muscle", "Transversalis fascia", "Peritoneum"],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "Which type of hernia has the highest risk of strangulation?",
    choices: ["Inguinal", "Femoral", "Umbilical", "Ventral"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "The femoral canal is bounded medially by:",
    choices: ["Femoral vein", "Lacunar ligament", "Inguinal ligament", "Pectineal ligament"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "Which approach is preferred for femoral hernia repair?",
    choices: ["Inguinal", "Femoral", "Preperitoneal", "Laparoscopic"],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "The most common cause of umbilical hernia in adults is:",
    choices: ["Congenital defect", "Pregnancy", "Obesity", "Previous surgery"],
    correctAnswer: 2
  },
  {
    id: 49,
    question: "Which suture is preferred for fascial closure?",
    choices: ["Absorbable", "Non-absorbable", "Monofilament", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 50,
    question: "The linea alba is composed of:",
    choices: ["Muscle fibers", "Aponeurotic fibers", "Fascial layers", "All of the above"],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "Which incision provides the best exposure for upper abdominal surgery?",
    choices: ["Midline", "Subcostal", "Paramedian", "Transverse"],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "The rectus sheath is formed by aponeuroses of:",
    choices: ["External oblique only", "Internal oblique only", "All three lateral muscles", "Transversus abdominis only"],
    correctAnswer: 2
  },
  {
    id: 53,
    question: "Below the arcuate line, the rectus sheath:",
    choices: ["Completely surrounds the rectus muscle", "Is absent posteriorly", "Is thicker", "Contains more vessels"],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "Which layer is incised first in a midline laparotomy?",
    choices: ["Skin", "Subcutaneous tissue", "Fascia", "Peritoneum"],
    correctAnswer: 0
  },
  {
    id: 55,
    question: "The most important layer for wound strength is:",
    choices: ["Skin", "Subcutaneous tissue", "Fascia", "Muscle"],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "Which closure technique reduces the risk of incisional hernia?",
    choices: ["Continuous", "Interrupted", "Mass closure", "Layered closure"],
    correctAnswer: 2
  },
  {
    id: 57,
    question: "The suture-to-wound length ratio should be:",
    choices: ["1:1", "2:1", "4:1", "6:1"],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "Which factor increases the risk of wound dehiscence?",
    choices: ["Malnutrition", "Infection", "Increased intra-abdominal pressure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 59,
    question: "The most common cause of postoperative ileus is:",
    choices: ["Anesthesia", "Pain medications", "Surgical manipulation", "Electrolyte imbalance"],
    correctAnswer: 2
  },
  {
    id: 60,
    question: "Which sign indicates return of bowel function?",
    choices: ["Bowel sounds", "Flatus", "Bowel movement", "All of the above"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "The most reliable sign of peritonitis is:",
    choices: ["Fever", "Leukocytosis", "Rebound tenderness", "Nausea"],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "Which antibiotic is commonly used for bowel preparation?",
    choices: ["Neomycin", "Erythromycin", "Metronidazole", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 63,
    question: "The most common organism causing surgical site infections is:",
    choices: ["E. coli", "Staphylococcus aureus", "Enterococcus", "Pseudomonas"],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "Prophylactic antibiotics should be given:",
    choices: ["24 hours before surgery", "1 hour before incision", "At induction", "After surgery"],
    correctAnswer: 2
  },
  {
    id: 65,
    question: "The duration of prophylactic antibiotics should be:",
    choices: ["Single dose", "24 hours", "48 hours", "Until discharge"],
    correctAnswer: 0
  },
  {
    id: 66,
    question: "Which position is used for thyroidectomy?",
    choices: ["Supine with neck extension", "Prone", "Lateral", "Sitting"],
    correctAnswer: 0
  },
  {
    id: 67,
    question: "The recurrent laryngeal nerve innervates:",
    choices: ["Cricothyroid muscle", "All intrinsic laryngeal muscles except cricothyroid", "Vocal cords only", "Arytenoid muscles only"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "Which structure is at risk during thyroidectomy?",
    choices: ["Recurrent laryngeal nerve", "Parathyroid glands", "Superior laryngeal nerve", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 69,
    question: "The most common complication of thyroidectomy is:",
    choices: ["Bleeding", "Hypocalcemia", "Voice changes", "Infection"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "Which artery supplies the thyroid gland?",
    choices: ["Superior thyroid artery", "Inferior thyroid artery", "Thyroidea ima artery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 71,
    question: "The Berry ligament connects the thyroid to:",
    choices: ["Trachea", "Cricoid cartilage", "Hyoid bone", "Sternum"],
    correctAnswer: 1
  },
  {
    id: 72,
    question: "Which nerve controls the cricothyroid muscle?",
    choices: ["Recurrent laryngeal nerve", "Superior laryngeal nerve", "Hypoglossal nerve", "Vagus nerve"],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "The most common indication for parathyroidectomy is:",
    choices: ["Hyperparathyroidism", "Cancer", "Goiter", "Infection"],
    correctAnswer: 0
  },
  {
    id: 74,
    question: "How many parathyroid glands are typically present?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 2
  },
  {
    id: 75,
    question: "Which imaging study is used to localize parathyroid adenomas?",
    choices: ["CT scan", "MRI", "Sestamibi scan", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "The most common cause of hyperparathyroidism is:",
    choices: ["Adenoma", "Hyperplasia", "Carcinoma", "Multiple endocrine neoplasia"],
    correctAnswer: 0
  },
  {
    id: 77,
    question: "Which laboratory value is monitored during parathyroidectomy?",
    choices: ["Calcium", "PTH", "Phosphorus", "All of the above"],
    correctAnswer: 1
  },
  {
    id: 78,
    question: "The most common location of ectopic parathyroid glands is:",
    choices: ["Thymus", "Carotid sheath", "Retroesophageal", "Intrathyroidal"],
    correctAnswer: 0
  },
  {
    id: 79,
    question: "Which incision is used for carotid endarterectomy?",
    choices: ["Transverse", "Oblique along sternocleidomastoid", "Vertical", "Curved"],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "The most common indication for carotid endarterectomy is:",
    choices: ["Asymptomatic stenosis >70%", "Symptomatic stenosis >50%", "Acute stroke", "Carotid aneurysm"],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "Which nerve is at risk during carotid endarterectomy?",
    choices: ["Hypoglossal nerve", "Vagus nerve", "Marginal mandibular nerve", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 82,
    question: "The carotid body is located at:",
    choices: ["Carotid bifurcation", "Common carotid artery", "Internal carotid artery", "External carotid artery"],
    correctAnswer: 0
  },
  {
    id: 83,
    question: "Which structure is used for shunting during carotid endarterectomy?",
    choices: ["Javid shunt", "Pruitt shunt", "Argyle shunt", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 84,
    question: "The most common complication of carotid endarterectomy is:",
    choices: ["Stroke", "Myocardial infarction", "Cranial nerve injury", "Bleeding"],
    correctAnswer: 2
  },
  {
    id: 85,
    question: "Which monitoring is used during carotid endarterectomy?",
    choices: ["EEG", "Somatosensory evoked potentials", "Stump pressure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 86,
    question: "The superficial temporal artery is a branch of:",
    choices: ["Internal carotid artery", "External carotid artery", "Maxillary artery", "Facial artery"],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "Which position is used for mastectomy?",
    choices: ["Supine with arm extended", "Lateral", "Prone", "Sitting"],
    correctAnswer: 0
  },
  {
    id: 88,
    question: "The most common type of breast cancer is:",
    choices: ["Ductal carcinoma in situ", "Invasive ductal carcinoma", "Invasive lobular carcinoma", "Inflammatory carcinoma"],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "Which lymph node group is first to receive drainage from the breast?",
    choices: ["Axillary", "Internal mammary", "Supraclavicular", "Infraclavicular"],
    correctAnswer: 0
  },
  {
    id: 90,
    question: "The sentinel lymph node is identified using:",
    choices: ["Blue dye", "Radioactive tracer", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "Which nerve is at risk during axillary lymph node dissection?",
    choices: ["Long thoracic nerve", "Thoracodorsal nerve", "Medial pectoral nerve", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 92,
    question: "The long thoracic nerve innervates:",
    choices: ["Serratus anterior", "Latissimus dorsi", "Pectoralis major", "Pectoralis minor"],
    correctAnswer: 0
  },
  {
    id: 93,
    question: "Injury to the long thoracic nerve causes:",
    choices: ["Winged scapula", "Loss of arm adduction", "Loss of arm abduction", "Numbness"],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "The thoracodorsal nerve innervates:",
    choices: ["Serratus anterior", "Latissimus dorsi", "Pectoralis major", "Teres major"],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "Which muscle forms the posterior border of the axilla?",
    choices: ["Pectoralis major", "Latissimus dorsi", "Serratus anterior", "Subscapularis"],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "The pectoralis minor muscle is:",
    choices: ["Deep to pectoralis major", "Superficial to pectoralis major", "Lateral to pectoralis major", "Medial to pectoralis major"],
    correctAnswer: 0
  },
  {
    id: 97,
    question: "Which artery is the main blood supply to the breast?",
    choices: ["Internal mammary artery", "External mammary artery", "Thoracic artery", "Intercostal arteries"],
    correctAnswer: 0
  },
  {
    id: 98,
    question: "The tail of Spence extends into:",
    choices: ["Axilla", "Supraclavicular area", "Infraclavicular area", "Parasternal area"],
    correctAnswer: 0
  },
  {
    id: 99,
    question: "Which imaging study is most sensitive for breast cancer screening?",
    choices: ["Mammography", "Ultrasound", "MRI", "CT scan"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "The most common benign breast tumor is:",
    choices: ["Fibroadenoma", "Lipoma", "Papilloma", "Phyllodes tumor"],
    correctAnswer: 0
  },
  {
    id: 101,
    question: "Which procedure is performed for gynecomastia?",
    choices: ["Liposuction", "Subcutaneous mastectomy", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 102,
    question: "The most common cause of nipple discharge is:",
    choices: ["Cancer", "Papilloma", "Duct ectasia", "Infection"],
    correctAnswer: 1
  },
  {
    id: 103,
    question: "Which position is used for lung surgery?",
    choices: ["Supine", "Prone", "Lateral decubitus", "Sitting"],
    correctAnswer: 2
  },
  {
    id: 104,
    question: "The most common approach for lung resection is:",
    choices: ["Median sternotomy", "Posterolateral thoracotomy", "Anterolateral thoracotomy", "VATS"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "Which rib is typically removed or divided for thoracotomy?",
    choices: ["4th", "5th", "6th", "7th"],
    correctAnswer: 1
  },
  {
    id: 106,
    question: "The most common type of lung cancer is:",
    choices: ["Adenocarcinoma", "Squamous cell carcinoma", "Small cell carcinoma", "Large cell carcinoma"],
    correctAnswer: 0
  },
  {
    id: 107,
    question: "Which lobe of the lung is most commonly affected by cancer?",
    choices: ["Right upper lobe", "Right lower lobe", "Left upper lobe", "Left lower lobe"],
    correctAnswer: 0
  },
  {
    id: 108,
    question: "The hilum of the lung contains:",
    choices: ["Bronchus", "Pulmonary vessels", "Lymph nodes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 109,
    question: "Which structure is divided first during lobectomy?",
    choices: ["Pulmonary artery", "Pulmonary vein", "Bronchus", "It varies"],
    correctAnswer: 3
  },
  {
    id: 110,
    question: "The most common complication of lung resection is:",
    choices: ["Bleeding", "Air leak", "Infection", "Arrhythmia"],
    correctAnswer: 1
  },
  {
    id: 111,
    question: "Which drainage system is used after thoracotomy?",
    choices: ["Chest tube", "Jackson-Pratt drain", "Penrose drain", "Foley catheter"],
    correctAnswer: 0
  },
  {
    id: 112,
    question: "The pleural space normally contains:",
    choices: ["Air", "Small amount of fluid", "Blood", "Nothing"],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "Which condition requires emergency thoracotomy?",
    choices: ["Pneumothorax", "Hemothorax", "Massive hemothorax", "Pleural effusion"],
    correctAnswer: 2
  },
  {
    id: 114,
    question: "The intercostal nerve runs:",
    choices: ["Above the rib", "Below the rib", "Through the rib", "Anterior to the rib"],
    correctAnswer: 1
  },
  {
    id: 115,
    question: "Which muscle is divided during thoracotomy?",
    choices: ["Latissimus dorsi", "Serratus anterior", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 116,
    question: "The azygos vein drains into:",
    choices: ["Superior vena cava", "Inferior vena cava", "Right atrium", "Pulmonary vein"],
    correctAnswer: 0
  },
  {
    id: 117,
    question: "Which approach is used for esophageal surgery?",
    choices: ["Right thoracotomy", "Left thoracotomy", "Laparotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 118,
    question: "The most common benign esophageal tumor is:",
    choices: ["Leiomyoma", "Lipoma", "Fibroma", "Hemangioma"],
    correctAnswer: 0
  },
  {
    id: 119,
    question: "Which procedure is performed for achalasia?",
    choices: ["Heller myotomy", "Nissen fundoplication", "Toupet fundoplication", "Dor fundoplication"],
    correctAnswer: 0
  },
  {
    id: 120,
    question: "The most common type of hiatal hernia is:",
    choices: ["Type I (sliding)", "Type II (paraesophageal)", "Type III (mixed)", "Type IV (giant)"],
    correctAnswer: 0
  },
  {
    id: 121,
    question: "Which procedure is performed for GERD?",
    choices: ["Heller myotomy", "Nissen fundoplication", "Whipple procedure", "Billroth I"],
    correctAnswer: 1
  },
  {
    id: 122,
    question: "The angle of His is located at:",
    choices: ["Gastroesophageal junction", "Pylorus", "Duodenum", "Jejunum"],
    correctAnswer: 0
  },
  {
    id: 123,
    question: "Which nerve is at risk during fundoplication?",
    choices: ["Vagus nerve", "Phrenic nerve", "Recurrent laryngeal nerve", "Hypoglossal nerve"],
    correctAnswer: 0
  },
  {
    id: 124,
    question: "The short gastric vessels arise from:",
    choices: ["Left gastric artery", "Right gastric artery", "Splenic artery", "Gastroduodenal artery"],
    correctAnswer: 2
  },
  {
    id: 125,
    question: "Which position is used for laparoscopic fundoplication?",
    choices: ["Supine", "Reverse Trendelenburg", "Trendelenburg", "Lateral"],
    correctAnswer: 1
  },
  {
    id: 126,
    question: "The most common complication of fundoplication is:",
    choices: ["Bleeding", "Perforation", "Gas-bloat syndrome", "Infection"],
    correctAnswer: 2
  },
  {
    id: 127,
    question: "Which structure is divided during pyloromyotomy?",
    choices: ["Pyloric muscle", "Pyloric mucosa", "Both A and B", "Neither A nor B"],
    correctAnswer: 0
  },
  {
    id: 128,
    question: "Pyloromyotomy is performed for:",
    choices: ["Pyloric stenosis", "Peptic ulcer", "Gastric cancer", "GERD"],
    correctAnswer: 0
  },
  {
    id: 129,
    question: "The most common age for pyloric stenosis is:",
    choices: ["Newborn", "2-8 weeks", "6 months", "1 year"],
    correctAnswer: 1
  },
  {
    id: 130,
    question: "Which imaging study diagnoses pyloric stenosis?",
    choices: ["X-ray", "CT scan", "Ultrasound", "MRI"],
    correctAnswer: 2
  },
  {
    id: 131,
    question: "The classic triad of pyloric stenosis includes:",
    choices: ["Vomiting, mass, peristalsis", "Fever, vomiting, diarrhea", "Pain, mass, bleeding", "Jaundice, vomiting, mass"],
    correctAnswer: 0
  },
  {
    id: 132,
    question: "Which electrolyte imbalance is common in pyloric stenosis?",
    choices: ["Hyperkalemia", "Hypokalemia", "Hypernatremia", "Hypercalcemia"],
    correctAnswer: 1
  },
  {
    id: 133,
    question: "The incision for open pyloromyotomy is:",
    choices: ["Right upper quadrant", "Epigastric", "Periumbilical", "Right lower quadrant"],
    correctAnswer: 0
  },
  {
    id: 134,
    question: "Which vessel is at risk during pyloromyotomy?",
    choices: ["Gastric artery", "Duodenal artery", "Pyloric artery", "Hepatic artery"],
    correctAnswer: 2
  },
  {
    id: 135,
    question: "The most common complication of pyloromyotomy is:",
    choices: ["Bleeding", "Perforation", "Infection", "Recurrence"],
    correctAnswer: 1
  },
  {
    id: 136,
    question: "Which procedure is performed for gastric cancer?",
    choices: ["Billroth I", "Billroth II", "Total gastrectomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 137,
    question: "The Billroth I procedure involves:",
    choices: ["Gastroduodenostomy", "Gastrojejunostomy", "Esophagojejunostomy", "Duodenojejunostomy"],
    correctAnswer: 0
  },
  {
    id: 138,
    question: "The Billroth II procedure involves:",
    choices: ["Gastroduodenostomy", "Gastrojejunostomy", "Esophagojejunostomy", "Duodenojejunostomy"],
    correctAnswer: 1
  },
  {
    id: 139,
    question: "Which reconstruction is preferred after total gastrectomy?",
    choices: ["Billroth I", "Billroth II", "Roux-en-Y", "Whipple"],
    correctAnswer: 2
  },
  {
    id: 140,
    question: "The most common location of gastric cancer is:",
    choices: ["Fundus", "Body", "Antrum", "Cardia"],
    correctAnswer: 2
  },
  {
    id: 141,
    question: "Which lymph node station is removed in D2 dissection?",
    choices: ["Perigastric nodes", "Nodes along major vessels", "Para-aortic nodes", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 142,
    question: "The left gastric artery arises from:",
    choices: ["Celiac trunk", "Splenic artery", "Common hepatic artery", "Superior mesenteric artery"],
    correctAnswer: 0
  },
  {
    id: 143,
    question: "Which nerve controls gastric motility?",
    choices: ["Sympathetic", "Parasympathetic", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 144,
    question: "The most common complication after gastrectomy is:",
    choices: ["Bleeding", "Anastomotic leak", "Dumping syndrome", "Infection"],
    correctAnswer: 1
  },
  {
    id: 145,
    question: "Dumping syndrome occurs due to:",
    choices: ["Rapid gastric emptying", "Delayed gastric emptying", "Gastric retention", "Pyloric obstruction"],
    correctAnswer: 0
  },
  {
    id: 146,
    question: "Which procedure is performed for morbid obesity?",
    choices: ["Gastric bypass", "Sleeve gastrectomy", "Gastric banding", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 147,
    question: "The most effective bariatric procedure is:",
    choices: ["Gastric bypass", "Sleeve gastrectomy", "Gastric banding", "Duodenal switch"],
    correctAnswer: 3
  },
  {
    id: 148,
    question: "Which complication is specific to gastric banding?",
    choices: ["Band slippage", "Dumping syndrome", "Malabsorption", "Marginal ulcer"],
    correctAnswer: 0
  },
  {
    id: 149,
    question: "The Roux limb in gastric bypass should be:",
    choices: ["75-100 cm", "100-150 cm", "150-200 cm", "200-250 cm"],
    correctAnswer: 1
  },
  {
    id: 150,
    question: "Which vitamin deficiency is common after gastric bypass?",
    choices: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    correctAnswer: 1
  },
  {
    id: 151,
    question: "The most common early complication of bariatric surgery is:",
    choices: ["Bleeding", "Leak", "Obstruction", "Infection"],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "Which test is used to detect anastomotic leak?",
    choices: ["CT scan", "Upper GI series", "Endoscopy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 153,
    question: "The most common long-term complication of gastric bypass is:",
    choices: ["Weight regain", "Nutritional deficiency", "Bowel obstruction", "Marginal ulcer"],
    correctAnswer: 1
  },
  {
    id: 154,
    question: "Which position is used for splenectomy?",
    choices: ["Supine", "Right lateral", "Left lateral", "Prone"],
    correctAnswer: 1
  },
  {
    id: 155,
    question: "The most common indication for splenectomy is:",
    choices: ["Trauma", "ITP", "Spherocytosis", "Lymphoma"],
    correctAnswer: 0
  },
  {
    id: 156,
    question: "Which structure is at risk during splenectomy?",
    choices: ["Pancreatic tail", "Left kidney", "Stomach", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 157,
    question: "The splenic artery arises from:",
    choices: ["Celiac trunk", "Superior mesenteric artery", "Left gastric artery", "Aorta"],
    correctAnswer: 0
  },
  {
    id: 158,
    question: "Which ligament contains the short gastric vessels?",
    choices: ["Gastrosplenic ligament", "Splenorenal ligament", "Splenocolic ligament", "Gastrocolic ligament"],
    correctAnswer: 0
  },
  {
    id: 159,
    question: "The most common complication of splenectomy is:",
    choices: ["Bleeding", "Infection", "Pancreatic injury", "Thrombocytosis"],
    correctAnswer: 2
  },
  {
    id: 160,
    question: "Which vaccination is required before splenectomy?",
    choices: ["Pneumococcal", "Meningococcal", "Haemophilus", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 161,
    question: "The spleen is located in which quadrant?",
    choices: ["Right upper", "Left upper", "Right lower", "Left lower"],
    correctAnswer: 1
  },
  {
    id: 162,
    question: "Which approach is preferred for elective splenectomy?",
    choices: ["Open", "Laparoscopic", "Hand-assisted", "Robotic"],
    correctAnswer: 1
  },
  {
    id: 163,
    question: "The normal weight of the spleen is:",
    choices: ["50-100 grams", "100-200 grams", "200-300 grams", "300-400 grams"],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Which condition causes splenomegaly?",
    choices: ["Portal hypertension", "Hematologic disorders", "Infections", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 165,
    question: "The splenic flexure is supplied by:",
    choices: ["Superior mesenteric artery", "Inferior mesenteric artery", "Both A and B", "Celiac artery"],
    correctAnswer: 2
  },
  {
    id: 166,
    question: "Which procedure is performed for liver tumors?",
    choices: ["Hepatectomy", "Liver transplant", "Ablation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 167,
    question: "The liver has how many functional segments?",
    choices: ["4", "6", "8", "10"],
    correctAnswer: 2
  },
  {
    id: 168,
    question: "Which imaging study is best for liver surgery planning?",
    choices: ["CT scan", "MRI", "Ultrasound", "PET scan"],
    correctAnswer: 1
  },
  {
    id: 169,
    question: "The most common primary liver tumor is:",
    choices: ["Hepatocellular carcinoma", "Cholangiocarcinoma", "Hepatoblastoma", "Angiosarcoma"],
    correctAnswer: 0
  },
  {
    id: 170,
    question: "Which structure divides the liver into right and left lobes?",
    choices: ["Falciform ligament", "Middle hepatic vein", "Portal vein", "Gallbladder"],
    correctAnswer: 1
  },
  {
    id: 171,
    question: "The portal triad consists of:",
    choices: ["Portal vein, hepatic artery, bile duct", "Portal vein, hepatic vein, bile duct", "Hepatic artery, hepatic vein, bile duct", "Portal vein, hepatic artery, hepatic vein"],
    correctAnswer: 0
  },
  {
    id: 172,
    question: "Which technique is used to control bleeding during liver resection?",
    choices: ["Pringle maneuver", "Vascular clamps", "Argon beam coagulator", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 173,
    question: "The Pringle maneuver involves clamping:",
    choices: ["Hepatic artery", "Portal vein", "Hepatoduodenal ligament", "Inferior vena cava"],
    correctAnswer: 2
  },
  {
    id: 174,
    question: "Which position is used for liver surgery?",
    choices: ["Supine", "Reverse Trendelenburg", "Left lateral", "Right lateral"],
    correctAnswer: 1
  },
  {
    id: 175,
    question: "The most common complication of liver resection is:",
    choices: ["Bleeding", "Bile leak", "Liver failure", "Infection"],
    correctAnswer: 1
  },
  {
    id: 176,
    question: "Which test assesses liver function preoperatively?",
    choices: ["Bilirubin", "Albumin", "PT/INR", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 177,
    question: "The Child-Pugh score assesses:",
    choices: ["Liver function", "Kidney function", "Heart function", "Lung function"],
    correctAnswer: 0
  },
  {
    id: 178,
    question: "Which incision is used for liver transplant?",
    choices: ["Midline", "Subcostal", "Mercedes incision", "Kocher"],
    correctAnswer: 2
  },
  {
    id: 179,
    question: "The most common indication for liver transplant is:",
    choices: ["Hepatitis C", "Alcoholic liver disease", "NASH", "Hepatocellular carcinoma"],
    correctAnswer: 0
  },
  {
    id: 180,
    question: "Which immunosuppressive drug is commonly used after liver transplant?",
    choices: ["Tacrolimus", "Cyclosporine", "Mycophenolate", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 181,
    question: "The most common early complication of liver transplant is:",
    choices: ["Rejection", "Infection", "Bleeding", "Biliary complications"],
    correctAnswer: 3
  },
  {
    id: 182,
    question: "Which artery is reconstructed in liver transplant?",
    choices: ["Hepatic artery", "Splenic artery", "Gastric artery", "Renal artery"],
    correctAnswer: 0
  },
  {
    id: 183,
    question: "The portal vein anastomosis in liver transplant is:",
    choices: ["End-to-end", "End-to-side", "Side-to-side", "Interposition graft"],
    correctAnswer: 0
  },
  {
    id: 184,
    question: "Which bile duct reconstruction is preferred in liver transplant?",
    choices: ["Duct-to-duct", "Roux-en-Y", "Both are acceptable", "Neither is preferred"],
    correctAnswer: 2
  },
  {
    id: 185,
    question: "The most common cause of bile duct stricture after liver transplant is:",
    choices: ["Technical error", "Ischemia", "Rejection", "Infection"],
    correctAnswer: 1
  },
  {
    id: 186,
    question: "Which procedure is performed for pancreatic cancer?",
    choices: ["Whipple", "Distal pancreatectomy", "Total pancreatectomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 187,
    question: "The most common location of pancreatic cancer is:",
    choices: ["Head", "Body", "Tail", "Neck"],
    correctAnswer: 0
  },
  {
    id: 188,
    question: "Which imaging study is best for pancreatic cancer staging?",
    choices: ["CT scan", "MRI", "EUS", "PET scan"],
    correctAnswer: 0
  },
  {
    id: 189,
    question: "The Whipple procedure includes resection of:",
    choices: ["Pancreatic head", "Duodenum", "Gallbladder", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 190,
    question: "Which vessel is at risk during Whipple procedure?",
    choices: ["Superior mesenteric artery", "Superior mesenteric vein", "Portal vein", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 191,
    question: "The most common reconstruction after Whipple is:",
    choices: ["Pancreaticojejunostomy", "Pancreaticogastrostomy", "Both are acceptable", "Neither is preferred"],
    correctAnswer: 2
  },
  {
    id: 192,
    question: "Which complication is specific to pancreatic surgery?",
    choices: ["Pancreatic leak", "Delayed gastric emptying", "Diabetes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 193,
    question: "The pancreatic duct of Wirsung drains into:",
    choices: ["Duodenum", "Jejunum", "Stomach", "Common bile duct"],
    correctAnswer: 0
  },
  {
    id: 194,
    question: "Which hormone is produced by pancreatic islets?",
    choices: ["Insulin", "Glucagon", "Somatostatin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 195,
    question: "The uncinate process is part of:",
    choices: ["Pancreatic head", "Pancreatic body", "Pancreatic tail", "Duodenum"],
    correctAnswer: 0
  },
  {
    id: 196,
    question: "Which procedure is performed for chronic pancreatitis?",
    choices: ["Puestow procedure", "Whipple procedure", "Distal pancreatectomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 197,
    question: "The Puestow procedure involves:",
    choices: ["Pancreaticojejunostomy", "Lateral pancreaticojejunostomy", "Pancreaticogastrostomy", "Pancreaticoduodenostomy"],
    correctAnswer: 1
  },
  {
    id: 198,
    question: "Which test diagnoses pancreatic exocrine insufficiency?",
    choices: ["Fecal elastase", "72-hour fecal fat", "Secretin test", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 199,
    question: "The most common islet cell tumor is:",
    choices: ["Insulinoma", "Gastrinoma", "Glucagonoma", "VIPoma"],
    correctAnswer: 0
  },
  {
    id: 200,
    question: "Zollinger-Ellison syndrome is caused by:",
    choices: ["Insulinoma", "Gastrinoma", "Glucagonoma", "VIPoma"],
    correctAnswer: 1
  },
  {
    id: 201,
    question: "Which procedure is performed for small bowel obstruction?",
    choices: ["Lysis of adhesions", "Bowel resection", "Bypass", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 202,
    question: "The most common cause of small bowel obstruction is:",
    choices: ["Adhesions", "Hernias", "Tumors", "Intussusception"],
    correctAnswer: 0
  },
  {
    id: 203,
    question: "Which imaging study is best for small bowel obstruction?",
    choices: ["X-ray", "CT scan", "MRI", "Ultrasound"],
    correctAnswer: 1
  },
  {
    id: 204,
    question: "The classic triad of small bowel obstruction includes:",
    choices: ["Pain, vomiting, distension", "Pain, fever, leukocytosis", "Vomiting, diarrhea, dehydration", "Pain, bleeding, shock"],
    correctAnswer: 0
  },
  {
    id: 205,
    question: "Which sign indicates strangulated bowel?",
    choices: ["Fever", "Leukocytosis", "Metabolic acidosis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 206,
    question: "The transition point in bowel obstruction is:",
    choices: ["Where bowel changes from dilated to collapsed", "Where bowel is most dilated", "Where bowel is least dilated", "Where bowel is perforated"],
    correctAnswer: 0
  },
  {
    id: 207,
    question: "Which procedure is performed for Crohn's disease?",
    choices: ["Stricturoplasty", "Bowel resection", "Bypass", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 208,
    question: "The most common location of Crohn's disease is:",
    choices: ["Ileum", "Jejunum", "Colon", "Rectum"],
    correctAnswer: 0
  },
  {
    id: 209,
    question: "Which feature is characteristic of Crohn's disease?",
    choices: ["Skip lesions", "Transmural inflammation", "Granulomas", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 210,
    question: "The most common complication of Crohn's disease is:",
    choices: ["Obstruction", "Perforation", "Bleeding", "Fistula"],
    correctAnswer: 0
  },
  {
    id: 211,
    question: "Which procedure is performed for ulcerative colitis?",
    choices: ["Total colectomy", "Proctocolectomy", "IPAA", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 212,
    question: "IPAA stands for:",
    choices: ["Ileal pouch-anal anastomosis", "Ileocolic pouch-anal anastomosis", "Ileal pouch-abdominal anastomosis", "Ileostomy pouch-anal anastomosis"],
    correctAnswer: 0
  },
  {
    id: 213,
    question: "Which feature distinguishes ulcerative colitis from Crohn's disease?",
    choices: ["Continuous involvement", "Mucosal inflammation", "Rectal involvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 214,
    question: "The most serious complication of ulcerative colitis is:",
    choices: ["Bleeding", "Perforation", "Toxic megacolon", "Cancer"],
    correctAnswer: 2
  },
  {
    id: 215,
    question: "Which medication is used for inflammatory bowel disease?",
    choices: ["5-ASA", "Steroids", "Immunosuppressants", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 216,
    question: "The most common site of gastrointestinal bleeding is:",
    choices: ["Esophagus", "Stomach", "Duodenum", "Colon"],
    correctAnswer: 2
  },
  {
    id: 217,
    question: "Which procedure is performed for upper GI bleeding?",
    choices: ["Endoscopy", "Angiography", "Surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 218,
    question: "The most common cause of upper GI bleeding is:",
    choices: ["Peptic ulcer", "Varices", "Mallory-Weiss tear", "Boerhaave syndrome"],
    correctAnswer: 0
  },
  {
    id: 219,
    question: "Which endoscopic therapy is used for bleeding ulcers?",
    choices: ["Injection", "Thermal therapy", "Clips", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 220,
    question: "The Forrest classification describes:",
    choices: ["Ulcer appearance", "Bleeding severity", "Treatment response", "Prognosis"],
    correctAnswer: 0
  },
  {
    id: 221,
    question: "Which procedure is performed for lower GI bleeding?",
    choices: ["Colonoscopy", "Angiography", "Surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 222,
    question: "The most common cause of lower GI bleeding is:",
    choices: ["Diverticulosis", "Hemorrhoids", "Cancer", "Inflammatory bowel disease"],
    correctAnswer: 0
  },
  {
    id: 223,
    question: "Which imaging study localizes GI bleeding?",
    choices: ["Tagged RBC scan", "Angiography", "CT angiography", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 224,
    question: "The minimum bleeding rate for angiographic detection is:",
    choices: ["0.1 mL/min", "0.5 mL/min", "1.0 mL/min", "2.0 mL/min"],
    correctAnswer: 1
  },
  {
    id: 225,
    question: "Which procedure is performed for massive GI bleeding?",
    choices: ["Endoscopy", "Angiographic embolization", "Surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 226,
    question: "The most common cause of acute abdomen is:",
    choices: ["Appendicitis", "Cholecystitis", "Bowel obstruction", "Perforation"],
    correctAnswer: 0
  },
  {
    id: 227,
    question: "Which sign indicates peritoneal irritation?",
    choices: ["Rebound tenderness", "Guarding", "Rigidity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 228,
    question: "The most reliable sign of peritonitis is:",
    choices: ["Fever", "Leukocytosis", "Rebound tenderness", "Nausea"],
    correctAnswer: 2
  },
  {
    id: 229,
    question: "Which imaging study is best for acute abdomen?",
    choices: ["X-ray", "CT scan", "Ultrasound", "MRI"],
    correctAnswer: 1
  },
  {
    id: 230,
    question: "The most common cause of pneumoperitoneum is:",
    choices: ["Perforation", "Recent surgery", "Pneumatosis", "Barotrauma"],
    correctAnswer: 1
  },
  {
    id: 231,
    question: "Which procedure is performed for perforated ulcer?",
    choices: ["Graham patch", "Omental patch", "Primary repair", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 232,
    question: "The most common site of ulcer perforation is:",
    choices: ["Gastric antrum", "Duodenal bulb", "Gastric fundus", "Pylorus"],
    correctAnswer: 1
  },
  {
    id: 233,
    question: "Which factor increases risk of ulcer perforation?",
    choices: ["NSAIDs", "H. pylori", "Smoking", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 234,
    question: "The most common complication of perforated ulcer is:",
    choices: ["Bleeding", "Obstruction", "Peritonitis", "Sepsis"],
    correctAnswer: 2
  },
  {
    id: 235,
    question: "Which antibiotic is used for perforated ulcer?",
    choices: ["Ampicillin", "Cefazolin", "Metronidazole", "Broad-spectrum"],
    correctAnswer: 3
  },
  {
    id: 236,
    question: "The most common cause of mesenteric ischemia is:",
    choices: ["Embolism", "Thrombosis", "Non-occlusive", "Venous thrombosis"],
    correctAnswer: 0
  },
  {
    id: 237,
    question: "Which artery is most commonly affected in mesenteric ischemia?",
    choices: ["Celiac artery", "Superior mesenteric artery", "Inferior mesenteric artery", "Hepatic artery"],
    correctAnswer: 1
  },
  {
    id: 238,
    question: "The classic presentation of mesenteric ischemia is:",
    choices: ["Pain out of proportion to exam", "Bloody diarrhea", "Fever", "Vomiting"],
    correctAnswer: 0
  },
  {
    id: 239,
    question: "Which imaging study diagnoses mesenteric ischemia?",
    choices: ["CT angiography", "MR angiography", "Conventional angiography", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 240,
    question: "The treatment for acute mesenteric ischemia is:",
    choices: ["Embolectomy", "Bypass", "Thrombolysis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 241,
    question: "Which procedure is performed for volvulus?",
    choices: ["Detorsion", "Resection", "Fixation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 242,
    question: "The most common type of volvulus is:",
    choices: ["Sigmoid", "Cecal", "Small bowel", "Gastric"],
    correctAnswer: 0
  },
  {
    id: 243,
    question: "Which imaging finding is characteristic of volvulus?",
    choices: ["Coffee bean sign", "Whirl sign", "Bird's beak sign", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 244,
    question: "The initial treatment for sigmoid volvulus is:",
    choices: ["Surgery", "Endoscopic detorsion", "Observation", "Antibiotics"],
    correctAnswer: 1
  },
  {
    id: 245,
    question: "Which factor predisposes to volvulus?",
    choices: ["Long mesentery", "Adhesions", "Previous surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 246,
    question: "The most common cause of intussusception in adults is:",
    choices: ["Idiopathic", "Tumor", "Polyp", "Adhesions"],
    correctAnswer: 1
  },
  {
    id: 247,
    question: "Which imaging study diagnoses intussusception?",
    choices: ["X-ray", "CT scan", "Ultrasound", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 248,
    question: "The treatment for intussusception in children is:",
    choices: ["Observation", "Enema reduction", "Surgery", "Antibiotics"],
    correctAnswer: 1
  },
  {
    id: 249,
    question: "Which type of enema is used for intussusception reduction?",
    choices: ["Barium", "Air", "Saline", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 250,
    question: "The contraindication to enema reduction is:",
    choices: ["Peritonitis", "Perforation", "Shock", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 251,
    question: "Which procedure is performed for rectal prolapse?",
    choices: ["Perineal repair", "Abdominal repair", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 252,
    question: "The most common type of rectal prolapse is:",
    choices: ["Mucosal", "Full-thickness", "Internal", "Partial"],
    correctAnswer: 1
  },
  {
    id: 253,
    question: "Which abdominal procedure is performed for rectal prolapse?",
    choices: ["Rectopexy", "Resection rectopexy", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 254,
    question: "The Altemeier procedure is:",
    choices: ["Perineal repair", "Abdominal repair", "Laparoscopic repair", "Endoscopic repair"],
    correctAnswer: 0
  },
  {
    id: 255,
    question: "Which factor predisposes to rectal prolapse?",
    choices: ["Age", "Constipation", "Multiparity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 256,
    question: "The most common symptom of rectal prolapse is:",
    choices: ["Pain", "Bleeding", "Protrusion", "Incontinence"],
    correctAnswer: 2
  },
  {
    id: 257,
    question: "Which procedure is performed for hemorrhoids?",
    choices: ["Hemorrhoidectomy", "Banding", "Sclerotherapy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 258,
    question: "The most common type of hemorrhoids is:",
    choices: ["Internal", "External", "Mixed", "Thrombosed"],
    correctAnswer: 0
  },
  {
    id: 259,
    question: "Which grade of hemorrhoids requires surgery?",
    choices: ["Grade I", "Grade II", "Grade III", "Grade IV"],
    correctAnswer: 3
  },
  {
    id: 260,
    question: "The most effective treatment for hemorrhoids is:",
    choices: ["Medical", "Banding", "Surgery", "Sclerotherapy"],
    correctAnswer: 2
  },
  {
    id: 261,
    question: "Which complication is associated with hemorrhoidectomy?",
    choices: ["Bleeding", "Infection", "Stricture", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 262,
    question: "The PPH procedure stands for:",
    choices: ["Procedure for prolapse and hemorrhoids", "Prolapse and hemorrhoid procedure", "Prolapsing pile hemorrhoidectomy", "Prolapse prevention hemorrhoidectomy"],
    correctAnswer: 0
  },
  {
    id: 263,
    question: "Which procedure is performed for anal fissure?",
    choices: ["Lateral internal sphincterotomy", "Fissurectomy", "Advancement flap", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 264,
    question: "The most common location of anal fissure is:",
    choices: ["Anterior", "Posterior", "Lateral", "Circumferential"],
    correctAnswer: 1
  },
  {
    id: 265,
    question: "Which muscle is divided in lateral internal sphincterotomy?",
    choices: ["External anal sphincter", "Internal anal sphincter", "Puborectalis", "Levator ani"],
    correctAnswer: 1
  },
  {
    id: 266,
    question: "The most common cause of anal fissure is:",
    choices: ["Trauma", "Constipation", "Diarrhea", "Infection"],
    correctAnswer: 1
  },
  {
    id: 267,
    question: "Which medication is used for anal fissure?",
    choices: ["Nitroglycerin", "Calcium channel blockers", "Botulinum toxin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 268,
    question: "The classic triad of anal fissure includes:",
    choices: ["Pain, bleeding, spasm", "Pain, swelling, discharge", "Bleeding, itching, prolapse", "Pain, prolapse, incontinence"],
    correctAnswer: 0
  },
  {
    id: 269,
    question: "Which procedure is performed for anal fistula?",
    choices: ["Fistulotomy", "Fistulectomy", "Seton placement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 270,
    question: "The most common cause of anal fistula is:",
    choices: ["Trauma", "Infection", "Crohn's disease", "Cancer"],
    correctAnswer: 1
  },
  {
    id: 271,
    question: "Which classification is used for anal fistula?",
    choices: ["Parks classification", "Goodsall's rule", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 272,
    question: "The most common type of anal fistula is:",
    choices: ["Intersphincteric", "Transsphincteric", "Suprasphincteric", "Extrasphincteric"],
    correctAnswer: 0
  },
  {
    id: 273,
    question: "Which imaging study is best for anal fistula?",
    choices: ["CT scan", "MRI", "Ultrasound", "Fistulography"],
    correctAnswer: 1
  },
  {
    id: 274,
    question: "The risk of incontinence after fistulotomy depends on:",
    choices: ["Fistula type", "Sphincter involvement", "Patient age", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 275,
    question: "Which procedure is performed for perianal abscess?",
    choices: ["Incision and drainage", "Antibiotics only", "Observation", "Fistulotomy"],
    correctAnswer: 0
  },
  {
    id: 276,
    question: "The most common organism causing perianal abscess is:",
    choices: ["E. coli", "Bacteroides", "Enterococcus", "Mixed flora"],
    correctAnswer: 3
  },
  {
    id: 277,
    question: "Which type of perianal abscess is most common?",
    choices: ["Perianal", "Ischiorectal", "Intersphincteric", "Supralevator"],
    correctAnswer: 0
  },
  {
    id: 278,
    question: "The most serious complication of perianal abscess is:",
    choices: ["Fistula formation", "Necrotizing fasciitis", "Sepsis", "Incontinence"],
    correctAnswer: 1
  },
  {
    id: 279,
    question: "Which antibiotic is used for perianal abscess?",
    choices: ["Penicillin", "Cephalexin", "Metronidazole", "Broad-spectrum"],
    correctAnswer: 3
  },
  {
    id: 280,
    question: "The horseshoe abscess involves:",
    choices: ["Perianal space", "Ischiorectal space", "Deep postanal space", "Intersphincteric space"],
    correctAnswer: 2
  },
  {
    id: 281,
    question: "Which procedure is performed for hidradenitis suppurativa?",
    choices: ["Wide excision", "Incision and drainage", "Antibiotics", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 282,
    question: "The most common location of hidradenitis suppurativa is:",
    choices: ["Axilla", "Groin", "Perianal", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 283,
    question: "Which factor predisposes to hidradenitis suppurativa?",
    choices: ["Obesity", "Smoking", "Diabetes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 284,
    question: "The Hurley staging system is used for:",
    choices: ["Hidradenitis suppurativa", "Pilonidal disease", "Anal fistula", "Perianal abscess"],
    correctAnswer: 0
  },
  {
    id: 285,
    question: "Which treatment is most effective for severe hidradenitis suppurativa?",
    choices: ["Antibiotics", "Wide excision", "Laser therapy", "Immunosuppressants"],
    correctAnswer: 1
  },
  {
    id: 286,
    question: "The most common complication of hidradenitis suppurativa is:",
    choices: ["Scarring", "Contracture", "Malignancy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 287,
    question: "Which procedure is performed for necrotizing fasciitis?",
    choices: ["Debridement", "Antibiotics", "Hyperbaric oxygen", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 288,
    question: "The most important treatment for necrotizing fasciitis is:",
    choices: ["Antibiotics", "Surgery", "Supportive care", "Hyperbaric oxygen"],
    correctAnswer: 1
  },
  {
    id: 289,
    question: "Which organism causes Type I necrotizing fasciitis?",
    choices: ["Group A Streptococcus", "Clostridium", "Mixed flora", "Staphylococcus"],
    correctAnswer: 2
  },
  {
    id: 290,
    question: "The LRINEC score is used for:",
    choices: ["Necrotizing fasciitis", "Cellulitis", "Abscess", "Gangrene"],
    correctAnswer: 0
  },
  {
    id: 291,
    question: "Which sign is pathognomonic for necrotizing fasciitis?",
    choices: ["Pain out of proportion", "Skin necrosis", "Crepitus", "Fever"],
    correctAnswer: 1
  },
  {
    id: 292,
    question: "The mortality rate of necrotizing fasciitis is:",
    choices: ["5-10%", "15-25%", "30-40%", "50-60%"],
    correctAnswer: 2
  },
  {
    id: 293,
    question: "Which procedure is performed for compartment syndrome?",
    choices: ["Fasciotomy", "Debridement", "Amputation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 294,
    question: "The most reliable sign of compartment syndrome is:",
    choices: ["Pain", "Paresthesias", "Pulselessness", "Paralysis"],
    correctAnswer: 0
  },
  {
    id: 295,
    question: "Which measurement confirms compartment syndrome?",
    choices: ["Compartment pressure", "Ankle-brachial index", "Capillary refill", "Pulse oximetry"],
    correctAnswer: 0
  },
  {
    id: 296,
    question: "The normal compartment pressure is:",
    choices: ["0-8 mmHg", "10-15 mmHg", "20-25 mmHg", "30-35 mmHg"],
    correctAnswer: 0
  },
  {
    id: 297,
    question: "Compartment syndrome is diagnosed when pressure exceeds:",
    choices: ["20 mmHg", "30 mmHg", "40 mmHg", "50 mmHg"],
    correctAnswer: 1
  },
  {
    id: 298,
    question: "The most common cause of compartment syndrome is:",
    choices: ["Trauma", "Surgery", "Infection", "Ischemia"],
    correctAnswer: 0
  },
  {
    id: 299,
    question: "Which compartment is most commonly affected in the leg?",
    choices: ["Anterior", "Lateral", "Superficial posterior", "Deep posterior"],
    correctAnswer: 0
  },
  {
    id: 300,
    question: "The time limit for fasciotomy in compartment syndrome is:",
    choices: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctAnswer: 2
  },
  {
    id: 301,
    question: "Which incision is used for leg fasciotomy?",
    choices: ["Single lateral", "Single medial", "Double incision", "Circumferential"],
    correctAnswer: 2
  },
  {
    id: 302,
    question: "The most serious complication of compartment syndrome is:",
    choices: ["Infection", "Contracture", "Amputation", "Death"],
    correctAnswer: 2
  },
  {
    id: 303,
    question: "Which procedure is performed for diabetic foot ulcer?",
    choices: ["Debridement", "Revascularization", "Amputation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 304,
    question: "The Wagner classification is used for:",
    choices: ["Diabetic foot ulcers", "Pressure ulcers", "Venous ulcers", "Arterial ulcers"],
    correctAnswer: 0
  },
  {
    id: 305,
    question: "Which factor is most important in diabetic foot ulcer healing?",
    choices: ["Glucose control", "Pressure relief", "Infection control", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 306,
    question: "The most common organism in diabetic foot infection is:",
    choices: ["Staphylococcus aureus", "Streptococcus", "Pseudomonas", "Mixed flora"],
    correctAnswer: 0
  },
  {
    id: 307,
    question: "Which imaging study is best for osteomyelitis?",
    choices: ["X-ray", "CT scan", "MRI", "Bone scan"],
    correctAnswer: 2
  },
  {
    id: 308,
    question: "The gold standard for diagnosing osteomyelitis is:",
    choices: ["MRI", "Bone biopsy", "Blood culture", "ESR/CRP"],
    correctAnswer: 1
  },
  {
    id: 309,
    question: "Which level of amputation preserves the most function?",
    choices: ["Toe", "Transmetatarsal", "Below-knee", "Above-knee"],
    correctAnswer: 1
  },
  {
    id: 310,
    question: "The most important factor for amputation healing is:",
    choices: ["Level of amputation", "Blood supply", "Infection control", "Patient age"],
    correctAnswer: 1
  },
  {
    id: 311,
    question: "Which procedure is performed for varicose veins?",
    choices: ["Stripping", "Sclerotherapy", "Endovenous ablation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 312,
    question: "The most common cause of varicose veins is:",
    choices: ["Valve incompetence", "Obstruction", "Trauma", "Infection"],
    correctAnswer: 0
  },
  {
    id: 313,
    question: "Which vein is most commonly affected by varicosities?",
    choices: ["Great saphenous", "Small saphenous", "Perforating veins", "Deep veins"],
    correctAnswer: 0
  },
  {
    id: 314,
    question: "The saphenofemoral junction is located at:",
    choices: ["Groin", "Knee", "Ankle", "Thigh"],
    correctAnswer: 0
  },
  {
    id: 315,
    question: "Which test evaluates venous insufficiency?",
    choices: ["Duplex ultrasound", "Venography", "Plethysmography", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 316,
    question: "The most effective treatment for venous insufficiency is:",
    choices: ["Compression", "Elevation", "Surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 317,
    question: "Which complication is associated with varicose veins?",
    choices: ["Bleeding", "Thrombophlebitis", "Ulceration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 318,
    question: "The CEAP classification is used for:",
    choices: ["Chronic venous disease", "Arterial disease", "Lymphatic disease", "Deep vein thrombosis"],
    correctAnswer: 0
  },
  {
    id: 319,
    question: "Which procedure is performed for deep vein thrombosis?",
    choices: ["Anticoagulation", "Thrombolysis", "Thrombectomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 320,
    question: "The most common location of deep vein thrombosis is:",
    choices: ["Calf", "Thigh", "Pelvis", "Arm"],
    correctAnswer: 0
  },
  {
    id: 321,
    question: "Which factor increases risk of deep vein thrombosis?",
    choices: ["Surgery", "Immobilization", "Cancer", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 322,
    question: "The Wells score is used for:",
    choices: ["Deep vein thrombosis", "Pulmonary embolism", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 323,
    question: "Which test is most accurate for deep vein thrombosis?",
    choices: ["D-dimer", "Duplex ultrasound", "Venography", "CT scan"],
    correctAnswer: 2
  },
  {
    id: 324,
    question: "The most serious complication of deep vein thrombosis is:",
    choices: ["Post-thrombotic syndrome", "Pulmonary embolism", "Chronic pain", "Ulceration"],
    correctAnswer: 1
  },
  {
    id: 325,
    question: "Which filter is used for pulmonary embolism prevention?",
    choices: ["Greenfield filter", "Bird's nest filter", "OptEase filter", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 326,
    question: "The indication for IVC filter placement is:",
    choices: ["Contraindication to anticoagulation", "Recurrent PE on anticoagulation", "Massive PE", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 327,
    question: "Which procedure is performed for arterial occlusion?",
    choices: ["Embolectomy", "Bypass", "Angioplasty", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 328,
    question: "The most common cause of acute arterial occlusion is:",
    choices: ["Embolism", "Thrombosis", "Trauma", "Dissection"],
    correctAnswer: 0
  },
  {
    id: 329,
    question: "Which catheter is used for embolectomy?",
    choices: ["Fogarty catheter", "Balloon catheter", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 330,
    question: "The 6 P's of acute arterial occlusion include:",
    choices: ["Pain, pallor, pulselessness", "Paresthesias, paralysis, poikilothermia", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 331,
    question: "Which imaging study is best for arterial occlusion?",
    choices: ["Duplex ultrasound", "CT angiography", "MR angiography", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 332,
    question: "The time limit for limb salvage in acute arterial occlusion is:",
    choices: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctAnswer: 2
  },
  {
    id: 333,
    question: "Which procedure is performed for chronic arterial occlusion?",
    choices: ["Bypass", "Angioplasty", "Stenting", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 334,
    question: "The most common site of peripheral arterial disease is:",
    choices: ["Aortoiliac", "Femoropopliteal", "Infrapopliteal", "Carotid"],
    correctAnswer: 1
  },
  {
    id: 335,
    question: "Which graft is preferred for infrainguinal bypass?",
    choices: ["Saphenous vein", "PTFE", "Dacron", "Cryopreserved vein"],
    correctAnswer: 0
  },
  {
    id: 336,
    question: "The ankle-brachial index in normal individuals is:",
    choices: ["0.5-0.8", "0.9-1.3", "1.4-1.6", "1.7-2.0"],
    correctAnswer: 1
  },
  {
    id: 337,
    question: "An ABI less than 0.9 indicates:",
    choices: ["Normal", "Mild disease", "Moderate disease", "Severe disease"],
    correctAnswer: 1
  },
  {
    id: 338,
    question: "Which symptom is characteristic of claudication?",
    choices: ["Rest pain", "Exercise-induced pain", "Constant pain", "Night pain"],
    correctAnswer: 1
  },
  {
    id: 339,
    question: "The most effective treatment for claudication is:",
    choices: ["Exercise", "Medication", "Surgery", "Angioplasty"],
    correctAnswer: 0
  },
  {
    id: 340,
    question: "Which medication is used for claudication?",
    choices: ["Cilostazol", "Pentoxifylline", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 341,
    question: "The indication for revascularization in PAD is:",
    choices: ["Claudication", "Rest pain", "Tissue loss", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 342,
    question: "Which procedure is performed for aortic aneurysm?",
    choices: ["Open repair", "Endovascular repair", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 343,
    question: "The threshold size for AAA repair is:",
    choices: ["4.5 cm", "5.0 cm", "5.5 cm", "6.0 cm"],
    correctAnswer: 2
  },
  {
    id: 344,
    question: "Which imaging study is best for AAA surveillance?",
    choices: ["Ultrasound", "CT scan", "MRI", "Angiography"],
    correctAnswer: 0
  },
  {
    id: 345,
    question: "The most common location of aortic aneurysm is:",
    choices: ["Ascending aorta", "Aortic arch", "Descending aorta", "Infrarenal aorta"],
    correctAnswer: 3
  },
  {
    id: 346,
    question: "Which factor increases AAA rupture risk?",
    choices: ["Size", "Growth rate", "Hypertension", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 347,
    question: "The mortality rate of ruptured AAA is:",
    choices: ["20-30%", "40-50%", "60-70%", "80-90%"],
    correctAnswer: 3
  },
  {
    id: 348,
    question: "Which graft is used for aortic replacement?",
    choices: ["Dacron", "PTFE", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 349,
    question: "The most common complication of AAA repair is:",
    choices: ["Bleeding", "Infection", "Graft thrombosis", "Colonic ischemia"],
    correctAnswer: 0
  },
  {
    id: 350,
    question: "Which artery is at risk during AAA repair?",
    choices: ["Hypogastric artery", "Inferior mesenteric artery", "Lumbar arteries", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 351,
    question: "The advantage of EVAR over open repair is:",
    choices: ["Lower morbidity", "Shorter hospital stay", "Faster recovery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 352,
    question: "Which complication is specific to EVAR?",
    choices: ["Endoleak", "Migration", "Kinking", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 353,
    question: "Type I endoleak is:",
    choices: ["Attachment site leak", "Branch vessel leak", "Graft porosity", "Component separation"],
    correctAnswer: 0
  },
  {
    id: 354,
    question: "The most serious type of endoleak is:",
    choices: ["Type I", "Type II", "Type III", "Type IV"],
    correctAnswer: 0
  },
  {
    id: 355,
    question: "Which procedure is performed for carotid stenosis?",
    choices: ["Endarterectomy", "Stenting", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 356,
    question: "The indication for carotid intervention is:",
    choices: ["Symptomatic stenosis >50%", "Asymptomatic stenosis >70%", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 357,
    question: "Which imaging study is best for carotid stenosis?",
    choices: ["Duplex ultrasound", "CT angiography", "MR angiography", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 358,
    question: "The most common cause of stroke is:",
    choices: ["Carotid stenosis", "Cardiac embolism", "Small vessel disease", "Hemorrhage"],
    correctAnswer: 1
  },
  {
    id: 359,
    question: "Which nerve is at risk during carotid surgery?",
    choices: ["Hypoglossal", "Vagus", "Marginal mandibular", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 360,
    question: "The most common complication of carotid surgery is:",
    choices: ["Stroke", "Cranial nerve injury", "Bleeding", "Infection"],
    correctAnswer: 1
  },
  {
    id: 361,
    question: "Which monitoring is used during carotid surgery?",
    choices: ["EEG", "SSEP", "Stump pressure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 362,
    question: "The advantage of carotid stenting is:",
    choices: ["Less invasive", "No general anesthesia", "Shorter recovery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 363,
    question: "Which device is used for embolic protection during carotid stenting?",
    choices: ["Filter", "Balloon occlusion", "Flow reversal", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 364,
    question: "The restenosis rate after carotid endarterectomy is:",
    choices: ["1-5%", "5-10%", "10-15%", "15-20%"],
    correctAnswer: 0
  },
  {
    id: 365,
    question: "Which procedure is performed for renal artery stenosis?",
    choices: ["Angioplasty", "Stenting", "Bypass", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 366,
    question: "The most common cause of renal artery stenosis is:",
    choices: ["Atherosclerosis", "Fibromuscular dysplasia", "Takayasu arteritis", "Neurofibromatosis"],
    correctAnswer: 0
  },
  {
    id: 367,
    question: "Which imaging study is best for renal artery stenosis?",
    choices: ["Duplex ultrasound", "CT angiography", "MR angiography", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 368,
    question: "The indication for renal artery intervention is:",
    choices: ["Hypertension", "Renal insufficiency", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 369,
    question: "Which graft is used for renal artery bypass?",
    choices: ["Saphenous vein", "Hypogastric artery", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 370,
    question: "The success rate of renal artery stenting is:",
    choices: ["60-70%", "70-80%", "80-90%", "90-95%"],
    correctAnswer: 2
  },
  {
    id: 371,
    question: "Which procedure is performed for mesenteric ischemia?",
    choices: ["Bypass", "Angioplasty", "Stenting", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 372,
    question: "The most commonly affected vessel in chronic mesenteric ischemia is:",
    choices: ["Celiac artery", "Superior mesenteric artery", "Inferior mesenteric artery", "All equally"],
    correctAnswer: 1
  },
  {
    id: 373,
    question: "Which symptom is characteristic of chronic mesenteric ischemia?",
    choices: ["Postprandial pain", "Weight loss", "Food fear", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 374,
    question: "The diagnosis of chronic mesenteric ischemia requires:",
    choices: ["Symptoms", "Vessel stenosis", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 375,
    question: "Which graft is used for mesenteric bypass?",
    choices: ["Saphenous vein", "PTFE", "Dacron", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 376,
    question: "The mortality rate of acute mesenteric ischemia is:",
    choices: ["20-30%", "40-50%", "60-70%", "80-90%"],
    correctAnswer: 2
  },
  {
    id: 377,
    question: "Which procedure is performed for subclavian steal syndrome?",
    choices: ["Carotid-subclavian bypass", "Subclavian angioplasty", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 378,
    question: "The subclavian steal syndrome involves:",
    choices: ["Subclavian stenosis", "Vertebral flow reversal", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 379,
    question: "Which symptom is characteristic of subclavian steal?",
    choices: ["Arm claudication", "Vertebrobasilar insufficiency", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 380,
    question: "The diagnosis of subclavian steal is made by:",
    choices: ["Duplex ultrasound", "Angiography", "Blood pressure difference", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 381,
    question: "Which procedure is performed for thoracic outlet syndrome?",
    choices: ["First rib resection", "Scalenectomy", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 382,
    question: "The most common type of thoracic outlet syndrome is:",
    choices: ["Neurogenic", "Venous", "Arterial", "Mixed"],
    correctAnswer: 0
  },
  {
    id: 383,
    question: "Which test is used to diagnose neurogenic TOS?",
    choices: ["Nerve conduction studies", "EMG", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 384,
    question: "The Adson test is used for:",
    choices: ["Thoracic outlet syndrome", "Carpal tunnel syndrome", "Cubital tunnel syndrome", "Tarsal tunnel syndrome"],
    correctAnswer: 0
  },
  {
    id: 385,
    question: "Which approach is used for first rib resection?",
    choices: ["Transaxillary", "Supraclavicular", "Infraclavicular", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 386,
    question: "The most common complication of first rib resection is:",
    choices: ["Pneumothorax", "Nerve injury", "Bleeding", "Infection"],
    correctAnswer: 1
  },
  {
    id: 387,
    question: "Which procedure is performed for lymphedema?",
    choices: ["Lymphaticovenous anastomosis", "Lymph node transfer", "Debulking", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 388,
    question: "The most common cause of lymphedema in developed countries is:",
    choices: ["Congenital", "Cancer treatment", "Infection", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 389,
    question: "Which imaging study is best for lymphedema?",
    choices: ["Lymphoscintigraphy", "MRI", "CT scan", "Ultrasound"],
    correctAnswer: 0
  },
  {
    id: 390,
    question: "The most effective treatment for lymphedema is:",
    choices: ["Surgery", "Compression", "Massage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 391,
    question: "Which stage of lymphedema is irreversible?",
    choices: ["Stage 0", "Stage 1", "Stage 2", "Stage 3"],
    correctAnswer: 2
  },
  {
    id: 392,
    question: "The Stemmer sign is positive in:",
    choices: ["Lymphedema", "Venous insufficiency", "Arterial disease", "Cellulitis"],
    correctAnswer: 0
  },
  {
    id: 393,
    question: "Which procedure is performed for hyperhidrosis?",
    choices: ["Sympathectomy", "Botulinum toxin", "Iontophoresis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 394,
    question: "The most effective treatment for palmar hyperhidrosis is:",
    choices: ["Topical antiperspirants", "Botulinum toxin", "Sympathectomy", "Iontophoresis"],
    correctAnswer: 2
  },
  {
    id: 395,
    question: "Which level of sympathectomy is performed for palmar hyperhidrosis?",
    choices: ["T1", "T2", "T3", "T2-T3"],
    correctAnswer: 3
  },
  {
    id: 396,
    question: "The most common complication of sympathectomy is:",
    choices: ["Compensatory sweating", "Horner's syndrome", "Pneumothorax", "Bleeding"],
    correctAnswer: 0
  },
  {
    id: 397,
    question: "Which approach is used for thoracoscopic sympathectomy?",
    choices: ["Single port", "Two port", "Three port", "Four port"],
    correctAnswer: 1
  },
  {
    id: 398,
    question: "The success rate of sympathectomy for palmar hyperhidrosis is:",
    choices: ["70-80%", "80-90%", "90-95%", "95-99%"],
    correctAnswer: 3
  },
  {
    id: 399,
    question: "Which procedure is performed for pectus excavatum?",
    choices: ["Ravitch procedure", "Nuss procedure", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 400,
    question: "The Nuss procedure involves:",
    choices: ["Cartilage resection", "Sternal osteotomy", "Bar placement", "Rib resection"],
    correctAnswer: 2
  },
  {
    id: 401,
    question: "Which age is optimal for pectus repair?",
    choices: ["Infancy", "Childhood", "Adolescence", "Adulthood"],
    correctAnswer: 2
  },
  {
    id: 402,
    question: "The Haller index measures:",
    choices: ["Pectus severity", "Lung function", "Heart function", "Exercise capacity"],
    correctAnswer: 0
  },
  {
    id: 403,
    question: "Which complication is associated with pectus repair?",
    choices: ["Pneumothorax", "Bleeding", "Infection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 404,
    question: "The bar in Nuss procedure is removed after:",
    choices: ["6 months", "1 year", "2-3 years", "5 years"],
    correctAnswer: 2
  },
  {
    id: 405,
    question: "Which procedure is performed for pectus carinatum?",
    choices: ["Ravitch procedure", "Bracing", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 406,
    question: "The most effective treatment for pectus carinatum is:",
    choices: ["Surgery", "Bracing", "Exercise", "Observation"],
    correctAnswer: 1
  },
  {
    id: 407,
    question: "Which procedure is performed for chest wall tumors?",
    choices: ["Wide excision", "Reconstruction", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 408,
    question: "The most common primary chest wall tumor is:",
    choices: ["Chondrosarcoma", "Osteosarcoma", "Ewing sarcoma", "Rhabdomyosarcoma"],
    correctAnswer: 0
  },
  {
    id: 409,
    question: "Which material is used for chest wall reconstruction?",
    choices: ["Mesh", "Bone cement", "Muscle flap", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 410,
    question: "The most common indication for chest wall reconstruction is:",
    choices: ["Tumor resection", "Trauma", "Infection", "Congenital defect"],
    correctAnswer: 0
  },
  {
    id: 411,
    question: "Which muscle flap is used for chest wall reconstruction?",
    choices: ["Latissimus dorsi", "Pectoralis major", "Rectus abdominis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 412,
    question: "The minimum number of ribs that can be resected without reconstruction is:",
    choices: ["1", "2", "3", "4"],
    correctAnswer: 2
  },
  {
    id: 413,
    question: "Which procedure is performed for empyema?",
    choices: ["Drainage", "Decortication", "Thoracoplasty", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 414,
    question: "The most common cause of empyema is:",
    choices: ["Pneumonia", "Surgery", "Trauma", "Esophageal perforation"],
    correctAnswer: 0
  },
  {
    id: 415,
    question: "Which organism most commonly causes empyema?",
    choices: ["Streptococcus pneumoniae", "Staphylococcus aureus", "Anaerobes", "Mixed flora"],
    correctAnswer: 0
  },
  {
    id: 416,
    question: "The three stages of empyema are:",
    choices: ["Exudative, fibrinopurulent, organizing", "Acute, subacute, chronic", "Simple, complicated, complex", "Stage I, II, III"],
    correctAnswer: 0
  },
  {
    id: 417,
    question: "Which treatment is appropriate for stage I empyema?",
    choices: ["Antibiotics only", "Thoracentesis", "Chest tube", "Surgery"],
    correctAnswer: 2
  },
  {
    id: 418,
    question: "The indication for decortication is:",
    choices: ["Stage III empyema", "Trapped lung", "Failed drainage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 419,
    question: "Which approach is used for decortication?",
    choices: ["Thoracotomy", "VATS", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 420,
    question: "The success rate of decortication is:",
    choices: ["60-70%", "70-80%", "80-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 421,
    question: "Which procedure is performed for bronchopleural fistula?",
    choices: ["Muscle flap", "Omental flap", "Thoracoplasty", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 422,
    question: "The most common cause of bronchopleural fistula is:",
    choices: ["Lung resection", "Pneumonia", "Trauma", "Radiation"],
    correctAnswer: 0
  },
  {
    id: 423,
    question: "Which test diagnoses bronchopleural fistula?",
    choices: ["Bronchoscopy", "CT scan", "Methylene blue test", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 424,
    question: "The treatment of choice for large bronchopleural fistula is:",
    choices: ["Conservative", "Bronchoscopic", "Surgical", "Observation"],
    correctAnswer: 2
  },
  {
    id: 425,
    question: "Which muscle flap is used for bronchopleural fistula?",
    choices: ["Intercostal", "Serratus anterior", "Latissimus dorsi", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 426,
    question: "The success rate of surgical repair for bronchopleural fistula is:",
    choices: ["50-60%", "60-70%", "70-80%", "80-90%"],
    correctAnswer: 3
  },
  {
    id: 427,
    question: "Which procedure is performed for chylothorax?",
    choices: ["Conservative management", "Thoracic duct ligation", "Pleurodesis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 428,
    question: "The most common cause of chylothorax is:",
    choices: ["Surgery", "Trauma", "Malignancy", "Congenital"],
    correctAnswer: 0
  },
  {
    id: 429,
    question: "Which test confirms chylothorax?",
    choices: ["Pleural fluid triglycerides", "Pleural fluid cholesterol", "Chylomicrons", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 430,
    question: "The threshold for surgical intervention in chylothorax is:",
    choices: ["500 mL/day", "1000 mL/day", "1500 mL/day", "2000 mL/day"],
    correctAnswer: 1
  },
  {
    id: 431,
    question: "Which diet is used for chylothorax?",
    choices: ["Low fat", "Medium chain triglycerides", "Total parenteral nutrition", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 432,
    question: "The success rate of thoracic duct ligation is:",
    choices: ["60-70%", "70-80%", "80-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 433,
    question: "Which procedure is performed for spontaneous pneumothorax?",
    choices: ["Observation", "Chest tube", "VATS", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 434,
    question: "The most common cause of primary spontaneous pneumothorax is:",
    choices: ["Bleb rupture", "Pleural tear", "Lung laceration", "Unknown"],
    correctAnswer: 0
  },
  {
    id: 435,
    question: "Which patient population is at highest risk for primary spontaneous pneumothorax?",
    choices: ["Young, tall, thin males", "Elderly females", "Middle-aged smokers", "Athletes"],
    correctAnswer: 0
  },
  {
    id: 436,
    question: "The recurrence rate after first spontaneous pneumothorax is:",
    choices: ["10-20%", "20-30%", "30-40%", "40-50%"],
    correctAnswer: 1
  },
  {
    id: 437,
    question: "The indication for surgery in spontaneous pneumothorax is:",
    choices: ["First episode", "Recurrent pneumothorax", "Bilateral pneumothorax", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 438,
    question: "Which procedure is performed for recurrent pneumothorax?",
    choices: ["Bullectomy", "Pleurodesis", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 439,
    question: "The success rate of VATS for pneumothorax is:",
    choices: ["80-85%", "85-90%", "90-95%", "95-99%"],
    correctAnswer: 3
  },
  {
    id: 440,
    question: "Which agent is used for chemical pleurodesis?",
    choices: ["Talc", "Doxycycline", "Bleomycin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 441,
    question: "Which procedure is performed for pleural effusion?",
    choices: ["Thoracentesis", "Chest tube", "Pleurodesis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 442,
    question: "The most common cause of pleural effusion is:",
    choices: ["Heart failure", "Pneumonia", "Malignancy", "Pulmonary embolism"],
    correctAnswer: 0
  },
  {
    id: 443,
    question: "Which test differentiates transudative from exudative effusion?",
    choices: ["Light's criteria", "Pleural fluid protein", "Pleural fluid LDH", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 444,
    question: "The maximum safe volume for thoracentesis is:",
    choices: ["1000 mL", "1500 mL", "2000 mL", "No limit"],
    correctAnswer: 1
  },
  {
    id: 445,
    question: "Which complication is associated with large volume thoracentesis?",
    choices: ["Pneumothorax", "Re-expansion pulmonary edema", "Bleeding", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 446,
    question: "The indication for pleurodesis is:",
    choices: ["Recurrent effusion", "Malignant effusion", "Symptomatic effusion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 447,
    question: "Which method of pleurodesis is most effective?",
    choices: ["Talc poudrage", "Talc slurry", "Chemical agents", "Mechanical abrasion"],
    correctAnswer: 0
  },
  {
    id: 448,
    question: "The success rate of talc pleurodesis is:",
    choices: ["70-80%", "80-85%", "85-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 449,
    question: "Which procedure is performed for hemothorax?",
    choices: ["Observation", "Chest tube", "Thoracotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 450,
    question: "The indication for thoracotomy in hemothorax is:",
    choices: ["Initial drainage >1500 mL", "Continued bleeding >200 mL/hr", "Retained clot", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 451,
    question: "The most common cause of hemothorax is:",
    choices: ["Trauma", "Iatrogenic", "Spontaneous", "Malignancy"],
    correctAnswer: 0
  },
  {
    id: 452,
    question: "Which imaging study is best for hemothorax?",
    choices: ["Chest X-ray", "CT scan", "Ultrasound", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 453,
    question: "The minimum amount of blood to cause visible hemothorax on chest X-ray is:",
    choices: ["100 mL", "200 mL", "300 mL", "500 mL"],
    correctAnswer: 2
  },
  {
    id: 454,
    question: "Which complication is associated with retained hemothorax?",
    choices: ["Empyema", "Fibrothorax", "Trapped lung", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 455,
    question: "Which procedure is performed for mediastinal masses?",
    choices: ["Mediastinoscopy", "Mediastinotomy", "Thoracotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 456,
    question: "The most common anterior mediastinal mass in adults is:",
    choices: ["Thymoma", "Lymphoma", "Thyroid", "Teratoma"],
    correctAnswer: 1
  },
  {
    id: 457,
    question: "The most common posterior mediastinal mass is:",
    choices: ["Neurogenic tumor", "Esophageal tumor", "Lymphoma", "Thyroid"],
    correctAnswer: 0
  },
  {
    id: 458,
    question: "Which approach is used for anterior mediastinal masses?",
    choices: ["Mediastinoscopy", "Mediastinotomy", "Sternotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 459,
    question: "The 4 T's of anterior mediastinal masses are:",
    choices: ["Thymoma, thyroid, teratoma, terrible lymphoma", "Thymoma, thyroid, teratoma, tuberculosis", "Thymoma, thymus, teratoma, terrible lymphoma", "Thymoma, thyroid, tuberculosis, terrible lymphoma"],
    correctAnswer: 0
  },
  {
    id: 460,
    question: "Which imaging study is best for mediastinal masses?",
    choices: ["Chest X-ray", "CT scan", "MRI", "PET scan"],
    correctAnswer: 1
  },
  {
    id: 461,
    question: "Which procedure is performed for myasthenia gravis?",
    choices: ["Thymectomy", "Steroids", "Plasmapheresis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 462,
    question: "The association between thymoma and myasthenia gravis is:",
    choices: ["10-15%", "30-50%", "50-70%", "70-90%"],
    correctAnswer: 1
  },
  {
    id: 463,
    question: "Which approach is preferred for thymectomy?",
    choices: ["Sternotomy", "Thoracoscopy", "Transcervical", "All are acceptable"],
    correctAnswer: 3
  },
  {
    id: 464,
    question: "The improvement rate after thymectomy for myasthenia gravis is:",
    choices: ["50-60%", "60-70%", "70-80%", "80-90%"],
    correctAnswer: 3
  },
  {
    id: 465,
    question: "Which staging system is used for thymoma?",
    choices: ["TNM", "Masaoka", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 466,
    question: "The most important prognostic factor for thymoma is:",
    choices: ["Size", "Histology", "Stage", "Age"],
    correctAnswer: 2
  },
  {
    id: 467,
    question: "Which procedure is performed for tracheal stenosis?",
    choices: ["Dilation", "Stenting", "Resection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 468,
    question: "The most common cause of tracheal stenosis is:",
    choices: ["Intubation injury", "Tracheostomy", "External trauma", "Tumor"],
    correctAnswer: 0
  },
  {
    id: 469,
    question: "The maximum length of trachea that can be resected is:",
    choices: ["2 cm", "4 cm", "6 cm", "8 cm"],
    correctAnswer: 2
  },
  {
    id: 470,
    question: "Which technique is used for tracheal anastomosis?",
    choices: ["End-to-end", "Tension-free", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 471,
    question: "The success rate of tracheal resection is:",
    choices: ["70-80%", "80-85%", "85-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 472,
    question: "Which maneuver is used to reduce tension in tracheal anastomosis?",
    choices: ["Neck flexion", "Laryngeal release", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 473,
    question: "Which procedure is performed for tracheoesophageal fistula?",
    choices: ["Primary repair", "Interposition graft", "Muscle flap", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 474,
    question: "The most common cause of acquired tracheoesophageal fistula is:",
    choices: ["Intubation", "Malignancy", "Infection", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 475,
    question: "Which test diagnoses tracheoesophageal fistula?",
    choices: ["Bronchoscopy", "Esophagoscopy", "Barium swallow", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 476,
    question: "The treatment of choice for malignant tracheoesophageal fistula is:",
    choices: ["Surgery", "Stenting", "Radiation", "Palliative care"],
    correctAnswer: 1
  },
  {
    id: 477,
    question: "Which muscle flap is used for tracheoesophageal fistula repair?",
    choices: ["Sternocleidomastoid", "Strap muscles", "Pectoralis major", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 478,
    question: "The success rate of surgical repair for benign tracheoesophageal fistula is:",
    choices: ["60-70%", "70-80%", "80-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 479,
    question: "Which procedure is performed for lung transplantation?",
    choices: ["Single lung", "Double lung", "Heart-lung", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 480,
    question: "The most common indication for lung transplant is:",
    choices: ["COPD", "Idiopathic pulmonary fibrosis", "Cystic fibrosis", "Primary pulmonary hypertension"],
    correctAnswer: 0
  },
  {
    id: 481,
    question: "Which incision is used for single lung transplant?",
    choices: ["Posterolateral thoracotomy", "Anterolateral thoracotomy", "Sternotomy", "Clamshell"],
    correctAnswer: 0
  },
  {
    id: 482,
    question: "The incision for bilateral lung transplant is:",
    choices: ["Bilateral thoracotomy", "Clamshell", "Sternotomy", "All of the above"],
    correctAnswer: 1
  },
  {
    id: 483,
    question: "Which anastomosis is performed in lung transplant?",
    choices: ["Bronchial", "Pulmonary artery", "Pulmonary vein", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 484,
    question: "The most common early complication of lung transplant is:",
    choices: ["Primary graft dysfunction", "Rejection", "Infection", "Bleeding"],
    correctAnswer: 0
  },
  {
    id: 485,
    question: "The most common late complication of lung transplant is:",
    choices: ["Chronic rejection", "Infection", "Malignancy", "Cardiovascular disease"],
    correctAnswer: 0
  },
  {
    id: 486,
    question: "The 5-year survival after lung transplant is:",
    choices: ["40-50%", "50-60%", "60-70%", "70-80%"],
    correctAnswer: 1
  },
  {
    id: 487,
    question: "Which immunosuppressive protocol is used after lung transplant?",
    choices: ["Triple therapy", "Induction therapy", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 488,
    question: "The most common cause of death after lung transplant is:",
    choices: ["Chronic rejection", "Infection", "Malignancy", "Cardiovascular disease"],
    correctAnswer: 0
  },
  {
    id: 489,
    question: "Which procedure is performed for pulmonary embolism?",
    choices: ["Embolectomy", "Thrombolysis", "IVC filter", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 490,
    question: "The indication for surgical embolectomy is:",
    choices: ["Massive PE", "Contraindication to thrombolysis", "Failed thrombolysis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 491,
    question: "Which approach is used for pulmonary embolectomy?",
    choices: ["Sternotomy", "Thoracotomy", "Catheter-based", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 492,
    question: "The mortality rate of surgical pulmonary embolectomy is:",
    choices: ["10-20%", "20-30%", "30-40%", "40-50%"],
    correctAnswer: 1
  },
  {
    id: 493,
    question: "Which device is used for catheter embolectomy?",
    choices: ["AngioJet", "Aspirex", "FlowTriever", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 494,
    question: "The success rate of catheter-directed thrombolysis is:",
    choices: ["60-70%", "70-80%", "80-90%", "90-95%"],
    correctAnswer: 2
  },
  {
    id: 495,
    question: "Which procedure is performed for pulmonary arteriovenous malformation?",
    choices: ["Embolization", "Surgical resection", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 496,
    question: "The most common cause of pulmonary AVM is:",
    choices: ["Congenital", "Hereditary hemorrhagic telangiectasia", "Trauma", "Infection"],
    correctAnswer: 1
  },
  {
    id: 497,
    question: "Which symptom is associated with pulmonary AVM?",
    choices: ["Dyspnea", "Hemoptysis", "Stroke", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 498,
    question: "The treatment of choice for pulmonary AVM is:",
    choices: ["Surgery", "Embolization", "Observation", "Medical therapy"],
    correctAnswer: 1
  },
  {
    id: 499,
    question: "Which device is used for AVM embolization?",
    choices: ["Coils", "Plugs", "Balloons", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 500,
    question: "The success rate of AVM embolization is:",
    choices: ["80-85%", "85-90%", "90-95%", "95-99%"],
    correctAnswer: 3
  },
  {
    id: 501,
    question: "Which procedure is performed for bronchiectasis?",
    choices: ["Medical therapy", "Bronchial artery embolization", "Surgical resection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 502,
    question: "The most common cause of bronchiectasis is:",
    choices: ["Infection", "Congenital", "Aspiration", "Immunodeficiency"],
    correctAnswer: 0
  },
  {
    id: 503,
    question: "Which imaging study is best for bronchiectasis?",
    choices: ["Chest X-ray", "CT scan", "Bronchography", "MRI"],
    correctAnswer: 1
  },
  {
    id: 504,
    question: "The indication for surgery in bronchiectasis is:",
    choices: ["Localized disease", "Failed medical therapy", "Massive hemoptysis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 505,
    question: "Which lobe is most commonly affected by bronchiectasis?",
    choices: ["Right upper", "Right lower", "Left upper", "Left lower"],
    correctAnswer: 3
  },
  {
    id: 506,
    question: "The success rate of surgery for bronchiectasis is:",
    choices: ["70-80%", "80-85%", "85-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 507,
    question: "Which procedure is performed for massive hemoptysis?",
    choices: ["Bronchial artery embolization", "Surgical resection", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 508,
    question: "The definition of massive hemoptysis is:",
    choices: [">100 mL/24 hrs", ">300 mL/24 hrs", ">600 mL/24 hrs", ">1000 mL/24 hrs"],
    correctAnswer: 1
  },
  {
    id: 509,
    question: "The most common cause of massive hemoptysis is:",
    choices: ["Bronchiectasis", "Lung cancer", "Tuberculosis", "Aspergilloma"],
    correctAnswer: 0
  },
  {
    id: 510,
    question: "The first-line treatment for massive hemoptysis is:",
    choices: ["Surgery", "Bronchial artery embolization", "Medical therapy", "Bronchoscopy"],
    correctAnswer: 1
  },
  {
    id: 511,
    question: "The success rate of bronchial artery embolization is:",
    choices: ["70-80%", "80-85%", "85-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 512,
    question: "Which complication is associated with bronchial artery embolization?",
    choices: ["Spinal cord ischemia", "Esophageal necrosis", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 513,
    question: "Which procedure is performed for aspergilloma?",
    choices: ["Medical therapy", "Surgical resection", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 514,
    question: "The most effective treatment for aspergilloma is:",
    choices: ["Antifungal therapy", "Surgery", "Observation", "Embolization"],
    correctAnswer: 1
  },
  {
    id: 515,
    question: "Which imaging finding is characteristic of aspergilloma?",
    choices: ["Air crescent sign", "Halo sign", "Tree-in-bud", "Ground glass"],
    correctAnswer: 0
  },
  {
    id: 516,
    question: "The mortality rate of surgery for aspergilloma is:",
    choices: ["1-5%", "5-10%", "10-15%", "15-20%"],
    correctAnswer: 1
  },
  {
    id: 517,
    question: "Which antifungal is used for aspergilloma?",
    choices: ["Amphotericin B", "Voriconazole", "Itraconazole", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 518,
    question: "The recurrence rate after surgery for aspergilloma is:",
    choices: ["1-5%", "5-10%", "10-15%", "15-20%"],
    correctAnswer: 0
  },
  {
    id: 519,
    question: "Which procedure is performed for lung abscess?",
    choices: ["Antibiotics", "Drainage", "Surgical resection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 520,
    question: "The most common cause of lung abscess is:",
    choices: ["Aspiration", "Hematogenous spread", "Direct extension", "Bronchial obstruction"],
    correctAnswer: 0
  },
  {
    id: 521,
    question: "Which organism most commonly causes lung abscess?",
    choices: ["Staphylococcus aureus", "Klebsiella pneumoniae", "Anaerobes", "Pseudomonas"],
    correctAnswer: 2
  },
  {
    id: 522,
    question: "The first-line treatment for lung abscess is:",
    choices: ["Surgery", "Percutaneous drainage", "Antibiotics", "Bronchoscopy"],
    correctAnswer: 2
  },
  {
    id: 523,
    question: "The indication for surgery in lung abscess is:",
    choices: ["Failed medical therapy", "Massive hemoptysis", "Suspected malignancy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 524,
    question: "The success rate of medical therapy for lung abscess is:",
    choices: ["70-80%", "80-85%", "85-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 525,
    question: "Which procedure is performed for hydatid cyst?",
    choices: ["Medical therapy", "Percutaneous drainage", "Surgical resection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 526,
    question: "The most common location of pulmonary hydatid cyst is:",
    choices: ["Right upper lobe", "Right lower lobe", "Left upper lobe", "Left lower lobe"],
    correctAnswer: 1
  },
  {
    id: 527,
    question: "Which imaging finding is characteristic of hydatid cyst?",
    choices: ["Water lily sign", "Crescent sign", "Halo sign", "Tree-in-bud"],
    correctAnswer: 0
  },
  {
    id: 528,
    question: "The treatment of choice for pulmonary hydatid cyst is:",
    choices: ["Medical therapy", "Surgery", "Observation", "Percutaneous drainage"],
    correctAnswer: 1
  },
  {
    id: 529,
    question: "Which medication is used for hydatid cyst?",
    choices: ["Albendazole", "Mebendazole", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 530,
    question: "The recurrence rate after surgery for hydatid cyst is:",
    choices: ["1-5%", "5-10%", "10-15%", "15-20%"],
    correctAnswer: 0
  },
  {
    id: 531,
    question: "Which procedure is performed for congenital diaphragmatic hernia?",
    choices: ["Primary repair", "Patch repair", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 532,
    question: "The most common type of congenital diaphragmatic hernia is:",
    choices: ["Bochdalek", "Morgagni", "Hiatal", "Eventration"],
    correctAnswer: 0
  },
  {
    id: 533,
    question: "Which side is more commonly affected by Bochdalek hernia?",
    choices: ["Right", "Left", "Bilateral", "Equal"],
    correctAnswer: 1
  },
  {
    id: 534,
    question: "The most important prognostic factor in CDH is:",
    choices: ["Size of defect", "Pulmonary hypoplasia", "Associated anomalies", "Timing of repair"],
    correctAnswer: 1
  },
  {
    id: 535,
    question: "Which approach is used for CDH repair?",
    choices: ["Thoracic", "Abdominal", "Both A and B", "Neither A nor B"],
    correctAnswer: 1
  },
  {
    id: 536,
    question: "The survival rate for CDH is:",
    choices: ["60-70%", "70-80%", "80-90%", "90-95%"],
    correctAnswer: 2
  },
  {
    id: 537,
    question: "Which procedure is performed for eventration of diaphragm?",
    choices: ["Plication", "Patch repair", "Both A and B", "Neither A nor B"],
    correctAnswer: 0
  },
  {
    id: 538,
    question: "The most common cause of acquired diaphragmatic hernia is:",
    choices: ["Trauma", "Surgery", "Infection", "Tumor"],
    correctAnswer: 0
  },
  {
    id: 539,
    question: "Which imaging study is best for diaphragmatic hernia?",
    choices: ["Chest X-ray", "CT scan", "MRI", "Fluoroscopy"],
    correctAnswer: 1
  },
  {
    id: 540,
    question: "The indication for surgery in diaphragmatic eventration is:",
    choices: ["Symptoms", "Respiratory compromise", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 541,
    question: "Which material is used for diaphragmatic repair?",
    choices: ["PTFE", "Dacron", "Biologic mesh", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 542,
    question: "The success rate of diaphragmatic repair is:",
    choices: ["80-85%", "85-90%", "90-95%", "95-99%"],
    correctAnswer: 3
  },
  {
    id: 543,
    question: "Which procedure is performed for phrenic nerve paralysis?",
    choices: ["Diaphragmatic plication", "Nerve repair", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 544,
    question: "The most common cause of phrenic nerve paralysis is:",
    choices: ["Trauma", "Surgery", "Tumor", "Infection"],
    correctAnswer: 1
  },
  {
    id: 545,
    question: "Which test diagnoses phrenic nerve paralysis?",
    choices: ["Chest X-ray", "Fluoroscopy", "Nerve conduction studies", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 546,
    question: "The indication for diaphragmatic plication is:",
    choices: ["Symptomatic paralysis", "Bilateral paralysis", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 547,
    question: "Which approach is used for diaphragmatic plication?",
    choices: ["Thoracic", "Abdominal", "Thoracoscopic", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 548,
    question: "The success rate of diaphragmatic plication is:",
    choices: ["70-80%", "80-85%", "85-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 549,
    question: "Which procedure is performed for chest wall deformity?",
    choices: ["Ravitch procedure", "Nuss procedure", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 550,
    question: "The most common chest wall deformity is:",
    choices: ["Pectus excavatum", "Pectus carinatum", "Poland syndrome", "Sternal cleft"],
    correctAnswer: 0
  },
  {
    id: 551,
    question: "Which age is optimal for pectus repair?",
    choices: ["Infancy", "Childhood", "Adolescence", "Adulthood"],
    correctAnswer: 2
  },
  {
    id: 552,
    question: "The Haller index for severe pectus excavatum is:",
    choices: [">2.5", ">3.25", ">4.0", ">5.0"],
    correctAnswer: 1
  },
  {
    id: 553,
    question: "Which complication is associated with Nuss procedure?",
    choices: ["Pneumothorax", "Cardiac injury", "Bar displacement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 554,
    question: "The bar in Nuss procedure is removed after:",
    choices: ["1 year", "2 years", "3 years", "4 years"],
    correctAnswer: 2
  },
  {
    id: 555,
    question: "Which procedure is performed for Poland syndrome?",
    choices: ["Muscle transfer", "Implant reconstruction", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 556,
    question: "The most common feature of Poland syndrome is:",
    choices: ["Absent pectoralis major", "Absent pectoralis minor", "Rib defects", "Breast hypoplasia"],
    correctAnswer: 0
  },
  {
    id: 557,
    question: "Which muscle is used for Poland syndrome reconstruction?",
    choices: ["Latissimus dorsi", "Serratus anterior", "Rectus abdominis", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 558,
    question: "The incidence of Poland syndrome is:",
    choices: ["1 in 10,000", "1 in 20,000", "1 in 30,000", "1 in 50,000"],
    correctAnswer: 1
  },
  {
    id: 559,
    question: "Which side is more commonly affected in Poland syndrome?",
    choices: ["Right", "Left", "Bilateral", "Equal"],
    correctAnswer: 0
  },
  {
    id: 560,
    question: "The success rate of reconstruction for Poland syndrome is:",
    choices: ["70-80%", "80-85%", "85-90%", "90-95%"],
    correctAnswer: 3
  },
  {
    id: 561,
    question: "Which procedure is performed for sternal cleft?",
    choices: ["Primary repair", "Patch repair", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 562,
    question: "The optimal timing for sternal cleft repair is:",
    choices: ["Neonatal period", "Infancy", "Childhood", "Adolescence"],
    correctAnswer: 0
  },
  {
    id: 563,
    question: "Which material is used for sternal reconstruction?",
    choices: ["Mesh", "Bone graft", "Cartilage graft", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 564,
    question: "The most common associated anomaly with sternal cleft is:",
    choices: ["Cardiac defects", "Diaphragmatic hernia", "Omphalocele", "Ectopia cordis"],
    correctAnswer: 0
  },
  {
    id: 565,
    question: "The success rate of sternal cleft repair is:",
    choices: ["80-85%", "85-90%", "90-95%", "95-99%"],
    correctAnswer: 3
  },
  {
    id: 566,
    question: "What is the most common cause of urinary tract obstruction?",
    choices: ["Trauma", "Stones", "Polyps", "Diabetes"],
    correctAnswer: 1
  },
  {
    id: 567,
    question: "Which urinary diversion involves rerouting ureters into a bowel loop and draining into a bag?",
    choices: ["Ileal conduit", "Indiana pouch", "Neobladder", "Cutaneous ureterostomy"],
    correctAnswer: 0
  },
  {
    id: 568,
    question: "Which urinary diversion creates a new bladder using intestinal tissue?",
    choices: ["Ileal conduit", "Neobladder", "Cutaneous ureterostomy", "Knock pouch"],
    correctAnswer: 1
  },
  {
    id: 569,
    question: "The staghorn calculus is best described as:",
    choices: ["A stone in the bladder", "A stone that grows large in the renal calyx", "A stone in the urethra", "A tumor of the ureter"],
    correctAnswer: 1
  },
  {
    id: 570,
    question: "Stones sent to pathology should always be:",
    choices: ["Frozen", "In saline", "In a dry container", "In formalin"],
    correctAnswer: 2
  },
  {
    id: 571,
    question: "Ureterectomy usually involves removal of the:",
    choices: ["Ureter and bladder", "Ureter and kidney", "Bladder only", "Ureter only"],
    correctAnswer: 1
  },
  {
    id: 572,
    question: "Nephrostomy is done to:",
    choices: ["Remove the kidney", "Drain urine temporarily or permanently", "Remove stones from the kidney", "Resect the bladder"],
    correctAnswer: 1
  },
  {
    id: 573,
    question: "Nephrotomy refers to:",
    choices: ["Removing the kidney", "Incising into the kidney", "Incising into the ureter", "Removing the ureter"],
    correctAnswer: 1
  },
  {
    id: 574,
    question: "What procedure uses shock waves to break up stones?",
    choices: ["ESWL", "Pyelotomy", "Nephrostomy", "Ureteroscopy"],
    correctAnswer: 0
  },
  {
    id: 575,
    question: "Which structure is removed in an adrenalectomy?",
    choices: ["Bladder", "Kidney", "Adrenal glands", "Ureter"],
    correctAnswer: 2
  },
  {
    id: 576,
    question: "The thoracic cavity contains all of the following EXCEPT:",
    choices: ["Heart", "Lungs", "Liver", "Great vessels"],
    correctAnswer: 2
  },
  {
    id: 577,
    question: "Which ribs are considered floating?",
    choices: ["1–7", "8–10", "11–12", "10–12"],
    correctAnswer: 2
  },
  {
    id: 578,
    question: "Which thoracic instrument is specifically used to approximate ribs?",
    choices: ["Bailey rib approximator", "Davidson scapula retractor", "Sarot clamp", "Finocchietto rib retractor"],
    correctAnswer: 0
  },
  {
    id: 579,
    question: "A mediastinoscopy provides access to view:",
    choices: ["Lungs only", "Mediastinal structures", "Abdominal organs", "Brain and spinal cord"],
    correctAnswer: 1
  },
  {
    id: 580,
    question: "What is the preferred position for thoracic surgery on the left lung?",
    choices: ["Supine", "Right lateral", "Left lateral", "Prone"],
    correctAnswer: 1
  },
  {
    id: 581,
    question: "What does emphysema primarily affect?",
    choices: ["Alveoli", "Trachea", "Bronchi", "Pleura"],
    correctAnswer: 0
  },
  {
    id: 582,
    question: "Thoracentesis is performed to:",
    choices: ["Place a stent in the coronary artery", "Remove fluid from the pleural cavity", "Excise a lung tumor", "Resect the pericardium"],
    correctAnswer: 1
  },
  {
    id: 583,
    question: "What is the name of the incision used for a double-lung transplant?",
    choices: ["Clamshell", "Midline sternotomy", "Thoracoabdominal", "Gibson"],
    correctAnswer: 0
  },
  {
    id: 584,
    question: "During lung transplant, which anastomosis is NOT performed?",
    choices: ["Bronchus", "Pulmonary artery", "Atrial cuff", "Carotid artery"],
    correctAnswer: 3
  },
  {
    id: 585,
    question: "The outer layer of the heart wall is the:",
    choices: ["Myocardium", "Endocardium", "Epicardium", "Pericardium"],
    correctAnswer: 2
  },
  {
    id: 586,
    question: "The SA node is also known as the:",
    choices: ["AV node", "Purkinje fibers", "Pacemaker of the heart", "Bundle of His"],
    correctAnswer: 2
  },
  {
    id: 587,
    question: "A heart rate over 100 beats per minute is called:",
    choices: ["Bradycardia", "Tachycardia", "Fibrillation", "Arrhythmia"],
    correctAnswer: 1
  },
  {
    id: 588,
    question: "Pericardial effusion is best described as:",
    choices: ["Fluid in the lungs", "Fluid in the pericardial cavity", "Infection of the endocardium", "Blood in the atrium"],
    correctAnswer: 1
  },
  {
    id: 589,
    question: "Atrial fibrillation occurs because of abnormal rhythm in the:",
    choices: ["Ventricles", "Left atrium", "Right ventricle", "Right atrium"],
    correctAnswer: 1
  },
  {
    id: 590,
    question: "What test shows the electrical activity of the heart?",
    choices: ["Echocardiogram", "Arteriogram", "Electrocardiogram", "Angiogram"],
    correctAnswer: 2
  },
  {
    id: 591,
    question: "An angioplasty involves:",
    choices: ["Placing a stent in an artery", "Removing a valve", "Removing a clot from a vein", "Closing the ductus arteriosus"],
    correctAnswer: 0
  },
  {
    id: 592,
    question: "Aneurysm is:",
    choices: ["A bulge in an artery wall", "Valve leakage", "Stenosis of the mitral valve", "Arrhythmia of the ventricles"],
    correctAnswer: 0
  },
  {
    id: 593,
    question: "Which vessel is commonly used for a CABG?",
    choices: ["Jugular vein", "Greater saphenous vein", "Subclavian artery", "Inferior vena cava"],
    correctAnswer: 1
  },
  {
    id: 594,
    question: "The heart-lung machine is also called:",
    choices: ["Extracorporeal oxygenator", "Cardiopulmonary bypass", "Intra-aortic balloon pump", "Defibrillator"],
    correctAnswer: 1
  },
  {
    id: 595,
    question: "Cooling the heart during surgery is done to:",
    choices: ["Increase oxygen demand", "Induce fibrillation", "Stop the heart and protect tissue", "Enhance clotting"],
    correctAnswer: 2
  },
  {
    id: 596,
    question: "The cannula to retrieve blood during CPB can be placed in:",
    choices: ["Carotid artery", "Vena cava", "Aortic arch", "Pulmonary vein"],
    correctAnswer: 1
  },
  {
    id: 597,
    question: "The component of the heart-lung machine that oxygenates blood is called the:",
    choices: ["Pump", "Oxygenator", "Heat exchanger", "Filter"],
    correctAnswer: 1
  },
  {
    id: 598,
    question: "What is the standard patient position for open heart surgery?",
    choices: ["Lateral", "Prone", "Supine", "Trendelenburg"],
    correctAnswer: 2
  },
  {
    id: 599,
    question: "What is the incision site for open heart surgery?",
    choices: ["Thoracoabdominal", "Clamshell", "Sternal notch to xyphoid", "Gibson"],
    correctAnswer: 2
  },
  {
    id: 600,
    question: "The main cause of coronary artery disease is:",
    choices: ["Bacterial infection", "Plaque formation", "Valve stenosis", "Aneurysm"],
    correctAnswer: 1
  },
  {
    id: 601,
    question: "Which condition is a congenital failure of the ductus arteriosus to close?",
    choices: ["Mitral stenosis", "Tetralogy of Fallot", "Patent ductus arteriosus", "Atrial fibrillation"],
    correctAnswer: 2
  },
  {
    id: 602,
    question: "Tetralogy of Fallot includes how many cardiac defects?",
    choices: ["Two", "Three", "Four", "Five"],
    correctAnswer: 2
  },
  {
    id: 603,
    question: "An IABP (intra-aortic balloon pump) is used to:",
    choices: ["Perform coronary bypass", "Increase cardiac output", "Cool the blood", "Replace heart valves"],
    correctAnswer: 1
  },
  {
    id: 604,
    question: "A VAD (ventricular assist device) is:",
    choices: ["A pacemaker", "An implanted pump to help the heart", "A defibrillator", "A catheter"],
    correctAnswer: 1
  },
  {
    id: 605,
    question: "Which cardiac valve connects the left atrium to the left ventricle?",
    choices: ["Tricuspid", "Mitral", "Aortic", "Pulmonary"],
    correctAnswer: 1
  },
  {
    id: 606,
    question: "The minimally invasive CABG performed on a beating heart is known as:",
    choices: ["CABG", "OPCAB", "IABP", "CPB"],
    correctAnswer: 1
  },
  {
    id: 607,
    question: "Which artery is commonly used for coronary bypass grafting?",
    choices: ["Internal mammary artery", "Pulmonary artery", "Aorta", "Carotid artery"],
    correctAnswer: 0
  },
  {
    id: 608,
    question: "What is used to control body temperature during CPB?",
    choices: ["Heat exchanger", "Oxygenator", "Pump", "Cardioplegia"],
    correctAnswer: 0
  },
  {
    id: 609,
    question: "Which heart valve replacement is commonly needed due to rheumatic fever?",
    choices: ["Mitral", "Aortic", "Pulmonary", "Tricuspid"],
    correctAnswer: 0
  },
  {
    id: 610,
    question: "What is the role of the perfusionist during cardiac surgery?",
    choices: ["Administers anesthesia", "Operates the heart-lung machine", "Makes the incision", "Sutures the valves"],
    correctAnswer: 1
  }
];
