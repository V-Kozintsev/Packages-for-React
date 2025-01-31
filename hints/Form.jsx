//Form.jsx
import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

export const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Логин:", login);
    console.log("Пароль:", password);
  };
  const handleVisible = () => {
    setVisible(!visible);
  };
  const handleLoading = async () => {
    setLoading(true);
    await new Promise((res) => {
      setTimeout(res, 2000);
    });
    try {
      const res = await fetch("https://dummyjson.com/products");
      const { products } = await res.json();

      setProducts(products);
      setLoading(false);
      console.log(products);
    } catch (er) {
      console.error("Ошибка запроса api", er);
    }
  };
  useEffect(() => {
    handleLoading();
  }, []);

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
      <hr />

      {loading && (
        <p style={{ margin: "51px" }}>Loading...{loading.toString()}</p>
      )}
      <p>{products.toString()}</p>
    </form>
  );
};
