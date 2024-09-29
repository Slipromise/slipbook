import type { Meta, StoryObj } from "@storybook/react";
import CryptoCurrencyRow from "@/components/CryptoCurrencyRow";
import { fn } from "@storybook/test";

const meta: Meta<typeof CryptoCurrencyRow> = {
  component: CryptoCurrencyRow,
  tags: ["autodocs"],

  args: {
    onClick: fn(),
    onSubscribe: fn(),
  },
};

export default meta;

const images = [
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f57f0a593%20text%20%7B%20fill%3A%23FFFFFF%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f57f0a593%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%233a5a97%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22-2.5390625%22%20y%3D%2228%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
];

type Stroy = StoryObj<typeof CryptoCurrencyRow>;

export const Bitcoin: Stroy = {
  args: {
    name: "bitcoin",
    rank: 1,
    symbol: "BTC",
    symbolUri: images[0],
    price: 51730.160788641166,
    currency: "USD",
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
    symbolUri: images[0],
    price: 3778.97,
    currency: "USD",
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
    symbolUri: images[0],
    price: 421.07,
    currency: "USD",
    changeIn1h: -0.18975577,
    changeIn24h: -0.13245235,
    changeIn1w: 9.5045419,
    marketCap: 1015473040202.0583,
    volume24h: 23436245752.813572,
  },
};
