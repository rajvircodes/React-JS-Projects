import { useState } from "react";
import questions from "../data/questions";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const quiz = questions[currentQuestion] || {};
  const quizFinished = currentQuestion === questions.length;

  function handleNextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setAnswered(false);
  }

  function handleAnswer(option) {
    if (answered) return;

    setSelectedAnswer(option);
    setAnswered(true);

    if (option === quiz.correctAnswer) {
      setScore(score + 1);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null); 
    setAnswered(false);
  }

  if (quizFinished) {
    return (
      <div className="result">
        <h2>Quiz finished!</h2>
        <h2>
          Your score: {score} / {questions.length}
        </h2>
        <p>Great Job!</p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="score-board">Score: {score}</h1>
      <h1 className="question">{quiz.question}</h1>
      
      {/* Changed from ul to div for clean semantics */}
      <div className="options">
        {quiz.options?.map((option) => (
          <button
            key={option}
            className={`option-btn ${
              answered
                ? option === quiz.correctAnswer
                  ? "correct"
                  : selectedAnswer === option
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      
      <button onClick={handleNextQuestion} id="next-btn" disabled={!answered}>
        Next Question
      </button>
      
      <p className="progress-text">
        Question {currentQuestion + 1} / {questions.length}
      </p>
    </div>
  );
};

export default Question;