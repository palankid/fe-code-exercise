import styled from 'styled-components';

export const CheckboxGroupStyled = styled.div`
  display: inline-block;

  & > *:not(:first-child) {
    margin-left: ${props => props.gap}px;
  }
`;
