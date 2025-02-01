//Heading.jsx
import React from "react";

export const Heading = ({ level, className, children }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={className}>{children}</HeadingTag>;
};

