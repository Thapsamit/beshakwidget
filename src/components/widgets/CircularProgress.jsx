import React from "react";

const CircularProgress = () => {
  return (
    <>
      <svg width="100%" height="100%">
        <circle cx="35" cy="35" r="35"></circle>
        <circle cx="35" cy="35" r="35"></circle>
      </svg>
      <div className="number">
        <p>
          25<span>%</span>
        </p>
      </div>
    </>
  );
};

export default CircularProgress;
