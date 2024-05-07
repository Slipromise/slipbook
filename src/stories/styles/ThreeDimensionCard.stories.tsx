import React, { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import styles from "./ThreeDimensionCard.module.scss";
import gift from "@/stories/assets/gift.png";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

type Props = {};

const ThreeDimensionCard = (props: Props) => {
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
        // TODO: 優化
        // ref.current?.["vanillaTilt"]?.["destroy"]();
      }
    };
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      <h2>Gift</h2>
      <a href="#">Buy Now</a>
      <Image src={gift} alt="" />
    </div>
  );
};

const meta: Meta<typeof ThreeDimensionCard> = {
  component: ThreeDimensionCard,
};

export default meta;

type Story = StoryObj<typeof ThreeDimensionCard>;

export const Normal: Story = {};
