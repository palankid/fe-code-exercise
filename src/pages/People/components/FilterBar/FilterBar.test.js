import { render, screen, fireEvent } from '@testing-library/react';

import useFilters from './useFilters';
import FilterBar from './FilterBar';

jest.mock('./useFilters');

describe('FilterBar', () => {
  const handleEmployeeNameChange = jest.fn();
  const handleEmployeeTypeChange = jest.fn();

  beforeEach(() => {
    useFilters.mockImplementation(() => ({
      employeeNameFilter: '',
      employeeTypeFilter: [],
      handleEmployeeNameChange,
      handleEmployeeTypeChange,
    }));
  });

  it('should verify search input event', () => {
    jest.useFakeTimers();

    render(<FilterBar />);

    const searchInput = screen.getByRole('input');
    fireEvent.change(searchInput, { target: { value: 'John Smith' } });

    jest.advanceTimersByTime(500);

    expect(handleEmployeeNameChange).toHaveBeenCalledWith('John Smith');

    jest.useRealTimers();
  });

  it('should verify checkbox change events', () => {
    render(<FilterBar />);

    const checkBox = screen.getAllByRole('button');
    fireEvent.click(checkBox[0]);
    fireEvent.click(checkBox[1]);

    expect(handleEmployeeTypeChange).toHaveBeenCalledWith(['contractor', 'employee']);
  });
});
