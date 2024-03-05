import type { Preview } from "@storybook/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import "../src/styles/index.scss";

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
};

export default preview;

// export const decorators = [
//   withThemeByDataAttribute({
//     themes: {
//       light: "light",
//       dark: "dark",
//     },
//     defaultTheme: "light",
//     attributeName: "data-bs-theme",
//   }),
// ];
