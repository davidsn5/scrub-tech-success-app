import { Question } from '../introSurgicalTech';

export const emergencyCareQuestions: Question[] = [
  {
    id: 'emergency-equipment',
    question: 'What is the FIRST piece of equipment needed for a fire in the operating room?',
    choices: [
      'Fire extinguisher',
      'CO2 tank',
      'Saline',
      'Fire blanket'
    ],
    correctAnswer: 0,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-oxygen',
    question: 'During a code situation, what is the FIRST medication administered?',
    choices: [
      'Epinephrine',
      'Oxygen',
      'Atropine',
      'Lidocaine'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-crash-cart',
    question: 'What is the FIRST thing that should be done when the crash cart arrives in the room?',
    choices: [
      'Check the defibrillator',
      'Check the oxygen tank',
      'Check the medications',
      'Check the monitor'
    ],
    correctAnswer: 0,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-maternal-cardiac-arrest',
    question: 'Which of the following is a common cause of maternal cardiac arrest?',
    choices: [
      'Diabetes',
      'Amniotic fluid embolism',
      'Hyperthyroidism',
      'Asthma attack'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-pregnant-priority',
    question: 'What is the priority for a pregnant woman in cardiac arrest?',
    choices: [
      'Deliver the fetus',
      'Provide oxygen to the fetus',
      'Provide CPR and relieve aortocaval compression',
      'Begin fetal monitoring immediately'
    ],
    correctAnswer: 2,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-vena-cava-compression',
    question: 'At approximately what gestational age does the gravid uterus begin to compress the inferior vena cava?',
    choices: [
      '12 weeks',
      '16 weeks',
      '20 weeks',
      '24 weeks'
    ],
    correctAnswer: 2,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-lateral-displacement',
    question: 'During CPR of a pregnant woman, why is left lateral uterine displacement performed?',
    choices: [
      'To improve fetal oxygenation',
      'To relieve pressure on the aorta and vena cava',
      'To assist delivery',
      'To monitor fetal heart tones'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-fetal-monitoring',
    question: 'Why should fetal monitoring not be initiated during maternal resuscitation?',
    choices: [
      'It is unnecessary',
      'It can interfere with maternal resuscitation',
      'It is technically difficult',
      'It is too costly'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-cardiac-surgery-arrest',
    question: 'Which of the following may cause cardiac arrest after cardiac surgery?',
    choices: [
      'Stroke',
      'VF or VT',
      'Sepsis',
      'Hypoglycemia'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-cardiac-arrest-goal',
    question: 'What is the immediate goal in cardiac arrest after cardiac surgery?',
    choices: [
      'Resternotomy',
      'Oxygen therapy',
      'ACLS and CPR',
      'Monitoring'
    ],
    correctAnswer: 2,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-open-chest-cpr',
    question: 'When is open-chest CPR most effective?',
    choices: [
      'During anesthesia induction',
      'During or immediately after surgery when chest is open',
      '24 hours after surgery',
      'Only if ACLS fails'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-cst-role',
    question: 'What is the role of the CST during cardiac arrest in the OR?',
    choices: [
      'Provide medication',
      'Protect sterile field',
      'Call family members',
      'Manage defibrillator'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-cabd-d',
    question: 'What does the "D" in C-A-B-D stand for in cardiac arrest care?',
    choices: [
      'Defibrillation and definitive treatment',
      'Diagnosis',
      'Delivery',
      'Drug therapy'
    ],
    correctAnswer: 0,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-airway-responsibility',
    question: 'In the OR, who is responsible for airway management and respiratory support?',
    choices: [
      'CST',
      'Circulating nurse',
      'Surgeon',
      'Anesthesia personnel'
    ],
    correctAnswer: 3,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-cpr-technique',
    question: 'Why is careful CPR technique important?',
    choices: [
      'Prevent injury to patient',
      'Reduce staff fatigue',
      'Avoid equipment damage',
      'Shorten code time'
    ],
    correctAnswer: 0,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-mh-trigger',
    question: 'What is malignant hyperthermia (MH) most commonly triggered by?',
    choices: [
      'Beta-blockers',
      'Halothane or succinylcholine',
      'Steroids',
      'Antibiotics'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-mh-symptoms',
    question: 'Which is NOT a symptom of MH?',
    choices: [
      'Tachycardia',
      'Cyanosis',
      'Muscle rigidity',
      'Hypothermia'
    ],
    correctAnswer: 3,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-dic-disorder',
    question: 'Disseminated intravascular coagulation (DIC) is primarily a disorder of:',
    choices: [
      'Platelet adhesion',
      'Hypercoagulability followed by bleeding',
      'Liver failure',
      'Bone marrow suppression'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-dic-cause',
    question: 'Which of the following is a potential cause of DIC?',
    choices: [
      'Leukemia',
      'Hypoglycemia',
      'Stroke',
      'Migraine'
    ],
    correctAnswer: 0,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-dic-prognosis',
    question: 'What is the prognosis of DIC?',
    choices: [
      'Usually good',
      'Often poor, depending on underlying cause',
      'Always fatal',
      'Never serious'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-anaphylaxis-hallmark',
    question: 'What is a hallmark of anaphylactic reaction?',
    choices: [
      'Low fever',
      'Skin rash with muscle pain',
      'Exaggerated allergic response',
      'Bradycardia and diaphoresis'
    ],
    correctAnswer: 2,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-anaphylaxis-cause',
    question: 'Which of the following is a common cause of anaphylaxis in surgery?',
    choices: [
      'Beta blockers',
      'Local anesthetics',
      'Steroids',
      'Saline'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-anaphylaxis-treatment',
    question: 'Why is early treatment of anaphylaxis critical?',
    choices: [
      'It prevents hypoglycemia',
      'It prevents cardiovascular collapse',
      'It prevents infection',
      'It prevents hypercapnia'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-anaphylaxis-drug',
    question: 'What is the first-line drug in treating severe anaphylaxis?',
    choices: [
      'Steroids',
      'Epinephrine',
      'Antihistamines',
      'Vasopressors'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-anaphylaxis-airway',
    question: 'During anaphylaxis, why should the airway be maintained?',
    choices: [
      'To prevent cardiac arrest',
      'To avoid infection',
      'To administer medication',
      'To prevent aspiration'
    ],
    correctAnswer: 0,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-hazards-goal',
    question: 'What is the goal of all-hazards preparation?',
    choices: [
      'Focus only on local disasters',
      'Prepare for a variety of emergency situations',
      'Train for one type of disaster at a time',
      'Focus only on natural disasters'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-hazards-preferred',
    question: 'Why is all-hazards preparation preferred?',
    choices: [
      'It is cheaper',
      'It provides generalized training for all disasters',
      'It focuses on common diseases',
      'It reduces documentation'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-natural-disasters',
    question: 'Natural disasters are usually:',
    choices: [
      'Unpredictable and unavoidable',
      'Unique to specific areas',
      'Always fatal',
      'Preventable with vaccination'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-not-natural-disaster',
    question: 'Which of the following is NOT a natural disaster?',
    choices: [
      'Earthquake',
      'Avalanche',
      'Tornado',
      'Chemical spill'
    ],
    correctAnswer: 3,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-avalanche-treatment',
    question: 'During an avalanche response, HCPs should be prepared to treat:',
    choices: [
      'Stroke and heart attack',
      'Asphyxiation and hypothermia',
      'Hyperthermia and burns',
      'Malaria and sepsis'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-hcp-role',
    question: 'Which role of the HCP is emphasized in disaster response?',
    choices: [
      'Perform only assigned daily tasks',
      'Fill multiple roles as needed',
      'Focus only on airway',
      'Avoid contact with patients'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-mh-risk-factor',
    question: 'Which factor increases the risk of MH?',
    choices: [
      'Hyperglycemia',
      'Use of succinylcholine',
      'Bradycardia',
      'Use of steroids'
    ],
    correctAnswer: 1,
    category: 'Emergency Care'
  },
  {
    id: 'emergency-sterile-field-code',
    question: 'In the OR, why is maintaining sterile field critical during a code?',
    choices: [
      'Prevent infection while resuscitating',
      'Reduce costs',
      'Speed up surgery',
      'Avoid injury to staff'
    ],
    correctAnswer: 0,
    category: 'Emergency Care'
  }
];
