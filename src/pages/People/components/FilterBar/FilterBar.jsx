import React from 'react';

import SearchInput from 'components/SearchInput';
import CheckboxGroup from 'components/Checkbox';

import useFilters from './useFilters';
import { Wrapper } from './FilterBar.styled';

const options = [
  { label: 'Contractor', value: 'contractor' },
  { label: 'Employee', value: 'employee' },
];

const FilterBar = () => {
  const filters = useFilters();

  return (
    <Wrapper>
      <SearchInput
        placeholder="Search by name..."
        defaultValue={filters.employeeNameFilter}
        debounced
        onChange={filters.handleEmployeeNameChange}
      />
      <CheckboxGroup
        options={options}
        selectedValues={filters.employeeTypeFilter}
        gap={15}
        onChange={filters.handleEmployeeTypeChange}
      />
    </Wrapper>
  );
};

export default FilterBar;
