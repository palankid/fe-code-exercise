import styled from 'styled-components';

import { ReactComponent as SearchIcon } from 'theme/icons/search.svg';

const borderColor = '#E7EFFC';
const iconSize = '16px';

export const Container = styled.div`
  position: relative;
`;

export const Input = styled.input`
  font-size: ${props => props.fontSize}px;
  border: 1px solid transparent;
  border-radius: 20px;
  outline: none;
  padding: 11px 5px 11px 40px;
  color: var(--colors-darkBlue);
  background-color: transparent;

  &::placeholder {
    color: var(--colors-lynch);
  }

  &:hover {
    &::placeholder {
      color: var(--colors-lynch);
    }
  }

  &:hover,
  &:focus {
    border: 1px solid ${borderColor};
    box-shadow: inset 1px 2px 1px ${borderColor};
    background-color: var(--colors-blank);
  }

  &:focus {
    &::placeholder {
      color: var(--colors-bayoux);
    }
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  width: ${iconSize};
  height: ${iconSize};
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: ${iconSize};
  fill: var(--colors-lynch);
  pointer-events: none;
`;
