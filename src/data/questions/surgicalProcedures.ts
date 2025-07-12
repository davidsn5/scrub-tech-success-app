export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of surgical asepsis?",
    choices: ["To reduce costs", "To prevent infection", "To speed up surgery", "To improve visibility"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which of the following is NOT a principle of sterile technique?",
    choices: ["Sterile items touch only sterile items", "Sterile persons touch only sterile items", "Non-sterile persons avoid sterile areas", "Sterile items can touch non-sterile items if necessary"],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "The sterile field should be established:",
    choices: ["As close to surgery time as possible", "The night before surgery", "Several hours before surgery", "It doesn't matter when"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "When opening a sterile package, which part should be opened first?",
    choices: ["The side closest to you", "The side farthest from you", "Either side", "The left side"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is the minimum temperature for steam sterilization?",
    choices: ["250°F (121°C)", "270°F (132°C)", "300°F (149°C)", "212°F (100°C)"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Which of the following items requires high-level disinfection?",
    choices: ["Surgical instruments", "Endoscopes", "Blood pressure cuffs", "Stethoscopes"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "The Spaulding classification system categorizes medical devices based on:",
    choices: ["Cost", "Size", "Risk of infection", "Material composition"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Critical items in the Spaulding classification:",
    choices: ["Touch intact skin", "Touch mucous membranes", "Enter sterile tissue or bloodstream", "Don't touch the patient"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "What is the most effective method for sterilizing heat-sensitive items?",
    choices: ["Steam sterilization", "Dry heat", "Ethylene oxide", "Boiling water"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "The sterile field extends how many inches around a draped patient?",
    choices: ["6 inches", "12 inches", "18 inches", "24 inches"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Which of the following is considered a breach of sterile technique?",
    choices: ["Keeping hands above waist level", "Turning your back to the sterile field", "Wearing sterile gloves", "Using sterile instruments"],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "When should surgical hand antisepsis be performed?",
    choices: ["Only before the first case", "Before each surgical procedure", "Once per day", "Only when hands are visibly soiled"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "The minimum time for surgical hand scrub is:",
    choices: ["2 minutes", "3 minutes", "5 minutes", "10 minutes"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Which area of the surgical gown is considered sterile?",
    choices: ["Entire gown", "Front from chest to waist, sleeves to 2 inches above elbow", "Back of gown", "Only the sleeves"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "When gloving another person, you should:",
    choices: ["Touch only the inside of the glove", "Touch only the outside of the glove", "Touch both inside and outside", "Use non-sterile technique"],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "If a sterile item falls below waist level, it is considered:",
    choices: ["Still sterile", "Contaminated", "Questionably sterile", "Sterile if picked up quickly"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "The purpose of a biological indicator is to:",
    choices: ["Indicate temperature", "Confirm sterilization", "Measure time", "Check pressure"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which microorganism is most commonly used in biological indicators for steam sterilization?",
    choices: ["E. coli", "Staphylococcus aureus", "Geobacillus stearothermophilus", "Pseudomonas aeruginosa"],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "Chemical indicators are used to:",
    choices: ["Sterilize instruments", "Monitor sterilization parameters", "Clean instruments", "Disinfect surfaces"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "The flash sterilization cycle is used for:",
    choices: ["Routine sterilization", "Emergency sterilization of unwrapped items", "Sterilizing large loads", "Sterilizing wrapped items"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "What is the primary difference between disinfection and sterilization?",
    choices: ["Temperature used", "Time required", "Level of microbial kill", "Cost"],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "High-level disinfection kills:",
    choices: ["Only bacteria", "All microorganisms except some spores", "Only viruses", "All microorganisms including all spores"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "The most heat-resistant microorganisms are:",
    choices: ["Bacteria", "Viruses", "Fungi", "Spores"],
    correctAnswer: 3
  },
  {
    id: 24,
    question: "Prions are most effectively destroyed by:",
    choices: ["Standard steam sterilization", "Ethylene oxide", "High-level disinfection", "Extended steam sterilization with sodium hydroxide"],
    correctAnswer: 3
  },
  {
    id: 25,
    question: "The D-value represents:",
    choices: ["Sterilization temperature", "Time to kill 90% of microorganisms", "Pressure required", "Chemical concentration"],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "Which of the following factors affects sterilization efficacy?",
    choices: ["Temperature", "Time", "Moisture", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 27,
    question: "The bioburden refers to:",
    choices: ["Weight of instruments", "Number of microorganisms on an item", "Cost of sterilization", "Time for sterilization"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Immediate use steam sterilization (IUSS) should be used:",
    choices: ["Routinely", "Only in emergency situations", "For all instruments", "To save time"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "The sterile storage area should maintain what relative humidity?",
    choices: ["30-60%", "70-80%", "80-90%", "90-100%"],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "Sterile packages should be stored:",
    choices: ["On the floor", "In closed cabinets", "In open areas", "In humid environments"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "Event-related sterility means:",
    choices: ["Items expire on a specific date", "Sterility is maintained until package integrity is compromised", "Items are sterile for 30 days", "Sterility depends on storage temperature"],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "Which packaging material allows steam penetration?",
    choices: ["Plastic", "Paper", "Metal", "Glass"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "The purpose of a sterilization wrap is to:",
    choices: ["Prevent steam penetration", "Allow sterilant penetration while maintaining sterility", "Speed up sterilization", "Reduce costs"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Double wrapping is recommended for:",
    choices: ["All items", "Heavy instrument sets", "Single instruments", "Disposable items"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "The tape used to secure sterilization wraps should:",
    choices: ["Be waterproof", "Change color when exposed to sterilant", "Be removed before sterilization", "Cover the entire package"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Rigid sterilization containers:",
    choices: ["Cannot be sterilized", "Require special cycles", "Are single-use only", "Provide excellent protection for instruments"],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "The minimum temperature for dry heat sterilization is:",
    choices: ["250°F (121°C)", "320°F (160°C)", "340°F (171°C)", "375°F (190°C)"],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "Ethylene oxide sterilization is primarily used for:",
    choices: ["Heat-stable items", "Heat-sensitive items", "Liquids", "Powders"],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "The aeration time after ethylene oxide sterilization is necessary to:",
    choices: ["Cool items", "Remove toxic residues", "Complete sterilization", "Dry items"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Hydrogen peroxide plasma sterilization:",
    choices: ["Requires aeration", "Leaves toxic residues", "Is environmentally friendly", "Takes longer than steam"],
    correctAnswer: 2
  },
  {
    id: 41,
    question: "Which sterilization method is fastest?",
    choices: ["Steam", "Ethylene oxide", "Hydrogen peroxide plasma", "Dry heat"],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "The Bowie-Dick test is used to detect:",
    choices: ["Air leaks", "Temperature variations", "Pressure problems", "Air removal efficiency"],
    correctAnswer: 3
  },
  {
    id: 43,
    question: "Prevacuum sterilizers require:",
    choices: ["No special tests", "Daily air removal tests", "Weekly tests only", "Monthly tests only"],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "The purpose of the conditioning phase in sterilization is to:",
    choices: ["Cool items", "Heat items to sterilization temperature", "Remove air", "Add moisture"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "Superheated steam is:",
    choices: ["More effective than saturated steam", "Less effective than saturated steam", "The same as saturated steam", "Not used in sterilization"],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "The most important factor in steam sterilization is:",
    choices: ["Pressure", "Temperature", "Time", "Direct steam contact"],
    correctAnswer: 3
  },
  {
    id: 47,
    question: "Wet packs after sterilization indicate:",
    choices: ["Successful sterilization", "Inadequate drying", "Proper cooling", "Good steam quality"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "The sterile processing department should be divided into:",
    choices: ["Two areas", "Three areas", "Four areas", "Five areas"],
    correctAnswer: 2
  },
  {
    id: 49,
    question: "The decontamination area should have:",
    choices: ["Positive air pressure", "Negative air pressure", "No air pressure control", "Variable air pressure"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Personal protective equipment in decontamination should include:",
    choices: ["Gloves only", "Gown and gloves", "Full PPE including eye protection", "No PPE required"],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "Ultrasonic cleaners work by:",
    choices: ["Heat", "Chemicals", "Cavitation", "Pressure"],
    correctAnswer: 2
  },
  {
    id: 52,
    question: "Enzymatic cleaners are most effective against:",
    choices: ["Bacteria", "Viruses", "Protein soils", "Mineral deposits"],
    correctAnswer: 2
  },
  {
    id: 53,
    question: "The pH of most enzymatic cleaners is:",
    choices: ["Acidic", "Neutral", "Alkaline", "Variable"],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "Automated washers provide:",
    choices: ["Inconsistent results", "Standardized cleaning", "No advantages", "Only cost savings"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "The final rinse in automated washers should use:",
    choices: ["Tap water", "Softened water", "Distilled water", "Deionized water"],
    correctAnswer: 3
  },
  {
    id: 56,
    question: "Instrument milk is used to:",
    choices: ["Clean instruments", "Lubricate instruments", "Sterilize instruments", "Disinfect instruments"],
    correctAnswer: 1
  },
  {
    id: 57,
    question: "Water quality for final rinse should meet:",
    choices: ["Tap water standards", "Softened water standards", "Critical water standards", "Any water standards"],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "The drying process after cleaning should:",
    choices: ["Be optional", "Remove all visible moisture", "Leave some moisture", "Use heat only"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "Inspection of instruments should occur:",
    choices: ["Before cleaning", "After cleaning and before sterilization", "After sterilization", "Only when problems are suspected"],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "Damaged instruments should be:",
    choices: ["Used carefully", "Repaired immediately", "Removed from service", "Sterilized anyway"],
    correctAnswer: 2
  },
  {
    id: 61,
    question: "Loaner instruments should be:",
    choices: ["Used without inspection", "Cleaned and sterilized before use", "Returned immediately", "Used only in emergencies"],
    correctAnswer: 1
  },
  {
    id: 62,
    question: "The assembly area should have:",
    choices: ["Negative air pressure", "Positive air pressure", "No air pressure control", "Variable air pressure"],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "Instrument sets should be assembled:",
    choices: ["Randomly", "According to standardized lists", "By surgeon preference only", "Without documentation"],
    correctAnswer: 1
  },
  {
    id: 64,
    question: "Heavy instruments should be placed:",
    choices: ["On top", "On bottom", "In the middle", "Separately"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "Hinged instruments should be:",
    choices: ["Closed", "Slightly open", "Fully open", "Locked"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "The maximum weight for instrument sets is:",
    choices: ["15 pounds", "20 pounds", "25 pounds", "30 pounds"],
    correctAnswer: 2
  },
  {
    id: 67,
    question: "Implants should be sterilized:",
    choices: ["With other instruments", "Separately with biological indicators", "Without indicators", "Using flash sterilization"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "The sterile storage area should be:",
    choices: ["Open to all areas", "Restricted access", "Combined with clean areas", "Located anywhere"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "Sterile items should be stored:",
    choices: ["On the floor", "At least 8-10 inches from floor", "At any height", "Only on top shelves"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "The FIFO system means:",
    choices: ["First In, First Out", "First In, Final Out", "Final In, First Out", "Fast In, Fast Out"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "Quality assurance in sterile processing includes:",
    choices: ["Only sterilization monitoring", "Only cleaning verification", "Comprehensive monitoring of all processes", "Random checks"],
    correctAnswer: 2
  },
  {
    id: 72,
    question: "Sterilization records should be kept for:",
    choices: ["1 year", "3 years", "5 years", "Permanently"],
    correctAnswer: 1
  },
  {
    id: 73,
    question: "Positive biological indicator results require:",
    choices: ["No action", "Immediate investigation", "Routine documentation", "Repeat testing only"],
    correctAnswer: 1
  },
  {
    id: 74,
    question: "Recall procedures are necessary when:",
    choices: ["Sterilization failure occurs", "New instruments arrive", "Staff changes", "Equipment is serviced"],
    correctAnswer: 0
  },
  {
    id: 75,
    question: "The most critical aspect of instrument reprocessing is:",
    choices: ["Speed", "Cost", "Patient safety", "Convenience"],
    correctAnswer: 2
  },
  {
    id: 76,
    question: "Standard precautions should be used:",
    choices: ["Only with known infectious patients", "With all patients and specimens", "Only in isolation rooms", "Only during surgery"],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "The hierarchy of controls for infection prevention includes:",
    choices: ["Only PPE", "Engineering and administrative controls", "Only hand hygiene", "Elimination, substitution, engineering, administrative, PPE"],
    correctAnswer: 3
  },
  {
    id: 78,
    question: "Hand hygiene should be performed:",
    choices: ["Only when hands are visibly soiled", "Before and after patient contact", "Once per shift", "Only before eating"],
    correctAnswer: 1
  },
  {
    id: 79,
    question: "Alcohol-based hand rubs are effective against:",
    choices: ["All microorganisms", "Most bacteria and viruses", "Only bacteria", "Only viruses"],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "When should soap and water be used instead of alcohol-based hand rub?",
    choices: ["Never", "When hands are visibly soiled", "Always", "Only in surgery"],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "The purpose of environmental cleaning is to:",
    choices: ["Make surfaces look clean", "Remove and reduce microorganisms", "Save money", "Meet regulations only"],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "High-touch surfaces should be cleaned:",
    choices: ["Weekly", "Daily", "Multiple times per day", "Monthly"],
    correctAnswer: 2
  },
  {
    id: 83,
    question: "Terminal cleaning refers to:",
    choices: ["Daily cleaning", "Cleaning after patient discharge", "Cleaning equipment", "Cleaning before admission"],
    correctAnswer: 1
  },
  {
    id: 84,
    question: "Microfiber cloths are effective because they:",
    choices: ["Are disposable", "Physically remove microorganisms", "Contain disinfectant", "Are colorful"],
    correctAnswer: 1
  },
  {
    id: 85,
    question: "The two-step cleaning process involves:",
    choices: ["Cleaning then rinsing", "Cleaning then disinfecting", "Sweeping then mopping", "Dusting then vacuuming"],
    correctAnswer: 1
  },
  {
    id: 86,
    question: "Contact time for disinfectants refers to:",
    choices: ["Time to apply", "Time surface must remain wet", "Time to dry", "Time to purchase"],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "EPA-registered disinfectants are required for:",
    choices: ["All surfaces", "Healthcare surfaces", "Home use only", "Industrial use only"],
    correctAnswer: 1
  },
  {
    id: 88,
    question: "The most important factor in disinfectant efficacy is:",
    choices: ["Cost", "Color", "Following label instructions", "Brand name"],
    correctAnswer: 2
  },
  {
    id: 89,
    question: "Quaternary ammonium compounds are:",
    choices: ["High-level disinfectants", "Low-level disinfectants", "Sterilants", "Antiseptics only"],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "Phenolic disinfectants should not be used on:",
    choices: ["Metal surfaces", "Plastic surfaces", "Rubber and plastic in nurseries", "Glass surfaces"],
    correctAnswer: 2
  },
  {
    id: 91,
    question: "Sodium hypochlorite (bleach) is effective against:",
    choices: ["Only bacteria", "Most microorganisms including spores", "Only viruses", "Only fungi"],
    correctAnswer: 1
  },
  {
    id: 92,
    question: "The disadvantage of bleach is:",
    choices: ["Low cost", "Broad spectrum", "Corrosive and unstable", "Pleasant odor"],
    correctAnswer: 2
  },
  {
    id: 93,
    question: "Hydrogen peroxide disinfectants:",
    choices: ["Are toxic", "Break down to water and oxygen", "Are expensive", "Stain surfaces"],
    correctAnswer: 1
  },
  {
    id: 94,
    question: "UV-C light is used for:",
    choices: ["Heating", "Lighting", "Disinfection", "Decoration"],
    correctAnswer: 2
  },
  {
    id: 95,
    question: "The effectiveness of UV-C depends on:",
    choices: ["Color of light", "Direct exposure and time", "Room temperature", "Humidity"],
    correctAnswer: 1
  },
  {
    id: 96,
    question: "Electrostatic spraying:",
    choices: ["Uses more chemical", "Provides even coverage", "Is less effective", "Only works on metal"],
    correctAnswer: 1
  },
  {
    id: 97,
    question: "Fogging should be used:",
    choices: ["Routinely", "Only for outbreak situations", "Daily", "Never"],
    correctAnswer: 1
  },
  {
    id: 98,
    question: "The most important aspect of environmental services is:",
    choices: ["Speed", "Appearance", "Consistency and thoroughness", "Cost"],
    correctAnswer: 2
  },
  {
    id: 99,
    question: "Training for environmental services staff should include:",
    choices: ["Only cleaning techniques", "Only safety", "Comprehensive infection prevention", "Only product knowledge"],
    correctAnswer: 2
  },
  {
    id: 100,
    question: "Quality assurance for environmental cleaning should include:",
    choices: ["Visual inspection only", "ATP testing", "Microbiological testing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 101,
    question: "What is the primary goal of preoperative patient preparation?",
    choices: ["Speed up surgery", "Reduce surgical site infections", "Save money", "Improve visibility"],
    correctAnswer: 1
  },
  {
    id: 102,
    question: "Preoperative showering should use:",
    choices: ["Regular soap", "Antimicrobial soap", "No soap", "Any available soap"],
    correctAnswer: 1
  },
  {
    id: 103,
    question: "Hair removal, if necessary, should be done:",
    choices: ["The night before", "Immediately before surgery", "Several hours before", "A week before"],
    correctAnswer: 1
  },
  {
    id: 104,
    question: "The preferred method of hair removal is:",
    choices: ["Shaving with razor", "Clipping", "Depilatory cream", "Laser removal"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "Skin antisepsis should begin:",
    choices: ["At the incision site", "At the periphery", "Anywhere", "At the bottom"],
    correctAnswer: 0
  },
  {
    id: 106,
    question: "The most commonly used skin antiseptic is:",
    choices: ["Alcohol", "Iodine", "Chlorhexidine", "Hydrogen peroxide"],
    correctAnswer: 2
  },
  {
    id: 107,
    question: "Skin prep should be allowed to:",
    choices: ["Dry completely", "Remain wet", "Be wiped off", "Be covered immediately"],
    correctAnswer: 0
  },
  {
    id: 108,
    question: "The purpose of surgical draping is to:",
    choices: ["Keep patient warm", "Create sterile field", "Improve lighting", "Reduce costs"],
    correctAnswer: 1
  },
  {
    id: 109,
    question: "Drapes should be:",
    choices: ["Reusable only", "Disposable only", "Either reusable or disposable", "Made of cotton only"],
    correctAnswer: 2
  },
  {
    id: 110,
    question: "The first drape placed should be:",
    choices: ["Largest drape", "Smallest drape", "Closest to surgeon", "Farthest from surgeon"],
    correctAnswer: 3
  },
  {
    id: 111,
    question: "Once a drape is placed, it should:",
    choices: ["Be repositioned as needed", "Never be moved", "Be adjusted slightly", "Be removed and replaced"],
    correctAnswer: 1
  },
  {
    id: 112,
    question: "Adhesive drapes:",
    choices: ["Are always necessary", "May increase infection risk", "Should cover entire patient", "Are never used"],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "The sterile field includes:",
    choices: ["Only the incision site", "Draped patient and sterile surfaces", "Entire operating room", "Only instrument tables"],
    correctAnswer: 1
  },
  {
    id: 114,
    question: "Traffic in the operating room should be:",
    choices: ["Unrestricted", "Minimized", "Encouraged", "Constant"],
    correctAnswer: 1
  },
  {
    id: 115,
    question: "Doors to the operating room should be:",
    choices: ["Always open", "Kept closed", "Opened frequently", "Removed"],
    correctAnswer: 1
  },
  {
    id: 116,
    question: "The temperature in the operating room should be:",
    choices: ["68-73°F (20-23°C)", "75-80°F (24-27°C)", "60-65°F (15-18°C)", "80-85°F (27-29°C)"],
    correctAnswer: 0
  },
  {
    id: 117,
    question: "Relative humidity in the OR should be:",
    choices: ["20-30%", "30-60%", "70-80%", "80-90%"],
    correctAnswer: 1
  },
  {
    id: 118,
    question: "Air changes per hour in the OR should be minimum:",
    choices: ["10", "15", "20", "25"],
    correctAnswer: 2
  },
  {
    id: 119,
    question: "HEPA filters remove particles:",
    choices: ["0.1 microns", "0.3 microns", "1.0 microns", "5.0 microns"],
    correctAnswer: 1
  },
  {
    id: 120,
    question: "Positive air pressure in the OR:",
    choices: ["Prevents air from entering", "Forces air out of the room", "Has no effect", "Increases contamination"],
    correctAnswer: 1
  },
  {
    id: 121,
    question: "Laminar air flow provides:",
    choices: ["Turbulent air", "Unidirectional air flow", "No air movement", "Circular air flow"],
    correctAnswer: 1
  },
  {
    id: 122,
    question: "The recovery of the sterile field after disruption takes:",
    choices: ["Immediately", "5 minutes", "15-20 minutes", "1 hour"],
    correctAnswer: 2
  },
  {
    id: 123,
    question: "Surgical attire in the OR includes:",
    choices: ["Street clothes", "Scrubs, head cover, mask", "Lab coat only", "Gown only"],
    correctAnswer: 1
  },
  {
    id: 124,
    question: "Surgical masks should:",
    choices: ["Cover nose only", "Cover mouth only", "Cover nose and mouth", "Be worn loosely"],
    correctAnswer: 2
  },
  {
    id: 125,
    question: "Masks should be changed:",
    choices: ["Never", "Between cases", "Every hour", "When wet or soiled"],
    correctAnswer: 3
  },
  {
    id: 126,
    question: "Head covers should:",
    choices: ["Cover some hair", "Cover all hair", "Be optional", "Match scrubs"],
    correctAnswer: 1
  },
  {
    id: 127,
    question: "Shoe covers are:",
    choices: ["Always required", "Never required", "Required in some facilities", "Only for visitors"],
    correctAnswer: 2
  },
  {
    id: 128,
    question: "Jewelry in the OR should be:",
    choices: ["Covered", "Removed", "Disinfected", "Ignored"],
    correctAnswer: 1
  },
  {
    id: 129,
    question: "Artificial nails are:",
    choices: ["Acceptable if short", "Never acceptable", "Acceptable if covered", "Required"],
    correctAnswer: 1
  },
  {
    id: 130,
    question: "Nail polish should be:",
    choices: ["Fresh or removed", "Any color", "Always worn", "Never mentioned"],
    correctAnswer: 0
  },
  {
    id: 131,
    question: "The surgical conscience refers to:",
    choices: ["Feeling guilty", "Personal responsibility for sterile technique", "Religious beliefs", "Legal requirements"],
    correctAnswer: 1
  },
  {
    id: 132,
    question: "When in doubt about sterility:",
    choices: ["Use the item", "Consider it contaminated", "Ask someone else", "Test it"],
    correctAnswer: 1
  },
  {
    id: 133,
    question: "Reporting breaches in sterile technique is:",
    choices: ["Optional", "Required", "Discouraged", "Punishable"],
    correctAnswer: 1
  },
  {
    id: 134,
    question: "The 'sterile cockpit' concept means:",
    choices: ["Only pilots can enter", "No talking during critical times", "Minimizing distractions during critical procedures", "Using airplane equipment"],
    correctAnswer: 2
  },
  {
    id: 135,
    question: "Multidisciplinary teamwork in infection prevention:",
    choices: ["Is unnecessary", "Improves outcomes", "Increases costs", "Slows procedures"],
    correctAnswer: 1
  },
  {
    id: 136,
    question: "Continuous education in sterile technique should be:",
    choices: ["One-time training", "Annual training", "Ongoing and regular", "Optional"],
    correctAnswer: 2
  },
  {
    id: 137,
    question: "Competency assessment should include:",
    choices: ["Written tests only", "Practical demonstration only", "Both written and practical", "Neither"],
    correctAnswer: 2
  },
  {
    id: 138,
    question: "New staff orientation should include:",
    choices: ["Basic procedures only", "Comprehensive sterile technique training", "On-the-job learning only", "Minimal training"],
    correctAnswer: 1
  },
  {
    id: 139,
    question: "Quality improvement in sterile processing should be:",
    choices: ["Reactive only", "Proactive and continuous", "Annual activity", "Optional"],
    correctAnswer: 1
  },
  {
    id: 140,
    question: "The most effective way to prevent surgical site infections is:",
    choices: ["Antibiotics only", "Comprehensive infection prevention bundle", "Faster surgery", "Expensive equipment"],
    correctAnswer: 1
  },
  {
    id: 141,
    question: "What is the primary purpose of anesthesia?",
    choices: ["To speed up surgery", "To provide unconsciousness, analgesia, and muscle relaxation", "To reduce bleeding", "To improve visibility"],
    correctAnswer: 1
  },
  {
    id: 142,
    question: "General anesthesia affects:",
    choices: ["Only consciousness", "Only pain sensation", "Consciousness, sensation, and reflexes", "Only muscle tone"],
    correctAnswer: 2
  },
  {
    id: 143,
    question: "Regional anesthesia blocks:",
    choices: ["All sensation", "Nerve conduction in specific area", "Only pain", "Only touch"],
    correctAnswer: 1
  },
  {
    id: 144,
    question: "Local anesthesia is administered:",
    choices: ["Systemically", "At the surgical site", "Intravenously", "Intramuscularly"],
    correctAnswer: 1
  },
  {
    id: 145,
    question: "MAC stands for:",
    choices: ["Maximum Allowable Concentration", "Monitored Anesthesia Care", "Minimum Alveolar Concentration", "Medical Anesthesia Control"],
    correctAnswer: 1
  },
  {
    id: 146,
    question: "The most commonly used inhalation anesthetic is:",
    choices: ["Halothane", "Sevoflurane", "Ether", "Nitrous oxide"],
    correctAnswer: 1
  },
  {
    id: 147,
    question: "Propofol is classified as:",
    choices: ["Inhalation anesthetic", "Intravenous anesthetic", "Local anesthetic", "Muscle relaxant"],
    correctAnswer: 1
  },
  {
    id: 148,
    question: "Succinylcholine is a:",
    choices: ["Sedative", "Analgesic", "Muscle relaxant", "Anesthetic"],
    correctAnswer: 2
  },
  {
    id: 149,
    question: "The most serious complication of succinylcholine is:",
    choices: ["Nausea", "Malignant hyperthermia", "Headache", "Dizziness"],
    correctAnswer: 1
  },
  {
    id: 150,
    question: "Rocuronium is reversed by:",
    choices: ["Neostigmine", "Sugammadex", "Flumazenil", "Naloxone"],
    correctAnswer: 1
  },
  {
    id: 151,
    question: "Lidocaine is a:",
    choices: ["General anesthetic", "Local anesthetic", "Muscle relaxant", "Sedative"],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "The maximum dose of lidocaine without epinephrine is:",
    choices: ["3 mg/kg", "5 mg/kg", "7 mg/kg", "10 mg/kg"],
    correctAnswer: 1
  },
  {
    id: 153,
    question: "Epinephrine is added to local anesthetics to:",
    choices: ["Increase potency", "Prolong duration and reduce bleeding", "Reduce toxicity", "Improve onset"],
    correctAnswer: 1
  },
  {
    id: 154,
    question: "Bupivacaine has a:",
    choices: ["Short duration", "Medium duration", "Long duration", "Variable duration"],
    correctAnswer: 2
  },
  {
    id: 155,
    question: "Spinal anesthesia is injected into the:",
    choices: ["Epidural space", "Subarachnoid space", "Muscle", "Vein"],
    correctAnswer: 1
  },
  {
    id: 156,
    question: "Epidural anesthesia is injected into the:",
    choices: ["Subarachnoid space", "Epidural space", "Intrathecal space", "Subdural space"],
    correctAnswer: 1
  },
  {
    id: 157,
    question: "A common complication of spinal anesthesia is:",
    choices: ["Hypertension", "Hypotension", "Tachycardia", "Fever"],
    correctAnswer: 1
  },
  {
    id: 158,
    question: "Post-dural puncture headache is treated with:",
    choices: ["Bed rest only", "Blood patch", "Surgery", "Antibiotics"],
    correctAnswer: 1
  },
  {
    id: 159,
    question: "Nerve blocks are used for:",
    choices: ["General anesthesia", "Regional anesthesia", "Sedation", "Muscle relaxation"],
    correctAnswer: 1
  },
  {
    id: 160,
    question: "Ultrasound guidance for nerve blocks:",
    choices: ["Is never used", "Improves accuracy and safety", "Is only for experts", "Increases complications"],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "Midazolam is a:",
    choices: ["Analgesic", "Sedative", "Muscle relaxant", "Local anesthetic"],
    correctAnswer: 1
  },
  {
    id: 162,
    question: "Fentanyl is:",
    choices: ["100 times more potent than morphine", "Less potent than morphine", "Equal to morphine", "10 times more potent than morphine"],
    correctAnswer: 0
  },
  {
    id: 163,
    question: "Naloxone reverses:",
    choices: ["Benzodiazepines", "Opioids", "Muscle relaxants", "Local anesthetics"],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Flumazenil reverses:",
    choices: ["Opioids", "Benzodiazepines", "Muscle relaxants", "Local anesthetics"],
    correctAnswer: 1
  },
  {
    id: 165,
    question: "The ASA physical status classification ranges from:",
    choices: ["I-IV", "I-V", "I-VI", "I-III"],
    correctAnswer: 2
  },
  {
    id: 166,
    question: "ASA I indicates:",
    choices: ["Severe systemic disease", "Normal healthy patient", "Mild systemic disease", "Life-threatening disease"],
    correctAnswer: 1
  },
  {
    id: 167,
    question: "Preoperative fasting guidelines for clear liquids:",
    choices: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctAnswer: 0
  },
  {
    id: 168,
    question: "Preoperative fasting for solid food:",
    choices: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctAnswer: 2
  },
  {
    id: 169,
    question: "Aspiration pneumonia is caused by:",
    choices: ["Infection", "Gastric contents entering lungs", "Allergic reaction", "Drug overdose"],
    correctAnswer: 1
  },
  {
    id: 170,
    question: "Cricoid pressure (Sellick maneuver) is used to:",
    choices: ["Improve ventilation", "Prevent aspiration", "Facilitate intubation", "Reduce bleeding"],
    correctAnswer: 1
  },
  {
    id: 171,
    question: "Rapid sequence induction is used for:",
    choices: ["All patients", "Patients at risk for aspiration", "Pediatric patients only", "Outpatient surgery"],
    correctAnswer: 1
  },
  {
    id: 172,
    question: "The laryngeal mask airway (LMA):",
    choices: ["Replaces endotracheal intubation", "Is inserted into the trachea", "Sits above the larynx", "Is used for long surgeries only"],
    correctAnswer: 2
  },
  {
    id: 173,
    question: "Endotracheal intubation provides:",
    choices: ["Partial airway protection", "Complete airway protection", "No airway protection", "Temporary protection only"],
    correctAnswer: 1
  },
  {
    id: 174,
    question: "Difficult airway management may require:",
    choices: ["Standard intubation only", "Fiberoptic intubation", "No special equipment", "Delayed surgery"],
    correctAnswer: 1
  },
  {
    id: 175,
    question: "Capnography measures:",
    choices: ["Oxygen levels", "Carbon dioxide levels", "Blood pressure", "Heart rate"],
    correctAnswer: 1
  },
  {
    id: 176,
    question: "Pulse oximetry measures:",
    choices: ["Blood pressure", "Oxygen saturation", "Carbon dioxide", "Temperature"],
    correctAnswer: 1
  },
  {
    id: 177,
    question: "Normal oxygen saturation is:",
    choices: ["85-90%", "90-95%", "95-100%", "100%"],
    correctAnswer: 2
  },
  {
    id: 178,
    question: "Hypoxemia is defined as:",
    choices: ["Low oxygen in blood", "Low oxygen in tissues", "High carbon dioxide", "Low blood pressure"],
    correctAnswer: 0
  },
  {
    id: 179,
    question: "Hypercapnia is:",
    choices: ["Low carbon dioxide", "High carbon dioxide", "Low oxygen", "High oxygen"],
    correctAnswer: 1
  },
  {
    id: 180,
    question: "Malignant hyperthermia is triggered by:",
    choices: ["All anesthetics", "Volatile anesthetics and succinylcholine", "Local anesthetics", "Opioids"],
    correctAnswer: 1
  },
  {
    id: 181,
    question: "The treatment for malignant hyperthermia is:",
    choices: ["Cooling only", "Dantrolene", "Antibiotics", "Steroids"],
    correctAnswer: 1
  },
  {
    id: 182,
    question: "Signs of malignant hyperthermia include:",
    choices: ["Hypothermia", "Hyperthermia and muscle rigidity", "Low heart rate", "Low blood pressure"],
    correctAnswer: 1
  },
  {
    id: 183,
    question: "Anaphylaxis during anesthesia is most commonly caused by:",
    choices: ["Antibiotics", "Neuromuscular blocking agents", "Local anesthetics", "Opioids"],
    correctAnswer: 1
  },
  {
    id: 184,
    question: "Treatment of anaphylaxis includes:",
    choices: ["Antihistamines only", "Epinephrine", "Steroids only", "Fluids only"],
    correctAnswer: 1
  },
  {
    id: 185,
    question: "Postoperative nausea and vomiting is most common after:",
    choices: ["Local anesthesia", "General anesthesia", "Regional anesthesia", "Sedation"],
    correctAnswer: 1
  },
  {
    id: 186,
    question: "Ondansetron is used to treat:",
    choices: ["Pain", "Nausea and vomiting", "Anxiety", "Muscle spasms"],
    correctAnswer: 1
  },
  {
    id: 187,
    question: "Postoperative shivering may be caused by:",
    choices: ["Pain only", "Hypothermia and pain", "Infection", "Dehydration"],
    correctAnswer: 1
  },
  {
    id: 188,
    question: "Emergence delirium is most common in:",
    choices: ["Adults", "Elderly patients", "Children", "Teenagers"],
    correctAnswer: 2
  },
  {
    id: 189,
    question: "Residual neuromuscular blockade can cause:",
    choices: ["Hypertension", "Respiratory complications", "Cardiac arrest", "Seizures"],
    correctAnswer: 1
  },
  {
    id: 190,
    question: "The train-of-four test evaluates:",
    choices: ["Consciousness", "Neuromuscular function", "Cardiac function", "Respiratory function"],
    correctAnswer: 1
  },
  {
    id: 191,
    question: "Patient-controlled analgesia (PCA) allows:",
    choices: ["Nurse-controlled dosing", "Patient self-administration of pain medication", "Continuous infusion only", "No pain control"],
    correctAnswer: 1
  },
  {
    id: 192,
    question: "Multimodal analgesia uses:",
    choices: ["Single drug", "Multiple drugs with different mechanisms", "Only opioids", "Only non-opioids"],
    correctAnswer: 1
  },
  {
    id: 193,
    question: "Enhanced recovery after surgery (ERAS) protocols:",
    choices: ["Increase complications", "Reduce length of stay", "Are not evidence-based", "Only apply to major surgery"],
    correctAnswer: 1
  },
  {
    id: 194,
    question: "Preemptive analgesia is given:",
    choices: ["After surgery", "Before surgical stimulus", "Only for severe pain", "Never"],
    correctAnswer: 1
  },
  {
    id: 195,
    question: "Regional anesthesia for postoperative pain:",
    choices: ["Is ineffective", "Reduces opioid requirements", "Increases complications", "Is not recommended"],
    correctAnswer: 1
  },
  {
    id: 196,
    question: "Chronic postsurgical pain occurs in:",
    choices: ["No patients", "5-10% of patients", "10-50% of patients", "All patients"],
    correctAnswer: 2
  },
  {
    id: 197,
    question: "Risk factors for chronic postsurgical pain include:",
    choices: ["Young age", "Severe acute postoperative pain", "Short surgery", "Local anesthesia"],
    correctAnswer: 1
  },
  {
    id: 198,
    question: "Gabapentin is used for:",
    choices: ["Sedation", "Neuropathic pain", "Muscle relaxation", "Nausea"],
    correctAnswer: 1
  },
  {
    id: 199,
    question: "The WHO pain ladder recommends:",
    choices: ["Starting with strong opioids", "Stepwise approach to pain management", "Only non-opioid medications", "Surgery for all pain"],
    correctAnswer: 1
  },
  {
    id: 200,
    question: "Breakthrough pain is:",
    choices: ["Constant pain", "Pain that occurs despite baseline medication", "Mild pain", "Psychological pain"],
    correctAnswer: 1
  },
  {
    id: 201,
    question: "What is the most common cause of surgical site infections?",
    choices: ["Airborne bacteria", "Patient's own flora", "Contaminated instruments", "Poor hand hygiene"],
    correctAnswer: 1
  },
  {
    id: 202,
    question: "Surgical site infections are classified into how many categories?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 1
  },
  {
    id: 203,
    question: "A superficial incisional SSI involves:",
    choices: ["Deep tissues", "Organ/space", "Skin and subcutaneous tissue", "Muscle and fascia"],
    correctAnswer: 2
  },
  {
    id: 204,
    question: "Deep incisional SSI involves:",
    choices: ["Skin only", "Fascia and muscle", "Organ/space", "Subcutaneous tissue only"],
    correctAnswer: 1
  },
  {
    id: 205,
    question: "The most important factor in preventing SSI is:",
    choices: ["Antibiotics", "Proper surgical technique", "Room temperature", "Lighting"],
    correctAnswer: 1
  },
  {
    id: 206,
    question: "Prophylactic antibiotics should be given:",
    choices: ["After surgery", "During surgery", "Within 1 hour before incision", "The day before surgery"],
    correctAnswer: 2
  },
  {
    id: 207,
    question: "The duration of prophylactic antibiotics should be:",
    choices: ["7 days", "3 days", "24 hours or less", "Until discharge"],
    correctAnswer: 2
  },
  {
    id: 208,
    question: "Wound classification helps determine:",
    choices: ["Surgical approach", "Infection risk", "Healing time", "Suture type"],
    correctAnswer: 1
  },
  {
    id: 209,
    question: "A clean wound has an infection rate of:",
    choices: ["<2%", "2-5%", "5-10%", ">10%"],
    correctAnswer: 0
  },
  {
    id: 210,
    question: "A dirty/infected wound has an infection rate of:",
    choices: ["<2%", "2-5%", "5-10%", ">10%"],
    correctAnswer: 3
  },
  {
    id: 211,
    question: "Clean-contaminated wounds include:",
    choices: ["Elective colon surgery", "Trauma surgery", "Appendectomy for perforated appendix", "Hernia repair"],
    correctAnswer: 0
  },
  {
    id: 212,
    question: "Contaminated wounds include:",
    choices: ["Elective surgery", "Fresh traumatic wounds", "Chronic open wounds", "Sterile procedures"],
    correctAnswer: 1
  },
  {
    id: 213,
    question: "The NNIS risk index includes:",
    choices: ["Patient age only", "ASA score, wound class, and procedure duration", "Surgeon experience", "Hospital type"],
    correctAnswer: 1
  },
  {
    id: 214,
    question: "Surveillance for SSI should continue for:",
    choices: ["7 days", "30 days", "60 days", "90 days"],
    correctAnswer: 1
  },
  {
    id: 215,
    question: "For implant procedures, surveillance should continue for:",
    choices: ["30 days", "90 days", "1 year", "2 years"],
    correctAnswer: 2
  },
  {
    id: 216,
    question: "The most common organism causing SSI is:",
    choices: ["E. coli", "Staphylococcus aureus", "Pseudomonas", "Enterococcus"],
    correctAnswer: 1
  },
  {
    id: 217,
    question: "MRSA stands for:",
    choices: ["Multiple Resistant Staph Aureus", "Methicillin-Resistant Staphylococcus Aureus", "Medical Resistant Staph Aureus", "Major Resistant Staph Aureus"],
    correctAnswer: 1
  },
  {
    id: 218,
    question: "VRE stands for:",
    choices: ["Vancomycin-Resistant Enterococcus", "Virus-Resistant Enterococcus", "Variable-Resistant Enterococcus", "Vaccine-Resistant Enterococcus"],
    correctAnswer: 0
  },
  {
    id: 219,
    question: "C. difficile infections are associated with:",
    choices: ["Surgery", "Antibiotic use", "Age", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 220,
    question: "Hand hygiene compliance should be:",
    choices: ["50%", "75%", "90%", "100%"],
    correctAnswer: 3
  },
  {
    id: 221,
    question: "The five moments of hand hygiene include:",
    choices: ["Before patient contact", "After patient contact", "After body fluid exposure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 222,
    question: "Contact precautions are used for:",
    choices: ["All patients", "Patients with multidrug-resistant organisms", "Surgical patients only", "ICU patients only"],
    correctAnswer: 1
  },
  {
    id: 223,
    question: "Droplet precautions are used for:",
    choices: ["Tuberculosis", "Influenza", "C. difficile", "MRSA"],
    correctAnswer: 1
  },
  {
    id: 224,
    question: "Airborne precautions require:",
    choices: ["Surgical mask", "N95 respirator", "Face shield", "Gown only"],
    correctAnswer: 1
  },
  {
    id: 225,
    question: "Tuberculosis requires:",
    choices: ["Contact precautions", "Droplet precautions", "Airborne precautions", "Standard precautions only"],
    correctAnswer: 2
  },
  {
    id: 226,
    question: "Healthcare-associated infections (HAI) affect:",
    choices: ["1 in 10 patients", "1 in 25 patients", "1 in 50 patients", "1 in 100 patients"],
    correctAnswer: 1
  },
  {
    id: 227,
    question: "The most common HAI is:",
    choices: ["Surgical site infection", "Urinary tract infection", "Pneumonia", "Bloodstream infection"],
    correctAnswer: 1
  },
  {
    id: 228,
    question: "Central line-associated bloodstream infections (CLABSI) can be prevented by:",
    choices: ["Using maximum sterile barriers", "Hand hygiene", "Chlorhexidine skin prep", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 229,
    question: "Catheter-associated urinary tract infections (CAUTI) are prevented by:",
    choices: ["Avoiding unnecessary catheters", "Early removal", "Sterile insertion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 230,
    question: "Ventilator-associated pneumonia (VAP) can be prevented by:",
    choices: ["Head of bed elevation", "Oral care", "Sedation breaks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 231,
    question: "The infection prevention and control program should include:",
    choices: ["Surveillance", "Education", "Policy development", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 232,
    question: "Outbreak investigation includes:",
    choices: ["Case identification", "Source identification", "Control measures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 233,
    question: "Employee health programs should include:",
    choices: ["Immunizations", "Exposure management", "Fit testing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 234,
    question: "Occupational exposure to bloodborne pathogens requires:",
    choices: ["Documentation only", "Immediate evaluation and follow-up", "Waiting 24 hours", "No action needed"],
    correctAnswer: 1
  },
  {
    id: 235,
    question: "Post-exposure prophylaxis for HIV should begin:",
    choices: ["Within 72 hours", "Within 24 hours", "Within 2 hours", "Anytime"],
    correctAnswer: 2
  },
  {
    id: 236,
    question: "Hepatitis B vaccination is:",
    choices: ["Optional", "Required for healthcare workers", "Not effective", "Only for high-risk workers"],
    correctAnswer: 1
  },
  {
    id: 237,
    question: "Influenza vaccination for healthcare workers is:",
    choices: ["Optional", "Strongly recommended", "Not necessary", "Contraindicated"],
    correctAnswer: 1
  },
  {
    id: 238,
    question: "Fit testing is required for:",
    choices: ["Surgical masks", "N95 respirators", "Face shields", "Gowns"],
    correctAnswer: 1
  },
  {
    id: 239,
    question: "Construction in healthcare facilities requires:",
    choices: ["No special precautions", "Infection control risk assessment", "Stopping all activities", "Moving all patients"],
    correctAnswer: 1
  },
  {
    id: 240,
    question: "Water quality in healthcare facilities should be monitored for:",
    choices: ["Temperature only", "Legionella", "Color", "Taste"],
    correctAnswer: 1
  },
  {
    id: 241,
    question: "What is the primary goal of hemostasis?",
    choices: ["Speed up surgery", "Control bleeding", "Improve visibility", "Reduce infection"],
    correctAnswer: 1
  },
  {
    id: 242,
    question: "The three phases of hemostasis are:",
    choices: ["Vascular, platelet, coagulation", "Primary, secondary, tertiary", "Immediate, delayed, permanent", "Local, regional, systemic"],
    correctAnswer: 0
  },
  {
    id: 243,
    question: "Primary hemostasis involves:",
    choices: ["Coagulation cascade", "Platelet aggregation", "Fibrin formation", "Clot dissolution"],
    correctAnswer: 1
  },
  {
    id: 244,
    question: "Secondary hemostasis involves:",
    choices: ["Vasoconstriction", "Platelet plug", "Coagulation cascade", "Wound healing"],
    correctAnswer: 2
  },
  {
    id: 245,
    question: "The coagulation cascade has how many pathways?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: 1
  },
  {
    id: 246,
    question: "The intrinsic pathway is activated by:",
    choices: ["Tissue factor", "Contact with collagen", "Thrombin", "Platelets"],
    correctAnswer: 1
  },
  {
    id: 247,
    question: "The extrinsic pathway is activated by:",
    choices: ["Collagen", "Tissue factor", "Factor XII", "Platelets"],
    correctAnswer: 1
  },
  {
    id: 248,
    question: "The final common pathway produces:",
    choices: ["Platelets", "Fibrinogen", "Thrombin", "Prothrombin"],
    correctAnswer: 2
  },
  {
    id: 249,
    question: "Fibrinogen is converted to fibrin by:",
    choices: ["Thrombin", "Factor X", "Platelets", "Calcium"],
    correctAnswer: 0
  },
  {
    id: 250,
    question: "Mechanical hemostasis includes:",
    choices: ["Medications", "Direct pressure", "Electrical energy", "Chemical agents"],
    correctAnswer: 1
  },
  {
    id: 251,
    question: "Electrocautery works by:",
    choices: ["Chemical reaction", "Heat generation", "Pressure", "Cold temperature"],
    correctAnswer: 1
  },
  {
    id: 252,
    question: "Monopolar electrocautery requires:",
    choices: ["Two electrodes", "Ground pad", "Special instruments", "Irrigation"],
    correctAnswer: 1
  },
  {
    id: 253,
    question: "Bipolar electrocautery:",
    choices: ["Requires ground pad", "Uses two electrodes in forceps", "Is less precise", "Cannot be used near pacemakers"],
    correctAnswer: 1
  },
  {
    id: 254,
    question: "The argon beam coagulator uses:",
    choices: ["Laser energy", "Argon gas and electricity", "Ultrasound", "Radiofrequency"],
    correctAnswer: 1
  },
  {
    id: 255,
    question: "Harmonic scalpel uses:",
    choices: ["Heat", "Ultrasonic energy", "Laser", "Radiofrequency"],
    correctAnswer: 1
  },
  {
    id: 256,
    question: "LigaSure uses:",
    choices: ["Ultrasound", "Bipolar energy and pressure", "Laser", "Heat only"],
    correctAnswer: 1
  },
  {
    id: 257,
    question: "Topical hemostatic agents include:",
    choices: ["Gelfoam", "Surgicel", "Thrombin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 258,
    question: "Gelfoam is made of:",
    choices: ["Collagen", "Absorbable gelatin", "Cellulose", "Synthetic material"],
    correctAnswer: 1
  },
  {
    id: 259,
    question: "Surgicel is made of:",
    choices: ["Gelatin", "Oxidized cellulose", "Collagen", "Thrombin"],
    correctAnswer: 1
  },
  {
    id: 260,
    question: "Avitene is made of:",
    choices: ["Gelatin", "Cellulose", "Microfibrillar collagen", "Thrombin"],
    correctAnswer: 2
  },
  {
    id: 261,
    question: "Thrombin is derived from:",
    choices: ["Plants", "Synthetic sources", "Bovine or human sources", "Minerals"],
    correctAnswer: 2
  },
  {
    id: 262,
    question: "Bone wax is used to:",
    choices: ["Seal soft tissue", "Control bone bleeding", "Strengthen bones", "Prevent infection"],
    correctAnswer: 1
  },
  {
    id: 263,
    question: "Fibrin sealants contain:",
    choices: ["Thrombin only", "Fibrinogen only", "Thrombin and fibrinogen", "Platelets only"],
    correctAnswer: 2
  },
  {
    id: 264,
    question: "Tranexamic acid is a:",
    choices: ["Procoagulant", "Anticoagulant", "Antifibrinolytic", "Platelet activator"],
    correctAnswer: 2
  },
  {
    id: 265,
    question: "Aminocaproic acid works by:",
    choices: ["Activating platelets", "Inhibiting fibrinolysis", "Promoting coagulation", "Vasoconstriction"],
    correctAnswer: 1
  },
  {
    id: 266,
    question: "Desmopressin (DDAVP) is used for:",
    choices: ["All bleeding disorders", "von Willebrand disease", "Hemophilia B", "Platelet disorders"],
    correctAnswer: 1
  },
  {
    id: 267,
    question: "Factor VIII concentrate is used for:",
    choices: ["Hemophilia A", "Hemophilia B", "von Willebrand disease", "All bleeding disorders"],
    correctAnswer: 0
  },
  {
    id: 268,
    question: "Factor IX concentrate is used for:",
    choices: ["Hemophilia A", "Hemophilia B", "von Willebrand disease", "Platelet disorders"],
    correctAnswer: 1
  },
  {
    id: 269,
    question: "Fresh frozen plasma contains:",
    choices: ["Only platelets", "Only red blood cells", "All coagulation factors", "Only fibrinogen"],
    correctAnswer: 2
  },
  {
    id: 270,
    question: "Cryoprecipitate contains high concentrations of:",
    choices: ["All factors", "Factor VIII and fibrinogen", "Platelets", "Factor IX"],
    correctAnswer: 1
  },
  {
    id: 271,
    question: "Platelet transfusions are indicated when:",
    choices: ["Count <150,000", "Count <100,000", "Count <50,000 with bleeding", "Always before surgery"],
    correctAnswer: 2
  },
  {
    id: 272,
    question: "Massive transfusion is defined as:",
    choices: ["5 units in 24 hours", "10 units in 24 hours", "Patient's blood volume in 24 hours", "Any transfusion"],
    correctAnswer: 2
  },
  {
    id: 273,
    question: "The massive transfusion protocol uses a ratio of:",
    choices: ["1:1:1", "2:1:1", "1:2:1", "Variable ratios"],
    correctAnswer: 0
  },
  {
    id: 274,
    question: "Complications of massive transfusion include:",
    choices: ["Hypothermia", "Coagulopathy", "Electrolyte imbalance", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 275,
    question: "Hypothermia affects coagulation by:",
    choices: ["Improving function", "Impairing enzyme function", "No effect", "Activating platelets"],
    correctAnswer: 1
  },
  {
    id: 276,
    question: "Acidosis affects coagulation by:",
    choices: ["Improving function", "Impairing function", "No effect", "Activating fibrinolysis"],
    correctAnswer: 1
  },
  {
    id: 277,
    question: "The lethal triad includes:",
    choices: ["Bleeding, shock, death", "Hypothermia, acidosis, coagulopathy", "Trauma, surgery, transfusion", "Pain, bleeding, infection"],
    correctAnswer: 1
  },
  {
    id: 278,
    question: "Point-of-care coagulation testing includes:",
    choices: ["PT/INR only", "PTT only", "TEG/ROTEM", "Platelet count only"],
    correctAnswer: 2
  },
  {
    id: 279,
    question: "TEG measures:",
    choices: ["Platelet count", "Clot strength and formation", "Bleeding time", "Factor levels"],
    correctAnswer: 1
  },
  {
    id: 280,
    question: "ROTEM is similar to:",
    choices: ["PT/INR", "PTT", "TEG", "Platelet aggregometry"],
    correctAnswer: 2
  },
  {
    id: 281,
    question: "Wound healing occurs in how many phases?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 2
  },
  {
    id: 282,
    question: "The inflammatory phase lasts:",
    choices: ["1-2 days", "3-5 days", "1 week", "2 weeks"],
    correctAnswer: 1
  },
  {
    id: 283,
    question: "The proliferative phase is characterized by:",
    choices: ["Inflammation", "Collagen synthesis", "Scar maturation", "Hemostasis"],
    correctAnswer: 1
  },
  {
    id: 284,
    question: "The maturation phase can last:",
    choices: ["Days", "Weeks", "Months to years", "Hours"],
    correctAnswer: 2
  },
  {
    id: 285,
    question: "Primary intention healing occurs in:",
    choices: ["Open wounds", "Infected wounds", "Surgically closed wounds", "Chronic wounds"],
    correctAnswer: 2
  },
  {
    id: 286,
    question: "Secondary intention healing occurs in:",
    choices: ["Closed wounds", "Open wounds left to heal", "Infected wounds", "All wounds"],
    correctAnswer: 1
  },
  {
    id: 287,
    question: "Tertiary intention healing involves:",
    choices: ["Immediate closure", "Delayed closure", "No closure", "Partial closure"],
    correctAnswer: 1
  },
  {
    id: 288,
    question: "Factors that impair wound healing include:",
    choices: ["Diabetes", "Smoking", "Poor nutrition", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 289,
    question: "Smoking impairs wound healing by:",
    choices: ["Reducing oxygen delivery", "Impairing immune function", "Affecting collagen synthesis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 290,
    question: "Diabetes impairs wound healing through:",
    choices: ["Hyperglycemia", "Vascular disease", "Neuropathy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 291,
    question: "Malnutrition affects wound healing by:",
    choices: ["Reducing protein synthesis", "Impairing immune function", "Delaying collagen formation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 292,
    question: "Steroids impair wound healing by:",
    choices: ["Reducing inflammation", "Impairing collagen synthesis", "Suppressing immune function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 293,
    question: "Age affects wound healing by:",
    choices: ["Slowing all phases", "No effect", "Improving healing", "Only affecting scar formation"],
    correctAnswer: 0
  },
  {
    id: 294,
    question: "Wound dehiscence is:",
    choices: ["Infection", "Separation of wound edges", "Excessive scarring", "Delayed healing"],
    correctAnswer: 1
  },
  {
    id: 295,
    question: "Evisceration is:",
    choices: ["Wound separation", "Organ protrusion", "Infection", "Bleeding"],
    correctAnswer: 1
  },
  {
    id: 296,
    question: "Hypertrophic scars:",
    choices: ["Extend beyond wound borders", "Stay within wound borders", "Never occur", "Are always normal"],
    correctAnswer: 1
  },
  {
    id: 297,
    question: "Keloid scars:",
    choices: ["Stay within wound borders", "Extend beyond wound borders", "Are always small", "Heal quickly"],
    correctAnswer: 1
  },
  {
    id: 298,
    question: "Contractures result from:",
    choices: ["Excessive collagen", "Inadequate collagen", "Normal healing", "Infection"],
    correctAnswer: 0
  },
  {
    id: 299,
    question: "Chronic wounds are defined as:",
    choices: ["Any wound", "Wounds that don't heal in 4 weeks", "Infected wounds", "Surgical wounds"],
    correctAnswer: 1
  },
  {
    id: 300,
    question: "The most important factor in wound healing is:",
    choices: ["Suture type", "Adequate blood supply", "Antibiotics", "Dressing type"],
    correctAnswer: 1
  },
  {
    id: 301,
    question: "What is the most common type of surgical instrument?",
    choices: ["Cutting instruments", "Grasping instruments", "Clamping instruments", "Retracting instruments"],
    correctAnswer: 1
  },
  {
    id: 302,
    question: "Scissors are classified as:",
    choices: ["Grasping instruments", "Cutting instruments", "Clamping instruments", "Probing instruments"],
    correctAnswer: 1
  },
  {
    id: 303,
    question: "Mayo scissors are used for:",
    choices: ["Delicate tissue", "Heavy tissue", "Sutures only", "Dressings only"],
    correctAnswer: 1
  },
  {
    id: 304,
    question: "Metzenbaum scissors are used for:",
    choices: ["Heavy tissue", "Delicate tissue", "Bone", "Metal"],
    correctAnswer: 1
  },
  {
    id: 305,
    question: "Bandage scissors have:",
    choices: ["Sharp points", "Blunt tips", "Curved blades", "Serrated edges"],
    correctAnswer: 1
  },
  {
    id: 306,
    question: "Scalpels are available in sizes:",
    choices: ["10-15", "10-25", "10-30", "15-25"],
    correctAnswer: 1
  },
  {
    id: 307,
    question: "A #10 blade is used for:",
    choices: ["Small incisions", "Large incisions", "Curved incisions", "Stab incisions"],
    correctAnswer: 1
  },
  {
    id: 308,
    question: "A #11 blade is used for:",
    choices: ["Large incisions", "Stab incisions", "Curved incisions", "Skin only"],
    correctAnswer: 1
  },
  {
    id: 309,
    question: "A #15 blade is used for:",
    choices: ["Large incisions", "Small, precise incisions", "Curved incisions", "Bone cutting"],
    correctAnswer: 1
  },
  {
    id: 310,
    question: "Forceps are used for:",
    choices: ["Cutting", "Grasping and holding", "Retracting", "Suturing"],
    correctAnswer: 1
  },
  {
    id: 311,
    question: "Tissue forceps have:",
    choices: ["Smooth tips", "Toothed tips", "No tips", "Curved tips"],
    correctAnswer: 1
  },
  {
    id: 312,
    question: "Adson forceps are:",
    choices: ["Heavy forceps", "Delicate forceps", "Curved forceps", "Locking forceps"],
    correctAnswer: 1
  },
  {
    id: 313,
    question: "Russian forceps have:",
    choices: ["Smooth tips", "Multiple small teeth", "One large tooth", "No teeth"],
    correctAnswer: 1
  },
  {
    id: 314,
    question: "Hemostats are used to:",
    choices: ["Cut tissue", "Control bleeding", "Retract tissue", "Suture"],
    correctAnswer: 1
  },
  {
    id: 315,
    question: "Kelly clamps are:",
    choices: ["Straight only", "Curved only", "Both straight and curved", "Neither straight nor curved"],
    correctAnswer: 2
  },
  {
    id: 316,
    question: "Mosquito clamps are:",
    choices: ["Large hemostats", "Small hemostats", "Tissue forceps", "Scissors"],
    correctAnswer: 1
  },
  {
    id: 317,
    question: "Kocher clamps have:",
    choices: ["Smooth jaws", "Serrated jaws", "Teeth", "No jaws"],
    correctAnswer: 2
  },
  {
    id: 318,
    question: "Allis clamps are used for:",
    choices: ["Hemostasis", "Grasping tissue", "Cutting", "Retracting"],
    correctAnswer: 1
  },
  {
    id: 319,
    question: "Babcock clamps are:",
    choices: ["Traumatic", "Atraumatic", "For bone only", "For metal only"],
    correctAnswer: 1
  },
  {
    id: 320,
    question: "Towel clamps are used to:",
    choices: ["Cut towels", "Secure drapes", "Grasp tissue", "Retract organs"],
    correctAnswer: 1
  },
  {
    id: 321,
    question: "Retractors are used to:",
    choices: ["Cut tissue", "Hold tissue aside", "Clamp vessels", "Suture wounds"],
    correctAnswer: 1
  },
  {
    id: 322,
    question: "Richardson retractors are:",
    choices: ["Self-retaining", "Hand-held", "Automatic", "Disposable"],
    correctAnswer: 1
  },
  {
    id: 323,
    question: "Weitlaner retractors are:",
    choices: ["Hand-held", "Self-retaining", "Single-use", "For skin only"],
    correctAnswer: 1
  },
  {
    id: 324,
    question: "Balfour retractors are used for:",
    choices: ["Superficial procedures", "Abdominal procedures", "Neurological procedures", "Cardiac procedures"],
    correctAnswer: 1
  },
  {
    id: 325,
    question: "Bookwalter retractors are:",
    choices: ["Hand-held", "Self-retaining systems", "Disposable", "For outpatient use only"],
    correctAnswer: 1
  },
  {
    id: 326,
    question: "Needle holders are used for:",
    choices: ["Holding needles for injection", "Suturing", "Cutting", "Grasping tissue"],
    correctAnswer: 1
  },
  {
    id: 327,
    question: "Mayo-Hegar needle holders have:",
    choices: ["Scissors", "No scissors", "Curved tips", "Smooth jaws"],
    correctAnswer: 1
  },
  {
    id: 328,
    question: "Olsen-Hegar needle holders have:",
    choices: ["No scissors", "Built-in scissors", "Curved jaws", "Smooth tips"],
    correctAnswer: 1
  },
  {
    id: 329,
    question: "Castroviejo needle holders are used for:",
    choices: ["General surgery", "Microsurgery", "Orthopedic surgery", "Cardiac surgery"],
    correctAnswer: 1
  },
  {
    id: 330,
    question: "Suture scissors are used to:",
    choices: ["Cut tissue", "Cut sutures", "Dissect", "Retract"],
    correctAnswer: 1
  },
  {
    id: 331,
    question: "Probes are used for:",
    choices: ["Cutting", "Exploring wounds", "Grasping", "Retracting"],
    correctAnswer: 1
  },
  {
    id: 332,
    question: "Grooved directors are used to:",
    choices: ["Cut tissue", "Guide instruments", "Retract tissue", "Clamp vessels"],
    correctAnswer: 1
  },
  {
    id: 333,
    question: "Sounds are used for:",
    choices: ["Hearing", "Dilating passages", "Cutting", "Grasping"],
    correctAnswer: 1
  },
  {
    id: 334,
    question: "Dilators are used to:",
    choices: ["Cut tissue", "Enlarge openings", "Grasp tissue", "Retract organs"],
    correctAnswer: 1
  },
  {
    id: 335,
    question: "Hegar dilators are used for:",
    choices: ["Urethral dilation", "Cervical dilation", "Esophageal dilation", "Vascular dilation"],
    correctAnswer: 1
  },
  {
    id: 336,
    question: "Instrument care includes:",
    choices: ["Cleaning only", "Sterilization only", "Cleaning, inspection, and sterilization", "Storage only"],
    correctAnswer: 2
  },
  {
    id: 337,
    question: "Instruments should be cleaned:",
    choices: ["Immediately after use", "At the end of the day", "Once a week", "When convenient"],
    correctAnswer: 0
  },
  {
    id: 338,
    question: "Ultrasonic cleaners use:",
    choices: ["Heat only", "Chemicals only", "Sound waves", "Pressure only"],
    correctAnswer: 2
  },
  {
    id: 339,
    question: "Instrument milk is used for:",
    choices: ["Cleaning", "Lubrication", "Sterilization", "Storage"],
    correctAnswer: 1
  },
  {
    id: 340,
    question: "Damaged instruments should be:",
    choices: ["Used carefully", "Repaired or discarded", "Ignored", "Sterilized anyway"],
    correctAnswer: 1
  },
  {
    id: 341,
    question: "What is the primary purpose of surgical positioning?",
    choices: ["Surgeon comfort", "Patient safety and surgical access", "Speed of surgery", "Cost reduction"],
    correctAnswer: 1
  },
  {
    id: 342,
    question: "The most common surgical position is:",
    choices: ["Prone", "Lateral", "Supine", "Trendelenburg"],
    correctAnswer: 2
  },
  {
    id: 343,
    question: "Supine position is also called:",
    choices: ["Prone position", "Dorsal recumbent", "Lateral position", "Sitting position"],
    correctAnswer: 1
  },
  {
    id: 344,
    question: "In supine position, arms should be:",
    choices: ["Above the head", "At less than 90 degrees from body", "Hanging freely", "Crossed over chest"],
    correctAnswer: 1
  },
  {
    id: 345,
    question: "Trendelenburg position involves:",
    choices: ["Head up, feet down", "Head down, feet up", "Side lying", "Sitting upright"],
    correctAnswer: 1
  },
  {
    id: 346,
    question: "Reverse Trendelenburg involves:",
    choices: ["Head down, feet up", "Head up, feet down", "Side lying", "Prone position"],
    correctAnswer: 1
  },
  {
    id: 347,
    question: "Fowler's position is:",
    choices: ["Lying flat", "Semi-sitting", "Side lying", "Prone"],
    correctAnswer: 1
  },
  {
    id: 348,
    question: "Prone position is used for:",
    choices: ["Abdominal surgery", "Spine surgery", "Cardiac surgery", "Gynecologic surgery"],
    correctAnswer: 1
  },
  {
    id: 349,
    question: "In prone position, the main concern is:",
    choices: ["Circulation", "Respiration", "Both circulation and respiration", "Temperature"],
    correctAnswer: 2
  },
  {
    id: 350,
    question: "Lateral position is used for:",
    choices: ["Abdominal surgery", "Kidney surgery", "Brain surgery", "Heart surgery"],
    correctAnswer: 1
  },
  {
    id: 351,
    question: "In lateral position, support is needed for:",
    choices: ["Head only", "Legs only", "Head, torso, and legs", "Arms only"],
    correctAnswer: 2
  },
  {
    id: 352,
    question: "Lithotomy position is used for:",
    choices: ["Abdominal surgery", "Gynecologic and urologic procedures", "Cardiac surgery", "Neurologic surgery"],
    correctAnswer: 1
  },
  {
    id: 353,
    question: "In lithotomy position, legs should be:",
    choices: ["Raised quickly", "Lowered quickly", "Raised and lowered simultaneously and slowly", "Positioned asymmetrically"],
    correctAnswer: 2
  },
  {
    id: 354,
    question: "Kidney position is a modification of:",
    choices: ["Supine", "Prone", "Lateral", "Sitting"],
    correctAnswer: 2
  },
  {
    id: 355,
    question: "Beach chair position is used for:",
    choices: ["Abdominal surgery", "Shoulder surgery", "Leg surgery", "Back surgery"],
    correctAnswer: 1
  },
  {
    id: 356,
    question: "Pressure points in supine position include:",
    choices: ["Occiput and heels", "Shoulders and hips", "Knees and elbows", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 357,
    question: "Pressure ulcers can develop in:",
    choices: ["Hours", "Days", "Weeks", "Months"],
    correctAnswer: 0
  },
  {
    id: 358,
    question: "Padding should be used:",
    choices: ["Only for long procedures", "For all pressure points", "Only for elderly patients", "Only when requested"],
    correctAnswer: 1
  },
  {
    id: 359,
    question: "Nerve injury during positioning is caused by:",
    choices: ["Stretching", "Compression", "Both stretching and compression", "Temperature"],
    correctAnswer: 2
  },
  {
    id: 360,
    question: "The most commonly injured nerve during surgery is:",
    choices: ["Radial nerve", "Ulnar nerve", "Median nerve", "Peroneal nerve"],
    correctAnswer: 1
  },
  {
    id: 361,
    question: "Ulnar nerve injury causes:",
    choices: ["Wrist drop", "Numbness in 4th and 5th fingers", "Foot drop", "Shoulder weakness"],
    correctAnswer: 1
  },
  {
    id: 362,
    question: "Brachial plexus injury can result from:",
    choices: ["Arm abduction >90 degrees", "Proper positioning", "Short procedures", "Supine position only"],
    correctAnswer: 0
  },
  {
    id: 363,
    question: "Peroneal nerve injury causes:",
    choices: ["Hand weakness", "Foot drop", "Arm numbness", "Leg weakness"],
    correctAnswer: 1
  },
  {
    id: 364,
    question: "Eye protection during prone positioning includes:",
    choices: ["Nothing needed", "Eye pads", "Special headrests", "Both eye pads and special headrests"],
    correctAnswer: 3
  },
  {
    id: 365,
    question: "Compartment syndrome can result from:",
    choices: ["Proper positioning", "Prolonged pressure", "Short procedures", "Supine position"],
    correctAnswer: 1
  },
  {
    id: 366,
    question: "Rhabdomyolysis is:",
    choices: ["Muscle breakdown", "Nerve damage", "Skin breakdown", "Bone fracture"],
    correctAnswer: 0
  },
  {
    id: 367,
    question: "Positioning devices include:",
    choices: ["Gel pads", "Foam supports", "Bean bags", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 368,
    question: "The surgical team member responsible for positioning is:",
    choices: ["Surgeon only", "Anesthesiologist only", "Entire surgical team", "Circulating nurse only"],
    correctAnswer: 2
  },
  {
    id: 369,
    question: "Patient assessment before positioning should include:",
    choices: ["Range of motion", "Previous injuries", "Physical limitations", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 370,
    question: "Documentation of positioning should include:",
    choices: ["Position used", "Devices used", "Skin condition", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 371,
    question: "What is the primary goal of preoperative assessment?",
    choices: ["Speed up surgery", "Identify and minimize risks", "Reduce costs", "Satisfy regulations"],
    correctAnswer: 1
  },
  {
    id: 372,
    question: "The history and physical should be completed:",
    choices: ["Day of surgery", "Within 30 days before surgery", "Week of surgery", "Month before surgery"],
    correctAnswer: 1
  },
  {
    id: 373,
    question: "ASA physical status classification has how many categories?",
    choices: ["4", "5", "6", "7"],
    correctAnswer: 2
  },
  {
    id: 374,
    question: "ASA I indicates:",
    choices: ["Severe disease", "Mild disease", "Normal healthy patient", "Moribund patient"],
    correctAnswer: 2
  },
  {
    id: 375,
    question: "ASA VI indicates:",
    choices: ["Normal patient", "Severe disease", "Brain-dead organ donor", "Emergency surgery"],
    correctAnswer: 2
  },
  {
    id: 376,
    question: "The 'E' modifier in ASA classification indicates:",
    choices: ["Elderly patient", "Emergency surgery", "Elective surgery", "Experimental procedure"],
    correctAnswer: 1
  },
  {
    id: 377,
    question: "Preoperative fasting guidelines for clear liquids:",
    choices: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctAnswer: 0
  },
  {
    id: 378,
    question: "Preoperative fasting for breast milk:",
    choices: ["2 hours", "4 hours", "6 hours", "8 hours"],
    correctAnswer: 1
  },
  {
    id: 379,
    question: "Preoperative fasting for solid food:",
    choices: ["4 hours", "6 hours", "8 hours", "12 hours"],
    correctAnswer: 2
  },
  {
    id: 380,
    question: "The purpose of preoperative fasting is to:",
    choices: ["Reduce nausea", "Prevent aspiration", "Improve anesthesia", "Speed recovery"],
    correctAnswer: 1
  },
  {
    id: 381,
    question: "Aspiration risk is highest in:",
    choices: ["Healthy patients", "Patients with full stomach", "Pediatric patients", "Elderly patients"],
    correctAnswer: 1
  },
  {
    id: 382,
    question: "Preoperative medications may include:",
    choices: ["Anxiolytics", "Analgesics", "Antiemetics", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 383,
    question: "Midazolam is used for:",
    choices: ["Pain relief", "Anxiety reduction", "Nausea prevention", "Blood pressure control"],
    correctAnswer: 1
  },
  {
    id: 384,
    question: "Antibiotic prophylaxis should be given:",
    choices: ["After surgery", "During surgery", "Within 1 hour before incision", "Day before surgery"],
    correctAnswer: 2
  },
  {
    id: 385,
    question: "The most common prophylactic antibiotic is:",
    choices: ["Penicillin", "Cefazolin", "Vancomycin", "Gentamicin"],
    correctAnswer: 1
  },
  {
    id: 386,
    question: "Vancomycin prophylaxis is used for:",
    choices: ["All patients", "MRSA risk patients", "Pediatric patients", "Outpatient surgery"],
    correctAnswer: 1
  },
  {
    id: 387,
    question: "Beta-blocker continuation perioperatively:",
    choices: ["Should be stopped", "Should be continued", "Depends on surgery", "Is not important"],
    correctAnswer: 1
  },
  {
    id: 388,
    question: "ACE inhibitors perioperatively:",
    choices: ["Always continue", "Always stop", "May be held", "Double the dose"],
    correctAnswer: 2
  },
  {
    id: 389,
    question: "Anticoagulants before surgery:",
    choices: ["Always continue", "Always stop", "Require careful management", "Double the dose"],
    correctAnswer: 2
  },
  {
    id: 390,
    question: "Warfarin should be stopped how many days before surgery?",
    choices: ["1-2 days", "3-5 days", "7 days", "14 days"],
    correctAnswer: 1
  },
  {
    id: 391,
    question: "Bridging anticoagulation uses:",
    choices: ["Warfarin", "Heparin", "Aspirin", "Clopidogrel"],
    correctAnswer: 1
  },
  {
    id: 392,
    question: "Diabetic patients may need:",
    choices: ["Normal medications", "Insulin adjustment", "No medications", "Extra medications"],
    correctAnswer: 1
  },
  {
    id: 393,
    question: "NPO diabetic patients should:",
    choices: ["Take normal insulin", "Hold short-acting insulin", "Double insulin dose", "Stop all medications"],
    correctAnswer: 1
  },
  {
    id: 394,
    question: "Preoperative glucose goals are:",
    choices: ["<100 mg/dL", "<180 mg/dL", "<200 mg/dL", "Any level"],
    correctAnswer: 1
  },
  {
    id: 395,
    question: "Cardiac risk assessment includes:",
    choices: ["ECG", "Stress testing", "Echocardiogram", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 396,
    question: "Pulmonary function tests are indicated for:",
    choices: ["All patients", "Patients with lung disease", "Cardiac patients", "Pediatric patients"],
    correctAnswer: 1
  },
  {
    id: 397,
    question: "Smoking cessation should occur:",
    choices: ["Day of surgery", "Week before surgery", "At least 4 weeks before", "After surgery"],
    correctAnswer: 2
  },
  {
    id: 398,
    question: "Alcohol withdrawal can occur:",
    choices: ["Only after surgery", "6-24 hours after last drink", "Only in severe alcoholics", "Never during surgery"],
    correctAnswer: 1
  },
  {
    id: 399,
    question: "Informed consent must include:",
    choices: ["Risks only", "Benefits only", "Risks, benefits, and alternatives", "Surgeon preference"],
    correctAnswer: 2
  },
  {
    id: 400,
    question: "The person obtaining consent should be:",
    choices: ["Any nurse", "The surgeon", "Hospital administrator", "Patient's family"],
    correctAnswer: 1
  },
  {
    id: 401,
    question: "What is the most important factor in preventing surgical fires?",
    choices: ["Fire extinguishers", "Fire prevention", "Fire detection", "Fire suppression"],
    correctAnswer: 1
  },
  {
    id: 402,
    question: "The fire triangle consists of:",
    choices: ["Heat, fuel, oxygen", "Heat, smoke, flame", "Fuel, smoke, oxygen", "Heat, fuel, carbon dioxide"],
    correctAnswer: 0
  },
  {
    id: 403,
    question: "The most common ignition source in surgery is:",
    choices: ["Laser", "Electrocautery", "Light source", "Defibrillator"],
    correctAnswer: 1
  },
  {
    id: 404,
    question: "Common fuels in the OR include:",
    choices: ["Drapes", "Alcohol prep solutions", "Hair", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 405,
    question: "Oxygen concentration above what level increases fire risk?",
    choices: ["21%", "25%", "30%", "50%"],
    correctAnswer: 1
  },
  {
    id: 406,
    question: "Alcohol-based prep solutions should:",
    choices: ["Never be used", "Be allowed to dry completely", "Be used wet", "Be mixed with other solutions"],
    correctAnswer: 1
  },
  {
    id: 407,
    question: "Electrocautery should not be used near:",
    choices: ["Metal instruments", "Wet areas", "Oxygen sources", "Patient monitors"],
    correctAnswer: 2
  },
  {
    id: 408,
    question: "If a fire occurs, the first action is:",
    choices: ["Call fire department", "Stop the flow of gases", "Use fire extinguisher", "Evacuate the room"],
    correctAnswer: 1
  },
  {
    id: 409,
    question: "The acronym RACE stands for:",
    choices: ["Run, Alert, Call, Evacuate", "Rescue, Alarm, Contain, Evacuate", "Remove, Alert, Contain, Extinguish", "Rescue, Alert, Contain, Extinguish"],
    correctAnswer: 1
  },
  {
    id: 410,
    question: "Class C fire extinguishers are used for:",
    choices: ["Paper fires", "Liquid fires", "Electrical fires", "Metal fires"],
    correctAnswer: 2
  },
  {
    id: 411,
    question: "Laser safety requires:",
    choices: ["Eye protection", "Appropriate filters", "Warning signs", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 412,
    question: "Laser eye protection depends on:",
    choices: ["Laser wavelength", "Room lighting", "Patient position", "Surgeon preference"],
    correctAnswer: 0
  },
  {
    id: 413,
    question: "CO2 lasers require:",
    choices: ["No eye protection", "Clear glasses", "Specific wavelength filters", "Sunglasses"],
    correctAnswer: 2
  },
  {
    id: 414,
    question: "Electrical safety in the OR includes:",
    choices: ["Proper grounding", "Equipment inspection", "Avoiding wet conditions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 415,
    question: "Ground fault circuit interrupters (GFCI) protect against:",
    choices: ["Fire", "Electrical shock", "Equipment damage", "Power outages"],
    correctAnswer: 1
  },
  {
    id: 416,
    question: "Isolated power systems:",
    choices: ["Increase shock risk", "Reduce shock risk", "Have no effect", "Are not used in ORs"],
    correctAnswer: 1
  },
  {
    id: 417,
    question: "Line isolation monitors:",
    choices: ["Control power", "Monitor electrical safety", "Prevent fires", "Control lighting"],
    correctAnswer: 1
  },
  {
    id: 418,
    question: "Radiation safety follows the ALARA principle:",
    choices: ["As Low As Reasonably Achievable", "Always Low And Rarely Applied", "All Levels Are Reasonably Acceptable", "Avoid Low And Reduce Applications"],
    correctAnswer: 0
  },
  {
    id: 419,
    question: "The three principles of radiation protection are:",
    choices: ["Time, distance, shielding", "Time, dose, exposure", "Distance, dose, shielding", "Time, distance, monitoring"],
    correctAnswer: 0
  },
  {
    id: 420,
    question: "Lead aprons provide protection from:",
    choices: ["All radiation", "X-rays and gamma rays", "Alpha particles", "Beta particles"],
    correctAnswer: 1
  },
  {
    id: 421,
    question: "Radiation badges monitor:",
    choices: ["Room radiation", "Personal exposure", "Equipment function", "Patient dose"],
    correctAnswer: 1
  },
  {
    id: 422,
    question: "Chemical safety includes:",
    choices: ["Proper storage", "Personal protective equipment", "Spill procedures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 423,
    question: "Material Safety Data Sheets (MSDS) provide:",
    choices: ["Chemical composition", "Hazard information", "Emergency procedures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 424,
    question: "Formaldehyde exposure limits are regulated by:",
    choices: ["FDA", "OSHA", "CDC", "Joint Commission"],
    correctAnswer: 1
  },
  {
    id: 425,
    question: "Glutaraldehyde requires:",
    choices: ["No precautions", "Adequate ventilation", "Special storage", "Both adequate ventilation and special storage"],
    correctAnswer: 3
  },
  {
    id: 426,
    question: "Waste anesthetic gases can cause:",
    choices: ["No problems", "Reproductive effects", "Respiratory problems", "Both reproductive and respiratory effects"],
    correctAnswer: 3
  },
  {
    id: 427,
    question: "Scavenging systems remove:",
    choices: ["Surgical smoke", "Waste anesthetic gases", "Chemical vapors", "All of the above"],
    correctAnswer: 1
  },
  {
    id: 428,
    question: "Surgical smoke contains:",
    choices: ["Water vapor only", "Toxic chemicals", "Viable bacteria", "Both toxic chemicals and viable bacteria"],
    correctAnswer: 3
  },
  {
    id: 429,
    question: "Smoke evacuation systems should be used:",
    choices: ["Only for long procedures", "For all electrocautery use", "Only when smoke is visible", "Only for laser procedures"],
    correctAnswer: 1
  },
  {
    id: 430,
    question: "Ergonomic hazards in surgery include:",
    choices: ["Heavy lifting", "Prolonged standing", "Repetitive motions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 431,
    question: "What is the primary purpose of the surgical count?",
    choices: ["Inventory control", "Patient safety", "Cost control", "Quality assurance"],
    correctAnswer: 1
  },
  {
    id: 432,
    question: "Surgical counts should be performed:",
    choices: ["Once during surgery", "Before and after surgery", "Only if requested", "At surgeon's discretion"],
    correctAnswer: 1
  },
  {
    id: 433,
    question: "Items that must be counted include:",
    choices: ["Sponges only", "Instruments only", "Sponges, instruments, and sharps", "Only expensive items"],
    correctAnswer: 2
  },
  {
    id: 434,
    question: "Sponge counts should be performed by:",
    choices: ["Scrub tech only", "Circulator only", "Scrub tech and circulator together", "Surgeon"],
    correctAnswer: 2
  },
  {
    id: 435,
    question: "If a count is incorrect, the first action is:",
    choices: ["Close the patient", "Recount", "Take X-ray", "Call supervisor"],
    correctAnswer: 1
  },
  {
    id: 436,
    question: "X-rays may be taken if:",
    choices: ["Count is correct", "Count is incorrect", "Surgeon requests", "Patient is stable"],
    correctAnswer: 1
  },
  {
    id: 437,
    question: "Radiopaque sponges contain:",
    choices: ["Metal threads", "Barium sulfate", "Iodine", "Contrast dye"],
    correctAnswer: 1
  },
  {
    id: 438,
    question: "Small sponges should be:",
    choices: ["Used freely", "Kept on a string or in a bag", "Never used", "Counted separately"],
    correctAnswer: 1
  },
  {
    id: 439,
    question: "Instrument counts are performed:",
    choices: ["Before surgery only", "After surgery only", "Before and after surgery", "During surgery"],
    correctAnswer: 2
  },
  {
    id: 440,
    question: "Broken instruments should be:",
    choices: ["Ignored", "Accounted for completely", "Discarded", "Used carefully"],
    correctAnswer: 1
  },
  {
    id: 441,
    question: "Needle counts include:",
    choices: ["Suture needles only", "All needles", "Hypodermic needles only", "Biopsy needles only"],
    correctAnswer: 1
  },
  {
    id: 442,
    question: "Broken needles must be:",
    choices: ["Ignored", "Accounted for completely", "Replaced", "Reported later"],
    correctAnswer: 1
  },
  {
    id: 443,
    question: "Count documentation should include:",
    choices: ["Final count only", "All count results", "Only incorrect counts", "Surgeon's preference"],
    correctAnswer: 1
  },
  {
    id: 444,
    question: "The circulator is responsible for:",
    choices: ["Sterile field only", "Non-sterile activities", "Patient positioning only", "Anesthesia monitoring"],
    correctAnswer: 1
  },
  {
    id: 445,
    question: "The scrub technologist is responsible for:",
    choices: ["Non-sterile activities", "Maintaining sterile field", "Patient positioning", "Room setup only"],
    correctAnswer: 1
  },
  {
    id: 446,
    question: "Surgical time-out includes verification of:",
    choices: ["Patient identity", "Procedure", "Site", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 447,
    question: "The time-out should be performed:",
    choices: ["Before patient enters OR", "After anesthesia induction", "Before incision", "After surgery"],
    correctAnswer: 2
  },
  {
    id: 448,
    question: "Wrong-site surgery can be prevented by:",
    choices: ["Site marking", "Time-out", "Verification processes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 449,
    question: "Site marking should be done by:",
    choices: ["Nurse", "Anesthesiologist", "Surgeon", "Patient"],
    correctAnswer: 2
  },
  {
    id: 450,
    question: "The Universal Protocol includes:",
    choices: ["Pre-procedure verification", "Site marking", "Time-out", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 451,
    question: "What is the most common postoperative complication?",
    choices: ["Infection", "Pain", "Nausea and vomiting", "Bleeding"],
    correctAnswer: 2
  },
  {
    id: 452,
    question: "Postoperative pain management should be:",
    choices: ["Reactive", "Proactive", "Minimal", "Delayed"],
    correctAnswer: 1
  },
  {
    id: 453,
    question: "Multimodal analgesia uses:",
    choices: ["Single medication", "Multiple medications", "Only opioids", "Only non-opioids"],
    correctAnswer: 1
  },
  {
    id: 454,
    question: "Patient-controlled analgesia (PCA) allows:",
    choices: ["Nurse control", "Patient self-dosing", "Continuous infusion", "No pain control"],
    correctAnswer: 1
  },
  {
    id: 455,
    question: "Regional anesthesia for postoperative pain:",
    choices: ["Is ineffective", "Reduces opioid needs", "Increases complications", "Is not recommended"],
    correctAnswer: 1
  },
  {
    id: 456,
    question: "Early mobilization after surgery:",
    choices: ["Increases complications", "Reduces complications", "Has no effect", "Is dangerous"],
    correctAnswer: 1
  },
  {
    id: 457,
    question: "Deep vein thrombosis prevention includes:",
    choices: ["Early mobilization", "Compression devices", "Anticoagulation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 458,
    question: "Pulmonary embolism is most commonly caused by:",
    choices: ["Air embolism", "Fat embolism", "Deep vein thrombosis", "Amniotic fluid embolism"],
    correctAnswer: 2
  },
  {
    id: 459,
    question: "Pneumonia prevention includes:",
    choices: ["Early mobilization", "Incentive spirometry", "Coughing and deep breathing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 460,
    question: "Wound healing is optimized by:",
    choices: ["Adequate nutrition", "Smoking cessation", "Glucose control", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 461,
    question: "Signs of wound infection include:",
    choices: ["Redness", "Swelling", "Purulent drainage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 462,
    question: "Dehiscence is:",
    choices: ["Wound infection", "Wound separation", "Excessive scarring", "Normal healing"],
    correctAnswer: 1
  },
  {
    id: 463,
    question: "Evisceration requires:",
    choices: ["Observation", "Immediate surgery", "Antibiotics only", "Dressing change"],
    correctAnswer: 1
  },
  {
    id: 464,
    question: "Postoperative ileus is:",
    choices: ["Normal", "Temporary bowel dysfunction", "Permanent condition", "Always serious"],
    correctAnswer: 1
  },
  {
    id: 465,
    question: "Urinary retention after surgery may be caused by:",
    choices: ["Anesthesia", "Pain medications", "Surgical trauma", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 466,
    question: "Postoperative delirium is most common in:",
    choices: ["Young adults", "Middle-aged patients", "Elderly patients", "Children"],
    correctAnswer: 2
  },
  {
    id: 467,
    question: "Risk factors for postoperative delirium include:",
    choices: ["Advanced age", "Cognitive impairment", "Multiple medications", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 468,
    question: "Malignant hyperthermia can occur:",
    choices: ["Only during surgery", "During or after surgery", "Only after surgery", "Never after surgery"],
    correctAnswer: 1
  },
  {
    id: 469,
    question: "Treatment of malignant hyperthermia includes:",
    choices: ["Dantrolene", "Cooling measures", "Supportive care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 470,
    question: "Enhanced recovery protocols (ERAS) include:",
    choices: ["Preoperative optimization", "Intraoperative management", "Postoperative care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 471,
    question: "What is the primary goal of minimally invasive surgery?",
    choices: ["Faster surgery", "Reduced trauma", "Lower costs", "Surgeon convenience"],
    correctAnswer: 1
  },
  {
    id: 472,
    question: "Laparoscopic surgery uses:",
    choices: ["Large incisions", "Small incisions and camera", "No incisions", "Natural orifices only"],
    correctAnswer: 1
  },
  {
    id: 473,
    question: "CO2 is used for insufflation because it:",
    choices: ["Is inert", "Is highly soluble", "Provides better visualization", "Is less expensive"],
    correctAnswer: 1
  },
  {
    id: 474,
    question: "Pneumoperitoneum is created by:",
    choices: ["Air insufflation", "CO2 insufflation", "Saline irrigation", "Manual retraction"],
    correctAnswer: 1
  },
  {
    id: 475,
    question: "Trendelenburg position in laparoscopy:",
    choices: ["Is never used", "Improves visualization", "Increases complications", "Is always required"],
    correctAnswer: 1
  },
  {
    id: 476,
    question: "Laparoscopic instruments are:",
    choices: ["Identical to open instruments", "Longer and thinner", "Shorter and wider", "Not specialized"],
    correctAnswer: 1
  },
  {
    id: 477,
    question: "The laparoscope provides:",
    choices: ["Magnification only", "Illumination only", "Magnification and illumination", "Neither magnification nor illumination"],
    correctAnswer: 2
  },
  {
    id: 478,
    question: "Complications of laparoscopy include:",
    choices: ["Vascular injury", "Bowel injury", "Gas embolism", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 479,
    question: "Conversion to open surgery may be needed for:",
    choices: ["Complications", "Poor visualization", "Extensive disease", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 480,
    question: "Robotic surgery provides:",
    choices: ["Tremor elimination", "3D visualization", "Improved dexterity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 481,
    question: "The da Vinci robot has:",
    choices: ["2 arms", "3 arms", "4 arms", "Variable arms"],
    correctAnswer: 3
  },
  {
    id: 482,
    question: "Robotic surgery requires:",
    choices: ["Less training", "Extensive training", "No special training", "Basic training only"],
    correctAnswer: 1
  },
  {
    id: 483,
    question: "NOTES stands for:",
    choices: ["Natural Orifice Transluminal Endoscopic Surgery", "New Operative Techniques in Endoscopic Surgery", "Non-invasive Operative Transluminal Endoscopic Surgery", "Natural Operative Transluminal Endoscopic Procedures"],
    correctAnswer: 0
  },
  {
    id: 484,
    question: "SILS stands for:",
    choices: ["Single Incision Laparoscopic Surgery", "Small Incision Laparoscopic Surgery", "Simple Incision Laparoscopic Surgery", "Specialized Incision Laparoscopic Surgery"],
    correctAnswer: 0
  },
  {
    id: 485,
    question: "Endoscopic surgery includes:",
    choices: ["Arthroscopy", "Bronchoscopy", "Colonoscopy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 486,
    question: "Arthroscopy is used for:",
    choices: ["Joint visualization", "Joint surgery", "Diagnosis and treatment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 487,
    question: "Hysteroscopy is used for:",
    choices: ["Uterine visualization", "Uterine surgery", "Diagnosis and treatment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 488,
    question: "Cystoscopy is used for:",
    choices: ["Bladder visualization", "Bladder surgery", "Diagnosis and treatment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 489,
    question: "Thoracoscopy is also called:",
    choices: ["VATS", "RATS", "MITS", "CATS"],
    correctAnswer: 0
  },
  {
    id: 490,
    question: "VATS stands for:",
    choices: ["Video-Assisted Thoracic Surgery", "Video-Assisted Thoracoscopic Surgery", "Visually-Assisted Thoracic Surgery", "Video-Assisted Therapeutic Surgery"],
    correctAnswer: 1
  },
  {
    id: 491,
    question: "What type of anesthesia is commonly used for outpatient surgery?",
    choices: ["General anesthesia only", "Regional anesthesia only", "Local anesthesia only", "All types depending on procedure"],
    correctAnswer: 3
  },
  {
    id: 492,
    question: "Outpatient surgery requires:",
    choices: ["Overnight stay", "Same-day discharge", "Extended recovery", "ICU monitoring"],
    correctAnswer: 1
  },
  {
    id: 493,
    question: "Patient selection for outpatient surgery considers:",
    choices: ["Medical stability", "Social support", "Procedure complexity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 494,
    question: "Discharge criteria include:",
    choices: ["Stable vital signs", "Pain control", "Ability to ambulate", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 495,
    question: "Post-anesthesia care unit (PACU) monitoring includes:",
    choices: ["Vital signs", "Consciousness level", "Pain assessment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 496,
    question: "Aldrete score assesses:",
    choices: ["Pain level", "Recovery from anesthesia", "Surgical outcome", "Infection risk"],
    correctAnswer: 1
  },
  {
    id: 497,
    question: "Phase I recovery focuses on:",
    choices: ["Immediate post-anesthesia care", "Preparation for discharge", "Long-term recovery", "Rehabilitation"],
    correctAnswer: 0
  },
  {
    id: 498,
    question: "Phase II recovery focuses on:",
    choices: ["Immediate post-anesthesia care", "Preparation for discharge", "Long-term recovery", "Intensive monitoring"],
    correctAnswer: 1
  },
  {
    id: 499,
    question: "Fast-track recovery allows:",
    choices: ["Skipping PACU", "Bypassing Phase I", "Direct discharge", "Extended monitoring"],
    correctAnswer: 1
  },
  {
    id: 500,
    question: "Quality improvement in surgery focuses on:",
    choices: ["Cost reduction only", "Patient outcomes", "Efficiency only", "Staff satisfaction only"],
    correctAnswer: 1
  },
  {
    id: 501,
    question: "What is the most common emergency in the operating room?",
    choices: ["Fire", "Cardiac arrest", "Anaphylaxis", "Malignant hyperthermia"],
    correctAnswer: 1
  },
  {
    id: 502,
    question: "The first step in cardiac arrest is:",
    choices: ["Defibrillation", "CPR", "Medications", "Intubation"],
    correctAnswer: 1
  },
  {
    id: 503,
    question: "High-quality CPR includes:",
    choices: ["Compressions at least 2 inches deep", "Rate of 100-120/minute", "Minimal interruptions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 504,
    question: "Defibrillation is indicated for:",
    choices: ["Asystole", "Ventricular fibrillation", "Bradycardia", "Normal rhythm"],
    correctAnswer: 1
  },
  {
    id: 505,
    question: "Epinephrine in cardiac arrest is given:",
    choices: ["Once only", "Every 3-5 minutes", "Continuously", "Only if defibrillation fails"],
    correctAnswer: 1
  },
  {
    id: 506,
    question: "Anaphylaxis is treated with:",
    choices: ["Antihistamines", "Epinephrine", "Steroids", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 507,
    question: "The first-line treatment for anaphylaxis is:",
    choices: ["Antihistamines", "Epinephrine", "Steroids", "Fluids"],
    correctAnswer: 1
  },
  {
    id: 508,
    question: "Signs of anaphylaxis include:",
    choices: ["Hypotension", "Bronchospasm", "Urticaria", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 509,
    question: "Malignant hyperthermia is triggered by:",
    choices: ["All anesthetics", "Volatile anesthetics and succinylcholine", "Local anesthetics", "Opioids"],
    correctAnswer: 1
  },
  {
    id: 510,
    question: "Early signs of malignant hyperthermia include:",
    choices: ["Hypothermia", "Increased CO2 production", "Bradycardia", "Hypotension"],
    correctAnswer: 1
  },
  {
    id: 511,
    question: "Dantrolene for malignant hyperthermia should be given:",
    choices: ["Orally", "Intravenously", "Intramuscularly", "Subcutaneously"],
    correctAnswer: 1
  },
  {
    id: 512,
    question: "Massive hemorrhage is defined as:",
    choices: ["Loss of 500 mL", "Loss of 1 liter", "Loss of blood volume in 24 hours", "Any visible bleeding"],
    correctAnswer: 2
  },
  {
    id: 513,
    question: "The massive transfusion protocol activates:",
    choices: ["Blood bank", "Laboratory", "Additional personnel", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 514,
    question: "Damage control surgery focuses on:",
    choices: ["Perfect repair", "Controlling hemorrhage and contamination", "Cosmetic outcome", "Speed only"],
    correctAnswer: 1
  },
  {
    id: 515,
    question: "Air embolism can occur during:",
    choices: ["Neurosurgery", "Sitting position procedures", "Central line insertion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 516,
    question: "Treatment of air embolism includes:",
    choices: ["Left lateral position", "100% oxygen", "Aspiration of air", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 517,
    question: "Pneumothorax during surgery may cause:",
    choices: ["Hypotension", "Hypoxia", "Increased airway pressures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 518,
    question: "Treatment of tension pneumothorax is:",
    choices: ["Observation", "Needle decompression", "Chest tube only", "Medications"],
    correctAnswer: 1
  },
  {
    id: 519,
    question: "Aspiration during anesthesia is treated with:",
    choices: ["Antibiotics", "Bronchoscopy", "Positive pressure ventilation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 520,
    question: "Prevention of aspiration includes:",
    choices: ["Preoperative fasting", "Rapid sequence induction", "Cricoid pressure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 521,
    question: "Local anesthetic toxicity can cause:",
    choices: ["Seizures", "Cardiac arrest", "CNS depression", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 522,
    question: "Treatment of local anesthetic toxicity includes:",
    choices: ["Lipid emulsion", "Supportive care", "Seizure control", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 523,
    question: "Hyperthermia during surgery may be caused by:",
    choices: ["Malignant hyperthermia", "Infection", "Overheating", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 524,
    question: "Hypothermia during surgery can cause:",
    choices: ["Coagulopathy", "Increased infection risk", "Delayed recovery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 525,
    question: "Prevention of hypothermia includes:",
    choices: ["Warming blankets", "Warm IV fluids", "Increased room temperature", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 526,
    question: "Power failure in the OR requires:",
    choices: ["Stopping surgery", "Emergency power", "Evacuation", "Calling maintenance"],
    correctAnswer: 1
  },
  {
    id: 527,
    question: "Equipment failure during surgery requires:",
    choices: ["Continuing with broken equipment", "Immediate replacement", "Stopping surgery", "Improvisation"],
    correctAnswer: 1
  },
  {
    id: 528,
    question: "Communication during emergencies should be:",
    choices: ["Quiet", "Clear and direct", "Minimal", "Delayed"],
    correctAnswer: 1
  },
  {
    id: 529,
    question: "The team leader during emergencies is usually:",
    choices: ["Circulating nurse", "Anesthesiologist", "Surgeon", "Whoever is available"],
    correctAnswer: 2
  },
  {
    id: 530,
    question: "Emergency medications should be:",
    choices: ["Locked away", "Readily available", "Expired", "Limited"],
    correctAnswer: 1
  },
  {
    id: 531,
    question: "What is the primary purpose of surgical drains?",
    choices: ["Decoration", "Remove fluid collections", "Prevent infection", "Speed healing"],
    correctAnswer: 1
  },
  {
    id: 532,
    question: "Passive drains work by:",
    choices: ["Suction", "Gravity", "Pressure", "Electricity"],
    correctAnswer: 1
  },
  {
    id: 533,
    question: "Active drains work by:",
    choices: ["Gravity", "Suction", "Pressure", "Capillary action"],
    correctAnswer: 1
  },
  {
    id: 534,
    question: "Penrose drains are:",
    choices: ["Active drains", "Passive drains", "Suction drains", "Irrigation drains"],
    correctAnswer: 1
  },
  {
    id: 535,
    question: "Jackson-Pratt drains are:",
    choices: ["Passive drains", "Active drains", "Gravity drains", "Irrigation drains"],
    correctAnswer: 1
  },
  {
    id: 536,
    question: "Hemovac drains use:",
    choices: ["Gravity", "Spring-loaded suction", "Electric suction", "Pressure"],
    correctAnswer: 1
  },
  {
    id: 537,
    question: "Chest tubes are used for:",
    choices: ["Pneumothorax", "Hemothorax", "Pleural effusion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 538,
    question: "Chest tube drainage systems have:",
    choices: ["One chamber", "Two chambers", "Three chambers", "Variable chambers"],
    correctAnswer: 2
  },
  {
    id: 539,
    question: "The water seal chamber prevents:",
    choices: ["Drainage", "Air entry", "Suction", "Infection"],
    correctAnswer: 1
  },
  {
    id: 540,
    question: "Nasogastric tubes are used for:",
    choices: ["Feeding only", "Decompression only", "Both feeding and decompression", "Medication administration only"],
    correctAnswer: 2
  },
  {
    id: 541,
    question: "Foley catheters are used for:",
    choices: ["Bladder drainage", "Bladder irrigation", "Medication instillation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 542,
    question: "T-tubes are used for:",
    choices: ["Gastric drainage", "Biliary drainage", "Chest drainage", "Wound drainage"],
    correctAnswer: 1
  },
  {
    id: 543,
    question: "Drain removal timing depends on:",
    choices: ["Output volume", "Output character", "Patient condition", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 544,
    question: "Complications of drains include:",
    choices: ["Infection", "Blockage", "Dislodgement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 545,
    question: "Drain care includes:",
    choices: ["Monitoring output", "Maintaining patency", "Preventing infection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 546,
    question: "Closed drainage systems:",
    choices: ["Increase infection risk", "Decrease infection risk", "Have no effect on infection", "Are not recommended"],
    correctAnswer: 1
  },
  {
    id: 547,
    question: "Drain output should be:",
    choices: ["Ignored", "Measured and recorded", "Estimated", "Discarded"],
    correctAnswer: 1
  },
  {
    id: 548,
    question: "Sudden cessation of drain output may indicate:",
    choices: ["Healing", "Blockage", "Normal progression", "Improvement"],
    correctAnswer: 1
  },
  {
    id: 549,
    question: "Drain irrigation should be:",
    choices: ["Routine", "Only when ordered", "Never performed", "Patient preference"],
    correctAnswer: 1
  },
  {
    id: 550,
    question: "The most important aspect of drain management is:",
    choices: ["Cost", "Patient comfort", "Preventing complications", "Appearance"],
    correctAnswer: 2
  },
  {
    id: 551,
    question: "What is the most important factor in surgical team communication?",
    choices: ["Volume", "Clarity", "Speed", "Frequency"],
    correctAnswer: 1
  },
  {
    id: 552,
    question: "SBAR communication includes:",
    choices: ["Situation, Background, Assessment, Recommendation", "Safety, Barriers, Actions, Results", "Surgery, Bleeding, Anesthesia, Recovery", "Sterile, Bacteria, Antiseptic, Rinse"],
    correctAnswer: 0
  },
  {
    id: 553,
    question: "Closed-loop communication means:",
    choices: ["Whispering", "Confirming receipt of information", "Speaking in circles", "Using codes"],
    correctAnswer: 1
  },
  {
    id: 554,
    question: "Critical language includes:",
    choices: ["Please", "Thank you", "I need clarity", "All of the above"],
    correctAnswer: 2
  },
  {
    id: 555,
    question: "The two-challenge rule means:",
    choices: ["Challenging twice", "Two people challenge", "Challenge until acknowledged", "No challenges allowed"],
    correctAnswer: 2
  },
  {
    id: 556,
    question: "Briefings should occur:",
    choices: ["After surgery", "Before surgery", "During surgery", "Never"],
    correctAnswer: 1
  },
  {
    id: 557,
    question: "Debriefings should occur:",
    choices: ["Before surgery", "During surgery", "After surgery", "Never"],
    correctAnswer: 2
  },
  {
    id: 558,
    question: "Huddles are used for:",
    choices: ["Team building", "Information sharing", "Problem solving", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 559,
    question: "Handoff communication should include:",
    choices: ["Patient condition", "Procedures performed", "Ongoing concerns", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 560,
    question: "ISBAR adds what to SBAR?",
    choices: ["Introduction", "Identification", "Information", "Instruction"],
    correctAnswer: 1
  },
  {
    id: 561,
    question: "Conflict resolution in the OR should:",
    choices: ["Be avoided", "Be addressed immediately", "Wait until after surgery", "Be ignored"],
    correctAnswer: 1
  },
  {
    id: 562,
    question: "Speaking up for patient safety is:",
    choices: ["Optional", "Required", "Discouraged", "Punishable"],
    correctAnswer: 1
  },
  {
    id: 563,
    question: "Hierarchy in the OR should:",
    choices: ["Prevent communication", "Not affect safety communication", "Be absolute", "Discourage questions"],
    correctAnswer: 1
  },
  {
    id: 564,
    question: "Team training improves:",
    choices: ["Communication", "Patient outcomes", "Job satisfaction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 565,
    question: "Simulation training is used for:",
    choices: ["Technical skills", "Communication skills", "Emergency scenarios", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 566,
    question: "Just culture promotes:",
    choices: ["Blame", "Learning from errors", "Punishment", "Secrecy"],
    correctAnswer: 1
  },
  {
    id: 567,
    question: "Error reporting should be:",
    choices: ["Punitive", "Voluntary", "Mandatory", "Discouraged"],
    correctAnswer: 2
  },
  {
    id: 568,
    question: "Root cause analysis is used to:",
    choices: ["Assign blame", "Identify system failures", "Punish individuals", "Ignore problems"],
    correctAnswer: 1
  },
  {
    id: 569,
    question: "High reliability organizations focus on:",
    choices: ["Perfection", "Learning from failures", "Blame assignment", "Cost reduction"],
    correctAnswer: 1
  },
  {
    id: 570,
    question: "The most effective way to improve surgical outcomes is:",
    choices: ["Individual excellence", "Team-based care", "Technology", "Speed"],
    correctAnswer: 1
  },
  {
    id: 571,
    question: "What is the primary goal of quality improvement in surgery?",
    choices: ["Cost reduction", "Patient safety and outcomes", "Efficiency", "Staff satisfaction"],
    correctAnswer: 1
  },
  {
    id: 572,
    question: "The Plan-Do-Study-Act (PDSA) cycle is used for:",
    choices: ["Planning surgery", "Quality improvement", "Staff scheduling", "Inventory management"],
    correctAnswer: 1
  },
  {
    id: 573,
    question: "Lean methodology focuses on:",
    choices: ["Reducing waste", "Increasing speed", "Reducing staff", "Increasing volume"],
    correctAnswer: 0
  },
  {
    id: 574,
    question: "Six Sigma aims to:",
    choices: ["Reduce variation", "Increase speed", "Reduce costs", "Increase volume"],
    correctAnswer: 0
  },
  {
    id: 575,
    question: "Surgical checklists improve:",
    choices: ["Speed", "Safety", "Efficiency", "Costs"],
    correctAnswer: 1
  },
  {
    id: 576,
    question: "The WHO Surgical Safety Checklist has:",
    choices: ["One phase", "Two phases", "Three phases", "Four phases"],
    correctAnswer: 2
  },
  {
    id: 577,
    question: "Surgical site infection rates are a measure of:",
    choices: ["Efficiency", "Quality", "Speed", "Cost"],
    correctAnswer: 1
  },
  {
    id: 578,
    question: "Benchmarking compares performance to:",
    choices: ["Previous performance", "Best practices", "Average performance", "Minimum standards"],
    correctAnswer: 1
  },
  {
    id: 579,
    question: "Key performance indicators (KPIs) should be:",
    choices: ["Numerous", "Measurable", "Complex", "Subjective"],
    correctAnswer: 1
  },
  {
    id: 580,
    question: "Patient satisfaction is measured by:",
    choices: ["Surveys", "Complaints", "Compliments", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 581,
    question: "Surgical outcomes include:",
    choices: ["Mortality", "Morbidity", "Length of stay", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 582,
    question: "Risk adjustment accounts for:",
    choices: ["Patient factors", "Surgeon factors", "Hospital factors", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 583,
    question: "Continuous quality improvement is:",
    choices: ["One-time effort", "Ongoing process", "Annual activity", "Optional"],
    correctAnswer: 1
  },
  {
    id: 584,
    question: "Quality committees should include:",
    choices: ["Surgeons only", "Nurses only", "Multidisciplinary members", "Administrators only"],
    correctAnswer: 2
  },
  {
    id: 585,
    question: "Data collection for quality improvement should be:",
    choices: ["Sporadic", "Systematic", "Optional", "Minimal"],
    correctAnswer: 1
  },
  {
    id: 586,
    question: "Transparency in quality reporting:",
    choices: ["Should be avoided", "Improves outcomes", "Increases liability", "Is not important"],
    correctAnswer: 1
  },
  {
    id: 587,
    question: "Pay-for-performance programs link:",
    choices: ["Volume to payment", "Quality to payment", "Speed to payment", "Cost to payment"],
    correctAnswer: 1
  },
  {
    id: 588,
    question: "Accreditation standards focus on:",
    choices: ["Minimum requirements", "Best practices", "Cost control", "Efficiency"],
    correctAnswer: 0
  },
  {
    id: 589,
    question: "The Joint Commission emphasizes:",
    choices: ["Cost reduction", "Patient safety", "Efficiency", "Volume"],
    correctAnswer: 1
  },
  {
    id: 590,
    question: "The most effective quality improvement involves:",
    choices: ["Top-down mandates", "Bottom-up initiatives", "Both top-down and bottom-up", "External consultants"],
    correctAnswer: 2
  },
  {
    id: 591,
    question: "What is the most common type of surgical suture?",
    choices: ["Absorbable", "Non-absorbable", "Monofilament", "Multifilament"],
    correctAnswer: 0
  },
  {
    id: 592,
    question: "Vicryl suture is:",
    choices: ["Non-absorbable", "Absorbable", "Permanent", "Metal"],
    correctAnswer: 1
  },
  {
    id: 593,
    question: "Silk suture is:",
    choices: ["Absorbable", "Non-absorbable", "Synthetic", "Monofilament"],
    correctAnswer: 1
  },
  {
    id: 594,
    question: "Prolene suture is:",
    choices: ["Absorbable", "Non-absorbable", "Natural", "Braided"],
    correctAnswer: 1
  },
  {
    id: 595,
    question: "PDS suture is:",
    choices: ["Non-absorbable", "Absorbable monofilament", "Natural", "Braided"],
    correctAnswer: 1
  },
  {
    id: 596,
    question: "Chromic gut is absorbed in:",
    choices: ["5-7 days", "10-14 days", "21-28 days", "60-90 days"],
    correctAnswer: 1
  },
  {
    id: 597,
    question: "Vicryl is absorbed in:",
    choices: ["10-14 days", "56-70 days", "90-120 days", "180 days"],
    correctAnswer: 1
  },
  {
    id: 598,
    question: "Suture size 2-0 is:",
    choices: ["Smaller than 3-0", "Larger than 3-0", "Same as 3-0", "Not a real size"],
    correctAnswer: 1
  },
  {
    id: 599,
    question: "The smallest suture size commonly used is:",
    choices: ["6-0", "8-0", "10-0", "12-0"],
    correctAnswer: 3
  },
  {
    id: 600,
    question: "Monofilament sutures:",
    choices: ["Have multiple strands", "Have single strand", "Are always absorbable", "Are always non-absorbable"],
    correctAnswer: 1
  },
  {
    id: 601,
    question: "Multifilament sutures:",
    choices: ["Have single strand", "Have multiple strands", "Are always non-absorbable", "Are never used"],
    correctAnswer: 1
  },
  {
    id: 602,
    question: "Braided sutures:",
    choices: ["Are monofilament", "Are multifilament", "Are always absorbable", "Are never used"],
    correctAnswer: 1
  },
  {
    id: 603,
    question: "Suture memory refers to:",
    choices: ["Surgeon's memory", "Tendency to return to package shape", "Absorption time", "Strength"],
    correctAnswer: 1
  },
  {
    id: 604,
    question: "Tissue reactivity is:",
    choices: ["Always good", "Body's response to suture", "Suture strength", "Absorption rate"],
    correctAnswer: 1
  },
  {
    id: 605,
    question: "Capillarity is:",
    choices: ["Suture strength", "Fluid wicking along suture", "Absorption rate", "Tissue reaction"],
    correctAnswer: 1
  },
  {
    id: 606,
    question: "Knot security depends on:",
    choices: ["Suture material", "Knot technique", "Tissue type", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 607,
    question: "The surgeon's knot has:",
    choices: ["One throw", "Two throws on first loop", "Three throws", "No throws"],
    correctAnswer: 1
  },
  {
    id: 608,
    question: "Square knots:",
    choices: ["Are insecure", "Lie flat", "Are difficult to tie", "Are never used"],
    correctAnswer: 1
  },
  {
    id: 609,
    question: "Granny knots:",
    choices: ["Are preferred", "Are insecure", "Are the same as square knots", "Are stronger"],
    correctAnswer: 1
  },
  {
    id: 610,
    question: "Instrument ties are used when:",
    choices: ["Sutures are long", "Sutures are short", "Speed is needed", "Precision is needed"],
    correctAnswer: 1
  },
  {
    id: 611,
    question: "Hand ties are used when:",
    choices: ["Sutures are short", "Sutures are long", "Speed is needed", "Instruments are unavailable"],
    correctAnswer: 1
  },
  {
    id: 612,
    question: "Interrupted sutures:",
    choices: ["Are continuous", "Are placed individually", "Are faster", "Are weaker"],
    correctAnswer: 1
  },
  {
    id: 613,
    question: "Running sutures:",
    choices: ["Are interrupted", "Are continuous", "Are slower", "Are always absorbable"],
    correctAnswer: 1
  },
  {
    id: 614,
    question: "Mattress sutures:",
    choices: ["Are simple", "Provide eversion", "Are weak", "Are never used"],
    correctAnswer: 1
  },
  {
    id: 615,
    question: "Subcuticular sutures:",
    choices: ["Are visible", "Are placed in dermis", "Are always interrupted", "Are always non-absorbable"],
    correctAnswer: 1
  },
  {
    id: 616,
    question: "Purse-string sutures:",
    choices: ["Close in straight line", "Close in circular pattern", "Are always interrupted", "Are never used"],
    correctAnswer: 1
  },
  {
    id: 617,
    question: "Retention sutures:",
    choices: ["Are delicate", "Provide extra support", "Are always absorbable", "Are subcuticular"],
    correctAnswer: 1
  },
  {
    id: 618,
    question: "Suture removal timing depends on:",
    choices: ["Suture type", "Location", "Patient factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 619,
    question: "Facial sutures are typically removed in:",
    choices: ["3-5 days", "7-10 days", "14 days", "21 days"],
    correctAnswer: 0
  },
  {
    id: 620,
    question: "The most important factor in wound closure is:",
    choices: ["Suture type", "Technique", "Speed", "Cost"],
    correctAnswer: 1
  },
  {
    id: 621,
    question: "What is the primary purpose of surgical staplers?",
    choices: ["Speed", "Hemostasis", "Tissue approximation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 622,
    question: "Skin staplers use:",
    choices: ["Absorbable staples", "Non-absorbable staples", "Titanium staples", "Steel staples"],
    correctAnswer: 1
  },
  {
    id: 623,
    question: "GIA staplers create:",
    choices: ["Single staple line", "Double staple line with division", "Circular anastomosis", "Skin closure"],
    correctAnswer: 1
  },
  {
    id: 624,
    question: "TA staplers create:",
    choices: ["Single staple line", "Double staple line with division", "Circular anastomosis", "Skin closure"],
    correctAnswer: 0
  },
  {
    id: 625,
    question: "EEA staplers create:",
    choices: ["Linear staple line", "Circular anastomosis", "Skin closure", "Hemostasis only"],
    correctAnswer: 1
  },
  {
    id: 626,
    question: "Staple height is determined by:",
    choices: ["Surgeon preference", "Tissue thickness", "Stapler type", "Patient size"],
    correctAnswer: 1
  },
  {
    id: 627,
    question: "Staple malformation can be caused by:",
    choices: ["Incorrect tissue thickness", "Dull staples", "Improper technique", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 628,
    question: "Advantages of staplers include:",
    choices: ["Speed", "Consistency", "Reduced tissue handling", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 629,
    question: "Disadvantages of staplers include:",
    choices: ["Cost", "Limited flexibility", "Potential malfunction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 630,
    question: "Staple removal requires:",
    choices: ["Special instruments", "Standard forceps", "Scissors", "Scalpel"],
    correctAnswer: 0
  },
  {
    id: 631,
    question: "Tissue adhesives are used for:",
    choices: ["Internal closure only", "External closure only", "Both internal and external closure", "Hemostasis only"],
    correctAnswer: 2
  },
  {
    id: 632,
    question: "Cyanoacrylate adhesives:",
    choices: ["Require sutures", "Polymerize on contact with water", "Are permanent", "Require removal"],
    correctAnswer: 1
  },
  {
    id: 633,
    question: "Fibrin sealants contain:",
    choices: ["Cyanoacrylate", "Thrombin and fibrinogen", "Collagen only", "Synthetic polymers"],
    correctAnswer: 1
  },
  {
    id: 634,
    question: "Advantages of tissue adhesives include:",
    choices: ["No needles required", "Waterproof seal", "Antimicrobial properties", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 635,
    question: "Limitations of tissue adhesives include:",
    choices: ["Lower tensile strength", "Not suitable for all wounds", "Cost", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 636,
    question: "Surgical clips are made of:",
    choices: ["Steel", "Titanium", "Absorbable materials", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 637,
    question: "Hemoclips are used for:",
    choices: ["Tissue approximation", "Vessel occlusion", "Skin closure", "Organ support"],
    correctAnswer: 1
  },
  {
    id: 638,
    question: "Clip appliers should be:",
    choices: ["Reusable only", "Disposable only", "Either reusable or disposable", "Never used"],
    correctAnswer: 2
  },
  {
    id: 639,
    question: "Proper clip application requires:",
    choices: ["Perpendicular placement", "Parallel placement", "Angled placement", "Any placement"],
    correctAnswer: 0
  },
  {
    id: 640,
    question: "The most versatile wound closure method is:",
    choices: ["Staples", "Sutures", "Adhesives", "Clips"],
    correctAnswer: 1
  },
  {
    id: 641,
    question: "What is the most common imaging modality used during surgery?",
    choices: ["CT scan", "MRI", "Fluoroscopy", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 642,
    question: "C-arm fluoroscopy provides:",
    choices: ["Static images", "Real-time imaging", "3D reconstruction", "Ultrasound imaging"],
    correctAnswer: 1
  },
  {
    id: 643,
    question: "Radiation safety requires:",
    choices: ["Lead aprons", "Distance from source", "Minimal exposure time", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 644,
    question: "The ALARA principle means:",
    choices: ["Always Low And Rarely Applied", "As Low As Reasonably Achievable", "All Levels Are Reasonably Acceptable", "Avoid Low And Reduce Applications"],
    correctAnswer: 1
  },
  {
    id: 645,
    question: "Intraoperative ultrasound is used for:",
    choices: ["Tissue identification", "Vessel location", "Tumor localization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 646,
    question: "Ultrasound guidance improves:",
    choices: ["Speed only", "Accuracy", "Cost", "Visibility"],
    correctAnswer: 1
  },
  {
    id: 647,
    question: "Intraoperative CT scanning provides:",
    choices: ["Real-time imaging", "Cross-sectional images", "Ultrasound images", "Fluoroscopic images"],
    correctAnswer: 1
  },
  {
    id: 648,
    question: "Intraoperative MRI is used for:",
    choices: ["Bone imaging", "Soft tissue imaging", "Vascular imaging", "All imaging"],
    correctAnswer: 1
  },
  {
    id: 649,
    question: "Image-guided surgery improves:",
    choices: ["Speed", "Precision", "Cost", "Simplicity"],
    correctAnswer: 1
  },
  {
    id: 650,
    question: "Navigation systems use:",
    choices: ["GPS", "Infrared tracking", "Magnetic tracking", "Both infrared and magnetic tracking"],
    correctAnswer: 3
  },
  {
    id: 651,
    question: "Stereotactic surgery requires:",
    choices: ["No imaging", "Precise coordinates", "General anesthesia", "Open approach"],
    correctAnswer: 1
  },
  {
    id: 652,
    question: "Frameless stereotaxy uses:",
    choices: ["Head frame", "Fiducial markers", "No reference points", "Manual guidance"],
    correctAnswer: 1
  },
  {
    id: 653,
    question: "Augmented reality in surgery:",
    choices: ["Replaces imaging", "Overlays digital information", "Is not useful", "Increases radiation"],
    correctAnswer: 1
  },
  {
    id: 654,
    question: "3D imaging provides:",
    choices: ["Flat images", "Depth perception", "Color enhancement", "Speed improvement"],
    correctAnswer: 1
  },
  {
    id: 655,
    question: "Contrast agents are used to:",
    choices: ["Reduce radiation", "Enhance visualization", "Speed imaging", "Reduce cost"],
    correctAnswer: 1
  },
  {
    id: 656,
    question: "Iodinated contrast can cause:",
    choices: ["No reactions", "Allergic reactions", "Improved outcomes", "Faster healing"],
    correctAnswer: 1
  },
  {
    id: 657,
    question: "Gadolinium contrast is used for:",
    choices: ["CT scans", "MRI scans", "X-rays", "Ultrasound"],
    correctAnswer: 1
  },
  {
    id: 658,
    question: "Image quality depends on:",
    choices: ["Resolution", "Contrast", "Noise level", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 659,
    question: "Digital imaging allows:",
    choices: ["Film processing", "Immediate viewing", "Slower workflow", "Higher costs"],
    correctAnswer: 1
  },
  {
    id: 660,
    question: "The most important aspect of intraoperative imaging is:",
    choices: ["Speed", "Cost", "Patient safety", "Image quality"],
    correctAnswer: 2
  },
  {
    id: 661,
    question: "What is the most common type of surgical laser?",
    choices: ["CO2", "Nd:YAG", "Argon", "Diode"],
    correctAnswer: 0
  },
  {
    id: 662,
    question: "CO2 lasers are absorbed by:",
    choices: ["Hemoglobin", "Water", "Melanin", "Protein"],
    correctAnswer: 1
  },
  {
    id: 663,
    question: "Nd:YAG lasers penetrate:",
    choices: ["Superficially", "Deeply", "Not at all", "Variably"],
    correctAnswer: 1
  },
  {
    id: 664,
    question: "Argon lasers are absorbed by:",
    choices: ["Water", "Hemoglobin and melanin", "Protein", "Fat"],
    correctAnswer: 1
  },
  {
    id: 665,
    question: "Laser safety requires:",
    choices: ["Eye protection", "Skin protection", "Fire prevention", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 666,
    question: "Laser eye protection depends on:",
    choices: ["Laser wavelength", "Room lighting", "Patient position", "Surgeon preference"],
    correctAnswer: 0
  },
  {
    id: 667,
    question: "Laser plume contains:",
    choices: ["Water vapor only", "Toxic chemicals", "Viable bacteria", "Both toxic chemicals and bacteria"],
    correctAnswer: 3
  },
  {
    id: 668,
    question: "Laser plume should be:",
    choices: ["Ignored", "Evacuated", "Inhaled", "Collected"],
    correctAnswer: 1
  },
  {
    id: 669,
    question: "Laser fire prevention includes:",
    choices: ["Wet drapes", "Non-flammable anesthetics", "Reduced oxygen concentration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 670,
    question: "Laser warning signs must be:",
    choices: ["Optional", "Posted at entrances", "Small", "Handwritten"],
    correctAnswer: 1
  },
  {
    id: 671,
    question: "Laser safety officer is responsible for:",
    choices: ["Operating lasers", "Safety training", "Equipment maintenance", "All safety aspects"],
    correctAnswer: 3
  },
  {
    id: 672,
    question: "Laser classification ranges from:",
    choices: ["1-3", "1-4", "1-5", "A-D"],
    correctAnswer: 1
  },
  {
    id: 673,
    question: "Class 4 lasers:",
    choices: ["Are safe", "Can cause eye and skin damage", "Require no precautions", "Are not used medically"],
    correctAnswer: 1
  },
  {
    id: 674,
    question: "Laser maintenance includes:",
    choices: ["Calibration", "Cleaning", "Safety checks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 675,
    question: "Laser beam delivery can be:",
    choices: ["Direct only", "Fiber optic only", "Both direct and fiber optic", "Neither"],
    correctAnswer: 2
  },
  {
    id: 676,
    question: "Laser power is measured in:",
    choices: ["Volts", "Watts", "Amperes", "Ohms"],
    correctAnswer: 1
  },
  {
    id: 677,
    question: "Continuous wave lasers provide:",
    choices: ["Pulsed energy", "Constant energy", "No energy", "Variable energy"],
    correctAnswer: 1
  },
  {
    id: 678,
    question: "Pulsed lasers provide:",
    choices: ["Constant energy", "Intermittent energy", "No energy", "Decreasing energy"],
    correctAnswer: 1
  },
  {
    id: 679,
    question: "Laser tissue effects include:",
    choices: ["Cutting", "Coagulation", "Vaporization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 680,
    question: "The most important laser safety consideration is:",
    choices: ["Cost", "Speed", "Eye protection", "Equipment maintenance"],
    correctAnswer: 2
  },
  {
    id: 681,
    question: "What is the most common type of electrosurgical unit?",
    choices: ["Monopolar", "Bipolar", "Ultrasonic", "Microwave"],
    correctAnswer: 0
  },
  {
    id: 682,
    question: "Monopolar electrosurgery requires:",
    choices: ["Two electrodes at surgical site", "Ground pad", "Special instruments", "Water cooling"],
    correctAnswer: 1
  },
  {
    id: 683,
    question: "Bipolar electrosurgery:",
    choices: ["Requires ground pad", "Uses two electrodes in forceps", "Is less precise", "Cannot coagulate"],
    correctAnswer: 1
  },
  {
    id: 684,
    question: "Cut mode provides:",
    choices: ["Coagulation only", "Continuous waveform", "Interrupted waveform", "No current"],
    correctAnswer: 1
  },
  {
    id: 685,
    question: "Coag mode provides:",
    choices: ["Continuous waveform", "Interrupted waveform", "Cutting only", "No current"],
    correctAnswer: 1
  },
  {
    id: 686,
    question: "Blend mode provides:",
    choices: ["Pure cut", "Pure coag", "Combination of cut and coag", "No current"],
    correctAnswer: 2
  },
  {
    id: 687,
    question: "Electrosurgical burns can be caused by:",
    choices: ["Improper ground pad placement", "Current concentration", "Wet conditions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 688,
    question: "Ground pad safety requires:",
    choices: ["Proper placement", "Good skin contact", "Adequate size", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 689,
    question: "Electrosurgery near pacemakers:",
    choices: ["Is always safe", "Requires precautions", "Is prohibited", "Has no effect"],
    correctAnswer: 1
  },
  {
    id: 690,
    question: "Argon beam coagulation uses:",
    choices: ["Argon gas and heat", "Argon gas and electricity", "Pure argon", "Argon and oxygen"],
    correctAnswer: 1
  },
  {
    id: 691,
    question: "Ultrasonic devices work by:",
    choices: ["Heat generation", "Mechanical vibration", "Electrical current", "Chemical reaction"],
    correctAnswer: 1
  },
  {
    id: 692,
    question: "Harmonic scalpel operates at:",
    choices: ["50 Hz", "55,500 Hz", "1 MHz", "Variable frequency"],
    correctAnswer: 1
  },
  {
    id: 693,
    question: "Advantages of ultrasonic devices include:",
    choices: ["Less smoke", "Precise cutting", "Minimal thermal damage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 694,
    question: "LigaSure technology uses:",
    choices: ["Ultrasound", "Bipolar energy and pressure", "Monopolar energy", "Laser energy"],
    correctAnswer: 1
  },
  {
    id: 695,
    question: "Vessel sealing devices can seal vessels up to:",
    choices: ["3 mm", "5 mm", "7 mm", "10 mm"],
    correctAnswer: 2
  },
  {
    id: 696,
    question: "Electrosurgical smoke contains:",
    choices: ["Water vapor only", "Toxic chemicals", "Viable bacteria", "Both toxic chemicals and bacteria"],
    correctAnswer: 3
  },
  {
    id: 697,
    question: "Smoke evacuation should be used:",
    choices: ["Optionally", "For all electrosurgery", "Only for long procedures", "Never"],
    correctAnswer: 1
  },
  {
    id: 698,
    question: "Electrosurgical unit maintenance includes:",
    choices: ["Power checks", "Safety testing", "Calibration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 699,
    question: "The most important electrosurgical safety consideration is:",
    choices: ["Speed", "Power setting", "Proper technique", "Cost"],
    correctAnswer: 2
  },
  {
    id: 700,
    question: "Modern electrosurgical units have:",
    choices: ["No safety features", "Multiple safety features", "Manual controls only", "No monitoring"],
    correctAnswer: 1
  },
  {
    id: 701,
    question: "What is the primary advantage of robotic surgery?",
    choices: ["Speed", "Cost reduction", "Enhanced precision", "Reduced training"],
    correctAnswer: 2
  },
  {
    id: 702,
    question: "The da Vinci surgical system provides:",
    choices: ["2D visualization", "3D visualization", "No magnification", "Limited movement"],
    correctAnswer: 1
  },
  {
    id: 703,
    question: "Robotic instruments have:",
    choices: ["Limited degrees of freedom", "7 degrees of freedom", "No articulation", "Manual control only"],
    correctAnswer: 1
  },
  {
    id: 704,
    question: "Tremor filtration in robotic surgery:",
    choices: ["Amplifies tremor", "Eliminates hand tremor", "Has no effect", "Increases tremor"],
    correctAnswer: 1
  },
  {
    id: 705,
    question: "Motion scaling in robotics allows:",
    choices: ["Larger movements", "Smaller, precise movements", "No movement control", "Faster movements"],
    correctAnswer: 1
  },
  {
    id: 706,
    question: "Robotic surgery requires:",
    choices: ["No special training", "Extensive training", "Basic training only", "Self-teaching"],
    correctAnswer: 1
  },
  {
    id: 707,
    question: "The surgeon console provides:",
    choices: ["Direct patient contact", "Remote control", "No visualization", "Limited control"],
    correctAnswer: 1
  },
  {
    id: 708,
    question: "Patient-side cart contains:",
    choices: ["Surgeon console", "Robotic arms", "Vision system", "Both robotic arms and vision system"],
    correctAnswer: 3
  },
  {
    id: 709,
    question: "Robotic surgery complications can include:",
    choices: ["Equipment malfunction", "Conversion to open", "Longer operative time", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 710,
    question: "Advantages of robotic surgery include:",
    choices: ["Improved dexterity", "Better visualization", "Reduced fatigue", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 711,
    question: "Disadvantages of robotic surgery include:",
    choices: ["High cost", "Loss of tactile feedback", "Longer setup time", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 712,
    question: "Robotic surgery is commonly used for:",
    choices: ["Prostatectomy", "Hysterectomy", "Cardiac surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 713,
    question: "Single-site robotic surgery uses:",
    choices: ["Multiple incisions", "One incision", "No incisions", "Natural orifices"],
    correctAnswer: 1
  },
  {
    id: 714,
    question: "Robotic training includes:",
    choices: ["Simulation", "Proctoring", "Credentialing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 715,
    question: "Learning curve for robotic surgery is:",
    choices: ["Very short", "Variable by procedure", "Non-existent", "Always the same"],
    correctAnswer: 1
  },
  {
    id: 716,
    question: "Robotic surgery outcomes compared to traditional surgery:",
    choices: ["Are always better", "Are always worse", "Vary by procedure", "Are identical"],
    correctAnswer: 2
  },
  {
    id: 717,
    question: "Future of robotic surgery includes:",
    choices: ["Artificial intelligence", "Haptic feedback", "Autonomous functions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 718,
    question: "Robotic surgery credentialing requires:",
    choices: ["No requirements", "Specific training and assessment", "Basic surgery experience", "Self-declaration"],
    correctAnswer: 1
  },
  {
    id: 719,
    question: "The most important factor in robotic surgery success is:",
    choices: ["Equipment quality", "Surgeon training", "Patient selection", "All factors are important"],
    correctAnswer: 3
  },
  {
    id: 720,
    question: "Robotic surgery represents:",
    choices: ["A fad", "Evolution of minimally invasive surgery", "Replacement for all surgery", "Cost reduction method"],
    correctAnswer: 1
  },
  {
    id: 721,
    question: "What is the most important principle of surgical asepsis?",
    choices: ["Speed", "Sterile items touch only sterile items", "Cost effectiveness", "Convenience"],
    correctAnswer: 1
  },
  {
    id: 722,
    question: "The sterile field is considered contaminated if:",
    choices: ["It's been open for 1 hour", "A non-sterile item touches it", "The room temperature changes", "The lights are dimmed"],
    correctAnswer: 1
  },
  {
    id: 723,
    question: "When opening sterile packages, which flap should be opened first?",
    choices: ["The flap closest to you", "The flap farthest from you", "Any flap", "The largest flap"],
    correctAnswer: 1
  },
  {
    id: 724,
    question: "The minimum temperature for steam sterilization is:",
    choices: ["212°F (100°C)", "250°F (121°C)", "275°F (135°C)", "300°F (149°C)"],
    correctAnswer: 1
  },
  {
    id: 725,
    question: "Biological indicators contain:",
    choices: ["Chemical strips", "Living microorganisms", "Temperature sensors", "pH indicators"],
    correctAnswer: 1
  },
  {
    id: 726,
    question: "The most heat-resistant microorganisms are:",
    choices: ["Bacteria", "Viruses", "Spores", "Fungi"],
    correctAnswer: 2
  },
  {
    id: 727,
    question: "Flash sterilization should be used:",
    choices: ["Routinely", "Only for emergencies", "For all instruments", "To save time"],
    correctAnswer: 1
  },
  {
    id: 728,
    question: "Sterile storage areas should maintain relative humidity of:",
    choices: ["20-30%", "30-60%", "70-80%", "80-90%"],
    correctAnswer: 1
  },
  {
    id: 729,
    question: "Event-related sterility means items remain sterile:",
    choices: ["For 30 days", "Until package integrity is compromised", "For 1 year", "Indefinitely"],
    correctAnswer: 1
  },
  {
    id: 730,
    question: "The purpose of surgical hand antisepsis is to:",
    choices: ["Remove all microorganisms", "Reduce microbial count", "Sterilize hands", "Clean visible soil only"],
    correctAnswer: 1
  },
  {
    id: 731,
    question: "Surgical gowns are considered sterile:",
    choices: ["Entirely", "Front from chest to waist, sleeves to 2 inches above elbow", "Only the sleeves", "Only the front"],
    correctAnswer: 1
  },
  {
    id: 732,
    question: "If a sterile team member's back touches a sterile surface:",
    choices: ["It's acceptable", "The surface is contaminated", "No action needed", "Just document it"],
    correctAnswer: 1
  },
  {
    id: 733,
    question: "Sterile team members should keep their hands:",
    choices: ["At any level", "Above waist level", "Below waist level", "Behind their back"],
    correctAnswer: 1
  },
  {
    id: 734,
    question: "When passing between sterile fields, non-sterile persons should:",
    choices: ["Walk quickly", "Face the sterile field", "Keep adequate distance", "Touch nothing"],
    correctAnswer: 2
  },
  {
    id: 735,
    question: "Sterile drapes should be:",
    choices: ["Shaken out vigorously", "Unfolded carefully without shaking", "Thrown onto the patient", "Refolded if misplaced"],
    correctAnswer: 1
  },
  {
    id: 736,
    question: "The edges of sterile packages are considered:",
    choices: ["Sterile", "Contaminated", "Questionably sterile", "Semi-sterile"],
    correctAnswer: 1
  },
  {
    id: 737,
    question: "Moisture on sterile packages:",
    choices: ["Is acceptable", "Indicates contamination", "Should be wiped off", "Improves sterility"],
    correctAnswer: 1
  },
  {
    id: 738,
    question: "The surgical conscience means:",
    choices: ["Feeling guilty about mistakes", "Personal responsibility for sterile technique", "Following orders blindly", "Avoiding responsibility"],
    correctAnswer: 1
  },
  {
    id: 739,
    question: "When in doubt about sterility:",
    choices: ["Use the item anyway", "Consider it contaminated", "Ask someone else", "Test it first"],
    correctAnswer: 1
  },
  {
    id: 740,
    question: "The most important aspect of maintaining sterility is:",
    choices: ["Following protocols exactly", "Using expensive equipment", "Working quickly", "Having good intentions"],
    correctAnswer: 0
  },
  {
    id: 741,
    question: "What is the primary goal of perioperative nursing?",
    choices: ["Assist the surgeon", "Ensure patient safety", "Maintain efficiency", "Control costs"],
    correctAnswer: 1
  },
  {
    id: 742,
    question: "The circulating nurse is responsible for:",
    choices: ["Maintaining sterile field", "Non-sterile activities", "Operating equipment", "Anesthesia management"],
    correctAnswer: 1
  },
  {
    id: 743,
    question: "The scrub nurse/technologist is responsible for:",
    choices: ["Patient positioning", "Maintaining sterile field", "Room temperature", "Documentation"],
    correctAnswer: 1
  },
  {
    id: 744,
    question: "Preoperative patient assessment includes:",
    choices: ["Medical history", "Allergies", "Previous surgeries", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 745,
    question: "Patient identification must include:",
    choices: ["Name only", "Name and date of birth", "Room number", "Surgeon's name"],
    correctAnswer: 1
  },
  {
    id: 746,
    question: "The surgical time-out occurs:",
    choices: ["Before patient enters OR", "After anesthesia induction", "Before skin incision", "After surgery"],
    correctAnswer: 2
  },
  {
    id: 747,
    question: "Wrong-site surgery prevention includes:",
    choices: ["Site marking", "Time-out", "Verification processes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 748,
    question: "Surgical counts are performed to:",
    choices: ["Track inventory", "Prevent retained items", "Satisfy regulations", "Control costs"],
    correctAnswer: 1
  },
  {
    id: 749,
    question: "If a surgical count is incorrect:",
    choices: ["Proceed with closure", "Recount immediately", "Take X-ray first", "Call supervisor"],
    correctAnswer: 1
  },
  {
    id: 750,
    question: "Patient advocacy means:",
    choices: ["Following doctor's orders", "Protecting patient rights and safety", "Avoiding conflict", "Maintaining silence"],
    correctAnswer: 1
  },
  {
    id: 751,
    question: "Informed consent must include:",
    choices: ["Risks only", "Benefits only", "Risks, benefits, and alternatives", "Surgeon's recommendation only"],
    correctAnswer: 2
  },
  {
    id: 752,
    question: "Patient privacy is protected by:",
    choices: ["OSHA", "HIPAA", "Joint Commission", "FDA"],
    correctAnswer: 1
  },
  {
    id: 753,
    question: "Cultural competence in perioperative care means:",
    choices: ["Treating all patients the same", "Understanding cultural differences", "Speaking multiple languages", "Avoiding cultural issues"],
    correctAnswer: 1
  },
  {
    id: 754,
    question: "Family communication should be:",
    choices: ["Minimal", "Honest and timely", "Delayed until after surgery", "Avoided"],
    correctAnswer: 1
  },
  {
    id: 755,
    question: "The most important quality in perioperative nursing is:",
    choices: ["Technical skill", "Speed", "Attention to detail", "Flexibility"],
    correctAnswer: 2
  },
  {
    id: 756,
    question: "Continuous professional development includes:",
    choices: ["Attending conferences", "Reading journals", "Obtaining certifications", "All of the above"],
    correctAnswer: 3
  },
  // New Orthopedic Questions (757-806)
  {
    id: 757,
    question: "What is the appendicular skeleton composed of?",
    choices: ["Skull and ribcage", "Vertebrae and sacrum", "Limbs", "Sternum"],
    correctAnswer: 2
  },
  {
    id: 758,
    question: "What type of bones make up the skull?",
    choices: ["Long bones", "Flat bones", "Short bones", "Irregular bones"],
    correctAnswer: 1
  },
  {
    id: 759,
    question: "Which of the following are irregular bones?",
    choices: ["Femur", "Vertebrae", "Radius", "Sternum"],
    correctAnswer: 1
  },
  {
    id: 760,
    question: "Which ribs are considered true ribs?",
    choices: ["8–10", "11–12", "1–7", "9–12"],
    correctAnswer: 2
  },
  {
    id: 761,
    question: "The manubrium is a part of which bone?",
    choices: ["Pelvis", "Sternum", "Scapula", "Skull"],
    correctAnswer: 1
  },
  {
    id: 762,
    question: "What is the shaft of a long bone called?",
    choices: ["Epiphysis", "Diaphysis", "Medulla", "Periosteum"],
    correctAnswer: 1
  },
  {
    id: 763,
    question: "Which type of bone is the patella?",
    choices: ["Short", "Flat", "Irregular", "Long"],
    correctAnswer: 1
  },
  {
    id: 764,
    question: "What is the primary function of red bone marrow?",
    choices: ["Fat storage", "Hormone production", "Blood cell production", "Bone resorption"],
    correctAnswer: 2
  },
  {
    id: 765,
    question: "A tumor of the plasma cells of bone marrow is called:",
    choices: ["Osteosarcoma", "Myeloma", "Chondroma", "Osteoma"],
    correctAnswer: 1
  },
  {
    id: 766,
    question: "The outer layer of hard connective tissue of bone is called:",
    choices: ["Cancellous bone", "Bone marrow", "Cortical bone", "Periosteum"],
    correctAnswer: 2
  },
  {
    id: 767,
    question: "The four stages of bone healing begin with:",
    choices: ["Callus formation", "Calcification", "Hematoma formation", "Remodeling"],
    correctAnswer: 2
  },
  {
    id: 768,
    question: "What type of tissue covers joint surfaces to allow smooth movement?",
    choices: ["Periosteum", "Ligament", "Cartilage", "Tendon"],
    correctAnswer: 2
  },
  {
    id: 769,
    question: "Which of the following is a benign cartilage tumor?",
    choices: ["Osteosarcoma", "Chondroma", "Myeloma", "Osteoma"],
    correctAnswer: 1
  },
  {
    id: 770,
    question: "Which type of muscle is voluntary?",
    choices: ["Smooth", "Striated", "Cardiac", "Involuntary"],
    correctAnswer: 1
  },
  {
    id: 771,
    question: "What do ligaments attach?",
    choices: ["Muscle to bone", "Bone to bone", "Cartilage to bone", "Muscle to cartilage"],
    correctAnswer: 1
  },
  {
    id: 772,
    question: "What is the function of tendons?",
    choices: ["Connect bone to bone", "Connect muscle to bone", "Cushion joints", "Secrete synovial fluid"],
    correctAnswer: 1
  },
  {
    id: 773,
    question: "A joint that allows no movement is called:",
    choices: ["Amphiarthrotic", "Diarthrotic", "Synarthrotic", "Synovial"],
    correctAnswer: 2
  },
  {
    id: 774,
    question: "Which joint type allows the widest range of motion?",
    choices: ["Hinge", "Ball and socket", "Pivot", "Gliding"],
    correctAnswer: 1
  },
  {
    id: 775,
    question: "What is an example of a condyloid joint?",
    choices: ["Shoulder", "Elbow", "Temporomandibular joint", "Hip"],
    correctAnswer: 2
  },
  {
    id: 776,
    question: "A hinge joint is best exemplified by the:",
    choices: ["Hip", "Shoulder", "Elbow", "Wrist"],
    correctAnswer: 2
  },
  {
    id: 777,
    question: "Turning the sole of the foot inward is called:",
    choices: ["Eversion", "Inversion", "Plantar flexion", "Dorsiflexion"],
    correctAnswer: 1
  },
  {
    id: 778,
    question: "Moving a limb away from the midline of the body is called:",
    choices: ["Adduction", "Abduction", "Flexion", "Extension"],
    correctAnswer: 1
  },
  {
    id: 779,
    question: "An autoimmune disease that causes joint inflammation and stiffness is:",
    choices: ["Osteoarthritis", "Rheumatoid arthritis", "Osteomyelitis", "Chondroma"],
    correctAnswer: 1
  },
  {
    id: 780,
    question: "Which diagnostic test records electrical activity of muscle?",
    choices: ["MRI", "Arthrogram", "CT scan", "Electromyography"],
    correctAnswer: 3
  },
  {
    id: 781,
    question: "What type of fracture does not puncture the skin?",
    choices: ["Open", "Simple", "Compound", "Comminuted"],
    correctAnswer: 1
  },
  {
    id: 782,
    question: "A fracture where the bone bends on one side and breaks on the other is:",
    choices: ["Oblique", "Greenstick", "Transverse", "Impacted"],
    correctAnswer: 1
  },
  {
    id: 783,
    question: "A fracture where the bone breaks into several pieces is called:",
    choices: ["Displaced", "Comminuted", "Oblique", "Transverse"],
    correctAnswer: 1
  },
  {
    id: 784,
    question: "A Colles' fracture involves which bone?",
    choices: ["Tibia", "Femur", "Radius", "Fibula"],
    correctAnswer: 2
  },
  {
    id: 785,
    question: "Which type of fracture is caused by disease that weakens the bone?",
    choices: ["Pathologic", "Greenstick", "Impacted", "Oblique"],
    correctAnswer: 0
  },
  {
    id: 786,
    question: "A partial dislocation is known as:",
    choices: ["Dislocation", "Subluxation", "Impaction", "Avulsion"],
    correctAnswer: 1
  },
  {
    id: 787,
    question: "Which table is used for spine surgery?",
    choices: ["Fracture table", "Andrews table", "Jackson table", "Alvarado table"],
    correctAnswer: 2
  },
  {
    id: 788,
    question: "Traction applied directly to bone using pins is called:",
    choices: ["Manual traction", "Skeletal traction", "Skin traction", "Elastic traction"],
    correctAnswer: 1
  },
  {
    id: 789,
    question: "Which material is commonly used for casting?",
    choices: ["Bone cement", "Fiberglass", "Silicone", "Nylon"],
    correctAnswer: 1
  },
  {
    id: 790,
    question: "Which of the following is a complication of bone healing?",
    choices: ["Delayed union", "Callus formation", "Calcification", "Remodeling"],
    correctAnswer: 0
  },
  {
    id: 791,
    question: "A disease of decreased bone density leading to brittle bones is:",
    choices: ["Osteomalacia", "Osteogenesis imperfecta", "Osteoporosis", "Osteoarthritis"],
    correctAnswer: 2
  },
  {
    id: 792,
    question: "Bone cement is also known as:",
    choices: ["PMMA", "PVC", "Fiberglass", "Epoxy"],
    correctAnswer: 0
  },
  {
    id: 793,
    question: "Which type of bone graft is taken from the patient?",
    choices: ["Allograft", "Xenograft", "Autograft", "Synthetic"],
    correctAnswer: 2
  },
  {
    id: 794,
    question: "What suture material is commonly used for tendon-to-bone?",
    choices: ["Silk", "Polyester (Ethibond)", "Vicryl", "Chromic"],
    correctAnswer: 1
  },
  {
    id: 795,
    question: "Which hemostatic agent is made of absorbable gelatin?",
    choices: ["Bone wax", "Gelfoam", "Thrombin", "PMMA"],
    correctAnswer: 1
  },
  {
    id: 796,
    question: "Which position may interfere with chest expansion if improperly performed?",
    choices: ["Lateral", "Supine", "Prone", "Lithotomy"],
    correctAnswer: 2
  },
  {
    id: 797,
    question: "A genetic disorder causing brittle bones is:",
    choices: ["Osteomyelitis", "Osteomalacia", "Osteogenesis imperfecta", "Osteoarthritis"],
    correctAnswer: 2
  },
  {
    id: 798,
    question: "Which of the following is a metabolic disease causing soft bones?",
    choices: ["Osteoporosis", "Osteomalacia", "Osteonecrosis", "Osteoarthritis"],
    correctAnswer: 1
  },
  {
    id: 799,
    question: "A compartment syndrome results in:",
    choices: ["Bone infection", "Increased pressure in fascial compartments", "Loss of calcium", "Bone necrosis"],
    correctAnswer: 1
  },
  {
    id: 800,
    question: "What table provides skeletal traction for fractures?",
    choices: ["Fracture table", "Jackson table", "Andrews table", "Alvarado table"],
    correctAnswer: 0
  },
  {
    id: 801,
    question: "Which antibiotic is commonly used for irrigation?",
    choices: ["Erythromycin", "Bacitracin", "Amoxicillin", "Ciprofloxacin"],
    correctAnswer: 1
  },
  {
    id: 802,
    question: "Which laser is used in arthroscopies?",
    choices: ["Nd:YAG", "CO₂", "Excimer", "Argon"],
    correctAnswer: 0
  },
  {
    id: 803,
    question: "What is the purpose of bone grafts?",
    choices: ["To increase bone length", "To promote healing of fractures", "To lubricate joints", "To remove diseased bone"],
    correctAnswer: 1
  },
  {
    id: 804,
    question: "What is the preferred first step to repair a fracture?",
    choices: ["Open reduction", "Closed reduction", "Casting", "Bone grafting"],
    correctAnswer: 1
  },
  {
    id: 805,
    question: "Which imaging technique is most commonly used to diagnose fractures?",
    choices: ["MRI", "CT scan", "X-ray", "Ultrasound"],
    correctAnswer: 2
  },
  {
    id: 806,
    question: "What is the most common complication of orthopedic surgery?",
    choices: ["Bleeding", "Infection", "Nerve damage", "Blood clots"],
    correctAnswer: 1
  }
];
