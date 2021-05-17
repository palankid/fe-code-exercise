import React from 'react';

import SearchInput from 'components/SearchInput';
import CheckboxGroup from 'components/Checkbox';
import debounce from 'utils/debounce';

import { usePeopleStore, usePeopleDispatch, peopleActions } from 'pages/People/store';
import { Wrapper } from './FilterBar.styled';

const options = [
  { label: 'Contractor', value: 'contractor' },
  { label: 'Employee', value: 'employee' },
];

const debouncedFilterPeopleByName = debounce(peopleActions.filterPeopleByName, 500);

const FilterBar = () => {
  const store = usePeopleStore();
  const dispatch = usePeopleDispatch();

  const handleEmployeeNameChange = (value) => {
    debouncedFilterPeopleByName(dispatch, value);
  };

  const handleEmployeeTypeChange = (selectedValues) => {
    peopleActions.filterPeopleByRole(dispatch, selectedValues);
  };

  return (
    <Wrapper>
      <SearchInput
        placeholder="Search by name..."
        defaultValue={store.employeeNameFilter}
        onChange={handleEmployeeNameChange}
      />
      <CheckboxGroup
        options={options}
        selectedValues={store.employeeTypeFilter}
        gap={15}
        onChange={handleEmployeeTypeChange}
      />
    </Wrapper>
  );
};

export default FilterBar;
