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
  }
];
