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
import { flashcardData } from '@/data/flashcardData';

interface FlashcardsProps {
  category: string;
  onAnswerCorrect: () => void;
  onQuestionAttempt: () => void;
}
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
  'surgical-asepsis-sterility': [
    {
      question: "What is Asepsis?",
      answer: "Absence of pathogenic microorganisms or disease",
      explanation: "Asepsis is the fundamental principle of preventing infection by eliminating disease-causing microorganisms."
    },
    {
      question: "What are the Principles of asepsis?",
      answer: "Use of sterile techniques to prevent contamination of the sterile field and prevent surgical site infection (SSI)",
      explanation: "These principles guide all sterile procedures to maintain a safe surgical environment."
    },
    {
      question: "What does Bactericidal mean?",
      answer: "Substance that kills bacteria",
      explanation: "Bactericidal agents destroy bacterial cells completely, providing definitive elimination."
    },
    {
      question: "What does Bacteriostatic mean?",
      answer: "Substance that inhibits growth and reproduction of bacteria",
      explanation: "Bacteriostatic agents prevent bacterial multiplication without necessarily killing the organisms."
    },
    {
      question: "What is Bioburden?",
      answer: "The total number of microbes or organic debris on an object at a given time; gross contamination",
      explanation: "Understanding bioburden helps determine appropriate cleaning and sterilization protocols."
    },
    {
      question: "What is Concurrent decontamination?",
      answer: "Cleaning/decontaminating a spill during surgery rather than waiting until after",
      explanation: "This immediate response prevents contamination from spreading during the procedure."
    },
    {
      question: "What is Contamination?",
      answer: "Presence of pathogenic microorganisms; violation of sterility",
      explanation: "Any breach of sterile technique that introduces harmful microorganisms to a sterile area."
    },
    {
      question: "What is Cross-contamination?",
      answer: "Contamination transferred from one source to another (person, object, or environment)",
      explanation: "This can occur through direct contact, airborne particles, or contaminated instruments."
    },
    {
      question: "What is Decontamination?",
      answer: "Reduction of microbial population on a surface/item to a sub-pathogenic level",
      explanation: "The first step in processing reusable medical devices before sterilization."
    },
    {
      question: "What is a Disinfectant?",
      answer: "Chemical agent that kills most microbes (not spores); used on inanimate objects",
      explanation: "Disinfectants are used on surfaces and equipment but are not safe for living tissue."
    },
    {
      question: "What is Event-related sterility?",
      answer: "Sterility determined by handling & storage rather than by time",
      explanation: "Modern sterility assurance focuses on package integrity rather than arbitrary time limits."
    },
    {
      question: "What is a Fomite?",
      answer: "Inanimate object that carries microorganisms (e.g., dust, lint, surfaces)",
      explanation: "Fomites are non-living carriers that can transmit infections between people."
    },
    {
      question: "What is a Fungicide?",
      answer: "Agent that kills fungi",
      explanation: "Specifically designed to eliminate fungal organisms and spores."
    },
    {
      question: "What is HAI (Healthcare–Associated Infection)?",
      answer: "Infection acquired in a healthcare setting (formerly 'nosocomial infection')",
      explanation: "These infections occur during medical care and are a major patient safety concern."
    },
    {
      question: "What is Indigenous microflora?",
      answer: "Microbes normally residing in body tissues or systems (normal/resident flora)",
      explanation: "These beneficial microorganisms are part of the body's natural defense system."
    },
    {
      question: "What is Infection?",
      answer: "Invasion of tissue by pathogens that reproduce & cause disease",
      explanation: "Occurs when harmful microorganisms successfully establish themselves in host tissue."
    },
    {
      question: "What is Package integrity?",
      answer: "Intact wrapping of a sterile package, free of punctures, tears, moisture, or broken seals",
      explanation: "Compromised packaging can allow microorganisms to contaminate sterile contents."
    },
    {
      question: "What is a Pathogen?",
      answer: "Any microbe capable of causing disease",
      explanation: "Pathogens can be bacteria, viruses, fungi, or parasites that harm their host."
    },
    {
      question: "What is Sepsis?",
      answer: "Serious, systemic infection with fever, caused by pathogenic microorganisms",
      explanation: "A life-threatening condition requiring immediate medical intervention."
    },
    {
      question: "What is a Spore?",
      answer: "Resistant bacterial form that can survive adverse conditions and become active later",
      explanation: "Spores are extremely difficult to destroy and require special sterilization methods."
    },
    {
      question: "What is a Sporicide?",
      answer: "Agent that kills bacterial spores",
      explanation: "The highest level of antimicrobial activity, destroying the most resistant microbial forms."
    },
    {
      question: "What does Sterile mean?",
      answer: "Free of all living microorganisms, including spores",
      explanation: "The complete absence of all forms of microbial life, including the most resistant spores."
    },
    {
      question: "What is the Sterile field?",
      answer: "Area around the patient kept free of microorganisms through sterile technique",
      explanation: "This protected area is maintained throughout surgery to prevent infection."
    },
    {
      question: "What is Sterile technique?",
      answer: "Practices to create & maintain sterility, and correct contamination if it occurs",
      explanation: "A set of procedures designed to prevent microbial contamination during invasive procedures."
    },
    {
      question: "What is Strike-through contamination?",
      answer: "Contamination from fluid passing through a sterile barrier by wicking",
      explanation: "Moisture can carry microorganisms through protective barriers, compromising sterility."
    },
    {
      question: "What does Surgically clean mean?",
      answer: "Mechanically cleaned & disinfected (but not sterile); describes skin after scrub",
      explanation: "The highest level of cleanliness achievable on living tissue, but not completely sterile."
    },
    {
      question: "What is Terminal disinfection?",
      answer: "High-level disinfection to make items safe for handling before sterilization",
      explanation: "Prepares contaminated items for safe processing by eliminating most pathogens."
    },
    {
      question: "What is Terminal sterilization?",
      answer: "Washer-sterilizer process that sterilizes unwrapped items for later use",
      explanation: "Final sterilization step that renders items completely free of microorganisms."
    },
    {
      question: "What is Transient microflora?",
      answer: "Microbes picked up on skin; removed with handwashing",
      explanation: "Temporary surface contamination that can be eliminated through proper hygiene."
    },
    {
      question: "What is a Vector?",
      answer: "Living carrier that transmits disease",
      explanation: "Organisms like mosquitoes or ticks that carry pathogens from one host to another."
    },
    {
      question: "What is a Virucide?",
      answer: "Agent that destroys viruses",
      explanation: "Specifically formulated to inactivate viral particles and prevent viral transmission."
    },
    {
      question: "What is Wicking action (Capillary action)?",
      answer: "Absorption and spread of fluid through porous material (causing strike-through)",
      explanation: "The mechanism by which moisture compromises sterile barriers through absorption."
    },
    {
      question: "What is Disinfection?",
      answer: "Destroys most microorganisms on inanimate surfaces (not all)",
      explanation: "Intermediate level of microbial control that eliminates most but not all pathogens."
    },
    {
      question: "What is Antisepsis?",
      answer: "Destroys most microorganisms on living tissue (skin)",
      explanation: "The process of reducing microbial load on living tissue to prevent infection."
    },
    {
      question: "What is an Antiseptic?",
      answer: "Chemical agent used for surgical hand scrub or skin prep",
      explanation: "Safe for use on living tissue to reduce microbial contamination before surgery."
    },
    {
      question: "What is Sterilization?",
      answer: "Destruction of all microorganisms (including spores) on inanimate surfaces",
      explanation: "The highest level of microbial control, eliminating all forms of life."
    },
    {
      question: "What are Critical items?",
      answer: "Used in invasive procedures or vascular access; must be sterilized (e.g., instruments, catheters)",
      explanation: "These items penetrate sterile tissue and require the highest level of processing."
    },
    {
      question: "What are Semi-critical items?",
      answer: "Contact mucous membranes or non-intact skin; high-level disinfection preferred (e.g., laryngoscopes)",
      explanation: "These items require high-level disinfection or sterilization due to infection risk."
    },
    {
      question: "What are Non-critical items?",
      answer: "Contact intact skin only; intermediate- or low-level disinfection (e.g., BP cuffs)",
      explanation: "Lowest risk items that only contact intact skin and require minimal processing."
    },
    {
      question: "What is High-level disinfection?",
      answer: "Kills all microorganisms except spores and prions",
      explanation: "The highest level of disinfection achievable without sterilization."
    },
    {
      question: "What is Intermediate-level disinfection?",
      answer: "Kills most microorganisms, including M. tuberculosis and HBV, but not spores",
      explanation: "Effective against vegetative bacteria, viruses, and fungi but not spores."
    },
    {
      question: "What is Low-level disinfection?",
      answer: "Kills some bacteria, fungi, and viruses, but not spores or M. tuberculosis",
      explanation: "Basic level of disinfection suitable for non-critical items and environmental surfaces."
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
  ],
  'surgical-technologist-role': [
    {
      question: "What is the primary role of a surgical technologist?",
      answer: "To ensure patient safety and surgical team efficiency during operative procedures",
      explanation: "Surgical technologists work as part of the surgical team to provide a safe, efficient environment for patient care."
    },
    {
      question: "What does NBSTSA stand for?",
      answer: "National Board of Surgical Technology and Surgical Assisting",
      explanation: "NBSTSA is the certifying body for surgical technologists and surgical assistants."
    },
    {
      question: "What is the CRC credential?",
      answer: "Certified Registered Central Service Technician",
      explanation: "CRC is a certification for central service/sterile processing technicians."
    },
    {
      question: "What is the role of a surgical technologist during the preoperative phase?",
      answer: "Prepare OR, set up sterile field, gather supplies and instruments",
      explanation: "Preoperative duties include room preparation, equipment checks, and sterile field setup."
    },
    {
      question: "What is the role during the intraoperative phase?",
      answer: "Pass instruments, maintain sterile field, anticipate surgeon needs",
      explanation: "During surgery, surgical technologists function as the sterile team member who assists the surgeon."
    },
    {
      question: "What is the role during the postoperative phase?",
      answer: "Break down sterile field, clean instruments, restock supplies",
      explanation: "Postoperative duties include cleanup, instrument processing, and room preparation for the next case."
    },
    {
      question: "What is the difference between clean and sterile technique?",
      answer: "Clean reduces microorganisms; sterile eliminates all microorganisms",
      explanation: "Clean technique reduces contamination while sterile technique maintains complete absence of microorganisms."
    },
    {
      question: "What is the proper way to open a sterile package?",
      answer: "Open flaps away from body first, then sides, then toward body last",
      explanation: "This sequence prevents reaching over the sterile field and maintains sterility."
    },
    {
      question: "What is the sterile conscience?",
      answer: "Inner voice that guides decisions about sterile technique",
      explanation: "Sterile conscience is the moral obligation to maintain sterility and report breaks in technique."
    },
    {
      question: "What should you do if you suspect a break in sterile technique?",
      answer: "Report it immediately and take corrective action",
      explanation: "Patient safety requires immediate action when sterility is compromised."
    },
    {
      question: "What is the proper height for a sterile field?",
      answer: "Between waist and mid-chest level",
      explanation: "This height range ensures the sterile field remains visible and accessible while maintaining sterility."
    },
    {
      question: "How long is a sterile gown considered sterile?",
      answer: "From 2 inches below neckline to waist, and sleeves to 2 inches above elbow",
      explanation: "Only specific areas of the gown are considered sterile once donned."
    },
    {
      question: "What is the proper order for surgical hand scrub?",
      answer: "Nails, fingers, hands, forearms to 2 inches above elbow",
      explanation: "Systematic scrubbing ensures all areas are properly cleaned."
    },
    {
      question: "What is considered the sterile field perimeter?",
      answer: "1 inch from the edge of any sterile drape or surface",
      explanation: "The 1-inch border is considered potentially contaminated."
    },
    {
      question: "What is surgical asepsis?",
      answer: "Practices that eliminate all microorganisms from instruments and environment",
      explanation: "Surgical asepsis creates and maintains a sterile environment for surgery."
    },
    {
      question: "What is medical asepsis?",
      answer: "Practices that reduce the number of microorganisms",
      explanation: "Medical asepsis involves cleanliness and infection control measures."
    },
    {
      question: "What is the purpose of surgical scrubs?",
      answer: "Remove transient bacteria and reduce resident flora on hands and arms",
      explanation: "Surgical scrubs prepare hands and arms for sterile gloving and surgery."
    },
    {
      question: "What is the minimum time for an initial surgical scrub?",
      answer: "3-5 minutes",
      explanation: "Initial scrubs require sufficient time to effectively reduce bacterial count."
    },
    {
      question: "What is a subsequent scrub?",
      answer: "2-3 minute scrub between cases on the same day",
      explanation: "Subsequent scrubs are shorter but still maintain proper technique."
    },
    {
      question: "What is the purpose of surgical attire?",
      answer: "Barrier protection and contamination control",
      explanation: "Surgical attire protects both patients and healthcare workers from contamination."
    },
    {
      question: "What are the components of standard surgical attire?",
      answer: "Scrubs, hair cover, mask, shoe covers, eye protection",
      explanation: "Complete surgical attire covers all potential sources of contamination."
    },
    {
      question: "When should surgical masks be changed?",
      answer: "Between cases, when wet, or if contaminated",
      explanation: "Masks lose effectiveness when wet or contaminated."
    },
    {
      question: "What is the purpose of hair covers?",
      answer: "Contain hair and prevent shedding into sterile field",
      explanation: "Hair is a major source of bacterial contamination in the OR."
    },
    {
      question: "What is the proper way to remove contaminated gloves?",
      answer: "Glove-to-glove, then skin-to-skin technique",
      explanation: "This technique prevents contamination during glove removal."
    },
    {
      question: "What is the role of the circulating nurse?",
      answer: "Unsterile team member who coordinates care and obtains supplies",
      explanation: "The circulator manages the OR environment and patient care activities."
    },
    {
      question: "What is the role of the scrub nurse or surgical technologist?",
      answer: "Sterile team member who passes instruments and maintains sterile field",
      explanation: "The scrub person works directly with the surgeon in the sterile field."
    },
    {
      question: "What is surgical conscience?",
      answer: "Moral obligation to maintain sterility and patient safety",
      explanation: "Surgical conscience guides ethical decision-making in the OR."
    },
    {
      question: "What is the purpose of the time-out procedure?",
      answer: "Verify correct patient, procedure, and site before incision",
      explanation: "Time-out prevents wrong-site, wrong-procedure, and wrong-patient surgery."
    },
    {
      question: "What information is verified during time-out?",
      answer: "Patient identity, procedure, site, position, implants, allergies",
      explanation: "Multiple safety checks are performed before surgery begins."
    },
    {
      question: "What is the Universal Protocol?",
      answer: "Standardized approach to prevent wrong-site, wrong-procedure surgery",
      explanation: "The Universal Protocol includes preoperative verification, site marking, and time-out."
    },
    {
      question: "What is the purpose of surgical site marking?",
      answer: "Clearly identify the operative site to prevent errors",
      explanation: "Site marking is done by the surgeon and verified multiple times."
    },
    {
      question: "Who is responsible for surgical site marking?",
      answer: "The surgeon performing the procedure",
      explanation: "Only the operating surgeon should mark the surgical site."
    },
    {
      question: "What is the chain of command in the OR?",
      answer: "Surgeon, anesthesiologist, charge nurse, circulator, scrub person",
      explanation: "Clear hierarchy ensures effective communication and decision-making."
    },
    {
      question: "What is the purpose of surgical counts?",
      answer: "Prevent retention of foreign objects in patients",
      explanation: "Counts ensure all items are accounted for before case completion."
    },
    {
      question: "When are surgical counts performed?",
      answer: "Before incision, during closure of cavities, and at skin closure",
      explanation: "Multiple count times provide safety checkpoints throughout surgery."
    },
    {
      question: "What items are typically counted during surgery?",
      answer: "Sponges, sharps (needles, blades), instruments, and small items",
      explanation: "All items that could be retained must be counted."
    },
    {
      question: "What happens if a count is incorrect?",
      answer: "Search for missing item, notify surgeon, consider X-ray",
      explanation: "Incorrect counts require immediate investigation and documentation."
    },
    {
      question: "What is the purpose of documentation in surgery?",
      answer: "Legal record, communication, quality improvement, billing",
      explanation: "Accurate documentation serves multiple important purposes."
    },
    {
      question: "What is HIPAA?",
      answer: "Health Insurance Portability and Accountability Act",
      explanation: "HIPAA protects patient health information privacy and security."
    },
    {
      question: "What is the purpose of preoperative patient assessment?",
      answer: "Identify risks, plan care, ensure patient safety",
      explanation: "Assessment helps the team prepare for potential complications."
    },
    {
      question: "What is informed consent?",
      answer: "Patient's agreement to treatment after understanding risks and benefits",
      explanation: "Informed consent ensures patients make educated decisions about their care."
    },
    {
      question: "What is the purpose of preoperative verification?",
      answer: "Confirm correct patient, procedure, site, and consent",
      explanation: "Verification prevents surgical errors and ensures patient safety."
    },
    {
      question: "What is the role of the anesthesia provider?",
      answer: "Manage patient's airway, breathing, circulation, and consciousness",
      explanation: "Anesthesia providers ensure patient safety and comfort during surgery."
    },
    {
      question: "What is the purpose of positioning the patient?",
      answer: "Provide surgical access while preventing injury",
      explanation: "Proper positioning balances surgical needs with patient safety."
    },
    {
      question: "What is the purpose of surgical draping?",
      answer: "Create and maintain a sterile field around the operative site",
      explanation: "Drapes establish boundaries between sterile and non-sterile areas."
    },
    {
      question: "What is the purpose of skin preparation?",
      answer: "Reduce bacterial count on the skin around the operative site",
      explanation: "Skin prep minimizes risk of surgical site infection."
    },
    {
      question: "What is electrosurgery safety?",
      answer: "Proper grounding, avoiding alcohol-based products, fire prevention",
      explanation: "Electrosurgery requires specific safety measures to prevent burns and fires."
    },
    {
      question: "What is the purpose of specimen handling?",
      answer: "Ensure proper identification, preservation, and transport for diagnosis",
      explanation: "Proper specimen handling is critical for accurate pathological diagnosis."
    },
    {
      question: "What is professional development for surgical technologists?",
      answer: "Continuing education, certification maintenance, skill advancement",
      explanation: "Ongoing learning ensures competency and career advancement."
    },
    {
      question: "What is the importance of teamwork in surgery?",
      answer: "Ensures patient safety, efficiency, and positive outcomes",
      explanation: "Effective teamwork is essential for successful surgical outcomes."
    },
    {
      question: "What is quality improvement in surgery?",
      answer: "Systematic approach to identify and improve surgical processes",
      explanation: "Quality improvement enhances patient safety and surgical outcomes."
    }
  ],
  'legal-ethics-risk': [
    {
      question: "What is malpractice?",
      answer: "Professional negligence that results in injury to a patient",
      explanation: "Malpractice occurs when healthcare providers fail to meet the standard of care."
    },
    {
      question: "What are the four elements of negligence?",
      answer: "Duty, breach of duty, causation, and damages",
      explanation: "All four elements must be present to establish negligence in a legal case."
    },
    {
      question: "What is informed consent?",
      answer: "Patient's voluntary agreement to treatment after understanding risks and alternatives",
      explanation: "Informed consent ensures patients make knowledgeable decisions about their care."
    },
    {
      question: "Who can give informed consent?",
      answer: "Competent adults, parents/guardians for minors, court-appointed guardians",
      explanation: "Only those with legal authority can provide valid consent."
    },
    {
      question: "What is assault in healthcare?",
      answer: "Threat or attempt to touch someone without consent",
      explanation: "Assault is the apprehension of unwanted physical contact."
    },
    {
      question: "What is battery in healthcare?",
      answer: "Actual unwanted or unauthorized physical contact",
      explanation: "Battery occurs when someone is touched without permission."
    },
    {
      question: "What is respondeat superior?",
      answer: "'Let the master answer' - employers are liable for employees' actions",
      explanation: "This legal doctrine holds institutions responsible for their employees' negligent acts."
    },
    {
      question: "What is scope of practice?",
      answer: "Legal boundaries of what a healthcare professional can do",
      explanation: "Scope of practice defines the procedures and activities each profession can perform."
    },
    {
      question: "What is the Good Samaritan Law?",
      answer: "Protects healthcare workers providing emergency care in good faith",
      explanation: "These laws encourage helping in emergencies by limiting liability."
    },
    {
      question: "What is HIPAA?",
      answer: "Health Insurance Portability and Accountability Act",
      explanation: "HIPAA protects patient health information privacy and confidentiality."
    },
    {
      question: "What is PHI?",
      answer: "Protected Health Information",
      explanation: "PHI includes any health information that can identify a specific patient."
    },
    {
      question: "What is the minimum necessary rule?",
      answer: "Only share the minimum health information needed for the purpose",
      explanation: "This HIPAA requirement limits unnecessary disclosure of patient information."
    },
    {
      question: "What is breach of confidentiality?",
      answer: "Unauthorized disclosure of patient information",
      explanation: "Sharing patient information without proper authorization violates trust and law."
    },
    {
      question: "What is the Patient Bill of Rights?",
      answer: "Document outlining patients' rights to quality care and respect",
      explanation: "These rights ensure patients receive appropriate, dignified healthcare."
    },
    {
      question: "What is advance directive?",
      answer: "Legal document stating patient's wishes for future medical care",
      explanation: "Advance directives guide care when patients cannot make decisions themselves."
    },
    {
      question: "What is a DNR order?",
      answer: "Do Not Resuscitate - order to withhold CPR if patient stops breathing/heartbeat",
      explanation: "DNR orders respect patient autonomy regarding end-of-life care."
    },
    {
      question: "What is living will?",
      answer: "Document specifying treatment preferences if patient becomes unable to communicate",
      explanation: "Living wills provide guidance for medical decisions when patients are incapacitated."
    },
    {
      question: "What is durable power of attorney for healthcare?",
      answer: "Legal document naming someone to make medical decisions if patient cannot",
      explanation: "This designates a surrogate decision-maker for healthcare choices."
    },
    {
      question: "What is the principle of autonomy?",
      answer: "Patient's right to make their own healthcare decisions",
      explanation: "Autonomy respects patients' ability to choose their own medical care."
    },
    {
      question: "What is the principle of beneficence?",
      answer: "Healthcare providers' duty to do good and benefit patients",
      explanation: "Beneficence requires acting in the patient's best interest."
    },
    {
      question: "What is the principle of non-maleficence?",
      answer: "'Do no harm' - avoid causing injury to patients",
      explanation: "Non-maleficence requires preventing harm whenever possible."
    },
    {
      question: "What is the principle of justice?",
      answer: "Fair distribution of benefits and burdens in healthcare",
      explanation: "Justice ensures equitable treatment and resource allocation."
    },
    {
      question: "What is veracity?",
      answer: "Truthfulness and honesty in patient care",
      explanation: "Veracity requires being honest with patients about their condition and treatment."
    },
    {
      question: "What is fidelity?",
      answer: "Faithfulness and loyalty to patients and commitments",
      explanation: "Fidelity involves keeping promises and maintaining trust with patients."
    },
    {
      question: "What is an incident report?",
      answer: "Documentation of unexpected events or potential safety issues",
      explanation: "Incident reports help identify and prevent future safety problems."
    },
    {
      question: "What should be included in an incident report?",
      answer: "Objective facts, time, people involved, actions taken",
      explanation: "Reports should be factual and descriptive without blame or opinion."
    },
    {
      question: "What is risk management?",
      answer: "Process of identifying and minimizing potential hazards and liability",
      explanation: "Risk management protects patients and healthcare organizations from harm."
    },
    {
      question: "What is quality assurance?",
      answer: "Systematic monitoring to ensure standards of care are met",
      explanation: "Quality assurance maintains and improves healthcare quality."
    },
    {
      question: "What is sentinel event?",
      answer: "Unexpected serious injury or death not related to patient's condition",
      explanation: "Sentinel events require immediate investigation and corrective action."
    },
    {
      question: "What is root cause analysis?",
      answer: "Systematic investigation to identify underlying causes of problems",
      explanation: "Root cause analysis helps prevent recurrence of serious events."
    },
    {
      question: "What is the chain of custody?",
      answer: "Documentation of who handled evidence and when",
      explanation: "Chain of custody ensures integrity of evidence in legal cases."
    },
    {
      question: "What is a coroner's case?",
      answer: "Death requiring investigation by medical examiner or coroner",
      explanation: "Certain deaths must be reported to legal authorities for investigation."
    },
    {
      question: "What deaths must be reported to the coroner?",
      answer: "Sudden, violent, suspicious, or unexplained deaths",
      explanation: "Legal requirements mandate reporting certain types of deaths."
    },
    {
      question: "What is organ donation consent?",
      answer: "Permission to harvest organs for transplantation after death",
      explanation: "Organ donation requires proper consent and follows specific protocols."
    },
    {
      question: "What is the Uniform Anatomical Gift Act?",
      answer: "Law governing organ and tissue donation",
      explanation: "This act provides legal framework for organ donation and transplantation."
    },
    {
      question: "What is patient abandonment?",
      answer: "Terminating care without proper notice or transfer arrangements",
      explanation: "Abandonment occurs when providers stop caring for patients inappropriately."
    },
    {
      question: "What is the doctrine of res ipsa loquitur?",
      answer: "'The thing speaks for itself' - negligence is obvious",
      explanation: "This legal doctrine applies when the injury wouldn't occur without negligence."
    },
    {
      question: "What is statute of limitations?",
      answer: "Time limit for filing a lawsuit",
      explanation: "Legal claims must be filed within specified time periods."
    },
    {
      question: "What is expert witness testimony?",
      answer: "Professional opinion on whether standard of care was met",
      explanation: "Expert witnesses help establish what care should have been provided."
    },
    {
      question: "What is the corporate liability doctrine?",
      answer: "Healthcare institutions' direct responsibility for patient safety",
      explanation: "Hospitals have independent duties beyond just employing competent staff."
    },
    {
      question: "What is the borrowed servant rule?",
      answer: "Surgeon may be liable for OR team members' actions during surgery",
      explanation: "The surgeon directing care may be responsible for team member negligence."
    },
    {
      question: "What is vicarious liability?",
      answer: "Being held responsible for another person's negligent actions",
      explanation: "Supervisors or employers may be liable for subordinates' mistakes."
    },
    {
      question: "What is the captain of the ship doctrine?",
      answer: "Surgeon is responsible for everything happening in their OR",
      explanation: "The operating surgeon may be liable for all OR team actions during surgery."
    },
    {
      question: "What is indemnification?",
      answer: "Protection against financial loss from legal claims",
      explanation: "Indemnification agreements shift liability between parties."
    },
    {
      question: "What is professional liability insurance?",
      answer: "Coverage for claims arising from professional services",
      explanation: "This insurance protects healthcare providers from malpractice claims."
    },
    {
      question: "What is occurrence-based insurance?",
      answer: "Coverage for incidents that occur during policy period",
      explanation: "Claims are covered regardless of when they're filed if incident occurred during coverage."
    },
    {
      question: "What is claims-made insurance?",
      answer: "Coverage for claims filed during policy period",
      explanation: "Both the incident and claim filing must occur during coverage period."
    },
    {
      question: "What is tail coverage?",
      answer: "Extended reporting period for claims-made policies",
      explanation: "Tail coverage protects against claims filed after policy expires."
    },
    {
      question: "What is the purpose of credentialing?",
      answer: "Verify qualifications and competency of healthcare providers",
      explanation: "Credentialing ensures providers meet standards before granting privileges."
    },
    {
      question: "What is privileging?",
      answer: "Authorization to perform specific procedures or services",
      explanation: "Privileges define what procedures a provider can perform at an institution."
    }
  ],
  'surgical-patient': [
    {
      question: "What is the preoperative phase?",
      answer: "Period from decision for surgery until patient enters OR",
      explanation: "Preoperative phase includes assessment, preparation, and patient education."
    },
    {
      question: "What is included in preoperative assessment?",
      answer: "Medical history, physical exam, lab tests, risk factors",
      explanation: "Comprehensive assessment identifies potential complications and guides care planning."
    },
    {
      question: "What are the purposes of preoperative testing?",
      answer: "Establish baseline, identify risks, guide anesthesia planning",
      explanation: "Testing helps ensure patient safety and optimal surgical outcomes."
    },
    {
      question: "What is NPO status?",
      answer: "Nothing by mouth - fasting before surgery",
      explanation: "NPO prevents aspiration during anesthesia induction."
    },
    {
      question: "What are typical NPO guidelines?",
      answer: "8 hours for solids, 6 hours for light meals, 2 hours for clear liquids",
      explanation: "Different foods require different fasting times for safe anesthesia."
    },
    {
      question: "What is bowel preparation?",
      answer: "Cleansing the intestines before abdominal or colorectal surgery",
      explanation: "Bowel prep reduces bacterial load and improves surgical visualization."
    },
    {
      question: "What is skin preparation?",
      answer: "Cleansing and disinfection of operative site",
      explanation: "Skin prep reduces microbial count to minimize infection risk."
    },
    {
      question: "What is surgical site marking?",
      answer: "Identifying and marking the correct operative site",
      explanation: "Site marking prevents wrong-site surgery and confirms correct location."
    },
    {
      question: "Who performs surgical site marking?",
      answer: "The surgeon who will perform the procedure",
      explanation: "Only the operating surgeon should mark the surgical site."
    },
    {
      question: "What is patient identification?",
      answer: "Verifying correct patient using two identifiers",
      explanation: "Proper identification prevents wrong-patient procedures."
    },
    {
      question: "What are acceptable patient identifiers?",
      answer: "Full name, date of birth, medical record number",
      explanation: "Two different identifiers must match patient, procedure, and records."
    },
    {
      question: "What is the purpose of premedication?",
      answer: "Reduce anxiety, provide sedation, prevent complications",
      explanation: "Premedication helps patients cope with surgical stress and anxiety."
    },
    {
      question: "What is informed consent?",
      answer: "Patient's agreement to surgery after understanding risks and benefits",
      explanation: "Informed consent ensures patients make educated decisions about their care."
    },
    {
      question: "What must be included in informed consent?",
      answer: "Procedure description, risks, benefits, alternatives, consequences of no treatment",
      explanation: "Complete information enables patients to make informed decisions."
    },
    {
      question: "What is the intraoperative phase?",
      answer: "Period from OR entry until transfer to recovery",
      explanation: "Intraoperative phase encompasses all activities during surgery."
    },
    {
      question: "What is patient positioning?",
      answer: "Placing patient to provide surgical access while preventing injury",
      explanation: "Proper positioning balances surgical needs with patient safety."
    },
    {
      question: "What are common surgical positions?",
      answer: "Supine, prone, lateral, lithotomy, Trendelenburg",
      explanation: "Different procedures require specific positions for optimal access."
    },
    {
      question: "What is supine position?",
      answer: "Patient lying on back with face up",
      explanation: "Supine is the most common position for many surgical procedures."
    },
    {
      question: "What is prone position?",
      answer: "Patient lying face down on abdomen",
      explanation: "Prone position provides access to posterior structures."
    },
    {
      question: "What is lateral position?",
      answer: "Patient lying on side",
      explanation: "Lateral position allows access to lateral structures like kidneys."
    },
    {
      question: "What is lithotomy position?",
      answer: "Patient supine with hips and knees flexed, legs in stirrups",
      explanation: "Lithotomy provides access for gynecologic and urologic procedures."
    },
    {
      question: "What is Trendelenburg position?",
      answer: "Patient supine with head lower than feet",
      explanation: "Trendelenburg improves venous return and displaces abdominal organs."
    },
    {
      question: "What are positioning complications?",
      answer: "Nerve damage, pressure ulcers, circulatory compromise",
      explanation: "Improper positioning can cause serious injury to patients."
    },
    {
      question: "What is pressure point padding?",
      answer: "Protection of bony prominences during surgery",
      explanation: "Padding prevents pressure ulcers and nerve damage during long procedures."
    },
    {
      question: "What is the purpose of urinary catheterization?",
      answer: "Monitor urine output, decompress bladder, prevent bladder injury",
      explanation: "Catheters serve multiple purposes during surgery and recovery."
    },
    {
      question: "What is the time-out procedure?",
      answer: "Final verification of patient, procedure, and site before incision",
      explanation: "Time-out is the final safety check before surgery begins."
    },
    {
      question: "When is time-out performed?",
      answer: "After patient positioned and draped, before incision",
      explanation: "Time-out occurs when the entire team is present and ready."
    },
    {
      question: "Who participates in time-out?",
      answer: "All team members present during procedure",
      explanation: "Everyone in the OR must participate in and verify time-out information."
    },
    {
      question: "What is monitored during anesthesia?",
      answer: "Heart rate, blood pressure, oxygen saturation, end-tidal CO2",
      explanation: "Continuous monitoring ensures patient safety during anesthesia."
    },
    {
      question: "What is the purpose of electrosurgical grounding?",
      answer: "Provide safe pathway for electrical current",
      explanation: "Proper grounding prevents electrical burns during electrosurgery."
    },
    {
      question: "What is hypothermia prevention?",
      answer: "Maintaining normal body temperature during surgery",
      explanation: "Preventing hypothermia reduces complications and improves outcomes."
    },
    {
      question: "What causes surgical hypothermia?",
      answer: "Cold OR, exposed body surface, anesthesia, cold fluids",
      explanation: "Multiple factors contribute to heat loss during surgery."
    },
    {
      question: "What are methods of warming patients?",
      answer: "Forced-air warmers, warmed blankets, heated fluids",
      explanation: "Active warming devices help maintain normal body temperature."
    },
    {
      question: "What is the postoperative phase?",
      answer: "Period from OR departure until recovery is complete",
      explanation: "Postoperative phase includes immediate recovery and healing."
    },
    {
      question: "What is PACU?",
      answer: "Post-Anesthesia Care Unit - recovery area after surgery",
      explanation: "PACU provides specialized care during emergence from anesthesia."
    },
    {
      question: "What is monitored in PACU?",
      answer: "Vital signs, consciousness level, pain, bleeding, breathing",
      explanation: "Close monitoring detects complications and ensures safe recovery."
    },
    {
      question: "What are PACU discharge criteria?",
      answer: "Stable vital signs, adequate pain control, alert, no complications",
      explanation: "Specific criteria ensure patients are safe for transfer or discharge."
    },
    {
      question: "What is post-operative nausea and vomiting (PONV)?",
      answer: "Common complication causing discomfort and delayed recovery",
      explanation: "PONV can be prevented and treated with antiemetic medications."
    },
    {
      question: "What factors increase PONV risk?",
      answer: "Female gender, non-smoking, motion sickness history, certain surgeries",
      explanation: "Risk factors help predict and prevent post-operative nausea."
    },
    {
      question: "What is pain assessment?",
      answer: "Evaluating patient's pain level and characteristics",
      explanation: "Regular pain assessment guides appropriate pain management."
    },
    {
      question: "What is multimodal pain management?",
      answer: "Using multiple methods to control pain effectively",
      explanation: "Combining approaches often provides better pain relief with fewer side effects."
    },
    {
      question: "What is patient-controlled analgesia (PCA)?",
      answer: "Device allowing patients to self-administer pain medication",
      explanation: "PCA gives patients control over pain relief within safe parameters."
    },
    {
      question: "What is wound assessment?",
      answer: "Evaluating surgical site for healing and complications",
      explanation: "Regular wound checks detect problems early for prompt treatment."
    },
    {
      question: "What are signs of wound infection?",
      answer: "Redness, swelling, warmth, purulent drainage, increased pain",
      explanation: "Early recognition of infection allows prompt treatment."
    },
    {
      question: "What is dehiscence?",
      answer: "Separation of wound edges or layers",
      explanation: "Dehiscence can range from superficial skin separation to complete wound opening."
    },
    {
      question: "What is evisceration?",
      answer: "Protrusion of internal organs through wound opening",
      explanation: "Evisceration is a surgical emergency requiring immediate intervention."
    },
    {
      question: "What is thromboembolism prevention?",
      answer: "Measures to prevent blood clots during and after surgery",
      explanation: "Prevention includes compression devices, early mobility, and anticoagulants."
    },
    {
      question: "What are risk factors for blood clots?",
      answer: "Immobility, surgery, cancer, obesity, smoking",
      explanation: "Multiple factors increase risk of dangerous blood clots."
    },
    {
      question: "What is early ambulation?",
      answer: "Getting patients moving as soon as safely possible",
      explanation: "Early mobility prevents complications and speeds recovery."
    },
    {
      question: "What is discharge planning?",
      answer: "Preparing patients for safe transition home or to next care level",
      explanation: "Planning ensures continuity of care and prevents readmissions."
    },
    {
      question: "What is included in discharge instructions?",
      answer: "Wound care, medications, activity restrictions, follow-up appointments",
      explanation: "Clear instructions help patients manage their recovery at home."
    },
    {
      question: "What is patient education importance?",
      answer: "Ensures patients understand their care and recovery expectations",
      explanation: "Education empowers patients to participate actively in their recovery."
    }
  ],
  'physical-environment-safety': [
    {
      question: "What is the ideal OR temperature?",
      answer: "68-73°F (20-23°C)",
      explanation: "Cool temperature reduces bacterial growth and prevents overheating in surgical attire."
    },
    {
      question: "What is the ideal OR humidity?",
      answer: "30-60% relative humidity",
      explanation: "Proper humidity prevents static electricity and bacterial growth."
    },
    {
      question: "How many air changes per hour are required in OR?",
      answer: "Minimum 15 total air changes, with at least 3 fresh air changes",
      explanation: "High air turnover dilutes contaminants and maintains air quality."
    },
    {
      question: "What type of air flow is used in ORs?",
      answer: "Positive pressure with laminar or turbulent flow",
      explanation: "Positive pressure keeps contaminated air from entering the OR."
    },
    {
      question: "What is the purpose of positive pressure in OR?",
      answer: "Prevents contaminated air from entering sterile areas",
      explanation: "Air flows from clean areas to less clean areas, maintaining sterility."
    },
    {
      question: "What type of lighting is used in OR?",
      answer: "High-intensity, shadow-free surgical lights",
      explanation: "Surgical lights provide optimal illumination without shadows or heat."
    },
    {
      question: "What is the recommended light intensity for surgery?",
      answer: "2,500-5,000 foot-candles at the surgical site",
      explanation: "Adequate lighting is essential for precise surgical work and safety."
    },
    {
      question: "What causes static electricity in OR?",
      answer: "Low humidity, synthetic materials, friction",
      explanation: "Static electricity can ignite flammable materials and damage electronics."
    },
    {
      question: "How is static electricity prevented?",
      answer: "Proper humidity, conductive flooring, grounding",
      explanation: "Multiple measures prevent dangerous static buildup."
    },
    {
      question: "What is the fire triangle?",
      answer: "Fuel, oxygen, and ignition source",
      explanation: "All three elements must be present for fire to occur."
    },
    {
      question: "What are common fuel sources in OR?",
      answer: "Alcohol-based prep solutions, drapes, gauze, hair",
      explanation: "Many OR materials are flammable and require careful handling."
    },
    {
      question: "What are ignition sources in OR?",
      answer: "Electrosurgery, lasers, heated probes, defibrillators",
      explanation: "Energy devices can ignite flammable materials if not used properly."
    },
    {
      question: "What oxygen levels increase fire risk?",
      answer: "Above 21% (room air)",
      explanation: "Higher oxygen concentrations make fires burn faster and hotter."
    },
    {
      question: "What is fire prevention in OR?",
      answer: "Control fuel, minimize oxygen, careful use of ignition sources",
      explanation: "Preventing fire requires managing all three elements of the fire triangle."
    },
    {
      question: "What should you do if OR fire occurs?",
      answer: "Stop procedure, remove burning material, extinguish fire, evacuate if needed",
      explanation: "Quick action can prevent serious injury from OR fires."
    },
    {
      question: "What type of fire extinguisher is used for electrical fires?",
      answer: "Class C (carbon dioxide or dry chemical)",
      explanation: "Class C extinguishers are safe for electrical equipment fires."
    },
    {
      question: "What is laser safety?",
      answer: "Protection from laser radiation through proper techniques and equipment",
      explanation: "Lasers require special safety measures to prevent eye and skin injury."
    },
    {
      question: "What PPE is required for laser procedures?",
      answer: "Wavelength-specific eyewear, non-reflective instruments",
      explanation: "Laser-specific protection prevents accidental exposure and reflection."
    },
    {
      question: "What is radiation safety?",
      answer: "Protection from ionizing radiation exposure",
      explanation: "Radiation protection follows ALARA principle: As Low As Reasonably Achievable."
    },
    {
      question: "What are the principles of radiation protection?",
      answer: "Time, distance, and shielding",
      explanation: "Minimize exposure time, maximize distance, use lead shielding."
    },
    {
      question: "What is biological waste?",
      answer: "Waste contaminated with blood or other potentially infectious materials",
      explanation: "Biohazardous waste requires special handling and disposal methods."
    },
    {
      question: "How is biological waste disposed?",
      answer: "Red bags, rigid containers, incineration or autoclaving",
      explanation: "Regulated medical waste must be properly contained and treated."
    },
    {
      question: "What are sharps?",
      answer: "Needles, scalpels, broken glass, and other items that can puncture",
      explanation: "Sharps pose injury and infection risks requiring special disposal."
    },
    {
      question: "How are sharps disposed?",
      answer: "Rigid, puncture-resistant containers",
      explanation: "Sharps containers prevent needlestick injuries and contamination."
    },
    {
      question: "What is chemical safety in OR?",
      answer: "Safe handling, storage, and disposal of hazardous chemicals",
      explanation: "Chemical safety protects staff from toxic, corrosive, or carcinogenic substances."
    },
    {
      question: "What is SDS?",
      answer: "Safety Data Sheet - provides chemical hazard information",
      explanation: "SDS contains vital safety information for all hazardous chemicals."
    },
    {
      question: "What is glutaraldehyde used for?",
      answer: "High-level disinfection of heat-sensitive instruments",
      explanation: "Glutaraldehyde is a potent disinfectant but requires careful handling."
    },
    {
      question: "What are glutaraldehyde safety measures?",
      answer: "Ventilation, PPE, exposure monitoring, proper disposal",
      explanation: "Glutaraldehyde can cause respiratory and skin irritation."
    },
    {
      question: "What is formaldehyde used for?",
      answer: "Tissue preservation and disinfection",
      explanation: "Formaldehyde is a known carcinogen requiring strict safety measures."
    },
    {
      question: "What is mercury safety?",
      answer: "Proper handling and disposal of mercury-containing devices",
      explanation: "Mercury is toxic and requires specialized cleanup and disposal."
    },
    {
      question: "What is latex allergy?",
      answer: "Allergic reaction to natural rubber latex proteins",
      explanation: "Latex allergy can cause mild skin reactions to life-threatening anaphylaxis."
    },
    {
      question: "How is latex allergy prevented?",
      answer: "Use non-latex gloves and equipment, latex-free environment",
      explanation: "Elimination of latex exposure prevents allergic reactions."
    },
    {
      question: "What is ergonomics?",
      answer: "Science of designing work to fit the worker",
      explanation: "Proper ergonomics prevents musculoskeletal injuries and fatigue."
    },
    {
      question: "What are ergonomic hazards in OR?",
      answer: "Heavy lifting, awkward positions, repetitive motions, prolonged standing",
      explanation: "OR work involves many factors that can cause injury over time."
    },
    {
      question: "What is proper body mechanics?",
      answer: "Using body efficiently to prevent injury during physical tasks",
      explanation: "Good body mechanics protect the spine and joints during work."
    },
    {
      question: "What is the purpose of OR traffic control?",
      answer: "Minimize contamination and maintain sterile environment",
      explanation: "Controlling movement reduces airborne contamination in the OR."
    },
    {
      question: "What are OR traffic patterns?",
      answer: "Designated pathways for sterile and non-sterile personnel",
      explanation: "Planned traffic flow reduces contamination and improves efficiency."
    },
    {
      question: "What is the sterile corridor concept?",
      answer: "Separate pathways for clean and contaminated items",
      explanation: "Sterile corridors prevent cross-contamination of supplies."
    },
    {
      question: "What is environmental cleaning?",
      answer: "Systematic cleaning and disinfection of OR surfaces",
      explanation: "Regular cleaning maintains the OR environment and prevents infection."
    },
    {
      question: "What is terminal cleaning?",
      answer: "Thorough cleaning and disinfection after each surgical case",
      explanation: "Terminal cleaning prepares the OR for the next patient."
    },
    {
      question: "What areas require cleaning between cases?",
      answer: "All surfaces within 3 feet of sterile field, equipment, floors",
      explanation: "The immediate surgical area requires thorough cleaning between cases."
    },
    {
      question: "What is daily cleaning?",
      answer: "Complete cleaning of entire OR suite",
      explanation: "Daily cleaning maintains overall OR cleanliness and safety."
    },
    {
      question: "What is weekly cleaning?",
      answer: "Deep cleaning including ceiling, walls, and equipment",
      explanation: "Weekly cleaning removes accumulated dust and contaminants."
    },
    {
      question: "What disinfectants are used for OR cleaning?",
      answer: "EPA-approved hospital disinfectants with broad antimicrobial activity",
      explanation: "OR cleaning requires effective disinfectants for patient safety."
    },
    {
      question: "What is the role of housekeeping in infection control?",
      answer: "Maintain clean environment and prevent cross-contamination",
      explanation: "Environmental services are essential partners in infection prevention."
    },
    {
      question: "What is air quality monitoring?",
      answer: "Testing air for particulates and microbial contamination",
      explanation: "Regular monitoring ensures air filtration systems work properly."
    },
    {
      question: "What is water quality in healthcare?",
      answer: "Monitoring for Legionella and other waterborne pathogens",
      explanation: "Water systems can harbor dangerous bacteria if not properly maintained."
    },
    {
      question: "What is construction infection control?",
      answer: "Preventing airborne contamination during building projects",
      explanation: "Construction activities can release harmful particles and organisms."
    },
    {
      question: "What is ICRA?",
      answer: "Infection Control Risk Assessment for construction activities",
      explanation: "ICRA evaluates infection risks and establishes protection measures."
    },
    {
      question: "What is emergency preparedness?",
      answer: "Planning for disasters and emergency situations",
      explanation: "Preparation ensures continued patient care during emergencies."
    },
    {
      question: "What are types of emergencies in healthcare?",
      answer: "Fire, power failure, natural disasters, security threats",
      explanation: "Healthcare facilities must prepare for various emergency scenarios."
    },
    {
      question: "What is the emergency action plan?",
      answer: "Written procedures for responding to different emergencies",
      explanation: "Emergency plans provide clear guidance for staff during crises."
    },
    {
      question: "What is evacuation planning?",
      answer: "Procedures for safely moving patients during emergencies",
      explanation: "Patient evacuation requires special planning due to medical needs."
    }
  ],
  'technological-science': [
    {
      question: "What is biomedical engineering?",
      answer: "Application of engineering principles to healthcare and medicine",
      explanation: "Biomedical engineering combines engineering with biological sciences to improve patient care."
    },
    {
      question: "What is electrosurgery?",
      answer: "Use of high-frequency electrical current for cutting and coagulation",
      explanation: "Electrosurgery allows precise cutting while controlling bleeding."
    },
    {
      question: "What are the types of electrosurgical current?",
      answer: "Monopolar and bipolar",
      explanation: "Monopolar uses one active electrode; bipolar uses two electrodes."
    },
    {
      question: "What is radiofrequency energy?",
      answer: "High-frequency electromagnetic energy used in surgery",
      explanation: "RF energy generates heat for cutting and coagulation of tissues."
    },
    {
      question: "What is the purpose of electrosurgical grounding?",
      answer: "Provide safe return path for electrical current",
      explanation: "Proper grounding prevents electrical burns and ensures patient safety."
    },
    {
      question: "What is laser technology?",
      answer: "Light Amplification by Stimulated Emission of Radiation",
      explanation: "Lasers produce coherent, focused light beams for precise surgical applications."
    },
    {
      question: "What are types of surgical lasers?",
      answer: "CO2, Nd:YAG, Argon, Diode, Excimer",
      explanation: "Different laser types have specific wavelengths and tissue interactions."
    },
    {
      question: "What is ultrasonic technology?",
      answer: "Use of high-frequency sound waves for cutting and coagulation",
      explanation: "Ultrasonic devices provide precise cutting with minimal thermal damage."
    },
    {
      question: "What is pneumatic technology?",
      answer: "Use of compressed air to power surgical instruments",
      explanation: "Pneumatic systems provide consistent power for drills and saws."
    },
    {
      question: "What is robotic surgery?",
      answer: "Minimally invasive surgery using computer-controlled instruments",
      explanation: "Robotic systems enhance precision and reduce invasiveness."
    },
    {
      question: "What is fiber optic technology?",
      answer: "Transmission of light through flexible glass fibers",
      explanation: "Fiber optics enable endoscopic visualization and laser delivery."
    },
    {
      question: "What is digital imaging?",
      answer: "Electronic capture and display of medical images",
      explanation: "Digital systems provide immediate, high-quality image visualization."
    },
    {
      question: "What is fluoroscopy?",
      answer: "Real-time X-ray imaging during procedures",
      explanation: "Fluoroscopy provides continuous visualization of internal structures."
    },
    {
      question: "What is ultrasound imaging?",
      answer: "Use of sound waves to create images of internal structures",
      explanation: "Ultrasound provides real-time imaging without ionizing radiation."
    },
    {
      question: "What is MRI compatibility?",
      answer: "Safe use of equipment in magnetic resonance environments",
      explanation: "MRI-compatible instruments prevent dangerous interactions with magnetic fields."
    },
    {
      question: "What is CT guidance?",
      answer: "Use of computed tomography for procedure navigation",
      explanation: "CT guidance enables precise placement of instruments and implants."
    },
    {
      question: "What is navigation surgery?",
      answer: "Computer-assisted surgical guidance using imaging",
      explanation: "Navigation systems improve accuracy in complex procedures."
    },
    {
      question: "What is microsurgery technology?",
      answer: "Surgical procedures performed under magnification",
      explanation: "Microsurgery enables repair of very small structures like vessels and nerves."
    },
    {
      question: "What is cryosurgery?",
      answer: "Use of extreme cold to destroy abnormal tissue",
      explanation: "Cryosurgery uses liquid nitrogen or argon gas for tissue destruction."
    },
    {
      question: "What is radiofrequency ablation?",
      answer: "Use of RF energy to destroy abnormal tissue",
      explanation: "RF ablation generates heat to treat tumors and arrhythmias."
    },
    {
      question: "What is photodynamic therapy?",
      answer: "Light-activated treatment for cancer and other conditions",
      explanation: "PDT uses light-sensitive drugs activated by specific wavelengths."
    },
    {
      question: "What is HIFU?",
      answer: "High-Intensity Focused Ultrasound for non-invasive treatment",
      explanation: "HIFU focuses ultrasound energy to treat tissue without incisions."
    },
    {
      question: "What is gamma knife?",
      answer: "Stereotactic radiosurgery system for brain treatment",
      explanation: "Gamma knife delivers precise radiation beams to brain lesions."
    },
    {
      question: "What is linear accelerator (LINAC)?",
      answer: "Device that produces high-energy X-rays for cancer treatment",
      explanation: "Linear accelerators deliver precise radiation therapy to tumors."
    },
    {
      question: "What is brachytherapy?",
      answer: "Internal radiation therapy using radioactive sources",
      explanation: "Brachytherapy places radiation sources directly in or near tumors."
    },
    {
      question: "What is minimally invasive surgery?",
      answer: "Surgical techniques using small incisions and specialized instruments",
      explanation: "MIS reduces trauma, pain, and recovery time compared to open surgery."
    },
    {
      question: "What is laparoscopy?",
      answer: "Minimally invasive abdominal surgery using small incisions",
      explanation: "Laparoscopy uses cameras and instruments through small ports."
    },
    {
      question: "What is thoracoscopy?",
      answer: "Minimally invasive chest surgery using small incisions",
      explanation: "Thoracoscopy enables chest procedures with reduced trauma."
    },
    {
      question: "What is arthroscopy?",
      answer: "Minimally invasive joint surgery using an endoscope",
      explanation: "Arthroscopy allows joint visualization and treatment through small incisions."
    },
    {
      question: "What is endoscopy?",
      answer: "Visual examination of internal structures using flexible or rigid scopes",
      explanation: "Endoscopy enables diagnosis and treatment through natural openings."
    },
    {
      question: "What is insufflation?",
      answer: "Introduction of gas into body cavity for visualization",
      explanation: "CO2 insufflation creates working space for laparoscopic surgery."
    },
    {
      question: "What is trocar placement?",
      answer: "Insertion of ports for laparoscopic instrument access",
      explanation: "Trocars provide sealed access points for minimally invasive surgery."
    },
    {
      question: "What is haptic feedback?",
      answer: "Tactile sensation provided by robotic surgical systems",
      explanation: "Haptic feedback helps surgeons feel tissue resistance and texture."
    },
    {
      question: "What is 3D visualization?",
      answer: "Three-dimensional imaging for enhanced surgical vision",
      explanation: "3D systems provide depth perception for improved surgical precision."
    },
    {
      question: "What is augmented reality in surgery?",
      answer: "Overlay of digital information on real surgical field",
      explanation: "AR enhances surgical visualization with computer-generated information."
    },
    {
      question: "What is virtual reality training?",
      answer: "Immersive simulation for surgical education",
      explanation: "VR provides safe environment for learning surgical skills."
    },
    {
      question: "What is artificial intelligence in surgery?",
      answer: "Computer systems that learn and assist in surgical decision-making",
      explanation: "AI can help with diagnosis, planning, and real-time surgical guidance."
    },
    {
      question: "What is machine learning?",
      answer: "Computer systems that improve through experience",
      explanation: "Machine learning analyzes data to improve surgical outcomes and safety."
    },
    {
      question: "What is telemedicine?",
      answer: "Remote healthcare delivery using technology",
      explanation: "Telemedicine enables consultation and monitoring from a distance."
    },
    {
      question: "What is telepresence surgery?",
      answer: "Remote surgical procedures using robotic systems",
      explanation: "Telepresence allows surgeons to operate from distant locations."
    },
    {
      question: "What is biocompatibility?",
      answer: "Ability of materials to interact safely with biological systems",
      explanation: "Biocompatible materials don't cause harmful reactions in the body."
    },
    {
      question: "What are smart materials?",
      answer: "Materials that respond to environmental changes",
      explanation: "Smart materials can change properties based on temperature, pH, or other factors."
    },
    {
      question: "What is nanotechnology in surgery?",
      answer: "Use of materials and devices at molecular scale",
      explanation: "Nanotechnology enables targeted drug delivery and precise diagnostics."
    },
    {
      question: "What is tissue engineering?",
      answer: "Creating living tissue substitutes for medical use",
      explanation: "Tissue engineering combines cells, scaffolds, and growth factors."
    },
    {
      question: "What is regenerative medicine?",
      answer: "Repair or replacement of damaged tissues and organs",
      explanation: "Regenerative medicine uses stem cells and biomaterials for healing."
    },
    {
      question: "What is gene therapy?",
      answer: "Treatment of disease by modifying genetic material",
      explanation: "Gene therapy can correct genetic defects or enhance immune responses."
    },
    {
      question: "What is biosensor technology?",
      answer: "Devices that detect biological or chemical changes",
      explanation: "Biosensors provide real-time monitoring of physiological parameters."
    },
    {
      question: "What is wireless monitoring?",
      answer: "Remote patient monitoring using wireless devices",
      explanation: "Wireless systems enable continuous monitoring without physical connections."
    },
    {
      question: "What is RFID technology?",
      answer: "Radio Frequency Identification for tracking and identification",
      explanation: "RFID enables automatic identification of patients, staff, and equipment."
    },
    {
      question: "What is barcode technology?",
      answer: "Optical scanning for identification and tracking",
      explanation: "Barcodes improve accuracy in medication administration and specimen handling."
    }
  ],
  'emergency-situations': [
    {
      question: "What is a medical emergency?",
      answer: "Sudden illness or injury requiring immediate intervention",
      explanation: "Medical emergencies threaten life or limb and require rapid response."
    },
    {
      question: "What is the chain of survival?",
      answer: "Early recognition, early CPR, early defibrillation, early advanced care",
      explanation: "Each link in the chain improves survival from cardiac arrest."
    },
    {
      question: "What is CPR?",
      answer: "Cardiopulmonary resuscitation - chest compressions and rescue breathing",
      explanation: "CPR maintains circulation and oxygenation when heart stops."
    },
    {
      question: "What is the compression rate for CPR?",
      answer: "100-120 compressions per minute",
      explanation: "Proper rate ensures adequate circulation during cardiac arrest."
    },
    {
      question: "What is the compression depth for adults?",
      answer: "At least 2 inches (5 cm) but not more than 2.4 inches (6 cm)",
      explanation: "Adequate depth is needed for effective circulation."
    },
    {
      question: "What is the compression-to-ventilation ratio?",
      answer: "30:2 for single rescuer, 15:2 for two rescuers with advanced airway",
      explanation: "Proper ratio balances circulation and oxygenation."
    },
    {
      question: "What is AED?",
      answer: "Automated External Defibrillator - device that analyzes and shocks heart rhythms",
      explanation: "AEDs can restore normal heart rhythm in some cardiac arrests."
    },
    {
      question: "What rhythms are shockable?",
      answer: "Ventricular fibrillation (VF) and ventricular tachycardia (VT)",
      explanation: "These rhythms can potentially be converted to normal rhythm with defibrillation."
    },
    {
      question: "What is anaphylaxis?",
      answer: "Severe, life-threatening allergic reaction",
      explanation: "Anaphylaxis can cause airway swelling, shock, and death without treatment."
    },
    {
      question: "What is the treatment for anaphylaxis?",
      answer: "Epinephrine (EpiPen), airway management, IV fluids, antihistamines",
      explanation: "Epinephrine is the first-line treatment for severe allergic reactions."
    },
    {
      question: "What is shock?",
      answer: "Inadequate perfusion of organs and tissues",
      explanation: "Shock results from inadequate oxygen delivery to meet metabolic needs."
    },
    {
      question: "What are types of shock?",
      answer: "Hypovolemic, cardiogenic, distributive (septic, neurogenic, anaphylactic)",
      explanation: "Different types of shock have different causes and treatments."
    },
    {
      question: "What is hypovolemic shock?",
      answer: "Shock caused by blood or fluid loss",
      explanation: "Hypovolemic shock results from decreased circulating volume."
    },
    {
      question: "What is cardiogenic shock?",
      answer: "Shock caused by heart failure",
      explanation: "The heart cannot pump enough blood to meet body's needs."
    },
    {
      question: "What is septic shock?",
      answer: "Shock caused by severe infection and inflammatory response",
      explanation: "Sepsis causes widespread inflammation and circulatory dysfunction."
    },
    {
      question: "What is hemorrhage control?",
      answer: "Methods to stop bleeding and prevent blood loss",
      explanation: "Rapid hemorrhage control is essential for patient survival."
    },
    {
      question: "What is the order of hemorrhage control?",
      answer: "Direct pressure, elevation, pressure points, tourniquet",
      explanation: "Start with least invasive methods and progress as needed."
    },
    {
      question: "When is a tourniquet indicated?",
      answer: "Severe extremity bleeding not controlled by other methods",
      explanation: "Tourniquets are life-saving but should be used judiciously."
    },
    {
      question: "What is airway obstruction?",
      answer: "Blockage of breathing passages",
      explanation: "Airway obstruction can be partial or complete and requires immediate action."
    },
    {
      question: "What are signs of airway obstruction?",
      answer: "Choking, stridor, inability to speak, cyanosis",
      explanation: "Recognition allows for prompt intervention to clear airway."
    },
    {
      question: "What is the Heimlich maneuver?",
      answer: "Abdominal thrusts to relieve choking",
      explanation: "Upward pressure on diaphragm forces air through airway to expel obstruction."
    },
    {
      question: "What is a surgical airway?",
      answer: "Emergency procedure to create breathing passage through neck",
      explanation: "Cricothyrotomy or tracheostomy when upper airway is blocked."
    },
    {
      question: "What is tension pneumothorax?",
      answer: "Air trapped in chest cavity compressing heart and blood vessels",
      explanation: "Life-threatening condition requiring immediate needle decompression."
    },
    {
      question: "What are signs of tension pneumothorax?",
      answer: "Chest pain, shortness of breath, decreased breath sounds, hypotension",
      explanation: "Recognition is critical as this condition is rapidly fatal without treatment."
    },
    {
      question: "What is cardiac tamponade?",
      answer: "Fluid around heart preventing normal filling",
      explanation: "Blood or fluid in pericardium compresses heart and reduces output."
    },
    {
      question: "What is pericardiocentesis?",
      answer: "Needle drainage of fluid from around the heart",
      explanation: "Emergency procedure to relieve cardiac tamponade."
    },
    {
      question: "What is stroke recognition?",
      answer: "Identifying signs of brain attack for rapid treatment",
      explanation: "Fast recognition and treatment can minimize brain damage."
    },
    {
      question: "What is FAST assessment?",
      answer: "Face drooping, Arm weakness, Speech difficulty, Time to call 911",
      explanation: "FAST helps identify stroke symptoms quickly."
    },
    {
      question: "What is hypoglycemia?",
      answer: "Low blood sugar causing altered mental status",
      explanation: "Hypoglycemia can cause confusion, seizures, and coma."
    },
    {
      question: "What is the treatment for hypoglycemia?",
      answer: "Glucose administration - oral if conscious, IV if unconscious",
      explanation: "Rapid glucose replacement reverses symptoms quickly."
    },
    {
      question: "What is hyperglycemia?",
      answer: "High blood sugar causing dehydration and metabolic problems",
      explanation: "Severe hyperglycemia can lead to diabetic ketoacidosis."
    },
    {
      question: "What is seizure management?",
      answer: "Protect from injury, turn on side, time seizure, don't restrain",
      explanation: "Most seizures stop on their own; protection from injury is key."
    },
    {
      question: "What is status epilepticus?",
      answer: "Seizure lasting more than 5 minutes or repeated seizures",
      explanation: "Medical emergency requiring immediate intervention with anticonvulsants."
    },
    {
      question: "What is malignant hyperthermia?",
      answer: "Life-threatening reaction to certain anesthetic agents",
      explanation: "Causes rapid rise in body temperature and muscle rigidity."
    },
    {
      question: "What triggers malignant hyperthermia?",
      answer: "Succinylcholine and volatile anesthetic agents",
      explanation: "Genetic predisposition causes abnormal calcium release in muscles."
    },
    {
      question: "What is the treatment for malignant hyperthermia?",
      answer: "Dantrolene, cooling measures, supportive care",
      explanation: "Dantrolene blocks calcium release and can be life-saving."
    },
    {
      question: "What is hypothermia?",
      answer: "Core body temperature below 95°F (35°C)",
      explanation: "Hypothermia impairs mental function and can be fatal."
    },
    {
      question: "What is hypothermia treatment?",
      answer: "Gradual rewarming, warm fluids, protect airway",
      explanation: "Slow rewarming prevents dangerous arrhythmias."
    },
    {
      question: "What is heat exhaustion?",
      answer: "Heat-related illness with dehydration and electrolyte imbalance",
      explanation: "Heat exhaustion can progress to life-threatening heat stroke."
    },
    {
      question: "What is heat stroke?",
      answer: "Life-threatening failure of body's cooling system",
      explanation: "Core temperature rises above 104°F with altered mental status."
    },
    {
      question: "What is emergency medication administration?",
      answer: "Rapid delivery of life-saving drugs during emergencies",
      explanation: "Route and timing are critical for emergency medications."
    },
    {
      question: "What are routes for emergency medications?",
      answer: "IV, IO (intraosseous), intratracheal, sublingual",
      explanation: "Different routes provide varying speed of drug delivery."
    },
    {
      question: "What is rapid sequence intubation?",
      answer: "Quick airway control using sedation and paralysis",
      explanation: "RSI provides secure airway in emergency situations."
    },
    {
      question: "What is bag-mask ventilation?",
      answer: "Manual ventilation using mask and self-inflating bag",
      explanation: "Bridge ventilation technique until definitive airway secured."
    },
    {
      question: "What is emergency thoracotomy?",
      answer: "Opening chest cavity during cardiac arrest from trauma",
      explanation: "Last-resort procedure for traumatic cardiac arrest."
    },
    {
      question: "What is massive transfusion protocol?",
      answer: "Rapid delivery of blood products for severe hemorrhage",
      explanation: "Balanced ratio of blood components improves survival."
    },
    {
      question: "What is triage?",
      answer: "Prioritizing patients based on severity and survivability",
      explanation: "Triage ensures resources go to those who benefit most."
    },
    {
      question: "What are triage categories?",
      answer: "Immediate, delayed, minimal, expectant",
      explanation: "Color-coded system helps organize patient priorities."
    },
    {
      question: "What is disaster preparedness?",
      answer: "Planning for mass casualty events and system disruption",
      explanation: "Preparation ensures continued care during disasters."
    },
    {
      question: "What is incident command system?",
      answer: "Organizational structure for emergency response",
      explanation: "ICS provides clear leadership and communication during emergencies."
    },
    {
      question: "What is personal protective equipment for emergencies?",
      answer: "Gear to protect responders from hazards",
      explanation: "PPE enables safe response to chemical, biological, or radiological emergencies."
    }
  ],
  'pharmacology-anesthesia': [
    {
      question: "What is pharmacokinetics?",
      answer: "How the body processes drugs - absorption, distribution, metabolism, excretion",
      explanation: "Pharmacokinetics determines drug concentration and duration of action."
    },
    {
      question: "What is pharmacodynamics?",
      answer: "How drugs affect the body - mechanisms and effects",
      explanation: "Pharmacodynamics explains the relationship between dose and response."
    },
    {
      question: "What is bioavailability?",
      answer: "Percentage of drug that reaches systemic circulation",
      explanation: "Route of administration affects how much drug is available to work."
    },
    {
      question: "What is half-life?",
      answer: "Time required for drug concentration to decrease by half",
      explanation: "Half-life determines dosing frequency and duration of effect."
    },
    {
      question: "What is first-pass metabolism?",
      answer: "Initial metabolism of oral drugs by liver before reaching circulation",
      explanation: "First-pass effect reduces bioavailability of some oral medications."
    },
    {
      question: "What are the types of anesthesia?",
      answer: "General, regional (spinal, epidural), local, sedation",
      explanation: "Different types provide varying levels of consciousness and pain control."
    },
    {
      question: "What is general anesthesia?",
      answer: "Reversible loss of consciousness and sensation",
      explanation: "General anesthesia affects the entire body and eliminates awareness."
    },
    {
      question: "What are the stages of general anesthesia?",
      answer: "Induction, maintenance, emergence, recovery",
      explanation: "Each stage requires different management and monitoring."
    },
    {
      question: "What is MAC?",
      answer: "Minimum Alveolar Concentration - potency measure for inhaled anesthetics",
      explanation: "MAC is the concentration preventing movement in 50% of patients."
    },
    {
      question: "What are volatile anesthetics?",
      answer: "Inhaled gases that provide general anesthesia",
      explanation: "Examples include isoflurane, sevoflurane, and desflurane."
    },
    {
      question: "What is nitrous oxide?",
      answer: "Inhaled anesthetic gas that provides analgesia and mild anesthesia",
      explanation: "N2O is often combined with other agents for balanced anesthesia."
    },
    {
      question: "What is propofol?",
      answer: "IV anesthetic for induction and maintenance of general anesthesia",
      explanation: "Propofol provides rapid onset and recovery with antiemetic properties."
    },
    {
      question: "What is etomidate?",
      answer: "IV anesthetic with minimal cardiovascular effects",
      explanation: "Etomidate is preferred for patients with cardiac compromise."
    },
    {
      question: "What is ketamine?",
      answer: "IV anesthetic that provides dissociative anesthesia",
      explanation: "Ketamine maintains airway reflexes and provides analgesia."
    },
    {
      question: "What are neuromuscular blocking agents?",
      answer: "Drugs that cause muscle relaxation by blocking acetylcholine",
      explanation: "NMBAs facilitate intubation and provide surgical relaxation."
    },
    {
      question: "What is succinylcholine?",
      answer: "Depolarizing neuromuscular blocking agent with rapid onset",
      explanation: "Succinylcholine provides quick paralysis for emergency intubation."
    },
    {
      question: "What are non-depolarizing NMBAs?",
      answer: "Muscle relaxants that compete with acetylcholine at receptors",
      explanation: "Examples include vecuronium, rocuronium, and atracurium."
    },
    {
      question: "What is reversal of neuromuscular blockade?",
      answer: "Drugs that restore muscle function after paralysis",
      explanation: "Neostigmine and sugammadex reverse different types of blockade."
    },
    {
      question: "What is local anesthesia?",
      answer: "Temporary loss of sensation in specific body area",
      explanation: "Local anesthetics block nerve conduction in targeted region."
    },
    {
      question: "What is the mechanism of local anesthetics?",
      answer: "Block sodium channels to prevent nerve impulse transmission",
      explanation: "Sodium channel blockade prevents action potential propagation."
    },
    {
      question: "What are ester local anesthetics?",
      answer: "Procaine, chloroprocaine, tetracaine",
      explanation: "Esters are metabolized by plasma cholinesterases."
    },
    {
      question: "What are amide local anesthetics?",
      answer: "Lidocaine, bupivacaine, mepivacaine",
      explanation: "Amides are metabolized by the liver and have longer duration."
    },
    {
      question: "What is epinephrine's role in local anesthetics?",
      answer: "Vasoconstriction to prolong duration and reduce bleeding",
      explanation: "Epinephrine slows absorption and extends anesthetic effect."
    },
    {
      question: "What is local anesthetic toxicity?",
      answer: "Systemic effects from excessive absorption or injection",
      explanation: "Toxicity affects cardiovascular and central nervous systems."
    },
    {
      question: "What is spinal anesthesia?",
      answer: "Injection of local anesthetic into cerebrospinal fluid",
      explanation: "Spinal blocks provide anesthesia below the injection level."
    },
    {
      question: "What is epidural anesthesia?",
      answer: "Injection of local anesthetic into epidural space",
      explanation: "Epidural provides segmental anesthesia and can be continuous."
    },
    {
      question: "What is the difference between spinal and epidural?",
      answer: "Spinal penetrates dura; epidural stays outside dural sac",
      explanation: "Location affects onset, duration, and complications."
    },
    {
      question: "What are opioids?",
      answer: "Drugs that bind to opioid receptors to provide analgesia",
      explanation: "Opioids are the primary drugs for moderate to severe pain."
    },
    {
      question: "What are types of opioid receptors?",
      answer: "Mu, kappa, delta receptors",
      explanation: "Different receptors mediate analgesia, sedation, and side effects."
    },
    {
      question: "What is morphine?",
      answer: "Standard opioid analgesic for severe pain",
      explanation: "Morphine is the prototype opioid with predictable effects."
    },
    {
      question: "What is fentanyl?",
      answer: "Potent synthetic opioid with rapid onset and short duration",
      explanation: "Fentanyl is 100 times more potent than morphine."
    },
    {
      question: "What is remifentanil?",
      answer: "Ultra-short acting opioid metabolized by plasma esterases",
      explanation: "Remifentanil allows precise control of analgesia during surgery."
    },
    {
      question: "What is opioid tolerance?",
      answer: "Decreased response requiring higher doses for same effect",
      explanation: "Tolerance develops with repeated exposure to opioids."
    },
    {
      question: "What is opioid withdrawal?",
      answer: "Physical symptoms when opioids are stopped abruptly",
      explanation: "Withdrawal includes nausea, sweating, agitation, and pain."
    },
    {
      question: "What is naloxone?",
      answer: "Opioid antagonist that reverses opioid effects",
      explanation: "Naloxone can reverse opioid overdose and respiratory depression."
    },
    {
      question: "What are NSAIDs?",
      answer: "Non-steroidal anti-inflammatory drugs that inhibit COX enzymes",
      explanation: "NSAIDs reduce inflammation, pain, and fever."
    },
    {
      question: "What is the mechanism of NSAIDs?",
      answer: "Inhibit cyclooxygenase enzymes that produce prostaglandins",
      explanation: "Prostaglandin reduction decreases inflammation and pain."
    },
    {
      question: "What are COX-1 and COX-2?",
      answer: "Enzymes that produce different prostaglandins",
      explanation: "COX-1 protects stomach; COX-2 mediates inflammation."
    },
    {
      question: "What are NSAID side effects?",
      answer: "GI bleeding, kidney dysfunction, cardiovascular risks",
      explanation: "NSAIDs can cause serious complications, especially with chronic use."
    },
    {
      question: "What is acetaminophen?",
      answer: "Analgesic and antipyretic without anti-inflammatory effects",
      explanation: "Acetaminophen is safe for most patients but can cause liver toxicity."
    },
    {
      question: "What is multimodal analgesia?",
      answer: "Using multiple pain medications with different mechanisms",
      explanation: "Combination therapy provides better pain control with fewer side effects."
    },
    {
      question: "What are benzodiazepines?",
      answer: "Sedative drugs that enhance GABA neurotransmitter effects",
      explanation: "Benzodiazepines provide sedation, anxiolysis, and amnesia."
    },
    {
      question: "What is midazolam?",
      answer: "Short-acting benzodiazepine used for premedication and sedation",
      explanation: "Midazolam provides reliable sedation with relatively quick recovery."
    },
    {
      question: "What is flumazenil?",
      answer: "Benzodiazepine antagonist that reverses sedation",
      explanation: "Flumazenil can reverse benzodiazepine overdose or oversedation."
    },
    {
      question: "What is conscious sedation?",
      answer: "Mild to moderate sedation maintaining protective reflexes",
      explanation: "Patients remain responsive and can maintain their airway."
    },
    {
      question: "What is deep sedation?",
      answer: "Heavy sedation with risk of losing protective reflexes",
      explanation: "Deep sedation requires careful monitoring and airway management."
    },
    {
      question: "What are antiemetics?",
      answer: "Drugs that prevent or treat nausea and vomiting",
      explanation: "Antiemetics improve patient comfort and prevent complications."
    },
    {
      question: "What is ondansetron?",
      answer: "5-HT3 receptor antagonist that prevents nausea and vomiting",
      explanation: "Ondansetron is effective for chemotherapy and post-operative nausea."
    },
    {
      question: "What is droperidol?",
      answer: "Antipsychotic drug with strong antiemetic properties",
      explanation: "Droperidol is effective but can cause QT prolongation."
    },
    {
      question: "What are vasoactive drugs?",
      answer: "Medications that affect blood vessel tone and blood pressure",
      explanation: "Vasopressors and vasodilators manage hemodynamic instability."
    }
  ],
  'instrumentation-equipment': [
    {
      question: "What is the purpose of surgical instruments?",
      answer: "Extend surgeon's capabilities for cutting, grasping, and manipulation",
      explanation: "Instruments allow precise surgical techniques and tissue handling."
    },
    {
      question: "What are the basic categories of surgical instruments?",
      answer: "Cutting, grasping, clamping, retracting, and suturing",
      explanation: "Each category serves specific functions during surgical procedures."
    },
    {
      question: "What is a scalpel?",
      answer: "Sharp cutting instrument with replaceable blade",
      explanation: "Scalpels provide precise incisions and are available in various blade sizes."
    },
    {
      question: "What are Mayo scissors used for?",
      answer: "Cutting heavy tissue and sutures",
      explanation: "Mayo scissors have blunt tips and curved or straight blades for tissue cutting."
    },
    {
      question: "What are Metzenbaum scissors used for?",
      answer: "Delicate tissue dissection and cutting",
      explanation: "Metzenbaum scissors are finer and used for precise tissue work."
    },
    {
      question: "What is the difference between curved and straight scissors?",
      answer: "Curved follow body contours; straight for linear cutting",
      explanation: "Blade shape determines optimal use based on surgical approach."
    },
    {
      question: "What are hemostats used for?",
      answer: "Clamping blood vessels to control bleeding",
      explanation: "Hemostats compress vessels temporarily until permanent control achieved."
    },
    {
      question: "What is the difference between Kelly and Crile clamps?",
      answer: "Kelly has transverse serrations; Crile has longitudinal serrations",
      explanation: "Serration patterns affect gripping strength and tissue trauma."
    },
    {
      question: "What are Allis clamps used for?",
      answer: "Grasping tissue with minimal trauma",
      explanation: "Allis clamps have multiple teeth for secure tissue grip."
    },
    {
      question: "What are Babcock clamps used for?",
      answer: "Gently grasping delicate tissues like bowel",
      explanation: "Babcock clamps have rounded tips to minimize tissue damage."
    },
    {
      question: "What are forceps used for?",
      answer: "Grasping and manipulating tissues",
      explanation: "Forceps provide controlled grip for tissue handling and suturing."
    },
    {
      question: "What is the difference between toothed and smooth forceps?",
      answer: "Toothed for firm grip; smooth for delicate tissues",
      explanation: "Teeth provide secure hold while smooth tips prevent tissue damage."
    },
    {
      question: "What are retractors used for?",
      answer: "Holding tissues away from operative site for visualization",
      explanation: "Retractors provide exposure by moving tissues out of the way."
    },
    {
      question: "What are self-retaining retractors?",
      answer: "Retractors that maintain position without manual holding",
      explanation: "Self-retaining retractors free up hands for other surgical tasks."
    },
    {
      question: "What is a Weitlaner retractor?",
      answer: "Self-retaining retractor with sharp or blunt prongs",
      explanation: "Weitlaner retractors spread tissues and maintain exposure."
    },
    {
      question: "What is a Balfour retractor?",
      answer: "Large self-retaining abdominal retractor",
      explanation: "Balfour retractors provide wide exposure for abdominal procedures."
    },
    {
      question: "What are needle holders used for?",
      answer: "Grasping and controlling suture needles",
      explanation: "Needle holders provide secure grip and precise needle manipulation."
    },
    {
      question: "What is the difference between Mayo-Hegar and Debakey needle holders?",
      answer: "Mayo-Hegar has gold handles; Debakey has carbide inserts",
      explanation: "Different designs optimize grip and durability for various sutures."
    },
    {
      question: "What are suture scissors used for?",
      answer: "Cutting sutures close to tissue",
      explanation: "Suture scissors have fine tips for precise suture cutting."
    },
    {
      question: "What is electrosurgical equipment?",
      answer: "Devices using electrical current for cutting and coagulation",
      explanation: "Electrosurgery allows precise cutting while controlling bleeding."
    },
    {
      question: "What is the difference between monopolar and bipolar electrosurgery?",
      answer: "Monopolar uses one active electrode; bipolar uses two",
      explanation: "Current path differs affecting precision and safety considerations."
    },
    {
      question: "What is an ESU?",
      answer: "Electrosurgical Unit - generates high-frequency current",
      explanation: "ESU provides various waveforms for cutting and coagulation."
    },
    {
      question: "What is the active electrode?",
      answer: "Electrode that delivers electrical energy to tissue",
      explanation: "Active electrode concentrates current for surgical effect."
    },
    {
      question: "What is the dispersive electrode?",
      answer: "Large electrode that safely returns current to generator",
      explanation: "Dispersive electrode prevents burns by spreading current over large area."
    },
    {
      question: "What is coagulation mode?",
      answer: "Interrupted current that stops bleeding by sealing vessels",
      explanation: "Coag mode uses damped waveform to coagulate proteins."
    },
    {
      question: "What is cutting mode?",
      answer: "Continuous current that cuts through tissue",
      explanation: "Cut mode uses continuous waveform for smooth tissue division."
    },
    {
      question: "What is blend mode?",
      answer: "Combination of cutting and coagulation",
      explanation: "Blend provides cutting with some hemostasis for reduced bleeding."
    },
    {
      question: "What are lasers used for in surgery?",
      answer: "Precise cutting, coagulation, and tissue ablation",
      explanation: "Lasers provide controlled energy delivery for various surgical applications."
    },
    {
      question: "What is a CO2 laser?",
      answer: "Infrared laser absorbed by water for precise cutting",
      explanation: "CO2 lasers are excellent for superficial cutting with minimal damage."
    },
    {
      question: "What is an Nd:YAG laser?",
      answer: "Near-infrared laser that penetrates deeply into tissue",
      explanation: "Nd:YAG lasers are used for coagulation and treatment of vascular lesions."
    },
    {
      question: "What is ultrasonic technology?",
      answer: "High-frequency vibrations for cutting and coagulation",
      explanation: "Ultrasonic devices provide precise cutting with minimal thermal damage."
    },
    {
      question: "What is a harmonic scalpel?",
      answer: "Ultrasonic device that cuts and coagulates simultaneously",
      explanation: "Harmonic technology reduces thermal spread compared to electrosurgery."
    },
    {
      question: "What is endoscopic equipment?",
      answer: "Instruments for minimally invasive surgery through small incisions",
      explanation: "Endoscopic tools enable surgery through natural openings or ports."
    },
    {
      question: "What is a laparoscope?",
      answer: "Rigid telescope for visualizing abdominal cavity",
      explanation: "Laparoscopes provide magnified view of internal structures."
    },
    {
      question: "What is insufflation?",
      answer: "Introduction of gas to create working space",
      explanation: "CO2 insufflation separates organs for better visualization."
    },
    {
      question: "What are trocars?",
      answer: "Ports that provide sealed access for laparoscopic instruments",
      explanation: "Trocars maintain pneumoperitoneum while allowing instrument passage."
    },
    {
      question: "What is a pneumatic tourniquet?",
      answer: "Inflatable cuff that stops blood flow to extremity",
      explanation: "Tourniquets create bloodless field for extremity surgery."
    },
    {
      question: "What is the maximum tourniquet time?",
      answer: "2 hours for upper extremity, 2.5 hours for lower extremity",
      explanation: "Time limits prevent ischemic injury to tissues."
    },
    {
      question: "What is suction equipment?",
      answer: "Devices that remove blood and fluids from surgical site",
      explanation: "Suction maintains clear visualization by removing debris."
    },
    {
      question: "What are the types of suction tips?",
      answer: "Yankauer, Poole, Frazier",
      explanation: "Different tips optimize suction for specific surgical needs."
    },
    {
      question: "What is irrigation equipment?",
      answer: "Devices that flush surgical sites with sterile fluid",
      explanation: "Irrigation cleans tissues and maintains moisture."
    },
    {
      question: "What is pulsatile lavage?",
      answer: "High-pressure irrigation system for wound cleaning",
      explanation: "Pulsatile lavage removes debris and bacteria from wounds."
    },
    {
      question: "What is a microscope?",
      answer: "Optical instrument that magnifies surgical field",
      explanation: "Microscopes enable precision work on small structures."
    },
    {
      question: "What is microsurgical instrumentation?",
      answer: "Miniaturized instruments for procedures under magnification",
      explanation: "Micro instruments allow manipulation of delicate structures."
    },
    {
      question: "What is robotic surgery equipment?",
      answer: "Computer-controlled instruments for minimally invasive surgery",
      explanation: "Robotic systems enhance precision and reduce surgeon fatigue."
    },
    {
      question: "What are the advantages of robotic surgery?",
      answer: "Enhanced dexterity, tremor filtration, 3D visualization",
      explanation: "Robotic systems improve surgical precision and capabilities."
    },
    {
      question: "What is power equipment?",
      answer: "Electrically or pneumatically powered surgical tools",
      explanation: "Power tools provide controlled cutting and drilling capabilities."
    },
    {
      question: "What are the types of power sources?",
      answer: "Electric, pneumatic, battery",
      explanation: "Different power sources have advantages for specific applications."
    },
    {
      question: "What is instrument care and maintenance?",
      answer: "Proper cleaning, sterilization, and storage to ensure function",
      explanation: "Maintenance preserves instrument integrity and patient safety."
    },
    {
      question: "What causes instrument damage?",
      answer: "Improper handling, cleaning, sterilization, or storage",
      explanation: "Damage reduces instrument effectiveness and increases costs."
    }
  ],
  'hemostasis-wound-healing': [
    {
      question: "What is hemostasis?",
      answer: "Process of stopping bleeding through blood clot formation",
      explanation: "Hemostasis involves vasoconstriction, platelet aggregation, and coagulation cascade."
    },
    {
      question: "What are the phases of hemostasis?",
      answer: "Vascular spasm, platelet plug formation, coagulation, fibrinolysis",
      explanation: "Each phase contributes to stopping bleeding and eventual clot removal."
    },
    {
      question: "What is primary hemostasis?",
      answer: "Initial response involving vasoconstriction and platelet aggregation",
      explanation: "Primary hemostasis forms the initial platelet plug to stop bleeding."
    },
    {
      question: "What is secondary hemostasis?",
      answer: "Coagulation cascade forming fibrin to strengthen clot",
      explanation: "Secondary hemostasis reinforces the platelet plug with fibrin mesh."
    },
    {
      question: "What is the coagulation cascade?",
      answer: "Series of enzyme reactions leading to fibrin formation",
      explanation: "Cascade amplifies the clotting response through intrinsic and extrinsic pathways."
    },
    {
      question: "What is the intrinsic pathway?",
      answer: "Coagulation initiated by contact with damaged vessel surface",
      explanation: "Intrinsic pathway starts with factor XII activation by exposed collagen."
    },
    {
      question: "What is the extrinsic pathway?",
      answer: "Coagulation initiated by tissue factor released from damaged tissue",
      explanation: "Extrinsic pathway is faster and triggered by tissue thromboplastin."
    },
    {
      question: "What is fibrin?",
      answer: "Protein polymer that forms the structural framework of blood clots",
      explanation: "Fibrin creates mesh that traps blood cells to form stable clot."
    },
    {
      question: "What is thrombin?",
      answer: "Enzyme that converts fibrinogen to fibrin",
      explanation: "Thrombin is the key enzyme in clot formation and amplifies coagulation."
    },
    {
      question: "What factors affect hemostasis?",
      answer: "Age, medications, diseases, nutrition, temperature",
      explanation: "Multiple factors can impair normal clotting mechanisms."
    },
    {
      question: "What is anticoagulation?",
      answer: "Prevention of blood clot formation",
      explanation: "Anticoagulants reduce thrombosis risk but increase bleeding risk."
    },
    {
      question: "What are common anticoagulants?",
      answer: "Heparin, warfarin, direct oral anticoagulants (DOACs)",
      explanation: "Different anticoagulants work through various mechanisms."
    },
    {
      question: "What is INR?",
      answer: "International Normalized Ratio - measures warfarin effect",
      explanation: "INR standardizes prothrombin time measurements across laboratories."
    },
    {
      question: "What is surgical hemostasis?",
      answer: "Methods used during surgery to control bleeding",
      explanation: "Surgical hemostasis includes mechanical, thermal, and chemical methods."
    },
    {
      question: "What are mechanical methods of hemostasis?",
      answer: "Pressure, ligation, clips, sutures",
      explanation: "Mechanical methods physically compress or occlude bleeding vessels."
    },
    {
      question: "What are thermal methods of hemostasis?",
      answer: "Electrosurgery, laser, ultrasonic energy",
      explanation: "Thermal methods use heat to coagulate proteins and seal vessels."
    },
    {
      question: "What are chemical hemostatic agents?",
      answer: "Topical agents that promote clotting",
      explanation: "Chemical agents include absorbable gelatin, cellulose, and thrombin."
    },
    {
      question: "What is gelfoam?",
      answer: "Absorbable gelatin sponge that promotes clotting",
      explanation: "Gelfoam provides matrix for clot formation and is absorbed by body."
    },
    {
      question: "What is surgicel?",
      answer: "Oxidized cellulose that provides hemostasis",
      explanation: "Surgicel swells when wet and applies pressure while promoting clotting."
    },
    {
      question: "What is thrombin?",
      answer: "Topical enzyme that directly converts fibrinogen to fibrin",
      explanation: "Topical thrombin provides immediate local clotting."
    },
    {
      question: "What is fibrin sealant?",
      answer: "Two-component system that forms fibrin clot",
      explanation: "Fibrin sealant mimics final step of coagulation cascade."
    },
    {
      question: "What is wound healing?",
      answer: "Complex process of tissue repair and regeneration",
      explanation: "Wound healing involves inflammation, proliferation, and remodeling phases."
    },
    {
      question: "What are the phases of wound healing?",
      answer: "Hemostasis, inflammation, proliferation, maturation",
      explanation: "Each phase has specific cellular and molecular events."
    },
    {
      question: "What is the inflammatory phase?",
      answer: "Initial response with vasodilation and white cell recruitment",
      explanation: "Inflammation cleans wound and prepares for healing."
    },
    {
      question: "What is the proliferative phase?",
      answer: "New tissue formation including granulation and epithelialization",
      explanation: "Proliferation rebuilds tissue structure and covers wound."
    },
    {
      question: "What is the maturation phase?",
      answer: "Collagen remodeling and scar formation",
      explanation: "Maturation strengthens repair and can last months to years."
    },
    {
      question: "What is granulation tissue?",
      answer: "New tissue with blood vessels and fibroblasts",
      explanation: "Granulation tissue fills wound defects and supports healing."
    },
    {
      question: "What is epithelialization?",
      answer: "Migration of skin cells to cover wound surface",
      explanation: "Epithelialization restores barrier function of skin."
    },
    {
      question: "What factors promote wound healing?",
      answer: "Good nutrition, adequate blood flow, moist environment, rest",
      explanation: "Optimal conditions support cellular processes of healing."
    },
    {
      question: "What factors impair wound healing?",
      answer: "Infection, poor nutrition, diabetes, smoking, steroids",
      explanation: "These factors interfere with cellular metabolism and healing."
    },
    {
      question: "What is primary intention healing?",
      answer: "Healing of clean, well-approximated wound edges",
      explanation: "Primary healing occurs when wound edges are brought together surgically."
    },
    {
      question: "What is secondary intention healing?",
      answer: "Healing by granulation when wound edges cannot be approximated",
      explanation: "Secondary healing fills large defects with granulation tissue."
    },
    {
      question: "What is tertiary intention healing?",
      answer: "Delayed closure after initial healing by secondary intention",
      explanation: "Tertiary healing is used when infection risk is high initially."
    },
    {
      question: "What is wound dehiscence?",
      answer: "Separation of previously closed wound edges",
      explanation: "Dehiscence can be superficial or deep and may require repair."
    },
    {
      question: "What is evisceration?",
      answer: "Protrusion of internal organs through wound opening",
      explanation: "Evisceration is surgical emergency requiring immediate repair."
    },
    {
      question: "What causes wound complications?",
      answer: "Infection, poor technique, patient factors, foreign bodies",
      explanation: "Multiple factors can interfere with normal healing process."
    },
    {
      question: "What is wound infection?",
      answer: "Bacterial contamination that impairs healing",
      explanation: "Infection delays healing and can cause systemic illness."
    },
    {
      question: "What are signs of wound infection?",
      answer: "Redness, swelling, warmth, purulent drainage, pain",
      explanation: "Classic signs indicate inflammatory response to bacteria."
    },
    {
      question: "What is surgical site infection (SSI)?",
      answer: "Infection occurring at or near surgical incision",
      explanation: "SSI classification depends on depth and tissue involvement."
    },
    {
      question: "What are types of surgical site infections?",
      answer: "Superficial incisional, deep incisional, organ/space",
      explanation: "Classification helps guide treatment and prevention strategies."
    },
    {
      question: "How can SSI be prevented?",
      answer: "Sterile technique, prophylactic antibiotics, proper skin prep",
      explanation: "Multiple strategies reduce infection risk during surgery."
    },
    {
      question: "What is wound classification?",
      answer: "System categorizing wounds by contamination level",
      explanation: "Classification predicts infection risk and guides antibiotic use."
    },
    {
      question: "What are the wound classes?",
      answer: "Clean, clean-contaminated, contaminated, dirty/infected",
      explanation: "Each class has different infection rates and treatment protocols."
    },
    {
      question: "What is a clean wound?",
      answer: "Uninfected wound with no inflammation or technique breaks",
      explanation: "Clean wounds have lowest infection risk (less than 2%)."
    },
    {
      question: "What is a clean-contaminated wound?",
      answer: "Wound entering hollow organ under controlled conditions",
      explanation: "Clean-contaminated wounds have slightly higher infection risk."
    },
    {
      question: "What is a contaminated wound?",
      answer: "Wound with significant bacterial contamination",
      explanation: "Contaminated wounds require irrigation and possible delayed closure."
    },
    {
      question: "What is drainage?",
      answer: "Removal of fluids from surgical sites",
      explanation: "Drainage prevents fluid accumulation and promotes healing."
    },
    {
      question: "What are types of drains?",
      answer: "Passive (gravity) and active (suction)",
      explanation: "Different drains have specific indications and mechanisms."
    },
    {
      question: "What is a Jackson-Pratt drain?",
      answer: "Closed suction drain with squeeze bulb",
      explanation: "JP drains provide consistent suction for fluid removal."
    },
    {
      question: "What is a Hemovac drain?",
      answer: "Closed suction drain with spring-loaded reservoir",
      explanation: "Hemovac drains maintain steady suction pressure."
    },
    {
      question: "When are drains removed?",
      answer: "When output decreases to acceptable level",
      explanation: "Timing depends on output volume and character."
    },
    {
      question: "What is seroma?",
      answer: "Collection of serum under skin",
      explanation: "Seromas can form when tissue planes are separated."
    },
    {
      question: "What is hematoma?",
      answer: "Collection of blood in tissues",
      explanation: "Hematomas result from inadequate hemostasis and can impair healing."
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
