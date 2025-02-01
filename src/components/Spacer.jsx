// Spacer.jsx
import React from "react";

export const Spacer = ({ height, color, className }) => {
  return (
    <div className={className} style={{ height: height }}>
      <hr style={{ borderColor: color }} />
    </div>
  );
};
Spacer.defaultProps = {
  height: "10px",
  color: "black",
};
