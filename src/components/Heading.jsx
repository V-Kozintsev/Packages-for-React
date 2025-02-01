//Heading.jsx
import React from "react";

export const Heading = ({ level, children, className }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag className={className}>{children}</HeadingTag>;
};
