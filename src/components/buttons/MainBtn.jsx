import React from "react";

const MainBtn = ({
  text,
  borderRadius,
  fontSize,
  fontWeight,
  color,
  backgroundColor,
  px,
  py,
}) => {
  return (
    <button
      style={{
        fontSize: fontSize,
        border: "none",
        borderRadius: borderRadius,
        fontWeight: fontWeight,
        color: color,
        background: backgroundColor,
        paddingTop: py,
        paddingBottom: py,
        paddingRight: px,
        paddingLeft: px,
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};
export default MainBtn;
