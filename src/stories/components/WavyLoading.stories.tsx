import WavyLoading from "@/components/WavyLoading";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WavyLoading> = {
  component: WavyLoading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
        default: "dark",
      },
  },
};

export default meta;

type Story = StoryObj<typeof WavyLoading>;

export const Normal: Story = {};

export const EscapeMode: Story = {
  args: {
    text: "Escape-mode",
    duration: 3000
  }
};
