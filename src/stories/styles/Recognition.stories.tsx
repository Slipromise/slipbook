import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import styles from "./Recognition.module.scss";

type Props = {};

const Recognition = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.face}></div>
      <h3>facial recognition</h3>
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

export const Face: Story = {};
