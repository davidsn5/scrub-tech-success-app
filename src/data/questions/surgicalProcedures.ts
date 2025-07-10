
export interface Question {
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation: string;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    question: "What is the GI tract also called?",
    choices: ["Mesentery tract", "Alimentary tract", "Hepatic tract", "Respiratory tract"],
    correctAnswer: 1,
    explanation: "The gastrointestinal (GI) tract is also known as the alimentary tract, which includes all organs involved in digestion from mouth to anus."
  },
  {
    question: "Which of the following is NOT a function of the GI tract?",
    choices: ["Ingestion", "Digestion", "Filtration", "Absorption"],
    correctAnswer: 2,
    explanation: "Filtration is a function of the kidneys, not the GI tract. The GI tract functions include ingestion, digestion, absorption, and elimination."
  },
  {
    question: "Which part of the GI tract is responsible for transporting ingested material by peristalsis from pharynx to stomach?",
    choices: ["Stomach", "Esophagus", "Duodenum", "Rectum"],
    correctAnswer: 1,
    explanation: "The esophagus is a muscular tube that uses peristaltic waves to transport food from the pharynx to the stomach."
  },
  {
    question: "What is another name for EGD?",
    choices: ["Colonoscopy", "Proctoscopy", "Gastroscopy", "Sigmoidoscopy"],
    correctAnswer: 2,
    explanation: "EGD (Esophagogastroduodenoscopy) is also called gastroscopy, as it examines the esophagus, stomach, and duodenum."
  },
  {
    question: "Endoscopes are classified as:",
    choices: ["Disposable devices", "Sterile devices", "Semicritical devices", "Non-critical devices"],
    correctAnswer: 2,
    explanation: "Endoscopes that contact mucous membranes are classified as semicritical devices requiring high-level disinfection or sterilization."
  },
  {
    question: "Which condition is caused by backflow of gastric contents into esophagus?",
    choices: ["Barrett's esophagus", "GERD", "Zenker's diverticulum", "Intussusception"],
    correctAnswer: 1,
    explanation: "GERD (Gastroesophageal Reflux Disease) occurs when stomach acid frequently flows back into the esophagus."
  },
  {
    question: "Barrett's esophagus increases the risk for:",
    choices: ["Ulcers", "Cancer", "Diverticulitis", "Appendicitis"],
    correctAnswer: 1,
    explanation: "Barrett's esophagus is a precancerous condition that significantly increases the risk of esophageal adenocarcinoma."
  },
  {
    question: "Which is a weakening in the esophageal wall that traps food?",
    choices: ["Hiatal hernia", "Zenker's diverticulum", "Barrett's esophagus", "Pyloric stenosis"],
    correctAnswer: 1,
    explanation: "Zenker's diverticulum is a pouch that forms in the esophageal wall where food can become trapped."
  },
  {
    question: "What is the purpose of a laparoscopic Nissen fundoplication?",
    choices: ["Remove appendix", "Repair hernia", "Prevent reflux", "Dilate esophagus"],
    correctAnswer: 2,
    explanation: "Nissen fundoplication wraps the fundus of the stomach around the lower esophagus to prevent gastroesophageal reflux."
  },
  {
    question: "Which instruments are used for esophageal dilation?",
    choices: ["Bougie dilators", "Sigmoidoscope", "Band ligators", "Suction cannulas"],
    correctAnswer: 0,
    explanation: "Bougie dilators are flexible or rigid instruments used to gradually stretch and dilate the esophagus."
  },
  {
    question: "Which part of the stomach is located above the esophageal sphincter?",
    choices: ["Pylorus", "Fundus", "Cardia", "Body"],
    correctAnswer: 1,
    explanation: "The fundus is the upper curved portion of the stomach that lies above the level of the cardiac opening."
  },
  {
    question: "Which structure is attached to the greater curvature of the stomach?",
    choices: ["Omentum", "Mesentery", "Ligament of Treitz", "Cecum"],
    correctAnswer: 0,
    explanation: "The greater omentum is a large apron-like fold of peritoneum that hangs from the greater curvature of the stomach."
  },
  {
    question: "What connects the intestines to the posterior abdominal wall?",
    choices: ["Omentum", "Mesentery", "Serosa", "Haustra"],
    correctAnswer: 1,
    explanation: "The mesentery is a fold of peritoneum that attaches the small intestine to the posterior abdominal wall and contains blood vessels and nerves."
  },
  {
    question: "What is the main function of the stomach?",
    choices: ["Eliminate waste", "Store ingested material", "Produce insulin", "Absorb water"],
    correctAnswer: 1,
    explanation: "The stomach's primary function is to store and begin digestion of ingested food through mechanical and chemical breakdown."
  },
  {
    question: "What does a vagotomy involve?",
    choices: ["Cutting the mesentery", "Removing part of the stomach", "Cutting vagus nerve branches", "Closing the pylorus"],
    correctAnswer: 2,
    explanation: "Vagotomy involves cutting branches of the vagus nerve to reduce gastric acid secretion in peptic ulcer treatment."
  },
  {
    question: "Pyloromyotomy is more common in:",
    choices: ["Adults with ulcers", "Infants with projectile vomiting", "Adults with cancer", "Patients with hernias"],
    correctAnswer: 1,
    explanation: "Pyloromyotomy is most commonly performed in infants with pyloric stenosis who present with projectile vomiting."
  },
  {
    question: "What is the purpose of a PEG tube?",
    choices: ["Remove gallstones", "Gastric decompression and feeding", "Dilate esophagus", "Resect bowel"],
    correctAnswer: 1,
    explanation: "PEG (Percutaneous Endoscopic Gastrostomy) tubes provide a route for feeding and gastric decompression in patients who cannot eat normally."
  },
  {
    question: "Which procedure treats benign pyloric obstruction without removing GI tissue?",
    choices: ["Gastrojejunostomy", "Billroth II", "Nissen fundoplication", "Vagotomy"],
    correctAnswer: 0,
    explanation: "Gastrojejunostomy creates a connection between the stomach and jejunum to bypass pyloric obstruction without tissue removal."
  },
  {
    question: "Billroth I anastomoses the stomach to the:",
    choices: ["Ileum", "Duodenum", "Jejunum", "Cecum"],
    correctAnswer: 1,
    explanation: "Billroth I procedure connects the remaining stomach directly to the duodenum after partial gastrectomy."
  },
  {
    question: "Total gastrectomy involves removal of:",
    choices: ["Stomach and duodenum", "Entire stomach", "Distal stomach", "Proximal stomach"],
    correctAnswer: 1,
    explanation: "Total gastrectomy involves complete removal of the entire stomach, usually for gastric cancer treatment."
  },
  {
    question: "Bariatric surgery is performed to:",
    choices: ["Remove tumors", "Treat obesity", "Treat ulcers", "Repair hernias"],
    correctAnswer: 1,
    explanation: "Bariatric surgery is specifically designed to treat severe obesity by restricting food intake or nutrient absorption."
  },
  {
    question: "Which bariatric procedure is adjustable and reversible?",
    choices: ["Roux-en-Y bypass", "Billroth II", "PEG", "LAP-BAND"],
    correctAnswer: 3,
    explanation: "LAP-BAND (adjustable gastric band) can be tightened or loosened and is completely reversible, unlike other procedures."
  },
  {
    question: "Which part of the small intestine connects to the ileocecal valve?",
    choices: ["Duodenum", "Ileum", "Jejunum", "Colon"],
    correctAnswer: 1,
    explanation: "The ileum is the final portion of the small intestine that connects to the cecum through the ileocecal valve."
  },
  {
    question: "What is the function of the large intestine?",
    choices: ["Produce bile", "Store ingested food", "Reabsorb water", "Produce insulin"],
    correctAnswer: 2,
    explanation: "The large intestine's primary function is to reabsorb water and electrolytes from indigestible food matter and form feces."
  },
  {
    question: "What is the correct order of the colon parts?",
    choices: ["Ascending, transverse, descending, sigmoid", "Transverse, ascending, sigmoid, descending", "Ascending, descending, sigmoid, transverse", "Sigmoid, ascending, descending, transverse"],
    correctAnswer: 0,
    explanation: "The colon follows this anatomical sequence: ascending (right side), transverse (across), descending (left side), and sigmoid (S-shaped)."
  },
  {
    question: "Which muscle controls voluntary anal sphincter function?",
    choices: ["Internal sphincter", "External sphincter", "Circular muscle", "Oblique muscle"],
    correctAnswer: 1,
    explanation: "The external anal sphincter is composed of skeletal muscle under voluntary control, unlike the involuntary internal sphincter."
  },
  {
    question: "The appendix projects from the:",
    choices: ["Cecum", "Sigmoid colon", "Rectum", "Ileum"],
    correctAnswer: 0,
    explanation: "The vermiform appendix is a small pouch that projects from the cecum, the first part of the large intestine."
  },
  {
    question: "What is an appendectomy commonly performed for?",
    choices: ["Diverticulitis", "Ulcers", "Acute inflammation", "Cancer"],
    correctAnswer: 2,
    explanation: "Appendectomy is most commonly performed for acute appendicitis, which is inflammation of the vermiform appendix."
  },
  {
    question: "Which incision is used for an appendectomy?",
    choices: ["Kocher", "Pfannenstiel", "McBurney", "Midline"],
    correctAnswer: 2,
    explanation: "The McBurney incision is the classic approach for appendectomy, made at McBurney's point in the right lower quadrant."
  },
  {
    question: "Which type of suture is commonly used on the appendix stump?",
    choices: ["Figure-of-eight", "Purse-string", "Interrupted", "Running"],
    correctAnswer: 1,
    explanation: "A purse-string suture is commonly used to invert and secure the appendiceal stump into the cecal wall."
  },
  {
    question: "What is the purpose of an intestinal stoma?",
    choices: ["Remove stomach contents", "Divert bowel contents", "Remove gallbladder", "Biopsy bowel"],
    correctAnswer: 1,
    explanation: "An intestinal stoma is created to divert bowel contents to the exterior when normal elimination is not possible."
  },
  {
    question: "A colostomy creates an opening in the:",
    choices: ["Stomach", "Colon", "Small intestine", "Rectum"],
    correctAnswer: 1,
    explanation: "A colostomy is a surgical opening created in the colon to allow fecal diversion through the abdominal wall."
  },
  {
    question: "The Whipple procedure removes all EXCEPT:",
    choices: ["Head of pancreas", "Entire duodenum", "Proximal jejunum", "Entire stomach"],
    correctAnswer: 3,
    explanation: "The Whipple procedure removes the head of pancreas, duodenum, and proximal jejunum, but preserves most of the stomach."
  },
  {
    question: "Gallstones are sent to pathology:",
    choices: ["In saline", "On a dry container", "In formalin", "In sterile water"],
    correctAnswer: 1,
    explanation: "Gallstones should be sent to pathology in a dry container to preserve their composition for analysis."
  },
  {
    question: "What is the main function of the gallbladder?",
    choices: ["Store insulin", "Store bile", "Produce bile", "Digest fat"],
    correctAnswer: 1,
    explanation: "The gallbladder's primary function is to store and concentrate bile produced by the liver until needed for fat digestion."
  },
  {
    question: "What is the preferred incision for an open cholecystectomy?",
    choices: ["Midline", "Kocher", "McBurney", "Pfannenstiel"],
    correctAnswer: 1,
    explanation: "The Kocher incision (right subcostal) provides optimal exposure for open cholecystectomy procedures."
  },
  {
    question: "Which of the following is NOT part of the bowel technique?",
    choices: ["Isolating contaminated instruments", "Using separate clean and dirty setups", "Changing gloves", "Using the same suction for clean and dirty areas"],
    correctAnswer: 3,
    explanation: "Bowel technique requires separate suction systems for clean and contaminated areas to prevent cross-contamination."
  },
  {
    question: "An APR is performed to treat lesions of the:",
    choices: ["Esophagus", "Rectum and anus", "Stomach", "Cecum"],
    correctAnswer: 1,
    explanation: "Abdominoperineal resection (APR) removes the rectum and anus, typically for low rectal cancers."
  },
  {
    question: "Adhesions are:",
    choices: ["Dilated veins", "Bands of fibrous tissue", "Stenotic pylorus", "Herniated intestines"],
    correctAnswer: 1,
    explanation: "Adhesions are bands of fibrous scar tissue that can form between organs, often causing bowel obstruction."
  },
  {
    question: "Hemorrhoidectomy can be performed with:",
    choices: ["Bougie", "Band suture or laser", "PEG", "Veress needle"],
    correctAnswer: 1,
    explanation: "Hemorrhoidectomy can be performed using various methods including rubber band ligation, suture ligation, or laser techniques."
  },
  {
    question: "A fistulotomy involves:",
    choices: ["Excision of the tract", "Drainage of the tract", "Closure of the tract", "Repair of the sphincter"],
    correctAnswer: 0,
    explanation: "Fistulotomy involves surgical excision or laying open of an anal fistula tract to allow proper healing."
  },
  {
    question: "What is the first layer of the abdominal wall?",
    choices: ["Fascia", "Skin", "Peritoneum", "Subcutaneous tissue"],
    correctAnswer: 1,
    explanation: "The skin is the outermost and first layer of the abdominal wall encountered during surgical approach."
  },
  {
    question: "Which laparoscopic technique uses a blunt trocar?",
    choices: ["Veress needle technique", "SIL technique", "Hasson technique", "Kocher technique"],
    correctAnswer: 2,
    explanation: "The Hasson technique uses a blunt trocar inserted under direct visualization through an open incision."
  },
  {
    question: "What is the normal intra-abdominal pressure during laparoscopy?",
    choices: ["5-8 mmHg", "8-10 mmHg", "12-15 mmHg", "18-20 mmHg"],
    correctAnswer: 2,
    explanation: "Normal intra-abdominal pressure during laparoscopy is maintained at 12-15 mmHg to provide adequate visualization while minimizing complications."
  },
  {
    question: "What does the ligament of Treitz connect?",
    choices: ["Duodenum and jejunum", "Ileum and cecum", "Colon and rectum", "Stomach and duodenum"],
    correctAnswer: 0,
    explanation: "The ligament of Treitz (suspensory ligament) marks the duodenojejunal junction and connects the duodenum to the jejunum."
  },
  {
    question: "What are haustra?",
    choices: ["Fat-filled pouches", "Bands on stomach", "Outpouchings of intestines", "Layers of the peritoneum"],
    correctAnswer: 2,
    explanation: "Haustra are the sacculated outpouchings of the colon created by the tonic contractions of the teniae coli."
  },
  {
    question: "What is Meckel's diverticulum?",
    choices: ["Outpouching of large intestine", "Outpouching of small intestine", "Stricture of esophagus", "Obstruction of pylorus"],
    correctAnswer: 1,
    explanation: "Meckel's diverticulum is a congenital outpouching of the small intestine, typically located about two feet from the ileocecal valve."
  },
  {
    question: "What is a pilonidal cyst?",
    choices: ["Hernia at diaphragm", "Anal mucosa tear", "Cyst near buttocks with hair", "Gastric ulcer"],
    correctAnswer: 2,
    explanation: "A pilonidal cyst is a fluid-filled sac that develops near the tailbone/buttocks area, often containing hair and debris."
  }
];
