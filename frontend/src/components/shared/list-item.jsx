import { Button } from "primereact/button";
import { Rating } from "primereact/rating";
import { Card } from "primereact/card";

import css from "./list-item.module.css";

export const listItem1 = (quiz) => {
  return (
    <div className="col-12">
      <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{quiz.title}</div>
            <Rating value={quiz.rating} readOnly cancel={false}></Rating>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">{quiz.category}</span>
              </span>
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <Button
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const QUIZ = {
  title: "Clean code best practices",
  rating: 4.5,
  category: "Programming",
  description:
    "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
};

export const listItem = (quiz) => {
  return (
    <div className={css.card}>
      <div className={css.content}>
        <div className={css.text}>
          <div className={css.title}>{quiz.title}</div>
          <div className={css.info}>{quiz.description}</div>
        </div>
        <div className={css.buttons}>
          <Button icon="pi pi-heart" rounded outlined aria-label="Favorite" />
          <Button label="try" />
        </div>
      </div>
    </div>
  );
};
