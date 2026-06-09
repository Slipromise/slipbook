import LuckySpinningWheel from "@/components/LuckySpinningWheel";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import _ from "lodash";
import { useArgs } from "storybook/internal/preview-api";

const meta: Meta<typeof LuckySpinningWheel> = {
  component: LuckySpinningWheel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LuckySpinningWheel>;

export const Normal: Story = {
  args: {
    items: [
      { label: "🍔", value: 1 },
      { label: "❤️", value: 2 },
      { label: "🌷", value: 3 },
      { label: "⚽", value: 4 },
      { label: "🚘", value: 5 },
      { label: "🔧", value: 6 },
      { label: "🎙️", value: 7 },
      { label: "📱", value: 8 },
      { label: "🗿", value: 9 },
      { label: "✂️", value: 10 },
    ],
    result: 1,
    onSpin: () => {},
  },
  render: function Render(
    args: React.ComponentProps<typeof LuckySpinningWheel>,
  ) {
    const [{ result }, updateArgs] = useArgs();
    const { onSpin, ...props } = args;

    function onWrapSpin() {
      onSpin();
      updateArgs({ result: undefined });
      setTimeout(() => {
        updateArgs({ result: _.sample(args.items)?.value });
      }, 3000);
    }

    return (
      <LuckySpinningWheel {...props} onSpin={onWrapSpin} result={result} />
    );
  },
};

export const Reward: Story = {
  args: { ...Normal.args, result: 4 },
};

export const Spinning: Story = {
  args: { ...Normal.args, result: undefined },
};
