import React, { useRef, useState } from "react";
import { ComponentMeta } from "@storybook/react";

import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip, { TooltipProps } from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";
import PopoverBody from "react-bootstrap/PopoverBody";
import PopoverHeader from "react-bootstrap/PopoverHeader";
import { Placement } from "react-bootstrap/esm/types";

export default {
  component: Overlay,
  subcomponents: {
    OverlayTrigger,
    Tooltip,
    Popover,
    PopoverBody,
    PopoverHeader,
  },
} as ComponentMeta<typeof Overlay>;

export const Basic = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "rgba(255, 100, 100, 0.85)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
};

export const TriggerExample = () => {
  const renderTooltip = (props: TooltipProps) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
  );
};

export const PopoverExample = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );
};

export const PopoverPositionedExample = () => (
  <>
    {(["top", "right", "bottom", "left"] as Placement[]).map((placement) => (
      <OverlayTrigger
        trigger="click"
        key={placement}
        placement={placement}
        overlay={
          <Popover id={`popover-positioned-${placement}`}>
            <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header>
            <Popover.Body>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="secondary">Popover on {placement}</Button>
      </OverlayTrigger>
    ))}
  </>
);
