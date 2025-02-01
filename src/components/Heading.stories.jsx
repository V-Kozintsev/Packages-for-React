// src/components/Heading.stories.jsx
import  Heading  from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

export const Primary = {
  args: {
    level: 1,
    children: "Заголовок первого уровня",
    className: "main-heading",
  },
};

export const Secondary = {
  args: {
    level: 2,
    children: "Заголовок второго уровня",
    className: "secondary-heading",
  },
};

export const Third = {
  args: {
    level: 3,
    children: "Заголовок третьего уровня",
    className: "third-heading",
  },
};
