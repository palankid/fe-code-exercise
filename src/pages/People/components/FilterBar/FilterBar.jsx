import React from 'react';
import styled from 'styled-components';

import SearchInput from 'components/SearchInput';
import CheckboxGroup from 'components/Checkbox';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const options = [
  { label: 'Contractor', value: 'contractor' },
  { label: 'Employee', value: 'employee' },
];

const FilterBar = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="Search by name..." />
      <CheckboxGroup
          options={options}
          selectedValues={[]}
          gap={15}
          onChange={(selectedValues) => console.log(selectedValues)}
        />
    </Wrapper>
  );
};

export default FilterBar;
