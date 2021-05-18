import { render, screen } from '@testing-library/react';
import Header from './Header';

import { Table } from 'components/Table';

describe('Header', () => {
  const columns = [
    { title: 'Employee Name', key: 'name' },
    { title: 'Age', key: 'age' },
    { title: 'E-mail', key: 'email' },
    { title: 'Salary', key: 'salary', align: 'right' },
  ];
  const dataProvider = [
    { name: 'John Smith', age: 25, email: 'johnsmith@there.com', salary: 35000, currency: 'EUR' },
    { name: 'Mary Jones', age: 34, email: 'maryjones@there.com', salary: 45000, currency: 'USD' },
  ];

  it('renders correctly', () => {
    render(
      <Table>
        <Header columns={columns} dataProvider={dataProvider} />
      </Table>
    );

    const cells = screen.getAllByRole('cell');

    expect(cells).toHaveLength(4);
    cells.forEach((cell, idx) => {
      expect(cell.innerHTML).toEqual(columns[idx].title);
    });
  });
});
