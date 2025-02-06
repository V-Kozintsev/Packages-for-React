import Space from "./Space";

export default {
  title: "Components/Space",
  component: Space,
};

export const Primary = {
  args: {
    with: "50px",
    height: "50px",
  },
};
export const Secondary = {
  args: {
    width: "500px",
    style: { border: "5px solid red" },
  },
};
