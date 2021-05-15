import React, { useState } from 'react';
import { string, func, bool } from 'prop-types';

import Text from 'components/Text';
import { Wrapper, Content, CheckboxStyled } from './Checkbox.styled';

const Checkbox = ({ label, value, selected, onChange }) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onChange(!isSelected);
  };

  const handleMouseOver = (flag) => () => setIsMouseOver(flag);

  return (
    <Wrapper
      role="button"
      selected={isSelected}
      onClick={handleClick}
      onMouseOver={handleMouseOver(true)}
      onMouseOut={handleMouseOver(false)}
    >
      <Content>
        <Text size="bodySmall">{label}</Text>
        <CheckboxStyled isMouseOver={isMouseOver} selected={isSelected} />
      </Content>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  label: string.isRequired,
  value: string.isRequired,
  selected: bool,
  onChange: func,
};

Checkbox.defaultProps = {
  selected: false,
  onChange: () => {},
};

export default Checkbox;
