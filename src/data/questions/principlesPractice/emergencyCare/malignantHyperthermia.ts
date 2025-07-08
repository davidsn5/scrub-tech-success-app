
import { Question } from '../../introSurgicalTech';

export const malignantHyperthermiaQuestions: Question[] = [
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
  }
];
