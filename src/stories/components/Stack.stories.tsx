import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default {
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (props) => (
  <Stack {...props} gap={3}>
    <div className="bg-light border">First item</div>
    <div className="bg-light border">Second item</div>
    <div className="bg-light border">Third item</div>
  </Stack>
);

export const Vertical = Template.bind({});

export const Horizontal = Template.bind({});

Horizontal.args = {
  direction: "horizontal",
};

export const ButtonsExample = () => (
  <Stack gap={2} className="col-md-5 mx-auto">
    <Button variant="secondary">Save changes</Button>
    <Button variant="outline-secondary">Cancel</Button>
  </Stack>
);

export const FormExample = () => (
  <Stack direction="horizontal" gap={3}>
    <Form.Control className="me-auto" placeholder="Add your item here..." />
    <Button variant="secondary">Submit</Button>
    <div className="vr" />
    <Button variant="outline-danger">Reset</Button>
  </Stack>
);
