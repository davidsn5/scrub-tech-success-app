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
    question: "What is the GI tract also called?",
    choices: [
      "Mesentery tract",
      "Alimentary tract", 
      "Hepatic tract",
      "Respiratory tract"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is NOT a function of the GI tract?",
    choices: [
      "Ingestion",
      "Digestion", 
      "Filtration",
      "Absorption"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Which part of the GI tract is responsible for transporting ingested material by peristalsis from pharynx to stomach?",
    choices: [
      "Stomach",
      "Esophagus", 
      "Duodenum",
      "Rectum"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "What is another name for EGD?",
    choices: [
      "Colonoscopy",
      "Proctoscopy", 
      "Gastroscopy",
      "Sigmoidoscopy"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Endoscopes are classified as:",
    choices: [
      "Disposable devices",
      "Sterile devices", 
      "Semicritical devices",
      "Non-critical devices"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Which condition is caused by backflow of gastric contents into esophagus?",
    choices: [
      "Barrett's esophagus",
      "GERD", 
      "Zenker's diverticulum",
      "Intussusception"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Barrett's esophagus increases the risk for:",
    choices: [
      "Ulcers",
      "Cancer", 
      "Diverticulitis",
      "Appendicitis"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which is a weakening in the esophageal wall that traps food?",
    choices: [
      "Hiatal hernia",
      "Zenker's diverticulum", 
      "Barrett's esophagus",
      "Pyloric stenosis"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What is the purpose of a laparoscopic Nissen fundoplication?",
    choices: [
      "Remove appendix",
      "Repair hernia", 
      "Prevent reflux",
      "Dilate esophagus"
    ],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Which instruments are used for esophageal dilation?",
    choices: [
      "Bougie dilators",
      "Sigmoidoscope", 
      "Band ligators",
      "Suction cannulas"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Which part of the stomach is located above the esophageal sphincter?",
    choices: [
      "Pylorus",
      "Fundus", 
      "Cardia",
      "Body"
    ],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "Which structure is attached to the greater curvature of the stomach?",
    choices: [
      "Omentum",
      "Mesentery", 
      "Ligament of Treitz",
      "Cecum"
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "What connects the intestines to the posterior abdominal wall?",
    choices: [
      "Omentum",
      "Mesentery", 
      "Serosa",
      "Haustra"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "What is the main function of the stomach?",
    choices: [
      "Eliminate waste",
      "Store ingested material", 
      "Produce insulin",
      "Absorb water"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "What does a vagotomy involve?",
    choices: [
      "Cutting the mesentery",
      "Removing part of the stomach", 
      "Cutting vagus nerve branches",
      "Closing the pylorus"
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Pyloromyotomy is more common in:",
    choices: [
      "Adults with ulcers",
      "Infants with projectile vomiting", 
      "Adults with cancer",
      "Patients with hernias"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is the purpose of a PEG tube?",
    choices: [
      "Remove gallstones",
      "Gastric decompression and feeding", 
      "Dilate esophagus",
      "Resect bowel"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which procedure treats benign pyloric obstruction without removing GI tissue?",
    choices: [
      "Gastrojejunostomy",
      "Billroth II", 
      "Nissen fundoplication",
      "Vagotomy"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "Billroth I anastomoses the stomach to the:",
    choices: [
      "Ileum",
      "Duodenum", 
      "Jejunum",
      "Cecum"
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Total gastrectomy involves removal of:",
    choices: [
      "Stomach and duodenum",
      "Entire stomach", 
      "Distal stomach",
      "Proximal stomach"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "Bariatric surgery is performed to:",
    choices: [
      "Remove tumors",
      "Treat obesity", 
      "Treat ulcers",
      "Repair hernias"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Which bariatric procedure is adjustable and reversible?",
    choices: [
      "Roux-en-Y bypass",
      "Billroth II", 
      "PEG",
      "LAP-BAND"
    ],
    correctAnswer: 3
  },
  {
    id: 23,
    question: "Which part of the small intestine connects to the ileocecal valve?",
    choices: [
      "Duodenum",
      "Ileum", 
      "Jejunum",
      "Colon"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "What is the function of the large intestine?",
    choices: [
      "Produce bile",
      "Store ingested food", 
      "Reabsorb water",
      "Produce insulin"
    ],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "What is the correct order of the colon parts?",
    choices: [
      "Ascending, transverse, descending, sigmoid",
      "Transverse, ascending, sigmoid, descending", 
      "Ascending, descending, sigmoid, transverse",
      "Sigmoid, ascending, descending, transverse"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "Which muscle controls voluntary anal sphincter function?",
    choices: [
      "Internal sphincter",
      "External sphincter", 
      "Circular muscle",
      "Oblique muscle"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "The appendix projects from the:",
    choices: [
      "Cecum",
      "Sigmoid colon", 
      "Rectum",
      "Ileum"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "What is an appendectomy commonly performed for?",
    choices: [
      "Diverticulitis",
      "Ulcers", 
      "Acute inflammation",
      "Cancer"
    ],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "Which incision is used for an appendectomy?",
    choices: [
      "Kocher",
      "Pfannenstiel", 
      "McBurney",
      "Midline"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Which type of suture is commonly used on the appendix stump?",
    choices: [
      "Figure-of-eight",
      "Purse-string", 
      "Interrupted",
      "Running"
    ],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "What is the purpose of an intestinal stoma?",
    choices: [
      "Remove stomach contents",
      "Divert bowel contents", 
      "Remove gallbladder",
      "Biopsy bowel"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "A colostomy creates an opening in the:",
    choices: [
      "Stomach",
      "Colon", 
      "Small intestine",
      "Rectum"
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "The Whipple procedure removes all EXCEPT:",
    choices: [
      "Head of pancreas",
      "Entire duodenum", 
      "Proximal jejunum",
      "Entire stomach"
    ],
    correctAnswer: 3
  },
  {
    id: 34,
    question: "Gallstones are sent to pathology:",
    choices: [
      "In saline",
      "On a dry container", 
      "In formalin",
      "In sterile water"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is the main function of the gallbladder?",
    choices: [
      "Store insulin",
      "Store bile", 
      "Produce bile",
      "Digest fat"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "What is the preferred incision for an open cholecystectomy?",
    choices: [
      "Midline",
      "Kocher", 
      "McBurney",
      "Pfannenstiel"
    ],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "Which of the following is NOT part of the bowel technique?",
    choices: [
      "Isolating contaminated instruments",
      "Using separate clean and dirty setups", 
      "Changing gloves",
      "Using the same suction for clean and dirty areas"
    ],
    correctAnswer: 3
  },
  {
    id: 38,
    question: "An APR is performed to treat lesions of the:",
    choices: [
      "Esophagus",
      "Rectum and anus", 
      "Stomach",
      "Cecum"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Adhesions are:",
    choices: [
      "Dilated veins",
      "Bands of fibrous tissue", 
      "Stenotic pylorus",
      "Herniated intestines"
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Hemorrhoidectomy can be performed with:",
    choices: [
      "Bougie",
      "Band suture or laser", 
      "PEG",
      "Veress needle"
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "A fistulotomy involves:",
    choices: [
      "Excision of the tract",
      "Drainage of the tract", 
      "Closure of the tract",
      "Repair of the sphincter"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "What is the first layer of the abdominal wall?",
    choices: [
      "Fascia",
      "Skin", 
      "Peritoneum",
      "Subcutaneous tissue"
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "Which laparoscopic technique uses a blunt trocar?",
    choices: [
      "Veress needle technique",
      "SIL technique", 
      "Hasson technique",
      "Kocher technique"
    ],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "What is the normal intra-abdominal pressure during laparoscopy?",
    choices: [
      "5-8 mmHg",
      "8-10 mmHg", 
      "12-15 mmHg",
      "18-20 mmHg"
    ],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "What does the ligament of Treitz connect?",
    choices: [
      "Duodenum and jejunum",
      "Ileum and cecum", 
      "Colon and rectum",
      "Stomach and duodenum"
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "What are haustra?",
    choices: [
      "Fat-filled pouches",
      "Bands on stomach", 
      "Outpouchings of intestines",
      "Layers of the peritoneum"
    ],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "What is Meckel's diverticulum?",
    choices: [
      "Outpouching of large intestine",
      "Outpouching of small intestine", 
      "Stricture of esophagus",
      "Obstruction of pylorus"
    ],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "What is a pilonidal cyst?",
    choices: [
      "Hernia at diaphragm",
      "Anal mucosa tear", 
      "Cyst near buttocks with hair",
      "Gastric ulcer"
    ],
    correctAnswer: 2
  },
  {
    id: 49,
    question: "Which type of anesthesia is commonly used for laparoscopic procedures?",
    choices: [
      "Local anesthesia",
      "General anesthesia", 
      "Spinal anesthesia",
      "Epidural anesthesia"
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "What is the primary advantage of minimally invasive surgery?",
    choices: [
      "Lower cost",
      "Faster procedure time", 
      "Reduced patient recovery time",
      "No anesthesia required"
    ],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "What is the main function of the gastrointestinal (GI) tract?",
    choices: [
      "Absorb oxygen",
      "Store bile",
      "Ingestion, digestion, absorption",
      "Produce hormones"
    ],
    correctAnswer: 2
  },
  {
    id: 52,
    question: "Which of the following is NOT a part of the GI tract?",
    choices: [
      "Stomach",
      "Rectum",
      "Esophagus",
      "Kidney"
    ],
    correctAnswer: 3
  },
  {
    id: 53,
    question: "The GI tract is also called the:",
    choices: [
      "Respiratory tract",
      "Circulatory tract",
      "Alimentary tract",
      "Endocrine tract"
    ],
    correctAnswer: 2
  },
  {
    id: 54,
    question: "The esophagus transports material from the pharynx to the:",
    choices: [
      "Duodenum",
      "Stomach",
      "Rectum",
      "Liver"
    ],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "Endoscopes are considered semicritical devices because:",
    choices: [
      "They enter sterile tissue",
      "They never touch mucosa",
      "They enter mucosa and must be disinfected",
      "They are disposable"
    ],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "Barrett's esophagus is a precursor condition for:",
    choices: [
      "Colon cancer",
      "Esophageal cancer",
      "Stomach ulcers",
      "GERD"
    ],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "A Zenker's diverticulum is a weakness in the:",
    choices: [
      "Diaphragm",
      "Stomach wall",
      "Esophagus",
      "Rectum"
    ],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "Which of these procedures restores the function of the lower esophageal sphincter?",
    choices: [
      "Laparoscopic Nissen fundoplication",
      "Esophagectomy",
      "PEG tube placement",
      "Esophageal dilation"
    ],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "The omentum attaches to the:",
    choices: [
      "Lesser curvature of stomach",
      "Greater curvature of stomach",
      "Duodenum",
      "Pancreas"
    ],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "The stomach's storage and chemical digestion functions are aided by:",
    choices: [
      "Peristaltic waves",
      "Villi",
      "Cilia",
      "Bile salts"
    ],
    correctAnswer: 0
  },
  {
    id: 61,
    question: "Billroth I involves an anastomosis between the stomach and:",
    choices: [
      "Jejunum",
      "Duodenum",
      "Ileum",
      "Rectum"
    ],
    correctAnswer: 1
  },
  {
    id: 62,
    question: "What is the most common indication for a PEG tube?",
    choices: [
      "Liver failure",
      "External feeding",
      "Removal of stones",
      "Hernia repair"
    ],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "A morbidly obese patient is defined as having a BMI of:",
    choices: [
      "25",
      "30",
      "35",
      "40"
    ],
    correctAnswer: 3
  },
  {
    id: 64,
    question: "Which of the following is an outpouching of the small intestine?",
    choices: [
      "Intussusception",
      "Meckel's diverticulum",
      "Zenker's diverticulum",
      "Barrett's esophagus"
    ],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "What instrument is used to remove gallstones?",
    choices: [
      "Fogarty catheter",
      "Randall stone forceps",
      "Kelly clamp",
      "Bakes dilator"
    ],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "A cholangiogram is performed to visualize:",
    choices: [
      "Bile ducts",
      "Stomach",
      "Colon",
      "Esophagus"
    ],
    correctAnswer: 0
  },
  {
    id: 67,
    question: "What dye is commonly used in cholangiograms?",
    choices: [
      "Methylene blue",
      "Iodine",
      "Diatrizoate sodium (Hypaque)",
      "Barium"
    ],
    correctAnswer: 2
  },
  {
    id: 68,
    question: "A T-tube is inserted into the:",
    choices: [
      "Common bile duct",
      "Esophagus",
      "Duodenum",
      "Liver lobe"
    ],
    correctAnswer: 0
  },
  {
    id: 69,
    question: "Liver biopsy commonly uses which needle?",
    choices: [
      "Kelly",
      "True-cut",
      "Veress",
      "Fogarty"
    ],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "The Glisson's capsule is the:",
    choices: [
      "Outer covering of liver",
      "Inner mucosa of stomach",
      "Diaphragm muscle",
      "Ligament of Treitz"
    ],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "Which of the following procedures removes the head of the pancreas?",
    choices: [
      "Whipple",
      "Billroth II",
      "Nissen fundoplication",
      "PEG"
    ],
    correctAnswer: 0
  },
  {
    id: 72,
    question: "The spleen is protected by which ribs?",
    choices: [
      "5th-7th",
      "6th-8th",
      "8th-10th",
      "10th-12th"
    ],
    correctAnswer: 3
  },
  {
    id: 73,
    question: "Hypersplenism is:",
    choices: [
      "Enlarged spleen with decreased blood cells",
      "Tumor in the spleen",
      "Liver failure",
      "Blocked bile duct"
    ],
    correctAnswer: 0
  },
  {
    id: 74,
    question: "Which hormone is produced by the pancreas?",
    choices: [
      "Insulin",
      "Bile",
      "Pepsin",
      "Gastrin"
    ],
    correctAnswer: 0
  },
  {
    id: 75,
    question: "The sphincter of Oddi controls flow into the:",
    choices: [
      "Stomach",
      "Esophagus",
      "Ampulla of Vater",
      "Rectum"
    ],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "A diaphragmatic hernia is also called:",
    choices: [
      "Umbilical hernia",
      "Hiatal hernia",
      "Ventral hernia",
      "Inguinal hernia"
    ],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "A direct inguinal hernia passes through:",
    choices: [
      "Hesselbach's triangle",
      "Internal ring",
      "Umbilical ring",
      "Diaphragm"
    ],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "A femoral hernia is more common in:",
    choices: [
      "Men",
      "Women",
      "Children",
      "Infants"
    ],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "The most serious complication of a strangulated hernia is:",
    choices: [
      "Obstruction",
      "Necrosis",
      "Pain",
      "GERD"
    ],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "A Richter's hernia is a type of:",
    choices: [
      "Umbilical hernia",
      "Strangulated hernia",
      "Indirect inguinal hernia",
      "Hiatal hernia"
    ],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "What is the common incision for an appendectomy?",
    choices: [
      "Midline",
      "Kocher",
      "McBurney",
      "Subcostal"
    ],
    correctAnswer: 2
  },
  {
    id: 82,
    question: "Which of these is used to retract the liver?",
    choices: [
      "Harrington",
      "Kelly",
      "Potts",
      "Veress"
    ],
    correctAnswer: 0
  },
  {
    id: 83,
    question: "What is used to dilate the common bile duct?",
    choices: [
      "Bakes dilators",
      "Randall forceps",
      "Kelly clamp",
      "Fogarty catheter"
    ],
    correctAnswer: 0
  },
  {
    id: 84,
    question: "A Whipple procedure removes all EXCEPT:",
    choices: [
      "Gallbladder",
      "Head of pancreas",
      "Distal stomach",
      "Entire liver"
    ],
    correctAnswer: 3
  },
  {
    id: 85,
    question: "Pancreatic transplantation candidates are usually:",
    choices: [
      "Older than 60",
      "Between 20-40 years",
      "Children",
      "Any age"
    ],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "An indirect inguinal hernia is usually:",
    choices: [
      "Acquired",
      "Congenital",
      "Femoral",
      "Ventral"
    ],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "The layers of the abdominal wall include all EXCEPT:",
    choices: [
      "Skin",
      "Subcutaneous",
      "Peritoneum",
      "Pleura"
    ],
    correctAnswer: 3
  },
  {
    id: 88,
    question: "Which is considered a minimally invasive surgery?",
    choices: [
      "Laparoscopy",
      "Whipple",
      "Appendectomy",
      "Billroth I"
    ],
    correctAnswer: 0
  },
  {
    id: 89,
    question: "What solution is used to preserve transplant organs?",
    choices: [
      "Hypaque",
      "Collins",
      "Methylene blue",
      "Iodine"
    ],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "An internal anal sphincter is:",
    choices: [
      "Voluntary",
      "Involuntary",
      "Muscularis mucosa",
      "Pleural muscle"
    ],
    correctAnswer: 1
  },
  {
    id: 91,
    question: "Which repair involves Meckel's diverticulum?",
    choices: [
      "Maydl repair",
      "Littre hernia repair",
      "Bassini repair",
      "Cooper repair"
    ],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "What artery supplies the breast?",
    choices: [
      "Internal thoracic",
      "Hepatic",
      "Renal",
      "Coronary"
    ],
    correctAnswer: 0
  },
  {
    id: 93,
    question: "A ventral hernia occurs:",
    choices: [
      "Through diaphragm",
      "At umbilicus",
      "Anywhere on abdominal wall except groin",
      "Through femoral canal"
    ],
    correctAnswer: 2
  },
  {
    id: 94,
    question: "A TEP hernia repair is:",
    choices: [
      "Totally extraperitoneal",
      "Transabdominal preperitoneal",
      "Tension repair",
      "Transcutaneous endoscopic"
    ],
    correctAnswer: 0
  },
  {
    id: 95,
    question: "Which incision is common in liver surgery?",
    choices: [
      "McBurney",
      "Kocher",
      "Right subcostal",
      "Midline"
    ],
    correctAnswer: 2
  },
  {
    id: 96,
    question: "A strangulated hernia becomes:",
    choices: [
      "Reducible",
      "Incarcerated",
      "Necrotic",
      "Obstructed"
    ],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "The pancreas is also called:",
    choices: [
      "Wirsung gland",
      "Vater gland",
      "Oddi gland",
      "Glisson gland"
    ],
    correctAnswer: 0
  },
  {
    id: 98,
    question: "Which type of hernia repair uses mesh?",
    choices: [
      "Bassini repair",
      "Tension-free repair",
      "McVay repair",
      "Shouldice repair"
    ],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "What is the most common cause of small bowel obstruction?",
    choices: [
      "Tumors",
      "Adhesions",
      "Hernias",
      "Volvulus"
    ],
    correctAnswer: 1
  },
  {
    id: 100,
    question: "Which organ produces bile?",
    choices: [
      "Gallbladder",
      "Liver",
      "Pancreas",
      "Spleen"
    ],
    correctAnswer: 1
  },
  {
    id: 101,
    question: "What is the primary function of the lymph nodes in the breast?",
    choices: [
      "Produce hormones",
      "Drain lymph fluid and filter pathogens",
      "Produce milk",
      "Connect muscle fibers"
    ],
    correctAnswer: 1
  },
  {
    id: 102,
    question: "Which of the following is the most common screening tool for breast cancer?",
    choices: [
      "Ultrasound",
      "MRI",
      "Mammography",
      "PET scan"
    ],
    correctAnswer: 2
  },
  {
    id: 103,
    question: "In mammography, micro-calcifications often indicate which condition?",
    choices: [
      "Cyst",
      "Intraductal carcinoma in-situ",
      "Fibrocystic disease",
      "Lobular carcinoma"
    ],
    correctAnswer: 1
  },
  {
    id: 104,
    question: "Which imaging modality uses sound waves to create breast tissue images?",
    choices: [
      "MRI",
      "PET scan",
      "Ultrasound",
      "Mammography"
    ],
    correctAnswer: 2
  },
  {
    id: 105,
    question: "What is the purpose of a digital stereotactic biopsy?",
    choices: [
      "Remove the entire breast",
      "Guide chemotherapy",
      "Diagnose abnormal mammogram findings",
      "Detect metastatic cancer"
    ],
    correctAnswer: 2
  },
  {
    id: 106,
    question: "Which test is used to assess if breast cancer has spread to other organs?",
    choices: [
      "MRI",
      "PET scan",
      "Mammogram",
      "Ultrasound"
    ],
    correctAnswer: 1
  },
  {
    id: 107,
    question: "Which lymph node group is located under the armpit?",
    choices: [
      "Internal thoracic",
      "Axillary",
      "Supraclavicular",
      "Cervical"
    ],
    correctAnswer: 1
  },
  {
    id: 108,
    question: "A core needle biopsy removes tissue by:",
    choices: [
      "Aspirating fluid",
      "Using radioactive dye",
      "Cutting a plug of tissue",
      "Removing the entire breast"
    ],
    correctAnswer: 2
  },
  {
    id: 109,
    question: "What is a sentinel lymph node?",
    choices: [
      "Last lymph node in a chain",
      "Closest node to a tumor",
      "Only node in the thorax",
      "Node removed during mastectomy"
    ],
    correctAnswer: 1
  },
  {
    id: 110,
    question: "Lymphedema after breast surgery occurs because of:",
    choices: [
      "Radiation to the lung",
      "Damaged muscle fibers",
      "Removal of too many lymph nodes",
      "Chemotherapy toxicity"
    ],
    correctAnswer: 2
  },
  {
    id: 111,
    question: "Which procedure removes the entire breast and axillary nodes?",
    choices: [
      "Radical mastectomy",
      "Simple mastectomy",
      "Lumpectomy",
      "Subcutaneous mastectomy"
    ],
    correctAnswer: 0
  },
  {
    id: 112,
    question: "A modified radical mastectomy spares which structure?",
    choices: [
      "Skin",
      "Lymph nodes",
      "Muscles",
      "Entire breast"
    ],
    correctAnswer: 2
  },
  {
    id: 113,
    question: "What is the main purpose of mammograms?",
    choices: [
      "Detect lumps/masses early",
      "Treat cancer",
      "Prevent breast cancer",
      "Replace biopsy"
    ],
    correctAnswer: 0
  },
  {
    id: 114,
    question: "What is the innermost layer of the abdominal wall?",
    choices: [
      "Peritoneum",
      "Scarpa's fascia",
      "Linea alba",
      "Skin"
    ],
    correctAnswer: 0
  },
  {
    id: 115,
    question: "The midline incision is preferred because it:",
    choices: [
      "Minimizes bleeding",
      "Avoids muscle damage",
      "Provides excellent exposure",
      "Preserves lymphatic drainage"
    ],
    correctAnswer: 2
  },
  {
    id: 116,
    question: "An incision above the umbilicus to the xiphoid is called:",
    choices: [
      "Midline",
      "Epigastric",
      "Paramedian",
      "Subumbilical"
    ],
    correctAnswer: 1
  },
  {
    id: 117,
    question: "Which incision is typically used for the appendix?",
    choices: [
      "Pfannenstiel",
      "Kocher",
      "McBurney",
      "Upper transverse"
    ],
    correctAnswer: 2
  },
  {
    id: 118,
    question: "A Pfannenstiel incision provides access to:",
    choices: [
      "Biliary tract",
      "Spleen",
      "Pelvic organs",
      "Esophagus"
    ],
    correctAnswer: 2
  },
  {
    id: 119,
    question: "Which incision is ideal for liver resection?",
    choices: [
      "Left subcostal",
      "Right subcostal",
      "Thoracoabdominal",
      "Lower transverse"
    ],
    correctAnswer: 1
  },
  {
    id: 120,
    question: "The thoracoabdominal incision provides access to:",
    choices: [
      "Brain",
      "Pleural cavity",
      "Ovaries",
      "Appendix"
    ],
    correctAnswer: 1
  },
  {
    id: 121,
    question: "Which glands secrete lubrication at the vaginal opening?",
    choices: [
      "Skene's",
      "Bartholin's",
      "Pituitary",
      "Adrenal"
    ],
    correctAnswer: 1
  },
  {
    id: 122,
    question: "The endometrium is:",
    choices: [
      "Muscle layer of the uterus",
      "Outer covering of the uterus",
      "Inner lining of the uterus",
      "Support ligament"
    ],
    correctAnswer: 2
  },
  {
    id: 123,
    question: "Which finger-like projections guide eggs into the fallopian tube?",
    choices: [
      "Endometrium",
      "Fimbriae",
      "Cervix",
      "Os"
    ],
    correctAnswer: 1
  },
  {
    id: 124,
    question: "An ectopic pregnancy occurs:",
    choices: [
      "Only in the uterus",
      "Only in the cervix",
      "Outside the uterus",
      "Inside the ovary"
    ],
    correctAnswer: 2
  },
  {
    id: 125,
    question: "The ovaries produce:",
    choices: [
      "Progesterone and estrogen",
      "Testosterone",
      "Insulin",
      "Glucagon"
    ],
    correctAnswer: 0
  },
  {
    id: 126,
    question: "The cervix connects the uterus to the:",
    choices: [
      "Ovaries",
      "Fallopian tubes",
      "Vagina",
      "Rectum"
    ],
    correctAnswer: 2
  },
  {
    id: 127,
    question: "Which uterine ligament is NOT paired?",
    choices: [
      "Broad",
      "Round",
      "Cardinal",
      "All are paired"
    ],
    correctAnswer: 3
  },
  {
    id: 128,
    question: "The lithotomy position is primarily used for:",
    choices: [
      "Laparoscopy",
      "Abdominal surgery",
      "Vaginal procedures",
      "Thoracic surgery"
    ],
    correctAnswer: 2
  },
  {
    id: 129,
    question: "Hysterosalpingogram is used to:",
    choices: [
      "Detect breast cancer",
      "Assess infertility",
      "Diagnose diabetes",
      "Examine lungs"
    ],
    correctAnswer: 1
  },
  {
    id: 130,
    question: "Colposcopy examines the:",
    choices: [
      "Uterus lining",
      "Cervix, vagina, and vulva",
      "Fallopian tubes",
      "Endometrium"
    ],
    correctAnswer: 1
  },
  {
    id: 131,
    question: "The fluid used to distend the uterus during hysteroscopy is:",
    choices: [
      "Saline",
      "Sorbitol",
      "Blood",
      "Water"
    ],
    correctAnswer: 0
  },
  {
    id: 132,
    question: "PID may result from infections by:",
    choices: [
      "Chlamydia",
      "Streptococcus",
      "E. coli",
      "Influenza"
    ],
    correctAnswer: 0
  },
  {
    id: 133,
    question: "What is the main complication of PID?",
    choices: [
      "Hypertension",
      "Sterility",
      "Diabetes",
      "Obesity"
    ],
    correctAnswer: 1
  },
  {
    id: 134,
    question: "A cone biopsy of the cervix rules out:",
    choices: [
      "Breast cancer",
      "Endometriosis",
      "Cervical cancer",
      "Ovarian cysts"
    ],
    correctAnswer: 2
  },
  {
    id: 135,
    question: "Culdocentesis is done to:",
    choices: [
      "Extract endometrial tissue",
      "Visualize the uterus",
      "Drain fluid from the rectouterine pouch",
      "Remove ovarian cysts"
    ],
    correctAnswer: 2
  },
  {
    id: 136,
    question: "Menorrhagia refers to:",
    choices: [
      "Painful menstruation",
      "Heavy prolonged periods",
      "Absence of menstruation",
      "Irregular light bleeding"
    ],
    correctAnswer: 1
  },
  {
    id: 137,
    question: "Dysmenorrhea means:",
    choices: [
      "Heavy bleeding",
      "Painful periods",
      "No periods",
      "Short cycles"
    ],
    correctAnswer: 1
  },
  {
    id: 138,
    question: "Chromopertubation checks:",
    choices: [
      "Fallopian tube patency",
      "Uterine size",
      "Endometrial thickness",
      "Cervical os"
    ],
    correctAnswer: 0
  },
  {
    id: 139,
    question: "Salpingectomy removes:",
    choices: [
      "Ovary",
      "Fallopian tube",
      "Uterus",
      "Cervix"
    ],
    correctAnswer: 1
  },
  {
    id: 140,
    question: "Which instrument is used in cervical conization?",
    choices: [
      "ESU only",
      "Cervitome",
      "Scalpel only",
      "None"
    ],
    correctAnswer: 1
  },
  {
    id: 141,
    question: "The most common type of hernia in men is:",
    choices: [
      "Umbilical",
      "Direct inguinal",
      "Indirect inguinal",
      "Femoral"
    ],
    correctAnswer: 2
  },
  {
    id: 142,
    question: "A femoral hernia is most common in:",
    choices: [
      "Men",
      "Women",
      "Children",
      "Infants"
    ],
    correctAnswer: 1
  },
  {
    id: 143,
    question: "An incisional hernia occurs:",
    choices: [
      "At birth",
      "In the groin",
      "After a surgical procedure",
      "In the diaphragm"
    ],
    correctAnswer: 2
  },
  {
    id: 144,
    question: "What is a Richter's hernia?",
    choices: [
      "Umbilical hernia",
      "Strangulated hernia",
      "Femoral hernia",
      "Diaphragmatic hernia"
    ],
    correctAnswer: 1
  },
  {
    id: 145,
    question: "Which material is NOT used in hernia mesh repair?",
    choices: [
      "Gore-Tex",
      "Teflon",
      "Dacron",
      "Insulin"
    ],
    correctAnswer: 3
  },
  {
    id: 146,
    question: "Which hernia involves Meckel's diverticulum?",
    choices: [
      "Littre",
      "Maydl",
      "Richter",
      "Spigelian"
    ],
    correctAnswer: 0
  },
  {
    id: 147,
    question: "The Whipple procedure removes the:",
    choices: [
      "Gallbladder",
      "Head of pancreas and duodenum",
      "Liver",
      "Spleen"
    ],
    correctAnswer: 1
  },
  {
    id: 148,
    question: "A total pancreatectomy removes:",
    choices: [
      "Part of the pancreas",
      "Entire pancreas and adjacent organs",
      "Only tumors",
      "Spleen only"
    ],
    correctAnswer: 1
  },
  {
    id: 149,
    question: "The best candidates for pancreatic transplant are aged:",
    choices: [
      "10–20",
      "20–40",
      "50–70",
      ">70"
    ],
    correctAnswer: 1
  },
  {
    id: 150,
    question: "The bile duct is dilated with:",
    choices: [
      "T-tube",
      "Bakes dilator",
      "Fogarty catheter",
      "Kelly clamp"
    ],
    correctAnswer: 1
  },
  {
    id: 151,
    question: "Randall stone forceps are used for:",
    choices: [
      "Liver biopsy",
      "Removing gallstones",
      "Clamping vessels",
      "Suturing"
    ],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "Kelly clamps can be used to:",
    choices: [
      "Decompress the gallbladder",
      "Remove lymph nodes",
      "Extend a port opening",
      "Clamp bile ducts"
    ],
    correctAnswer: 2
  },
  {
    id: 153,
    question: "The outer covering of the liver is called:",
    choices: [
      "Capsule of Vater",
      "Glisson's capsule",
      "Hepatic sheath",
      "Peritoneum"
    ],
    correctAnswer: 1
  },
  {
    id: 154,
    question: "Liver biopsy commonly uses a:",
    choices: [
      "Kelly clamp",
      "True-Cut needle",
      "ESU",
      "Fogarty catheter"
    ],
    correctAnswer: 1
  },
  {
    id: 155,
    question: "A subphrenic abscess occurs:",
    choices: [
      "In the kidney",
      "In the liver",
      "Beneath the diaphragm",
      "In the pancreas"
    ],
    correctAnswer: 2
  },
  {
    id: 156,
    question: "The most common reason for liver resection is:",
    choices: [
      "Trauma",
      "Tumors",
      "Gallstones",
      "Hepatitis"
    ],
    correctAnswer: 1
  },
  {
    id: 157,
    question: "Blunt needles are always used on the:",
    choices: [
      "Pancreas",
      "Liver",
      "Spleen",
      "Bile duct"
    ],
    correctAnswer: 1
  },
  {
    id: 158,
    question: "Bookwalter is a type of:",
    choices: [
      "Needle",
      "Retractor",
      "Clamp",
      "Forceps"
    ],
    correctAnswer: 1
  },
  {
    id: 159,
    question: "CUSA uses:",
    choices: [
      "Electric current",
      "Ultrasonic waves",
      "Radiation",
      "Lasers"
    ],
    correctAnswer: 1
  },
  {
    id: 160,
    question: "Intraoperative ultrasound helps in:",
    choices: [
      "Biopsy",
      "Visualizing structures",
      "Clamping vessels",
      "Injecting dyes"
    ],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "A choledochojejunostomy joins:",
    choices: [
      "Gallbladder to jejunum",
      "CBD to jejunum",
      "CBD to duodenum",
      "Liver to stomach"
    ],
    correctAnswer: 1
  },
  {
    id: 162,
    question: "The sphincter of Oddi controls flow into the:",
    choices: [
      "Gallbladder",
      "Pancreas",
      "Ampulla of Vater",
      "Duodenum"
    ],
    correctAnswer: 2
  },
  {
    id: 163,
    question: "The ampulla of Vater is formed by:",
    choices: [
      "CBD and hepatic duct",
      "Pancreatic and bile duct",
      "Duodenum and jejunum",
      "Gallbladder and CBD"
    ],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Pancreaticojejunostomy is done for:",
    choices: [
      "Ectopic pregnancy",
      "Pancreatic pseudocyst",
      "Liver resection",
      "Cholecystitis"
    ],
    correctAnswer: 1
  },
  {
    id: 165,
    question: "The most common site of indirect inguinal hernia is:",
    choices: [
      "Femoral ring",
      "Hesselbach's triangle",
      "Internal inguinal ring",
      "Umbilicus"
    ],
    correctAnswer: 2
  },
  {
    id: 166,
    question: "The most common type of hernia in men is:",
    choices: [
      "Umbilical",
      "Direct inguinal",
      "Indirect inguinal",
      "Femoral"
    ],
    correctAnswer: 2
  },
  {
    id: 167,
    question: "A femoral hernia is most common in:",
    choices: [
      "Men",
      "Women",
      "Children",
      "Infants"
    ],
    correctAnswer: 1
  },
  {
    id: 168,
    question: "An incisional hernia occurs:",
    choices: [
      "At birth",
      "In the groin",
      "After a surgical procedure",
      "In the diaphragm"
    ],
    correctAnswer: 2
  },
  {
    id: 169,
    question: "What is a Richter's hernia?",
    choices: [
      "Umbilical hernia",
      "Strangulated hernia",
      "Femoral hernia",
      "Diaphragmatic hernia"
    ],
    correctAnswer: 1
  },
  {
    id: 170,
    question: "Which material is NOT used in hernia mesh repair?",
    choices: [
      "Gore-Tex",
      "Teflon",
      "Dacron",
      "Insulin"
    ],
    correctAnswer: 3
  },
  {
    id: 171,
    question: "Which hernia involves Meckel's diverticulum?",
    choices: [
      "Littre",
      "Maydl",
      "Richter",
      "Spigelian"
    ],
    correctAnswer: 0
  },
  {
    id: 172,
    question: "The Whipple procedure removes the:",
    choices: [
      "Gallbladder",
      "Head of pancreas and duodenum",
      "Liver",
      "Spleen"
    ],
    correctAnswer: 1
  },
  {
    id: 173,
    question: "A total pancreatectomy removes:",
    choices: [
      "Part of the pancreas",
      "Entire pancreas and adjacent organs",
      "Only tumors",
      "Spleen only"
    ],
    correctAnswer: 1
  },
  {
    id: 174,
    question: "The best candidates for pancreatic transplant are aged:",
    choices: [
      "10–20",
      "20–40",
      "50–70",
      ">70"
    ],
    correctAnswer: 1
  },
  {
    id: 175,
    question: "The bile duct is dilated with:",
    choices: [
      "T-tube",
      "Bakes dilator",
      "Fogarty catheter",
      "Kelly clamp"
    ],
    correctAnswer: 1
  },
  {
    id: 176,
    question: "Which type of lymph node drains the outer half of the breast?",
    choices: [
      "Internal thoracic nodes",
      "Axillary nodes",
      "Cervical nodes",
      "Mediastinal nodes"
    ],
    correctAnswer: 1
  },
  {
    id: 177,
    question: "What is the most common screening tool for breast cancer?",
    choices: [
      "Ultrasound",
      "PET scan",
      "Mammogram",
      "MRI"
    ],
    correctAnswer: 2
  },
  {
    id: 178,
    question: "Which type of carcinoma originates from the lobules of the breast?",
    choices: [
      "Intraductal carcinoma",
      "Lobular carcinoma",
      "Squamous cell carcinoma",
      "Adenocarcinoma"
    ],
    correctAnswer: 1
  },
  {
    id: 179,
    question: "What does lymph fluid drain into?",
    choices: [
      "Lymph nodes",
      "Arteries",
      "Veins",
      "Capillaries"
    ],
    correctAnswer: 2
  },
  {
    id: 180,
    question: "What is the yellow fluid that flows through the lymphatic system called?",
    choices: [
      "Plasma",
      "Interstitial fluid",
      "Lymph",
      "Serum"
    ],
    correctAnswer: 2
  },
  {
    id: 181,
    question: "What do micro-calcifications on a mammogram indicate?",
    choices: [
      "Malignant tumor in the muscle",
      "Calcium deposits, often in ductal carcinoma in-situ",
      "Benign fatty tumor",
      "Fibrocystic disease"
    ],
    correctAnswer: 1
  },
  {
    id: 182,
    question: "What imaging modality uses sound waves to examine breast tissue?",
    choices: [
      "PET scan",
      "Mammogram",
      "MRI",
      "Ultrasound"
    ],
    correctAnswer: 3
  },
  {
    id: 183,
    question: "What is the purpose of a digital stereotactic biopsy?",
    choices: [
      "Measure breast density",
      "Diagnose possible breast cancer",
      "Drain a cyst",
      "Remove benign tissue"
    ],
    correctAnswer: 1
  },
  {
    id: 184,
    question: "Which imaging test is useful for determining cancer spread beyond the breast?",
    choices: [
      "PET scan",
      "Mammogram",
      "Ultrasound",
      "Core biopsy"
    ],
    correctAnswer: 0
  },
  {
    id: 185,
    question: "What is the term for breast cancer confined to the breast only?",
    choices: [
      "Regional",
      "Distant",
      "Local",
      "Metastatic"
    ],
    correctAnswer: 2
  },
  {
    id: 186,
    question: "Which gene mutations are tested for hereditary breast cancer risk?",
    choices: [
      "TP53 and RB1",
      "BRCA1 and BRCA2",
      "HER2 and EGFR",
      "MYC and BCL2"
    ],
    correctAnswer: 1
  },
  {
    id: 187,
    question: "Which type of biopsy uses a cutting needle to remove a plug of tissue?",
    choices: [
      "Excisional biopsy",
      "Needle aspiration",
      "Core biopsy",
      "Incisional biopsy"
    ],
    correctAnswer: 2
  },
  {
    id: 188,
    question: "What is the removal of a mass with a margin of normal tissue called?",
    choices: [
      "Lumpectomy",
      "Mastectomy",
      "Biopsy",
      "Ablation"
    ],
    correctAnswer: 0
  },
  {
    id: 189,
    question: "What is removed in a modified radical mastectomy?",
    choices: [
      "Breast only",
      "Breast and pectoral muscles",
      "Breast and axillary lymph nodes",
      "Breast, lungs, and axillary nodes"
    ],
    correctAnswer: 2
  },
  {
    id: 190,
    question: "What is the main risk of lymphedema after breast surgery?",
    choices: [
      "Excess drainage",
      "Fluid accumulation in the arm",
      "Infection of the chest wall",
      "Metastasis"
    ],
    correctAnswer: 1
  },
  {
    id: 191,
    question: "Which incision is used for an appendectomy?",
    choices: [
      "McBurney",
      "Kocher",
      "Pfannenstiel",
      "Midline"
    ],
    correctAnswer: 0
  },
  {
    id: 192,
    question: "Which uterine layer is shed during menstruation?",
    choices: [
      "Myometrium",
      "Endometrium",
      "Perimetrium",
      "Serosa"
    ],
    correctAnswer: 1
  },
  {
    id: 193,
    question: "What is the function of the fimbriae?",
    choices: [
      "Secrete estrogen",
      "Guide egg into fallopian tube",
      "Protect the uterus",
      "Lubricate the vagina"
    ],
    correctAnswer: 1
  },
  {
    id: 194,
    question: "What does ectopic pregnancy mean?",
    choices: [
      "Pregnancy in the uterus",
      "Pregnancy outside the uterus",
      "Multiple pregnancies",
      "Miscarriage"
    ],
    correctAnswer: 1
  },
  {
    id: 195,
    question: "What is the major complication of lithotomy position?",
    choices: [
      "Embolus or nerve damage",
      "Blindness",
      "Lymphedema",
      "Cancer recurrence"
    ],
    correctAnswer: 0
  },
  {
    id: 196,
    question: "Which diagnostic test is an X-ray of uterus and fallopian tubes?",
    choices: [
      "Hysterosalpingogram",
      "Colposcopy",
      "Hysteroscopy",
      "Laparoscopy"
    ],
    correctAnswer: 0
  },
  {
    id: 197,
    question: "What is a cone biopsy of the cervix used for?",
    choices: [
      "Diagnose endometriosis",
      "Rule out cervical cancer",
      "Identify PID",
      "Diagnose infertility"
    ],
    correctAnswer: 1
  },
  {
    id: 198,
    question: "What does PID stand for?",
    choices: [
      "Pelvic inflammatory disease",
      "Primary immune deficiency",
      "Post-infectious disease",
      "Peritoneal invasive disorder"
    ],
    correctAnswer: 0
  },
  {
    id: 199,
    question: "What is amenorrhea?",
    choices: [
      "Painful menstruation",
      "Excessive bleeding",
      "Absence of menstruation",
      "Irregular bleeding"
    ],
    correctAnswer: 2
  },
  {
    id: 200,
    question: "What is the most common reason for a C-section?",
    choices: [
      "Placental abruption",
      "Cephalopelvic disproportion",
      "Breech presentation",
      "Cord prolapse"
    ],
    correctAnswer: 1
  },
  {
    id: 201,
    question: "What is meconium?",
    choices: [
      "First bowel movement of fetus",
      "Waxy coating on newborn skin",
      "Fluid in amniotic sac",
      "Placental tissue"
    ],
    correctAnswer: 0
  },
  {
    id: 202,
    question: "Which hormone is used to induce labor?",
    choices: [
      "Hemabate",
      "Oxytocin",
      "Methergine",
      "Dextran"
    ],
    correctAnswer: 1
  },
  {
    id: 203,
    question: "What is the medical term for the first pregnancy?",
    choices: [
      "Multigravida",
      "Para gravida",
      "Prima gravida",
      "Nulligravida"
    ],
    correctAnswer: 2
  },
  {
    id: 204,
    question: "Which uterine fibroid tumor is most common?",
    choices: [
      "Leiomyoma",
      "Myoma",
      "Sarcoma",
      "Carcinoma"
    ],
    correctAnswer: 0
  },
  {
    id: 205,
    question: "What is oophorectomy?",
    choices: [
      "Removal of ovary",
      "Removal of uterus",
      "Removal of fallopian tube",
      "Removal of bladder"
    ],
    correctAnswer: 0
  },
  {
    id: 206,
    question: "What is Marshall–Marchetti–Krantz procedure used to treat?",
    choices: [
      "Incontinence",
      "Cancer",
      "Prolapse",
      "Hernia"
    ],
    correctAnswer: 0
  },
  {
    id: 207,
    question: "What is cystocele?",
    choices: [
      "Bladder protrusion into vaginal wall",
      "Rectal prolapse",
      "Hernia of intestine",
      "Fistula between bladder and vagina"
    ],
    correctAnswer: 0
  },
  {
    id: 208,
    question: "What is uterine ablation used to treat?",
    choices: [
      "Cancer",
      "Abnormal bleeding",
      "Infertility",
      "Prolapse"
    ],
    correctAnswer: 1
  },
  {
    id: 209,
    question: "Which incision provides access to pelvic organs?",
    choices: [
      "Pfannenstiel",
      "Kocher",
      "McBurney",
      "Midline"
    ],
    correctAnswer: 0
  },
  {
    id: 210,
    question: "What is the function of the conjunctiva?",
    choices: [
      "Lubricate eyelids",
      "Line the sclera and eyelids",
      "Focus light",
      "Control pupil size"
    ],
    correctAnswer: 1
  },
  {
    id: 211,
    question: "Which part of the eye changes shape to focus?",
    choices: [
      "Retina",
      "Cornea",
      "Lens",
      "Sclera"
    ],
    correctAnswer: 2
  },
  {
    id: 212,
    question: "Which layer of the eye contains photoreceptors?",
    choices: [
      "Sclera",
      "Retina",
      "Lens",
      "Cornea"
    ],
    correctAnswer: 1
  },
  {
    id: 213,
    question: "What is the most common cause of color blindness?",
    choices: [
      "Corneal defect",
      "Retinal defect",
      "Lens defect",
      "Scleral damage"
    ],
    correctAnswer: 1
  },
  {
    id: 214,
    question: "What drug constricts the pupil?",
    choices: [
      "Mydriatic",
      "Cycloplegic",
      "Miotic",
      "Corticosteroid"
    ],
    correctAnswer: 2
  },
  {
    id: 215,
    question: "What drug dilates pupil but inhibits focusing?",
    choices: [
      "Miotic",
      "Cycloplegic",
      "Corticosteroid",
      "Anti-inflammatory"
    ],
    correctAnswer: 1
  },
  {
    id: 216,
    question: "What is balanced salt solution (BSS) used for?",
    choices: [
      "Irrigation",
      "Lubrication",
      "Anesthesia",
      "Antibiotic"
    ],
    correctAnswer: 0
  },
  {
    id: 217,
    question: "What is the removal of eye contents, leaving sclera intact?",
    choices: [
      "Enucleation",
      "Evisceration",
      "Exenteration",
      "Keratoplasty"
    ],
    correctAnswer: 1
  },
  {
    id: 218,
    question: "What is removal of entire eyeball including optic nerve?",
    choices: [
      "Evisceration",
      "Enucleation",
      "Keratoplasty",
      "Exenteration"
    ],
    correctAnswer: 1
  },
  {
    id: 219,
    question: "What is removal of entire orbital contents?",
    choices: [
      "Keratoplasty",
      "Evisceration",
      "Enucleation",
      "Exenteration"
    ],
    correctAnswer: 3
  },
  {
    id: 220,
    question: "What is a chalazion?",
    choices: [
      "Obstruction of lacrimal duct",
      "Obstruction of meibomian gland",
      "Benign growth on conjunctiva",
      "Prolapse of eyelid"
    ],
    correctAnswer: 1
  },
  {
    id: 221,
    question: "What is blepharoplasty?",
    choices: [
      "Eyelid repair for dermatochalasis",
      "Removal of eye",
      "Correction of strabismus",
      "Lens transplant"
    ],
    correctAnswer: 0
  },
  {
    id: 222,
    question: "What is pterygium?",
    choices: [
      "Growth on cornea",
      "Growth on conjunctiva",
      "Eyelid tumor",
      "Cataract"
    ],
    correctAnswer: 1
  },
  {
    id: 223,
    question: "What is esotropia?",
    choices: [
      "Cross eyes",
      "Wall eyes",
      "Lazy eye",
      "Normal alignment"
    ],
    correctAnswer: 0
  },
  {
    id: 224,
    question: "What is exotropia?",
    choices: [
      "Cross eyes",
      "Wall eyes",
      "Lazy eye",
      "Normal alignment"
    ],
    correctAnswer: 1
  },
  {
    id: 225,
    question: "What is the purpose of recession surgery?",
    choices: [
      "Strengthen eye muscle",
      "Shorten lateral rectus",
      "Weaken eye muscle",
      "Remove eye muscle"
    ],
    correctAnswer: 2
  },
  {
    id: 226,
    question: "What is keratoplasty?",
    choices: [
      "Lens transplant",
      "Eyelid surgery",
      "Corneal transplant",
      "Cataract removal"
    ],
    correctAnswer: 2
  },
  {
    id: 227,
    question: "What is radial keratotomy used to treat?",
    choices: [
      "Hyperopia",
      "Myopia",
      "Astigmatism",
      "Cataracts"
    ],
    correctAnswer: 1
  },
  {
    id: 228,
    question: "What is the purpose of LASIK?",
    choices: [
      "Replace lens",
      "Remove cataract",
      "Reshape cornea",
      "Transplant retina"
    ],
    correctAnswer: 2
  },
  {
    id: 229,
    question: "What is the benefit of Nd:YAG laser in eye surgery?",
    choices: [
      "Heats tissues directly",
      "Passes through clear tissue without heating",
      "Used only on eyelids",
      "Treats color blindness"
    ],
    correctAnswer: 1
  },
  {
    id: 230,
    question: "What is dacryocystorhinostomy?",
    choices: [
      "Remove eyelid growth",
      "Relieve nasolacrimal duct blockage",
      "Treat cataract",
      "Correct strabismus"
    ],
    correctAnswer: 1
  },
  {
    id: 231,
    question: "What is the purpose of lacrimal duct dilation?",
    choices: [
      "Remove eyelid growth",
      "Treat excessive tearing",
      "Correct cross eyes",
      "Treat glaucoma"
    ],
    correctAnswer: 1
  },
  {
    id: 232,
    question: "What do Bowman lacrimal duct probes do?",
    choices: [
      "Block lacrimal duct",
      "Dilate lacrimal duct",
      "Transplant cornea",
      "Strengthen eyelids"
    ],
    correctAnswer: 1
  },
  {
    id: 233,
    question: "What is the purpose of viscoelastic agents?",
    choices: [
      "Lubricate and separate tissues",
      "Irrigate the cornea",
      "Treat infection",
      "Provide anesthesia"
    ],
    correctAnswer: 0
  },
  {
    id: 234,
    question: "Which medication prolongs anesthesia and reduces bleeding?",
    choices: [
      "Atropine",
      "Epinephrine",
      "Miotic",
      "BSS"
    ],
    correctAnswer: 1
  },
  {
    id: 235,
    question: "Which agent increases diffusion of anesthetic?",
    choices: [
      "Miotic",
      "Hyaluronidase",
      "Mydriatic",
      "Betamethasone"
    ],
    correctAnswer: 1
  },
  {
    id: 236,
    question: "What type of drug is betamethasone?",
    choices: [
      "Antibiotic",
      "Miotic",
      "Anti-inflammatory",
      "Mydriatic"
    ],
    correctAnswer: 2
  },
  {
    id: 237,
    question: "What type of drug is gentamicin?",
    choices: [
      "Antibiotic",
      "Anti-inflammatory",
      "Anesthetic",
      "Mydriatic"
    ],
    correctAnswer: 0
  },
  {
    id: 238,
    question: "What type of anesthetic is tetracaine?",
    choices: [
      "Injectable",
      "Topical",
      "Viscoelastic",
      "Irrigant"
    ],
    correctAnswer: 1
  },
  {
    id: 239,
    question: "What type of anesthetic is lidocaine?",
    choices: [
      "Injectable",
      "Topical",
      "Viscoelastic",
      "Irrigant"
    ],
    correctAnswer: 0
  },
  {
    id: 240,
    question: "Which type of lymph node drains the inner half of the breast?",
    choices: [
      "Internal thoracic nodes",
      "Axillary nodes",
      "Cervical nodes",
      "Mediastinal nodes"
    ],
    correctAnswer: 0
  },
  {
    id: 241,
    question: "What is carcinoma in-situ?",
    choices: [
      "Cancer that has spread",
      "Cancer confined to original site",
      "Benign tumor",
      "Inflammatory condition"
    ],
    correctAnswer: 1
  },
  {
    id: 242,
    question: "What is the most effective screening method for early breast cancer detection?",
    choices: [
      "Self-examination",
      "Clinical examination",
      "Mammography",
      "Blood tests"
    ],
    correctAnswer: 2
  },
  {
    id: 243,
    question: "What is the standard treatment for ductal carcinoma in-situ?",
    choices: [
      "Chemotherapy only",
      "Radiation only",
      "Lumpectomy with radiation",
      "Observation only"
    ],
    correctAnswer: 2
  },
  {
    id: 244,
    question: "What is hormone replacement therapy primarily used for?",
    choices: [
      "Breast cancer treatment",
      "Osteoporosis prevention",
      "Menopausal symptoms",
      "Birth control"
    ],
    correctAnswer: 2
  },
  {
    id: 245,
    question: "What is the most common complication of breast reconstruction?",
    choices: [
      "Infection",
      "Capsular contracture",
      "Bleeding",
      "Nerve damage"
    ],
    correctAnswer: 1
  },
  {
    id: 246,
    question: "What is the primary indication for prophylactic mastectomy?",
    choices: [
      "Family history of breast cancer",
      "BRCA gene mutation",
      "Previous breast cancer",
      "Dense breast tissue"
    ],
    correctAnswer: 1
  },
  {
    id: 247,
    question: "What is the purpose of sentinel lymph node biopsy?",
    choices: [
      "Remove all lymph nodes",
      "Determine cancer spread",
      "Treat lymphedema",
      "Prevent infection"
    ],
    correctAnswer: 1
  },
  {
    id: 248,
    question: "What is neoadjuvant therapy?",
    choices: [
      "Treatment after surgery",
      "Treatment before surgery",
      "Palliative treatment",
      "Preventive treatment"
    ],
    correctAnswer: 1
  },
  {
    id: 249,
    question: "What is the most common type of breast cancer?",
    choices: [
      "Lobular carcinoma",
      "Inflammatory carcinoma",
      "Ductal carcinoma",
      "Medullary carcinoma"
    ],
    correctAnswer: 2
  },
  {
    id: 250,
    question: "What is the purpose of adjuvant therapy in breast cancer treatment?",
    choices: [
      "Shrink tumor before surgery",
      "Prevent cancer recurrence",
      "Diagnose cancer stage",
      "Manage side effects"
    ],
    correctAnswer: 1
  }
];
