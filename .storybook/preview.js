// import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/index.scss";
import { withThemeByDataAttribute } from "@storybook/addon-styling";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// snipped for brevity

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-bs-theme",
  }),
];
