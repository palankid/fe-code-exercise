import React from 'react';
import { array, bool } from 'prop-types';

import { Table } from 'components/Table';

import Header from './Header';
import Body from './Body';

const DataGrid = ({ columns, dataProvider, loading }) => {
  return (
    <Table>
      <Header columns={columns} />
      <Body columns={columns} dataProvider={dataProvider} loading={loading} />
    </Table>
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
