import type { Meta, StoryObj } from "@storybook/react";
import styles from "./LightSweep.module.scss";

import React from "react";

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
};

function LightSweep({ className }: Props) {
  return (
    <div className={className}>
      <h1>LightSweep</h1>
    </div>
  );
}

const meta: Meta<typeof LightSweep> = {
  component: LightSweep,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  globals: { theme: "dark" },
};

export default meta;
type Story = StoryObj<typeof LightSweep>;

export const Text: Story = {
  args: {
    className: styles.text,
  },
};

export const Box: Story = {
  args: {
    className: styles.box,
  },
  name: "Box(Hover)",
};
