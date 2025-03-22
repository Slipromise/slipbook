import RadialMenu from "@/components/RadialMenu";
import type { Meta, StoryObj } from "@storybook/react";
import { IoMdSettings ,IoMdHome,IoMdPerson,IoMdMail,IoLogoGameControllerB,IoMdDocument} from "react-icons/io";
import { fn } from "@storybook/test";
const meta = {
  component: RadialMenu,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadialMenu>;

export default meta;

type Story = StoryObj<typeof RadialMenu>;

export const Normal: Story = {
  args: {
    items: [
      { component: IoMdSettings, onClick: fn() },
      { component: IoMdHome, onClick: fn() },
      { component: IoMdPerson, onClick:fn() },
      { component: IoMdMail, onClick: fn() },
      { component: IoLogoGameControllerB, onClick: fn() },
      { component: IoMdDocument, onClick: fn() },
    ],
  },
};


export const TwoItems: Story = {
    args: {
        items: [
        { component: IoMdSettings, onClick: fn() },
        { component: IoMdHome, onClick: fn() },
        ],
    },
}

export const ThreeItems: Story = {
    args:{
        items:[
            { component: IoMdSettings, onClick: fn() },
            { component: IoMdHome, onClick: fn() },
            { component: IoMdPerson, onClick: fn() },
        ],
    }
}