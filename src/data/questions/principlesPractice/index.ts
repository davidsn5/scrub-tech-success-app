
import { Question } from '../introSurgicalTech';
import { microbiologyQuestions } from './microbiology';
import { immunologyQuestions } from './immunology';
import { technologyQuestions } from './technology';
import { emergencyCareQuestions } from './emergencyCare';
import { cprQuestions } from './cpr';
import { duplicateQuestions } from './duplicates';

export const principlesPracticeQuestions: Question[] = [
  ...microbiologyQuestions,
  ...immunologyQuestions,
  ...technologyQuestions,
  ...emergencyCareQuestions,
  ...cprQuestions,
  ...duplicateQuestions
];

export type { Question };
