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
            {index +1}
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
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThreeDimensionalSildeshow>;

export const Normal: Story = {
  args: {
    list: [
      {
        title: "Ragnarok",
        src: "src/stories/assets/00001-2086282684.png",
      },
      {
        title: "Wonderland",
        src: "src/stories/assets/00002-442336389.png",
      },
      {
        title: "Ocean Lord",
        src: "src/stories/assets/00003-3958138843.png",
      },
      {
        title: "Sir Loin",
        src: "src/stories/assets/00004-15481453.png",
      },
      {
        title: "Steam Punk",
        src: "src/stories/assets/00005-15481453.png",
      },
    ],
    duration:5000,
  },
};
