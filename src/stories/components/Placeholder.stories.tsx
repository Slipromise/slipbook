import React, { useEffect } from "react";
import { ComponentMeta } from "@storybook/react";
import { run as runHolder } from "holderjs";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

export default {
  component: Placeholder,
  subcomponents: {
    PlaceholderButton: Placeholder.Button,
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        runHolder();
      }, []);
      return <Story />;
    },
  ],
} as ComponentMeta<typeof Placeholder>;

export const Basic = () => (
  <div className="d-flex justify-content-around">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Placeholder.Button variant="primary" xs={6} />
      </Card.Body>
    </Card>
  </div>
);

export const UnitSimple = () => (
  <>
    <p aria-hidden="true">
      <Placeholder xs={6} />
    </p>

    <Placeholder.Button xs={4} aria-hidden="true" />
  </>
);

export const Width = () => (
  <>
    <Placeholder xs={6} />
    <Placeholder className="w-75" />
    <Placeholder style={{ width: "25%" }} />
  </>
);

export const Color = () => (
  <>
    <Placeholder xs={12} />

    <Placeholder xs={12} bg="primary" />
    <Placeholder xs={12} bg="secondary" />
    <Placeholder xs={12} bg="success" />
    <Placeholder xs={12} bg="danger" />
    <Placeholder xs={12} bg="warning" />
    <Placeholder xs={12} bg="info" />
    <Placeholder xs={12} bg="light" />
    <Placeholder xs={12} bg="dark" />
  </>
);

export const Sizing = () => (
  <>
    <Placeholder xs={12} size="lg" />
    <Placeholder xs={12} />
    <Placeholder xs={12} size="sm" />
    <Placeholder xs={12} size="xs" />
  </>
);

export const Animation = () => (
  <>
    <Placeholder as="p" animation="glow">
      <Placeholder xs={12} />
    </Placeholder>
    <Placeholder as="p" animation="wave">
      <Placeholder xs={12} />
    </Placeholder>
  </>
);
