import React, { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import styles from "./ThreeDimensionCard.module.scss";
// import gift from "@/stories/assets/gift.png";
// import Image from "next/image";

import VanillaTilt from "vanilla-tilt";
import { Image } from "react-bootstrap";

type Props = {};

const images = [
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f57f0a593%20text%20%7B%20fill%3A%23FFFFFF%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f57f0a593%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%233a5a97%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22-2.5390625%22%20y%3D%2228%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
];

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
      <Image src={images[0]} alt="" />
    </div>
  );
};

const meta: Meta<typeof ThreeDimensionCard> = {
  component: ThreeDimensionCard,
};

export default meta;

type Story = StoryObj<typeof ThreeDimensionCard>;

export const Normal: Story = {};
