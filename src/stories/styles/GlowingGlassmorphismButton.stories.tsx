import type { Meta, StoryObj } from "@storybook/react";
import styles from "./GlowingGlassmorphismButton.module.scss";

type Props = {
    classsName?: React.HtmlHTMLAttributes<HTMLButtonElement>["className"];

};

function GlowingGlassmorphismButton({classsName}: Props) {
  return (
    <button className={`${classsName} ${styles.container}`}>
      <span>Hover me</span>
    </button>
  );
}

const meta: Meta<typeof GlowingGlassmorphismButton> = {
  component: GlowingGlassmorphismButton,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GlowingGlassmorphismButton>;

export const Normal: Story = {
  args: {},
};

export const Variant1: Story = {
    args: {
        classsName: styles.variant1,
    },
}
