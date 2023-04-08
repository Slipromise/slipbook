import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProgressBar from 'react-bootstrap/ProgressBar';

export default {
    title:'Components/ProgressBar',
    component:ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (props) => (
  <div>
    <ProgressBar {...props} variant="success" now={40} />
    <ProgressBar {...props} variant="info" now={20} />
    <ProgressBar {...props} variant="warning" now={60} />
    <ProgressBar {...props} variant="danger" now={80} />
  </div>
);

export const Basic = Template.bind({});

export const WithLabel =  Template.bind({});

WithLabel.args = {
    label:'??%'
}

export const Striped = Template.bind({});

Striped.args = {
  striped: true,
};

export const Animated = Template.bind({});

Animated.args = {
    animated: true
}

export const Stacked = () => (
  <ProgressBar>
    <ProgressBar striped variant="success" now={35} key={1} />
    <ProgressBar variant="warning" now={20} key={2} />
    <ProgressBar striped variant="danger" now={10} key={3} />
  </ProgressBar>
);