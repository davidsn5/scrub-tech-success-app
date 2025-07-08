
import { Question } from '../../introSurgicalTech';

export const dicQuestions: Question[] = [
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
  }
];
