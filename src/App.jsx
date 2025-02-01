//App.jsx
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Space from "./components/Space";
import React from "react";

export const App = () => {
  return (
    <div>
      <Heading level={1} className="main-heading">
        Главный заголовок страницы
      </Heading>
      <Space />
      <Heading level={2} className="secondary-heading">
        Главный второго уровня
      </Heading>
      <Space />
      <Paragraph className="paragraph">
        Это параграф текста. Здесь может быть много слов и предложений.
      </Paragraph>
      <Space width="500px" style={{ border: "1px solid green" }} />
    </div>
  );
};
