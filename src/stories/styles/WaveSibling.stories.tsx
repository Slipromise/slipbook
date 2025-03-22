import type { Meta, StoryObj } from "@storybook/react";
import styles from "./WaveSibling.module.scss";

function WaveSibling() {
  return (
    <div className={styles.container} >
      <div />
      <div />
      <div />
      <div />
      <div>Hover me</div>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

const meta = {
    component: WaveSibling,
    parameters: {
        backgrounds: { default: "dark" },
        layout: "centered",
    },
} satisfies Meta<typeof WaveSibling>;

export default meta;

type Story = StoryObj<typeof WaveSibling>;

export const Normal:Story = {

}