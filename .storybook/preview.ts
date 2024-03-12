import type { Preview, ReactRenderer } from "@storybook/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

// TODO: 會互干擾看是否使用data-bs-theme來區隔
import "../src/styles/index.scss";
import "../src/styles/customTheme/index.scss";
import "../src/styles/customTheme/indexByExtend.scss";

dayjs.extend(duration);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute<ReactRenderer>({
      // TODO: 搭配react-bootstrap themeProvider 做主題切換
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
