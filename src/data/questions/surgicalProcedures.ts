export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the MOST common surgical position?",
    choices: ["Supine", "Prone", "Lateral", "Trendelenburg"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "What is the MOST common type of surgical skin prep solution?",
    choices: [
      "Iodine-based",
      "Chlorhexidine-based",
      "Alcohol-based",
      "Parachlorometaxylenol-based",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      "What is the appropriate surgical skin prep boundary for an incision site?",
    choices: [
      "2 inches",
      "6 inches",
      "12 inches",
      "Depends on the procedure and surgeon preference",
    ],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: "What is the purpose of draping a surgical patient?",
    choices: [
      "To create a sterile barrier",
      "To keep the patient warm",
      "To reduce surgical site infections",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "What is the purpose of surgical counts?",
    choices: [
      "To ensure all instruments and supplies are accounted for",
      "To prevent retained surgical items",
      "To comply with regulatory requirements",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "What is the proper technique for performing surgical counts?",
    choices: [
      "Count all items at the beginning of the procedure",
      "Count all items at the end of the procedure",
      "Count all items at the beginning, during, and end of the procedure",
      "Count all items only if requested by the surgeon",
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "What is the proper procedure for handling contaminated instruments?",
    choices: [
      "Wipe off the instrument with a sterile towel",
      "Place the instrument in a designated container for contaminated items",
      "Rinse the instrument with sterile water",
      "All of the above",
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: "What is the proper technique for passing instruments to the surgeon?",
    choices: [
      "Hold the instrument by the tip and hand it to the surgeon",
      "Hold the instrument by the handle and hand it to the surgeon",
      "Place the instrument on the surgical field for the surgeon to pick up",
      "All of the above",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "What is the purpose of surgical irrigation?",
    choices: [
      "To remove debris and blood from the surgical site",
      "To keep the surgical site moist",
      "To reduce the risk of infection",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: "What is the proper technique for surgical irrigation?",
    choices: [
      "Use a bulb syringe to irrigate the surgical site",
      "Use a high-pressure irrigation system to irrigate the surgical site",
      "Use a sterile basin to irrigate the surgical site",
      "All of the above",
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "What is the purpose of surgical suction?",
    choices: [
      "To remove fluids and debris from the surgical site",
      "To improve visualization of the surgical site",
      "To reduce the risk of infection",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 12,
    question: "What is the proper technique for surgical suction?",
    choices: [
      "Use a Yankauer suction tip to suction the surgical site",
      "Use a Poole suction tip to suction the surgical site",
      "Use a Frazier suction tip to suction the surgical site",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 13,
    question: "What is the purpose of surgical hemostasis?",
    choices: [
      "To control bleeding during surgery",
      "To improve visualization of the surgical site",
      "To reduce the risk of complications",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 14,
    question: "What are the different methods of surgical hemostasis?",
    choices: [
      "Sutures",
      "Electrocautery",
      "Topical hemostatic agents",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    question: "What is the proper technique for surgical suturing?",
    choices: [
      "Use the appropriate suture size and type for the tissue being sutured",
      "Use the appropriate suturing technique for the tissue being sutured",
      "Tie the sutures securely to prevent bleeding",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 16,
    question: "What is the purpose of surgical wound closure?",
    choices: [
      "To bring the edges of the wound together",
      "To promote healing",
      "To reduce the risk of infection",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 17,
    question: "What are the different methods of surgical wound closure?",
    choices: [
      "Sutures",
      "Staples",
      "Surgical tape",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 18,
    question: "What is the proper technique for surgical wound dressing?",
    choices: [
      "Use a sterile dressing to cover the wound",
      "Apply the dressing securely to prevent contamination",
      "Change the dressing as needed to keep the wound clean and dry",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 19,
    question: "What is the purpose of surgical drains?",
    choices: [
      "To remove excess fluid from the surgical site",
      "To prevent fluid buildup",
      "To reduce the risk of infection",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 20,
    question: "What are the different types of surgical drains?",
    choices: [
      "Penrose drain",
      "Jackson-Pratt drain",
      "Hemovac drain",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 21,
    question: "What is the proper technique for managing surgical drains?",
    choices: [
      "Empty the drain regularly to prevent fluid buildup",
      "Monitor the drainage for signs of infection",
      "Remove the drain when it is no longer needed",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 22,
    question: "What is the purpose of surgical specimens?",
    choices: [
      "To diagnose disease",
      "To monitor treatment",
      "To conduct research",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 23,
    question: "What is the proper technique for handling surgical specimens?",
    choices: [
      "Collect the specimen in a sterile container",
      "Label the specimen with the patient's name, date of birth, and the type of specimen",
      "Transport the specimen to the laboratory promptly",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 24,
    question: "What is the purpose of surgical documentation?",
    choices: [
      "To record the details of the surgical procedure",
      "To communicate information to other healthcare providers",
      "To comply with regulatory requirements",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 25,
    question: "What information should be included in surgical documentation?",
    choices: [
      "Patient's name, date of birth, and medical record number",
      "Type of surgical procedure performed",
      "Anesthesia used",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 26,
    question: "What is the purpose of surgical safety checklists?",
    choices: [
      "To prevent surgical errors",
      "To improve communication among surgical team members",
      "To comply with regulatory requirements",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 27,
    question: "What are the different components of a surgical safety checklist?",
    choices: [
      "Sign-in",
      "Time-out",
      "Sign-out",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 28,
    question: "What is the proper procedure for performing a surgical time-out?",
    choices: [
      "Verify the patient's identity",
      "Verify the surgical procedure to be performed",
      "Verify the surgical site",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 29,
    question: "What is the purpose of surgical instrument sterilization?",
    choices: [
      "To kill all microorganisms on the instruments",
      "To prevent surgical site infections",
      "To comply with regulatory requirements",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 30,
    question: "What are the different methods of surgical instrument sterilization?",
    choices: [
      "Steam sterilization",
      "Chemical sterilization",
      "Radiation sterilization",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 31,
    question: "What is the proper technique for surgical instrument sterilization?",
    choices: [
      "Follow the manufacturer's instructions for the sterilization method being used",
      "Ensure that the instruments are properly cleaned and decontaminated before sterilization",
      "Monitor the sterilization process to ensure that it is effective",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 32,
    question: "What is the purpose of surgical attire?",
    choices: [
      "To protect the surgical team from contamination",
      "To protect the patient from contamination",
      "To comply with regulatory requirements",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 33,
    question: "What are the different types of surgical attire?",
    choices: [
      "Surgical scrubs",
      "Surgical gowns",
      "Surgical masks",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 34,
    question: "What is the proper technique for donning and doffing surgical attire?",
    choices: [
      "Don surgical attire in a designated area",
      "Don surgical attire in the proper order",
      "Doff surgical attire in a designated area",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 35,
    question: "What is the purpose of surgical traffic control?",
    choices: [
      "To minimize the risk of contamination in the surgical suite",
      "To improve efficiency in the surgical suite",
      "To comply with regulatory requirements",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 36,
    question: "What are the different zones of a surgical suite?",
    choices: [
      "Unrestricted zone",
      "Semi-restricted zone",
      "Restricted zone",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 37,
    question: "What are the traffic control guidelines for each zone?",
    choices: [
      "Unrestricted zone: street clothes are permitted",
      "Semi-restricted zone: surgical scrubs and caps are required",
      "Restricted zone: surgical scrubs, caps, and masks are required",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 38,
    question: "What is the purpose of surgical fire safety?",
    choices: [
      "To prevent fires in the surgical suite",
      "To protect patients and surgical team members from injury",
      "To comply with regulatory requirements",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 39,
    question: "What are the components of the fire triangle?",
    choices: ["Fuel", "Ignition source", "Oxidizer", "All of the above"],
    correctAnswer: 3,
  },
  {
    id: 40,
    question: "What are the fire safety guidelines for the surgical suite?",
    choices: [
      "Keep flammable materials away from ignition sources",
      "Use non-flammable skin prep solutions",
      "Have a fire extinguisher readily available",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 41,
    question: "What is the purpose of surgical smoke evacuation?",
    choices: [
      "To remove surgical smoke from the surgical suite",
      "To protect patients and surgical team members from exposure to harmful substances",
      "To comply with regulatory requirements",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 42,
    question: "What are the different methods of surgical smoke evacuation?",
    choices: [
      "Local smoke evacuation",
      "Room air exchange",
      "Personal protective equipment",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 43,
    question: "What are the guidelines for surgical team communication?",
    choices: [
      "Use clear and concise language",
      "Listen actively to other team members",
      "Speak up if you have concerns",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 44,
    question: "What is the purpose of a surgical debriefing?",
    choices: [
      "To review the surgical procedure",
      "To identify areas for improvement",
      "To share lessons learned",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 45,
    question: "What is the proper procedure for handling a surgical error?",
    choices: [
      "Report the error to the appropriate authorities",
      "Investigate the error to determine the cause",
      "Implement corrective actions to prevent future errors",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 46,
    question: "What is the purpose of surgical quality improvement?",
    choices: [
      "To improve the quality of surgical care",
      "To reduce the risk of complications",
      "To improve patient outcomes",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 47,
    question: "What are the different methods of surgical quality improvement?",
    choices: [
      "Data collection and analysis",
      "Process improvement",
      "Benchmarking",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 48,
    question: "What is the role of the surgical technologist in surgical quality improvement?",
    choices: [
      "Participate in data collection and analysis",
      "Identify areas for improvement",
      "Implement corrective actions",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    id: 49,
    question: "What is the appendicular skeleton composed of?",
    choices: ["Skull and ribcage", "Vertebrae and sacrum", "Limbs", "Sternum"],
    correctAnswer: 2
  },
  {
    id: 50,
    question: "What type of bones make up the skull?",
    choices: ["Long bones", "Flat bones", "Short bones", "Irregular bones"],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "Which of the following are irregular bones?",
    choices: ["Femur", "Vertebrae", "Radius", "Sternum"],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "Which ribs are considered true ribs?",
    choices: ["8–10", "11–12", "1–7", "9–12"],
    correctAnswer: 2
  },
  {
    id: 53,
    question: "The manubrium is a part of which bone?",
    choices: ["Pelvis", "Sternum", "Scapula", "Skull"],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "What is the shaft of a long bone called?",
    choices: ["Epiphysis", "Diaphysis", "Medulla", "Periosteum"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "Which type of bone is the patella?",
    choices: ["Short", "Flat", "Irregular", "Long"],
    correctAnswer: 0
  },
  {
    id: 56,
    question: "What is the primary function of red bone marrow?",
    choices: ["Fat storage", "Hormone production", "Blood cell production", "Bone resorption"],
    correctAnswer: 2
  },
  {
    id: 57,
    question: "A tumor of the plasma cells of bone marrow is called:",
    choices: ["Osteosarcoma", "Myeloma", "Chondroma", "Osteoma"],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "The outer layer of hard connective tissue of bone is called:",
    choices: ["Cancellous bone", "Bone marrow", "Cortical bone", "Periosteum"],
    correctAnswer: 2
  },
  {
    id: 59,
    question: "The four stages of bone healing begin with:",
    choices: ["Callus formation", "Calcification", "Hematoma formation", "Remodeling"],
    correctAnswer: 2
  },
  {
    id: 60,
    question: "What type of tissue covers joint surfaces to allow smooth movement?",
    choices: ["Periosteum", "Ligament", "Cartilage", "Tendon"],
    correctAnswer: 2
  },
  {
    id: 61,
    question: "Which of the following is a benign cartilage tumor?",
    choices: ["Osteosarcoma", "Chondroma", "Myeloma", "Osteoma"],
    correctAnswer: 1
  },
  {
    id: 62,
    question: "Which type of muscle is voluntary?",
    choices: ["Smooth", "Striated", "Cardiac", "Involuntary"],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "What do ligaments attach?",
    choices: ["Muscle to bone", "Bone to bone", "Cartilage to bone", "Muscle to cartilage"],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "What is the function of tendons?",
    choices: ["Connect bone to bone", "Connect muscle to bone", "Cushion joints", "Secrete synovial fluid"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "A joint that allows no movement is called:",
    choices: ["Amphiarthrotic", "Diarthrotic", "Synarthrotic", "Synovial"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "Which joint type allows the widest range of motion?",
    choices: ["Hinge", "Ball and socket", "Pivot", "Gliding"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "What is an example of a condyloid joint?",
    choices: ["Shoulder", "Elbow", "Temporomandibular joint", "Hip"],
    correctAnswer: 2
  },
  {
    id: 68,
    question: "A hinge joint is best exemplified by the:",
    choices: ["Hip", "Shoulder", "Elbow", "Wrist"],
    correctAnswer: 2
  },
  {
    id: 69,
    question: "Turning the sole of the foot inward is called:",
    choices: ["Eversion", "Inversion", "Plantar flexion", "Dorsiflexion"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "Moving a limb away from the midline of the body is called:",
    choices: ["Adduction", "Abduction", "Flexion", "Extension"],
    correctAnswer: 1
  },
  {
    id: 71,
    question: "An autoimmune disease that causes joint inflammation and stiffness is:",
    choices: ["Osteoarthritis", "Rheumatoid arthritis", "Osteomyelitis", "Chondroma"],
    correctAnswer: 1
  },
  {
    id: 72,
    question: "Which diagnostic test records electrical activity of muscle?",
    choices: ["MRI", "Arthrogram", "CT scan", "Electromyography"],
    correctAnswer: 3
  },
  {
    id: 73,
    question: "What type of fracture does not puncture the skin?",
    choices: ["Open", "Simple", "Compound", "Comminuted"],
    correctAnswer: 1
  },
  {
    id: 74,
    question: "A fracture where the bone bends on one side and breaks on the other is:",
    choices: ["Oblique", "Greenstick", "Transverse", "Impacted"],
    correctAnswer: 1
  },
  {
    id: 75,
    question: "A fracture where the bone breaks into several pieces is called:",
    choices: ["Displaced", "Comminuted", "Oblique", "Transverse"],
    correctAnswer: 1
  },
  {
    id: 76,
    question: "A Colles' fracture involves which bone?",
    choices: ["Tibia", "Femur", "Radius", "Fibula"],
    correctAnswer: 2
  },
  {
    id: 77,
    question: "Which type of fracture is caused by disease that weakens the bone?",
    choices: ["Pathologic", "Greenstick", "Impacted", "Oblique"],
    correctAnswer: 0
  },
  {
    id: 78,
    question: "A partial dislocation is known as:",
    choices: ["Dislocation", "Subluxation", "Impaction", "Avulsion"],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "Which table is used for spine surgery?",
    choices: ["Fracture table", "Andrews table", "Jackson table", "Alvarado table"],
    correctAnswer: 2
  },
  {
    id: 80,
    question: "Traction applied directly to bone using pins is called:",
    choices: ["Manual traction", "Skeletal traction", "Skin traction", "Elastic traction"],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "Which material is commonly used for casting?",
    choices: ["Bone cement", "Fiberglass", "Silicone", "Nylon"],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "Which of the following is a complication of bone healing?",
    choices: ["Delayed union", "Callus formation", "Calcification", "Remodeling"],
    correctAnswer: 0
  },
  {
    id: 83,
    question: "A disease of decreased bone density leading to brittle bones is:",
    choices: ["Osteomalacia", "Osteogenesis imperfecta", "Osteoporosis", "Osteoarthritis"],
    correctAnswer: 2
  },
  {
    id: 84,
    question: "Bone cement is also known as:",
    choices: ["PMMA", "PVC", "Fiberglass", "Epoxy"],
    correctAnswer: 0
  },
  {
    id: 85,
    question: "Which type of bone graft is taken from the patient?",
    choices: ["Allograft", "Xenograft", "Autograft", "Synthetic"],
    correctAnswer: 2
  },
  {
    id: 86,
    question: "What suture material is commonly used for tendon-to-bone?",
    choices: ["Silk", "Polyester (Ethibond)", "Vicryl", "Chromic"],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "Which hemostatic agent is made of absorbable gelatin?",
    choices: ["Bone wax", "Gelfoam", "Thrombin", "PMMA"],
    correctAnswer: 1
  },
  {
    id: 88,
    question: "Which position may interfere with chest expansion if improperly performed?",
    choices: ["Lateral", "Supine", "Prone", "Lithotomy"],
    correctAnswer: 2
  },
  {
    id: 89,
    question: "A genetic disorder causing brittle bones is:",
    choices: ["Osteomyelitis", "Osteomalacia", "Osteogenesis imperfecta", "Osteoarthritis"],
    correctAnswer: 2
  },
  {
    id: 90,
    question: "Which of the following is a metabolic disease causing soft bones?",
    choices: ["Osteoporosis", "Osteomalacia", "Osteonecrosis", "Osteoarthritis"],
    correctAnswer: 1
  },
  {
    id: 91,
    question: "A compartment syndrome results in:",
    choices: ["Bone infection", "Increased pressure in fascial compartments", "Loss of calcium", "Bone necrosis"],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "What table provides skeletal traction for fractures?",
    choices: ["Fracture table", "Jackson table", "Andrews table", "Alvarado table"],
    correctAnswer: 0
  },
  {
    id: 93,
    question: "Which antibiotic is commonly used for irrigation?",
    choices: ["Erythromycin", "Bacitracin", "Amoxicillin", "Ciprofloxacin"],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "Which laser is used in arthroscopies?",
    choices: ["Nd:YAG", "CO₂", "Excimer", "Argon"],
    correctAnswer: 0
  },
  {
    id: 95,
    question: "What is the purpose of bone grafts?",
    choices: ["To increase bone length", "To promote healing of fractures", "To lubricate joints", "To remove diseased bone"],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "What is the preferred first step to repair a fracture?",
    choices: ["Open reduction", "Closed reduction", "Casting", "Bone grafting"],
    correctAnswer: 1
  },
  {
    id: 97,
    question: "What is the most common type of joint replacement?",
    choices: ["Shoulder", "Hip", "Knee", "Ankle"],
    correctAnswer: 2
  },
  {
    id: 98,
    question: "Which bone is commonly fractured in elderly patients due to falls?",
    choices: ["Femur", "Tibia", "Hip", "Radius"],
    correctAnswer: 2
  },
  {
    id: 99,
    question: "What is the most common cause of aortic stenosis?",
    choices: ["Rheumatic heart disease", "Bicuspid aortic valve", "Calcific degeneration", "Infective endocarditis"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "Which artery is most commonly used for coronary artery bypass?",
    choices: ["Radial artery", "Saphenous vein", "Internal mammary artery", "Gastroepiploic artery"],
    correctAnswer: 2
  },
  {
    id: 101,
    question: "What is the normal ejection fraction of the left ventricle?",
    choices: ["35-45%", "45-55%", "55-70%", "70-85%"],
    correctAnswer: 2
  },
  {
    id: 102,
    question: "Which valve is most commonly affected by rheumatic heart disease?",
    choices: ["Aortic valve", "Mitral valve", "Tricuspid valve", "Pulmonary valve"],
    correctAnswer: 1
  },
  {
    id: 103,
    question: "What is the most common type of brain tumor in adults?",
    choices: ["Meningioma", "Glioblastoma", "Pituitary adenoma", "Acoustic neuroma"],
    correctAnswer: 1
  },
  {
    id: 104,
    question: "Which position is commonly used for posterior cervical spine surgery?",
    choices: ["Supine", "Prone", "Lateral", "Sitting"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "What is the most common cause of small bowel obstruction?",
    choices: ["Adhesions", "Hernias", "Tumors", "Intussusception"],
    correctAnswer: 0
  },
  {
    id: 106,
    question: "Which incision is commonly used for appendectomy?",
    choices: ["McBurney's", "Pfannenstiel", "Kocher", "Midline"],
    correctAnswer: 0
  },
  {
    id: 107,
    question: "What is the most common indication for hysterectomy?",
    choices: ["Cancer", "Fibroids", "Endometriosis", "Prolapse"],
    correctAnswer: 1
  },
  {
    id: 108,
    question: "Which position is used for laparoscopic gynecologic surgery?",
    choices: ["Supine", "Lithotomy", "Trendelenburg", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 109,
    question: "What is the most common cause of urinary tract obstruction in men?",
    choices: ["Kidney stones", "Prostate enlargement", "Bladder cancer", "Urethral stricture"],
    correctAnswer: 1
  },
  {
    id: 110,
    question: "Which position is used for kidney surgery?",
    choices: ["Supine", "Prone", "Lateral", "Lithotomy"],
    correctAnswer: 2
  },
  {
    id: 111,
    question: "What is the most common type of skin graft?",
    choices: ["Full thickness", "Split thickness", "Composite", "Flap"],
    correctAnswer: 1
  },
  {
    id: 112,
    question: "Which suture is commonly used for skin closure?",
    choices: ["Vicryl", "PDS", "Nylon", "Silk"],
    correctAnswer: 2
  },
  {
    id: 113,
    question: "What is the most common cause of conductive hearing loss?",
    choices: ["Otosclerosis", "Chronic otitis media", "Earwax impaction", "Otitis externa"],
    correctAnswer: 2
  },
  {
    id: 114,
    question: "Which position is used for tonsillectomy?",
    choices: ["Supine", "Prone", "Rose position", "Lateral"],
    correctAnswer: 2
  },
  {
    id: 115,
    question: "What is the most common complication of tonsillectomy?",
    choices: ["Infection", "Bleeding", "Voice changes", "Dental injury"],
    correctAnswer: 1
  },
  {
    id: 116,
    question: "Which nerve is at risk during thyroid surgery?",
    choices: ["Vagus nerve", "Phrenic nerve", "Recurrent laryngeal nerve", "Hypoglossal nerve"],
    correctAnswer: 2
  },
  {
    id: 117,
    question: "What is the most common cause of epistaxis (nosebleed)?",
    choices: ["Trauma", "Dry air", "Hypertension", "Blood disorders"],
    correctAnswer: 1
  },
  {
    id: 118,
    question: "Which instrument is used for nasal septum surgery?",
    choices: ["Freer elevator", "Cottle elevator", "Ballenger swivel knife", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 119,
    question: "What is the most common indication for mastoidectomy?",
    choices: ["Chronic otitis media", "Cholesteatoma", "Hearing loss", "Vertigo"],
    correctAnswer: 1
  },
  {
    id: 120,
    question: "Which cranial nerve controls facial movement?",
    choices: ["CN V", "CN VII", "CN VIII", "CN IX"],
    correctAnswer: 1
  },
  {
    id: 121,
    question: "What is the most common type of laryngeal cancer?",
    choices: ["Adenocarcinoma", "Squamous cell carcinoma", "Sarcoma", "Lymphoma"],
    correctAnswer: 1
  },
  {
    id: 122,
    question: "Which position is used for ear surgery?",
    choices: ["Supine", "Prone", "Lateral", "Sitting"],
    correctAnswer: 2
  },
  {
    id: 123,
    question: "What is the primary function of the eustachian tube?",
    choices: ["Hearing", "Balance", "Pressure equalization", "Drainage"],
    correctAnswer: 2
  },
  {
    id: 124,
    question: "Which instrument is used for adenoidectomy?",
    choices: ["Curette", "Microdebrider", "Electrocautery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 125,
    question: "What is the most common cause of vocal cord paralysis?",
    choices: ["Trauma", "Surgery", "Infection", "Tumor"],
    correctAnswer: 1
  },
  {
    id: 126,
    question: "Which sinus is most commonly affected by sinusitis?",
    choices: ["Maxillary", "Ethmoid", "Frontal", "Sphenoid"],
    correctAnswer: 0
  },
  {
    id: 127,
    question: "What is the most common complication of sinus surgery?",
    choices: ["Bleeding", "Infection", "CSF leak", "Dental numbness"],
    correctAnswer: 0
  },
  {
    id: 128,
    question: "Which test is used to evaluate hearing?",
    choices: ["Audiometry", "Tympanometry", "Weber test", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 129,
    question: "What is the most common cause of vertigo?",
    choices: ["BPPV", "Meniere's disease", "Acoustic neuroma", "Labyrinthitis"],
    correctAnswer: 0
  },
  {
    id: 130,
    question: "Which artery supplies the nose?",
    choices: ["Facial artery", "Maxillary artery", "Ophthalmic artery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 131,
    question: "What is the most common indication for tracheostomy?",
    choices: ["Airway obstruction", "Prolonged ventilation", "Secretion management", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 132,
    question: "Which muscle controls vocal cord tension?",
    choices: ["Cricothyroid", "Posterior cricoarytenoid", "Lateral cricoarytenoid", "Transverse arytenoid"],
    correctAnswer: 0
  },
  {
    id: 133,
    question: "What is the most common cause of congenital hearing loss?",
    choices: ["Genetic factors", "Infections", "Ototoxic drugs", "Birth trauma"],
    correctAnswer: 0
  },
  {
    id: 134,
    question: "Which imaging is best for temporal bone pathology?",
    choices: ["X-ray", "CT scan", "MRI", "Ultrasound"],
    correctAnswer: 1
  },
  {
    id: 135,
    question: "What is the most common complication of otitis media?",
    choices: ["Hearing loss", "Perforation", "Mastoiditis", "Facial paralysis"],
    correctAnswer: 0
  },
  {
    id: 136,
    question: "Which instrument is used for myringotomy?",
    choices: ["Myringotomy knife", "Tympanocentesis needle", "Microscissors", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 137,
    question: "What is the most common cause of sudden hearing loss?",
    choices: ["Viral infection", "Vascular occlusion", "Autoimmune disease", "Idiopathic"],
    correctAnswer: 3
  },
  {
    id: 138,
    question: "Which structure separates the middle and inner ear?",
    choices: ["Tympanic membrane", "Oval window", "Round window", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 139,
    question: "What is the most common indication for cochlear implant?",
    choices: ["Mild hearing loss", "Moderate hearing loss", "Severe to profound hearing loss", "Tinnitus"],
    correctAnswer: 2
  },
  {
    id: 140,
    question: "Which nerve innervates the external ear?",
    choices: ["Trigeminal", "Facial", "Vagus", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 141,
    question: "What is the most common cause of anosmia (loss of smell)?",
    choices: ["Upper respiratory infection", "Head trauma", "Nasal polyps", "Aging"],
    correctAnswer: 0
  },
  {
    id: 142,
    question: "Which bone contains the middle ear?",
    choices: ["Frontal", "Parietal", "Temporal", "Occipital"],
    correctAnswer: 2
  },
  {
    id: 143,
    question: "What is the most common type of salivary gland tumor?",
    choices: ["Pleomorphic adenoma", "Warthin tumor", "Mucoepidermoid carcinoma", "Adenoid cystic carcinoma"],
    correctAnswer: 0
  },
  {
    id: 144,
    question: "Which gland is most commonly affected by stones?",
    choices: ["Parotid", "Submandibular", "Sublingual", "Minor salivary glands"],
    correctAnswer: 1
  },
  {
    id: 145,
    question: "What is the most common complication of parotidectomy?",
    choices: ["Facial nerve injury", "Frey syndrome", "Hematoma", "Infection"],
    correctAnswer: 0
  },
  {
    id: 146,
    question: "Which test is used to evaluate swallowing?",
    choices: ["Barium swallow", "Videofluoroscopy", "Endoscopy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 147,
    question: "What is the most common cause of stridor in children?",
    choices: ["Laryngomalacia", "Vocal cord paralysis", "Subglottic stenosis", "Foreign body"],
    correctAnswer: 0
  },
  {
    id: 148,
    question: "Which muscle opens the vocal cords?",
    choices: ["Cricothyroid", "Posterior cricoarytenoid", "Lateral cricoarytenoid", "Transverse arytenoid"],
    correctAnswer: 1
  },
  {
    id: 149,
    question: "What is the most common indication for septoplasty?",
    choices: ["Cosmetic", "Nasal obstruction", "Recurrent sinusitis", "Epistaxis"],
    correctAnswer: 1
  },
  {
    id: 150,
    question: "Which cranial nerve controls taste in the anterior two-thirds of the tongue?",
    choices: ["CN V", "CN VII", "CN IX", "CN X"],
    correctAnswer: 1
  },
  {
    id: 151,
    question: "What is the most common cause of hoarseness?",
    choices: ["Vocal cord paralysis", "Laryngitis", "Vocal cord polyps", "Cancer"],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "Which imaging is best for soft tissue neck masses?",
    choices: ["X-ray", "CT scan", "MRI", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 153,
    question: "What is the most common complication of tympanoplasty?",
    choices: ["Hearing loss", "Graft failure", "Infection", "Facial nerve injury"],
    correctAnswer: 1
  },
  {
    id: 154,
    question: "Which structure is removed in stapedectomy?",
    choices: ["Malleus", "Incus", "Stapes", "Tympanic membrane"],
    correctAnswer: 2
  },
  {
    id: 155,
    question: "What is the most common cause of chronic cough?",
    choices: ["GERD", "Asthma", "Post-nasal drip", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 156,
    question: "Which position is used for neck dissection?",
    choices: ["Supine with neck extension", "Prone", "Lateral", "Sitting"],
    correctAnswer: 0
  },
  {
    id: 157,
    question: "What is the most common indication for turbinate reduction?",
    choices: ["Cosmetic", "Nasal obstruction", "Recurrent epistaxis", "Anosmia"],
    correctAnswer: 1
  },
  {
    id: 158,
    question: "Which antibiotic is commonly used for otitis media?",
    choices: ["Amoxicillin", "Azithromycin", "Cephalexin", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 159,
    question: "What is the most common cause of facial nerve paralysis?",
    choices: ["Bell's palsy", "Trauma", "Tumor", "Infection"],
    correctAnswer: 0
  },
  {
    id: 160,
    question: "Which test evaluates middle ear function?",
    choices: ["Audiometry", "Tympanometry", "OAE", "ABR"],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "What is the most common complication of rhinoplasty?",
    choices: ["Bleeding", "Infection", "Nasal obstruction", "Asymmetry"],
    correctAnswer: 3
  },
  {
    id: 162,
    question: "Which nerve controls sensation in the ear canal?",
    choices: ["Trigeminal", "Facial", "Vagus", "Glossopharyngeal"],
    correctAnswer: 2
  },
  {
    id: 163,
    question: "What is the most common indication for uvulopalatopharyngoplasty?",
    choices: ["Sleep apnea", "Snoring", "Chronic pharyngitis", "Swallowing disorders"],
    correctAnswer: 0
  },
  {
    id: 164,
    question: "Which structure is most at risk during thyroidectomy?",
    choices: ["Carotid artery", "Jugular vein", "Recurrent laryngeal nerve", "Esophagus"],
    correctAnswer: 2
  },
  {
    id: 165,
    question: "What is the most common cause of sleep apnea?",
    choices: ["Obesity", "Enlarged tonsils", "Deviated septum", "Allergies"],
    correctAnswer: 0
  },
  {
    id: 166,
    question: "Which imaging is used to evaluate the sinuses?",
    choices: ["X-ray", "CT scan", "MRI", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 167,
    question: "What is the most common complication of endoscopic sinus surgery?",
    choices: ["Bleeding", "Infection", "Orbital injury", "Dental numbness"],
    correctAnswer: 0
  },
  {
    id: 168,
    question: "Which medication is commonly used for allergic rhinitis?",
    choices: ["Antihistamines", "Nasal steroids", "Decongestants", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 169,
    question: "What is the most common cause of drooling in children?",
    choices: ["Cerebral palsy", "Enlarged tonsils", "Dental problems", "Normal development"],
    correctAnswer: 3
  },
  {
    id: 170,
    question: "Which cranial nerve controls swallowing?",
    choices: ["CN V", "CN VII", "CN IX", "CN X"],
    correctAnswer: 3
  },
  {
    id: 171,
    question: "What is the most common indication for laryngoscopy?",
    choices: ["Hoarseness", "Dysphagia", "Stridor", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 172,
    question: "Which structure protects the airway during swallowing?",
    choices: ["Epiglottis", "Vocal cords", "Arytenoids", "Cricoid cartilage"],
    correctAnswer: 0
  }
];
