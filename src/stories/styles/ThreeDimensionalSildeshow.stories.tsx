import type { Meta, StoryObj } from "@storybook/react";
import styles from "./ThreeDimensionalSildeshow.module.scss";
import React from "react";

type Props = {
  list: { src: string; title: string }[];
  duration: number;
};

// TODO: 只能接受五張圖片，可以在優化

function ThreeDimensionalSildeshow({ list, duration }: Props) {
  return (
    <div
      className={styles.container}
      style={
        {
          "--duration": `${duration}ms`,
          "--length": list.length,
        } as React.CSSProperties
      }
    >
      {list.map(({ src, title }, index) => (
        <div key={index} style={{ "--i": index } as React.CSSProperties}>
          <h2>
            {index + 1}
            <span>{title}</span>
          </h2>
          <img src={src}></img>
        </div>
      ))}
    </div>
  );
}

const meta: Meta<typeof ThreeDimensionalSildeshow> = {
  component: ThreeDimensionalSildeshow,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  globals: { theme: "dark" },
};

export default meta;

type Story = StoryObj<typeof ThreeDimensionalSildeshow>;

export const Normal: Story = {
  args: {
    list: [
      {
        title: "Emma",
        src: "/images/00001-2086282684.png",
      },
      {
        title: "Sophia",
        src: "/images/00002-442336389.png",
      },
      {
        title: "Olivia",
        src: "/images/00003-3958138843.png",
      },
      {
        title: "Hannah",
        src: "/images/00004-15481453.png",
      },
      {
        title: "Chloe",
        src: "/images/00005-15481453.png",
      },
    ],
    duration: 5000,
  },
};
