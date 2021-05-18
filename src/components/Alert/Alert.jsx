import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';

import Text from 'components/Text';
import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

import { AlertStyled } from './Alert.styled';

const Alert = ({ message, visible, onClick }) => {
  const [isVisible, setIsVisible] = useState(visible);

  const handleClick = () => {
    setIsVisible(!isVisible);
    onClick && onClick(!isVisible);
  };

  if (!isVisible) return null;

  return (
    <AlertStyled>
      <IconTimesCircle className="icon" role="button" onClick={handleClick} />
      <Text className="text" size="bodyMedium">
        {message}
      </Text>
    </AlertStyled>
  );
};

Alert.propTypes = {
  message: string.isRequired,
  onClick: func,
  visible: bool,
};

Alert.defaultProps = {
  visible: true,
};

export default Alert;
