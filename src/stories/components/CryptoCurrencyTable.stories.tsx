import CryptoCurrencyTable from "../../components/CryptoCurrencyTable";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useEffect } from "react";
import { run as runHolder } from "holderjs";
import { Bitcoin, Ethereum, BNB } from "./CryptoCurrencyRow.stories";

const meta: Meta<typeof CryptoCurrencyTable> = {
  component: CryptoCurrencyTable,
  tags: ["autodocs"],
  decorators: [
    (story) => {
      const StoryComponent = story;

      // TODO: 無法使用withHolder

      useEffect(() => {
        runHolder();
      }, []);
      return <StoryComponent />;
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
