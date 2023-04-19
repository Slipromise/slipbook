import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/esm/Dropdown";

export default {
  component: Button,
  subcomponents: { ButtonGroup, ButtonToolbar, DropdownButton, Dropdown },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <>
    <Button {...props} variant="primary">
      Primary
    </Button>{" "}
    <Button {...props} variant="secondary">
      Secondary
    </Button>{" "}
    <Button {...props} variant="success">
      Success
    </Button>{" "}
    <Button {...props} variant="warning">
      Warning
    </Button>{" "}
    <Button {...props} variant="danger">
      Danger
    </Button>{" "}
    <Button {...props} variant="info">
      Info
    </Button>{" "}
    <Button variant="light">Light</Button>{" "}
    <Button {...props} variant="dark">
      Dark
    </Button>
    <Button {...props} variant="link">
      Link
    </Button>
  </>
);

export const Basic: ComponentStory<typeof Button> = Template.bind({});

export const Outline: ComponentStory<typeof Button> = () => (
  <>
    <Button variant="outline-primary">Primary</Button>{" "}
    <Button variant="outline-secondary">Secondary</Button>{" "}
    <Button variant="outline-success">Success</Button>{" "}
    <Button variant="outline-warning">Warning</Button>{" "}
    <Button variant="outline-danger">Danger</Button>{" "}
    <Button variant="outline-info">Info</Button>{" "}
    <Button variant="outline-light">Light</Button>{" "}
    <Button variant="outline-dark">Dark</Button>
  </>
);

export const Tags: ComponentStory<typeof Button> = () => (
  <>
    <Button href="#">Link</Button> <Button type="submit">Button</Button>{" "}
    <Button as="input" type="button" value="Input" />{" "}
    <Button as="input" type="submit" value="Submit" />{" "}
    <Button as="input" type="reset" value="Reset" />
  </>
);

export const Size: ComponentStory<typeof Button> = Template.bind({});

Size.args = {
  size: "lg",
};

export const Active: ComponentStory<typeof Button> = Template.bind({});

Active.args = {
  active: true,
};

export const Disable: ComponentStory<typeof Button> = Template.bind({});

Active.args = {
  disabled: true,
};

export const ButtonGroupExample: ComponentStory<typeof Button> = () => (
  <ButtonGroup aria-label="Basic example">
    <Button variant="secondary">Left</Button>
    <Button variant="secondary">Middle</Button>
    <Button variant="secondary">Right</Button>
  </ButtonGroup>
);

export const ButtonToolbarExample: ComponentStory<typeof Button> = () => (
  <ButtonToolbar aria-label="Toolbar with button groups">
    <ButtonGroup className="me-2" aria-label="First group">
      <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
      <Button>4</Button>
    </ButtonGroup>
    <ButtonGroup className="me-2" aria-label="Second group">
      <Button>5</Button> <Button>6</Button> <Button>7</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Third group">
      <Button>8</Button>
    </ButtonGroup>
  </ButtonToolbar>
);

export const ButtonGroupSizingExample: ComponentStory<typeof Button> = () => (
  <>
    <ButtonGroup size="lg" className="mb-2">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup className="mb-2">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup size="sm">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </>
);

export const DropdownButtonExample: ComponentStory<
  typeof DropdownButton
> = () => (
  <>
    <ButtonGroup size="lg" className="mb-2">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup className="mb-2">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup size="sm">
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  </>
);

export const ButtonGroupVerticalExample: ComponentStory<typeof Button> = () => (
  <ButtonGroup vertical>
    <Button>Button</Button>
    <Button>Button</Button>

    <DropdownButton
      as={ButtonGroup}
      title="Dropdown"
      id="bg-vertical-dropdown-1"
    >
      <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
      <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>

    <Button>Button</Button>
    <Button>Button</Button>

    <DropdownButton
      as={ButtonGroup}
      title="Dropdown"
      id="bg-vertical-dropdown-2"
    >
      <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
      <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>

    <DropdownButton
      as={ButtonGroup}
      title="Dropdown"
      id="bg-vertical-dropdown-3"
    >
      <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
      <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
  </ButtonGroup>
);
