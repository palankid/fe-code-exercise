import { renderHook } from '@testing-library/react-hooks';
import usePageHeader from './usePageHeader';

import { usePeopleStore } from 'pages/People/store';

jest.mock('pages/People/store', () => ({
  usePeopleStore: jest.fn(),
}));

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('usePageHeader', () => {
  const store = {
    people: [],
    employeeTypeFilter: [],
    employeeNameFilter: '',
    loading: false,
  }

  it('should return empty string if people array is empty', async () => {
    usePeopleStore.mockImplementation(() => store);
    const hookComponent = renderHook(() => usePageHeader());

    const { selectedPeopleText } = hookComponent.result.current;

    expect(selectedPeopleText).toBe('');
  });

  it('should return "1 employee"', async () => {
    usePeopleStore.mockImplementation(() => ({
      ...store,
      people: [{id: 1}]
    }));
    const hookComponent = renderHook(() => usePageHeader());

    const { selectedPeopleText } = hookComponent.result.current;

    expect(selectedPeopleText).toBe('1 employee');
  });

  it('should return "3 employees"', async () => {
    usePeopleStore.mockImplementation(() => ({
      ...store,
      people: [{id: 1}, {id: 2}, { id: 3 }]
    }));
    const hookComponent = renderHook(() => usePageHeader());

    const { selectedPeopleText } = hookComponent.result.current;

    expect(selectedPeopleText).toBe('3 employees');
  });

  it('should trigger a history.push call', async () => {
    usePeopleStore.mockImplementation(() => store);
    const hookComponent = renderHook(() => usePageHeader());

    const { handleClick } = hookComponent.result.current;
    handleClick();

    expect(mockHistoryPush).toHaveBeenCalledWith('/people/new');
  });
});
