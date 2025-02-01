//App.jsx
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import React from "react";

export const App = () => {
  return (
    <div>
      <Heading level={1} className="main-heading">
        Главный заголовок страницы
      </Heading>
      <Heading level={2} className="secondary-heading">
        Главный второго уровня
      </Heading>
      <Paragraph className="paragraph">
        Это параграф текста. Здесь может быть много слов и предложений.
      </Paragraph>
    </div>
  );
};
