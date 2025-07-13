export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const principlesPracticeQuestions: Question[] = [
  // Chapter 5: Technological Science Concepts
  {
    id: 1,
    question: "The electrosurgical unit (ESU) works by:",
    choices: ["Heat conduction", "High-frequency current", "Laser energy", "Ultrasonic waves"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Monopolar electrosurgery requires:",
    choices: ["Two electrodes", "One electrode", "Grounding pad", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "Bipolar electrosurgery:",
    choices: ["Requires grounding pad", "Uses two electrodes", "Has higher power", "Is less precise"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "The cutting current in electrosurgery is:",
    choices: ["Continuous", "Interrupted", "Low frequency", "High voltage"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Coagulation current is:",
    choices: ["Continuous", "Interrupted", "Low power", "DC current"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Fulguration produces:",
    choices: ["Precise cutting", "Deep coagulation", "Superficial coagulation", "Tissue welding"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Desiccation produces:",
    choices: ["Superficial coagulation", "Deep coagulation", "Tissue cutting", "Tissue removal"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "The argon beam coagulator uses:",
    choices: ["Nitrogen gas", "Argon gas", "Oxygen", "Carbon dioxide"],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "Harmonic scalpel uses:",
    choices: ["Heat", "Electricity", "Ultrasonic energy", "Laser"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "LigaSure device uses:",
    choices: ["Ultrasonic energy", "Bipolar energy", "Monopolar energy", "Laser energy"],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "CO2 laser is absorbed by:",
    choices: ["Hemoglobin", "Water", "Melanin", "Protein"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Nd:YAG laser penetrates:",
    choices: ["Superficially", "Moderately", "Deeply", "Not at all"],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "Argon laser is absorbed by:",
    choices: ["Water", "Hemoglobin", "Melanin", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 14,
    question: "KTP laser appears:",
    choices: ["Red", "Blue", "Green", "Invisible"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "Laser safety requires:",
    choices: ["Eye protection", "Fire prevention", "Proper ventilation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "The laser safety officer is responsible for:",
    choices: ["Operating the laser", "Laser safety program", "Buying lasers", "Repairing lasers"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Cryosurgery uses:",
    choices: ["Heat", "Cold", "Pressure", "Vacuum"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Liquid nitrogen temperature is:",
    choices: ["-80°C", "-196°C", "-273°C", "-100°C"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "The C-arm provides:",
    choices: ["Fluoroscopy", "CT imaging", "MRI imaging", "Ultrasound"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "Image intensifier converts:",
    choices: ["X-rays to light", "Light to X-rays", "Sound to image", "Heat to image"],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "Lead aprons protect against:",
    choices: ["Heat", "Infection", "Radiation", "Chemicals"],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "ALARA principle means:",
    choices: ["Always Low And Reasonable Amounts", "As Low As Reasonably Achievable", "All Limits Are Reasonably Applied", "Always Limit All Radiation Activities"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Radiation exposure is measured in:",
    choices: ["Watts", "Joules", "Rems", "Degrees"],
    correctAnswer: 2
  },
  {
    id: 24,
    question: "Dosimeter badges measure:",
    choices: ["Temperature", "Radiation exposure", "Time", "Distance"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "Ultrasonic cleaners should NOT be used for:",
    choices: ["Stainless steel", "Plated instruments", "Microsurgical instruments", "Plastic items"],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "What is the purpose of a HEPA filter in smoke evacuation during laser surgery?",
    choices: ["To cool the air in the operating room", "To absorb odor from antiseptics", "To filter cells and particles from surgical smoke", "To sterilize the surgical instruments"],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "The ESU smoke is less dangerous than laser smoke because:",
    choices: ["It has no odor", "It contains fewer cellular particles", "It cannot cause respiratory irritation", "It is filtered automatically"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Which laser has a blue-green beam?",
    choices: ["CO₂", "Argon", "YAG", "Excimer"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "Excimer laser is used for:",
    choices: ["Ablating tissue without cutting", "Deep cuts", "Coagulating", "Dissecting"],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "Krypton laser beam color:",
    choices: ["Blue", "Red-yellow", "Green", "Invisible"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "YAG lasers are commonly used for:",
    choices: ["Eyes only", "Skin cancers and glaucoma", "Teeth whitening", "Bone cutting"],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "For laser safety, which is FALSE?",
    choices: ["Use metal jewelry", "Cover patient eyes", "Wear fire-resistant gowns", "Insulate ET tubes"],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "Blended current is used to:",
    choices: ["Only cut", "Only coagulate", "Cut and provide hemostasis", "Sterilize tissue"],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "Monopolar electrosurgery current path is:",
    choices: ["Active to patient to inactive", "Active to ground only", "Patient to air", "Inactive to generator"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "Coagulating current:",
    choices: ["Cuts tissue", "Provides intense heat to control bleeding", "Freezes tissue", "Provides no heat"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Harmonic scalpel uses:",
    choices: ["Lasers", "Ultrasonic waves", "CO₂ gas", "Cryogenic energy"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "Cryosurgery uses:",
    choices: ["High heat", "Cold (liquid nitrogen or CO₂)", "Radiation", "Ultrasonic waves"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "Ligasure is a:",
    choices: ["Cryogenic device", "Bipolar device sealing vessels and tissue", "Monopolar device", "Scalpel blade"],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Laser light waves are:",
    choices: ["Random", "Coherent and parallel", "Non-coherent", "Random and perpendicular"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Laser medium can be:",
    choices: ["Only gas", "Only liquid", "Only crystal", "Gas, solid, crystal, liquid, dye"],
    correctAnswer: 3
  },

  // Chapter 7: Surgical Asepsis and Sterility
  {
    id: 41,
    question: "What is the primary purpose of surgical asepsis?",
    choices: ["To reduce infection", "To eliminate all microorganisms", "To sterilize instruments", "To clean the operating room"],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "Which of the following is NOT a principle of sterile technique?",
    choices: ["Sterile items touch only sterile items", "Sterile persons remain in sterile areas", "Sterile items are kept dry", "Sterile items can touch clean items"],
    correctAnswer: 3
  },
  {
    id: 43,
    question: "The sterile field should be established:",
    choices: ["Before the patient enters", "After the patient is positioned", "Just before the incision", "As close to surgery time as possible"],
    correctAnswer: 3
  },
  {
    id: 44,
    question: "When opening a sterile package, which edge is considered contaminated?",
    choices: ["The inner edge", "The outer edge", "The folded edge", "All edges are sterile"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "The minimum temperature for steam sterilization is:",
    choices: ["250°F (121°C)", "270°F (132°C)", "300°F (149°C)", "212°F (100°C)"],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "Which sterilization method uses ethylene oxide gas?",
    choices: ["Steam sterilization", "Dry heat sterilization", "Chemical sterilization", "Gas sterilization"],
    correctAnswer: 3
  },
  {
    id: 47,
    question: "The Spaulding classification system categorizes medical devices based on:",
    choices: ["Size", "Material", "Risk of infection", "Cost"],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "Critical items in the Spaulding classification require:",
    choices: ["High-level disinfection", "Intermediate-level disinfection", "Low-level disinfection", "Sterilization"],
    correctAnswer: 3
  },
  {
    id: 49,
    question: "Which of the following is a chemical indicator?",
    choices: ["Autoclave tape", "Biological indicator", "Mechanical indicator", "Temperature gauge"],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "Biological indicators contain:",
    choices: ["Chemical dyes", "Heat-sensitive tape", "Living microorganisms", "pH indicators"],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "The most resistant microorganism used in biological indicators is:",
    choices: ["Staphylococcus aureus", "Escherichia coli", "Geobacillus stearothermophilus", "Pseudomonas aeruginosa"],
    correctAnswer: 2
  },
  {
    id: 52,
    question: "Flash sterilization should be used:",
    choices: ["Routinely for all instruments", "Only in emergency situations", "For all implants", "For wrapped items only"],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "The temperature for flash sterilization is typically:",
    choices: ["250°F (121°C)", "270°F (132°C)", "300°F (149°C)", "212°F (100°C)"],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "Immediate use steam sterilization (IUSS) cycle time for non-porous items is:",
    choices: ["3 minutes", "4 minutes", "10 minutes", "15 minutes"],
    correctAnswer: 0
  },
  {
    id: 55,
    question: "Which wrap material allows steam penetration?",
    choices: ["Plastic", "Aluminum foil", "Muslin", "Rubber"],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "Double wrapping provides:",
    choices: ["Better steam penetration", "Extended shelf life", "Faster sterilization", "Lower cost"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "The shelf life of a sterile package depends on:",
    choices: ["Sterilization method only", "Storage conditions only", "Packaging material only", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 58,
    question: "Event-related sterility means:",
    choices: ["Items expire on a specific date", "Sterility is maintained until package is compromised", "Items must be used within 24 hours", "Sterility lasts exactly 30 days"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "Which of the following compromises sterility?",
    choices: ["Moisture", "Tears in packaging", "Dropping on floor", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 60,
    question: "The sterile storage area should maintain humidity between:",
    choices: ["30-60%", "70-80%", "10-20%", "80-90%"],
    correctAnswer: 0
  },
  {
    id: 61,
    question: "Sterile items should be stored:",
    choices: ["On the floor", "Against walls", "8-10 inches from ceiling", "In direct sunlight"],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "High-level disinfection kills:",
    choices: ["Bacteria only", "Viruses only", "All microorganisms except spores", "All microorganisms including spores"],
    correctAnswer: 2
  },
  {
    id: 63,
    question: "Glutaraldehyde is used for:",
    choices: ["Sterilization", "High-level disinfection", "Cleaning", "Lubrication"],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "Peracetic acid is:",
    choices: ["Low-level disinfectant", "Intermediate-level disinfectant", "High-level disinfectant", "Sterilant"],
    correctAnswer: 3
  },
  {
    id: 65,
    question: "Hydrogen peroxide plasma sterilization is used for:",
    choices: ["Heat-sensitive items", "Moisture-sensitive items", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "Ethylene oxide sterilization requires:",
    choices: ["High temperature", "High pressure", "Aeration", "All of the above"],
    correctAnswer: 2
  },
  {
    id: 67,
    question: "The aeration time after ETO sterilization depends on:",
    choices: ["Item material", "Temperature", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 68,
    question: "Implants should be sterilized using:",
    choices: ["Flash sterilization", "ETO only", "Steam sterilization with BI", "Any method"],
    correctAnswer: 2
  },
  {
    id: 69,
    question: "Loaner instruments should be:",
    choices: ["Used immediately", "Processed like regular instruments", "Sterilized twice", "Not used"],
    correctAnswer: 1
  },

  // Chapter 8: Emergency Situations and All-Hazards Preparation
  {
    id: 70,
    question: "What is the correct order for PASS when using a fire extinguisher?",
    choices: ["Pull, Aim, Squeeze, Sweep", "Push, Aim, Spray, Sweep", "Pull, Align, Spray, Sweep", "Push, Align, Squeeze, Sweep"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "RACE for fire response stands for:",
    choices: ["Run, Avoid, Call, Escape", "Rescue, Alert, Contain, Evacuate", "Rescue, Alert, Call, Evacuate", "Run, Alert, Contain, Exit"],
    correctAnswer: 1
  },
  {
    id: 72,
    question: "The Richter scale is used to measure:",
    choices: ["Hurricanes", "Earthquakes", "Floods", "Tornadoes"],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "Heat stroke occurs due to:",
    choices: ["Too much water", "Body's failure to regulate temperature", "Viral infection", "Low humidity"],
    correctAnswer: 1
  },
  {
    id: 74,
    question: "Which biological agent is considered a bioterrorism risk?",
    choices: ["Lead", "Anthrax", "Asbestos", "Mercury"],
    correctAnswer: 1
  },
  {
    id: 75,
    question: "Dirty bombs cause:",
    choices: ["Only radiation", "Only burns", "Radiation and physical injury", "Only chemical injury"],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "Which is NOT a correct hot, warm, cold zone description?",
    choices: ["Hot — where the disaster occurred", "Warm — evaluation area", "Cold — safest zone", "Hot — safe zone"],
    correctAnswer: 3
  },
  {
    id: 77,
    question: "Triage black tag means:",
    choices: ["Minor injury", "Beyond healing", "Needs immediate help", "Walking wounded"],
    correctAnswer: 1
  },
  {
    id: 78,
    question: "What is the surgical technologist's role in triage?",
    choices: ["Direct command center", "CPR and transport", "Triage doctor", "None"],
    correctAnswer: 0
  },
  {
    id: 79,
    question: "Which fire extinguisher is used for electrical fires?",
    choices: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: 2
  },
  {
    id: 80,
    question: "What does the \"A\" in PASS stand for?",
    choices: ["Alert", "Aim", "Avoid", "Act"],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "Which natural disaster can cause a tsunami?",
    choices: ["Wildfire", "Heat wave", "Earthquake", "Avalanche"],
    correctAnswer: 2
  },
  {
    id: 82,
    question: "What is a dirty bomb?",
    choices: ["A chemical explosion causing blindness", "A radioactive bomb causing land damage and burns", "A conventional explosive in a hospital", "A biological agent release"],
    correctAnswer: 1
  },
  {
    id: 83,
    question: "Bioterrorism agents include:",
    choices: ["Mustard gas", "Ebola", "CO₂", "PMMA"],
    correctAnswer: 1
  },
  {
    id: 84,
    question: "What is the primary goal of an EAP in healthcare?",
    choices: ["To order supplies", "To define staff responsibilities during a disaster", "To provide free vaccinations", "To sterilize equipment"],
    correctAnswer: 1
  },
  {
    id: 85,
    question: "What is the correct sequence for decontamination of a radiologically exposed patient?",
    choices: ["Bleach > soap > saline rinse", "Soap and water > rinse > dry", "Remove clothes > rinse with sterile water > bleach", "Burn clothes > rinse with bleach"],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "The hot zone refers to:",
    choices: ["The area for triage", "The area near the operating table", "The area where the disaster occurred", "The hospital entrance"],
    correctAnswer: 2
  },
  {
    id: 87,
    question: "Which triage tag is used for patients beyond healing?",
    choices: ["Red", "Yellow", "Green", "Black"],
    correctAnswer: 3
  },
  {
    id: 88,
    question: "Which class fire extinguisher is for lasers and electrical fires?",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2
  },
  {
    id: 89,
    question: "Radiological decontamination includes:",
    choices: ["Removing clothing and washing with soap and water", "Leaving clothing on", "Using bleach in the eyes", "None of the above"],
    correctAnswer: 0
  },

  // Chapter 9: Surgical Pharmacology and Anesthesia
  {
    id: 90,
    question: "What is the main risk of latex allergy?",
    choices: ["Eye damage", "Skin rash to respiratory arrest", "Cancer", "Hair loss"],
    correctAnswer: 1
  },
  {
    id: 91,
    question: "Why should a latex-allergic patient be scheduled as the first case?",
    choices: ["To save time", "To reduce cross-contamination with latex dust", "To minimize anesthesia time", "To reduce cost"],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "Which chemical is used to preserve surgical specimens?",
    choices: ["Glutaraldehyde", "Formaldehyde", "Ethylene oxide", "Sodium hypochlorite"],
    correctAnswer: 1
  },
  {
    id: 93,
    question: "What is PMMA used for?",
    choices: ["Skin antiseptic", "Bone cement", "Surgical drape coating", "Fire retardant"],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "Bone cement implantation syndrome can cause:",
    choices: ["Bone fracture", "Emboli to the lungs", "Skin burns", "Vision loss"],
    correctAnswer: 1
  },
  {
    id: 95,
    question: "Which chemical is used to sterilize and is highly toxic?",
    choices: ["PMMA", "Formalin", "ETO", "Bleach"],
    correctAnswer: 2
  },
  {
    id: 96,
    question: "Anesthesia scavenging systems are used to:",
    choices: ["Capture patient breath", "Filter and remove anesthetic gases", "Provide oxygen", "Create pneumoperitoneum"],
    correctAnswer: 1
  },

  // Chapter 10: Instrumentation, Equipment, and Supplies
  {
    id: 97,
    question: "The first step in instrument processing is:",
    choices: ["Sterilization", "Cleaning", "Disinfection", "Packaging"],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "Enzymatic cleaners are used to:",
    choices: ["Sterilize instruments", "Remove protein debris", "Disinfect surfaces", "Lubricate hinges"],
    correctAnswer: 1
  },
  {
    id: 99,
    question: "Ultrasonic cleaners use:",
    choices: ["Heat only", "Chemicals only", "Sound waves", "Steam"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "The purpose of instrument lubrication is to:",
    choices: ["Prevent corrosion", "Maintain function", "Extend life", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 101,
    question: "Instruments should be inspected for:",
    choices: ["Cleanliness", "Function", "Damage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 102,
    question: "Which instrument finish is most resistant to corrosion?",
    choices: ["Bright finish", "Satin finish", "Ebony finish", "Passivated finish"],
    correctAnswer: 3
  },
  {
    id: 103,
    question: "Stainless steel instruments are made primarily of:",
    choices: ["Iron and carbon", "Iron and chromium", "Aluminum and steel", "Titanium and steel"],
    correctAnswer: 1
  },
  {
    id: 104,
    question: "The minimum chromium content in surgical stainless steel is:",
    choices: ["8%", "12%", "16%", "20%"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "Titanium instruments are preferred for:",
    choices: ["General surgery", "Microsurgery", "Orthopedic surgery", "All surgeries"],
    correctAnswer: 1
  },
  {
    id: 106,
    question: "Which suture material is absorbable?",
    choices: ["Silk", "Nylon", "Vicryl", "Prolene"],
    correctAnswer: 2
  },
  {
    id: 107,
    question: "Catgut sutures are made from:",
    choices: ["Cat intestines", "Sheep intestines", "Synthetic materials", "Plant fibers"],
    correctAnswer: 1
  },
  {
    id: 108,
    question: "The strongest suture material is:",
    choices: ["Silk", "Steel", "Nylon", "Prolene"],
    correctAnswer: 1
  },
  {
    id: 109,
    question: "Monofilament sutures have:",
    choices: ["Multiple strands", "Single strand", "Braided construction", "Twisted fibers"],
    correctAnswer: 1
  },
  {
    id: 110,
    question: "Which suture causes the least tissue reaction?",
    choices: ["Silk", "Catgut", "Prolene", "Cotton"],
    correctAnswer: 2
  },
  {
    id: 111,
    question: "The USP suture size 2-0 is:",
    choices: ["Larger than 0", "Smaller than 0", "Same as 0", "Twice the size of 0"],
    correctAnswer: 1
  },
  {
    id: 112,
    question: "Which needle point is used for delicate tissues?",
    choices: ["Cutting", "Reverse cutting", "Taper", "Blunt"],
    correctAnswer: 2
  },
  {
    id: 113,
    question: "Cutting needles are used for:",
    choices: ["Soft tissues", "Tough tissues", "Vessels", "Nerves"],
    correctAnswer: 1
  },
  {
    id: 114,
    question: "The swaged needle is:",
    choices: ["Reusable", "Attached to suture", "Separate from suture", "Disposable only"],
    correctAnswer: 1
  },
  {
    id: 115,
    question: "Hemostats are used to:",
    choices: ["Cut tissue", "Grasp tissue", "Control bleeding", "Suture tissue"],
    correctAnswer: 2
  },
  {
    id: 116,
    question: "Kelly forceps have:",
    choices: ["Straight jaws", "Curved jaws", "Serrated jaws", "Smooth jaws"],
    correctAnswer: 1
  },
  {
    id: 117,
    question: "Mosquito forceps are:",
    choices: ["Large hemostats", "Small hemostats", "Tissue forceps", "Needle holders"],
    correctAnswer: 1
  },
  {
    id: 118,
    question: "Allis forceps are used to:",
    choices: ["Control bleeding", "Grasp delicate tissue", "Grasp tough tissue", "Hold needles"],
    correctAnswer: 2
  },
  {
    id: 119,
    question: "Babcock forceps are designed for:",
    choices: ["Tough tissue", "Delicate tissue", "Bone", "Metal"],
    correctAnswer: 1
  },
  {
    id: 120,
    question: "Russian forceps have:",
    choices: ["Smooth tips", "Serrated tips", "Teeth", "Hooks"],
    correctAnswer: 2
  },
  {
    id: 121,
    question: "DeBakey forceps are used in:",
    choices: ["Orthopedic surgery", "Vascular surgery", "Neurosurgery", "General surgery"],
    correctAnswer: 1
  },
  {
    id: 122,
    question: "Adson forceps are commonly used in:",
    choices: ["Abdominal surgery", "Plastic surgery", "Cardiac surgery", "Orthopedic surgery"],
    correctAnswer: 1
  },
  {
    id: 123,
    question: "Gerald forceps are:",
    choices: ["Tissue forceps", "Dressing forceps", "Hemostats", "Needle holders"],
    correctAnswer: 1
  },
  {
    id: 124,
    question: "The Metzenbaum scissors are used for:",
    choices: ["Cutting sutures", "Cutting delicate tissue", "Cutting tough tissue", "Cutting wire"],
    correctAnswer: 1
  },
  {
    id: 125,
    question: "Mayo scissors are designed for:",
    choices: ["Delicate tissue", "Tough tissue", "Sutures only", "Bandages only"],
    correctAnswer: 1
  },
  {
    id: 126,
    question: "Iris scissors are used in:",
    choices: ["General surgery", "Ophthalmic surgery", "Orthopedic surgery", "Cardiac surgery"],
    correctAnswer: 1
  },
  {
    id: 127,
    question: "Potts scissors are designed for:",
    choices: ["General cutting", "Vascular surgery", "Neurosurgery", "Orthopedic surgery"],
    correctAnswer: 1
  },
  {
    id: 128,
    question: "Bandage scissors have:",
    choices: ["Sharp points", "Blunt tips", "Curved blades", "Serrated edges"],
    correctAnswer: 1
  },
  {
    id: 129,
    question: "Wire scissors are used to cut:",
    choices: ["Sutures", "Tissue", "Metal wire", "Bandages"],
    correctAnswer: 2
  },
  {
    id: 130,
    question: "The scalpel handle #3 fits blade sizes:",
    choices: ["10-15", "20-25", "10-11, 15", "20-24"],
    correctAnswer: 2
  },
  {
    id: 131,
    question: "The scalpel handle #4 fits blade sizes:",
    choices: ["10-15", "20-25", "10-11, 15", "20-24"],
    correctAnswer: 3
  },
  {
    id: 132,
    question: "Blade #10 is used for:",
    choices: ["Small incisions", "Large incisions", "Curved incisions", "Stab incisions"],
    correctAnswer: 1
  },
  {
    id: 133,
    question: "Blade #11 is designed for:",
    choices: ["Large incisions", "Stab incisions", "Curved incisions", "Skin only"],
    correctAnswer: 1
  },
  {
    id: 134,
    question: "Blade #15 is used for:",
    choices: ["Large incisions", "Small precise incisions", "Curved incisions", "Deep incisions"],
    correctAnswer: 1
  },
  {
    id: 135,
    question: "Pneumatic tourniquets are used to:",
    choices: ["Control bleeding", "Provide anesthesia", "Position patient", "Monitor vitals"],
    correctAnswer: 0
  },
  {
    id: 136,
    question: "Tourniquet pressure should be:",
    choices: ["As high as possible", "Based on patient's BP", "Always 300 mmHg", "Patient's weight"],
    correctAnswer: 1
  },
  {
    id: 137,
    question: "Maximum tourniquet time for arm is:",
    choices: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correctAnswer: 1
  },
  {
    id: 138,
    question: "Maximum tourniquet time for leg is:",
    choices: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correctAnswer: 2
  },
  {
    id: 139,
    question: "Esmarch bandage is used for:",
    choices: ["Wound dressing", "Exsanguination", "Compression", "Support"],
    correctAnswer: 1
  },
  {
    id: 140,
    question: "Endoscope cleaning requires:",
    choices: ["Manual cleaning only", "Automated cleaning only", "Both manual and automated", "Steam sterilization only"],
    correctAnswer: 2
  },
  {
    id: 141,
    question: "Instrument sets should be assembled:",
    choices: ["In the OR", "In sterile processing", "By the surgeon", "By nursing"],
    correctAnswer: 1
  },
  {
    id: 142,
    question: "Count sheets are used to:",
    choices: ["Track instruments", "Record sterilization", "Document cleaning", "All of the above"],
    correctAnswer: 0
  },

  // Chapter 11: Hemostasis, Wound Healing, and Wound Closure
  {
    id: 143,
    question: "Hemostasis is achieved by:",
    choices: ["Pressure", "Electrosurgery", "Ligatures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 144,
    question: "Primary hemostasis involves:",
    choices: ["Platelets", "Clotting factors", "Fibrin", "Red blood cells"],
    correctAnswer: 0
  },
  {
    id: 145,
    question: "Secondary hemostasis involves:",
    choices: ["Platelets", "Coagulation cascade", "Vasoconstriction", "Pressure"],
    correctAnswer: 1
  },
  {
    id: 146,
    question: "Topical hemostatic agents include:",
    choices: ["Gelfoam", "Surgicel", "Thrombin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 147,
    question: "Bone wax is used for:",
    choices: ["Soft tissue bleeding", "Bone bleeding", "Vascular bleeding", "All bleeding"],
    correctAnswer: 1
  },
  {
    id: 148,
    question: "Microfibrillar collagen works by:",
    choices: ["Chemical action", "Mechanical action", "Platelet aggregation", "Vasoconstriction"],
    correctAnswer: 2
  },
  {
    id: 149,
    question: "Thrombin should not be:",
    choices: ["Used topically", "Injected", "Mixed with blood", "Used on bone"],
    correctAnswer: 1
  },
  {
    id: 150,
    question: "Fibrin sealants contain:",
    choices: ["Thrombin only", "Fibrinogen only", "Both thrombin and fibrinogen", "Neither"],
    correctAnswer: 2
  },
  {
    id: 151,
    question: "Wound classification includes:",
    choices: ["Clean", "Clean-contaminated", "Contaminated", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 152,
    question: "Clean wounds have infection rate of:",
    choices: ["<2%", "2-5%", "5-10%", ">10%"],
    correctAnswer: 0
  },
  {
    id: 153,
    question: "Contaminated wounds have infection rate of:",
    choices: ["<2%", "2-5%", "10-17%", ">20%"],
    correctAnswer: 2
  },
  {
    id: 154,
    question: "Dirty wounds have infection rate of:",
    choices: ["<2%", "2-5%", "10-17%", ">27%"],
    correctAnswer: 3
  },
  {
    id: 155,
    question: "Primary intention healing occurs in:",
    choices: ["Clean wounds", "Infected wounds", "Open wounds", "Chronic wounds"],
    correctAnswer: 0
  },
  {
    id: 156,
    question: "Secondary intention healing involves:",
    choices: ["Immediate closure", "Delayed closure", "Granulation tissue", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 157,
    question: "Tertiary intention healing is:",
    choices: ["Immediate closure", "Delayed primary closure", "Open healing", "Skin grafting"],
    correctAnswer: 1
  },
  {
    id: 158,
    question: "Wound dehiscence is:",
    choices: ["Infection", "Separation of layers", "Bleeding", "Scarring"],
    correctAnswer: 1
  },
  {
    id: 159,
    question: "Evisceration involves:",
    choices: ["Skin separation", "Fascial separation", "Organ protrusion", "Bleeding"],
    correctAnswer: 2
  },

  // Chapter 12: Preoperative Surgical Case Management
  {
    id: 160,
    question: "Surgical site preparation includes:",
    choices: ["Hair removal", "Skin antisepsis", "Draping", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 161,
    question: "Hair removal should be done:",
    choices: ["Night before surgery", "Just before surgery", "In the OR", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 162,
    question: "Clippers are preferred over razors because they:",
    choices: ["Are faster", "Reduce infection risk", "Are cheaper", "Are easier to use"],
    correctAnswer: 1
  },
  {
    id: 163,
    question: "Skin preparation should begin:",
    choices: ["At the periphery", "At the incision site", "At the cleanest area", "Anywhere"],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Prep solution should be applied in:",
    choices: ["Back and forth motions", "Circular motions", "Vertical strokes", "Any pattern"],
    correctAnswer: 1
  },
  {
    id: 165,
    question: "Alcohol-based prep solutions are:",
    choices: ["Flammable", "Non-flammable", "Water-based", "Oil-based"],
    correctAnswer: 0
  },
  {
    id: 166,
    question: "Iodophors are:",
    choices: ["Immediate acting", "Slow acting", "Non-antimicrobial", "Alcohol-based"],
    correctAnswer: 1
  },
  {
    id: 167,
    question: "Chlorhexidine gluconate:",
    choices: ["Has no residual effect", "Has residual effect", "Is not antimicrobial", "Requires alcohol"],
    correctAnswer: 1
  },
  {
    id: 168,
    question: "Patient positioning should consider:",
    choices: ["Surgical access", "Patient safety", "Physiologic function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 169,
    question: "Supine position is also called:",
    choices: ["Prone", "Lateral", "Dorsal recumbent", "Trendelenburg"],
    correctAnswer: 2
  },
  {
    id: 170,
    question: "Trendelenburg position involves:",
    choices: ["Head up", "Head down", "Side lying", "Face down"],
    correctAnswer: 1
  },
  {
    id: 171,
    question: "Reverse Trendelenburg involves:",
    choices: ["Head up", "Head down", "Side lying", "Face down"],
    correctAnswer: 0
  },
  {
    id: 172,
    question: "Fowler's position is:",
    choices: ["Flat", "Head elevated", "Head down", "Side lying"],
    correctAnswer: 1
  },
  {
    id: 173,
    question: "Lithotomy position is used for:",
    choices: ["Abdominal surgery", "Pelvic surgery", "Chest surgery", "Head surgery"],
    correctAnswer: 1
  },
  {
    id: 174,
    question: "Prone position risks include:",
    choices: ["Pressure sores", "Breathing difficulty", "Nerve damage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 175,
    question: "Lateral position requires:",
    choices: ["Kidney rest", "Axillary roll", "Leg support", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 176,
    question: "Jackknife position is a variation of:",
    choices: ["Supine", "Prone", "Lateral", "Lithotomy"],
    correctAnswer: 1
  },
  {
    id: 177,
    question: "Beach chair position is used for:",
    choices: ["Abdominal surgery", "Shoulder surgery", "Leg surgery", "Back surgery"],
    correctAnswer: 1
  },
  {
    id: 178,
    question: "Pressure points should be:",
    choices: ["Ignored", "Padded", "Marked", "Compressed"],
    correctAnswer: 1
  },
  {
    id: 179,
    question: "Compartment syndrome can result from:",
    choices: ["Poor positioning", "Prolonged surgery", "Tight restraints", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 180,
    question: "Brachial plexus injury can occur in:",
    choices: ["Supine position", "Lateral position", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 181,
    question: "Common peroneal nerve injury occurs with:",
    choices: ["Arm positioning", "Leg positioning", "Head positioning", "Back positioning"],
    correctAnswer: 1
  },
  {
    id: 182,
    question: "Ulnar nerve injury is associated with:",
    choices: ["Elbow pressure", "Shoulder pressure", "Hip pressure", "Knee pressure"],
    correctAnswer: 0
  },

  // Chapter 13: Intraoperative and Postoperative Surgical Case Management
  {
    id: 183,
    question: "The surgical technologist's primary role is:",
    choices: ["Patient care", "Maintaining sterile field", "Equipment management", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 184,
    question: "Scrubbing in requires:",
    choices: ["Surgical hand antisepsis", "Sterile gown and gloves", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 185,
    question: "The circulating nurse is:",
    choices: ["Sterile", "Non-sterile", "Sometimes sterile", "Always gowned"],
    correctAnswer: 1
  },
  {
    id: 186,
    question: "Surgical hand antisepsis should last:",
    choices: ["30 seconds", "1 minute", "2-6 minutes", "10 minutes"],
    correctAnswer: 2
  },
  {
    id: 187,
    question: "Alcohol-based hand rubs require:",
    choices: ["Water rinse", "Towel drying", "Complete evaporation", "Soap application"],
    correctAnswer: 2
  },
  {
    id: 188,
    question: "Surgical gowns should be:",
    choices: ["Fluid-resistant", "Sterile", "Properly sized", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 189,
    question: "The sterile area of a surgical gown extends:",
    choices: ["Entire gown", "Front and sleeves", "Front only", "Sleeves only"],
    correctAnswer: 1
  },
  {
    id: 190,
    question: "Closed gloving is performed:",
    choices: ["Before gowning", "After gowning", "Instead of gowning", "With contaminated hands"],
    correctAnswer: 1
  },
  {
    id: 191,
    question: "Open gloving is used when:",
    choices: ["Scrubbed in", "Not gowned", "Changing gloves", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 192,
    question: "Double gloving provides:",
    choices: ["Better dexterity", "Increased protection", "Cost savings", "Improved grip"],
    correctAnswer: 1
  },
  {
    id: 193,
    question: "Glove perforation should be:",
    choices: ["Ignored if small", "Reported immediately", "Fixed with tape", "Noted after surgery"],
    correctAnswer: 1
  },
  {
    id: 194,
    question: "Surgical masks should:",
    choices: ["Cover nose and mouth", "Be changed between cases", "Not be touched during surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 195,
    question: "Eye protection is required when:",
    choices: ["Risk of splashing", "Using lasers", "Using chemicals", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 196,
    question: "Surgical caps should:",
    choices: ["Cover all hair", "Be disposable", "Be changed daily", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 197,
    question: "Shoe covers are:",
    choices: ["Always required", "Never required", "Required in some areas", "Optional"],
    correctAnswer: 2
  },
  {
    id: 198,
    question: "The sterile field includes:",
    choices: ["Draped patient", "Instrument tables", "Scrubbed personnel", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 199,
    question: "Sterile drapes should:",
    choices: ["Be fluid-resistant", "Cover completely", "Not be moved once placed", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 200,
    question: "The incise drape is:",
    choices: ["Placed first", "Placed last", "Adhesive", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 201,
    question: "Fenestrated drapes have:",
    choices: ["Multiple layers", "An opening", "Adhesive edges", "Reinforcement"],
    correctAnswer: 1
  },
  {
    id: 202,
    question: "Draping should proceed from:",
    choices: ["Dirty to clean", "Clean to dirty", "Sterile to non-sterile", "Incision site outward"],
    correctAnswer: 3
  },
  {
    id: 203,
    question: "If a drape becomes contaminated:",
    choices: ["Continue surgery", "Replace the drape", "Cover with another drape", "Clean the drape"],
    correctAnswer: 1
  },
  {
    id: 204,
    question: "The surgical count includes:",
    choices: ["Sponges", "Instruments", "Needles", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 205,
    question: "Initial count is performed:",
    choices: ["Before incision", "After incision", "During closure", "After closure"],
    correctAnswer: 0
  },
  {
    id: 206,
    question: "Closing count is performed:",
    choices: ["Before closure begins", "During closure", "After closure", "Next day"],
    correctAnswer: 0
  },
  {
    id: 207,
    question: "If count is incorrect:",
    choices: ["Continue surgery", "Search for item", "Take X-ray", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 208,
    question: "Sponges should be:",
    choices: ["Counted individually", "Kept on field", "Discarded immediately", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 209,
    question: "Radiopaque sponges contain:",
    choices: ["Metal strips", "Plastic markers", "Barium sulfate", "Iodine"],
    correctAnswer: 2
  },
  {
    id: 210,
    question: "Needle count includes:",
    choices: ["Suture needles only", "All needles", "Hypodermic needles only", "Broken needles only"],
    correctAnswer: 1
  },
  {
    id: 211,
    question: "Broken needles should be:",
    choices: ["Discarded", "Counted as one", "Counted as pieces", "Ignored"],
    correctAnswer: 2
  },
  {
    id: 212,
    question: "Instrument count is required for:",
    choices: ["All surgeries", "Open surgeries only", "Laparoscopic surgeries", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 213,
    question: "Small items like clips should be:",
    choices: ["Not counted", "Counted if possible", "Always counted", "Never used"],
    correctAnswer: 1
  },
  {
    id: 214,
    question: "Count discrepancy requires:",
    choices: ["Documentation", "Incident report", "X-ray", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 215,
    question: "Specimen handling requires:",
    choices: ["Proper labeling", "Appropriate fixative", "Timely transport", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 216,
    question: "Frozen section specimens require:",
    choices: ["Formalin", "Saline", "No fixative", "Alcohol"],
    correctAnswer: 2
  },
  {
    id: 217,
    question: "Culture specimens should be:",
    choices: ["Fixed in formalin", "Kept moist", "Kept dry", "Frozen"],
    correctAnswer: 1
  },
  {
    id: 218,
    question: "Specimen containers should be:",
    choices: ["Labeled before surgery", "Labeled after surgery", "Not labeled", "Labeled by pathology"],
    correctAnswer: 0
  },
  {
    id: 219,
    question: "Chain of custody applies to:",
    choices: ["All specimens", "Legal specimens", "Culture specimens", "Frozen specimens"],
    correctAnswer: 1
  }
];