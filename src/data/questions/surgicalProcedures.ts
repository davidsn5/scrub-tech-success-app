export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the first step in the surgical hand scrub?",
    choices: ["Wet hands and arms", "Apply soap", "Rinse hands", "Dry hands"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Which of the following is a sterile field?",
    choices: ["Surgical gown", "Operating room floor", "Surgical gloves", "Surgical mask"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "What is the purpose of a surgical time-out?",
    choices: ["Verify patient identity", "Check equipment", "Prepare the surgical site", "Administer anesthesia"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which instrument is used to grasp tissue?",
    choices: ["Scalpel", "Forceps", "Retractor", "Needle holder"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What type of suture is absorbable?",
    choices: ["Silk", "Nylon", "Vicryl", "Polypropylene"],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Which layer is the outermost layer of the skin?",
    choices: ["Dermis", "Epidermis", "Subcutaneous", "Fascia"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What is the function of the surgical sponge count?",
    choices: ["Prevent infection", "Prevent retained sponges", "Assist in wound closure", "Maintain sterile field"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "Which of the following is a type of surgical incision?",
    choices: ["Midline", "Transverse", "Oblique", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "What is the primary purpose of a drain?",
    choices: ["Prevent infection", "Remove fluid", "Deliver medication", "Maintain sterile field"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "Which of the following is a common complication of surgery?",
    choices: ["Infection", "Bleeding", "Thrombosis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "What is the purpose of preoperative skin preparation?",
    choices: ["Reduce bacterial count", "Improve visibility", "Prevent allergic reactions", "Enhance wound healing"],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Which position is commonly used for abdominal surgery?",
    choices: ["Trendelenburg", "Supine", "Prone", "Lateral"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "What is the primary function of electrocautery?",
    choices: ["Cut tissue", "Coagulate blood", "Both A and B", "Provide light"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "Which type of anesthesia affects the entire body?",
    choices: ["Local", "Regional", "General", "Topical"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "What is the purpose of a surgical count?",
    choices: ["Track time", "Prevent retained items", "Monitor vitals", "Calculate costs"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Which instrument is used to hold tissue edges apart?",
    choices: ["Forceps", "Retractor", "Clamp", "Scissors"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is the most common surgical site infection?",
    choices: ["Superficial incisional", "Deep incisional", "Organ space", "Bloodstream"],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Which suture material is non-absorbable?",
    choices: ["Vicryl", "PDS", "Silk", "Chromic gut"],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "What is the purpose of surgical draping?",
    choices: ["Maintain sterility", "Provide warmth", "Improve visibility", "Reduce noise"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Which phase of wound healing involves inflammation?",
    choices: ["Hemostasis", "Inflammatory", "Proliferative", "Maturation"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "What is the primary concern with malignant hyperthermia?",
    choices: ["Hypothermia", "Hyperthermia", "Hypotension", "Bradycardia"],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Which surgical approach uses small incisions?",
    choices: ["Open", "Laparoscopic", "Robotic", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 23,
    question: "What is the purpose of surgical irrigation?",
    choices: ["Clean the wound", "Remove debris", "Reduce bacteria", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 24,
    question: "Which type of wound closure uses adhesive?",
    choices: ["Sutures", "Staples", "Tissue adhesive", "Clips"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "What is the most important factor in preventing surgical site infections?",
    choices: ["Antibiotics", "Hand hygiene", "Sterile technique", "Patient positioning"],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "Which instrument is used to cut sutures?",
    choices: ["Scalpel", "Scissors", "Forceps", "Needle holder"],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "What is the purpose of a surgical timeout?",
    choices: ["Rest period", "Verify correct procedure", "Equipment check", "Team introduction"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Which type of suture is used for internal organs?",
    choices: ["Non-absorbable", "Absorbable", "Monofilament", "Multifilament"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "What is the primary function of hemostats?",
    choices: ["Cut tissue", "Grasp tissue", "Control bleeding", "Suture tissue"],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Which position is used for kidney surgery?",
    choices: ["Supine", "Prone", "Lateral", "Trendelenburg"],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "What is the purpose of surgical marking?",
    choices: ["Identify patient", "Mark incision site", "Track time", "Record vitals"],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "Which type of anesthesia blocks nerve conduction?",
    choices: ["General", "Local", "Regional", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 33,
    question: "What is the most common cause of surgical fires?",
    choices: ["Electrical equipment", "Oxygen-enriched environment", "Ignition source", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 34,
    question: "Which surgical instrument is used for grasping?",
    choices: ["Scalpel", "Forceps", "Retractor", "Suction"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is the purpose of surgical positioning?",
    choices: ["Patient comfort", "Surgical access", "Prevent injury", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 36,
    question: "Which type of wound heals by primary intention?",
    choices: ["Clean surgical incision", "Infected wound", "Pressure ulcer", "Burn wound"],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "What is the primary concern with hypothermia during surgery?",
    choices: ["Infection risk", "Bleeding risk", "Cardiac complications", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 38,
    question: "Which surgical approach requires CO2 insufflation?",
    choices: ["Open", "Laparoscopic", "Endoscopic", "Microsurgical"],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "What is the purpose of surgical counts?",
    choices: ["Track instruments", "Prevent retained items", "Monitor time", "Calculate costs"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Which type of suture material dissolves naturally?",
    choices: ["Silk", "Nylon", "Vicryl", "Prolene"],
    correctAnswer: 2
  },
  {
    id: 41,
    question: "What is the most critical time for surgical site infection prevention?",
    choices: ["Preoperative", "Intraoperative", "Postoperative", "All phases"],
    correctAnswer: 3
  },
  {
    id: 42,
    question: "Which instrument is used to hold needles?",
    choices: ["Forceps", "Needle holder", "Clamp", "Retractor"],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "What is the purpose of surgical antibiotic prophylaxis?",
    choices: ["Treat infection", "Prevent infection", "Reduce inflammation", "Promote healing"],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "Which type of wound closure is fastest?",
    choices: ["Sutures", "Staples", "Tissue adhesive", "Clips"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "What is the primary function of surgical drains?",
    choices: ["Prevent infection", "Remove fluid", "Support tissue", "Deliver medication"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "Which surgical position increases venous return?",
    choices: ["Supine", "Trendelenburg", "Reverse Trendelenburg", "Lateral"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "What is the purpose of preoperative fasting?",
    choices: ["Reduce nausea", "Prevent aspiration", "Improve healing", "Reduce bleeding"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "Which type of electrosurgery cuts and coagulates simultaneously?",
    choices: ["Pure cut", "Coagulation", "Blend", "Fulguration"],
    correctAnswer: 2
  },
  {
    id: 49,
    question: "What is the most common postoperative complication?",
    choices: ["Infection", "Pain", "Nausea", "Bleeding"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Which surgical instrument is used for cutting?",
    choices: ["Forceps", "Scalpel", "Retractor", "Clamp"],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "What is the purpose of surgical hand antisepsis?",
    choices: ["Remove dirt", "Kill bacteria", "Soften skin", "Improve grip"],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "Which type of anesthesia is administered through the spine?",
    choices: ["General", "Local", "Epidural", "Topical"],
    correctAnswer: 2
  },
  {
    id: 53,
    question: "What is the primary concern with surgical smoke?",
    choices: ["Visibility", "Odor", "Toxicity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 54,
    question: "Which wound classification has the highest infection risk?",
    choices: ["Clean", "Clean-contaminated", "Contaminated", "Dirty"],
    correctAnswer: 3
  },
  {
    id: 55,
    question: "What is the purpose of surgical gowning?",
    choices: ["Maintain sterility", "Provide warmth", "Identify team members", "Improve comfort"],
    correctAnswer: 0
  },
  {
    id: 56,
    question: "Which type of suture has the least tissue reaction?",
    choices: ["Silk", "Chromic gut", "Nylon", "Cotton"],
    correctAnswer: 2
  },
  {
    id: 57,
    question: "What is the most important factor in wound healing?",
    choices: ["Age", "Nutrition", "Blood supply", "Activity level"],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "Which surgical approach uses natural body openings?",
    choices: ["Open", "Laparoscopic", "Endoscopic", "Robotic"],
    correctAnswer: 2
  },
  {
    id: 59,
    question: "What is the purpose of surgical lighting?",
    choices: ["Provide visibility", "Generate heat", "Sterilize area", "Guide instruments"],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "Which type of wound dressing absorbs drainage?",
    choices: ["Occlusive", "Semi-occlusive", "Absorptive", "Transparent"],
    correctAnswer: 2
  },
  {
    id: 61,
    question: "What is the primary function of surgical retractors?",
    choices: ["Cut tissue", "Hold tissue", "Suture tissue", "Irrigate tissue"],
    correctAnswer: 1
  },
  {
    id: 62,
    question: "Which type of anesthesia affects only a specific area?",
    choices: ["General", "Regional", "Local", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 63,
    question: "What is the purpose of surgical team communication?",
    choices: ["Social interaction", "Patient safety", "Time management", "Cost control"],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "Which surgical instrument is used for suctioning?",
    choices: ["Forceps", "Yankauer", "Retractor", "Clamp"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "What is the most common type of surgical error?",
    choices: ["Wrong patient", "Wrong procedure", "Wrong site", "Retained item"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "Which type of suture knot is most secure?",
    choices: ["Simple", "Surgeon's", "Square", "Slip"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "What is the purpose of surgical specimen handling?",
    choices: ["Disposal", "Pathology examination", "Storage", "Documentation"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "Which surgical position is used for thyroid surgery?",
    choices: ["Supine", "Prone", "Lateral", "Reverse Trendelenburg"],
    correctAnswer: 3
  },
  {
    id: 69,
    question: "What is the primary concern with surgical blood loss?",
    choices: ["Infection", "Shock", "Pain", "Scarring"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "Which type of wound closure provides the best cosmetic result?",
    choices: ["Sutures", "Staples", "Tissue adhesive", "Clips"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "What is the purpose of surgical monitoring?",
    choices: ["Track progress", "Ensure safety", "Document events", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 72,
    question: "Which surgical instrument is used for clamping vessels?",
    choices: ["Forceps", "Hemostat", "Retractor", "Scissors"],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "What is the most important factor in preventing surgical complications?",
    choices: ["Experience", "Equipment", "Technique", "Communication"],
    correctAnswer: 3
  },
  {
    id: 74,
    question: "Which type of anesthesia is injected into tissues?",
    choices: ["General", "Regional", "Local", "Topical"],
    correctAnswer: 2
  },
  {
    id: 75,
    question: "What is the purpose of surgical quality improvement?",
    choices: ["Reduce costs", "Improve outcomes", "Increase efficiency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 76,
    question: "Which surgical approach minimizes tissue trauma?",
    choices: ["Open", "Minimally invasive", "Conventional", "Traditional"],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "What is the primary function of surgical adhesives?",
    choices: ["Seal tissues", "Prevent bleeding", "Reduce infection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 78,
    question: "Which type of wound heals slowest?",
    choices: ["Surgical incision", "Laceration", "Pressure ulcer", "Abrasion"],
    correctAnswer: 2
  },
  {
    id: 79,
    question: "What is the purpose of surgical education?",
    choices: ["Meet requirements", "Improve skills", "Ensure safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 80,
    question: "Which surgical instrument is used for tissue approximation?",
    choices: ["Forceps", "Needle holder", "Suture", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 81,
    question: "What is the most critical aspect of surgical safety?",
    choices: ["Equipment check", "Team communication", "Patient identification", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 82,
    question: "Which type of suture material is strongest?",
    choices: ["Silk", "Nylon", "Steel", "Vicryl"],
    correctAnswer: 2
  },
  {
    id: 83,
    question: "What is the purpose of surgical research?",
    choices: ["Advance knowledge", "Improve techniques", "Develop technology", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 84,
    question: "Which surgical position reduces intracranial pressure?",
    choices: ["Supine", "Trendelenburg", "Reverse Trendelenburg", "Lateral"],
    correctAnswer: 2
  },
  {
    id: 85,
    question: "What is the primary concern with surgical allergies?",
    choices: ["Skin reaction", "Respiratory distress", "Anaphylaxis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 86,
    question: "Which type of wound requires debridement?",
    choices: ["Clean", "Contaminated", "Necrotic", "Healing"],
    correctAnswer: 2
  },
  {
    id: 87,
    question: "What is the purpose of surgical documentation?",
    choices: ["Legal protection", "Quality assurance", "Communication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 88,
    question: "Which surgical instrument is used for measuring?",
    choices: ["Ruler", "Caliper", "Depth gauge", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 89,
    question: "What is the most important aspect of surgical teamwork?",
    choices: ["Hierarchy", "Communication", "Experience", "Equipment"],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "Which type of anesthesia has the fastest onset?",
    choices: ["General", "Regional", "Local", "Topical"],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "What is the purpose of surgical innovation?",
    choices: ["Improve outcomes", "Reduce costs", "Enhance safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 92,
    question: "Which surgical approach uses robotic assistance?",
    choices: ["Open", "Laparoscopic", "Robotic", "Endoscopic"],
    correctAnswer: 2
  },
  {
    id: 93,
    question: "What is the primary function of surgical hemostasis?",
    choices: ["Control bleeding", "Prevent infection", "Promote healing", "Reduce pain"],
    correctAnswer: 0
  },
  {
    id: 94,
    question: "Which type of wound dressing promotes healing?",
    choices: ["Dry", "Moist", "Occlusive", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 95,
    question: "What is the purpose of surgical standards?",
    choices: ["Ensure quality", "Promote safety", "Guide practice", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 96,
    question: "Which surgical instrument is used for tissue handling?",
    choices: ["Forceps", "Clamp", "Retractor", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 97,
    question: "What is the most common surgical emergency?",
    choices: ["Hemorrhage", "Cardiac arrest", "Respiratory failure", "Allergic reaction"],
    correctAnswer: 0
  },
  {
    id: 98,
    question: "Which type of suture technique minimizes scarring?",
    choices: ["Interrupted", "Continuous", "Subcuticular", "Mattress"],
    correctAnswer: 2
  },
  {
    id: 99,
    question: "What is the purpose of surgical ethics?",
    choices: ["Legal compliance", "Patient welfare", "Professional conduct", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 100,
    question: "Which surgical approach has the shortest recovery time?",
    choices: ["Open", "Laparoscopic", "Robotic", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 101,
    question: "What is the primary concern with surgical infections?",
    choices: ["Delayed healing", "Increased morbidity", "Higher costs", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 102,
    question: "Which type of wound closure is most versatile?",
    choices: ["Sutures", "Staples", "Tissue adhesive", "Clips"],
    correctAnswer: 0
  },
  {
    id: 103,
    question: "What is the purpose of surgical leadership?",
    choices: ["Guide team", "Ensure safety", "Improve outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 104,
    question: "Which surgical instrument is used for cutting bone?",
    choices: ["Scalpel", "Saw", "Scissors", "Drill"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "What is the most important factor in surgical success?",
    choices: ["Skill", "Equipment", "Teamwork", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 106,
    question: "Which type of anesthesia provides the best pain control?",
    choices: ["General", "Regional", "Local", "Multimodal"],
    correctAnswer: 3
  },
  {
    id: 107,
    question: "What is the purpose of surgical mentorship?",
    choices: ["Transfer knowledge", "Develop skills", "Ensure safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 108,
    question: "Which surgical approach is most cost-effective?",
    choices: ["Open", "Laparoscopic", "Robotic", "Depends on case"],
    correctAnswer: 3
  },
  {
    id: 109,
    question: "What is the primary function of surgical technology?",
    choices: ["Improve precision", "Enhance safety", "Reduce invasiveness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 110,
    question: "Which type of wound requires urgent attention?",
    choices: ["Clean", "Contaminated", "Hemorrhaging", "Healing"],
    correctAnswer: 2
  },
  {
    id: 111,
    question: "What is the purpose of surgical quality metrics?",
    choices: ["Measure performance", "Identify problems", "Guide improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 112,
    question: "Which surgical instrument is used for bone manipulation?",
    choices: ["Forceps", "Elevator", "Curette", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 113,
    question: "What is the most critical phase of surgery?",
    choices: ["Preoperative", "Intraoperative", "Postoperative", "All phases"],
    correctAnswer: 3
  },
  {
    id: 114,
    question: "Which type of suture is used for cardiovascular surgery?",
    choices: ["Silk", "Nylon", "Prolene", "Vicryl"],
    correctAnswer: 2
  },
  {
    id: 115,
    question: "What is the purpose of surgical simulation?",
    choices: ["Practice skills", "Test equipment", "Train teams", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 116,
    question: "Which surgical approach requires specialized training?",
    choices: ["Open", "Laparoscopic", "Robotic", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 117,
    question: "What is the primary benefit of minimally invasive surgery?",
    choices: ["Reduced pain", "Faster recovery", "Better cosmesis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 118,
    question: "Which type of wound healing is most desirable?",
    choices: ["Primary", "Secondary", "Tertiary", "Delayed"],
    correctAnswer: 0
  },
  {
    id: 119,
    question: "What is the purpose of surgical case planning?",
    choices: ["Optimize outcomes", "Minimize risks", "Ensure efficiency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 120,
    question: "Which surgical instrument is used for tissue removal?",
    choices: ["Scalpel", "Curette", "Rongeur", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 121,
    question: "What is the most important aspect of surgical recovery?",
    choices: ["Pain management", "Infection prevention", "Early mobilization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 122,
    question: "Which type of anesthesia is safest for elderly patients?",
    choices: ["General", "Regional", "Local", "Depends on procedure"],
    correctAnswer: 3
  },
  {
    id: 123,
    question: "What is the purpose of surgical protocols?",
    choices: ["Standardize care", "Ensure safety", "Improve outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 124,
    question: "Which surgical approach has the lowest morbidity?",
    choices: ["Open", "Laparoscopic", "Robotic", "Natural orifice"],
    correctAnswer: 3
  },
  {
    id: 125,
    question: "What is the primary function of surgical draping?",
    choices: ["Maintain sterility", "Provide access", "Protect patient", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 126,
    question: "Which type of wound is most prone to complications?",
    choices: ["Clean", "Clean-contaminated", "Contaminated", "Dirty"],
    correctAnswer: 3
  },
  {
    id: 127,
    question: "What is the purpose of surgical checklists?",
    choices: ["Prevent errors", "Ensure completeness", "Improve communication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 128,
    question: "Which surgical instrument is used for precision work?",
    choices: ["Microsurgical instruments", "Standard instruments", "Power tools", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 129,
    question: "What is the most important factor in surgical decision-making?",
    choices: ["Experience", "Evidence", "Patient preference", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 130,
    question: "Which type of suture material is most biocompatible?",
    choices: ["Silk", "Nylon", "PDS", "Prolene"],
    correctAnswer: 2
  },
  {
    id: 131,
    question: "What is the purpose of surgical debriefing?",
    choices: ["Review performance", "Identify improvements", "Enhance learning", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 132,
    question: "Which surgical approach is most environmentally friendly?",
    choices: ["Open", "Laparoscopic", "Robotic", "Reusable instruments"],
    correctAnswer: 3
  },
  {
    id: 133,
    question: "What is the primary concern with surgical waste?",
    choices: ["Cost", "Environment", "Safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 134,
    question: "Which type of wound dressing is most cost-effective?",
    choices: ["Basic", "Advanced", "Specialty", "Depends on wound"],
    correctAnswer: 3
  },
  {
    id: 135,
    question: "What is the purpose of surgical outcomes research?",
    choices: ["Evaluate effectiveness", "Compare techniques", "Guide policy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 136,
    question: "Which surgical instrument is used for visualization?",
    choices: ["Endoscope", "Microscope", "Magnifying glass", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 137,
    question: "What is the most important aspect of surgical training?",
    choices: ["Technical skills", "Knowledge", "Judgment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 138,
    question: "Which type of anesthesia is most versatile?",
    choices: ["General", "Regional", "Local", "Multimodal"],
    correctAnswer: 3
  },
  {
    id: 139,
    question: "What is the purpose of surgical innovation?",
    choices: ["Improve care", "Reduce costs", "Enhance safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 140,
    question: "Which surgical approach requires the most expertise?",
    choices: ["Open", "Laparoscopic", "Robotic", "Microsurgery"],
    correctAnswer: 3
  },
  {
    id: 141,
    question: "What is the primary benefit of surgical specialization?",
    choices: ["Better outcomes", "Increased efficiency", "Enhanced expertise", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 142,
    question: "Which type of wound requires the most care?",
    choices: ["Acute", "Chronic", "Infected", "Complex"],
    correctAnswer: 3
  },
  {
    id: 143,
    question: "What is the purpose of surgical collaboration?",
    choices: ["Share expertise", "Improve outcomes", "Enhance learning", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 144,
    question: "Which surgical instrument is most important?",
    choices: ["Scalpel", "Forceps", "Retractor", "All are important"],
    correctAnswer: 3
  },
  {
    id: 145,
    question: "What is the most critical aspect of surgical care?",
    choices: ["Technical skill", "Patient safety", "Efficiency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 146,
    question: "Which type of suture provides the best strength?",
    choices: ["Continuous", "Interrupted", "Mattress", "Depends on application"],
    correctAnswer: 3
  },
  {
    id: 147,
    question: "What is the purpose of surgical advancement?",
    choices: ["Improve outcomes", "Reduce morbidity", "Enhance quality of life", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 148,
    question: "Which surgical approach is most patient-centered?",
    choices: ["Open", "Minimally invasive", "Robotic", "Individualized"],
    correctAnswer: 3
  },
  {
    id: 149,
    question: "What is the primary goal of surgical care?",
    choices: ["Cure disease", "Relieve symptoms", "Improve function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 150,
    question: "Which type of wound healing is fastest?",
    choices: ["Primary", "Secondary", "Tertiary", "Depends on factors"],
    correctAnswer: 3
  },
  {
    id: 151,
    question: "What is the purpose of surgical excellence?",
    choices: ["Patient benefit", "Professional satisfaction", "Institutional reputation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 152,
    question: "Which surgical instrument requires the most skill?",
    choices: ["Scalpel", "Endoscope", "Microscope", "All require skill"],
    correctAnswer: 3
  },
  {
    id: 153,
    question: "What is the most important outcome of surgery?",
    choices: ["Technical success", "Patient satisfaction", "Functional improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 154,
    question: "Which type of anesthesia is most complex?",
    choices: ["General", "Regional", "Local", "Cardiac anesthesia"],
    correctAnswer: 3
  },
  {
    id: 155,
    question: "What is the purpose of surgical mastery?",
    choices: ["Personal achievement", "Patient benefit", "Professional recognition", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 156,
    question: "Which surgical approach is most demanding?",
    choices: ["Open", "Laparoscopic", "Robotic", "Transplant surgery"],
    correctAnswer: 3
  },
  {
    id: 157,
    question: "What is the primary challenge in surgery?",
    choices: ["Technical difficulty", "Patient complexity", "Resource limitations", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 158,
    question: "Which type of wound is most challenging?",
    choices: ["Acute", "Chronic", "Infected", "Malignant"],
    correctAnswer: 3
  },
  {
    id: 159,
    question: "What is the purpose of surgical perfection?",
    choices: ["Ideal outcome", "Zero complications", "Maximum benefit", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 160,
    question: "Which surgical instrument is most versatile?",
    choices: ["Scalpel", "Forceps", "Electrocautery", "All have specific uses"],
    correctAnswer: 3
  },
  {
    id: 161,
    question: "What is the most rewarding aspect of surgery?",
    choices: ["Technical challenge", "Patient outcome", "Team collaboration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 162,
    question: "Which type of suture is most appropriate?",
    choices: ["Absorbable", "Non-absorbable", "Monofilament", "Depends on application"],
    correctAnswer: 3
  },
  {
    id: 163,
    question: "What is the purpose of surgical wisdom?",
    choices: ["Guide decisions", "Prevent errors", "Optimize outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 164,
    question: "Which surgical approach is most appropriate?",
    choices: ["Open", "Minimally invasive", "Robotic", "Depends on case"],
    correctAnswer: 3
  },
  {
    id: 165,
    question: "What is the primary responsibility of a surgeon?",
    choices: ["Technical skill", "Patient care", "Professional conduct", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 166,
    question: "Which type of wound requires the most attention?",
    choices: ["Clean", "Contaminated", "Complex", "High-risk"],
    correctAnswer: 3
  },
  {
    id: 167,
    question: "What is the purpose of surgical dedication?",
    choices: ["Patient welfare", "Professional excellence", "Continuous improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 168,
    question: "Which surgical instrument requires the most precision?",
    choices: ["Scalpel", "Microsurgical instruments", "Laser", "All require precision"],
    correctAnswer: 3
  },
  {
    id: 169,
    question: "What is the most important quality of a surgeon?",
    choices: ["Skill", "Knowledge", "Judgment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 170,
    question: "Which type of anesthesia requires the most monitoring?",
    choices: ["General", "Regional", "Local", "All require monitoring"],
    correctAnswer: 3
  },
  {
    id: 171,
    question: "What is the purpose of surgical artistry?",
    choices: ["Technical excellence", "Aesthetic outcome", "Functional result", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 172,
    question: "Which surgical approach offers the best outcome?",
    choices: ["Open", "Minimally invasive", "Robotic", "Depends on patient"],
    correctAnswer: 3
  },
  {
    id: 173,
    question: "What is the primary goal of surgical innovation?",
    choices: ["Better outcomes", "Reduced morbidity", "Enhanced recovery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 174,
    question: "Which type of wound healing is most predictable?",
    choices: ["Primary", "Secondary", "Tertiary", "Depends on factors"],
    correctAnswer: 3
  },
  {
    id: 175,
    question: "What is the purpose of surgical leadership?",
    choices: ["Guide team", "Ensure quality", "Drive improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 176,
    question: "Which surgical instrument is most critical?",
    choices: ["Scalpel", "Retractor", "Suction", "All are critical"],
    correctAnswer: 3
  },
  {
    id: 177,
    question: "What is the most important aspect of surgical training?",
    choices: ["Technical skills", "Clinical judgment", "Patient care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 178,
    question: "Which type of suture is most reliable?",
    choices: ["Natural", "Synthetic", "Absorbable", "Depends on use"],
    correctAnswer: 3
  },
  {
    id: 179,
    question: "What is the purpose of surgical mentorship?",
    choices: ["Transfer knowledge", "Develop skills", "Build character", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 180,
    question: "Which surgical approach is most challenging?",
    choices: ["Open", "Laparoscopic", "Robotic", "Depends on complexity"],
    correctAnswer: 3
  },
  {
    id: 181,
    question: "What is the primary benefit of surgical expertise?",
    choices: ["Better outcomes", "Fewer complications", "Improved efficiency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 182,
    question: "Which type of wound is most complex?",
    choices: ["Acute", "Chronic", "Infected", "Depends on factors"],
    correctAnswer: 3
  },
  {
    id: 183,
    question: "What is the purpose of surgical excellence?",
    choices: ["Patient benefit", "Professional standard", "Institutional quality", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 184,
    question: "Which surgical instrument is most essential?",
    choices: ["Scalpel", "Forceps", "Needle holder", "All are essential"],
    correctAnswer: 3
  },
  {
    id: 185,
    question: "What is the most important outcome of surgical care?",
    choices: ["Cure", "Palliation", "Function", "Quality of life"],
    correctAnswer: 3
  },
  {
    id: 186,
    question: "Which type of anesthesia is most suitable?",
    choices: ["General", "Regional", "Local", "Depends on procedure"],
    correctAnswer: 3
  },
  {
    id: 187,
    question: "What is the purpose of surgical precision?",
    choices: ["Minimize trauma", "Optimize outcome", "Reduce complications", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 188,
    question: "Which surgical approach is most effective?",
    choices: ["Open", "Minimally invasive", "Robotic", "Evidence-based"],
    correctAnswer: 3
  },
  {
    id: 189,
    question: "What is the primary responsibility of surgical team?",
    choices: ["Patient safety", "Quality care", "Optimal outcome", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 190,
    question: "Which type of wound care is most important?",
    choices: ["Prevention", "Treatment", "Monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 191,
    question: "What is the purpose of surgical commitment?",
    choices: ["Patient welfare", "Professional duty", "Continuous improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 192,
    question: "Which surgical instrument requires the most care?",
    choices: ["Delicate instruments", "Expensive instruments", "Reusable instruments", "All instruments"],
    correctAnswer: 3
  },
  {
    id: 193,
    question: "What is the most critical factor in surgical success?",
    choices: ["Preparation", "Execution", "Follow-up", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 194,
    question: "Which type of suture technique is most appropriate?",
    choices: ["Simple", "Complex", "Specialized", "Depends on situation"],
    correctAnswer: 3
  },
  {
    id: 195,
    question: "What is the purpose of surgical integrity?",
    choices: ["Ethical practice", "Quality care", "Professional standard", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 196,
    question: "Which surgical approach requires the most skill?",
    choices: ["Open", "Laparoscopic", "Robotic", "All require skill"],
    correctAnswer: 3
  },
  {
    id: 197,
    question: "What is the primary goal of surgical education?",
    choices: ["Knowledge transfer", "Skill development", "Safety training", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 198,
    question: "Which type of wound is most important to prevent?",
    choices: ["Surgical site infection", "Dehiscence", "Keloid", "All complications"],
    correctAnswer: 3
  },
  {
    id: 199,
    question: "What is the purpose of surgical standards?",
    choices: ["Quality assurance", "Safety compliance", "Best practice", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 200,
    question: "Which surgical principle is most fundamental?",
    choices: ["Asepsis", "Hemostasis", "Tissue handling", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 201,
    question: "Which bone is also known as the malar bone?",
    choices: ["Maxilla", "Zygomatic", "Mandible", "Frontal"],
    correctAnswer: 1
  },
  {
    id: 202,
    question: "The Le Fort I fracture is also called a:",
    choices: ["Mustache fracture", "Blowout fracture", "Craniofacial fracture", "Pyramid maxillary fracture"],
    correctAnswer: 0
  },
  {
    id: 203,
    question: "Arch bars are primarily used to realign the:",
    choices: ["Zygomatic bone", "Mandible and maxilla", "Orbital floor", "Nasal septum"],
    correctAnswer: 1
  },
  {
    id: 204,
    question: "The orbital floor fracture is also known as:",
    choices: ["Le Fort I", "Le Fort III", "Blowout fracture", "Mustache fracture"],
    correctAnswer: 2
  },
  {
    id: 205,
    question: "The surgeon protects the cornea during orbital floor surgery with:",
    choices: ["Plastic sheeting", "Corneal eye protectors", "Cotton pledgets", "Silicone shields"],
    correctAnswer: 1
  },
  {
    id: 206,
    question: "In a Le Fort II fracture, the neurosurgeon must be present because of possible damage to the:",
    choices: ["Orbital floor", "Nasal bone", "Brain tissue and CSF leakage", "Maxilla"],
    correctAnswer: 2
  },
  {
    id: 207,
    question: "The malocclusion that results from misalignment of the jaws can be corrected with:",
    choices: ["MMA", "MMF", "Arch bars", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 208,
    question: "Temporomandibular joint (TMJ) surgery is indicated for all of the following except:",
    choices: ["Muscle tension", "Malocclusion", "Trauma", "Sleep apnea"],
    correctAnswer: 3
  },
  {
    id: 209,
    question: "The snail-shaped structure of the inner ear that contains the organ of Corti is the:",
    choices: ["Vestibule", "Cochlea", "Semicircular canal", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 210,
    question: "The ossicles include all of the following except:",
    choices: ["Malleus", "Incus", "Cochlea", "Stapes"],
    correctAnswer: 2
  },
  {
    id: 211,
    question: "The external ear terminates at the:",
    choices: ["Tympanic membrane", "Eustachian tube", "Auricle", "Middle ear"],
    correctAnswer: 0
  },
  {
    id: 212,
    question: "The nasal cavity is connected to the ear by the:",
    choices: ["Cochlea", "Vestibule", "Eustachian tube", "Tympanic membrane"],
    correctAnswer: 2
  },
  {
    id: 213,
    question: "Choanal atresia repair may involve the use of a:",
    choices: ["Microdebrider", "Stensen's duct probe", "Tuning fork", "Arch bar"],
    correctAnswer: 0
  },
  {
    id: 214,
    question: "The paranasal sinuses located behind the lower forehead are the:",
    choices: ["Maxillary", "Ethmoid", "Frontal", "Sphenoid"],
    correctAnswer: 2
  },
  {
    id: 215,
    question: "The surgical opening into the maxillary sinus to treat chronic sinusitis is called an:",
    choices: ["Antrostomy", "Polypectomy", "Mastoidectomy", "Tympanoplasty"],
    correctAnswer: 0
  },
  {
    id: 216,
    question: "During a parotidectomy, care must be taken to preserve the:",
    choices: ["Seventh cranial nerve", "Fifth cranial nerve", "Eighth cranial nerve", "Tenth cranial nerve"],
    correctAnswer: 0
  },
  {
    id: 217,
    question: "The largest of the salivary glands is the:",
    choices: ["Sublingual", "Submandibular", "Parotid", "Adenoid"],
    correctAnswer: 2
  },
  {
    id: 218,
    question: "The larynx has all of the following functions except:",
    choices: ["Passageway for respiration", "Prevents aspiration", "Houses the pituitary gland", "Source of vocalization"],
    correctAnswer: 2
  },
  {
    id: 219,
    question: "Which cartilage is also called the Adam's apple?",
    choices: ["Cricoid", "Arytenoid", "Thyroid", "Epiglottis"],
    correctAnswer: 2
  },
  {
    id: 220,
    question: "Laryngectomy is performed to treat:",
    choices: ["Sinusitis", "TMJ disorder", "Laryngeal cancer", "Sleep apnea"],
    correctAnswer: 2
  },
  {
    id: 221,
    question: "A permanent opening in the neck after a total laryngectomy is called a:",
    choices: ["Tracheostomy", "Fistula", "Stoma", "Anastomosis"],
    correctAnswer: 1
  },
  {
    id: 222,
    question: "The purpose of wet gauze during laser laryngeal surgery is to:",
    choices: ["Clean the field", "Prevent a fire", "Keep the tissues moist", "Absorb bleeding"],
    correctAnswer: 1
  },
  {
    id: 223,
    question: "The trachea is composed of:",
    choices: ["Solid bone rings", "Incomplete c-shaped cartilage rings", "Muscle only", "Connective tissue only"],
    correctAnswer: 1
  },
  {
    id: 224,
    question: "A tracheostomy is indicated for all of the following except:",
    choices: ["Chronic lung disease", "Sleep apnea", "Vocal cord paralysis", "Trauma"],
    correctAnswer: 1
  },
  {
    id: 225,
    question: "The cranial nerve that supplies motor innervation to the pharynx and larynx is the:",
    choices: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 3
  },
  {
    id: 226,
    question: "The vestibulocochlear nerve connects the inner ear to the:",
    choices: ["Lungs", "Nose", "Brain", "Larynx"],
    correctAnswer: 2
  },
  {
    id: 227,
    question: "Otitis media is an inflammation of the:",
    choices: ["Inner ear", "Middle ear", "Outer ear", "Eustachian tube"],
    correctAnswer: 1
  },
  {
    id: 228,
    question: "Tympanoplasty is performed to repair the:",
    choices: ["Cochlea", "Semicircular canals", "Tympanic membrane", "Eustachian tube"],
    correctAnswer: 2
  },
  {
    id: 229,
    question: "Cholesteatoma is treated with a:",
    choices: ["Mastoidectomy", "Tympanoplasty", "Stapedectomy", "Antrostomy"],
    correctAnswer: 0
  },
  {
    id: 230,
    question: "The abnormal bone growth of the stapes is called:",
    choices: ["Meniere's disease", "Otosclerosis", "Bell's palsy", "Cholesteatoma"],
    correctAnswer: 1
  },
  {
    id: 231,
    question: "Stapedectomy prosthetic materials include all except:",
    choices: ["Stainless steel", "Platinum", "Teflon", "Bone cement"],
    correctAnswer: 3
  },
  {
    id: 232,
    question: "Meniere's disease primarily affects the:",
    choices: ["Middle ear", "Inner ear", "Eustachian tube", "Nasal cavity"],
    correctAnswer: 1
  },
  {
    id: 233,
    question: "Bell's palsy affects which cranial nerve?",
    choices: ["Fifth", "Sixth", "Seventh", "Eighth"],
    correctAnswer: 2
  },
  {
    id: 234,
    question: "Facial nerve decompression surgery is done to treat all of the following except:",
    choices: ["Trauma", "Bell's palsy", "TMJ disorder", "Tumors"],
    correctAnswer: 2
  },
  {
    id: 235,
    question: "A cochlear implant receiver is placed in the:",
    choices: ["Cochlea", "Tympanic membrane", "Mastoid process", "Semicircular canals"],
    correctAnswer: 2
  },
  {
    id: 236,
    question: "Submucous resection is performed to correct problems of the:",
    choices: ["Vocal cords", "Nasal septum", "Maxilla", "Larynx"],
    correctAnswer: 1
  },
  {
    id: 237,
    question: "The moustache dressing is used after surgery on the:",
    choices: ["Trachea", "Nose", "Larynx", "Ear"],
    correctAnswer: 1
  },
  {
    id: 238,
    question: "Which instrument is used to retract the uvula during tonsillectomy?",
    choices: ["Freer elevator", "Robinson catheter", "Coblator", "Adenotome"],
    correctAnswer: 1
  },
  {
    id: 239,
    question: "Which nerve is responsible for movements of the facial muscles?",
    choices: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 1
  },
  {
    id: 240,
    question: "Myringotomy tubes are also called all of the following except:",
    choices: ["PETs", "Tympanostomy tubes", "Ventilation tubes", "Arch bars"],
    correctAnswer: 3
  },
  {
    id: 241,
    question: "Mastoiditis is an inflammation of the:",
    choices: ["Temporal bone", "Eustachian tube", "Parotid gland", "Semicircular canal"],
    correctAnswer: 0
  },
  {
    id: 242,
    question: "Otosclerosis prevents the stapes from:",
    choices: ["Growing", "Vibrating", "Fusing", "Moving inward"],
    correctAnswer: 1
  },
  {
    id: 243,
    question: "The labyrinth is made up of all of the following except:",
    choices: ["Vestibule", "Cochlea", "Eustachian tube", "Semicircular canals"],
    correctAnswer: 2
  },
  {
    id: 244,
    question: "The Caldwell-Luc incision is made in the:",
    choices: ["Maxilla", "Canine fossa", "Orbital floor", "Inferior turbinate"],
    correctAnswer: 1
  },
  {
    id: 245,
    question: "Thyroxine and triiodothyronine are produced by the:",
    choices: ["Parathyroid", "Pituitary", "Thyroid", "Adrenal"],
    correctAnswer: 2
  },
  {
    id: 246,
    question: "TSH is produced by the:",
    choices: ["Thyroid", "Pituitary", "Parathyroid", "Adrenal"],
    correctAnswer: 1
  },
  {
    id: 247,
    question: "The middle portion of the thyroid gland that connects the two lobes is called the:",
    choices: ["Isthmus", "Node", "Fossa", "Pedicle"],
    correctAnswer: 0
  },
  {
    id: 248,
    question: "Thyroid scan radiotracers include:",
    choices: ["Technetium", "Iodine", "Both A and B", "Potassium"],
    correctAnswer: 2
  },
  {
    id: 249,
    question: "A goiter refers to an enlarged:",
    choices: ["Larynx", "Thyroid gland", "Parathyroid gland", "Pituitary gland"],
    correctAnswer: 1
  },
  {
    id: 250,
    question: "Cold nodules appear on the scan as:",
    choices: ["Darker", "Lighter", "Hot", "Equal density"],
    correctAnswer: 0
  },
  {
    id: 251,
    question: "The definitive diagnostic test for thyroid cancer is:",
    choices: ["CT scan", "Fine-needle aspiration", "MRI", "Thyroid scan"],
    correctAnswer: 1
  },
  {
    id: 252,
    question: "The most common cause of hyperthyroidism is:",
    choices: ["Graves disease", "Goiter", "Cold nodule", "Thyroid cancer"],
    correctAnswer: 0
  },
  {
    id: 253,
    question: "The external ear is lined with glands that secrete:",
    choices: ["Saliva", "Cerumen", "Mucus", "Sebum"],
    correctAnswer: 1
  },
  {
    id: 254,
    question: "The external opening of the nose is called the:",
    choices: ["Nares", "Septum", "Alar cartilage", "Turbinate"],
    correctAnswer: 0
  },
  {
    id: 255,
    question: "The surgical scraping of the frontal sinus to drain pus is called:",
    choices: ["Trephination", "Polypectomy", "Antrostomy", "Caldwell-Luc"],
    correctAnswer: 0
  },
  {
    id: 256,
    question: "Rhinorrhea refers to:",
    choices: ["Nosebleed", "Discharge from the nose", "Nasal obstruction", "Deviated septum"],
    correctAnswer: 1
  },
  {
    id: 257,
    question: "The ninth cranial nerve is responsible for:",
    choices: ["Hearing", "Balance", "Facial expression", "Not discussed"],
    correctAnswer: 3
  },
  {
    id: 258,
    question: "The epiglottis functions to:",
    choices: ["Aid phonation", "Protect the airway during swallowing", "Support the trachea", "Open the vocal cords"],
    correctAnswer: 1
  },
  {
    id: 259,
    question: "A rigid laryngoscope is used for:",
    choices: ["Tracheostomy", "Direct visualization of the larynx", "TMJ surgery", "Sinus surgery"],
    correctAnswer: 1
  },
  {
    id: 260,
    question: "What is the name of the opening created by a tracheostomy?",
    choices: ["Fistula", "Stoma", "Nares", "Trephine"],
    correctAnswer: 1
  },
  {
    id: 261,
    question: "Mastoidectomy is sometimes performed to treat:",
    choices: ["Cholesteatoma", "Otosclerosis", "Meniere's disease", "Tinnitus"],
    correctAnswer: 0
  },
  {
    id: 262,
    question: "Otosclerosis results in which type of hearing loss?",
    choices: ["Conductive", "Sensorineural", "Mixed", "Central"],
    correctAnswer: 0
  },
  {
    id: 263,
    question: "What is the primary purpose of a tonsillectomy and adenoidectomy?",
    choices: ["Remove fluid from the middle ear", "Remove enlarged infected lymphoid tissue", "Correct nasal fractures", "Drain sinus cavities"],
    correctAnswer: 1
  },
  {
    id: 264,
    question: "Which type of tonsils are also known as adenoids?",
    choices: ["Palatine tonsils", "Pharyngeal tonsils", "Lingual tonsils", "Cervical tonsils"],
    correctAnswer: 1
  },
  {
    id: 265,
    question: "Which instrument is used to grasp the tonsils during a tonsillectomy?",
    choices: ["Allis clamp", "Adson forceps", "Bayonet forceps", "Yankauer suction"],
    correctAnswer: 0
  },
  {
    id: 266,
    question: "What does the COBLATOR instrument use to remove tissue?",
    choices: ["Laser energy", "Ultrasonic waves", "Radiofrequency energy with saline", "Cryotherapy"],
    correctAnswer: 2
  },
  {
    id: 267,
    question: "Which patient position is appropriate after a tonsillectomy and adenoidectomy?",
    choices: ["Trendelenburg", "Prone", "Supine with neck extended", "Lateral with head elevated"],
    correctAnswer: 3
  },
  {
    id: 268,
    question: "Which cranial nerve controls facial muscles?",
    choices: ["Fifth", "Seventh", "Eighth", "Tenth"],
    correctAnswer: 1
  },
  {
    id: 269,
    question: "Which of the following is an abnormal fluid accumulation in the middle ear?",
    choices: ["Mastoiditis", "Effusion", "Cholesteatoma", "Tinnitus"],
    correctAnswer: 1
  },
  {
    id: 270,
    question: "What are the small hollow tubes placed in the tympanic membrane during a myringotomy called?",
    choices: ["Adenoids", "Grafts", "Tympanostomy tubes", "Splints"],
    correctAnswer: 2
  },
  {
    id: 271,
    question: "What is the primary purpose of a mastoidectomy?",
    choices: ["Treat otosclerosis", "Remove infected mastoid bone", "Place ear tubes", "Repair tympanic membrane"],
    correctAnswer: 1
  },
  {
    id: 272,
    question: "Otosclerosis affects which ossicle?",
    choices: ["Malleus", "Incus", "Stapes", "Cochlea"],
    correctAnswer: 2
  },
  {
    id: 273,
    question: "Which disease is associated with dizziness and tinnitus?",
    choices: ["Bell's palsy", "Meniere's disease", "Cholesteatoma", "Otitis media"],
    correctAnswer: 1
  },
  {
    id: 274,
    question: "Which procedure is performed for congenital or acquired deafness?",
    choices: ["Stapedectomy", "Cochlear implant", "Tympanoplasty", "Mastoidectomy"],
    correctAnswer: 1
  },
  {
    id: 275,
    question: "What is the proper treatment for Bell's palsy?",
    choices: ["Cochlear implant", "Facial nerve decompression", "Tympanoplasty", "Labyrinthectomy"],
    correctAnswer: 1
  },
  {
    id: 276,
    question: "Which nerve is associated with trigeminal neuralgia?",
    choices: ["Vagus", "Facial", "Trigeminal", "Vestibulocochlear"],
    correctAnswer: 2
  },
  {
    id: 277,
    question: "What is a submucous resection (SMR) performed for?",
    choices: ["Repair tympanic membrane", "Correct deviated nasal septum", "Remove nasal polyps", "Treat sinus infection"],
    correctAnswer: 1
  },
  {
    id: 278,
    question: "What is the purpose of a moustache dressing?",
    choices: ["Close nasal septum", "Stabilize fractured nose", "Collect drainage under the nose", "Improve nasal airflow"],
    correctAnswer: 2
  },
  {
    id: 279,
    question: "What is the primary treatment for epistaxis?",
    choices: ["Cauterization", "Direct pressure", "Artery ligation", "Packing"],
    correctAnswer: 1
  },
  {
    id: 280,
    question: "What is the most common scope angle used in FESS?",
    choices: ["0°", "30°", "70°", "90°"],
    correctAnswer: 0
  },
  {
    id: 281,
    question: "What is a Caldwell–Luc procedure performed for?",
    choices: ["Repair thyroid", "Drain maxillary sinus", "Remove nasal polyps", "Close tracheostomy"],
    correctAnswer: 1
  },
  {
    id: 282,
    question: "Which hormone does the thyroid gland produce?",
    choices: ["TSH", "T4 and T3", "PTH", "ACTH"],
    correctAnswer: 1
  },
  {
    id: 283,
    question: "What is a hot thyroid nodule?",
    choices: ["Hypofunctional", "Malignant", "Overactive and dark on scan", "Nonfunctional"],
    correctAnswer: 2
  },
  {
    id: 284,
    question: "Which disease is the most common cause of hyperthyroidism?",
    choices: ["Hashimoto's", "Graves'", "Goiter", "Hypocalcemia"],
    correctAnswer: 1
  },
  {
    id: 285,
    question: "Which disease is an autoimmune cause of hypothyroidism?",
    choices: ["Hashimoto's", "Graves'", "Goiter", "Hypocalcemia"],
    correctAnswer: 0
  },
  {
    id: 286,
    question: "What does the parathyroid hormone regulate?",
    choices: ["Sodium", "Potassium", "Calcium", "Iodine"],
    correctAnswer: 2
  },
  {
    id: 287,
    question: "What is the biggest concern in parathyroid surgery?",
    choices: ["Hyperthyroidism", "Hypocalcemia", "Hypothyroidism", "Hyperkalemia"],
    correctAnswer: 1
  },
  {
    id: 288,
    question: "Which nerve must be preserved during thyroid surgery?",
    choices: ["Facial", "Trigeminal", "Recurrent laryngeal", "Vestibulocochlear"],
    correctAnswer: 2
  },
  {
    id: 289,
    question: "Damage to both recurrent laryngeal nerves can cause:",
    choices: ["Hoarseness", "Difficulty swallowing", "Paralysis of tongue", "Inability to speak and breathe"],
    correctAnswer: 3
  },
  {
    id: 290,
    question: "What incision is used for a thyroidectomy?",
    choices: ["Midline", "Trifurcate", "Collar", "Lateral"],
    correctAnswer: 2
  },
  {
    id: 291,
    question: "What is a thyroglossal duct cyst?",
    choices: ["Acquired neck mass", "Congenital cyst in anterior neck", "Thyroid carcinoma", "Parathyroid adenoma"],
    correctAnswer: 1
  },
  {
    id: 292,
    question: "What is a glossectomy?",
    choices: ["Remove part of tongue", "Remove larynx", "Remove thyroid", "Repair vocal cords"],
    correctAnswer: 0
  },
  {
    id: 293,
    question: "What is the outermost layer of skin?",
    choices: ["Dermis", "Subcutaneous", "Fascia", "Epidermis"],
    correctAnswer: 3
  },
  {
    id: 294,
    question: "What layer contains connective tissue, nerves, and glands?",
    choices: ["Epidermis", "Dermis", "Fascia", "Subcutaneous"],
    correctAnswer: 1
  },
  {
    id: 295,
    question: "What is a hypertrophic scar?",
    choices: ["Flat scar", "Raised but less than keloid", "Malignant scar", "Normal healing tissue"],
    correctAnswer: 1
  },
  {
    id: 296,
    question: "Which burn damages only the epidermis?",
    choices: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 0
  },
  {
    id: 297,
    question: "Which burn damages all skin layers and underlying tissue?",
    choices: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 2
  },
  {
    id: 298,
    question: "What is the purpose of a three-layer dressing?",
    choices: ["Apply pressure", "Provide airtight seal", "Wick away secretions", "Protect and absorb drainage"],
    correctAnswer: 3
  },
  {
    id: 299,
    question: "What is a split-thickness skin graft?",
    choices: ["Includes epidermis and full dermis", "Includes only epidermis", "Includes epidermis and partial dermis", "Includes epidermis and fascia"],
    correctAnswer: 2
  },
  {
    id: 300,
    question: "Which graft is taken from another person?",
    choices: ["Autograft", "Allograft", "Xenograft", "Pedicle flap"],
    correctAnswer: 1
  },
  {
    id: 301,
    question: "Which instrument is used to harvest skin grafts?",
    choices: ["Coblator", "Allis", "Dermabrader", "Dermatome"],
    correctAnswer: 3
  },
  {
    id: 302,
    question: "Which is the most serious type of skin cancer?",
    choices: ["Squamous cell", "Melanoma", "Basal cell", "Keloid"],
    correctAnswer: 1
  },
  {
    id: 303,
    question: "Which pressure ulcer stage involves full tissue breakdown to muscle or bone?",
    choices: ["Stage I", "Stage II", "Stage III", "Stage IV"],
    correctAnswer: 3
  },
  {
    id: 304,
    question: "Which body site is most prone to pressure ulcers?",
    choices: ["Sacrum", "Abdomen", "Shoulder", "Neck"],
    correctAnswer: 0
  },
  {
    id: 305,
    question: "What is a TRAM flap used for?",
    choices: ["Treat breast cancer", "Reconstruct breast after mastectomy", "Repair abdominal hernia", "Reduce breast size"],
    correctAnswer: 1
  },
  {
    id: 306,
    question: "What artery supplies a TRAM flap?",
    choices: ["Internal mammary", "Superior epigastric", "External iliac", "Subclavian"],
    correctAnswer: 1
  },
  {
    id: 307,
    question: "What is the most common incision for breast augmentation?",
    choices: ["Transumbilical", "Periareolar", "Inframammary", "Transaxillary"],
    correctAnswer: 2
  },
  {
    id: 308,
    question: "Which breast implant placement is below pectoralis major?",
    choices: ["Subglandular", "Subpectoral", "Subfascial", "Subcutaneous"],
    correctAnswer: 1
  },
  {
    id: 309,
    question: "What is the purpose of capsulotomy?",
    choices: ["Remove implant", "Reduce scar tissue around implant", "Increase breast size", "Place drain"],
    correctAnswer: 1
  },
  {
    id: 310,
    question: "What is the rule of nines used for?",
    choices: ["Calculate blood loss", "Estimate burn area", "Determine graft size", "Measure ulcer depth"],
    correctAnswer: 1
  },
  {
    id: 311,
    question: "What is the Lund-Browder chart more accurate for?",
    choices: ["Adults", "Elderly", "Children", "Infants"],
    correctAnswer: 2
  },
  {
    id: 312,
    question: "What is used to secure a split-thickness graft?",
    choices: ["Sutures", "Dermabrader", "Stent dressing", "Compression wrap"],
    correctAnswer: 2
  },
  {
    id: 313,
    question: "What does negative pressure wound therapy do?",
    choices: ["Delivers oxygen", "Removes bacteria and pulls wound edges", "Promotes edema", "Prevents scarring"],
    correctAnswer: 1
  },
  {
    id: 314,
    question: "Which dressing is used for clean closed wounds?",
    choices: ["Wet-to-dry", "Wet-to-wet", "One-layer", "Stent"],
    correctAnswer: 2
  },
  {
    id: 315,
    question: "Which type of dressing absorbs large amounts of drainage?",
    choices: ["One-layer", "Pressure dressing", "Wet-to-wet", "Occlusive"],
    correctAnswer: 1
  },
  {
    id: 316,
    question: "Which type of graft is stretched using a mesh device?",
    choices: ["FTSG", "STSG", "Allograft", "Xenograft"],
    correctAnswer: 1
  },
  {
    id: 317,
    question: "What is a pedicle flap?",
    choices: ["Free flap", "Graft from another species", "Attached flap maintaining blood supply", "Skin substitute"],
    correctAnswer: 2
  },
  {
    id: 318,
    question: "Which of the following is true about basal cell carcinoma?",
    choices: ["Most aggressive skin cancer", "Least risky and slow growing", "Spreads to organs", "Found in squamous layer"],
    correctAnswer: 1
  },
  {
    id: 319,
    question: "What is Mohs surgery?",
    choices: ["Removal of tumor and lymph nodes", "Thin layers of skin examined microscopically", "Skin grafting procedure", "Removal of entire skin lesion in one piece"],
    correctAnswer: 1
  },
  {
    id: 320,
    question: "What is the proper way to handle breast implants?",
    choices: ["Keep dry and powdered", "Use oil on gloves", "Place on lint-free surface", "Store in alcohol"],
    correctAnswer: 2
  },
  {
    id: 321,
    question: "What is a fourth-degree burn?",
    choices: ["Only epidermis damaged", "Involves dermis", "White, dry, no sensation", "Extends to muscle and bone"],
    correctAnswer: 3
  },
  {
    id: 322,
    question: "Which of the following is used to recreate the areola?",
    choices: ["Skin graft", "Tattooing", "TRAM flap", "Pedicle flap"],
    correctAnswer: 1
  },
  {
    id: 323,
    question: "Which muscle is used in a TRAM flap?",
    choices: ["External oblique", "Internal oblique", "Rectus abdominis", "Pectoralis major"],
    correctAnswer: 2
  },
  {
    id: 324,
    question: "What is the recommended skin prep solution for a graft donor site?",
    choices: ["Betadine", "Alcohol", "Colorless solution", "Chlorhexidine"],
    correctAnswer: 2
  },
  {
    id: 325,
    question: "What does a mesh graft allow?",
    choices: ["More durable graft", "Larger area coverage", "Faster healing", "Less scarring"],
    correctAnswer: 1
  },
  {
    id: 326,
    question: "What is the most effective barrier against infection?",
    choices: ["Dermis", "Fascia", "Epidermis", "Subcutaneous layer"],
    correctAnswer: 2
  },
  {
    id: 327,
    question: "What is Langer's lines?",
    choices: ["Muscle fibers", "Scar lines", "Natural skin lines used for incisions", "Blood vessels"],
    correctAnswer: 2
  },
  {
    id: 328,
    question: "What is the deepest skin layer listed below?",
    choices: ["Skin", "Muscle", "Subcutaneous fat", "Fascia"],
    correctAnswer: 2
  },
  {
    id: 329,
    question: "What is cicatrix?",
    choices: ["Scar tissue", "Dead tissue", "Healthy skin", "Tumor"],
    correctAnswer: 0
  },
  {
    id: 330,
    question: "What hormone controls the amount of calcium in the blood?",
    choices: ["Thyroid hormone", "Insulin", "Parathyroid hormone", "Calcitonin"],
    correctAnswer: 2
  },
  {
    id: 331,
    question: "Which condition is caused by lower than normal calcium levels in the blood?",
    choices: ["Hypercalcemia", "Hypocalcemia", "Hyperthyroidism", "Hashimoto's disease"],
    correctAnswer: 1
  },
  {
    id: 332,
    question: "Which of the following is a complication that can cause respiratory problems after thyroid surgery?",
    choices: ["Tetany", "Thyroid storm", "Laryngeal spasms", "Hypocalcemia"],
    correctAnswer: 2
  },
  {
    id: 333,
    question: "Hashimoto's disease is associated with:",
    choices: ["Hyperthyroidism", "Hypothyroidism", "Hypercalcemia", "Diabetes"],
    correctAnswer: 1
  },
  {
    id: 334,
    question: "During thyroid surgery, what nerve must be preserved to prevent hoarseness or breathing difficulty?",
    choices: ["Vagus nerve", "Hypoglossal nerve", "Recurrent laryngeal nerve", "Phrenic nerve"],
    correctAnswer: 2
  },
  {
    id: 335,
    question: "A thyroid storm is best described as:",
    choices: ["Acute hypothyroid crisis", "Acute hyperthyroid crisis", "Hypercalcemic crisis", "Severe hypothermia"],
    correctAnswer: 1
  },
  {
    id: 336,
    question: "What is the correct position for a thyroidectomy?",
    choices: ["Prone", "Lateral", "Supine with neck hyperextended", "Fowler's"],
    correctAnswer: 2
  },
  {
    id: 337,
    question: "What type of incision is used for a thyroidectomy?",
    choices: ["Median", "Transverse/collar", "Vertical", "Oblique"],
    correctAnswer: 1
  },
  {
    id: 338,
    question: "Damage to the recurrent laryngeal nerve on both sides can result in:",
    choices: ["Hoarseness", "Complete loss of smell", "Difficulty speaking and breathing", "Blindness"],
    correctAnswer: 2
  },
  {
    id: 339,
    question: "The classical radical neck dissection involves removal of which of the following?",
    choices: ["Thyroid gland", "Parathyroid gland", "Sternocleidomastoid muscle", "Cricoid cartilage"],
    correctAnswer: 2
  },
  {
    id: 340,
    question: "What is the most superficial layer of the skin?",
    choices: ["Dermis", "Epidermis", "Fascia", "Subcutaneous fat"],
    correctAnswer: 1
  },
  {
    id: 341,
    question: "Langer's lines are important because:",
    choices: ["They mark nerve pathways", "Incisions made along them heal better cosmetically", "They identify arteries", "They prevent infection"],
    correctAnswer: 1
  },
  {
    id: 342,
    question: "A hypertrophic scar is best described as:",
    choices: ["Normal scar tissue", "A raised, reddish, nodular scar", "A slightly raised but less pronounced scar", "A sunken scar"],
    correctAnswer: 2
  },
  {
    id: 343,
    question: "The 'rule of nines' is used to:",
    choices: ["Calculate electrolyte replacement", "Estimate burn surface area in adults", "Measure BMI", "Diagnose thyroid storm"],
    correctAnswer: 1
  },
  {
    id: 344,
    question: "A third-degree burn is described as:",
    choices: ["Superficial redness only", "Blistered and moist", "Full thickness, dry, white or charred", "Partial thickness, moist"],
    correctAnswer: 2
  },
  {
    id: 345,
    question: "Which dressing type applies even pressure and prevents edema?",
    choices: ["Wet-to-dry", "Pressure", "One-layer", "Occlusive"],
    correctAnswer: 1
  },
  {
    id: 346,
    question: "What is the purpose of a stent dressing?",
    choices: ["Immobilize the wound", "Eliminate dead space", "Hold a skin graft in place", "Protect against burns"],
    correctAnswer: 2
  },
  {
    id: 347,
    question: "A split-thickness skin graft includes:",
    choices: ["Epidermis only", "Epidermis and full dermis", "Epidermis and part of dermis", "Dermis only"],
    correctAnswer: 2
  },
  {
    id: 348,
    question: "Which type of graft is from a donor of a different species?",
    choices: ["Autograft", "Allograft", "Heterograft", "Pedicle flap"],
    correctAnswer: 2
  },
  {
    id: 349,
    question: "What instrument is used to cut thin slices of skin for grafting?",
    choices: ["Ferris-Smith", "Dermatome", "Tenotomy scissors", "Skin hook"],
    correctAnswer: 1
  },
  {
    id: 350,
    question: "A TRAM flap uses which muscle?",
    choices: ["Sternocleidomastoid", "Rectus abdominis", "Platysma", "Brachialis"],
    correctAnswer: 1
  },
  {
    id: 351,
    question: "The blood supply for a TRAM flap comes from the:",
    choices: ["Superior epigastric artery and vein", "Femoral artery", "Radial artery", "Inferior vena cava"],
    correctAnswer: 0
  },
  {
    id: 352,
    question: "Which is NOT a placement option for breast implants?",
    choices: ["Subglandular", "Subfascial", "Submuscular", "Subperiosteal"],
    correctAnswer: 3
  },
  {
    id: 353,
    question: "Which incision is used for augmentation mammoplasty?",
    choices: ["Transumbilical", "Transoral", "Posterior", "Midline"],
    correctAnswer: 0
  },
  {
    id: 354,
    question: "What does a capsulotomy treat?",
    choices: ["Tumor", "Scar tissue around breast implant", "Infected gland", "Carcinoma"],
    correctAnswer: 1
  },
  {
    id: 355,
    question: "What is the purpose of a mentoplasty?",
    choices: ["Reshape ears", "Reshape chin", "Reshape nose", "Reshape eyelids"],
    correctAnswer: 1
  },
  {
    id: 356,
    question: "A rhytidectomy is another term for:",
    choices: ["Facelift", "Nose job", "Brow lift", "Liposuction"],
    correctAnswer: 0
  },
  {
    id: 357,
    question: "Dermatochalasis refers to:",
    choices: ["Sagging of the eyelids", "Thickening of the skin", "Drooping of the mouth", "Overactive sebaceous glands"],
    correctAnswer: 0
  },
  {
    id: 358,
    question: "Which laser is most commonly used for skin resurfacing?",
    choices: ["Argon", "CO₂", "Nd:YAG", "Excimer"],
    correctAnswer: 1
  },
  {
    id: 359,
    question: "Liposuction removes fat through:",
    choices: ["Curettage", "High-pressure vacuum", "Laser ablation", "Radiofrequency ablation"],
    correctAnswer: 1
  },
  {
    id: 360,
    question: "Which gland secretes mucous to aid ejaculation?",
    choices: ["Prostate", "Cowper's", "Seminal vesicle", "Adrenal"],
    correctAnswer: 1
  },
  {
    id: 361,
    question: "The glomerulus is located in:",
    choices: ["Medulla of kidney", "Cortex of kidney", "Bladder", "Ureter"],
    correctAnswer: 1
  },
  {
    id: 362,
    question: "The functional unit of the kidney is the:",
    choices: ["Glomerulus", "Loop of Henle", "Nephron", "Bowman's capsule"],
    correctAnswer: 2
  },
  {
    id: 363,
    question: "The trigone of the bladder includes:",
    choices: ["Two ureter openings and one urethral opening", "Only ureter openings", "Only urethral opening", "None of the above"],
    correctAnswer: 0
  },
  {
    id: 364,
    question: "Which hormone is secreted by the adrenal medulla?",
    choices: ["Aldosterone", "Cortisol", "Epinephrine", "ACTH"],
    correctAnswer: 2
  },
  {
    id: 365,
    question: "Which hormone stimulates the adrenal cortex?",
    choices: ["ACTH", "TSH", "FSH", "LH"],
    correctAnswer: 0
  },
  {
    id: 366,
    question: "Where is the prostate gland located?",
    choices: ["Surrounds ureters", "At the base of the bladder neck around urethra", "In the scrotum", "On the penis shaft"],
    correctAnswer: 1
  },
  {
    id: 367,
    question: "BPH is best described as:",
    choices: ["Malignant tumor", "Noncancerous overgrowth of prostate", "Cyst in the prostate", "Blockage in the ureters"],
    correctAnswer: 1
  },
  {
    id: 368,
    question: "What is the purpose of irrigation fluids during GU procedures?",
    choices: ["Cool tissues", "Prevent infection", "Distend bladder and prevent hypothermia", "Anesthetize the bladder"],
    correctAnswer: 2
  },
  {
    id: 369,
    question: "What is a common solution for TURP procedures?",
    choices: ["Saline", "Glycine", "Dextrose", "Ringer's lactate"],
    correctAnswer: 1
  },
  {
    id: 370,
    question: "Which catheter is designed to bypass an obstruction?",
    choices: ["Foley", "Red Robinson", "Stent", "Coude"],
    correctAnswer: 2
  },
  {
    id: 371,
    question: "Which catheter is used to measure urine output with a drainage bag?",
    choices: ["Foley", "Plain", "Red Robinson", "Cone tip"],
    correctAnswer: 0
  },
  {
    id: 372,
    question: "Which of the following is a ureteral catheter tip?",
    choices: ["Whistle", "Robinson", "Foley", "Straight"],
    correctAnswer: 0
  },
  {
    id: 373,
    question: "Indwelling urethral stents include:",
    choices: ["Robinson and Coude", "Double J and double pigtail", "Foley and Garceau", "Olive and cone"],
    correctAnswer: 1
  },
  {
    id: 374,
    question: "What is the correct amount of water to fill a 5-cc Foley balloon?",
    choices: ["2–3 cc", "5 cc", "8–10 cc", "15 cc"],
    correctAnswer: 1
  },
  {
    id: 375,
    question: "The recurrent laryngeal nerve is a branch of which cranial nerve?",
    choices: ["VII", "X", "IX", "XI"],
    correctAnswer: 1
  },
  {
    id: 376,
    question: "What muscle is incised during a thyroidectomy?",
    choices: ["Platysma", "Masseter", "Digastric", "Buccinator"],
    correctAnswer: 0
  },
  {
    id: 377,
    question: "What dressing provides an airtight seal and prevents drying?",
    choices: ["Wet-to-dry", "Nonocclusive", "Occlusive", "Semiclusive"],
    correctAnswer: 2
  },
  {
    id: 378,
    question: "What is the purpose of moist peanuts in thyroid surgery?",
    choices: ["Grasp thyroid", "Retract muscles", "Blunt dissection", "Suture trachea"],
    correctAnswer: 2
  },
  {
    id: 379,
    question: "What is the proper position for neck dissection?",
    choices: ["Supine", "Lateral", "Prone", "Sitting"],
    correctAnswer: 0
  },
  {
    id: 380,
    question: "What incision is used for a neck dissection?",
    choices: ["Collar", "Trifurcate", "Midline", "Oblique"],
    correctAnswer: 1
  },
  {
    id: 381,
    question: "What instrument is specifically used in blepharoplasty?",
    choices: ["Frazier suction", "Iris scissors", "Adson forceps", "Blepharoplasty calipers"],
    correctAnswer: 3
  },
  {
    id: 382,
    question: "Which type of burn damages muscles and nerves?",
    choices: ["First-degree", "Second-degree", "Third-degree", "Fourth-degree"],
    correctAnswer: 3
  },
  {
    id: 383,
    question: "What is the purpose of a Doppler in breast reconstruction?",
    choices: ["Measure implant volume", "Preserve artery", "Position flap", "Identify nerve"],
    correctAnswer: 1
  },
  {
    id: 384,
    question: "What laser is used for tattoo removal?",
    choices: ["Argon", "CO₂", "Q-switched", "Excimer"],
    correctAnswer: 2
  },
  {
    id: 385,
    question: "What procedure is also called a nose job?",
    choices: ["Rhinoplasty", "Rhytidectomy", "Mentoplasty", "Otoplasty"],
    correctAnswer: 0
  },
  {
    id: 386,
    question: "The scrotum contains:",
    choices: ["Prostate and urethra", "Testes, epididymis, and spermatic cord", "Vas deferens and glans penis", "Bladder and prostate"],
    correctAnswer: 1
  },
  {
    id: 387,
    question: "Which tissue fills with blood during erection?",
    choices: ["Corpus luteum", "Corpus callosum", "Corpus spongiosum and cavernosum", "Corpus albicans"],
    correctAnswer: 2
  },
  {
    id: 388,
    question: "Which part of the nephron reabsorbs sodium and water?",
    choices: ["Bowman's capsule", "Loop of Henle", "Glomerulus", "Renal pelvis"],
    correctAnswer: 1
  },
  {
    id: 389,
    question: "Which scan is an x-ray with contrast of the entire urological system?",
    choices: ["KUB", "IVU", "MRI", "CT scan"],
    correctAnswer: 1
  },
  {
    id: 390,
    question: "What is the name of the erectile tissue surrounding the urethra?",
    choices: ["Corpus spongiosum", "Corpus cavernosum", "Glans penis", "Urethral meatus"],
    correctAnswer: 0
  },
  {
    id: 391,
    question: "Which is the most common type of breast cancer?",
    choices: ["Ductal carcinoma in situ", "Invasive ductal carcinoma", "Invasive lobular carcinoma", "Inflammatory breast cancer"],
    correctAnswer: 1
  },
  {
    id: 392,
    question: "Which lymph nodes are commonly removed during breast cancer surgery?",
    choices: ["Axillary", "Supraclavicular", "Internal mammary", "Infraclavicular"],
    correctAnswer: 0
  },
  {
    id: 393,
    question: "What is the primary goal of breast-conserving surgery?",
    choices: ["Remove all breast tissue", "Preserve cosmetic appearance", "Prevent recurrence", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 394,
    question: "Which imaging study is used to locate non-palpable breast lesions?",
    choices: ["Ultrasound", "Mammography", "Wire localization", "MRI"],
    correctAnswer: 2
  },
  {
    id: 395,
    question: "What is the most common complication of mastectomy?",
    choices: ["Infection", "Seroma", "Lymphedema", "Pneumothorax"],
    correctAnswer: 1
  },
  {
    id: 396,
    question: "Which type of mastectomy removes the nipple-areolar complex?",
    choices: ["Simple", "Modified radical", "Skin-sparing", "Nipple-sparing"],
    correctAnswer: 0
  },
  {
    id: 397,
    question: "What is the purpose of sentinel lymph node biopsy?",
    choices: ["Stage cancer", "Prevent lymphedema", "Guide treatment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 398,
    question: "Which reconstruction technique uses the patient's own tissue?",
    choices: ["Implant", "Autologous", "Synthetic", "Hybrid"],
    correctAnswer: 1
  },
  {
    id: 399,
    question: "What is the most common site for breast cancer metastasis?",
    choices: ["Lung", "Liver", "Bone", "Brain"],
    correctAnswer: 2
  },
  {
    id: 400,
    question: "Which hormone receptor is most commonly positive in breast cancer?",
    choices: ["Estrogen", "Progesterone", "HER2", "Androgen"],
    correctAnswer: 0
  },
  {
    id: 401,
    question: "What is the primary purpose of radiation therapy after breast-conserving surgery?",
    choices: ["Prevent recurrence", "Shrink tumor", "Relieve pain", "Improve cosmesis"],
    correctAnswer: 0
  },
  {
    id: 402,
    question: "Which type of biopsy provides the most tissue for diagnosis?",
    choices: ["Fine needle aspiration", "Core needle", "Vacuum-assisted", "Surgical"],
    correctAnswer: 3
  },
  {
    id: 403,
    question: "What is the most important prognostic factor in breast cancer?",
    choices: ["Tumor size", "Lymph node status", "Hormone receptors", "Age"],
    correctAnswer: 1
  },
  {
    id: 404,
    question: "Which surgical approach is used for deep-seated brain tumors?",
    choices: ["Craniotomy", "Stereotactic", "Endoscopic", "Microsurgical"],
    correctAnswer: 1
  },
  {
    id: 405,
    question: "What is the most common primary brain tumor in adults?",
    choices: ["Meningioma", "Glioblastoma", "Astrocytoma", "Oligodendroglioma"],
    correctAnswer: 1
  },
  {
    id: 406,
    question: "Which position is commonly used for posterior fossa surgery?",
    choices: ["Supine", "Prone", "Sitting", "Lateral"],
    correctAnswer: 2
  },
  {
    id: 407,
    question: "What is the primary concern during awake craniotomy?",
    choices: ["Pain control", "Airway management", "Neurological monitoring", "Infection prevention"],
    correctAnswer: 2
  },
  {
    id: 408,
    question: "Which imaging modality is used for intraoperative brain navigation?",
    choices: ["CT", "MRI", "Ultrasound", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 409,
    question: "What is the most common complication of brain surgery?",
    choices: ["Infection", "Bleeding", "Seizures", "Stroke"],
    correctAnswer: 1
  },
  {
    id: 410,
    question: "Which type of brain tumor is most likely to metastasize?",
    choices: ["Meningioma", "Glioblastoma", "Pituitary adenoma", "Acoustic neuroma"],
    correctAnswer: 1
  },
  {
    id: 411,
    question: "What is the purpose of intraoperative neurophysiological monitoring?",
    choices: ["Prevent complications", "Guide resection", "Monitor anesthesia", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 412,
    question: "Which approach is used for pituitary tumor resection?",
    choices: ["Transcranial", "Transsphenoidal", "Transoral", "Transnasal"],
    correctAnswer: 1
  },
  {
    id: 413,
    question: "What is the most common indication for shunt placement?",
    choices: ["Hydrocephalus", "Intracranial pressure", "Tumor drainage", "Infection"],
    correctAnswer: 0
  },
  {
    id: 414,
    question: "Which type of cardiac surgery requires cardiopulmonary bypass?",
    choices: ["Valve repair", "Coronary bypass", "Aortic surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 415,
    question: "What is the most common indication for cardiac surgery?",
    choices: ["Valve disease", "Coronary artery disease", "Congenital defects", "Arrhythmias"],
    correctAnswer: 1
  },
  {
    id: 416,
    question: "Which type of valve replacement lasts longest?",
    choices: ["Mechanical", "Bioprosthetic", "Homograft", "Autograft"],
    correctAnswer: 0
  },
  {
    id: 417,
    question: "What is the primary goal of coronary artery bypass?",
    choices: ["Restore blood flow", "Remove blockages", "Prevent heart attack", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 418,
    question: "Which graft is preferred for coronary bypass?",
    choices: ["Saphenous vein", "Internal mammary artery", "Radial artery", "Synthetic graft"],
    correctAnswer: 1
  },
  {
    id: 419,
    question: "What is the most common complication of cardiac surgery?",
    choices: ["Bleeding", "Infection", "Arrhythmias", "Stroke"],
    correctAnswer: 2
  },
  {
    id: 420,
    question: "Which procedure is used to treat aortic aneurysms?",
    choices: ["Bypass", "Replacement", "Repair", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 421,
    question: "What is the purpose of intra-aortic balloon pump?",
    choices: ["Support circulation", "Reduce afterload", "Improve coronary perfusion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 422,
    question: "Which type of heart transplant is most common?",
    choices: ["Orthotopic", "Heterotopic", "Xenotransplant", "Artificial heart"],
    correctAnswer: 0
  },
  {
    id: 423,
    question: "What is the primary indication for heart transplantation?",
    choices: ["End-stage heart failure", "Acute myocardial infarction", "Valve disease", "Arrhythmias"],
    correctAnswer: 0
  },
  {
    id: 424,
    question: "Which organ is most commonly transplanted?",
    choices: ["Kidney", "Liver", "Heart", "Lung"],
    correctAnswer: 0
  },
  {
    id: 425,
    question: "What is the primary cause of transplant rejection?",
    choices: ["Infection", "Immune response", "Ischemia", "Technical failure"],
    correctAnswer: 1
  },
  {
    id: 426,
    question: "Which immunosuppressive drug is most commonly used?",
    choices: ["Cyclosporine", "Tacrolimus", "Prednisone", "Mycophenolate"],
    correctAnswer: 1
  },
  {
    id: 427,
    question: "What is the most common complication of organ transplantation?",
    choices: ["Rejection", "Infection", "Malignancy", "Cardiovascular disease"],
    correctAnswer: 1
  },
  {
    id: 428,
    question: "Which type of liver transplant uses a living donor?",
    choices: ["Whole liver", "Split liver", "Living donor", "Auxiliary"],
    correctAnswer: 2
  },
  {
    id: 429,
    question: "What is the primary indication for liver transplantation?",
    choices: ["Cirrhosis", "Hepatitis", "Cancer", "Acute liver failure"],
    correctAnswer: 0
  },
  {
    id: 430,
    question: "Which blood type is the universal donor?",
    choices: ["A", "B", "AB", "O"],
    correctAnswer: 3
  },
  {
    id: 431,
    question: "What is the most important factor in organ allocation?",
    choices: ["Blood type", "HLA matching", "Urgency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 432,
    question: "Which surgical approach is used for robotic surgery?",
    choices: ["Open", "Laparoscopic", "Minimally invasive", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 433,
    question: "What is the primary advantage of robotic surgery?",
    choices: ["Precision", "Visualization", "Dexterity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 434,
    question: "Which specialty uses robotic surgery most commonly?",
    choices: ["Urology", "Gynecology", "Cardiac", "General surgery"],
    correctAnswer: 0
  },
  {
    id: 435,
    question: "What is the most common robotic surgical system?",
    choices: ["da Vinci", "Zeus", "AESOP", "ROBODOC"],
    correctAnswer: 0
  },
  {
    id: 436,
    question: "Which type of surgery benefits most from robotics?",
    choices: ["Precise dissection", "Suturing", "Confined spaces", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 437,
    question: "What is the primary disadvantage of robotic surgery?",
    choices: ["Cost", "Learning curve", "Limited tactile feedback", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 438,
    question: "Which imaging modality is integrated with robotic systems?",
    choices: ["CT", "MRI", "Ultrasound", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 439,
    question: "What is the future of robotic surgery?",
    choices: ["Artificial intelligence", "Autonomous surgery", "Haptic feedback", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 440,
    question: "Which type of training is required for robotic surgery?",
    choices: ["Simulation", "Proctoring", "Certification", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 441,
    question: "What is the most important aspect of surgical safety?",
    choices: ["Patient identification", "Site marking", "Time-out", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 442,
    question: "Which phase of surgery has the highest risk?",
    choices: ["Preoperative", "Intraoperative", "Postoperative", "All phases equal"],
    correctAnswer: 1
  },
  {
    id: 443,
    question: "What is the most common cause of surgical mortality?",
    choices: ["Bleeding", "Infection", "Anesthesia", "Cardiac events"],
    correctAnswer: 3
  },
  {
    id: 444,
    question: "Which factor most influences surgical outcomes?",
    choices: ["Surgeon experience", "Hospital volume", "Patient factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 445,
    question: "What is the primary goal of enhanced recovery protocols?",
    choices: ["Reduce complications", "Shorten stay", "Improve satisfaction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 446,
    question: "Which element is most important in surgical quality?",
    choices: ["Structure", "Process", "Outcome", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 447,
    question: "What is the most effective way to prevent surgical errors?",
    choices: ["Checklists", "Communication", "Training", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 448,
    question: "Which type of surgery has the lowest morbidity?",
    choices: ["Ambulatory", "Minimally invasive", "Day surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 449,
    question: "What is the most important factor in surgical success?",
    choices: ["Technical skill", "Judgment", "Teamwork", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 450,
    question: "Which approach represents the future of surgery?",
    choices: ["Minimally invasive", "Robotic", "Personalized", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 451,
    question: "What is the most important aspect of surgical education?",
    choices: ["Knowledge", "Skills", "Attitudes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 452,
    question: "Which factor is most critical for surgical innovation?",
    choices: ["Technology", "Research", "Collaboration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 453,
    question: "What is the ultimate goal of surgical care?",
    choices: ["Cure disease", "Relieve suffering", "Improve quality of life", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 454,
    question: "Which principle guides surgical practice?",
    choices: ["Primum non nocere", "Patient autonomy", "Beneficence", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 455,
    question: "What is the most rewarding aspect of surgery?",
    choices: ["Technical challenge", "Patient outcomes", "Professional growth", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 456,
    question: "Which quality defines surgical excellence?",
    choices: ["Precision", "Judgment", "Compassion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 457,
    question: "What is the essence of surgical practice?",
    choices: ["Art", "Science", "Service", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 458,
    question: "Which factor ensures surgical progress?",
    choices: ["Innovation", "Education", "Research", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 459,
    question: "What is the foundation of surgical success?",
    choices: ["Preparation", "Execution", "Follow-up", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 460,
    question: "Which element defines surgical mastery?",
    choices: ["Knowledge", "Skill", "Wisdom", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 461,
    question: "What is the purpose of surgical practice?",
    choices: ["Heal", "Help", "Hope", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 462,
    question: "Which value guides surgical decisions?",
    choices: ["Evidence", "Experience", "Ethics", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 463,
    question: "What is the measure of surgical success?",
    choices: ["Technical outcome", "Functional result", "Patient satisfaction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 464,
    question: "Which factor ensures surgical quality?",
    choices: ["Standards", "Monitoring", "Improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 465,
    question: "What is the goal of surgical training?",
    choices: ["Competence", "Proficiency", "Mastery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 466,
    question: "Which principle ensures surgical safety?",
    choices: ["Prevention", "Detection", "Correction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 467,
    question: "What is the future of surgical practice?",
    choices: ["Technology", "Precision", "Personalization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 468,
    question: "Which factor drives surgical advancement?",
    choices: ["Innovation", "Collaboration", "Dedication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 469,
    question: "What is the heart of surgical practice?",
    choices: ["Skill", "Knowledge", "Caring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 470,
    question: "Which element ensures surgical excellence?",
    choices: ["Preparation", "Performance", "Reflection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 471,
    question: "What is the spirit of surgery?",
    choices: ["Healing", "Discovery", "Service", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 472,
    question: "Which quality defines great surgeons?",
    choices: ["Technical skill", "Clinical judgment", "Human compassion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 473,
    question: "What is the legacy of surgical practice?",
    choices: ["Lives saved", "Knowledge shared", "Future surgeons trained", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 474,
    question: "Which factor ensures surgical continuity?",
    choices: ["Tradition", "Innovation", "Education", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 475,
    question: "What is the promise of surgery?",
    choices: ["Better outcomes", "Less invasive procedures", "Personalized care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 476,
    question: "Which element makes surgery meaningful?",
    choices: ["Technical achievement", "Patient benefit", "Professional satisfaction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 477,
    question: "What is the responsibility of surgeons?",
    choices: ["Patient care", "Professional growth", "Societal contribution", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 478,
    question: "Which factor ensures surgical integrity?",
    choices: ["Honesty", "Competence", "Accountability", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 479,
    question: "What is the joy of surgical practice?",
    choices: ["Solving problems", "Helping patients", "Advancing knowledge", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 480,
    question: "Which element defines surgical artistry?",
    choices: ["Precision", "Elegance", "Efficiency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 481,
    question: "What is the wisdom of surgery?",
    choices: ["Knowing when to operate", "Knowing how to operate", "Knowing when not to operate", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 482,
    question: "Which principle guides surgical ethics?",
    choices: ["Beneficence", "Non-maleficence", "Justice", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 483,
    question: "What is the challenge of modern surgery?",
    choices: ["Complexity", "Technology", "Expectations", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 484,
    question: "Which factor ensures surgical progress?",
    choices: ["Research", "Innovation", "Collaboration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 485,
    question: "What is the beauty of surgical practice?",
    choices: ["Precision", "Healing", "Transformation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 486,
    question: "Which element ensures surgical success?",
    choices: ["Preparation", "Skill", "Teamwork", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 487,
    question: "What is the honor of being a surgeon?",
    choices: ["Trust", "Responsibility", "Privilege", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 488,
    question: "Which factor makes surgery rewarding?",
    choices: ["Challenge", "Achievement", "Service", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 489,
    question: "What is the essence of surgical excellence?",
    choices: ["Perfect technique", "Optimal outcomes", "Patient-centered care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 490,
    question: "Which quality ensures surgical leadership?",
    choices: ["Vision", "Integrity", "Dedication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 491,
    question: "What is the future of surgical education?",
    choices: ["Simulation", "Mentorship", "Competency-based", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 492,
    question: "Which element defines surgical professionalism?",
    choices: ["Competence", "Integrity", "Service", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 493,
    question: "What is the goal of surgical research?",
    choices: ["Better understanding", "Improved techniques", "Enhanced outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 494,
    question: "Which factor ensures surgical quality?",
    choices: ["Standards", "Measurement", "Improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 495,
    question: "What is the mission of surgery?",
    choices: ["Cure disease", "Relieve suffering", "Restore function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 496,
    question: "Which principle guides surgical practice?",
    choices: ["Evidence-based", "Patient-centered", "Outcome-focused", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 497,
    question: "What is the standard of surgical care?",
    choices: ["Excellence", "Safety", "Effectiveness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 498,
    question: "Which factor ensures surgical advancement?",
    choices: ["Innovation", "Research", "Education", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 499,
    question: "What is the commitment of surgeons?",
    choices: ["Lifelong learning", "Continuous improvement", "Patient advocacy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 500,
    question: "Which element defines the surgical profession?",
    choices: ["Skill", "Knowledge", "Service", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 501,
    question: "What is the privilege of surgical practice?",
    choices: ["Healing", "Teaching", "Leading", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 502,
    question: "Which factor ensures surgical legacy?",
    choices: ["Excellence", "Innovation", "Mentorship", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 503,
    question: "What is the duty of surgical professionals?",
    choices: ["Patient care", "Professional development", "Societal contribution", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 504,
    question: "Which element makes surgery noble?",
    choices: ["Healing mission", "Scientific foundation", "Humanitarian purpose", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 505,
    question: "What is the inspiration of surgical practice?",
    choices: ["Helping others", "Advancing knowledge", "Making a difference", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 506,
    question: "Which factor ensures surgical impact?",
    choices: ["Quality", "Innovation", "Leadership", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 507,
    question: "What is the calling of surgery?",
    choices: ["Service", "Excellence", "Dedication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 508,
    question: "Which element defines surgical commitment?",
    choices: ["Patient focus", "Quality pursuit", "Continuous learning", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 509,
    question: "What is the reward of surgical practice?",
    choices: ["Lives saved", "Suffering relieved", "Function restored", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 510,
    question: "Which factor ensures surgical fulfillment?",
    choices: ["Meaningful work", "Positive impact", "Professional growth", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 511,
    question: "What is the cornerstone of surgical practice?",
    choices: ["Patient trust", "Professional competence", "Ethical conduct", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 512,
    question: "Which element ensures surgical respect?",
    choices: ["Competence", "Integrity", "Service", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 513,
    question: "What is the foundation of surgical trust?",
    choices: ["Competence", "Honesty", "Reliability", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 514,
    question: "Which factor makes surgical practice meaningful?",
    choices: ["Patient outcomes", "Professional satisfaction", "Societal impact", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 515,
    question: "What is the ultimate measure of surgical success?",
    choices: ["Patient benefit", "Professional achievement", "Societal contribution", "All of the above"],
    correctAnswer: 3
  }
];
