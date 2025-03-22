import { Meta, StoryObj } from "@storybook/react";
import styles from "./ThreeDimensionalIconBox.module.scss";

type Props = {
  icon?: string;
};

function ThreeDimensionalIconBox({icon }: Props) {
  return (
    <div
      className={styles.container}
    >
      <div data-icon={icon} >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

const meta = {
  component: ThreeDimensionalIconBox,
  parameters: {
    backgrounds: { default: "dark" },
    layout: "centered",
  },
} satisfies Meta<typeof ThreeDimensionalIconBox>;

export default meta;

type Story = StoryObj<typeof ThreeDimensionalIconBox>;

export const Twitter:Story = {
    args: {
        icon: "\ue61b"
    }
} 

export const Github:Story = {
    args:{
        icon: '\uf09b'
    }
}

export const React:Story = {
    args:{
        icon:'\uf41b'
    }
}
