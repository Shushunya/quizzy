import { Button } from "primereact/button";
import css from "./quiz-detail.module.css";

export function QuizDetail({ quiz }) {
  return (
    <div className={css.container}>
      {/* <div>Quiz id: {quiz.id}</div> */}
      <div className={css.header}>quiz title: {quiz.title}</div>
      <div className={css.content}>quiz description: {quiz.description}</div>
      <div className={css.footer}>
        <Button label="Start" />
      </div>
    </div>
  );
}
