import React from 'react';
import { string } from 'prop-types';

import { Field, Label, Hint } from '../FieldParts';
import { Input } from './TextField.styled';

export default function TextField({ label, helper, errorMsg, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label>{label}</Label>
      <Input {...props} {...invalidAttr} />
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}

TextField.propTypes = {
  label: string.isRequired,
  helper: string,
  errorMsg: string,
};

TextField.defaultProps = {
  helper: '',
  errorMsg: '',
};
