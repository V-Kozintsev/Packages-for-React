//Form.jsx
import React from "react";
import Input from "./Input";
import Button from "./Button";
const Form = ({ id }) => {
  return (
    <form id={id}>
      <Input id="inputCity" type="text" placeholder="Введите название города" />
      <Button id="btn-search">показать</Button>
    </form>
  );
};

export default Form;
