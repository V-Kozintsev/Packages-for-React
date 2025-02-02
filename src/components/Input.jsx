//Input.jsx
import React from "react";

const Input = ({ id, type, placeholder }) => {
  return <input id={id} type={type} required placeholder={placeholder} />;
};

export default Input;
