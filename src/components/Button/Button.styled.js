import styled, { keyframes } from 'styled-components';

const borderColor = '#D0CAF7';

export const ButtonStyled = styled.button`
  ${({ theme }) => theme?.typography?.bodyMedium}
  min-height: 44px;
  min-width: 182px;
  border: none;
  border-radius: 24px;
  cursor: pointer;

  ${({ outline }) =>
    outline
      ? `
    background: transparent;
    border 2px solid ${borderColor};
    color: var(--colors-irisBlue);

    &:hover {
      background: #EFEDFC;
    }

    &:focus {
      border-width: 3px;
    }
  `
      : `
    background: var(--colors-irisBlue);
    color: var(--colors-blank);

    &:hover {
      background: #4E3DB5;
    }

    &:focus {
      border 3px solid ${borderColor};
    }
  `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-bottom: 1px;
  vertical-align: text-bottom;
  animation: ${rotate} 2s linear infinite;
`;

export const ProgressIcon = ({ outline, ...props }) => (
  <Wrapper {...props}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="8" stroke="#D0CAF7" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M17.0001 8.52941C17.0001 4.37103 13.6291 1 9.4707 1"
        stroke={outline ? '#624DE3' : '#FFFFFF'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </Wrapper>
);
