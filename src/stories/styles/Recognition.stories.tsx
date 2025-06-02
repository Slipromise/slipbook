import type { Meta, StoryObj } from "@storybook/react";
import styles from "./Recognition.module.scss";

type Props = { contentStyle: string };

const Recognition = ({ contentStyle }: Props) => {
  return (
    <div className={styles.container}>
      <div className={contentStyle}></div>
      <h3>recognition</h3>
    </div>
  );
};

const meta: Meta<typeof Recognition> = {
  component: Recognition,
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof Recognition>;

export const Face: Story = {
  args: {
    contentStyle: styles.face,
  },
};

export const FingerPrint: Story = {
  args: {
    contentStyle: styles.fingerPrint,
  },
};
