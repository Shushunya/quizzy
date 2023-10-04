import React, { useState, useEffect } from "react";

import { Steps } from "primereact/steps";
import { NodeService } from "../../services/NodeService";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import QuizGeneralInfo from "./quizFormParts/QuizGeneralInfo";
import Questions from "./quizFormParts/Questions";

const stepsItems = [
  {
    label: "Quiz info",
  },
  {
    label: "Questions",
  },
];

export default function QuizForm() {
  const initialQuizData = {
    title: null,
    description: null,
    category: null,
    quizFocus: null,
    manualComplexity: true,
    complexity: 1,
    questionAmount: 3,
    questionType: 1,
    isGraded: false,
  }

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(stepsItems[0].label);
  const [quizData, setQuizData] = useState(initialQuizData);
  
  return (
    // <div className={css.container}>
      <div className="flex flex-column align-items-center m-5 gap-5">
      <Steps
        model={stepsItems}
        activeIndex={currentStepIndex}
        onSelect={(e) => {
          setCurrentStepIndex(e.index);
          setCurrentStep(e.item);
        }}
        pt={{
          root:{
            className: 'w-30rem'
          }
        }}
      />
      <Panel pt={{
        content: {
          style: {
            borderRadius: 15
          }
        }
      }}>
        {currentStepIndex === 0 ? <QuizGeneralInfo data={quizData} /> : null}
        {currentStepIndex === 1 ? <Questions /> : null}
        <div className="flex justify-content-end gap-3">
          {currentStepIndex === 0 ? null : (
            <Button
              label="Back"
              icon="pi pi-chevron-left"
              onClick={() => setCurrentStepIndex(currentStepIndex - 1)}
            />
          )}
          {currentStepIndex === 2 ? null : (
            <Button
              icon="pi pi-chevron-right"
              label="Next"
              iconPos="right"
              onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
            />
          )}
        </div>
      </Panel>
    </div>
  );
}
