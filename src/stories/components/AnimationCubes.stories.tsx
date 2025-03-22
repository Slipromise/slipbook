import AnimationCubes from "@/components/AnimationCubes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AnimationCubes> = {
  component: AnimationCubes,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof AnimationCubes>;

export const Normal: Story = {
  args: {
    updateRate: 500,
    duration: 2000,
  },
};

export const FastUpdates: Story = {
  args: {
    updateRate: 250,
    duration: 4000,
  },
};
