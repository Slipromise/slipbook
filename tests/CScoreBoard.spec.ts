import { test, expect } from "@playwright/test";
// import * as stories from "../src/stories/components/ScoreBoard.stories";
// import { composeStories } from "@storybook/react";

// const { Normal } = composeStories(stories);

test("Normal ScoreBoard", async ({ page }) => {
  await page.goto(
    "http://localhost:6006/?path=/story/stories-components-scoreboard--normal"
  );
  //   await frameLocator('iframe[title="storybook-preview-iframe"]').getByTestId('homeTitle')
  await expect(
    page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByTestId("homeTitle")
  ).toHaveText("home");

  await expect(
    page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByTestId("homeScore")
  ).toHaveText("7");

  await expect(
    page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByTestId("awayTitle")
  ).toHaveText("away");

  await expect(
    page
      .frameLocator('iframe[title="storybook-preview-iframe"]')
      .getByTestId("awayScore")
  ).toHaveText("10");
});
