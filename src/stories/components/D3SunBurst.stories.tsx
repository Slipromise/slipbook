import D3SunBurst from "@/components/D3SunBurst";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof D3SunBurst> = {
  component: D3SunBurst,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof D3SunBurst>;

export const Default: Story = {
  args: {
    data: {
      name: "skills",
      children: [
        {
          name: "Frontend",
          children: [
            {
              name: "Typescript",
              value: 100,
            },
            {
              name: "Javascript",
              value: 100,
            },
            {
              name: "React",
              value: 100,
            },
            {
              name: "React Native",
              value: 100,
            },
            {
              name: "Redux",
              value: 100,
            },
            {
              name: "Git",
              value: 100,
            },
            {
              name: "CSS",
              value: 90,
            },
            {
              name: "HTML",
              value: 90,
            },
            {
              name: "SASS",
              value: 90,
            },
            {
              name: "Next.js",
              value: 90,
            },
            {
              name: "Storybook",
              value: 90,
            },
            {
              name: "i18n",
              value: 90,
            },
            {
              name: "Node.js",
              value: 85,
            },
            {
              name: "Webpack",
              value: 80,
            },
            {
              name: "Vite",
              value: 80,
            },
            { name: "Bootstrap", value: 80 },
            { name: "Cordova", value: 80 },
            { name: "Protobuf", value: 80 },
            { name: "Jest", value: 70 },
            { name: "Cypress", value: 75 },
            { name: "Playwright", value: 75 },
          ],
        },
        {
          name: "Game Development",
          children: [
            { name: "Typescript", value: 100 },
            { name: "Javescript", value: 100 },
            {
              name: "Git",
              value: 100,
            },
            { name: "I18n", value: 90 },
            { name: "Cocos Creator", value: 90 },
            { name: "Pixijs", value: 90 },
            { name: "Node.js", value: 85 },
            { name: "Spine", value: 80 },
            { name: "C#", value: 70 },
            { name: "Unity", value: 70 },
            { name: "DrogonBones", value: 70 },
          ],
        },
        {
          name: "AI",
          children: [
            { name: "Stable Diffusion", value: 85 },
            { name: "Python", value: 75 },
            {
              name: "ComfyUI",
              value: 85,
            },
            { name: "ChatGPT", value: 75 },
            { name: "Llama", value: 75 },
            { name: "Whisper", value: 70 },
            { name: "Huggingface", value: 70 },
          ],
        },
        {
          name: "Design",
          children: [
            { name: "Adobe XD", value: 70 },
            { name: "Photoshop", value: 50 },
            {
              name: "3D Max",
              value: 50,
            },
            { name: "Zbrush", value: 50 },
            { name: "Blender", value: 50 },
          ],
        },
        {
          name: "Backend",
          children: [
            { name: "Typescript", value: 100 },
            { name: "Javescript", value: 100 },
            {
              name: "Node.js",
              value: 85,
            },
            { name: "GraphQL", value: 75 },
            { name: "MongoDB", value: 70 },
          ],
        },
        {
          name: 'Blockchain',
          children: [
            {name:'Solidity', value: 70},
            {name:'Ganache', value: 70},
            {name:'Hardhat', value: 70},
            {name:'Ethers.js', value: 70},
            {name:'Web3.js', value: 70},
            {name:'Truffle', value: 70},
            {name:'Hardhat', value: 60},
          ]
        }
      ],
    },
  },
};
