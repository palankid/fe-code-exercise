import React, { useState } from 'react';
import { string, func, bool } from 'prop-types';

import Text from 'components/Text';
import { Wrapper, Content, Radio, LabelWrapper } from './RadioButton.styled';

const RadioButton = ({ label, value, description, selected, onChange }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleClick = () => {
    !selected && onChange(true);
  }

  const handleMouseOver = (flag) => () => setIsMouseOver(flag);

  return (
    <Wrapper
      selected={selected}
      onClick={handleClick}
      onMouseOver={handleMouseOver(true)}
      onMouseOut={handleMouseOver(false)}
    >
      <Content>
        <LabelWrapper>
          <Text className="title" size="bodySmall">
            {label}
          </Text>
          <Text className="description" size="bodySmall">
            {description}
          </Text>
        </LabelWrapper>
        <Radio isMouseOver={isMouseOver} selected={selected} />
      </Content>
    </Wrapper>
  );
};

RadioButton.propTypes = {
  label: string.isRequired,
  value: string.isRequired,
  description: string,
  selected: bool,
  onChange: func,
};

RadioButton.defaultProps = {
  description: null,
  selected: false,
  onChange: () => {},
};

export default RadioButton;
