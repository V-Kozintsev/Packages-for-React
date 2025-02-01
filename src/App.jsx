//App.jsx
import { Heading } from "./components/Heading";
import React from "react";

export const App = () => {
  return (
    <div>
      <Heading level={1} className="main-heading">
        Главный заголовок страницы
      </Heading>
    </div>
  );
};
