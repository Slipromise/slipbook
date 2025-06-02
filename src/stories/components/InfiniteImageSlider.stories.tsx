import InfiniteImageSlider from "@/components/InfiniteImageSlider";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InfiniteImageSlider> = {
  component: InfiniteImageSlider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const images = [
  "./images/00001-2086282684.png",
  "./images/00002-442336389.png",
  "./images/00003-3958138843.png",
  "./images/00004-15481453.png",
  "./images/00005-15481453.png",
  "./images/00006-15481453.png",
  "./images/00007-15481453.png",
];

export default meta;

type Story = StoryObj<typeof InfiniteImageSlider>;

export const Normal: Story = {
  args: {
    images,
  },
  render: function Render(args) {
    const [{ isAuto }, updateArgs] = useArgs<{ isAuto?: boolean }>();

    function onChange() {
      updateArgs({ isAuto: !isAuto });
    }

    return <InfiniteImageSlider {...args} onAuto={onChange} isAuto={isAuto} />;
  },
};

export const AutoLoop: Story = {
  ...Normal,
  args: {
    images,
    isAuto: true,
  },
};

export const LessImage: Story = {
  ...Normal,
  args: {
    images: [images[0], images[1]],
    isAuto: true,
  },
};
