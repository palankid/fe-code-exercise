import { renderHook } from '@testing-library/react-hooks';
import useFilters from './useFilters';

import { usePeopleStore, usePeopleDispatch, peopleActions } from 'pages/People/store';

jest.mock('pages/People/store', () => ({
  usePeopleStore: jest.fn(),
  usePeopleDispatch: jest.fn(),
  peopleActions: {
    fetchPeople: jest.fn(),
    filterPeopleByName: jest.fn(),
    filterPeopleByType: jest.fn(),
  },
}));

describe('useFilters', () => {
  const store = {
    employeeTypeFilter: [],
    employeeNameFilter: '',
  };

  it('should test handleEmployeeNameChange', () => {
    usePeopleStore.mockImplementation(() => store);
    usePeopleDispatch.mockImplementation(jest.fn());
    peopleActions.filterPeopleByName.mockImplementation(() => jest.fn());
    peopleActions.fetchPeople.mockImplementation(() => jest.fn());
    const hookComponent = renderHook(() => useFilters());

    const { handleEmployeeNameChange } = hookComponent.result.current;
    handleEmployeeNameChange('Ann');

    expect(peopleActions.filterPeopleByName).toHaveBeenCalledWith(usePeopleDispatch(), 'Ann');
    expect(peopleActions.fetchPeople).toHaveBeenCalledWith(usePeopleDispatch(), {
      employment: [],
      name_like: 'Ann',
    });
  });

  it('should test handleEmployeeTypeChange', () => {
    usePeopleStore.mockImplementation(() => store);
    usePeopleDispatch.mockImplementation(jest.fn());
    peopleActions.filterPeopleByType.mockImplementation(() => jest.fn());
    peopleActions.fetchPeople.mockImplementation(() => jest.fn());
    const hookComponent = renderHook(() => useFilters());

    const { handleEmployeeTypeChange } = hookComponent.result.current;
    handleEmployeeTypeChange(['contractor']);

    expect(peopleActions.filterPeopleByType).toHaveBeenCalledWith(usePeopleDispatch(), [
      'contractor',
    ]);
    expect(peopleActions.fetchPeople).toHaveBeenCalledWith(usePeopleDispatch(), {
      employment: ['contractor'],
      name_like: '',
    });
  });
});
