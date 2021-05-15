import React, { useState } from 'react';
import { arrayOf, shape, string, number, func } from 'prop-types';

import Checkbox from './Checkbox';
import { CheckboxGroupStyled } from './CheckboxGroup.styled';

const CheckboxGroup = ({ options, selectedValues, gap, onChange }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(selectedValues);

  const handleChange = (value) => (selected) => {
    const newSelectedCheckboxes = selected
      ? [...selectedCheckboxes, value]
      : selectedCheckboxes.filter((currentValue) => currentValue !== value);

    setSelectedCheckboxes(newSelectedCheckboxes);
    onChange(newSelectedCheckboxes);
  };

  return (
    <CheckboxGroupStyled gap={gap}>
      {options.map(({ label, value }) => (
        <Checkbox
          key={value}
          label={label}
          value={value}
          selected={selectedCheckboxes.includes(value)}
          onChange={handleChange(value)}
        />
      ))}
    </CheckboxGroupStyled>
  );
};

CheckboxGroup.propTypes = {
  options: arrayOf(
    shape({
      label: string.isRequired,
      value: string.isRequired,
    })
  ),
  selectedValues: arrayOf(string),
  gap: number,
  onChange: func,
};

CheckboxGroup.defaultProps = {
  selectedValues: [],
  gap: 2,
  onChange: () => {},
};

export default CheckboxGroup;
