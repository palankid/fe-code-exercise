import { render, screen } from '@testing-library/react';
import Body from './Body';

import { Table } from 'components/Table';

describe('Body', () => {
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

  it('populates the grid', () => {
    render(
      <Table>
        <Body columns={columns} dataProvider={dataProvider} loading={false} />
      </Table>
    );

    const cells = screen.getAllByTestId('cell');

    expect(cells).toHaveLength(8);
    expect(cells[0].innerHTML).toEqual('John Smith');
    expect(cells[7].innerHTML).toEqual('45000');
  });

  it('renders the loading state', () => {
    render(
      <Table>
        <Body columns={columns} dataProvider={[]} loading />
      </Table>
    );

    const cells = screen.queryAllByTestId('cell');
    const emptyRow = screen.getByTestId('empty-row');

    expect(cells).toHaveLength(0);
    expect(emptyRow).toBeInTheDocument();
  });
});
