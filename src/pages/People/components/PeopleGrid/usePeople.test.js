import { renderHook } from '@testing-library/react-hooks';
import usePeople from './usePeople';

import { usePeopleStore } from 'pages/People/store';

jest.mock('pages/People/store', () => ({
  usePeopleStore: jest.fn(),
  usePeopleDispatch: jest.fn(),
  peopleActions: {
    fetchPeople: jest.fn()
  }
}));

describe('usePeople', () => {
  const person1 = { name: 'John Smith', employment: 'contractor' };
  const person2 = { name: 'Anne Henry', employment: 'employee' };
  const person3 = { name: 'Vittoria Janson', employment: 'employee' };
  const store = {
    people: [person1, person2, person3],
    employeeTypeFilter: [],
    employeeNameFilter: '',
    loading: false,
  }

  it('should return people and loading status', async () => {
    usePeopleStore.mockImplementation(() => store);
    const hookComponent = renderHook(() => usePeople());

    const { people, loading } = hookComponent.result.current;

    expect(people.length).toBe(3);
    expect(loading).toBe(false);
  });
});
