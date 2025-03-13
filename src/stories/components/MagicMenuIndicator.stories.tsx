import MagicMenuIndicator from "@/components/MagicMenuIndicator";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  IoPerson,
  IoHome,
  IoChatbox,
  //   IoInformation,
  IoSettings,
  IoInformationCircle,
} from "react-icons/io5";
// import { BsQuestionCircle } from "react-icons/bs";

const meta: Meta<typeof MagicMenuIndicator> = {
  component: MagicMenuIndicator,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MagicMenuIndicator>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "HOME",
        color: "#f53b57",
        icon: <IoHome />,
        onClick: fn(),
      },
      {
        label: "PROFILE",
        color: "#f562fb",
        icon: <IoPerson />,
        onClick: fn(),
      },
      {
        label: "MESSAGES",
        color: "#05c46b",
        icon: <IoChatbox />,
        onClick: fn(),
      },
      {
        label: "HELP",
        color: "#0fbcf9",
        icon: <IoInformationCircle />,
        onClick: fn(),
      },
      {
        label: "SETTINGS",
        color: "#ffa801",
        icon: <IoSettings />,
        onClick: fn(),
      },
    ],
  },
};
