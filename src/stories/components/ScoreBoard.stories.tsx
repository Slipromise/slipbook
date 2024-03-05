import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ScoreBoard from "../../components/ScoreBoard";

const meta: Meta<typeof ScoreBoard> = {
  component: ScoreBoard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ScoreBoard>;

export const Normal: Story = {
  args: {
    aTitle: "home",
    bTitle: "away",
    aScore: 7,
    bScore: 10,
  },
};

export const WithCountdown: Story = {
  args: {
    aTitle: "home",
    bTitle: "away",
    aScore: 10,
    bScore: 7,
    countDownTime: 30000,
  },
};

export const WithSubtitle: Story = {
  args: {
    aTitle: "home",
    bTitle: "away",
    aScore: 10,
    bScore: 7,
    subTitle: "1 - 3",
  },
};
