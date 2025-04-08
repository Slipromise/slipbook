import { Sprite, Stage } from "@pixi/react";
import { Meta, StoryObj } from "@storybook/react";
import image from "../assets/gift.png"

const meta: Meta<typeof Sprite> = {
  component: Sprite,
  parameters: {
      layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Sprite>;

// TODO: PixiStoryDecorator

export const Normal: Story = {
  args: {
    image,
    x: 0,
    y: 0,
  },
  render: function Render(args) {
    return (
      <Stage width={1024} height={1024} options={{ background: 0x1099bb }}>
        <Sprite {...args} />
      </Stage>
    );
  },
};
