
import { Question } from '../../introSurgicalTech';
import { fireEmergencyQuestions } from './fireEmergency';
import { cardiacArrestQuestions } from './cardiacArrest';
import { maternalEmergencyQuestions } from './maternalEmergency';
import { malignantHyperthermiaQuestions } from './malignantHyperthermia';
import { dicQuestions } from './dic';
import { anaphylaxisQuestions } from './anaphylaxis';
import { disasterResponseQuestions } from './disasterResponse';
import { surgicalEmergencyQuestions } from './surgicalEmergency';

export const emergencyCareQuestions: Question[] = [
  ...fireEmergencyQuestions,
  ...cardiacArrestQuestions,
  ...maternalEmergencyQuestions,
  ...malignantHyperthermiaQuestions,
  ...dicQuestions,
  ...anaphylaxisQuestions,
  ...disasterResponseQuestions,
  ...surgicalEmergencyQuestions
];
