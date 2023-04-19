import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Button from "react-bootstrap/esm/Button";
import { DropDirection } from "react-bootstrap/esm/DropdownContext";

export default {
  component: Dropdown,
  subcomponents: {
    DropdownButton,
    SplitButton,
    DropdownToggle: Dropdown.Toggle,
    DropdownMenu: Dropdown.Menu,
    DropdownItem: Dropdown.Item,
    DropdownHeader: Dropdown.Header,
    DropdownDivider: Dropdown.Divider,
  },
} as ComponentMeta<typeof Dropdown>;

export const basic: ComponentStory<typeof Dropdown> = () => (
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export const DropdownButtonExample: ComponentStory<
  typeof DropdownButton
> = () => (
  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
);

export const VariantsDropdownButtonExample: ComponentStory<
  typeof DropdownButton
> = () => (
  <>
    {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
      (variant) => (
        <DropdownButton
          as={ButtonGroup}
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      )
    )}
  </>
);

export const SplitBasicExample: ComponentStory<typeof Dropdown> = () => (
  <Dropdown as={ButtonGroup}>
    <Button variant="success">Split Button</Button>

    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export const SplitVariantExample: ComponentStory<typeof SplitButton> = () => (
  <>
    {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
      (variant) => (
        <SplitButton
          key={variant}
          id={`dropdown-split-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </SplitButton>
      )
    )}
  </>
);

export const DropDirectionExample: ComponentStory<typeof SplitButton> = () => (
  <>
    <div className="mb-2">
      {(
        [
          "up",
          "up-centered",
          "down",
          "down-centered",
          "start",
          "end",
        ] as DropDirection[]
      ).map((direction) => (
        <DropdownButton
          as={ButtonGroup}
          key={direction}
          id={`dropdown-button-drop-${direction}`}
          drop={direction}
          variant="secondary"
          title={` Drop ${direction} `}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ))}
    </div>

    <div>
      {(
        [
          "up",
          "up-centered",
          "down",
          "down-centered",
          "start",
          "end",
        ] as DropDirection[]
      ).map((direction) => (
        <SplitButton
          key={direction}
          id={`dropdown-button-drop-${direction}`}
          drop={direction}
          variant="secondary"
          title={`Drop ${direction}`}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </SplitButton>
      ))}
    </div>
  </>
);

export const MenuAlignEndExample: ComponentStory<
  typeof DropdownButton
> = () => (
  <DropdownButton align="end" title="Dropdown end" id="dropdown-menu-align-end">
    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
  </DropdownButton>
);

export const MenuHeadersExample: ComponentStory<typeof Dropdown.Menu> = () => (
  <Dropdown.Menu show>
    <Dropdown.Header>Dropdown header</Dropdown.Header>
    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
  </Dropdown.Menu>
);

export const MenuDividersExample: ComponentStory<typeof Dropdown.Menu> = () => (
  <Dropdown.Menu show>
    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
  </Dropdown.Menu>
);

export const AutoCloseExample: ComponentStory<typeof Dropdown> = () => (
  <>
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle id="dropdown-autoclose-true">
        Default Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className="d-inline mx-2" autoClose="inside">
      <Dropdown.Toggle id="dropdown-autoclose-inside">
        Clickable Outside
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className="d-inline mx-2" autoClose="outside">
      <Dropdown.Toggle id="dropdown-autoclose-outside">
        Clickable Inside
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown className="d-inline mx-2" autoClose={false}>
      <Dropdown.Toggle id="dropdown-autoclose-false">
        Manual Close
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        <Dropdown.Item href="#">Menu Item</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>
);
