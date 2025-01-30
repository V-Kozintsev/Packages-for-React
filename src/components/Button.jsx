//Button.jsx
import React from "react";

export const Button = ({ variant, disabled }) => {
  if (variant === "secondary") {
    return (
      <button style={{ backgroundColor: "red" }} disabled={disabled}>
        отправить
      </button>
    );
  }
  if (variant === "first") {
    return (
      <button style={{ backgroundColor: "yellow" }} disabled={disabled}>
        отправить
      </button>
    );
  }
  return <button>нажать</button>;
};
