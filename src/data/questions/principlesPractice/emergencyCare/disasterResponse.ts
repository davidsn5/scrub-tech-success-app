
import { Question } from '../../introSurgicalTech';

export const disasterResponseQuestions: Question[] = [
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
  }
];
