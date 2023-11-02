import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { QuestionBlock } from "./question-block";

export function Questions({ data, updateHandler, answersUpdate }) {
  const [title, setTitle] = useState(null);
  const { questions } = data;
  return (
    <Panel
      pt={{
        header: {
          style: {
            border: "none",
          },
        },
        content: {
          style: {
            border: "none",
          },
        },
      }}
    >
      <div className="flex flex-column gap-3 ">
        {questions.map((question) => (
          <QuestionBlock data={question} updateHandler={updateHandler} answersUpdate={answersUpdate} />
        ))}
      </div>
    </Panel>
  );
}
