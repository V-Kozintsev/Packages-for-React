// src/components/Image.stories.jsx
import Image from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    className: { control: "text" },
  },
};

export const Default = {
  args: {
    src: "./images/js.png",
    alt: "JS Logo",
  },
};

export const CustomSize = {
  args: {
    src: "/images/js.png",
    alt: "JS Logo Custom Size",
    width: "200px",
    height: "200px",
    className: "custom-image",
  },
};
