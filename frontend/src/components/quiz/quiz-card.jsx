import { Button } from "primereact/button";
import css from "./quiz-card.module.css";
import { Link } from "react-router-dom";

const QUIZ = {
  title: "Clean code best practices",
  rating: 4.5,
  category: "Programming",
  description:
    "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
};

// TODO: fix styles
export const listItem = (quiz) => {
  return (
    <div className={css.card}>
      <div className={css.content}>
        <div className={css.text}>
          <Link to={`/quizzes/${quiz.id}`} className={css.title}>{quiz.title}</Link>
          <div className={css.info}>{quiz.description}</div>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag"></i>
            <span className="font-semibold">{quiz.category}</span>
          </div>
        </div>
        <div className={css.buttons}>
          <Button icon="pi pi-heart" rounded outlined aria-label="Favorite" />
          <Button label="try" />
        </div>
      </div>
    </div>
  );
};

// TODO: fix tyles

export const gridItem = (quiz) => {
  return (
    <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
      <div className="p-4 border-1 surface-border surface-card border-round">
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag"></i>
            <span className="font-semibold">{quiz.category}</span>
          </div>
        </div>
        <div className="flex flex-column align-items-center gap-3 py-5">
          <Link to={`/quizzes/${quiz.id}`} className="text-2xl font-bold">{quiz.title}</Link>
          <div className={css.info}>{quiz.description}</div>

        </div>
        <div className="flex align-items-center justify-content-between">
          <Button label="try" />
          <Button icon="pi pi-heart" rounded outlined aria-label="Favorite" />
        </div>
      </div>
    </div>
  );
};
