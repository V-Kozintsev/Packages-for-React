// src/components/Image.jsx
import React from "react";

const Image = ({ src, alt, width, height, className, style, ...props }) => {
  const combinedStyle = { ...style, width, height };
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={combinedStyle}
      {...props}
    />
  );
};

export default Image;
