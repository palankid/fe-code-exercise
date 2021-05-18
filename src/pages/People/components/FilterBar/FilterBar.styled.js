import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
