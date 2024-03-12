import type { Meta, StoryObj } from "@storybook/react";
import Button from "react-bootstrap/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

// TODO: 製作顯示所有bootstrap元件的頁面

type Story = StoryObj<typeof Button>;

export const BootstrapDefault: Story = {
  args: {
    type: "button",
    children: "test",
  },
};

export const Custom: Story = {
  args: {
    type: "button",
    children: "test",
    bsPrefix: "custom-btn",
  },
};

export const CustomByExtend: Story = {
  args: {
    type: "button",
    children: "test",
    className: "custom2-btn",
  },
};
