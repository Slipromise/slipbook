import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Alert from "react-bootstrap/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  subcomponents: { AlertLink: Alert.Link, AlertHeading: Alert.Heading },
} as ComponentMeta<typeof Alert>;

export const Primary: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}></Alert>
);
Primary.args = {
  children: "This is an alert—check it out!",
  variant: "primary",
};

export const Links: ComponentStory<typeof Alert> = () => (
  <>
    {[
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ].map((variant) => (
      <Alert key={variant} variant={variant}>
        This is a {variant} alert with{" "}
        <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
        you like.
      </Alert>
    ))}
  </>
);

export const AdditionalContent: ComponentStory<typeof Alert> = () => (
  <Alert variant="success">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within
      an alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice
      and tidy.
    </p>
  </Alert>
);

export const Dismissing: ComponentStory<typeof Alert> = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <button onClick={() => setShow(true)}>Show Alert</button>;
};
