import React from 'react';
import { useHistory } from "react-router-dom";

import Text from 'components/Text';
import { Wrapper, ButtonStyled, ButtonContent, UserIconStyled } from './PageHeader.styled';

const PageHeader = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/people/new');
  };

  return (
    <Wrapper>
      <Text size="h2">People</Text>
      <ButtonStyled onClick={handleClick}>
        <ButtonContent>
          <UserIconStyled />
          <span>Add member</span>
        </ButtonContent>
      </ButtonStyled>
    </Wrapper>
  );
};

export default PageHeader;
