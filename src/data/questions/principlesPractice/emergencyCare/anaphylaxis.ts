
import { Question } from '../../introSurgicalTech';

export const anaphylaxisQuestions: Question[] = [
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
  }
];
