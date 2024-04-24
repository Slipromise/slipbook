import CryptoCurrencyTable from "@/components/CryptoCurrencyTable";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useEffect } from "react";
import { Bitcoin, Ethereum, BNB } from "./CryptoCurrencyRow.stories";
import { withHolder } from "@/components/withHolder";

const meta: Meta<typeof CryptoCurrencyTable> = {
  component: CryptoCurrencyTable,
  tags: ["autodocs"],
  decorators: [
    (story) => {
      const Component = withHolder(story);
      return <Component></Component>;
    },
  ],
};

export default meta;

type Stroy = StoryObj<typeof CryptoCurrencyTable>;

type Props = ComponentProps<typeof CryptoCurrencyTable>;

export const Normal: Stroy = {
  args: {
    items: [
      { ...(Bitcoin.args as Props["items"][number]) },
      { ...(Ethereum.args as Props["items"][number]) },
      { ...(BNB.args as Props["items"][number]) },
    ],
  },
};
