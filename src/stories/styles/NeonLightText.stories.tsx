import type { Meta, StoryObj } from "@storybook/react";
import styles from "./NeonLightText.module.scss";
import React from "react";

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
};

function NeonLightText({ className }: Props) {
  return (
    <div className={className}>
      <span>N</span>
      <span>e</span>
      <span>o</span>
      <span>n</span>
      <span>L</span>
      <span>i</span>
      <span>g</span>
      <span>h</span>
      <span>t</span>
    </div>
  );
}

const meta: Meta<typeof NeonLightText> = {
  component: NeonLightText,
};

export default meta;

type Story = StoryObj<typeof NeonLightText>;

export const Normal: Story = {
  args: {
    // className:
    className: styles.container,
  },
};

// TODO: add type variants

// TODO: add color variants
