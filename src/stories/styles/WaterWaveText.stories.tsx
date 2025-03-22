import type { Meta, StoryObj } from "@storybook/react";
import styles from "./WaterWaveText.module.scss";

function WaterWaveText() {
  return (
    <div className={styles.container}>
      <h2>Water</h2>
      <h2>Water</h2>
      <h2>Water</h2>
    </div>
  );
}

const meta = {
  component: WaterWaveText,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof WaterWaveText>;

export default meta;

type Story = StoryObj<typeof WaterWaveText>;

export const Normal: Story = {};
