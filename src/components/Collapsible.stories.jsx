// Collapsible.stories.jsx
import React from "react";
import Collapsible from "./Collapsible"; // Именной импорт
import { Paragraph } from "./Paragraph";

export default {
  title: "Components/Collapsible", // Заголовок в Storybook
  component: Collapsible, // Сам компонент
  argTypes: {
    title: { control: "text" }, // Настройка для пропса "title"
  },
};

const Template = (args) => (
  <Collapsible {...args}>
    <Paragraph>Здесь контент схлопывающегося блока.</Paragraph>
    <Paragraph>Тут еще один параграф.</Paragraph>
  </Collapsible>
);

export const Default = Template.bind({});
Default.args = { title: "Схлопывающийся блок" };
