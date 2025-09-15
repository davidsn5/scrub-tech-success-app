
export interface FlashcardItem {
  question: string;
  answer: string;
  explanation: string;
  image?: string;
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
import { orthopedicInstruments } from './flashcards/orthopedicInstruments';
import { obgynInstruments } from './flashcards/obgynInstruments';
import { hemostasisWoundHealing } from './flashcards/hemostasisWoundHealing';
import { surgicalProcedures } from './flashcards/surgicalProcedures';
import { disinfectionSterilization } from './flashcards/disinfectionSterilization';
import { plasticsInstruments } from './flashcards/plasticsInstruments';
import { entInstruments } from './flashcards/entInstruments';

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
  'general-instruments': instrumentationEquipment,
  'orthopedic-instruments': orthopedicInstruments,
  'obgyn-instruments': obgynInstruments,
  'hemostasis-wound-healing': hemostasisWoundHealing,
  'surgical-procedures': surgicalProcedures,
  'disinfection-sterilization': disinfectionSterilization,
  'plastics-instruments': plasticsInstruments,
  'ent-instruments': entInstruments
};
