import type { Meta, StoryObj } from "@storybook/react";
import { run as runHolder } from "holderjs";
import React, { useEffect } from "react";
import BootstrapComponents from "./BootstrapComponents";

const meta: Meta<typeof BootstrapComponents> = {
  component: BootstrapComponents,
  decorators: [
    (SC) => {
      useEffect(() => {
        runHolder();
      }, []);
      return <SC></SC>;
    },
  ],
  tags: ["skip-test"],
};

export default meta;

type Story = StoryObj<typeof BootstrapComponents>;

// TODO: 需要使用動態替換Bootstrap樣式來進行

export const BootstrapDefault: Story = {};
