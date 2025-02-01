//Heading.jsx
import React from "react";

const Heading = ({ level, className, children, style }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag style={style} className={className}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
