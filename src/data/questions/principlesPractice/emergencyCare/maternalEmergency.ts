
import { Question } from '../../introSurgicalTech';

export const maternalEmergencyQuestions: Question[] = [
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
  }
];
