import { usePeopleStore, usePeopleDispatch, peopleActions } from 'pages/People/store';

const useFilters = () => {
  const { employeeNameFilter, employeeTypeFilter } = usePeopleStore();
  const dispatch = usePeopleDispatch();

  const handleEmployeeNameChange = (value) => {
    peopleActions.filterPeopleByName(dispatch, value);
    peopleActions.fetchPeople(dispatch, {
      employment: employeeTypeFilter,
      name_like: value,
    });
  };

  const handleEmployeeTypeChange = (selectedValues) => {
    peopleActions.filterPeopleByType(dispatch, selectedValues);
    peopleActions.fetchPeople(dispatch, {
      employment: selectedValues,
      name_like: employeeNameFilter,
    });
  };

  return {
    employeeNameFilter,
    employeeTypeFilter,
    handleEmployeeNameChange,
    handleEmployeeTypeChange,
  };
};

export default useFilters;
