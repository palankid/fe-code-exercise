import React from 'react';

import DataGrid from 'components/DataGrid';
import { NameCell, SalaryCell, LinkCell } from './PeopleGrid.styled';

import usePeople from './usePeople';

const nameCellRenderer = (row, column) => <NameCell>{row.name}</NameCell>;
const salaryCellRenderer = (row, column) => {
  const cellValue = `${row.currency} ${row.salary.toLocaleString()}`;
  return <SalaryCell>{cellValue}</SalaryCell>;
};
const linkCellRenderer = (row, column) => {
  const link = `/people/edit/${row.id}`;
  return <LinkCell to={link}>Edit</LinkCell>;
};

const columns = [
  {
    title: 'Name',
    key: 'name',
    cellRenderer: nameCellRenderer,
  },
  { title: 'Role', key: 'jobTitle' },
  { title: 'Type', key: 'employment' },
  { title: 'Country', key: 'country' },
  {
    title: 'Salary',
    key: 'salary',
    align: 'right',
    cellRenderer: salaryCellRenderer,
  },
  {
    title: '',
    key: 'action',
    cellRenderer: linkCellRenderer,
  },
];

const PeopleGrid = () => {
  const { people, loading, error } = usePeople();

  return (
    <DataGrid
      columns={columns}
      dataProvider={people}
      loading={loading}
      errorMessage={error ? 'Ups, something in our servers went wrong!' : ''}
    />
  );
};

export default PeopleGrid;
