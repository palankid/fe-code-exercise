import { useEffect } from 'react';

import { usePeopleStore, usePeopleDispatch, peopleActions } from 'pages/People/store';

const peopleSelector = ({ people, employeeTypeFilter, employeeNameFilter }) =>
  people.filter(({ name, employment }) => {
    const isValidEmployeeTypeFilter =
      !employeeTypeFilter.length || employeeTypeFilter.includes(employment);
    const isValidEmployeeNameFilter =
      !employeeNameFilter || name.toLowerCase().includes(employeeNameFilter.toLowerCase());

    return isValidEmployeeTypeFilter && isValidEmployeeNameFilter;
  });

const useFilteredPeople = () => {
  const store = usePeopleStore();
  const dispatch = usePeopleDispatch();
  const filteredPeople = peopleSelector(store);

  useEffect(() => {
    !store.people.length && peopleActions.fetchPeople(dispatch);
  }, [store.people, dispatch]);

  return { filteredPeople, loading: store.loading };
}

export default useFilteredPeople;
