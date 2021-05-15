import React from 'react';
import { string, number } from 'prop-types';

import { Container, Input, StyledSearchIcon } from './SearchInput.styled';

const SearchInput = ({ placeholder, fontSize }) => {
  return (
    <Container>
      <StyledSearchIcon />
      <Input role="input" placeholder={placeholder} fontSize={fontSize} />
    </Container>
  );
};

SearchInput.propTypes = {
  placeholder: string.isRequired,
  fontSize: number,
};

SearchInput.defaultProps = {
  fontSize: 14,
};

export default SearchInput;
