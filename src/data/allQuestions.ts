export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: number;
  explanation?: string;
  category?: string;
}

// Import all question categories
import { introSurgicalTechQuestions } from './questions/introSurgicalTech';
import { principlesPracticeQuestions } from './questions/principlesPractice';
import { surgicalProceduresQuestions } from './questions/surgicalProcedures';
import { medicalTerminologyQuestions } from './questions/medicalTerminology';

// Add category information to each question and combine all questions
export const allQuestions: Question[] = [
  ...introSurgicalTechQuestions.map(q => ({ ...q, category: 'Intro to Surgical Technology' })),
  ...principlesPracticeQuestions.map(q => ({ ...q, category: 'Principles and Practice of Surgical Technology' })),
  ...surgicalProceduresQuestions.map(q => ({ ...q, category: 'Surgical Procedures' })),
  ...medicalTerminologyQuestions.map(q => ({ ...q, category: 'Medical Terminology' }))
];

// Function to get random questions from all categories
export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Function to get questions by category
export const getQuestionsByCategory = (categoryName: string): Question[] => {
  return allQuestions.filter(q => q.category === categoryName);
};

// Function to get exam simulation questions (150 random questions)
export const getExamSimulationQuestions = (): Question[] => {
  return getRandomQuestions(150);
};

// Function to get fire quiz questions (5 random questions)
export const getFireQuizQuestions = (): Question[] => {
  return getRandomQuestions(5);
};

// Export total count
export const totalQuestionCount = allQuestions.length;

// Export category breakdown
export const categoryBreakdown = {
  'Intro to Surgical Technology': introSurgicalTechQuestions.length,
  'Principles and Practice of Surgical Technology': principlesPracticeQuestions.length,
  'Surgical Procedures': surgicalProceduresQuestions.length,
  'Medical Terminology': medicalTerminologyQuestions.length,
  'Total': allQuestions.length
};