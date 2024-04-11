import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import EmojiParticles from "../../components/EmojiParticles";

const meta: Meta<typeof EmojiParticles> = {
  component: EmojiParticles,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmojiParticles>;

export const Normal: Story = {
  args: {
    likeCount: 30,
    heartCount: 30,
  },
};

export const Custom: Story = {
  args: {
    likeCount: 0,
    heartCount: 0,
    customCounts: [50],
    customEmojis: ["☠️"],
  },
};
