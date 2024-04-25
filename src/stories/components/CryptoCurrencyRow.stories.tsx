import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CryptoCurrencyTable from "@/components/CryptoCurrencyTable";
import { withHolder } from "@/components/withHolder";
import { fn } from "@storybook/test";

const meta: Meta<typeof CryptoCurrencyTable.Row> = {
  component: CryptoCurrencyTable.Row,
  tags: ["autodocs"],
  decorators: [
    (story) => {
      const Component = withHolder(story);
      return <Component></Component>;
    },
  ],
  args: {
    onClick: fn(),
    onSubscribe: fn(),
  },
};

export default meta;

type Stroy = StoryObj<typeof CryptoCurrencyTable.Row>;

export const Bitcoin: Stroy = {
  args: {
    name: "bitcoin",
    rank: 1,
    symbol: "BTC",
    symbolUri: "holder.js/32x32?auto=yes&random=yes",
    price: 51730.160788641166,
    pricingUnit: "USD",
    changeIn1h: -0.18975577,
    changeIn24h: -0.13245235,
    changeIn1w: 9.5045419,
    marketCap: 1015473040202.0583,
    volume24h: 23436245752.813572,
  },
};

export const Ethereum: Stroy = {
  args: {
    name: "ethereum",
    rank: 2,
    symbol: "ETH",
    symbolUri: "holder.js/32x32?auto=yes&random=yes",
    price: 3778.97,
    pricingUnit: "USD",
    changeIn1h: -0.18975577,
    changeIn24h: -0.13245235,
    changeIn1w: 9.5045419,
    marketCap: 1015473040202.0583,
    volume24h: 23436245752.813572,
  },
};

export const BNB: Stroy = {
  args: {
    name: "BNB",
    rank: 4,
    symbol: "BNB",
    symbolUri: "holder.js/32x32?auto=yes&random=yes",
    price: 421.07,
    pricingUnit: "USD",
    changeIn1h: -0.18975577,
    changeIn24h: -0.13245235,
    changeIn1w: 9.5045419,
    marketCap: 1015473040202.0583,
    volume24h: 23436245752.813572,
  },
};
