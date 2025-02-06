import React, { useState } from "react";

const Collapsible = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleState = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={className}>
      <h3
        onClick={toggleState}
        style={{
          cursor: "pointer",
          userSelect: "none",
          display: "inline-block",
        }}
      >
        {title}
      </h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible;
