import type { Meta, StoryObj } from "@storybook/react";
import styles from "./Bubble.module.scss";

import React from "react";

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
};

function Bubble({ className }: Props) {
  return <div className={className}></div>;
}

const meta: Meta<typeof Bubble> = {
  component: Bubble,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Bubble>;

export const Normal: Story = {
  args: {
    className: styles.normal,
  },
};

export const Stereoscopic: Story = {
  args: {
    className: styles.stereoscopic,
  },
};

export const Animation: Story = {
  args: {
    className: `${styles.stereoscopic} ${styles.animation}`,
  },
};
