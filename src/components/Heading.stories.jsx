import Paragraph from "./Paragraph";

export default {
  title: "Components/Heading",
  component: Paragraph,
};

export const Primary = {
  args: {
    children: "Это параграф текста. Здесь может быть много слов и предложений.",
    className: "paragraph",
  },
};
export const Secondary = {
  args: {
    children: "Другой параграф.",
    className: "secondary-paragraph",
  },
};
