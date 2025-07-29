
export interface FlashcardItem {
  question: string;
  answer: string;
  explanation: string;
}

export interface FlashcardData {
  [category: string]: FlashcardItem[];
}

// Import all category data
import { medicalTerminology } from './flashcards/medicalTerminology';
import { surgicalAsepsisSterility } from './flashcards/surgicalAsepsisSterility';
import { surgicalTechnologistRole } from './flashcards/surgicalTechnologistRole';
import { legalEthicsRisk } from './flashcards/legalEthicsRisk';
import { surgicalPatient } from './flashcards/surgicalPatient';
import { physicalEnvironmentSafety } from './flashcards/physicalEnvironmentSafety';
import { technologicalScience } from './flashcards/technologicalScience';
import { emergencySituations } from './flashcards/emergencySituations';
import { pharmacologyAnesthesia } from './flashcards/pharmacologyAnesthesia';
import { instrumentationEquipment } from './flashcards/instrumentationEquipment';
import { hemostasisWoundHealing } from './flashcards/hemostasisWoundHealing';
import { surgicalProcedures } from './flashcards/surgicalProcedures';
import { disinfectionSterilization } from './flashcards/disinfectionSterilization';
import { surgicalInstrumentation } from './flashcards/surgicalInstrumentation';

export const flashcardData: FlashcardData = {
  'medical-terminology': medicalTerminology,
  'surgical-asepsis-sterility': surgicalAsepsisSterility,
  'surgical-technologist-role': surgicalTechnologistRole,
  'legal-ethics-risk': legalEthicsRisk,
  'surgical-patient': surgicalPatient,
  'physical-environment-safety': physicalEnvironmentSafety,
  'technological-science': technologicalScience,
  'emergency-situations': emergencySituations,
  'pharmacology-anesthesia': pharmacologyAnesthesia,
  'instrumentation-equipment': instrumentationEquipment,
  'hemostasis-wound-healing': hemostasisWoundHealing,
  'surgical-procedures': surgicalProcedures,
  'disinfection-sterilization': disinfectionSterilization,
  'surgical-instrumentation': surgicalInstrumentation
};
