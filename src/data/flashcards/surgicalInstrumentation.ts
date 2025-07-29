import { FlashcardItem } from '../flashcardData';

// Import instrument images
import scalpelImg from '@/assets/instruments/scalpel.jpg';
import forcepsImg from '@/assets/instruments/forceps.jpg';
import scissorsImg from '@/assets/instruments/scissors.jpg';
import hemostatImg from '@/assets/instruments/hemostat.jpg';
import needleHolderImg from '@/assets/instruments/needle-holder.jpg';
import retractorImg from '@/assets/instruments/retractor.jpg';
import spongeForcepsImg from '@/assets/instruments/sponge-forceps.jpg';
import towelClampImg from '@/assets/instruments/towel-clamp.jpg';
import tissueForcepsImg from '@/assets/instruments/tissue-forceps.jpg';
import suctionTipImg from '@/assets/instruments/suction-tip.jpg';
import probeImg from '@/assets/instruments/probe.jpg';
import elevatorImg from '@/assets/instruments/elevator.jpg';

export interface InstrumentFlashcard extends FlashcardItem {
  image?: string;
}

export const surgicalInstrumentation: InstrumentFlashcard[] = [
  {
    question: `<img src="${scalpelImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Scalpel",
    explanation: "A sharp surgical knife used for making precise incisions in tissue. Consists of a handle and replaceable blade."
  },
  {
    question: `<img src="${forcepsImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Forceps",
    explanation: "Hinged instrument used for grasping, holding, or manipulating tissues and other materials during surgery."
  },
  {
    question: `<img src="${scissorsImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Scissors",
    explanation: "Cutting instrument with two opposing blades used for cutting tissues, sutures, and other materials."
  },
  {
    question: `<img src="${hemostatImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Hemostat",
    explanation: "Clamping instrument used to control bleeding by compressing blood vessels or tissue."
  },
  {
    question: `<img src="${needleHolderImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Needle Holder",
    explanation: "Instrument designed to grasp and manipulate surgical needles during suturing procedures."
  },
  {
    question: `<img src="${retractorImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Retractor",
    explanation: "Instrument used to hold back tissues and organs to provide better visualization and access to the surgical site."
  },
  {
    question: `<img src="${spongeForcepsImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Sponge Forceps",
    explanation: "Ring-handled forceps used to hold sponges for absorbing blood and fluids during surgery."
  },
  {
    question: `<img src="${towelClampImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Towel Clamp",
    explanation: "Penetrating clamp used to secure surgical drapes and towels to the patient or operating table."
  },
  {
    question: `<img src="${tissueForcepsImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Tissue Forceps",
    explanation: "Thumb forceps used for grasping and handling delicate tissues with minimal trauma."
  },
  {
    question: `<img src="${suctionTipImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Suction Tip",
    explanation: "Hollow tube connected to suction system used to remove blood, fluids, and debris from the surgical field."
  },
  {
    question: `<img src="${probeImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Probe",
    explanation: "Blunt instrument used for exploring wounds, body cavities, or tracking the path of vessels or ducts."
  },
  {
    question: `<img src="${elevatorImg}" alt="Surgical Instrument" style="max-width: 300px; max-height: 300px; object-fit: contain; margin: 0 auto; display: block;">`,
    answer: "Elevator",
    explanation: "Instrument used to lift or separate tissues, particularly in orthopedic and dental procedures."
  },
  {
    question: "Metzenbaum Scissors",
    answer: "Delicate tissue scissors",
    explanation: "Curved scissors with fine tips designed for cutting delicate tissues with precision. Named after Dr. Myron Metzenbaum."
  },
  {
    question: "Mayo Scissors",
    answer: "Heavy tissue scissors",
    explanation: "Scissors with thick, sturdy blades designed for cutting tough tissues and heavy materials."
  },
  {
    question: "Iris Scissors",
    answer: "Fine ophthalmic scissors",
    explanation: "Very small, delicate scissors originally designed for eye surgery but used for fine, precise cutting."
  },
  {
    question: "Potts Scissors",
    answer: "Vascular scissors",
    explanation: "Angled scissors specifically designed for vascular surgery and cutting blood vessels."
  },
  {
    question: "Bandage Scissors",
    answer: "Blunt-tip scissors for dressings",
    explanation: "Scissors with blunt tips and angled blades designed to safely cut bandages without injuring patients."
  },
  {
    question: "Wire Scissors",
    answer: "Heavy-duty cutting scissors",
    explanation: "Robust scissors designed to cut orthopedic wires and other heavy materials."
  },
  {
    question: "DeBakey Forceps",
    answer: "Atraumatic vascular forceps",
    explanation: "Tissue forceps with fine longitudinal serrations designed for handling vascular tissue without trauma."
  },
  {
    question: "Adson Forceps",
    answer: "Fine tissue forceps with teeth",
    explanation: "Delicate forceps with small teeth at the tips, commonly used in plastic surgery and neurosurgery."
  },
  {
    question: "Gerald Forceps",
    answer: "Dressing forceps",
    explanation: "Smooth-tipped forceps without teeth, used for handling dressings and delicate materials."
  },
  {
    question: "Russian Forceps",
    answer: "Tissue forceps with multiple teeth",
    explanation: "Heavy tissue forceps with multiple interlocking teeth for secure grasping of tough tissues."
  },
  {
    question: "Allis Clamp",
    answer: "Tissue grasping clamp",
    explanation: "Ratcheted clamp with sharp teeth designed to grasp and hold tissue securely."
  },
  {
    question: "Babcock Clamp",
    answer: "Atraumatic tissue clamp",
    explanation: "Ratcheted clamp with smooth, rounded jaws designed to grasp delicate tissues without damage."
  },
  {
    question: "Kocher Clamp",
    answer: "Heavy tissue clamp with teeth",
    explanation: "Strong ratcheted clamp with sharp teeth at the tips, used for grasping tough tissues."
  },
  {
    question: "Kelly Clamp",
    answer: "Curved hemostat",
    explanation: "Curved hemostatic clamp used for clamping blood vessels and controlling bleeding."
  },
  {
    question: "Mosquito Hemostat",
    answer: "Small curved hemostat",
    explanation: "Small, delicate hemostatic clamp used for very small blood vessels and fine work."
  },
  {
    question: "Crile Hemostat",
    answer: "Straight or curved hemostat",
    explanation: "Medium-sized hemostatic clamp available in straight or curved configurations."
  },
  {
    question: "Rochester-Pean Clamp",
    answer: "Large curved hemostat",
    explanation: "Large hemostatic clamp with longitudinal serrations, used for large vessels and tissues."
  },
  {
    question: "Mixter Clamp",
    answer: "Right-angled clamp",
    explanation: "Hemostatic clamp with a right-angled tip, used for dissection around vessels."
  },
  {
    question: "Satinsky Clamp",
    answer: "Partial occlusion vascular clamp",
    explanation: "Curved clamp designed to partially occlude large blood vessels during vascular procedures."
  },
  {
    question: "Bulldog Clamp",
    answer: "Small vascular clamp",
    explanation: "Small, spring-loaded clamp used for temporary occlusion of small blood vessels."
  },
  {
    question: "Richardson Retractor",
    answer: "Deep abdominal retractor",
    explanation: "Large, handheld retractor with a wide blade used for retracting deep abdominal tissues."
  },
  {
    question: "Deaver Retractor",
    answer: "Deep curved retractor",
    explanation: "Large, curved retractor used for retracting deep tissues and organs in abdominal surgery."
  },
  {
    question: "Army-Navy Retractor",
    answer: "Double-ended retractor",
    explanation: "Handheld retractor with different-sized blades on each end for versatile tissue retraction."
  },
  {
    question: "Rake Retractor",
    answer: "Multi-pronged retractor",
    explanation: "Retractor with multiple sharp or blunt prongs for retracting soft tissues."
  },
  {
    question: "Senn Retractor",
    answer: "Double-ended sharp/blunt retractor",
    explanation: "Small handheld retractor with a sharp rake on one end and a blunt blade on the other."
  },
  {
    question: "Weitlaner Retractor",
    answer: "Self-retaining retractor",
    explanation: "Self-retaining retractor with sharp or blunt prongs that locks in position."
  },
  {
    question: "Gelpi Retractor",
    answer: "Self-retaining sharp retractor",
    explanation: "Self-retaining retractor with sharp points, commonly used in orthopedic procedures."
  },
  {
    question: "Balfour Retractor",
    answer: "Self-retaining abdominal retractor",
    explanation: "Large self-retaining retractor system used for major abdominal procedures."
  },
  {
    question: "Bookwalter Retractor",
    answer: "Modular retractor system",
    explanation: "Comprehensive retractor system with multiple interchangeable blades and arms."
  },
  {
    question: "Finochietto Retractor",
    answer: "Rib spreader",
    explanation: "Self-retaining retractor specifically designed to spread ribs for thoracic surgery access."
  },
  {
    question: "Mayo-Hegar Needle Holder",
    answer: "Standard needle holder",
    explanation: "Most commonly used needle holder with a ratcheted handle and smooth or serrated jaws."
  },
  {
    question: "Webster Needle Holder",
    answer: "Fine needle holder",
    explanation: "Delicate needle holder with fine jaws, used for microsurgery and fine suturing."
  },
  {
    question: "Castroviejo Needle Holder",
    answer: "Microsurgical needle holder",
    explanation: "Very fine needle holder with a locking mechanism, used in ophthalmic and microsurgery."
  },
  {
    question: "Mathieu Needle Holder",
    answer: "Self-locking needle holder",
    explanation: "Needle holder with a spring-loaded self-locking mechanism instead of ratchets."
  },
  {
    question: "Yankauer Suction Tip",
    answer: "Rigid suction tip with control",
    explanation: "Large, rigid suction tip with a finger control hole for variable suction."
  },
  {
    question: "Poole Suction Tip",
    answer: "Suction tip with guard",
    explanation: "Suction tip with a perforated guard to prevent tissue from being drawn into the tip."
  },
  {
    question: "Frazier Suction Tip",
    answer: "Fine suction tip",
    explanation: "Small, delicate suction tip used in neurosurgery and other procedures requiring precise suction."
  },
  {
    question: "Baron Suction Tip",
    answer: "Angled suction tip",
    explanation: "Suction tip with an angled design for accessing difficult areas during surgery."
  }
];