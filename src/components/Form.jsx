import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Логин:", login);
    console.log("Пароль:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="введите логин"
        value={login}
        onChange={setLogin}
      />
      <br />
      <Input
        type="password"
        placeholder="введите пароль"
        value={password}
        onChange={setPassword}
      />
      <br />
      <Button />
    </form>
  );
};
