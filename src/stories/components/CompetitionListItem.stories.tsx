import type { Meta, StoryObj } from "@storybook/react";
import CompetitionListItem from "@/components/CompetitionListItem";

import React from "react";
import { withHolder } from "@/components/withHolder";
import { fn } from "@storybook/test";

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
  args: {
    onClick: fn(),
    onSubscript: fn(),
  },
};

export default meta;

const images = [
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f57ed3b02%20text%20%7B%20fill%3A%231C2846%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f57ed3b02%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23F8591A%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.4609375%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2080%2080%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f57f77702%20text%20%7B%20fill%3A%23FFFFFF%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f57f77702%22%3E%3Crect%20width%3D%2280%22%20height%3D%2280%22%20fill%3D%22%233a5a97%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2221.4609375%22%20y%3D%2244.5%22%3E80x80%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
];

const times = [1715167999872];

type Story = StoryObj<typeof CompetitionListItem>;

export const Normal: Story = {
  args: {
    title: "Title",
    status: "NONE",
    startTime: times[0],
    aTeamName: "ATeam",
    bTeamName: "BTeam",
    aTeamAvatarSrc: images[0],
    bTeamAvatarSrc: images[0],
  },
};

export const Started: Story = {
  args: {
    title: "Title",
    status: "STARTED",
    startTime: times[0],
    aTeamName: "ATeam",
    bTeamName: "BTeam",
    aTeamAvatarSrc: images[0],
    bTeamAvatarSrc: images[0],
    aTeamScore: 10,
    bTeamScore: 30,
    anchors: [
      {
        name: "Allie Ferguson",
        src: images[1],
      },
      {
        src: images[1],
      },
      {
        name: "Roy Schultz",
      },

      {
        name: "Jonathan Thomas",
        src: images[1],
      },
      {
        name: "Luke Osborne",
        src: images[1],
      },
      {
        name: "Belle Williamson",
        src: images[1],
      },
      {
        name: "Effie Castro",
        src: images[1],
      },
      {
        name: "Blake French",
        src: images[1],
      },
      {
        name: "Isaiah Kelly",
        src: images[1],
      },
    ],
  },
};

export const Ending: Story = {
  args: {
    title: "Title",
    status: "ENDING",
    startTime: times[0],
    aTeamName: "ATeam",
    bTeamName: "BTeam",
    aTeamAvatarSrc: images[0],
    bTeamAvatarSrc: images[0],
    aTeamScore: 10,
    bTeamScore: 30,
    anchors: [
      {
        name: "Allie Ferguson",
        src: images[1],
      },
      {
        src: images[1],
      },
      {
        name: "Roy Schultz",
      },

      {
        name: "Jonathan Thomas",
        src: images[1],
      },
      {
        name: "Luke Osborne",
        src: images[1],
      },
      {
        name: "Belle Williamson",
        src: images[1],
      },
      {
        name: "Effie Castro",
        src: images[1],
      },
      {
        name: "Blake French",
        src: images[1],
      },
      {
        name: "Isaiah Kelly",
        src: images[1],
      },
    ],
  },
};
