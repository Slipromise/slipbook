import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default {
  title: "Components/Grid",
  component: Container,
  subcomponents: {
    Row,
    Col,
  },
} as ComponentMeta<typeof Container>;

export const fluid: ComponentStory<typeof Container> = (props) => (
  <Container {...props}>
    <Row>
      <Col>1 of 1</Col>
    </Row>
  </Container>
);

fluid.args = {
  fluid: "md",
};

export const AutoLayout = () => (
  <Container>
    <Row>
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
);

export const AutoLayoutSizing = () => (
  <Container>
    <Row>
      <Col>1 of 3</Col>
      <Col xs={6}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col xs={5}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
);

export const AutoLayoutVariable = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs lg="2">
        1 of 3
      </Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">
        3 of 3
      </Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col md="auto">Variable width content</Col>
      <Col xs lg="2">
        3 of 3
      </Col>
    </Row>
  </Container>
);

export const ResponsiveAuto = () => (
  <Container>
    <Row>
      <Col sm={8}>sm=8</Col>
      <Col sm={4}>sm=4</Col>
    </Row>
    <Row>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
      <Col sm>sm=true</Col>
    </Row>
  </Container>
);

export const ResponsiveCustom = () => (
  <Container>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row>
      <Col xs={12} md={8}>
        xs=12 md=8
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
    </Row>

    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
    <Row>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
      <Col xs={6} md={4}>
        xs=6 md=4
      </Col>
    </Row>

    {/* Columns are always 50% wide, on mobile and desktop */}
    <Row>
      <Col xs={6}>xs=6</Col>
      <Col xs={6}>xs=6</Col>
    </Row>
  </Container>
);

export const Ordering = () => (
  <Container>
    <Row>
      <Col xs={{ order: "last" }}>First, but last</Col>
      <Col xs>Second, but unordered</Col>
      <Col xs={{ order: "first" }}>Third, but first</Col>
    </Row>
  </Container>
);

export const offsetting = () => (
  <Container>
    <Row>
      <Col md={4}>md=4</Col>
      <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
    </Row>
    <Row>
      <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
    </Row>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
    </Row>
  </Container>
);

// TODO: 補顏色
