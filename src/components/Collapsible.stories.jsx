import React from "react";
import Collapsible from "./Collapsible";

export default {
  title: "Components/Collapsible",
  component: Collapsible,
  argTypes: {
    title: { control: "text" },
    className: { control: "text" },
  },
};

export const Default = {
  args: {
    title: "Название раскрывашки",
    className: "collapsible",
    children: <p>Это содержимое, которое появляется и исчезает при клике</p>,
  },
};

export const CustomTitle = {
  args: {
    title: "Пользовательское название раскрывашки",
    className: "collapsible",
    children: <p>Это содержимое, которое появляется и исчезает при клике</p>,
  },
};

export const CustomStyle = {
  args: {
    title: "Раскрывашка c кастомным стилем",
    className: "custom-collapsible",
    children: <p>Это содержимое, которое появляется и исчезает при клике</p>,
  },
};
