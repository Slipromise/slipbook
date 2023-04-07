import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from 'react-bootstrap/Spinner';

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (props) => (
  <>
    <Spinner {...props} animation="border" variant="primary" />
    <Spinner {...props} animation="border" variant="secondary" />
    <Spinner {...props} animation="border" variant="success" />
    <Spinner {...props} animation="border" variant="danger" />
    <Spinner {...props} animation="border" variant="warning" />
    <Spinner {...props} animation="border" variant="info" />
    <Spinner {...props} animation="border" variant="light" />
    <Spinner {...props} animation="border" variant="dark" />
    <Spinner {...props} animation="grow" variant="primary" />
    <Spinner {...props} animation="grow" variant="secondary" />
    <Spinner {...props} animation="grow" variant="success" />
    <Spinner {...props} animation="grow" variant="danger" />
    <Spinner {...props} animation="grow" variant="warning" />
    <Spinner {...props} animation="grow" variant="info" />
    <Spinner {...props} animation="grow" variant="light" />
    <Spinner {...props} animation="grow" variant="dark" />
  </>
);

export const Basic = Template.bind({});

export const Sizing = Template.bind({})

Sizing.args = {
    size:'sm'
}

export const Accessibility = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);