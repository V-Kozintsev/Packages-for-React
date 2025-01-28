import React from "react";
import { Input } from "./Input";

import { useState } from "react";

export const Form = () => {
  const [count, setCount] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" />
      <br />
      <Input type="password" />
      <hr />
      <p>{count}</p>
      <button
        className="wrapper"
        style={{ backgroundColor: "red", padding: "10px" }}
        onClick={handleClick}
      >
        click
      </button>
    </form>
  );
};
