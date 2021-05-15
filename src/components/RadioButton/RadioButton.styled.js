import styled from 'styled-components';

import Text from 'components/Text';

export const Wrapper = styled.button`
  display: inline-block;
  outline: none;
  min-height: 40px;
  padding: 0 20px;
  background-color: white;  // Todo
  border: 1.5px solid #CBD3DC;
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--colors-linkWater);
    border-color: #B7B8EB;
  }

  &:focus,
  &:active {
    box-shadow: 0 0 1px 1px var(--colors-irisBlue);
  }

  ${({ selected }) => selected && `
    background-color: var(--colors-linkWater);
    border-color: #B7B8EB;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  & > ${Text} {
    color: var(--colors-darkBlue);
  }
`;

export const LabelWrapper = styled.div`
  padding: 16px 0;

  & > ${Text} {
    display: block;
    text-align: left;
  }

  & > .title {
    ${({ theme }) => theme?.typography?.bodySmallBold}
    color: var(--colors-darkBlue);
  }

  & > .description {
    ${({ theme }) => theme?.typography?.getTextStyles?.(400, '12px', 1.23)}
    margin-top: 4px;
    color: var(--colors-lynch);
  }
`;

export const Radio = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  margin-left: 11px;
  background-color: var(--colors-blank);
  border: 1px solid #617798;

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
      border-radius: 4px;
      background-color: var(--colors-irisBlue);
    }
  `}
`;
