import React, { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
import "./progresswidget.css";
import CircularProgress from "./CircularProgress";
import ProgressSteps from "./ProgressSteps";

const ProgressWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={isExpanded ? "widget-container open" : "widget-container"}
      onClick={() => (!isExpanded ? setIsExpanded(true) : {})}
    >
      <IoCloseOutline
        style={{ position: "absolute", top: 0, right: 0, margin: "10px" }}
        className={isExpanded ? "close-btn-open" : "close-btn-close"}
        size={35}
        color="rgba(51, 51, 51, 0.5)"
        onClick={() => (isExpanded ? setIsExpanded(false) : {})}
      />

      <div className="circular">
        <CircularProgress />
      </div>

      <div
        className={isExpanded ? "widget-start-text" : "widget-start-text open"}
      >
        <p className="next-text">
          What do I <br /> do next?
        </p>
      </div>

      <div
        className={
          isExpanded ? "progress-container open" : "progress-container"
        }
      >
        <div className="progress-title-container">
          <p className="progress-title">Great Progress</p>
          <p className="progress-sub-title">Almost ready to get 100% secured</p>
        </div>
        <ProgressSteps />
      </div>
    </div>
  );
};

export default ProgressWidget;
