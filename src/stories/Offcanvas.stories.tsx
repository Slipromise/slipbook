import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default {
    title:'Components/Offcanvas',
    component: Offcanvas,
    subcomponents:{
        OffcanvasHeader:Offcanvas.Header,
        OffcanvasTitle:Offcanvas.Title,
        OffcanvasBody:Offcanvas.Body
    }
} as ComponentMeta<typeof Offcanvas>;

const Template: ComponentStory<typeof Offcanvas> = (props) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas {...props} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export const Basic = Template.bind({});

export const Responsive = Template.bind({});

Responsive.args = {
  responsive: "lg",
};

export const Placement = Template.bind({});

Placement.args = {
  placement: "top",
};

export const Backdrop = Template.bind({});

Backdrop.args = {
    scroll: true,
    backdrop:false,
}


export const StaticBackdrop = Template.bind({});

StaticBackdrop.args = {
    backdrop:'static',
}