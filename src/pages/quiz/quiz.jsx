import React, { useContext } from "react";
import { Questions } from "../../questions";
import { QuizContext } from "../../context/quizContext";

export default function Quiz() {
  const { currentQuestion, showScore, score, handleAnswerOptionClick } =
    useContext(QuizContext);

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {Questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{Questions.length}
            </div>
            <div className="question-text">
              {Questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {Questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
