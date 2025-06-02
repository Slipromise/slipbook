/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import styles from "./ThreeDimensionCard.module.scss";
import gift from "../assets/gift.png";

import VanillaTilt from "vanilla-tilt";

const images = [gift];

const ThreeDimensionCard = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      VanillaTilt.init(ref.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        scale: 1.05,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      });
    }
    return () => {
      if (ref.current !== null) {
        (
          ref.current as RefObject<HTMLDivElement>["current"] & {
            VanillaTilt: VanillaTilt;
          }
        ).VanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <h2>Gift</h2>
      <a href="#">Buy Now</a>
      <img src={images[0]} alt="" />
    </div>
  );
};

const meta: Meta<typeof ThreeDimensionCard> = {
  component: ThreeDimensionCard,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof ThreeDimensionCard>;

export const Normal: Story = {};
