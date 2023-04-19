import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "react-bootstrap/Accordion";

export default {
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (props) => (
  <Accordion {...props}>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Accordion Item #1</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Accordion Item #2</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

export const Basic = Template.bind({});

Basic.args = {
  defaultActiveKey: "0",
};

export const FullyCollapsedState = Template.bind({});

export const Flush = Template.bind({});

Flush.args = {
  defaultActiveKey: "0",
  flush: true,
};

export const AlwaysOpen = Template.bind({});

AlwaysOpen.args = {
  defaultActiveKey: "0",
  alwaysOpen: true,
};

// TODO: useAccordionButton
