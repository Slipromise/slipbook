import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "react-bootstrap/Badge";

export default {
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (props) => (
  <div>
    <Badge {...props} bg="primary">
      Primary
    </Badge>{" "}
    <Badge {...props} bg="secondary">
      Secondary
    </Badge>{" "}
    <Badge {...props} bg="success">
      Success
    </Badge>{" "}
    <Badge {...props} bg="danger">
      Danger
    </Badge>{" "}
    <Badge {...props} bg="warning" text="dark">
      Warning
    </Badge>{" "}
    <Badge {...props} bg="info">
      Info
    </Badge>{" "}
    <Badge {...props} bg="light" text="dark">
      Light
    </Badge>{" "}
    <Badge {...props} bg="dark">
      Dark
    </Badge>
  </div>
);

export const Basic = Template.bind({});

export const Pill = Template.bind({});

Pill.args = { pill: true };
