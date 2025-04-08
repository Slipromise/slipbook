import type { Meta, StoryObj } from "@storybook/react";
import styles from "./GradientBorder.module.scss";
import React, { useMemo } from "react";

type Props = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
  children?: React.HtmlHTMLAttributes<HTMLDivElement>["children"];
  gradientColors?: string[];
};

const GradientBorder = ({ className, children, gradientColors }: Props) => {
  const style = useMemo(() => {
    return gradientColors
      ? ({
          "--gradient-colors": gradientColors.join(","),
        } as React.HtmlHTMLAttributes<HTMLDivElement>["style"])
      : undefined;
  }, [gradientColors]);

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

const meta: Meta<typeof GradientBorder> = {
  component: GradientBorder,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  globals: { theme: "dark" },
};

export default meta;

type Story = StoryObj<typeof GradientBorder>;

export const Normal: Story = {
  args: {
    className: styles.container,
    children: <div className={styles.insideBox}>GradientBorder</div>,
  },
};

export const Flow: Story = {
  args: {
    className: `${styles.container} ${styles.flow}`,
    children: <div className={styles.insideBox}>GradientBorder</div>,
  },
};

export const Breathe: Story = {
  args: {
    className: `${styles.container} ${styles.breathe}`,
    children: <div className={styles.insideBox}>GradientBorder</div>,
  },
};

export const Colorize: Story = {
  args: {
    className: styles.container,
    children: <div className={styles.insideBox}>GradientBorder</div>,
    gradientColors: [
      "#f2ff00",
      "#aa00ff",
      "#00ff00",
      "#ff0000",
      "#1900ff",
      "#f2ff00",
    ],
  },
};
