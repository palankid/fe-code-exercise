import { render, screen, fireEvent } from '@testing-library/react';

import PageHeader from './PageHeader';
import usePageHeader from './usePageHeader';

jest.mock('./usePageHeader');

describe('PageHeader', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    usePageHeader.mockImplementation(() => ({
      selectedPeopleText: '',
      handleClick,
    }));
  });

  it('should find page title', () => {
    render(<PageHeader />);

    const title = screen.getByText('People');

    expect(title).toBeInTheDocument();
  });

  it('should fire a click event', () => {
    render(<PageHeader />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
