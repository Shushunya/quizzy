import React, { useState } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { listItem, gridItem } from "./quiz-card";
const QUIZZES = [
  {
    title: "Quiz 1",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    title: "Quiz 2",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    title: "Quiz 3",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    title: "Quiz 4",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
    title: "Quiz 5",
    rating: 3,
    category: "Math",
    description:
      "Test your understanding of basic best practices, including DRY, KISS, YAGNI etc",
  },
  {
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

  return (
    <div className="card">
      <DataView
        value={QUIZZES}
        itemTemplate={itemTemplate}
        layout={layout}
        header={header()}
        paginator
        rows={6}
        // pt={{
        //   // grid: {
        //   //   className: { className: 'surface-ground'}
        //   // },
        //   // header: {
        //   //   className: "border-round-top",
        //   // },
        //   paginator: {
        //     className: "bg-primary-700 border-round",
        //   },
        // }}
      />
    </div>
  );
}
