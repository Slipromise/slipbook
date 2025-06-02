import type { Meta, StoryObj } from "@storybook/react";
import styles from "./GlitchText.module.scss";
import { CSSProperties } from "react";

type Props = {
  text: string;
  duration?: number;
};

function GlitchText({ text, duration = 1000 }: Props) {
  return (
    <div
      className={styles.container}
      data-text={text}
      style={{ "--duration": `${duration}ms` } as CSSProperties}
    >
      {text}
    </div>
  );
}

const meta: Meta<typeof GlitchText> = {
  component: GlitchText,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  globals: { theme: "dark" },
};

export default meta;

type Story = StoryObj<typeof GlitchText>;

export const Normal: Story = {
  args: {
    text: "Glitch Text",
    duration: 1000,
  },
};


  