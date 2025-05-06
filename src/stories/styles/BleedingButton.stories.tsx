import type { Meta, StoryObj } from "@storybook/react";
import styles from "./BleedingButton.module.scss";
import { useMemo } from "react";

type Props = {
  particleCount?: number;
};

function BleedingButton({ particleCount = 100 }: Props) {
  const bubbles = useMemo(() => {
    const result = Array.from({ length: particleCount }).map((_, i) => {
      const angle = Math.random() * 360 * Math.PI;
      const distance = Math.random() * 100 + 150;

      return {
        "--dx": `${Math.cos(angle) * distance}px`,
        "--dy": `${Math.sin(angle) * distance}px`,
        "--i": Math.ceil((i + 1) / 3),
      } as React.CSSProperties;
    });
    return result;
  }, [particleCount]);

  return (
    <>
      <a className={styles.container}>
        <div className={styles.bubbles}>
          {bubbles.map((style, index) => (
            <div key={index} className={styles.bubble} style={style} />
          ))}
        </div>
        <span className={styles.text}>Bleeding</span>
      </a>
      <svg style={{ display: "none" }}>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 50 -10"
          ></feColorMatrix>
        </filter>
      </svg>
    </>
  );
}

const meta: Meta<typeof BleedingButton> = {
  component: BleedingButton,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof BleedingButton>;

export const Normal: Story = {
  args: {},
};

export const MoreParticles: Story = {
    args:{
        particleCount: 500,
    }
}