import type { Preview } from "@storybook/react-vite";
import "@/styles/index.scss";
import { extend } from "@pixi/react";
import {
  AnimatedSprite,
  Container,
  Graphics,
  HTMLText,
  Sprite,
  Text,
} from "pixi.js";

extend({ Sprite, Container, Text, HTMLText, AnimatedSprite, Graphics });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
