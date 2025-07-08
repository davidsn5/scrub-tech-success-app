
import { Question } from '../introSurgicalTech';

export const technologyQuestions: Question[] = [
  {
    id: 41,
    question: "Which of the following protects patient health information privacy and security?",
    choices: ["SDS", "HIPAA", "LSO", "CPU"],
    correctAnswer: 1,
    explanation: "HIPAA (Health Insurance Portability and Accountability Act) protects patient health information privacy and security."
  },
  {
    id: 42,
    question: "The device that generates high-frequency electrical current for electrosurgery is called:",
    choices: ["Active electrode", "ESU", "Dispersive pad", "Ultrasonic device"],
    correctAnswer: 1,
    explanation: "ESU (Electrosurgical Unit) generates high-frequency electrical current used in electrosurgery."
  },
  {
    id: 43,
    question: "In monopolar electrosurgery, the current flows:",
    choices: ["Between the tips of forceps", "From active electrode through patient to dispersive pad", "Without returning to the generator", "Only in a closed metal circuit"],
    correctAnswer: 1,
    explanation: "In monopolar electrosurgery, current flows from the active electrode through the patient's body to the dispersive pad (grounding pad)."
  },
  {
    id: 44,
    question: "What material would most likely act as an insulator?",
    choices: ["Copper", "Aluminum", "Rubber", "Gold"],
    correctAnswer: 2,
    explanation: "Rubber is an insulator that resists the flow of electrical current, unlike metals which are conductors."
  },
  {
    id: 45,
    question: "Which of the following is a digital record shared across healthcare organizations?",
    choices: ["EHR", "EMR", "PHI", "SDS"],
    correctAnswer: 0,
    explanation: "EHR (Electronic Health Record) is designed to be shared across multiple healthcare organizations and providers."
  },
  {
    id: 46,
    question: "What is the role of the laser safety officer (LSO)?",
    choices: ["Perform surgery with lasers", "Ensure safety protocols for laser use are followed", "Repair laser equipment", "Approve new lasers for purchase"],
    correctAnswer: 1,
    explanation: "The Laser Safety Officer (LSO) is responsible for ensuring that all laser safety protocols and procedures are properly followed."
  },
  {
    id: 47,
    question: "The opposition to the flow of electrical current is called:",
    choices: ["Voltage", "Resistance", "Current", "Conduction"],
    correctAnswer: 1,
    explanation: "Resistance is the property that opposes the flow of electrical current through a material."
  },
  {
    id: 48,
    question: "Which document lists the specific supplies and instruments preferred by a surgeon?",
    choices: ["Preference card", "Safety Data Sheet", "HIPAA record", "Laser safety checklist"],
    correctAnswer: 0,
    explanation: "A preference card lists the specific supplies, instruments, and setup preferences for each surgeon and procedure."
  },
  {
    id: 49,
    question: "Ultrasonic technology in surgery uses:",
    choices: ["High-frequency electrical current", "High-frequency sound waves", "Radio waves", "Lasers"],
    correctAnswer: 1,
    explanation: "Ultrasonic surgical devices use high-frequency sound waves to cut and coagulate tissue."
  },
  {
    id: 50,
    question: "Which of the following describes a bipolar electrosurgical instrument?",
    choices: ["Current flows through the patient to a return pad", "Current flows between two tips of the instrument", "Requires a dispersive pad", "Uses ultrasonic energy"],
    correctAnswer: 1,
    explanation: "In bipolar electrosurgery, current flows between the two tips of the instrument, not through the patient to a return pad."
  }
];
