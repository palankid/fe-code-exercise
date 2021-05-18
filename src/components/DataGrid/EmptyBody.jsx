import React from 'react';
import { bool, number } from 'prop-types';
import styled from 'styled-components';

import { TableRow, TableCell } from 'components/Table';
import LoadingLogo from 'components/LoadingLogo';

export const TableCellStyled = styled(TableCell)`
  height: 240px;
  text-align: center;
  border: 0;
`;

const EmptyBody = ({ visible, loading, colSpan }) => {
  if (!visible) return null;

  return (
    <TableRow data-testid="empty-row">
      <TableCellStyled colSpan={colSpan}>
        {loading && <LoadingLogo data-testid="loading-logo" />}
      </TableCellStyled>
    </TableRow>
  );
};

EmptyBody.propTypes = {
  visible: bool,
  loading: bool,
  colSpan: number,
};

EmptyBody.defaultProps = {
  visible: true,
  loading: false,
  colSpan: 1,
};

export default EmptyBody;
