import type { Meta, StoryObj } from "@storybook/react";
import VocabularyCard from "@/components/VocabularyCard";
import { userEvent, within, expect } from "@storybook/test";
import { fn } from "@storybook/test";

const meta: Meta<typeof VocabularyCard> = {
  component: VocabularyCard,
  tags: ["autodocs"],
  args: {
    onVoice: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof VocabularyCard>;

export const Normal: Story = {
  args: {
    name: "interaction",
    ipa: "[ˌɪntəˈrækʃən]",
    origin: ["inter/act/ion", "between/act/名詞字尾"],
    partOfSpeech: "名詞",
    definition: "互動",
    sentences: {
      content:
        "There's not enough interaction between management and the workers.",
      translation: "管理階層和勞工之間的互動不足",
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await expect(
      canvas.queryAllByText(
        /There's not enough interaction between management and the workers./i
      ).length
    ).not.toBe(0);

    await step("合攏例句", async () => {
      await userEvent.click(canvas.getByTestId("collapseIcon"));

      await expect(
        canvas.queryAllByText(
          /There's not enough interaction between management and the workers./i
        ).length
      ).toBe(0);
    });

    await step("展開例句", async () => {
      await userEvent.click(canvas.getByTestId("collapseIcon"));

      await expect(
        canvas.queryAllByText(
          /There's not enough interaction between management and the workers./i
        ).length
      ).toBe(1);
    });
  },
};
