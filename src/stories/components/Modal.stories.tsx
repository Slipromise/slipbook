import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

export default {
  component: Modal,
  subcomponents: {
    ModalDialog,
    ModalHeader,
    ModalTitle,
    ModalBody,
    ModalFooter,
  },
} as ComponentMeta<typeof Modal>;

export const StaticExample = () => (
  <div className="modal show" style={{ display: "block", position: "initial" }}>
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

const Template: ComponentStory<typeof Modal> = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal {...props} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export const SimpleExample = Template.bind({});

export const StaticBackdrop = Template.bind({});

StaticBackdrop.args = {
  backdrop: "static",
  keyboard: false,
};
export const WithoutAnimation = Template.bind({});

WithoutAnimation.args = {
  animation: false,
};

export const VerticallyCentered = Template.bind({});

VerticallyCentered.args = {
  centered: true,
};

export const Fullscreen = Template.bind({});

VerticallyCentered.args = {
  fullscreen: true,
};
