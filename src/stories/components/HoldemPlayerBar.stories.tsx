import type { Meta, StoryObj } from "@storybook/react";

import HoldemPlayerBar from "../../components/HoldemPlayerBar";
import { run as runHolder } from "holderjs";
import { useEffect } from "react";

const meta: Meta<typeof HoldemPlayerBar> = {
  component: HoldemPlayerBar,
  decorators: [
    (SC) => {
      useEffect(() => {
        runHolder();
      }, []);
      return <SC></SC>;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof HoldemPlayerBar>;

export const Normal: Story = {
  args: {
    avatarUri: "holder.js/30x40?auto=yes&random=yes",
    chipAmount: 123944320,
    name: "PlayerName",
    status: "CHECK",
    cards: ["C2", "H7"],
    position: "D",
  },
};
