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
  }
];
