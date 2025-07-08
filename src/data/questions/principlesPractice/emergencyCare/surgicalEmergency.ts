
import { Question } from '../../introSurgicalTech';

export const surgicalEmergencyQuestions: Question[] = [
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
