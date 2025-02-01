//App.jsx
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Space from "./components/Space";
import Collapsible from "./components/Collapsible";
import React from "react";
import { color } from "storybook/internal/theming";

export const App = () => {
  return (
    <div>
      <Heading style={{ color: "red" }} level={1} className="main-heading">
        Главный заголовок страницы
      </Heading>
      <Space />
      <Heading
        style={{ color: "blue" }}
        level={2}
        className="secondary-heading"
      >
        Главный второго уровня
      </Heading>
      <Space />
      <Paragraph className="paragraph">
        Это параграф текста. Здесь может быть много слов и предложений.
      </Paragraph>
      <Space width="500px" style={{ border: "1px solid green" }} />
      <Collapsible title="Схлопывающийся блок">
        <Paragraph>Здесь контент схлопывающегося блока.</Paragraph>
        <Paragraph>Тут еще один параграф.</Paragraph>
      </Collapsible>
    </div>
  );
};
