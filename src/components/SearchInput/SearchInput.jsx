import React from 'react';
import { string, number, func } from 'prop-types';

import { Container, Input, StyledSearchIcon } from './SearchInput.styled';

const SearchInput = ({ placeholder, fontSize, onChange, ...rest }) => {

  const handleChange = (event) => {
    event.preventDefault();
    onChange(event.target.value);
  }

  return (
    <Container>
      <StyledSearchIcon />
      <Input
        role="input"
        placeholder={placeholder}
        fontSize={fontSize}
        onChange={handleChange}
        {...rest}
      />
    </Container>
  );
};

SearchInput.propTypes = {
  placeholder: string.isRequired,
  onChange: func.isRequired,
  fontSize: number,
};

SearchInput.defaultProps = {
  fontSize: 14,
};

export default SearchInput;
