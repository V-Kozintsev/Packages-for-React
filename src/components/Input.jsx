import React from "react";

export const Input = (props) => {
  console.log("props", props);
  return <input type={props.type} placeholder="введите текст" />;
};
