import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import VocabularyCard from "../../components/VocabularyCard";

const meta: Meta<typeof VocabularyCard> = {
  component: VocabularyCard,
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
};
