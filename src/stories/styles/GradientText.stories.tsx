import type { Meta, StoryObj } from "@storybook/react";
import styles from "./GradientText.module.scss";

type Props = { className?: string; text: string };

function GradientText({ className, text }: Props) {
  return (
    <span className={`${styles.container} ${className}`} data-text={text}>
      {text}
    </span>
  );
}

const meta: Meta<typeof GradientText> = {
  component: GradientText,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof GradientText>;

export const Normal: Story = {
  args: {
    className: styles.leftToRight,
    text: "Gradient Text",
    // Add your props here
  },
};

export const Gold: Story = {
  args: {
    className: styles.gold,
    text: "Gold",
    // Add your props here
  },
};

export const Silver: Story = {
  args: {
    className: styles.silver,
    text: "Silver",
    // Add your props here
  },
};
