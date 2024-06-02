import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import style from "./liquidBlast.module.scss";

type Props = {
  circleClassName?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
};

const LiquidBlast = ({ circleClassName }: Props) => {
  return (
    <div className={style.container}>
      <div className={circleClassName}>
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
        <i className={style.particle} />
      </div>
      <svg className={style.filterSvg}>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 50 -10"
          />
        </filter>
      </svg>
    </div>
  );
};
const meta: Meta<typeof LiquidBlast> = {
  component: LiquidBlast,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof LiquidBlast>;

export const Normal: Story = {
  args: {
    circleClassName: style.normal,
  },
};

export const Slime: Story = {
  args: {
    circleClassName: style.slime,
  },
};
