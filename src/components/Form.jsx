//Form.jsx
import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Логин:", login);
    console.log("Пароль:", password);
  };
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button onClick={handleVisible}>show</button>
      <Input
        type="text"
        placeholder="введите логин"
        value={login}
        onChange={setLogin}
      />
      <br />
      {visible && (
        <Input
          type="password"
          placeholder="введите пароль"
          value={password}
          onChange={setPassword}
        />
      )}
      <br />
      <Button variant="secondary" />
      <Button variant="first" />
    </form>
  );
};
