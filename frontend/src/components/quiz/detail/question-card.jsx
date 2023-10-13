import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { useState } from "react";
import { Panel } from "primereact/panel";

export const QuestionCard = ({ question, handleChange }) => {
  const [isShown, setIsShown] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
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
            value={answer.id}
            onChange={(e) => handleChange(e.target.value)}
            checked={userAnswer === answer.id}
          />
          <label htmlFor={answer.id} className="ml-2">
            {answer.text}
          </label>
        </div>
      ))}
    </Panel>
  );
};
