import HoldemBoardBar from "@/components/HoldemBoardBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HoldemBoardBar> = {
  component: HoldemBoardBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HoldemBoardBar>;

export const PreFlop: Story = {
  args: {
    pot: 100000,
    subtitle: "2024 XXXX EVENTS - final table",
  },
};

export const Flop: Story = {
  args: {
    cards: ["C2", "H2", "DJ"],
    pot: 300000,
    subtitle: "2024 XXXX EVENTS - final table",
  },
};

export const Turn: Story = {
  args: {
    cards: ["C2", "H2", "DJ", "SK"],
    pot: 1000000,
    subtitle: "2024 XXXX EVENTS - final table",
  },
};

export const River: Story = {
  args: {
    cards: ["C2", "H2", "DJ", "SK", "SQ"],
    pot: 10000000,
    subtitle: "2024 XXXX EVENTS - final table",
  },
};
