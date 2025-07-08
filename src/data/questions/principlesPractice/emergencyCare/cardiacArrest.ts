
import { Question } from '../../introSurgicalTech';

export const cardiacArrestQuestions: Question[] = [
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
  }
];
