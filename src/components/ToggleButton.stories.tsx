import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


export default {
    title:'Components/ToggleButton',
    component:ToggleButton,
    subcomponents:{ButtonGroup}
} as ComponentMeta<typeof ToggleButton >

export const CheckboxAndRadio: ComponentStory<typeof ToggleButton> = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Active', value: '1' },
      { name: 'Radio', value: '2' },
      { name: 'Radio', value: '3' },
    ];
  
    return (
      <>
        <ButtonGroup className="mb-2">
          <ToggleButton
            id="toggle-check"
            type="checkbox"
            variant="secondary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            Checked
          </ToggleButton>
        </ButtonGroup>
        <br />
        <ButtonGroup className="mb-2">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <br />
        <ToggleButton
          className="mb-2"
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={checked}
          value="1"
          onChange={(e) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
        <br />
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }

  export const Control:ComponentStory<typeof ToggleButton> = ()=>{
    const [value, setValue] = useState([1, 3]);

    return (
      <ToggleButtonGroup type="checkbox" value={value} onChange={(val) => setValue(val)}>
        <ToggleButton id="tbg-btn-1" value={1}>
          Option 1
        </ToggleButton>
        <ToggleButton id="tbg-btn-2" value={2}>
          Option 2
        </ToggleButton>
        <ToggleButton id="tbg-btn-3" value={3}>
          Option 3
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }