import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default {
    title:'Components/Breadcrumb',
    component:Breadcrumb,
    subcomponents:{BreadcrumbItem:Breadcrumb.Item}
} as ComponentMeta<typeof Breadcrumb>

export const Basic: ComponentStory<typeof Breadcrumb> = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
    <Breadcrumb.Item active>Data</Breadcrumb.Item>
  </Breadcrumb>
);