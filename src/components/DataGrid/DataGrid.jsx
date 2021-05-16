import React from 'react';
import { array, bool } from 'prop-types';
import styled from 'styled-components';

import { Table } from 'components/Table';

import Header from './Header';
import Body from './Body';

const ScrollableContainer = styled.div`
  overflow-x: auto;
`;

const DataGrid = ({ columns, dataProvider, loading }) => {
  return (
    <ScrollableContainer>
      <Table>
        <Header columns={columns} />
        <Body columns={columns} dataProvider={dataProvider} loading={loading} />
      </Table>
    </ScrollableContainer>
  );
};

DataGrid.propTypes = {
  columns: array.isRequired,
  dataProvider: array.isRequired,
  loading: bool,
};

DataGrid.defaultProps = {
  loading: false,
}

export default DataGrid;
