import LuckySpinningWheel from "@/components/LuckySpinningWheel";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof LuckySpinningWheel> = {
  component: LuckySpinningWheel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LuckySpinningWheel>;

export const Normal: Story = {};
