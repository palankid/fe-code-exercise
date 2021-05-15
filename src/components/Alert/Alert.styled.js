import styled from 'styled-components';

export const AlertStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: rgba(255, 74, 90, 0.05);
  border: 2px solid rgba(255, 74, 90, 0.45);
  border-radius: 8px;
  padding: 25px;

  & > .icon {
    fill: var(--colors-redPink);
    margin-right: 20px;
    cursor: pointer;
  }

  & > .text {
    color: var(--colors-bayoux);
  }
`;
