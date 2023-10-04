import "/node_modules/primeflex/primeflex.css";

import React, { useState, useEffect } from "react";
import { Divider } from "primereact/divider";
import { TreeSelect } from "primereact/treeselect";
import { InputText } from "primereact/inputtext";
import { NodeService } from "../../../services/NodeService";
import { Panel } from "primereact/panel";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import "primeicons/primeicons.css";
import { Checkbox } from "primereact/checkbox";
import { SelectButton } from "primereact/selectbutton";

export default function QuizGeneralInfo({ data }) {
  // FIXME: Combine all the fileds into one object
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [complexity, setComplexity] = useState(null);
  const [questionAmount, setQuestionAmount] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [complexityCheckbox, setComplexityCheckbox] = useState(true);
  // FIXME: change name
  const [quizFocus, setQuizFocus] = useState(null);

  const [formData, setFormData] = useState(data);
  console.log(formData)

  const options = ["Practice", "Theory", "Both"];

  // FIXME: adjust categories
  const [nodes, setNodes] = useState(null);
  const [selectedNodeKey, setSelectedNodeKey] = useState(null);

  useEffect(() => {
    NodeService.getTreeNodes().then((data) => setNodes(data));
  }, []);

  return (
    <>
      <Panel
        header="Basic setup"
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
        <div className="card p-fluid">
          <div className="field">
            <label htmlFor="title">Quiz Title</label>
            <InputText
              id="title"
              placeholder="Enter the title of your new quiz"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description</label>
            <InputTextarea
              id="description"
              autoResize
              placeholder="Enter description for your quiz if you want."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
            />
          </div>
          <div className="field flex justify-content-between gap-3">
            <div className="field flex align-items-center gap-3">
              <label>Category</label>
              <div className="card flex justify-content-center">
                <TreeSelect
                  value={selectedNodeKey}
                  onChange={(e) => setSelectedNodeKey(e.value)}
                  options={nodes}
                  className="md:w-20rem w-full"
                  placeholder="Select Category"
                />
              </div>
            </div>
            <div className="field flex align-items-center gap-3">
              <label>Type of questions</label>
              <div className="card flex justify-content-center">
                <SelectButton
                  value={quizFocus}
                  onChange={(e) => setQuizFocus(e.value)}
                  options={options}
                />
              </div>
            </div>
          </div>

          <div className="field flex align-items-center justify-content-between gap-3">
            <div className="field flex gap-3">
              <Checkbox
                id="complexityCheckbox"
                onChange={(e) => setComplexityCheckbox(e.checked)}
                checked={complexityCheckbox}
              />
              <label htmlFor="complexityCheckbox">
                Manually set complexity
              </label>
            </div>
            {complexityCheckbox ? (
              <div className="field">
                <InputNumber
                  id="complexity"
                  value={complexity}
                  onChange={(e) => setComplexity(e.value > 10 ? 10 : e.value)}
                  min={1}
                  max={10}
                  prefix="set to "
                  showButtons
                  // buttonLayout="horizontal"
                  // incrementButtonIcon="pi pi-plus"
                  // decrementButtonIcon="pi pi-minus"
                  mode="decimal"
                />
              </div>
            ) : null}
            <div className="field flex">
              <label htmlFor="questionAmount">Question amount</label>
              <InputNumber
                id="questionAmount"
                value={questionAmount}
                onChange={(e) => setQuestionAmount(e.value > 10 ? 10 : e.value)}
                min={3}
                max={10}
                suffix=" questions"
                showButtons
                mode="decimal"
              />
            </div>
          </div>
        </div>
      </Panel>

      <Divider />

      <Panel
        header="Advanced"
        toggleable
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
        Something special
      </Panel>
    </>
  );
}
