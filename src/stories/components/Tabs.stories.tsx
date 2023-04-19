import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

const sonnets = [
  "Then let not winter's ragged hand deface, In thee thy summer, ere thou be distill'd: Make sweet some vial; treasure thou some place With beauty's treasure ere it be self-kill'd. That use is not forbidden usury, Which happies those that pay the willing loan; That's for thy self to breed another thee, Or ten times happier, be it ten for one; Ten times thy self were happier than thou art, If ten of thine ten times refigur'd thee:",
  "How like a winter hath my absence been From thee, the pleasure of the fleeting year! What freezings have I felt, what dark days seen! What old December's bareness everywhere! And yet this time removed was summer's time; The teeming autumn, big with rich increase, Bearing the wanton burden of the prime, Like widow'd wombs after their lords' decease: Yet this abundant issue seem'd to me But hope of orphans, and unfather'd fruit;",
  "None",
];

export default {
  component: Tabs,
  subcomponents: {
    Tab,
    TabContainer,
    TabContent,
    TabPane,
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (props) => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      {...props}
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k || "home")}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <p>{sonnets[0]}</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>{sonnets[1]}</p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p>{sonnets[2]}</p>
      </Tab>
    </Tabs>
  );
};

export const Basic = Template.bind({});

export const NoAnimation = Template.bind({});

NoAnimation.args = {
  transition: false,
};

export const Fill = Template.bind({});

Fill.args = {
  fill: true,
};

export const Justify = Template.bind({});

Justify.args = {
  justify: true,
};

export const LeftTabsExample = () => (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={3}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <p>{sonnets[0]}</p>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>{sonnets[1]}</p>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);
