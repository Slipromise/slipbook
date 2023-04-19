import React from "react";
import { ComponentMeta } from "@storybook/react";

import ThemeProvider from "react-bootstrap/ThemeProvider";

export default {
  component: ThemeProvider,
} as ComponentMeta<typeof ThemeProvider>;

export const Breakpoint = () => (
  <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <div>Your app...</div>
  </ThemeProvider>
);
