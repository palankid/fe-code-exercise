import React from 'react';

import DataGrid from 'components/DataGrid';
import { NameCell, SalaryCell, LinkCell } from './PeopleGrid.styled';

import useFilteredPeople from './useFilteredPeople';

const nameCellRenderer = (row, column) => <NameCell>{row.name}</NameCell>;
const salaryCellRenderer = (row, column) => {
  const cellValue = `${row.currency} ${row.salary.toLocaleString()}`;
  return <SalaryCell>{cellValue}</SalaryCell>
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
  const { filteredPeople, loading } = useFilteredPeople();

  return <DataGrid columns={columns} dataProvider={filteredPeople} loading={loading} />;
};

export default PeopleGrid;
