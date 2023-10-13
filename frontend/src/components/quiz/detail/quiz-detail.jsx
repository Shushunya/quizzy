import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { QuestionCard } from "./question-card";
// import { Panel } from "primereact/panel";
import css from "./quiz-detail.module.css";
import { useState } from "react";

const QUIZ = {
  id: 1,
  title: "Best practices",
  shortInfo: "Test your knowledge of common best practices.",
  description:
    "This quiz covers basic best practice principles, such as DRY, KISS, YAGNI etc.",
  questions: [
    {
      id: 1,
      text: "Question about something important",
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
    // {
    //   id: 3,
    //   text: "Question about something important",
    //   hint: "The answer is A",
    //   answers: [
    //     {
    //       id: 7,
    //       text: "Rigth answer",
    //       is_correct: true,
    //     },
    //     {
    //       id: 8,
    //       text: "answer",
    //       is_correct: false,
    //     },
    //     {
    //       id: 9,
    //       text: "answer",
    //       is_correct: false,
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   text: "Question about something important",
    //   hint: "The answer is C",
    //   answers: [
    //     {
    //       id: 10,
    //       text: "answer",
    //       is_correct: false,
    //     },
    //     {
    //       id: 11,
    //       text: "answer",
    //       is_correct: false,
    //     },
    //     {
    //       id: 12,
    //       text: "right answer",
    //       is_correct: true,
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   text: "Question about something important",
    //   hint: "The answer is A",
    //   answers: [
    //     {
    //       id: 13,
    //       text: "Rigth answer",
    //       is_correct: true,
    //     },
    //     {
    //       id: 14,
    //       text: "answer",
    //       is_correct: false,
    //     },
    //     {
    //       id: 15,
    //       text: "answer",
    //       is_correct: false,
    //     },
    //   ],
    // },
  ],
};

const initialAnswers = [{
  questionID: 0,
  answerID: 0
}]

export function QuizDetail({ quiz }) {
  const [isStarted, setIsStarted] = useState(false);

  const [userAnswers, setUserAnswers] = useState([]);
  const answerChangeHandler = (answer) => {
    // console.log('in app');
    // console.log(myUser);
    setUserAnswers((prev) => {
      return { ...prev, ...answer };
    });
  };
console.log(userAnswers);
  return (
    <div className={css.container}>
      <div className={css.header}>quiz title: {QUIZ.title}</div>
      {isStarted ? (
        QUIZ.questions.map((question) => (
          <QuestionCard
            question={question}
            // userAnswers={userAnswers}
            handleChange={answerChangeHandler}
          />
        ))
      ) : (
        <div className={css.content}>quiz description: {QUIZ.description}</div>
      )}

      <div className={css.footer}>
        <Button label="Start" onClick={() => setIsStarted(!isStarted)} />
      </div>
    </div>
  );
}
