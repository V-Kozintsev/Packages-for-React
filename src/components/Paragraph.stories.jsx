import Paragraph from "./Paragraph";

export default {
  title: "Components/Paragraph",
  component: Paragraph,

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
