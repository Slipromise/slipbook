import type { Meta, StoryObj } from "@storybook/react";
import styles from "./StarBorder.module.scss";

type Props = {
  color?: string;
  duration?: number;
};

function StarBorder({ color, duration }: Props) {
  return (
    <div
      className={styles.container}
      style={
        {
          "--color": color,
          "--duration":duration ? `${duration}ms`: undefined,
        } as React.CSSProperties
      }
    >
      <div data-top-light />
      <div data-down-light />
      <div data-content>Star Border</div>
    </div>
  );
}

const meta: Meta<typeof StarBorder> = {
  component: StarBorder,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof StarBorder>;

export const Normal: Story = {
  args: {},
};

export const Custom: Story = {
    args: {
        color: "#cc00ff",
        duration: 10000
    }
}
