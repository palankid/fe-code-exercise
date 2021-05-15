import styled from 'styled-components';

export const RadioGroupStyled = styled.div`
  display: inline-block;

  & > *:not(:first-child) {
    margin-left: ${props => props.gap}px;
  }
`;
