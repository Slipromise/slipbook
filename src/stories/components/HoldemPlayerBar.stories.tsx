import type { Meta, StoryObj } from "@storybook/react";

import HoldemPlayerBar from "@/components/HoldemPlayerBar";

const meta: Meta<typeof HoldemPlayerBar> = {
  component: HoldemPlayerBar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HoldemPlayerBar>;

const images = [
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2230%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2030%2040%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f57f21c08%20text%20%7B%20fill%3A%231E292C%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f57f21c08%22%3E%3Crect%20width%3D%2230%22%20height%3D%2240%22%20fill%3D%22%2339DBAC%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22-3.5390625%22%20y%3D%2232%22%3E30x40%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
];

export const Normal: Story = {
  args: {
    avatarUri: images[0],
    chipAmount: 123944320,
    name: "PlayerName",
    status: "CHECK",
    cards: ["C2", "H7"],
    position: "D",
  },
};

export const InTurn: Story = {
  args: {
    avatarUri: images[0],
    chipAmount: 123944320,
    name: "PlayerName",
    status: "CHECK",
    cards: ["SA", "DJ"],
    position: "D",
    isTurn: true,
  },
};

export const Cover: Story = {
  args: {
    avatarUri: images[0],
    chipAmount: 123944320,
    name: "PlayerName",
    status: "CHECK",
    cards: [undefined, undefined],
    position: "D",
  },
};

export const Fold: Story = {
  args: {
    avatarUri: images[0],
    chipAmount: 123944320,
    name: "PlayerName",
    status: "FOLD",
    cards: ["CK", "HT"],
    position: "D",
  },
};
