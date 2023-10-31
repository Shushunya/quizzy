import React, { useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { listItem, gridItem } from "../quiz-card";

const QUIZZES = [
  {
    id: 1,
    title: "Quiz 1",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 2,
    title: "Quiz 2",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 3,
    title: "Quiz 3",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 4,
    title: "Quiz 4",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 5,
    title: "Quiz 5",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    id: 6,
    title: "Quiz 6",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
];

export function QuizList() {
  const [layout, setLayout] = useState("grid");

  const itemTemplate = (quiz, layout) => {
    if (!quiz) {
      return;
    }

    if (layout === "list") return listItem(quiz);
    else if (layout === "grid") return gridItem(quiz);
  };
  // TODO: adjust header title
  const header = () => {
    return (
      <div className="flex justify-content-between">
        <span>QUIZ LIST</span>
        <DataViewLayoutOptions
          layout={layout}
          onChange={(e) => setLayout(e.value)}
          pt={{
            listButton: ({ props }) => ({
              className:
                props.layout === "list"
                  ? "bg-primary border-primary"
                  : "undefined",
            }),
            gridButton: ({ props }) => ({
              className:
                props.layout === "grid"
                  ? "bg-primary border-primary"
                  : "undefined",
            }),
          }}
        />
      </div>
    );
  };
  // TODO: adjust styles

  return (
    <div className="card">
      <DataView
        value={QUIZZES}
        itemTemplate={itemTemplate}
        layout={layout}
        header={header()}
        paginator
        rows={6}
      />
    </div>
  );
}
