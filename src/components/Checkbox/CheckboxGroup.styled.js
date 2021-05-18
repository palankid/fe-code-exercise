import styled from 'styled-components';

export const CheckboxGroupStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: ${(props) => props.gap}px;
  }
`;
