//Heading.jsx
import React from "react";

const Heading = ({ level, className, children }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={className}>{children}</HeadingTag>;
};

export default Heading;
