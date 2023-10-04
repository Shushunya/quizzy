import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

export default function Questions() {
  const [title, setTitle] = useState(null);
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
        <Fieldset legend="Question 1" toggleable>
          Question 1
          <div className="field">
            <label htmlFor="title">Question title</label>
            <InputText
              id="title"
              placeholder="Enter the title of your new quiz"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="title">Answer 1</label>
            <InputText
              id="title"
              placeholder="Enter the title of your new quiz"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="title">Answer 2</label>
            <InputText
              id="title"
              placeholder="Enter the title of your new quiz"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="title">Answer 3</label>
            <InputText
              id="title"
              placeholder="Enter the title of your new quiz"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </Fieldset>
        <Fieldset legend="Question 2">Question 2</Fieldset>
        <Fieldset legend="Question 3">Question 3</Fieldset>
      </div>
    </Panel>
  );
}
