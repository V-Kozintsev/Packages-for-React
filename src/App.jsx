//App.jsx
import React from "react";
import { Heading } from "./components/Heading";
import { Paragraph } from "./components/Paragraph";
import { Spacer } from "./components/Spacer";
import { Collapsible } from "./components/Collapsible";

export function App() {
  return (
    <header>
      <Heading level={1}>Главный заголовок</Heading>
      <Heading level={2}>Второстепенный заголовок</Heading>
      <Paragraph>
        Это параграф текста. Здесь может быть много слов и предложений.
      </Paragraph>
      <Spacer height={"20px"} color={"red"} />
      <Collapsible title="Схлопывающийся блок">
        <Paragraph>Здесь контент схлопывающегося блока.</Paragraph>
        <Paragraph>Тут еще один параграф.</Paragraph>
      </Collapsible>
    </header>
  );
}
