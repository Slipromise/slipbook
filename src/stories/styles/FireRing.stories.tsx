import { Meta, StoryObj } from "@storybook/react";
import styles from "./FireRing.module.scss";

function FireRing() {
  return (
    <>
      <div className={styles.container}></div>
      <svg style={{ width: 0, height: 0 }}>
        <filter id="wavy">
          <feTurbulence x="0" y="0" numOctaves="5" seed="2">
            <animate
              attributeName="baseFrequency"
              values="0.02;0.005;0.02"
              dur="60s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale={30} />
        </filter>
      </svg>
    </>
  );
}

const meta: Meta<typeof FireRing> = {
  component: FireRing,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof FireRing>;

export const Default: Story = {
  args: {},
};
