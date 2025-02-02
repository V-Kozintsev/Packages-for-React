//App.jsx
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import Space from "./components/Space";
import Collapsible from "./components/Collapsible";
import Image from "./components/Image";
import React from "react";

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
      <Space />
      <Image
        src="./images/js.png"
        alt="JS"
        width="300px"
        height="300px"
        className="my-image"
      />
    </div>
  );
};
