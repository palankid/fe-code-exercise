import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Text from 'components/Text';
import { ReactComponent as UserIcon } from 'theme/icons/user.svg';

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserIconStyled = styled(UserIcon)`
  fill: var(--colors-blank);
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

const ButtonStyled = styled(Button)`
  box-shadow: 0 6px 12px rgba(98, 77, 227, 0.3);
`;

const PageHeader = () => {
  return (
    <Wrapper>
      <Text size="h2Medium">People</Text>
      <ButtonStyled>
        <ButtonContent>
          <UserIconStyled />
          <span>Add member</span>
        </ButtonContent>
      </ButtonStyled>
    </Wrapper>
  );
};

export default PageHeader;
