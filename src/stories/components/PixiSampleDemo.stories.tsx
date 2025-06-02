import { Sprite, Stage } from "@pixi/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sprite> = {
  component: Sprite,
  tags: ["autodocs"],
  parameters: {
    //   layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof Sprite>;

// TODO: PixiStoryDecorator

export const Normal: Story = {
  args: {
    image: "https://pixijs.io/pixi-react/img/bunny.png",
    x: 300,
    y: 150,
  },
  render: function Render(args) {
    return (
      <Stage width={400} height={300} options={{ background: 0x1099bb }}>
        <Sprite {...args} />
      </Stage>
    );
  },
};
