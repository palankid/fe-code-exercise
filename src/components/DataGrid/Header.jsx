import React from 'react';
import styled from 'styled-components';
import { array } from 'prop-types';

import { TableThCell } from 'components/Table';

export const TableThCellStyled = styled(TableThCell)`
  text-align: ${({ align }) => align};
`;

const Header = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((column) => {
        return (
          <TableThCellStyled role="cell" key={column.key} align={column.align}>
            {column.title}
          </TableThCellStyled>
        );
      })}
    </tr>
  </thead>
);

Header.propTypes = {
  columns: array.isRequired,
};

export default Header;
