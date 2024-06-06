import InfiniteImageSlider from "@/components/InfiniteImageSlider";
import type { Meta, StoryObj } from "@storybook/react";
import image1 from "../assets/00001-2086282684.png";
import image2 from "../assets/00002-442336389.png";
import image3 from "../assets/00003-3958138843.png";
import image4 from "../assets/00004-15481453.png";
import image5 from "../assets/00005-15481453.png";
import image6 from "../assets/00006-15481453.png";
import image7 from "../assets/00007-15481453.png";

const meta: Meta<typeof InfiniteImageSlider> = {
  component: InfiniteImageSlider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

const images = [image1, image2, image3, image4, image5, image6, image7];

export default meta;

type Story = StoryObj<typeof InfiniteImageSlider>;

export const Normal: Story = {
  args: {
    images,
  },
};

export const AutoLoop: Story = {
  args: {
    images,
    isAuto: true,
  },
};

export const LessImage: Story = {
  args: {
    images: [images[0], images[1]],
    isAuto: true,
  },
};
