import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { run as runHolder } from "holderjs";

import Carousel from "react-bootstrap/Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
  subcomponents: {
    CarouselItem: Carousel.Item,
    CarouselCaption: Carousel.Caption,
  },
  decorators: [
    (Story) => {
      useEffect(() => {
        runHolder();
      }, []);
      return <Story />;
    },
  ],
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (props) => (
  <Carousel {...props}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export const Basic: ComponentStory<typeof Carousel> = Template.bind({});

export const Controlled: ComponentStory<typeof Carousel> = () => {
  const [index, setIndex] = useState(0);

  return (
    <Template
      activeIndex={index}
      onSelect={(selectedIndex) => setIndex(selectedIndex)}
    ></Template>
  );
};

export const CrossFade: ComponentStory<typeof Carousel> = Template.bind({});

CrossFade.args = {
  fade: true,
};

export const NoTransitionAnimation: ComponentStory<typeof Carousel> =
  Template.bind({});

NoTransitionAnimation.args = {
  slide: false,
};

export const IndividualItemIntervals: ComponentStory<typeof Carousel> = () => (
  <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Second slide&bg=282c34"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
