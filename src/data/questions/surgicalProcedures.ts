export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
}

export const surgicalProceduresQuestions: Question[] = [
  {
    id: 15,
    question: "Which wrap material allows steam penetration?",
    choices: ["Plastic", "Aluminum foil", "Muslin", "Rubber"],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "Double wrapping provides:",
    choices: ["Better steam penetration", "Extended shelf life", "Faster sterilization", "Lower cost"],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Which of the following compromises sterility?",
    choices: ["Moisture", "Tears in packaging", "Dropping on floor", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 25,
    question: "The purpose of instrument lubrication is to:",
    choices: ["Prevent corrosion", "Maintain function", "Extend life", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 26,
    question: "Instruments should be inspected for:",
    choices: ["Cleanliness", "Function", "Damage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 27,
    question: "Which instrument finish is most resistant to corrosion?",
    choices: ["Bright finish", "Satin finish", "Ebony finish", "Passivated finish"],
    correctAnswer: 3
  },
  {
    id: 28,
    question: "Stainless steel instruments are made primarily of:",
    choices: ["Iron and carbon", "Iron and chromium", "Aluminum and steel", "Titanium and steel"],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "The minimum chromium content in surgical stainless steel is:",
    choices: ["8%", "12%", "16%", "20%"],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "Titanium instruments are preferred for:",
    choices: ["General surgery", "Microsurgery", "Orthopedic surgery", "All surgeries"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "Which suture material is absorbable?",
    choices: ["Silk", "Nylon", "Vicryl", "Prolene"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "Catgut sutures are made from:",
    choices: ["Cat intestines", "Sheep intestines", "Synthetic materials", "Plant fibers"],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "The strongest suture material is:",
    choices: ["Silk", "Steel", "Nylon", "Prolene"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Monofilament sutures have:",
    choices: ["Multiple strands", "Single strand", "Braided construction", "Twisted fibers"],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "Which suture causes the least tissue reaction?",
    choices: ["Silk", "Catgut", "Prolene", "Cotton"],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "The USP suture size 2-0 is:",
    choices: ["Larger than 0", "Smaller than 0", "Same as 0", "Twice the size of 0"],
    correctAnswer: 1
  },
  {
    id: 37,
    question: "Which needle point is used for delicate tissues?",
    choices: ["Cutting", "Reverse cutting", "Taper", "Blunt"],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "Cutting needles are used for:",
    choices: ["Soft tissues", "Tough tissues", "Vessels", "Nerves"],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "The swaged needle is:",
    choices: ["Reusable", "Attached to suture", "Separate from suture", "Disposable only"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "Hemostats are used to:",
    choices: ["Cut tissue", "Grasp tissue", "Control bleeding", "Suture tissue"],
    correctAnswer: 2
  },
  {
    id: 41,
    question: "Kelly forceps have:",
    choices: ["Straight jaws", "Curved jaws", "Serrated jaws", "Smooth jaws"],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "Mosquito forceps are:",
    choices: ["Large hemostats", "Small hemostats", "Tissue forceps", "Needle holders"],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "Allis forceps are used to:",
    choices: ["Control bleeding", "Grasp delicate tissue", "Grasp tough tissue", "Hold needles"],
    correctAnswer: 2
  },
  {
    id: 44,
    question: "Babcock forceps are designed for:",
    choices: ["Tough tissue", "Delicate tissue", "Bone", "Metal"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "Russian forceps have:",
    choices: ["Smooth tips", "Serrated tips", "Teeth", "Hooks"],
    correctAnswer: 2
  },
  {
    id: 46,
    question: "DeBakey forceps are used in:",
    choices: ["Orthopedic surgery", "Vascular surgery", "Neurosurgery", "General surgery"],
    correctAnswer: 1
  },
  {
    id: 47,
    question: "Adson forceps are commonly used in:",
    choices: ["Abdominal surgery", "Plastic surgery", "Cardiac surgery", "Orthopedic surgery"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "Gerald forceps are:",
    choices: ["Tissue forceps", "Dressing forceps", "Hemostats", "Needle holders"],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "The Metzenbaum scissors are used for:",
    choices: ["Cutting sutures", "Cutting delicate tissue", "Cutting tough tissue", "Cutting wire"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Mayo scissors are designed for:",
    choices: ["Delicate tissue", "Tough tissue", "Sutures only", "Bandages only"],
    correctAnswer: 1
  },
  {
    id: 51,
    question: "Iris scissors are used in:",
    choices: ["General surgery", "Ophthalmic surgery", "Orthopedic surgery", "Cardiac surgery"],
    correctAnswer: 1
  },
  {
    id: 52,
    question: "Potts scissors are designed for:",
    choices: ["General cutting", "Vascular surgery", "Neurosurgery", "Orthopedic surgery"],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "Bandage scissors have:",
    choices: ["Sharp points", "Blunt tips", "Curved blades", "Serrated edges"],
    correctAnswer: 1
  },
  {
    id: 54,
    question: "Wire scissors are used to cut:",
    choices: ["Sutures", "Tissue", "Metal wire", "Bandages"],
    correctAnswer: 2
  },
  {
    id: 55,
    question: "The scalpel handle #3 fits blade sizes:",
    choices: ["10-15", "20-25", "10-11, 15", "20-24"],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "The scalpel handle #4 fits blade sizes:",
    choices: ["10-15", "20-25", "10-11, 15", "20-24"],
    correctAnswer: 3
  },
  {
    id: 57,
    question: "Blade #10 is used for:",
    choices: ["Small incisions", "Large incisions", "Curved incisions", "Stab incisions"],
    correctAnswer: 1
  },
  {
    id: 58,
    question: "Blade #11 is designed for:",
    choices: ["Large incisions", "Stab incisions", "Curved incisions", "Skin only"],
    correctAnswer: 1
  },
  {
    id: 59,
    question: "Blade #15 is used for:",
    choices: ["Large incisions", "Small precise incisions", "Curved incisions", "Deep incisions"],
    correctAnswer: 1
  },
  {
    id: 60,
    question: "The electrosurgical unit (ESU) works by:",
    choices: ["Heat conduction", "High-frequency current", "Laser energy", "Ultrasonic waves"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: "Monopolar electrosurgery requires:",
    choices: ["Two electrodes", "One electrode", "Grounding pad", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 62,
    question: "Bipolar electrosurgery:",
    choices: ["Requires grounding pad", "Uses two electrodes", "Has higher power", "Is less precise"],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "The cutting current in electrosurgery is:",
    choices: ["Continuous", "Interrupted", "Low frequency", "High voltage"],
    correctAnswer: 0
  },
  {
    id: 64,
    question: "Coagulation current is:",
    choices: ["Continuous", "Interrupted", "Low power", "DC current"],
    correctAnswer: 1
  },
  {
    id: 65,
    question: "Fulguration produces:",
    choices: ["Precise cutting", "Deep coagulation", "Superficial coagulation", "Tissue welding"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "Desiccation produces:",
    choices: ["Superficial coagulation", "Deep coagulation", "Tissue cutting", "Tissue removal"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "The argon beam coagulator uses:",
    choices: ["Nitrogen gas", "Argon gas", "Oxygen", "Carbon dioxide"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "Harmonic scalpel uses:",
    choices: ["Heat", "Electricity", "Ultrasonic energy", "Laser"],
    correctAnswer: 2
  },
  {
    id: 69,
    question: "LigaSure device uses:",
    choices: ["Ultrasonic energy", "Bipolar energy", "Monopolar energy", "Laser energy"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "CO2 laser is absorbed by:",
    choices: ["Hemoglobin", "Water", "Melanin", "Protein"],
    correctAnswer: 1
  },
  {
    id: 71,
    question: "Nd:YAG laser penetrates:",
    choices: ["Superficially", "Moderately", "Deeply", "Not at all"],
    correctAnswer: 2
  },
  {
    id: 72,
    question: "Argon laser is absorbed by:",
    choices: ["Water", "Hemoglobin", "Melanin", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 73,
    question: "KTP laser appears:",
    choices: ["Red", "Blue", "Green", "Invisible"],
    correctAnswer: 2
  },
  {
    id: 74,
    question: "Laser safety requires:",
    choices: ["Eye protection", "Fire prevention", "Proper ventilation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 75,
    question: "The laser safety officer is responsible for:",
    choices: ["Operating the laser", "Laser safety program", "Buying lasers", "Repairing lasers"],
    correctAnswer: 1
  },
  {
    id: 76,
    question: "Cryosurgery uses:",
    choices: ["Heat", "Cold", "Pressure", "Vacuum"],
    correctAnswer: 1
  },
  {
    id: 77,
    question: "Liquid nitrogen temperature is:",
    choices: ["-80°C", "-196°C", "-273°C", "-100°C"],
    correctAnswer: 1
  },
  {
    id: 78,
    question: "Pneumatic tourniquets are used to:",
    choices: ["Control bleeding", "Provide anesthesia", "Position patient", "Monitor vitals"],
    correctAnswer: 0
  },
  {
    id: 79,
    question: "Tourniquet pressure should be:",
    choices: ["As high as possible", "Based on patient's BP", "Always 300 mmHg", "Patient's weight"],
    correctAnswer: 1
  },
  {
    id: 80,
    question: "Maximum tourniquet time for arm is:",
    choices: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correctAnswer: 1
  },
  {
    id: 81,
    question: "Maximum tourniquet time for leg is:",
    choices: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correctAnswer: 2
  },
  {
    id: 82,
    question: "Esmarch bandage is used for:",
    choices: ["Wound dressing", "Exsanguination", "Compression", "Support"],
    correctAnswer: 1
  },
  {
    id: 83,
    question: "The C-arm provides:",
    choices: ["Fluoroscopy", "CT imaging", "MRI imaging", "Ultrasound"],
    correctAnswer: 0
  },
  {
    id: 84,
    question: "Image intensifier converts:",
    choices: ["X-rays to light", "Light to X-rays", "Sound to image", "Heat to image"],
    correctAnswer: 0
  },
  {
    id: 85,
    question: "Lead aprons protect against:",
    choices: ["Heat", "Infection", "Radiation", "Chemicals"],
    correctAnswer: 2
  },
  {
    id: 86,
    question: "ALARA principle means:",
    choices: ["Always Low And Reasonable Amounts", "As Low As Reasonably Achievable", "All Limits Are Reasonably Applied", "Always Limit All Radiation Activities"],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "Radiation exposure is measured in:",
    choices: ["Watts", "Joules", "Rems", "Degrees"],
    correctAnswer: 2
  },
  {
    id: 88,
    question: "Dosimeter badges measure:",
    choices: ["Temperature", "Radiation exposure", "Time", "Distance"],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "Ultrasonic cleaners should NOT be used for:",
    choices: ["Stainless steel", "Plated instruments", "Microsurgical instruments", "Plastic items"],
    correctAnswer: 1
  },
  {
    id: 90,
    question: "Endoscope cleaning requires:",
    choices: ["Manual cleaning only", "Automated cleaning only", "Both manual and automated", "Steam sterilization only"],
    correctAnswer: 2
  },
  {
    id: 94,
    question: "Hydrogen peroxide plasma sterilization is used for:",
    choices: ["Heat-sensitive items", "Moisture-sensitive items", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 95,
    question: "Ethylene oxide sterilization requires:",
    choices: ["High temperature", "High pressure", "Aeration", "All of the above"],
    correctAnswer: 2
  },
  {
    id: 96,
    question: "The aeration time after ETO sterilization depends on:",
    choices: ["Item material", "Temperature", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "Implants should be sterilized using:",
    choices: ["Flash sterilization", "ETO only", "Steam sterilization with BI", "Any method"],
    correctAnswer: 2
  },
  {
    id: 98,
    question: "Loaner instruments should be:",
    choices: ["Used immediately", "Processed like regular instruments", "Sterilized twice", "Not used"],
    correctAnswer: 1
  },
  {
    id: 100,
    question: "Count sheets are used to:",
    choices: ["Track instruments", "Record sterilization", "Document cleaning", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 104,
    question: "Surgical hand antisepsis should last:",
    choices: ["30 seconds", "1 minute", "2-6 minutes", "10 minutes"],
    correctAnswer: 2
  },
  {
    id: 105,
    question: "Alcohol-based hand rubs require:",
    choices: ["Water rinse", "Towel drying", "Complete evaporation", "Soap application"],
    correctAnswer: 2
  },
  {
    id: 108,
    question: "Closed gloving is performed:",
    choices: ["Before gowning", "After gowning", "Instead of gowning", "With contaminated hands"],
    correctAnswer: 1
  },
  {
    id: 109,
    question: "Open gloving is used when:",
    choices: ["Scrubbed in", "Not gowned", "Changing gloves", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 110,
    question: "Double gloving provides:",
    choices: ["Better dexterity", "Increased protection", "Cost savings", "Improved grip"],
    correctAnswer: 1
  },
  {
    id: 111,
    question: "Glove perforation should be:",
    choices: ["Ignored if small", "Reported immediately", "Fixed with tape", "Noted after surgery"],
    correctAnswer: 1
  },
  {
    id: 112,
    question: "Surgical masks should:",
    choices: ["Cover nose and mouth", "Be changed between cases", "Not be touched during surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 113,
    question: "Eye protection is required when:",
    choices: ["Risk of splashing", "Using lasers", "Using chemicals", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 114,
    question: "Surgical caps should:",
    choices: ["Cover all hair", "Be disposable", "Be changed daily", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 115,
    question: "Shoe covers are:",
    choices: ["Always required", "Never required", "Required in some areas", "Optional"],
    correctAnswer: 2
  },
  {
    id: 118,
    question: "The incise drape is:",
    choices: ["Placed first", "Placed last", "Adhesive", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 119,
    question: "Fenestrated drapes have:",
    choices: ["Multiple layers", "An opening", "Adhesive edges", "Reinforcement"],
    correctAnswer: 1
  },
  {
    id: 121,
    question: "If a drape becomes contaminated:",
    choices: ["Continue surgery", "Replace the drape", "Cover with another drape", "Clean the drape"],
    correctAnswer: 1
  },
  {
    id: 122,
    question: "Surgical site preparation includes:",
    choices: ["Hair removal", "Skin antisepsis", "Draping", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 123,
    question: "Hair removal should be done:",
    choices: ["Night before surgery", "Just before surgery", "In the OR", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 124,
    question: "Clippers are preferred over razors because they:",
    choices: ["Are faster", "Reduce infection risk", "Are cheaper", "Are easier to use"],
    correctAnswer: 1
  },
  {
    id: 125,
    question: "Skin preparation should begin:",
    choices: ["At the periphery", "At the incision site", "At the cleanest area", "Anywhere"],
    correctAnswer: 1
  },
  {
    id: 126,
    question: "Prep solution should be applied in:",
    choices: ["Back and forth motions", "Circular motions", "Vertical strokes", "Any pattern"],
    correctAnswer: 1
  },
  {
    id: 127,
    question: "Alcohol-based prep solutions are:",
    choices: ["Flammable", "Non-flammable", "Water-based", "Oil-based"],
    correctAnswer: 0
  },
  {
    id: 128,
    question: "Iodophors are:",
    choices: ["Immediate acting", "Slow acting", "Non-antimicrobial", "Alcohol-based"],
    correctAnswer: 1
  },
  {
    id: 129,
    question: "Chlorhexidine gluconate:",
    choices: ["Has no residual effect", "Has residual effect", "Is not antimicrobial", "Requires alcohol"],
    correctAnswer: 1
  },
  {
    id: 130,
    question: "Patient positioning should consider:",
    choices: ["Surgical access", "Patient safety", "Physiologic function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 131,
    question: "Supine position is also called:",
    choices: ["Prone", "Lateral", "Dorsal recumbent", "Trendelenburg"],
    correctAnswer: 2
  },
  {
    id: 132,
    question: "Trendelenburg position involves:",
    choices: ["Head up", "Head down", "Side lying", "Face down"],
    correctAnswer: 1
  },
  {
    id: 133,
    question: "Reverse Trendelenburg involves:",
    choices: ["Head up", "Head down", "Side lying", "Face down"],
    correctAnswer: 0
  },
  {
    id: 134,
    question: "Fowler's position is:",
    choices: ["Flat", "Head elevated", "Head down", "Side lying"],
    correctAnswer: 1
  },
  {
    id: 135,
    question: "Lithotomy position is used for:",
    choices: ["Abdominal surgery", "Pelvic surgery", "Chest surgery", "Head surgery"],
    correctAnswer: 1
  },
  {
    id: 136,
    question: "Prone position risks include:",
    choices: ["Pressure sores", "Breathing difficulty", "Nerve damage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 137,
    question: "Lateral position requires:",
    choices: ["Kidney rest", "Axillary roll", "Leg support", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 138,
    question: "Jackknife position is a variation of:",
    choices: ["Supine", "Prone", "Lateral", "Lithotomy"],
    correctAnswer: 1
  },
  {
    id: 139,
    question: "Beach chair position is used for:",
    choices: ["Abdominal surgery", "Shoulder surgery", "Leg surgery", "Back surgery"],
    correctAnswer: 1
  },
  {
    id: 140,
    question: "Pressure points should be:",
    choices: ["Ignored", "Padded", "Marked", "Compressed"],
    correctAnswer: 1
  },
  {
    id: 141,
    question: "Compartment syndrome can result from:",
    choices: ["Poor positioning", "Prolonged surgery", "Tight restraints", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 142,
    question: "Brachial plexus injury can occur in:",
    choices: ["Supine position", "Lateral position", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 143,
    question: "Common peroneal nerve injury occurs with:",
    choices: ["Arm positioning", "Leg positioning", "Head positioning", "Back positioning"],
    correctAnswer: 1
  },
  {
    id: 144,
    question: "Ulnar nerve injury is associated with:",
    choices: ["Elbow pressure", "Shoulder pressure", "Hip pressure", "Knee pressure"],
    correctAnswer: 0
  },
  {
    id: 145,
    question: "The surgical count includes:",
    choices: ["Sponges", "Instruments", "Needles", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 146,
    question: "Initial count is performed:",
    choices: ["Before incision", "After incision", "During closure", "After closure"],
    correctAnswer: 0
  },
  {
    id: 147,
    question: "Closing count is performed:",
    choices: ["Before closure begins", "During closure", "After closure", "Next day"],
    correctAnswer: 0
  },
  {
    id: 148,
    question: "If count is incorrect:",
    choices: ["Continue surgery", "Search for item", "Take X-ray", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 149,
    question: "Sponges should be:",
    choices: ["Counted individually", "Kept on field", "Discarded immediately", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 150,
    question: "Radiopaque sponges contain:",
    choices: ["Metal strips", "Plastic markers", "Barium sulfate", "Iodine"],
    correctAnswer: 2
  },
  {
    id: 151,
    question: "Needle count includes:",
    choices: ["Suture needles only", "All needles", "Hypodermic needles only", "Broken needles only"],
    correctAnswer: 1
  },
  {
    id: 152,
    question: "Broken needles should be:",
    choices: ["Discarded", "Counted as one", "Counted as pieces", "Ignored"],
    correctAnswer: 2
  },
  {
    id: 153,
    question: "Instrument count is required for:",
    choices: ["All surgeries", "Open surgeries only", "Laparoscopic surgeries", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 154,
    question: "Small items like clips should be:",
    choices: ["Not counted", "Counted if possible", "Always counted", "Never used"],
    correctAnswer: 1
  },
  {
    id: 155,
    question: "Count discrepancy requires:",
    choices: ["Documentation", "Incident report", "X-ray", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 156,
    question: "Specimen handling requires:",
    choices: ["Proper labeling", "Appropriate fixative", "Timely transport", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 157,
    question: "Frozen section specimens require:",
    choices: ["Formalin", "Saline", "No fixative", "Alcohol"],
    correctAnswer: 2
  },
  {
    id: 158,
    question: "Culture specimens should be:",
    choices: ["Fixed in formalin", "Kept moist", "Kept dry", "Frozen"],
    correctAnswer: 1
  },
  {
    id: 159,
    question: "Specimen containers should be:",
    choices: ["Labeled before surgery", "Labeled after surgery", "Not labeled", "Labeled by pathology"],
    correctAnswer: 0
  },
  {
    id: 160,
    question: "Chain of custody applies to:",
    choices: ["All specimens", "Legal specimens", "Culture specimens", "Frozen specimens"],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "Hemostasis is achieved by:",
    choices: ["Pressure", "Electrosurgery", "Ligatures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 162,
    question: "Primary hemostasis involves:",
    choices: ["Platelets", "Clotting factors", "Fibrin", "Red blood cells"],
    correctAnswer: 0
  },
  {
    id: 163,
    question: "Secondary hemostasis involves:",
    choices: ["Platelets", "Coagulation cascade", "Vasoconstriction", "Pressure"],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "Topical hemostatic agents include:",
    choices: ["Gelfoam", "Surgicel", "Thrombin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 165,
    question: "Bone wax is used for:",
    choices: ["Soft tissue bleeding", "Bone bleeding", "Vascular bleeding", "All bleeding"],
    correctAnswer: 1
  },
  {
    id: 166,
    question: "Microfibrillar collagen works by:",
    choices: ["Chemical action", "Mechanical action", "Platelet aggregation", "Vasoconstriction"],
    correctAnswer: 2
  },
  {
    id: 167,
    question: "Thrombin should not be:",
    choices: ["Used topically", "Injected", "Mixed with blood", "Used on bone"],
    correctAnswer: 1
  },
  {
    id: 168,
    question: "Fibrin sealants contain:",
    choices: ["Thrombin only", "Fibrinogen only", "Both thrombin and fibrinogen", "Neither"],
    correctAnswer: 2
  },
  {
    id: 169,
    question: "Wound classification includes:",
    choices: ["Clean", "Clean-contaminated", "Contaminated", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 170,
    question: "Clean wounds have infection rate of:",
    choices: ["<2%", "2-5%", "5-10%", ">10%"],
    correctAnswer: 0
  },
  {
    id: 171,
    question: "Contaminated wounds have infection rate of:",
    choices: ["<2%", "2-5%", "10-17%", ">20%"],
    correctAnswer: 2
  },
  {
    id: 172,
    question: "Dirty wounds have infection rate of:",
    choices: ["<2%", "2-5%", "10-17%", ">27%"],
    correctAnswer: 3
  },
  {
    id: 173,
    question: "Primary intention healing occurs in:",
    choices: ["Clean wounds", "Infected wounds", "Open wounds", "Chronic wounds"],
    correctAnswer: 0
  },
  {
    id: 174,
    question: "Secondary intention healing involves:",
    choices: ["Immediate closure", "Delayed closure", "Granulation tissue", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 175,
    question: "Tertiary intention healing is:",
    choices: ["Immediate closure", "Delayed primary closure", "Open healing", "Skin grafting"],
    correctAnswer: 1
  },
  {
    id: 176,
    question: "Wound dehiscence is:",
    choices: ["Infection", "Separation of layers", "Bleeding", "Scarring"],
    correctAnswer: 1
  },
  {
    id: 177,
    question: "Evisceration involves:",
    choices: ["Skin separation", "Fascial separation", "Organ protrusion", "Bleeding"],
    correctAnswer: 2
  },
  {
    id: 178,
    question: "Factors affecting wound healing include:",
    choices: ["Age", "Nutrition", "Infection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 179,
    question: "Protein deficiency affects:",
    choices: ["Collagen synthesis", "Immune function", "Wound strength", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 180,
    question: "Vitamin C deficiency causes:",
    choices: ["Poor collagen formation", "Bleeding", "Delayed healing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 181,
    question: "Smoking affects wound healing by:",
    choices: ["Reducing oxygen", "Impairing circulation", "Affecting immune function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 182,
    question: "Diabetes affects wound healing through:",
    choices: ["Poor circulation", "Impaired immune function", "High glucose levels", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 183,
    question: "Steroids affect wound healing by:",
    choices: ["Reducing inflammation", "Impairing collagen synthesis", "Affecting immune function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 184,
    question: "Wound drainage systems include:",
    choices: ["Penrose drains", "Jackson-Pratt drains", "Hemovac drains", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 185,
    question: "Penrose drains provide:",
    choices: ["Active drainage", "Passive drainage", "Suction drainage", "No drainage"],
    correctAnswer: 1
  },
  {
    id: 186,
    question: "Jackson-Pratt drains use:",
    choices: ["Gravity", "Suction", "Pressure", "Capillary action"],
    correctAnswer: 1
  },
  {
    id: 187,
    question: "Chest tubes are used for:",
    choices: ["Pneumothorax", "Hemothorax", "Pleural effusion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 188,
    question: "Nasogastric tubes are used for:",
    choices: ["Feeding", "Decompression", "Medication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 189,
    question: "Foley catheters are used for:",
    choices: ["Urine drainage", "Bladder irrigation", "Medication instillation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 190,
    question: "T-tubes are used for:",
    choices: ["Bile drainage", "Urine drainage", "Blood drainage", "Air drainage"],
    correctAnswer: 0
  },
  {
    id: 192,
    question: "Antibiotic prophylaxis should be given:",
    choices: ["After surgery", "During surgery", "Within 1 hour before incision", "24 hours before"],
    correctAnswer: 2
  },
  {
    id: 193,
    question: "Duration of antibiotic prophylaxis should be:",
    choices: ["Single dose", "24 hours", "48 hours", "Until discharge"],
    correctAnswer: 0
  },
  {
    id: 194,
    question: "Hair removal should be done:",
    choices: ["Night before", "Morning of surgery", "In OR", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 195,
    question: "Normothermia helps prevent:",
    choices: ["Infection", "Bleeding", "Arrhythmias", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 196,
    question: "Glucose control is important for:",
    choices: ["Diabetic patients only", "All patients", "Elderly patients only", "Obese patients only"],
    correctAnswer: 1
  },
  {
    id: 197,
    question: "Oxygenation affects:",
    choices: ["Wound healing", "Infection risk", "Tissue perfusion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 198,
    question: "Traffic control in OR helps:",
    choices: ["Reduce contamination", "Improve efficiency", "Ensure safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 199,
    question: "OR doors should be:",
    choices: ["Always open", "Always closed", "Kept closed during surgery", "It doesn't matter"],
    correctAnswer: 2
  },
  {
    id: 200,
    question: "Talking in OR should be:",
    choices: ["Unlimited", "Minimized", "Prohibited", "Encouraged"],
    correctAnswer: 1
  },
  {
    id: 201,
    question: "The appendix is located in the:",
    choices: ["Right upper quadrant", "Right lower quadrant", "Left upper quadrant", "Left lower quadrant"],
    correctAnswer: 1
  },
  {
    id: 202,
    question: "McBurney's point is located:",
    choices: ["1/3 distance from ASIS to umbilicus", "2/3 distance from ASIS to umbilicus", "At the umbilicus", "At the ASIS"],
    correctAnswer: 0
  },
  {
    id: 203,
    question: "Appendectomy incision is usually:",
    choices: ["Midline", "McBurney's", "Pfannenstiel", "Kocher"],
    correctAnswer: 1
  },
  {
    id: 204,
    question: "Laparoscopic appendectomy uses:",
    choices: ["2 ports", "3 ports", "4 ports", "5 ports"],
    correctAnswer: 1
  },
  {
    id: 205,
    question: "The mesoappendix contains:",
    choices: ["Appendicular artery", "Lymphatics", "Nerves", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 206,
    question: "Cholecystectomy removes the:",
    choices: ["Liver", "Gallbladder", "Pancreas", "Spleen"],
    correctAnswer: 1
  },
  {
    id: 207,
    question: "Calot's triangle is bounded by:",
    choices: ["Hepatic artery, cystic artery, liver", "Cystic artery, common hepatic duct, liver", "Hepatic artery, common bile duct, liver", "Common hepatic duct, cystic duct, liver"],
    correctAnswer: 1
  },
  {
    id: 208,
    question: "The critical view of safety includes:",
    choices: ["Two structures", "Three structures", "Four structures", "Five structures"],
    correctAnswer: 0
  },
  {
    id: 209,
    question: "Laparoscopic cholecystectomy typically uses:",
    choices: ["2 ports", "3 ports", "4 ports", "5 ports"],
    correctAnswer: 2
  },
  {
    id: 210,
    question: "Cholangiography is used to:",
    choices: ["Visualize bile ducts", "Remove stones", "Measure pressure", "Inject contrast"],
    correctAnswer: 0
  },
  {
    id: 211,
    question: "Hernia repair involves:",
    choices: ["Reducing contents", "Repairing defect", "Strengthening repair", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 212,
    question: "Inguinal hernias are classified as:",
    choices: ["Direct or indirect", "Internal or external", "Primary or secondary", "Simple or complex"],
    correctAnswer: 0
  },
  {
    id: 213,
    question: "Indirect inguinal hernias:",
    choices: ["Go through Hesselbach's triangle", "Follow spermatic cord", "Are acquired", "Are more common in elderly"],
    correctAnswer: 1
  },
  {
    id: 214,
    question: "Direct inguinal hernias:",
    choices: ["Are congenital", "Go through deep ring", "Go through Hesselbach's triangle", "Follow spermatic cord"],
    correctAnswer: 2
  },
  {
    id: 215,
    question: "Femoral hernias occur:",
    choices: ["Above inguinal ligament", "Below inguinal ligament", "Through obturator foramen", "Through sciatic foramen"],
    correctAnswer: 1
  },
  {
    id: 216,
    question: "Ventral hernias include:",
    choices: ["Incisional hernias", "Umbilical hernias", "Epigastric hernias", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 217,
    question: "Mesh repair is used to:",
    choices: ["Reduce recurrence", "Strengthen repair", "Provide scaffolding", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 218,
    question: "TEP repair stands for:",
    choices: ["Total extraperitoneal", "Transabdominal extraperitoneal", "Totally endoscopic preperitoneal", "Transinguinal extraperitoneal"],
    correctAnswer: 0
  },
  {
    id: 219,
    question: "Thyroidectomy may be:",
    choices: ["Total", "Subtotal", "Lobectomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 220,
    question: "Recurrent laryngeal nerve injury causes:",
    choices: ["Hoarseness", "Difficulty swallowing", "Breathing problems", "All of the above"],
    correctAnswer: 0
  },
  {
    id: 221,
    question: "Parathyroid glands are:",
    choices: ["2 in number", "4 in number", "6 in number", "Variable in number"],
    correctAnswer: 3
  },
  {
    id: 222,
    question: "Hypocalcemia after thyroidectomy is due to:",
    choices: ["Nerve injury", "Parathyroid injury", "Bleeding", "Infection"],
    correctAnswer: 1
  },
  {
    id: 223,
    question: "Breast cancer surgery may include:",
    choices: ["Lumpectomy", "Mastectomy", "Lymph node dissection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 224,
    question: "Sentinel lymph node biopsy uses:",
    choices: ["Blue dye", "Radioactive tracer", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 225,
    question: "Modified radical mastectomy removes:",
    choices: ["Breast only", "Breast and lymph nodes", "Breast, lymph nodes, and pectoralis major", "Breast, lymph nodes, and both pectoral muscles"],
    correctAnswer: 1
  },
  {
    id: 226,
    question: "Radical mastectomy removes:",
    choices: ["Breast only", "Breast and lymph nodes", "Breast, lymph nodes, and pectoralis minor", "Breast, lymph nodes, and both pectoral muscles"],
    correctAnswer: 3
  },
  {
    id: 227,
    question: "Gastroesophageal reflux surgery includes:",
    choices: ["Nissen fundoplication", "Toupet fundoplication", "Hill repair", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 228,
    question: "Nissen fundoplication is:",
    choices: ["Partial wrap", "Complete wrap", "No wrap", "Double wrap"],
    correctAnswer: 1
  },
  {
    id: 229,
    question: "Hiatal hernia repair may include:",
    choices: ["Crural repair", "Mesh reinforcement", "Fundoplication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 230,
    question: "Bariatric surgery includes:",
    choices: ["Gastric bypass", "Sleeve gastrectomy", "Gastric banding", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 231,
    question: "Roux-en-Y gastric bypass creates:",
    choices: ["Restriction only", "Malabsorption only", "Both restriction and malabsorption", "Neither"],
    correctAnswer: 2
  },
  {
    id: 232,
    question: "Sleeve gastrectomy removes:",
    choices: ["Entire stomach", "80% of stomach", "50% of stomach", "20% of stomach"],
    correctAnswer: 1
  },
  {
    id: 233,
    question: "Colectomy may be:",
    choices: ["Right hemicolectomy", "Left hemicolectomy", "Sigmoid colectomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 234,
    question: "Right hemicolectomy removes:",
    choices: ["Cecum and ascending colon", "Transverse colon", "Descending colon", "Sigmoid colon"],
    correctAnswer: 0
  },
  {
    id: 235,
    question: "Left hemicolectomy removes:",
    choices: ["Cecum", "Ascending colon", "Descending colon", "Rectum"],
    correctAnswer: 2
  },
  {
    id: 236,
    question: "Low anterior resection removes:",
    choices: ["Cecum", "Sigmoid colon", "Upper rectum", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 237,
    question: "Abdominoperineal resection removes:",
    choices: ["Colon only", "Rectum only", "Rectum and anus", "Entire large bowel"],
    correctAnswer: 2
  },
  {
    id: 238,
    question: "Colostomy may be:",
    choices: ["Temporary", "Permanent", "Loop or end", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 239,
    question: "Ileostomy is created from:",
    choices: ["Large bowel", "Small bowel", "Stomach", "Duodenum"],
    correctAnswer: 1
  },
  {
    id: 240,
    question: "Whipple procedure removes:",
    choices: ["Pancreatic head", "Duodenum", "Gallbladder", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 241,
    question: "Splenectomy may be performed for:",
    choices: ["Trauma", "Hematologic disorders", "Tumors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 242,
    question: "Pneumonia risk after splenectomy is due to:",
    choices: ["Encapsulated bacteria", "Viral infections", "Fungal infections", "All infections"],
    correctAnswer: 0
  },
  {
    id: 243,
    question: "Liver resection may be:",
    choices: ["Segmentectomy", "Lobectomy", "Wedge resection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 244,
    question: "Pringle maneuver controls:",
    choices: ["Hepatic artery", "Portal vein", "Both A and B", "Hepatic veins"],
    correctAnswer: 2
  },
  {
    id: 245,
    question: "Kidney transplant involves:",
    choices: ["Donor nephrectomy", "Recipient surgery", "Vascular anastomosis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 246,
    question: "Living donor nephrectomy is usually:",
    choices: ["Open", "Laparoscopic", "Robotic", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 247,
    question: "Nephrectomy may be:",
    choices: ["Simple", "Radical", "Partial", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 248,
    question: "Radical nephrectomy removes:",
    choices: ["Kidney only", "Kidney and ureter", "Kidney, adrenal, and lymph nodes", "Kidney and bladder"],
    correctAnswer: 2
  },
  {
    id: 249,
    question: "Cystectomy may be:",
    choices: ["Partial", "Radical", "Simple", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 250,
    question: "Urinary diversion after cystectomy includes:",
    choices: ["Ileal conduit", "Neobladder", "Ureterostomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 251,
    question: "Prostatectomy may be:",
    choices: ["Open", "Laparoscopic", "Robotic", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 252,
    question: "Radical prostatectomy removes:",
    choices: ["Prostate only", "Prostate and seminal vesicles", "Prostate and bladder", "Prostate and urethra"],
    correctAnswer: 1
  },
  {
    id: 253,
    question: "TURP stands for:",
    choices: ["Transurethral resection of prostate", "Total urethral resection procedure", "Transverse urethral repair procedure", "Transurethral repair of prostate"],
    correctAnswer: 0
  },
  {
    id: 254,
    question: "Orchiopexy is performed for:",
    choices: ["Undescended testis", "Testicular torsion", "Testicular tumor", "Hydrocele"],
    correctAnswer: 0
  },
  {
    id: 255,
    question: "Varicocelectomy treats:",
    choices: ["Undescended testis", "Dilated veins", "Testicular tumor", "Epididymitis"],
    correctAnswer: 1
  },
  {
    id: 256,
    question: "Hysterectomy may be:",
    choices: ["Total", "Subtotal", "Radical", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 257,
    question: "Total hysterectomy removes:",
    choices: ["Uterus only", "Uterus and cervix", "Uterus and ovaries", "Uterus, cervix, and ovaries"],
    correctAnswer: 1
  },
  {
    id: 258,
    question: "Radical hysterectomy removes:",
    choices: ["Uterus and cervix", "Uterus, cervix, and upper vagina", "Uterus, cervix, parametrium, and upper vagina", "Entire reproductive tract"],
    correctAnswer: 2
  },
  {
    id: 259,
    question: "Myomectomy removes:",
    choices: ["Uterus", "Fibroids", "Ovaries", "Cervix"],
    correctAnswer: 1
  },
  {
    id: 260,
    question: "Oophorectomy removes:",
    choices: ["Uterus", "Ovaries", "Fallopian tubes", "Cervix"],
    correctAnswer: 1
  },
  {
    id: 261,
    question: "Salpingectomy removes:",
    choices: ["Uterus", "Ovaries", "Fallopian tubes", "Cervix"],
    correctAnswer: 2
  },
  {
    id: 262,
    question: "Cesarean section may be:",
    choices: ["Low transverse", "Classical", "Low vertical", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 263,
    question: "Tubal ligation may be performed:",
    choices: ["Postpartum", "Interval", "At cesarean section", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 264,
    question: "Dilation and curettage involves:",
    choices: ["Cervical dilation", "Endometrial sampling", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 265,
    question: "Laparoscopy uses:",
    choices: ["CO2 insufflation", "Trocars", "Camera", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 266,
    question: "Pneumoperitoneum is created with:",
    choices: ["Air", "CO2", "N2O", "O2"],
    correctAnswer: 1
  },
  {
    id: 267,
    question: "Veress needle is used for:",
    choices: ["Insufflation", "Trocar insertion", "Suturing", "Cutting"],
    correctAnswer: 0
  },
  {
    id: 268,
    question: "Hasson technique involves:",
    choices: ["Blind trocar insertion", "Open trocar insertion", "Veress needle", "Direct visualization"],
    correctAnswer: 1
  },
  {
    id: 269,
    question: "Trendelenburg position in laparoscopy:",
    choices: ["Improves visualization", "Reduces complications", "Is always required", "Is never used"],
    correctAnswer: 0
  },
  {
    id: 270,
    question: "Laparoscopic complications include:",
    choices: ["Bowel injury", "Vascular injury", "Gas embolism", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 271,
    question: "Robotic surgery advantages include:",
    choices: ["3D visualization", "Tremor elimination", "Improved dexterity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 272,
    question: "Da Vinci robot has:",
    choices: ["2 arms", "3 arms", "4 arms", "Variable arms"],
    correctAnswer: 3
  },
  {
    id: 273,
    question: "Endoscopic instruments are:",
    choices: ["Reusable", "Disposable", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 274,
    question: "Arthroscopy is used for:",
    choices: ["Diagnosis", "Treatment", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 275,
    question: "Knee arthroscopy portals include:",
    choices: ["Anteromedial", "Anterolateral", "Posteromedial", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 276,
    question: "Shoulder arthroscopy positions include:",
    choices: ["Beach chair", "Lateral decubitus", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 277,
    question: "ACL reconstruction uses:",
    choices: ["Autograft", "Allograft", "Synthetic graft", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 278,
    question: "Meniscectomy removes:",
    choices: ["Entire meniscus", "Torn portion", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 279,
    question: "Rotator cuff repair may be:",
    choices: ["Open", "Arthroscopic", "Mini-open", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 280,
    question: "Hip arthroscopy treats:",
    choices: ["Labral tears", "Impingement", "Loose bodies", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 281,
    question: "Total hip replacement replaces:",
    choices: ["Femoral head only", "Acetabulum only", "Both femoral head and acetabulum", "Entire hip joint"],
    correctAnswer: 2
  },
  {
    id: 282,
    question: "Hip replacement approaches include:",
    choices: ["Posterior", "Anterior", "Lateral", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 283,
    question: "Total knee replacement replaces:",
    choices: ["Femoral component only", "Tibial component only", "Both femoral and tibial", "Entire knee joint"],
    correctAnswer: 2
  },
  {
    id: 284,
    question: "Unicompartmental knee replacement replaces:",
    choices: ["Medial compartment", "Lateral compartment", "Patellofemoral compartment", "Any single compartment"],
    correctAnswer: 3
  },
  {
    id: 285,
    question: "Shoulder replacement may be:",
    choices: ["Total", "Hemiarthroplasty", "Reverse", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 286,
    question: "Reverse shoulder replacement is used for:",
    choices: ["Young patients", "Rotator cuff deficiency", "Fractures", "Arthritis"],
    correctAnswer: 1
  },
  {
    id: 287,
    question: "Fracture fixation may use:",
    choices: ["Plates", "Screws", "Rods", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 288,
    question: "Intramedullary nails are used for:",
    choices: ["Long bone fractures", "Joint fractures", "Spine fractures", "Skull fractures"],
    correctAnswer: 0
  },
  {
    id: 289,
    question: "External fixation is used for:",
    choices: ["Open fractures", "Infected fractures", "Unstable fractures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 290,
    question: "Bone grafts may be:",
    choices: ["Autograft", "Allograft", "Synthetic", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 291,
    question: "Spinal fusion may be:",
    choices: ["Anterior", "Posterior", "Lateral", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 292,
    question: "Laminectomy removes:",
    choices: ["Vertebral body", "Lamina", "Pedicle", "Spinous process"],
    correctAnswer: 1
  },
  {
    id: 293,
    question: "Discectomy removes:",
    choices: ["Entire disc", "Herniated portion", "Disc space", "Adjacent vertebrae"],
    correctAnswer: 1
  },
  {
    id: 294,
    question: "Spinal instrumentation includes:",
    choices: ["Pedicle screws", "Rods", "Hooks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 295,
    question: "Craniotomy involves:",
    choices: ["Opening skull", "Removing bone flap", "Accessing brain", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 296,
    question: "Craniectomy involves:",
    choices: ["Opening skull", "Removing bone permanently", "Replacing bone flap", "Accessing brain"],
    correctAnswer: 1
  },
  {
    id: 297,
    question: "Brain tumor resection may be:",
    choices: ["Total", "Subtotal", "Biopsy only", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 298,
    question: "Awake craniotomy is performed for:",
    choices: ["All brain tumors", "Tumors near eloquent areas", "Emergency surgery", "Pediatric patients"],
    correctAnswer: 1
  },
  {
    id: 299,
    question: "Ventriculoperitoneal shunt treats:",
    choices: ["Brain tumor", "Hydrocephalus", "Hemorrhage", "Infection"],
    correctAnswer: 1
  },
  {
    id: 300,
    question: "Aneurysm clipping involves:",
    choices: ["Opening aneurysm", "Placing clip on neck", "Removing aneurysm", "Bypassing aneurysm"],
    correctAnswer: 1
  },
  {
    id: 301,
    question: "Carotid endarterectomy removes:",
    choices: ["Entire carotid artery", "Plaque from carotid", "Carotid bifurcation", "External carotid"],
    correctAnswer: 1
  },
  {
    id: 302,
    question: "Cardiac surgery may require:",
    choices: ["Cardiopulmonary bypass", "Hypothermia", "Cardioplegia", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 303,
    question: "Coronary artery bypass uses:",
    choices: ["Saphenous vein", "Internal mammary artery", "Radial artery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 304,
    question: "Valve replacement may use:",
    choices: ["Mechanical valves", "Biological valves", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 305,
    question: "Aortic valve replacement approaches include:",
    choices: ["Full sternotomy", "Mini-sternotomy", "Right thoracotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 306,
    question: "Mitral valve repair may involve:",
    choices: ["Annuloplasty", "Leaflet repair", "Chordal repair", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 307,
    question: "CABG stands for:",
    choices: ["Cardiac artery bypass graft", "Coronary artery bypass graft", "Carotid artery bypass graft", "Cerebral artery bypass graft"],
    correctAnswer: 1
  },
  {
    id: 308,
    question: "Off-pump CABG avoids:",
    choices: ["Cardiopulmonary bypass", "General anesthesia", "Sternotomy", "Grafting"],
    correctAnswer: 0
  },
  {
    id: 309,
    question: "Thoracotomy approaches include:",
    choices: ["Posterolateral", "Anterolateral", "Median sternotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 310,
    question: "Lobectomy removes:",
    choices: ["Entire lung", "One lobe", "Segment", "Wedge"],
    correctAnswer: 1
  },
  {
    id: 311,
    question: "Pneumonectomy removes:",
    choices: ["One lobe", "Multiple lobes", "Entire lung", "Lung segment"],
    correctAnswer: 2
  },
  {
    id: 312,
    question: "Wedge resection removes:",
    choices: ["Entire lobe", "Lung segment", "Small portion", "Entire lung"],
    correctAnswer: 2
  },
  {
    id: 313,
    question: "VATS stands for:",
    choices: ["Video-assisted thoracic surgery", "Ventilator-assisted thoracic surgery", "Vascular-assisted thoracic surgery", "Visual-assisted thoracic surgery"],
    correctAnswer: 0
  },
  {
    id: 314,
    question: "Chest tube insertion treats:",
    choices: ["Pneumothorax", "Hemothorax", "Pleural effusion", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 315,
    question: "Mediastinoscopy examines:",
    choices: ["Pleural space", "Mediastinum", "Pericardium", "Diaphragm"],
    correctAnswer: 1
  },
  {
    id: 316,
    question: "Plastic surgery principles include:",
    choices: ["Tissue preservation", "Aesthetic outcome", "Functional restoration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 317,
    question: "Skin grafts may be:",
    choices: ["Split-thickness", "Full-thickness", "Composite", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 318,
    question: "Flaps have:",
    choices: ["No blood supply", "Their own blood supply", "Artificial blood supply", "Variable blood supply"],
    correctAnswer: 1
  },
  {
    id: 319,
    question: "Free flaps require:",
    choices: ["No anastomosis", "Vascular anastomosis", "Nerve anastomosis", "Bone anastomosis"],
    correctAnswer: 1
  },
  {
    id: 320,
    question: "Breast reconstruction may use:",
    choices: ["Implants", "Autologous tissue", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 321,
    question: "TRAM flap uses:",
    choices: ["Latissimus dorsi", "Rectus abdominis", "Gluteus maximus", "Gracilis"],
    correctAnswer: 1
  },
  {
    id: 322,
    question: "Rhinoplasty modifies:",
    choices: ["Nose shape", "Nose function", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 323,
    question: "Blepharoplasty involves:",
    choices: ["Eyelid surgery", "Eyebrow surgery", "Eye muscle surgery", "Tear duct surgery"],
    correctAnswer: 0
  },
  {
    id: 324,
    question: "Facelift addresses:",
    choices: ["Skin laxity", "Muscle laxity", "Fat redistribution", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 325,
    question: "Liposuction removes:",
    choices: ["Skin", "Muscle", "Fat", "Bone"],
    correctAnswer: 2
  },
  {
    id: 326,
    question: "Abdominoplasty addresses:",
    choices: ["Excess skin", "Muscle separation", "Fat deposits", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 327,
    question: "Hand surgery may involve:",
    choices: ["Tendon repair", "Nerve repair", "Fracture fixation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 328,
    question: "Carpal tunnel release treats:",
    choices: ["Median nerve compression", "Ulnar nerve compression", "Radial nerve compression", "All nerve compressions"],
    correctAnswer: 0
  },
  {
    id: 329,
    question: "Dupuytren's contracture affects:",
    choices: ["Tendons", "Nerves", "Palmar fascia", "Bones"],
    correctAnswer: 2
  },
  {
    id: 330,
    question: "Trigger finger involves:",
    choices: ["Tendon sheath", "Nerve", "Bone", "Joint"],
    correctAnswer: 0
  },
  {
    id: 331,
    question: "Microsurgery requires:",
    choices: ["Operating microscope", "Specialized instruments", "Sutures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 332,
    question: "Replantation involves:",
    choices: ["Reattaching severed part", "Transplanting organ", "Replacing joint", "Repairing fracture"],
    correctAnswer: 0
  },
  {
    id: 333,
    question: "Ophthalmic surgery requires:",
    choices: ["Operating microscope", "Specialized instruments", "Precise technique", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 334,
    question: "Cataract surgery removes:",
    choices: ["Entire eye", "Lens", "Cornea", "Retina"],
    correctAnswer: 1
  },
  {
    id: 335,
    question: "Phacoemulsification uses:",
    choices: ["Laser", "Ultrasound", "Heat", "Cold"],
    correctAnswer: 1
  },
  {
    id: 336,
    question: "IOL stands for:",
    choices: ["Intraocular lens", "Internal optical lens", "Implanted ocular lens", "Integrated optical lens"],
    correctAnswer: 0
  },
  {
    id: 337,
    question: "Glaucoma surgery aims to:",
    choices: ["Increase eye pressure", "Decrease eye pressure", "Maintain eye pressure", "Measure eye pressure"],
    correctAnswer: 1
  },
  {
    id: 338,
    question: "Retinal detachment repair may use:",
    choices: ["Scleral buckle", "Vitrectomy", "Gas injection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 339,
    question: "Corneal transplant replaces:",
    choices: ["Entire cornea", "Corneal layers", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 340,
    question: "LASIK corrects:",
    choices: ["Cataracts", "Glaucoma", "Refractive errors", "Retinal detachment"],
    correctAnswer: 2
  },
  {
    id: 341,
    question: "ENT surgery includes:",
    choices: ["Ear surgery", "Nose surgery", "Throat surgery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 342,
    question: "Tonsillectomy removes:",
    choices: ["Adenoids", "Tonsils", "Both A and B", "Neither A nor B"],
    correctAnswer: 1
  },
  {
    id: 343,
    question: "Adenoidectomy removes:",
    choices: ["Tonsils", "Adenoids", "Both A and B", "Neither A nor B"],
    correctAnswer: 1
  },
  {
    id: 344,
    question: "Myringotomy involves:",
    choices: ["Eardrum incision", "Ear canal cleaning", "Hearing aid insertion", "Ear reconstruction"],
    correctAnswer: 0
  },
  {
    id: 345,
    question: "Tympanoplasty repairs:",
    choices: ["Eardrum", "Ear canal", "Inner ear", "Outer ear"],
    correctAnswer: 0
  },
  {
    id: 346,
    question: "Mastoidectomy removes:",
    choices: ["Mastoid air cells", "Entire mastoid", "Ear canal", "Eardrum"],
    correctAnswer: 0
  },
  {
    id: 347,
    question: "Stapedectomy replaces:",
    choices: ["Eardrum", "Stapes bone", "Cochlea", "Ear canal"],
    correctAnswer: 1
  },
  {
    id: 348,
    question: "Cochlear implant treats:",
    choices: ["Conductive hearing loss", "Sensorineural hearing loss", "Mixed hearing loss", "All hearing loss"],
    correctAnswer: 1
  },
  {
    id: 349,
    question: "Septoplasty corrects:",
    choices: ["Deviated septum", "Nasal polyps", "Sinus infection", "Nasal fracture"],
    correctAnswer: 0
  },
  {
    id: 350,
    question: "FESS stands for:",
    choices: ["Functional endoscopic sinus surgery", "Full endoscopic sinus surgery", "Frontal endoscopic sinus surgery", "Final endoscopic sinus surgery"],
    correctAnswer: 0
  },
  {
    id: 351,
    question: "Laryngectomy removes:",
    choices: ["Voice box", "Tongue", "Throat", "Esophagus"],
    correctAnswer: 0
  },
  {
    id: 352,
    question: "Tracheostomy creates:",
    choices: ["Airway opening", "Voice restoration", "Swallowing passage", "Hearing improvement"],
    correctAnswer: 0
  },
  {
    id: 353,
    question: "Parotidectomy removes:",
    choices: ["Submandibular gland", "Parotid gland", "Sublingual gland", "All salivary glands"],
    correctAnswer: 1
  },
  {
    id: 354,
    question: "Facial nerve preservation is important in:",
    choices: ["Thyroidectomy", "Parotidectomy", "Neck dissection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 355,
    question: "Pediatric surgery considerations include:",
    choices: ["Size differences", "Physiologic differences", "Psychological factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 356,
    question: "Pyloric stenosis repair is:",
    choices: ["Pyloromyotomy", "Pyloroplasty", "Gastrojejunostomy", "Vagotomy"],
    correctAnswer: 0
  },
  {
    id: 357,
    question: "Intussusception is:",
    choices: ["Bowel obstruction", "Bowel telescoping", "Bowel perforation", "Bowel inflammation"],
    correctAnswer: 1
  },
  {
    id: 358,
    question: "Hirschsprung's disease affects:",
    choices: ["Small bowel", "Colon", "Stomach", "Esophagus"],
    correctAnswer: 1
  },
  {
    id: 359,
    question: "Omphalocele involves:",
    choices: ["Abdominal wall defect", "Diaphragmatic hernia", "Intestinal atresia", "Pyloric stenosis"],
    correctAnswer: 0
  },
  {
    id: 360,
    question: "Gastroschisis is:",
    choices: ["Covered defect", "Uncovered defect", "Diaphragmatic defect", "Chest wall defect"],
    correctAnswer: 1
  },
  {
    id: 361,
    question: "Congenital diaphragmatic hernia affects:",
    choices: ["Breathing", "Digestion", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 362,
    question: "Esophageal atresia may involve:",
    choices: ["Tracheoesophageal fistula", "Isolated atresia", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 363,
    question: "Cleft lip repair is usually performed:",
    choices: ["At birth", "3-6 months", "1-2 years", "School age"],
    correctAnswer: 1
  },
  {
    id: 364,
    question: "Cleft palate repair is usually performed:",
    choices: ["3-6 months", "9-18 months", "2-3 years", "School age"],
    correctAnswer: 1
  },
  {
    id: 365,
    question: "Hypospadias repair corrects:",
    choices: ["Urethral opening position", "Penile curvature", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 366,
    question: "Undescended testis repair is:",
    choices: ["Orchiopexy", "Orchiectomy", "Orchidopexy", "Both A and C"],
    correctAnswer: 3
  },
  {
    id: 367,
    question: "Vascular surgery includes:",
    choices: ["Arterial procedures", "Venous procedures", "Access procedures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 368,
    question: "Aneurysm repair may be:",
    choices: ["Open", "Endovascular", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 369,
    question: "AAA stands for:",
    choices: ["Acute aortic aneurysm", "Abdominal aortic aneurysm", "Ascending aortic aneurysm", "Arterial aortic aneurysm"],
    correctAnswer: 1
  },
  {
    id: 370,
    question: "EVAR stands for:",
    choices: ["Endovascular aneurysm repair", "Emergency vascular aneurysm repair", "Extended vascular aneurysm repair", "Elective vascular aneurysm repair"],
    correctAnswer: 0
  },
  {
    id: 371,
    question: "Peripheral bypass uses:",
    choices: ["Synthetic graft", "Vein graft", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 372,
    question: "Fem-pop bypass connects:",
    choices: ["Femoral to popliteal", "Femoral to posterior tibial", "Femoral to peroneal", "Femoral to plantar"],
    correctAnswer: 0
  },
  {
    id: 373,
    question: "Carotid stenosis may cause:",
    choices: ["Stroke", "TIA", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 374,
    question: "AV fistula is created for:",
    choices: ["Dialysis access", "Blood pressure monitoring", "Medication administration", "Blood sampling"],
    correctAnswer: 0
  },
  {
    id: 375,
    question: "Varicose vein treatment includes:",
    choices: ["Stripping", "Sclerotherapy", "Endovenous ablation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 376,
    question: "DVT stands for:",
    choices: ["Deep vein thrombosis", "Deep venous thrombosis", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 377,
    question: "Pulmonary embolectomy removes:",
    choices: ["Lung tissue", "Blood clot", "Tumor", "Infection"],
    correctAnswer: 1
  },
  {
    id: 378,
    question: "IVC filter prevents:",
    choices: ["DVT", "Pulmonary embolism", "Stroke", "Heart attack"],
    correctAnswer: 1
  },
  {
    id: 379,
    question: "Amputation may be:",
    choices: ["Above knee", "Below knee", "Digital", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 380,
    question: "Amputation level depends on:",
    choices: ["Blood supply", "Infection", "Function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 381,
    question: "Trauma surgery priorities follow:",
    choices: ["ABCDE", "ATLS", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 382,
    question: "Damage control surgery involves:",
    choices: ["Definitive repair", "Temporary measures", "Complete reconstruction", "Cosmetic repair"],
    correctAnswer: 1
  },
  {
    id: 383,
    question: "Exploratory laparotomy explores:",
    choices: ["Abdomen", "Pelvis", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 384,
    question: "Splenectomy for trauma is indicated for:",
    choices: ["All splenic injuries", "Unstable patients", "Stable patients", "Pediatric patients only"],
    correctAnswer: 1
  },
  {
    id: 385,
    question: "Liver injury may require:",
    choices: ["Observation", "Repair", "Resection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 386,
    question: "Pancreatic injury may cause:",
    choices: ["Bleeding", "Fistula", "Pseudocyst", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 387,
    question: "Bowel injury repair depends on:",
    choices: ["Location", "Extent", "Contamination", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 388,
    question: "Vascular injury may require:",
    choices: ["Repair", "Bypass", "Ligation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 389,
    question: "Chest trauma may cause:",
    choices: ["Pneumothorax", "Hemothorax", "Cardiac injury", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 390,
    question: "Pericardiocentesis treats:",
    choices: ["Pneumothorax", "Hemothorax", "Cardiac tamponade", "Pulmonary embolism"],
    correctAnswer: 2
  },
  {
    id: 391,
    question: "Emergency thoracotomy is performed for:",
    choices: ["All chest trauma", "Cardiac arrest", "Massive hemothorax", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 392,
    question: "Head trauma may require:",
    choices: ["Observation", "ICP monitoring", "Craniotomy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 393,
    question: "ICP stands for:",
    choices: ["Intracranial pressure", "Intercranial pressure", "Internal cranial pressure", "Intracerebral pressure"],
    correctAnswer: 0
  },
  {
    id: 394,
    question: "Epidural hematoma is:",
    choices: ["Above dura", "Below dura", "In brain tissue", "In ventricles"],
    correctAnswer: 0
  },
  {
    id: 395,
    question: "Subdural hematoma is:",
    choices: ["Above dura", "Below dura", "In brain tissue", "In ventricles"],
    correctAnswer: 1
  },
  {
    id: 396,
    question: "Burn surgery may involve:",
    choices: ["Debridement", "Grafting", "Reconstruction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 397,
    question: "Burn depth classification includes:",
    choices: ["First degree", "Second degree", "Third degree", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 398,
    question: "Escharotomy relieves:",
    choices: ["Pain", "Compartment syndrome", "Infection", "Scarring"],
    correctAnswer: 1
  },
  {
    id: 399,
    question: "Skin grafts for burns may be:",
    choices: ["Autograft", "Allograft", "Xenograft", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 400,
    question: "Burn reconstruction addresses:",
    choices: ["Function", "Appearance", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 401,
    question: "Transplant surgery requires:",
    choices: ["Donor organ", "Recipient preparation", "Immunosuppression", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 402,
    question: "Organ preservation uses:",
    choices: ["Cold storage", "Machine perfusion", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 403,
    question: "Brain death criteria include:",
    choices: ["Absence of brain function", "Absence of brainstem reflexes", "Apnea test", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 404,
    question: "Living donor transplants include:",
    choices: ["Kidney", "Liver", "Lung", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 405,
    question: "Rejection may be:",
    choices: ["Hyperacute", "Acute", "Chronic", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 406,
    question: "Immunosuppressive drugs include:",
    choices: ["Steroids", "Calcineurin inhibitors", "Antimetabolites", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 407,
    question: "Heart transplant indications include:",
    choices: ["End-stage heart failure", "Cardiomyopathy", "Congenital heart disease", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 408,
    question: "Lung transplant may be:",
    choices: ["Single lung", "Double lung", "Heart-lung", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 409,
    question: "Liver transplant indications include:",
    choices: ["Cirrhosis", "Hepatitis", "Liver cancer", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 410,
    question: "Pancreas transplant treats:",
    choices: ["Type 1 diabetes", "Type 2 diabetes", "Pancreatitis", "Pancreatic cancer"],
    correctAnswer: 0
  },
  {
    id: 411,
    question: "Corneal transplant has:",
    choices: ["High success rate", "Low success rate", "Variable success rate", "No success"],
    correctAnswer: 0
  },
  {
    id: 412,
    question: "Bone marrow transplant treats:",
    choices: ["Leukemia", "Lymphoma", "Aplastic anemia", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 413,
    question: "Autologous transplant uses:",
    choices: ["Patient's own tissue", "Donor tissue", "Artificial material", "Animal tissue"],
    correctAnswer: 0
  },
  {
    id: 414,
    question: "Allogeneic transplant uses:",
    choices: ["Patient's own tissue", "Human donor tissue", "Animal tissue", "Artificial material"],
    correctAnswer: 1
  },
  {
    id: 415,
    question: "Xenograft uses:",
    choices: ["Human tissue", "Animal tissue", "Artificial material", "Patient's tissue"],
    correctAnswer: 1
  },
  {
    id: 416,
    question: "Minimally invasive surgery advantages include:",
    choices: ["Smaller incisions", "Less pain", "Faster recovery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 417,
    question: "Single-port laparoscopy uses:",
    choices: ["One incision", "Two incisions", "Three incisions", "Four incisions"],
    correctAnswer: 0
  },
  {
    id: 418,
    question: "NOTES stands for:",
    choices: ["Natural orifice transluminal endoscopic surgery", "New operative technique endoscopic surgery", "Non-operative therapeutic endoscopic surgery", "Novel orifice transluminal endoscopic surgery"],
    correctAnswer: 0
  },
  {
    id: 419,
    question: "Robotic surgery disadvantages include:",
    choices: ["High cost", "Learning curve", "Equipment size", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 420,
    question: "Telemedicine allows:",
    choices: ["Remote consultation", "Remote surgery", "Remote monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 421,
    question: "Image-guided surgery uses:",
    choices: ["CT", "MRI", "Ultrasound", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 422,
    question: "Navigation systems help with:",
    choices: ["Accuracy", "Safety", "Efficiency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 423,
    question: "Intraoperative imaging includes:",
    choices: ["Fluoroscopy", "Ultrasound", "MRI", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 424,
    question: "3D printing in surgery is used for:",
    choices: ["Surgical planning", "Custom implants", "Surgical guides", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 425,
    question: "Artificial intelligence in surgery helps with:",
    choices: ["Diagnosis", "Planning", "Execution", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 426,
    question: "Augmented reality provides:",
    choices: ["Enhanced visualization", "Real-time guidance", "Training simulation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 427,
    question: "Virtual reality is used for:",
    choices: ["Surgical training", "Patient education", "Surgical planning", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 428,
    question: "Nanotechnology in surgery involves:",
    choices: ["Drug delivery", "Imaging", "Tissue engineering", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 429,
    question: "Gene therapy may treat:",
    choices: ["Cancer", "Genetic disorders", "Infections", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 430,
    question: "Stem cell therapy uses:",
    choices: ["Embryonic stem cells", "Adult stem cells", "Induced pluripotent stem cells", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 431,
    question: "Tissue engineering combines:",
    choices: ["Cells", "Scaffolds", "Growth factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 432,
    question: "Regenerative medicine aims to:",
    choices: ["Repair tissue", "Replace tissue", "Regenerate tissue", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 433,
    question: "Bioprinting can create:",
    choices: ["Tissues", "Organs", "Medical devices", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 434,
    question: "Personalized medicine considers:",
    choices: ["Genetics", "Environment", "Lifestyle", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 435,
    question: "Precision surgery uses:",
    choices: ["Genetic information", "Molecular markers", "Imaging data", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 436,
    question: "Quality improvement in surgery focuses on:",
    choices: ["Safety", "Effectiveness", "Efficiency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 437,
    question: "Surgical checklists improve:",
    choices: ["Communication", "Safety", "Outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 438,
    question: "Time-out procedure verifies:",
    choices: ["Patient identity", "Procedure", "Site", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 439,
    question: "Wrong-site surgery prevention requires:",
    choices: ["Site marking", "Time-out", "Verification", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 441,
    question: "Venous thromboembolism prevention uses:",
    choices: ["Mechanical prophylaxis", "Pharmacologic prophylaxis", "Early mobilization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 442,
    question: "Enhanced recovery protocols include:",
    choices: ["Preoperative optimization", "Intraoperative management", "Postoperative care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 443,
    question: "ERAS stands for:",
    choices: ["Enhanced recovery after surgery", "Early recovery after surgery", "Effective recovery after surgery", "Extended recovery after surgery"],
    correctAnswer: 0
  },
  {
    id: 444,
    question: "Multimodal analgesia uses:",
    choices: ["Multiple drugs", "Multiple routes", "Multiple techniques", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 445,
    question: "Regional anesthesia includes:",
    choices: ["Spinal", "Epidural", "Nerve blocks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 446,
    question: "Patient-controlled analgesia allows:",
    choices: ["Patient control", "Consistent levels", "Reduced side effects", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 447,
    question: "Postoperative nausea prevention uses:",
    choices: ["Antiemetics", "Hydration", "Avoiding triggers", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 448,
    question: "Early mobilization prevents:",
    choices: ["Pneumonia", "DVT", "Muscle weakness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 449,
    question: "Nutritional support may be:",
    choices: ["Enteral", "Parenteral", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 450,
    question: "Wound care includes:",
    choices: ["Cleaning", "Dressing", "Monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 451,
    question: "Surgical education includes:",
    choices: ["Didactic learning", "Simulation", "Clinical experience", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 452,
    question: "Simulation training provides:",
    choices: ["Safe environment", "Repetitive practice", "Objective assessment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 453,
    question: "Competency-based training focuses on:",
    choices: ["Knowledge", "Skills", "Attitudes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 454,
    question: "Continuing education is:",
    choices: ["Optional", "Required", "Recommended", "Variable by specialty"],
    correctAnswer: 1
  },
  {
    id: 455,
    question: "Professional development includes:",
    choices: ["Technical skills", "Leadership skills", "Communication skills", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 456,
    question: "Research in surgery involves:",
    choices: ["Basic science", "Clinical trials", "Outcomes research", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 457,
    question: "Evidence-based medicine uses:",
    choices: ["Best evidence", "Clinical expertise", "Patient values", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 458,
    question: "Clinical trials may be:",
    choices: ["Randomized", "Controlled", "Blinded", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 459,
    question: "Systematic reviews provide:",
    choices: ["Comprehensive analysis", "High-level evidence", "Clinical guidance", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 460,
    question: "Meta-analysis combines:",
    choices: ["Multiple studies", "Statistical methods", "Quantitative results", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 461,
    question: "Surgical innovation requires:",
    choices: ["Scientific rigor", "Ethical oversight", "Patient safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 462,
    question: "Technology assessment evaluates:",
    choices: ["Safety", "Efficacy", "Cost-effectiveness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 463,
    question: "Healthcare economics considers:",
    choices: ["Costs", "Benefits", "Resource allocation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 464,
    question: "Value-based care focuses on:",
    choices: ["Quality", "Outcomes", "Cost", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 465,
    question: "Patient satisfaction includes:",
    choices: ["Communication", "Pain management", "Overall experience", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 466,
    question: "Surgical outcomes include:",
    choices: ["Mortality", "Morbidity", "Quality of life", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 467,
    question: "Risk stratification uses:",
    choices: ["Patient factors", "Procedure factors", "System factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 468,
    question: "Preoperative assessment includes:",
    choices: ["Medical history", "Physical examination", "Diagnostic tests", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 469,
    question: "Cardiac risk assessment uses:",
    choices: ["Clinical predictors", "Functional capacity", "Surgery-specific risk", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 470,
    question: "Pulmonary risk factors include:",
    choices: ["Smoking", "COPD", "Age", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 471,
    question: "Renal function assessment uses:",
    choices: ["Creatinine", "BUN", "GFR", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 472,
    question: "Hepatic function tests include:",
    choices: ["ALT", "AST", "Bilirubin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 473,
    question: "Coagulation studies include:",
    choices: ["PT", "PTT", "INR", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 474,
    question: "Nutritional assessment includes:",
    choices: ["Weight loss", "Albumin", "Prealbumin", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 475,
    question: "Functional status assessment uses:",
    choices: ["Activities of daily living", "Exercise tolerance", "Cognitive function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 476,
    question: "Perioperative management includes:",
    choices: ["Preoperative preparation", "Intraoperative care", "Postoperative monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 477,
    question: "Fluid management considers:",
    choices: ["Preoperative status", "Intraoperative losses", "Postoperative needs", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 478,
    question: "Blood management includes:",
    choices: ["Preoperative optimization", "Intraoperative conservation", "Postoperative monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 479,
    question: "Temperature management prevents:",
    choices: ["Hypothermia", "Hyperthermia", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 480,
    question: "Glucose management is important for:",
    choices: ["Diabetic patients", "Non-diabetic patients", "All patients", "No patients"],
    correctAnswer: 2
  },
  {
    id: 481,
    question: "Surgical site preparation includes:",
    choices: ["Hair removal", "Skin antisepsis", "Draping", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 482,
    question: "Antibiotic prophylaxis timing is:",
    choices: ["Within 1 hour of incision", "At induction", "Both A and B", "After surgery"],
    correctAnswer: 2
  },
  {
    id: 483,
    question: "Surgical positioning considers:",
    choices: ["Surgical access", "Patient safety", "Physiologic function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 484,
    question: "Pressure injury prevention uses:",
    choices: ["Padding", "Positioning", "Monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 485,
    question: "Nerve injury prevention requires:",
    choices: ["Proper positioning", "Adequate padding", "Avoiding stretch", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 486,
    question: "Compartment syndrome prevention includes:",
    choices: ["Proper positioning", "Pressure monitoring", "Time limits", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 487,
    question: "Surgical counts include:",
    choices: ["Sponges", "Instruments", "Needles", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 488,
    question: "Count discrepancies require:",
    choices: ["Search", "X-ray", "Documentation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 489,
    question: "Specimen handling requires:",
    choices: ["Proper labeling", "Appropriate fixation", "Timely transport", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 490,
    question: "Pathology consultation helps with:",
    choices: ["Diagnosis", "Staging", "Treatment planning", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 491,
    question: "Frozen section provides:",
    choices: ["Rapid diagnosis", "Margin assessment", "Surgical guidance", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 492,
    question: "Intraoperative consultation includes:",
    choices: ["Pathology", "Radiology", "Other specialties", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 493,
    question: "Surgical complications may be:",
    choices: ["Intraoperative", "Early postoperative", "Late postoperative", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 494,
    question: "Complication management requires:",
    choices: ["Recognition", "Treatment", "Prevention", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 495,
    question: "Surgical mortality is affected by:",
    choices: ["Patient factors", "Procedure factors", "System factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 496,
    question: "Morbidity includes:",
    choices: ["Complications", "Functional impairment", "Quality of life", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 497,
    question: "Length of stay is affected by:",
    choices: ["Complications", "Patient factors", "System factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 498,
    question: "Readmission may be due to:",
    choices: ["Complications", "Inadequate discharge planning", "Patient factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 499,
    question: "Surgical follow-up includes:",
    choices: ["Wound check", "Complication monitoring", "Functional assessment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 500,
    question: "Long-term outcomes include:",
    choices: ["Survival", "Function", "Quality of life", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 501,
    question: "Surgical training requires:",
    choices: ["Knowledge", "Skills", "Experience", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 502,
    question: "Competency assessment uses:",
    choices: ["Written exams", "Practical exams", "Observation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 503,
    question: "Surgical mentorship provides:",
    choices: ["Guidance", "Support", "Role modeling", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 504,
    question: "Professional development includes:",
    choices: ["Continuing education", "Research", "Leadership", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 505,
    question: "Surgical ethics considers:",
    choices: ["Patient autonomy", "Beneficence", "Justice", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 506,
    question: "Informed consent requires:",
    choices: ["Disclosure", "Understanding", "Voluntariness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 507,
    question: "Confidentiality protects:",
    choices: ["Patient information", "Medical records", "Communications", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 508,
    question: "Professional boundaries maintain:",
    choices: ["Therapeutic relationship", "Patient safety", "Professional integrity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 509,
    question: "Cultural competence includes:",
    choices: ["Awareness", "Knowledge", "Skills", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 510,
    question: "Communication skills include:",
    choices: ["Listening", "Speaking", "Non-verbal", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 511,
    question: "Team-based care requires:",
    choices: ["Collaboration", "Communication", "Coordination", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 512,
    question: "Leadership skills include:",
    choices: ["Vision", "Communication", "Decision-making", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 513,
    question: "Quality improvement uses:",
    choices: ["Data collection", "Analysis", "Implementation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 514,
    question: "Patient safety culture promotes:",
    choices: ["Reporting", "Learning", "Improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 515,
    question: "Risk management identifies:",
    choices: ["Hazards", "Risks", "Solutions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 516,
    question: "Error prevention uses:",
    choices: ["System design", "Training", "Monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 517,
    question: "Incident reporting promotes:",
    choices: ["Learning", "Improvement", "Prevention", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 518,
    question: "Root cause analysis identifies:",
    choices: ["Contributing factors", "System issues", "Solutions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 519,
    question: "Failure mode analysis prevents:",
    choices: ["Errors", "Complications", "Adverse events", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 520,
    question: "High reliability organizations have:",
    choices: ["Safety culture", "System design", "Continuous improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 521,
    question: "Surgical innovation requires:",
    choices: ["Research", "Development", "Testing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 522,
    question: "Technology adoption considers:",
    choices: ["Safety", "Efficacy", "Cost", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 523,
    question: "Future surgery may include:",
    choices: ["Robotics", "AI", "Nanotechnology", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 524,
    question: "Personalized surgery uses:",
    choices: ["Genetics", "Imaging", "Biomarkers", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 525,
    question: "Precision medicine considers:",
    choices: ["Individual variation", "Genetic factors", "Environmental factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 526,
    question: "Regenerative surgery uses:",
    choices: ["Stem cells", "Growth factors", "Scaffolds", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 527,
    question: "Tissue engineering combines:",
    choices: ["Biology", "Engineering", "Medicine", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 528,
    question: "Gene therapy may treat:",
    choices: ["Genetic disorders", "Cancer", "Infections", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 529,
    question: "Immunotherapy uses:",
    choices: ["Immune system", "Antibodies", "Vaccines", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 530,
    question: "Targeted therapy focuses on:",
    choices: ["Specific molecules", "Pathways", "Mechanisms", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 531,
    question: "Biomarkers help with:",
    choices: ["Diagnosis", "Prognosis", "Treatment selection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 532,
    question: "Liquid biopsy detects:",
    choices: ["Circulating tumor cells", "Cell-free DNA", "Exosomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 533,
    question: "Molecular imaging shows:",
    choices: ["Anatomy", "Function", "Molecular processes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 534,
    question: "Theranostics combines:",
    choices: ["Therapy", "Diagnostics", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 535,
    question: "Digital health includes:",
    choices: ["Electronic records", "Telemedicine", "Mobile health", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 536,
    question: "Big data analytics uses:",
    choices: ["Large datasets", "Advanced algorithms", "Machine learning", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 537,
    question: "Artificial intelligence applications include:",
    choices: ["Diagnosis", "Treatment planning", "Surgical guidance", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 538,
    question: "Machine learning uses:",
    choices: ["Algorithms", "Data", "Pattern recognition", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 539,
    question: "Deep learning is a type of:",
    choices: ["Machine learning", "Artificial intelligence", "Neural networks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 540,
    question: "Natural language processing analyzes:",
    choices: ["Text", "Speech", "Language", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 541,
    question: "Computer vision analyzes:",
    choices: ["Images", "Videos", "Visual data", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 542,
    question: "Robotics in surgery provides:",
    choices: ["Precision", "Dexterity", "Visualization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 543,
    question: "Autonomous surgery may involve:",
    choices: ["Planning", "Execution", "Monitoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 544,
    question: "Haptic feedback provides:",
    choices: ["Touch sensation", "Force feedback", "Tactile information", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 545,
    question: "Virtual reality training offers:",
    choices: ["Safe environment", "Repetitive practice", "Objective assessment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 546,
    question: "Augmented reality provides:",
    choices: ["Enhanced visualization", "Real-time guidance", "Information overlay", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 547,
    question: "Mixed reality combines:",
    choices: ["Real world", "Virtual elements", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 548,
    question: "Simulation-based training uses:",
    choices: ["Models", "Simulators", "Virtual reality", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 549,
    question: "Competency-based assessment measures:",
    choices: ["Knowledge", "Skills", "Attitudes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 550,
    question: "Continuous learning requires:",
    choices: ["Motivation", "Resources", "Support", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 551,
    question: "Global surgery addresses:",
    choices: ["Access", "Quality", "Equity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 552,
    question: "Surgical capacity building includes:",
    choices: ["Infrastructure", "Training", "Equipment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 553,
    question: "Humanitarian surgery provides:",
    choices: ["Emergency care", "Capacity building", "Training", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 554,
    question: "Disaster response requires:",
    choices: ["Preparation", "Coordination", "Resources", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 555,
    question: "Mass casualty management uses:",
    choices: ["Triage", "Resource allocation", "Coordination", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 556,
    question: "Surgical missions provide:",
    choices: ["Care", "Training", "Capacity building", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 557,
    question: "Telesurgery enables:",
    choices: ["Remote surgery", "Remote consultation", "Remote training", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 558,
    question: "Mobile surgery units provide:",
    choices: ["Access", "Flexibility", "Cost-effectiveness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 559,
    question: "Point-of-care testing provides:",
    choices: ["Rapid results", "Convenience", "Cost savings", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 560,
    question: "Portable imaging enables:",
    choices: ["Bedside imaging", "Remote imaging", "Emergency imaging", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 561,
    question: "Wearable devices monitor:",
    choices: ["Vital signs", "Activity", "Health parameters", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 562,
    question: "Remote monitoring enables:",
    choices: ["Continuous monitoring", "Early detection", "Timely intervention", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 563,
    question: "Digital therapeutics provide:",
    choices: ["Treatment", "Monitoring", "Support", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 564,
    question: "Precision dosing uses:",
    choices: ["Pharmacokinetics", "Pharmacodynamics", "Individual factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 565,
    question: "Drug delivery systems include:",
    choices: ["Targeted delivery", "Controlled release", "Personalized dosing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 566,
    question: "Nanotechnology applications include:",
    choices: ["Drug delivery", "Imaging", "Diagnostics", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 567,
    question: "Biosensors detect:",
    choices: ["Biomarkers", "Pathogens", "Chemicals", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 568,
    question: "Lab-on-a-chip devices provide:",
    choices: ["Miniaturization", "Integration", "Automation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 569,
    question: "Microfluidics enables:",
    choices: ["Small volumes", "Precise control", "High throughput", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 570,
    question: "Organ-on-a-chip models:",
    choices: ["Human physiology", "Disease states", "Drug responses", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 571,
    question: "3D bioprinting creates:",
    choices: ["Tissues", "Organs", "Models", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 572,
    question: "Bioinks contain:",
    choices: ["Cells", "Biomaterials", "Growth factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 573,
    question: "Scaffold materials include:",
    choices: ["Natural polymers", "Synthetic polymers", "Ceramics", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 574,
    question: "Decellularization removes:",
    choices: ["Cells", "Cellular components", "Antigens", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 575,
    question: "Recellularization adds:",
    choices: ["Cells", "Growth factors", "Nutrients", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 576,
    question: "Organoids are:",
    choices: ["3D cultures", "Organ-like structures", "Disease models", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 577,
    question: "Spheroids are:",
    choices: ["3D cell cultures", "Tumor models", "Drug testing platforms", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 578,
    question: "Bioreactors provide:",
    choices: ["Controlled environment", "Mechanical stimulation", "Nutrient supply", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 579,
    question: "Perfusion systems maintain:",
    choices: ["Nutrient supply", "Waste removal", "Oxygen delivery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 580,
    question: "Cryopreservation preserves:",
    choices: ["Cells", "Tissues", "Organs", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 581,
    question: "Vitrification prevents:",
    choices: ["Ice formation", "Cell damage", "Protein denaturation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 582,
    question: "Hypothermic preservation uses:",
    choices: ["Cold storage", "Perfusion", "Oxygenation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 583,
    question: "Normothermic preservation maintains:",
    choices: ["Body temperature", "Metabolism", "Function", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 584,
    question: "Machine perfusion provides:",
    choices: ["Continuous flow", "Oxygenation", "Nutrient delivery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 585,
    question: "Organ assessment evaluates:",
    choices: ["Viability", "Function", "Quality", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 586,
    question: "Biomarkers of organ quality include:",
    choices: ["Enzymes", "Metabolites", "Proteins", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 587,
    question: "Real-time monitoring tracks:",
    choices: ["Function", "Viability", "Quality", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 588,
    question: "Predictive models use:",
    choices: ["Clinical data", "Biomarkers", "Imaging", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 589,
    question: "Risk stratification identifies:",
    choices: ["High-risk patients", "Complications", "Outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 590,
    question: "Decision support systems provide:",
    choices: ["Recommendations", "Alerts", "Guidelines", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 591,
    question: "Clinical pathways standardize:",
    choices: ["Care processes", "Outcomes", "Resource use", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 592,
    question: "Protocol adherence improves:",
    choices: ["Quality", "Safety", "Outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 593,
    question: "Variation reduction focuses on:",
    choices: ["Processes", "Outcomes", "Costs", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 594,
    question: "Standardization improves:",
    choices: ["Quality", "Efficiency", "Safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 595,
    question: "Best practices are:",
    choices: ["Evidence-based", "Proven effective", "Widely accepted", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 596,
    question: "Benchmarking compares:",
    choices: ["Performance", "Outcomes", "Processes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 597,
    question: "Performance metrics measure:",
    choices: ["Quality", "Safety", "Efficiency", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 598,
    question: "Outcome measures include:",
    choices: ["Clinical outcomes", "Patient satisfaction", "Cost-effectiveness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 599,
    question: "Process measures evaluate:",
    choices: ["Care delivery", "Adherence", "Timeliness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 600,
    question: "Structure measures assess:",
    choices: ["Resources", "Capabilities", "Organization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 601,
    question: "Quality indicators reflect:",
    choices: ["Performance", "Outcomes", "Processes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 602,
    question: "Safety indicators monitor:",
    choices: ["Adverse events", "Near misses", "Hazards", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 603,
    question: "Efficiency measures evaluate:",
    choices: ["Resource use", "Productivity", "Cost-effectiveness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 604,
    question: "Patient experience includes:",
    choices: ["Communication", "Respect", "Involvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 605,
    question: "Patient-centered care focuses on:",
    choices: ["Individual needs", "Preferences", "Values", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 606,
    question: "Shared decision-making involves:",
    choices: ["Information sharing", "Deliberation", "Decision", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 607,
    question: "Patient engagement includes:",
    choices: ["Participation", "Collaboration", "Partnership", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 608,
    question: "Health literacy affects:",
    choices: ["Understanding", "Decision-making", "Outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 609,
    question: "Cultural sensitivity considers:",
    choices: ["Beliefs", "Values", "Practices", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 610,
    question: "Language barriers affect:",
    choices: ["Communication", "Understanding", "Outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 611,
    question: "Interpreter services provide:",
    choices: ["Translation", "Cultural mediation", "Advocacy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 612,
    question: "Health disparities involve:",
    choices: ["Access", "Quality", "Outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 613,
    question: "Health equity promotes:",
    choices: ["Fairness", "Justice", "Equal opportunity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 614,
    question: "Social determinants include:",
    choices: ["Income", "Education", "Environment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 615,
    question: "Population health focuses on:",
    choices: ["Health outcomes", "Health determinants", "Health policies", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 616,
    question: "Public health interventions target:",
    choices: ["Individuals", "Communities", "Populations", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 617,
    question: "Prevention strategies include:",
    choices: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 618,
    question: "Health promotion activities include:",
    choices: ["Education", "Behavior change", "Policy change", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 619,
    question: "Disease prevention focuses on:",
    choices: ["Risk factors", "Early detection", "Treatment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 620,
    question: "Screening programs detect:",
    choices: ["Disease", "Risk factors", "Precancerous conditions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 621,
    question: "Vaccination prevents:",
    choices: ["Infectious diseases", "Complications", "Outbreaks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 623,
    question: "Antimicrobial stewardship promotes:",
    choices: ["Appropriate use", "Resistance prevention", "Patient safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 624,
    question: "Surveillance systems monitor:",
    choices: ["Disease occurrence", "Trends", "Outbreaks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 625,
    question: "Epidemiological investigations identify:",
    choices: ["Sources", "Modes of transmission", "Risk factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 626,
    question: "Outbreak response includes:",
    choices: ["Investigation", "Control measures", "Communication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 627,
    question: "Emergency preparedness involves:",
    choices: ["Planning", "Training", "Resources", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 628,
    question: "Disaster management includes:",
    choices: ["Mitigation", "Preparedness", "Response", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 629,
    question: "Business continuity planning ensures:",
    choices: ["Operations", "Services", "Recovery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 630,
    question: "Risk assessment identifies:",
    choices: ["Hazards", "Vulnerabilities", "Consequences", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 631,
    question: "Risk mitigation reduces:",
    choices: ["Probability", "Impact", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 632,
    question: "Crisis communication provides:",
    choices: ["Information", "Reassurance", "Guidance", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 633,
    question: "Media relations involve:",
    choices: ["Press releases", "Interviews", "Social media", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 634,
    question: "Stakeholder engagement includes:",
    choices: ["Patients", "Families", "Communities", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 635,
    question: "Partnership development involves:",
    choices: ["Collaboration", "Coordination", "Resource sharing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 636,
    question: "Network building creates:",
    choices: ["Connections", "Relationships", "Collaborations", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 637,
    question: "Knowledge sharing promotes:",
    choices: ["Learning", "Innovation", "Improvement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 638,
    question: "Best practice sharing includes:",
    choices: ["Documentation", "Dissemination", "Implementation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 639,
    question: "Innovation diffusion involves:",
    choices: ["Adoption", "Implementation", "Sustainability", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 640,
    question: "Change management includes:",
    choices: ["Planning", "Implementation", "Evaluation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 641,
    question: "Organizational culture affects:",
    choices: ["Behavior", "Performance", "Outcomes", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 642,
    question: "Leadership styles include:",
    choices: ["Transformational", "Transactional", "Servant", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 643,
    question: "Team dynamics involve:",
    choices: ["Communication", "Collaboration", "Conflict resolution", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 644,
    question: "Interprofessional collaboration includes:",
    choices: ["Shared goals", "Mutual respect", "Effective communication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 645,
    question: "Conflict resolution strategies include:",
    choices: ["Negotiation", "Mediation", "Arbitration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 646,
    question: "Performance management includes:",
    choices: ["Goal setting", "Monitoring", "Feedback", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 647,
    question: "Professional development includes:",
    choices: ["Education", "Training", "Mentoring", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 648,
    question: "Career advancement requires:",
    choices: ["Skills", "Experience", "Networking", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 649,
    question: "Work-life balance involves:",
    choices: ["Time management", "Stress management", "Priority setting", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 650,
    question: "Burnout prevention includes:",
    choices: ["Workload management", "Support systems", "Self-care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 651,
    question: "Resilience building involves:",
    choices: ["Coping skills", "Support networks", "Stress management", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 652,
    question: "Wellness programs promote:",
    choices: ["Physical health", "Mental health", "Social well-being", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 653,
    question: "Employee assistance programs provide:",
    choices: ["Counseling", "Support", "Resources", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 654,
    question: "Workplace safety includes:",
    choices: ["Hazard identification", "Risk assessment", "Control measures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 655,
    question: "Occupational health focuses on:",
    choices: ["Prevention", "Treatment", "Rehabilitation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 656,
    question: "Environmental health addresses:",
    choices: ["Air quality", "Water quality", "Chemical exposure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 657,
    question: "Sustainability initiatives include:",
    choices: ["Waste reduction", "Energy conservation", "Green practices", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 658,
    question: "Green surgery practices include:",
    choices: ["Waste reduction", "Energy efficiency", "Sustainable materials", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 659,
    question: "Waste management includes:",
    choices: ["Reduction", "Recycling", "Disposal", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 660,
    question: "Energy conservation measures include:",
    choices: ["Efficient equipment", "Smart systems", "Behavior change", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 661,
    question: "Water conservation includes:",
    choices: ["Efficient fixtures", "Leak detection", "Behavior change", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 662,
    question: "Supply chain sustainability involves:",
    choices: ["Supplier selection", "Product lifecycle", "Environmental impact", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 663,
    question: "Circular economy principles include:",
    choices: ["Reduce", "Reuse", "Recycle", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 664,
    question: "Life cycle assessment evaluates:",
    choices: ["Environmental impact", "Resource use", "Emissions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 665,
    question: "Carbon footprint measures:",
    choices: ["Greenhouse gas emissions", "Energy use", "Transportation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 666,
    question: "Climate change impacts include:",
    choices: ["Health effects", "Environmental changes", "Economic consequences", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 667,
    question: "Adaptation strategies address:",
    choices: ["Current impacts", "Future risks", "Vulnerability", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 668,
    question: "Mitigation strategies reduce:",
    choices: ["Emissions", "Energy use", "Environmental impact", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 669,
    question: "Renewable energy sources include:",
    choices: ["Solar", "Wind", "Hydroelectric", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 670,
    question: "Energy efficiency measures include:",
    choices: ["Insulation", "Efficient equipment", "Smart controls", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 671,
    question: "Transportation sustainability includes:",
    choices: ["Public transit", "Electric vehicles", "Active transportation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 672,
    question: "Building sustainability involves:",
    choices: ["Design", "Construction", "Operations", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 673,
    question: "Green building standards include:",
    choices: ["LEED", "BREEAM", "Energy Star", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 674,
    question: "Indoor environmental quality includes:",
    choices: ["Air quality", "Lighting", "Acoustics", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 675,
    question: "Healthy buildings promote:",
    choices: ["Occupant health", "Productivity", "Well-being", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 676,
    question: "Smart buildings use:",
    choices: ["Sensors", "Automation", "Data analytics", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 677,
    question: "Internet of Things (IoT) enables:",
    choices: ["Connectivity", "Data collection", "Automation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 678,
    question: "Smart cities integrate:",
    choices: ["Technology", "Infrastructure", "Services", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 679,
    question: "Digital transformation involves:",
    choices: ["Technology adoption", "Process change", "Cultural change", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 680,
    question: "Data governance ensures:",
    choices: ["Quality", "Security", "Privacy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 681,
    question: "Cybersecurity protects:",
    choices: ["Data", "Systems", "Networks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 682,
    question: "Privacy protection includes:",
    choices: ["Data minimization", "Consent", "Access controls", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 683,
    question: "Information security involves:",
    choices: ["Confidentiality", "Integrity", "Availability", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 684,
    question: "Risk management includes:",
    choices: ["Identification", "Assessment", "Mitigation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 685,
    question: "Business continuity ensures:",
    choices: ["Operations", "Services", "Recovery", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 686,
    question: "Disaster recovery includes:",
    choices: ["Planning", "Testing", "Implementation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 687,
    question: "Backup strategies include:",
    choices: ["Data backup", "System backup", "Site backup", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 688,
    question: "Cloud computing provides:",
    choices: ["Scalability", "Flexibility", "Cost savings", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 689,
    question: "Edge computing enables:",
    choices: ["Local processing", "Reduced latency", "Real-time response", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 690,
    question: "Quantum computing offers:",
    choices: ["Massive parallelism", "Complex calculations", "Cryptography", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 691,
    question: "Blockchain technology provides:",
    choices: ["Transparency", "Security", "Decentralization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 692,
    question: "Cryptocurrency uses:",
    choices: ["Blockchain", "Cryptography", "Decentralization", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 693,
    question: "Digital identity includes:",
    choices: ["Authentication", "Authorization", "Verification", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 694,
    question: "Biometric authentication uses:",
    choices: ["Fingerprints", "Facial recognition", "Voice recognition", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 695,
    question: "Multi-factor authentication includes:",
    choices: ["Something you know", "Something you have", "Something you are", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 696,
    question: "Zero trust security assumes:",
    choices: ["No implicit trust", "Verify everything", "Least privilege", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 697,
    question: "Threat intelligence provides:",
    choices: ["Information", "Analysis", "Context", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 698,
    question: "Incident response includes:",
    choices: ["Detection", "Analysis", "Containment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 699,
    question: "Forensic analysis examines:",
    choices: ["Evidence", "Artifacts", "Timeline", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 700,
    question: "Compliance management ensures:",
    choices: ["Regulatory adherence", "Policy compliance", "Audit readiness", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 701,
    question: "Audit processes include:",
    choices: ["Planning", "Execution", "Reporting", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 702,
    question: "Regulatory frameworks provide:",
    choices: ["Standards", "Guidelines", "Requirements", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 703,
    question: "Policy development includes:",
    choices: ["Research", "Drafting", "Implementation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 704,
    question: "Procedure documentation includes:",
    choices: ["Steps", "Responsibilities", "Controls", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 705,
    question: "Training programs include:",
    choices: ["Content development", "Delivery", "Assessment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 706,
    question: "Continuous improvement involves:",
    choices: ["Monitoring", "Analysis", "Enhancement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 707,
    question: "What is the appendicular skeleton composed of?",
    choices: ["Skull and ribcage", "Vertebrae and sacrum", "Limbs", "Sternum"],
    correctAnswer: 2
  },
  {
    id: 708,
    question: "What type of bones make up the skull?",
    choices: ["Long bones", "Flat bones", "Short bones", "Irregular bones"],
    correctAnswer: 1
  },
  {
    id: 709,
    question: "Which of the following are irregular bones?",
    choices: ["Femur", "Vertebrae", "Radius", "Sternum"],
    correctAnswer: 1
  },
  {
    id: 710,
    question: "Which ribs are considered true ribs?",
    choices: ["8–10", "11–12", "1–7", "9–12"],
    correctAnswer: 2
  },
  {
    id: 711,
    question: "The manubrium is a part of which bone?",
    choices: ["Pelvis", "Sternum", "Scapula", "Skull"],
    correctAnswer: 1
  },
  {
    id: 712,
    question: "What is the shaft of a long bone called?",
    choices: ["Epiphysis", "Diaphysis", "Medulla", "Periosteum"],
    correctAnswer: 1
  },
  {
    id: 713,
    question: "Which type of bone is the patella?",
    choices: ["Short", "Flat", "Irregular", "Long"],
    correctAnswer: 1
  },
  {
    id: 714,
    question: "What is the primary function of red bone marrow?",
    choices: ["Fat storage", "Hormone production", "Blood cell production", "Bone resorption"],
    correctAnswer: 2
  },
  {
    id: 715,
    question: "A tumor of the plasma cells of bone marrow is called:",
    choices: ["Osteosarcoma", "Myeloma", "Chondroma", "Osteoma"],
    correctAnswer: 1
  },
  {
    id: 716,
    question: "The outer layer of hard connective tissue of bone is called:",
    choices: ["Cancellous bone", "Bone marrow", "Cortical bone", "Periosteum"],
    correctAnswer: 2
  },
  {
    id: 717,
    question: "The four stages of bone healing begin with:",
    choices: ["Callus formation", "Calcification", "Hematoma formation", "Remodeling"],
    correctAnswer: 2
  },
  {
    id: 718,
    question: "What type of tissue covers joint surfaces to allow smooth movement?",
    choices: ["Periosteum", "Ligament", "Cartilage", "Tendon"],
    correctAnswer: 2
  },
  {
    id: 719,
    question: "Which of the following is a benign cartilage tumor?",
    choices: ["Osteosarcoma", "Chondroma", "Myeloma", "Osteoma"],
    correctAnswer: 1
  },
  {
    id: 720,
    question: "Which type of muscle is voluntary?",
    choices: ["Smooth", "Striated", "Cardiac", "Involuntary"],
    correctAnswer: 1
  },
  {
    id: 721,
    question: "What do ligaments attach?",
    choices: ["Muscle to bone", "Bone to bone", "Cartilage to bone", "Muscle to cartilage"],
    correctAnswer: 1
  },
  {
    id: 722,
    question: "What is the function of tendons?",
    choices: ["Connect bone to bone", "Connect muscle to bone", "Cushion joints", "Secrete synovial fluid"],
    correctAnswer: 1
  },
  {
    id: 723,
    question: "A joint that allows no movement is called:",
    choices: ["Amphiarthrotic", "Diarthrotic", "Synarthrotic", "Synovial"],
    correctAnswer: 2
  },
  {
    id: 724,
    question: "Which joint type allows the widest range of motion?",
    choices: ["Hinge", "Ball and socket", "Pivot", "Gliding"],
    correctAnswer: 1
  },
  {
    id: 725,
    question: "What is an example of a condyloid joint?",
    choices: ["Shoulder", "Elbow", "Temporomandibular joint", "Hip"],
    correctAnswer: 2
  },
  {
    id: 726,
    question: "A hinge joint is best exemplified by the:",
    choices: ["Hip", "Shoulder", "Elbow", "Wrist"],
    correctAnswer: 2
  },
  {
    id: 727,
    question: "Turning the sole of the foot inward is called:",
    choices: ["Eversion", "Inversion", "Plantar flexion", "Dorsiflexion"],
    correctAnswer: 1
  },
  {
    id: 728,
    question: "Moving a limb away from the midline of the body is called:",
    choices: ["Adduction", "Abduction", "Flexion", "Extension"],
    correctAnswer: 1
  },
  {
    id: 729,
    question: "An autoimmune disease that causes joint inflammation and stiffness is:",
    choices: ["Osteoarthritis", "Rheumatoid arthritis", "Osteomyelitis", "Chondroma"],
    correctAnswer: 1
  },
  {
    id: 730,
    question: "Which diagnostic test records electrical activity of muscle?",
    choices: ["MRI", "Arthrogram", "CT scan", "Electromyography"],
    correctAnswer: 3
  },
  {
    id: 731,
    question: "What type of fracture does not puncture the skin?",
    choices: ["Open", "Simple", "Compound", "Comminuted"],
    correctAnswer: 1
  },
  {
    id: 732,
    question: "A fracture where the bone bends on one side and breaks on the other is:",
    choices: ["Oblique", "Greenstick", "Transverse", "Impacted"],
    correctAnswer: 1
  },
  {
    id: 733,
    question: "A fracture where the bone breaks into several pieces is called:",
    choices: ["Displaced", "Comminuted", "Oblique", "Transverse"],
    correctAnswer: 1
  },
  {
    id: 734,
    question: "A Colles' fracture involves which bone?",
    choices: ["Tibia", "Femur", "Radius", "Fibula"],
    correctAnswer: 2
  },
  {
    id: 735,
    question: "Which type of fracture is caused by disease that weakens the bone?",
    choices: ["Pathologic", "Greenstick", "Impacted", "Oblique"],
    correctAnswer: 0
  },
  {
    id: 736,
    question: "A partial dislocation is known as:",
    choices: ["Dislocation", "Subluxation", "Impaction", "Avulsion"],
    correctAnswer: 1
  },
  {
    id: 737,
    question: "Which table is used for spine surgery?",
    choices: ["Fracture table", "Andrews table", "Jackson table", "Alvarado table"],
    correctAnswer: 1
  },
  {
    id: 738,
    question: "Traction applied directly to bone using pins is called:",
    choices: ["Manual traction", "Skeletal traction", "Skin traction", "Elastic traction"],
    correctAnswer: 1
  },
  {
    id: 739,
    question: "Which material is commonly used for casting?",
    choices: ["Bone cement", "Fiberglass", "Silicone", "Nylon"],
    correctAnswer: 0
  },
  {
    id: 740,
    question: "Which of the following is a complication of bone healing?",
    choices: ["Delayed union", "Callus formation", "Calcification", "Remodeling"],
    correctAnswer: 2
  },
  {
    id: 741,
    question: "A disease of decreased bone density leading to brittle bones is:",
    choices: ["Osteomalacia", "Osteogenesis imperfecta", "Osteoporosis", "Osteoarthritis"],
    correctAnswer: 0
  },
  {
    id: 742,
    question: "Bone cement is also known as:",
    choices: ["PMMA", "PVC", "Fiberglass", "Epoxy"],
    correctAnswer: 2
  },
  {
    id: 743,
    question: "Which type of bone graft is taken from the patient?",
    choices: ["Allograft", "Xenograft", "Autograft", "Synthetic"],
    correctAnswer: 1
  },
  {
    id: 744,
    question: "What suture material is commonly used for tendon-to-bone?",
    choices: ["Silk", "Polyester (Ethibond)", "Vicryl", "Chromic"],
    correctAnswer: 0
  },
  {
    id: 745,
    question: "Which hemostatic agent is made of absorbable gelatin?",
    choices: ["Bone wax", "Gelfoam", "Thrombin", "PMMA"],
    correctAnswer: 2
  },
  {
    id: 746,
    question: "Which position may interfere with chest expansion if improperly performed?",
    choices: ["Lateral", "Supine", "Prone", "Lithotomy"],
    correctAnswer: 2
  },
  {
    id: 747,
    question: "A genetic disorder causing brittle bones is:",
    choices: ["Osteomyelitis", "Osteomalacia", "Osteogenesis imperfecta", "Osteoarthritis"],
    correctAnswer: 2
  },
  {
    id: 748,
    question: "Which of the following is a metabolic disease causing soft bones?",
    choices: ["Osteoporosis", "Osteomalacia", "Osteonecrosis", "Osteoarthritis"],
    correctAnswer: 1
  },
  {
    id: 749,
    question: "A compartment syndrome results in:",
    choices: ["Bone infection", "Increased pressure in fascial compartments", "Loss of calcium", "Bone necrosis"],
    correctAnswer: 1
  },
  {
    id: 750,
    question: "What table provides skeletal traction for fractures?",
    choices: ["Fracture table", "Jackson table", "Andrews table", "Alvarado table"],
    correctAnswer: 0
  },
  {
    id: 751,
    question: "Which antibiotic is commonly used for irrigation?",
    choices: ["Erythromycin", "Bacitracin", "Amoxicillin", "Ciprofloxacin"],
    correctAnswer: 1
  },
  {
    id: 752,
    question: "Which laser is used in arthroscopies?",
    choices: ["Nd:YAG", "CO₂", "Excimer", "Argon"],
    correctAnswer: 1
  },
  {
    id: 753,
    question: "What is the purpose of bone grafts?",
    choices: ["To increase bone length", "To promote healing of fractures", "To lubricate joints", "To remove diseased bone"],
    correctAnswer: 0
  },
  {
    id: 754,
    question: "What is the preferred first step to repair a fracture?",
    choices: ["Open reduction", "Closed reduction", "Casting", "Bone grafting"],
    correctAnswer: 1
  },
  {
    id: 755,
    question: "Which laser is used in arthroscopies?",
    choices: ["Nd:YAG", "CO₂", "Excimer", "Argon"],
    correctAnswer: 1
  },
  {
    id: 756,
    question: "What is the preferred first step to repair a fracture?",
    choices: ["Open reduction", "Closed reduction", "Casting", "Bone grafting"],
    correctAnswer: 1
  },
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
    correctAnswer: 3
  },
  {
    id: 780,
    question: "Which diagnostic test records electrical activity of muscle?",
    choices: ["MRI", "Arthrogram", "CT scan", "Electromyography"],
    correctAnswer: 1
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
    correctAnswer: 2
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
    correctAnswer: 1
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
    correctAnswer: 0
  },
  {
    id: 790,
    question: "Which of the following is a complication of bone healing?",
    choices: ["Delayed union", "Callus formation", "Calcification", "Remodeling"],
    correctAnswer: 2
  },
  {
    id: 791,
    question: "A disease of decreased bone density leading to brittle bones is:",
    choices: ["Osteomalacia", "Osteogenesis imperfecta", "Osteoporosis", "Osteoarthritis"],
    correctAnswer: 0
  },
  {
    id: 792,
    question: "Bone cement is also known as:",
    choices: ["PMMA", "PVC", "Fiberglass", "Epoxy"],
    correctAnswer: 2
  },
  {
    id: 793,
    question: "Which type of bone graft is taken from the patient?",
    choices: ["Allograft", "Xenograft", "Autograft", "Synthetic"],
    correctAnswer: 1
  },
  {
    id: 794,
    question: "What suture material is commonly used for tendon-to-bone?",
    choices: ["Silk", "Polyester (Ethibond)", "Vicryl", "Chromic"],
    correctAnswer: 0
  },
  {
    id: 795,
    question: "Which hemostatic agent is made of absorbable gelatin?",
    choices: ["Bone wax", "Gelfoam", "Thrombin", "PMMA"],
    correctAnswer: 2
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
    correctAnswer: 1
  },
  {
    id: 798,
    question: "Which of the following is a metabolic disease causing soft bones?",
    choices: ["Osteoporosis", "Osteomalacia", "Osteonecrosis", "Osteoarthritis"],
    correctAnswer: 2
  },
  {
    id: 799,
    question: "A compartment syndrome results in:",
    choices: ["Bone infection", "Increased pressure in fascial compartments", "Loss of calcium", "Bone necrosis"],
    correctAnswer: 2
  },
  {
    id: 800,
    question: "What table provides skeletal traction for fractures?",
    choices: ["Fracture table", "Jackson table", "Andrews table", "Alvarado table"],
    correctAnswer: 1
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
    question: "Which laser is used in arthroscopies?",
    choices: ["Nd:YAG", "CO₂", "Excimer", "Argon"],
    correctAnswer: 1
  },
  {
    id: 806,
    question: "What is the preferred first step to repair a fracture?",
    choices: ["Open reduction", "Closed reduction", "Casting", "Bone grafting"],
    correctAnswer: 1
  },
  {
    id: 807,
    question: "What does the axial skeleton consist of?",
    choices: ["Limbs and girdles", "Skull, ribcage, and vertebrae", "Upper and lower extremities", "Pelvic and pectoral girdles"],
    correctAnswer: 1
  },
  {
    id: 808,
    question: "Which bones are classified as long bones?",
    choices: ["Vertebrae", "Sternum", "Femur and humerus", "Carpals"],
    correctAnswer: 2
  },
  {
    id: 809,
    question: "What type of joint is immovable, like the suture lines in the cranium?",
    choices: ["Amphiarthrotic", "Synarthrotic", "Diarthrotic", "Hinge"],
    correctAnswer: 1
  },
  {
    id: 810,
    question: "What are the true ribs?",
    choices: ["Ribs 8–10", "Ribs 11–12", "Ribs 1–7", "Ribs 6–12"],
    correctAnswer: 2
  },
  {
    id: 811,
    question: "What is the name of the outer hard layer of bone?",
    choices: ["Cancellous bone", "Periosteum", "Compact bone", "Marrow"],
    correctAnswer: 2
  },
  {
    id: 812,
    question: "What is the term for the shaft of a long bone?",
    choices: ["Epiphysis", "Metaphysis", "Diaphysis", "Periosteum"],
    correctAnswer: 2
  },
  {
    id: 813,
    question: "What type of bone is the scapula?",
    choices: ["Long", "Flat", "Short", "Irregular"],
    correctAnswer: 1
  },
  {
    id: 814,
    question: "Which structure connects muscle to bone?",
    choices: ["Ligament", "Tendon", "Cartilage", "Joint capsule"],
    correctAnswer: 1
  },
  {
    id: 815,
    question: "What is the most common benign cartilage tumor?",
    choices: ["Chondroma", "Osteoma", "Ewing sarcoma", "Osteogenic sarcoma"],
    correctAnswer: 0
  },
  {
    id: 816,
    question: "What is the first step of bone healing?",
    choices: ["Remodeling", "Callus formation", "Hematoma formation", "Calcification"],
    correctAnswer: 2
  },
  {
    id: 817,
    question: "What type of fracture is incomplete and common in children?",
    choices: ["Comminuted", "Greenstick", "Transverse", "Impacted"],
    correctAnswer: 1
  },
  {
    id: 818,
    question: "Which rib classification applies to ribs 11 and 12?",
    choices: ["True ribs", "False ribs", "Floating ribs", "Hinged ribs"],
    correctAnswer: 2
  },
  {
    id: 819,
    question: "What type of muscle is voluntary?",
    choices: ["Smooth", "Cardiac", "Striated", "Involuntary"],
    correctAnswer: 2
  },
  {
    id: 820,
    question: "What is the function of synovial fluid?",
    choices: ["Nourishes bone marrow", "Strengthens tendons", "Lubricates joints", "Forms ligaments"],
    correctAnswer: 2
  },
  {
    id: 821,
    question: "What type of joint allows the widest range of motion?",
    choices: ["Hinge", "Pivot", "Ball and socket", "Saddle"],
    correctAnswer: 2
  },
  {
    id: 822,
    question: "Which joint is an example of a hinge joint?",
    choices: ["Shoulder", "Elbow", "Hip", "Wrist"],
    correctAnswer: 1
  },
  {
    id: 823,
    question: "What is a Colles' fracture?",
    choices: ["Tibial plateau fracture", "Distal radius fracture", "Fibula fracture", "Femoral neck fracture"],
    correctAnswer: 1
  },
  {
    id: 824,
    question: "Which test records electrical activity of muscle?",
    choices: ["Arthrogram", "MRI", "Electromyography", "CT scan"],
    correctAnswer: 2
  },
  {
    id: 825,
    question: "What is compartment syndrome?",
    choices: ["Joint inflammation", "Bone infection", "Increased pressure in muscle compartments", "Ligament tear"],
    correctAnswer: 2
  },
  {
    id: 826,
    question: "What type of bone marrow forms red blood cells?",
    choices: ["Yellow", "White", "Red", "Compact"],
    correctAnswer: 2
  },
  {
    id: 827,
    question: "What are the names of the three parts of the sternum?",
    choices: ["Ilium, ischium, pubis", "Manubrium, body, xiphoid", "Epiphysis, metaphysis, diaphysis", "Radius, ulna, humerus"],
    correctAnswer: 1
  },
  {
    id: 828,
    question: "Which of these is a malignant bone tumor of plasma cells?",
    choices: ["Osteoma", "Osteogenic sarcoma", "Plasma cell myeloma", "Giant cell tumor"],
    correctAnswer: 2
  },
  {
    id: 829,
    question: "Which fracture results in the bone protruding through the skin?",
    choices: ["Closed", "Compound", "Greenstick", "Stellate"],
    correctAnswer: 1
  },
  {
    id: 830,
    question: "What position is often used for shoulder surgery?",
    choices: ["Supine", "Beach chair", "Lateral", "Prone"],
    correctAnswer: 2
  },
  {
    id: 831,
    question: "What are the four rotator cuff muscles?",
    choices: ["Biceps, triceps, deltoid, pectoralis", "Iliacus, gluteus, sartorius, psoas", "Supraspinatus, infraspinatus, subscapularis, teres minor", "Rectus, vastus, gracilis, sartorius"],
    correctAnswer: 2
  },
  {
    id: 832,
    question: "What is the most common site of carpal fracture?",
    choices: ["Lunate", "Pisiform", "Scaphoid", "Trapezium"],
    correctAnswer: 2
  },
  {
    id: 833,
    question: "What is the name of the socket in the hip bone?",
    choices: ["Glenoid", "Acetabulum", "Foramen", "Fossa"],
    correctAnswer: 1
  },
  {
    id: 834,
    question: "What is a hemiarthroplasty?",
    choices: ["Total hip replacement", "Knee fusion", "Shoulder arthroscopy", "Replacement of only femoral head"],
    correctAnswer: 3
  },
  {
    id: 835,
    question: "Which prosthesis type has a swiveling head?",
    choices: ["Unipolar", "Bipolar", "Tripolar", "Tricompartmental"],
    correctAnswer: 1
  },
  {
    id: 836,
    question: "What type of saw blade moves back and forth in line with the handle?",
    choices: ["Sagittal", "Oscillating", "Reciprocating", "Circular"],
    correctAnswer: 2
  },
  {
    id: 837,
    question: "What does the ACL prevent?",
    choices: ["Tibia from sliding backward", "Fibula from rotating", "Tibia from sliding too far forward", "Femur from rotating"],
    correctAnswer: 1
  },
  {
    id: 838,
    question: "What is the treatment for a Baker's cyst?",
    choices: ["Antibiotics", "Casting", "Drainage and ice", "ORIF"],
    correctAnswer: 1
  },
  {
    id: 839,
    question: "What three joints are fused in a triple arthrodesis?",
    choices: ["Glenohumeral, acromioclavicular, sternoclavicular", "Talocalcaneal, talonavicular, calcaneocuboid", "Radioulnar, radiocarpal, intercarpal", "Hip, knee, ankle"],
    correctAnswer: 1
  },
  {
    id: 840,
    question: "What is hallux valgus?",
    choices: ["Big toe points laterally", "Big toe points medially", "Flat foot", "Claw toes"],
    correctAnswer: 0
  },
  {
    id: 841,
    question: "What is the most common meniscal tear?",
    choices: ["Radial", "Bucket handle", "Oblique", "Horizontal"],
    correctAnswer: 2
  },
  {
    id: 842,
    question: "What instrument inflates the knee during arthroscopy?",
    choices: ["Hibbs retractor", "Rasp", "Ringer's lactate", "Townley caliper"],
    correctAnswer: 2
  },
  {
    id: 843,
    question: "Which ligament keeps the tibia from sliding too far back?",
    choices: ["ACL", "PCL", "MCL", "LCL"],
    correctAnswer: 1
  },
  {
    id: 844,
    question: "What is genu varum?",
    choices: ["Knock-kneed", "Bow-legged", "Flat-footed", "Clubfoot"],
    correctAnswer: 1
  },
  {
    id: 845,
    question: "What is osteomyelitis?",
    choices: ["Cartilage tumor", "Bone infection", "Bone fracture", "Bone cancer"],
    correctAnswer: 1
  },
  {
    id: 846,
    question: "What type of fracture is caused by a disease weakening bone?",
    choices: ["Stellate", "Pathologic", "Impacted", "Avulsion"],
    correctAnswer: 1
  },
  {
    id: 847,
    question: "What is a ganglion cyst?",
    choices: ["Bone tumor", "Joint dislocation", "Fluid-filled sac", "Fracture of the foot"],
    correctAnswer: 2
  },
  {
    id: 848,
    question: "What is used to create a bloodless field in hand surgery?",
    choices: ["Webril", "Esmarch", "PMMA", "Bone wax"],
    correctAnswer: 1
  },
  {
    id: 849,
    question: "What is PMMA used for?",
    choices: ["Bone graft", "Bone cement", "Joint lubricant", "Hemostatic agent"],
    correctAnswer: 1
  },
  {
    id: 850,
    question: "What is the common autograft site for bone grafting?",
    choices: ["Femur", "Radius", "Iliac crest", "Scapula"],
    correctAnswer: 2
  },
  {
    id: 851,
    question: "What is the function of cartilage?",
    choices: ["Stores calcium", "Produces blood cells", "Smooth joint surface", "Forms tendons"],
    correctAnswer: 2
  },
  {
    id: 852,
    question: "What fracture involves both malleoli of the ankle?",
    choices: ["Trimalleolar", "Pott's", "Colles'", "Stellate"],
    correctAnswer: 1
  },
  {
    id: 853,
    question: "What is a common complication of radial head excision?",
    choices: ["Loss of knee stability", "Loss of elbow rotation", "Bone infection", "Shoulder dislocation"],
    correctAnswer: 1
  },
  {
    id: 854,
    question: "What is arthrodesis?",
    choices: ["Joint repair", "Joint fusion", "Bone grafting", "Joint replacement"],
    correctAnswer: 1
  },
  {
    id: 855,
    question: "What is the most common indication for total shoulder replacement?",
    choices: ["Tumor", "Trauma", "Arthritis and pain", "Muscle tear"],
    correctAnswer: 2
  },
  {
    id: 856,
    question: "What is the age range for a neonate?",
    choices: ["Birth to 1 month", "1–18 months", "6–12 years", "13–18 years"],
    correctAnswer: 0
  },
  {
    id: 857,
    question: "Which of the following is a major fear of pediatric patients in surgery?",
    choices: ["Pain management", "Separation from parents", "Radiation exposure", "Weight gain"],
    correctAnswer: 1
  },
  {
    id: 858,
    question: "What is the best way to reduce a child's anxiety about surgery?",
    choices: ["Keep parents outside the operating room", "Avoid telling the child about the surgery", "Let them bring a toy or stuffed animal", "Sedate the child before arrival"],
    correctAnswer: 2
  },
  {
    id: 859,
    question: "Pediatric patients are between the ages of:",
    choices: ["Birth to 12 years", "Birth to 18 years", "1 month to 18 years", "1 year to 12 years"],
    correctAnswer: 1
  },
  {
    id: 860,
    question: "The transfer of heat between the body and objects not in direct contact is called:",
    choices: ["Conduction", "Convection", "Radiation", "Evaporation"],
    correctAnswer: 2
  },
  {
    id: 861,
    question: "When an infant's wet skin is exposed to air and heat is lost, this is:",
    choices: ["Conduction", "Evaporation", "Convection", "Radiation"],
    correctAnswer: 1
  },
  {
    id: 862,
    question: "Heat loss due to direct contact with a cold surface is called:",
    choices: ["Conduction", "Evaporation", "Convection", "Radiation"],
    correctAnswer: 0
  },
  {
    id: 863,
    question: "Heat loss caused by cool air moving around an infant is:",
    choices: ["Conduction", "Evaporation", "Convection", "Radiation"],
    correctAnswer: 2
  },
  {
    id: 864,
    question: "An infant is considered hypothermic when their temperature falls below:",
    choices: ["35°C/95°F", "36.5°C/97.7°F", "37.5°C/99.5°F", "38°C/100.4°F"],
    correctAnswer: 1
  },
  {
    id: 865,
    question: "Which artery is used for intra-arterial monitoring in neonates?",
    choices: ["Radial", "Carotid", "Umbilical", "Femoral"],
    correctAnswer: 2
  },
  {
    id: 866,
    question: "The pyloromyotomy procedure treats:",
    choices: ["Intestinal atresia", "Hirschsprung's disease", "Pyloric stenosis", "Tracheoesophageal fistula"],
    correctAnswer: 2
  },
  {
    id: 867,
    question: "Which of the following is performed for gastroesophageal reflux in infants?",
    choices: ["Fundoplication", "Myotomy", "Gastrostomy", "Herniorrhaphy"],
    correctAnswer: 0
  },
  {
    id: 868,
    question: "Which congenital defect involves a funnel-shaped chest?",
    choices: ["Omphalocele", "Pectus excavatum", "Spina bifida", "Imperforate anus"],
    correctAnswer: 1
  },
  {
    id: 869,
    question: "Which is a fatal blood disorder in infants due to Rh incompatibility?",
    choices: ["Anemia", "Leukemia", "Erythroblastosis fetalis", "Thalassemia"],
    correctAnswer: 2
  },
  {
    id: 870,
    question: "A congenital defect where the esophagus is closed off is:",
    choices: ["Tracheoesophageal fistula", "Esophageal atresia", "Omphalocele", "Myelomeningocele"],
    correctAnswer: 1
  },
  {
    id: 871,
    question: "The most common hernia in infants is:",
    choices: ["Femoral", "Inguinal", "Umbilical", "Hiatal"],
    correctAnswer: 2
  },
  {
    id: 872,
    question: "Spina bifida with exposure of meninges and spinal cord is:",
    choices: ["Omphalocele", "Myelomeningocele", "Imperforate anus", "Apert syndrome"],
    correctAnswer: 1
  },
  {
    id: 873,
    question: "What BMI threshold with life-threatening conditions warrants bariatric surgery in children?",
    choices: ["30", "35", "40", "45"],
    correctAnswer: 2
  },
  {
    id: 874,
    question: "A cleft palate is a defect of:",
    choices: ["Nose cartilage", "Roof of the mouth", "Lip skin", "Cheek muscle"],
    correctAnswer: 1
  },
  {
    id: 875,
    question: "Wilms tumor is also known as:",
    choices: ["Neuroblastoma", "Nephroblastoma", "Retinoblastoma", "Hepatoblastoma"],
    correctAnswer: 1
  },
  {
    id: 876,
    question: "Which tumor commonly arises in the adrenal medulla in children?",
    choices: ["Wilms tumor", "Neuroblastoma", "Sacrococcygeal teratoma", "Erythroblastosis fetalis"],
    correctAnswer: 1
  },
  {
    id: 877,
    question: "An abnormal fluid collection in the scrotum is called:",
    choices: ["Cryptorchidism", "Hydrocele", "Varicocele", "Orchitis"],
    correctAnswer: 1
  },
  {
    id: 878,
    question: "Repair of an undescended testicle is called:",
    choices: ["Orchiectomy", "Orchiopexy", "Hydrocelectomy", "Varicocelectomy"],
    correctAnswer: 1
  },
  {
    id: 879,
    question: "A shunt from brain ventricle to peritoneum treats:",
    choices: ["Spina bifida", "Hydrocephalus", "Pectus excavatum", "Tetralogy of Fallot"],
    correctAnswer: 1
  },
  {
    id: 880,
    question: "The most common cause of pediatric head trauma is:",
    choices: ["Abuse", "Falls and accidents", "Cancer", "Shunts"],
    correctAnswer: 1
  },
  {
    id: 881,
    question: "Which congenital heart defect involves a hole between the atria?",
    choices: ["Tetralogy of Fallot", "Patent ductus arteriosus", "Ventricular septal defect", "Atrial septal defect"],
    correctAnswer: 3
  },
  {
    id: 882,
    question: "Tetralogy of Fallot includes all except:",
    choices: ["Pulmonary stenosis", "Right ventricular hypertrophy", "Atrial septal defect", "Dextroposition of the aorta"],
    correctAnswer: 2
  },
  {
    id: 883,
    question: "Failure of the ductus arteriosus to close at birth is called:",
    choices: ["Atrial septal defect", "Patent ductus arteriosus", "Tetralogy of Fallot", "Ventricular septal defect"],
    correctAnswer: 1
  },
  {
    id: 884,
    question: "Pediatric medications are dosed based on:",
    choices: ["Age in months", "Weight in kilograms", "Height in centimeters", "Body surface area"],
    correctAnswer: 1
  },
  {
    id: 885,
    question: "Fetal surgery can be performed:",
    choices: ["After birth only", "While fetus is in uterus", "Only on neonates", "Only on premature infants"],
    correctAnswer: 1
  },
  {
    id: 886,
    question: "Craniosynostosis repair involves:",
    choices: ["Craniectomy", "Burr hole", "Shunt placement", "Skull grafting"],
    correctAnswer: 0
  },
  {
    id: 887,
    question: "Crouzon's disease includes:",
    choices: ["Spinal cord defect", "Premature cranial suture closure", "Clubfoot deformity", "Omphalocele"],
    correctAnswer: 1
  },
  {
    id: 888,
    question: "Apert syndrome is associated with:",
    choices: ["Syndactyly", "Hydrocephalus", "Pyloric stenosis", "Neuroblastoma"],
    correctAnswer: 0
  },
  {
    id: 889,
    question: "A congenital deformity where the foot rotates inward is called:",
    choices: ["Genu varum", "Clubfoot", "Hallux valgus", "Talipes valgus"],
    correctAnswer: 1
  },
  {
    id: 890,
    question: "Tendon lengthening is performed to treat:",
    choices: ["Pectus excavatum", "Cleft lip", "Clubfoot and cerebral palsy", "Omphalocele"],
    correctAnswer: 2
  },
  {
    id: 891,
    question: "Otoplasty is performed to correct:",
    choices: ["Hydrocephalus", "Protruding ears", "Syndactyly", "Apert syndrome"],
    correctAnswer: 1
  },
  {
    id: 892,
    question: "Microtia refers to:",
    choices: ["Absent or small ears", "Small jaw", "Small hands", "Small feet"],
    correctAnswer: 0
  },
  {
    id: 893,
    question: "Children are at increased risk of airway obstruction during:",
    choices: ["Intubation", "Extubation", "Surgery", "Recovery"],
    correctAnswer: 2
  },
  {
    id: 894,
    question: "Shaken baby syndrome is a type of:",
    choices: ["Accidental trauma", "Birth injury", "Child abuse", "Head defect"],
    correctAnswer: 2
  },
  {
    id: 895,
    question: "A Z-plasty is often used to repair:",
    choices: ["Cleft lip", "Clubfoot", "Syndactyly", "Spina bifida"],
    correctAnswer: 0
  },
  {
    id: 896,
    question: "Hypovolemic shock in children is often caused by:",
    choices: ["Sepsis", "Dehydration", "Blood loss", "Heart failure"],
    correctAnswer: 2
  },
  {
    id: 897,
    question: "Septic shock is commonly caused by:",
    choices: ["Viral infection", "Dehydration", "Bacterial infection", "Trauma"],
    correctAnswer: 2
  },
  {
    id: 898,
    question: "The most common feeding tube used in children is:",
    choices: ["Nasogastric tube", "PEG tube", "T-tube", "J-tube"],
    correctAnswer: 0
  },
  {
    id: 899,
    question: "Which congenital defect causes intestines to twist?",
    choices: ["Intussusception", "Volvulus", "Omphalocele", "Hirschsprung's disease"],
    correctAnswer: 1
  },
  {
    id: 900,
    question: "Which congenital defect is due to absence of ganglion cells?",
    choices: ["Intussusception", "Hirschsprung's disease", "Volvulus", "Myelomeningocele"],
    correctAnswer: 1
  },
  {
    id: 901,
    question: "Which congenital defect causes telescoping of the bowel?",
    choices: ["Intussusception", "Volvulus", "Hirschsprung's disease", "Pyloric stenosis"],
    correctAnswer: 0
  },
  {
    id: 902,
    question: "What is the treatment for pyloric stenosis?",
    choices: ["Fundoplication", "Pyloromyotomy", "Gastrostomy", "Colostomy"],
    correctAnswer: 1
  },
  {
    id: 903,
    question: "Which imaging study is best for diagnosing pyloric stenosis?",
    choices: ["CT scan", "Ultrasound", "MRI", "X-ray"],
    correctAnswer: 1
  },
  {
    id: 904,
    question: "What is the most common age for pyloric stenosis?",
    choices: ["Newborn", "2-8 weeks", "6 months", "1 year"],
    correctAnswer: 1
  },
  {
    id: 905,
    question: "Which gender is more commonly affected by pyloric stenosis?",
    choices: ["Female", "Male", "Equal", "Depends on race"],
    correctAnswer: 1
  },
  {
    id: 906,
    question: "What is the main concern with laser plume during surgery?",
    choices: ["Electrical burns", "Cancer-causing fumes", "Cells in the smoke", "High temperatures"],
    correctAnswer: 2
  },
  {
    id: 907,
    question: "Which type of filter should be used with suction for laser plume?",
    choices: ["HEPA with charcoal", "Water-only filter", "UV filter", "HEPA-only"],
    correctAnswer: 0
  },
  {
    id: 908,
    question: "Latex is made from:",
    choices: ["Petroleum", "Rubber (trees)", "Synthetic plastic", "Cotton"],
    correctAnswer: 1
  },
  {
    id: 909,
    question: "Who was the first surgeon to use latex gloves?",
    choices: ["Halstead", "Lister", "Pasteur", "Koch"],
    correctAnswer: 0
  },
  {
    id: 910,
    question: "What is a symptom of latex allergy?",
    choices: ["Rash", "Hypertension", "Fever only", "Hearing loss"],
    correctAnswer: 0
  },
  {
    id: 911,
    question: "When should a latex-allergic patient ideally be scheduled?",
    choices: ["First case of the day", "Last case of the day", "After lunch", "At night"],
    correctAnswer: 0
  },
  {
    id: 912,
    question: "Which chemical is used to preserve specimens?",
    choices: ["Glutaraldehyde", "Formaldehyde", "ETO", "PMMA"],
    correctAnswer: 1
  },
  {
    id: 913,
    question: "What is PMMA used for?",
    choices: ["Sterilizing instruments", "Bone cement", "Sutures", "Cleaning floors"],
    correctAnswer: 1
  },
  {
    id: 914,
    question: "PMMA can cause:",
    choices: ["Respiratory arrest", "Hypotension", "Seizures", "Tachycardia"],
    correctAnswer: 1
  },
  {
    id: 915,
    question: "Which gas is used in Class B fire extinguishers?",
    choices: ["Halon", "Water", "CO₂", "Oxygen"],
    correctAnswer: 2
  },
  {
    id: 916,
    question: "What is the correct order for PASS when using a fire extinguisher?",
    choices: ["Pull, Aim, Squeeze, Sweep", "Push, Aim, Spray, Sweep", "Pull, Align, Spray, Sweep", "Push, Align, Squeeze, Sweep"],
    correctAnswer: 0
  },
  {
    id: 917,
    question: "RACE for fire response stands for:",
    choices: ["Run, Avoid, Call, Escape", "Rescue, Alert, Contain, Evacuate", "Rescue, Alert, Call, Evacuate", "Run, Alert, Contain, Exit"],
    correctAnswer: 1
  },
  {
    id: 918,
    question: "The Richter scale is used to measure:",
    choices: ["Hurricanes", "Earthquakes", "Floods", "Tornadoes"],
    correctAnswer: 1
  },
  {
    id: 919,
    question: "Heat stroke occurs due to:",
    choices: ["Too much water", "Body's failure to regulate temperature", "Viral infection", "Low humidity"],
    correctAnswer: 1
  },
  {
    id: 920,
    question: "Which biological agent is considered a bioterrorism risk?",
    choices: ["Lead", "Anthrax", "Asbestos", "Mercury"],
    correctAnswer: 1
  },
  {
    id: 921,
    question: "Dirty bombs cause:",
    choices: ["Only radiation", "Only burns", "Radiation and physical injury", "Only chemical injury"],
    correctAnswer: 2
  },
  {
    id: 922,
    question: "Which is NOT a correct hot, warm, cold zone description?",
    choices: ["Hot — where the disaster occurred", "Warm — evaluation area", "Cold — safest zone", "Hot — safe zone"],
    correctAnswer: 3
  },
  {
    id: 923,
    question: "Triage black tag means:",
    choices: ["Minor injury", "Beyond healing", "Needs immediate help", "Walking wounded"],
    correctAnswer: 1
  },
  {
    id: 924,
    question: "What is the surgical technologist's role in triage?",
    choices: ["Direct command center", "CPR and transport", "Triage doctor", "None"],
    correctAnswer: 0
  },
  {
    id: 925,
    question: "MIS stands for:",
    choices: ["Minimally invasive surgery", "Minimally instructed surgery", "Medical invasive surgery", "Multi-instrument surgery"],
    correctAnswer: 0
  },
  {
    id: 926,
    question: "The trocar is removed and what remains in place?",
    choices: ["Port", "Cannula", "Fiberoptic light", "Insufflator"],
    correctAnswer: 1
  },
  {
    id: 927,
    question: "Blunt trocar is also known as:",
    choices: ["Veress needle", "Hasson", "Port", "Balloon dissector"],
    correctAnswer: 1
  },
  {
    id: 928,
    question: "Fiberoptic light cords should:",
    choices: ["Be tightly coiled", "Be handled carefully and loosely coiled", "Be sterilized in ETO", "Be soaked in saline"],
    correctAnswer: 1
  },
  {
    id: 929,
    question: "Insufflation for laparoscopy uses:",
    choices: ["Oxygen", "Nitrogen", "CO₂", "Helium"],
    correctAnswer: 2
  },
  {
    id: 930,
    question: "What is an advantage of MIS surgery?",
    choices: ["Increased trauma", "Quick recovery", "More bleeding", "Increased pain"],
    correctAnswer: 1
  },
  {
    id: 931,
    question: "What is a disadvantage of MIS surgery?",
    choices: ["Reduced risk of adhesions", "Gas embolism risk", "Improved vision", "Lower training needed"],
    correctAnswer: 1
  },
  {
    id: 932,
    question: "Maintaining normothermia is important because CO₂:",
    choices: ["Raises body temperature", "Has no effect", "Lowers body temperature", "Dehydrates tissue"],
    correctAnswer: 2
  },
  {
    id: 933,
    question: "Which part of a telescope should you always hold?",
    choices: ["Shaft", "Head", "Lens", "Base"],
    correctAnswer: 1
  },
  {
    id: 934,
    question: "White balancing:",
    choices: ["Is optional", "Evens brightness and improves image", "Is harmful to the scope", "Requires a black background"],
    correctAnswer: 1
  },
  {
    id: 935,
    question: "Pixels on the camera chip determine:",
    choices: ["Weight", "Clarity", "Length", "Heat"],
    correctAnswer: 1
  },
  {
    id: 936,
    question: "Which laser has a blue-green beam?",
    choices: ["CO₂", "Argon", "YAG", "Excimer"],
    correctAnswer: 1
  },
  {
    id: 937,
    question: "Excimer laser is used for:",
    choices: ["Ablating tissue without cutting", "Deep cuts", "Coagulating", "Dissecting"],
    correctAnswer: 0
  },
  {
    id: 938,
    question: "Krypton laser beam color:",
    choices: ["Blue", "Red-yellow", "Green", "Invisible"],
    correctAnswer: 1
  },
  {
    id: 939,
    question: "YAG lasers are commonly used for:",
    choices: ["Eyes only", "Skin cancers and glaucoma", "Teeth whitening", "Bone cutting"],
    correctAnswer: 1
  },
  {
    id: 940,
    question: "For laser safety, which is FALSE?",
    choices: ["Use metal jewelry", "Cover patient eyes", "Wear fire-resistant gowns", "Insulate ET tubes"],
    correctAnswer: 0
  },
  {
    id: 941,
    question: "Blended current is used to:",
    choices: ["Only cut", "Only coagulate", "Cut and provide hemostasis", "Sterilize tissue"],
    correctAnswer: 2
  },
  {
    id: 942,
    question: "Monopolar electrosurgery current path is:",
    choices: ["Active to patient to inactive", "Active to ground only", "Patient to air", "Inactive to generator"],
    correctAnswer: 1
  },
  {
    id: 943,
    question: "Coagulating current:",
    choices: ["Cuts tissue", "Provides intense heat to control bleeding", "Freezes tissue", "Provides no heat"],
    correctAnswer: 1
  },
  {
    id: 944,
    question: "Harmonic scalpel uses:",
    choices: ["Lasers", "Ultrasonic waves", "CO₂ gas", "Cryogenic energy"],
    correctAnswer: 1
  },
  {
    id: 945,
    question: "Cryosurgery uses:",
    choices: ["High heat", "Cold (liquid nitrogen or CO₂)", "Radiation", "Ultrasonic waves"],
    correctAnswer: 1
  },
  {
    id: 946,
    question: "Ligasure is a:",
    choices: ["Cryogenic device", "Bipolar device sealing vessels and tissue", "Monopolar device", "Scalpel blade"],
    correctAnswer: 1
  },
  {
    id: 947,
    question: "Laser light waves are:",
    choices: ["Random", "Coherent and parallel", "Non-coherent", "Random and perpendicular"],
    correctAnswer: 1
  },
  {
    id: 948,
    question: "Laser medium can be:",
    choices: ["Only gas", "Only liquid", "Only crystal", "Gas, solid, crystal, liquid, dye"],
    correctAnswer: 3
  },
  {
    id: 949,
    question: "Anesthesia scavenging systems are used to:",
    choices: ["Capture patient breath", "Filter and remove anesthetic gases", "Provide oxygen", "Create pneumoperitoneum"],
    correctAnswer: 1
  },
  {
    id: 950,
    question: "Which class fire extinguisher is for lasers and electrical fires?",
    choices: ["A", "B", "C", "D"],
    correctAnswer: 2
  },
  {
    id: 951,
    question: "Which chemical is used to sterilize and is highly toxic?",
    choices: ["PMMA", "Formalin", "ETO", "Bleach"],
    correctAnswer: 2
  },
  {
    id: 952,
    question: "Radiological decontamination includes:",
    choices: ["Removing clothing and washing with soap and water", "Leaving clothing on", "Using bleach in the eyes", "None of the above"],
    correctAnswer: 0
  },
  {
    id: 953,
    question: "What is the purpose of a HEPA filter in smoke evacuation during laser surgery?",
    choices: ["To cool the air in the operating room", "To absorb odor from antiseptics", "To filter cells and particles from surgical smoke", "To sterilize the surgical instruments"],
    correctAnswer: 2
  },
  {
    id: 954,
    question: "The ESU smoke is less dangerous than laser smoke because:",
    choices: ["It has no odor", "It contains fewer cellular particles", "It cannot cause respiratory irritation", "It is filtered automatically"],
    correctAnswer: 1
  },
  {
    id: 955,
    question: "What is the main risk of latex allergy?",
    choices: ["Eye damage", "Skin rash to respiratory arrest", "Cancer", "Hair loss"],
    correctAnswer: 1
  },
  {
    id: 956,
    question: "Why should a latex-allergic patient be scheduled as the first case?",
    choices: ["To save time", "To reduce cross-contamination with latex dust", "To minimize anesthesia time", "To reduce cost"],
    correctAnswer: 1
  },
  {
    id: 957,
    question: "Which chemical is used to preserve surgical specimens?",
    choices: ["Glutaraldehyde", "Formaldehyde", "Ethylene oxide", "Sodium hypochlorite"],
    correctAnswer: 1
  },
  {
    id: 958,
    question: "What is PMMA used for?",
    choices: ["Skin antiseptic", "Bone cement", "Surgical drape coating", "Fire retardant"],
    correctAnswer: 1
  },
  {
    id: 959,
    question: "Bone cement implantation syndrome can cause:",
    choices: ["Bone fracture", "Emboli to the lungs", "Skin burns", "Vision loss"],
    correctAnswer: 1
  },
  {
    id: 960,
    question: "Which fire extinguisher is used for electrical fires?",
    choices: ["Class A", "Class B", "Class C", "Class D"],
    correctAnswer: 2
  },
  {
    id: 961,
    question: "What does the \"A\" in PASS stand for?",
    choices: ["Alert", "Aim", "Avoid", "Act"],
    correctAnswer: 1
  },
  {
    id: 962,
    question: "Which natural disaster can cause a tsunami?",
    choices: ["Wildfire", "Heat wave", "Earthquake", "Avalanche"],
    correctAnswer: 2
  },
  {
    id: 963,
    question: "What is a dirty bomb?",
    choices: ["A chemical explosion causing blindness", "A radioactive bomb causing land damage and burns", "A conventional explosive in a hospital", "A biological agent release"],
    correctAnswer: 1
  },
  {
    id: 964,
    question: "Bioterrorism agents include:",
    choices: ["Mustard gas", "Ebola", "CO₂", "PMMA"],
    correctAnswer: 1
  },
  {
    id: 965,
    question: "What is the primary goal of an EAP in healthcare?",
    choices: ["To order supplies", "To define staff responsibilities during a disaster", "To provide free vaccinations", "To sterilize equipment"],
    correctAnswer: 1
  },
  {
    id: 967,
    question: "The hot zone refers to:",
    choices: ["The area for triage", "The area near the operating table", "The area where the disaster occurred", "The hospital entrance"],
    correctAnswer: 2
  },
  {
    id: 968,
    question: "Which triage tag is used for patients beyond healing?",
    choices: ["Red", "Yellow", "Green", "Black"],
    correctAnswer: 3
  },
  {
    id: 969,
    question: "Which instrument is inserted through a cannula to view the operative field in MIS?",
    choices: ["Fiberoptic telescope", "Rigid needle", "Blunt trocar", "Laparoscope"],
    correctAnswer: 3
  },
  {
    id: 970,
    question: "Why is CO₂ used for insufflation?",
    choices: ["It disinfects the cavity", "It is cool and non-flammable", "It improves oxygenation", "It helps clot blood"],
    correctAnswer: 1
  },
  {
    id: 971,
    question: "What is one disadvantage of MIS surgery?",
    choices: ["Excessive trauma", "Quick recovery", "Risk of adhesions", "Reduced pain"],
    correctAnswer: 2
  },
  {
    id: 972,
    question: "Which device prevents fogging on a laparoscope lens?",
    choices: ["Insufflator", "Defogger", "Veress needle", "Biopsy forceps"],
    correctAnswer: 1
  },
  {
    id: 973,
    question: "Why is white balancing a scope important?",
    choices: ["To sterilize the scope", "To adjust color and improve image quality", "To prevent fogging", "To protect mucous membranes"],
    correctAnswer: 1
  },
  {
    id: 974,
    question: "The purpose of an endocoupler is to:",
    choices: ["Inflate the cavity", "Connect the camera to the telescope", "Remove debris", "Filter smoke"],
    correctAnswer: 1
  },
  {
    id: 975,
    question: "What is the function of a morcellator?",
    choices: ["Expand tissue", "Reduce large specimens into small pieces", "Remove fluid", "Suture tissue"],
    correctAnswer: 1
  },
  {
    id: 976,
    question: "Which endoscope cleaning step checks for holes?",
    choices: ["Preclean", "Leak test", "Sterilization", "Enzymatic wash"],
    correctAnswer: 1
  },
  {
    id: 977,
    question: "Which sterilization method is suitable for scopes sensitive to heat?",
    choices: ["Steam", "ETO", "Autoclave", "Incineration"],
    correctAnswer: 1
  },
  {
    id: 978,
    question: "What is capacitive coupling?",
    choices: ["Direct contact burn", "Heat damage from sterilization", "Stray current burn", "Smoke inhalation"],
    correctAnswer: 2
  },
  {
    id: 979,
    question: "Which laser is preferred for bronchoscopies?",
    choices: ["Nd:YAG", "CO₂", "Argon", "KTP"],
    correctAnswer: 1
  },
  {
    id: 980,
    question: "A fetoscopy is used to:",
    choices: ["Repair hernia", "Visualize fetus", "Resect colon", "Remove gallstones"],
    correctAnswer: 1
  },
  {
    id: 981,
    question: "What is the purpose of ERCP?",
    choices: ["View uterus", "Repair aneurysm", "Visualize bile ducts", "Resect prostate"],
    correctAnswer: 2
  },
  {
    id: 982,
    question: "What condition can hysteroscopy treat?",
    choices: ["Liver tumors", "Menorrhagia", "Hydrocephalus", "Herniated disc"],
    correctAnswer: 1
  },
  {
    id: 983,
    question: "Sigmoidoscopy is performed to view the:",
    choices: ["Bladder", "Rectum and sigmoid colon", "Esophagus", "Uterus"],
    correctAnswer: 1
  },
  {
    id: 984,
    question: "Which endoscopic procedure removes foreign bodies from the tracheobronchial tree?",
    choices: ["Esophagoscopy", "Bronchoscopy", "Gastroscopy", "Cystoscopy"],
    correctAnswer: 1
  },
  {
    id: 985,
    question: "What is VATS?",
    choices: ["Video-assisted thoracoscopic surgery", "Vascular aneurysm treatment", "Video imaging of the stomach", "Vocal cord biopsy"],
    correctAnswer: 0
  },
  {
    id: 986,
    question: "What is the most common robot used in surgery?",
    choices: ["Zeus", "Intuitive Da Vinci", "Telchir", "Telepresence"],
    correctAnswer: 1
  },
  {
    id: 987,
    question: "What is a manipulator?",
    choices: ["The surgeon's controller", "The robotic arm", "The console", "The endoscope"],
    correctAnswer: 1
  },
  {
    id: 988,
    question: "What does yaw describe?",
    choices: ["Up and down movement", "Insertion", "Right and left movement", "Open and close"],
    correctAnswer: 2
  },
  {
    id: 989,
    question: "What is telesurgery?",
    choices: ["Teaching surgery remotely", "Surgery performed at a distance", "Biopsy using a robot", "Video recording of a surgery"],
    correctAnswer: 1
  },
  {
    id: 990,
    question: "What are micromanipulators?",
    choices: ["Robotic fingers", "Endowrist tips", "Devices translating console commands to robotic movement", "High-definition cameras"],
    correctAnswer: 2
  },
  {
    id: 991,
    question: "What does sensitivity in robotics refer to?",
    choices: ["Ability to differentiate objects", "Ability to detect weak signals", "Ability to rotate", "Ability to see in color"],
    correctAnswer: 1
  },
  {
    id: 992,
    question: "Which robot component houses the surgeon?",
    choices: ["Patient-side cart", "Console", "Manipulator", "Endowrist"],
    correctAnswer: 1
  },
  {
    id: 993,
    question: "Why is carbon dioxide preferred for pneumoperitoneum?",
    choices: ["It cools and is absorbed by the body", "It sterilizes the cavity", "It is highly flammable", "It improves blood oxygenation"],
    correctAnswer: 0
  },
  {
    id: 994,
    question: "What is chromopertubation used for?",
    choices: ["Determine tubal patency", "Remove fibroids", "Biopsy of the uterus", "Repair hernia"],
    correctAnswer: 0
  },
  {
    id: 995,
    question: "What procedure removes a kidney laparoscopically?",
    choices: ["Nephrectomy", "Cystectomy", "TURP", "TURB"],
    correctAnswer: 0
  },
  {
    id: 996,
    question: "What is a ventriculoscopy used to treat?",
    choices: ["Varices", "Hydrocephalus", "Herniated disc", "Sinusitis"],
    correctAnswer: 1
  },
  {
    id: 997,
    question: "What is radiofrequency ablation used for?",
    choices: ["Varicose veins", "Uterine fibroids", "Hernias", "Aneurysms"],
    correctAnswer: 0
  },
  {
    id: 998,
    question: "What does MIDCAB stand for?",
    choices: ["Minimally invasive coronary artery bypass", "Minimally invasive colon and bladder", "Manual incision coronary artery bypass", "Mechanical internal cardiac ablation"],
    correctAnswer: 0
  }
];
