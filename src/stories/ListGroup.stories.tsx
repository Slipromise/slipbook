import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListGroup from 'react-bootstrap/ListGroup';

export default {
    title:'Components/ListGroup'
} as ComponentMeta<typeof ListGroup>;

export const ActiveExample: ComponentStory<typeof ListGroup> = () => (
  <ListGroup as="ul">
    <ListGroup.Item as="li" active>
      Cras justo odio
    </ListGroup.Item>
    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item as="li" disabled>
      Morbi leo risus
    </ListGroup.Item>
    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
  </ListGroup>
);

export const ActionableExample: ComponentStory<typeof ListGroup> = () => (
  <ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action href="#link1">
      Link 1
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
      Link 2
    </ListGroup.Item>
    <ListGroup.Item action onClick={()=>alert('You clicked the third ListGroupItem')}>
      This one is a button
    </ListGroup.Item>
  </ListGroup>
); 

export const FlushExample: ComponentStory<typeof ListGroup> = () => (
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  </ListGroup>
);

export const NumberedExample: ComponentStory<typeof ListGroup> = () => (
  <ListGroup as="ol" numbered>
    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
  </ListGroup>
);

export const HorizontalResponsiveExample: ComponentStory<typeof ListGroup> = () => (
  <>
    {["sm", "md", "lg", "xl", "xxl"].map((breakpoint) => (
      <ListGroup key={breakpoint} horizontal={breakpoint} className="my-2">
        <ListGroup.Item>This ListGroup</ListGroup.Item>
        <ListGroup.Item>renders horizontally</ListGroup.Item>
        <ListGroup.Item>on {breakpoint}</ListGroup.Item>
        <ListGroup.Item>and above!</ListGroup.Item>
      </ListGroup>
    ))}
  </>
);