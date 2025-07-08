
import { Question } from '../introSurgicalTech';

export const emergencyCareQuestions: Question[] = [
  {
    id: 51,
    question: "What is the primary objective of emergency surgery?",
    choices: ["Reduce hospital costs", "Preserve life and prevent further deterioration", "Minimize staff workload", "Ensure family consent"],
    correctAnswer: 1,
    explanation: "The primary goal of emergency surgery is to preserve life and prevent further deterioration of the patient's condition."
  },
  {
    id: 52,
    question: "Which of the following is an indicator of an emergency situation?",
    choices: ["Normal skin color", "Stable vital signs", "Disorientation or confusion", "Patient is calm and oriented"],
    correctAnswer: 2,
    explanation: "Disorientation or confusion can indicate compromised perfusion and is a sign of an emergency situation."
  },
  {
    id: 53,
    question: "Cardiac dysrhythmia may indicate:",
    choices: ["Proper recovery", "Imminent cardiac arrest", "Normal cardiac activity", "Stable hemodynamics"],
    correctAnswer: 1,
    explanation: "Cardiac dysrhythmias can be warning signs of impending cardiac arrest and require immediate attention."
  },
  {
    id: 54,
    question: "What is the first priority in emergency care?",
    choices: ["Fracture immobilization", "Providing reassurance", "Ensuring airway and breathing", "Applying a sterile dressing"],
    correctAnswer: 2,
    explanation: "Airway and breathing are the first priorities in emergency care following the ABC approach."
  },
  {
    id: 63,
    question: "What is a common cause of low survival in out-of-hospital cardiac arrest?",
    choices: ["High quality CPR", "Early defibrillation", "Bystander inaction", "ACLS training"],
    correctAnswer: 2,
    explanation: "Bystander inaction significantly reduces survival rates in out-of-hospital cardiac arrest situations."
  },
  {
    id: 64,
    question: "Which of the following is a warning sign of impending cardiac arrest?",
    choices: ["Stable blood pressure", "Respiratory changes", "Normal skin color", "Alert and oriented"],
    correctAnswer: 1,
    explanation: "Respiratory changes such as difficulty breathing or changes in rate can indicate impending cardiac arrest."
  },
  {
    id: 73,
    question: "Which of the following are objectives of emergency care?",
    choices: ["Preserve life and restore lifestyle", "Reduce cost and avoid liability", "Document injury and report", "Wait for orders"],
    correctAnswer: 0,
    explanation: "The primary objectives of emergency care are to preserve life and help restore the patient's quality of life."
  },
  {
    id: 74,
    question: "Which is an appropriate priority after airway and breathing are ensured?",
    choices: ["Fracture immobilization", "Monitoring visitor access", "Scheduling surgery", "Contacting family"],
    correctAnswer: 0,
    explanation: "After securing airway and breathing, fracture immobilization becomes a priority to prevent further injury."
  },
  {
    id: 75,
    question: "Which of the following injuries requires immediate attention?",
    choices: ["Open bleeding wound not in chart", "Controlled nosebleed", "Bruise on arm", "Small abrasion"],
    correctAnswer: 0,
    explanation: "An open bleeding wound requires immediate attention to control bleeding and prevent complications."
  }
];
