import React, { useState } from 'react';
import { arrayOf, shape, string, number, func } from 'prop-types';

import RadioButton from './RadioButton';
import { RadioGroupStyled } from './RadioGroup.styled';

const RadioGroup = ({ options, selectedValue, gap, onChange }) => {
  const [selectedRadioButton, setSelectedRadioButton] = useState(selectedValue);

  const handleChange = (value) => (selected) => {
    setSelectedRadioButton(value);
    onChange(value);
  };

  return (
    <RadioGroupStyled gap={gap}>
      {options.map(({ label, description, value }) => (
        <RadioButton
          key={value}
          label={label}
          description={description}
          value={value}
          selected={selectedRadioButton === value}
          onChange={handleChange(value)}
        />
      ))}
    </RadioGroupStyled>
  );
};

RadioGroup.propTypes = {
  options: arrayOf(
    shape({
      label: string.isRequired,
      description: string,
      value: string.isRequired,
    })
  ),
  selectedValue: string,
  gap: number,
  onChange: func,
};

RadioGroup.defaultProps = {
  selectedValue: '',
  gap: 2,
  onChange: () => {},
};

export default RadioGroup;
