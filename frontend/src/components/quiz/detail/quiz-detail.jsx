import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
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
  const [isStarted, setIsStarted] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const questionCard = (question) => {
    return (
      <Panel header={`Question #${question.id}`} toggleable>
        <div className="flex flex-row-reverse gap-3">
          <i className="pi pi-question" onClick={() => setIsShown(true)}></i>
          {isShown ? <span>{question.hint}</span> : false}
        </div>
        <div>Choose your answer:</div>

        {question.answers.map((answer) => (
          <div key={answer.id} className="flex align-items-center p-1">
            <RadioButton
              inputId={answer.id}
              name="answer"
              value={answer.text}
            />
            <label htmlFor={answer.key} className="ml-2">
              {answer.text}
            </label>
          </div>
        ))}
      </Panel>
    );
  };

  const answerBlock = (answers) => {
    console.log(answers);
    // onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === answer.key}
    return (
      <>
        {answers.map((answer) => {
          <div key={answer.id} className="flex align-items-center">
            <RadioButton
              inputId={answer.id}
              name="answer"
              value={answer.text}
            />
            <label htmlFor={answer.key} className="ml-2">
              {answer.text}
            </label>
          </div>;
        })}
      </>
    );
  };

  return (
    <div className={css.container}>
      {/* <div>Quiz id: {quiz.id}</div> */}
      <div className={css.header}>quiz title: {QUIZ.title}</div>
      {isStarted ? (
        // <Panel>
        //   <div>{QUIZ.questions[0].text}</div>
        // </Panel>
        QUIZ.questions.map((question) => questionCard(question))
      ) : (
        <div className={css.content}>quiz description: {QUIZ.description}</div>
      )}

      <div className={css.footer}>
        <Button label="Start" onClick={() => setIsStarted(!isStarted)} />
      </div>
    </div>
  );
}
