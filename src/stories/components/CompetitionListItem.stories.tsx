import type { Meta, StoryObj } from "@storybook/react";
import CompetitionListItem from "@/components/CompetitionListItem";

import React from "react";
import { withHolder } from "@/components/withHolder";

const meta: Meta<typeof CompetitionListItem> = {
  component: CompetitionListItem,
  decorators: [
    (story) => {
      const Component = withHolder(story);
      return <Component></Component>;
    },
  ],
  argTypes: { startTime: { control: "date" } },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CompetitionListItem>;

export const Normal: Story = {
  args: {
    title: "Title",
    status: "NONE",
    startTime: Date.now(),
    aTeamName: "ATeam",
    bTeamName: "BTeam",
    aTeamAvatarSrc: "holder.js/64x64?auto=yes&random=yes",
    bTeamAvatarSrc: "holder.js/64x64?auto=yes&random=yes",
  },
};

export const Started: Story = {
  args: {
    title: "Title",
    status: "STARTED",
    startTime: Date.now(),
    aTeamName: "ATeam",
    bTeamName: "BTeam",
    aTeamAvatarSrc: "holder.js/64x64?auto=yes&random=yes",
    bTeamAvatarSrc: "holder.js/64x64?auto=yes&random=yes",
    aTeamScore: 10,
    bTeamScore: 30,
    anchors: [
      {
        name: "Allie Ferguson",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Roy Schultz",
      },

      {
        name: "Jonathan Thomas",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Luke Osborne",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Belle Williamson",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Effie Castro",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Blake French",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Isaiah Kelly",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
    ],
  },
};

export const Ending: Story = {
  args: {
    title: "Title",
    status: "ENDING",
    startTime: Date.now(),
    aTeamName: "ATeam",
    bTeamName: "BTeam",
    aTeamAvatarSrc: "holder.js/64x64?auto=yes&random=yes",
    bTeamAvatarSrc: "holder.js/64x64?auto=yes&random=yes",
    aTeamScore: 10,
    bTeamScore: 30,
    anchors: [
      {
        name: "Allie Ferguson",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Roy Schultz",
      },

      {
        name: "Jonathan Thomas",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Luke Osborne",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Belle Williamson",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Effie Castro",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Blake French",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
      {
        name: "Isaiah Kelly",
        src: "holder.js/80x80?auto=yes&random=yes",
      },
    ],
  },
};
