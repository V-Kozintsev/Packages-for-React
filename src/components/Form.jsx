//src/components/Form.jsx
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Form = ({ id }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const cityStr = city.trim();
    if (cityStr) {
      navigate(`/weather/${cityStr}`);
    }
    setCity("");
  };

  return (
    <form id={id} onSubmit={handleSubmit}>
      <Input
        id="inputCity"
        type="text"
        placeholder="Введите название города"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button id="btn-search">показать</Button>
    </form>
  );
};

export default Form;
