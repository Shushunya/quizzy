import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { InputText } from "primereact/inputtext";

import { Checkbox } from 'primereact/checkbox';
        
import { useState } from "react";

export function QuestionBlock({ data, updateHandler, answersUpdate }) {
  const [title, setTitle] = useState("");
  // console.log(data)
  const onAnswerChange = () => {};

  return (
    <Fieldset legend={`Question ${data.key + 1}`} toggleable>
      <div className="field">
        <label htmlFor="title">Question title</label>
        <InputText
          id="title"
          placeholder="Enter the title of your question"
          value={data.title}
          onChange={(e) => updateHandler(data.key, "title", e.target.value)}
          size={100}
        />
      </div>
      <div className="field">
        <label htmlFor="title">Question hint</label>
        <InputText
          id="hint"
          placeholder="Enter the hint for your question"
          value={data.hint}
          onChange={(e) => updateHandler(data.key, "hint", e.target.value)}
          size={100}
        />
      </div>
      <div className="field">
        <label htmlFor="title">Answer 1</label>
        <InputText
          id="title"
          placeholder="Enter the title of your new quiz"
          value={title}
          onChange={(e) => answersUpdate(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="title">Answer 1</label>
        <InputText
          id="title"
          placeholder="Enter the title of your new quiz"
          value={title}
          onChange={(e) => answersUpdate(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="title">Answer 1</label>
        <InputText
          id="title"
          placeholder="Enter the title of your new quiz"
          value={title}
          onChange={(e) => answersUpdate(e.target.value)}
        />
        <Checkbox inputId="answer"/>
      </div>
    </Fieldset>
  );
}
