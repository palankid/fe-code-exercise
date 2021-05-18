import React, { useState, useCallback } from 'react';
import { string, number, func, bool } from 'prop-types';

import { debounce } from 'utils/functions.utils';

import { Container, Input, StyledSearchIcon } from './SearchInput.styled';

const SearchInput = ({ placeholder, fontSize, onChange, debounced, ...rest }) => {
  const [, setValue] = useState('');

  /* eslint-disable react-hooks/exhaustive-deps */
  const debouncedOnChange = useCallback(
    debounce((nextValue) => onChange(nextValue), 500),
    []
  );

  const handleChange = (event) => {
    const { value } = event.target;
    event.preventDefault();

    if (debounced) {
      setValue(value);
      debouncedOnChange(value);
      return;
    }

    onChange(value);
  };

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
  debounced: bool,
};

SearchInput.defaultProps = {
  fontSize: 14,
  debounced: false,
};

export default SearchInput;
