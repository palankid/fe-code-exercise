import styled from 'styled-components';

import Text from 'components/Text';

const borderColor = '#B7B8EB';

export const Wrapper = styled.button`
  display: inline-block;
  outline: none;
  min-height: 40px;
  padding: 0 12px;
  background-color: white;  // Todo
  border: 1.5px solid ${borderColor};
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--colors-linkWater);
  }

  &:focus,
  &:active {
    box-shadow: 0 0 1px 1px var(--colors-irisBlue);
  }

  ${({ selected }) => selected && `
    background-color: var(--colors-linkWater);
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  & > ${Text} {
    color: var(--colors-darkBlue);
  }
`;

export const CheckboxStyled = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  margin-left: 11px;
  background-color: var(--colors-blank);
  border: 1px solid ${borderColor};

  ${({ isMouseOver }) => isMouseOver && `
    border-width: 2px;
  `}

  ${({ isMouseOver, selected }) => (isMouseOver || selected) && `
    border-color: var(--colors-irisBlue);
  `}

  ${({ isMouseOver, selected }) => selected && `
    &::before {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      margin: ${isMouseOver ? '1' : '2'}px;
      border-radius: 2px;
      background-color: var(--colors-irisBlue);
    }
  `}
`;
