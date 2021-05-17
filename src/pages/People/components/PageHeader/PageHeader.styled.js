import styled from 'styled-components';

import { ReactComponent as UserIcon } from 'theme/icons/user.svg';
import Button from 'components/Button';

export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserIconStyled = styled(UserIcon)`
  fill: var(--colors-blank);
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const ButtonStyled = styled(Button)`
  box-shadow: 0 6px 12px rgba(98, 77, 227, 0.3);
`;
