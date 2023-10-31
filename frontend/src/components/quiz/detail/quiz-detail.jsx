import { Button } from "primereact/button";
import { QuestionCard } from "./question-card";
import css from "./quiz-detail.module.css";
import { useState } from "react";
import { QuizResults } from "./quiz-results";
import { Link } from "react-router-dom";

const QUIZ = {
  id: 1,
  title: "Best practices",
  shortInfo: "Test your knowledge of common best practices.",
  questionAmount: 2,
  description:
    "This quiz covers basic best practice principles, such as DRY, KISS, YAGNI etc.",
  questions: [
    {
      id: 1,
      text: "Question 1 about something important",
      hint: "The answer is A",
      answers: [
        {
          id: 1,
          text: "Rigth answer",
          is_correct: true,
        },
        {
          id: 2,
          text: "answer",
          is_correct: false,
        },
        {
          id: 3,
          text: "answer",
          is_correct: false,
        },
      ],
    },
    {
      id: 2,
      text: "Question about something important",
      hint: "The answer is B",
      answers: [
        {
          id: 4,
          text: "answer",
          is_correct: false,
        },
        {
          id: 5,
          text: "rigth answer",
          is_correct: true,
        },
        {
          id: 6,
          text: "answer",
          is_correct: false,
        },
      ],
    },
    {
      id: 3,
      text: "Question about something important",
      hint: "The answer is A",
      answers: [
        {
          id: 7,
          text: "Rigth answer",
          is_correct: true,
        },
        {
          id: 8,
          text: "answer",
          is_correct: false,
        },
        {
          id: 9,
          text: "answer",
          is_correct: false,
        },
      ],
    },
    {
      id: 4,
      text: "Question about something important",
      hint: "The answer is C",
      answers: [
        {
          id: 10,
          text: "answer",
          is_correct: false,
        },
        {
          id: 11,
          text: "answer",
          is_correct: false,
        },
        {
          id: 12,
          text: "right answer",
          is_correct: true,
        },
      ],
    },
    {
      id: 5,
      text: "Question about something important",
      hint: "The answer is A",
      answers: [
        {
          id: 13,
          text: "Rigth answer",
          is_correct: true,
        },
        {
          id: 14,
          text: "answer",
          is_correct: false,
        },
        {
          id: 15,
          text: "answer",
          is_correct: false,
        },
      ],
    },
  ],
};

export function QuizDetail({ quiz }) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(0);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 2,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    setSelectedAnswer(false);
  };

  const onClickFinish = () => {
    setIsFinished(true);
  };

  const onAnswerSelected = (answer) => {
    setSelectedAnswerIndex(answer.id);
    console.log(selectedAnswerIndex);
    if (answer.is_correct) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const { questions } = QUIZ;
  const question = questions[activeQuestion];

  return (
    <div className={css.container}>
      <div className={css.header}>quiz title: {QUIZ.title}</div>
      {isStarted ? (
        isFinished ? (
          <QuizResults results={result} />
        ) : (
          <QuestionCard
            question={question}
            handleChange={onAnswerSelected}
            userAnswer={selectedAnswerIndex}
          />
        )
      ) : (
        <div className={css.content}>quiz description: {QUIZ.description}</div>
      )}
      <div className={css.footer}>
        {!isStarted ? (
          <Button label="start" onClick={() => setIsStarted(true)} />
        ) : isFinished ? (
          <Link to={"/quizzes"}>
            <Button label="Back to list"/>
          </Link>
        ) : (
          <Button
            label={activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            onClick={() =>
              activeQuestion === questions.length - 1
                ? onClickFinish()
                : onClickNext()
            }
          />
        )}
      </div>
    </div>
  );
}
