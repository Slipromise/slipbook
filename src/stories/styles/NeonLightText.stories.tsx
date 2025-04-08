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
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof NeonLightText>;

export const Normal: Story = {
  args: {
    // className:
    className: styles.normal,
  },
};

export const Chase: Story = {
  args: {
    className: styles.chase,
  },
};

export const Flickering: Story = {
  args: {
    className: styles.flickering,
  },
};

export const Pulsate: Story = {
  args: {
    className: styles.pulsate,
  },
};
