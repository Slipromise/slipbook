import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import CryptoCurrencyRow, {
  CryptoCurrencyHeaderRow,
} from "../../components/CryptoCurrencyRow";
import Table from "react-bootstrap/Table";
import { run as runHolder } from "holderjs";

// TODO: 組合式Story

const meta: Meta<typeof CryptoCurrencyRow> = {
  component: CryptoCurrencyRow,
  tags: ["autodocs"],
  decorators: [
    (story) => {
      const StoryComponent = story;

      // TODO: 無法使用withHolder

      useEffect(() => {
        runHolder();
      }, []);
      return (
        <Table striped bordered hover>
          <thead>
            <CryptoCurrencyHeaderRow />
          </thead>
          <tbody>
            <StoryComponent />
            <StoryComponent />
          </tbody>
        </Table>
      );
    },
  ],
};

export default meta;

type Stroy = StoryObj<typeof CryptoCurrencyRow>;

export const Normal: Stroy = {
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
