// src/components/Sum.jsx
import React from "react";

function Sum({ a, b }) {
  const sum = a + b;
  return (
    <div>
      The sum of {a} and {b} is: {sum}
    </div>
  );
}

export default Sum;
