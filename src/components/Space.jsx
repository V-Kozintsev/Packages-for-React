import React from "react";

const Space = ({ width = "10px", height = "10px", style }) => {
  const combineStyle = { ...style, width, height, display: "inline-block" };
  return <div style={combineStyle}></div>;
};

export default Space;
