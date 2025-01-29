//App.jsx
import React, { useState } from "react";
import { Form } from "./components/Form";

export const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>Hello,React</h1>
      <Form />
      <hr />
      <p>count:{count}</p>
      <button onClick={handleClick}>click here</button>
    </div>
  );
};
