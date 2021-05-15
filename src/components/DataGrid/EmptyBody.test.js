import { render, screen } from '@testing-library/react';
import EmptyBody from './EmptyBody';

import { Table } from 'components/Table';

describe('EmptyBody', () => {
  it('renders loading state', () => {
    render(
      <Table>
        <tbody>
          <EmptyBody visible loading />
        </tbody>
      </Table>
    );

    const logo = screen.getByTestId('loading-logo');

    expect(logo).toBeInTheDocument();
  });

  it('renders empty state', () => {
    render(
      <Table>
        <tbody>
          <EmptyBody visible loading={false} />
        </tbody>
      </Table>
    );

    const logo = screen.queryByTestId('loading-logo');
    const row = screen.getByTestId('empty-row');

    expect(logo).not.toBeInTheDocument();
    expect(row).toBeInTheDocument();
  });

  it('renders invisible state', () => {
    render(
      <Table>
        <tbody>
          <EmptyBody visible={false} loading={false} />
        </tbody>
      </Table>
    );

    const row = screen.queryByTestId('empty-row');

    expect(row).not.toBeInTheDocument();
  });
});
