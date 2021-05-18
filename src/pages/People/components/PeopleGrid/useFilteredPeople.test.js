import { renderHook } from '@testing-library/react-hooks';
import useFilteredPeople from './useFilteredPeople';

import { usePeopleStore } from 'pages/People/store';

jest.mock('pages/People/store', () => ({
  usePeopleStore: jest.fn(),
  usePeopleDispatch: jest.fn(),
  peopleActions: {
    fetchPeople: jest.fn()
  }
}));

describe('useFilteredPeople', () => {
  const person1 = { name: 'John Smith', employment: 'contractor' };
  const person2 = { name: 'Anne Henry', employment: 'employee' };
  const person3 = { name: 'Vittoria Janson', employment: 'employee' };
  const person4 = { name: 'Annette Williamson', employment: 'employee' };
  const person5 = { name: 'Jane Doe', employment: 'contractor' };
  const store = {
    people: [person1, person2, person3, person4, person5],
    employeeTypeFilter: [],
    employeeNameFilter: '',
    loading: false,
  }

  it('should not filter any records when no filter is set', async () => {
    usePeopleStore.mockImplementation(() => store);
    const hookComponent = renderHook(() => useFilteredPeople());

    const { filteredPeople } = hookComponent.result.current;

    expect(filteredPeople.length).toBe(5);
  });

  it('should select people, whose name includes "ne"', async () => {
    usePeopleStore.mockImplementation(() => ({
      ...store,
      employeeNameFilter: 'ne'
    }));
    const hookComponent = renderHook(() => useFilteredPeople());
    const expected = [person2, person4, person5];

    const { filteredPeople } = hookComponent.result.current;

    expect(filteredPeople).toEqual(expected);
  });

  it('should select all contractors', async () => {
    usePeopleStore.mockImplementation(() => ({
      ...store,
      employeeTypeFilter: ['contractor']
    }));
    const hookComponent = renderHook(() => useFilteredPeople());
    const expected = [person1, person5];

    const { filteredPeople } = hookComponent.result.current;

    expect(filteredPeople).toEqual(expected);
  });

  it('should select those employees, whose name includes "ne"', async () => {
    usePeopleStore.mockImplementation(() => ({
      ...store,
      employeeNameFilter: 'ne',
      employeeTypeFilter: ['employee']
    }));
    const hookComponent = renderHook(() => useFilteredPeople());
    const expected = [person2, person4];

    const { filteredPeople } = hookComponent.result.current;

    expect(filteredPeople).toEqual(expected);
  });
});
