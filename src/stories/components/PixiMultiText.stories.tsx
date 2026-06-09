import PixiMultiText from "@/components/PixiMultiText";
import { Application } from "@pixi/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FillGradient, TextStyle } from "pixi.js";

const meta: Meta<typeof PixiMultiText> = {
  component: PixiMultiText,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <Application width={1024} height={1024} backgroundAlpha={0}>
          <Story />
        </Application>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof PixiMultiText>;

export const BeastWood: Story = {
  args: {
    text: "Hello World",
  },
  render: (args) => {
    return (
      <PixiMultiText
        {...args}
        species={[
          {
            style: new TextStyle({
              dropShadow: {
                alpha: 0.3,
                angle: 4.5,
                blur: 6,
                distance: 0,
              },
              fill: "#ce0000",
              fontFamily: "Primary",
              fontSize: 110,
              fontWeight: "bold",
              padding: 8,
              stroke: { color: "#9b0000", join: "round", width: 4 },
            }),
            offset: { y: 4 },
          },
          {
            style: new TextStyle({
              fill: "#e80000",
              fontFamily: "Primary",
              fontSize: 110,
              fontWeight: "bold",
              padding: 8,
              stroke: { color: "#a40000", join: "round", width: 4 },
            }),
            offset: { y: 2 },
          },
          {
            style: new TextStyle({
              fill: "#f3cf41",
              fontFamily: "Primary",
              fontSize: 110,
              fontWeight: "bold",
              padding: 8,
              stroke: { color: "white", join: "round" },
            }),
            offset: { y: 2 },
          },
          {
            style: new TextStyle({
              fill: new FillGradient({
                type: "linear",
                start: { x: 0, y: 0 },
                end: { x: 0, y: 1 },
                colorStops: [
                  { offset: 0, color: "#ffe240" },
                  { offset: 1, color: "#ff8409" },
                ],
              }),
              fontFamily: "Primary",
              fontSize: 110,
              fontWeight: "bold",
              padding: 8,
              stroke: { color: "#ffda46", width: 3, join: "round" },
            }),
          },
        ]}
      />
    );
  },
};

export const BeastWoodBigWin: Story = {
  args: {
    text: "Hello World",
  },
  render: (args) => (
    <PixiMultiText
      {...args}
      species={[
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.4,
              angle: 1,
              blur: 14,
              color: "#11071c",
              distance: 12,
            },
            fill: "#190c41",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: {
              color: "#16082b",
              width: 23,
              join: "round",
            },
          }),
          offset: { y: 10, x: -6 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.8,
              angle: 0.9,
              blur: 5,
              color: "#160f4d",
              distance: 1,
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { color: "#34287d", offset: 0 },
                { color: "#5955dd", offset: 1 },
              ],
            }),
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#4641a4", width: 23, join: "round" },
          }),
          offset: { y: 0, x: -8 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              angle: 1,
              blur: 1,
              color: "#452b8c",
              distance: 1,
            },
            fill: "#31215f",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#31215f", width: 23, join: "round" },
          }),
          offset: { y: 3, x: -8 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.9,
              angle: 1.2,
              blur: 8,
              color: "#080317",
              distance: 1,
            },
            fill: "#7a3100",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#4d1f00", width: 10, join: "round" },
          }),
          offset: { y: 10 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.8,
              angle: 0.9,
              blur: 5,
              color: "#331b00",
              distance: 1,
            },
            fill: "#7a3100",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#612700", width: 10, join: "round" },
          }),
          offset: { y: 10 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.8,
              angle: 0.9,
              blur: 5,
              color: "#331b00",
              distance: 1,
            },
            fill: "#7a3100",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#752f00", width: 10, join: "round" },
          }),
          offset: { y: 10 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.8,
              angle: 0.9,
              blur: 5,
              color: "#331b00",
              distance: 1,
            },
            fill: "#9d3f01",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#803300", width: 8, join: "round" },
          }),
          offset: { y: 8 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.8,
              angle: 0.9,
              blur: 5,
              color: "#331b00",
              distance: 1,
            },
            fill: "#9d3f01",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#9d3f01", width: 6, join: "round" },
          }),
          offset: { y: 6 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.8,
              angle: 0.9,
              blur: 5,
              color: "#331b00",
              distance: 1,
            },
            fill: "#c04e02",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: {
              color: "#c04e02",
              width: 4,
              join: "round",
            },
          }),
          offset: { y: 4 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.8,
              angle: 0.9,
              blur: 5,
              color: "#331b00",
              distance: 1,
            },
            fill: "#e76612",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: {
              color: "#e76612",
              width: 2,
              join: "round",
            },
          }),
          offset: { y: 2 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              angle: 1.6,
              color: "#561c00",
            },
            fill: "#fff9a8",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#eb9d56", join: "round" },
          }),
          offset: { x: -1, y: -2 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              angle: 1.6,
              color: "#561c00",
            },
            fill: "#fffbc7",
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#eb9d56", join: "round" },
          }),
          offset: { y: -2 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              angle: 1.6,
              color: "#561c00",
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#ffe240" },
                { offset: 0.25, color: "#ff8409" },
                { offset: 0.5, color: "#ff8409" },
                { offset: 0.75, color: "#ff8409" },
                { offset: 1, color: "#ff8409" },
              ],
            }),
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#eb9d56", join: "round" },
          }),
        },
        {
          style: new TextStyle({
            dropShadow: {
              angle: 1.6,
              color: "#561c00",
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#ffc852" },
                { offset: 0.25, color: "#fefabe" },
                { offset: 0.5, color: "#f7af4b" },
                { offset: 0.75, color: "#ff9214" },
                { offset: 1, color: "#ffe485" },
              ],
            }),
            fontFamily: ['"CCHeroSandwichMeat"', '"Primary"'],
            fontSize: 90,
            padding: 30,
            stroke: { color: "#eb9d56", join: "round" },
          }),
        },
      ]}
    ></PixiMultiText>
  ),
};

export const EasternEmeraldsMV: Story = {
  args: {
    text: "Hello World",
  },
  render: (args) => (
    <PixiMultiText
      {...args}
      species={[
        {
          style: new TextStyle({
            align: "center",
            dropShadow: {
              alpha: 0.4,
              angle: 1.4,
              blur: 7,
              distance: 6,
            },
            fill: "#610000",
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 50,
            lineHeight: 122,
            padding: 20,
            stroke: { color: "#600100", join: "round" },
            wordWrapWidth: 500,
          }),
          offset: { y: 3 },
        },
        {
          style: new TextStyle({
            align: "center",
            dropShadow: {
              angle: 0,
              blur: 6,
              distance: 0,
            },
            fill: "#3d2800",
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 50,
            lineHeight: 122,
            padding: 20,
            stroke: { color: "#572700", width: 3, join: "round" },
            wordWrapWidth: 500,
          }),
          offset: { y: 5 },
        },
        {
          style: new TextStyle({
            align: "center",
            dropShadow: {
              alpha: 0.5,
              angle: 0,
              blur: 3,
              distance: 0,
            },
            fill: "#610000",
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 50,
            lineHeight: 122,
            padding: 20,
            stroke: { color: "#600100", width: 6, join: "round" },
            wordWrapWidth: 500,
          }),
          offset: { y: 3 },
        },
        {
          style: new TextStyle({
            align: "center",
            dropShadow: {
              alpha: 0.4,
              angle: 0.9,
              blur: 10,
              color: "#2c0200",
              distance: 7,
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#ecdc4e" },
                { offset: 1, color: "#eca427" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 50,
            lineHeight: 122,
            padding: 20,
            stroke: { color: "#a9590a", width: 3, join: "round" },
            wordWrapWidth: 500,
          }),
          offset: { y: 3 },
        },
        {
          style: new TextStyle({
            align: "center",
            dropShadow: {
              alpha: 0.4,
              angle: 0.9,
              blur: 10,
              color: "#2c0200",
              distance: 7,
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#ecdc4e" },
                { offset: 1, color: "#eca427" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 50,
            lineHeight: 50,
            padding: 20,
            stroke: { color: "#a9590a", join: "round" },
            wordWrapWidth: 500,
          }),
          offset: { y: 37, x: 2 },
        },
        {
          style: new TextStyle({
            align: "center",
            dropShadow: {
              angle: 1.6,
              color: "#561c00",
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#b97900" },
                { offset: 0.25, color: "#ffff6b" },
                { offset: 0.5, color: "#ffff8d" },
                { offset: 0.75, color: "#ffd657" },
                { offset: 1, color: "#b97900" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 50,
            lineHeight: 50,
            padding: 20,
            stroke: { color: "#eb9d56", join: "round" },
            wordWrapWidth: 500,
          }),
          offset: { y: 36, x: 2 },
        },
      ]}
    ></PixiMultiText>
  ),
};

export const SakuraEpicBloomBigWin: Story = {
  args: {
    text: "Hello World",
  },
  render: (args) => (
    <PixiMultiText
      {...args}
      species={[
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.7,
              angle: 1.6,
              blur: 9,
              distance: 6,
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#fbfad3" },
                { offset: 0.5, color: "#feb146" },
                { offset: 1, color: "#b86a2e" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 115,
            stroke: { width: 12 },
          }),
          offset: { y: 5 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.7,
              angle: 1.6,
              blur: 9,
              distance: 10,
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#fbfad3" },
                { offset: 0.5, color: "#feb146" },
                { offset: 1, color: "#b86a2e" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 115,
            stroke: { color: "#f34127", width: 12 },
          }),
          offset: { y: -1 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.7,
              angle: 1.6,
              blur: 9,
              distance: 10,
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#fbfad3" },
                { offset: 0.5, color: "#feb146" },
                { offset: 1, color: "#b86a2e" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 115,
            stroke: { color: "#520606", width: 12 },
          }),
          offset: { y: 5 },
        },
        {
          style: new TextStyle({
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#fbfad3" },
                { offset: 0.5, color: "#feb146" },
                { offset: 1, color: "#b86a2e" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 115,
            stroke: { color: "#ab0b0e", width: 11 },
          }),
          offset: { y: 1 },
        },
        {
          style: new TextStyle({
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#eeae3c" },
                { offset: 0.25, color: "#ffe680" },
                { offset: 0.5, color: "#feffdb" },
                { offset: 0.75, color: "#f5b553" },
                { offset: 1, color: "#c66f24" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 115,
            stroke: { color: "#ff6251", width: 5 },
          }),
          offset: { y: 6, x: 3 },
        },
        {
          style: new TextStyle({
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#eeae3c" },
                { offset: 0.25, color: "#ffe680" },
                { offset: 0.5, color: "#feffdb" },
                { offset: 0.75, color: "#f5b553" },
                { offset: 1, color: "#c66f24" },
              ],
            }),
            fontFamily: ['"Fengo"', '"Primary"'],
            fontSize: 115,
            stroke: { color: "#5a1c00", width: 5 },
          }),
          offset: { y: 5, x: 3 },
        },
      ]}
    ></PixiMultiText>
  ),
};

export const WildCauldron: Story = {
  args: {
    text: "Hello World",
  },
  render: (args) => (
    <PixiMultiText
      {...args}
      species={[
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.4,
              angle: 0.9,
              blur: 10,
              color: "#1b012c",
              distance: 7,
            },
            fill: "#7d3c00",
            fontFamily: "Primary",
            fontSize: 200,
            fontStyle: "italic",
            padding: 20,
            stroke: { color: "#3c110b", width: 24, join: "round" },
          }),
          offset: { x: 1, y: 1 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.4,
              angle: 0.9,
              blur: 10,
              color: "#2c0200",
              distance: 7,
            },
            fill: "#5e2d00",
            fontFamily: "Primary",
            fontSize: 200,
            fontStyle: "italic",
            padding: 20,
            stroke: { color: "#7b3615", width: 16, join: "round" },
          }),
          offset: { x: -1, y: 1 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.4,
              angle: 0.9,
              blur: 10,
              color: "#2c0200",
              distance: 7,
            },
            fill: "#38005e",
            fontFamily: "Primary",
            fontSize: 200,
            fontStyle: "italic",
            padding: 20,
            stroke: { color: "#450c0c", width: 16, join: "round" },
          }),
          offset: { x: 1, y: 3 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              alpha: 0.4,
              angle: 0.9,
              blur: 10,
              color: "#2c0200",
              distance: 7,
            },
            fill: "#ffe479",
            fontFamily: "Primary",
            fontSize: 200,
            fontStyle: "italic",
            padding: 20,
            stroke: { color: "#402000", join: "round" },
          }),
          offset: { y: 16, x: 9 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              angle: 0.9,
              blur: 5,
              color: "#210112",
              distance: 1,
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#9f3400" },
                { offset: 1, color: "#ee4811" },
              ],
            }),
            fontFamily: "Primary",
            fontSize: 200,
            fontStyle: "italic",
            padding: 20,
            stroke: { color: "#402000", join: "round" },
          }),
          offset: { x: 11, y: 21 },
        },
        {
          style: new TextStyle({
            dropShadow: {
              angle: 1.6,
              color: "#561c00",
            },
            fill: new FillGradient({
              type: "linear",
              start: { x: 0, y: 0 },
              end: { x: 0, y: 1 },
              colorStops: [
                { offset: 0, color: "#e5af12" },
                { offset: 0.33, color: "#fcd834" },
                { offset: 0.66, color: "#e7a82e" },
                { offset: 0.75, color: "#ffeb52" },
              ],
            }),
            fontFamily: "Primary",
            fontSize: 200,
            fontStyle: "italic",
            padding: 20,
            stroke: { color: "#eb9d56", join: "round" },
          }),
          offset: { x: 9, y: 19 },
        },
      ]}
    ></PixiMultiText>
  ),
};
