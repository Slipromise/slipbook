import type { Meta, StoryObj } from "@storybook/react";
import styles from "./SnakeBroader.module.scss";

import React from "react";

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
};

function SnakeBrowser({ className }: Props) {
  return (
    <div className={className}>
      <span className={styles.borderSide} />
      <span className={styles.borderSide} />
      <span className={styles.borderSide} />
      <span className={styles.borderSide} />
      <p>SnakeBrowser.stories</p>
    </div>
  );
}

const meta: Meta<typeof SnakeBrowser> = {
  component: SnakeBrowser,
};

export default meta;

type Story = StoryObj<typeof SnakeBrowser>;

export const Normal: Story = {
  args: {
    className: styles.container,
  },
};

// TODO: Count 1 2 4

// TODO: Counterclockwise
