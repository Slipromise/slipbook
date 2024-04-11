import type { TestRunnerConfig } from "@storybook/test-runner";
import { getStoryContext } from "@storybook/test-runner";

import { injectAxe, checkA11y, configureAxe } from "axe-playwright";

const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  /* Hook to execute before a story is initially visited before being rendered in the browser.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preVisit(page, context) {
    // Add your configuration here.
    await injectAxe(page);
  },
  /* Hook to execute after a story is visited and fully rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postVisit(page, context) {
    // Add your configuration here.

    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Do not run a11y tests on disabled stories.
    // if (storyContext.parameters?.a11y?.disable) {
    //   return;
    // }

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
  tags: {
    // include: ["test-only", "pages"],
    // exclude: ["no-tests", "tokens"],
    // skip: ["skip-test"],
  },
};

export default config;
