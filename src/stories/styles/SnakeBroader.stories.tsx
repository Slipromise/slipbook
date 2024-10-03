import type { Meta, StoryObj } from "@storybook/react";
import styles from "./SnakeBroader.module.scss";

import React from "react";

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
  borderSideClassName?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
};

function SnakeBroader({ className, borderSideClassName }: Props) {
  return (
    <div className={className}>
      <span className={borderSideClassName} />
      <span className={borderSideClassName} />
      <span className={borderSideClassName} />
      <span className={borderSideClassName} />
    </div>
  );
}

const meta: Meta<typeof SnakeBroader> = {
  component: SnakeBroader,
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof SnakeBroader>;

export const Animation4SidesClockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["animation-4-sides-clockwise"],
  },
};

export const Animation4SidesCounterclockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["animation-4-sides-counterclockwise"],
  },
};

export const Animation2SidesClockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["animation-2-sides-clockwise"],
  },
};

export const Animation2SidesCounterclockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["animation-2-sides-counterclockwise"],
  },
};

export const AnimationSideClockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["animation-1-sides-clockwise"],
  },
};

export const AnimationSideCounterclockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["animation-1-sides-counterclockwise"],
  },
};

export const Hover4SidesClockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["hover-4-sides-clockwise"],
  },
};

export const Hover4SidesCounterclockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["hover-4-sides-counterclockwise"],
  },
};

export const Hover2SidesClockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["hover-2-sides-clockwise"],
  },
};

export const Hover2SidesCounterclockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["hover-2-sides-counterclockwise"],
  },
};

export const HoverSideClockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["hover-1-sides-clockwise"],
  },
};

export const HoverSideCounterclockwise: Story = {
  args: {
    className: styles.container,
    borderSideClassName: styles["hover-1-sides-counterclockwise"],
  },
};
