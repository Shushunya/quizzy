import { useState } from "react";
import { Panel } from "primereact/panel";
import { RadioButton } from "primereact/radiobutton";

export const QuestionCard = ({ question, handleChange, userAnswer }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Panel header={`Question #${question.id}`} toggleable>
      <div className="flex justify-content-between">
        {question.text}
        <div className="flex flex-row-reverse gap-3">
          <i className="pi pi-question" onClick={() => setIsShown(true)}></i>
          {isShown ? <span>{question.hint}</span> : false}
        </div>
      </div>
      <div>Choose your answer:</div>
      {question.answers.map((answer) => (
        <div key={answer.id} className="flex align-items-center p-1">
          <RadioButton
            inputId={answer.id}
            name="answer"
            value={answer.id}
            onChange={() => handleChange(answer)}
            checked={answer.id === userAnswer}
          />
          <label htmlFor={answer.id} className="ml-2">
            {answer.text}
          </label>
        </div>
      ))}
    </Panel>
  );
};
