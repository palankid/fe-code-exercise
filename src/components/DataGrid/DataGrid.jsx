import React from 'react';
import { array, bool, string } from 'prop-types';
import styled from 'styled-components';

import { Table } from 'components/Table';

import Header from './Header';
import Body from './Body';

const ScrollableContainer = styled.div`
  overflow-x: auto;
`;

const DataGrid = ({ columns, dataProvider, loading, errorMessage }) => {
  return (
    <ScrollableContainer>
      <Table>
        <Header columns={columns} />
        <Body
          columns={columns}
          dataProvider={dataProvider}
          loading={loading}
          errorMessage={errorMessage}
        />
      </Table>
    </ScrollableContainer>
  );
};

DataGrid.propTypes = {
  columns: array.isRequired,
  dataProvider: array.isRequired,
  loading: bool,
  errorMessage: string,
};

DataGrid.defaultProps = {
  loading: false,
  error: '',
};

export default DataGrid;
