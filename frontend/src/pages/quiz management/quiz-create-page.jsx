import React, { useState } from "react";

import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";
import { QuizGeneralInfo } from "../../components/quiz/create/general-info";
import { Questions } from "../../components/quiz/create/questions";

const stepsItems = [
  {
    label: "Quiz info",
  },
  {
    label: "Questions",
  },
];

export function QuizCreatePage() {
  const initialQuizData = {
    title: "",
    description: "",
    category: null,
    quizFocus: null,
    manualComplexity: true,
    complexity: 1,
    questionAmount: 3,
    isMixedQuestionType: false,
    questionType: 1,
    isGraded: false,
    isManuallyGraded: false,
    questions: [],
  };

  // const initialQuestionSet = []

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [quizData, setQuizData] = useState(initialQuizData);
  // const [questionSet, setQuestionSet] = useState(initialQuestionSet);

  const onUpdateQuizInfo = (name, value) => {
    setQuizData({ ...quizData, [name]: value });
  };

  const onUpdateQuestions = (key, name, value) => {
    setQuizData({
      ...quizData,
      questions: {
        ...quizData.questions,
        [key]: {
          ...quizData.questions[key],
          [name]: value,
        },
      },
    });
  };

  const handleNextClick = () => {
    var len = quizData.questionAmount;
    if (quizData.questions.length === 0) {
      for (var i = 0; i < len; i++) {
        quizData.questions.push({
          key: i,
          title: "",
          hint: "",
          grade: 0,
          complexity: 1,
          answers: [],
        });
      }
    }

    setCurrentStepIndex(currentStepIndex + 1);
  };

  // console.log(quizData);

  return (
    <div className="flex flex-column align-items-center m-5 gap-5">
      <Steps
        model={stepsItems}
        activeIndex={currentStepIndex}
        onSelect={(e) => {
          setCurrentStepIndex(e.index);
        }}
        pt={{
          root: {
            className: "w-30rem",
          },
        }}
      />
      <Panel
        pt={{
          content: {
            style: {
              borderRadius: 15,
            },
          },
        }}
      >
        {currentStepIndex === 0 ? (
          <QuizGeneralInfo data={quizData} updateHandler={onUpdateQuizInfo} />
        ) : null}
        {currentStepIndex === 1 ? (
          <Questions data={quizData} updateHandler={onUpdateQuestions} />
        ) : null}
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
              onClick={handleNextClick}
            />
          )}
        </div>
      </Panel>
    </div>
  );
}