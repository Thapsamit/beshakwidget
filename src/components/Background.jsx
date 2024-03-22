import React from "react";
import beshakbackground from "../assets/beshakbackground.png";
const Background = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${beshakbackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Background;
