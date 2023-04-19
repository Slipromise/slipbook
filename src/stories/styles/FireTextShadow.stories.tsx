import type { Meta, StoryObj } from "@storybook/react";
import styles from "./FireTextShadow.module.scss";

import React from "react";

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
};

function FireTextShadow({ className }: Props) {
  return (
    <h1 className={className}>
      <span>F</span>
      <span>i</span>
      <span>r</span>
      <span>e</span>
      <span>T</span>
      <span>e</span>
      <span>x</span>
      <span>t</span>
      <span>S</span>
      <span>h</span>
      <span>a</span>
      <span>d</span>
      <span>o</span>
      <span>w</span>
    </h1>
  );
}

const meta: Meta<typeof FireTextShadow> = {
  component: FireTextShadow,
};

export default meta;
type Story = StoryObj<typeof FireTextShadow>;

export const Normal: Story = {
  args: {
    className: styles.normal,
  },
};

export const Animation: Story = {
  args: {
    className: styles.animation,
  },
};

export const Variants: Story = {
  args: {
    className: styles.variants,
  },
};
