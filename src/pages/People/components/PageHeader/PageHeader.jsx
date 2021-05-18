import React from 'react';

import Text from 'components/Text';
import usePageHeader from './usePageHeader';
import {
  Wrapper,
  ButtonStyled,
  ButtonContent,
  UserIconStyled,
  SelectedPeopleIndicator,
  TitleWrapper,
} from './PageHeader.styled';

const PageHeader = () => {
  const { selectedPeopleText, handleClick } = usePageHeader();

  return (
    <Wrapper>
      <TitleWrapper>
        <Text size="h2">People</Text>
        <SelectedPeopleIndicator>{selectedPeopleText}</SelectedPeopleIndicator>
      </TitleWrapper>
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
