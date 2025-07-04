import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Clock, Award } from 'lucide-react';

interface QuizModeProps {
  category: string;
  onAnswerCorrect: () => void;
  onQuestionAttempt: () => void;
}

const quizData = {
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
  ]
};

const QuizMode: React.FC<QuizModeProps> = ({ 
  category, 
  onAnswerCorrect, 
  onQuestionAttempt 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = quizData[category] || [];
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setIsActive(false);
  }, [category]);

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

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null && timeLeft > 0) return;
    
    setShowResult(true);
    setIsActive(false);
    onQuestionAttempt();
    
    if (selectedAnswer === currentQuestion?.correct) {
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
        <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700">
          Take Quiz Again
        </Button>
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
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className={`font-mono ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-700'}`}>
            {timeLeft}s
          </span>
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
                  <span>{option}</span>
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
