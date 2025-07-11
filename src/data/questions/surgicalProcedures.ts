export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the most common cause of postoperative fever in the first 24 hours?",
    choices: [
      "Wound infection",
      "Atelectasis",
      "Urinary tract infection",
      "Deep vein thrombosis"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which suture material is most appropriate for bowel anastomosis?",
    choices: [
      "Silk",
      "Nylon",
      "Vicryl",
      "Prolene"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "The 'time out' procedure is performed to:",
    choices: [
      "Allow the surgeon to rest",
      "Verify correct patient, procedure, and site",
      "Check instrument counts",
      "Review postoperative orders"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which of the following is NOT a sign of malignant hyperthermia?",
    choices: [
      "Hyperthermia",
      "Muscle rigidity",
      "Bradycardia",
      "Increased CO2 production"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "The most common site for surgical site infections is:",
    choices: [
      "Superficial incisional",
      "Deep incisional",
      "Organ/space",
      "All are equally common"
    ],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Which electrosurgical mode provides the best hemostasis?",
    choices: [
      "Cut",
      "Coagulation",
      "Blend",
      "Spray"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "The primary purpose of surgical drains is to:",
    choices: [
      "Prevent infection",
      "Remove air and fluid",
      "Provide irrigation",
      "Monitor bleeding"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which position is most commonly used for thyroid surgery?",
    choices: [
      "Supine with neck extension",
      "Prone",
      "Lateral",
      "Trendelenburg"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "The 'critical view of safety' is important in:",
    choices: [
      "Appendectomy",
      "Cholecystectomy",
      "Hernia repair",
      "Bowel resection"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which nerve is at risk during thyroid surgery?",
    choices: [
      "Phrenic nerve",
      "Vagus nerve",
      "Recurrent laryngeal nerve",
      "Hypoglossal nerve"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "The most common complication of laparoscopic surgery is:",
    choices: [
      "Bleeding",
      "Infection",
      "Bowel injury",
      "Gas embolism"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Which suture technique provides the strongest closure?",
    choices: [
      "Simple interrupted",
      "Running",
      "Mattress",
      "Purse string"
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "The pneumoperitoneum pressure for laparoscopic surgery is typically:",
    choices: [
      "5-8 mmHg",
      "12-15 mmHg",
      "20-25 mmHg",
      "30-35 mmHg"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which imaging modality is most commonly used intraoperatively?",
    choices: [
      "CT scan",
      "MRI",
      "Ultrasound",
      "X-ray"
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "The most important factor in preventing surgical site infections is:",
    choices: [
      "Antibiotic prophylaxis",
      "Proper hand hygiene",
      "Sterile technique",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "Which type of hernia is most common in adults?",
    choices: [
      "Inguinal",
      "Umbilical",
      "Incisional",
      "Hiatal"
    ],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "The 'golden hour' in trauma surgery refers to:",
    choices: [
      "First hour after injury",
      "Time to reach hospital",
      "Duration of surgery",
      "Recovery time"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Which organ is most commonly injured in blunt abdominal trauma?",
    choices: [
      "Liver",
      "Spleen",
      "Kidney",
      "Pancreas"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "The most common cause of small bowel obstruction in adults is:",
    choices: [
      "Adhesions",
      "Hernia",
      "Tumor",
      "Intussusception"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Which suture size is typically used for skin closure?",
    choices: [
      "2-0",
      "3-0 to 4-0",
      "5-0 to 6-0",
      "7-0 to 8-0"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "The most common postoperative complication is:",
    choices: [
      "Bleeding",
      "Infection",
      "Pneumonia",
      "Deep vein thrombosis"
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "Which position increases the risk of compartment syndrome?",
    choices: [
      "Supine",
      "Prone",
      "Lithotomy",
      "Lateral"
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    question: "The primary indication for emergency surgery in appendicitis is:",
    choices: [
      "Pain severity",
      "Fever",
      "Perforation",
      "White blood cell count"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Which type of wound healing occurs with primary intention?",
    choices: [
      "Clean, approximated wounds",
      "Infected wounds",
      "Wounds with tissue loss",
      "Chronic wounds"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "The most common site for pressure ulcers in surgical patients is:",
    choices: [
      "Heels",
      "Sacrum",
      "Elbows",
      "Occiput"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "Which gas is most commonly used for pneumoperitoneum?",
    choices: [
      "Air",
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen"
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "The most common cause of postoperative nausea and vomiting is:",
    choices: [
      "Pain",
      "Anesthesia",
      "Dehydration",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Which incision provides the best exposure for gallbladder surgery?",
    choices: [
      "Midline",
      "Right subcostal",
      "Pfannenstiel",
      "McBurney"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "The most important preoperative assessment for elderly patients is:",
    choices: [
      "Cardiac function",
      "Pulmonary function",
      "Renal function",
      "Cognitive function"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "Which antibiotic is most commonly used for surgical prophylaxis?",
    choices: [
      "Penicillin",
      "Cefazolin",
      "Vancomycin",
      "Ciprofloxacin"
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "The most common complication of central venous catheter insertion is:",
    choices: [
      "Infection",
      "Pneumothorax",
      "Bleeding",
      "Air embolism"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "Which type of shock is most common in surgical patients?",
    choices: [
      "Hypovolemic",
      "Cardiogenic",
      "Septic",
      "Neurogenic"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "The most reliable sign of peritonitis is:",
    choices: [
      "Fever",
      "Leukocytosis",
      "Rebound tenderness",
      "Nausea and vomiting"
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "Which imaging study is best for diagnosing acute cholecystitis?",
    choices: [
      "CT scan",
      "Ultrasound",
      "HIDA scan",
      "MRI"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "The most common cause of acute pancreatitis is:",
    choices: [
      "Alcohol",
      "Gallstones",
      "Trauma",
      "Medications"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which position is used for rectal surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lithotomy",
      "Jackknife"
    ],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "The most common type of gastric cancer is:",
    choices: [
      "Adenocarcinoma",
      "Lymphoma",
      "Sarcoma",
      "Carcinoid"
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "Which nerve is at risk during inguinal hernia repair?",
    choices: [
      "Femoral nerve",
      "Obturator nerve",
      "Lateral femoral cutaneous nerve",
      "Sciatic nerve"
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "The most common complication of splenectomy is:",
    choices: [
      "Bleeding",
      "Infection",
      "Pancreatic injury",
      "Thrombocytosis"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Which type of anastomosis is preferred for colorectal surgery?",
    choices: [
      "End-to-end",
      "End-to-side",
      "Side-to-side",
      "Any of the above"
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "The most common cause of postoperative ileus is:",
    choices: [
      "Pain medications",
      "Electrolyte imbalance",
      "Surgical manipulation",
      "Dehydration"
    ],
    correctAnswer: 2
  },
  {
    id: 42,
    question: "Which diagnostic test is most specific for acute appendicitis?",
    choices: [
      "White blood cell count",
      "CT scan",
      "Ultrasound",
      "Clinical examination"
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "The most common site for colorectal cancer is:",
    choices: [
      "Cecum",
      "Sigmoid colon",
      "Rectum",
      "Ascending colon"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "Which factor most increases the risk of wound dehiscence?",
    choices: [
      "Age",
      "Obesity",
      "Diabetes",
      "Smoking"
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "The most common cause of upper GI bleeding is:",
    choices: [
      "Peptic ulcer disease",
      "Esophageal varices",
      "Mallory-Weiss tear",
      "Boerhaave syndrome"
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "Which position is contraindicated in patients with increased intracranial pressure?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "The most common complication of tracheostomy is:",
    choices: [
      "Bleeding",
      "Infection",
      "Pneumothorax",
      "Tracheal stenosis"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "Which type of hernia has the highest risk of incarceration?",
    choices: [
      "Inguinal",
      "Femoral",
      "Umbilical",
      "Incisional"
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "The most important factor in wound healing is:",
    choices: [
      "Nutrition",
      "Blood supply",
      "Age",
      "Infection control"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Which imaging modality is best for detecting free air in the abdomen?",
    choices: [
      "CT scan",
      "Ultrasound",
      "Upright chest X-ray",
      "MRI"
    ],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "The most common cause of mechanical small bowel obstruction in children is:",
    choices: [
      "Adhesions",
      "Intussusception",
      "Hernia",
      "Malrotation"
    ],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "Which suture material has the longest absorption time?",
    choices: [
      "Vicryl",
      "PDS",
      "Chromic gut",
      "Monocryl"
    ],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "The most common postoperative pulmonary complication is:",
    choices: [
      "Pneumonia",
      "Atelectasis",
      "Pulmonary embolism",
      "Pneumothorax"
    ],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "Which position is used for kidney surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral decubitus",
      "Lithotomy"
    ],
    correctAnswer: 2
  },
  {
    id: 55,
    question: "The most common cause of postoperative urinary retention is:",
    choices: [
      "Bladder dysfunction",
      "Urethral obstruction",
      "Medications",
      "Dehydration"
    ],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "Which type of incision heals with the least scarring?",
    choices: [
      "Transverse",
      "Vertical",
      "Oblique",
      "Curved"
    ],
    correctAnswer: 0
  },
  {
    id: 57,
    question: "The most common site for metastasis from colorectal cancer is:",
    choices: [
      "Lung",
      "Liver",
      "Bone",
      "Brain"
    ],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "Which electrolyte imbalance is most common after surgery?",
    choices: [
      "Hyponatremia",
      "Hypernatremia",
      "Hypokalemia",
      "Hyperkalemia"
    ],
    correctAnswer: 2
  },
  {
    id: 59,
    question: "The most reliable method for confirming endotracheal tube placement is:",
    choices: [
      "Chest X-ray",
      "Capnography",
      "Auscultation",
      "Pulse oximetry"
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "Which complication is most associated with prolonged surgery?",
    choices: [
      "Hypothermia",
      "Pressure sores",
      "Deep vein thrombosis",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 61,
    question: "The most common cause of postoperative confusion in elderly patients is:",
    choices: [
      "Medications",
      "Hypoxia",
      "Dehydration",
      "Pain"
    ],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "Which type of wound closure provides the best cosmetic result?",
    choices: [
      "Staples",
      "Sutures",
      "Tissue adhesive",
      "Steri-strips"
    ],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "The most common indication for emergency laparotomy is:",
    choices: [
      "Bleeding",
      "Perforation",
      "Obstruction",
      "Ischemia"
    ],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "Which position increases the risk of brachial plexus injury?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Trendelenburg"
    ],
    correctAnswer: 2
  },
  {
    id: 65,
    question: "The most common cause of anastomotic leak is:",
    choices: [
      "Tension",
      "Poor blood supply",
      "Infection",
      "Technical error"
    ],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "Which imaging study is best for evaluating pancreatic pathology?",
    choices: [
      "CT scan",
      "Ultrasound",
      "MRI",
      "ERCP"
    ],
    correctAnswer: 0
  },
  {
    id: 67,
    question: "The most common complication of laparoscopic cholecystectomy is:",
    choices: [
      "Bleeding",
      "Bile duct injury",
      "Bowel injury",
      "Port site hernia"
    ],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "Which factor most predisposes to postoperative pneumonia?",
    choices: [
      "Age",
      "Smoking",
      "Obesity",
      "Duration of surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "The most common cause of postoperative bleeding is:",
    choices: [
      "Coagulopathy",
      "Technical error",
      "Hypertension",
      "Medications"
    ],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "Which type of hernia repair has the lowest recurrence rate?",
    choices: [
      "Tissue repair",
      "Mesh repair",
      "Laparoscopic repair",
      "All are equal"
    ],
    correctAnswer: 1
  },
  {
    id: 71,
    question: "The most common site for surgical site infection is:",
    choices: [
      "Superficial incisional",
      "Deep incisional",
      "Organ space",
      "All are equal"
    ],
    correctAnswer: 0
  },
  {
    id: 72,
    question: "Which position is used for thyroid surgery?",
    choices: [
      "Supine with neck flexion",
      "Supine with neck extension",
      "Prone",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "The most common cause of postoperative fever on day 3-5 is:",
    choices: [
      "Atelectasis",
      "Pneumonia",
      "Urinary tract infection",
      "Wound infection"
    ],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "Which diagnostic test is most useful for detecting pulmonary embolism?",
    choices: [
      "Chest X-ray",
      "CT pulmonary angiogram",
      "Ventilation-perfusion scan",
      "Echocardiogram"
    ],
    correctAnswer: 1
  },
  {
    id: 75,
    question: "The most common complication of gastric surgery is:",
    choices: [
      "Bleeding",
      "Anastomotic leak",
      "Dumping syndrome",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 76,
    question: "Which suture technique is best for closing fascia?",
    choices: [
      "Simple interrupted",
      "Running",
      "Mattress",
      "Figure-of-eight"
    ],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "The most common cause of postoperative delirium is:",
    choices: [
      "Hypoxia",
      "Medications",
      "Electrolyte imbalance",
      "Sleep deprivation"
    ],
    correctAnswer: 1
  },
  {
    id: 78,
    question: "Which position increases venous return?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Fowler's"
    ],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "The most common indication for reoperation after appendectomy is:",
    choices: [
      "Bleeding",
      "Infection",
      "Bowel obstruction",
      "Missed appendicitis"
    ],
    correctAnswer: 2
  },
  {
    id: 80,
    question: "Which type of wound has the highest infection rate?",
    choices: [
      "Clean",
      "Clean-contaminated",
      "Contaminated",
      "Dirty"
    ],
    correctAnswer: 3
  },
  {
    id: 81,
    question: "The most common cause of small bowel obstruction in patients without prior surgery is:",
    choices: [
      "Hernia",
      "Tumor",
      "Intussusception",
      "Volvulus"
    ],
    correctAnswer: 0
  },
  {
    id: 82,
    question: "Which imaging modality is best for detecting gallstones?",
    choices: [
      "CT scan",
      "Ultrasound",
      "MRI",
      "X-ray"
    ],
    correctAnswer: 1
  },
  {
    id: 83,
    question: "The most common complication of central line insertion is:",
    choices: [
      "Pneumothorax",
      "Bleeding",
      "Infection",
      "Air embolism"
    ],
    correctAnswer: 0
  },
  {
    id: 84,
    question: "Which position is contraindicated in pregnant patients after 20 weeks?",
    choices: [
      "Supine",
      "Left lateral",
      "Right lateral",
      "Semi-Fowler's"
    ],
    correctAnswer: 0
  },
  {
    id: 85,
    question: "The most common cause of postoperative hypotension is:",
    choices: [
      "Bleeding",
      "Dehydration",
      "Medications",
      "Sepsis"
    ],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "Which type of incision provides the best strength?",
    choices: [
      "Midline",
      "Paramedian",
      "Transverse",
      "Oblique"
    ],
    correctAnswer: 2
  },
  {
    id: 87,
    question: "The most common site for pressure ulcer development during surgery is:",
    choices: [
      "Sacrum",
      "Heels",
      "Occiput",
      "Elbows"
    ],
    correctAnswer: 0
  },
  {
    id: 88,
    question: "Which complication is most associated with laparoscopic surgery?",
    choices: [
      "Gas embolism",
      "Bowel injury",
      "Bleeding",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "The most reliable sign of bowel ischemia is:",
    choices: [
      "Pain",
      "Distension",
      "Absence of bowel sounds",
      "Metabolic acidosis"
    ],
    correctAnswer: 3
  },
  {
    id: 90,
    question: "Which antibiotic prophylaxis is recommended for colorectal surgery?",
    choices: [
      "Cefazolin alone",
      "Cefoxitin alone",
      "Cefazolin + metronidazole",
      "Vancomycin"
    ],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "The most common cause of postoperative nausea is:",
    choices: [
      "Pain",
      "Anesthetic agents",
      "Opioids",
      "Dehydration"
    ],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "Which position is used for perineal surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lithotomy",
      "Jackknife"
    ],
    correctAnswer: 2
  },
  {
    id: 93,
    question: "The most common complication of inguinal hernia repair is:",
    choices: [
      "Recurrence",
      "Chronic pain",
      "Infection",
      "Bleeding"
    ],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "Which diagnostic test is most specific for acute cholangitis?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRCP",
      "ERCP"
    ],
    correctAnswer: 3
  },
  {
    id: 95,
    question: "The most common cause of postoperative respiratory failure is:",
    choices: [
      "Pneumonia",
      "Atelectasis",
      "Pulmonary edema",
      "Pneumothorax"
    ],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "Which suture material is best for vascular anastomosis?",
    choices: [
      "Silk",
      "Vicryl",
      "Prolene",
      "PDS"
    ],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "The most common indication for splenectomy is:",
    choices: [
      "Trauma",
      "Hematologic disorders",
      "Tumors",
      "Cysts"
    ],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "Which position increases the risk of air embolism?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Sitting"
    ],
    correctAnswer: 3
  },
  {
    id: 99,
    question: "The most common cause of postoperative oliguria is:",
    choices: [
      "Dehydration",
      "Acute kidney injury",
      "Medications",
      "Obstruction"
    ],
    correctAnswer: 0
  },
  {
    id: 100,
    question: "Which imaging study is best for detecting bowel perforation?",
    choices: [
      "Ultrasound",
      "CT scan",
      "X-ray",
      "MRI"
    ],
    correctAnswer: 1
  },
  {
    id: 101,
    question: "The most common postoperative cardiac complication is:",
    choices: [
      "Myocardial infarction",
      "Arrhythmias",
      "Heart failure",
      "Cardiac arrest"
    ],
    correctAnswer: 1
  },
  {
    id: 102,
    question: "Which type of drain is best for pancreatic surgery?",
    choices: [
      "Penrose",
      "Jackson-Pratt",
      "Blake",
      "Chest tube"
    ],
    correctAnswer: 1
  },
  {
    id: 103,
    question: "The most common cause of postoperative wound dehiscence is:",
    choices: [
      "Infection",
      "Poor nutrition",
      "Increased intra-abdominal pressure",
      "Technical factors"
    ],
    correctAnswer: 2
  },
  {
    id: 104,
    question: "Which position is used for posterior spinal surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Sitting"
    ],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "The most common site for anastomotic leak after colorectal surgery is:",
    choices: [
      "Ileocolic",
      "Colocolonic",
      "Colorectal",
      "Ileoanal"
    ],
    correctAnswer: 2
  },
  {
    id: 106,
    question: "Which electrolyte should be monitored closely after thyroid surgery?",
    choices: [
      "Sodium",
      "Potassium",
      "Calcium",
      "Magnesium"
    ],
    correctAnswer: 2
  },
  {
    id: 107,
    question: "The most common cause of postoperative hiccups is:",
    choices: [
      "Gastric distension",
      "Phrenic nerve irritation",
      "Medications",
      "Electrolyte imbalance"
    ],
    correctAnswer: 1
  },
  {
    id: 108,
    question: "Which imaging modality is best for detecting hepatic metastases?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRI",
      "PET scan"
    ],
    correctAnswer: 2
  },
  {
    id: 109,
    question: "The most common complication of esophageal surgery is:",
    choices: [
      "Bleeding",
      "Anastomotic leak",
      "Pneumonia",
      "Recurrent laryngeal nerve injury"
    ],
    correctAnswer: 1
  },
  {
    id: 110,
    question: "Which position is contraindicated in patients with severe cardiac disease?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 111,
    question: "The most common cause of postoperative seizures is:",
    choices: [
      "Hypoxia",
      "Electrolyte imbalance",
      "Medications",
      "Hypoglycemia"
    ],
    correctAnswer: 1
  },
  {
    id: 112,
    question: "Which suture technique is best for bowel anastomosis?",
    choices: [
      "Single layer",
      "Double layer",
      "Interrupted",
      "Running"
    ],
    correctAnswer: 0
  },
  {
    id: 113,
    question: "The most common indication for emergency thoracotomy is:",
    choices: [
      "Hemothorax",
      "Pneumothorax",
      "Cardiac tamponade",
      "Aortic injury"
    ],
    correctAnswer: 0
  },
  {
    id: 114,
    question: "Which position increases intracranial pressure?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 115,
    question: "The most common cause of postoperative stroke is:",
    choices: [
      "Hypotension",
      "Embolism",
      "Hypoxia",
      "Hemorrhage"
    ],
    correctAnswer: 1
  },
  {
    id: 116,
    question: "Which type of hernia is most common in women?",
    choices: [
      "Inguinal",
      "Femoral",
      "Umbilical",
      "Incisional"
    ],
    correctAnswer: 2
  },
  {
    id: 117,
    question: "The most reliable method for detecting anastomotic leak is:",
    choices: [
      "Clinical examination",
      "CT scan",
      "Contrast study",
      "Laboratory tests"
    ],
    correctAnswer: 2
  },
  {
    id: 118,
    question: "Which position is used for adrenal surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral decubitus",
      "Lithotomy"
    ],
    correctAnswer: 2
  },
  {
    id: 119,
    question: "The most common cause of postoperative renal failure is:",
    choices: [
      "Dehydration",
      "Medications",
      "Hypotension",
      "Obstruction"
    ],
    correctAnswer: 2
  },
  {
    id: 120,
    question: "Which imaging study is best for detecting pancreatic necrosis?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRI",
      "ERCP"
    ],
    correctAnswer: 1
  },
  {
    id: 121,
    question: "The most common complication of pancreaticoduodenectomy is:",
    choices: [
      "Bleeding",
      "Pancreatic fistula",
      "Delayed gastric emptying",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 122,
    question: "Which position is used for retroperitoneal surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral decubitus",
      "Lithotomy"
    ],
    correctAnswer: 2
  },
  {
    id: 123,
    question: "The most common cause of postoperative hypoxia is:",
    choices: [
      "Pneumonia",
      "Atelectasis",
      "Pulmonary edema",
      "Pneumothorax"
    ],
    correctAnswer: 1
  },
  {
    id: 124,
    question: "Which suture material is best for pediatric surgery?",
    choices: [
      "Silk",
      "Vicryl",
      "PDS",
      "Prolene"
    ],
    correctAnswer: 1
  },
  {
    id: 125,
    question: "The most common indication for liver transplantation is:",
    choices: [
      "Hepatitis B",
      "Hepatitis C",
      "Alcoholic cirrhosis",
      "Primary biliary cirrhosis"
    ],
    correctAnswer: 1
  },
  {
    id: 126,
    question: "Which position increases the risk of compartment syndrome?",
    choices: [
      "Supine",
      "Prone",
      "Lithotomy",
      "Lateral"
    ],
    correctAnswer: 2
  },
  {
    id: 127,
    question: "The most common cause of postoperative paralytic ileus is:",
    choices: [
      "Medications",
      "Electrolyte imbalance",
      "Surgical manipulation",
      "Infection"
    ],
    correctAnswer: 2
  },
  {
    id: 128,
    question: "Which imaging modality is best for detecting bile duct injury?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRCP",
      "ERCP"
    ],
    correctAnswer: 3
  },
  {
    id: 129,
    question: "The most common complication of bariatric surgery is:",
    choices: [
      "Bleeding",
      "Anastomotic leak",
      "Nutritional deficiency",
      "Dumping syndrome"
    ],
    correctAnswer: 2
  },
  {
    id: 130,
    question: "Which position is used for craniotomy?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Sitting"
    ],
    correctAnswer: 0
  },
  {
    id: 131,
    question: "The most common cause of postoperative visual loss is:",
    choices: [
      "Corneal abrasion",
      "Retinal artery occlusion",
      "Ischemic optic neuropathy",
      "Cortical blindness"
    ],
    correctAnswer: 2
  },
  {
    id: 132,
    question: "Which type of wound closure has the lowest infection rate?",
    choices: [
      "Primary closure",
      "Delayed primary closure",
      "Secondary closure",
      "Tertiary closure"
    ],
    correctAnswer: 0
  },
  {
    id: 133,
    question: "The most common indication for emergency colectomy is:",
    choices: [
      "Bleeding",
      "Perforation",
      "Obstruction",
      "Ischemia"
    ],
    correctAnswer: 1
  },
  {
    id: 134,
    question: "Which position is contraindicated in patients with glaucoma?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 135,
    question: "The most common cause of postoperative cognitive dysfunction is:",
    choices: [
      "Hypoxia",
      "Medications",
      "Age",
      "Duration of surgery"
    ],
    correctAnswer: 2
  },
  {
    id: 136,
    question: "Which imaging study is best for detecting splenic injury?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRI",
      "Angiography"
    ],
    correctAnswer: 1
  },
  {
    id: 137,
    question: "The most common complication of thyroidectomy is:",
    choices: [
      "Bleeding",
      "Recurrent laryngeal nerve injury",
      "Hypocalcemia",
      "Infection"
    ],
    correctAnswer: 2
  },
  {
    id: 138,
    question: "Which position is used for parathyroid surgery?",
    choices: [
      "Supine with neck flexion",
      "Supine with neck extension",
      "Prone",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 139,
    question: "The most common cause of postoperative hypocalcemia is:",
    choices: [
      "Parathyroid injury",
      "Vitamin D deficiency",
      "Malabsorption",
      "Medications"
    ],
    correctAnswer: 0
  },
  {
    id: 140,
    question: "Which suture technique provides the best hemostasis?",
    choices: [
      "Simple interrupted",
      "Running",
      "Mattress",
      "Figure-of-eight"
    ],
    correctAnswer: 3
  },
  {
    id: 141,
    question: "The most common indication for reoperation after cholecystectomy is:",
    choices: [
      "Bleeding",
      "Bile leak",
      "Retained stones",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 142,
    question: "Which position increases venous pooling in the legs?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Lithotomy"
    ],
    correctAnswer: 2
  },
  {
    id: 143,
    question: "The most common cause of postoperative hypernatremia is:",
    choices: [
      "Dehydration",
      "Diabetes insipidus",
      "Excessive sodium administration",
      "Diuretics"
    ],
    correctAnswer: 0
  },
  {
    id: 144,
    question: "Which imaging modality is best for detecting bowel obstruction?",
    choices: [
      "Ultrasound",
      "CT scan",
      "X-ray",
      "MRI"
    ],
    correctAnswer: 1
  },
  {
    id: 145,
    question: "The most common complication of carotid endarterectomy is:",
    choices: [
      "Stroke",
      "Bleeding",
      "Cranial nerve injury",
      "Restenosis"
    ],
    correctAnswer: 2
  },
  {
    id: 146,
    question: "Which position is used for carotid surgery?",
    choices: [
      "Supine with head turned",
      "Prone",
      "Lateral",
      "Sitting"
    ],
    correctAnswer: 0
  },
  {
    id: 147,
    question: "The most common cause of postoperative hoarseness is:",
    choices: [
      "Intubation trauma",
      "Recurrent laryngeal nerve injury",
      "Vocal cord paralysis",
      "Laryngeal edema"
    ],
    correctAnswer: 0
  },
  {
    id: 148,
    question: "Which type of anesthesia has the lowest complication rate?",
    choices: [
      "General",
      "Regional",
      "Local",
      "Monitored anesthesia care"
    ],
    correctAnswer: 2
  },
  {
    id: 149,
    question: "The most common indication for emergency surgery in diverticulitis is:",
    choices: [
      "Bleeding",
      "Perforation",
      "Obstruction",
      "Abscess"
    ],
    correctAnswer: 1
  },
  {
    id: 150,
    question: "Which position is contraindicated in patients with severe respiratory disease?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 151,
    question: "The most common cause of postoperative acidosis is:",
    choices: [
      "Respiratory failure",
      "Renal failure",
      "Lactic acidosis",
      "Diabetic ketoacidosis"
    ],
    correctAnswer: 2
  },
  {
    id: 152,
    question: "Which imaging study is best for detecting aortic aneurysm?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRI",
      "Angiography"
    ],
    correctAnswer: 1
  },
  {
    id: 153,
    question: "The most common complication of aortic aneurysm repair is:",
    choices: [
      "Bleeding",
      "Graft infection",
      "Limb ischemia",
      "Colonic ischemia"
    ],
    correctAnswer: 3
  },
  {
    id: 154,
    question: "Which position is used for aortic surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Lithotomy"
    ],
    correctAnswer: 0
  },
  {
    id: 155,
    question: "The most common cause of postoperative alkalosis is:",
    choices: [
      "Nasogastric suction",
      "Diuretics",
      "Hyperventilation",
      "Bicarbonate administration"
    ],
    correctAnswer: 0
  },
  {
    id: 156,
    question: "Which suture material is best for tendon repair?",
    choices: [
      "Silk",
      "Vicryl",
      "PDS",
      "Prolene"
    ],
    correctAnswer: 3
  },
  {
    id: 157,
    question: "The most common indication for amputation is:",
    choices: [
      "Trauma",
      "Infection",
      "Ischemia",
      "Tumor"
    ],
    correctAnswer: 2
  },
  {
    id: 158,
    question: "Which position increases the risk of peroneal nerve injury?",
    choices: [
      "Supine",
      "Prone",
      "Lithotomy",
      "Lateral"
    ],
    correctAnswer: 2
  },
  {
    id: 159,
    question: "The most common cause of postoperative hyperthermia is:",
    choices: [
      "Infection",
      "Malignant hyperthermia",
      "Drug reaction",
      "Environmental factors"
    ],
    correctAnswer: 0
  },
  {
    id: 160,
    question: "Which imaging modality is best for detecting pulmonary embolism?",
    choices: [
      "Chest X-ray",
      "CT pulmonary angiogram",
      "Ventilation-perfusion scan",
      "Echocardiogram"
    ],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "The most common complication of mastectomy is:",
    choices: [
      "Bleeding",
      "Infection",
      "Lymphedema",
      "Seroma"
    ],
    correctAnswer: 3
  },
  {
    id: 162,
    question: "Which position is used for breast surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Semi-Fowler's"
    ],
    correctAnswer: 0
  },
  {
    id: 163,
    question: "The most common cause of postoperative hypothermia is:",
    choices: [
      "Cold operating room",
      "Anesthesia",
      "Blood loss",
      "Fluid administration"
    ],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Which type of incision has the highest hernia rate?",
    choices: [
      "Midline",
      "Paramedian",
      "Transverse",
      "Oblique"
    ],
    correctAnswer: 0
  },
  {
    id: 165,
    question: "The most common indication for emergency neurosurgery is:",
    choices: [
      "Trauma",
      "Hemorrhage",
      "Tumor",
      "Infection"
    ],
    correctAnswer: 0
  },
  {
    id: 166,
    question: "Which position is contraindicated in patients with cervical spine injury?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Any position change"
    ],
    correctAnswer: 3
  },
  {
    id: 167,
    question: "The most common cause of postoperative bradycardia is:",
    choices: [
      "Medications",
      "Hypoxia",
      "Increased intracranial pressure",
      "Vagal stimulation"
    ],
    correctAnswer: 0
  },
  {
    id: 168,
    question: "Which imaging study is best for detecting retroperitoneal bleeding?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRI",
      "Angiography"
    ],
    correctAnswer: 1
  },
  {
    id: 169,
    question: "The most common complication of vascular surgery is:",
    choices: [
      "Bleeding",
      "Thrombosis",
      "Infection",
      "Graft failure"
    ],
    correctAnswer: 1
  },
  {
    id: 170,
    question: "Which position is used for vascular access surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Trendelenburg"
    ],
    correctAnswer: 0
  },
  {
    id: 171,
    question: "The most common cause of postoperative tachycardia is:",
    choices: [
      "Pain",
      "Hypovolemia",
      "Fever",
      "Medications"
    ],
    correctAnswer: 1
  },
  {
    id: 172,
    question: "Which suture technique is best for skin closure in contaminated wounds?",
    choices: [
      "Simple interrupted",
      "Running",
      "Mattress",
      "Delayed primary closure"
    ],
    correctAnswer: 3
  },
  {
    id: 173,
    question: "The most common indication for emergency orthopedic surgery is:",
    choices: [
      "Fracture",
      "Dislocation",
      "Compartment syndrome",
      "Infection"
    ],
    correctAnswer: 2
  },
  {
    id: 174,
    question: "Which position increases the risk of ulnar nerve injury?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Any position with arm abduction"
    ],
    correctAnswer: 3
  },
  {
    id: 175,
    question: "The most common cause of postoperative hypertension is:",
    choices: [
      "Pain",
      "Fluid overload",
      "Medications",
      "Anxiety"
    ],
    correctAnswer: 0
  },
  {
    id: 176,
    question: "Which imaging modality is best for detecting cardiac tamponade?",
    choices: [
      "Chest X-ray",
      "CT scan",
      "Echocardiogram",
      "MRI"
    ],
    correctAnswer: 2
  },
  {
    id: 177,
    question: "The most common complication of cardiac surgery is:",
    choices: [
      "Bleeding",
      "Arrhythmias",
      "Stroke",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 178,
    question: "Which position is used for cardiac surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Semi-Fowler's"
    ],
    correctAnswer: 0
  },
  {
    id: 179,
    question: "The most common cause of postoperative agitation is:",
    choices: [
      "Pain",
      "Hypoxia",
      "Medications",
      "Delirium"
    ],
    correctAnswer: 0
  },
  {
    id: 180,
    question: "Which type of drain is best for thoracic surgery?",
    choices: [
      "Penrose",
      "Jackson-Pratt",
      "Chest tube",
      "Blake"
    ],
    correctAnswer: 2
  },
  {
    id: 181,
    question: "The most common indication for emergency plastic surgery is:",
    choices: [
      "Trauma",
      "Infection",
      "Ischemia",
      "Bleeding"
    ],
    correctAnswer: 0
  },
  {
    id: 182,
    question: "Which position is contraindicated in patients with increased intraocular pressure?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Reverse Trendelenburg",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 183,
    question: "The most common cause of postoperative diplopia is:",
    choices: [
      "Extraocular muscle injury",
      "Cranial nerve palsy",
      "Orbital edema",
      "Medications"
    ],
    correctAnswer: 1
  },
  {
    id: 184,
    question: "Which imaging study is best for detecting intracranial hemorrhage?",
    choices: [
      "CT scan",
      "MRI",
      "Ultrasound",
      "Angiography"
    ],
    correctAnswer: 0
  },
  {
    id: 185,
    question: "The most common complication of neurosurgery is:",
    choices: [
      "Bleeding",
      "Infection",
      "Seizures",
      "Neurologic deficit"
    ],
    correctAnswer: 3
  },
  {
    id: 186,
    question: "Which position is used for posterior fossa surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Sitting"
    ],
    correctAnswer: 1
  },
  {
    id: 187,
    question: "The most common cause of postoperative dysphasia is:",
    choices: [
      "Intubation trauma",
      "Cerebral ischemia",
      "Medications",
      "Electrolyte imbalance"
    ],
    correctAnswer: 1
  },
  {
    id: 188,
    question: "Which suture material is best for ophthalmic surgery?",
    choices: [
      "Silk",
      "Vicryl",
      "Nylon",
      "Prolene"
    ],
    correctAnswer: 2
  },
  {
    id: 189,
    question: "The most common indication for emergency ENT surgery is:",
    choices: [
      "Bleeding",
      "Airway obstruction",
      "Infection",
      "Trauma"
    ],
    correctAnswer: 1
  },
  {
    id: 190,
    question: "Which position is used for tonsillectomy?",
    choices: [
      "Supine with head extension",
      "Prone",
      "Lateral",
      "Rose position"
    ],
    correctAnswer: 3
  },
  {
    id: 191,
    question: "The most common cause of postoperative anosmia is:",
    choices: [
      "Nasal packing",
      "Olfactory nerve injury",
      "Medications",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 192,
    question: "Which imaging modality is best for detecting sinusitis?",
    choices: [
      "X-ray",
      "CT scan",
      "MRI",
      "Ultrasound"
    ],
    correctAnswer: 1
  },
  {
    id: 193,
    question: "The most common complication of sinus surgery is:",
    choices: [
      "Bleeding",
      "Infection",
      "Cerebrospinal fluid leak",
      "Anosmia"
    ],
    correctAnswer: 0
  },
  {
    id: 194,
    question: "Which position is used for endoscopic sinus surgery?",
    choices: [
      "Supine",
      "Prone",
      "Reverse Trendelenburg",
      "Lateral"
    ],
    correctAnswer: 2
  },
  {
    id: 195,
    question: "The most common cause of postoperative epistaxis is:",
    choices: [
      "Hypertension",
      "Coagulopathy",
      "Nasal trauma",
      "Dry air"
    ],
    correctAnswer: 2
  },
  {
    id: 196,
    question: "Which type of graft is best for tympanoplasty?",
    choices: [
      "Fascia",
      "Cartilage",
      "Vein",
      "Synthetic"
    ],
    correctAnswer: 0
  },
  {
    id: 197,
    question: "The most common indication for emergency urologic surgery is:",
    choices: [
      "Bleeding",
      "Obstruction",
      "Infection",
      "Trauma"
    ],
    correctAnswer: 1
  },
  {
    id: 198,
    question: "Which position is used for kidney surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral decubitus",
      "Lithotomy"
    ],
    correctAnswer: 2
  },
  {
    id: 199,
    question: "The most common cause of postoperative hematuria is:",
    choices: [
      "Bladder injury",
      "Urethral trauma",
      "Coagulopathy",
      "Catheter trauma"
    ],
    correctAnswer: 3
  },
  {
    id: 200,
    question: "Which imaging study is best for detecting kidney stones?",
    choices: [
      "Ultrasound",
      "CT scan",
      "IVP",
      "MRI"
    ],
    correctAnswer: 1
  },
  {
    id: 201,
    question: "The most common complication of prostate surgery is:",
    choices: [
      "Bleeding",
      "Infection",
      "Incontinence",
      "Impotence"
    ],
    correctAnswer: 2
  },
  {
    id: 202,
    question: "Which position is used for prostate surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lithotomy",
      "Lateral"
    ],
    correctAnswer: 2
  },
  {
    id: 203,
    question: "The most common cause of postoperative scrotal swelling is:",
    choices: [
      "Hematoma",
      "Infection",
      "Hydrocele",
      "Edema"
    ],
    correctAnswer: 0
  },
  {
    id: 204,
    question: "Which suture material is best for urologic surgery?",
    choices: [
      "Silk",
      "Vicryl",
      "PDS",
      "Chromic gut"
    ],
    correctAnswer: 1
  },
  {
    id: 205,
    question: "The most common indication for emergency gynecologic surgery is:",
    choices: [
      "Bleeding",
      "Ectopic pregnancy",
      "Ovarian torsion",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 206,
    question: "Which position is used for hysterectomy?",
    choices: [
      "Supine",
      "Prone",
      "Lithotomy",
      "Trendelenburg"
    ],
    correctAnswer: 2
  },
  {
    id: 207,
    question: "The most common cause of postoperative vaginal bleeding is:",
    choices: [
      "Coagulopathy",
      "Vessel injury",
      "Infection",
      "Hormonal changes"
    ],
    correctAnswer: 1
  },
  {
    id: 208,
    question: "Which imaging study is best for detecting ovarian pathology?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRI",
      "X-ray"
    ],
    correctAnswer: 0
  },
  {
    id: 209,
    question: "The most common complication of cesarean section is:",
    choices: [
      "Bleeding",
      "Infection",
      "Bladder injury",
      "Adhesions"
    ],
    correctAnswer: 1
  },
  {
    id: 210,
    question: "Which position is used for cesarean section?",
    choices: [
      "Supine",
      "Left lateral tilt",
      "Trendelenburg",
      "Lithotomy"
    ],
    correctAnswer: 1
  },
  {
    id: 211,
    question: "The most common cause of postoperative shoulder pain after laparoscopy is:",
    choices: [
      "Positioning",
      "CO2 irritation",
      "Nerve injury",
      "Muscle strain"
    ],
    correctAnswer: 1
  },
  {
    id: 212,
    question: "Which type of trocar is safest for laparoscopic entry?",
    choices: [
      "Cutting",
      "Blunt",
      "Optical",
      "Hasson"
    ],
    correctAnswer: 3
  },
  {
    id: 213,
    question: "The most common indication for conversion to open surgery during laparoscopy is:",
    choices: [
      "Bleeding",
      "Adhesions",
      "Equipment failure",
      "Bowel injury"
    ],
    correctAnswer: 1
  },
  {
    id: 214,
    question: "Which gas pressure is used for laparoscopy in children?",
    choices: [
      "8-10 mmHg",
      "12-15 mmHg",
      "15-18 mmHg",
      "20-25 mmHg"
    ],
    correctAnswer: 0
  },
  {
    id: 215,
    question: "The most common cause of postoperative port site hernia is:",
    choices: [
      "Large port size",
      "Inadequate closure",
      "Infection",
      "Patient factors"
    ],
    correctAnswer: 1
  },
  {
    id: 216,
    question: "Which imaging modality is best for detecting port site complications?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRI",
      "X-ray"
    ],
    correctAnswer: 1
  },
  {
    id: 217,
    question: "The most common complication of robotic surgery is:",
    choices: [
      "Equipment malfunction",
      "Longer operative time",
      "Conversion to open",
      "Nerve injury"
    ],
    correctAnswer: 1
  },
  {
    id: 218,
    question: "Which position is most commonly used for robotic surgery?",
    choices: [
      "Supine",
      "Trendelenburg",
      "Lithotomy",
      "Lateral"
    ],
    correctAnswer: 1
  },
  {
    id: 219,
    question: "The most common cause of postoperative cognitive dysfunction in elderly is:",
    choices: [
      "Anesthesia",
      "Surgery duration",
      "Medications",
      "Preexisting dementia"
    ],
    correctAnswer: 3
  },
  {
    id: 220,
    question: "Which factor most predisposes to postoperative delirium?",
    choices: [
      "Age",
      "Medications",
      "Sleep deprivation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 221,
    question: "The most common indication for emergency pediatric surgery is:",
    choices: [
      "Appendicitis",
      "Intussusception",
      "Trauma",
      "Pyloric stenosis"
    ],
    correctAnswer: 0
  },
  {
    id: 222,
    question: "Which position is contraindicated in infants?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "None are contraindicated"
    ],
    correctAnswer: 3
  },
  {
    id: 223,
    question: "The most common cause of postoperative apnea in infants is:",
    choices: [
      "Anesthesia",
      "Prematurity",
      "Respiratory depression",
      "Airway obstruction"
    ],
    correctAnswer: 1
  },
  {
    id: 224,
    question: "Which suture material is best for pediatric cardiac surgery?",
    choices: [
      "Silk",
      "Vicryl",
      "PDS",
      "Prolene"
    ],
    correctAnswer: 3
  },
  {
    id: 225,
    question: "The most common indication for emergency geriatric surgery is:",
    choices: [
      "Hip fracture",
      "Bowel obstruction",
      "Cholecystitis",
      "Hernia"
    ],
    correctAnswer: 0
  },
  {
    id: 226,
    question: "Which factor most increases surgical risk in elderly patients?",
    choices: [
      "Age alone",
      "Comorbidities",
      "Frailty",
      "Cognitive status"
    ],
    correctAnswer: 2
  },
  {
    id: 227,
    question: "The most common cause of postoperative falls in elderly is:",
    choices: [
      "Medications",
      "Weakness",
      "Confusion",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 228,
    question: "Which imaging study is most important preoperatively in elderly patients?",
    choices: [
      "Chest X-ray",
      "ECG",
      "Echocardiogram",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 229,
    question: "The most common complication of emergency surgery is:",
    choices: [
      "Bleeding",
      "Infection",
      "Organ failure",
      "Death"
    ],
    correctAnswer: 1
  },
  {
    id: 230,
    question: "Which factor most determines outcome in trauma surgery?",
    choices: [
      "Injury severity",
      "Time to surgery",
      "Surgeon experience",
      "Hospital resources"
    ],
    correctAnswer: 1
  },
  {
    id: 231,
    question: "The most common cause of preventable death in trauma is:",
    choices: [
      "Hemorrhage",
      "Airway obstruction",
      "Tension pneumothorax",
      "Brain injury"
    ],
    correctAnswer: 0
  },
  {
    id: 232,
    question: "Which imaging study is most important in trauma evaluation?",
    choices: [
      "X-ray",
      "CT scan",
      "Ultrasound",
      "MRI"
    ],
    correctAnswer: 1
  },
  {
    id: 233,
    question: "The most common site of missed injury in trauma is:",
    choices: [
      "Head",
      "Chest",
      "Abdomen",
      "Extremities"
    ],
    correctAnswer: 3
  },
  {
    id: 234,
    question: "Which position is used for damage control surgery?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Any position"
    ],
    correctAnswer: 0
  },
  {
    id: 235,
    question: "The most important principle in damage control surgery is:",
    choices: [
      "Speed",
      "Hemostasis",
      "Contamination control",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 236,
    question: "Which factor most predicts survival in massive transfusion?",
    choices: [
      "Blood type",
      "Ratio of blood products",
      "Speed of transfusion",
      "Temperature"
    ],
    correctAnswer: 1
  },
  {
    id: 237,
    question: "The most common cause of coagulopathy in trauma is:",
    choices: [
      "Dilution",
      "Consumption",
      "Hypothermia",
      "Acidosis"
    ],
    correctAnswer: 1
  },
  {
    id: 238,
    question: "Which laboratory test is most important in trauma resuscitation?",
    choices: [
      "Hemoglobin",
      "Lactate",
      "Base deficit",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 239,
    question: "The most common indication for thoracotomy in trauma is:",
    choices: [
      "Hemothorax",
      "Pneumothorax",
      "Cardiac injury",
      "Great vessel injury"
    ],
    correctAnswer: 0
  },
  {
    id: 240,
    question: "Which approach is best for retroperitoneal hematoma?",
    choices: [
      "Always explore",
      "Never explore",
      "Selective exploration",
      "Angiography first"
    ],
    correctAnswer: 2
  },
  {
    id: 241,
    question: "The most common cause of abdominal compartment syndrome is:",
    choices: [
      "Bleeding",
      "Bowel edema",
      "Fluid resuscitation",
      "Packing"
    ],
    correctAnswer: 2
  },
  {
    id: 242,
    question: "Which pressure defines abdominal compartment syndrome?",
    choices: [
      ">15 mmHg",
      ">20 mmHg",
      ">25 mmHg",
      ">30 mmHg"
    ],
    correctAnswer: 1
  },
  {
    id: 243,
    question: "The most reliable method to measure intra-abdominal pressure is:",
    choices: [
      "Gastric pressure",
      "Bladder pressure",
      "Rectal pressure",
      "Direct measurement"
    ],
    correctAnswer: 1
  },
  {
    id: 244,
    question: "Which organ is most sensitive to increased intra-abdominal pressure?",
    choices: [
      "Kidney",
      "Liver",
      "Bowel",
      "Heart"
    ],
    correctAnswer: 0
  },
  {
    id: 245,
    question: "The most common indication for decompressive laparotomy is:",
    choices: [
      "Bleeding",
      "Compartment syndrome",
      "Bowel ischemia",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 246,
    question: "Which temporary closure method is best for open abdomen?",
    choices: [
      "Towel clips",
      "Vacuum dressing",
      "Mesh",
      "Skin only"
    ],
    correctAnswer: 1
  },
  {
    id: 247,
    question: "The most common complication of open abdomen is:",
    choices: [
      "Infection",
      "Fistula",
      "Hernia",
      "Adhesions"
    ],
    correctAnswer: 2
  },
  {
    id: 248,
    question: "Which factor most predicts successful fascial closure?",
    choices: [
      "Time to closure",
      "Patient age",
      "Wound size",
      "Infection"
    ],
    correctAnswer: 0
  },
  {
    id: 249,
    question: "The most important goal in open abdomen management is:",
    choices: [
      "Infection control",
      "Fascial closure",
      "Fistula prevention",
      "Pain control"
    ],
    correctAnswer: 1
  },
  {
    id: 250,
    question: "Which dressing change frequency is optimal for open abdomen?",
    choices: [
      "Daily",
      "Every 2-3 days",
      "Weekly",
      "As needed"
    ],
    correctAnswer: 1
  },
  {
    id: 251,
    question: "The most common cause of necrotizing fasciitis is:",
    choices: [
      "Streptococcus",
      "Staphylococcus",
      "Clostridium",
      "Mixed organisms"
    ],
    correctAnswer: 3
  },
  {
    id: 252,
    question: "Which sign is most specific for necrotizing fasciitis?",
    choices: [
      "Pain",
      "Erythema",
      "Crepitus",
      "Fever"
    ],
    correctAnswer: 2
  },
  {
    id: 253,
    question: "The most important treatment for necrotizing fasciitis is:",
    choices: [
      "Antibiotics",
      "Surgical debridement",
      "Hyperbaric oxygen",
      "Supportive care"
    ],
    correctAnswer: 1
  },
  {
    id: 254,
    question: "Which imaging study is best for diagnosing necrotizing fasciitis?",
    choices: [
      "X-ray",
      "CT scan",
      "MRI",
      "Ultrasound"
    ],
    correctAnswer: 2
  },
  {
    id: 255,
    question: "The most reliable laboratory test for necrotizing fasciitis is:",
    choices: [
      "White blood cell count",
      "C-reactive protein",
      "Lactate",
      "LRINEC score"
    ],
    correctAnswer: 3
  },
  {
    id: 256,
    question: "Which antibiotic is best for necrotizing fasciitis?",
    choices: [
      "Penicillin",
      "Clindamycin",
      "Vancomycin",
      "Combination therapy"
    ],
    correctAnswer: 3
  },
  {
    id: 257,
    question: "The most common site for necrotizing fasciitis is:",
    choices: [
      "Extremities",
      "Perineum",
      "Abdomen",
      "Head and neck"
    ],
    correctAnswer: 0
  },
  {
    id: 258,
    question: "Which factor most predisposes to necrotizing fasciitis?",
    choices: [
      "Diabetes",
      "Immunosuppression",
      "Trauma",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 259,
    question: "The most important prognostic factor in necrotizing fasciitis is:",
    choices: [
      "Age",
      "Comorbidities",
      "Time to surgery",
      "Organism type"
    ],
    correctAnswer: 2
  },
  {
    id: 260,
    question: "Which adjunctive therapy is beneficial in necrotizing fasciitis?",
    choices: [
      "Hyperbaric oxygen",
      "IVIG",
      "Steroids",
      "Both A and B"
    ],
    correctAnswer: 3
  },
  {
    id: 261,
    question: "The most common cause of surgical site infection is:",
    choices: [
      "Staphylococcus aureus",
      "Streptococcus",
      "E. coli",
      "Enterococcus"
    ],
    correctAnswer: 0
  },
  {
    id: 262,
    question: "Which factor most reduces surgical site infection?",
    choices: [
      "Antibiotic prophylaxis",
      "Skin preparation",
      "Surgical technique",
      "All are equally important"
    ],
    correctAnswer: 3
  },
  {
    id: 263,
    question: "The optimal timing for antibiotic prophylaxis is:",
    choices: [
      "1 hour before incision",
      "At induction",
      "After incision",
      "Postoperatively"
    ],
    correctAnswer: 0
  },
  {
    id: 264,
    question: "Which skin preparation is most effective?",
    choices: [
      "Povidone iodine",
      "Chlorhexidine",
      "Alcohol",
      "Combination"
    ],
    correctAnswer: 1
  },
  {
    id: 265,
    question: "The most important factor in hand hygiene is:",
    choices: [
      "Duration",
      "Technique",
      "Agent used",
      "Frequency"
    ],
    correctAnswer: 1
  },
  {
    id: 266,
    question: "Which surgical site has the highest infection rate?",
    choices: [
      "Clean",
      "Clean-contaminated",
      "Contaminated",
      "Dirty"
    ],
    correctAnswer: 3
  },
  {
    id: 267,
    question: "The most effective method for preventing central line infections is:",
    choices: [
      "Antibiotic prophylaxis",
      "Sterile technique",
      "Chlorhexidine prep",
      "Bundle approach"
    ],
    correctAnswer: 3
  },
  {
    id: 268,
    question: "Which dressing is best for surgical wounds?",
    choices: [
      "Gauze",
      "Transparent film",
      "Hydrocolloid",
      "Any sterile dressing"
    ],
    correctAnswer: 3
  },
  {
    id: 269,
    question: "The most important factor in wound healing is:",
    choices: [
      "Nutrition",
      "Oxygenation",
      "Infection control",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 270,
    question: "Which suture removal timing is optimal?",
    choices: [
      "3-5 days",
      "7-10 days",
      "14 days",
      "Depends on location"
    ],
    correctAnswer: 3
  },
  {
    id: 271,
    question: "The most common cause of anastomotic leak in colorectal surgery is:",
    choices: [
      "Tension",
      "Ischemia",
      "Infection",
      "Technical error"
    ],
    correctAnswer: 1
  },
  {
    id: 272,
    question: "Which factor most predicts anastomotic leak?",
    choices: [
      "Patient factors",
      "Technical factors",
      "Surgeon experience",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 273,
    question: "The most reliable test for anastomotic integrity is:",
    choices: [
      "Air leak test",
      "Methylene blue test",
      "Contrast study",
      "Endoscopy"
    ],
    correctAnswer: 0
  },
  {
    id: 274,
    question: "Which anastomotic technique has the lowest leak rate?",
    choices: [
      "Hand sewn",
      "Stapled",
      "Both are equal",
      "Depends on location"
    ],
    correctAnswer: 3
  },
  {
    id: 275,
    question: "The most important factor in anastomotic healing is:",
    choices: [
      "Blood supply",
      "Tension",
      "Technique",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 276,
    question: "Which suture material is best for anastomosis?",
    choices: [
      "Absorbable",
      "Non-absorbable",
      "Either",
      "Depends on location"
    ],
    correctAnswer: 0
  },
  {
    id: 277,
    question: "The optimal time for contrast study after anastomosis is:",
    choices: [
      "Immediately",
      "24 hours",
      "48-72 hours",
      "1 week"
    ],
    correctAnswer: 2
  },
  {
    id: 278,
    question: "Which sign is most specific for anastomotic leak?",
    choices: [
      "Fever",
      "Leukocytosis",
      "Abdominal pain",
      "Contrast extravasation"
    ],
    correctAnswer: 3
  },
  {
    id: 279,
    question: "The most common treatment for anastomotic leak is:",
    choices: [
      "Conservative management",
      "Percutaneous drainage",
      "Reoperation",
      "Depends on severity"
    ],
    correctAnswer: 3
  },
  {
    id: 280,
    question: "Which factor most influences leak management?",
    choices: [
      "Size of leak",
      "Patient condition",
      "Time of diagnosis",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 281,
    question: "The most common cause of postoperative bowel obstruction is:",
    choices: [
      "Adhesions",
      "Hernia",
      "Intussusception",
      "Tumor"
    ],
    correctAnswer: 0
  },
  {
    id: 282,
    question: "Which imaging study is best for bowel obstruction?",
    choices: [
      "X-ray",
      "CT scan",
      "Ultrasound",
      "Contrast study"
    ],
    correctAnswer: 1
  },
  {
    id: 283,
    question: "The most reliable sign of bowel obstruction is:",
    choices: [
      "Abdominal pain",
      "Vomiting",
      "Distension",
      "Dilated bowel on imaging"
    ],
    correctAnswer: 3
  },
  {
    id: 284,
    question: "Which type of obstruction requires immediate surgery?",
    choices: [
      "Partial",
      "Complete",
      "Strangulated",
      "Paralytic ileus"
    ],
    correctAnswer: 2
  },
  {
    id: 285,
    question: "The most important initial treatment for bowel obstruction is:",
    choices: [
      "Surgery",
      "Decompression",
      "Fluid resuscitation",
      "Antibiotics"
    ],
    correctAnswer: 2
  },
  {
    id: 286,
    question: "Which laboratory value is most concerning in bowel obstruction?",
    choices: [
      "White blood cell count",
      "Lactate",
      "Amylase",
      "Electrolytes"
    ],
    correctAnswer: 1
  },
  {
    id: 287,
    question: "The most common site for small bowel obstruction is:",
    choices: [
      "Duodenum",
      "Jejunum",
      "Ileum",
      "Ileocecal valve"
    ],
    correctAnswer: 2
  },
  {
    id: 288,
    question: "Which approach is best for adhesive small bowel obstruction?",
    choices: [
      "Always operative",
      "Always conservative",
      "Selective management",
      "Laparoscopic"
    ],
    correctAnswer: 2
  },
  {
    id: 289,
    question: "The most reliable predictor of strangulation is:",
    choices: [
      "Pain severity",
      "Fever",
      "Leukocytosis",
      "CT findings"
    ],
    correctAnswer: 3
  },
  {
    id: 290,
    question: "Which factor most predicts need for surgery in bowel obstruction?",
    choices: [
      "Duration",
      "Cause",
      "Patient condition",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 291,
    question: "The most common cause of large bowel obstruction is:",
    choices: [
      "Adhesions",
      "Tumor",
      "Volvulus",
      "Diverticulitis"
    ],
    correctAnswer: 1
  },
  {
    id: 292,
    question: "Which imaging finding suggests perforation?",
    choices: [
      "Dilated bowel",
      "Free air",
      "Fluid collection",
      "Wall thickening"
    ],
    correctAnswer: 1
  },
  {
    id: 293,
    question: "The most common site for colon perforation is:",
    choices: [
      "Cecum",
      "Sigmoid",
      "Rectum",
      "Splenic flexure"
    ],
    correctAnswer: 1
  },
  {
    id: 294,
    question: "Which treatment is best for sigmoid volvulus?",
    choices: [
      "Surgery",
      "Colonoscopic detorsion",
      "Conservative management",
      "Depends on viability"
    ],
    correctAnswer: 3
  },
  {
    id: 295,
    question: "The most reliable sign of bowel viability is:",
    choices: [
      "Color",
      "Peristalsis",
      "Pulse",
      "Bleeding"
    ],
    correctAnswer: 2
  },
  {
    id: 296,
    question: "Which factor most determines prognosis in bowel obstruction?",
    choices: [
      "Age",
      "Cause",
      "Time to treatment",
      "Comorbidities"
    ],
    correctAnswer: 2
  },
  {
    id: 297,
    question: "The most common complication of bowel resection is:",
    choices: [
      "Bleeding",
      "Infection",
      "Anastomotic leak",
      "Ileus"
    ],
    correctAnswer: 3
  },
  {
    id: 298,
    question: "Which approach is best for emergency bowel surgery?",
    choices: [
      "Open",
      "Laparoscopic",
      "Depends on condition",
      "Robotic"
    ],
    correctAnswer: 2
  },
  {
    id: 299,
    question: "The most important factor in emergency surgery outcome is:",
    choices: [
      "Surgeon experience",
      "Hospital resources",
      "Patient condition",
      "Time to surgery"
    ],
    correctAnswer: 3
  },
  {
    id: 300,
    question: "Which principle is most important in damage control surgery?",
    choices: [
      "Speed",
      "Simplicity",
      "Survival",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 301,
    question: "The most common indication for emergency abdominal surgery is:",
    choices: [
      "Appendicitis",
      "Cholecystitis",
      "Bowel obstruction",
      "Perforation"
    ],
    correctAnswer: 0
  },
  {
    id: 302,
    question: "Which diagnostic test is most important in acute abdomen?",
    choices: [
      "Laboratory tests",
      "Imaging",
      "Physical examination",
      "All are important"
    ],
    correctAnswer: 2
  },
  {
    id: 303,
    question: "The most reliable sign of peritonitis is:",
    choices: [
      "Pain",
      "Guarding",
      "Rebound tenderness",
      "Rigidity"
    ],
    correctAnswer: 3
  },
  {
    id: 304,
    question: "Which approach is best for peritonitis?",
    choices: [
      "Conservative",
      "Percutaneous drainage",
      "Surgery",
      "Depends on cause"
    ],
    correctAnswer: 3
  },
  {
    id: 305,
    question: "The most important factor in peritonitis management is:",
    choices: [
      "Source control",
      "Antibiotics",
      "Fluid resuscitation",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 306,
    question: "Which antibiotic regimen is best for peritonitis?",
    choices: [
      "Single agent",
      "Combination therapy",
      "Depends on source",
      "Empiric broad spectrum"
    ],
    correctAnswer: 3
  },
  {
    id: 307,
    question: "The most common cause of secondary peritonitis is:",
    choices: [
      "Appendicitis",
      "Diverticulitis",
      "Perforation",
      "All are common"
    ],
    correctAnswer: 2
  },
  {
    id: 308,
    question: "Which imaging study is best for free air detection?",
    choices: [
      "Upright chest X-ray",
      "Abdominal X-ray",
      "CT scan",
      "Ultrasound"
    ],
    correctAnswer: 0
  },
  {
    id: 309,
    question: "The most sensitive imaging for perforation is:",
    choices: [
      "X-ray",
      "CT scan",
      "Ultrasound",
      "MRI"
    ],
    correctAnswer: 1
  },
  {
    id: 310,
    question: "Which factor most predicts mortality in peritonitis?",
    choices: [
      "Age",
      "Source",
      "Delay in treatment",
      "Organ failure"
    ],
    correctAnswer: 3
  },
  {
    id: 311,
    question: "The most common cause of postoperative fever on day 1 is:",
    choices: [
      "Atelectasis",
      "Pneumonia",
      "UTI",
      "Wound infection"
    ],
    correctAnswer: 0
  },
  {
    id: 312,
    question: "Which fever pattern suggests infection?",
    choices: [
      "Low grade",
      "High grade",
      "Spiking",
      "Persistent"
    ],
    correctAnswer: 2
  },
  {
    id: 313,
    question: "The most common source of postoperative sepsis is:",
    choices: [
      "Pneumonia",
      "UTI",
      "Wound",
      "Intra-abdominal"
    ],
    correctAnswer: 3
  },
  {
    id: 314,
    question: "Which laboratory test is most useful for sepsis?",
    choices: [
      "White blood cell count",
      "Procalcitonin",
      "Lactate",
      "Blood cultures"
    ],
    correctAnswer: 2
  },
  {
    id: 315,
    question: "The most important initial treatment for sepsis is:",
    choices: [
      "Antibiotics",
      "Fluid resuscitation",
      "Vasopressors",
      "Source control"
    ],
    correctAnswer: 1
  },
  {
    id: 316,
    question: "Which organ system fails first in sepsis?",
    choices: [
      "Cardiovascular",
      "Respiratory",
      "Renal",
      "Neurologic"
    ],
    correctAnswer: 0
  },
  {
    id: 317,
    question: "The most reliable predictor of sepsis outcome is:",
    choices: [
      "Age",
      "Source",
      "Organ failure score",
      "Time to treatment"
    ],
    correctAnswer: 2
  },
  {
    id: 318,
    question: "Which antibiotic strategy is best for sepsis?",
    choices: [
      "Narrow spectrum",
      "Broad spectrum",
      "Combination",
      "Culture directed"
    ],
    correctAnswer: 1
  },
  {
    id: 319,
    question: "The most common cause of septic shock is:",
    choices: [
      "Gram positive bacteria",
      "Gram negative bacteria",
      "Fungi",
      "Viruses"
    ],
    correctAnswer: 1
  },
  {
    id: 320,
    question: "Which vasopressor is first line for septic shock?",
    choices: [
      "Dopamine",
      "Norepinephrine",
      "Epinephrine",
      "Vasopressin"
    ],
    correctAnswer: 1
  },
  {
    id: 321,
    question: "The most common postoperative pulmonary complication is:",
    choices: [
      "Pneumonia",
      "Atelectasis",
      "Pulmonary embolism",
      "Pneumothorax"
    ],
    correctAnswer: 1
  },
  {
    id: 322,
    question: "Which factor most predisposes to postoperative pneumonia?",
    choices: [
      "Age",
      "Smoking",
      "Duration of surgery",
      "Type of anesthesia"
    ],
    correctAnswer: 1
  },
  {
    id: 323,
    question: "The most effective prevention for postoperative pneumonia is:",
    choices: [
      "Antibiotics",
      "Early mobilization",
      "Incentive spirometry",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 324,
    question: "Which imaging study is best for pneumonia diagnosis?",
    choices: [
      "Chest X-ray",
      "CT scan",
      "Ultrasound",
      "MRI"
    ],
    correctAnswer: 0
  },
  {
    id: 325,
    question: "The most common organism in postoperative pneumonia is:",
    choices: [
      "Streptococcus pneumoniae",
      "Staphylococcus aureus",
      "Gram negative bacteria",
      "Anaerobes"
    ],
    correctAnswer: 2
  },
  {
    id: 326,
    question: "Which antibiotic is best for hospital-acquired pneumonia?",
    choices: [
      "Penicillin",
      "Cephalosporin",
      "Fluoroquinolone",
      "Anti-pseudomonal agent"
    ],
    correctAnswer: 3
  },
  {
    id: 327,
    question: "The most reliable sign of pulmonary embolism is:",
    choices: [
      "Chest pain",
      "Dyspnea",
      "Tachycardia",
      "Hypoxia"
    ],
    correctAnswer: 1
  },
  {
    id: 328,
    question: "Which diagnostic test is best for pulmonary embolism?",
    choices: [
      "D-dimer",
      "CT pulmonary angiogram",
      "V/Q scan",
      "Echocardiogram"
    ],
    correctAnswer: 1
  },
  {
    id: 329,
    question: "The most important risk factor for pulmonary embolism is:",
    choices: [
      "Age",
      "Immobility",
      "Surgery",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 330,
    question: "Which treatment is first line for pulmonary embolism?",
    choices: [
      "Heparin",
      "Warfarin",
      "Thrombolytics",
      "Embolectomy"
    ],
    correctAnswer: 0
  },
  {
    id: 331,
    question: "The most effective prevention for venous thromboembolism is:",
    choices: [
      "Early mobilization",
      "Compression stockings",
      "Anticoagulation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 332,
    question: "Which patients require VTE prophylaxis?",
    choices: [
      "All surgical patients",
      "High risk patients",
      "Immobile patients",
      "Depends on surgery type"
    ],
    correctAnswer: 0
  },
  {
    id: 333,
    question: "The most common site for deep vein thrombosis is:",
    choices: [
      "Calf",
      "Thigh",
      "Pelvis",
      "Upper extremity"
    ],
    correctAnswer: 1
  },
  {
    id: 334,
    question: "Which imaging study is best for deep vein thrombosis?",
    choices: [
      "Ultrasound",
      "CT scan",
      "MRI",
      "Venography"
    ],
    correctAnswer: 0
  },
  {
    id: 335,
    question: "The most reliable sign of deep vein thrombosis is:",
    choices: [
      "Pain",
      "Swelling",
      "Erythema",
      "Ultrasound findings"
    ],
    correctAnswer: 3
  },
  {
    id: 336,
    question: "Which anticoagulant is best for VTE treatment?",
    choices: [
      "Heparin",
      "LMWH",
      "Warfarin",
      "DOAC"
    ],
    correctAnswer: 1
  },
  {
    id: 337,
    question: "The most common cardiac complication after surgery is:",
    choices: [
      "Myocardial infarction",
      "Arrhythmias",
      "Heart failure",
      "Cardiac arrest"
    ],
    correctAnswer: 1
  },
  {
    id: 338,
    question: "Which factor most predicts cardiac complications?",
    choices: [
      "Age",
      "Cardiac history",
      "Type of surgery",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 339,
    question: "The most important preoperative cardiac assessment is:",
    choices: [
      "ECG",
      "Echocardiogram",
      "Stress test",
      "Clinical evaluation"
    ],
    correctAnswer: 3
  },
  {
    id: 340,
    question: "Which medication reduces perioperative cardiac risk?",
    choices: [
      "Beta blockers",
      "ACE inhibitors",
      "Statins",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 341,
    question: "The most common postoperative arrhythmia is:",
    choices: [
      "Atrial fibrillation",
      "Ventricular tachycardia",
      "Heart block",
      "Premature contractions"
    ],
    correctAnswer: 0
  },
  {
    id: 342,
    question: "Which treatment is best for postoperative atrial fibrillation?",
    choices: [
      "Rate control",
      "Rhythm control",
      "Anticoagulation",
      "Depends on patient"
    ],
    correctAnswer: 3
  },
  {
    id: 343,
    question: "The most reliable sign of myocardial infarction is:",
    choices: [
      "Chest pain",
      "ECG changes",
      "Troponin elevation",
      "All are important"
    ],
    correctAnswer: 2
  },
  {
    id: 344,
    question: "Which imaging study is best for cardiac evaluation?",
    choices: [
      "Chest X-ray",
      "ECG",
      "Echocardiogram",
      "Cardiac catheterization"
    ],
    correctAnswer: 2
  },
  {
    id: 345,
    question: "The most important factor in cardiac risk stratification is:",
    choices: [
      "Functional capacity",
      "Clinical predictors",
      "Surgery type",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 346,
    question: "Which patients need preoperative cardiac clearance?",
    choices: [
      "All patients",
      "High risk patients",
      "Symptomatic patients",
      "Depends on surgery"
    ],
    correctAnswer: 3
  },
  {
    id: 347,
    question: "The most common renal complication after surgery is:",
    choices: [
      "Acute kidney injury",
      "Urinary retention",
      "UTI",
      "Electrolyte imbalance"
    ],
    correctAnswer: 0
  },
  {
    id: 348,
    question: "Which factor most predisposes to acute kidney injury?",
    choices: [
      "Age",
      "Dehydration",
      "Medications",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 349,
    question: "The most important prevention for acute kidney injury is:",
    choices: [
      "Adequate hydration",
      "Avoid nephrotoxins",
      "Monitor function",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 350,
    question: "Which laboratory test is most sensitive for kidney injury?",
    choices: [
      "Creatinine",
      "BUN",
      "Cystatin C",
      "Creatinine clearance"
    ],
    correctAnswer: 2
  },
  {
    id: 351,
    question: "The most reliable indicator of kidney function is:",
    choices: [
      "Serum creatinine",
      "BUN",
      "Urine output",
      "GFR"
    ],
    correctAnswer: 3
  },
  {
    id: 352,
    question: "Which medication is most nephrotoxic?",
    choices: [
      "NSAIDs",
      "ACE inhibitors",
      "Aminoglycosides",
      "Contrast agents"
    ],
    correctAnswer: 2
  },
  {
    id: 353,
    question: "The most common cause of postoperative oliguria is:",
    choices: [
      "Dehydration",
      "Acute kidney injury",
      "Obstruction",
      "Medications"
    ],
    correctAnswer: 0
  },
  {
    id: 354,
    question: "Which intervention is best for contrast nephropathy prevention?",
    choices: [
      "Hydration",
      "N-acetylcysteine",
      "Bicarbonate",
      "All are beneficial"
    ],
    correctAnswer: 0
  },
  {
    id: 355,
    question: "The most important factor in kidney injury recovery is:",
    choices: [
      "Cause",
      "Severity",
      "Duration",
      "Patient factors"
    ],
    correctAnswer: 2
  },
  {
    id: 356,
    question: "Which patients need renal replacement therapy?",
    choices: [
      "All AKI patients",
      "Severe AKI patients",
      "Symptomatic patients",
      "Depends on indication"
    ],
    correctAnswer: 3
  },
  {
    id: 357,
    question: "The most common neurologic complication after surgery is:",
    choices: [
      "Stroke",
      "Delirium",
      "Seizures",
      "Peripheral neuropathy"
    ],
    correctAnswer: 1
  },
  {
    id: 358,
    question: "Which factor most predisposes to postoperative delirium?",
    choices: [
      "Age",
      "Medications",
      "Sleep deprivation",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 359,
    question: "The most effective prevention for delirium is:",
    choices: [
      "Avoid sedatives",
      "Early mobilization",
      "Sleep hygiene",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 360,
    question: "Which assessment tool is best for delirium?",
    choices: [
      "CAM",
      "MMSE",
      "GCS",
      "Richmond scale"
    ],
    correctAnswer: 0
  },
  {
    id: 361,
    question: "The most common cause of postoperative stroke is:",
    choices: [
      "Embolism",
      "Thrombosis",
      "Hemorrhage",
      "Hypotension"
    ],
    correctAnswer: 0
  },
  {
    id: 362,
    question: "Which imaging study is best for acute stroke?",
    choices: [
      "CT scan",
      "MRI",
      "Ultrasound",
      "Angiography"
    ],
    correctAnswer: 0
  },
  {
    id: 363,
    question: "The most important factor in stroke outcome is:",
    choices: [
      "Age",
      "Severity",
      "Time to treatment",
      "Location"
    ],
    correctAnswer: 2
  },
  {
    id: 364,
    question: "Which treatment is best for acute stroke?",
    choices: [
      "Anticoagulation",
      "Thrombolytics",
      "Surgery",
      "Depends on type"
    ],
    correctAnswer: 3
  },
  {
    id: 365,
    question: "The most reliable sign of increased intracranial pressure is:",
    choices: [
      "Headache",
      "Vomiting",
      "Altered consciousness",
      "Papilledema"
    ],
    correctAnswer: 2
  },
  {
    id: 366,
    question: "Which intervention is best for increased ICP?",
    choices: [
      "Hyperventilation",
      "Mannitol",
      "Head elevation",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 367,
    question: "The most common endocrine complication after surgery is:",
    choices: [
      "Diabetes",
      "Thyroid dysfunction",
      "Adrenal insufficiency",
      "Hyperglycemia"
    ],
    correctAnswer: 3
  },
  {
    id: 368,
    question: "Which factor most affects glucose control?",
    choices: [
      "Stress response",
      "Medications",
      "Nutrition",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 369,
    question: "The target glucose range for surgical patients is:",
    choices: [
      "80-110 mg/dL",
      "140-180 mg/dL",
      "180-220 mg/dL",
      "Any level"
    ],
    correctAnswer: 1
  },
  {
    id: 370,
    question: "Which insulin regimen is best for surgical patients?",
    choices: [
      "Sliding scale",
      "Basal-bolus",
      "Continuous infusion",
      "Depends on patient"
    ],
    correctAnswer: 3
  },
  {
    id: 371,
    question: "The most common cause of hypoglycemia is:",
    choices: [
      "Insulin overdose",
      "Poor nutrition",
      "Liver dysfunction",
      "Sepsis"
    ],
    correctAnswer: 0
  },
  {
    id: 372,
    question: "Which sign is most reliable for hypoglycemia?",
    choices: [
      "Sweating",
      "Confusion",
      "Tachycardia",
      "Glucose measurement"
    ],
    correctAnswer: 3
  },
  {
    id: 373,
    question: "The most important factor in diabetes management is:",
    choices: [
      "Glucose monitoring",
      "Insulin adjustment",
      "Nutrition",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 374,
    question: "Which patients need stress dose steroids?",
    choices: [
      "All surgical patients",
      "Diabetic patients",
      "Steroid-dependent patients",
      "High-risk patients"
    ],
    correctAnswer: 2
  },
  {
    id: 375,
    question: "The most common thyroid complication after surgery is:",
    choices: [
      "Hypothyroidism",
      "Hyperthyroidism",
      "Thyroid storm",
      "Recurrent laryngeal nerve injury"
    ],
    correctAnswer: 0
  },
  {
    id: 376,
    question: "Which electrolyte is most important to monitor after thyroid surgery?",
    choices: [
      "Sodium",
      "Potassium",
      "Calcium",
      "Magnesium"
    ],
    correctAnswer: 2
  },
  {
    id: 377,
    question: "The most common nutritional deficiency after surgery is:",
    choices: [
      "Protein",
      "Calories",
      "Vitamins",
      "Minerals"
    ],
    correctAnswer: 1
  },
  {
    id: 378,
    question: "Which factor most affects wound healing?",
    choices: [
      "Protein",
      "Calories",
      "Vitamins",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 379,
    question: "The optimal timing for nutritional support is:",
    choices: [
      "Immediately",
      "24-48 hours",
      "3-5 days",
      "When hungry"
    ],
    correctAnswer: 1
  },
  {
    id: 380,
    question: "Which route is best for nutritional support?",
    choices: [
      "Enteral",
      "Parenteral",
      "Both are equal",
      "Depends on patient"
    ],
    correctAnswer: 0
  },
  {
    id: 381,
    question: "The most important nutritional parameter is:",
    choices: [
      "Albumin",
      "Prealbumin",
      "Transferrin",
      "Clinical assessment"
    ],
    correctAnswer: 3
  },
  {
    id: 382,
    question: "Which patients need nutritional support?",
    choices: [
      "All surgical patients",
      "Malnourished patients",
      "High-risk patients",
      "Depends on surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 383,
    question: "The most common complication of enteral nutrition is:",
    choices: [
      "Aspiration",
      "Diarrhea",
      "Tube displacement",
      "Infection"
    ],
    correctAnswer: 1
  },
  {
    id: 384,
    question: "Which formula is best for surgical patients?",
    choices: [
      "Standard",
      "High protein",
      "Immune-enhancing",
      "Depends on patient"
    ],
    correctAnswer: 3
  },
  {
    id: 385,
    question: "The most serious complication of parenteral nutrition is:",
    choices: [
      "Infection",
      "Metabolic complications",
      "Liver dysfunction",
      "Refeeding syndrome"
    ],
    correctAnswer: 0
  },
  {
    id: 386,
    question: "Which monitoring is most important for parenteral nutrition?",
    choices: [
      "Glucose",
      "Electrolytes",
      "Liver function",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 387,
    question: "The most common hematologic complication after surgery is:",
    choices: [
      "Anemia",
      "Thrombocytopenia",
      "Coagulopathy",
      "Bleeding"
    ],
    correctAnswer: 0
  },
  {
    id: 388,
    question: "Which factor most affects postoperative bleeding?",
    choices: [
      "Platelet count",
      "Coagulation studies",
      "Surgical technique",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 389,
    question: "The most important test for bleeding evaluation is:",
    choices: [
      "PT/INR",
      "PTT",
      "Platelet count",
      "Clinical assessment"
    ],
    correctAnswer: 3
  },
  {
    id: 390,
    question: "Which blood product is best for acute bleeding?",
    choices: [
      "Packed red cells",
      "Fresh frozen plasma",
      "Platelets",
      "Depends on cause"
    ],
    correctAnswer: 3
  },
  {
    id: 391,
    question: "The optimal hemoglobin level for surgical patients is:",
    choices: [
      ">10 g/dL",
      ">8 g/dL",
      ">7 g/dL",
      "Depends on patient"
    ],
    correctAnswer: 3
  },
  {
    id: 392,
    question: "Which patients need preoperative blood typing?",
    choices: [
      "All patients",
      "High-risk patients",
      "Major surgery patients",
      "Depends on surgery"
    ],
    correctAnswer: 3
  },
  {
    id: 393,
    question: "The most common transfusion reaction is:",
    choices: [
      "Hemolytic",
      "Febrile",
      "Allergic",
      "TRALI"
    ],
    correctAnswer: 1
  },
  {
    id: 394,
    question: "Which complication is most serious?",
    choices: [
      "Hemolytic reaction",
      "TRALI",
      "Infection",
      "All are serious"
    ],
    correctAnswer: 3
  },
  {
    id: 395,
    question: "The most important factor in transfusion safety is:",
    choices: [
      "Proper identification",
      "Compatibility testing",
      "Storage conditions",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 396,
    question: "Which alternative to transfusion is best?",
    choices: [
      "Iron therapy",
      "Erythropoietin",
      "Cell salvage",
      "Depends on situation"
    ],
    correctAnswer: 3
  },
  {
    id: 397,
    question: "The most common psychiatric complication after surgery is:",
    choices: [
      "Depression",
      "Anxiety",
      "Delirium",
      "PTSD"
    ],
    correctAnswer: 2
  },
  {
    id: 398,
    question: "Which factor most predisposes to psychiatric complications?",
    choices: [
      "Age",
      "Previous history",
      "Surgery type",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 399,
    question: "The most effective treatment for postoperative depression is:",
    choices: [
      "Antidepressants",
      "Counseling",
      "Support",
      "All are beneficial"
    ],
    correctAnswer: 3
  },
  {
    id: 400,
    question: "Which assessment is most important for psychiatric evaluation?",
    choices: [
      "Mental status exam",
      "Psychiatric history",
      "Social support",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 401,
    question: "The most common dermatologic complication after surgery is:",
    choices: [
      "Wound infection",
      "Pressure ulcers",
      "Allergic reactions",
      "Scarring"
    ],
    correctAnswer: 1
  },
  {
    id: 402,
    question: "Which factor most predisposes to pressure ulcers?",
    choices: [
      "Immobility",
      "Poor nutrition",
      "Moisture",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 403,
    question: "The most effective prevention for pressure ulcers is:",
    choices: [
      "Repositioning",
      "Pressure relief",
      "Skin care",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 404,
    question: "Which staging system is used for pressure ulcers?",
    choices: [
      "Grade 1-4",
      "Stage I-IV",
      "Class A-D",
      "Level 1-5"
    ],
    correctAnswer: 1
  },
  {
    id: 405,
    question: "The most important factor in pressure ulcer healing is:",
    choices: [
      "Wound care",
      "Pressure relief",
      "Nutrition",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 406,
    question: "Which dressing is best for pressure ulcers?",
    choices: [
      "Gauze",
      "Hydrocolloid",
      "Foam",
      "Depends on stage"
    ],
    correctAnswer: 3
  },
  {
    id: 407,
    question: "The most common allergic reaction in surgery is:",
    choices: [
      "Latex allergy",
      "Drug allergy",
      "Antiseptic allergy",
      "Tape allergy"
    ],
    correctAnswer: 1
  },
  {
    id: 408,
    question: "Which sign is most concerning for anaphylaxis?",
    choices: [
      "Rash",
      "Bronchospasm",
      "Hypotension",
      "All are concerning"
    ],
    correctAnswer: 3
  },
  {
    id: 409,
    question: "The most important treatment for anaphylaxis is:",
    choices: [
      "Epinephrine",
      "Steroids",
      "Antihistamines",
      "Supportive care"
    ],
    correctAnswer: 0
  },
  {
    id: 410,
    question: "Which patients need allergy screening?",
    choices: [
      "All patients",
      "High-risk patients",
      "Previous reaction patients",
      "Depends on surgery"
    ],
    correctAnswer: 0
  },
  {
    id: 411,
    question: "The most common ophthalmologic complication after surgery is:",
    choices: [
      "Corneal abrasion",
      "Conjunctivitis",
      "Visual loss",
      "Dry eyes"
    ],
    correctAnswer: 0
  },
  {
    id: 412,
    question: "Which factor most predisposes to corneal injury?",
    choices: [
      "Positioning",
      "Anesthesia",
      "Eye protection",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 413,
    question: "The most effective prevention for eye injury is:",
    choices: [
      "Eye protection",
      "Lubrication",
      "Positioning",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 414,
    question: "Which sign suggests serious eye injury?",
    choices: [
      "Pain",
      "Redness",
      "Visual loss",
      "Tearing"
    ],
    correctAnswer: 2
  },
  {
    id: 415,
    question: "The most important factor in eye injury prevention is:",
    choices: [
      "Awareness",
      "Protection",
      "Positioning",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 416,
    question: "Which patients are at highest risk for eye injury?",
    choices: [
      "Prone position",
      "Long procedures",
      "Cardiac surgery",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 417,
    question: "The most common musculoskeletal complication after surgery is:",
    choices: [
      "Back pain",
      "Nerve injury",
      "Joint stiffness",
      "Muscle weakness"
    ],
    correctAnswer: 1
  },
  {
    id: 418,
    question: "Which nerve is most commonly injured during surgery?",
    choices: [
      "Ulnar nerve",
      "Peroneal nerve",
      "Brachial plexus",
      "Depends on position"
    ],
    correctAnswer: 3
  },
  {
    id: 419,
    question: "The most effective prevention for nerve injury is:",
    choices: [
      "Proper positioning",
      "Padding",
      "Awareness",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 420,
    question: "Which position has the highest risk for nerve injury?",
    choices: [
      "Supine",
      "Prone",
      "Lateral",
      "Lithotomy"
    ],
    correctAnswer: 3
  },
  {
    id: 421,
    question: "The most reliable sign of nerve injury is:",
    choices: [
      "Pain",
      "Numbness",
      "Weakness",
      "All are important"
    ],
    correctAnswer: 2
  },
  {
    id: 422,
    question: "Which factor most affects nerve injury recovery?",
    choices: [
      "Severity",
      "Location",
      "Time to diagnosis",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 423,
    question: "The most common genitourinary complication after surgery is:",
    choices: [
      "Urinary retention",
      "UTI",
      "Incontinence",
      "Kidney injury"
    ],
    correctAnswer: 0
  },
  {
    id: 424,
    question: "Which factor most predisposes to urinary retention?",
    choices: [
      "Age",
      "Medications",
      "Surgery type",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 425,
    question: "The most effective treatment for urinary retention is:",
    choices: [
      "Catheterization",
      "Medications",
      "Time",
      "Depends on cause"
    ],
    correctAnswer: 0
  },
  {
    id: 426,
    question: "Which patients are at highest risk for UTI?",
    choices: [
      "Elderly",
      "Catheterized",
      "Immunocompromised",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 427,
    question: "The most effective prevention for UTI is:",
    choices: [
      "Antibiotics",
      "Catheter care",
      "Early removal",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 428,
    question: "Which sign is most reliable for UTI?",
    choices: [
      "Fever",
      "Dysuria",
      "Frequency",
      "Urine culture"
    ],
    correctAnswer: 3
  },
  {
    id: 429,
    question: "The most common gastrointestinal complication after surgery is:",
    choices: [
      "Nausea/vomiting",
      "Ileus",
      "Bleeding",
      "Diarrhea"
    ],
    correctAnswer: 1
  },
  {
    id: 430,
    question: "Which factor most predisposes to ileus?",
    choices: [
      "Surgery type",
      "Medications",
      "Patient factors",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 431,
    question: "The most effective treatment for ileus is:",
    choices: [
      "Medications",
      "Decompression",
      "Time",
      "Early feeding"
    ],
    correctAnswer: 2
  },
  {
    id: 432,
    question: "Which sign suggests ileus resolution?",
    choices: [
      "Bowel sounds",
      "Flatus",
      "Bowel movement",
      "All are important"
    ],
    correctAnswer: 1
  },
  {
    id: 433,
    question: "The most effective prevention for ileus is:",
    choices: [
      "Early feeding",
      "Mobilization",
      "Avoid opioids",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 434,
    question: "Which medication is best for ileus?",
    choices: [
      "Metoclopramide",
      "Erythromycin",
      "Neostigmine",
      "None are proven"
    ],
    correctAnswer: 3
  },
  {
    id: 435,
    question: "The most common cause of postoperative nausea is:",
    choices: [
      "Anesthesia",
      "Opioids",
      "Surgery type",
      "All contribute"
    ],
    correctAnswer: 3
  },
  {
    id: 436,
    question: "Which antiemetic is most effective?",
    choices: [
      "Ondansetron",
      "Metoclopramide",
      "Droperidol",
      "Combination therapy"
    ],
    correctAnswer: 3
  },
  {
    id: 437,
    question: "The most effective prevention for nausea is:",
    choices: [
      "Prophylactic antiemetics",
      "Regional anesthesia",
      "Avoid triggers",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 438,
    question: "Which patients are at highest risk for nausea?",
    choices: [
      "Female",
      "Non-smokers",
      "History of motion sickness",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 439,
    question: "The most serious complication of vomiting is:",
    choices: [
      "Dehydration",
      "Aspiration",
      "Electrolyte imbalance",
      "Wound dehiscence"
    ],
    correctAnswer: 1
  },
  {
    id: 440,
    question: "Which intervention is most important for vomiting?",
    choices: [
      "Antiemetics",
      "Fluid replacement",
      "Aspiration precautions",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 441,
    question: "The most common endocrine disorder affecting surgery is:",
    choices: [
      "Diabetes",
      "Thyroid disease",
      "Adrenal insufficiency",
      "Obesity"
    ],
    correctAnswer: 0
  },
  {
    id: 442,
    question: "Which diabetic complication is most concerning?",
    choices: [
      "Hyperglycemia",
      "Hypoglycemia",
      "Ketoacidosis",
      "All are concerning"
    ],
    correctAnswer: 3
  },
  {
    id: 443,
    question: "The most important preoperative diabetic management is:",
    choices: [
      "Glucose control",
      "Medication adjustment",
      "Monitoring",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 444,
    question: "Which insulin regimen is best perioperatively?",
    choices: [
      "Continue home regimen",
      "Sliding scale",
      "Continuous infusion",
      "Depends on patient"
    ],
    correctAnswer: 3
  },
  {
    id: 445,
    question: "The most reliable glucose monitoring method is:",
    choices: [
      "Fingerstick",
      "Arterial blood gas",
      "Laboratory",
      "Continuous monitor"
    ],
    correctAnswer: 2
  },
  {
    id: 446,
    question: "Which patients need perioperative glucose monitoring?",
    choices: [
      "All diabetics",
      "Insulin-dependent",
      "High-risk surgery",
      "All surgical patients"
    ],
    correctAnswer: 3
  },
  {
    id: 447,
    question: "The most common thyroid emergency is:",
    choices: [
      "Thyroid storm",
      "Myxedema coma",
      "Thyrotoxicosis",
      "Hypothyroidism"
    ],
    correctAnswer: 0
  },
  {
    id: 448,
    question: "Which sign suggests thyroid storm?",
    choices: [
      "Hyperthermia",
      "Tachycardia",
      "Altered mental status",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 449,
    question: "The most important treatment for thyroid storm is:",
    choices: [
      "Beta blockers",
      "Antithyroid drugs",
      "Steroids",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 450,
    question: "Which patients need preoperative thyroid evaluation?",
    choices: [
      "All patients",
      "Symptomatic patients",
      "High-risk patients",
      "Depends on surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 451,
    question: "The most common adrenal emergency is:",
    choices: [
      "Adrenal crisis",
      "Pheochromocytoma crisis",
      "Hyperaldosteronism",
      "Cushing's syndrome"
    ],
    correctAnswer: 0
  },
  {
    id: 452,
    question: "Which patients need stress dose steroids?",
    choices: [
      "All surgical patients",
      "Steroid users",
      "High-risk patients",
      "Major surgery patients"
    ],
    correctAnswer: 1
  },
  {
    id: 453,
    question: "The most appropriate stress dose steroid is:",
    choices: [
      "Hydrocortisone 100mg",
      "Prednisone 20mg",
      "Dexamethasone 4mg",
      "Depends on surgery"
    ],
    correctAnswer: 3
  },
  {
    id: 454,
    question: "Which sign suggests adrenal insufficiency?",
    choices: [
      "Hypotension",
      "Hyperkalemia",
      "Hyponatremia",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 455,
    question: "The most reliable test for adrenal function is:",
    choices: [
      "Cortisol level",
      "ACTH stimulation test",
      "24-hour urine",
      "Clinical assessment"
    ],
    correctAnswer: 1
  },
  {
    id: 456,
    question: "Which patients need adrenal evaluation?",
    choices: [
      "All patients",
      "Steroid users",
      "Symptomatic patients",
      "High-risk patients"
    ],
    correctAnswer: 1
  },
  {
    id: 457,
    question: "The most common metabolic complication after surgery is:",
    choices: [
      "Hyperglycemia",
      "Electrolyte imbalance",
      "Acid-base disorder",
      "Malnutrition"
    ],
    correctAnswer: 1
  },
  {
    id: 458,
    question: "Which electrolyte is most commonly abnormal?",
    choices: [
      "Sodium",
      "Potassium",
      "Chloride",
      "All are common"
    ],
    correctAnswer: 3
  },
  {
    id: 459,
    question: "The most dangerous electrolyte abnormality is:",
    choices: [
      "Hyponatremia",
      "Hyperkalemia",
      "Hypocalcemia",
      "All can be dangerous"
    ],
    correctAnswer: 3
  },
  {
    id: 460,
    question: "Which monitoring is most important for electrolytes?",
    choices: [
      "Daily labs",
      "Clinical assessment",
      "ECG changes",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 461,
    question: "The most effective treatment for hyperkalemia is:",
    choices: [
      "Calcium",
      "Insulin/glucose",
      "Kayexalate",
      "Dialysis"
    ],
    correctAnswer: 1
  },
  {
    id: 462,
    question: "Which patients need electrolyte monitoring?",
    choices: [
      "All surgical patients",
      "High-risk patients",
      "Long procedures",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 463,
    question: "The most common acid-base disorder is:",
    choices: [
      "Metabolic acidosis",
      "Metabolic alkalosis",
      "Respiratory acidosis",
      "Respiratory alkalosis"
    ],
    correctAnswer: 0
  },
  {
    id: 464,
    question: "Which cause is most common for metabolic acidosis?",
    choices: [
      "Lactic acidosis",
      "Ketoacidosis",
      "Renal failure",
      "Diarrhea"
    ],
    correctAnswer: 0
  },
  {
    id: 465,
    question: "The most important treatment for acidosis is:",
    choices: [
      "Bicarbonate",
      "Treat underlying cause",
      "Ventilation",
      "Depends on cause"
    ],
    correctAnswer: 1
  },
  {
    id: 466,
    question: "Which parameter is most important for acid-base assessment?",
    choices: [
      "pH",
      "PCO2",
      "HCO3",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 467,
    question: "The most reliable indicator of tissue perfusion is:",
    choices: [
      "Blood pressure",
      "Heart rate",
      "Lactate",
      "Urine output"
    ],
    correctAnswer: 2
  },
  {
    id: 468,
    question: "Which patients need acid-base monitoring?",
    choices: [
      "All patients",
      "Critically ill",
      "Long procedures",
      "Depends on surgery"
    ],
    correctAnswer: 1
  },
  {
    id: 469,
    question: "The most important factor in postoperative recovery is:",
    choices: [
      "Pain control",
      "Early mobilization",
      "Nutrition",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 470,
    question: "Which intervention most improves outcomes?",
    choices: [
      "Enhanced recovery protocols",
      "Multimodal analgesia",
      "Early feeding",
      "All are beneficial"
    ],
    correctAnswer: 0
  },
  {
    id: 471,
    question: "The most effective pain management approach is:",
    choices: [
      "Opioids alone",
      "Regional anesthesia",
      "Multimodal analgesia",
      "Patient-controlled analgesia"
    ],
    correctAnswer: 2
  },
  {
    id: 472,
    question: "Which factor most affects length of stay?",
    choices: [
      "Surgery type",
      "Complications",
      "Patient factors",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 473,
    question: "The most important discharge criterion is:",
    choices: [
      "Pain control",
      "Functional status",
      "Stable vitals",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 474,
    question: "Which patients need extended monitoring?",
    choices: [
      "High-risk patients",
      "Complex procedures",
      "Complications",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 475,
    question: "The most effective quality improvement measure is:",
    choices: [
      "Outcome tracking",
      "Process improvement",
      "Education",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 476,
    question: "Which metric is most important for quality?",
    choices: [
      "Mortality",
      "Morbidity",
      "Length of stay",
      "Patient satisfaction"
    ],
    correctAnswer: 1
  },
  {
    id: 477,
    question: "The most important safety measure is:",
    choices: [
      "Time out",
      "Checklists",
      "Communication",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 478,
    question: "Which factor most reduces errors?",
    choices: [
      "Standardization",
      "Training",
      "Technology",
      "All are beneficial"
    ],
    correctAnswer: 3
  },
  {
    id: 479,
    question: "The most effective error prevention strategy is:",
    choices: [
      "Individual vigilance",
      "System design",
      "Technology",
      "All are important"
    ],
    correctAnswer: 1
  },
  {
    id: 480,
    question: "Which culture promotes safety?",
    choices: [
      "Blame-free",
      "Reporting",
      "Learning",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 481,
    question: "The most important aspect of surgical education is:",
    choices: [
      "Technical skills",
      "Knowledge",
      "Judgment",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 482,
    question: "Which teaching method is most effective?",
    choices: [
      "Didactic lectures",
      "Simulation",
      "Mentorship",
      "All are beneficial"
    ],
    correctAnswer: 2
  },
  {
    id: 483,
    question: "The most important skill for surgeons is:",
    choices: [
      "Technical ability",
      "Decision making",
      "Communication",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 484,
    question: "Which assessment method is most reliable?",
    choices: [
      "Written exams",
      "Practical exams",
      "Observation",
      "All are important"
    ],
    correctAnswer: 2
  },
  {
    id: 485,
    question: "The most important factor in surgical training is:",
    choices: [
      "Volume",
      "Variety",
      "Supervision",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 486,
    question: "Which competency is most critical?",
    choices: [
      "Patient care",
      "Medical knowledge",
      "Professionalism",
      "All are critical"
    ],
    correctAnswer: 3
  },
  {
    id: 487,
    question: "The most important research methodology in surgery is:",
    choices: [
      "Randomized controlled trials",
      "Observational studies",
      "Case series",
      "All have value"
    ],
    correctAnswer: 0
  },
  {
    id: 488,
    question: "Which outcome measure is most important?",
    choices: [
      "Mortality",
      "Morbidity",
      "Quality of life",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 489,
    question: "The most reliable evidence comes from:",
    choices: [
      "Expert opinion",
      "Case series",
      "Cohort studies",
      "Randomized trials"
    ],
    correctAnswer: 3
  },
  {
    id: 490,
    question: "Which bias is most common in surgical research?",
    choices: [
      "Selection bias",
      "Information bias",
      "Confounding",
      "All are common"
    ],
    correctAnswer: 3
  },
  {
    id: 491,
    question: "The most important ethical principle in surgery is:",
    choices: [
      "Autonomy",
      "Beneficence",
      "Non-maleficence",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 492,
    question: "Which consent element is most critical?",
    choices: [
      "Risks",
      "Benefits",
      "Alternatives",
      "All are critical"
    ],
    correctAnswer: 3
  },
  {
    id: 493,
    question: "The most important factor in decision making is:",
    choices: [
      "Evidence",
      "Experience",
      "Patient values",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 494,
    question: "Which situation requires ethics consultation?",
    choices: [
      "Futile care",
      "Capacity questions",
      "Family conflicts",
      "All may require consultation"
    ],
    correctAnswer: 3
  },
  {
    id: 495,
    question: "The most important aspect of professionalism is:",
    choices: [
      "Competence",
      "Integrity",
      "Compassion",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 496,
    question: "Which behavior is most unprofessional?",
    choices: [
      "Incompetence",
      "Dishonesty",
      "Disrespect",
      "All are unprofessional"
    ],
    correctAnswer: 3
  },
  {
    id: 497,
    question: "The most important communication skill is:",
    choices: [
      "Listening",
      "Explaining",
      "Empathy",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 498,
    question: "Which factor most affects patient satisfaction?",
    choices: [
      "Outcome",
      "Communication",
      "Compassion",
      "All are important"
    ],
    correctAnswer: 1
  },
  {
    id: 499,
    question: "The most important leadership quality is:",
    choices: [
      "Vision",
      "Integrity",
      "Communication",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 500,
    question: "Which skill is most important for surgical leaders?",
    choices: [
      "Technical expertise",
      "Management skills",
      "People skills",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 501,
    question: "The most important innovation in surgery is:",
    choices: [
      "Minimally invasive techniques",
      "Robotics",
      "Imaging",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 502,
    question: "Which technology has the greatest impact?",
    choices: [
      "Laparoscopy",
      "Robotics",
      "Navigation",
      "All have impact"
    ],
    correctAnswer: 0
  },
  {
    id: 503,
    question: "The most important factor in technology adoption is:",
    choices: [
      "Efficacy",
      "Safety",
      "Cost-effectiveness",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 504,
    question: "Which barrier most limits innovation?",
    choices: [
      "Cost",
      "Training",
      "Regulation",
      "All are barriers"
    ],
    correctAnswer: 3
  },
  {
    id: 505,
    question: "The most promising future development is:",
    choices: [
      "Artificial intelligence",
      "Nanotechnology",
      "Gene therapy",
      "All show promise"
    ],
    correctAnswer: 3
  },
  {
    id: 506,
    question: "Which trend will most impact surgery?",
    choices: [
      "Personalized medicine",
      "Telemedicine",
      "Artificial intelligence",
      "All will impact"
    ],
    correctAnswer: 3
  },
  {
    id: 507,
    question: "The most important global surgical issue is:",
    choices: [
      "Access to care",
      "Quality of care",
      "Cost of care",
      "All are important"
    ],
    correctAnswer: 0
  },
  {
    id: 508,
    question: "Which intervention most improves global surgery?",
    choices: [
      "Training",
      "Infrastructure",
      "Equipment",
      "All are needed"
    ],
    correctAnswer: 3
  },
  {
    id: 509,
    question: "The most effective model for surgical care delivery is:",
    choices: [
      "Centralized",
      "Decentralized",
      "Hybrid",
      "Depends on setting"
    ],
    correctAnswer: 3
  },
  {
    id: 510,
    question: "Which factor most determines surgical outcomes globally?",
    choices: [
      "Resources",
      "Training",
      "Systems",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 511,
    question: "The most important sustainability factor is:",
    choices: [
      "Financial",
      "Environmental",
      "Social",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 512,
    question: "Which approach best addresses surgical disparities?",
    choices: [
      "Individual efforts",
      "Institutional changes",
      "System reform",
      "All are needed"
    ],
    correctAnswer: 3
  },
  {
    id: 513,
    question: "The most critical surgical workforce issue is:",
    choices: [
      "Shortage",
      "Distribution",
      "Training",
      "All are critical"
    ],
    correctAnswer: 3
  },
  {
    id: 514,
    question: "Which solution best addresses workforce challenges?",
    choices: [
      "Increase training",
      "Improve distribution",
      "Task shifting",
      "All are needed"
    ],
    correctAnswer: 3
  },
  {
    id: 515,
    question: "The most important measure of surgical system performance is:",
    choices: [
      "Volume",
      "Quality",
      "Access",
      "All are important"
    ],
    correctAnswer: 3
  },
  {
    id: 516,
    question: "What is the main purpose of the balloon on a Foley catheter?",
    choices: [
      "Drain urine",
      "Provide irrigation",
      "Hold the catheter in place",
      "Prevent infection"
    ],
    correctAnswer: 2
  },
  {
    id: 517,
    question: "Which suprapubic catheter does not rely on a balloon to stay in place?",
    choices: [
      "Foley",
      "Pezzer",
      "Three-way Foley",
      "Foley Goalie"
    ],
    correctAnswer: 1
  },
  {
    id: 518,
    question: "Nephrostomy tubes drain urine directly from the:",
    choices: [
      "Ureter",
      "Bladder",
      "Kidney",
      "Urethra"
    ],
    correctAnswer: 2
  },
  {
    id: 519,
    question: "Interventional radiology procedures are often performed to:",
    choices: [
      "Remove stones surgically",
      "Introduce contrast media and stents",
      "Irrigate the bladder",
      "Perform prostatectomy"
    ],
    correctAnswer: 1
  },
  {
    id: 520,
    question: "A cystoscopy may be indicated for all except:",
    choices: [
      "Urinary retention",
      "Hematuria",
      "UTI",
      "Nephrostomy"
    ],
    correctAnswer: 3
  },
  {
    id: 521,
    question: "The most common stirrups used in cystoscopy are:",
    choices: [
      "Lithotomy and supine",
      "Allen and Yellofin",
      "Trendelenburg and Fowler",
      "Mayo and kidney rest"
    ],
    correctAnswer: 1
  },
  {
    id: 522,
    question: "What disinfectant is preferred for high-level cleaning of cystoscopy equipment?",
    choices: [
      "Betadine",
      "Chlorhexidine",
      "Glutaraldehyde",
      "Alcohol"
    ],
    correctAnswer: 2
  },
  {
    id: 523,
    question: "Which laser is commonly used for ablation of condylomata?",
    choices: [
      "YAG",
      "Argon",
      "Nd:YAG",
      "CO₂"
    ],
    correctAnswer: 3
  },
  {
    id: 524,
    question: "Phimosis is a condition where:",
    choices: [
      "The urethra is blocked",
      "The foreskin is difficult to retract",
      "The prostate is enlarged",
      "The scrotum is infected"
    ],
    correctAnswer: 1
  },
  {
    id: 525,
    question: "The primary goal of a urethral meatotomy is to:",
    choices: [
      "Repair a fistula",
      "Remove the foreskin",
      "Enlarge the urethral meatus",
      "Perform biopsy"
    ],
    correctAnswer: 2
  },
  {
    id: 526,
    question: "The purpose of Van Buren sounds is to:",
    choices: [
      "Dilate the urethra",
      "Excise bladder tumors",
      "Biopsy prostate",
      "Crush stones"
    ],
    correctAnswer: 0
  },
  {
    id: 527,
    question: "A urethroplasty is indicated for all of the following except:",
    choices: [
      "Strictures",
      "Trauma",
      "Infection",
      "Circumcision"
    ],
    correctAnswer: 3
  },
  {
    id: 528,
    question: "What condition can lead to placement of a penile implant?",
    choices: [
      "Phimosis",
      "Diabetes",
      "Priapism",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 529,
    question: "During a vasectomy, which structure is tied and cauterized?",
    choices: [
      "Epididymis",
      "Vas deferens",
      "Prostate",
      "Ureter"
    ],
    correctAnswer: 1
  },
  {
    id: 530,
    question: "A hydrocelectomy is performed to remove:",
    choices: [
      "Excess fluid from the scrotum",
      "The testicle",
      "The prostate",
      "A penile implant"
    ],
    correctAnswer: 0
  },
  {
    id: 531,
    question: "A varicocelectomy is performed primarily to:",
    choices: [
      "Improve fertility",
      "Excise tumors",
      "Treat infections",
      "Drain urine"
    ],
    correctAnswer: 0
  },
  {
    id: 532,
    question: "The PSA test screens for:",
    choices: [
      "Kidney failure",
      "Testicular cancer",
      "Prostate cancer",
      "UTI"
    ],
    correctAnswer: 2
  },
  {
    id: 533,
    question: "A needle biopsy of the prostate often uses a:",
    choices: [
      "Tru-Cut needle",
      "Yankauer suction",
      "Foley catheter",
      "Punch biopsy"
    ],
    correctAnswer: 0
  },
  {
    id: 534,
    question: "Which of the following is a minimally invasive treatment for prostate cancer?",
    choices: [
      "TURP",
      "Radical prostatectomy",
      "Transrectal seed implantation",
      "Nephroureterectomy"
    ],
    correctAnswer: 2
  },
  {
    id: 535,
    question: "The Ellik evacuator is used to:",
    choices: [
      "Remove stones",
      "Irrigate the bladder",
      "Evacuate chips and clots",
      "Inflate the Foley balloon"
    ],
    correctAnswer: 2
  },
  {
    id: 536,
    question: "Which of the following describes a radical prostatectomy?",
    choices: [
      "Removal of prostate only",
      "Removal of prostate, seminal vesicles, and lymph nodes",
      "Removal of bladder and prostate",
      "Biopsy of the prostate"
    ],
    correctAnswer: 1
  },
  {
    id: 537,
    question: "Which urinary diversion reroutes the ureters into an ileum loop?",
    choices: [
      "Ureterocystostomy",
      "Cutaneous ureterostomy",
      "Ileal conduit",
      "Ureteroureterostomy"
    ],
    correctAnswer: 2
  },
  {
    id: 538,
    question: "What is the preferred way to send stones to pathology?",
    choices: [
      "In saline",
      "In sterile water",
      "In a dry container",
      "In formalin"
    ],
    correctAnswer: 2
  },
  {
    id: 539,
    question: "Nephrostomy is indicated to:",
    choices: [
      "Reroute urine through the intestine",
      "Open the urethra",
      "Drain urine directly from the kidney",
      "Crush stones"
    ],
    correctAnswer: 2
  },
  {
    id: 540,
    question: "The purpose of ESWL is to:",
    choices: [
      "Remove stones percutaneously",
      "Crush stones with sound waves",
      "Evacuate clots",
      "Dilate the urethra"
    ],
    correctAnswer: 1
  },
  {
    id: 541,
    question: "Pyelotomy refers to:",
    choices: [
      "Removal of kidney",
      "Incision into renal pelvis",
      "Removal of stones from ureter",
      "Diversion of urine"
    ],
    correctAnswer: 1
  },
  {
    id: 542,
    question: "Hydroureteronephrosis is treated by:",
    choices: [
      "TURP",
      "Nephroureterectomy",
      "Urethral meatotomy",
      "Vasectomy"
    ],
    correctAnswer: 1
  },
  {
    id: 543,
    question: "The most common diagnosis requiring kidney transplant is:",
    choices: [
      "Diabetes",
      "Polycystic kidneys",
      "Renal trauma",
      "Prostate cancer"
    ],
    correctAnswer: 0
  },
  {
    id: 544,
    question: "Which kidney is usually harvested for transplant?",
    choices: [
      "Left",
      "Right",
      "Either",
      "Neither"
    ],
    correctAnswer: 0
  },
  {
    id: 545,
    question: "What position is the recipient placed in for kidney transplant?",
    choices: [
      "Right lateral",
      "Left lateral decubitus",
      "Supine",
      "Prone"
    ],
    correctAnswer: 2
  },
  {
    id: 546,
    question: "The adrenal glands secrete all of the following except:",
    choices: [
      "Epinephrine",
      "Cortisol",
      "Testosterone",
      "Insulin"
    ],
    correctAnswer: 3
  },
  {
    id: 547,
    question: "A congenital malignant tumor of the kidney in children is called:",
    choices: [
      "Wilm's tumor",
      "Varicocele",
      "Hydrocele",
      "Phimosis"
    ],
    correctAnswer: 0
  },
  {
    id: 548,
    question: "The thoracic cavity contains all of the following except:",
    choices: [
      "Heart",
      "Lungs",
      "Kidneys",
      "Great vessels"
    ],
    correctAnswer: 2
  },
  {
    id: 549,
    question: "How many ribs are considered 'true' ribs?",
    choices: [
      "7",
      "5",
      "12",
      "10"
    ],
    correctAnswer: 0
  },
  {
    id: 550,
    question: "The diaphragm separates:",
    choices: [
      "Left and right lungs",
      "Peritoneal and thoracic cavities",
      "Heart and lungs",
      "Upper and lower abdomen"
    ],
    correctAnswer: 1
  },
  {
    id: 551,
    question: "What is the purpose of a double-lumen endotracheal tube?",
    choices: [
      "Evacuate air",
      "Provide suction",
      "Ventilate one lung while collapsing the other",
      "Visualize the trachea"
    ],
    correctAnswer: 2
  },
  {
    id: 552,
    question: "A bronchoscope is inserted through the:",
    choices: [
      "Neck",
      "Chest wall",
      "Nose or mouth",
      "Tracheostomy"
    ],
    correctAnswer: 2
  },
  {
    id: 553,
    question: "Myasthenia gravis is most commonly associated with:",
    choices: [
      "Lung cancer",
      "Thymoma",
      "Diabetes",
      "Wilm's tumor"
    ],
    correctAnswer: 1
  },
  {
    id: 554,
    question: "Which instrument is used to retract the lung?",
    choices: [
      "Duval clamp",
      "Allison retractor",
      "Tuffier rib retractor",
      "Sarot clamp"
    ],
    correctAnswer: 1
  },
  {
    id: 555,
    question: "What is the purpose of a chest tube and water seal system?",
    choices: [
      "Provide oxygen",
      "Establish negative pressure",
      "Ventilate both lungs",
      "Collapse the lung"
    ],
    correctAnswer: 1
  },
  {
    id: 556,
    question: "Which thoracic procedure removes the entire lung?",
    choices: [
      "Pneumonectomy",
      "Lobectomy",
      "Segmental resection",
      "Wedge resection"
    ],
    correctAnswer: 0
  },
  {
    id: 557,
    question: "What congenital chest deformity is also called 'funnel chest'?",
    choices: [
      "Pectus carinatum",
      "Pectus excavatum",
      "Bleb",
      "Thoracotomy"
    ],
    correctAnswer: 1
  },
  {
    id: 558,
    question: "Hemoptysis refers to:",
    choices: [
      "Difficulty breathing",
      "Coughing up blood",
      "Collapsed lung",
      "Fluid in the lung"
    ],
    correctAnswer: 1
  },
  {
    id: 559,
    question: "What nerve must be preserved during a pneumonectomy?",
    choices: [
      "Median",
      "Recurrent laryngeal",
      "Phrenic",
      "Both B and C"
    ],
    correctAnswer: 3
  },
  {
    id: 560,
    question: "A wedge resection removes:",
    choices: [
      "Entire lung",
      "One lobe",
      "Small portion of one lobe",
      "Segment of one lung"
    ],
    correctAnswer: 2
  },
  {
    id: 561,
    question: "What is the main purpose of mediastinoscopy?",
    choices: [
      "Biopsy of lymph nodes",
      "Collapse a lung",
      "Dilate bronchi",
      "Insert chest tube"
    ],
    correctAnswer: 0
  },
  {
    id: 562,
    question: "Which thoracic procedure is minimally invasive and video-assisted?",
    choices: [
      "VATS",
      "Thoracotomy",
      "Bronchoscopy",
      "Rib resection"
    ],
    correctAnswer: 0
  },
  {
    id: 563,
    question: "Which thoracic procedure is minimally invasive and video-assisted?",
    choices: [
      "VATS",
      "Thoracotomy",
      "Bronchoscopy",
      "Rib resection"
    ],
    correctAnswer: 0
  },
  {
    id: 564,
    question: "Which thoracic procedure is minimally invasive and video-assisted?",
    choices: [
      "VATS",
      "Thoracotomy",
      "Bronchoscopy",
      "Rib resection"
    ],
    correctAnswer: 0
  },
  {
    id: 565,
    question: "Which thoracic procedure is minimally invasive and video-assisted?",
    choices: [
      "VATS",
      "Thoracotomy",
      "Bronchoscopy",
      "Rib resection"
    ],
    correctAnswer: 0
  }
];
