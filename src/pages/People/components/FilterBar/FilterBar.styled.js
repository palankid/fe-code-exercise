import styled from 'styled-components';

import { media } from 'theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.extraSmall`
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  `}
`;
