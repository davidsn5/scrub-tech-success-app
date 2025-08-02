import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Clock, Award, Shuffle } from 'lucide-react';
import { useUserProgress } from '@/hooks/useUserProgress';

interface QuizModeProps {
  category: string;
  onAnswerCorrect: () => void;
  onQuestionAttempt: () => void;
}

const quizData = {
  'medical-terminology': [
    {
      question: "What does the term adduction mean?",
      options: ["Away from the midline of the body", "Toward the midline of the body", "Upper, above", "Near the point of attachment to the body"],
      correct: 1,
      explanation: "Adduction refers to movement that brings a body part toward the center line of the body."
    },
    {
      question: "The position lying on the back is called:",
      options: ["Prone", "Supine", "Lateral", "Anterior"],
      correct: 1,
      explanation: "Supine position is lying on the back with face upward."
    },
    {
      question: "Which of the following means pertaining to the skull?",
      options: ["Cephal/o", "Crani/o", "Encephal/o", "Mening/o"],
      correct: 1,
      explanation: "Crani/o is the combining form that refers to the skull."
    },
    {
      question: "The excision of a breast lesion with surrounding tissue is called:",
      options: ["Lumpectomy", "Radical mastectomy", "Wire localization", "Modified radical mastectomy"],
      correct: 0,
      explanation: "A lumpectomy is the surgical removal of a tumor and small amount of surrounding healthy tissue."
    },
    {
      question: "Which suffix means vomiting?",
      options: ["-emesis", "-megaly", "-rhea", "-cele"],
      correct: 0,
      explanation: "The suffix -emesis refers to vomiting or the act of bringing up stomach contents."
    },
    {
      question: "Which of these refers to joint?",
      options: ["Chondr/o", "Oste/o", "Arthr/o", "Tend/o"],
      correct: 2,
      explanation: "Arthr/o is the combining form that refers to joints."
    },
    {
      question: "The term tend/o refers to:",
      options: ["Cartilage", "Tendon", "Hand bones", "Joint"],
      correct: 1,
      explanation: "Tend/o is the combining form that refers to tendons."
    },
    {
      question: "What does retin/o refer to?",
      options: ["Eyelid", "Iris", "Tear duct", "Retina"],
      correct: 3,
      explanation: "Retin/o is the combining form that refers to the retina of the eye."
    },
    {
      question: "Which suffix means enlargement?",
      options: ["-oma", "-megaly", "-pathy", "-cele"],
      correct: 1,
      explanation: "The suffix -megaly indicates abnormal enlargement of an organ or body part."
    },
    {
      question: "Which of the following means pregnancy outside the uterus?",
      options: ["Placenta previa", "Ectopic", "Abruptio placentae", "Atresia"],
      correct: 1,
      explanation: "An ectopic pregnancy occurs when a fertilized egg implants outside the uterus."
    },
    {
      question: "What is the meaning of rectocele?",
      options: ["Lack of normal body opening", "Bulging of an arterial wall", "Protrusion of the rectum into the vagina", "Condition caused by oxygen deficiency"],
      correct: 2,
      explanation: "A rectocele is a condition where the rectum protrudes into the vagina due to weakened tissue."
    },
    {
      question: "Which of the following refers to abnormal passage between two structures?",
      options: ["Fistula", "Fibroid", "Atresia", "Aneurysm"],
      correct: 0,
      explanation: "A fistula is an abnormal connection or passageway between two organs or structures."
    },
    {
      question: "The removal of the fallopian tube is called:",
      options: ["Oophorectomy", "Salpingectomy", "Hysterectomy", "Myomectomy"],
      correct: 1,
      explanation: "Salpingectomy is the surgical removal of one or both fallopian tubes."
    },
    {
      question: "What is the bicuspid valve also called?",
      options: ["Aneurysm", "Mitral valve", "Aortic valve", "Tricuspid valve"],
      correct: 1,
      explanation: "The bicuspid valve is also known as the mitral valve."
    },
    {
      question: "Which of these is defined as resting heart rate below 60 bpm?",
      options: ["Bradycardia", "Arrhythmia", "Tachycardia", "Cyanosis"],
      correct: 0,
      explanation: "Bradycardia is a condition where the heart rate is slower than normal (below 60 bpm)."
    },
    {
      question: "The term cyanosis refers to:",
      options: ["Lack of normal opening", "Irregular heartbeat", "Condition caused by oxygen deficiency", "Pain in a limb"],
      correct: 2,
      explanation: "Cyanosis is a bluish discoloration of the skin due to lack of oxygen in the blood."
    },
    {
      question: "A clot of blood, air, or fat that moves through the vascular system is called:",
      options: ["Thrombus", "Embolism", "Ischemia", "Claudication"],
      correct: 1,
      explanation: "An embolism is a blockage of a blood vessel by a clot or material that has traveled from elsewhere."
    },
    {
      question: "The term ischemia refers to:",
      options: ["Lack of normal opening", "Pain in a limb", "Abnormally low blood flow to tissues", "Irregular heartbeat"],
      correct: 2,
      explanation: "Ischemia occurs when blood flow to tissues is restricted, reducing oxygen delivery."
    },
    {
      question: "The congenital defect that includes 4 cardiac abnormalities is called:",
      options: ["Patent ductus arteriosus", "Aneurysm", "Tetralogy of Fallot", "Mitral valve prolapse"],
      correct: 2,
      explanation: "Tetralogy of Fallot is a complex heart defect involving four abnormalities that occur together."
    },
    {
      question: "Which of the following means high blood pressure?",
      options: ["Hypotension", "Cyanosis", "Arrhythmia", "Hypertension"],
      correct: 3,
      explanation: "Hypertension is a condition where blood pressure is persistently elevated."
    },
    {
      question: "The bulging of an arterial wall is called:",
      options: ["Aneurysm", "Embolism", "Fistula", "Atresia"],
      correct: 0,
      explanation: "An aneurysm is a weakened area in a blood vessel wall that balloons outward."
    },
    {
      question: "The suffix -otomy means:",
      options: ["Cutting into", "Surgical repair", "Fixation of", "Puncture to remove fluid"],
      correct: 0,
      explanation: "The suffix -otomy indicates a surgical incision or cutting into an organ or tissue."
    },
    {
      question: "The suffix -plasty means:",
      options: ["Fixation of", "Puncture to remove fluid", "Surgical repair", "Cutting into"],
      correct: 2,
      explanation: "The suffix -plasty indicates surgical repair or reconstruction."
    },
    {
      question: "The suffix -centesis means:",
      options: ["Cutting into", "Fixation of", "Surgical repair", "Puncture to remove fluid"],
      correct: 3,
      explanation: "The suffix -centesis indicates surgical puncture to remove fluid or gas."
    },
    {
      question: "The term poly- means:",
      options: ["High", "Many", "Low", "Enlarged"],
      correct: 1,
      explanation: "The prefix poly- means many, much, or multiple."
    },
    {
      question: "Presence of air in the pleural cavity causing lung collapse is called:",
      options: ["Pneumoperitoneum", "Pneumothorax", "Thoracocentesis", "Pneumonectomy"],
      correct: 1,
      explanation: "Pneumothorax occurs when air leaks into the space between the lung and chest wall."
    },
    {
      question: "Temporary loss of breathing is called:",
      options: ["Apnea", "Dyspnea", "Cyanosis", "Ischemia"],
      correct: 0,
      explanation: "Apnea is a temporary cessation of breathing, especially during sleep."
    },
    {
      question: "Surgical puncture and drainage of the pleural cavity is called:",
      options: ["Pneumonectomy", "Pneumothorax", "Thoracocentesis", "Apnea"],
      correct: 2,
      explanation: "Thoracocentesis involves inserting a needle into the chest to remove fluid or air."
    },
    {
      question: "Surgical removal of the lung or a segment of the lung is called:",
      options: ["Pneumonectomy", "Pneumoperitoneum", "Apnea", "Thoracocentesis"],
      correct: 0,
      explanation: "Pneumonectomy is the surgical removal of part or all of a lung."
    },
    {
      question: "What does encephal/o mean?",
      options: ["Pertaining to neurological tissue", "Pertaining to the brain", "Pertaining to speech", "Pertaining to pain"],
      correct: 1,
      explanation: "Encephal/o is a combining form relating to the brain."
    },
    {
      question: "What does mening/o mean?",
      options: ["Pertaining to pain", "Pertaining to the brain", "Pertaining to covering of brain & spinal cord", "Pertaining to speech"],
      correct: 2,
      explanation: "Mening/o refers to the meninges, the protective membranes covering the brain and spinal cord."
    },
    {
      question: "What does the suffix -algia mean?",
      options: ["Pertaining to pain", "Pertaining to speech", "Pertaining to neurological tissue", "Pertaining to brain"],
      correct: 0,
      explanation: "The suffix -algia indicates pain in a specified part of the body."
    },
    {
      question: "What does the suffix -phasia mean?",
      options: ["Pertaining to pain", "Pertaining to neurological tissue", "Pertaining to speech", "Pertaining to brain"],
      correct: 2,
      explanation: "The suffix -phasia relates to speech or the ability to speak."
    },
    {
      question: "The combining form gli/o means:",
      options: ["Pertaining to pain", "Pertaining to neurological tissue", "Pertaining to speech", "Pertaining to the skull"],
      correct: 1,
      explanation: "Gli/o refers to the supportive tissue (glial cells) in the nervous system."
    },
    {
      question: "The term arthr/o refers to:",
      options: ["Joint", "Bone", "Cartilage", "Tendon"],
      correct: 0,
      explanation: "Arthr/o is the combining form that refers to joints."
    },
    {
      question: "Which of the following means cartilage?",
      options: ["Oste/o", "Arthr/o", "Chondr/o", "Tend/o"],
      correct: 2,
      explanation: "Chondr/o is the combining form relating to cartilage tissue."
    },
    {
      question: "What does oste/o mean?",
      options: ["Bone", "Cartilage", "Joint", "Hand bones"],
      correct: 0,
      explanation: "Oste/o is the combining form relating to bone tissue."
    },
    {
      question: "What does metacarp/o mean?",
      options: ["Tendon", "Hand bones", "Joint", "Bone"],
      correct: 1,
      explanation: "Metacarp/o refers to the metacarpal bones in the hand."
    },
    {
      question: "The term dacry/o refers to:",
      options: ["Tear duct", "Iris", "Eyelid", "Cornea"],
      correct: 0,
      explanation: "Dacry/o relates to tears or the tear ducts of the eye."
    },
    {
      question: "Which of the following means cornea?",
      options: ["Kerat/o", "Irid/o", "Blephar/o", "Retin/o"],
      correct: 0,
      explanation: "Kerat/o refers to the cornea, the clear front layer of the eye."
    }
  ],
  microbiology: [
    {
      question: "Which of the following microorganisms is classified as a prokaryote?",
      options: ["Fungi", "Algae", "Bacteria", "Protozoa"],
      correct: 2,
      explanation: "Bacteria are prokaryotes because they lack a membrane-bound nucleus and organelles."
    },
    {
      question: "The term 'asepsis' refers to:",
      options: ["The destruction of all microbial life", "The presence of disease-causing organisms", "The absence of disease-causing organisms", "A method of sterilization"],
      correct: 2,
      explanation: "Asepsis specifically means the absence of disease-causing microorganisms, not all microorganisms."
    },
    {
      question: "The powerhouse of the cell is the:",
      options: ["Nucleus", "Ribosome", "Golgi apparatus", "Mitochondrion"],
      correct: 3,
      explanation: "Mitochondria are called the powerhouse because they produce ATP, the cell's main energy currency."
    },
    {
      question: "Which structure provides motility to certain bacteria?",
      options: ["Pili", "Flagella", "Capsule", "Cell wall"],
      correct: 1,
      explanation: "Flagella are whip-like structures that enable bacterial movement through liquid environments."
    },
    {
      question: "True or False: Viruses are considered living organisms because they can reproduce independently.",
      options: ["True", "False"],
      correct: 1,
      explanation: "False. Viruses cannot reproduce independently; they require a host cell to replicate."
    },
    {
      question: "Which term describes a relationship where one organism benefits and the other is harmed?",
      options: ["Mutualism", "Commensalism", "Parasitism", "Synergism"],
      correct: 2,
      explanation: "Parasitism is defined as a relationship where the parasite benefits while the host is harmed."
    },
    {
      question: "Fill in the blank: _________ is the process by which microorganisms reproduce asexually by splitting into two identical cells.",
      options: ["Binary fission", "Mitosis", "Meiosis", "Budding"],
      correct: 0,
      explanation: "Binary fission is the primary method of asexual reproduction in bacteria."
    },
    {
      question: "Which of the following is NOT a portal of entry for microorganisms?",
      options: ["Intact skin", "Respiratory tract", "Gastrointestinal tract", "Genitourinary tract"],
      correct: 0,
      explanation: "Intact skin serves as a barrier to prevent microbial entry, while broken skin can be a portal of entry."
    },
    {
      question: "The bacterium Clostridium tetani causes disease by producing:",
      options: ["Endotoxins", "Neurotoxins", "Spores", "Capsules"],
      correct: 1,
      explanation: "C. tetani produces neurotoxins that cause the muscle spasms characteristic of tetanus."
    },
    {
      question: "Which microbial form is most resistant to destruction?",
      options: ["Vegetative bacteria", "Fungi", "Spores", "Viruses"],
      correct: 2,
      explanation: "Bacterial spores are extremely resistant to heat, chemicals, and radiation."
    },
    {
      question: "Which of the following is the correct term for an infection acquired in a healthcare setting?",
      options: ["Opportunistic infection", "Nosocomial infection", "Community-acquired infection", "Latent infection"],
      correct: 1,
      explanation: "Nosocomial infections are healthcare-associated infections acquired during medical care."
    },
    {
      question: "The semipermeable membrane within cells is called the:",
      options: ["Cell wall", "Cytoplasmic membrane", "Nuclear envelope", "Endoplasmic reticulum"],
      correct: 1,
      explanation: "The cytoplasmic membrane controls what enters and exits the cell."
    },
    {
      question: "Clostridium perfringens is known to cause:",
      options: ["Tetanus", "Tuberculosis", "Gas gangrene", "Food poisoning"],
      correct: 2,
      explanation: "C. perfringens produces gas and toxins that cause gas gangrene in wounds."
    },
    {
      question: "Which immunity is passed from mother to fetus through the placenta?",
      options: ["Artificial active", "Natural active", "Artificial passive", "Natural passive"],
      correct: 3,
      explanation: "Natural passive immunity occurs when maternal antibodies cross the placenta to protect the fetus."
    },
    {
      question: "Which term describes an agent that inhibits bacterial growth without killing them?",
      options: ["Bactericide", "Fungicide", "Bacteriostatic", "Virucide"],
      correct: 2,
      explanation: "Bacteriostatic agents stop bacterial growth and reproduction without necessarily killing the bacteria."
    },
    {
      question: "What is the smallest infectious particle, neither viral nor bacterial, called?",
      options: ["Prion", "Viroid", "Virus", "Bacteriophage"],
      correct: 0,
      explanation: "Prions are misfolded proteins that can cause other proteins to misfold, leading to neurodegenerative diseases."
    },
    {
      question: "Which microorganism is commonly associated with surgical site infections (SSI)?",
      options: ["Mycobacterium tuberculosis", "Clostridium difficile", "Staphylococcus aureus", "Treponema pallidum"],
      correct: 2,
      explanation: "S. aureus is one of the most common causes of surgical site infections."
    },
    {
      question: "Fill in the blank: _________ are single-celled eukaryotes that often live in water and can cause disease.",
      options: ["Bacteria", "Protozoa", "Fungi", "Algae"],
      correct: 1,
      explanation: "Protozoa are single-celled eukaryotic organisms, some of which are pathogenic."
    },
    {
      question: "True or False: Gram-negative bacteria stain purple in a Gram stain.",
      options: ["True", "False"],
      correct: 1,
      explanation: "False. Gram-negative bacteria stain red/pink because they don't retain the primary crystal violet stain."
    },
    {
      question: "Which of the following is used to test the effectiveness of steam sterilization?",
      options: ["Bacillus subtilis", "Mycobacterium tuberculosis", "Geobacillus stearothermophilus", "Staphylococcus aureus"],
      correct: 2,
      explanation: "Geobacillus stearothermophilus spores are highly heat-resistant and used as biological indicators for steam sterilization."
    }
  ],
  anatomy: [
    {
      question: "Which bone is commonly called the 'collarbone'?",
      options: ["Scapula", "Clavicle", "Humerus", "Sternum"],
      correct: 1,
      explanation: "The clavicle, or collarbone, connects the shoulder blade to the sternum and helps support the shoulder."
    },
    {
      question: "What is the medical term for the kneecap?",
      options: ["Patella", "Tibia", "Fibula", "Femur"],
      correct: 0,
      explanation: "The patella is a small, triangular bone that protects the knee joint and helps with leg extension."
    },
    {
      question: "Which part of the brain controls balance and coordination?",
      options: ["Cerebrum", "Cerebellum", "Brainstem", "Medulla"],
      correct: 1,
      explanation: "The cerebellum is responsible for balance, coordination, and fine motor control."
    }
  ],
  instruments: [
    {
      question: "What type of suture material is absorbed by the body?",
      options: ["Silk", "Nylon", "Vicryl", "Prolene"],
      correct: 2,
      explanation: "Vicryl is an absorbable synthetic suture that dissolves naturally in the body over time."
    },
    {
      question: "Which instrument is used to hold tissue during dissection?",
      options: ["Kelly forceps", "Tissue forceps", "Needle holders", "Scissors"],
      correct: 1,
      explanation: "Tissue forceps (pickups) are designed to grasp and hold tissue gently during surgical procedures."
    }
  ],
  procedures: [
    {
      question: "What is the most common surgical position?",
      options: ["Prone", "Supine", "Lateral", "Trendelenburg"],
      correct: 1,
      explanation: "The supine position (lying on back) is the most common and provides access to many surgical sites."
    }
  ],
  sterile: [
    {
      question: "What is the minimum temperature for steam sterilization?",
      options: ["250°F", "270°F", "285°F", "300°F"],
      correct: 1,
      explanation: "Steam sterilization requires a minimum temperature of 270°F (132°C) for effective sterilization."
    }
  ],
  asepsis: [
    {
      question: "What is the best definition of asepsis?",
      options: ["Complete destruction of all microorganisms including spores", "Use of chemical agents on skin", "Absence of pathogenic microorganisms or disease", "Reduction of bioburden to a safe level"],
      correct: 2,
      explanation: "Asepsis is the fundamental principle of preventing infection by eliminating disease-causing microorganisms."
    },
    {
      question: "Which term refers to killing bacteria?",
      options: ["Bacteriostatic", "Bactericidal", "Fungicide", "Virucide"],
      correct: 1,
      explanation: "Bactericidal agents kill bacteria, while bacteriostatic agents only inhibit their growth."
    },
    {
      question: "What is the purpose of the sterile field?",
      options: ["A semi-clean area to prepare instruments", "An area kept free of all microorganisms", "An area cleaned with intermediate-level disinfectant", "A place where non-critical items are stored"],
      correct: 1,
      explanation: "The sterile field is maintained completely free of microorganisms to prevent surgical site infections."
    },
    {
      question: "The presence of pathogenic microorganisms on a sterile item is called:",
      options: ["Contamination", "Decontamination", "Sterilization", "Package integrity"],
      correct: 0,
      explanation: "Contamination is any violation of sterility through the presence of pathogenic microorganisms."
    },
    {
      question: "A resistant form of bacteria that can survive harsh conditions is known as a:",
      options: ["Pathogen", "Spore", "Fomite", "Vector"],
      correct: 1,
      explanation: "Bacterial spores are highly resistant forms that can survive extreme conditions and require special sterilization methods."
    },
    {
      question: "What is the term for microorganisms normally residing in or on the body?",
      options: ["Indigenous microflora", "Transient microflora", "Pathogens", "Bioburden"],
      correct: 0,
      explanation: "Indigenous (or resident) microflora are the beneficial microorganisms that naturally live in and on the human body."
    },
    {
      question: "The term strike-through contamination refers to:",
      options: ["Microbes transferred by a living carrier", "Contamination from a dirty instrument", "Fluid passing through a sterile barrier by wicking", "Introduction of indigenous microflora into a wound"],
      correct: 2,
      explanation: "Strike-through occurs when moisture carries microorganisms through sterile barriers via capillary action."
    },
    {
      question: "Which term describes an object that harbors microorganisms and can transfer them?",
      options: ["Fomite", "Vector", "Pathogen", "Sepsis"],
      correct: 0,
      explanation: "A fomite is any inanimate object that can carry and transmit microorganisms between people."
    },
    {
      question: "Which process destroys all microorganisms, including spores?",
      options: ["Disinfection", "Sterilization", "Antisepsis", "Decontamination"],
      correct: 1,
      explanation: "Sterilization is the only process that eliminates all forms of microbial life, including resistant spores."
    },
    {
      question: "What is the classification for items that contact mucous membranes or non-intact skin?",
      options: ["Critical", "Non-critical", "Semi-critical", "Sterile"],
      correct: 2,
      explanation: "Semi-critical items require high-level disinfection or sterilization due to their contact with mucous membranes."
    },
    {
      question: "Which of the following destroys microorganisms on living tissue?",
      options: ["Sterilant", "Antiseptic", "Disinfectant", "Sporicide"],
      correct: 1,
      explanation: "Antiseptics are safe for use on living tissue to reduce microbial contamination."
    },
    {
      question: "What is the best definition of event-related sterility?",
      options: ["Package is sterile as long as it is unopened and intact", "Package is sterile for 30 days after sterilization", "Package is sterile until bioburden exceeds safe levels", "Package is sterile only while within the sterile field"],
      correct: 0,
      explanation: "Event-related sterility means items remain sterile based on package integrity rather than time limits."
    },
    {
      question: "Which level of disinfection kills most microbes, including M. tuberculosis, but not spores?",
      options: ["High-level", "Intermediate-level", "Low-level", "Sterilization"],
      correct: 1,
      explanation: "Intermediate-level disinfection is effective against most pathogens including TB but cannot kill spores."
    },
    {
      question: "What is the purpose of terminal sterilization?",
      options: ["Clean the surgical field after a case", "Prepare unwrapped items for immediate use", "Render unwrapped items safe for handling before packaging", "Decontaminate living tissue before surgery"],
      correct: 2,
      explanation: "Terminal sterilization makes contaminated items safe to handle during the cleaning and packaging process."
    },
    {
      question: "Microorganisms picked up from the environment and easily removed with washing are called:",
      options: ["Resident flora", "Pathogens", "Transient microflora", "Indigenous microflora"],
      correct: 2,
      explanation: "Transient microflora are temporary surface contaminants that can be removed through proper handwashing."
    }
  ],
  sterilization: []
};

const QuizMode: React.FC<QuizModeProps> = ({ 
  category, 
  onAnswerCorrect, 
  onQuestionAttempt 
}) => {
  const { recordQuestionAttempt } = useUserProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof quizData[keyof typeof quizData]>([]);
  const [isShuffled, setIsShuffled] = useState(false);

  const originalQuestions = quizData[category as keyof typeof quizData] || [];

  useEffect(() => {
    setShuffledQuestions(originalQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setIsActive(false);
    setIsShuffled(false);
  }, [category, originalQuestions]);

  const questions = isShuffled ? shuffledQuestions : originalQuestions;
  const currentQuestion = questions[currentQuestionIndex];

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleShuffle = () => {
    const shuffled = shuffleArray(originalQuestions);
    setShuffledQuestions(shuffled);
    setIsShuffled(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setIsActive(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0 && !showResult) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleSubmitAnswer();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, showResult]);

  const startQuiz = () => {
    setIsActive(true);
    setTimeLeft(30);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = async () => {
    if (selectedAnswer === null && timeLeft > 0) return;
    
    setShowResult(true);
    setIsActive(false);
    onQuestionAttempt();
    
    const isCorrect = selectedAnswer === currentQuestion?.correct;
    
    // Record the question attempt in the database
    await recordQuestionAttempt(
      `${category}-quiz-${currentQuestionIndex}`, 
      category, 
      isCorrect
    );
    
    if (isCorrect) {
      setScore(score + 1);
      onAnswerCorrect();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
      setIsActive(true);
    } else {
      setQuizCompleted(true);
      setIsActive(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setIsActive(false);
  };

  if (!questions.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No quiz questions available for this category yet.</p>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Award className="h-16 w-16 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Quiz Completed!</h2>
        <div className="space-y-2">
          <p className="text-4xl font-bold text-blue-600">{percentage}%</p>
          <p className="text-gray-600">You scored {score} out of {questions.length} questions</p>
        </div>
        <div className="flex justify-center space-x-3">
          <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700">
            Take Quiz Again
          </Button>
          <Button onClick={handleShuffle} variant="outline" className="flex items-center space-x-2">
            <Shuffle className="h-4 w-4" />
            <span>Shuffle & Restart</span>
          </Button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Badge variant="secondary">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {category.replace('-', ' ')}
          </Badge>
          {isShuffled && (
            <Badge variant="outline" className="bg-orange-50 text-orange-700">
              Shuffled
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <Button 
            onClick={handleShuffle} 
            variant="outline" 
            size="sm"
            className="flex items-center space-x-2"
            disabled={isActive}
          >
            <Shuffle className="h-4 w-4" />
            <span>Shuffle</span>
          </Button>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className={`font-mono ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-700'}`}>
              {timeLeft}s
            </span>
          </div>
        </div>
      </div>

      <Progress value={(timeLeft / 30) * 100} className="h-2" />

      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = "w-full p-4 text-left transition-all duration-200 ";
            
            if (showResult) {
              if (index === currentQuestion.correct) {
                buttonClass += "bg-green-100 border-green-500 text-green-800";
              } else if (index === selectedAnswer && index !== currentQuestion.correct) {
                buttonClass += "bg-red-100 border-red-500 text-red-800";
              } else {
                buttonClass += "bg-gray-50 border-gray-200 text-gray-600";
              }
            } else {
              if (selectedAnswer === index) {
                buttonClass += "bg-blue-100 border-blue-500 text-blue-800";
              } else {
                buttonClass += "bg-white border-gray-200 hover:bg-gray-50";
              }
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={buttonClass}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                  </div>
                  {showResult && index === currentQuestion.correct && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {showResult && index === selectedAnswer && index !== currentQuestion.correct && (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </Button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Explanation:</strong> {currentQuestion.explanation}
            </p>
          </div>
        )}
      </Card>

      <div className="flex justify-between">
        <div className="text-sm text-gray-600">
          Score: {score}/{questions.length}
        </div>
        <div className="space-x-3">
          {!isActive && !showResult && (
            <Button onClick={startQuiz} className="bg-blue-600 hover:bg-blue-700">
              Start Question
            </Button>
          )}
          {isActive && !showResult && selectedAnswer !== null && (
            <Button onClick={handleSubmitAnswer} className="bg-green-600 hover:bg-green-700">
              Submit Answer
            </Button>
          )}
          {showResult && (
            <Button onClick={handleNextQuestion} className="bg-blue-600 hover:bg-blue-700">
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizMode;
