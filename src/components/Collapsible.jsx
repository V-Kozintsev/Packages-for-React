// Collapsible.jsx
import React, { useState } from "react";

const Collapsible = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <h3
        onClick={toggleOpen}
        style={{ cursor: "pointer", userSelect: "none" }}
      >
        {title}
      </h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Collapsible