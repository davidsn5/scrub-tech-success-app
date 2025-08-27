export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
}

export const principlesPracticeQuestions: Question[] = [
  {
    id: 2,
    question: "Which of the following is NOT a principle of sterile technique?",
    choices: ["Sterile items touch only sterile items", "Sterile persons touch only sterile items", "Non-sterile persons touch only non-sterile items", "All items can be touched by anyone"],
    correctAnswer: 3,
    explanation: "The principle that 'all items can be touched by anyone' violates fundamental sterile technique. In sterile procedures, strict separation must be maintained: sterile items only touch sterile items, sterile persons only touch sterile items and areas, and non-sterile persons only touch non-sterile items."
  },
  {
    id: 3,
    question: "The sterile field is considered contaminated if:",
    choices: ["It becomes wet", "It falls below table level", "It is touched by non-sterile items", "All of the above"],
    correctAnswer: 3,
    explanation: "All of these conditions contaminate the sterile field. Moisture allows microorganisms to wick through materials (strike-through contamination), items below table level are considered non-sterile, and any contact with non-sterile items breaks sterility. Any one of these events requires immediate corrective action."
  },
  {
    id: 4,
    question: "What is the minimum temperature for steam sterilization?",
    choices: ["250°F", "270°F", "285°F", "300°F"],
    correctAnswer: 1,
    explanation: "Steam sterilization requires a minimum temperature of 270°F (132°C) to effectively kill all microorganisms including bacterial spores. This temperature, combined with proper pressure and time, ensures complete sterilization. Lower temperatures are insufficient for sterilization."
  },
  {
    id: 5,
    question: "How long should hands be scrubbed for the initial scrub?",
    choices: ["2-3 minutes", "3-5 minutes", "5-10 minutes", "10-15 minutes"],
    correctAnswer: 1,
    explanation: "The initial surgical hand scrub should last 3-5 minutes to effectively remove transient microorganisms and reduce the resident microbial population on the hands and forearms. This duration has been proven effective in reducing surgical site infections when proper technique is used."
  },
  {
    id: 6,
    question: "The surgical conscience refers to:",
    choices: ["Legal responsibility", "Moral and ethical responsibility", "Financial responsibility", "Administrative responsibility"],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "Which of the following is the most reliable method of sterilization?",
    choices: ["Chemical sterilization", "Gas sterilization", "Steam sterilization", "Radiation sterilization"],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "The area around a sterile field that is considered non-sterile is:",
    choices: ["1 inch", "2 inches", "3 inches", "4 inches"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "What does the term 'strike through' mean?",
    choices: ["Tearing of sterile drapes", "Moisture penetrating sterile barriers", "Dropping sterile items", "Breaking sterile technique"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "The most common cause of surgical site infections is:",
    choices: ["Airborne bacteria", "Contact transmission", "Endogenous flora", "Contaminated instruments"],
    correctAnswer: 2
  },
  {
    id: 11,
    question: "Which organization sets standards for sterilization practices?",
    choices: ["CDC", "AORN", "OSHA", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 12,
    question: "The process of removing all microorganisms is called:",
    choices: ["Disinfection", "Antisepsis", "Sterilization", "Sanitization"],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "What is the standard pressure for steam sterilization?",
    choices: ["15 psi", "20 psi", "25 psi", "30 psi"],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "The surgical scrub should begin:",
    choices: ["At the fingertips", "At the wrists", "At the elbows", "At the shoulders"],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Which of the following is NOT a method of sterilization?",
    choices: ["Steam", "Ethylene oxide", "Hydrogen peroxide", "Alcohol"],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "The sterile field should be established:",
    choices: ["Before the patient enters", "After the patient is positioned", "Just before the incision", "At any convenient time"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is the minimum time for steam sterilization at 270°F?",
    choices: ["3 minutes", "4 minutes", "5 minutes", "10 minutes"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "The surgical hand scrub should include:",
    choices: ["Hands only", "Hands and wrists", "Hands to mid-forearm", "Hands to elbows"],
    correctAnswer: 3
  },
  {
    id: 19,
    question: "Which of the following indicates a break in sterile technique?",
    choices: ["Reaching across the sterile field", "Turning your back to the sterile field", "Allowing non-sterile items to touch sterile items", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 20,
    question: "The purpose of surgical attire is to:",
    choices: ["Look professional", "Provide comfort", "Act as a barrier to microorganisms", "Identify team members"],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "What is the recommended humidity level in the OR?",
    choices: ["30-40%", "40-60%", "60-70%", "70-80%"],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "The temperature in the OR should be maintained at:",
    choices: ["65-70°F", "68-75°F", "75-80°F", "80-85°F"],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "Air changes per hour in the OR should be a minimum of:",
    choices: ["10", "15", "20", "25"],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "The surgical mask should:",
    choices: ["Cover the nose only", "Cover the mouth only", "Cover nose and mouth", "Cover the entire face"],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "When should surgical masks be changed?",
    choices: ["Every hour", "Between cases", "When they become moist", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 26,
    question: "The purpose of the surgical cap is to:",
    choices: ["Keep hair neat", "Prevent hair from falling", "Absorb perspiration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 27,
    question: "Shoe covers should be:",
    choices: ["Cloth", "Disposable", "Leather", "Rubber"],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "The surgical gown should be:",
    choices: ["Fluid-resistant", "Comfortable", "Fashionable", "Colorful"],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "Sterile gloves should be changed:",
    choices: ["Every 30 minutes", "When torn or punctured", "Between procedures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 30,
    question: "The sterile field includes:",
    choices: ["The patient", "Draped surfaces", "Sterile team members", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 31,
    question: "What is the most important factor in preventing surgical site infections?",
    choices: ["Antibiotics", "Proper hand hygiene", "Sterile technique", "Environmental controls"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "The surgical technologist's primary responsibility is:",
    choices: ["Patient safety", "Maintaining sterility", "Assisting the surgeon", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 33,
    question: "Which of the following is a critical item that must be sterile?",
    choices: ["Blood pressure cuff", "Stethoscope", "Surgical instruments", "Thermometer"],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "The Spaulding classification system categorizes medical devices based on:",
    choices: ["Cost", "Size", "Risk of infection", "Complexity"],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "Semi-critical items require:",
    choices: ["Sterilization", "High-level disinfection", "Intermediate-level disinfection", "Low-level disinfection"],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Non-critical items require:",
    choices: ["Sterilization", "High-level disinfection", "Intermediate-level disinfection", "Low-level disinfection"],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "The most common method of sterilization in hospitals is:",
    choices: ["Ethylene oxide", "Steam", "Hydrogen peroxide", "Ozone"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "Biological indicators are used to:",
    choices: ["Monitor sterilization effectiveness", "Indicate temperature", "Measure time", "Check pressure"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "Chemical indicators:",
    choices: ["Prove sterilization", "Show exposure to sterilizing conditions", "Replace biological indicators", "Are not necessary"],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "The most resistant microorganisms to sterilization are:",
    choices: ["Bacteria", "Viruses", "Fungi", "Spores"],
    correctAnswer: 3
  },
  {
    id: 41,
    question: "Flash sterilization should be used:",
    choices: ["Routinely", "For convenience", "Only in emergencies", "To save time"],
    correctAnswer: 2
  },
  {
    id: 42,
    question: "The minimum time for flash sterilization of instruments is:",
    choices: ["1 minute", "3 minutes", "5 minutes", "10 minutes"],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "Ethylene oxide sterilization is used for:",
    choices: ["Heat-sensitive items", "Moisture-sensitive items", "Plastic items", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 44,
    question: "The aeration time for ethylene oxide sterilized items is:",
    choices: ["2-4 hours", "8-12 hours", "24-48 hours", "1 week"],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "Hydrogen peroxide sterilization is also known as:",
    choices: ["Gas plasma", "Steam", "Dry heat", "Chemical"],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "The advantage of hydrogen peroxide sterilization is:",
    choices: ["Low cost", "Fast cycle time", "No aeration needed", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 47,
    question: "Ozone sterilization uses:",
    choices: ["Heat", "Moisture", "Gas", "Radiation"],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "The shelf life of sterile packages depends on:",
    choices: ["Storage conditions", "Packaging material", "Handling", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 49,
    question: "Event-related sterility means:",
    choices: ["Items expire on a specific date", "Sterility is maintained until the package is compromised", "Items must be used within 24 hours", "Sterility lasts forever"],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "The first step in instrument processing is:",
    choices: ["Cleaning", "Disinfection", "Sterilization", "Packaging"],
    correctAnswer: 0
  },
  {
    id: 51,
    question: "Instruments should be cleaned:",
    choices: ["Immediately after use", "Within 1 hour", "Within 4 hours", "At the end of the day"],
    correctAnswer: 0
  },
  {
    id: 52,
    question: "The pH of cleaning solutions should be:",
    choices: ["Acidic", "Neutral", "Basic", "Variable"],
    correctAnswer: 1
  },
  {
    id: 53,
    question: "Ultrasonic cleaners use:",
    choices: ["Heat", "Chemicals", "Sound waves", "Radiation"],
    correctAnswer: 2
  },
  {
    id: 54,
    question: "The temperature for ultrasonic cleaning should be:",
    choices: ["Room temperature", "80-110°F", "140-180°F", "200°F"],
    correctAnswer: 2
  },
  {
    id: 55,
    question: "Enzymatic cleaners are used to:",
    choices: ["Sterilize", "Remove protein", "Disinfect", "Lubricate"],
    correctAnswer: 1
  },
  {
    id: 56,
    question: "Instruments with lumens should be:",
    choices: ["Soaked only", "Brushed only", "Flushed and brushed", "Air dried only"],
    correctAnswer: 2
  },
  {
    id: 57,
    question: "The water quality for final rinse should be:",
    choices: ["Tap water", "Distilled water", "Deionized water", "Sterile water"],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "Instruments should be dried:",
    choices: ["Air dried", "Towel dried", "Heat dried", "Any method"],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "Instrument milk is used to:",
    choices: ["Clean", "Disinfect", "Lubricate", "Sterilize"],
    correctAnswer: 2
  },
  {
    id: 60,
    question: "The purpose of packaging is to:",
    choices: ["Maintain sterility", "Allow sterilant penetration", "Provide aseptic presentation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 61,
    question: "Woven fabrics for packaging should be:",
    choices: ["100% cotton", "Cotton-polyester blend", "100% polyester", "Any fabric"],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "Non-woven packaging materials are:",
    choices: ["Reusable", "Disposable", "Washable", "Sterilizable only"],
    correctAnswer: 1
  },
  {
    id: 63,
    question: "Paper-plastic pouches should be loaded with:",
    choices: ["Paper side down", "Plastic side down", "Either side down", "Standing upright"],
    correctAnswer: 0
  },
  {
    id: 64,
    question: "The maximum weight for wrapped instrument sets is:",
    choices: ["10 pounds", "15 pounds", "20 pounds", "25 pounds"],
    correctAnswer: 3
  },
  {
    id: 65,
    question: "Rigid containers should be:",
    choices: ["Sealed tightly", "Vented", "Partially open", "Wrapped"],
    correctAnswer: 1
  },
  {
    id: 66,
    question: "The loading pattern for steam sterilizers should allow for:",
    choices: ["Maximum capacity", "Steam circulation", "Easy removal", "Quick loading"],
    correctAnswer: 1
  },
  {
    id: 67,
    question: "Sterilizer loads should be:",
    choices: ["Mixed materials", "Similar materials", "Any combination", "Overloaded for efficiency"],
    correctAnswer: 1
  },
  {
    id: 68,
    question: "The drying phase of steam sterilization:",
    choices: ["Is optional", "Prevents wet packs", "Saves time", "Is not necessary"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "Wet packs are considered:",
    choices: ["Sterile", "Contaminated", "Acceptable", "Reusable"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "Sterilizer records should be kept for:",
    choices: ["1 year", "3 years", "5 years", "Permanently"],
    correctAnswer: 1
  },
  {
    id: 71,
    question: "Quality assurance in sterilization includes:",
    choices: ["Monitoring", "Documentation", "Training", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 72,
    question: "The most important aspect of infection control is:",
    choices: ["Hand hygiene", "Sterilization", "Isolation", "Antibiotics"],
    correctAnswer: 0
  },
  {
    id: 73,
    question: "Standard precautions apply to:",
    choices: ["Blood", "Body fluids", "Secretions", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 74,
    question: "Personal protective equipment includes:",
    choices: ["Gloves", "Gowns", "Masks", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 75,
    question: "The chain of infection includes:",
    choices: ["Agent", "Host", "Environment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 76,
    question: "Healthcare-associated infections are:",
    choices: ["Preventable", "Inevitable", "Rare", "Harmless"],
    correctAnswer: 0
  },
  {
    id: 77,
    question: "The most common healthcare-associated infection is:",
    choices: ["Pneumonia", "Urinary tract infection", "Surgical site infection", "Bloodstream infection"],
    correctAnswer: 1
  },
  {
    id: 78,
    question: "Surgical site infections are classified as:",
    choices: ["Superficial", "Deep", "Organ/space", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 79,
    question: "The risk factors for surgical site infections include:",
    choices: ["Patient factors", "Procedure factors", "Environmental factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 80,
    question: "Preoperative skin preparation should:",
    choices: ["Remove transient flora", "Reduce resident flora", "Provide residual activity", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 81,
    question: "The most effective antiseptic for skin preparation is:",
    choices: ["Iodine", "Chlorhexidine", "Alcohol", "Povidone-iodine"],
    correctAnswer: 1
  },
  {
    id: 82,
    question: "Hair removal should be done:",
    choices: ["The night before", "Just before surgery", "In the OR", "Not at all if possible"],
    correctAnswer: 3
  },
  {
    id: 83,
    question: "If hair removal is necessary, the preferred method is:",
    choices: ["Shaving", "Clipping", "Depilatory", "Laser"],
    correctAnswer: 1
  },
  {
    id: 84,
    question: "Antibiotic prophylaxis should be given:",
    choices: ["After surgery", "During surgery", "Before incision", "Not at all"],
    correctAnswer: 2
  },
  {
    id: 85,
    question: "The timing of antibiotic prophylaxis is:",
    choices: ["30-60 minutes before incision", "At incision", "After incision", "Any time"],
    correctAnswer: 0
  },
  {
    id: 86,
    question: "Normothermia during surgery:",
    choices: ["Increases infection risk", "Decreases infection risk", "Has no effect", "Is not important"],
    correctAnswer: 1
  },
  {
    id: 87,
    question: "Hyperglycemia during surgery:",
    choices: ["Increases infection risk", "Decreases infection risk", "Has no effect", "Is beneficial"],
    correctAnswer: 0
  },
  {
    id: 88,
    question: "Tissue oxygenation during surgery should be:",
    choices: ["Minimized", "Optimized", "Ignored", "Variable"],
    correctAnswer: 1
  },
  {
    id: 89,
    question: "The surgical incision should be:",
    choices: ["Large", "Small", "Appropriate for procedure", "Standardized"],
    correctAnswer: 2
  },
  {
    id: 90,
    question: "Wound closure should:",
    choices: ["Eliminate dead space", "Approximate tissues", "Maintain hemostasis", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 91,
    question: "Postoperative wound care includes:",
    choices: ["Monitoring", "Dressing changes", "Patient education", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 92,
    question: "Signs of surgical site infection include:",
    choices: ["Redness", "Swelling", "Drainage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 93,
    question: "The surveillance period for surgical site infections is:",
    choices: ["7 days", "14 days", "30 days", "90 days"],
    correctAnswer: 2
  },
  {
    id: 94,
    question: "Deep incisional SSI surveillance period for implants is:",
    choices: ["30 days", "90 days", "1 year", "2 years"],
    correctAnswer: 2
  },
  {
    id: 95,
    question: "The CDC guidelines for SSI prevention are:",
    choices: ["Recommendations", "Requirements", "Suggestions", "Optional"],
    correctAnswer: 0
  },
  {
    id: 96,
    question: "Evidence-based practice means:",
    choices: ["Using tradition", "Following experience", "Using research", "Personal preference"],
    correctAnswer: 2
  },
  {
    id: 97,
    question: "Quality improvement in infection control involves:",
    choices: ["Data collection", "Analysis", "Implementation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 98,
    question: "The role of the infection control practitioner includes:",
    choices: ["Surveillance", "Education", "Policy development", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 99,
    question: "Multidrug-resistant organisms are a concern because:",
    choices: ["Limited treatment options", "Increased morbidity", "Increased costs", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 100,
    question: "MRSA stands for:",
    choices: ["Methicillin-resistant Staphylococcus aureus", "Multiple-resistant Streptococcus aureus", "Methicillin-resistant Streptococcus aureus", "Multiple-resistant Staphylococcus aureus"],
    correctAnswer: 0
  },
  {
    id: 101,
    question: "VRE stands for:",
    choices: ["Vancomycin-resistant Enterococcus", "Vancomycin-resistant Escherichia", "Virus-resistant Enterococcus", "Variable-resistant Enterococcus"],
    correctAnswer: 0
  },
  {
    id: 102,
    question: "C. difficile is transmitted by:",
    choices: ["Airborne", "Droplet", "Contact", "Vector"],
    correctAnswer: 2
  },
  {
    id: 103,
    question: "Hand hygiene for C. difficile requires:",
    choices: ["Alcohol-based rub", "Soap and water", "Either method", "No special requirements"],
    correctAnswer: 1
  },
  {
    id: 104,
    question: "Isolation precautions are based on:",
    choices: ["Diagnosis", "Transmission route", "Severity", "Patient preference"],
    correctAnswer: 1
  },
  {
    id: 105,
    question: "Contact precautions require:",
    choices: ["Private room", "Gloves and gown", "Dedicated equipment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 106,
    question: "Droplet precautions require:",
    choices: ["N95 mask", "Surgical mask", "Face shield", "Goggles"],
    correctAnswer: 1
  },
  {
    id: 107,
    question: "Airborne precautions require:",
    choices: ["Surgical mask", "N95 respirator", "Face shield", "Goggles"],
    correctAnswer: 1
  },
  {
    id: 108,
    question: "Tuberculosis requires:",
    choices: ["Contact precautions", "Droplet precautions", "Airborne precautions", "Standard precautions only"],
    correctAnswer: 2
  },
  {
    id: 109,
    question: "The fit testing for N95 respirators should be done:",
    choices: ["Monthly", "Quarterly", "Annually", "Never"],
    correctAnswer: 2
  },
  {
    id: 110,
    question: "Bloodborne pathogens include:",
    choices: ["HIV", "Hepatitis B", "Hepatitis C", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 111,
    question: "Needlestick injuries should be:",
    choices: ["Ignored", "Reported immediately", "Treated at home", "Reported later"],
    correctAnswer: 1
  },
  {
    id: 112,
    question: "Post-exposure prophylaxis for HIV should begin:",
    choices: ["Within 1 hour", "Within 2 hours", "Within 24 hours", "Within 1 week"],
    correctAnswer: 1
  },
  {
    id: 113,
    question: "Hepatitis B vaccination is:",
    choices: ["Optional", "Recommended", "Required", "Not available"],
    correctAnswer: 2
  },
  {
    id: 114,
    question: "The most effective way to prevent needlestick injuries is:",
    choices: ["Careful handling", "Safety devices", "Training", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 115,
    question: "Sharps containers should be:",
    choices: ["Overfilled", "Filled to capacity", "Filled to 2/3 capacity", "Never filled"],
    correctAnswer: 2
  },
  {
    id: 116,
    question: "Used needles should:",
    choices: ["Be recapped", "Never be recapped", "Be bent", "Be broken"],
    correctAnswer: 1
  },
  {
    id: 117,
    question: "The one-handed scoop technique is used for:",
    choices: ["All needles", "Contaminated needles", "Recapping when necessary", "Sharp instruments"],
    correctAnswer: 2
  },
  {
    id: 118,
    question: "Occupational exposure means:",
    choices: ["Any exposure at work", "Exposure to bloodborne pathogens", "Exposure to chemicals", "Exposure to radiation"],
    correctAnswer: 1
  },
  {
    id: 119,
    question: "The exposure control plan must be:",
    choices: ["Written", "Updated annually", "Accessible to employees", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 120,
    question: "Engineering controls include:",
    choices: ["Safety needles", "Sharps containers", "Splash guards", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 121,
    question: "Work practice controls include:",
    choices: ["Hand hygiene", "No recapping", "Proper disposal", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 122,
    question: "Personal protective equipment must be:",
    choices: ["Provided by employer", "Maintained by employer", "Replaced when necessary", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 123,
    question: "Training on bloodborne pathogens must be provided:",
    choices: ["Initially", "Annually", "When procedures change", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 124,
    question: "Medical surveillance includes:",
    choices: ["Hepatitis B vaccination", "Post-exposure evaluation", "Medical records", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 125,
    question: "Recordkeeping for bloodborne pathogen exposure must be maintained for:",
    choices: ["1 year", "3 years", "Duration of employment plus 30 years", "Permanently"],
    correctAnswer: 2
  },
  {
    id: 126,
    question: "The surgical technologist's role in infection control includes:",
    choices: ["Following policies", "Maintaining sterility", "Reporting exposures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 127,
    question: "Continuing education in infection control is:",
    choices: ["Optional", "Recommended", "Required", "Not necessary"],
    correctAnswer: 2
  },
  {
    id: 128,
    question: "The future of infection control includes:",
    choices: ["New technologies", "Improved surveillance", "Better education", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 129,
    question: "Patient safety is:",
    choices: ["Everyone's responsibility", "The nurse's responsibility", "The doctor's responsibility", "Not important"],
    correctAnswer: 0
  },
  {
    id: 130,
    question: "The goal of infection control is to:",
    choices: ["Eliminate all microorganisms", "Prevent healthcare-associated infections", "Use more antibiotics", "Isolate all patients"],
    correctAnswer: 1
  },
  {
    id: 131,
    question: "What is the primary function of the cardiovascular system?",
    choices: ["Digestion", "Transportation", "Respiration", "Excretion"],
    correctAnswer: 1
  },
  {
    id: 132,
    question: "The heart has how many chambers?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 2
  },
  {
    id: 133,
    question: "Which chamber of the heart pumps blood to the lungs?",
    choices: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
    correctAnswer: 1
  },
  {
    id: 134,
    question: "The largest artery in the body is the:",
    choices: ["Pulmonary artery", "Carotid artery", "Aorta", "Femoral artery"],
    correctAnswer: 2
  },
  {
    id: 135,
    question: "Blood returns to the heart through:",
    choices: ["Arteries", "Veins", "Capillaries", "Lymphatics"],
    correctAnswer: 1
  },
  {
    id: 136,
    question: "The exchange of gases occurs in the:",
    choices: ["Arteries", "Veins", "Capillaries", "Heart"],
    correctAnswer: 2
  },
  {
    id: 137,
    question: "Normal blood pressure is approximately:",
    choices: ["100/60", "120/80", "140/90", "160/100"],
    correctAnswer: 1
  },
  {
    id: 138,
    question: "The pacemaker of the heart is the:",
    choices: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
    correctAnswer: 1
  },
  {
    id: 139,
    question: "The tricuspid valve is located between the:",
    choices: ["Right atrium and right ventricle", "Left atrium and left ventricle", "Right ventricle and pulmonary artery", "Left ventricle and aorta"],
    correctAnswer: 0
  },
  {
    id: 140,
    question: "The mitral valve is also called the:",
    choices: ["Tricuspid valve", "Bicuspid valve", "Pulmonary valve", "Aortic valve"],
    correctAnswer: 1
  },
  {
    id: 141,
    question: "The primary function of red blood cells is to:",
    choices: ["Fight infection", "Clot blood", "Carry oxygen", "Produce antibodies"],
    correctAnswer: 2
  },
  {
    id: 142,
    question: "White blood cells are primarily responsible for:",
    choices: ["Carrying oxygen", "Clotting blood", "Fighting infection", "Carrying nutrients"],
    correctAnswer: 2
  },
  {
    id: 143,
    question: "Platelets are responsible for:",
    choices: ["Carrying oxygen", "Fighting infection", "Blood clotting", "Carrying nutrients"],
    correctAnswer: 2
  },
  {
    id: 144,
    question: "The liquid portion of blood is called:",
    choices: ["Serum", "Plasma", "Lymph", "Cytoplasm"],
    correctAnswer: 1
  },
  {
    id: 145,
    question: "The normal pH of blood is:",
    choices: ["6.8-7.0", "7.0-7.2", "7.35-7.45", "7.5-7.8"],
    correctAnswer: 2
  },
  {
    id: 146,
    question: "Hemoglobin is found in:",
    choices: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
    correctAnswer: 1
  },
  {
    id: 147,
    question: "The average adult has approximately how much blood?",
    choices: ["3-4 liters", "5-6 liters", "7-8 liters", "9-10 liters"],
    correctAnswer: 1
  },
  {
    id: 148,
    question: "Blood type is determined by:",
    choices: ["Antigens on red blood cells", "Antibodies in plasma", "White blood cell count", "Platelet count"],
    correctAnswer: 0
  },
  {
    id: 150,
    question: "The universal recipient blood type is:",
    choices: ["A", "B", "AB", "O"],
    correctAnswer: 2
  },
  {
    id: 151,
    question: "The Rh factor is:",
    choices: ["An antigen", "An antibody", "A protein", "A hormone"],
    correctAnswer: 0
  },
  {
    id: 152,
    question: "A person with type A blood has:",
    choices: ["A antigens and B antibodies", "B antigens and A antibodies", "Both A and B antigens", "Neither A nor B antigens"],
    correctAnswer: 0
  },
  {
    id: 153,
    question: "Cross-matching blood tests for:",
    choices: ["ABO compatibility", "Rh compatibility", "Other antibodies", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 154,
    question: "A transfusion reaction can cause:",
    choices: ["Fever", "Hemolysis", "Kidney failure", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 155,
    question: "The lymphatic system functions to:",
    choices: ["Filter blood", "Return fluid to circulation", "Fight infection", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 156,
    question: "Lymph nodes are located:",
    choices: ["Throughout the body", "Only in the chest", "Only in the abdomen", "Only in the extremities"],
    correctAnswer: 0
  },
  {
    id: 157,
    question: "The spleen functions to:",
    choices: ["Filter blood", "Store blood", "Destroy old red blood cells", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 158,
    question: "The thymus gland is important for:",
    choices: ["Blood production", "Immune function", "Hormone production", "Digestion"],
    correctAnswer: 1
  },
  {
    id: 159,
    question: "Bone marrow produces:",
    choices: ["Red blood cells", "White blood cells", "Platelets", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 160,
    question: "Anemia is a condition characterized by:",
    choices: ["Too many red blood cells", "Too few red blood cells", "Too many white blood cells", "Too few platelets"],
    correctAnswer: 1
  },
  {
    id: 161,
    question: "The primary function of the respiratory system is:",
    choices: ["Gas exchange", "Blood circulation", "Digestion", "Excretion"],
    correctAnswer: 0
  },
  {
    id: 162,
    question: "The nose functions to:",
    choices: ["Warm air", "Filter air", "Humidify air", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 163,
    question: "The pharynx is also called the:",
    choices: ["Voice box", "Throat", "Windpipe", "Breathing tube"],
    correctAnswer: 1
  },
  {
    id: 164,
    question: "The larynx contains the:",
    choices: ["Epiglottis", "Vocal cords", "Thyroid cartilage", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 165,
    question: "The trachea is also called the:",
    choices: ["Voice box", "Throat", "Windpipe", "Breathing tube"],
    correctAnswer: 2
  },
  {
    id: 166,
    question: "The trachea divides into:",
    choices: ["Bronchi", "Bronchioles", "Alveoli", "Capillaries"],
    correctAnswer: 0
  },
  {
    id: 167,
    question: "Gas exchange occurs in the:",
    choices: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
    correctAnswer: 2
  },
  {
    id: 168,
    question: "The right lung has how many lobes?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: 2
  },
  {
    id: 169,
    question: "The left lung has how many lobes?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: 1
  },
  {
    id: 170,
    question: "The pleura is:",
    choices: ["A muscle", "A membrane", "A bone", "A cartilage"],
    correctAnswer: 1
  },
  {
    id: 171,
    question: "The diaphragm is the primary muscle of:",
    choices: ["Circulation", "Respiration", "Digestion", "Excretion"],
    correctAnswer: 1
  },
  {
    id: 172,
    question: "Normal respiratory rate for adults is:",
    choices: ["8-12 breaths per minute", "12-20 breaths per minute", "20-30 breaths per minute", "30-40 breaths per minute"],
    correctAnswer: 1
  },
  {
    id: 173,
    question: "Inspiration is:",
    choices: ["Breathing in", "Breathing out", "Holding breath", "Rapid breathing"],
    correctAnswer: 0
  },
  {
    id: 174,
    question: "Expiration is:",
    choices: ["Breathing in", "Breathing out", "Holding breath", "Rapid breathing"],
    correctAnswer: 1
  },
  {
    id: 175,
    question: "Oxygen is carried in the blood by:",
    choices: ["Plasma", "White blood cells", "Hemoglobin", "Platelets"],
    correctAnswer: 2
  },
  {
    id: 176,
    question: "Carbon dioxide is primarily carried in the blood as:",
    choices: ["Dissolved gas", "Bicarbonate", "Carbonic acid", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 177,
    question: "The respiratory center is located in the:",
    choices: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Spinal cord"],
    correctAnswer: 2
  },
  {
    id: 178,
    question: "Hypoxia means:",
    choices: ["Too much oxygen", "Too little oxygen", "Normal oxygen", "No oxygen"],
    correctAnswer: 1
  },
  {
    id: 179,
    question: "Cyanosis is:",
    choices: ["Redness", "Bluish discoloration", "Yellowing", "Paleness"],
    correctAnswer: 1
  },
  {
    id: 180,
    question: "Pneumonia is:",
    choices: ["Lung infection", "Heart disease", "Kidney disease", "Liver disease"],
    correctAnswer: 0
  },
  {
    id: 181,
    question: "The primary function of the digestive system is:",
    choices: ["Circulation", "Respiration", "Nutrition", "Excretion"],
    correctAnswer: 2
  },
  {
    id: 182,
    question: "Digestion begins in the:",
    choices: ["Stomach", "Small intestine", "Mouth", "Esophagus"],
    correctAnswer: 2
  },
  {
    id: 183,
    question: "The esophagus connects the:",
    choices: ["Mouth to stomach", "Stomach to small intestine", "Small intestine to large intestine", "Large intestine to rectum"],
    correctAnswer: 0
  },
  {
    id: 184,
    question: "The stomach produces:",
    choices: ["Bile", "Insulin", "Gastric acid", "Pancreatic juice"],
    correctAnswer: 2
  },
  {
    id: 185,
    question: "Most digestion and absorption occurs in the:",
    choices: ["Stomach", "Small intestine", "Large intestine", "Rectum"],
    correctAnswer: 1
  },
  {
    id: 186,
    question: "The small intestine has how many parts?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 1
  },
  {
    id: 187,
    question: "The first part of the small intestine is the:",
    choices: ["Duodenum", "Jejunum", "Ileum", "Cecum"],
    correctAnswer: 0
  },
  {
    id: 188,
    question: "The large intestine is also called the:",
    choices: ["Small bowel", "Colon", "Rectum", "Anus"],
    correctAnswer: 1
  },
  {
    id: 189,
    question: "The appendix is attached to the:",
    choices: ["Duodenum", "Jejunum", "Ileum", "Cecum"],
    correctAnswer: 3
  },
  {
    id: 190,
    question: "The liver produces:",
    choices: ["Insulin", "Bile", "Gastric acid", "Pancreatic juice"],
    correctAnswer: 1
  },
  {
    id: 191,
    question: "Bile is stored in the:",
    choices: ["Liver", "Pancreas", "Gallbladder", "Spleen"],
    correctAnswer: 2
  },
  {
    id: 192,
    question: "The pancreas produces:",
    choices: ["Bile", "Insulin", "Digestive enzymes", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 193,
    question: "Insulin regulates:",
    choices: ["Blood pressure", "Heart rate", "Blood sugar", "Breathing"],
    correctAnswer: 2
  },
  {
    id: 194,
    question: "The primary function of the large intestine is:",
    choices: ["Digestion", "Absorption of water", "Enzyme production", "Hormone production"],
    correctAnswer: 1
  },
  {
    id: 195,
    question: "Peristalsis is:",
    choices: ["Muscle contraction", "Enzyme production", "Hormone secretion", "Gas exchange"],
    correctAnswer: 0
  },
  {
    id: 196,
    question: "The epiglottis prevents:",
    choices: ["Vomiting", "Aspiration", "Reflux", "Constipation"],
    correctAnswer: 1
  },
  {
    id: 197,
    question: "Gastroesophageal reflux is:",
    choices: ["Normal", "Stomach acid backing up", "Swallowing difficulty", "Intestinal blockage"],
    correctAnswer: 1
  },
  {
    id: 198,
    question: "Peptic ulcers are commonly caused by:",
    choices: ["Stress", "Spicy food", "H. pylori bacteria", "Alcohol"],
    correctAnswer: 2
  },
  {
    id: 199,
    question: "Jaundice is caused by:",
    choices: ["Excess bilirubin", "Lack of insulin", "High blood pressure", "Low oxygen"],
    correctAnswer: 0
  },
  {
    id: 200,
    question: "Cirrhosis affects the:",
    choices: ["Heart", "Lungs", "Liver", "Kidneys"],
    correctAnswer: 2
  },
  {
    id: 201,
    question: "The primary function of the urinary system is:",
    choices: ["Circulation", "Respiration", "Excretion", "Digestion"],
    correctAnswer: 2
  },
  {
    id: 202,
    question: "The kidneys are located:",
    choices: ["In the pelvis", "Behind the peritoneum", "In the chest", "In the abdomen"],
    correctAnswer: 1
  },
  {
    id: 203,
    question: "Each kidney contains approximately:",
    choices: ["100,000 nephrons", "500,000 nephrons", "1 million nephrons", "2 million nephrons"],
    correctAnswer: 2
  },
  {
    id: 204,
    question: "The functional unit of the kidney is the:",
    choices: ["Glomerulus", "Nephron", "Tubule", "Collecting duct"],
    correctAnswer: 1
  },
  {
    id: 205,
    question: "Urine is formed by:",
    choices: ["Filtration only", "Reabsorption only", "Secretion only", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 206,
    question: "Normal urine output per day is:",
    choices: ["500-1000 mL", "1000-2000 mL", "2000-3000 mL", "3000-4000 mL"],
    correctAnswer: 1
  },
  {
    id: 207,
    question: "The ureters connect the:",
    choices: ["Kidneys to bladder", "Bladder to urethra", "Kidneys to urethra", "Bladder to kidneys"],
    correctAnswer: 0
  },
  {
    id: 208,
    question: "The bladder can hold approximately:",
    choices: ["100-200 mL", "300-500 mL", "600-800 mL", "900-1000 mL"],
    correctAnswer: 1
  },
  {
    id: 209,
    question: "The urethra is longer in:",
    choices: ["Males", "Females", "Both are equal", "Varies by individual"],
    correctAnswer: 0
  },
  {
    id: 210,
    question: "Normal urine is:",
    choices: ["Acidic", "Basic", "Neutral", "Variable"],
    correctAnswer: 0
  },
  {
    id: 211,
    question: "The kidneys help regulate:",
    choices: ["Blood pressure", "Electrolyte balance", "Acid-base balance", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 212,
    question: "Creatinine is a measure of:",
    choices: ["Liver function", "Kidney function", "Heart function", "Lung function"],
    correctAnswer: 1
  },
  {
    id: 213,
    question: "BUN stands for:",
    choices: ["Blood urea nitrogen", "Blood uric nitrogen", "Basic urea nitrogen", "Bilateral urea nitrogen"],
    correctAnswer: 0
  },
  {
    id: 214,
    question: "Oliguria means:",
    choices: ["No urine", "Little urine", "Much urine", "Blood in urine"],
    correctAnswer: 1
  },
  {
    id: 215,
    question: "Anuria means:",
    choices: ["No urine", "Little urine", "Much urine", "Blood in urine"],
    correctAnswer: 0
  },
  {
    id: 216,
    question: "Hematuria means:",
    choices: ["No urine", "Little urine", "Much urine", "Blood in urine"],
    correctAnswer: 3
  },
  {
    id: 217,
    question: "A UTI is a:",
    choices: ["Urinary tract infection", "Upper tract infection", "Ureteral tract infection", "Urethral tract infection"],
    correctAnswer: 0
  },
  {
    id: 218,
    question: "Kidney stones are also called:",
    choices: ["Calculi", "Cysts", "Tumors", "Polyps"],
    correctAnswer: 0
  },
  {
    id: 219,
    question: "Dialysis is used for:",
    choices: ["Heart failure", "Lung failure", "Kidney failure", "Liver failure"],
    correctAnswer: 2
  },
  {
    id: 220,
    question: "The two types of dialysis are:",
    choices: ["Internal and external", "Hemodialysis and peritoneal", "Acute and chronic", "Primary and secondary"],
    correctAnswer: 1
  },
  {
    id: 221,
    question: "The nervous system is divided into:",
    choices: ["Central and peripheral", "Sympathetic and parasympathetic", "Motor and sensory", "Voluntary and involuntary"],
    correctAnswer: 0
  },
  {
    id: 222,
    question: "The central nervous system consists of:",
    choices: ["Brain only", "Spinal cord only", "Brain and spinal cord", "All nerves"],
    correctAnswer: 2
  },
  {
    id: 223,
    question: "The largest part of the brain is the:",
    choices: ["Cerebellum", "Cerebrum", "Brain stem", "Diencephalon"],
    correctAnswer: 1
  },
  {
    id: 224,
    question: "The cerebrum is divided into:",
    choices: ["2 hemispheres", "3 hemispheres", "4 hemispheres", "5 hemispheres"],
    correctAnswer: 0
  },
  {
    id: 225,
    question: "The cerebellum controls:",
    choices: ["Thinking", "Balance and coordination", "Breathing", "Heart rate"],
    correctAnswer: 1
  },
  {
    id: 226,
    question: "The brain stem controls:",
    choices: ["Thinking", "Balance", "Vital functions", "Memory"],
    correctAnswer: 2
  },
  {
    id: 227,
    question: "The spinal cord extends from the:",
    choices: ["Brain to pelvis", "Brain to lumbar region", "Neck to pelvis", "Chest to pelvis"],
    correctAnswer: 1
  },
  {
    id: 228,
    question: "There are how many pairs of spinal nerves?",
    choices: ["31", "33", "35", "37"],
    correctAnswer: 0
  },
  {
    id: 229,
    question: "There are how many pairs of cranial nerves?",
    choices: ["10", "12", "14", "16"],
    correctAnswer: 1
  },
  {
    id: 230,
    question: "The autonomic nervous system controls:",
    choices: ["Voluntary movement", "Involuntary functions", "Conscious thought", "Memory"],
    correctAnswer: 1
  },
  {
    id: 231,
    question: "The sympathetic nervous system is responsible for:",
    choices: ["Rest and digest", "Fight or flight", "Sleep", "Digestion"],
    correctAnswer: 1
  },
  {
    id: 232,
    question: "The parasympathetic nervous system is responsible for:",
    choices: ["Rest and digest", "Fight or flight", "Stress response", "Emergency response"],
    correctAnswer: 0
  },
  {
    id: 233,
    question: "Neurons are:",
    choices: ["Muscle cells", "Nerve cells", "Blood cells", "Bone cells"],
    correctAnswer: 1
  },
  {
    id: 234,
    question: "The basic unit of the nervous system is the:",
    choices: ["Axon", "Dendrite", "Neuron", "Synapse"],
    correctAnswer: 2
  },
  {
    id: 235,
    question: "Neurotransmitters are:",
    choices: ["Hormones", "Enzymes", "Chemical messengers", "Proteins"],
    correctAnswer: 2
  },
  {
    id: 236,
    question: "A stroke is caused by:",
    choices: ["Heart attack", "Interrupted blood flow to brain", "Lung disease", "Kidney failure"],
    correctAnswer: 1
  },
  {
    id: 237,
    question: "Alzheimer's disease affects:",
    choices: ["Heart", "Lungs", "Brain", "Kidneys"],
    correctAnswer: 2
  },
  {
    id: 238,
    question: "Parkinson's disease affects:",
    choices: ["Memory", "Movement", "Vision", "Hearing"],
    correctAnswer: 1
  },
  {
    id: 239,
    question: "Epilepsy is characterized by:",
    choices: ["Memory loss", "Seizures", "Paralysis", "Blindness"],
    correctAnswer: 1
  },
  {
    id: 240,
    question: "A concussion is a type of:",
    choices: ["Heart injury", "Lung injury", "Brain injury", "Kidney injury"],
    correctAnswer: 2
  },
  {
    id: 241,
    question: "The endocrine system consists of:",
    choices: ["Nerves", "Muscles", "Glands", "Bones"],
    correctAnswer: 2
  },
  {
    id: 242,
    question: "Hormones are:",
    choices: ["Enzymes", "Chemical messengers", "Proteins", "Vitamins"],
    correctAnswer: 1
  },
  {
    id: 243,
    question: "The master gland is the:",
    choices: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
    correctAnswer: 2
  },
  {
    id: 244,
    question: "The thyroid gland regulates:",
    choices: ["Blood sugar", "Metabolism", "Blood pressure", "Heart rate"],
    correctAnswer: 1
  },
  {
    id: 245,
    question: "Insulin is produced by the:",
    choices: ["Liver", "Pancreas", "Kidney", "Thyroid"],
    correctAnswer: 1
  },
  {
    id: 246,
    question: "Diabetes is caused by:",
    choices: ["Too much insulin", "Too little insulin", "No insulin", "Both B and C"],
    correctAnswer: 3
  },
  {
    id: 247,
    question: "The adrenal glands produce:",
    choices: ["Insulin", "Thyroxine", "Adrenaline", "Growth hormone"],
    correctAnswer: 2
  },
  {
    id: 248,
    question: "Adrenaline is also called:",
    choices: ["Epinephrine", "Norepinephrine", "Dopamine", "Serotonin"],
    correctAnswer: 0
  },
  {
    id: 249,
    question: "The parathyroid glands regulate:",
    choices: ["Blood sugar", "Metabolism", "Calcium", "Blood pressure"],
    correctAnswer: 2
  },
  {
    id: 250,
    question: "Growth hormone is produced by the:",
    choices: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"],
    correctAnswer: 2
  },
  {
    id: 251,
    question: "The reproductive system functions to:",
    choices: ["Produce hormones", "Produce gametes", "Enable reproduction", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 252,
    question: "The male reproductive system produces:",
    choices: ["Eggs", "Sperm", "Both", "Neither"],
    correctAnswer: 1
  },
  {
    id: 253,
    question: "The female reproductive system produces:",
    choices: ["Eggs", "Sperm", "Both", "Neither"],
    correctAnswer: 0
  },
  {
    id: 254,
    question: "Testosterone is produced by the:",
    choices: ["Ovaries", "Testes", "Adrenals", "Pituitary"],
    correctAnswer: 1
  },
  {
    id: 255,
    question: "Estrogen is produced by the:",
    choices: ["Ovaries", "Testes", "Adrenals", "Pituitary"],
    correctAnswer: 0
  },
  {
    id: 256,
    question: "The menstrual cycle lasts approximately:",
    choices: ["21 days", "28 days", "35 days", "42 days"],
    correctAnswer: 1
  },
  {
    id: 257,
    question: "Ovulation occurs approximately:",
    choices: ["Day 7", "Day 14", "Day 21", "Day 28"],
    correctAnswer: 1
  },
  {
    id: 258,
    question: "Pregnancy lasts approximately:",
    choices: ["36 weeks", "40 weeks", "44 weeks", "48 weeks"],
    correctAnswer: 1
  },
  {
    id: 259,
    question: "The placenta functions to:",
    choices: ["Nourish the fetus", "Remove waste", "Produce hormones", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 260,
    question: "Menopause is:",
    choices: ["Beginning of menstruation", "End of menstruation", "Irregular menstruation", "Painful menstruation"],
    correctAnswer: 1
  },
  {
    id: 261,
    question: "The musculoskeletal system consists of:",
    choices: ["Muscles only", "Bones only", "Muscles and bones", "Muscles, bones, and joints"],
    correctAnswer: 3
  },
  {
    id: 262,
    question: "The human body has approximately how many bones?",
    choices: ["106", "206", "306", "406"],
    correctAnswer: 1
  },
  {
    id: 263,
    question: "Bones function to:",
    choices: ["Support the body", "Protect organs", "Produce blood cells", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 264,
    question: "Red bone marrow produces:",
    choices: ["Fat", "Blood cells", "Cartilage", "Protein"],
    correctAnswer: 1
  },
  {
    id: 265,
    question: "Yellow bone marrow stores:",
    choices: ["Blood", "Fat", "Calcium", "Protein"],
    correctAnswer: 1
  },
  {
    id: 266,
    question: "The longest bone in the body is the:",
    choices: ["Humerus", "Tibia", "Femur", "Fibula"],
    correctAnswer: 2
  },
  {
    id: 267,
    question: "The smallest bone in the body is in the:",
    choices: ["Hand", "Foot", "Ear", "Nose"],
    correctAnswer: 2
  },
  {
    id: 268,
    question: "Joints are classified by:",
    choices: ["Size", "Shape", "Movement", "Location"],
    correctAnswer: 2
  },
  {
    id: 269,
    question: "Immovable joints are called:",
    choices: ["Synovial", "Cartilaginous", "Fibrous", "Ball and socket"],
    correctAnswer: 2
  },
  {
    id: 270,
    question: "Freely movable joints are called:",
    choices: ["Synovial", "Cartilaginous", "Fibrous", "Fixed"],
    correctAnswer: 0
  },
  {
    id: 271,
    question: "The human body has approximately how many muscles?",
    choices: ["400", "500", "600", "700"],
    correctAnswer: 2
  },
  {
    id: 272,
    question: "Muscles are classified as:",
    choices: ["Skeletal", "Cardiac", "Smooth", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 273,
    question: "Skeletal muscle is:",
    choices: ["Voluntary", "Involuntary", "Automatic", "Unconscious"],
    correctAnswer: 0
  },
  {
    id: 274,
    question: "Cardiac muscle is found in the:",
    choices: ["Arms", "Legs", "Heart", "Stomach"],
    correctAnswer: 2
  },
  {
    id: 275,
    question: "Smooth muscle is found in:",
    choices: ["Arms", "Legs", "Internal organs", "Heart"],
    correctAnswer: 2
  },
  {
    id: 276,
    question: "Muscles contract by:",
    choices: ["Stretching", "Shortening", "Twisting", "Bending"],
    correctAnswer: 1
  },
  {
    id: 277,
    question: "Tendons connect:",
    choices: ["Bone to bone", "Muscle to muscle", "Muscle to bone", "Nerve to muscle"],
    correctAnswer: 2
  },
  {
    id: 278,
    question: "Ligaments connect:",
    choices: ["Bone to bone", "Muscle to muscle", "Muscle to bone", "Nerve to muscle"],
    correctAnswer: 0
  },
  {
    id: 279,
    question: "A fracture is a:",
    choices: ["Muscle tear", "Broken bone", "Joint dislocation", "Nerve injury"],
    correctAnswer: 1
  },
  {
    id: 280,
    question: "Osteoporosis is:",
    choices: ["Muscle weakness", "Bone loss", "Joint inflammation", "Nerve damage"],
    correctAnswer: 1
  },
  {
    id: 281,
    question: "The integumentary system consists of:",
    choices: ["Skin only", "Hair only", "Nails only", "Skin, hair, and nails"],
    correctAnswer: 3
  },
  {
    id: 282,
    question: "The skin has how many layers?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 1
  },
  {
    id: 283,
    question: "The outermost layer of skin is the:",
    choices: ["Dermis", "Epidermis", "Hypodermis", "Subcutaneous"],
    correctAnswer: 1
  },
  {
    id: 284,
    question: "The middle layer of skin is the:",
    choices: ["Dermis", "Epidermis", "Hypodermis", "Subcutaneous"],
    correctAnswer: 0
  },
  {
    id: 285,
    question: "The deepest layer of skin is the:",
    choices: ["Dermis", "Epidermis", "Hypodermis", "Subcutaneous"],
    correctAnswer: 2
  },
  {
    id: 286,
    question: "The skin functions to:",
    choices: ["Protect the body", "Regulate temperature", "Produce vitamin D", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 287,
    question: "Sweat glands help to:",
    choices: ["Protect skin", "Cool the body", "Produce oil", "Grow hair"],
    correctAnswer: 1
  },
  {
    id: 288,
    question: "Sebaceous glands produce:",
    choices: ["Sweat", "Oil", "Hair", "Nails"],
    correctAnswer: 1
  },
  {
    id: 289,
    question: "Hair grows from:",
    choices: ["Epidermis", "Dermis", "Follicles", "Glands"],
    correctAnswer: 2
  },
  {
    id: 290,
    question: "Nails are made of:",
    choices: ["Calcium", "Keratin", "Collagen", "Protein"],
    correctAnswer: 1
  },
  {
    id: 291,
    question: "A burn that affects only the epidermis is:",
    choices: ["First degree", "Second degree", "Third degree", "Fourth degree"],
    correctAnswer: 0
  },
  {
    id: 292,
    question: "A burn that affects the epidermis and dermis is:",
    choices: ["First degree", "Second degree", "Third degree", "Fourth degree"],
    correctAnswer: 1
  },
  {
    id: 293,
    question: "A burn that affects all layers of skin is:",
    choices: ["First degree", "Second degree", "Third degree", "Fourth degree"],
    correctAnswer: 2
  },
  {
    id: 294,
    question: "Melanin is responsible for:",
    choices: ["Hair color", "Skin color", "Eye color", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 295,
    question: "Vitamin D is produced in the:",
    choices: ["Liver", "Kidneys", "Skin", "Bones"],
    correctAnswer: 2
  },
  {
    id: 296,
    question: "The rule of nines is used to estimate:",
    choices: ["Age", "Weight", "Burn area", "Blood loss"],
    correctAnswer: 2
  },
  {
    id: 297,
    question: "Pressure ulcers are caused by:",
    choices: ["Infection", "Poor circulation", "Pressure", "All of the above"],
    correctAnswer: 2
  },
  {
    id: 298,
    question: "Wound healing occurs in how many phases?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: 2
  },
  {
    id: 299,
    question: "The inflammatory phase of wound healing lasts:",
    choices: ["1-2 days", "3-5 days", "1-2 weeks", "3-4 weeks"],
    correctAnswer: 1
  },
  {
    id: 300,
    question: "Collagen is important for:",
    choices: ["Blood clotting", "Wound healing", "Infection fighting", "Pain relief"],
    correctAnswer: 1
  },
  {
    id: 301,
    question: "What is the most important principle of surgical asepsis?",
    choices: ["Speed", "Sterile technique", "Cost effectiveness", "Patient comfort"],
    correctAnswer: 1
  },
  {
    id: 302,
    question: "The sterile field is established:",
    choices: ["Before patient arrival", "After patient positioning", "During surgery", "After surgery"],
    correctAnswer: 1
  },
  {
    id: 303,
    question: "Sterile team members include:",
    choices: ["Surgeon only", "Surgeon and assistant", "Surgeon, assistant, and scrub tech", "All OR personnel"],
    correctAnswer: 2
  },
  {
    id: 304,
    question: "Non-sterile team members include:",
    choices: ["Circulator", "Anesthesiologist", "Students", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 305,
    question: "The surgical scrub should last:",
    choices: ["1-2 minutes", "3-5 minutes", "10-15 minutes", "20-30 minutes"],
    correctAnswer: 1
  },
  {
    id: 306,
    question: "Surgical gowns should be:",
    choices: ["Fluid resistant", "Comfortable", "Fashionable", "Colorful"],
    correctAnswer: 0
  },
  {
    id: 307,
    question: "Sterile gloves should be changed:",
    choices: ["Every hour", "When contaminated", "Between procedures", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 308,
    question: "The sterile field extends:",
    choices: ["To the floor", "To table level", "1 inch below table level", "2 inches below table level"],
    correctAnswer: 1
  },
  {
    id: 309,
    question: "Contamination occurs when:",
    choices: ["Sterile touches non-sterile", "Items fall below table level", "Packages become wet", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 310,
    question: "When in doubt about sterility:",
    choices: ["Use the item", "Ask someone", "Consider it contaminated", "Test it"],
    correctAnswer: 2
  },
  {
    id: 311,
    question: "The surgical conscience means:",
    choices: ["Legal responsibility", "Moral responsibility", "Financial responsibility", "Personal responsibility"],
    correctAnswer: 1
  },
  {
    id: 312,
    question: "Breaking sterile technique should be:",
    choices: ["Ignored", "Reported immediately", "Fixed quietly", "Discussed later"],
    correctAnswer: 1
  },
  {
    id: 313,
    question: "The most reliable sterilization method is:",
    choices: ["Chemical", "Gas", "Steam", "Radiation"],
    correctAnswer: 2
  },
  {
    id: 314,
    question: "Steam sterilization requires:",
    choices: ["Heat only", "Moisture only", "Pressure only", "Heat, moisture, and pressure"],
    correctAnswer: 3
  },
  {
    id: 315,
    question: "Standard steam sterilization temperature is:",
    choices: ["250°F", "270°F", "285°F", "300°F"],
    correctAnswer: 1
  },
  {
    id: 316,
    question: "Biological indicators test for:",
    choices: ["Temperature", "Pressure", "Time", "Sterilization effectiveness"],
    correctAnswer: 3
  },
  {
    id: 317,
    question: "Chemical indicators show:",
    choices: ["Sterilization achieved", "Exposure to sterilizing conditions", "Temperature reached", "Time elapsed"],
    correctAnswer: 1
  },
  {
    id: 319,
    question: "Ethylene oxide is used for:",
    choices: ["All instruments", "Heat-sensitive items", "Routine sterilization", "Emergency sterilization"],
    correctAnswer: 1
  },
  {
    id: 320,
    question: "ETO sterilization requires:",
    choices: ["High temperature", "Aeration time", "Immediate use", "Special packaging"],
    correctAnswer: 1
  },
  {
    id: 321,
    question: "Hydrogen peroxide sterilization is also called:",
    choices: ["Gas plasma", "Steam sterilization", "Chemical sterilization", "Cold sterilization"],
    correctAnswer: 0
  },
  {
    id: 322,
    question: "The advantage of hydrogen peroxide sterilization is:",
    choices: ["Low cost", "No aeration needed", "High temperature", "Long cycle time"],
    correctAnswer: 1
  },
  {
    id: 323,
    question: "Instrument cleaning should occur:",
    choices: ["At end of day", "Between cases", "Immediately after use", "When convenient"],
    correctAnswer: 2
  },
  {
    id: 326,
    question: "Enzymatic cleaners remove:",
    choices: ["Bacteria", "Viruses", "Protein", "Minerals"],
    correctAnswer: 2
  },
  {
    id: 327,
    question: "Instruments should be dried:",
    choices: ["With towels", "By air", "With heat", "Any method"],
    correctAnswer: 1
  },
  {
    id: 328,
    question: "Instrument milk is used to:",
    choices: ["Clean", "Disinfect", "Lubricate", "Sterilize"],
    correctAnswer: 2
  },
  {
    id: 329,
    question: "Packaging materials must:",
    choices: ["Allow sterilant penetration", "Maintain sterility", "Provide aseptic presentation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 330,
    question: "Paper-plastic pouches should be loaded:",
    choices: ["Paper side down", "Plastic side down", "Either way", "Standing up"],
    correctAnswer: 0
  },
  {
    id: 331,
    question: "Maximum weight for instrument sets is:",
    choices: ["15 pounds", "20 pounds", "25 pounds", "30 pounds"],
    correctAnswer: 2
  },
  {
    id: 332,
    question: "Rigid containers must be:",
    choices: ["Sealed tight", "Vented", "Wrapped", "Locked"],
    correctAnswer: 1
  },
  {
    id: 333,
    question: "Wet packs are considered:",
    choices: ["Sterile", "Contaminated", "Acceptable", "Usable"],
    correctAnswer: 1
  },
  {
    id: 334,
    question: "Sterilizer records should be kept for:",
    choices: ["1 year", "3 years", "5 years", "10 years"],
    correctAnswer: 1
  },
  {
    id: 335,
    question: "Quality assurance includes:",
    choices: ["Monitoring only", "Documentation only", "Training only", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 339,
    question: "Healthcare-associated infections are:",
    choices: ["Inevitable", "Preventable", "Rare", "Harmless"],
    correctAnswer: 1
  },
  {
    id: 340,
    question: "Surgical site infections can be:",
    choices: ["Superficial only", "Deep only", "Organ/space only", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 341,
    question: "Preoperative skin prep should:",
    choices: ["Remove all bacteria", "Reduce bacterial count", "Sterilize the skin", "Change skin color"],
    correctAnswer: 1
  },
  {
    id: 342,
    question: "The most effective skin antiseptic is:",
    choices: ["Alcohol", "Iodine", "Chlorhexidine", "Soap"],
    correctAnswer: 2
  },
  {
    id: 343,
    question: "Hair removal should be:",
    choices: ["Always done", "Done if necessary", "Never done", "Done by shaving"],
    correctAnswer: 1
  },
  {
    id: 344,
    question: "If hair removal is needed, use:",
    choices: ["Razor", "Clippers", "Depilatory", "Laser"],
    correctAnswer: 1
  },
  {
    id: 345,
    question: "Antibiotic prophylaxis should be given:",
    choices: ["After surgery", "During surgery", "Before incision", "Any time"],
    correctAnswer: 2
  },
  {
    id: 346,
    question: "Prophylactic antibiotics should be given:",
    choices: ["30-60 minutes before incision", "At incision", "After incision", "Post-operatively"],
    correctAnswer: 0
  },
  {
    id: 347,
    question: "Maintaining normothermia:",
    choices: ["Increases infection risk", "Decreases infection risk", "Has no effect", "Is not important"],
    correctAnswer: 1
  },
  {
    id: 348,
    question: "Hyperglycemia:",
    choices: ["Decreases infection risk", "Increases infection risk", "Has no effect", "Is beneficial"],
    correctAnswer: 1
  },
  {
    id: 349,
    question: "Adequate tissue oxygenation:",
    choices: ["Increases infection risk", "Decreases infection risk", "Has no effect", "Is harmful"],
    correctAnswer: 1
  },
  {
    id: 350,
    question: "Proper wound closure should:",
    choices: ["Eliminate dead space", "Approximate tissues", "Control bleeding", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 351,
    question: "SSI surveillance period is:",
    choices: ["7 days", "14 days", "30 days", "60 days"],
    correctAnswer: 2
  },
  {
    id: 352,
    question: "For implants, SSI surveillance is:",
    choices: ["30 days", "90 days", "1 year", "2 years"],
    correctAnswer: 2
  },
  {
    id: 353,
    question: "MRSA stands for:",
    choices: ["Methicillin-resistant Staphylococcus aureus", "Multiple-resistant Streptococcus aureus", "Methicillin-resistant Streptococcus aureus", "Multiple-resistant Staphylococcus aureus"],
    correctAnswer: 0
  },
  {
    id: 354,
    question: "VRE stands for:",
    choices: ["Vancomycin-resistant Enterococcus", "Vancomycin-resistant Escherichia", "Virus-resistant Enterococcus", "Variable-resistant Enterococcus"],
    correctAnswer: 0
  },
  {
    id: 355,
    question: "C. difficile requires:",
    choices: ["Contact precautions", "Droplet precautions", "Airborne precautions", "Standard precautions only"],
    correctAnswer: 0
  },
  {
    id: 357,
    question: "Contact precautions require:",
    choices: ["Private room", "Gloves and gown", "Dedicated equipment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 358,
    question: "Droplet precautions require:",
    choices: ["N95 mask", "Surgical mask", "No mask needed", "Face shield only"],
    correctAnswer: 1
  },
  {
    id: 359,
    question: "Airborne precautions require:",
    choices: ["Surgical mask", "N95 respirator", "No mask needed", "Face shield only"],
    correctAnswer: 1
  },
  {
    id: 360,
    question: "Tuberculosis requires:",
    choices: ["Contact precautions", "Droplet precautions", "Airborne precautions", "Standard precautions only"],
    correctAnswer: 2
  },
  {
    id: 361,
    question: "N95 fit testing should be done:",
    choices: ["Monthly", "Quarterly", "Annually", "Never"],
    correctAnswer: 2
  },
  {
    id: 362,
    question: "Bloodborne pathogens include:",
    choices: ["HIV only", "Hepatitis B only", "Hepatitis C only", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 363,
    question: "Needlestick injuries should be:",
    choices: ["Ignored", "Reported immediately", "Treated at home", "Reported later"],
    correctAnswer: 1
  },
  {
    id: 364,
    question: "HIV post-exposure prophylaxis should begin:",
    choices: ["Within 1 hour", "Within 2 hours", "Within 24 hours", "Within 1 week"],
    correctAnswer: 1
  },
  {
    id: 365,
    question: "Hepatitis B vaccination is:",
    choices: ["Optional", "Recommended", "Required for healthcare workers", "Not available"],
    correctAnswer: 2
  },
  {
    id: 366,
    question: "Sharps containers should be filled to:",
    choices: ["Full capacity", "3/4 capacity", "2/3 capacity", "1/2 capacity"],
    correctAnswer: 2
  },
  {
    id: 367,
    question: "Used needles should:",
    choices: ["Be recapped", "Never be recapped", "Be bent", "Be broken"],
    correctAnswer: 1
  },
  {
    id: 368,
    question: "The exposure control plan must be:",
    choices: ["Written", "Updated annually", "Accessible to employees", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 369,
    question: "Engineering controls include:",
    choices: ["Safety devices", "Work practices", "Personal protective equipment", "Training programs"],
    correctAnswer: 0
  },
  {
    id: 370,
    question: "Work practice controls include:",
    choices: ["Safety devices", "Proper techniques", "Personal protective equipment", "Training programs"],
    correctAnswer: 1
  },
  {
    id: 372,
    question: "Bloodborne pathogen training must be:",
    choices: ["Initial only", "Annual only", "When procedures change", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 373,
    question: "Medical surveillance includes:",
    choices: ["Vaccination", "Post-exposure evaluation", "Medical records", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 374,
    question: "Exposure records must be kept for:",
    choices: ["1 year", "3 years", "Duration of employment plus 30 years", "Permanently"],
    correctAnswer: 2
  },
  {
    id: 375,
    question: "The surgical technologist's infection control role includes:",
    choices: ["Following policies", "Maintaining sterility", "Reporting problems", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 376,
    question: "Continuing education in infection control is:",
    choices: ["Optional", "Recommended", "Required", "Not necessary"],
    correctAnswer: 2
  },
  {
    id: 377,
    question: "Patient safety is:",
    choices: ["The doctor's responsibility", "The nurse's responsibility", "Everyone's responsibility", "Not important"],
    correctAnswer: 2
  },
  {
    id: 378,
    question: "The goal of infection control is to:",
    choices: ["Eliminate all microorganisms", "Prevent healthcare-associated infections", "Use more antibiotics", "Isolate all patients"],
    correctAnswer: 1
  },
  {
    id: 379,
    question: "Evidence-based practice means using:",
    choices: ["Tradition", "Experience", "Research", "Personal preference"],
    correctAnswer: 2
  },
  {
    id: 380,
    question: "Quality improvement involves:",
    choices: ["Data collection", "Analysis", "Implementation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 381,
    question: "The infection control practitioner's role includes:",
    choices: ["Surveillance", "Education", "Policy development", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 382,
    question: "Multidrug-resistant organisms are concerning because of:",
    choices: ["Limited treatment options", "Increased morbidity", "Increased costs", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 383,
    question: "The chain of infection includes:",
    choices: ["Agent", "Host", "Environment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 384,
    question: "Breaking the chain of infection can occur at:",
    choices: ["One point only", "Two points only", "Multiple points", "No points"],
    correctAnswer: 2
  },
  {
    id: 385,
    question: "The most common healthcare-associated infection is:",
    choices: ["Pneumonia", "Urinary tract infection", "Surgical site infection", "Bloodstream infection"],
    correctAnswer: 1
  },
  {
    id: 386,
    question: "Risk factors for SSI include:",
    choices: ["Patient factors", "Procedure factors", "Environmental factors", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 387,
    question: "The CDC provides:",
    choices: ["Regulations", "Guidelines", "Laws", "Requirements"],
    correctAnswer: 1
  },
  {
    id: 388,
    question: "OSHA provides:",
    choices: ["Guidelines", "Recommendations", "Regulations", "Suggestions"],
    correctAnswer: 2
  },
  {
    id: 389,
    question: "AORN provides:",
    choices: ["Regulations", "Recommended practices", "Laws", "Requirements"],
    correctAnswer: 1
  },
  {
    id: 390,
    question: "Professional organizations help with:",
    choices: ["Standards", "Education", "Certification", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 391,
    question: "Certification demonstrates:",
    choices: ["Minimum competency", "Continuing education", "Professional commitment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 392,
    question: "Continuing education is important for:",
    choices: ["Maintaining certification", "Staying current", "Professional growth", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 393,
    question: "Professional development includes:",
    choices: ["Education", "Training", "Experience", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 394,
    question: "Ethical practice includes:",
    choices: ["Honesty", "Integrity", "Accountability", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 395,
    question: "Legal practice includes:",
    choices: ["Following laws", "Following regulations", "Following policies", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 396,
    question: "Scope of practice defines:",
    choices: ["What you can do", "What you cannot do", "Your responsibilities", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 397,
    question: "Delegation requires:",
    choices: ["Proper training", "Appropriate supervision", "Clear communication", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 398,
    question: "Documentation should be:",
    choices: ["Accurate", "Complete", "Timely", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 399,
    question: "Communication in healthcare should be:",
    choices: ["Clear", "Concise", "Complete", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 400,
    question: "Teamwork in the OR requires:",
    choices: ["Cooperation", "Communication", "Coordination", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 401,
    question: "Patient advocacy means:",
    choices: ["Speaking for the patient", "Protecting patient rights", "Ensuring patient safety", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 402,
    question: "Cultural competence includes:",
    choices: ["Understanding differences", "Respecting diversity", "Providing appropriate care", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 403,
    question: "Patient confidentiality is:",
    choices: ["Optional", "Recommended", "Required", "Not important"],
    correctAnswer: 2
  },
  {
    id: 404,
    question: "HIPAA protects:",
    choices: ["Patient privacy", "Health information", "Medical records", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 405,
    question: "Informed consent requires:",
    choices: ["Information", "Understanding", "Voluntary agreement", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 406,
    question: "Patient rights include:",
    choices: ["Respect", "Privacy", "Information", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 407,
    question: "Quality assurance focuses on:",
    choices: ["Structure", "Process", "Outcome", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 408,
    question: "Risk management involves:",
    choices: ["Identifying risks", "Preventing problems", "Managing incidents", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 409,
    question: "Incident reporting should be:",
    choices: ["Immediate", "Accurate", "Complete", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 410,
    question: "Root cause analysis helps:",
    choices: ["Identify problems", "Find solutions", "Prevent recurrence", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 411,
    question: "Performance improvement is:",
    choices: ["Ongoing", "Systematic", "Data-driven", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 412,
    question: "Benchmarking compares:",
    choices: ["Current performance", "Best practices", "Industry standards", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 413,
    question: "Change management requires:",
    choices: ["Planning", "Communication", "Support", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 414,
    question: "Leadership involves:",
    choices: ["Vision", "Influence", "Motivation", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 415,
    question: "Management involves:",
    choices: ["Planning", "Organizing", "Controlling", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 416,
    question: "Conflict resolution requires:",
    choices: ["Communication", "Compromise", "Collaboration", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 417,
    question: "Stress management includes:",
    choices: ["Recognition", "Prevention", "Coping strategies", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 418,
    question: "Time management involves:",
    choices: ["Prioritizing", "Planning", "Organizing", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 419,
    question: "Critical thinking requires:",
    choices: ["Analysis", "Evaluation", "Problem-solving", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 420,
    question: "Decision making involves:",
    choices: ["Identifying options", "Evaluating alternatives", "Choosing best option", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 421,
    question: "Technology in healthcare:",
    choices: ["Improves efficiency", "Enhances safety", "Increases accuracy", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 422,
    question: "Future trends in surgery include:",
    choices: ["Minimally invasive techniques", "Robotic surgery", "Telemedicine", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 423,
    question: "Lifelong learning is:",
    choices: ["Optional", "Recommended", "Essential", "Not necessary"],
    correctAnswer: 2
  },
  {
    id: 424,
    question: "Professional growth requires:",
    choices: ["Education", "Experience", "Mentorship", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 425,
    question: "The future of surgical technology depends on:",
    choices: ["Technology advances", "Education quality", "Professional commitment", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 426,
    question: "Which of the following should never be handed across the sterile field?",
    choices: ["Drapes", "Instruments", "Sutures", "Sponges"],
    correctAnswer: 0
  },
  {
    id: 427,
    question: "How should drapes be organized on your back table?",
    choices: ["In random order", "In order of use", "By color", "By size"],
    correctAnswer: 1
  },
  {
    id: 428,
    question: "What is the correct order for handing disposable utility drapes?",
    choices: ["Same side, opposite side, inferior", "Same side, superior, inferior", "Superior, inferior, same side", "Inferior, same side, superior"],
    correctAnswer: 1
  },
  {
    id: 429,
    question: "If a drape falls below table level, what should you do?",
    choices: ["Reposition it", "Ignore it", "Replace it", "Tape it back up"],
    correctAnswer: 2
  },
  {
    id: 430,
    question: "If a hair is found on a sterile drape, how should it be removed?",
    choices: ["By hand", "Use tape", "Use a clamp and cover with another drape", "Blow it away"],
    correctAnswer: 2
  },
  {
    id: 431,
    question: "Once a towel clip pierces a drape, when can it be removed?",
    choices: ["Never", "End of case", "Immediately", "During surgery if it's in the way"],
    correctAnswer: 1
  },
  {
    id: 432,
    question: "If a hole is discovered in the drape, what is the proper action?",
    choices: ["Tape over it", "Cover it with another sterile drape", "Ignore it", "Tell the circulator to fix it"],
    correctAnswer: 1
  },
  {
    id: 433,
    question: "When adjusting a poorly placed drape, who should remove it?",
    choices: ["Surgeon", "STSR", "Circulator", "Anesthesia"],
    correctAnswer: 2
  },
  {
    id: 434,
    question: "When draping, the folded edge of a towel should be placed:",
    choices: ["Up", "Down", "To the left", "To the right"],
    correctAnswer: 1
  },
  {
    id: 435,
    question: "What is the correct sequence for handing cloth towels to the surgeon?",
    choices: ["Right to left", "Top to bottom", "Same principles of utility drapes", "Any order"],
    correctAnswer: 2
  },
  {
    id: 436,
    question: "Which type of study focuses on cells?",
    choices: ["Histologic", "Cytologic", "Biopsy", "Frozen section"],
    correctAnswer: 1
  },
  {
    id: 437,
    question: "Permanent specimens are sent in:",
    choices: ["Dry container", "Saline", "Formalin", "Alcohol"],
    correctAnswer: 2
  },
  {
    id: 438,
    question: "Frozen sections should be sent:",
    choices: ["Immediately in dry container", "In formalin", "In saline", "On ice"],
    correctAnswer: 0
  },
  {
    id: 439,
    question: "Urine specimens are sent in what type of container?",
    choices: ["Dry", "Sterile", "Plastic bag", "Cotton"],
    correctAnswer: 1
  },
  {
    id: 440,
    question: "Who confirms the specimen with the surgeon before removal?",
    choices: ["Nurse", "Circulator", "STSR", "Pathologist"],
    correctAnswer: 2
  },
  {
    id: 441,
    question: "How should bullets be handled to preserve evidence?",
    choices: ["With sterile gloves", "With forceps", "With gloved hands", "With a towel"],
    correctAnswer: 2
  },
  {
    id: 442,
    question: "Gallstones and kidney stones are sent to pathology:",
    choices: ["Wet", "Frozen", "Dry", "On ice"],
    correctAnswer: 2
  },
  {
    id: 443,
    question: "A Gram stain is used to identify:",
    choices: ["Tumors", "Bacteria", "Cells", "Fungi"],
    correctAnswer: 1
  },
  {
    id: 444,
    question: "Gram positive bacteria stain:",
    choices: ["Red", "Blue or purple", "Green", "Yellow"],
    correctAnswer: 1
  },
  {
    id: 445,
    question: "Thoracentesis removes fluid from the:",
    choices: ["Peritoneal cavity", "Pleural cavity", "Bladder", "Joint"],
    correctAnswer: 1
  },
  {
    id: 446,
    question: "When is the first count performed?",
    choices: ["Before incision", "After incision", "During closure", "End of case"],
    correctAnswer: 0
  },
  {
    id: 447,
    question: "What is the correct order of the surgical field during closing counts?",
    choices: ["Mayo, back table, field", "Field, Mayo, back table", "Field, back table, Mayo", "Back table, Mayo, field"],
    correctAnswer: 1
  },
  {
    id: 448,
    question: "In an emergency, an omitted count must be:",
    choices: ["Ignored", "Documented", "Repeated", "Reported verbally only"],
    correctAnswer: 1
  },
  {
    id: 449,
    question: "If a count discrepancy occurs, what is the first step?",
    choices: ["Notify the surgeon", "Start over", "Check the floor", "Call radiology"],
    correctAnswer: 0
  },
  {
    id: 450,
    question: "The Doctrine of Res Ipsa Loquitur means:",
    choices: ["The surgeon is always liable", "The thing speaks for itself", "Never assume negligence", "Patient consent is implied"],
    correctAnswer: 1
  },
  {
    id: 451,
    question: "Sponges on the sterile field should be:",
    choices: ["Non-radiopaque", "Radiopaque", "Any kind", "Dry"],
    correctAnswer: 1
  },
  {
    id: 452,
    question: "Which sponges come in packs of 10?",
    choices: ["Laps", "Raytec", "Peanuts", "Cottonoids"],
    correctAnswer: 1
  },
  {
    id: 453,
    question: "Kittner dissectors are used for:",
    choices: ["Cutting sutures", "Retracting", "Blunt dissection", "Suction"],
    correctAnswer: 2
  },
  {
    id: 454,
    question: "What position is the ESU tip counted in?",
    choices: ["Always counted", "Optional", "Never counted", "Only in laparoscopic"],
    correctAnswer: 0
  },
  {
    id: 455,
    question: "The Mayo stand and back table remain sterile until:",
    choices: ["Skin is closed", "Patient leaves the room", "Surgeon says so", "Next patient arrives"],
    correctAnswer: 1
  },
  {
    id: 456,
    question: "How many people are needed to move an immobile patient?",
    choices: ["Two", "Three", "Four", "One"],
    correctAnswer: 2
  },
  {
    id: 457,
    question: "When transporting a patient through hallways, they should go:",
    choices: ["Head first", "Feet first", "Sideways", "At an angle"],
    correctAnswer: 1
  },
  {
    id: 458,
    question: "Arms on arm boards must not exceed:",
    choices: ["45°", "60°", "90°", "120°"],
    correctAnswer: 2
  },
  {
    id: 459,
    question: "Which device provides warm air through blankets?",
    choices: ["Blanketrol", "Bair Hugger", "Fluid warmer", "Warming lamp"],
    correctAnswer: 1
  },
  {
    id: 460,
    question: "Which is one way heat loss occurs in the OR?",
    choices: ["Radiation", "Inhalation", "Insulation", "Infection"],
    correctAnswer: 0
  },
  {
    id: 461,
    question: "Sequential compression devices (SCDs) prevent:",
    choices: ["Hypothermia", "Bradycardia", "Venous stasis", "Hypertension"],
    correctAnswer: 2
  },
  {
    id: 462,
    question: "Normal oral temperature is:",
    choices: ["97.6°F", "99.6°F", "98.6°F", "100.6°F"],
    correctAnswer: 2
  },
  {
    id: 463,
    question: "Normal adult heart rate is:",
    choices: ["80–120 bpm", "60–80 bpm", "110–130 bpm", "130–160 bpm"],
    correctAnswer: 1
  },
  {
    id: 464,
    question: "Apnea refers to:",
    choices: ["Rapid breathing", "Cessation of breathing", "Deep breathing", "Shallow breathing"],
    correctAnswer: 1
  },
  {
    id: 465,
    question: "Korotkoff's sounds are used to measure:",
    choices: ["Pulse", "Respiration", "Blood pressure", "Oxygenation"],
    correctAnswer: 2
  },
  {
    id: 466,
    question: "The Semi-Fowler's position places the upper body at what approximate angle?",
    choices: ["45°", "60°", "85°", "30°"],
    correctAnswer: 2
  },
  {
    id: 467,
    question: "A major concern with the Semi-Fowler's position is:",
    choices: ["Foot drop", "Air embolism", "Hypothermia", "Bradycardia"],
    correctAnswer: 1
  },
  {
    id: 468,
    question: "In the lithotomy position, stirrups must:",
    choices: ["Be padded for support", "Be equal in height and length", "Support only one leg at a time", "Be placed after draping"],
    correctAnswer: 1
  },
  {
    id: 469,
    question: "What is the primary use of the prone position?",
    choices: ["Spine and posterior cranium surgery", "Abdominal surgery", "Cardiac surgery", "Pelvic surgery"],
    correctAnswer: 0
  },
  {
    id: 470,
    question: "In the Sims position, the left leg is _______ and the right leg is _______.",
    choices: ["Bent; straight", "Straight; bent", "Bent; bent", "Straight; straight"],
    correctAnswer: 1
  },
  {
    id: 471,
    question: "The jackknife (Kraske) position is a modification of:",
    choices: ["Supine position", "Prone position", "Lateral position", "Fowler's position"],
    correctAnswer: 1
  },
  {
    id: 472,
    question: "In the lateral position, what is used to support the upper arm?",
    choices: ["Bean bag", "Mayo stand", "Shoulder brace", "Axillary roll"],
    correctAnswer: 1
  },
  {
    id: 473,
    question: "The kidney position is a modification of which position?",
    choices: ["Prone", "Supine", "Lateral", "Fowler's"],
    correctAnswer: 2
  },
  {
    id: 474,
    question: "The knee-chest position is similar to the jackknife position but differs because:",
    choices: ["Arms are crossed on chest", "Legs are bent at 90°", "Upper body is raised", "Arms are tucked under body"],
    correctAnswer: 1
  },
  {
    id: 475,
    question: "Which position is used for surgery of the vagina, perineum, and rectum?",
    choices: ["Prone", "Lithotomy", "Supine", "Trendelenburg"],
    correctAnswer: 1
  },
  {
    id: 476,
    question: "When opening a sterile package, which edge is considered contaminated?",
    choices: ["The inner edge", "The outer edge", "The folded edge", "All edges are sterile"],
    correctAnswer: 1
  },
  {
    id: 477,
    question: "Which sterilization method uses ethylene oxide gas?",
    choices: ["Steam sterilization", "Dry heat sterilization", "Chemical sterilization", "Gas sterilization"],
    correctAnswer: 3
  },
  {
    id: 478,
    question: "Which of the following is a chemical indicator?",
    choices: ["Autoclave tape", "Biological indicator", "Mechanical indicator", "Temperature gauge"],
    correctAnswer: 0
  },
  {
    id: 479,
    question: "Biological indicators contain:",
    choices: ["Chemical dyes", "Heat-sensitive tape", "Living microorganisms", "pH indicators"],
    correctAnswer: 2
  },
  {
    id: 480,
    question: "The most resistant microorganism used in biological indicators is:",
    choices: ["Staphylococcus aureus", "Escherichia coli", "Geobacillus stearothermophilus", "Pseudomonas aeruginosa"],
    correctAnswer: 2
  },
  {
    id: 481,
    question: "The temperature for flash sterilization is typically:",
    choices: ["250°F (121°C)", "270°F (132°C)", "300°F (149°C)", "212°F (100°C)"],
    correctAnswer: 1
  },
  {
    id: 482,
    question: "Immediate use steam sterilization (IUSS) cycle time for non-porous items is:",
    choices: ["3 minutes", "4 minutes", "10 minutes", "15 minutes"],
    correctAnswer: 0
  },
  {
    id: 483,
    question: "Which of the following compromises sterility?",
    choices: ["Moisture", "Tears in packaging", "Dropping on floor", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 484,
    question: "The sterile storage area should maintain humidity between:",
    choices: ["30-60%", "70-80%", "10-20%", "80-90%"],
    correctAnswer: 0
  },
  {
    id: 485,
    question: "Sterile items should be stored:",
    choices: ["On the floor", "Against walls", "8-10 inches from ceiling", "In direct sunlight"],
    correctAnswer: 2
  },
  {
    id: 486,
    question: "High-level disinfection kills:",
    choices: ["Bacteria only", "Viruses only", "All microorganisms except spores", "All microorganisms including spores"],
    correctAnswer: 2
  },
  {
    id: 487,
    question: "Glutaraldehyde is used for:",
    choices: ["Sterilization", "High-level disinfection", "Cleaning", "Lubrication"],
    correctAnswer: 1
  },
  {
    id: 488,
    question: "Peracetic acid is:",
    choices: ["Low-level disinfectant", "Intermediate-level disinfectant", "High-level disinfectant", "Sterilant"],
    correctAnswer: 3
  },
  {
    id: 489,
    question: "Instrument sets should be assembled:",
    choices: ["In the OR", "In sterile processing", "By the surgeon", "By nursing"],
    correctAnswer: 1
  },
  {
    id: 490,
    question: "The surgical technologist's primary role is:",
    choices: ["Patient care", "Maintaining sterile field", "Equipment management", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 491,
    question: "Scrubbing in requires:",
    choices: ["Surgical hand antisepsis", "Sterile gown and gloves", "Both A and B", "Neither A nor B"],
    correctAnswer: 2
  },
  {
    id: 492,
    question: "The circulating nurse is:",
    choices: ["Sterile", "Non-sterile", "Sometimes sterile", "Always gowned"],
    correctAnswer: 1
  },
  {
    id: 493,
    question: "Surgical gowns should be:",
    choices: ["Fluid-resistant", "Sterile", "Properly sized", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 494,
    question: "The sterile area of a surgical gown extends:",
    choices: ["Entire gown", "Front and sleeves", "Front only", "Sleeves only"],
    correctAnswer: 1
  },
  {
    id: 495,
    question: "Sterile drapes should:",
    choices: ["Be fluid-resistant", "Cover completely", "Not be moved once placed", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 496,
    question: "Draping should proceed from:",
    choices: ["Dirty to clean", "Clean to dirty", "Sterile to non-sterile", "Incision site outward"],
    correctAnswer: 3
  },
  {
    id: 497,
    question: "Surgical site infection prevention includes:",
    choices: ["Antibiotic prophylaxis", "Proper skin prep", "Sterile technique", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 498,
    question: "What is the correct sequence for decontamination of a radiologically exposed patient?",
    choices: ["Bleach > soap > saline rinse", "Soap and water > rinse > dry", "Remove clothes > rinse with sterile water > bleach", "Burn clothes > rinse with bleach"],
    correctAnswer: 1
  },
  {
    id: 499,
    question: "Infection control measures include:",
    choices: ["Hand hygiene", "Isolation", "Disinfection", "All of the above"],
    correctAnswer: 3
  }
];
