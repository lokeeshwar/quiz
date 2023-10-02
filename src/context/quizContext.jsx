import React, { createContext, useState } from "react";
import { Questions } from "../questions";

export const QuizContext = createContext();

export default function QuizContextProvider(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const allValues = {
    currentQuestion,
    setCurrentQuestion,
    showScore,
    setShowScore,
    score,
    setScore,
    handleAnswerOptionClick,
  };

  return (
    <QuizContext.Provider value={allValues}>
      {props.children}
    </QuizContext.Provider>
  );
}
