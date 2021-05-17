import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkCell = styled(Link)`
  color: var(--colors-irisBlue);
  text-decoration: none;
  ${({ theme }) => theme?.typography?.bodyMedium};
`;

export const SalaryCell = styled.span`
  text-align: right;
`;

export const NameCell = styled.span`
  ${({ theme }) => theme?.typography?.bodySmallBold};
`;
