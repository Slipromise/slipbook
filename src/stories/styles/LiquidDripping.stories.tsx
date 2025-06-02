import type { Meta, StoryObj } from "@storybook/react";
import styles from "./LiquidDripping.module.scss";

function LiquidDripping() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h2>Liquid</h2>
      </div>
      <svg style={{display:'none'}} >
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
          <feColorMatrix
            values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 50 -10"
          ></feColorMatrix>
        </filter>
      </svg>
    </>
  );
}

const meta: Meta<typeof LiquidDripping> = {
  component: LiquidDripping,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof LiquidDripping>;

export const Normal: Story = {};
