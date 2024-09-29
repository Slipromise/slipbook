import CircularProgressBar from "@/components/CircularProgressBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CircularProgressBar> = {
  component: CircularProgressBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CircularProgressBar>;

export const Normal: Story = {
  args: {
    value: 40,
  },
};

export const WithTitles: Story = {
  args: {
    value: 50,
    title: "React",
  },
};

export const Colorize: Story = {
  args: {
    value: 60,
    title: "React",
    color: "red",
  },
};
