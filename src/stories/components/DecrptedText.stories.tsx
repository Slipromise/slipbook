import DecryptedText from "@/components/DecryptedText";
import { Meta, StoryObj } from "@storybook/react";
import styles from "./decrptedText.module.scss";

const meta: Meta<typeof DecryptedText> = {
  component: DecryptedText,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    parentClassName: styles.container,
  },
};

export default meta;

type Story = StoryObj<typeof DecryptedText>;

export const Normal: Story = {
  args: {
    text: "Hello World",
    animateOn: "view",
  },
};

export const Hover: Story = {
  args: {
    text: "Hover me",
    animateOn: "hover",
  },
};

export const Sequential: Story = {
  args: {
    text: "Sequential Reveal",
    sequential: true,
    animateOn: "view",
  },
};

export const SequentialWithOriginalChars: Story = {
  args: {
    text: "Sequential Reveal",
    sequential: true,
    animateOn: "view",
    useOriginalCharsOnly: true,
  },
};
