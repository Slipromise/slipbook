import type { Meta, StoryObj } from "@storybook/react";

import Lightning from "@/components/Lightning";

const meta: Meta<typeof Lightning> = {
  component: Lightning,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Lightning>;

export const Default: Story = {
  args: {
    hue: 0.5,
    xOffset: 0.1,
    speed: 0.5,
    intensity: 0.5,
    size: 0.5,
  },
};
