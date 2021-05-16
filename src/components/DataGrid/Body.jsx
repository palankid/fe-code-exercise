import React from 'react';
import styled from 'styled-components';
import { array, bool } from 'prop-types';

import { TableRow, TableCell } from 'components/Table';
import EmptyBody from './EmptyBody';

export const TableCellStyled = styled(TableCell)`
  text-align: ${({ align }) => align};
`;

const Body = ({ columns, dataProvider, loading }) => (
  <tbody>
    <EmptyBody visible={!dataProvider.length} colSpan={columns.length}  loading={loading} />

    {!loading && dataProvider.map((row, rowIndex) => (
      <TableRow key={`row-${rowIndex}`}>
        {columns.map((column, columnIndex) => {
          const key = `cell-${columnIndex}-${rowIndex}`;
          const data = column.cellRenderer ? column.cellRenderer(row, column) : row[column.key];

          return (
            <TableCellStyled data-testid="cell" key={key} align={column.align}>
              {data}
            </TableCellStyled>
          );
        })}
      </TableRow>
    ))}
  </tbody>
);

Body.propTypes = {
  columns: array.isRequired,
  dataProvider: array.isRequired,
  loading: bool
};

Body.defaultProps = {
  loading: false,
};

export default Body;
