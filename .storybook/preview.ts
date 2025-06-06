import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "@/styles/index.scss";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
// import "holderjs/holder";
dayjs.extend(duration);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      // TODO: 搭配react-bootstrap themeProvider 做主題切換（因該不可行）
      // TODO: 需要使用動態替換Bootstrap樣式來進行
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-bs-theme",
    }),
  ],
};

export default preview;
