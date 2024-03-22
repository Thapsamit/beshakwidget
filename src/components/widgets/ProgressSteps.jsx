import React from "react";
import { HiCheckCircle } from "react-icons/hi";
import { MdRadioButtonUnchecked } from "react-icons/md";

import "./progresswidget.css";

import MainBtn from "../buttons/MainBtn";
const steps = [
  {
    id: 1,
    type: "completed",
    text: "Get detailed report",
  },
  {
    id: 2,
    type: "current",
    text: "Discuss with advisor",
  },
  {
    id: 3,
    type: "next",
    text: "Choose Plan",
  },
  {
    id: 4,
    type: "next",
    text: "Make payment",
  },
];

const ProgressSteps = () => {
  return (
    <div className="progress-steps-container">
      {steps.map((step) => (
        <div
          key={step.id}
          className="flex-wrapper flex-justify-between"
          style={{ marginTop: "12px" }}
        >
          <div className="flex-wrapper">
            {step.type === "completed" ? (
              <HiCheckCircle size={24} color="#33AB5F" />
            ) : step.type === "current" ? (
              <MdRadioButtonUnchecked size={22} color="#333333" />
            ) : (
              <MdRadioButtonUnchecked size={22} color="#BDBDBD" />
            )}

            <p
              className={
                step.type === "current"
                  ? "step-text step-current"
                  : step.type === "completed"
                  ? "step-text step-complete"
                  : "step-text"
              }
            >
              {step.text}
            </p>
          </div>
          {step.type === "current" && (
            <MainBtn
              text={"Go"}
              borderRadius={"5px"}
              fontSize={"14px"}
              fontWeight="600"
              px={"16px"}
              py={"5px"}
              color="white"
              backgroundColor="#33AB5F"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
