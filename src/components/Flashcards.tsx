import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  ArrowLeft,
  Shuffle
} from 'lucide-react';

interface FlashcardsProps {
  category: string;
  onAnswerCorrect: () => void;
  onQuestionAttempt: () => void;
}

const flashcardData = {
  'medical-terminology': [
    {
      question: "What does 'abduction' mean?",
      answer: "Away from the midline of the body",
      explanation: "Abduction refers to movement that takes a body part away from the center line of the body."
    },
    {
      question: "What does 'adduction' mean?",
      answer: "Toward the midline of the body",
      explanation: "Adduction refers to movement that brings a body part toward the center line of the body."
    },
    {
      question: "What is 'dorsal recumbent'?",
      answer: "Supine",
      explanation: "Dorsal recumbent position is the same as supine - lying on the back."
    },
    {
      question: "What does 'anterior' mean?",
      answer: "Pertaining to the front of the body",
      explanation: "Anterior refers to the front or forward part of the body or structure."
    },
    {
      question: "What does 'lateral' mean?",
      answer: "Pertaining to the side of the body",
      explanation: "Lateral refers to the side or away from the midline of the body."
    },
    {
      question: "What does 'proxim/o' mean?",
      answer: "Near the point of attachment to the body",
      explanation: "Proximal refers to being closer to the center or point of attachment."
    },
    {
      question: "What does 'super/o' mean?",
      answer: "Upper, above",
      explanation: "Superior refers to a structure that is above or higher than another structure."
    },
    {
      question: "What does 'dist/o' mean?",
      answer: "Farthest point",
      explanation: "Distal refers to being farther from the center or point of attachment."
    },
    {
      question: "What does 'cephal/o' mean?",
      answer: "Pertaining to the head",
      explanation: "Cephalic refers to the head or toward the head end of the body."
    },
    {
      question: "What does 'crani/o' mean?",
      answer: "Pertaining to the skull",
      explanation: "Cranial refers to the skull or the bony structure that protects the brain."
    },
    {
      question: "What is a 'lumpectomy'?",
      answer: "Excision of a breast lesion with surrounding tissue",
      explanation: "A lumpectomy is a surgical procedure to remove a tumor and a small amount of surrounding healthy tissue."
    },
    {
      question: "What is a 'radical mastectomy'?",
      answer: "Removal of breast tissue, muscle, and lymph nodes",
      explanation: "A radical mastectomy removes the entire breast, chest muscles, and lymph nodes in the armpit."
    },
    {
      question: "What is a 'modified radical mastectomy'?",
      answer: "Removal of breast tissue and axillary lymph nodes",
      explanation: "This procedure removes the breast tissue and lymph nodes but preserves the chest muscle."
    },
    {
      question: "What is 'wire localization'?",
      answer: "Performed in radiology where the mass is identified with a wire",
      explanation: "A thin wire is inserted to mark the location of abnormal tissue for surgical removal."
    },
    {
      question: "What is a 'sentinel lymph node'?",
      answer: "First set of nodes closest to the cancerous tumor",
      explanation: "The sentinel lymph node is the first lymph node to receive drainage from a tumor."
    },
    {
      question: "What does 'chondr/o' mean?",
      answer: "Cartilage",
      explanation: "Chondro- is a combining form relating to cartilage tissue."
    },
    {
      question: "What does 'oste/o' mean?",
      answer: "Bone",
      explanation: "Osteo- is a combining form relating to bone tissue."
    },
    {
      question: "What does 'arthr/o' mean?",
      answer: "Joint",
      explanation: "Arthro- is a combining form relating to joints where bones meet."
    },
    {
      question: "What does 'metacarp/o' mean?",
      answer: "Hand bones",
      explanation: "Metacarpal bones are the five long bones in the hand between the wrist and fingers."
    },
    {
      question: "What does 'tend/o' mean?",
      answer: "Tendon",
      explanation: "Tendo- refers to tendons, which connect muscles to bones."
    },
    {
      question: "What does 'blephar/o' mean?",
      answer: "Eyelid",
      explanation: "Blepharo- is a combining form relating to the eyelids."
    },
    {
      question: "What does 'dacry/o' mean?",
      answer: "Tear duct",
      explanation: "Dacryo- relates to tears or the tear ducts of the eye."
    },
    {
      question: "What does 'kerat/o' mean?",
      answer: "Cornea",
      explanation: "Kerato- refers to the cornea, the clear front layer of the eye."
    },
    {
      question: "What does 'retin/o' mean?",
      answer: "Retina",
      explanation: "Retino- refers to the retina, the light-sensitive tissue at the back of the eye."
    },
    {
      question: "What does 'irid/o' mean?",
      answer: "Iris",
      explanation: "Irido- refers to the iris, the colored part of the eye that controls pupil size."
    },
    {
      question: "What does the suffix '-cele' mean?",
      answer: "Hernia",
      explanation: "The suffix -cele indicates a hernia or abnormal protrusion of tissue."
    },
    {
      question: "What does the suffix '-dyspnea' mean?",
      answer: "Difficulty breathing",
      explanation: "Dyspnea refers to shortness of breath or difficulty breathing."
    },
    {
      question: "What does the suffix '-edema' mean?",
      answer: "Swelling",
      explanation: "Edema refers to swelling caused by excess fluid trapped in body tissues."
    },
    {
      question: "What does the suffix '-itis' mean?",
      answer: "Inflammation of",
      explanation: "The suffix -itis indicates inflammation of a specific organ or tissue."
    },
    {
      question: "What does the suffix '-emesis' mean?",
      answer: "Vomiting",
      explanation: "Emesis refers to the act of vomiting or bringing up stomach contents."
    },
    {
      question: "What does the suffix '-megaly' mean?",
      answer: "Enlargement",
      explanation: "The suffix -megaly indicates abnormal enlargement of an organ or body part."
    },
    {
      question: "What does the suffix '-pathy' mean?",
      answer: "Disease",
      explanation: "The suffix -pathy indicates disease or abnormal condition."
    },
    {
      question: "What does the suffix '-rrhage' mean?",
      answer: "Bursting forth",
      explanation: "The suffix -rrhage indicates excessive bleeding or hemorrhage."
    },
    {
      question: "What does the suffix '-oma' mean?",
      answer: "Tumor",
      explanation: "The suffix -oma indicates a tumor or abnormal growth."
    },
    {
      question: "What does the suffix '-rhea' mean?",
      answer: "Flow, discharge",
      explanation: "The suffix -rhea indicates flow or discharge from a body part."
    },
    {
      question: "What is 'abruptio placentae'?",
      answer: "Placenta tears away from the uterine wall",
      explanation: "This is a serious pregnancy complication where the placenta separates from the uterine wall before delivery."
    },
    {
      question: "What does 'ectopic' mean?",
      answer: "Pregnancy outside the uterus",
      explanation: "An ectopic pregnancy occurs when a fertilized egg implants outside the uterus, usually in a fallopian tube."
    },
    {
      question: "What is 'placenta previa'?",
      answer: "Placenta forms in the lower portion of the uterus and blocks the birth canal",
      explanation: "This condition occurs when the placenta covers the cervix, blocking the baby's exit during delivery."
    },
    {
      question: "What does 'atresia' mean?",
      answer: "Lack of a normal body opening",
      explanation: "Atresia refers to the absence or abnormal narrowing of a body opening or passage."
    },
    {
      question: "What is a 'rectocele'?",
      answer: "Protrusion of the rectum into the vagina",
      explanation: "A rectocele occurs when the wall between the rectum and vagina weakens, causing the rectum to bulge."
    },
    {
      question: "What does 'cervic/o' mean?",
      answer: "Pertaining to the neck, cervix",
      explanation: "Cervico- can refer to either the neck or the cervix of the uterus."
    },
    {
      question: "What does 'lapar/o' mean?",
      answer: "Pertaining to the abdomen",
      explanation: "Laparo- is a combining form relating to the abdomen or abdominal wall."
    },
    {
      question: "What does 'cyst/o' mean?",
      answer: "Pertaining to the bladder",
      explanation: "Cysto- is a combining form relating to the bladder or any sac-like structure."
    },
    {
      question: "What does 'gynec/o' mean?",
      answer: "Pertaining to a female",
      explanation: "Gyneco- is a combining form relating to women or female reproductive organs."
    },
    {
      question: "What does 'colp/o' mean?",
      answer: "Pertaining to the vagina",
      explanation: "Colpo- is a combining form relating to the vagina."
    },
    {
      question: "What is a 'fistula'?",
      answer: "Abnormal passageway that forms between two structures",
      explanation: "A fistula is an abnormal connection between two organs or between an organ and the skin."
    },
    {
      question: "What is a 'fibroid'?",
      answer: "Benign tumor of the uterus",
      explanation: "Fibroids are non-cancerous growths that develop in or around the uterus."
    },
    {
      question: "What is an 'ovarian cystectomy'?",
      answer: "Removal of a cyst on the ovary",
      explanation: "This surgical procedure removes cysts from the ovary while preserving the ovarian tissue."
    },
    {
      question: "What is an 'oophorectomy'?",
      answer: "Removal of the ovary",
      explanation: "Oophorectomy is the surgical removal of one or both ovaries."
    },
    {
      question: "What is a 'salpingectomy'?",
      answer: "Removal of the fallopian tube",
      explanation: "Salpingectomy is the surgical removal of one or both fallopian tubes."
    },
    {
      question: "What is the 'mitral valve'?",
      answer: "Also called the bicuspid valve",
      explanation: "The mitral valve controls blood flow between the left atrium and left ventricle of the heart."
    },
    {
      question: "What is 'bradycardia'?",
      answer: "Resting heart rate below 60 bpm",
      explanation: "Bradycardia is a slower than normal heart rate in adults."
    },
    {
      question: "What is 'arrhythmia'?",
      answer: "Irregular heartbeat",
      explanation: "Arrhythmia refers to any abnormality in the heart's rhythm or rate."
    },
    {
      question: "What are 'alveoli'?",
      answer: "Exchange of oxygen and carbon dioxide occurs here",
      explanation: "Alveoli are tiny air sacs in the lungs where gas exchange takes place."
    },
    {
      question: "What is 'cyanosis'?",
      answer: "Condition caused by oxygen deficiency",
      explanation: "Cyanosis is a bluish discoloration of the skin due to lack of oxygen in the blood."
    },
    {
      question: "What is an 'atrial septal defect'?",
      answer: "Congenital condition caused by the septum failing to close, allowing blood to flow back and forth",
      explanation: "This birth defect involves a hole in the wall separating the heart's two upper chambers."
    },
    {
      question: "What is 'claudication'?",
      answer: "Pain in a limb, usually the leg, caused by poor circulation",
      explanation: "Claudication is cramping pain caused by inadequate blood flow to muscles during exercise."
    },
    {
      question: "What is an 'embolism'?",
      answer: "Clot composed of blood, air, or fat that moves through the vascular system",
      explanation: "An embolism is a blockage of a blood vessel by a clot or other material that has traveled from elsewhere."
    },
    {
      question: "What is a 'thrombus'?",
      answer: "Stationary clot",
      explanation: "A thrombus is a blood clot that forms and remains attached to a blood vessel wall."
    },
    {
      question: "What is 'ischemia'?",
      answer: "Abnormally low blood flow to tissues",
      explanation: "Ischemia occurs when blood flow to tissues is restricted, reducing oxygen and nutrient delivery."
    },
    {
      question: "What is 'patent ductus arteriosus'?",
      answer: "Congenital condition caused by an opening between the pulmonary artery and aorta that failed to close before birth",
      explanation: "This birth defect involves a persistent opening between two major blood vessels leading from the heart."
    },
    {
      question: "What is 'tetralogy of Fallot'?",
      answer: "Congenital defect that consists of four separate cardiac diseases: pulmonary stenosis, ventricular septal defect, incorrect position of the aorta, and ventricular hypertrophy",
      explanation: "This complex heart defect involves four abnormalities that occur together."
    },
    {
      question: "What is 'hypertension'?",
      answer: "High blood pressure",
      explanation: "Hypertension is a condition where blood pressure in the arteries is persistently elevated."
    },
    {
      question: "What is 'hypotension'?",
      answer: "Low blood pressure",
      explanation: "Hypotension is a condition where blood pressure is lower than normal."
    },
    {
      question: "What is an 'aneurysm'?",
      answer: "Bulging of an arterial wall",
      explanation: "An aneurysm is a weakened area in a blood vessel wall that balloons outward."
    },
    {
      question: "What does the suffix '-otomy' mean?",
      answer: "Cutting into",
      explanation: "The suffix -otomy indicates a surgical incision or cutting into an organ or tissue."
    },
    {
      question: "What does the suffix '-pexy' mean?",
      answer: "Fixation of",
      explanation: "The suffix -pexy indicates surgical fixation or stabilization of an organ."
    },
    {
      question: "What does the suffix '-plasty' mean?",
      answer: "Surgical repair",
      explanation: "The suffix -plasty indicates surgical repair or reconstruction."
    },
    {
      question: "What does the suffix '-centesis' mean?",
      answer: "Puncture to remove fluid",
      explanation: "The suffix -centesis indicates surgical puncture to remove fluid or gas."
    },
    {
      question: "What does the prefix 'poly-' mean?",
      answer: "Many",
      explanation: "The prefix poly- means many, much, or multiple."
    },
    {
      question: "What is 'pneumothorax'?",
      answer: "Presence of air or gas in the cavity between the lungs and the chest wall, causing collapse of the lung",
      explanation: "Pneumothorax occurs when air leaks into the space between the lung and chest wall."
    },
    {
      question: "What is 'pneumoperitoneum'?",
      answer: "Presence of gas or air in the abdominal cavity",
      explanation: "Pneumoperitoneum is the accumulation of air or gas in the peritoneal cavity."
    },
    {
      question: "What is 'apnea'?",
      answer: "Temporary loss of breathing",
      explanation: "Apnea is a temporary cessation of breathing, especially during sleep."
    },
    {
      question: "What is 'thoracocentesis'?",
      answer: "Surgical puncture and drainage of the pleural cavity",
      explanation: "This procedure involves inserting a needle into the chest to remove fluid or air."
    },
    {
      question: "What is 'pneumonectomy'?",
      answer: "Surgical removal of the lung or a segment of the lung",
      explanation: "Pneumonectomy is the surgical removal of part or all of a lung."
    },
    {
      question: "What does 'encephal/o' mean?",
      answer: "Pertaining to the brain",
      explanation: "Encephalo- is a combining form relating to the brain."
    },
    {
      question: "What does 'mening/o' mean?",
      answer: "Pertaining to covering of the brain and spinal cord",
      explanation: "Meningo- refers to the meninges, the protective membranes covering the brain and spinal cord."
    },
    {
      question: "What does the suffix '-algia' mean?",
      answer: "Pertaining to pain",
      explanation: "The suffix -algia indicates pain in a specified part of the body."
    },
    {
      question: "What does the suffix '-phasia' mean?",
      answer: "Pertaining to speech",
      explanation: "The suffix -phasia relates to speech or the ability to speak."
    },
    {
      question: "What does 'gli/o' mean?",
      answer: "Pertaining to neurological tissue",
      explanation: "Glio- refers to the supportive tissue (glial cells) in the nervous system."
    }
  ],
  microbiology: [
    {
      question: "What is Asepsis?",
      answer: "Absence of disease-causing microorganisms",
      explanation: "Asepsis is the state of being free from disease-causing microorganisms and is fundamental to preventing surgical site infections."
    },
    {
      question: "Define Sterile",
      answer: "Free of all living microorganisms, including spores",
      explanation: "Sterility represents the complete absence of all forms of microbial life, including the most resistant bacterial spores."
    },
    {
      question: "What does Surgically Clean mean?",
      answer: "Mechanically disinfected but not sterile",
      explanation: "Surgically clean items have been thoroughly cleaned and disinfected but may still contain some microorganisms."
    },
    {
      question: "What is Aeration?",
      answer: "Method by which ethylene oxide is removed from sterilized items",
      explanation: "Aeration is crucial after ETO sterilization to remove toxic residues before items can be safely used."
    },
    {
      question: "Define Aerobes",
      answer: "Microbes that require oxygen to live and reproduce",
      explanation: "Aerobic organisms depend on oxygen for their metabolic processes and cannot survive in oxygen-free environments."
    },
    {
      question: "What are Facultative Anaerobes?",
      answer: "Microbes that can live in both oxygen-rich and oxygen-poor environments",
      explanation: "These versatile organisms can switch between aerobic and anaerobic metabolism depending on oxygen availability."
    },
    {
      question: "Define Anaerobes",
      answer: "Microbes that live in the absence of oxygen",
      explanation: "Anaerobic organisms obtain energy through fermentation or other processes that don't require oxygen."
    },
    {
      question: "What is a Fomite?",
      answer: "Inanimate object that can carry microorganisms",
      explanation: "Fomites are non-living objects like surgical instruments, clothing, or surfaces that can harbor pathogens."
    },
    {
      question: "What are Cells?",
      answer: "The smallest unit of living organisms",
      explanation: "Cells are the basic structural and functional units of all living things."
    },
    {
      question: "What are Mitochondria?",
      answer: "Organelles that provide energy for the cell",
      explanation: "Often called the 'powerhouse of the cell,' mitochondria convert nutrients into ATP energy."
    },
    {
      question: "What are Flagella?",
      answer: "Tail-like structures that provide locomotion to cells",
      explanation: "Flagella are whip-like appendages that allow bacteria and other cells to move through liquid environments."
    },
    {
      question: "What is a Cell Wall?",
      answer: "Protective outer layer in some cell types",
      explanation: "Cell walls provide structural support and protection, commonly found in bacteria, plants, and fungi."
    },
    {
      question: "What is the Cytoplasmic Membrane?",
      answer: "Semipermeable membrane inside the cell",
      explanation: "This membrane controls what enters and exits the cell, maintaining cellular homeostasis."
    },
    {
      question: "What are Bacteria?",
      answer: "Single-celled organisms classified as prokaryotes",
      explanation: "Bacteria are microscopic organisms that lack a membrane-bound nucleus and can be beneficial or pathogenic."
    },
    {
      question: "Define Prokaryotes",
      answer: "Simple cells without a nucleus or membrane-bound organelles",
      explanation: "Prokaryotic cells have their genetic material freely floating in the cytoplasm rather than enclosed in a nucleus."
    },
    {
      question: "What are Eukaryotes?",
      answer: "Complex cells with a nucleus and organelles",
      explanation: "Eukaryotic cells have their DNA enclosed in a membrane-bound nucleus and contain specialized organelles."
    },
    {
      question: "What is Binary Fission?",
      answer: "Asexual reproduction where one cell divides into two identical cells",
      explanation: "This is the primary method of reproduction for bacteria, resulting in rapid population growth."
    },
    {
      question: "What are the three main Bacteria Shapes?",
      answer: "Rod-shaped (bacilli), spherical (cocci), spiral (spirilla)",
      explanation: "Bacterial morphology helps in identification and understanding of their characteristics."
    },
    {
      question: "What are Gram-Positive bacteria?",
      answer: "Bacteria that stain purple in the Gram stain test",
      explanation: "These bacteria have thick peptidoglycan cell walls that retain the crystal violet stain."
    },
    {
      question: "What are Gram-Negative bacteria?",
      answer: "Bacteria that stain red in the Gram stain test",
      explanation: "These bacteria have thin peptidoglycan walls and don't retain the primary stain, appearing red after counterstaining."
    },
    {
      question: "What is a Bactericide?",
      answer: "Substance that kills bacteria",
      explanation: "Bactericidal agents destroy bacterial cells, providing definitive elimination of bacterial pathogens."
    },
    {
      question: "What is Bacteriostatic?",
      answer: "Substance that inhibits bacterial growth",
      explanation: "Bacteriostatic agents prevent bacterial reproduction without necessarily killing the organisms."
    },
    {
      question: "What is Bioburden?",
      answer: "Amount of microorganisms on an object before sterilization",
      explanation: "Understanding bioburden helps determine appropriate sterilization methods and exposure times."
    },
    {
      question: "What is a Biological Indicator?",
      answer: "Used to monitor the effectiveness of sterilization processes",
      explanation: "These contain highly resistant microorganisms that serve as the ultimate test of sterilization efficacy."
    },
    {
      question: "What is Geobacillus Stearothermophilus used for?",
      answer: "Microbe used to test steam sterilization",
      explanation: "This heat-resistant spore-forming bacterium is the standard biological indicator for steam sterilization."
    },
    {
      question: "What are Bacillus Atrophaeus / Geobacillus Subtilis used for?",
      answer: "Microbes used to test ETO sterilization",
      explanation: "These organisms are highly resistant to ethylene oxide and serve as biological indicators for ETO sterilization."
    },
    {
      question: "What is Contamination?",
      answer: "Presence of pathogenic microorganisms on surfaces",
      explanation: "Contamination indicates the presence of harmful microorganisms that could cause infection."
    },
    {
      question: "What is Decontamination?",
      answer: "Process of cleaning nonliving surfaces using chemical or physical agents",
      explanation: "Decontamination reduces or eliminates microorganisms from surfaces and objects."
    },
    {
      question: "What does SSI stand for?",
      answer: "Surgical Site Infection - Infection occurring at a surgical site",
      explanation: "SSIs are complications that can occur after surgery when bacteria enter the surgical wound."
    },
    {
      question: "What is Deep Incisional SSI?",
      answer: "Infection involving deep soft tissues",
      explanation: "This type of SSI affects tissues beneath the skin and subcutaneous tissue, often requiring surgical intervention."
    },
    {
      question: "What is a Disinfectant?",
      answer: "Used to kill microbes on nonliving surfaces",
      explanation: "Disinfectants are chemical agents that destroy or inhibit microorganisms on inanimate objects."
    },
    {
      question: "What is an Antiseptic?",
      answer: "Used to kill microbes on living tissue",
      explanation: "Antiseptics are safe for use on skin and mucous membranes to reduce microbial load."
    },
    {
      question: "What is a Fungicide?",
      answer: "Kills fungi",
      explanation: "Fungicidal agents are specifically designed to eliminate fungal organisms."
    },
    {
      question: "What is Immunity?",
      answer: "Resistance to infection",
      explanation: "Immunity is the body's ability to resist or fight off infections through various defense mechanisms."
    },
    {
      question: "What is Naturally Acquired Active Immunity?",
      answer: "Immunity developed from exposure to disease",
      explanation: "This occurs when the immune system responds to actual infection, creating long-lasting protection."
    },
    {
      question: "What is Artificially Acquired Active Immunity?",
      answer: "Immunity developed from vaccination",
      explanation: "Vaccines stimulate the immune system to produce antibodies without causing disease."
    },
    {
      question: "What is Naturally Acquired Passive Immunity?",
      answer: "Immunity passed from mother to child through placenta",
      explanation: "Maternal antibodies provide temporary protection to newborns during their first months of life."
    },
    {
      question: "What is Artificially Acquired Passive Immunity?",
      answer: "Short-term immunity from injection of antibodies",
      explanation: "Pre-formed antibodies provide immediate but temporary protection against specific diseases."
    },
    {
      question: "What is Infection?",
      answer: "Invasion and multiplication of microorganisms in body tissues",
      explanation: "Infection occurs when pathogens successfully establish themselves and reproduce in host tissues."
    },
    {
      question: "What is the first line of defense against bacteria?",
      answer: "Skin",
      explanation: "Intact skin serves as a physical barrier that prevents most microorganisms from entering the body."
    },
    {
      question: "What is a Nosocomial Infection?",
      answer: "Infection acquired in a hospital",
      explanation: "Healthcare-associated infections occur during medical care and are a significant concern in healthcare facilities."
    },
    {
      question: "What is Pasteurization?",
      answer: "Heating process that destroys pathogenic microbes in food and beverages",
      explanation: "This thermal treatment eliminates harmful bacteria while preserving food quality and nutrients."
    },
    {
      question: "What are Parasites?",
      answer: "Organisms that live in or on another organism (host)",
      explanation: "Parasites depend on their host for survival and often cause harm to the host organism."
    },
    {
      question: "What is a Pathogen?",
      answer: "Any disease-causing microorganism",
      explanation: "Pathogens are microorganisms capable of causing disease in their host."
    },
    {
      question: "What are Resident Microorganisms?",
      answer: "Microbes that live deep in the epidermis",
      explanation: "These are part of the normal flora and are difficult to remove through routine hand washing."
    },
    {
      question: "What are Transient Microorganisms?",
      answer: "Microbes that live on the skin surface temporarily",
      explanation: "These can be easily removed through proper hand hygiene and are often the source of cross-contamination."
    },
    {
      question: "What is a Virucide?",
      answer: "Substance that kills viruses",
      explanation: "Virucidal agents are capable of inactivating or destroying viral particles."
    },
    {
      question: "What is Staphylococcus aureus?",
      answer: "Commonly found in respiratory passages; major cause of SSIs",
      explanation: "This gram-positive bacterium is a leading cause of healthcare-associated infections."
    },
    {
      question: "What is significant about MRSA?",
      answer: "Methicillin-resistant Staphylococcus aureus; treated with vancomycin",
      explanation: "MRSA is resistant to many antibiotics and represents a serious healthcare challenge."
    },
    {
      question: "What is Creutzfeldt-Jakob Disease?",
      answer: "Neurodegenerative disease caused by prions",
      explanation: "This fatal brain disorder is caused by misfolded proteins that are extremely difficult to destroy."
    },
    {
      question: "What are Prions?",
      answer: "Smallest infectious particles; neither viral, bacterial, nor fungal",
      explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
    }
  ],
  anatomy: [
    {
      question: "What is the largest organ in the human body?",
      answer: "The skin",
      explanation: "The skin covers the entire body and regulates temperature, protects internal organs, and prevents infection."
    },
    {
      question: "Which chamber of the heart pumps blood to the lungs?",
      answer: "Right ventricle",
      explanation: "The right ventricle pumps deoxygenated blood through the pulmonary artery to the lungs for oxygenation."
    },
    {
      question: "What are the three layers of the heart wall?",
      answer: "Epicardium, Myocardium, Endocardium",
      explanation: "From outer to inner: Epicardium (outer protective layer), Myocardium (muscle layer), Endocardium (inner lining)."
    }
  ],
  instruments: [
    {
      question: "What is a Kelly forceps primarily used for?",
      answer: "Clamping blood vessels and tissue",
      explanation: "Kelly forceps are curved hemostatic clamps used to control bleeding by clamping blood vessels during surgery."
    },
    {
      question: "What distinguishes a Mayo scissors from Metzenbaum scissors?",
      answer: "Mayo scissors are heavier and used for cutting tough tissue, while Metzenbaum are lighter for delicate tissue",
      explanation: "Mayo scissors have thick, strong blades for cutting fascia and heavy tissue. Metzenbaum scissors are more delicate for fine dissection."
    }
  ],
  procedures: [
    {
      question: "What is the purpose of the 'time out' before surgery?",
      answer: "To verify correct patient, procedure, and surgical site",
      explanation: "The time out is a standardized safety protocol to prevent wrong-site, wrong-procedure, and wrong-patient surgery."
    },
    {
      question: "What position is used for most abdominal surgeries?",
      answer: "Supine position",
      explanation: "The supine position (lying on back) provides the best access to the abdomen while maintaining patient safety and comfort."
    }
  ],
  sterile: [
    {
      question: "How long should surgical hand scrub last?",
      answer: "3-5 minutes for initial scrub",
      explanation: "The initial surgical scrub should last 3-5 minutes to effectively remove transient and some resident bacteria from hands and arms."
    },
    {
      question: "What is the sterile field?",
      answer: "An area free from all microorganisms",
      explanation: "The sterile field is a designated area that has been prepared to be free of all microorganisms and must be maintained throughout surgery."
    }
  ]
};

const Flashcards: React.FC<FlashcardsProps> = ({ 
  category, 
  onAnswerCorrect, 
  onQuestionAttempt 
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledCards, setShuffledCards] = useState(flashcardData[category] || []);

  useEffect(() => {
    const cards = flashcardData[category] || [];
    setShuffledCards([...cards]);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowExplanation(false);
  }, [category]);

  const currentCard = shuffledCards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      onQuestionAttempt();
    }
  };

  const handleNext = () => {
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      setShowExplanation(false);
    }
  };

  const handleShuffle = () => {
    const cards = [...shuffledCards];
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setShuffledCards(cards);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowExplanation(false);
  };

  const handleCorrect = () => {
    onAnswerCorrect();
    setShowExplanation(true);
  };

  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No flashcards available for this category yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Badge variant="secondary">
            Card {currentCardIndex + 1} of {shuffledCards.length}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {category.replace('-', ' ')}
          </Badge>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleShuffle}
          className="flex items-center space-x-2"
        >
          <Shuffle className="h-4 w-4" />
          <span>Shuffle</span>
        </Button>
      </div>

      <div className="flex justify-center">
        <Card 
          className={`w-full max-w-2xl h-80 cursor-pointer transition-all duration-300 transform ${
            isFlipped ? 'scale-105' : 'hover:scale-102'
          }`}
          onClick={handleFlip}
        >
          <div className="h-full p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              {!isFlipped ? (
                <>
                  <h3 className="text-2xl font-semibold text-gray-900 leading-relaxed">
                    {currentCard.question}
                  </h3>
                  <p className="text-sm text-gray-500">Click to reveal answer</p>
                </>
              ) : (
                <>
                  <h4 className="text-xl font-medium text-blue-600 mb-4">Answer:</h4>
                  <p className="text-xl text-gray-900 leading-relaxed">
                    {currentCard.answer}
                  </p>
                  {showExplanation && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Explanation:</strong> {currentCard.explanation}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Card>
      </div>

      {isFlipped && (
        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => setShowExplanation(true)}
            className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50"
          >
            <XCircle className="h-4 w-4" />
            <span>Need Help</span>
          </Button>
          <Button 
            onClick={handleCorrect}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Got It!</span>
          </Button>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        <Button 
          variant="outline"
          onClick={() => {
            setIsFlipped(false);
            setShowExplanation(false);
          }}
          className="flex items-center space-x-2"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset Card</span>
        </Button>

        <Button 
          variant="outline" 
          onClick={handleNext}
          disabled={currentCardIndex === shuffledCards.length - 1}
          className="flex items-center space-x-2"
        >
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Flashcards;
