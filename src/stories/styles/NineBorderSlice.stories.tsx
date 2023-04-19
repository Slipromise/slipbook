import type { Meta, StoryObj } from "@storybook/react";
import styles from "./NineBorderSlice.module.scss";

import React from "react";

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
};

function NineBorderSlice({ className }: Props) {
  return (
    <div className={className}>
      <p>NineBorderSlice.stories</p>
    </div>
  );
}

const meta: Meta<typeof NineBorderSlice> = {
  component: NineBorderSlice,
};

export default meta;
type Story = StoryObj<typeof NineBorderSlice>;

export const Normal: Story = {
  args: {
    className: styles.container,
  },
};

export const BeforeElement: Story = {
  args: {
    className: styles.container1,
  },
};

export const Sizing: Story = {
  args: {
    className: `${styles.container} ${styles.sizingContainer}`,
  },
};
