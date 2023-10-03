import React, { useContext } from "react";
import { Questions } from "../../questions";
import { QuizContext } from "../../context/quizContext";
import { AuthContext } from "../../context/context";

export default function Quiz() {
  const { currentQuestion, showScore, score, handleAnswerOptionClick } =
    useContext(QuizContext);

    const{logout,user,showUser} = useContext(AuthContext)

  return (
    <div className="quiz">
      <h1>{user}</h1>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {Questions.length}
          <button onClick={logout}>logout</button>
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
